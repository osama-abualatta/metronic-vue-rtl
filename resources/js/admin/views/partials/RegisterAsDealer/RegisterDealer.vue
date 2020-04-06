<template>
    <div class="container">
        <h1>Register As Dealer</h1>
        <p>More few steps to create new acount</p>
        <div class="row">
            <div class="col">
               <router-link to="/dashboard/RegisterDealer/basicData"> <button>1</button></router-link>
                <div>
                    <h3>Basic Data</h3>
                </div>
            </div>
            <div class="col">
              <router-link to="/dashboard/RegisterDealer/accountData">  <button>2</button></router-link>
                <div>
                    <h3>Acount Data</h3>
                </div>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
