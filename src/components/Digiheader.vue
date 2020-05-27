<template>
<div v-bind:class="{'left-nav-on':menuOpened}">
    <div class="menu-overlay" v-on:click="showMenu()" v-show="menuOpened"></div>
    <header class="">
        <div class="left-nav">
            <!-- start logo -->
            <div class="sidebar-part1">
                <a v-on:click="navigateLogo()" title="digit" class="logo"><img src="../assets/images/logo-icon-fill.svg" data-rjs="../assets/images/logo-icon-fill.svg" alt="Logo digit estudio"></a>
            </div>
            <!-- end logo -->
            <div class="sidebar-part2">
                <div class="sidebar-middle">
                    <div class="sidebar-middle-menu alt-font font-weight-600">
                        <nav class="navbar bootsnav navbar-expand-lg alt-font">
                            <div id="navbar-menu" class="collapse navbar-collapse no-padding">
                                <ul class="nav navbar-nav">
                                    <li class="dropdown">
                                        <a v-on:click="navigate('/')">//home
                                            <span class="fas fa-angle-right"></span>
                                        </a>
                                    </li>
                                    <li class="dropdown">
                                        <a v-on:click="navigate('/servicios')">//servicios
                                            <span class="fas fa-angle-right"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-on:click="navigate('/portfolio')">//portfolio
                                            <span class="fas fa-angle-right"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-on:click="navigate('/contacto')">//contacto
                                            <span class="fas fa-angle-right"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-on:click="navigate('/recursos')">//recursos
                                            <span class="fas fa-angle-right"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <div class="side-left-menu-close close-side"></div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div class="icon-social-medium text-left">
                            <a href="https://www.facebook.com/digit.estudio/" target="_blank" class="text-extra-dark-gray text-deep-pink-hover margin-10px-right">
                                <span class="fab fa-facebook-f" aria-hidden="true"></span></a>
                            <a href="https://www.instagram.com/digit.estudio/" target="_blank" class="text-extra-dark-gray text-deep-pink-hover">
                                <span class="fab fa-instagram" aria-hidden="true"></span></a>
                        </div>
                        <div class="right-bg"><img src="../assets/images/digital-text.png" alt="Logo digit estudio"></div>
                    </div>
                </div>
            </div>
            <div class="sidebar-part3">
                <div class="bottom-menu-icon">
                    <a href="javascript:void(0);" v-on:click="showMenu()" :class="{active: menuOpened}" class="right-menu-button text-extra-dark-gray nav-icon" id="showRightPush">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
            </div>
        </div>
    </header>
</div>
<!-- end header -->
</template>

<script>
import router from '../router'

export default {
    name: 'Digiheader',
    props: {
        msg: String,
    },
    methods: {
        showMenu() {
            this.menuOpened = !this.menuOpened
        },
        navigate(path) {
            router.push({
                path: path
            }, () => {
                this.showMenu()
            });
        },
        navigateLogo() {
            router.push({
                path: '/'
            }, () => {
                if (this.menuOpened) {
                    this.menuOpened = !this.menuOpened
                }
            });
        }
    },
    data() {
        return {
            menuOpened: false,
        }
    },

}
</script>

<style scoped>
.link-icon {
    font-size: 25px;
    top: 10px;
    position: absolute;
    right: 18px;
}

.sidebar-part2 .right-bg {
    box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.2);
}

.nav-icon span {display: block; position: absolute; height: 2px; width: 23px; background: #232323; border-radius: 0; opacity: 1; left: 0; -webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); -o-transform: rotate(0deg); transform: rotate(0deg); -webkit-transition: .25s ease-in-out; -moz-transition: .25s ease-in-out; -o-transition: .25s ease-in-out; transition: .25s ease-in-out;}
.nav-icon:hover span, .nav-icon.active span { background-color: #00ffff; }
.nav-icon span:nth-child(1) { top: 0px;}
.nav-icon span:nth-child(2),.nav-icon span:nth-child(3) { top: 8px;}
.nav-icon span:nth-child(4) { top: 16px;}
.nav-icon.active span:nth-child(1) { top: 8px; width: 0%; left: 50%;}
.nav-icon.active span:nth-child(2) { -webkit-transform: rotate(45deg); -moz-transform: rotate(45deg); -o-transform: rotate(45deg); -ms-transform: rotate(45deg); transform: rotate(45deg);}
.nav-icon.active span:nth-child(3) { -webkit-transform: rotate(-45deg); -moz-transform: rotate(-45deg); -o-transform: rotate(-45deg); -ms-transform: rotate(-45deg); transform: rotate(-45deg);}
.nav-icon.active span:nth-child(4) {top: 8px; width: 0%; left: 50%;}

</style>
