<template>
<div>
    <Digiwork :work="work" />
    <section class="wow fadeIn big-section" id="down-section" style="visibility: visible; animation-name: fadeIn;">
        <div class="container">
            <div class="row">
                <div class="col col-lg-11 mx-auto text-center margin-70px-bottom md-margin-50px-bottom sm-margin-30px-bottom wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                    <h6 class="alt-font text-extra-dark-gray mb-0">Nos pusimos los guantes, el ambo y manos a la obra con el rebranding de Wolfschmidt, uno de los laboratorios con mas trallectoria de la zona. Luego de estudiar algo de química, fisiología y mirar por el microscopio encontramos la inspiración necesaria</h6>
                </div>
            </div>
            <div class="row margin-70px-bottom md-margin-50px-bottom sm-margin-30px-bottom">
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Cliente</li>
                        <li>Wolfschmidt análisis clínico</li>
                    </ul>
                </div>
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Industria</li>
                        <li>Laboratorio, salud</li>
                    </ul>
                </div>
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Servicios</li>
                        <li>Rebranding</li>
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
                <div class="col-12 margin-30px-bottom wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                    <img src="../assets/images/clientes/wolf/w2.jpg" class="width-100" alt="" data-no-retina="">
                </div>
                <div class="col-12 margin-30px-bottom wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                    <img src="../assets/images/clientes/wolf/w3.jpg" class="width-100" alt="" data-no-retina="">
                </div>
                <div class="col-12 margin-30px-bottom wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                    <img src="../assets/images/clientes/wolf/w4.jpg" class="width-100" alt="" data-no-retina="">
                </div>
                <div class="col-12 margin-30px-bottom wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                    <img src="images/single-project-08-img5.jpg" class="width-100" alt="" data-no-retina="">
                </div>
                <div class="col-12 wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                    <img src="images/single-project-08-img6.jpg" class="width-100" alt="" data-no-retina="">
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
    name: 'Wolf',
    components: {
        Diginextwork,
        Digiwork
    },
    data() {
        return {
            primera: require('../assets/images/clientes/wolf/w.jpg'),
            work: {
                title: 'Wolfschmidt',
                subtitle: 'Laboratorio de análisis clínico',
                img: require('../assets/images/clientes/wolf/inicio.jpg')
            },
            nextWork: {
                title: 'Piltri Alto Valle',
                description: '¡Trabajamos con nuestros amigos de Piltri en la inauguración de su bar! Diseñamos su identidad, branding, merchandising, interior del local y administramos sus redes sociales',
                img: require('../assets/images/clientes/piltri/1.png'),
                img1: require('../assets/images/clientes/piltri/8.png'),
                link: '/clientes/piltri'
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
