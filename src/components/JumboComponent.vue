<template>
    <div class="jumbo">
        <div class="jumbo-container">
            <h2>"I've failed over and over again in my life. And that is why I succeed."</h2>
            <p>Arcu auctor gravida nisl, congue sit nisi tincidunt eget proin. In lacinia lacus donec sed massa in ipsum eros, tristique. Gravida suspendisse etiam in iaculis  </p>
            <a href="#">
                <div class="ms-button">
                    Buy Avada today
                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'JumboComponent'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

    .jumbo {
        height: 600px;
        color: $primary_color;
        background-image: url('../assets/img/banner2-2x.jpg');
        background-size: cover;
        position: relative;

        *{
            z-index: 1000;
        }

        .jumbo-container {
            width: 51%;
            height: 100%;
            margin: 0 auto;
            text-align: center;
            display: flex;
            flex-direction: column;

            h2 {
                font-size: 42px;
                padding-top: 140px;
            }
            p {
                margin: 20px 0;
                font-size: 19px;
            }
            a {
                .ms-button {
                    background-color: $third_color;
                    display: inline-block;
                }
            }
        }
    }
    .jumbo:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    }
</style>