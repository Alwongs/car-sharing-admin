<template>
    <div class="background">
        <div class="container">
            <div class="logo-block">
                <router-link 
                    to="#"
                    class="logo"  
                >
                    Need for car
                </router-link>
            </div>
            <div class="modal">
                <h3 class="modal-title">Вход</h3>

                <div class="input-block">
                    <label for="email">
                        Почта
                    </label>
                    <input 
                        v-model="login" 
                        type="text" 
                        id="email"
                    >
                </div>

                <div class="input-block">
                    <label for="password">
                        Пароль
                    </label>
                    <input 
                        v-model="password" 
                        type="password" 
                        id="password"
                    >
                </div>
                <footer class="modal-footer">
                    <a href="/admin/order-list" class="request-link">Запросить доступ</a>
                    <input type="button" class="button" value="Вход" @click.prevent="loginHandler">
                </footer>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Login',
    data() {
        return {
            login: 'intern ',
            password: 'intern-S!'
        }
    },
    methods: {
        async loginHandler() {
            try {
                await this.$store.dispatch("onLogin", {
                    username: this.login,
                    password: this.password,                    
                });
                this.$router.push({ name: 'order-list'})
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.background {
    width: 100%;
    height: 100vh;
    background-color: $bg-admin;       
}
.container {
    width: 376px;
    margin: 0 auto;
    padding-top: 13vh; 
    @media (max-width: $mobile-max) {
        width: 100%;        
    }   
}
.logo-block {
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
    height: 254px;
    border-radius: 9px;
    background-color: $white;
    box-shadow: $login-modal-shadow;
    padding: 0 18px;    
    @media (max-width: $mobile-max) {
        box-shadow: none;  
        border-radius: 0;                 
    }    
}
.modal-title {
   height: 58px;
   line-height: 58px;
   text-align: center; 
   font-size: 18px;
   font-weight: 400;
   margin-bottom: 16px;
}

.input-block {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    label {
        font-size: 11px;
        color: $label-color;
        margin-bottom: 8px;
    }
    input {
        border: 0.5px solid $input-border-color;
        border-radius: 3px;
        height: 29px;
        font-size: 12px;
        color: $base-color;
        padding: 0 11px;
        &:focus {
            outline: 0.5px solid $footer-link;
        }
    }    
}
.modal-footer {
    display: flex;
    justify-content: space-between;
    line-height: 29px;
    .request-link {
        font-size: 12px;
        color: $footer-link
    }
    .button {
        width: 110px;
        height: 29px;
        border: none;
        border-radius: 4px;
        background-color: $footer-link;
        font-size: 12px;
        color: $white;
        cursor: pointer;
    }    
}
</style>