<template>
    <div class="advice-container">
        <div class="advice">
            <div class="top-part">

                <div class="row row-cols-2">
                    <div class="col">
                        <div class="card">
                            <img src="../assets/img/service15-2x.jpg" alt="photo">

                            <div class="start">
                                <a href="#">
                                    <div class="play-icon">
                                        <font-awesome-icon icon="fa-solid fa-play" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="text-card">
                            <h5>Tune up your workouts</h5>
                            <h2>The best health & Fitness advice online</h2>

                            <div class="logo">
                                <img src="../assets/img/unnamed.jpg" alt="unnamed">
                                <div class="theme">
                                    <div class="theme-text">ThemeFusion</div>
                                    <div class="description">
                                        <span class="Yt-logo"><font-awesome-icon icon="fa-brands fa-youtube" />YouTube</span>
                                        <span class="number">999+</span>
                                    </div>
                                </div>
                            </div>

                            <p>Arcu eu facilisi ut quisque placerat nunc habitant. Magna semper mauris, venenatis, leo integer sit pellentesque.</p>
                            <a href="#">
                                <span class="ms-button">
                                    <font-awesome-icon icon="fa-brands fa-youtube" />
                                    Visit my Youtube Channel
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            
                <div class="container">
                    <div class="playlist">
                        <div class="top">
                            <div>
                                <h5>Featured Playlists</h5>
                            </div>
                            <div class="view">
                                <a href="#">
                                    <h6>View all Videos</h6>
                                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                                </a>
                            </div>
                        </div>

                        <div class="row row-cols-3">
                            <div class="col">
                                <div class="image">
                                    <img src="../assets/img/video2-2x.jpg" alt="photo">
                                    <div class="start">
                                        <a href="#">
                                            <div class="play-icon">
                                                <font-awesome-icon icon="fa-solid fa-play" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="title-video">
                                    <h5>Thighs & glute workout</h5>
                                    <span>Increase your mobility</span>
                                </div>
                            </div>

                            <div class="col">
                                <div class="image">
                                    <img src="../assets/img/video7-2x.jpg" alt="photo">
                                    <div class="start">
                                        <a href="#">
                                            <div class="play-icon">
                                                <font-awesome-icon icon="fa-solid fa-play" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="title-video">
                                    <h5>Lift, firm & perk up</h5>
                                    <span>Feel young again</span>
                                </div>
                            </div>

                            <div class="col">
                                <div class="image">
                                    <img src="../assets/img/video9-2x.jpg" alt="photo">
                                    <div class="start">
                                        <a href="#">
                                            <div class="play-icon">
                                                <font-awesome-icon icon="fa-solid fa-play" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="title-video">
                                    <h5>Slim & trim your waist</h5>
                                    <span>Shed your extra pounds</span>
                                </div>
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
    name: 'PlaylistsComponent'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
    .advice-container {
        height: 1300px;
    }
    .advice {
        position: relative;

        .top-part {
            position: absolute; 
            top: -50px;
            right: 0;
            left: 0;

            .card {
                border: none;
                background-color: transparent;
                position: relative;

                img {
                    border-radius: 0 0 30px 0;
                }

                .start {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);

                    .play-icon {
                    width: 100px;
                    height: 100px;
                    font-size: 25px;
                    }
                }

            }
            .text-card {
                margin-left: 50px;

                h5 {
                    margin-top: 170px;
                    margin-bottom: 30px;
                    color: $third_color;
                }
                h2 {
                    font-size: 50px;
                    margin-bottom: 25px;
                }
                .logo {
                    .theme {
                        display: inline-block;
                        vertical-align: middle;
                        padding-left: 5px;

                        .theme-text {
                            color: $fourth-color;
                            font-size: 13px;
                            margin-bottom: 5px;
                        }

                        .description {
                            border: 1px solid #bcbcbc;

                            .Yt-logo {
                                color: $primary_color;
                                background-color: red;
                                padding: 2px;
                            }
                            .number {
                                font-size: 11px;
                                color: $fourth-color;
                                padding: 0 3px;
                            }
                        }
                    }
                }
                p {
                    color: $fourth-color;
                    font-size: 18px;
                    margin-top: 20px;
                    margin-bottom: 30px;
                }
                .ms-button {
                    color: $primary_color;
                    background-color: red;
                }

            }

            .playlist {
                margin-top: 100px;

                .top {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 15px;

                    .view {
                        h6 {
                            display: inline;
                            margin-right: 5px;
                        }
                    }
                }
                .image {
                    position: relative;
                    img{
                        width: 100%;
                        border-radius: 0 0 30px 0;
                    }
                    .start {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);

                        .play-icon {
                        width: 50px;
                        height: 50px;
                        font-size: 13px;
                        }
                    }
                }
                .title-video {
                    text-align: center;
                    margin-top: 20px;

                    span {
                        color: $third_color;
                        font-weight: 500;
                    }
                }
            }
        }
    }
</style>