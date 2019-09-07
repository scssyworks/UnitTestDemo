// Import test cases
const context = require.context('./test-cases', true, /\.spec\.js$/);
context.keys().forEach(context);
