# Alexa Hello World Skill project using AWS Lambda and Typescript

This is a simple starter project for Alexa skills using Typescript.

## What is included in the project

### Default built-in intent / request handlers

| Name |
| --- |
| `LaunchRequest` |
| `SessionEndedRequest` |
| `System.ExceptionEncountered` |
| `AMAZON.HelpIntent` |
| `AMAZON.StopIntent`|
| `AMAZON.CancelIntent` |
| `AMAZON.FallbackIntent` |

### Custom Intent handlers

| Name | Description |
| --- | --- |
| `HelloWorld` | Triggered when the user says "hello", will answer back with "hello". |
| `Debug` | Can be placed at the beginning of the request handlers stack and it will print the `handlerInput`. Useful for debugging. |

### Error handlers

| Name | Description |
| --- | --- |
| `Unexpected` | Catches `ErrorTypes.Unexpected`, which should be thrown when...something unexpected happens. It will tell the user something unexpected happend, and to try again later. |
| `Unknown` | Catches all other errors. It will tell the user it didn't understand the command, and to try saying it again (doesn't end session). |

- Request interceptors

| Name | Description |
| --- | --- |
| `Localization` | Adds `i18next` localization functions to the `RequestAttributes`. |
| `Slots` | Parses the slot values, adds additional useful information to them (e.g. if it was an exact match, or if it's ambiguous etc.), and adds them to the `RequestAttributes`. Check the `GetSlotValues` function inside `lambda/custom/lib/helpers.ts` for more details. |


### Extra content

#### Localization strings

Check `lambda/custom/lib/strings.ts`.

#### Constants

Including the String keys, so you can have type safety everywhere.

Check `lambda/custom/lib/constants.ts`.

#### Helper functions

Many helper functions which should reduce code duplication, and reduce the code needed to do common tasks.

Check `lambda/custom/lib/helpers.ts`.

---

### Live Debugging
 This repository uses Visual Studio Code debugger configuration files in `.vscode/launch.json` file.
 There are available two configurations:
 1. `Alexa Skill (Node)` debugger
 2. `Alexa Skill (Ts)` debugger


Follow the configuration 
https://developer.amazon.com/en-US/docs/alexa/ask-toolkit/vs-code-testing-simulator.html

#### Typescript debugger configuration
This configuration is derived from [ask-sdk-local-debug](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs/tree/2.0.x/ask-sdk-local-debug) module. Check the module README for more details.

 ```json
 ...
 {
	"name": "Alexa Skill (Ts)",
	"type": "node",
	"request": "launch",
	"preLaunchTask": "npm: debugger",
	"program": "${workspaceFolder}/src/debugger/index.ts",
	"sourceMaps": true,
	"smartStep": true,
	"internalConsoleOptions": "openOnSessionStart",
	"outFiles": [
		"${workspaceFolder}/src/dist/debugger/**/*.js"
	],
	"args": [
		"--accessToken",
		"${command:ask.accessToken}",
		"--skillId",
		"${command:ask.skillIdFromWorkspace}",
		"--handlerName",
		"handler",
		"--skillEntryFile",
		"${workspaceFolder}/src/dist/debugger/index.js",
		"--region",
		"EU"
	],
	"cwd": "${workspaceFolder}/src/debugger"
}
...
```

In order to transpile Typescript code into JS and debug the skill on your VS Console, it's necessary to create a dedicated "debugger" configuration in `./src/debugger/index.ts`.

To debug the skill's Typescript code
1.  Select `Alexa Skill (Ts)` VSCode available debuggers
2.  Set a breakpoint in code under `./src/lambda`, for instance place a breakpoint in `Launch.ts` and `Hello.ts` files.
3. Open your terminal and run ``` $ ask dialog -l en-US -p YOUR_ASK_PROFILE -g development ```
4. Type in your terminal `open test hello world`
5. Check the breakpoint into VSCode
6. Check the Debug Console into VSCode
7. Type in your terminal `hello world`
8. Check the breakpoint into VSCode
9. Check the Debug Console into VSCode
10. type `CTRL + c` to exits `ask dialog`.
11. Stop VSCode debugger.

#### NodeJS debugger configuration
This configuration is baded on [ask-sdk-local-debug](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs/tree/2.0.x/ask-sdk-local-debug) module.
You can debug also the transpiled NodeJS code, to do so:
1. Select `Alexa Skill (Node)` VSCode available debuggers
2. Set a breakpoint into the transpiled code under `./dist/lambda`, for instance place a breakpoint in `Launch.js` and `Hello.js` files.
3. Open your terminal and run ``` $ ask dialog -l en-US -p YOUR_ASK_PROFILE -g development ```
4. Type in your terminal `open test hello world`
5. Check the breakpoint into VSCode
6. Check the Debug Console into VSCode
7. Type in your terminal `hello world`
8. Check the breakpoint into VSCode
9. Check the Debug Console into VSCode
10. type `CTRL + c` to exits `ask dialog`.
11. Stop VSCode debugger.

### Scripts

There are a few scripts inside `package.json` for building and deploying your lambda function using the `ask-cli`. Check the [Developer tasks section below](#developer-tasks) for more details.

### Tests

The project contains automated tests using [jest](https://jestjs.io/). Check the `__tests__` folder.

```bash
$ npm run test
```

If you want to include code coverage, run

```bash
$ npm run test:coverage
```

You can also start `jest` in watch mode:

```bash
$ npm run test:watch
```

- Travis CI and Codecov integrations

## Pre-requisites

- Node.js
- Register for an [AWS Account](https://aws.amazon.com/)
- Register for an [Amazon Developer Account](https://developer.amazon.com/)
- Install and Setup [ASK CLI](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html)

## Installation

- Install the dependencies

```bash
$ npm install
```

## Deployment

**ASK CLI** will create the skill and the Lambda function for you. The Lambda function will be created in `us-east-1 (Northern Virginia)` by default.

1. Navigate to the project's root directory. you should see a file named 'skill.json' there.

2. Deploy the skill and the Lambda function in one step by running the following command:

```bash
$ ask deploy
```

## Local development

In order to develop locally and see your changes reflected instantly, you will need to create an SSH tunnel or expose somehow your local development server. There are several services that allow you to do this, for example [ngrok](https://ngrok.com/) or [serveo.net](https://serveo.net/).



## Developer tasks

| Command | Description |
| --- | --- |
| `clean` | Deletes the `dist` folder |
| `pre-build` | Builds the lambda function and exports it to the `dist/lambda` folder |
| `build` | Builds the lambda function, runs tests and exports it to the `dist/lambda` folder |
| `deploy` | Builds the lambda function and deploys EVERYTHING (skill, model, lambda) |
| `deploy:lambda` | Builds the lambda function and deploys it (just the lambda function) |

To see the actual commands, check `package.json`.

Also check the [ASK CLI Command Reference](https://developer.amazon.com/docs/smapi/ask-cli-command-reference.html) for more details on using the `ASK CLI`.

## Testing

Taken from [the official hello world project](https://github.com/alexa/skill-sample-nodejs-hello-world/blob/master/instructions/7-cli.md#testing).

In ordere to test your skill you need either:
1. login to Alexa Developer Console, and **enable the "Test" switch on your skill from the "Test" Tab**.****, or
2. Simulate verbal interaction with your skill through the ASK CLI (this might take a few moments) using the following command:
	```bash
	 $ ask dialog -l en-US -p YOUR_ASK_PROFILE -g development
	```
    * `-l` is the locale you want to test (this is one of the interaction models you have under `skill-package/interactionModels/custom`);
    * -p is the Alexa profile you configured in your ASK CLI (run `ask configure` to list the account you currently have), in case you're using `default` account then remove parameter and it looks like the following:
       * ``` $ ask dialog -l en-US -g development ```
    * `-g` is the stage of the skill.

3. Once the "Test" switch is enabled, test your skill on devices associated with the developer account as well. Speak to Alexa from any enabled device, from your browser at [echosim.io](https://echosim.io/welcome), or through your Amazon Mobile App and say :

	```text
	Alexa, start hello world
	```

## Customization

Taken from [the official hello world project](https://github.com/alexa/skill-sample-nodejs-hello-world/blob/master/instructions/7-cli.md#customization).

1. ```./skill.json```

   Change the skill name, example phrase, icons, testing instructions etc ...

   Remember than many information are locale-specific and must be changed for each locale (e.g. en-US, en-GB, de-DE, etc.)

   See the Skill [Manifest Documentation](https://developer.amazon.com/docs/smapi/skill-manifest.html) for more information.

2. ```./lambda/custom/index.ts```

   Modify messages, and data from the source code to customize the skill.

3. ```./models/*.json```

	Change the model definition to replace the invocation name and the sample phrase for each intent.  Repeat the operation for each locale you are planning to support.

4. Remember to re-deploy your skill and Lambda function for your changes to take effect.

	```bash
	$ npm run deploy
	```

## License

Open sourced under the [MIT license](./LICENSE.md).

## Credits
This project takes as reference the solutions adopted below:
1. https://dzone.com/articles/alexa-skill-with-typescript
2. https://github.com/Xzya/alexa-typescript-starter#local-development

