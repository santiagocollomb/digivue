<template>
<div>
    <Digiwork :work="work" />
    <section class="wow fadeIn big-section" id="down-section" style="visibility: visible; animation-name: fadeIn;">
        <div class="container">
            <div class="row">
                <div class="col col-lg-11 mx-auto text-center margin-70px-bottom md-margin-50px-bottom sm-margin-30px-bottom wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                    <h6 class="alt-font text-extra-dark-gray mb-0">Renovamos la identidad de marca de SeNa, un comercio ubicado en el centro de la ciudad de Allen. Nuestro desafío fue
                        unificar todas sus unidades de negocio: servicio técnico, venta de hardware, software, videojuegos e impresiones
                        digitales, en un isologo y claim.</h6>
                </div>
            </div>
            <div class="row margin-70px-bottom md-margin-50px-bottom sm-margin-30px-bottom">
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Cliente</li>
                        <li>SeNa</li>
                    </ul>
                </div>
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Industria</li>
                        <li>Insumos, impresión digital</li>
                    </ul>
                </div>
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Servicios</li>
                        <li>Identidad de marca </li>
                    </ul>
                </div>
                <div class="col-12 col-lg-3 padding-30px-lr fadeInUp">
                    <ul class="list-style-6">
                        <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Redes
                        </li>
                        <li> <a href="https://www.facebook.com/sena.serv/" target="_blank">Facebook</a> </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="wow fadeIn bg-extra-dark-gray padding-90px-top md-padding-50px-top sm-padding-30px-top" style="visibility: visible; animation-name: fadeIn;">

        <!-- start filter content -->
        <div class="container">
            <div class="row work-img">
                <div class="col-md-6 col-12">
                    <video autoplay="" loop="">
                        <source src="../assets/images/clientes/sena/1.mp4" type="video/mp4"></video>
                </div>
                <div class="col-md-6 col-12 mb-3">
                    <img src="../assets/images/clientes/sena/2.jpg" alt="">
                </div>
                <div class="col-md-6 col-12">
                    <img src="../assets/images/clientes/sena/3.png" alt="" data-no-retina="">
                </div>
                <div class="col-md-6 col-12">
                    <video autoplay="" loop="">
                        <source src="../assets/images/clientes/sena/4.mp4" type="video/mp4"></video>
                </div>
            </div>
        </div>
    </section>
    <section class="wow fadeIn big-section pb-0 pt-0 hidden-mobil" style="visibility: visible; animation-name: fadeIn;">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 text-center wow zoomIn no-padding-lr" style="visibility: visible; animation-name: zoomIn;"><video autoplay="" loop="">
                        <source src="../assets/images/clientes/sena/7.mp4" type="video/mp4"></video></div>
            </div>
        </div>
    </section>
    <section class="wow fadeIn bg-extra-dark-gray mb-5 padding-90px-top md-padding-50px-top sm-padding-30px-top" style="visibility: visible; animation-name: fadeIn;">
        <div class="container">
            <div class="row work-img">
                <div class="col-md-6 col-12 mb-3">
                    <img src="../assets/images/clientes/sena/5.jpg" alt="" data-no-retina="">
                </div>
                <div class="col-md-6 col-12">
                    <img src="../assets/images/clientes/sena/6.jpg" alt="" data-no-retina="">
                </div>
                <div class="col-md-6 col-12">
                    <img src="../assets/images/clientes/sena/redes_1_posteo.jpg" alt="" data-no-retina="">
                </div>
                <div class="col-md-6 col-12">

                    <img src="../assets/images/clientes/sena/redes_2_posteo.jpg" alt="" data-no-retina="">
                </div>
                <div class="col-md-6 col-12">
                    <video autoplay="" loop="">
                        <source src="../assets/images/clientes/sena/reduccion_logo_1.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="col-md-6 col-12">
                    <video autoplay="" loop="">
                        <source src="../assets/images/clientes/sena/reduccion_logo_2.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
        <!-- start filter content -->
    </section>

    <Diginextwork :work="nextWork" />
</div>
</template>

<script>
import Diginextwork from '../components/Diginextwork';
import Digiwork from '../components/Digiwork';

export default {
    name: 'Sena',
    components: {
        Diginextwork,
        Digiwork
    },
    data() {
        return {
            primera: require('../assets/images/clientes/wolf/w.jpg'),
            work: {
                title: 'SENA',
                subtitle: '¡Hcemos que funcione!',
                img: require('../assets/images/clientes/sena/inicio.jpg')
            },
            nextWork: {
                title: 'Kabala',
                description: 'Construímos la identidad de Kabala Desarrollos. Hicimos su sitio web y armamos el lanzamiento en redes.',
                img: require('../assets/images/clientes/kabala/1.png'),
                bgPosition1: 'top',
                img1: require('../assets/images/clientes/kabala/1.png'),
                bgPosition2: 'center',
                link: '/clientes/kabala'
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.work-img .col-md-6 {
    overflow: hidden;
}

.work-img .col-md-6 img:hover {
    transform: scale(1.1);
}
</style>
