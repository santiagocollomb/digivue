<template>
<div>
    <Digiwork :work="work" />
    <section class="wow fadeIn big-section" id="down-section" style="visibility: visible; animation-name: fadeIn;">
        <div class="container">
            <div class="row">
                <div class="col col-lg-11 mx-auto text-center margin-70px-bottom md-margin-50px-bottom sm-margin-30px-bottom wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                    <h6 class="alt-font text-extra-dark-gray mb-0">Bien de Allen es un portal de noticias deportivas del Alto Valle de Río Negro y Neuquén. En su décimo aniversario se animaron a renovar su identidad de marca y página web. Nos contactaron, aceptamos el desafío y generamos su nueva imagen</h6>
                </div>
            </div>
            <div class="row margin-70px-bottom md-margin-50px-bottom sm-margin-30px-bottom">
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Cliente</li>
                        <li>Bien de Allen</li>
                    </ul>
                </div>
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Industria</li>
                        <li>Periodismo, Blogs</li>
                    </ul>
                </div>
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Servicios</li>
                        <li>Desarrollo web, identidad </li>
                    </ul>
                </div>
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Sitio web
                        </li>
                        <li> <a href="https://biendeallen.com.ar" target="_blank">www.biendeallen.com.ar</a> </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- end about section -->
    <!-- start parallax section -->
    <section class="p-0 parallax one-fifth-screen md-height-500px sm-height-350px background-position-x-50 wow fadeIn d-none
    d-sm-block" data-stellar-background-ratio="0.4" v-bind:style="{ 'background-image': 'url(' + primera + ')' }" style="background-position: 44px -55.6px;
    visibility: visible; animation-name: fadeIn;">
        <div class="container">
            <div class="row">
                <div class="col-12"></div>
            </div>
        </div>
    </section>
    <section class="wow fadeIn padding-90px-top md-padding-50px-top sm-padding-30px-top" style="visibility: visible; animation-name: fadeIn;">

        <!-- start filter content -->
        <div class="container">
            <div class="row work-img">
                    <div class="col-12">
                        <img src="../assets/images/clientes/bda/7.gif">
                    </div>
                <div class="col-md-4 col-12 mb-3">
                    <img src="../assets/images/clientes/bda/4.png" alt="">
                </div>
                <div class="col-md-4 col-12">
                    <img src="../assets/images/clientes/bda/5.png" alt="">
                </div>
                <div class="col-md-4 col-12">
                    <img src="../assets/images/clientes/bda/6.png" alt="">
                </div>
                                    <div class="col-12 mt-5">
                        <img src="../assets/images/clientes/bda/9.png" class="width-80 d-block" style="margin: auto;">
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
    name: 'Bda',
    components: {
        Diginextwork,
        Digiwork
    },
    data() {
        return {
            primera: require('../assets/images/clientes/bda/8.jpg'),
            work: {
                title: 'Bien de Allen',
                subtitle: '¡Periodismo hiperlocal!',
                img: require('../assets/images/clientes/bda/inicio.jpg')
            },
            nextWork: {
                title: 'Caelis',
                description: 'Desarrollamos su identidad y el diseño de sus productos. Un proceso lleno de buenas vibras y ni hablar del rico aroma en el estudio. ',
                img: require('../assets/images/clientes/caelis/logo.jpg'),
                img1: require('../assets/images/clientes/caelis/tarjetas.jpg'),
                link: '/clientes/caelis'
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
