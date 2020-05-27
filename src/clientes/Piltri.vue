<template>
<div>
    <Digiwork :work="work" />
    <!-- start about section -->
    <section class="wow fadeIn big-section" id="down-section" style="visibility: visible; animation-name: fadeIn;">
        <div class="container">
            <div class="row">
                <div class="col col-lg-11 mx-auto text-center margin-70px-bottom md-margin-50px-bottom sm-margin-30px-bottom wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                    <h6 class="alt-font text-extra-dark-gray mb-0">¡Trabajamos con nuestros amigos de Piltri en la inauguración de su bar! Diseñamos su identidad, branding, merchandising, interior del local y administramos sus redes sociales. Un trabajo con mucha buena onda y varias birras, no lo vamos a negar</h6>
                </div>
            </div>
            <div class="row margin-70px-bottom md-margin-50px-bottom sm-margin-30px-bottom">
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Cliente
                        </li>
                        <li>Piltri Alto Valle</li>
                    </ul>
                </div>
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Industria
                        </li>
                        <li>Bares, Fabricas de cerveza</li>
                    </ul>
                </div>
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Servicios
                        </li>
                        <li>Identidad, branding, redes sociales </li>
                    </ul>
                </div>
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Redes
                        </li>
                        <li> <a href="https://instagram.com/piltrialtovalle" target="_blank">@piltrialtovalle</a> </li>
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
                    <img src="../assets/images/clientes/piltri/sorteo.png" alt="" class="width-50 d-block" style="margin: auto;">
                </div>
                <div class="col-12 col-lg-5 line-height-26 wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
                    <h6 class="alt-font text-extra-dark-gray mb-5">Hicimos un Piltrisorteo con resultados excelentes. <br> Conseguimos:</h6>
                    <div class="row social-stats">
                        <!-- start counter box item -->
                        <div class="col-12 mb-4 md-padding-twelve-left md-margin-ten-bottom sm-margin-30px-bottom sm-padding-15px-left wow fadeInRight" style="visibility: visible; animation-name: fadeInRight;">
                            <div class="feature-box-5 position-relative">
                                <i class="icon-profile-male text-medium-gray icon-extra-medium top-6"></i>
                                <div class="feature-content">
                                    <h6 class="d-block text-extra-dark-gray font-weight-600 alt-font mb-0 timer appear">+800</h6>
                                    <span class="text-small text-uppercase position-relative top-minus4">Nuevos seguidores</span>
                                </div>
                            </div>
                        </div>
                        <!-- end counter box item -->
                        <!-- start counter box item -->
                        <div class="col-12 mb-4 md-padding-twelve-left md-margin-ten-bottom sm-margin-30px-bottom sm-padding-15px-left wow fadeInRight" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInRight;">
                            <div class="feature-box-5 position-relative">
                                <i class="icon-global text-medium-gray icon-extra-medium top-6"></i>
                                <h6 class="d-block text-extra-dark-gray font-weight-600 alt-font mb-0 timer appear">6700 </h6>
                                <span class="text-small text-uppercase">Alcance</span>
                            </div>
                        </div>
                        <!-- end counter box item -->
                        <!-- start counter box item -->
                        <div class="col-12 mb-4 md-padding-twelve-left sm-margin-30px-bottom sm-padding-15px-left wow fadeInRight" data-wow-delay="0.4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInRight;">
                            <div class="feature-box-5 position-relative">
                                <i class="icon-phone text-medium-gray icon-extra-medium top-6"></i>
                                <div class="feature-content">
                                    <h6 class="d-block text-extra-dark-gray font-weight-600 alt-font mb-0 timer appear">
                                        <number ref="numberExample" :to="7000" />
                                    </h6>
                                    <span class="text-small text-uppercase position-relative top-minus4">Impresiones</span>
                                </div>
                            </div>
                        </div>
                        <!-- end counter box item -->
                        <!-- start counter box item -->
                        <div class="col-12 mb-4 md-padding-twelve-left sm-padding-15px-left wow fadeInRight" data-wow-delay="0.6s" style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInRight;">
                            <div class="feature-box-5 position-relative">
                                <i class="icon-chat text-medium-gray icon-extra-medium top-6"></i>
                                <div class="feature-content">
                                    <h6 class="d-block text-extra-dark-gray font-weight-600 alt-font mb-0 timer appear">+850</h6>
                                    <span class="text-small text-uppercase position-relative top-minus4">Comentarios</span>
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
                    <h5 class="alt-font text-extra-dark-gray font-weight-600 sm-no-margin-bottom">Harlem Piltri, birras y el mejor estilo urbano</h5>
                </div>
            </div>
        </div>
    </section>
    <section class="wow fadeIn pt-0" style="visibility: visible; animation-name: fadeIn;">
        <div class="container-fluid">
            <div class="row">

                <div class="gal">

                    <img v-for="image of images" :key="image" :src="image" alt="">

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
            primera: require('../assets/images/clientes/piltri/1.png'),
            work: {
                title: 'Piltri Alto Valle',
                subtitle: '¡Un espacio de trabajo de primera!',
                img: require('../assets/images/clientes/piltri/inicio.jpg')
            },
            images: [require('../assets/images/clientes/piltri/harlem1.jpg'), require('../assets/images/clientes/piltri/harlem2.jpg'), require('../assets/images/clientes/piltri/harlem3.jpg'), require('../assets/images/clientes/piltri/harlem4.jpg'), require('../assets/images/clientes/piltri/harlem5.jpg'), require('../assets/images/clientes/piltri/harlem8.jpg'), require('../assets/images/clientes/piltri/harlem6.png')],
            nextWork: {
                title: 'SENA',
                description: '¡Renovamos la identidad de SeNa! Buscamos unificar todas sus unidades de negocio (servicio técnico, venta de hardware, software, videojuegos e impresiones digitales) en un isologo y claim.',
                img: require('../assets/images/clientes/sena/6.jpg'),
                img1: require('../assets/images/portfolio/sena.jpg'),
                link: '/clientes/sena'
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.social-stats {
    flex-direction: column;
}

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
