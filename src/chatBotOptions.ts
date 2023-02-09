import { INNER_TEXT_OF_OPTIONS, VPN_PROBLEMS_BUTTON_TEXT, YES_NO_OPTIONS } from "./chatBotHelpers/text";

export const vpnProblemOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: VPN_PROBLEMS_BUTTON_TEXT.FIRST_VPN_PROBLEM, callback_data: INNER_TEXT_OF_OPTIONS.FIRST_VPN_PROBLEM_INNER_TEXT }],
            [{ text: VPN_PROBLEMS_BUTTON_TEXT.SECOND_VPN_PROBLEM, callback_data:  INNER_TEXT_OF_OPTIONS.SECOND_VPN_PROBLEM_INNER_TEXT}]
        ]        
    })
}

export const yesNoOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: YES_NO_OPTIONS.YES, callback_data: INNER_TEXT_OF_OPTIONS.YES_INNER_TEXT }],
            [{ text: YES_NO_OPTIONS.NO, callback_data: INNER_TEXT_OF_OPTIONS.NO_INNER_TEXT }]
        ]        
    })
}