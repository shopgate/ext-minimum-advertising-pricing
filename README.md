# Shopgate Connect - Minimum Advertising Pricing (MAP) Extension

[![GitHub license](http://dmlc.github.io/img/apache2.svg)](LICENSE)

Shopgate's minimum advertising pricing (MAP) extension.

## Configuration

Set the following values in your Shopgate Connect Admin:
- `mapPropertyLabel` - (text) Label of product property containing MAP information
- `mapPropertyTrueValue` - (text) Value of the MAP property when the product is a MAP product
The label and value are compared in a case insensitive way.
### Example

```json
{
    "mapPropertyLabel": "Apply Map",
    "mapPropertyTrueValue": "yes"
}
```

## Changelog

See [CHANGELOG.md](CHANGELOG.md) file for more information.

## Contributing

See [CONTRIBUTING.md](docs/CONTRIBUTING.md) file for more information.

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.

## License

This extension is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.
