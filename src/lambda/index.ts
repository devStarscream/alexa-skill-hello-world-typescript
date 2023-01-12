import * as Alexa from "ask-sdk-core";
import * as Handlers from "./handlers";
import * as Intents from "./intents";
import * as Errors from "./errors";
import * as Interceptors from "./interceptors";
import * as HelloIntents from "./intents/hello";

export const handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        // Intents.Debug,

        // Default Skill intents
        Handlers.Launch,
        Intents.Help,
        Intents.Stop,
        Handlers.SessionEnded,
        Intents.SystemExceptionEncountered,
        Intents.Fallback,

        // Custom Skill intents
        HelloIntents.HelloWorld
    )
    .addErrorHandlers(
        Errors.Unknown,
        Errors.Unexpected
    )
    .addRequestInterceptors(
        Interceptors.Logging,
        Interceptors.Localization,
        Interceptors.Slots
    )
    .addResponseInterceptors(
        Interceptors.Response
    )
    .lambda();