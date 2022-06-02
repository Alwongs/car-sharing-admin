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

        <div class="button-group">
            <button class="btn btn__left">Готово</button>
            <button class="btn btn__center">Отмена</button>
            <button class="btn btn__right">Изменить</button>
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
    align-items: center;
    margin-bottom: 16px;
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
.extra-services {
    flex: 1 0 auto;
    :not(:last-child) {
        margin-bottom: 7px;
    }
    .service {
        display: flex;
        cursor: pointer;
        .checkbox {
            border: 1px solid #999999;
            width: 13px;
            height: 13px;
            margin: 0 8px 0 0;  
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
                font-size: 12px;
            }        
        }
    }    
}

.price {
    flex: 1 0 auto;
}
.button-group {
    flex: 0 0 auto;  
    .btn {
        background-color: $white;
        width: 72px;
        height: 24px;
        border: 0.5px solid #BECAD6;
        font-size: 11px;
        vertical-align: middle;
        color: #5A6169;
        &__left {
            border-radius: 4px 0 0 4px;
            border-right: none;
            background-image: url('../assets/img/svg/check_icon.svg'); 
            background-size: 12px 12px;
            background-repeat: no-repeat;  
            background-position: 7%;        
        }
        &__center {
            background-image: url('../assets/img/svg/reject_icon.svg'); 
            background-size: 11.35px 12px;
            background-repeat: no-repeat;  
            background-position: 6%;  
            padding-left: 5px;                
        }
        &__right {
            border-radius: 0 4px 4px 0;
            border-left: none;
            background-image: url('../assets/img/svg/edit_icon.svg'); 
            background-size: 11.35px 12px;
            background-repeat: no-repeat;  
            background-position: 5%; 
            padding-left: 10px;       
        }
    }      
}


</style>