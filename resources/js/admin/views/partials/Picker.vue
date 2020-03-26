<template>
    <div>
<div class="row">
    <div class="col">
        <p> select your date</p>
        <date-picker
  v-model='date'
        />
<!-- https://vcalendar.io/datepicker.html#display-options-->
    </div>
    <div class="col">

        <p class="datetime-picker">Date Time Picker</p>
        <VueCtkDateTimePicker v-model="yourValue" />
<!-- https://chronotruck.github.io/vue-ctk-date-time-picker/-->
    </div>
    <div class="col">

        <p class="color-picker">Color Picker</p>
<verte picker="square" model="rgb">
     <svg viewBox="0 0 24 24">
    <path d="M0 20h24v4H0z"/>
    <path style="fill: #000" d="M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z"/>
  </svg>
</verte>
<!-- https://baianat.github.io/verte/examples.html#layout-customization-->
    </div>
</div>
    </div>
</template>

<script>
import 'verte/dist/verte.css';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
    export default {
 data() {
    return {
      date: new Date(),
       yourValue: null // Jan 25th, 2018
    }
  }
    }
</script>

<style >
.m-content{
    height: 550px;
}
</style>
