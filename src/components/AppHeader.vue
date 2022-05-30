<template>
    <header>
        <div class="search-block">
            <input type="text" placeholder="Поиск ...">
        </div>

        <div class="user-block">
            <div class="notifications">
                <div class="counter">2</div>
            </div>

            <div class="user-info">
                <img 
                    :src="require('../assets/img/jpg/user_avatar.jpg')" 
                    alt="avatar"
                    class="user-avatar"
                >
                <span class="user-role">Admin</span>
                <span class="dropdown-icon"></span>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    name: 'AppHeader'
}
</script>

<style lang="scss" scoped>

header {
    display: flex;
    justify-content: space-between;
    line-height: 68px;
    padding: 0 28px;    
}
.search-block { 
    &::before {
        display: inline-block;
        content: '';  
        background-size: contain;
        margin-right: 12px; 
        background-image: url('../assets/img/svg/search_icon.svg');
        height: 14px;
        width: 14px; 
        margin: -3px 8px;                
    }  
    input {
        outline: none;
        font-size: 13px;
        &::-webkit-input-placeholder {
            color: $header-placeholder;
        } 
        &::-moz-placeholder {
            color: $header-placeholder;
        } 
    }
}

.user-block {
    display: flex;
}
.notifications {
    position: relative;
    box-shadow: $notifications-shadow;
    padding: 0 26px;
    &::before {
        display: inline-block;
        content: '';  
        background-size: contain;
        margin-right: 12px; 
        background-image: url('../assets/img/svg/notifications.svg');
        height: 20px;
        width: 17px; 
        margin: -3px 8px; 
    }  
    .counter {
        text-align: center;
        color: $white;
        font-weight: 600;
        background-color: red;
        position: absolute;
        left: 45px;
        top: 34px;
        width: 14px;
        height: 14px;
        line-height: 14px;
        font-size: 9px;
        border-radius: 50%;
    }                   
}
.user-info {
    padding-left: 26px;
    .user-avatar {
        vertical-align: middle;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        margin-right: 13px;
    }
    .user-role {
        margin-right: 68px;
    }
}
.dropdown-icon::after {
    display: inline-block;
    content: '';  
    background-size: contain;
    background-image: url('../assets/img/svg/dropdown_icon.svg');
    height: 5px;
    width: 9px;     
}
</style>