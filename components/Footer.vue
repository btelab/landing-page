<template>
  <div class="w-full flex flex-col bg-white pt-20">
    <div class="md:mx-auto md:w-3/4 xl:mx-auto bg-white pl-4 pr-4 sm:pl-0 sm:pr-0">
      <div
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 pb-10 justify-items-center">
        <div v-for="(image, index) in images" :key="index" class="h-4/5 mx-auto">
          <img :src="image.src" :alt="image.alt" :width="image.width" :height="image.height"
            class="w-full h-full object-scale-down">
        </div>
      </div>
    </div>
    <div class="w-full bg-black h-20"></div>
  </div>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {
      images: [{
        src: require('@/assets/logo_conselleria-sanidad_whitebackround.png'),
        alt: 'Generalitat Valenciana. Conselleria de Sanitat. Universal i Salut Pública',
        width: '100%',
        height: 'auto'
      }, {
        src: require('@/assets/Logo-Conselleria-innovacion.png'),
        alt: 'Generalitat Valenciana. Conselleria de Innovación, Universidades, Ciencia y Sociedad Digital',
        width: '100%',
        height: 'auto'
      }, {
        src: require('@/assets/Logo_Ministeriociencia.png'),
        alt: 'Ministerio de Ciencia, Innovación y Universidades. Gobierno de España',
        width: '100%',
        height: 'auto'
      }, {
        src: require('@/assets/logo-EU.png'),
        alt: 'Unión Europea. Fondo Europeo de Desarrollo Regional. Una manera de hacer Europa',
        width: '50%',
        height: 'auto'
      }, {
        src: require('@/assets/logo-plan-de-recuperacion.png'),
        alt: 'Plan de Recuperación, Transformación y Resilencia',
        width: '100%',
        height: 'auto'
      }, {
        src: require('@/assets/logo-garantia-juvenil.png'),
        alt: 'Estrategia de emprendimento y empleo joven',
        width: '80%',
        height: 'auto'
      }, {
        src: require('@/assets/logo-avi.png'),
        alt: 'AVI. Agència Valenciana de la Innovació',
        width: '80%',
        height: 'auto'
      }, {
        src: require('@/assets/Logo_ISCIII.png'),
        alt: 'Instituto de Salud Carlos III',
        width: '100%',
        height: 'auto'
      },]
    }
  }
};
</script>