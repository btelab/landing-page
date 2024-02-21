<template>
    <div class="flex flex-col bg-white">
        <div class="flex flex-col container mx-auto pt-8 pb-8">
            <h1 class="w-full flex justify-center text-6xl pb-4 font-raleway">Blog</h1>
            <!-- <!- <div v-for="post in linkedInFeed" :key="post.id">{{ post.text }}</div> ->
            <div class="flex flex-1 w-full justify-center ">
                <div class="title-line bg-black"></div>
            </div> -->
        </div>
        <iframe src='https://widgets.sociablekit.com/linkedin-page-posts/iframe/25351207' width='100%'
            height='1000'></iframe>
    </div>
</template>
<script>
// export default {
//     name: "Blog",
//     components: {},
//     data() {
//         return {
//             linkedInFeed: [],
//         }
//     },
//     mounted(){
//         this.fetchLinkedInFeed();
//     },
//     methods: {
//         async fetchLinkedInFeed(){
//             try{
//                 const linkedinAccessToken = 'YOUR_ACCESS_TOKEN';
//                 const response = await fetch('https://www.linkedin.com/oauth/v2/authorization',{
//                     method: 'GET',
//                     headers: {
//                         'Authorization': `Bearer ${linkedinAccessToken}`,
//                         'Content-Type': 'application/json',
//                     },
//                 });
//                 if(!response.ok){
//                     throw new Error(`Error fetching LinkedIn feed: ${response.statusText}`);
//                 }
//                 const data = await response.json();
//                 this.linkedInFeed = data.elements;
//             } catch (error){
//                 console.error('Error fetching LinkedIn feed', error);
//             }
//         }
//     },
// };
</script>