module.exports = async (context, input) => {
  const { mapPropertyLabel = '' } = context.config || {}

  const filteredProperties = input.properties.filter(({ label }) => (
    mapPropertyLabel.toLowerCase() !== label.toLowerCase()
  ))

  return { properties: filteredProperties }
}
