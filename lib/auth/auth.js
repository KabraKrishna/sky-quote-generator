import { loginUser } from "./appwriterAuth";

export function login(email, password) {

    return new Promise((resolve, reject) => {
        loginUser(email, password).then(
            (response) => {
                resolve(response);
            },
            (error) => {
                reject(error);
            }
        )
    })
}