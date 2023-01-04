import { RequestInterceptor } from "ask-sdk-core";
import * as i18n from "i18next";
import * as sprintf from "i18next-sprintf-postprocessor";

import { strings } from "../../lib/strings";
import { RequestAttributes } from "../../interfaces";
// import { Random } from "../lib/helpers";

// type TranslationFunction = (...args: any[]) => string;

/**
 * Adds translation functions to the RequestAttributes.
 */
export const Localization: RequestInterceptor = {
    process(handlerInput) {

        // const localizationClient = i18n.use(sprintf).init({
        //     lng: handlerInput.requestEnvelope.request.locale,
        //     overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
        //     resources: strings,
        //     returnObjects: true,
        // });

        // const attributes = handlerInput.attributesManager.getRequestAttributes() as RequestAttributes;
        // attributes.t = function (...args: any[]) {
        //     return (localizationClient.t as TranslationFunction)(...args);
        // };

        // attributes.tr = function (key: any) {
        //     const result = localizationClient.t(key) as string[];

        //     return Random(result);
        // };

        i18n.use(sprintf)
            .init({
                lng: handlerInput.requestEnvelope.request.locale,
                overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
                resources: strings,
                returnObjects: true,
            })
            .then((tFunction) => {

                const attributes = handlerInput.attributesManager.getRequestAttributes() as RequestAttributes;
                // const attributes = handlerInput.attributesManager.getRequestAttributes();
                // attributes.t = (...args) => t(...args);
                // attributes.t = function (...args: any[]) {
                //     return (tFunction as TranslationFunction)(...args);
                //     attributes.t = (...args) => t(...args);
                // };

                // attributes.t = (...args: string[]) => tFunction.apply(args);
                attributes.t = (...args: string[]) => tFunction([...args]);

                // attributes.tr = function (key: any) {
                //     const result = attributes.t(key) as string[];
                //     return Random(result);
                // };
            });
    },
};

// const LocalizationRequestInterceptor = {
//     process(handlerInput) {
//         i18n.use(sprintf).init({
//             lng: handlerInput.requestEnvelope.request.locale,
//             resources: languageStrings,
//             overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
//         }).then((t) => {
//             const attributes = handlerInput.attributesManager.getRequestAttributes();
//             attributes.t = (...args) => t(...args);
//         });
//     },
