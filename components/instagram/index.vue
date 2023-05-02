<template>
    <div class="w-full bg-black pb-20">
        <div class="container mx-auto px-8 py-8 bg-white">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div v-for="(post, index) in posts" :key="index">
                    <a :href="post.permalink" target="_blank" rel="noopener noreferrer">
                        <img :src="post.media_url" :alt="post.caption" :title="post.caption"
                            class="w-full h-full object-cover rounded" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Instagram",
    mounted() {
        let instagramAccessToken = this.$config.instagramAccessToken;

        fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${instagramAccessToken}`)
            .then(response => response.json())
            .then(data => {
                let posts = data.data.filter(post => post.media_type === "CAROUSEL_ALBUM" || post.media_type === "IMAGE");

                this.posts = posts.slice(0, 4);
            });
    },
    data() {
        return {
            posts: []
        }
    }
};
</script>