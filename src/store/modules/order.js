import { defaultAPI } from "@/api/defaultAPI";

export default {
    getters: {
        orders(state) {
            return state.orders;
        }
    },
    state: {
        orders: [],
    },
    mutations: {
        SET_ORDERS_TO_STATE: (state, ordersData) => {
            state.orders = ordersData;
        },
    },
    actions: {
        async get_orders_from_api({ commit }) {
            try {
                const ordersData = await defaultAPI.getOrders();
                console.log(ordersData.data.data);
                commit("SET_ORDERS_TO_STATE", ordersData.data.data);
            } catch (error) {
                throw new Error(error);
            }
        },
    },
};