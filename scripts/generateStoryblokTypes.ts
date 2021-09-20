// @ts-ignore
const path = require('path');
const storyblokToTypescript = require('storyblok-generate-ts');

storyblokToTypescript({
  // required
  componentsJson: require('./components.SPACEID.json'), // pull components with storyblok
  // required
  path: path.join(__dirname, '../src/interfaces/generated/components-schema.ts'), // make sure path exists
  // optional type prefix (default: none)
  titlePrefix: '',
  // optional type name suffix (default: [Name]_Storyblok)
  titleSuffix: '_storyblok',
  // optional function for custom types (key, obj) => {}
  // customTypeParser: exampleCustomParser
});