<template>
<calendar
 is-expanded
 :attributes='attrs'
  is-dark
  is-inline
 ></calendar>
 <!-- https://vcalendar.io/colors-dark-mode.html-->
</template>

<script>
//import {v-calender}

export default {

data() {
    return {
      attrs: [
        {
          key: 'today',
          highlight: true,
          dates: new Date(),
        },
      ],
    };
  },
}
</script>

<style>

</style>
