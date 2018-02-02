module.exports = function (context, input, cb) {
  const adjustedProducts = input.products.map((product) => {
    if (product.flags.isMapProduct) {
      product.price = null
    }
    return product
  })

  cb(null, {products: adjustedProducts})
}
