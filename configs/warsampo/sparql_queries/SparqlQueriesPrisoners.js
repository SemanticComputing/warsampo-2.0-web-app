const perspectiveID = 'prisoners'

export const prisonerProperties = `
    {
      <SUBQUERY_FILTER>
      ?id skos:prefLabel ?prefLabel__id .
      BIND(?prefLabel__id AS ?prefLabel__prefLabel)

      ?id crm-org:P70_documents ?actor__id .
      BIND(CONCAT("/actors/page/", REPLACE(STR(?actor__id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)

      BIND(?id as ?uri__id)
      BIND(?id as ?uri__dataProviderUrl)
      BIND(?id as ?uri__prefLabel)
    }
    UNION
    {
      <SUBQUERY_FILTER>
      ?id prisoners:rank ?rank__id .
      ?rank__id skos:prefLabel ?rank__prefLabel .
      FILTER(LANG(?rank__prefLabel) = '<LANG>')
    }
    UNION
    {
      <SUBQUERY_FILTER>
      ?id prisoners:unit ?unit__id .
      ?unit__id skos:prefLabel ?unit__prefLabel .
    }
    UNION
    {
      <SUBQUERY_FILTER>
      ?id prisoners:date_of_death ?deathTime .
    }
    UNION
    {
      <SUBQUERY_FILTER>
      ?id prisoners:municipality_of_death_literal ?municipalityOfDeath .
    }
    UNION
    {
      <SUBQUERY_FILTER>
      ?id bioc:has_occupation ?occupation__id .
      ?occupation__id skos:prefLabel ?occupation__prefLabel .
      FILTER(LANG(?occupation__prefLabel) = '<LANG>')
    }
    UNION
    {
      <SUBQUERY_FILTER>
      ?id prisoners:marital_status ?maritalStatus__id .
      ?maritalStatus__id skos:prefLabel ?maritalStatus__prefLabel .
      FILTER(LANG(?maritalStatus__prefLabel) = '<LANG>')
    }
`


export const prisonerPropertiesInstancePage = `
    {
      BIND(<ID> as ?id)
      ?id skos:prefLabel ?prefLabel__id .
      BIND(?prefLabel__id AS ?prefLabel__prefLabel)
      BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
      BIND(?id as ?uri__id)
      BIND(?id as ?uri__dataProviderUrl)
      BIND(?id as ?uri__prefLabel)
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id prisoners:rank ?rank__id .
      ?rank__id skos:prefLabel ?rank__prefLabel .
      FILTER(LANG(?rank__prefLabel) = '<LANG>')
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id prisoners:unit ?unit__id .
      ?unit__id skos:prefLabel ?unit__prefLabel .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id prisoners:date_of_death ?deathTime .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70_documents/crm-org:P70i_is_documented_in/casualties:municipality_of_death ?municipalityOfDeath__id .
      ?municipalityOfDeath__id skos:prefLabel ?municipalityOfDeath__prefLabel .
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
      ?id prisoners:marital_status ?maritalStatus__id .
      ?maritalStatus__id skos:prefLabel ?maritalStatus__prefLabel .
      FILTER(LANG(?maritalStatus__prefLabel) = '<LANG>')
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
      ?id crm-org:P70_documents/^articles:mentionsPerson ?article__id .

      ?article__id dce:title ?article__title ;
                    articles:issue/skos:prefLabel ?article__issue ;
                    dct:hasFormat ?article__dataProviderUrl .
      
      BIND(CONCAT(STR(?article__title), " (Kansa Taisteli ", STR(?article__issue), ")") AS ?article__prefLabel)
    }
    UNION
    {
      BIND(<ID> as ?id)
      ?reification_source rdf:subject ?id .
      ?reification_source dct:source ?source__id .
      ?source__id skos:prefLabel ?source__prefLabel .
    }
`

export const prisonersByMaritalStatusQuery = `
  SELECT ?category ?prefLabel (COUNT(DISTINCT ?record) AS ?instanceCount)
  WHERE {
    {
      <FILTER>
      ?record a warsa:PrisonerRecord ;
              prisoners:marital_status ?category .
      ?category skos:prefLabel ?prefLabel .
      FILTER(LANG(?prefLabel) = '<LANG>')
    }
    UNION
    {
      <FILTER>
      ?record a warsa:PrisonerRecord .
      FILTER NOT EXISTS {
        ?record prisoners:marital_status [] .
      }
      BIND('unknown' as ?category)
      BIND('Tuntematon / Unknown' AS ?prefLabel)
    }
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`

export const prisonersByMotherTongueQuery = `
  SELECT ?category ?prefLabel (COUNT(DISTINCT ?record) AS ?instanceCount)
  WHERE {
    <FILTER>
    ?record a warsa:PrisonerRecord ;
            warsa:mother_tongue ?category .
    ?category skos:prefLabel ?prefLabel .
    FILTER(LANG(?prefLabel) = '<LANG>')
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`

export const prisonersByRankQuery = `
  SELECT ?category ?prefLabel (COUNT(DISTINCT ?record) AS ?instanceCount)
  WHERE {
    {
      <FILTER>
      ?record a warsa:PrisonerRecord ;
              prisoners:rank ?category .
      ?category skos:prefLabel ?prefLabel .
      FILTER(LANG(?prefLabel) = '<LANG>')
    }
    UNION
    {
      <FILTER>
      ?record a warsa:PrisonerRecord .
      FILTER NOT EXISTS {
        ?record prisoners:rank [] .
      }
      BIND('unknown' as ?category)
      BIND('Tuntematon / Unknown' AS ?prefLabel)
    }
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`

export const prisonersByUnitQuery = `
  SELECT ?category ?prefLabel (COUNT(DISTINCT ?record) AS ?instanceCount)
  WHERE {
    {
      <FILTER>
      ?record a warsa:PrisonerRecord ;
              prisoners:unit ?category .
      ?category skos:prefLabel ?prefLabel .
      FILTER(LANG(?prefLabel) = '<LANG>')
    }
    UNION
    {
      <FILTER>
      ?record a warsa:PrisonerRecord .
      FILTER NOT EXISTS {
        ?record prisoners:unit [] .
      }
      BIND('unknown' as ?category)
      BIND('Tuntematon / Unknown' AS ?prefLabel)
    }
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`

export const captivityPlacesQuery = `
  SELECT ?id (SAMPLE(?lat_) AS ?lat) (SAMPLE(?long_) AS ?long)
  (COUNT(DISTINCT ?record) as ?instanceCount)
  WHERE {
    <FILTER>
    ?record prisoners:captivity/prisoners:location ?id .
    ?id wgs84:lat ?lat__ ;
        wgs84:long ?long__ .
    BIND(xsd:decimal(?lat__) AS ?lat_)
    BIND(xsd:decimal(?long__) AS ?long_)
    FILTER(BOUND(?lat_) && BOUND(?long_))
  }
  GROUP BY ?id
`

export const placePropertiesInfoWindow = `
  ?id skos:prefLabel ?prefLabel__id .
  BIND(?prefLabel__id AS ?prefLabel__prefLabel)
`

export const captivitiesAt = `
  OPTIONAL {
    <FILTER>
    ?related__id prisoners:captivity/prisoners:location ?id .
    ?related__id skos:prefLabel ?related__prefLabel .
    ?related__id crm-org:P70_documents ?actor_ .
    BIND(CONCAT("/actors/page/", REPLACE(STR(?actor_), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
  }
`