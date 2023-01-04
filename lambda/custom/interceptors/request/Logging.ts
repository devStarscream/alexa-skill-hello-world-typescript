import { RequestInterceptor } from "ask-sdk-core";

/**
 * Adds translation functions to the RequestAttributes.
 */
export const Logging: RequestInterceptor = {
    process(handlerInput) {
        console.log(`Request object: ${JSON.stringify(handlerInput.requestEnvelope, null, 2)}`);
    }
};