import { Api } from "../api";
import { CustomerApi } from "./customerApi";

export class CustomerWrappedApi implements CustomerApi {
    private api: Api;

    constructor(api: Api) {
        this.api = api
    }

    get(): any {
        return {
            status: 'ok',
            data: {
                customer: this.api.get(),
            }
        }
    }
}