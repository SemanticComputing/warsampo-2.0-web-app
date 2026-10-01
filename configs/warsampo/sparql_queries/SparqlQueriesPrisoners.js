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

export const prisonersByOccupationQuery = `
  SELECT ?category ?prefLabel (COUNT(DISTINCT ?record) AS ?instanceCount)
  WHERE {
    {
      <FILTER>
      ?record a warsa:PrisonerRecord ;
              bioc:has_occupation ?category .
      ?category skos:prefLabel ?prefLabel .
      FILTER(LANG(?prefLabel) = '<LANG>')
    }
    UNION
    {
      <FILTER>
      ?record a warsa:PrisonerRecord .
      FILTER NOT EXISTS {
        ?record bioc:has_occupation [] .
      }
      BIND('unknown' as ?category)
      BIND('Tuntematon / Unknown' AS ?prefLabel)
    }
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`

export const prisonersByNumberOfChildrenQuery = `
  SELECT ?category ?prefLabel (COUNT(DISTINCT ?record) AS ?instanceCount)
  WHERE {
    {
      <FILTER>
      ?record a warsa:PrisonerRecord ;
              prisoners:number_of_children ?category .
      BIND(CONCAT(STR(?category), ' ', IF(STR(?category) = '1', IF('<LANG>' = 'en', 'child', 'lapsi'), IF('<LANG>' = 'en', 'children', 'lasta'))) AS ?prefLabel)
    }
    UNION
    {
      <FILTER>
      ?record a warsa:PrisonerRecord .
      FILTER NOT EXISTS {
        ?record prisoners:number_of_children [] .
      }
      BIND('unknown' as ?category)
      BIND('Tuntematon / Unknown' AS ?prefLabel)
    }
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`

export const prisonersByMunicipalityOfResidenceQuery = `
  SELECT ?category ?prefLabel (COUNT(DISTINCT ?record) AS ?instanceCount)
  WHERE {
    {
      <FILTER>
      ?record a warsa:PrisonerRecord ;
              prisoners:municipality_of_residence_literal ?category .
      BIND(?category AS ?prefLabel)
    }
    UNION
    {
      <FILTER>
      ?record a warsa:PrisonerRecord .
      FILTER NOT EXISTS {
        ?record prisoners:municipality_of_residence_literal [] .
      }
      BIND('unknown' as ?category)
      BIND('Tuntematon / Unknown' AS ?prefLabel)
    }
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`

export const prisonersByMunicipalityOfDeathQuery = `
  SELECT ?category ?prefLabel (COUNT(DISTINCT ?record) AS ?instanceCount)
  WHERE {
    {
      <FILTER>
      ?record a warsa:PrisonerRecord ;
              prisoners:municipality_of_death_literal ?category .
      BIND(?category AS ?prefLabel)
    }
    UNION
    {
      <FILTER>
      ?record a warsa:PrisonerRecord .
      FILTER NOT EXISTS {
        ?record prisoners:municipality_of_death_literal [] .
      }
      BIND('unknown' as ?category)
      BIND('Tuntematon / Unknown' AS ?prefLabel)
    }
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`

export const prisonersByMunicipalityOfCaptureQuery = `
  SELECT ?category ?prefLabel (COUNT(DISTINCT ?record) AS ?instanceCount)
  WHERE {
    {
      <FILTER>
      ?record a warsa:PrisonerRecord ;
              prisoners:municipality_of_capture_literal ?category .
      BIND(?category AS ?prefLabel)
    }
    UNION
    {
      <FILTER>
      ?record a warsa:PrisonerRecord .
      FILTER NOT EXISTS {
        ?record prisoners:municipality_of_capture_literal [] .
      }
      BIND('unknown' as ?category)
      BIND('Tuntematon / Unknown' AS ?prefLabel)
    }
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`

export const prisonersByMunicipalityOfBirthQuery = `
  SELECT ?category ?prefLabel (COUNT(DISTINCT ?record) AS ?instanceCount)
  WHERE {
    {
      <FILTER>
      ?record a warsa:PrisonerRecord ;
              warsa:municipality_of_birth_literal ?category .
      BIND(?category AS ?prefLabel)
    }
    UNION
    {
      <FILTER>
      ?record a warsa:PrisonerRecord .
      FILTER NOT EXISTS {
        ?record warsa:municipality_of_birth_literal [] .
      }
      BIND('unknown' as ?category)
      BIND('Tuntematon / Unknown' AS ?prefLabel)
    }
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`

