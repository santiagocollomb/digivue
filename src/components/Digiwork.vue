<template>
    <section class="p-0 parallax mobile-height wow fadeIn" v-bind:style="{ 'background-image': 'url(' + work.img + ')' }" style="background-position: 0px 0px; visibility: visible; animation-name: fadeIn;" >
        <div class="opacity-medium bg-black"></div>
        <div class="container position-relative full-screen" style="min-height: 722px;">
            <div class="slider-typography text-center">
                <div class="slider-text-middle-main">
                    <div class="slider-text-middle">
                        <div class="text-bottom-line border-color-deep-pink margin-25px-bottom"></div>
                        <h1 class="text-white-2 alt-font font-weight-700">{{work.title}}</h1>
                        <span class="width-60 mx-auto text-extra-large d-block margin-20px-top line-height-30 sm-width-90">{{work.subtitle}}</span>
                        <div class="down-section text-center"><a href="#down-section" class="inner-link"><i class="ti-arrow-down icon-extra-small text-white-2 bg-deep-pink padding-15px-all sm-padding-10px-all rounded-circle"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Digiwork',
    props: {
        msg: String,
        work: Object,
    },
    data() {
        return {
            workEnter: false
        }
    },
}
</script>
