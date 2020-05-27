<template>
<div>
    <Digiwork :work="work" />

    <!-- start about section -->
    <section class="wow fadeIn big-section bg-extra-dark-gray" id="down-section"
        style="visibility: visible; animation-name: fadeIn;">
        <div class="container">
            <div class="row">
                <div class="col col-lg-11 mx-auto text-center margin-70px-bottom md-margin-50px-bottom sm-margin-30px-bottom wow fadeInUp"
                    style="visibility: visible; animation-name: fadeInUp;">
                    <h6 class="alt-font text-white mb-0">OneWork Argentina es un espacio de coworking ubicado en uno de
                        los edificios mas importantes de Santa Fe
                        Diseñamos y desarrollamos su sitio web, creamos un sistema de gestión interno y otro exclusivo
                        para miembros del
                        co-working.</h6>
                </div>
            </div>
            <div class="row margin-70px-bottom md-margin-50px-bottom sm-margin-30px-bottom">
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-white font-weight-500 line-height-22">Cliente
                        </li>
                        <li>OneWork</li>
                    </ul>
                </div>
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-white font-weight-500 line-height-22">Industria
                        </li>
                        <li>Coworking</li>
                    </ul>
                </div>
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-white font-weight-500 line-height-22">Servicios
                        </li>
                        <li>Desarrollo web, desarrollo de sistema </li>
                    </ul>
                </div>
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-white font-weight-500 line-height-22">Sitio web
                        </li>
                        <li> <a href="https://onework.com.ar" target="_blank">www.onework.com.ar</a> </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- end about section -->
    <section class="p-0 parallax one-fifth-screen md-height-500px sm-height-350px background-position-x-50 wow fadeIn d-none
    d-sm-block" data-stellar-background-ratio="0.4" v-bind:style="{ 'background-image': 'url(' + primera + ')' }" style="background-position: 44px -55.6px;
    visibility: visible; animation-name: fadeIn;">
        <div class="container">
            <div class="row">
                <div class="col-12"></div>
            </div>
        </div>
    </section>
    <section class="wow fadeIn no-padding-bottom" style="visibility: visible; animation-name: fadeIn;">
        <div class="container">
            <div class="row margin-nine-bottom md-margin-50px-bottom">
                <div class="col-12 col-lg-6 last-paragraph-no-margin text-center text-lg-left wow fadeInLeft "
                    style="visibility: visible; animation-name: fadeInLeft; display: flex; margin: auto;">
                    <h5 class="alt-font font-weight-600 text-extra-dark-gray">Administrador de clientes facil de leer,
                        con buscador y opciones de filtrado</h5>
                </div>
                <div class="col-12 col-lg-6 text-center text-lg-left wow fadeInLeft"
                    style="visibility: visible; animation-name: fadeInLeft;">
                    <!-- start HTML5 video -->
                    <video loop="" autoplay="true" muted="" class="html-vid"
                        poster="images/maintenance-bg.jpg">
                        <source type="video/mp4" src="../assets/images/clientes/onework/miembros.mp4">
                    </video>
                    <!-- end HTML5 video -->

                </div>
            </div>
        </div>
    </section>
    <section class="wow fadeIn p-0 half-section" style="visibility: visible; animation-name: fadeIn;">
        <div class="container">
            <div class="row margin-nine-bottom md-margin-50px-bottom">
                <div class="col-12 col-lg-6 text-center text-lg-left wow fadeInLeft"
                    style="visibility: visible; animation-name: fadeInLeft;">
                    <!-- start HTML5 video -->
                    <video loop="" autoplay="true" muted="" class="html-vid"
                        poster="images/maintenance-bg.jpg">
                        <source type="video/mp4" src="../assets/images/clientes/onework/stats.mp4">
                    </video>
                    <!-- end HTML5 video -->
                </div>
                <div class="col-12 col-lg-6 last-paragraph-no-margin text-center text-lg-left wow fadeInLeft"
                    style="visibility: visible; animation-name: fadeInLeft; display: flex; margin: auto;">
                    <h5 class="alt-font font-weight-600 text-extra-dark-gray">Resumenes financieros gráficos con vistas
                        mensuales y anuales</h5>
                </div>
            </div>
        </div>
    </section>
    <section class="wow fadeIn p-0" style="visibility: visible; animation-name: fadeIn;">
        <div class="container">
            <div class="row margin-nine-bottom md-margin-50px-bottom">
                <div class="col-12 col-lg-6 last-paragraph-no-margin text-center text-lg-left wow fadeInLeft"
                    style="visibility: visible; animation-name: fadeInLeft; display: flex; margin: auto;">
                    <h5 class="alt-font font-weight-600 text-extra-dark-gray">Agenda personalizada e intuitiva para administrar eventos. Con vistas diaria, semanal y mensual para tener un control total</h5>
                </div>
                <div class="col-12 col-lg-6 text-center text-lg-left wow fadeInLeft"
                    style="visibility: visible; animation-name: fadeInLeft;">
                    <!-- start HTML5 video -->
                    <video loop="" autoplay="true" muted="true" class="html-vid" poster="images/maintenance-bg.jpg">
                        <source type="video/mp4" src="../assets/images/clientes/onework/agenda.mp4">
                    </video>
                    <!-- end HTML5 video -->

                </div>
            </div>
        </div>
    </section>
    <section class="wow fadeIn p-0 half-section" style="visibility: visible; animation-name: fadeIn;">
        <div class="container">
            <div class="row margin-nine-bottom md-margin-50px-bottom">
                <div class="col-12 col-lg-6 text-center text-lg-left wow fadeInLeft"
                    style="visibility: visible; animation-name: fadeInLeft;">
                    <!-- start HTML5 video -->
                    <video loop="" autoplay="true" muted="" class="html-vid" poster="images/maintenance-bg.jpg">
                        <source type="video/mp4" src="../assets/images/clientes/onework/perfil.mp4">
                    </video>
                    <!-- end HTML5 video -->
                </div>
                <div class="col-12 col-lg-6 last-paragraph-no-margin text-center text-lg-left wow fadeInLeft"
                    style="visibility: visible; animation-name: fadeInLeft; display: flex; margin: auto;">
                    <h5 class="alt-font font-weight-600 text-extra-dark-gray">Sector para usuarios en el que pueden administrar su información personal e interactuar con el sistema realizando reservas</h5>
                </div>
            </div>
        </div>
    </section>
