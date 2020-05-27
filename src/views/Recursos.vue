<template>
<div>
    <section class="big-section wow fadeIn bg-black" id="about" style="visibility: visible; animation-name: fadeIn;">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-xl-5 col-lg-8 col-md-10 mx-auto text-center">
                    <div class="alt-font margin-20px-bottom md-margin-20px-bottom text-uppercase text-extra-small letter-spacing-2">
                        Recursos para compartir</div>
                    <h4 class="alt-font font-weight-600 text-white-2 mb-0"> Descarga recursos gratuitos y de utilidad <br>
                        (>‿◠)</h4>
                </div>
            </div>
        </div>
    </section>
    <section class="wow fadeIn bg-light-gray" >
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-7 text-center margin-100px-bottom sm-margin-40px-bottom">
                    <div class="position-relative overflow-hidden w-100">
                        <span class="text-small text-outside-line-full alt-font font-weight-600 text-uppercase">covid-19
                            para imprimir o publicar</span>
                    </div>
                </div>
            </div>
            <div class="row ">
                <div class="col-12 col-md-4 col-lg-3" v-for="image of images" :key="image">

                    <img  :src="image" alt="">

                </div>
            </div>
            <div class="row justify-content-center mt-3">
                <div class="col-12 col-lg-8 text-center mt-5">
                    <!--<h6 class="alt-font font-weight-600 text-extra-dark-gray">Recibí los recursos gratuitos con tu
                        email, nombre y apellido =)</h6>
                              <span class="text-extra-small">* No compartimos tu información personal con nadie <a href="#"
                            class="text-decoration-underline">Privacy Policy</a> for more information.</span>-->
                    <a target="_blank" href="https://drive.google.com/drive/folders/15ZLqglf_5hD5h0v8z7ad7KlEBBc5pQGE?usp=sharing" class="btn btn-transparent-dark-gray">Descargá tus recursos gratuitos!</a>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'Recursos',
    metaInfo: {
        meta: [{
                name: "description",
                content: "Generamos material de utilidad para que descargues y no pierdas tu valioso tiempo"
            },
        ],
        title: 'digit(recursos)',
        titleTemplate: '%s | Descargables para vos',
    },
    data() {
        return {
            images: [require('../assets/images/recursos/covid/covid1.png'), require('../assets/images/recursos/covid/covid2.png'), require('../assets/images/recursos/covid/covid3.png'), require('../assets/images/recursos/covid/covid4.png')]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
    img {
        box-shadow: 0 0 3px rgba(0,0,0,0.3);
    }
        img:hover {
        box-shadow: 0 0 7px rgba(0,0,0,0.4);
    }
</style>
