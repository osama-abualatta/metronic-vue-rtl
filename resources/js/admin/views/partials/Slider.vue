<template>
    <div>
        this is me
        <agile :options="options">
            <div
                class="slide"
                v-for="slide in slides"
                :key="slide.id"
            >
                <img :src="slide.url" alt="" style="width:100%;height:100%;" />
                <h3>{{ slide.title }}</h3>
                <test></test>
            </div>
        </agile>
        <!--https://www.npmjs.com/package/vue-agile-carousel-->
    </div>
</template>

<script>
export default {
    data() {
        return {
            slides: [
                {
                    id: 1,
                    title: "slide1",
                    url:
                        "https://images.unsplash.com/photo-1472926373053-51b220987527?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                },
                {
                    id: 2,
                    title: "slide1",
                    url:
                        "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                },
                {
                    id: 3,
                    title: "slide1",
                    url:
                        "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                },
                {
                    id: 4,
                    title: "slide1",
                    url:
                        "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                },
                {
                    id: 5,
                    title: "slide1",
                    url:
                        "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                },
                {
                    id: 6,
                    title: "slide1",
                    url:
                        "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                }
            ],
            options: {
                slidesToShow: 5,
                nextArrow:
                    '<svg x="0px" y="0px" viewBox="0 0 24 24"><path d="M16.2,21c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L9.6,12L17,4.7c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L6.8,12l8.8,8.7C15.7,20.9,16,21,16.2,21z"/></svg>',
                prevArrow:
                    '<svg x="0px" y="0px" viewBox="0 0 24 24"><path d="M7.8,21c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l7.4-7.3L7,4.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l8.8,8.7l-8.8,8.7C8.3,20.9,8,21,7.8,21z"/></svg>',
                dots: false
                /*responsive: [
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
            ]*/
            }
        };
    }
};
</script>

<style>
.slide {
    margin: auto 2px;
}
</style>
