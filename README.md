This keeps the infrastructure that builds docker images for [GraphDB](http://graphdb.ontotext.com/)

Check [Docker Hub Images](https://hub.docker.com/r/ontotext/graphdb/) for information on how to use the images.

Note that to use GraphDB EE or SE docker images, you must get a license from us first.

Currently there are no public images for GraphDB Free and you will have to
build those if needed from the zip distribution that you get after registering
on our website.

# Building a docker image based on the free edition

You will need docker, docker-compose and make installed on your machine.

1. Checkout this repository and change diriectory to your local repository
1. Register on the Ontotext website for the GraphDB Free edition. Download the zip file and place it in the *free-edition* subdirectory
1. Run
```shell
make free VERSION=<the-version-that-you-got>
```

for example the most recent version as of this writing is 9.2.0 so run
```shell
make free VERSION=9.2.0
```

this will build an image that you can use called pcharoen/graphdb:9.2.0-free.
Create import directory on your machine
```shell
mkdir -p /opt/graphdb/home/import
```
You will need docker-compose to run the image.
```shell
docker-compose up -d
```
You can stop the container with
```shell
docker-compose stop
```
You can restart the container with
```shell
docker-compose start
```
You can remove the container with
```shell
docker-compose down
```

Consult the docker hub documentation for more information.


# Issues

You can report issues in the GitHub issue tracker or at graphdb-support at ontotext.com


# Contributing

You are invited to contribute new features, fixes, or updates, large or small;
we are always thrilled to receive pull requests, and do our best to process
them as fast as we can.

Before you start to code, we recommend discussing your plans through a GitHub
issue, especially for more ambitious contributions. This gives other
contributors a chance to point you in the right direction, give you feedback on
your design, and help you find out if someone else is working on the same
thing.

# Making changes to the images and building your own version

The following command should be able to build you a custom image that takes your local changes into account

```shell
make ee VERSION=<version-of-graphdb-you-want>
```
for the enterprise edition and

```shell
make se VERSION=<version-of-graphdb-you-want>
```

for the standard edition.
