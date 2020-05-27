<template>
<div>
    <Digiwork :work="work" />
    <!-- start about section -->
    <section class="wow fadeIn big-section" id="down-section" style="visibility: visible; animation-name: fadeIn;">
        <div class="container">
            <div class="row">
                <div class="col col-lg-11 mx-auto text-center margin-70px-bottom md-margin-50px-bottom sm-margin-30px-bottom wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                    <h6 class="alt-font text-extra-dark-gray mb-0">PSS Bikes, las bicis eléctricas que estan
                        revolucionando el movimiento. Esta marca tiene una misión clara para nosotros: llevar su
                        comunicación de la Patagonia a todo el país.</h6>
                </div>
            </div>
            <div class="row margin-70px-bottom md-margin-50px-bottom sm-margin-30px-bottom">
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Cliente
                        </li>
                        <li>PSS Bikes</li>
                    </ul>
                </div>
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Industria
                        </li>
                        <li>Transporte, tecnología</li>
                    </ul>
                </div>
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Servicios
                        </li>
                        <li>Desarrollo web, redes, producciones audivisuales </li>
                    </ul>
                </div>
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Sitio web
                        </li>
                        <li> <a href="https://pablocollomb.com">www.pssbikes.com</a> </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- end about section -->
    <!-- start parallax section -->
    <section class="p-0 parallax one-fifth-screen md-height-500px sm-height-350px background-position-x-50 wow fadeIn" v-bind:style="{ 'background-image': 'url(' + primera + ')' }" style="background-repeat: no-repeat; background-position: center;">

    </section>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-5 offset-lg-1 line-height-28 last-paragraph-no-margin md-margin-50px-bottom sm-margin-30px-bottom wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
                    <video loop="" autoplay="true" muted="" class="html-vid width-65" poster="images/maintenance-bg.jpg" style="display: block; margin: auto;">
                        <source type="video/mp4" src="../assets/images/clientes/pss/agustina.mp4">
                    </video>
                </div>
                <div class="col-12 col-lg-5 line-height-26 wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
                                        <h6 class="alt-font text-extra-dark-gray mb-5">Administramos sus redes sociales y pauta
                        publicitaria. <br> En dos meses:</h6>
                    <div class="row social-stats">
                        <!-- start counter box item -->
                        <div class="col-12 mb-4 md-padding-twelve-left md-margin-ten-bottom sm-margin-30px-bottom sm-padding-15px-left wow fadeInRight" style="visibility: visible; animation-name: fadeInRight;">
                            <div class="feature-box-5 position-relative">
                                <i class="icon-phone text-medium-gray icon-extra-medium top-6"></i>
                                <div class="feature-content">
                                    <h6 class="d-block text-extra-dark-gray font-weight-600 alt-font mb-0 timer appear">+500.000</h6>
                                    <span class="text-small text-uppercase position-relative top-minus4">Visualizaciones</span>
                                </div>
                            </div>
                        </div>
                        <!-- end counter box item -->
                        <!-- start counter box item -->
                        <div class="col-12 mb-4 md-padding-twelve-left md-margin-ten-bottom sm-margin-30px-bottom sm-padding-15px-left wow fadeInRight" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInRight;">
                            <div class="feature-box-5 position-relative">
                                <i class="icon-heart text-medium-gray icon-extra-medium top-6"></i>
                                <h6 class="d-block text-extra-dark-gray font-weight-600 alt-font mb-0 timer appear">120.000 </h6>
                                <span class="text-small text-uppercase">Interacciones</span>
                            </div>
                        </div>
                        <!-- end counter box item -->
                        <!-- start counter box item -->
                        <div class="col-12 mb-4 md-padding-twelve-left sm-margin-30px-bottom sm-padding-15px-left wow fadeInRight" data-wow-delay="0.4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInRight;">
                            <div class="feature-box-5 position-relative">
                                <i class="icon-target text-medium-gray icon-extra-medium top-6"></i>
                                <div class="feature-content">
                                    <h6 class="d-block text-extra-dark-gray font-weight-600 alt-font mb-0 timer appear">
                                        +250
                                    </h6>
                                    <span class="text-small text-uppercase position-relative top-minus4">Consultas</span>
                                </div>
                            </div>
                        </div>
                        <!-- end counter box item -->
                        <!-- start counter box item -->
                        <div class="col-12 mb-4 md-padding-twelve-left sm-padding-15px-left wow fadeInRight" data-wow-delay="0.6s" style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInRight;">
                            <div class="feature-box-5 position-relative">
                                <i class="icon-bike text-medium-gray icon-extra-medium top-6"></i>
                                <div class="feature-content">
                                    <h6 class="d-block text-extra-dark-gray font-weight-600 alt-font mb-0 timer appear">Resultados orgánicos</h6>
                                </div>
                            </div>
                        </div>
                        <!-- end counter box item -->
                    </div>
                </div>

            </div>
        </div>
    </section>
    <section class="wow fadeIn pt-0" style="visibility: visible; animation-name: fadeIn;">
        <div class="container">
            <div class="row">
                <div class="col-12 col-xl-6 col-lg-6 col-md-10 mx-auto text-center">
                    <h5 class="alt-font text-extra-dark-gray font-weight-600 sm-no-margin-bottom">Hicimos
                        producciones audiovisuales para spots publicitarios</h5>
                </div>
            </div>
        </div>
    </section>
    <section class="wow fadeIn p-0" style="visibility: visible; animation-name: fadeIn;">
        <div class="container-fluid">
            <div class="row">

                <div class="gal">

                    <img v-for="image of images" :key="image" :src="image" alt="">

                </div>

            </div>

        </div>
    </section>

    <section class="wow fadeIn pt-0" style="visibility: visible; animation-name: fadeIn;">
        <div class="container-fluid padding-ten-lr md-padding-30px-lr sm-padding-15px-lr">
            <div class="row">
                <div class="col-12 margin-35px-tb md-no-margin-top md-margin-30px-bottom wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                    <img src="../assets/images/clientes/pss/web.jpg" class="width-100" alt="" data-no-retina="">
                </div>
            </div>
        </div>
    </section>
    <Diginextwork :work="nextWork" />
