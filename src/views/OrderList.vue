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
        <order-item />
        <order-item />
    </main>
    <footer class="footer">
        Пагинация
    </footer>
  </div>
</template>

<script>
import OrderItem from '@/components/OrderItem.vue'

export default {
    name: 'OrderList',
    components: { OrderItem }
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
    width: 100%;
    height: 386px;
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
    line-height: 29px;
    width: 110px;
    height: 29px;
    border-radius: 4px;
    background-color: $footer-link;
    font-size: 12px;
    color: $white;
    cursor: pointer;
} 
.main {
    flex: 1 1 auto;
    padding: 14px 22px;
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