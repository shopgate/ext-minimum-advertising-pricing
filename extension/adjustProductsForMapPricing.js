module.exports = function (context, input, cb) {
  for (let product of input.products) {
    if (product.flags.isMapProduct) {
      product.price.unitPrice = null
      product.price.unitPriceStriked = null
      product.price.unitPriceNet = null
      product.price.unitPriceWithTax = null
      product.price.tiers = []
    }
  }

  cb(null, {products: input.products})
}
