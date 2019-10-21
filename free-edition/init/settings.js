{
  "users" : {
    "admin" : {
      "username" : "admin",
      "password" : "fb614164d8d58429e9d90d380b90f382d33cd0f3e3a63f90b902471739936554",
      "grantedAuthorities" : [ "ROLE_ADMIN", "ROLE_USER", "ROLE_REAL_USER", "ROLE_REPO_ADMIN" ],
      "appSettings" : {
        "DEFAULT_INFERENCE" : true,
        "DEFAULT_SAMEAS" : true,
        "EXECUTE_COUNT" : true
      },
      "dateCreated" : 1515914135802
    }
  },
  "queries" : {
    "Find Objects by LastModified" : {
      "name" : "Find Objects by LastModified",
      "body" : "PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nPREFIX fedora: <http://fedora.info/definitions/v4/repository#>\nselect ?s ?p ?date \nwhere {\n  ?s fedora:lastModified ?date .\n  FILTER (?date > \"2018-04-13T00:00:00.000Z\"^^xsd:dateTime && ?date < \"2018-04-13T23:59:59.999Z\"^^xsd:dateTime)\n}\n"
    },
    "List All FixityServices" : {
      "name" : "List All FixityServices",
      "body" : "SELECT ?s ?p ?o \nWHERE {\n  ?s \t<http://fedora.info/definitions/v4/repository#hasFixityService> ?o .\n}\nLIMIT 50\n"
    },
    "List All Predicates" : {
      "name" : "List All Predicates",
      "body" : "SELECT ?p (COUNT(*) AS ?count)\nWHERE {\n   ?s ?p ?o .\n}\nGROUP BY ?p\nORDER by ?p\n"
    },
    "Add statements" : {
      "name" : "Add statements",
      "body" : "PREFIX dc: <http://purl.org/dc/elements/1.1/>\nINSERT DATA\n      {\n      GRAPH <http://example> {\n          <http://example/book1> dc:title \"A new book\" ;\n                                 dc:creator \"A.N.Other\" .\n          }\n      }"
    },
    "Lucene: Create pcdm_object connector" : {
      "name" : "Lucene: Create pcdm_object connector",
      "body" : "PREFIX :<http://www.ontotext.com/connectors/lucene#>\nPREFIX inst:<http://www.ontotext.com/connectors/lucene/instance#>\nINSERT DATA {\n\tinst:pcdm_object :createConnector '''\n{\n  \"fields\": [\n    {\n      \"fieldName\": \"title\",\n      \"propertyChain\": [\n        \"http://purl.org/dc/terms/title\"\n      ],\n      \"indexed\": true,\n      \"stored\": true,\n      \"analyzed\": true,\n      \"multivalued\": true,\n      \"facet\": true\n    },\n    {\n      \"fieldName\": \"creator\",\n      \"propertyChain\": [\n        \"http://purl.org/dc/elements/1.1/creator\"\n      ],\n      \"indexed\": true,\n      \"stored\": false,\n      \"analyzed\": true,\n      \"multivalued\": true,\n      \"facet\": true\n    },\n    {\n      \"fieldName\": \"subject\",\n      \"propertyChain\": [\n        \"http://purl.org/dc/elements/1.1/subject\"\n      ],\n      \"indexed\": true,\n      \"stored\": false,\n      \"analyzed\": true,\n      \"multivalued\": true,\n      \"facet\": true\n    }\n  ],\n  \"types\": [\n    \"http://pcdm.org/models#Object\"\n  ],\n  \"stripMarkup\": false\n}\n''' .\n}"
    },
    "List All Versions" : {
      "name" : "List All Versions",
      "body" : "SELECT ?s ?p ?o \nWHERE {\n  ?s \t<http://fedora.info/definitions/v4/repository#hasVersions> ?o .\n}\nLIMIT 50\n"
    },
    "Find Triple using RegEx" : {
      "name" : "Find Triple using RegEx",
      "body" : "select ?s ?p ?o\nwhere { \n  ?s ?p ?o .\n  FILTER regex(str(?o), \"alberta\", \"i\")\n}\n"
    },
    "Lucene: Search using pcdm_object" : {
      "name" : "Lucene: Search using pcdm_object",
      "body" : "PREFIX : <http://www.ontotext.com/connectors/lucene#>\nPREFIX inst: <http://www.ontotext.com/connectors/lucene/instance#>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nSELECT ?entity ?t ?c ?s where {\n  ?search a inst:pcdm_object ;\n      :query \"creator:john OR title:alberta OR subject:Bacteria\" ;\n      # Fields for sorting must be defined with multivalued = false. \n      # :orderBy \"creator\";\n      :offset 2;\n      :limit 10;\n      :entities ?entity .\n      ?entity dcterms:title ?t .\n      ?entity dc:creator ?c .\n      ?entity dc:subject ?s .\n      ?entity :score ?score\n}\nlimit 100"
    },
    "Lucene: Basic Facets Queries" : {
      "name" : "Lucene: Basic Facets Queries",
      "body" : "PREFIX : <http://www.ontotext.com/connectors/lucene#>\nPREFIX inst: <http://www.ontotext.com/connectors/lucene/instance#>\n\nSELECT ?facetName ?facetValue ?facetCount WHERE {\n  # note empty query is allowed and will just match all documents, hence no :query\n  ?r a inst:pcdm_object ;\n    :facetFields \"subject,creator\" ;\n    :facets _:f .\n  _:f :facetName ?facetName .\n  _:f :facetValue ?facetValue .\n  _:f :facetCount ?facetCount .\n}\n# LIMIT 100\n"
    },
    "List Explicit Context" : {
      "name" : "List Explicit Context",
      "body" : "select ?s ?p ?o\nfrom <http://www.ontotext.com/explicit>\nwhere {\n    ?s ?p ?o .\n} order by ?s \nlimit 100"
    },
    "List All Departments" : {
      "name" : "List All Departments",
      "body" : "PREFIX ual: <http://terms.library.ualberta.ca/>\nselect ?o (count(*) as ?n) where { \n\t?s ual:department ?o .\n}\ngroup by ?o\norder by ?o\n"
    },
    "List All MineTypes" : {
      "name" : "List All MineTypes",
      "body" : "SELECT ?s ?p ?o \nWHERE {\n  ?s \t<http://fedora.info/definitions/v4/repository#mimeType> ?o .\n}\nLIMIT 50\n"
    },
    "Lucene: Snippet extraction" : {
      "name" : "Lucene: Snippet extraction",
      "body" : "PREFIX : <http://www.ontotext.com/connectors/lucene#>\nPREFIX inst: <http://www.ontotext.com/connectors/lucene/instance#>\n\nSELECT ?entity ?snippetField ?snippetText {\n  ?search a inst:pcdm_object ;\n      :query \"title:alberta\" ;\n      :entities ?entity .\n  ?entity :snippets _:s .\n  _:s :snippetField ?snippetField ;\n     :snippetText ?snippetText .\n}"
    },
    "Lucene: List Connectors" : {
      "name" : "Lucene: List Connectors",
      "body" : "PREFIX : <http://www.ontotext.com/connectors/lucene#>\n\nSELECT ?cntUri ?cntStr {\n  ?cntUri :listConnectors ?cntStr .\n}"
    },
    "Count Number of Triples" : {
      "name" : "Count Number of Triples",
      "body" : "SELECT (COUNT(*) AS ?count)\nWHERE {\n  ?s ?p ?o .\n}\n"
    },
    "SPARQL Select template" : {
      "name" : "SPARQL Select template",
      "body" : "SELECT ?s ?p ?o\nWHERE {\n\t?s ?p ?o .\n} LIMIT 100"
    },
    "Lucene: Drop pcdm_object connector" : {
      "name" : "Lucene: Drop pcdm_object connector",
      "body" : "PREFIX : <http://www.ontotext.com/connectors/lucene#>\nPREFIX inst: <http://www.ontotext.com/connectors/lucene/instance#>\nINSERT DATA {\n  inst:pcdm_object :dropConnector \"\" .\n}"
    },
    "Find Objects by ContentModel" : {
      "name" : "Find Objects by ContentModel",
      "body" : "PREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX fedora: <http://fedora.info/definitions/v4/repository#>\nPREFIX model: <info:fedora/fedora-system:def/model#>\nselect ?s ?p ?o\nwhere {\n    ?s model:hasModel \"IRItem\" .\n    ?s ?p ?o .\n}\norder by ?s\nlimit 100"
    },
    "Remove statements" : {
      "name" : "Remove statements",
      "body" : "PREFIX dc: <http://purl.org/dc/elements/1.1/>\nDELETE DATA\n{\nGRAPH <http://example> {\n    <http://example/book1> dc:title \"A new book\" ;\n                           dc:creator \"A.N.Other\" .\n    }\n}"
    },
    "Find LastModified Items" : {
      "name" : "Find LastModified Items",
      "body" : "PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nPREFIX fedora: <http://fedora.info/definitions/v4/repository#>\nPREFIX model: <info:fedora/fedora-system:def/model#>\nselect ?s ?p ?date \nwhere {\n  ?s fedora:lastModified ?date .\n  ?s model:hasModel \"IRItem\" .\n#  FILTER (?date > \"2018-04-13T00:00:00.000Z\"^^xsd:dateTime && ?date < \"2018-04-13T23:59:59.999Z\"^^xsd:dateTime)\n}\norder by desc(?date)\nlimit 100"
    },
    "Lucene: Total hits" : {
      "name" : "Lucene: Total hits",
      "body" : "PREFIX : <http://www.ontotext.com/connectors/lucene#>\nPREFIX inst: <http://www.ontotext.com/connectors/lucene/instance#>\n\nSELECT ?totalHits {\n    ?r a inst:pcdm_object ;\n       :query \"title:alberta\" ;\n       :totalHits ?totalHits .\n}\n"
    },
    "Find by ContentModel and LastModified" : {
      "name" : "Find by ContentModel and LastModified",
      "body" : "PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nPREFIX fedora: <http://fedora.info/definitions/v4/repository#>\nPREFIX model: <info:fedora/fedora-system:def/model#>\nselect ?s ?p ?date \nwhere {\n  ?s fedora:lastModified ?date .\n  ?s model:hasModel \"IRItem\"\n  FILTER (?date > \"2018-04-01T00:00:00.000Z\"^^xsd:dateTime && ?date < \"2018-04-06T23:59:59.999Z\"^^xsd:dateTime)\n}"
    },
    "Clear graph" : {
      "name" : "Clear graph",
      "body" : "CLEAR GRAPH <http://example>"
    },
    "Count Triple by ContentModels" : {
      "name" : "Count Triple by ContentModels",
      "body" : "SELECT ?o (COUNT(*) AS ?count)\nWHERE {\n  ?s <info:fedora/fedora-system:def/model#hasModel> ?o .\n}\nGROUP BY ?o\n"
    },
    "Find Last Modified Events" : {
      "name" : "Find Last Modified Events",
      "body" : "PREFIX premis: <http://www.loc.gov/premis/rdf/v1#>\nselect ?s ?p ?d\nwhere {\n  ?s premis:hasEventDateTime ?d .\n}\norder by desc(?d)\nlimit 100"
    },
    "Lucene: Connector status check" : {
      "name" : "Lucene: Connector status check",
      "body" : "PREFIX : <http://www.ontotext.com/connectors/lucene#>\n\nSELECT ?cntUri ?cntStatus {\n  ?cntUri :connectorStatus ?cntStatus .\n}"
    },
    "Delete Object by ContentModel" : {
      "name" : "Delete Object by ContentModel",
      "body" : "DELETE\nWHERE { \n  ?s <info:fedora/fedora-system:def/model#hasModel> \"ActiveFedora::DirectContainer\"; \n  ?p ?o .\n}\n"
    }
  },
  "properties" : {
    "current.location" : "",
    "security.enabled" : "true",
    "security.free.access" : "true",
    "security.free.access.authorities" : "WRITE_REPO_audit,READ_REPO_audit,WRITE_REPO_fedora,READ_REPO_fedora",
    "security.free.access.settings" : "DEFAULT_INFERENCE=true,DEFAULT_SAMEAS=true,IGNORE_SHARED_QUERIES=false,EXECUTE_COUNT=true"
  },
  "locations" : {
    "" : {
      "location" : "",
      "password" : null,
      "username" : null,
      "superadminSecret" : null,
      "defaultRepository" : null
    }
  }
}