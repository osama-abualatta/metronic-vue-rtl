<template>
    <div>
        <agile :options="options" :arrows="false" :dots="false" :infinite="false" :prevArrow="left" :nextArrow="right">
            <div class="slide">
                <img src="" alt="">
                <h3>slide 1</h3>
            </div>



            <div class="slide">
                <img src="" alt="">
                <h3>slide 2</h3>
            </div>
        </agile>
    </div>
</template>

<script>
    export default {
data () {
    return {
        left: '<svg x="0px" y="0px" viewBox="0 0 24 24"><path d="M16.2,21c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L9.6,12L17,4.7c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L6.8,12l8.8,8.7C15.7,20.9,16,21,16.2,21z"/></svg>',
            right: '<svg x="0px" y="0px" viewBox="0 0 24 24"><path d="M7.8,21c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l7.4-7.3L7,4.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l8.8,8.7l-8.8,8.7C8.3,20.9,8,21,7.8,21z"/></svg>',
        options: {
            arrows: false,

            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        dots: false
                    }
                },

                {
                    breakpoint: 900,
                    settings: {
                        arrows: true,
                        dots: true,
                        infinite: false
                    }
                }
            ]
        }
    }
}
    }
</script>

<style >

</style>
