module.exports = function (context, input, cb) {
  const triggerProps = [
    {
      label: 'Apply Map',
      value: 'yes'
    }
  ]
  for (let product of input.products) {
    if (product.properties) {
      if (hasTriggerProperty(product.properties, triggerProps)) {
        product.flags.isMapProduct = true
      }
    }
  }
  cb(null, {products: input.products})
}

/**
 * @param properties
 * @param triggerProps
 * @return {boolean}
 */
function hasTriggerProperty (properties, triggerProps) {
  for (let property of properties) {
    let foundObject = triggerProps.find(triggerProp => triggerProp.label === property.label && triggerProp.value === property.value)
    if (foundObject) {
      return true
    }
  }
  return false
}
