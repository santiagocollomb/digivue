<template>
<div>
    <section class="p-0 position-absolute width-90 height-100 top-0">
        <div v-swiper:portfolioSwiper="portfolioSlider" class="swiper-auto-slide swiper-home white-move">
            <div class="swiper-wrapper">
                <div v-for="work of works" :key="work.text" class="swiper-slide cover-background sm-width-100 md-width-70 sm-margin-five-left" v-bind:style="{ 'background-image': 'url(' + work.img + ')' }">
                    <div class="opacity-light bg-black"></div>
                    <div class="position-relative height-100">
                        <div class="absolute-middle-center width-100 text-center">
                            <div class="parallax-text">
                                <h2 class="text-white-2 alt-font font-weight-600 parallax-text-shadow">
                                    <router-link :to="work.link" class="text-white-2 text-white-2-hover">{{work.title}}</router-link>
                                </h2>
                            </div>
                        </div>
                        <span class="text-medium position-absolute bottom-50 text-light-gray width-100 text-center"><a href="javascript:void(0);" class="text-white-2 text-white-2-hover">{{work.text}}</a></span>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination swiper-pagination-square swiper-pagination-white"></div>
            <div class="swiper-scrollbar d-inline-block"></div>
            <div class="swiper-next-style2 text-small alt-font  d-inline-block">
                Siguiente
                <i class="fas fa-long-arrow-alt-right icon-very-small position-relative text-extra-dark-gray top-2 margin-5px-left" aria-hidden="true"></i>
            </div>
            <div class="swiper-prev-style2 text-small alt-font d-inline-block">
                <i class="fas fa-long-arrow-alt-left icon-very-small position-relative text-extra-dark-gray top-2 margin-5px-right" aria-hidden="true"></i>
                Anterior
            </div>
        </div>
    </section>
</div>
</template>

<script>
import {
    directive
} from 'vue-awesome-swiper'

import 'swiper/css/swiper.css'
export default {
    name: 'Portfolio',
    metaInfo: {
        meta: [{
                name: "description",
                content: "Mira nuestros trabajos realizados y clientes que hablan por nosotros"
            },
        ],
        title: 'digit(portfolio)',
        titleTemplate: '%s | Trabajos realizados',
    },
    directives: {
        swiper: directive
    },
    data() {
        return {
            works: [{
                    title: 'KÜRÜF',
                    img: require('../assets/images/portfolio/kuruf.png'),
                    type: 'Redes sociales',
                    link: '/clientes/kuruf'
                },
                {
                    title: 'Pss BIKES',
                    img: require('../assets/images/portfolio/pss.jpg'),
                    type: 'Redes sociales & Audiovisual & Desarrollo Web',
                    link: '/clientes/pss-bikes'
                },
                {
                    title: 'ONEWORK',
                    img: require('../assets/images/portfolio/ow2.jpg'),
                    type: 'Desarrollo de sistema',
                    link: '/clientes/onework'
                },
                {
                    title: 'PABLO COLLOMB',
                    img: require('../assets/images/portfolio/pcollomb.jpg'),
                    type: 'Marketing de persona',
                    link: '/clientes/pablo-collomb'
                },
                {
                    title: 'WOLFSCHMIDT',
                    img: require('../assets/images/portfolio/wolf.png'),
                    type: 'Identidad de marca',
                    link: '/clientes/wolfschmidt'
                },
                {
                    title: 'PILTRI ALTO VALLE',
                    img: require('../assets/images/portfolio/piltri.png'),
                    type: 'Diseño gráfico & redes',
                    link: '/clientes/piltri'
                },
                {
                    title: 'SENA',
                    img: require('../assets/images/portfolio/sena.jpg'),
                    type: 'Identidad de marca',
                    link: '/clientes/sena'
                },
                {
                    title: 'KABALA',
                    img: require('../assets/images/portfolio/kabala2.jpg'),
                    type: 'Identidad de marca & desarrollo',
                    link: '/clientes/kabala'
                },
                {
                    title: 'BIEN DE ALLEN',
                    img: require('../assets/images/clientes/bda/inicio.jpg'),
                    type: 'Identidad de marca & desarrollo',
                    link: '/clientes/bda'
                },
                {
                    title: 'CAELIS',
                    img: require('../assets/images/portfolio/caelis.jpg'),
                    type: 'Identidad de marca y diseño gráfico',
                    link: '/clientes/caelis'
                },
            ],
            portfolioSlider: {
                allowTouchMove: true,
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 80,
                preventClicks: false,
                mousewheelControl: true,
                observer: true,
                speed: 1000,
                pagination: {
                    el: null
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                    hide: false,
                    snapOnRelease: true
                },
                autoplay: {
                    delay: 3000
                },
                keyboard: {
                    enabled: true
                },
                navigation: {
                    nextEl: '.swiper-next-style2',
                    prevEl: '.swiper-prev-style2'
                },
                breakpoints: {
                    1199: {
                        spaceBetween: 60
                    },
                    960: {
                        spaceBetween: 30
                    },
                    767: {
                        spaceBetween: 15,
                        direction: 'vertical',
                    }
                },
            },
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.parallax-text a {
    text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.7);
}

.swiper-container-horizontal>.swiper-scrollbar {
    left: 22%;
    opacity: 1;
    position: absolute;
    width: 55%;
    bottom: -50px;
    border-radius: 0;
    height: 1px;
}

@media (max-width: 767px) {
    .width-90 {
        width: 97%;
    }

    .swiper-next-style2 {
        right: 0px;
    }

    .swiper-container-horizontal>.swiper-scrollbar {
        left: 27%;
        opacity: 1;
        position: absolute;
        width: 50%;
        bottom: -50px;
        border-radius: 0;
        height: 1px;
    }
}
</style>