</div>
</template>

<script>
import Diginextwork from '../components/Diginextwork';
import Digiwork from '../components/Digiwork';

export default {
    name: 'Pss',
    components: {
        Diginextwork,
        Digiwork
    },
    props: {
        msg: String,
    },
    data() {
        return {
            primera: require('../assets/images/clientes/pss/primera1.jpg'),
            images: [require('../assets/images/clientes/pss/6.jpg'), require('../assets/images/clientes/pss/5.jpg'),require('../assets/images/clientes/pss/prod.jpg'), require('../assets/images/clientes/pss/1.jpg'), require('../assets/images/clientes/pss/prod2.jpg'), require('../assets/images/clientes/pss/4.jpg'), require('../assets/images/clientes/pss/2.jpg'), require('../assets/images/clientes/pss/9.jpg')],
            work: {
                title: 'Pss Bikes',
                subtitle: '¡Inspirando movimiento!',
                img: require('../assets/images/clientes/pss/inicio.jpg')
            },
            nextWork: {
                title: 'OneWork Argentina',
                description: 'Desarrollamos un sitio web y un sistema de gestión para OneWork, un co-working de primera ubicado en el centro de Santa Fe',
                img: require('../assets/images/portfolio/ow2.jpg'),
                img1: require('../assets/images/clientes/onework/landing.jpg'),
                link: '/clientes/onework'
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.gal {

    -webkit-column-count: 3;
    /* Chrome, Safari, Opera */
    -moz-column-count: 3;
    /* Firefox */
    column-count: 3;

}

.gal img {
    width: 100%;
    padding: 7px 0;
}

@media (max-width: 500px) {

    .gal {

        -webkit-column-count: 1;
        /* Chrome, Safari, Opera */
        -moz-column-count: 1;
        /* Firefox */
        column-count: 1;

    }

}
</style>
