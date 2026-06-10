const perspectiveID = 'casualties'

export const casualtyProperties = `
    {
      <SUBQUERY>
      ?id skos:prefLabel ?prefLabel__id .
      BIND(?prefLabel__id AS ?prefLabel__prefLabel)
      BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
      BIND(?id as ?uri__id)
      BIND(?id as ?uri__dataProviderUrl)
      BIND(?id as ?uri__prefLabel)
    }
    UNION
    {
      <SUBQUERY>
      ?id casualties:rank ?rank__id .
      ?rank__id skos:prefLabel ?rank__prefLabel .
      FILTER(LANG(?rank__prefLabel) = '<LANG>')
    }
    UNION
    {
      <SUBQUERY>
      ?id bioc:has_occupation ?occupation__id .
      ?occupation__id skos:prefLabel ?occupation__prefLabel .
      FILTER(LANG(?occupation__prefLabel) = '<LANG>')
    }
    UNION
    {
      <SUBQUERY>
      ?id warsa:gender ?gender__id .
      ?gender__id skos:prefLabel ?gender__prefLabel .
      FILTER(LANG(?gender__prefLabel) = '<LANG>')
    }
    UNION
    {
      <SUBQUERY>
      ?id warsa:marital_status ?maritalStatus__id .
      ?maritalStatus__id skos:prefLabel ?maritalStatus__prefLabel .
      FILTER(LANG(?maritalStatus__prefLabel) = '<LANG>')
    }
    UNION
    {
      <SUBQUERY>
      ?id casualties:perishing_category ?perishingCategory__id .
      ?perishingCategory__id skos:prefLabel ?perishingCategory__prefLabel .
      FILTER(LANG(?perishingCategory__prefLabel) = '<LANG>')
    }
    UNION
    {
      <SUBQUERY>
      ?id warsa:buried_in ?buriedIn__id .
      ?buriedIn__id skos:prefLabel ?buriedIn__prefLabel .
      BIND(CONCAT("/cemeteries/page/", REPLACE(STR(?buriedIn__id), "^.*\\\\/(.+)", "$1")) AS ?buriedIn__dataProviderUrl)
    }
    UNION
    {
      <SUBQUERY>
      ?id casualties:municipality_of_domicile ?municipalityOfDomicile__id .
      ?municipalityOfDomicile__id skos:prefLabel ?municipalityOfDomicile__prefLabel .
    }
    UNION
    {
      <SUBQUERY>
      ?id casualties:municipality_of_death ?municipalityOfDeath__id .
      ?municipalityOfDeath__id skos:prefLabel ?municipalityOfDeath__prefLabel .
    }
    UNION
    {
      <SUBQUERY>
      ?id warsa:date_of_death ?deathTime .
    }
    UNION
    {
      <SUBQUERY>
      ?id casualties:unit ?unit__id .
      ?unit__id skos:prefLabel ?unit__prefLabel .
    }
`

