from elasticsearch import Elasticsearch
es=Elasticsearch([{"host":"39.108.159.117","port":62122}])
print(es.cluster.state())
