// import * as express from "express";
// import * as bodyParser from "body-parser";
// import { AddressInfo } from "net";
// import { LambdaHandler } from "ask-sdk-core/dist/skill/factory/BaseSkillFactory";
// import { RequestEnvelope } from "ask-sdk-model";

// import { handler as helloHandler } from "../custom";

// function CreateHandler(handler: LambdaHandler): express.RequestHandler {
//     return (req, res) => {
//         handler(req.body as RequestEnvelope, null, (err, result) => {
//             if (err) {
//                 return res.status(500).send(err);
//             }
//             return res.status(200).json(result);
//         });
//     };
// }

// // create server
// const server = express();
// const listener = server.listen(process.env.port || process.env.PORT || 3980, function () {
//     const { address, port } = listener.address() as AddressInfo;
//     console.log('%s listening to %s%s', server.name, address, port);
// });

// // parse json
// server.use(bodyParser.json());

// // connect the lambda functions to http
// server.post("/", CreateHandler(helloHandler));


// import * as express from "express";
// import * as bodyParser from "body-parser";
// import { AddressInfo } from "net";
// import { LambdaHandler } from "ask-sdk-core/dist/skill/factory/BaseSkillFactory";
// import { RequestEnvelope } from "ask-sdk-model";

// import { handler as helloHandler } from "../custom";

// function CreateHandler(handler: LambdaHandler): express.RequestHandler {
//     return (req, res) => {
//         handler(req.body as RequestEnvelope, null, (err, result) => {
//             if (err) {
//                 return res.status(500).send(err);
//             }
//             return res.status(200).json(result);
//         });
//     };
// }

// // create server
// const server = express();
// const listener = server.listen(process.env.port || process.env.PORT || 3980, function () {
//     const { address, port } = listener.address() as AddressInfo;
//     console.log('%s listening to %s%s', server.name, address, port);
// });

// // parse json
// server.use(bodyParser.json());

// // connect the lambda functions to http
// server.post("/", CreateHandler(helloHandler));

import { WebSocket } from 'ws';

import { ClientConfigBuilder } from 'ask-sdk-local-debug/dist/builder/ClientConfigBuilder';
import { SkillInvokerConfigBuilder } from 'ask-sdk-local-debug/dist/builder/SkillInvokerConfigBuilder';
import { WebSocketClientConfigBuilder } from 'ask-sdk-local-debug/dist/builder/WebSocketClientConfigBuilder';
import { LocalDebugClient } from 'ask-sdk-local-debug/dist/client/LocalDebugClient';
import { argsParser, getHandlerFunction } from 'ask-sdk-local-debug/dist/util/ArgsParserUtils';

import * as express from "express";
import { LambdaHandler } from "ask-sdk-core/dist/skill/factory/BaseSkillFactory";
import { RequestEnvelope } from "ask-sdk-model";
import { handler as skillHandler } from "../lambda";

// import { ClientConfigBuilder } from './ask-sdk-local-debug/lib/builder/ClientConfigBuilder';
// import { SkillInvokerConfigBuilder } from './ask-sdk-local-debug/lib/builder/SkillInvokerConfigBuilder';
// import { WebSocketClientConfigBuilder } from './ask-sdk-local-debug/lib/builder/WebSocketClientConfigBuilder';
// import { LocalDebugClient } from './ask-sdk-local-debug/lib/client/LocalDebugClient';
// import { argsParser, getHandlerFunction } from './ask-sdk-local-debug/lib/util/ArgsParserUtils';

const { argv } = argsParser();

const clientConfig = new ClientConfigBuilder()
    .withAccessToken(argv['accessToken'])
    // .withAccessToken(accessToken)
    .withHandlerName(argv['handlerName'])
    // .withHandlerName("handler")
    .withSkillEntryFile(argv['skillEntryFile'])
    // .withSkillEntryFile(skillEntryFile)
    .withSkillId(argv['skillId'])
    // .withSkillId(skillId)
    .withRegion(argv['region'])
    // .withRegion(region)
    .build();

const skillInvokerConfig = new SkillInvokerConfigBuilder()
    // .withHandler(getHandlerFunction(clientConfig.skillEntryFile, clientConfig.handlerName))
    .withHandler(skillHandler)
    .build();

const webSocketClientConfig = new WebSocketClientConfigBuilder()
    .withSkillId(clientConfig.skillId)
    .withAccessToken(clientConfig.accessToken)
    .withRegion(clientConfig.region)
    .build();

const webSocketClient = new WebSocket(webSocketClientConfig.webSocketServerUri, {
    headers: webSocketClientConfig.headers,
});

const client = new LocalDebugClient(webSocketClient, skillInvokerConfig);

console.log("Here is my client");
// console.log(JSON.stringify(client));
console.log(client);



function CreateHandler(handler: LambdaHandler): express.RequestHandler {
    return (req, res) => {
        handler(req.body as RequestEnvelope, null, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.status(200).json(result);
        });
    };
}