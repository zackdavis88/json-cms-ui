# JSON CMS UI

JSON CMS UI is a React+Redux web application running on NextJS that is designed to help with web application content management utilizing the [JSON CMS API](https://github.com/zackdavis88/json-cms-api#readme).

## Required Dependencies

JSON CMS UI requires NodeJS:

### [NodeJS 17.8.0](https://nodejs.org/en/download/)

## Required Configuration

Before running the UI and getting started there are a few steps that
must be completed.

**_NOTE:_** _These steps assume you are using a Linux operating system, the
equivalent Windows commands will have to be researched on your own._

**_You must complete all steps to start the UI_**

### 1. Install Node Modules

Run the following command from the _root of the cloned repository_ to
install node modules required for the API.

```
npm install
```

### 2. Configure HTTPS

This step may be completed by providing a CA signed certificate, assuming
you have the .pem files, or by generating a self-signed certificate
as shown below:

```
mkdir -p json-cms-ui/config/ssl
cd json-cms-ui/config/ssl
openssl req -x509 -nodes -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365
```

_You will be asked questions when generating the self-signed certificate, answer the prompts until the process completes_

## Start Up

**_After all node modules have been installed, use the following command
to start the API._**

Development Mode

```
npm run start
```

Production Mode

```
npm run start:prod
```
