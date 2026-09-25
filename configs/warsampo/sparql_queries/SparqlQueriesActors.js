const perspectiveID = 'actors'

export const actorPropertiesInstancePage = `
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
      ?id crm-org:P70i_is_documented_in ?deathRecord__id .
      ?deathRecord__id a warsa:DeathRecord .
      BIND(?deathRecord__id AS ?deathRecord__prefLabel)
      BIND(?deathRecord__id AS ?deathRecord__dataProviderUrl)
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in/(casualties:rank|prisoners:rank) ?rank__id .
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
      ?id crm-org:P70i_is_documented_in ?deathRecord__id .
      ?deathRecord__id a warsa:DeathRecord ;
                      warsa:gender ?gender__id .
      ?gender__id skos:prefLabel ?gender__prefLabel .
      FILTER(LANG(?gender__prefLabel) = '<LANG>')
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in/(warsa:marital_status|prisoners:marital_status) ?maritalStatus__id .
      ?maritalStatus__id skos:prefLabel ?maritalStatus__prefLabel .
      FILTER(LANG(?maritalStatus__prefLabel) = '<LANG>')
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in ?deathRecord__id .
      ?deathRecord__id a warsa:DeathRecord ;
                      casualties:perishing_category ?perishingCategory__id .
      ?perishingCategory__id skos:prefLabel ?perishingCategory__prefLabel .
      FILTER(LANG(?perishingCategory__prefLabel) = '<LANG>')
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in ?deathRecord__id .
      ?deathRecord__id a warsa:DeathRecord ;
                      warsa:buried_in ?buriedIn__id .
      ?buriedIn__id skos:prefLabel ?buriedIn__prefLabel .
      BIND(CONCAT("/cemeteries/page/", REPLACE(STR(?buriedIn__id), "^.*\\\\/(.+)", "$1")) AS ?buriedIn__dataProviderUrl)
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in/(casualties:municipality_of_domicile|prisoners:municipality_of_domicile) ?municipalityOfDomicile__id .
      ?municipalityOfDomicile__id skos:prefLabel ?municipalityOfDomicile__prefLabel .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in ?deathRecord__id .
      ?deathRecord__id a warsa:DeathRecord ;
                      casualties:municipality_of_death ?municipalityOfDeath__id .
      ?municipalityOfDeath__id skos:prefLabel ?municipalityOfDeath__prefLabel .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in/(warsa:date_of_death|prisoners:date_of_death) ?deathTime .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in/(casualties:unit|prisoners:unit) ?unit__id .
      ?unit__id skos:prefLabel ?unit__prefLabel .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in/(casualties:municipality_of_residence|prisoners:municipality_of_residence) ?municipalityOfResidence__id .
      ?municipalityOfResidence__id skos:prefLabel ?municipalityOfResidence__prefLabel .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in ?deathRecord__id .
      ?deathRecord__id a warsa:DeathRecord ;
                      casualties:municipality_of_burial ?municipalityOfBurial__id .
      ?municipalityOfBurial__id skos:prefLabel ?municipalityOfBurial__prefLabel .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in ?deathRecord__id .
      ?deathRecord__id a warsa:DeathRecord ;
                      warsa:place_of_wounding ?placeOfWounding .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in ?deathRecord__id .
      ?deathRecord__id a warsa:DeathRecord ;
                      warsa:date_of_wounding ?dateOfWounding .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in ?deathRecord__id .
      ?deathRecord__id a warsa:DeathRecord ;
                      casualties:place_of_burial_number ?placeOfBurialNumber .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in ?deathRecord__id .
      ?deathRecord__id a warsa:DeathRecord ;
                      casualties:unit_code ?unitCode .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in/(warsa:number_of_children|prisoners:number_of_children) ?numberOfChildren .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in/(casualties:municipality_of_birth|warsa:municipality_of_birth) ?municipalityOfBirth__id .
      ?municipalityOfBirth__id skos:prefLabel ?municipalityOfBirth__prefLabel .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in/warsa:date_of_birth ?dateOfBirth .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in ?deathRecord__id .
      ?deathRecord__id a warsa:DeathRecord ;
                      warsa:citizenship ?citizenship__id .
      ?citizenship__id skos:prefLabel ?citizenship__prefLabel .
      FILTER(LANG(?citizenship__prefLabel) = '<LANG>')
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in ?deathRecord__id .
      ?deathRecord__id a warsa:DeathRecord ;
                      warsa:nationality ?nationality__id .
      ?nationality__id skos:prefLabel ?nationality__prefLabel .
      FILTER(LANG(?nationality__prefLabel) = '<LANG>')
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in/warsa:mother_tongue ?motherTongue__id .
      ?motherTongue__id skos:prefLabel ?motherTongue__prefLabel .
      FILTER(LANG(?motherTongue__prefLabel) = '<LANG>')
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id foaf:page ?externalPage__id .
      BIND(?externalPage__id AS ?externalPage__prefLabel)
      BIND(?externalPage__id AS ?externalPage__dataProviderUrl)
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id ^articles:mentionsPerson ?article__id .

      ?article__id dce:title ?article__title ;
                    articles:issue/skos:prefLabel ?article__issue ;
                    dct:hasFormat ?article__dataProviderUrl .
      
      BIND(CONCAT(STR(?article__title), " (Kansa Taisteli ", STR(?article__issue), ")") AS ?article__prefLabel)
    }
    UNION 
    {
      BIND(<ID> AS ?id)
      ?disappearingEvent__id a warsa:Disappearing ;
                        crm-org:P11_had_participant  ?id .
      BIND(?disappearingEvent__id AS ?disappearingEvent__prefLabel)
      BIND(?disappearingEvent__id AS ?disappearingEvent__dataProviderUrl)
    }
    UNION 
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in/casualties:municipality_of_going_mia ?municipalityOfGoingMIA__id .
      ?municipalityOfGoingMIA__id skos:prefLabel ?municipalityOfGoingMIA__prefLabel .
    }
    UNION 
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in/(warsa:place_of_going_mia_literal|prisoners:place_of_going_mia_literal) ?placeOfGoingMIA .
    }
    UNION 
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in/(warsa:date_of_going_mia|prisoners:date_of_going_mia) ?dateOfGoingMIA .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in ?prisonerRecord__id .
      ?prisonerRecord__id a warsa:PrisonerRecord .
      BIND(?prisonerRecord__id AS ?prisonerRecord__prefLabel)
      BIND(?prisonerRecord__id AS ?prisonerRecord__dataProviderUrl)
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in ?prisonerRecord__id .
      ?prisonerRecord__id a warsa:PrisonerRecord ;
                          prisoners:description_of_capture ?descriptionOfCapture .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in ?prisonerRecord__id .
      ?prisonerRecord__id a warsa:PrisonerRecord ;
                          prisoners:additional_information ?otherCaptivityInformation .
    }                   
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in ?prisonerRecord__id .
      ?prisonerRecord__id a warsa:PrisonerRecord ;
                          prisoners:municipality_of_capture ?municipalityOfCapture__id .
      ?municipalityOfCapture__id skos:prefLabel ?municipalityOfCapture__prefLabel .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in ?prisonerRecord__id .
      ?prisonerRecord__id a warsa:PrisonerRecord ;
                          warsa:sotilaan_aani_magazine ?sotilaanAani__id .
      ?sotilaanAani__id skos:prefLabel ?sotilaanAani__prefLabel ;
                        sch:contentUrl ?sotilaanAani__dataProviderUrl .

    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in ?prisonerRecord__id .
      ?prisonerRecord__id a warsa:PrisonerRecord ;
                          prisoners:captivity ?captivity__id .
      
      OPTIONAL { 
        ?captivity__id prisoners:date_begin ?startDate .
        BIND(CONCAT(STR(DAY(?startDate)), '.', STR(MONTH(?startDate)), '.', STR(YEAR(?startDate))) AS ?formattedStartDate)
      }
      OPTIONAL { 
        ?captivity__id prisoners:date_end ?endDate . 
        BIND(CONCAT(STR(DAY(?endDate)), '.', STR(MONTH(?endDate)), '.', STR(YEAR(?endDate))) AS ?formattedEndDate)
      }

      ?captivity__id prisoners:location ?location_ .
      ?location_ skos:prefLabel ?locationName .
      BIND(IF(BOUND(?formattedStartDate) && BOUND(?formattedEndDate), CONCAT(STR(?locationName), ' (', STR(?formattedStartDate), '–', STR(?formattedEndDate), ')'), STR(?locationName)) AS ?captivity__prefLabel)
      BIND(CONCAT("/camps/page/", REPLACE(STR(?location_), "^.*\\\\/(.+)", "$1")) AS ?captivity__dataProviderUrl)
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in ?prisonerRecord__id .
      ?prisonerRecord__id a warsa:PrisonerRecord ;
                          prisoners:date_of_capture ?dateOfCapture .
    }
    UNION
    {
      BIND(<ID> AS ?id)
      ?id crm-org:P70i_is_documented_in ?prisonerRecord__id .
      ?prisonerRecord__id a warsa:PrisonerRecord ;
                          prisoners:date_of_return ?dateOfReturn .
    }
`

