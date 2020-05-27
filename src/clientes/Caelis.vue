<template>
<div>
    <Digiwork :work="work" />
    <section class="wow fadeIn big-section" id="down-section" style="visibility: visible; animation-name: fadeIn;">
        <div class="container">
            <div class="row">
                <div class="col col-lg-11 mx-auto text-center margin-70px-bottom md-margin-50px-bottom sm-margin-30px-bottom wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                    <h6 class="alt-font text-extra-dark-gray mb-0">Desarrollamos su identidad y el diseño de sus productos. Un proceso lleno de buenas vibras y ni hablar del rico aroma en el estudio.</h6>
                </div>
            </div>
            <div class="row margin-70px-bottom md-margin-50px-bottom sm-margin-30px-bottom">
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Cliente</li>
                        <li>Caelis</li>
                    </ul>
                </div>
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Industria</li>
                        <li>Terapias Holisticas</li>
                    </ul>
                </div>
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Servicios</li>
                        <li>Identidad de marca, packaging </li>
                    </ul>
                </div>
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Redes
                        </li>
                        <li> <a href="https://www.instagram.com/caelis.ar/" target="_blank">@caelis.ar</a> </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="p-0 parallax one-fifth-screen md-height-500px sm-height-350px background-position-x-50 wow fadeIn d-none
    d-sm-block" data-stellar-background-ratio="0.4" v-bind:style="{ 'background-image': 'url(' + primera + ')' }" style="background-position: 44px -55.6px;
    visibility: visible; animation-name: fadeIn;">
        <div class="container">
            <div class="row">
                <div class="col-12"></div>
            </div>
        </div>
    </section>
    <section class="wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
        <div class="container">
            <div class="row">
                <div v-for="image of images" :key="image" class="col-12 margin-30px-bottom wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                    <img :src="image" class="width-100" alt="" data-no-retina="">
                </div>
            </div>
        </div>
    </section>

</div>
</template>

<script>
import Digiwork from '../components/Digiwork';

export default {
    name: 'Caelis',
    components: {
        Digiwork
    },
    data() {
        return {
            primera: require('../assets/images/clientes/caelis/primera.png'),
            work: {
                title: 'Caelis',
                subtitle: '¡La frecuencia del alma!',
                img: require('../assets/images/clientes/caelis/inicio.jpg')
            },
            images: [require('../assets/images/clientes/caelis/logo.jpg'), require('../assets/images/clientes/caelis/tarjetas.jpg'), require('../assets/images/clientes/caelis/1.png'), require('../assets/images/clientes/caelis/2.png'), require('../assets/images/clientes/caelis/3.png')],
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
