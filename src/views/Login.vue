<template>
    <div class="login-wrapper">
        <div class="container">
            <header class="login-header">
                <router-link 
                    to="#"
                    class="logo"  
                >
                    Need for car
                </router-link>
            </header>
            <div class="modal"></div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Login'
}
</script>

<style lang="scss" scoped>

.login-wrapper {
    width: 100%;
    height: 100vh;
    background-color: $bg-admin;
}
.container {
    width: 376px;
    margin: 0 auto;
    padding-top: 13vh;    
}
.login-header {
    text-align: center;
    margin-bottom: 16px;
    font-size: 24px;
    line-height: 44px;
    .logo {
        &::before {
            display: inline-block;
            content: '';
            background-image: url('../assets/img/svg/logo_icon.svg');
            background-size: contain;            
            height: 44px;
            width: 44px;
            margin: -13px 12px;
        }
    }
}
.modal {
    width: 376px;
    height: 254px;
    border-radius: 9px;
    background-color: $white;
}
</style>