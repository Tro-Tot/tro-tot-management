import { get } from "../ApiCaller"

let profileUrl = `/user/my`
export const profileApi ={
    getProfile:()=>{
        return get(profileUrl)
    }
}