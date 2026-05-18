const perspectiveID = 'cemeteries'

export const cemeteryProperties = `
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
      ?id skos:altLabel ?altLabel .
    }
    UNION
    {
      <SUBQUERY>
      ?id cemeteries:former_municipality ?formerMunicipality .
    }
    UNION
    {
      <SUBQUERY>
      ?id cemeteries:current_municipality ?currentMunicipality .
    }
    UNION
    {
      <SUBQUERY>
      ?id cemeteries:number_of_graves ?numberOfGraves .
    }
    UNION
    {
      <SUBQUERY>
      ?id cemeteries:architect ?architect .
    }
    UNION
    {
      <SUBQUERY>
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
      BIND(<ID> as ?id)
      ?id skos:altLabel ?altLabel .
    }
    UNION
    {
      BIND(<ID> as ?id)
      ?id cemeteries:former_municipality ?formerMunicipality .
    }
    UNION
    {
      BIND(<ID> as ?id)
      ?id cemeteries:current_municipality ?currentMunicipality .
    }
    UNION
    {
      BIND(<ID> as ?id)
      ?id cemeteries:number_of_graves ?numberOfGraves .
    }
    UNION
    {
      BIND(<ID> as ?id)
      ?id cemeteries:architect ?architect .
    }
    UNION
    {
      BIND(<ID> as ?id)
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
      BIND(<ID> as ?id)
      ?id cemeteries:address ?address .
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
    UNION
    {
      BIND(<ID> as ?id)
      ?id cemeteries:date_of_foundation ?dateOfFoundation .
    }
    UNION
    {
      BIND(<ID> as ?id)
      ?id cemeteries:memorial ?memorial .
    }
    UNION
    {
      BIND(<ID> as ?id)
      ?id cemeteries:memorial_sculptor ?memorialSculptor .
    }
    UNION
    {
      BIND(<ID> as ?id)
      ?id cemeteries:memorial_unveiling_date ?memorialUnveilingDate .
    }
    UNION
    {
      BIND(<ID> as ?id)
      ?id cemeteries:camera_club ?cameraClub .
    }
    UNION
    {
      BIND(<ID> as ?id)
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
    FILTER(datatype(?lat) = xsd:double)
    FILTER(datatype(?long) = xsd:double)
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