export const casualtyPropertiesInstancePage = `
    {
      BIND(<ID> AS ?id)
      ?id skos:prefLabel ?prefLabel__id .
      BIND(?prefLabel__id AS ?prefLabel__prefLabel)
      BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
      BIND(?id as ?uri__id)
      BIND(?id as ?uri__dataProviderUrl)
      BIND(?id as ?uri__prefLabel)
      BIND(CONCAT("https://www.sotasampo.fi/fi/persons/person_", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?warsaPage__id)
      BIND(?warsaPage__id AS ?warsaPage__prefLabel)
      BIND(?warsaPage__id AS ?warsaPage__dataProviderUrl)
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id casualties:rank ?rank__id .
      ?rank__id skos:prefLabel ?rank__prefLabel .
      FILTER(LANG(?rank__prefLabel) = '<LANG>')
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id bioc:has_occupation ?occupation__id .
      ?occupation__id skos:prefLabel ?occupation__prefLabel .
      FILTER(LANG(?occupation__prefLabel) = '<LANG>')
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id warsa:gender ?gender__id .
      ?gender__id skos:prefLabel ?gender__prefLabel .
      FILTER(LANG(?gender__prefLabel) = '<LANG>')
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id warsa:marital_status ?maritalStatus__id .
      ?maritalStatus__id skos:prefLabel ?maritalStatus__prefLabel .
      FILTER(LANG(?maritalStatus__prefLabel) = '<LANG>')
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id casualties:perishing_category ?perishingCategory__id .
      ?perishingCategory__id skos:prefLabel ?perishingCategory__prefLabel .
      FILTER(LANG(?perishingCategory__prefLabel) = '<LANG>')
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id warsa:buried_in ?buriedIn__id .
      ?buriedIn__id skos:prefLabel ?buriedIn__prefLabel .
      BIND(CONCAT("/cemeteries/page/", REPLACE(STR(?buriedIn__id), "^.*\\\\/(.+)", "$1")) AS ?buriedIn__dataProviderUrl)
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id casualties:municipality_of_domicile ?municipalityOfDomicile__id .
      ?municipalityOfDomicile__id skos:prefLabel ?municipalityOfDomicile__prefLabel .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id casualties:municipality_of_death ?municipalityOfDeath__id .
      ?municipalityOfDeath__id skos:prefLabel ?municipalityOfDeath__prefLabel .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id warsa:date_of_death ?deathTime .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id casualties:unit ?unit__id .
      ?unit__id skos:prefLabel ?unit__prefLabel .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id casualties:municipality_of_residence ?municipalityOfResidence__id .
      ?municipalityOfResidence__id skos:prefLabel ?municipalityOfResidence__prefLabel .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id casualties:municipality_of_burial ?municipalityOfBurial__id .
      ?municipalityOfBurial__id skos:prefLabel ?municipalityOfBurial__prefLabel .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id warsa:place_of_wounding ?placeOfWounding .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id warsa:date_of_wounding ?dateOfWounding .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id casualties:place_of_burial_number ?placeOfBurialNumber .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id casualties:unit_code ?unitCode .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id warsa:number_of_children ?numberOfChildren .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id casualties:municipality_of_birth ?municipalityOfBirth__id .
      ?municipalityOfBirth__id skos:prefLabel ?municipalityOfBirth__prefLabel .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id warsa:date_of_birth ?dateOfBirth .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id warsa:citizenship ?citizenship__id .
      ?citizenship__id skos:prefLabel ?citizenship__prefLabel .
      FILTER(LANG(?citizenship__prefLabel) = '<LANG>')
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id warsa:nationality ?nationality__id .
      ?nationality__id skos:prefLabel ?nationality__prefLabel .
      FILTER(LANG(?nationality__prefLabel) = '<LANG>')
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id warsa:mother_tongue ?motherTongue__id .
      ?motherTongue__id skos:prefLabel ?motherTongue__prefLabel .
      FILTER(LANG(?motherTongue__prefLabel) = '<LANG>')
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70_documents/foaf:page ?externalPage__id .
      BIND(?externalPage__id AS ?externalPage__prefLabel)
      BIND(?externalPage__id AS ?externalPage__dataProviderUrl)
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70_documents/^articles:mentionsPerson ?article__id .

      ?article__id dce:title ?article__title ;
                    articles:issue/skos:prefLabel ?article__issue ;
                    dct:hasFormat ?article__dataProviderUrl .
      
      BIND(CONCAT(STR(?article__title), " (Kansa Taisteli ", STR(?article__issue), ")") AS ?article__prefLabel)
    }
`

export const deathsByPerishingCategoryQuery = `
  SELECT ?category ?prefLabel (COUNT(DISTINCT ?record) AS ?instanceCount)
  WHERE {
    <FILTER>
    ?record a warsa:DeathRecord ;
            casualties:perishing_category ?category .
    ?category skos:prefLabel ?prefLabel .
    FILTER(LANG(?prefLabel) = '<LANG>')
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`

