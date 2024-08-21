
import { get, post } from "../ApiCaller";
let loginUrl = `/auth/staff/login`;
// let registerUrl = `/auth/register`;
let refreshTokenUrl = `/auth/refresh-token`;
// let GooogleAuth = `/auth/google-oauth`;
export const loginApi = {
    login: (email: string, password: string) => {
        return post(loginUrl, { email, password });
    },
    // register: (email: string, password: string) => {
    //     return post(registerUrl, { email, password });
    // },
    refreshToken: () => {
        return get(refreshTokenUrl);
    },
    confirmOtp: (id: string, otp: string, token: string) => {
        return post(
            `/Auth/confirm-otp`,
            { id: id, otp: otp },
            {},
            { Authorization: token }
        );
    },
};