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