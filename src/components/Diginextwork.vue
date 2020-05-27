<template>
<section id="hero" class="not-home detalle next-project p-0">
    <div class="row wrapper wrap-padding">
        <div class="col-12 col-md-4 mb-3">
            <div class="alt-font text-medium-gray margin-10px-bottom text-uppercase text-small">SIGUIENTE TRABAJO</div>
            <h5 class="alt-font text-extra-dark-gray font-weight-600 mb-0">{{work.title}}</h5>
        </div>
        <div class="col-12 col-md-8 mb-3">
            <p class="text-extra-dark-gray text-large margin-four-bottom lg-width-50 md-width-100 sm-width-100 sm-margin-15px-bottom">{{work.description}}</p>
        </div>
    </div>
    <router-link :to="work.link">
        <div class="wrapper wrap-padding">
            <div class="show-me detalle-item mitad show" id="n1" v-bind:class="{'go-up': workEnter}" v-on:mouseover="workOver" v-on:mouseleave="workLeave">
                <div class="enter-y" >
                    <div class="detalle-img big">
                        <div class="bg animated pulse infinite" v-bind:class="{'show-img': !workEnter}" id="np-bg" v-bind:style="[ {'background-image': 'url(' + work.img + ')'}, {'background-position': work.bgPosition1} ]"></div>
                        <div class="bg" v-bind:class="{'show-img': workEnter}" id="np-bg" v-bind:style="[{ 'background-image': 'url(' + work.img1 + ')' }, {'background-position': work.bgPosition2}] "></div>
                    </div>
                </div>
            </div>
        </div>
    </router-link>

    <router-link :to="work.link"></router-link>
</section>
</template>

<script>
export default {
    name: 'Diginextwork',
    props: {
        msg: String,
        work: Object,
    },
    data() {
        return {
            workEnter: false
        }
    },
    methods: {
        workOver() {
            this.workEnter = true;
        },
        workLeave() {
            this.workEnter = false;
        }
    }
}
</script>

<style>
.next-project .bg.show-img {
    opacity: 1;
    transform: scale(1);
}

.next-project .bg {
    opacity: 0;
    transform: scale(1.03);
}

.mitad .detalle-img.big {
    padding-bottom: 25%;
    transition: all .3s;
}

.mitad .detalle-img.big {
    padding-bottom: 53%;
}

.detalle-img .bg {
    transition: all .7s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
}

.detalle-item>div:not(.swiper-wrapper) {
    position: relative;
    display: block;
    overflow: hidden;
}

.show .enter-y {
    opacity: 1;
    transform: translate(0) scale(1) rotate(0);
}

.enter-y {
    will-change: transform, opacity;
    transform: translateY(50px) rotate(2deg);
    opacity: 0;
    transition: all 1.2s cubic-bezier(.37, .01, 0, .98);
    -webkit-transform: translateY(50px) rotate(2deg);
    -moz-transform: translateY(50px) rotate(2deg);
    -ms-transform: translateY(50px) rotate(2deg);
    -o-transform: translateY(50px);
    -webkit-transition: all 1.2s cubic-bezier(.37, .01, 0, .98);
    -moz-transition: all 1.2s cubic-bezier(.37, .01, 0, .98);
    -ms-transition: all 1.2s cubic-bezier(.37, .01, 0, .98);
    -o-transition: all 1.2s cubic-bezier(.37, .01, 0, .98);
}

#hero.next-project #n1 {
    height: 380px;
    padding-top: 80px;
    transition: all .5s;
}

.not-home .wrapper {
    position: relative;
    left: 0;
    top: 0;
    transform: translateY(0);
}

.wrapper {
    position: absolute;
    left: 0;
    top: calc(50% + 100px);
    transform: translateY(-50%);
}

.wrap-padding {
    padding: 0 100px;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 600px) {
    .wrap-padding {
    padding: 0 10px;
}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px){
    .wrap-padding {
    padding: 0 20px;
}
}

.wrapper {
    position: relative;
    margin: 0 auto;
    right: 0;
    max-width: 1300px;
    width: 90%;
    z-index: 1;
}

#hero.next-project #n1.go-up {
    padding-top: 0px;
}

.bg .animated {
    animation-delay: 2s;
}
</style>
