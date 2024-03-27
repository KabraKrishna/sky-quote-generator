import { Databases, ID } from "appwrite";
import { intiAppWriter } from "../auth/appwriterAuth";
import { Customer } from "../models/customer";

const db = new Databases(intiAppWriter());

export function createCustomer(customerObject) {

    const customer = new Customer({...customerObject});

    customer.id = ID.unique();
    customer.active = true;
    customer.created = new Date();
    customer.updated = new Date();
    customer.creditTotal = 0;
    customer.orders = [];

    const promise = db.createDocument(
        process.env.NEXT_PUBLIC_DB_ID,
        process.env.NEXT_PUBLIC_DB_SS_CUSTOMERS,
        customer
    )

    return promise;

}