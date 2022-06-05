import { defaultAPIInstance } from "@/api";

const url = {
  ORDER: "db/order?limit=10",
};

export const defaultAPI = {

    getOrders(params = {}) {
        return defaultAPIInstance.get(url.ORDER, {
            params,
        });
    },
};