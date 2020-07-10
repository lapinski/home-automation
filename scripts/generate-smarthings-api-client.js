#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { generateApi } = require('swagger-typescript-api');

const DefaultExitCode = 0;
const ErrorExitCode = -1;

const writeFileAsync = (path, content) => new Promise((resolve, reject) => {
  fs.writeFile(path, content, (data, err) => {
    if (err) {
      reject(err);
    }

    resolve(data);
  });
});

const main = async () => {
  let exitCode = DefaultExitCode;

  const inputSpecFilepath = 'https://swagger.api.smartthings.com/public/st-api.yml';
  const srcPath = path.join(process.cwd(), 'packages', 'smartthings-api-client', 'src');
  const filename = 'SmartThingsAPIClient.ts';
  const filepath = path.join(srcPath, filename);

  const apiOptions = {
    name: filepath,
    url: inputSpecFilepath,
  };

  let output;
  try {
    console.log(`Generting Client using: ${JSON.stringify(apiOptions, null, 2)}`);
    output = await generateApi(apiOptions);
  }
  catch (error) {
    console.log('Error Generating API');
    throw error;
  }

  const res = await writeFileAsync(filepath, output);  
  console.log(JSON.stringify(res, null, 2));

  return Promise.resolve(exitCode);
};


if (require.main === module) {
  main()
    .then((exitCode) => {
      console.log('DONE');
      process.exit(exitCode === undefined ? DefaultExitCode : exitCode);
    })
    .catch((error) => {
      console.error('An Error Occured');
      console.error(error.message);
      console.error(JSON.stringify(error, null, 2));
      process.exit(ErrorExitCode);
    });
}

