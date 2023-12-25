const zapier = require("zapier-platform-core");

// Import your authentication strategy
const authentication = require("./authentication");

// Import your actions
const job = require("./creates/job");
const request = require("./creates/request");

const App = {
  version: require("./package.json").version,
  platformVersion: zapier.platformVersion,

  // Register your app's authentication strategy
  authentication: authentication,

  // Register your app's triggers, searches, and creates
  // TODO: Trigger based on WebHook???
  triggers: {},
  searches: {},
  creates: {
    [job.key]: createJobQueue,
    [request.key]: request,
  },
};

// TODO: Webhook callback handler

// Finally, export the app
module.exports = App;

// const {
//   config: authentication,
//   befores = [],
//   afters = [],
// } = require('./authentication');

// module.exports = {
//   // This is just shorthand to reference the installed dependencies you have.
//   // Zapier will need to know these before we can upload.
//   version: require('./package.json').version,
//   platformVersion: require('zapier-platform-core').version,

//   authentication,

//   beforeRequest: [...befores],

//   afterResponse: [...afters],

//   // If you want your trigger to show up, you better include it here!
//   triggers: {},

//   // If you want your searches to show up, you better include it here!
//   searches: {},

//   // If you want your creates to show up, you better include it here!
//   creates: {},

//   resources: {},
// };
