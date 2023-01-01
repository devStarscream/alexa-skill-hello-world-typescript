import { RequestHandler } from "ask-sdk-core";
import { RequestTypes, Strings } from "../lib/constants";
import { IsType, GetRequestAttributes } from "../lib/helpers";
import { Unknown } from '../errors';

export const Launch: RequestHandler = {
    canHandle(handlerInput) {
        return IsType(handlerInput, RequestTypes.Launch);
    },
    handle(handlerInput) {

        try {
            const { t } = GetRequestAttributes(handlerInput);

            const speechText = t(Strings.WELCOME_MSG);

            return handlerInput.responseBuilder
                .speak(speechText)
                .reprompt(speechText)
                .withSimpleCard(t(Strings.SKILL_NAME), speechText)
                .getResponse();
        } catch (error) {
            return Unknown.handle(handlerInput, error as Error);
        }

    }
};
