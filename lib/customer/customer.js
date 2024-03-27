import { createCustomer } from "./appwriteCustomer"

export function create(customerObject) {

    return new Promise((resolve, reject) => {
        createCustomer(customerObject).then(
            (response) => {
                console.log("res: ", response)
                resolve(response);
            },
            (error) => {
                console.log("error: ", error)
                reject(error);
            })
    })
}