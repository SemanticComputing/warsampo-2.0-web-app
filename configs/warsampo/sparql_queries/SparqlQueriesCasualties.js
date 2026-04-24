const perspectiveID = 'casualties'

export const casualtyProperties = `
    {
      ?id skos:prefLabel ?prefLabel__id .
      BIND(?prefLabel__id AS ?prefLabel__prefLabel)
      BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
      BIND(?id as ?uri__id)
      BIND(?id as ?uri__dataProviderUrl)
      BIND(?id as ?uri__prefLabel)
    }
    UNION
    {
      ?id casualties:rank ?rank__id .
      ?rank__id skos:prefLabel ?rank__prefLabel .
      FILTER(LANG(?rank__prefLabel) = '<LANG>')
    }
    UNION
    {
      ?id bioc:has_occupation ?occupation__id .
      ?occupation__id skos:prefLabel ?occupation__prefLabel .
      FILTER(LANG(?occupation__prefLabel) = '<LANG>')
    }
    UNION
    {
      ?id warsa:gender ?gender__id .
      ?gender__id skos:prefLabel ?gender__prefLabel .
      FILTER(LANG(?gender__prefLabel) = '<LANG>')
    }
    UNION
    {
      ?id warsa:marital_status ?maritalStatus__id .
      ?maritalStatus__id skos:prefLabel ?maritalStatus__prefLabel .
      FILTER(LANG(?maritalStatus__prefLabel) = '<LANG>')
    }
    UNION
    {
      ?id casualties:perishing_category ?perishingCategory__id .
      ?perishingCategory__id skos:prefLabel ?perishingCategory__prefLabel .
      FILTER(LANG(?perishingCategory__prefLabel) = '<LANG>')
    }
    UNION
    {
      ?id warsa:buried_in ?buriedIn__id .
      ?buriedIn__id skos:prefLabel ?buriedIn__prefLabel .
      BIND(CONCAT("/cemeteries/page/", REPLACE(STR(?buriedIn__id), "^.*\\\\/(.+)", "$1")) AS ?buriedIn__dataProviderUrl)
    }
    UNION
    {
      ?id casualties:municipality_of_domicile ?municipalityOfDomicile__id .
      ?municipalityOfDomicile__id skos:prefLabel ?municipalityOfDomicile__prefLabel .
    }
    UNION
    {
      ?id casualties:municipality_of_death ?municipalityOfDeath__id .
      ?municipalityOfDeath__id skos:prefLabel ?municipalityOfDeath__prefLabel .
    }
    UNION
    {
      ?id warsa:date_of_death ?deathTime .
    }
    UNION
    {
      ?id casualties:unit ?unit__id .
      ?unit__id skos:prefLabel ?unit__prefLabel .
    }
`

export const casualtyPropertiesInstancePage = `
    {
      ?id skos:prefLabel ?prefLabel__id .
      BIND(?prefLabel__id AS ?prefLabel__prefLabel)
      BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
      BIND(?id as ?uri__id)
      BIND(?id as ?uri__dataProviderUrl)
      BIND(?id as ?uri__prefLabel)
    }
    UNION
    {
      ?id casualties:rank ?rank__id .
      ?rank__id skos:prefLabel ?rank__prefLabel .
      FILTER(LANG(?rank__prefLabel) = '<LANG>')
    }
    UNION
    {
      ?id bioc:has_occupation ?occupation__id .
      ?occupation__id skos:prefLabel ?occupation__prefLabel .
      FILTER(LANG(?occupation__prefLabel) = '<LANG>')
    }
    UNION
    {
      ?id warsa:gender ?gender__id .
      ?gender__id skos:prefLabel ?gender__prefLabel .
      FILTER(LANG(?gender__prefLabel) = '<LANG>')
    }
    UNION
    {
      ?id warsa:marital_status ?maritalStatus__id .
      ?maritalStatus__id skos:prefLabel ?maritalStatus__prefLabel .
      FILTER(LANG(?maritalStatus__prefLabel) = '<LANG>')
    }
    UNION
    {
      ?id casualties:perishing_category ?perishingCategory__id .
      ?perishingCategory__id skos:prefLabel ?perishingCategory__prefLabel .
      FILTER(LANG(?perishingCategory__prefLabel) = '<LANG>')
    }
    UNION
    {
      ?id warsa:buried_in ?buriedIn__id .
      ?buriedIn__id skos:prefLabel ?buriedIn__prefLabel .
      BIND(CONCAT("/cemeteries/page/", REPLACE(STR(?buriedIn__id), "^.*\\\\/(.+)", "$1")) AS ?buriedIn__dataProviderUrl)
    }
    UNION
    {
      ?id casualties:municipality_of_domicile ?municipalityOfDomicile__id .
      ?municipalityOfDomicile__id skos:prefLabel ?municipalityOfDomicile__prefLabel .
    }
    UNION
    {
      ?id casualties:municipality_of_death ?municipalityOfDeath__id .
      ?municipalityOfDeath__id skos:prefLabel ?municipalityOfDeath__prefLabel .
    }
    UNION
    {
      ?id warsa:date_of_death ?deathTime .
    }
    UNION
    {
      ?id casualties:unit ?unit__id .
      ?unit__id skos:prefLabel ?unit__prefLabel .
    }
    UNION
    {
      ?id casualties:municipality_of_residence ?municipalityOfResidence__id .
      ?municipalityOfResidence__id skos:prefLabel ?municipalityOfResidence__prefLabel .
    }
    UNION
    {
      ?id casualties:municipality_of_burial ?municipalityOfBurial__id .
      ?municipalityOfBurial__id skos:prefLabel ?municipalityOfBurial__prefLabel .
    }
    UNION
    {
      ?id warsa:place_of_wounding ?placeOfWounding .
    }
    UNION
    {
      ?id warsa:date_of_wounding ?dateOfWounding .
    }
    UNION
    {
      ?id casualties:place_of_burial_number ?placeOfBurialNumber .
    }
    UNION
    {
      ?id casualties:unit_code ?unitCode .
    }
    UNION
    {
      ?id warsa:number_of_children ?numberOfChildren .
    }
    UNION
    {
      ?id warsa:date_of_birth ?dateOfBirth .
    }
    UNION
    {
      ?id warsa:citizenship ?citizenship__id .
      ?citizenship__id skos:prefLabel ?citizenship__prefLabel .
      FILTER(LANG(?citizenship__prefLabel) = '<LANG>')
    }
    UNION
    {
      ?id warsa:nationality ?nationality__id .
      ?nationality__id skos:prefLabel ?nationality__prefLabel .
      FILTER(LANG(?nationality__prefLabel) = '<LANG>')
    }
    UNION
    {
      ?id warsa:mother_tongue ?motherTongue__id .
      ?motherTongue__id skos:prefLabel ?motherTongue__prefLabel .
      FILTER(LANG(?motherTongue__prefLabel) = '<LANG>')
    }
`
