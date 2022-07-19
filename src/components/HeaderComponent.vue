<template>
    <header>
        <div class="container d-flex justify-content-between align-items-center">

            <div class="logo">
                <img src="../assets/img/logo.png" alt="logo">
            </div>
            <div class="menu">
                <ul>
                    <li v-for="(element,index) in menuHeader" :key="index" :class="{ 'ms-button' : element.btn, 'new-class' : element.new}" >
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
        font-weight: 500;

        .container {
            height: 100%;

            .menu {

                ul {
                    display: flex;
                    align-items: center;
                    margin-bottom: 0;
                    
                    li {
                        margin: 0 15px;
                        // position: relative;

                        &.ms-button {
                            background-color: $third_color;
                            font-size: 14px;
                        }
                        &.ms-button:hover {
                            background-color: red;
                        }
                        &.new-list-item {
                            position: relative;
                        }
                    }
                    li.new-class::after {
                        content: "new";
                        color: black;
                        background-color: yellow;
                        padding: 5px;
                        border-radius: 3px;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }
            }
        }
    }
</style>