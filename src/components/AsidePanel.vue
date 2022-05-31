<template>
    <aside>
        <header class="aside-header">
            <router-link 
                to="#"
                class="logo"  
            >
                Need for car
            </router-link>
        </header>
        <ul class="nav-list">
            <li class="nav-item car-card-icon">
                Карточка автомобиля
            </li>
            <li class="nav-item car-list-icon">
                Список авто
            </li>
            <li class="nav-item order-list-icon">
                Заказы
            </li>
        </ul>
    </aside>
</template>

<script>

export default {
    name: 'AsidePanel'
}
</script>

<style lang="scss" scoped>

aside {
    background-color: $white;
    font-size: 15px;    
}
.aside-header {  
    box-shadow: $aside-header-shadow; 
    line-height: 68px;
    font-size: 16px;
    padding-left: 48px;
    .logo {
        &::before {
            display: inline-block;
            content: '';
            background-image: url('../assets/img/svg/logo_icon.svg');
            height: 22px;
            width: 22px;
            margin: -5px 8px;
        }
    }    
}
.nav-item {
    box-shadow: $nav-item-shadow;
    height: 58px;
    line-height: 58px;
    padding-left: 28px;
}
.nav-item::before {
    display: inline-block;
    content: '';  
    background-size: contain;
    margin-right: 12px;      
}
.car-card-icon::before {
    background-image: url('../assets/img/svg/car_card.svg');
    height: 12px;
    width: 12px;
}
.car-list-icon::before {
    background-image: url('../assets/img/svg/car_list.svg');
    height: 10px;
    width: 12px;
}
.order-list-icon::before {
    background-image: url('../assets/img/svg/order_list.svg');
    height: 12px;
    width: 10px;
}
</style>