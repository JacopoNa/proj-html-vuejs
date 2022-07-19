<template>
    <div class="fitness">
        <div class="container">

            <div class="row row-cols-4">
                <div class="col">
                    <div class="card">
                        <div class="image">
                            <img src="../assets/img/sponsor-1-2x.png" alt="photo">
                        </div>
                        <p>Tristique aliquam in nullam habitasse nunc, amet vel consectetur. Nulla in suspendisse dolor, aliquet.</p>
                        <span>
                            Visit Yoga Studio
                            <font-awesome-icon icon="fa-solid fa-angle-right" />
                        </span>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <div class="image">
                            <img src="../assets/img/sponsor-2-2x.png" alt="photo">
                        </div>
                        <p>Tristique aliquam in nullam habitasse nunc, amet vel consectetur. Nulla in suspendisse dolor, aliquet.</p>
                        <span>
                            Join Fitness Center
                            <font-awesome-icon icon="fa-solid fa-angle-right" />
                        </span>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <div class="image">
                            <img src="../assets/img/sponsor-3-2x.png" alt="photo">
                        </div>
                        <p>Tristique aliquam in nullam habitasse nunc, amet vel consectetur. Nulla in suspendisse dolor, aliquet.</p>
                        <span>
                            Learn about FC
                            <font-awesome-icon icon="fa-solid fa-angle-right" />
                        </span>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <div class="image">
                            <img src="../assets/img/sponsor-4-2x.png" alt="photo">
                        </div>
                        <p>Tristique aliquam in nullam habitasse nunc, amet vel consectetur. Nulla in suspendisse dolor, aliquet.</p>
                        <span>
                            Visit Power Gym
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
    name: 'FitnessComponent'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
    .fitness {
        margin: 100px 0;
        text-align: center;

        .container {
            .card {
                border: none;

                .image {
                    img {
                        width: 60%;
                    }
                }
                p {
                    margin: 20px 0;
                    color: $fourth-color;
                }
                span {
                    font-weight: 500;
                }
            }
        }
    }
</style>