export const prisonersByAgeQuery = `
  SELECT ?category ?prefLabel (COUNT(DISTINCT ?record) as ?instanceCount)
  WHERE {
    {
      <FILTER>
      ?record a warsa:PrisonerRecord .
      
      ?record prisoners:date_of_capture ?doc . 
      ?record warsa:date_of_birth ?dob .
    
      FILTER(datatype(?doc) = xsd:date)
      FILTER(datatype(?dob) = xsd:date)

      # calculate age
      BIND((YEAR(?doc)-YEAR(?dob)-IF(MONTH(?doc) < MONTH(?dob), 1, IF(DAY(?doc) < DAY(?dob), 1, 0))) AS ?age)

      BIND(IF(?age > 120, 'Muu / Other', ?age) as ?category)
      BIND(?category as ?prefLabel)
    }
  	UNION
    {
      <FILTER>
      ?record a warsa:PrisonerRecord .
      
      ?record prisoners:date_of_capture ?doc . 
      ?record warsa:date_of_birth ?dob .
    
      FILTER(datatype(?doc) != xsd:date)
      
      BIND('Unknown' as ?category)
      BIND('Tuntematon / Unknown' as ?prefLabel)
    }
    UNION
    {
      <FILTER>
      ?record a warsa:PrisonerRecord .
      
      ?record prisoners:date_of_capture ?doc . 
      ?record warsa:date_of_birth ?dob .
    
      FILTER(datatype(?dob) != xsd:date)
      
      BIND('Unknown' as ?category)
      BIND('Tuntematon / Unknown' as ?prefLabel)
    }
    UNION
    {
      <FILTER>
      ?record a warsa:PrisonerRecord .
      
      FILTER NOT EXISTS { 
        ?record prisoners:date_of_capture [] . 
        ?record warsa:date_of_birth [] . 
      }
      
      BIND('Unknown' as ?category)
      BIND('Tuntematon / Unknown' as ?prefLabel)
    }
  }
  GROUP BY ?category ?prefLabel
  ORDER BY ASC(?prefLabel)
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

export const migrationsQuery = `
  SELECT DISTINCT ?id 
  ?from__id ?from__prefLabel ?from__lat ?from__long ?from__dataProviderUrl
  ?to__id ?to__prefLabel (SAMPLE(?to__lat_) AS ?to__lat) (SAMPLE(?to__long_) AS ?to__long) ?to__dataProviderUrl
  (COUNT(DISTINCT ?record) as ?instanceCount)
  WHERE {
    <FILTER>
    ?record prisoners:municipality_of_capture ?from__id ;
            prisoners:captivity/prisoners:location ?to__id .
    ?from__id skos:prefLabel ?from__prefLabel ;
              wgs84:lat ?from__lat ;
              wgs84:long ?from__long .
    ?to__id skos:prefLabel ?to__prefLabel ;
            wgs84:lat ?to__lat__ ;
            wgs84:long ?to__long__ .
    BIND(xsd:decimal(?to__lat__) AS ?to__lat_)
    BIND(xsd:decimal(?to__long__) AS ?to__long_)
    FILTER(BOUND(?to__lat_) && BOUND(?to__long_))
    BIND(IRI(CONCAT(STR(?from__id), "-", STR(?to__id))) as ?id)
    FILTER(?from__id != ?to__id)
  }
  GROUP BY ?id 
  ?from__id ?from__prefLabel ?from__lat ?from__long ?from__dataProviderUrl
  ?to__id ?to__prefLabel ?to__dataProviderUrl
  ORDER BY DESC(?instanceCount)
`

export const migrationsDialogQuery = `
  SELECT * {
    <FILTER>
    ?id prisoners:municipality_of_capture <FROM_ID> ;
        prisoners:captivity/prisoners:location <TO_ID> ;
        skos:prefLabel ?prefLabel ;
        crm-org:P70_documents ?actor_ .
    BIND(CONCAT("/actors/page/", REPLACE(STR(?actor_), "^.*\\\\/(.+)", "$1")) AS ?dataProviderUrl)
  }
`
