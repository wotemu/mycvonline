# mypersonalblogapp

Personal blog

## Quick Start

```bash
# Install dependencies for server and client
npm install

# Run the client & server with concurrently
npm run dev

# Run the Express server and client independetly
npm run server # Server runs on http://localhost:5000
npm run client # Client on http://localhost:3000


Create a config folder and then keys_dev.js then copy the following:

module.exports = {
  mongoURI: 'YOUR_OWN_MONGO_URI',
  secretOrKey: 'YOUR_OWN_SECRET'
};
```
