VERSION=9.1.1

free:
<<<<<<< HEAD
	docker build --build-arg edition=free --build-arg version=${VERSION} -t pcharoen/graphdb:${VERSION}-free free-edition
=======
	docker build --no-cache --pull --build-arg edition=free --build-arg version=${VERSION} -t ontotext/graphdb:${VERSION}-free free-edition
>>>>>>> upstream/master

ee:
	docker build --no-cache --pull --build-arg edition=ee --build-arg version=${VERSION} -t ontotext/graphdb:${VERSION}-ee .

se:
	docker build --no-cache --pull --build-arg edition=se --build-arg version=${VERSION} -t ontotext/graphdb:${VERSION}-se .

ee-upload: ee
	docker push ontotext/graphdb:${VERSION}-ee

se-upload: se
	docker push ontotext/graphdb:${VERSION}-se
