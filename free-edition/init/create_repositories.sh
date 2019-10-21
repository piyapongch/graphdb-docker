#!/bin/bash
GRAPDB_HOST=http://localhost:7200
REPOS="audit fedora"

cd /opt/graphdb/init/
for REPO in $REPOS; do
  RESP=$(curl -X GET --header 'Accept: text/plain' $GRAPDB_HOST'/repositories/'$REPO'/size')
  if [ "$RESP" = "Unknown repository: $REPO" ]; then
    echo "$REPO not found, will create one..."
    curl -X POST -H 'Content-Type: application/json' -H 'Accept: text/plain' -d @$REPO.json $GRAPDB_HOST'/rest/repositories'
    curl -X GET $GRAPDB_HOST/repositories/$REPO/size
    echo "$REPO created!"
  else
    echo "$REPO exist!"
  fi
done

cp owlim.properties /opt/graphdb/home/data/repositories/fedora/storage/
cp owlim.properties /opt/graphdb/home/data/repositories/audit/storage/
