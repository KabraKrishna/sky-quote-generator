const { Client, Account } = require("appwrite");

export function intiAppWriter() {

    const client = new Client();

    client
        .setEndpoint(process.env.NEXT_PUBLIC_API_URL)
        .setProject(process.env.NEXT_PUBLIC_CLIENT_ID);

    return client;
}

const account = new Account(intiAppWriter());

export function loginUser(email, password) {

    const promise = account.createEmailSession(email, password);

    return promise;
}