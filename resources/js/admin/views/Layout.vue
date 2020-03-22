<template>
<div>
<router-view />

  </div>
</template>

<script>

    export default {
data(){
    return {
        log:'dashboard',
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
    // methods:{
    //     signin(){
    //         alert('gg');
    //    // this.log='dashboard';
    //     },
    //     logoutHandle(){
    //         this.log= 'login'
    //         },
    //          register(){
    //         this.log='signup'
    //     },
    //     cancelBtn(){
    //         this.log='login'
    //     }
    //     },

        //  setAuthenticated(status) {
        //         this.authenticated = status;
        //     },
        //     logout() {
        //         this.authenticated = false;
        //     }

    }



</script>

<style lang="scss" scoped>

</style>
