<template>
  <div>
      <div class="row">
        <div class="col-md-6 evaluation-box">
            <!-- <h3>Sending the Evaluation (5) <span><i class="la la-star-o"></i><i class="la la-star-o"></i><i class="la la-star-o"></i><i class="la la-star-o"></i><i class="la la-star-o"></i></span></h3> -->

                       <h3>Sending the Evaluation <span><star-rating :star-size="35" :increment="0.5" :inline="true" :rating="5"></star-rating></span></h3>
                        <!--https://vuejsexamples.com/a-simple-and-highly-customisable-star-rating-component-for-vue/-->
            <div>
                <textarea name="" id="" cols="90" rows="5"></textarea>
                <button class="btn btn-2">Send Evaluate</button>
                <hr>
             <div class="text-center">
                    <button class="btn btn-2">More Dawnload <span><i class="la la-cloud-download"></i></span></button>
             </div>
            </div>
        </div>
        <div class="col-md-4">
     <h1>5</h1>
     <div><span><i class="la la-star-o"></i><i class="la la-star-o"></i><i class="la la-star-o"></i><i class="la la-star-o"></i><i class="la la-star-o"></i></span></div>
        <div> 5 stars<span><progress id="file" max="100" value="100"> 100% </progress></span><span>100%</span></div>
        <div> 4 stars<span><progress id="file" max="100" value="100"> 100% </progress></span><span>0</span></div>
        <div> 3 stars<span><progress id="file" max="100" value="100"> 100% </progress></span><span>0</span></div>
        <div> 2 stars<span><progress id="file" max="100" value="100"> 100% </progress></span><span>0</span></div>
        <div> 1 stars<span><progress id="file" max="100" value="100"> 100% </progress></span><span>0</span></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.evaluation-box{
    margin-left: 50px;
        border-radius: 25px;
    /* border: 1px solid #ccc; */
    box-shadow: -2px 3px 8px 10px #88888829;
}
h3{
   padding: 12px;
}
.btn-2{
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
progress#file{
   margin: 4px 25px -2px 27px;
    width: 250px;
    padding: 7px;
    /* color: #ccc; */
    background: #7e7c7c26;

}
</style>
