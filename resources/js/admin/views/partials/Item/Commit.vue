<template>
  <div class="row">
<div class="col-md-6 commit-box">
          <h3> send commit</h3>

      <div>
          <textarea name="" id="" cols="90" rows="7"></textarea>
      </div>
    <button class="btn btn-3">send the commit</button>
    <hr>
   <div class="text-center">
        <button class="btn btn-3">more Dawnload<span><i class="la la-cloud-download"></i></span></button>
   </div>
</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.commit-box{

    margin-left: 50px;
        border-radius: 25px;
    /* border: 1px solid #ccc; */
    box-shadow: -2px 3px 8px 10px #88888829;

}
.btn-3{
        color: #fff;
    background: #f87609a1;
    margin-bottom: 25px;
    font-size:15px;
}
i{
        color: #db7117;
}
.la-cloud-download{
    color: white;
}
</style>
