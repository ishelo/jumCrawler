#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2018-11-13 10:37:18
# @Author  : Your Name (you@example.org)
# @Link    : http://example.org
# @Version : $Id$
#财经学院
import scrapy
import requests
import re
from jimei.items import JimeiItem
class Try(scrapy.Spider):
	name="cjc"
	allowed_domains = ["cjc.jmu.edu.cn"]
	url="http://cjc.jmu.edu.cn/"
	start_urls=["http://cjc.jmu.edu.cn/"]

	def parse(self,response):
		selector = scrapy.Selector(response)
		top_menus=selector.css("td[class='flyoutLink'] a::attr(href)").extract()
		other_urls=selector.css("div[align=right] a::attr(href)").extract()
		right_urls=selector.css("table[class='tbl_ArticlePortlet_picTitleClass'] a::attr(href)").extract()
		s=r"<a href=\'(.*?)\' title"
		pattern=re.compile(s)
		menus=pattern.findall(str(response.body,encoding='utf-8'))
		for top_menu in top_menus:
			if "http" not in top_menu and "index.ht" not in top_menu:
				menus.append(top_menu)
		for other_url in other_urls:
			menus.append(other_url)
		for right_url in right_urls:
			menus.append(right_url)
		menus=set(menus)
		for menu in menus:
			menu1=self.url+menu
			print(menu1)
			yield scrapy.Request(url=menu1,callback=self.parse_info)
	def parse_info(self,response):  # 这里没有爬取
		selector = scrapy.Selector(response)
		infos=set(selector.xpath('//tr[re:test(@id, "line_u4_\\d*")]//a//@href').extract()) #得到每个菜单栏链接页面的所有info/*.html链接
		next=selector.xpath("//a[@class='Next']/@href").extract()
		if next:  # 假如有下一页继续爬取
			next=next[0]
			word="".join(response.url.split("/")[-1:])
			head_url=response.url.replace(word,"")
			nextUrl=head_url+next
			yield scrapy.Request(url=nextUrl,callback=self.parse_info)
		for info in infos:
			if "http" not in info:
				info=self.url+info
				if "../" in info:
					info=info.replace("../","")
				if "info" in info:
					yield scrapy.Request(url=info,callback=self.parse_text)
	def parse_text(self,response):
		selector= scrapy.Selector(response)
		title=selector.xpath("//title/text()").extract()[0] #得到页面的标题
		url=response.url  #页面链接
		content=selector.css("div[id='vsb_content'] *:not(style)::text").extract()#得到页面的内容
		content="".join(content).replace(u'\r\n','').replace(u'\xa0',u'').replace(' ','').replace('\'','').replace('\"','')
		#filename="infos/cjc.txt"
		#with open(filename, 'a+',encoding='utf-8') as f:
		#	f.write(url+title+'\n')
		item=JimeiItem()
		item['url']=url
		item['title']=title
		item['content']=content
		yield item