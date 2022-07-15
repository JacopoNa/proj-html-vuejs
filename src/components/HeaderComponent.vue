<template>
    <header>
        <div class="container d-flex justify-content-between align-items-center">

            <div class="logo">
                <img src="../assets/img/logo.png" alt="">
            </div>
            <div class="menu">
                <ul>
                    <li v-for="(element,index) in menuHeader" :key="index" :class="{ 'ms-button' : element.btn }" >
                        <a href="#">{{ element.text }}</a>
                    </li>
                    <li>
                        <a href="#"><font-awesome-icon icon="fa-solid fa-cart-shopping"/></a>
                    </li>
                    <li>
                        <a href="#"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></a>
                    </li>
                </ul>

            </div>

        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    props: {
        "menuHeader": Array,
    }
}
</script>

<style lang="scss" scoped>

    @import '../assets/styles/variables.scss';

    header {
        height: 100px;
        background-color: $secondary_color;
        color: $primary_color;

        .container {
            height: 100%;

            .menu {

                ul {
                    display: flex;
                    align-items: center;
                    margin-bottom: 0;
                    
                    li {
                        margin: 0 15px;

                        &.ms-button {
                            background-color: #4154fe;
                            font-size: 14px;
                        }
                        &.new-list-item {
                            position: relative;
                        }
                    }
                }
            }
        }
    }
</style>