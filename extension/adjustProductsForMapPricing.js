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
  context.log.info({products: JSON.stringify(input.products)}, 'what products look after adjust step')

  cb(null, {products: input.products})
}
