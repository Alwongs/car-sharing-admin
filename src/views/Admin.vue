<template>
    <div class="wrapper">
        <aside-panel class="aside-panel"/>
        <div class="base">
            <app-header class="header"/>
            <main>
                <router-view></router-view>
            </main>
            <app-footer class="footer"/>
        </div>
    </div>
</template>

<script>
import AsidePanel from '@/components/AsidePanel.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
    name: 'Admin',
    components: { 
        AsidePanel, 
        AppHeader,
        AppFooter 
    }
}
</script>

<style lang="scss">

.wrapper {
    min-height: 100vh;
    display: flex;
    @media (max-width: $mobile-max) {
        flex-direction: column;
    }     
}
.aside-panel { 
    flex: 0 0 285px;
    z-index: 2;
    box-shadow: $aside-shadow;
    @media (max-width: $mobile-max) {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%; 
        width: 100%;       
    } 
}
.base {  
    flex: 1 0 auto;
    display: flex;    
    flex-direction: column;
}
.header {     
    flex: 0 0 68px;
    z-index: 1;
    box-shadow: $header-shadow;    
}
main {
    background-color: $bg-admin;     
    flex: 1 0 auto;
    padding: 28px;    
}
.footer {  
    text-align: center;
    flex: 0 0 68px;
    z-index: 1;
    box-shadow: $footer-shadow; 
}
</style>