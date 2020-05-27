<template>
<div>
    <section class="wow fadeIn bg-extra-dark-gray">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6 padding-ten-right lg-padding-five-right md-padding-15px-right md-margin-five-bottom wow fadeIn pl-4">
                    <p class="alt-font text-medium margin-15px-bottom margin-30px-top">Contactanos</p>
                    <h5 class="alt-font text-white-2 margin-20px-bottom">//todo_proyecto_comienza _con_una_buena_charla
                    </h5>
                    <p style="color: #b0b0b0;">¡Nos interesa escucharte! Vamos a responder lo antes posible. Si la
                        distancia nos permite,
                        podemos coordinar una reunión en nuestro estudio, o agendamos una videollamada.</p>
                    <div class="icon-box d-table w-100 mx-auto mx-lg-0 last-paragraph-no-margin">
                        <div class="icon-box-holder align-middle d-table-cell position-relative">
                            <span class="icon-map icon-medium text-deep-pink padding-5px-top"></span>
                            <div class="alt-font text-white-2">/El_estudio</div>
                            <p class="text-medium-gray">Belgrano 467, depto 2B torre Betta; Cipolletti; Patagonia</p>
                        </div>
                    </div>
                    <div class="icon-box d-table w-100 mx-auto mx-lg-0 last-paragraph-no-margin">
                        <div class="icon-box-holder align-middle d-table-cell position-relative">
                            <span class="icon-envelope icon-medium text-deep-pink padding-5px-top"></span>
                            <div class="alt-font text-white-2">/El_mail</div>
                            <p class="text-medium-gray"><a href="mailto:hola@digitestudio.com">
                                    hola@digitestudio.com</a></p>
                        </div>
                    </div>
                    <div class="icon-box d-table w-100 mx-auto mx-lg-0 last-paragraph-no-margin">
                        <div class="icon-box-holder align-middle d-table-cell position-relative">
                            <span class="icon-chat icon-medium text-deep-pink padding-5px-top"></span>
                            <div class="alt-font text-white-2">/El_celu</div>
                            <p class="mb-0 text-medium-gray">+54 9 (298) 4509714/4862631</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 wow fadeIn">
                    <div class="padding-fifteen-all bg-white border-radius-6 lg-padding-seven-all">
                        <div class="text-extra-dark-gray alt-font text-large font-weight-600 margin-30px-bottom">
                            Contanos tu idea </div>
                        <div>
                            <form id="contact-form" action="javascript:void(0)" method="post">
                                <div id="success-contact-form" class="mx-0"></div>
                                <label for="name">Nombre:</label>
                                <input type="text" name="name" id="name" placeholder="Tu nombre" class="input-bg" ref="name">
                                <label for="email">Email:</label>
                                <input type="text" name="email" id="email" placeholder="email@dominio.com*" class="input-bg" ref="email">
                                <label for="comment">Mensaje:</label>
                                <textarea name="comment" id="comment" placeholder="Mensaje" class="input-bg" ref="comment"></textarea>
                                <button v-on:click="sendMail" type="submit" class="btn btn-small border-radius-4 btn-black">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="wow fadeIn">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center social-style-1 social-icon-style-5">
                    <ul class="large-icon mb-0">
                        <li><a class="facebook" href="https://www.facebook.com/pg/digit.estudio/" target="_blank"><i class="fab fa-facebook-f"></i><span></span></a></li>
                        <li><a class="twitter" href="https://twitter.com/DigitEstudio" target="_blank"><i class="fab fa-twitter"></i><span></span></a></li>
                        <li><a class="instagram" href="https://www.instagram.com/digit.estudio/" target="_blank"><i class="fab fa-instagram"></i><span></span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Contacto',
    metaInfo: {
        meta: [{
                name: "description",
                content: "Todo proyecto empieza con una buena charla, hablemos :)"
            },
        ],
        title: 'digit(contacto)',
        titleTemplate: '%s | Hablemos',
    },
    methods: {
        sendMail() {
            const email = this.$refs.email.value;
            const comment = this.$refs.comment.value;
            const name = this.$refs.name.value;

            axios.post('https://digitestudio.com/contact.php', {
                    email,
                    comment,
                    name
                })
                .then(response => console.log(response))
                .catch(error => console.log(error))
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
