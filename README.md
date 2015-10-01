#Installation Instructions

Download and install node and node package manager

Download and install postgreSQL

Open PostgreSQL locally

Then run the following commands in your terminal:

```
npm install

createdb morning_consult_test

node db/schema.js

node scrape.js

node index.js
```

Navigate to https://localhost:3000

API located at: https://locahost:3000/myApi?state=Illinois

If your browser yells at you about security, see Notes below (but http server lives at localhost:8080)

#Notes

The SSL encryption is self signed, so while navigating to https://localhost:3000 works, every browser will very much not like it. You can navigate past the warning by clicking advanced in Chrome or ignoring the warning in Firefox. If you can't get past the warning, the server also responds to http requests on http://localhost:8080

In order to seed the API I scraped data from NGA and OpenCongress. While 150 names and 50 states isn't really all that much information, I figured it would be easier in the future to add more information to the database if needed. This means that if you are not seeing data, you did not run `node scrape.js`

Requested functionality from below should all be working, so let me know if there's any problems!

Thanks!


#Task: Create a REST API Server

The goal of this challange is to implement a fully functional HTTP API server using node.js. REST servers are extremely important in many aspects of our work, as well as for many, many other technology companies.

Here are the specific requirements of the data challange:

1. Create a API server that can accept basic GET requests.

2. Run the server under SSL encryption (i.e. HTTPS). Use openssl or a similar library to generate a key and self-sign the certificate.

3. The REST function should take a single parameter, a US state name, and return the senators and governor of the state.

4. The entire serverlet should be self-contained in a single directory (it can have subfolders).

5. I should be able to replicate your application using only this directory.

In a nutshell, the idea is that someone could ping the URL of the server application like so:

https://localhost:3000/myApi?state=Illinois

and receive the state legislator information for that state through an encrypted connection. If you do not yet have node.js, download it here: https://nodejs.org/en/. I advise using https://www.npmjs.com/package/ express-api-server as the serverlet.

Good luck!
