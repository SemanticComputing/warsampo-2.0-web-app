export const mapIntBarChart = ({ sparqlBindings, config }) => {
  const results = []

  sparqlBindings.forEach((b, index, bindings) => {
    results.push({
      category: b.category.value,
      prefLabel: b.prefLabel.value,
      instanceCount: parseInt(b.instanceCount.value)
    })

    if (config && config.fillEmptyValues && index + 1 < sparqlBindings.length && parseInt(b.category.value)) {
      let categoryIter = parseInt(b.category.value)
      const nextNonZeroCategory = bindings[index + 1].category.value
      if (parseInt(nextNonZeroCategory)) {
        // add zeros until we reach the next category with a non zero value
        while (categoryIter < nextNonZeroCategory - 1) {
          categoryIter += 1
          results.push({
            category: categoryIter,
            prefLabel: categoryIter.toString(),
            instanceCount: 0
          })
        }
      }
    }

  })

  return results
}

export const mapInstancePagePlaces = sparqlBindings => {
  const results = sparqlBindings.map(b => {
    return {
      id: b.id.value,
      lat: b.lat.value,
      long: b.long.value,
      prefLabel: { 
        prefLabel: b.prefLabel ? b.prefLabel.value : '', 
        dataProviderUrl: b.dataProviderUrl ? b.dataProviderUrl.value : null 
      },
      markerColor: b.markerColor ? b.markerColor.value : '',
      description: b.description ? b.description.value : ''
    }
  })
  console.log('results:', results)
  return results
}