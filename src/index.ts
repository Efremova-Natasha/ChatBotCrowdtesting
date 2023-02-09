import { AUTHORIZATION_TOKEN, HELLO_IMAGE } from "./chatBotHelpers/constants";
import { COMMANDS_DESCRIPTION, COMMAND_NAME, ENTER_KLEKSER_DATA_TEXT, INNER_TEXT_OF_OPTIONS, MESSAGES, VPN_PROBLEMS_ANSWERS } from "./chatBotHelpers/text";
import { vpnProblemOptions, yesNoOptions } from "./chatBotOptions";

const telegramApi = require("node-telegram-bot-api");

// const mongoose = require('mongoose');

// mongoose.connect(DB_URL, {
//   useMongoClient: true
// }) 
// .then(() => {  console.log("MongoDB connected");
// })
// .catch((err:any) => console.log(err)
// );

const bot = new telegramApi(AUTHORIZATION_TOKEN, { polling: true });

const start = () => {

  bot.on("message", async (msg: any) => {
    bot.setMyCommands([
      { command: COMMAND_NAME.START_OPTION, description: COMMANDS_DESCRIPTION.INITIAL_GREETING },
      { command: COMMAND_NAME.PROBLEM_WITH_VPN_OPTION, description: COMMANDS_DESCRIPTION.PROBLEM_WITH_VPN_TEXT },
    ])

    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === COMMAND_NAME.START_OPTION) {
      await bot.sendSticker(chatId, HELLO_IMAGE)
      return bot.sendMessage(chatId, MESSAGES.HELLO_MESSAGE);
    }

    if (text === COMMAND_NAME.PROBLEM_WITH_VPN_OPTION) {
      return bot.sendMessage(chatId, MESSAGES.CHOOSE_OPTION, vpnProblemOptions);
    }
    console.log(text);


    // return bot.sendMessage(chatId, MESSAGES.WRONG_INPUT_DATA);
  })

  bot.on("callback_query", async (msg: any) => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    const text = msg.text;

    if (data === INNER_TEXT_OF_OPTIONS.FIRST_VPN_PROBLEM_INNER_TEXT) {
      await bot.sendMessage(chatId, VPN_PROBLEMS_ANSWERS.FIRST_VPN_PROBLEM_ANSWER, yesNoOptions);
    }
    if (data === INNER_TEXT_OF_OPTIONS.SECOND_VPN_PROBLEM_INNER_TEXT) {
      await bot.sendMessage(chatId, VPN_PROBLEMS_ANSWERS.SECOND_VPN_PROBLEM_ANSWER, yesNoOptions);
    }
    if (data === INNER_TEXT_OF_OPTIONS.YES_INNER_TEXT) {
      await bot.sendMessage(chatId, ENTER_KLEKSER_DATA_TEXT.ENTER_FIO_AND_PHONE_NUMBER);

    }
    console.log(msg);
  }
  )
}

start();
