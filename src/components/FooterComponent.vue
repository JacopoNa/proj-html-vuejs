<template>
    <footer>
        <div class="container">

            <div class="top-footer">
                <div class="row row-cols-3">

                    <div class="col">
                        <div class="card">
                            <div class="image">
                                <img src="../assets/img/logo.png" alt="logo">
                            </div>
                            <p>Ac aliquam neque sagittis diam faucibus vitae purus turpis phasellus. Pellentesque consectetur amet purus ultrices mauris.</p>
                            <div class="icons">
                                <span><font-awesome-icon icon="fa-brands fa-facebook" /></span>
                                <span><font-awesome-icon icon="fa-brands fa-twitter" /></span>
                                <span><font-awesome-icon icon="fa-brands fa-youtube" /></span>
                                <span><font-awesome-icon icon="fa-brands fa-instagram" /></span>
                                <span><font-awesome-icon icon="fa-brands fa-linkedin" /></span>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <ul>
                                <li v-for="(element,index) in menuFooter" :key="index">
                                    <a href="#">
                                        {{ element.text }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <ul>
                                <li>CONTACT INFORMATIONS</li>
                                <li class="address">4746 Tipple Road Michigan 48449</li>
                                <li>Mobile: 1.800.000.0000</li>
                                <li>Email: info@your-company.com</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <hr>
        <div class="copyright">copyright 2012-2020 | Avada theme by <span>Theme fusion</span> | All rights reserved | Powered by <span>Wordpress</span></div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
    props: {
        "menuFooter": Array
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

    footer {
        height: 600px;
        background-color: $secondary_color;
        color: $primary_color;
        text-align: center;

        .container {
            .top-footer {
                padding: 100px 0;

                .card {
                    background-color: $secondary_color;
                    color: $primary_color;

                    p {
                        color: $fourth-color;
                        margin: 30px 0;
                        font-weight: 500;
                        font-size: 18px;
                    }
                    .icons {
                        color: #bc0428;
                        font-size: 20px;

                        span {
                            margin: 0 5px;
                        }
                    }
                    ul {
                        li {
                            font-size: 18px;
                            margin: 20px 0;
                            font-weight: 500;

                            &.address {
                                margin: 30px 0;
                                color: $fourth-color;
                            }
                        }
                    }
                }
            }
        }
        .copyright {
            color: $fourth-color;

            span {
                color: $primary_color;
            }
        }
    }
</style>