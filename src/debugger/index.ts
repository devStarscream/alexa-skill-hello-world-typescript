/**
 * IMPORTS
 */
import { WebSocket } from 'ws';
// @ts-ignore
import { ClientConfigBuilder } from 'ask-sdk-local-debug';
// @ts-ignore
import { SkillInvokerConfigBuilder } from 'ask-sdk-local-debug';
// @ts-ignore
import { WebSocketClientConfigBuilder } from 'ask-sdk-local-debug';
// @ts-ignore
import { LocalDebugClient } from 'ask-sdk-local-debug';
// @ts-ignore
import { argsParser } from 'ask-sdk-local-debug';

import { handler as skillHandler } from "../lambda";

const { argv } = argsParser();

const clientConfig = new ClientConfigBuilder()
    // .withAccessToken(argv['accessToken'])
    .withAccessToken(argv.accessToken)
    // .withAccessToken(accessToken)
    // .withHandlerName(argv['handlerName'])
    .withHandlerName(argv.handlerName)
    // .withHandlerName("handler")
    // .withSkillEntryFile(argv['skillEntryFile'])
    .withSkillEntryFile(argv.skillEntryFile)
    // .withSkillEntryFile(skillEntryFile)
    // .withSkillId(argv['skillId'])
    .withSkillId(argv.skillId)
    // .withSkillId(skillId)
    // .withRegion(argv['region'])
    .withSkillId(argv.region)
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