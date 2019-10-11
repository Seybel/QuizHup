<template>
    <div class="container-fluid">
        <div class="row">
            <img class="header" src="../assets/img/genius.gif" alt="Genius">
            <img class="headerMini" src="../assets/img/genius-min.gif" alt="GeniusMini">
            <div class="floor">
                <a href="#"><img class="playbtn" src="../assets/img/playbtn.svg" alt="PlayButton"></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WelcomePage'
 
}
</script>

<style lang="scss">
body
{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow: hidden; 
}

.container-fluid {
    margin: 0 auto;
}

.header {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    background-color: $bg-color;
    position: relative;
    height: 85vh;
    min-width: 100%;

    @include for-size(phone-only) {
        display: none;
        background-attachment: fixed;
        width: 65vh;
        height: 80vh;
        overflow: hidden;
    }

    // @include for-size(desktop-up) {
    //     // height: 30vh;
    // }
}

.headerMini {
    display: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    background-color: $bg-color;
    position: relative;
    height: 85vh;
    min-width: 100%;

    @include for-size(phone-only) {
        display: block;
        background-attachment: fixed;
        width: 65vh;
        height: 80vh;
        overflow: hidden;
    }
}

#headerMini.showtest {
    display: none;
}

.floor {
    background-repeat: no-repeat;
    background-image: url("../assets/img/flattened.svg");
    background-size: cover;
    margin-top: -5px;
    width: 100%;
    height: 20vh;

    @include for-size(phone-only) {
        width: 100%;
        height: 21vh;
        overflow: hidden;
    }

    @include for-size(tablet-portrait-up) {
        width: 100%;
        height: 24vh;
        overflow: hidden;
    }
}

.floor img.playbtn {
    // position: absolute;
    z-index: 1;
    // text-align: center;
    // font-size: 16px;
    width: 200px;
    height: 176px;
    cursor: pointer;
    // padding: 7px 18px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: -37px;

    @include for-size(phone-only) {
        width: 20vh;
        height: 31vh;
        overflow: hidden;
    }

    @include for-size(tablet-portrait-up) {
        width: 20vh;
        height: 22vh;
        overflow: hidden;
    }

    @include for-size(desktop-up) {
        width: 200px;
        height: 190px;
        overflow: hidden;
    }
}

.floor img.playbtn:hover {
    -webkit-animation: swing 1s ease;
    animation: swing 1s ease;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
}

@-webkit-keyframes swing
{
    15%
    {
        -webkit-transform: translateX(5px);
        transform: translateX(5px);
    }
    30%
    {
        -webkit-transform: translateX(-5px);
       transform: translateX(-5px);
    } 
    50%
    {
        -webkit-transform: translateX(3px);
        transform: translateX(3px);
    }
    65%
    {
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
    }
    80%
    {
        -webkit-transform: translateX(2px);
        transform: translateX(2px);
    }
    100%
    {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}
@keyframes swing
{
    15%
    {
        -webkit-transform: translateX(5px);
        transform: translateX(5px);
    }
    30%
    {
        -webkit-transform: translateX(-5px);
        transform: translateX(-5px);
    }
    50%
    {
        -webkit-transform: translateX(3px);
        transform: translateX(3px);
    }
    65%
    {
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
    }
    80%
    {
        -webkit-transform: translateX(2px);
        transform: translateX(2px);
    }
    100%
    {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}
</style>