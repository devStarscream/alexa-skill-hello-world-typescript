/**
 * IMPORTS
 */

// const WebSocket = require('ws');
// const ClientConfigBuilder = require('ask-sdk-local-debug/dist/builder/ClientConfigBuilder');
// const SkillInvokerConfigBuilder = require('ask-sdk-local-debug/dist/builder/SkillInvokerConfigBuilder');
// const WebSocketClientConfigBuilder = require('ask-sdk-local-debug/dist/builder/WebSocketClientConfigBuilder');
// const LocalDebugClient = require('ask-sdk-local-debug/dist/client/LocalDebugClient');
// const { argsParser /*, getHandlerFunction*/ } = require('ask-sdk-local-debug/dist/util/ArgsParserUtils');


// const express = require("express");
// const LambdaHandler = require("ask-sdk-core/dist/skill/factory/BaseSkillFactory");
// const RequestEnvelope = require("ask-sdk-model");
// const skillHandler = require("../lambda");

// import { WebSocket } from 'ws';
// import { ClientConfigBuilder } from 'ask-sdk-local-debug/dist/builder/ClientConfigBuilder';
// import { SkillInvokerConfigBuilder } from 'ask-sdk-local-debug/dist/builder/SkillInvokerConfigBuilder';
// import { WebSocketClientConfigBuilder } from 'ask-sdk-local-debug/dist/builder/WebSocketClientConfigBuilder';
// import { LocalDebugClient } from 'ask-sdk-local-debug/dist/client/LocalDebugClient';
// import { argsParser /*, getHandlerFunction*/ } from 'ask-sdk-local-debug/dist/util/ArgsParserUtils';

import { WebSocket } from 'ws';
import { ClientConfigBuilder } from 'ask-sdk-local-debug';
import { SkillInvokerConfigBuilder } from 'ask-sdk-local-debug';
import { WebSocketClientConfigBuilder } from 'ask-sdk-local-debug';
import { LocalDebugClient } from 'ask-sdk-local-debug';
import { argsParser } from 'ask-sdk-local-debug';

// import { ClientConfigBuilder } from './node_modules/ask-sdk-local-debug/dist/builder/ClientConfigBuilder';
// import { SkillInvokerConfigBuilder } from './node_modules/ask-sdk-local-debug/dist/builder/SkillInvokerConfigBuilder';
// import { WebSocketClientConfigBuilder } from './node_modules/ask-sdk-local-debug/dist/builder/WebSocketClientConfigBuilder';
// import { LocalDebugClient } from './node_modules/ask-sdk-local-debug/dist/client/LocalDebugClient';
// import { argsParser /*, getHandlerFunction*/ } from './node_modules/ask-sdk-local-debug/dist/util/ArgsParserUtils';

// const WebSocket = require('ws');
// const ClientConfigBuilder = require('./node_modules/ask-sdk-local-debug/dist/builder/ClientConfigBuilder');
// const SkillInvokerConfigBuilder = require('./node_modules/ask-sdk-local-debug/dist/builder/SkillInvokerConfigBuilder');
// const WebSocketClientConfigBuilder = require('./node_modules/ask-sdk-local-debug/dist/builder/WebSocketClientConfigBuilder');
// const LocalDebugClient = require('./node_modules/ask-sdk-local-debug/dist/client/LocalDebugClient');
// const argsParser /*, getHandlerFunction*/ = require('./node_modules/ask-sdk-local-debug/dist/util/ArgsParserUtils');

// import * as express from "express";
// import { LambdaHandler } from "ask-sdk-core/dist/skill/factory/BaseSkillFactory";
// import { RequestEnvelope } from "ask-sdk-model";
import { handler as skillHandler } from "../lambda";
// const handler = require("../lambda/index");
// const skillHandler = handler;

const { argv } = argsParser();

const clientConfig = new ClientConfigBuilder()
    .withAccessToken(argv['accessToken'])
    // .withAccessToken(argv.accessToken)
    // .withAccessToken(accessToken)
    .withHandlerName(argv['handlerName'])
    // .withHandlerName(argv.handlerName)
    // .withHandlerName("handler")
    .withSkillEntryFile(argv['skillEntryFile'])
    // .withSkillEntryFile(argv.skillEntryFile)
    // .withSkillEntryFile(skillEntryFile)
    .withSkillId(argv['skillId'])
    // .withSkillId(argv.skillId)
    // .withSkillId(skillId)
    .withRegion(argv['region'])
    // .withSkillId(argv.region)
    // .withRegion(region)
    .build();

const skillInvokerConfig = new SkillInvokerConfigBuilder()
    // .withHandler(getHandlerFunction(clientConfig.skillEntryFile, clientConfig.handlerName))
    .withHandler(skillHandler)
    // .withHandler(handler)
    .build();

const webSocketClientConfig = new WebSocketClientConfigBuilder()
    .withSkillId(clientConfig.skillId)
    .withAccessToken(clientConfig.accessToken)
    .withRegion(clientConfig.region)
    .build();


const webSocketClient = new WebSocket(
    webSocketClientConfig.webSocketServerUri,
    {
        headers: webSocketClientConfig.headers,
    });

const client = new LocalDebugClient(webSocketClient, skillInvokerConfig);

console.log("Here is my client");
// console.log(JSON.stringify(client));
console.log(client);