export const deathsByMaritalStatusQuery = `
  SELECT ?category ?prefLabel (COUNT(DISTINCT ?record) AS ?instanceCount)
  WHERE {
    <FILTER>
    ?record a warsa:DeathRecord ;
            warsa:marital_status ?category .
    ?category skos:prefLabel ?prefLabel .
    FILTER(LANG(?prefLabel) = '<LANG>')
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`

export const deathsByGenderQuery = `
  SELECT ?category ?prefLabel (COUNT(DISTINCT ?record) AS ?instanceCount)
  WHERE {
    <FILTER>
    ?record a warsa:DeathRecord ;
            warsa:gender ?category .
    ?category skos:prefLabel ?prefLabel .
    FILTER(LANG(?prefLabel) = '<LANG>')
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`

export const deathsByMotherTongueQuery = `
  SELECT ?category ?prefLabel (COUNT(DISTINCT ?record) AS ?instanceCount)
  WHERE {
    <FILTER>
    ?record a warsa:DeathRecord ;
            warsa:mother_tongue ?category .
    ?category skos:prefLabel ?prefLabel .
    FILTER(LANG(?prefLabel) = '<LANG>')
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`

export const deathsByNumberOfChildrenQuery = `
  SELECT ?category ?prefLabel (COUNT(DISTINCT ?record) AS ?instanceCount)
  WHERE {
    <FILTER>
    ?record a warsa:DeathRecord ;
            warsa:number_of_children ?category .
    BIND(CONCAT(STR(?category), ' ', IF(STR(?category) = '1', IF('<LANG>' = 'en', 'child', 'lapsi'), IF('<LANG>' = 'en', 'children', 'lasta'))) AS ?prefLabel)
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`

export const deathsByMunicipalityOfDomicileQuery = `
  SELECT DISTINCT ?id ?prefLabel ?polygon (COUNT(DISTINCT ?record) as ?instanceCount)
  WHERE {
    {
      ?id a <http://www.yso.fi/onto/suo/kunta> ;
          skos:prefLabel ?prefLabel ;
          sch:polygon ?polygon .
    }
    UNION {
      <FILTER>

      ?record a warsa:DeathRecord ;
              casualties:municipality_of_domicile/casualties:preferred_municipality ?id .
          
      ?id a <http://www.yso.fi/onto/suo/kunta> ;
          skos:prefLabel ?prefLabel ;
          sch:polygon ?polygon .
    }
  }
  GROUP BY ?id ?prefLabel ?polygon
  ORDER BY DESC(?instanceCount)
`

export const deathPlacesQuery = `
  SELECT ?id ?lat ?long
  (COUNT(DISTINCT ?record) as ?instanceCount)
  WHERE {
    <FILTER>
    ?record casualties:municipality_of_death ?id .
    ?id casualties:wartime_municipality ?wartime_id .
    ?wartime_id wgs84:lat ?lat ;
        wgs84:long ?long .
  }
  GROUP BY ?id ?lat ?long
`

export const placePropertiesInfoWindow = `
  ?id skos:prefLabel ?prefLabel__id .
  BIND(?prefLabel__id AS ?prefLabel__prefLabel)
`

export const deathsHappenedAt = `
  OPTIONAL {
    <FILTER>
    ?related__id casualties:municipality_of_death ?id .
    ?related__id skos:prefLabel ?related__prefLabel .
    BIND(CONCAT("/casualties/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
  }
`


