// emailComponent.js
require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react']
});

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const VerifyEmail = require('./VerifyEmail').default; // Ensure this path is correct

// Function to generate the email HTML
const generateEmailHTML = (verificationCode) => {
  return ReactDOMServer.renderToStaticMarkup(
    React.createElement(VerifyEmail, { verificationCode })
  );
};

module.exports = generateEmailHTML;
