const perspectiveID = 'camps'

export const campPropertiesInstancePage = `
    {
      BIND(<ID> AS ?id)
      ?id skos:prefLabel ?prefLabel__id .
      BIND(?prefLabel__id AS ?prefLabel__prefLabel)
      BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
      BIND(?id as ?uri__id)
      BIND(?id as ?uri__dataProviderUrl)
      BIND(?id as ?uri__prefLabel)
      BIND(CONCAT("https://www.sotasampo.fi/fi/persons/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?warsaPage__id)
      BIND(?warsaPage__id AS ?warsaPage__prefLabel)
      BIND(?warsaPage__id AS ?warsaPage__dataProviderUrl)
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id prisoners:camp_id ?campId .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id prisoners:location ?location .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id prisoners:time_of_operation ?timeOfOperation .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id prisoners:camp_information ?campInformation .
    }
    UNION
    {
      BIND(<ID> as ?id)
      ?id wgs84:lat ?lat .
    }
    UNION
    {
      BIND(<ID> as ?id)
      ?id wgs84:long ?long .
    }
`

