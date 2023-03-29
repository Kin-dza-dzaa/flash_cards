import { WordData } from "../api/words-calls";

const passwordRegex = new RegExp('(?=.*\\d)(?=.*[A-Z])^[A-Za-z0-9]{8,}$');
const userNameRegex = new RegExp('(?=[\\w-]*[A-Za-z]{5,})^[\\w-]{6,}$');

export const validateUserName = (userName: string): Promise<any> => {
    if (userNameRegex.test(userName)) {
        return Promise.resolve();
    }
    return Promise.reject(new Error("Username should be at least 6 characters long, and doesn't conatin any special character"));
}

export const validatePassword = (password: string): Promise<any> => {
    if (passwordRegex.test(password)) {
        return Promise.resolve();
    }
    return Promise.reject(new Error("Password should contain at least one numeric, one uppercase and lowercase letter and should be 8 characters long."));
}

export const WordsStructValidation = (value: WordData) => (Date.parse(value.last_repeat) + value.time_diff) < (new Date()).getTime();