module.exports = function (context, input, cb) {
  const propertiesBlacklist = []
  const propertiesWhitelist = ['brand', 'color family']
  let filteredProperties = input.properties

  if (propertiesBlacklist.length > 0) {
    filteredProperties = input.properties.filter(function (property) {
      if (propertiesBlacklist.indexOf(property.label.toLowerCase()) < 0) {
        return property
      }
    })
  }

  if (propertiesWhitelist.length > 0) {
    filteredProperties = input.properties.filter(function (property) {
      if (propertiesWhitelist.indexOf(property.label.toLowerCase()) >= 0) {
        return property
      }
    })
  }
  cb(null, {properties: filteredProperties})
}
