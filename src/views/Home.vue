<template>
<div>
    <section class="p-0 wow fadeIn no-transition" id="inicio">
        <swiper class="swiper-container swiper-home swiper-container-fade swiper-container-initialized swiper-container-horizontal" :options="homeSlider">
            <swiper-slide class="slide-1" v-for="homeSlide of homeSlides" :key="homeSlide.text" v-bind:style="{ 'background-image': 'url(' + homeSlide.img + ')' }">
                <div class="swiper-overlay"></div>
                <h1 class="font-weight-600 alt-font text-white pl-2 ml-5 title-large" style="z-index: 2; position: relative;"> {{homeSlide.text}} <br data-v-2a3ed38d=""> ideas</h1>
            </swiper-slide>
        </swiper>
    </section>
    <!-- end slider section -->

    <section class="swiper-works" id="portfolio">
        <swiper class="swiper-bottom-scrollbar-full swiper-container swiper-container-horizontal swiper-container-initialized swiper-container-ios" :options="workSlider" style="cursor: grab">
            <swiper-slide class="swiper-slide sm-width-100 sm-height-auto swiper-slide-active first-slide">
                <div class="md-mb-5 p-5 width-80">
                    <p class="alt-font margin-5px-bottom text-uppercase text-small">algunos_de</p>
                    <h5 class="alt-font text-extra-dark-gray font-weight-700 md-width-100">//nuestros_trabajos </h5>
                    <p class="text-large d-block float-left font-weight-300 margin-35px-bottom"> Impulsamos personas, empresas y organizaciones con estrategias de comunicación innovadoras. <br> Nos involucramos en cada uno de nuestros proyectos para captar la esencia de nuestros clientes y lograr resultados ideales. </p>
                    <button class="btn btn-dark-gray btn-small text-small next-port work-next">Miralos aca <i class="ti-arrow-right"></i></button>
                </div>
            </swiper-slide>
            <swiper-slide v-for="work of works" :key="work.name" class="swiper-slide width-auto last-paragraph-no-margin swiper-slide-next">
                <div class="height-100 d-flex align-items-center">
                    <div class="d-block position-relative"><img :src="work.img" alt="">
                        <p class="bottom-text width-100 text-extra-small text-white-2 text-uppercase text-center"> {{work.type}}</p>
                    </div>
                    <div class="hover-title-box padding-55px-lr width-300px md-width-100 md-padding-20px-lr">
                        <div class="separator width-50px bg-white d-none d-xl-inline-block"></div>
                        <h3>
                            <router-link :to="work.link" class="text-deep-pink font-weight-600 alt-font">{{work.name}}</router-link>
                        </h3>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide width-450px sm-width-100 sm-height-auto swiper-slide-next">
                <div class="position-relative width-90 height-100 d-flex align-items-center padding-ten-top sm-width-100">
                    <div class="ml-5 mb-5 text-center">
                        <h5 class="alt-font text-uppercase font-weight-600 text-extra-dark-gray mx-auto margin-35px-bottom lg-width-100 wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">Y muchos trabajos más<br> ¿Querés verlos?</h5>
                        <router-link to="/portfolio" class="btn btn-medium btn-transparent-dark-gray wow fadeInUp" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">Pasá por nuestro portfolio </router-link>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </section>
    <section class="wow fadeIn bg-extra-dark-gray">
        <div class="opacity-medium bg-extra-dark-gray"></div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-4 text-center text-lg-left md-margin-five-bottom sm-margin-ten-bottom last-paragraph-no-margin">
                    <h5 class="font-weight-600 alt-font text-white letter-spacing-minus-1 mb-5">
                        //nuestros_servicios</h5>
                </div>
            </div>
            <div class="row feature-box feature-box-17 m-0">
                <!-- start feature item -->
                <div v-for="service in services" :key="service.title" class="col-12 col-lg-3 col-md-6 md-margin-30px-bottom sm-no-margin-bottom -bottom wow fadeInLeft last-paragraph-no-margin" style="visibility: visible; animation-name: fadeInLeft;">
                    <div class="box bg-extra-dark-gray text-extra-dark-gray text-white-2-hover">
                        <div class="content">
                            <figure>
                                <img :src="service.icon" alt="Diseño gráfico" class="servicio-img mb-3" style="bottom: 6px; position: relative;">
                                <span class="text-large alt-font d-block margin-10px-bottom text-white-2">{{ service.title }}</span>
                                <div class="details">
                                    <p class="width-65 md-width-90 mx-auto text-white-2">{{ service.text }}</p>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
                <!-- end feature item -->
                <div class="col-12 text-center">
                    <a href="servicios.html" class="btn btn-transparent-light-gray btn-small text-small mt-5">¡Conocé
                        más!</a>
                </div>
                <!-- end feature item -->
            </div>
        </div>
    </section>
    <!-- start clients slider section -->
    <!-- start clients style 03 -->
    <section id="clientes" class="wow fadeIn">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-4 text-center text-lg-left last-paragraph-no-margin">
                    <h5 class="font-weight-600 alt-font text-extra-dark-gray letter-spacing-minus-1 mb-5">
                        //nuestros_clientes</h5>
                </div>
            </div>
            <div class="row">
                <swiper class="swiper" :options="clientsSlider">
                    <swiper-slide v-for="client of clients" :key="client" class="cliente-container"><img :src="client"></swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
        </div>
    </section>

    <!-- start contact section -->
    <section id="contacto" class="wow fadeIn bg-extra-dark-gray">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6 justify-content-center align-items-start padding-45px-all md-padding-30px-all h-100 w-100">
                    <h5 class="alt-font text-white-2 margin-20px-bottom">//todo_proyecto_comienza _con_una_buena_charla
                    </h5>
                    <p class="alt-font text-medium-gray text-medium">¡Nos interesa escucharte! Dejanos tu mensaje y nos
                        comunicamos con vos lo antes posibe. Si la
                        distancia nos permite,
                        podemos coordinar una reunión en nuestro estudio, o agendamos una videollamada.</p>
                    <form action="javascript:void(0)" method="post">
                        <div id="success-contact-form" class="mx-0"></div>
                        <input type="email" name="email" id="email" placeholder="Email*" class="input-bg" ref="email">
                        <textarea name="comment" id="comment" placeholder="Mensaje" class="input-bg" ref="comment"></textarea>
                        <button id="contact-us-button" v-on:click="sendMail" class="btn btn-transparent-light-gray text-small">Enviar</button>
                    </form>
                </div>
                <div class="col-12 col-lg-6 wow fadeIn padding-45px-top md-padding-30px-top">
                    <div class="icon-box d-table w-100 mx-auto mx-lg-0 last-paragraph-no-margin pl-3">
                        <div class="icon-box-holder align-middle d-table-cell position-relative">
                            <span class="icon-map icon-medium text-deep-pink padding-5px-top"></span>
                            <div class="alt-font text-white-2">/El_estudio</div>
                            <p class="text-medium-gray">Belgrano 467, depto 2B torre Betta; Cipolletti; Patagonia</p>
                        </div>
                    </div>
                    <div class="icon-box d-table w-100 mx-auto mx-lg-0 last-paragraph-no-margin pl-3">
                        <div class="icon-box-holder align-middle d-table-cell position-relative">
                            <span class="icon-envelope icon-medium text-deep-pink padding-5px-top"></span>
                            <div class="alt-font text-white-2">/El_mail</div>
                            <p class="text-medium-gray"><a href="mailto:hola@digitestudio.com">
                                    hola@digitestudio.com</a></p>
                        </div>
                    </div>
                    <div class="icon-box d-table w-100 mx-auto mx-lg-0 last-paragraph-no-margin pl-3">
                        <div class="icon-box-holder align-middle d-table-cell position-relative">
                            <span class="icon-chat icon-medium text-deep-pink padding-5px-top"></span>
                            <div class="alt-font text-white-2">/El_celu</div>
                            <p class="mb-0 text-medium-gray">+54 9 (298) 4509714</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import {
    Swiper,
    SwiperSlide
} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import axios from 'axios';

