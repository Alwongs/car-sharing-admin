<template>
    <div class="item">
        <div class="image">
            <img 
                :src="img" 
                alt="car-photo"
            >
        </div>
        <div class="info">
            <p>{{ model }} в {{ city }}, {{ point }}</p>
            <p>{{ dateFrom }} - {{ dateTo }}</p>
            <p>Цвет: {{ color }}</p>
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

    name: 'OrderItem',
    props: [ 
        'model', 
        'city', 
        'point', 
        'dateFrom', 
        'dateTo',
        'color',
        'img',
    ],
}
</script>

<style lang="scss" scoped>

.item {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
}
.image {
    flex: 0 0 170px;
    height: 95px;
    img {
        width: 138px;
        max-height: 95px;
    }
}
.info {
    flex: 1 0 248px;
    font-size: 13px;
    margin-right: 16px;
}
.extra-services {
    border: 1px solid red;    
    flex: 1 0 auto;
    :not(:last-child) {
        margin-bottom: 7px;
    }
    li {
        max-width: fit-content;
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
                font-size: 10px;
            }        
        }
    }    
}

.price {
    border: 1px solid red;
    flex: 1 0 auto;
    font-size: 24px;
}
.button-group {
    border: 1px solid red;    
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