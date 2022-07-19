<template>
    <div class="training">
        <div class="container">
            <div class="row row-cols-3">
                <div class="col">
                    <div class="card">
                        <div class="icon">
                            <font-awesome-icon icon="fa-solid fa-stopwatch" />
                        </div>
                        <h4>Team training</h4>
                        <h5>Find a partner</h5>
                        <p>Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. Tristique.</p>
                        <span>
                            Find a partner
                            <font-awesome-icon icon="fa-solid fa-angle-right" />
                        </span>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <div class="icon">
                            <font-awesome-icon icon="fa-solid fa-dumbbell" />
                        </div>
                        <h4>Crossfit workout</h4>
                        <h5>Push your limits</h5>
                        <p>Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. Tristique.</p>
                        <span>
                            Learn about Crossfit
                            <font-awesome-icon icon="fa-solid fa-angle-right" />
                        </span>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <div class="icon">
                            <font-awesome-icon icon="fa-solid fa-weight-scale" />
                        </div>
                        <h4>Weight loss plan</h4>
                        <h5>Shed those pounds</h5>
                        <p>Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. Tristique.</p>
                        <span>
                            Schedule a workout
                            <font-awesome-icon icon="fa-solid fa-angle-right" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TrainingComponent'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
    .training {
        background-color: black;
        color: $primary_color;
        padding: 100px 0;

        .container {
            .card {
                background-color: black;
                border: 5px solid $third_color;
                text-align: center;
                padding: 0 40px;

                .icon {
                    font-size: 50px;
                    margin-top: 60px;
                    margin-bottom: 30px;
                }

                h4 {
                    margin-bottom: 20px;
                }
                h5 {
                    margin-bottom: 40px;
                    color: yellow;
                }
                span {
                    margin-top: 30px;
                    margin-bottom: 60px;
                }
            }
            .card:hover { 
                transform: scale(1.1); 
            }
        }
    }
</style>