module.exports = function (context, input, cb) {
  const propertiesToRemove = ['Apply Map']
  const propertiesToReturen = input.properties.filter(function (property) {
    if (propertiesToRemove.indexOf(property.label) < 0) {
      return property
    }
  })
  cb(null, {properties: propertiesToReturen})
}
