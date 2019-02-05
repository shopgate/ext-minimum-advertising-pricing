module.exports = async (context, input) => {
  const { mapPropertyLabel = '', mapPropertyTrueValue = '' } = context.config || {}

  const adjustedProducts = input.products.map((product) => {
    const trueMapProperty = product.properties.find(({ label, value }) => (
      mapPropertyLabel.toLowerCase() === label.toLowerCase()
      && mapPropertyTrueValue.toLowerCase() === value.toLowerCase()
    ))

    product.flags.isMapProduct = !!trueMapProperty

    return product
  })

  return { products: adjustedProducts }
}
