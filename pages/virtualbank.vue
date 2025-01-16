<template>
    <div>
      <p>Redirigiendo a la página del banco...</p>
    </div>
  </template>
  
  <script lang="ts">  
  export default {
    mounted() {
      // Redirige a la página externa
      window.location.href = 'http://46.24.18.239/dist';
    },
  };
  </script>
  