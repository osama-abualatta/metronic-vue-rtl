<template>
<div>

<router-view />

  </div>
</template>

<script>

    export default {
data(){
    return {
       //show:false,
       // up=false

}
},
         mounted() {
        //     if(!this.authenticated) {
        //         this.$router.replace( "login" );
        //     }
            document.getElementById("style-rtl").disabled = true;
            document.getElementById("vendors-rtl").disabled = true;
         },

    }

</script>

<style lang="scss" scoped>

</style>
