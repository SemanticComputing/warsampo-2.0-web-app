const perspectiveID = 'prisoners'

export const prisonerProperties = `
    {
      <SUBQUERY_FILTER>
      ?id skos:prefLabel ?prefLabel__id .
      BIND(?prefLabel__id AS ?prefLabel__prefLabel)
      BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
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
      ?id crm-org:P70_documents/crm-org:P70i_is_documented_in/casualties:municipality_of_death ?municipalityOfDeath__id .
      ?municipalityOfDeath__id skos:prefLabel ?municipalityOfDeath__prefLabel .
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