<template>
    <h2 class="title">Заказы</h2>
    <div class="card">
        <header class="header">
            <div class="input-group">
                <input type="text">
                <input type="text">
                <input type="text">
                <input type="text">
            </div>
            <div class="button-group">
                <button class="button">Применить</button>
            </div>
        </header>
        <main class="main">
            <ul>
                <li 
                    v-for="order in orders" 
                    :key="order.id"
                >
                    <order-item 
                        :img="order.carId.thumbnail.path"
                        :model="order.carId.name"
                        :city="order.cityId.name"
                        :point="order.pointId.name"
                        :dateFrom="order.dateFrom"
                        :dateTo="order.dateTo"
                        :color="order.color"
                    />
                </li>
            </ul>
        </main>
        <footer class="footer">
            Пагинация
        </footer>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import OrderItem from '@/components/OrderItem.vue';

export default {
    name: 'OrderList',
    components: { OrderItem },
    computed: {
        ...mapGetters([
            'orders'
        ])
    },
    mounted() {
        this.$store.dispatch('get_orders_from_api')
    }
}
</script>

<style lang="scss" scoped>

.title {
    font-size: 29px;
    font-weight: 400;
    margin-bottom: 30px;
}
.card {
    display: flex;
    flex-direction: column;
    background-color: $white;
    border-radius: 9px;
    max-width: 100%;
    min-height: 350px;
    max-height: 65vh;
    box-shadow: $card-shadow;
}
.header {
    flex: 0 0 60px; 
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    padding: 0 22px;
    box-shadow: $card-header-shadow;
}
.input-group {
    :not(:last-child) {
        margin-right: 15px;
    }
}
input {
    border: 0.5px solid $input-border-color;
    border-radius: 4px;
    width: 110px;
    height: 30px;
    &:focus {
        outline: 0.5px solid $footer-link;
    }  
    background-image: url('../assets/img/svg/input_arrows.svg'); 
    background-size: 5px 6px;
    background-repeat: no-repeat;  
    background-position: 93%;
}
.button-group {
    display: flex;  
    align-items: center; 
}
.button {
    width: 110px;
    height: 29px;
    line-height: 29px;
    border-radius: 4px;
    background-color: $footer-link;
    font-size: 12px;
    color: $white;
    cursor: pointer;
} 
.main {
    flex: 1 1 auto;
    padding: 14px 22px;
    overflow-y: scroll;    
}

.footer {
    flex: 0 0 60px;
    box-shadow: $card-header-shadow; 
    font-size: 15px;
    color: $footer-link;
    line-height: 60px;
    text-align: center;   
}
</style>