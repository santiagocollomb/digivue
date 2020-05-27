<template>
<div id="app">
    <Digiheader />
    <router-view />
    <Digifooter v-if="showFooter" />
</div>
</template>

<script>
import Digiheader from './components/Digiheader';
import Digifooter from './components/Digifooter';

export default {
    name: 'App',
    metaInfo: {
        base: {
            href: '/'
        },
        viewwport: 'width=device-width, initial-scale=1',
        charset: 'UTF-8',
        meta: [{
                name: "description",
                content: "Desde la comunicación y el diseño, aportamos innovación y calidad a diferentes marcas, proyectos e ideas. Te invitamos a conocer nuestros trabajos, y ante cualquier consulta, no dudes en escribirnos ;)"
            },
            {
                name: "keywords",
                content: "digit, digi, digital, digit estudio, redes sociales patagonia, pagina web alto valle, pagina web patagonia, desarrollo web patagonia, desarrollo web alto valle, marketing digital patagonia, marketing digital alto valle, comunicación, desarrollo, diseño, identidad, sistema, redes sociales, community manager, página web, logo, sitio web, e-commerce, blog, branding"
            },
            {
                name: 'og:description',
                content: '¡Hola, somos digit(estudio), un gusto! Desde la Patagonia impulsamos personas, empresas y organizaciones con estrategias innovadoras.'
            },
            {
                name: 'og:image',
                content: 'https://digitestudio.com/og-image.jpg'
            },
            {
                name: 'og:url',
                content: 'https://digitestudio.com'
            }

            //you can also add open graph tags here
        ],
        htmlAttrs: {
            lang: 'es',
            amp: true,
        },
        title: 'digit(estudio)',
        titleTemplate: '%s | Desarrollamos ideas',
    },
    components: {
        Digiheader,
        Digifooter
    },
    computed: {
        showFooter() {
            if (this.$route.path == "/portfolio") {
                return false
            } else {
                return true
            }
        }
    }
}
</script>

<style>
@import url('./assets/css/bootstrap.min.css');
@import url('./assets/css/swiper.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.compat.css');
@import url('./assets/css/bootsnav.css');
@import url('./assets/css/font-awesome.min.css');
@import url('./assets/css/themify-icons.css');
@import url('./assets/css/et-line-icons.css');
@import url('./assets/css/magnific-popup.css');
@import url('./assets/css/style.css');
@import url('./assets/css/responsive.css');
</style>
