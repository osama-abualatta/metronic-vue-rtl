<template>
    <div class="container">
        <form>
        <h1 class="text-center">Register As Dealer</h1>
        <h3 class="text-center">More few steps to create new acount</h3>
        <div class="row form-group text-center">
            <div class="col">
               <router-link to="/dashboard/RegisterDealer/basicData" active-class="active" exact> <button class="btn1 ">1</button></router-link>
                <div>
                    <h3>Basic Data</h3>
                </div>
            </div>
            <div class="col">
              <router-link to="/dashboard/RegisterDealer/accountData" active-class="active">  <button class="btn1  ">2</button></router-link>
                <div>
                    <h3>Acount Data</h3>
                </div>
            </div>
        </div>
        <router-view/>
        </form>
    </div>
</template>

<script>
export default {};
</script>

<style>
.btn1{
    border-radius: 50%;
    border: 1px solid black;
    background-color: white;
        padding: 8px;
    font-size: 27px;
    width: 50px;
    height: 50px;
    margin-bottom: 8px;
    margin-top: 13px;
    cursor: pointer;
}
.router-link-exact-active .btn1{
    background-color: #f87609a1 ;
}
</style>
