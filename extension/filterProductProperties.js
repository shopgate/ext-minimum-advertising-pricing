module.exports = function (context, input, cb) {
  const propertiesBlacklist = ['apply map']
  const filteredProperties = input.properties.filter(function (property) {
    if (propertiesBlacklist.indexOf(property.label.toLowerCase()) < 0) {
      return property
    }
  })

  cb(null, {properties: filteredProperties})
}
