<template>
    <div class="date-time-display">
      {{ formattedDateTime }}
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentDateTime: new Date(),
      };
    },
    computed: {
      formattedDateTime() {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return this.currentDateTime.toLocaleString('vi-VN', options).replace('lúc ', '');
      },
    },
    created() {
      setInterval(() => {
        this.currentDateTime = new Date();
      }, 1000); // Update every second
    },
  };
  </script>
  
  <style scoped>
  .date-time-display {
    font-size: 16px;
    font-weight: bold;
  }
  </style>
  