<template>
  <div class="redirect-container">
    <div class="redirect-content">
      <h3>Redirecting to the virtual bank page...</h3>
      <div class="spinner"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  mounted() {
    // Redirige a la página externa
    setTimeout(() => {
      window.location.href = 'http://46.24.18.239/dist';
    }, 3000); // Delay de 3 segundos antes de redirigir
  },
};
</script>

<style scoped>
.redirect-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.redirect-content {
  text-align: center;
  font-family: Arial, sans-serif;
  color: #333;
}

.spinner {
  margin: 20px auto 0;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #333;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
