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


export const cemeteryPropertiesInstancePage = `
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
    UNION
    {
      ?id cemeteries:address ?address .
    }
    UNION
    {
      ?id wgs84:lat ?lat .
    }
    UNION
    {
      ?id wgs84:long ?long .
    }
    UNION
    {
      ?id cemeteries:date_of_foundation ?dateOfFoundation .
    }
    UNION
    {
      ?id cemeteries:memorial ?memorial .
    }
    UNION
    {
      ?id cemeteries:memorial_sculptor ?memorialSculptor .
    }
    UNION
    {
      ?id cemeteries:memorial_unveiling_date ?memorialUnveilingDate .
    }
    UNION
    {
      ?id cemeteries:camera_club ?cameraClub .
    }
    UNION
    {
      ?id dct:source ?source__id .
      ?source__id skos:prefLabel ?source__prefLabel .
      FILTER(LANG(?source__prefLabel) = '<LANG>')
    }
`


export const cemeteryPlacesQuery = `
  SELECT ?id ?lat ?long
  (COUNT(DISTINCT ?cemetery) as ?instanceCount)
  WHERE {
    <FILTER>
    ?cemetery a warsa:Cemetery  ;
              wgs84:lat ?lat ;
              wgs84:long ?long .
    FILTER(datatype(?lat) = xsd:float)
    FILTER(datatype(?long) = xsd:float)
    BIND(?cemetery as ?id)
  }
  GROUP BY ?id ?lat ?long
`

export const placePropertiesInfoWindow = `
  ?id skos:prefLabel ?prefLabel__id .
  BIND(?prefLabel__id AS ?prefLabel__prefLabel)
  BIND(CONCAT("/cemeteries/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)

  OPTIONAL {
    ?id cemeteries:number_of_graves ?numberOfGraves .
  }

  OPTIONAL {
    ?image__id crm-org:P138_represents ?id ;
                crm-org:P138i_has_representation ?image__representation .
    ?image__representation photographs:size photographs:sm ;
                          sch:contentUrl ?image__url .
  }
`

export const peopleBuriedAt = `
  OPTIONAL {
    <FILTER>
    ?related__id warsa:buried_in ?id .
    ?related__id skos:prefLabel ?related__prefLabel .
    BIND(CONCAT("/casualties/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
  }
`
