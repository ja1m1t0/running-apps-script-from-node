const { google } = require("googleapis");
const { auth } = require("google-auth-library");

// Load the credentials from the JSON key file
const credentials = require("./path/to/keyfile.json");

// Scopes required for the Google Apps Script API
const scopes = ["https://www.googleapis.com/auth/script.scriptapp"];

// Authenticate with the Google API using the service account credentials
const authClient = await auth.fromJSON(credentials);
authClient.scopes = scopes;

// Make a request to the Google Apps Script API using google.script.run
const scriptId = "YOUR_SCRIPT_ID";
const functionName = "YOUR_FUNCTION_NAME";
const request = {
  function: functionName,
  parameters: ["param1", "param2"],
};
const response = await google.script.run({
  auth: authClient,
  scriptId,
  ...request,
});
console.log(response);
