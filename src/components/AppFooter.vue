<template>
    <footer>
        <div class="links">
            <a href="#">Главная страница</a>
            <a href="#">Ссылка</a>
        </div>
        <div class="copyright">
            Copyright © 2020 Simbirsoft            
        </div>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter'
}
</script>

<style lang="scss" scoped>

footer {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 68px;
    padding: 0 28px;
}
.links {
    a:first-child {
        margin-right: 16px;
    }
    a {
        color: $footer-link;
    }
}
.copyright {
    font-weight: 500;
    color: $footer-copyright;
}
</style>