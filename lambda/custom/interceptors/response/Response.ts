import { RequestInterceptor } from "ask-sdk-core";

/**
 * Adds translation functions to the RequestAttributes.
 */
export const Response: RequestInterceptor = {
    process(handlerInput) {
        console.log(`Response object: ${JSON.stringify(handlerInput.requestEnvelope, null, 2)}`);
    }
};