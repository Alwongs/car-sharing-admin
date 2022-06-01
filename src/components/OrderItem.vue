<template>
    <div class="item">
        <div class="image">
            <img :src="require('../assets/img/jpg/car.jpg')" alt="">
        </div>
        <div class="info">
            <p>ELANTRA в Ульяновск, Нариманова 42</p>
            <p>12.06.2019 12:00 - 13.06.2019</p>
            <p>Цвет: Голубой</p>
        </div>
        <div class="extra-services">
            <ul>         
                <li class="service checked">
                    <div class="checkbox"><div class="tick"></div></div>
                    <label>Полный бак</label>
                </li> 
                <li class="service checked">
                    <div class="checkbox"><div class="tick"></div></div>
                    <label>Детское кресло</label>
                </li> 
                <li class="service checked">
                    <div class="checkbox"><div class="tick"></div></div>
                    <label>Правый руль</label>
                </li>            
            </ul> 
        </div>
 
        <div class="price">
            4300р
        </div>          
    </div>  
</template>

<script>
export default {

name: 'OrderItem'
}
</script>

<style lang="scss" scoped>

.item {
    display: flex;
    border: 1px solid grey;
}

.image {
    flex: 1 0 auto;
    img {
        height: 64px;
    }
}
.info {
    flex: 1 0 auto;
}
.service {
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    cursor: pointer;
    .checkbox {
        border: 1px solid #999999;
        width: 12px;
        height: 12px;
        margin-right: 8px;       
    }  
    &.checked {
        .checkbox {
            border: 1px solid #0EC261;
        }
        .tick {
            content: '';
            background-image: url('../assets/img/svg/tick.svg');
            width: 13px;
            height: 10px;
        }
        label {
            color: #121212;
        }
    }
}
.price {
    flex: 1 0 auto;
    align-self: center;
}
</style>