export const actorPropertiesInstancePageAlt = `
    {
      <ID> skos:prefLabel ?prefLabel__id .
      BIND(?prefLabel__id AS ?prefLabel__prefLabel)
      BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(<ID>), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
      BIND(<ID> as ?uri__id)
      BIND(<ID> as ?uri__dataProviderUrl)
      BIND(<ID> as ?uri__prefLabel)
      BIND(CONCAT("https://www.sotasampo.fi/fi/persons/", REPLACE(STR(<ID>), "^.*\\\\/(.+)", "$1")) AS ?warsaPage__id)
      BIND(?warsaPage__id AS ?warsaPage__prefLabel)
      BIND(?warsaPage__id AS ?warsaPage__dataProviderUrl)
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in ?deathRecord__id .
      ?deathRecord__id a warsa:DeathRecord .
      BIND(?deathRecord__id AS ?deathRecord__prefLabel)
      BIND(?deathRecord__id AS ?deathRecord__dataProviderUrl)
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in/(casualties:rank|prisoners:rank) ?rank__id .
      ?rank__id @<LANG>@skos:prefLabel ?rank__prefLabel .
    }
    UNION
    {
      <ID> bioc:has_occupation ?occupation__id .
      ?occupation__id @<LANG>@skos:prefLabel ?occupation__prefLabel .
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in ?deathRecord__id .
      ?deathRecord__id a warsa:DeathRecord ;
                      warsa:gender ?gender__id .
      ?gender__id @<LANG>@skos:prefLabel ?gender__prefLabel .
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in/(warsa:marital_status|prisoners:marital_status) ?maritalStatus__id .
      ?maritalStatus__id @<LANG>@skos:prefLabel ?maritalStatus__prefLabel .
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in ?deathRecord__id .
      ?deathRecord__id a warsa:DeathRecord ;
                      casualties:perishing_category ?perishingCategory__id .
      ?perishingCategory__id @<LANG>@skos:prefLabel ?perishingCategory__prefLabel .
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in ?deathRecord__id .
      ?deathRecord__id a warsa:DeathRecord ;
                      warsa:buried_in ?buriedIn__id .
      ?buriedIn__id skos:prefLabel ?buriedIn__prefLabel .
      BIND(CONCAT("/cemeteries/page/", REPLACE(STR(?buriedIn__id), "^.*\\\\/(.+)", "$1")) AS ?buriedIn__dataProviderUrl)
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in/(casualties:municipality_of_domicile|prisoners:municipality_of_domicile) ?municipalityOfDomicile__id .
      ?municipalityOfDomicile__id skos:prefLabel ?municipalityOfDomicile__prefLabel .
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in ?deathRecord__id .
      ?deathRecord__id a warsa:DeathRecord ;
                      casualties:municipality_of_death ?municipalityOfDeath__id .
      ?municipalityOfDeath__id skos:prefLabel ?municipalityOfDeath__prefLabel .
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in/(warsa:date_of_death|prisoners:date_of_death) ?deathTime .
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in/(casualties:unit|prisoners:unit) ?unit__id .
      ?unit__id skos:prefLabel ?unit__prefLabel .
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in/(casualties:municipality_of_residence|prisoners:municipality_of_residence) ?municipalityOfResidence__id .
      ?municipalityOfResidence__id skos:prefLabel ?municipalityOfResidence__prefLabel .
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in ?deathRecord__id .
      ?deathRecord__id a warsa:DeathRecord ;
                      casualties:municipality_of_burial ?municipalityOfBurial__id .
      ?municipalityOfBurial__id skos:prefLabel ?municipalityOfBurial__prefLabel .
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in ?deathRecord__id .
      ?deathRecord__id a warsa:DeathRecord ;
                      warsa:place_of_wounding ?placeOfWounding .
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in ?deathRecord__id .
      ?deathRecord__id a warsa:DeathRecord ;
                      warsa:date_of_wounding ?dateOfWounding .
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in ?deathRecord__id .
      ?deathRecord__id a warsa:DeathRecord ;
                      casualties:place_of_burial_number ?placeOfBurialNumber .
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in ?deathRecord__id .
      ?deathRecord__id a warsa:DeathRecord ;
                      casualties:unit_code ?unitCode .
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in/(warsa:number_of_children|prisoners:number_of_children) ?numberOfChildren .
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in/(casualties:municipality_of_birth|warsa:municipality_of_birth) ?municipalityOfBirth__id .
      ?municipalityOfBirth__id skos:prefLabel ?municipalityOfBirth__prefLabel .
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in/warsa:date_of_birth ?dateOfBirth .
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in ?deathRecord__id .
      ?deathRecord__id a warsa:DeathRecord ;
                      warsa:citizenship ?citizenship__id .
      ?citizenship__id @<LANG>@skos:prefLabel ?citizenship__prefLabel .
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in ?deathRecord__id .
      ?deathRecord__id a warsa:DeathRecord ;
                      warsa:nationality ?nationality__id .
      ?nationality__id @<LANG>@skos:prefLabel ?nationality__prefLabel .
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in/warsa:mother_tongue ?motherTongue__id .
      ?motherTongue__id @<LANG>@skos:prefLabel ?motherTongue__prefLabel .
    }
    UNION
    {
      <ID> foaf:page ?externalPage__id .
      BIND(?externalPage__id AS ?externalPage__prefLabel)
      BIND(?externalPage__id AS ?externalPage__dataProviderUrl)
    }
    UNION
    {
      <ID> ^articles:mentionsPerson ?article__id .

      ?article__id dce:title ?article__title ;
                    articles:issue/skos:prefLabel ?article__issue ;
                    dct:hasFormat ?article__dataProviderUrl .
      
      BIND(CONCAT(STR(?article__title), " (Kansa Taisteli ", STR(?article__issue), ")") AS ?article__prefLabel)
    }
    UNION 
    {
      ?disappearingEvent__id a warsa:Disappearing ;
                        crm-org:P11_had_participant  <ID> .
      BIND(?disappearingEvent__id AS ?disappearingEvent__prefLabel)
      BIND(?disappearingEvent__id AS ?disappearingEvent__dataProviderUrl)
    }
    UNION 
    {
      <ID> crm-org:P70i_is_documented_in/casualties:municipality_of_going_mia ?municipalityOfGoingMIA__id .
      ?municipalityOfGoingMIA__id skos:prefLabel ?municipalityOfGoingMIA__prefLabel .
    }
    UNION 
    {
      <ID> crm-org:P70i_is_documented_in/(warsa:place_of_going_mia_literal|prisoners:place_of_going_mia_literal) ?placeOfGoingMIA .
    }
    UNION 
    {
      <ID> crm-org:P70i_is_documented_in/(warsa:date_of_going_mia|prisoners:date_of_going_mia) ?dateOfGoingMIA .
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in ?prisonerRecord__id .
      ?prisonerRecord__id a warsa:PrisonerRecord .
      BIND(?prisonerRecord__id AS ?prisonerRecord__prefLabel)
      BIND(?prisonerRecord__id AS ?prisonerRecord__dataProviderUrl)
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in ?prisonerRecord__id .
      ?prisonerRecord__id a warsa:PrisonerRecord ;
                          prisoners:description_of_capture ?descriptionOfCapture .
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in ?prisonerRecord__id .
      ?prisonerRecord__id a warsa:PrisonerRecord ;
                          prisoners:additional_information ?otherCaptivityInformation .
    }                   
    UNION
    {
      <ID> crm-org:P70i_is_documented_in ?prisonerRecord__id .
      ?prisonerRecord__id a warsa:PrisonerRecord ;
                          prisoners:municipality_of_capture ?municipalityOfCapture__id .
      ?municipalityOfCapture__id skos:prefLabel ?municipalityOfCapture__prefLabel .
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in ?prisonerRecord__id .
      ?prisonerRecord__id a warsa:PrisonerRecord ;
                          warsa:sotilaan_aani_magazine ?sotilaanAani__id .
      ?sotilaanAani__id skos:prefLabel ?sotilaanAani__prefLabel ;
                        sch:contentUrl ?sotilaanAani__dataProviderUrl .

    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in ?prisonerRecord__id .
      ?prisonerRecord__id a warsa:PrisonerRecord ;
                          prisoners:captivity ?captivity__id .
      
      OPTIONAL { 
        ?captivity__id prisoners:date_begin ?startDate .
        BIND(CONCAT(STR(DAY(?startDate)), '.', STR(MONTH(?startDate)), '.', STR(YEAR(?startDate))) AS ?formattedStartDate)
      }
      OPTIONAL { 
        ?captivity__id prisoners:date_end ?endDate . 
        BIND(CONCAT(STR(DAY(?endDate)), '.', STR(MONTH(?endDate)), '.', STR(YEAR(?endDate))) AS ?formattedEndDate)
      }

      ?captivity__id prisoners:location ?location_ .
      ?location_ skos:prefLabel ?locationName .
      BIND(IF(BOUND(?formattedStartDate) && BOUND(?formattedEndDate), CONCAT(STR(?locationName), ' (', STR(?formattedStartDate), '–', STR(?formattedEndDate), ')'), STR(?locationName)) AS ?captivity__prefLabel)
      BIND(CONCAT("/camps/page/", REPLACE(STR(?location_), "^.*\\\\/(.+)", "$1")) AS ?captivity__dataProviderUrl)
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in ?prisonerRecord__id .
      ?prisonerRecord__id a warsa:PrisonerRecord ;
                          prisoners:date_of_capture ?dateOfCapture .
    }
    UNION
    {
      <ID> crm-org:P70i_is_documented_in ?prisonerRecord__id .
      ?prisonerRecord__id a warsa:PrisonerRecord ;
                          prisoners:date_of_return ?dateOfReturn .
    }
`

