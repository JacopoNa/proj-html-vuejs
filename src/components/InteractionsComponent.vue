<template>
    <div class="main">
        <div class="container">
            <div class="description">
                <h4>Certified fitness professional</h4>
                <h2>Take control of your health</h2>
                <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet.</p>

                <div class="buttons">
                    <a href="#">
                        <span class="ms-button blue">
                            <font-awesome-icon icon="fa-brands fa-youtube" />
                            Visit my Youtube Channel
                        </span>
                    </a>
                    <a href="#">
                        <span class="ms-button buy">
                            Buy Avada today
                        </span>
                    </a>
                </div>
            </div>

            <div class="start">
                <a href="#">
                    <div class="play-icon">
                        <font-awesome-icon icon="fa-solid fa-play" />
                    </div>
                </a>
            </div>
        </div>

        <div class="demos">demos</div>
        <div class="sale">
            <span class="dollar">$</span>
            <span class="sale-number">39</span>
            <div>On Sale</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InteractionsComponent'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
    .main {
        height: 600px;
        background-image: url('../assets/img/slider82x-scaled.jpg');
        background-size: cover;
        position: relative;
        // background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4) 30%);
        .container {
            display: flex;
            height: 100%;

            .description {
                // background-color: lightblue;
                width: 80%;
                display: flex;
                flex-direction: column;
                justify-content: center;

                h4 {
                    color: red;
                }
                h2 {
                    color: $primary_color;
                    font-size: 60px;
                }
                p {
                    color: #78787a;
                    font-size: 17px;
                }
                .buttons {
                    margin-top: 10px;

                    .blue {
                       background-color: $third_color;
                       color: $primary_color;
                       margin-right: 15px;
                    }
                    .blue:hover {
                        background-color: red;
                    }
                    .buy {
                        border: 2px solid #78787a;
                        color: #bcbcbc;
                    }
                    .buy:hover {
                        background-color: $primary_color;
                        color: black;
                        border: 2px solid $primary_color;
                    }
                }
            }
            .start {
                // background-color: lightgreen;
                width: 20%;
                display: flex;
                align-items: center;
                justify-content: center;

                .play-icon {
                    width: 100px;
                    height: 100px;
                    font-size: 25px;
                }
            }
        }

        .demos {
            position: absolute;
            top: 50px;
            right: 20px;
            background-color: $primary_color;
            border-radius: 5px;
            text-align: center;
            width: 60px;
            height: 70px;
        }
        .sale {
            position: absolute;
            top: 125px;
            right: 20px;
            background-color: $primary_color;
            border-radius: 5px;
            text-align: center;
            width: 60px;
            height: 70px;

            .dollar {
                color: #67be88;
                font-weight: 600;
                vertical-align: top;
                font-size: 17px;
            }
            .sale-number{
                color: #67be88;
                font-size: 30px;
                font-weight: 600;
            }
            div {
                font-weight: 500;
                font-size: 14px;
                color: #78787a;
            }
        }
    }
</style>