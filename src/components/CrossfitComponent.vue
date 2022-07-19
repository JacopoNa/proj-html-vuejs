<template>
    <div class="crossfit">
        <div class="crossfit-container">
            <div class="start">
                <a href="#">
                    <div class="play-icon">
                        <font-awesome-icon icon="fa-solid fa-play" />
                    </div>
                </a>
            </div>
            <h2>Crossfit Workout of the day</h2>
            <h5>November 15th, 2019</h5>
            <span>
                View all videos
                <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CrossfitComponent'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
    .crossfit {
        height: 600px;
        background-image: url('../assets/img/banner14-2x.jpg');
        background-size: cover;
        color: $primary_color;
        position: relative;

        *{
            z-index: 100;
        }

        .crossfit-container {
            width: 50%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;

            .start {
                width: 20%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding-top: 130px;

                .play-icon {
                    width: 100px;
                    height: 100px;
                    font-size: 25px;
                }
            }
            h2 {
                font-size: 42px;
                margin: 30px 0;
            }
            h5 {
                color: yellow;
                font-size: 30px;
                margin-bottom: 20px;
            }
            span {
                font-size: 18px;
            }
        }
    }
    .crossfit:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        background-image: linear-gradient(to bottom right, rgba(0, 0, 200, 0.5), rgba(255, 0, 0, 0.4));
    }
</style>