export const migrationsQuery = `
  SELECT DISTINCT ?id 
  ?from__id ?from__prefLabel ?from__lat ?from__long ?from__dataProviderUrl
  ?to__id ?to__prefLabel ?to__lat ?to__long ?to__dataProviderUrl
  (COUNT(DISTINCT ?record) as ?instanceCount)
  WHERE {
    <FILTER>
    ?record casualties:municipality_of_domicile/casualties:wartime_municipality ?from__id ;
            casualties:municipality_of_death/casualties:wartime_municipality ?to__id .
    ?from__id skos:prefLabel ?from__prefLabel ;
              wgs84:lat ?from__lat ;
              wgs84:long ?from__long .
    ?to__id skos:prefLabel ?to__prefLabel ;
            wgs84:lat ?to__lat ;
            wgs84:long ?to__long .
    BIND(IRI(CONCAT(STR(?from__id), "-", STR(?to__id))) as ?id)
    FILTER(?from__id != ?to__id)
  }
  GROUP BY ?id 
  ?from__id ?from__prefLabel ?from__lat ?from__long ?from__dataProviderUrl
  ?to__id ?to__prefLabel ?to__lat ?to__long ?to__dataProviderUrl
  ORDER BY DESC(?instanceCount)
`

export const migrationsDialogQuery = `
  SELECT * {
    <FILTER>
    ?id casualties:municipality_of_domicile/casualties:wartime_municipality <FROM_ID> ;
        casualties:municipality_of_death/casualties:wartime_municipality <TO_ID> ;
        skos:prefLabel ?prefLabel .
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?dataProviderUrl)
  }
`

export const deathPlacesAnimationQuery = `
  SELECT ?id ?prefLabel ?startDate ?endDate ?lat ?long (COUNT(?record) AS ?instanceCount) (COUNT(?record) AS ?description)
  WHERE {
    <FILTER>
    ?record a warsa:DeathRecord ;
        skos:prefLabel ?prefLabel_temp ;
        warsa:date_of_death ?date ;
        casualties:municipality_of_death ?municipality .

    BIND(CONCAT(STR(?municipality), "-", STR(?date)) AS ?id)
    FILTER(datatype(?date) = xsd:date)
    BIND(STR(?date) AS ?startDate)

    ?municipality skos:prefLabel ?prefLabel ;
                  casualties:wartime_municipality ?wartime_municipality .
    ?wartime_municipality wgs84:lat ?lat ;
        wgs84:long ?long .
  }
  GROUP BY ?id ?prefLabel ?startDate ?endDate ?lat ?long
  ORDER BY ?startDate
`

export const eventMapQuery = `
  SELECT DISTINCT ?id ?lat ?long ?prefLabel ?dataProviderUrl ?markerColor ?description
  WHERE {
    VALUES ?record { <ID> }
    ?record a warsa:DeathRecord .

    VALUES (?p ?markerColor ?description) {
      ( warsa:buried_in "orange" "Hautausmaa / Cemetery of burial")
      ( casualties:municipality_of_domicile "violet" "Kotikunta / Municipality of domicile")
      ( casualties:municipality_of_residence "yellow" "Asuinkunta / Municipality of residence")
      ( casualties:municipality_of_death "red" "Kuolinkunta / Municipality of death")
      ( casualties:municipality_of_birth "green" "Synnyinkunta / Municipality of birth")
    }

    ?record ?p ?id .
    
    ?id skos:prefLabel ?prefLabel .

    OPTIONAL {
      ?id wgs84:lat ?lat ; 
        wgs84:long ?long .
      FILTER(datatype(?lat) = xsd:double)
      FILTER(datatype(?long) = xsd:double)
    }

    OPTIONAL {
      ?id <http://www.georss.org/georss/point> ?point .
      BIND(xsd:decimal(REPLACE(?point, "([0-9\\\\.\\\\-]+) ([0-9\\\\.\\\\-]+)", "$1")) AS ?lat)
      BIND(xsd:decimal(REPLACE(?point, "([0-9\\\\.\\\\-]+) ([0-9\\\\.\\\\-]+)", "$2")) AS ?long)
    }

    FILTER(BOUND(?lat) && BOUND(?long) || BOUND(?point))

  }
  GROUP BY ?id ?lat ?long ?prefLabel ?dataProviderUrl ?markerColor ?description
`