const perspectiveID = 'cemeteries'

export const cemeteryProperties = `
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
      ?id skos:altLabel ?altLabel .
    }
    UNION
    {
      ?id cemeteries:former_municipality ?formerMunicipality .
    }
    UNION
    {
      ?id cemeteries:current_municipality ?currentMunicipality .
    }
    UNION
    {
      ?id cemeteries:number_of_graves ?numberOfGraves .
    }
    UNION
    {
      ?id cemeteries:architect ?architect .
    }
    UNION
    {
      ?image__id crm-org:P138_represents ?id ;
                  crm-org:P138i_has_representation ?image__representation ;
                  dct:description ?image__content_description .
      FILTER(LANG(?image__content_description) = '<LANG>')

      OPTIONAL {
        ?id cemeteries:camera_club ?image__camera_club .
      }

      OPTIONAL {
        ?event crm-org:P94_has_created ?image__id ;
              crm-org:P14_carried_out_by ?image__photographer .
      }
      
      ?image__representation photographs:size photographs:lg ;
                      sch:contentUrl ?image__url .
      
      BIND(CONCAT(?image__content_description, ' (© ', COALESCE(?image__photographer, '-'), ', ' , COALESCE(?image__camera_club, '-'), ')') as ?image__description)
    }
`