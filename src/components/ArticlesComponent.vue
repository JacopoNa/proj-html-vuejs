<template>
    <div class="articles">
        <div class="container">
            <div class="latest">
                        <div class="top">
                            <div>
                                <h5>Latest Articles</h5>
                            </div>
                            <div class="read">
                                <a href="#">
                                    <h6>Read all articles</h6>
                                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                                </a>
                            </div>
                        </div>

                        <div class="row row-cols-3">
                            <div class="col">
                                <div class="card">
                                    <div class="image">
                                        <img src="../assets/img/blog4-2x.jpg" alt="photo">
                                    </div>
                                    <div class="title-video">
                                        <h5>The best protein shake</h5>
                                        <span>By admin | November 26th, 2019 | Gym</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card">
                                    <div class="image">
                                        <img src="../assets/img/blog1-2x.jpg" alt="photo">
                                    </div>
                                    <div class="title-video">
                                        <h5>Ultimate cardio workout</h5>
                                        <span>By admin | November 26th, 2019 | Gym</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card">
                                    <div class="image">
                                        <img src="../assets/img/blog3-2x.jpg" alt="photo">
                                    </div>
                                    <div class="title-video">
                                        <h5>New juices available now</h5>
                                        <span>By admin | November 26th, 2019 | Gym</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ArticlesComponent'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

    .articles {
        .container {
            .latest {
                margin: 100px 0;

                .top {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 15px;

                    .read {
                        h6 {
                            display: inline;
                            margin-right: 5px;
                        }
                    }
                }
                .card {
                    border: none;
                    .image {
                        position: relative;
                        img {
                            width: 100%;
                        }
                    }
                    .image:hover:after {
                        content:"";
                        position:absolute;
                        left:0; top:0;
                        width:100%; height:100%;
                        display:inline-block;
                        background: linear-gradient(to top, rgba(0, 0, 255, 0.3) 33%, rgba(0, 0, 255, 0));
                    }
                    .title-video {
                        margin-top: 20px;
                        margin-left: 20px;

                        span {
                            color: $fourth_color;
                            font-weight: 500;
                        }
                    }
                }
                
            }
        }
    }
</style>