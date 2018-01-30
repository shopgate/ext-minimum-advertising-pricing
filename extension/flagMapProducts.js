module.exports = function (context, input, cb) {
  const triggerProps = [
    {
      label: 'Apply Map',
      value: 'yes'
    }
  ]
  const adjustedProducts = input.products.map((product) => {
    if (hasTriggerProperty(product.properties, triggerProps)) {
      product.flags.isMapProduct = true
    }
    return product
  })
  cb(null, {products: adjustedProducts})
}

/**
 * @param properties
 * @param triggerProps
 * @return {boolean}
 */
function hasTriggerProperty (properties, triggerProps) {
  for (let property of properties) {
    let foundObject = triggerProps.find(triggerProp => triggerProp.label.toLowerCase() === property.label.toLowerCase() && triggerProp.value.toLowerCase() === property.value.toLowerCase())
    if (foundObject) {
      return true
    }
  }
  return false
}
