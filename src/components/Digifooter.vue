<template>
<footer class="footer-center-logo padding-five-tb sm-padding-30px-tb">
    <div class="container">
        <div class="row align-items-center">
            <!-- start copyright -->
            <div class="col-lg-4 col-md-5 text-small text-center alt-font sm-margin-15px-bottom">
                <span> Desarrollamos ideas \(•◡•)/</span>
            </div>
            <!-- end copyright -->
            <!-- start logo -->
            <div class="col-lg-4 col-md-2 text-center sm-margin-10px-bottom">
                <a href="index.html"><img class="footer-logo" src="../assets/images/logo.png" data-rjs="images/logo.png" alt="Logo digit estudio"></a>
            </div>
            <!-- end logo -->
            <!-- start social media -->
            <div class="col-lg-4 col-md-5 text-center d-none d-sm-block">
                <span class="alt-font text-small margin-20px-right">Nuestras redes ;)</span>
                <div class="social-icon-style-8 d-inline-block vertical-align-middle">
                    <ul class="small-icon mb-0">
                        <li><a class="facebook text-black" href="https://www.facebook.com/digitestudio" target="_blank"><span class="fab fa-facebook-f" aria-hidden="true"></span></a></li>
                        <li><a class="instagram text-black" href="https://instagram.com/digit.estudio" target="_blank"><span class="fab fa-instagram mr-0" aria-hidden="true"></span></a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- end social media -->
        </div>
    </div>
</footer>
</template>

<script>
export default {
    name: 'Digifooter',
    props: {
        msg: String,
    }
}
</script>

<style scoped>
footer {
    box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.2);
}
</style>