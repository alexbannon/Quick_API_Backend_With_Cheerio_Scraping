Download and install node and node package manager

Download and install postgreSQL

npm install

createdb morning_consult_test

<!-- node db/connection.js
node db/schema.js -->

Task: Create a REST API Server

The goal of this challange is to implement a fully functional HTTP API server using node.js. REST servers

are extremely important in many aspects of our work, as well as for many, many other technology companies.

Here are the specific requirements of the data challange:

1. Create a API server that can accept basic GET requests.

2. Run the server under SSL encryption (i.e. HTTPS). Use openssl or a similar library to generate a key

and self-sign the certificate.

3. The REST function should take a single parameter, a US state name, and return the senators and

governor of the state.

4. The entire serverlet should be self-contained in a single directory (it can have subfolders).

5. I should be able to replicate your application using only this directory.

In a nutshell, the idea is that someone could ping the URL of the server application like so:

https://localhost:3000/myApi?state=Illinois

and receive the state legislator information for that state through an encrypted connection. If you do not yet

have node.js, download it here: https://nodejs.org/en/. I advise using https://www.npmjs.com/package/

express-api-server as the serverlet.

Good luck!
