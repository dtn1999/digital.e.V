import { SITE_SECRET_KEY } from "../utils/envVariables"

export async function handleRecaptchaValidation(token:string) {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${SITE_SECRET_KEY}&response=${token}`
    try {
        const response = await fetch(url, {
            method: "POST",
        })
        const data = await response.json()
        console.log(data)
        return true
    }catch(e) {
        console.log(e)
        // TODO: handle error
        return true; 
    }
}