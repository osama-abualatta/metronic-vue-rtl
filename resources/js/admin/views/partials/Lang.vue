<template>
    <div class="locale-changer">
        <select v-model="$i18n.locale" @change="handleLang">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
                {{ lang }}</option
            >
        </select>
    </div>
</template>

<script>
export default {
    name: "locale-changer",
    data() {
        return { langs: ["en", "ar"] };
    },
    methods: {
        handleLang(event) {
            var locale = event.target.value;
            var isAr = locale === "ar";

            document.getElementById("style-rtl").disabled = !isAr;
            document.getElementById("vendors-rtl").disabled = !isAr;

            document.getElementById("style").disabled = isAr;
            document.getElementById("vendors").disabled = isAr;
            var html =document.querySelector('html');
            if (isAr) {
                html.style.direction = "rtl";
                html.dir = "rtl";
            }else{
                html.style.direction = "";
                html.dir = "";
            }
        }
    }
};
</script>
