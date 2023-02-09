export enum MESSAGES {
    HELLO_MESSAGE = "Добро пожаловать в чат бот краудтетинга. Бот поможет вам в решении частых проблем. Выберете нужную категорию и следуйте предложенным указаниям",
    WRONG_INPUT_DATA = "Я тебя не понимаю. Попробуй еще раз",
    CHOOSE_OPTION = "Выбери пункт ниже, что именно пошло не так:"
}

export enum COMMAND_NAME {
    START_OPTION = "/start",
    PROBLEM_WITH_VPN_OPTION = "/problem_with_cisco"
}

export enum YES_NO_OPTIONS {
    YES = "Да",
    NO = "Нет"
}

export enum ENTER_KLEKSER_DATA_TEXT {
    ENTER_FIO_AND_PHONE_NUMBER = "Введите ваше ФИО и номер телефона"
}

export enum COMMANDS_DESCRIPTION {
    INITIAL_GREETING = "Начальное приветствие",
    PROBLEM_WITH_VPN_TEXT = "Проблемы при подключении к VPN"
}

export enum VPN_PROBLEMS_BUTTON_TEXT {
    FIRST_VPN_PROBLEM = "При вводе пароля не происходит подключение Cisco AnyConnect",
    SECOND_VPN_PROBLEM = "Не пришло смс с логином и паролем от Cisco"
}

export enum INNER_TEXT_OF_OPTIONS{
    FIRST_VPN_PROBLEM_INNER_TEXT = "firstVPNProblem",
    SECOND_VPN_PROBLEM_INNER_TEXT = "secondVPNProblem",
    YES_INNER_TEXT = "yes",
    NO_INNER_TEXT = "no"
}

export enum VPN_PROBLEMS_ANSWERS {
    FIRST_VPN_PROBLEM_ANSWER = "Вы уверены, что вводите верный пароль?",
    SECOND_VPN_PROBLEM_ANSWER = "Вы подключаетесь первый раз?"
}