#!/bin/bash

echo "starting graphdb..."
/opt/graphdb/dist/bin/graphdb -d
sleep 10

echo "creating repositories..."
cd /opt/graphdb/init
./create_repositories.sh

echo "graphdb started!"