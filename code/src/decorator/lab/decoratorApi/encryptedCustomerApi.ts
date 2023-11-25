import { Api } from "../api";

export class EncryptedCustomerApi implements Api {
    private api: Api;

    constructor(api: Api) {
        this.api = api
    }

    get(): any {
        const customer = this.api.get();
        return {
            name: `encrypted ${customer.name}`,
            lastName: `encrypted ${customer.lastName}`,
            age: customer.age,
        }
    }
}