export const eventMapQuery = `
  SELECT DISTINCT ?id (SAMPLE(?lat_) AS ?lat) (SAMPLE(?long_) AS ?long) ?prefLabel ?dataProviderUrl ?markerColor ?description
  WHERE {
    BIND(<ID> AS ?actor)
    ?actor crm-org:P70i_is_documented_in ?record .

    {
      ?record (casualties:municipality_of_domicile/casualties:preferred_municipality)|prisoners:municipality_of_domicile ?id .
      BIND("violet" AS ?markerColor)
      BIND("Kotikunta / Municipality of domicile" AS ?description)
    }
    UNION
    {
      ?record warsa:buried_in ?id .
      BIND("orange" AS ?markerColor)
      BIND("Hautausmaa / Cemetery of burial" AS ?description)
    }
    UNION
    {
      ?record (casualties:municipality_of_residence/casualties:preferred_municipality)|prisoners:municipality_of_residence ?id .
      BIND("violet" AS ?markerColor)
      BIND("Asuinkunta / Municipality of residence" AS ?description)
    }
    UNION
    {
      ?record casualties:municipality_of_death/casualties:preferred_municipality ?id .
      BIND("red" AS ?markerColor)
      BIND("Kuolinkunta / Municipality of death" AS ?description)
    }
    UNION
    {
      ?record (casualties:municipality_of_birth/casualties:preferred_municipality)|warsa:municipality_of_birth ?id .
      BIND("green" AS ?markerColor)
      BIND("Synnyinkunta / Municipality of birth" AS ?description)
    }
    UNION 
    { 
      ?record prisoners:captivity/prisoners:location ?id . 
      BIND("yellow" AS ?markerColor)
      BIND("Sotavankeus / Captivity" AS ?description)
    }
    
    ?id skos:prefLabel ?prefLabel .

    OPTIONAL {
      ?id wgs84:lat ?lat__ ; 
        wgs84:long ?long__ .
      BIND(xsd:decimal(?lat__) AS ?lat_)
      BIND(xsd:decimal(?long__) AS ?long_)
      FILTER(BOUND(?lat_) && BOUND(?long_))
    }

    OPTIONAL {
      ?id <http://www.georss.org/georss/point> ?point .
      BIND(xsd:decimal(REPLACE(?point, "([0-9\\\\.\\\\-]+) ([0-9\\\\.\\\\-]+)", "$1")) AS ?lat_)
      BIND(xsd:decimal(REPLACE(?point, "([0-9\\\\.\\\\-]+) ([0-9\\\\.\\\\-]+)", "$2")) AS ?long_)
    }

    FILTER(BOUND(?lat_) && BOUND(?long_) || BOUND(?point))

  }
  GROUP BY ?id ?prefLabel ?dataProviderUrl ?markerColor ?description
`

export const externalSiteInstancePageQuery = `
  SELECT ?id ?url WHERE { 
    BIND (<ID> as ?id)
    BIND(CONCAT("https://www.sotasampo.fi/fi/persons/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1"), "?tab=2") AS ?url)
  }
`