const express = require("express");
const app = express();
const googleAuth = require("google-auth-library");
const googleapis = require("googleapis");

const scriptId = "YOUR_SCRIPT_ID";
const functionName = "YOUR_FUNCTION_NAME";

// Authenticate the user.
const auth = googleAuth.getAuth();
auth.authorize({
  clientId: "YOUR_CLIENT_ID",
  clientSecret: "YOUR_CLIENT_SECRET",
  redirectUri: "YOUR_REDIRECT_URI",
});

// Create a new Google Apps Script client.
const appsScript = googleapis.appsscript("v1");

// Run the function.
const response = await appsScript.scripts.run({
  scriptId: scriptId,
  functionName: functionName,
  params: {
    // The parameters to pass to the function.
  },
});

// Handle the response.
if (response.error) {
  // Handle the error.
} else {
  // Do something with the response.
}
