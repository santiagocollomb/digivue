<template>
<div>
    <section class="wow fadeIn bg-extra-dark-gray" style="visibility: visible; animation-name: fadeIn;">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-4 text-center text-lg-left md-margin-five-bottom sm-margin-ten-top last-paragraph-no-margin">
                    <h5 class="font-weight-600 alt-font text-white letter-spacing-minus-1 mb-5">
                        //nuestros_servicios</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-12 justify-content-center text-center p-0 tab-style1" id="animated-tab">
                    <ul class="nav nav-tabs margin-50px-bottom sm-no-margin-bottom">

                        <li v-for="(tab, index) of tabs" :key="tab.title" class="nav-item" v-on:click="changeIndex(index)"><a :class="{active: tabIndex === index}" class="nav-link servicio"><span><img :src="tab.img" alt="Diseño gráfico" class="servicio-img" style="bottom: 2px; position: relative;" data-no-retina=""></span><span class="alt-font text-medium-gray text-uppercase text-small">
                                    {{tab.title}} </span></a>
                        </li>
                    </ul>
                    <div class="row">
                        <div class="col-12 col-lg-4 text-left">
                            <div class="d-flex flex-column justify-content-center align-items-start padding-45px-all md-padding-30px-all h-100 w-100 bg-light-gray">
                                <span class="text-extra-dark-gray alt-font margin-10px-bottom d-inline-block text-medium">Queremos
                                    que quedes chochos con nuestros
                                    trabajos, por eso buscamos ser flexibles y creativos en nuestros servicios.</span>
                                <p class="width-100"></p>
                            </div>
                        </div>
                        <div class="col-12 col-lg-8 text-left">

                            <div class="tab-content">

                                <div v-for="(tabData, index) of tabsData" :key="tabData.title" :class="[{show: tabIndex === index }, {active: tabIndex === index } ]" class="tab-pane fade">
                                    <div class="row mx-0">
                                        <div class="col-12 col-lg-6 text-left md-margin-30px-bottom md-margin-30px-top">
                                            <div class="d-flex flex-column justify-content-center padding-45px-all md-padding-30px-all h-100 w-100 border-all border-width-2 border-color-extra-light-gray">
                                                <span class="text-medium font-weight-600 alt-font text-uppercase margin-10px-bottom d-block text-white">
                                                    {{tabData.title}}</span>
                                                <span class="alt-font text-medium-gray text-medium">{{tabData.text}}
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-6 text-left md-margin-30px-bottom md-margin-30px-top">
                                            <img :src="tabData.img" alt="" data-no-retina="">
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>

    <section class="wow fadeIn last-paragraph-no-margin pb-0">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-6 col-md-8 margin-eight-bottom md-margin-40px-bottom sm-margin-30px-bottom text-center last-paragraph-no-margin">
                    <h5 class="alt-font text-uppercase text-extra-dark-gray font-weight-700 mb-0">
                        Creemos que la comunicación es clave en todo trabajo exitoso
                    </h5>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-4 team-block text-left sm-margin-30px-bottom wow fadeInUp">
                    <figure>
                        <div class="feature-box-content sm-width-100">
                            <div class="feature-box-image">
                                <img src="../assets/images/estudio.jpg" alt="" />
                            </div>
                        </div>
                        <figcaption>
                            <div class="text-center margin-25px-top">
                                <div class="text-extra-dark-gray alt-font font-weight-600">
                                    Reuniones en el estudio
                                </div>
                                <p class="width-90 mx-auto md-width-100">
                                    Siempre promovemos un ambiente colaborativo, por eso todos son bienvenidos en digit()
                                </p>
                            </div>
                        </figcaption>
                    </figure>
                </div>

                <div class="col-12 col-md-4 team-block text-left sm-margin-30px-bottom wow fadeInUp" data-wow-delay="0.2s">
                    <figure>
                        <div class="feature-box-content sm-width-100">
                            <div class="feature-box-image">
                                <img src="../assets/images/remoto.jpg" alt="" />
                            </div>
                            <div class="hover-content bg-deep-pink d-flex align-items-center">
                            </div>
                        </div>
                        <figcaption>
                            <div class="text-center margin-25px-top">
                                <div class="text-extra-dark-gray alt-font font-weight-600">
                                    Trabajo remoto
                                </div>
                                <p class="width-90 mx-auto md-width-100">
                                    Si la distancia no nos permite la visita, podemos generar el contacto de forma remota
                                </p>
                            </div>
                        </figcaption>
                    </figure>
                </div>

                <div class="col-12 col-md-4 team-block text-left wow fadeInUp" data-wow-delay="0.6s">
                    <figure>
                        <div class="feature-box-content sm-width-100">
                            <div class="feature-box-image">
                                <img src="../assets/images/mensajeria.jpg" alt="" />
                            </div>
                            <div class="hover-content bg-deep-pink d-flex align-items-center">
                            </div>
                        </div>
                        <figcaption>
                            <div class="text-center margin-25px-top">
                                <div class="text-extra-dark-gray alt-font font-weight-600">
                                    Comunicación a medida
                                </div>
                                <p class="width-90 mx-auto md-width-100">
                                    Trabajamos con diferentes servicios de mensajería, vos elegí la mejor opción
                                </p>
                            </div>
                        </figcaption>
                    </figure>
                </div>

            </div>
        </div>
    </section>
    <section class="wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-8 col-md-10 text-center">
                    <h5 class="alt-font text-uppercase font-weight-600 text-extra-dark-gray width-80 mx-auto margin-35px-bottom lg-width-100 wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">Todo proyecto comienza<br> con una buena
                        charla</h5>
                    <router-link to="contacto" class="btn btn-medium btn-rounded btn-transparent-dark-gray wow fadeInUp" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">Hablemos <i class="ti-arrow-right"></i></router-link>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'Servicios',
    metaInfo: {
        meta: [{
            name: "description",
            content: "Trabajamos de manera integral para que tu marca se destaque entre la competencia"
        }, ],
        title: 'digit(servicios)',
        titleTemplate: '%s | Nuestros servicios',
    },
    data() {
        return {
            tabIndex: 0,
            tabs: [{
                    title: '01. Marketing digital',
                    img: require('../assets/images/media_redes.png')
                },
                {
                    title: '02. Branding',
                    img: require('../assets/images/disenio_grafico.png')
                },
                {
                    title: '03. Desarrollo',
                    img: require('../assets/images/desarrollo.png')
                },
                {
                    title: '04. Audiovisual',
                    img: require('../assets/images/audiovisual.png')
                }
            ],
            tabsData: [{
                    title: '01. Marketing digital',
                    text: 'Desde redes sociales hasta campañas de mailing. Como buenos nativos digitales entendemos ese mundo y sacamos provecho para nuestros clientes. Armamos estrategias con objetivos para todas las plataformas',
                    img: require('../assets/images/marketing.jpg')
                },
                {
                    title: '02. Branding',
                    text: 'Textos, diseños y contenidos que le aportan valor tu marca. Tu proyecto puede necesitar un nombre, un logo o tarjetas personales. Hacemos que la identidad de tu marca se refleje en todos los medios y plataformas',
                    img: require('../assets/images/branding.jpg')
                },
                {
                    title: '03. Desarrollo',
                    text: 'Nos enfocamos en la experiencia de usuario para desarrollar sitios webs, tiendas y sistemas intuitivos. Buscamos la mejor solución en base a tres variables: tiempo, presupuesto y objetivos.',
                    img: require('../assets/images/programacion.jpg')
                },
                {
                    title: '04. Audiovisual',
                    text: 'Luz, cámara, ¡acción! Nuestro equipo audiovisual resuelve cualquier tipo de producción: rodajes, sesiones y coberturas. La habilidad está en captar el momento y en la magia en la edición.',
                    img: require('../assets/images/audiovisual.jpg')
                }
            ]
        }
    },
    methods: {
        changeIndex(i) {
            this.tabIndex = i;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