<section class="wow fadeIn pb-3 half-section" style="visibility: visible; animation-name: fadeIn;">
    <div class="container">
        <div class="row">
            <div class="col-12 col-xl-6 col-lg-6 col-md-10 mx-auto text-center">
                <div class="alt-font text-medium-gray margin-10px-bottom text-uppercase text-small">Además
                </div>
                <h5 class="alt-font text-extra-dark-gray font-weight-600 sm-no-margin-bottom">Hicimos una landing page muy fachera y funcional</h5>
            </div>
        </div>
    </div>
</section>
<section class="wow fadeIn pt-0" style="visibility: visible; animation-name: fadeIn;">
    <div class="container-fluid padding-ten-lr md-padding-30px-lr sm-padding-15px-lr">
        <div class="row">
            <div class="col-12 margin-35px-tb md-no-margin-top md-margin-30px-bottom wow fadeInUp"
                style="visibility: visible; animation-name: fadeInUp;">
                <img src="../assets/images/clientes/onework/landing.jpg" class="width-100" alt="" data-no-retina="">
            </div>
        </div>
    </div>
</section>
    <Diginextwork :work="nextWork"/>
</div>
</template>

<script>
import Diginextwork from '../components/Diginextwork';
import Digiwork from '../components/Digiwork';


export default {
    name: 'Onework',
    components: {
        Diginextwork,
        Digiwork
    },
    methods: {

    },
    data() {
        return {
            inicio: require('../assets/images/clientes/onework/inicio.jpg'),
            primera: require('../assets/images/clientes/onework/web-full.jpg'),
            work: {
                title: 'OneWork',
                subtitle: '¡Un espacio de trabajo de primera!',
                img: require('../assets/images/clientes/onework/inicio.jpg')
            },
            nextWork: {
                title: 'Pablo Collomb',
                description: 'Marketing de persona a la orden: gestrionamos Facebook, Instagram y Linkedin, generamos contenido en Youtube y podcasts en Spotify e Ivoox.',
                img: require('../assets/images/clientes/pcollomb/redes-sociales.jpg'),
                img1: require('../assets/images/clientes/pcollomb/web-full.jpg'),
                link: '/clientes/pablo-collomb'
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
