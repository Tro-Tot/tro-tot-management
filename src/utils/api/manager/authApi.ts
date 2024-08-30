
import { get, post } from "../ApiCaller";
let loginUrl = `/auth/manager/login`;

let refreshTokenUrl = `/auth/refresh-token`;

export const loginApi = {
    login: (email: string, password: string) => {
        return post(loginUrl, { email, password });
    },
    // refreshToken: () => {
    //     return get(refreshTokenUrl);
    // },
    // confirmOtp: (id: string, otp: string, token: string) => {
    //     return post(
    //         `/Auth/confirm-otp`,
    //         { id: id, otp: otp },
    //         {},
    //         { Authorization: token }
    //     );
    // },
};