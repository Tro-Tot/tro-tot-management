
import { get, post } from "../ApiCaller";
let loginUrl = `/auth/technical-staff/login`;
export const loginApi = {
    login: (email: string, password: string) => {
        return post(loginUrl, { email, password });
    },
};