import { createStore } from 'vuex'
import auth from './modules/auth.js'
import order from './modules/order.js'

export default createStore({
    modules: {
        auth,
        order
    }
})

