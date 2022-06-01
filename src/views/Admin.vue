<template>
    <div class="app-wrapper">
        <aside-panel class="aside-panel"/>
        <div class="app-base">
            <app-header class="app-header"/>
            <main class="app-main">
                <router-view></router-view>
            </main>
            <app-footer class="app-footer"/>
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

.app-wrapper {
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
.app-base {  
    flex: 1 0 auto;
    display: flex;    
    flex-direction: column;
}
.app-header {     
    flex: 0 0 68px;
    z-index: 1;
    box-shadow: $header-shadow;    
}
.app-main {
    background-color: $bg-admin;     
    flex: 1 0 auto;
    padding: 28px 25px 28px 32px;    
}
.app-footer {  
    text-align: center;
    flex: 0 0 68px;
    z-index: 1;
    box-shadow: $footer-shadow; 
}
</style>