import { get } from "../ApiCaller";
let refreshTokenUrl = `/auth/refresh-token`;
export const refreshApi = {
    refreshToken: (header: any) => {
    return get(refreshTokenUrl,{},header);
}
}
