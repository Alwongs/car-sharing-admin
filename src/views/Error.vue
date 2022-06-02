<template>
    <div class="error-block">
        <h1 class="title">500</h1>
        <h2 class="subtitle">Что то пошло не так</h2>
        <p>Попробуйте перезагрузить страницу</p>
        <button class="button">Назад</button>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.error-block {
    margin-top: 25vh;
    text-align: center;
}
.title {
    font-size: 75px;
    font-weight: 500;
    color: #CACEDB;
    margin-bottom: 13px;
}
.subtitle {
    font-size: 50px;
    font-weight: 400;
    color: #3D5170;
    margin-bottom: 15px;    
}
p {
    font-size: 20px;
    font-weight: 400;
    color: #818EA3;    
    margin-bottom: 35px;
}
.button {
   
    width: 95px;
    height: 29px;
    line-height: 29px;
    border-radius: 4px;
    background-color: $footer-link;
    font-size: 12px;
    color: $white;
    cursor: pointer;
} 
</style>