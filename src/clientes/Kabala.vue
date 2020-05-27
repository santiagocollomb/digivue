<template>
<div>
    <Digiwork :work="work" />
    <section class="wow fadeIn big-section" id="down-section" style="visibility: visible; animation-name: fadeIn;">
        <div class="container">
            <div class="row">
                <div class="col col-lg-11 mx-auto text-center margin-70px-bottom md-margin-50px-bottom sm-margin-30px-bottom wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                    <h6 class="alt-font text-extra-dark-gray mb-0">Construímos la identidad de Kabala Desarrollos. Hicimos su sitio web y armamos el lanzamiento en redes. 👷‍♂️👷‍♀️ La empresa brinda servicios de arquitectura y construcción, así que si querés construir un búnker en tu casa para afrontar una invasión zombie, podés hablar con ellos🤷‍♂️</h6>
                </div>
            </div>
            <div class="row margin-70px-bottom md-margin-50px-bottom sm-margin-30px-bottom">
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Cliente</li>
                        <li>Kabala</li>
                    </ul>
                </div>
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Industria</li>
                        <li>Construcción</li>
                    </ul>
                </div>
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Servicios</li>
                        <li>Identidad de marca, redes sociales </li>
                    </ul>
                </div>
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Redes
                        </li>
                        <li> <a href="https://www.facebook.com/kabala.desarrollos" target="_blanck">@kabala.desarrollos</a> </li>
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
    <section class="wow fadeIn padding-90px-top md-padding-50px-top sm-padding-30px-top" style="visibility: visible; animation-name: fadeIn;">

        <!-- start filter content -->
        <div class="container">
            <div class="row work-img">
                <div class="col-md-4 col-12 mb-3">
                    <img src="../assets/images/clientes/kabala/2.png" alt="">
                </div>
                <div class="col-md-4 col-12">
                    <img src="../assets/images/clientes/kabala/1.png" alt="">
                </div>
                <div class="col-md-4 col-12">
                    <img src="../assets/images/clientes/kabala/3.png" alt="">
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
    name: 'Kabala',
    components: {
        Diginextwork,
        Digiwork
    },
    data() {
        return {
            primera: require('../assets/images/clientes/kabala/primera.jpg'),
            work: {
                title: 'Kabala',
                subtitle: '¡Construimos realidades!',
                img: require('../assets/images/clientes/kabala/inicio.jpg')
            },
            nextWork: {
                title: 'Bien de Allen',
                description: 'En su décimo aniversario se animó a renovar su identidad de marca y página web. Nos contactaron, aceptamos el desafío y generamos su nueva imagen',
                img: require('../assets/images/clientes/bda/9.png'),
                bgPosition1: 'top',
                img1: require('../assets/images/clientes/bda/9.png'),
                bgPosition2: 'center',
                link: '/clientes/bda'
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
