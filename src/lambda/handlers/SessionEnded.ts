import { RequestHandler } from "ask-sdk-core";
// import { RequestEnvelope, SessionEndedRequest, Session, User } from 'ask-sdk-model';

import { IsType } from "../lib/helpers";
// import { ErrorLogStrings, RequestTypes } from "../lib/constants";
import { RequestTypes } from "../lib/constants";

export const SessionEnded: RequestHandler = {
    canHandle(handlerInput) {
        return IsType(handlerInput, RequestTypes.SessionEnded);
    },
    handle(handlerInput) {

        // const requestEnvelope: RequestEnvelope = handlerInput.requestEnvelope;
        // const session = requestEnvelope.session as Session;
        // const request: SessionEndedRequest = requestEnvelope.request as SessionEndedRequest;

        // if (request.reason === "ERROR") {

        //     const user: User = session.user;
        //     const error = request?.error;
        //     //possible reasons: INVALID_RESPONSE, DEVICE_COMMUNICATION_ERROR, INTERNAL_SERVICE_ERROR, ENDPOINT_TIMEOUT

        //     console.error(`${ErrorLogStrings.SkillErrorTag} (${request.locale}) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`);
        //     console.error(`Session ID: ${session.sessionId}`);
        //     console.error(`Request ID:: ${request.requestId}`);
        //     console.error(`User ID: ${user.userId}`);
        //     console.error(`Request Locale: ${request.locale}`);
        //     if (error) {
        //         console.error(`Error Type: ${error.type}`);
        //         console.error(`Error Message: ${error.message}`);
        //     }
        //     console.error('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
        // }

        return handlerInput.responseBuilder.getResponse();
    }
};
