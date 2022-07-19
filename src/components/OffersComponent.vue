<template>
    <div class="offers">
        <div class="container">
            <div class="row row-cols-3">
                <div class="col">
                    <div class="card">
                        <img src="../assets/img/service6-2x.jpg" alt="photo">
                        <div class="card-text">
                            <h3>Crossfit workout</h3>
                            <h5>Push your limits</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="../assets/img/box1-2x.jpg" alt="photo">
                        <div class="card-text">
                            <h3>New gym apparel</h3>
                            <h5>Look good, feel good</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="../assets/img/box3-2x.jpg" alt="photo">
                        <div class="card-text">
                            <h3>Team training</h3>
                            <h5>Find a partner</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-container">
                <p>"How you respond to the challenge in the second half will determine what you become after the game, whether you are a winner or a loser."</p>

                <img src="../assets/img/avatar-1-2x.jpg" alt="">
                <span class="name">Brad Johnson</span>
                <span class="city">Las Vegas</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OffersComponent'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

    .offers {
        height: 900px;
        // background-color: pink;
        position: relative;
        background-image: linear-gradient(to bottom right, blue, red);

        .container {
            position: absolute;
            right: 0;
            left: 0;
            top: -50px;
            .card {
                position: relative;
                background-color: transparent;
                border: none;

                img {
                    border-radius: 0 0 30px 0;
                }

                .card-text {
                    position: absolute;
                    bottom: 20px;
                    left: 20px;
                    display: flex;
                    flex-direction: column;


                    *{
                        z-index: 10;
                    }

                    h3 {
                        color: $primary_color;
                    }
                    h5 {
                        color: yellow;
                    }
                }
            }
            .card::after {
                content: "";
                width: 100%;
                height: 100%;
                position: absolute;
                display: inline-block;
                top: 0;
                left: 0;
                z-index: 0;
                background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
                border-radius: 0 0 30px 0;
            }
            .card:hover { 
                transform: scale(1.1); 
            }

            .text-container {
                width: 80%;
                margin: 0 auto;
                text-align: center;

                p {
                margin-top: 120px;
                color: $primary_color;
                font-size: 40px;
                }

                img {
                    width: 60px;
                    border-radius: 50%;
                }

                .name {
                    color: $primary_color;
                    margin: 0 10px;
                    font-size: 20px;
                }

                .city {
                    color: #bcbcbc;
                }
            }
        }
    }
</style>