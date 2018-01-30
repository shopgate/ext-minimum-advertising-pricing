module.exports = function (context, input, cb) {
  const adjustedProducts = input.products.map((product) => {
    if (product.flags.isMapProduct) {
      product.price.unitPrice = null
      product.price.unitPriceStriked = null
      product.price.unitPriceNet = null
      product.price.unitPriceWithTax = null
      product.price.msrp = null
      product.price.tiers = []
    }
    return product
  })

  cb(null, {products: adjustedProducts})
}
