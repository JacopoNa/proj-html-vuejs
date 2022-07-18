<template>
    <div class="subscribe">
        <div class="container">
            <div class="description">
                <h4>Join our mailing list today</h4>
                <h2>Insider offers & flash sales in your inbox every week.</h2>

                <div class="buttons">
                    <input type="text" placeholder="Insert your email...*">
                    <a href="#">
                        <span class="ms-button sub">
                            Subscribe
                        </span>
                    </a>
                </div>

                <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet, consectetur adipiscing elit sed porttitor lectus.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SubscribeComponent'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
    .subscribe {
        height: 600px;
        background-image: url('../assets/img/banner1-2x.jpg');
        background-size: cover;
        background-position: right;

        .container {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .description {
                width: 60%;

                h4 {
                    color: red;
                }
                h2 {
                    color: $primary_color;
                    font-size: 42px;
                }
                p {
                    color: #78787a;
                }
                .buttons {
                    margin: 30px 0;

                    input {
                       padding: 10px 290px 10px 10px;
                       border-radius: 25px;
                       margin-right: 15px;
                    }
                    .sub {
                        color: $primary_color;
                        background-color: $third_color;
                        padding: 15px 73px;
                    }
                }
                p {
                    font-size: 17px;
                }
            }
        }
    }
</style>