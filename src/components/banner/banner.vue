<template>
    <div class="banner">
        <van-swipe :autoplay="3000"  @change="onChange">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img :src="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        name: "banner",
        data(){
            return {
                images: [
                    'https://img.yzcdn.cn/2.jpg',
                    'https://img.yzcdn.cn/2.jpg'
                ]
            }
        },
        methods:{
            onChange(index){
                // this.$toast('当前 Swipe 索引：' + index);
            }
        }
    }
</script>

<style scoped lang="sass">
    .banner
        width: 100%
        img
            width: 100%
</style>