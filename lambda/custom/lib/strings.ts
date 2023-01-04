import { Resource } from "i18next";
import { Strings, LocaleTypes } from "./constants";

interface IStrings {
    [Strings.SKILL_NAME]: string;
    [Strings.WELCOME_MSG]: string;
    [Strings.GOODBYE_MSG]: string;
    [Strings.HELLO_MSG]: string;
    [Strings.HELP_MSG]: string;
    [Strings.ERROR_MSG]: string;
    [Strings.ERROR_UNEXPECTED_MSG]: string;
}

export const strings: Resource = {
    [LocaleTypes.enUS]: {
        translation: {
            SKILL_NAME: "Test Hello world",
            WELCOME_MSG: "Welcome to the Alexa Skills Kit, you can say hello!",
            GOODBYE_MSG: "Goodbye!",
            HELLO_MSG: "Hello world!",
            HELP_MSG: "You can say hello to me!",
            ERROR_MSG: "Sorry, I can't understand the command. Please say again.",
            ERROR_UNEXPECTED_MSG: "Sorry, an unexpected error has occured. Please try again later.",
        } as IStrings,
    },
    [LocaleTypes.itIT]: {
        translation: {
            SKILL_NAME: "Test Ciao Mondo",
            WELCOME_MSG: `Benvenuto a Alexa Skills Kit Typescript, puoi dire "ciao"! `,
            GOODBYE_MSG: `Arrivederci!`,
            HELLO_MSG: "Ciao Mondo! ",
            HELP_MSG: `Mi puoi dire "ciao"! Prova a dirlo... `,
            ERROR_MSG: `Mi dispiace, non ho capito. Ripeti per favore.`,
            ERROR_UNEXPECTED_MSG: `Mi dispiace, si è verificato un errore inaspettato. Riprova più trardi. `,
        } as IStrings,
    },
};