export default {
    name: 'Home',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            homeSlides: [{
                    img: require('../assets/images/slider/slider-01.jpg'),
                    text: '_Diseñamos'
                },
                {
                    img: require('../assets/images/slider/slider-02.jpg'),
                    text: '_Publicitamos'
                },
                {
                    img: require('../assets/images/slider/slider-03.jpg'),
                    text: '_Desarrollamos'
                }
            ],
            works: [{
                    name: 'Kürüf',
                    type: 'Redes sociales',
                    img: require('../assets/images/portfolio/kuruf2.jpg'),
                    link: '/clientes/kuruf'
                },
                {
                    name: 'Pss Bikes',
                    type: 'Redes sociales & audiovisual & desarrollo web',
                    img: require('../assets/images/portfolio/pss2.jpg'),
                    link: '/clientes/pss-bikes'
                },
                {
                    name: 'OneWork',
                    type: 'Desarrollo web & sistema',
                    img: require('../assets/images/portfolio/ow.jpg'),
                    link: '/clientes/onework'
                },
                {
                    name: 'Pablo Collomb',
                    type: 'Marketing de persona',
                    img: require('../assets/images/portfolio/pcollomb2.jpg'),
                    link: '/clientes/pablo-collomb'
                },
            ],
            services: [{
                    title: 'Marketing',
                    icon: require('../assets/images/media_redes.png'),
                    text: 'Armamos estrategias con objetivos para todas las plataformas'
                },
                {
                    title: 'Branding',
                    icon: require('../assets/images/branding.png'),
                    text: 'Textos, diseños y contenidos que le aportan valor tu marca.'
                },
                {
                    title: 'Desarrollo',
                    icon: require('../assets/images/desarrollo.png'),
                    text: 'Desarrollamos sitios webs, tiendas y sistemas intuitivos.'
                },
                {
                    title: 'Audiovisual',
                    icon: require('../assets/images/audiovisual.png'),
                    text: 'Luz, cámara, ¡acción! Resolvemos cualquier tipo de producción.'
                }
            ],
            clients: [
                require('../assets/images/clientes/kuruf.svg'),
                require('../assets/images/clientes/pss.svg'),
                require('../assets/images/clientes/pabloc.svg'),
                require('../assets/images/clientes/onework.svg'),
                require('../assets/images/clientes/lj.svg'),
                require('../assets/images/clientes/piltri.svg'),
                require('../assets/images/clientes/bsp.svg'),
                require('../assets/images/clientes/kabala.svg'),
                require('../assets/images/clientes/pesca.svg'),
                require('../assets/images/clientes/quijote.svg'),
                require('../assets/images/clientes/caelis.svg'),
                require('../assets/images/clientes/bda.svg'),
                require('../assets/images/clientes/ov.svg'),
                require('../assets/images/clientes/sena.svg')
            ],
            homeSlider: {
                spaceBetween: 30,
                effect: 'fade',
                autoplay: {
                    delay: 3000
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            workSlider: {
                allowTouchMove: true,
                slidesPerView: 'auto',
                grabCursor: true,
                preventClicks: false,
                spaceBetween: 30,
                keyboardControl: true,
                speed: 1000,
                pagination: {
                    el: null
                },
                mousewheel: false,
                keyboard: {
                    enabled: true
                },
                navigation: {
                    nextEl: '.work-next',
                }
            },
            clientsSlider: {
                slidesPerView: 4,
                slidesPerColumn: 2,
                spaceBetween: 10,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                        slidesPerColumn: 2,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                        slidesPerColumn: 2,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                        slidesPerColumn: 2,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        slidesPerColumn: 2,
                    }
                }
            }
        }
    },
    methods: {
        sendMail() {
            const email = this.$refs.email.value;
            const comment = this.$refs.comment.value

            axios.post('https://digitestudio.com/contact.php', {email, comment})
                .then(response => console.log(response))
                .catch(error => console.log(error))
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.swiper {
    height: 430px;
    margin-left: auto;
    margin-right: auto;
}

.swiper-slide {
    height: 150px;
}

.swiper-home {
    height: 100vh;
}

.swiper-home .swiper-overlay {
    background-color: rgba(0, 0, 0, .45);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.swiper-wraper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
}

.swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
}

.swiper-home .swiper-slide {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background-position: 0;
    background-size: cover;
}

.swiper-works .swiper-slide {
    height: 100%;
}

.first-slide {
    width: 40%;
    margin-left: 6em;
}

.swiper-slide.width-auto {
    width: auto;
}

@media only screen and (max-width: 600px) {
    .swiper-home .swiper-slide {
        background-position: 50%;
    }

    .swiper-slide.width-auto {
        width: 100%;
    }

    .first-slide {
        margin-left: 0px;
    }

    .first-slide div:first-child {
        width: 90%;
    }

    .swiper-works h3 {
        line-height: 80px;
    }

    .swiper-works .swiper-slide:nth-child(3) p {
        width: 80%;
        margin-left: 12%;
    }
}
</style>
