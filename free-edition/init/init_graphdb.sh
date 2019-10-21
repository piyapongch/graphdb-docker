#!/bin/bash

echo "starting graphdb..."
/opt/graphdb/dist/bin/graphdb -d
sleep 10

echo "creating repositories..."
cd /opt/graphdb/init
./create_repositories.sh
#cp owlim.properties /opt/graphdb/home/data/repositories/fedora/storage/
#cp owlim.properties /opt/graphdb/home/data/repositories/audit/storage/

echo "graphdb started!"