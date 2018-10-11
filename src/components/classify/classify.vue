<template>
    <div class="classify">
        <div class="line">
            <router-link to="/" tag="a" class="tab-item">
                <figure>
                    <img src="./images/th.png" alt="">
                </figure>
                <div class="text">今日特惠</div>
            </router-link>
            <a href="" class="tab-item">
                <figure>
                    <img src="./images/qqg.png" alt="">
                </figure>
                <div class="text">全球购</div>
            </a>
            <a href="" class="tab-item">
                <figure>
                    <img src="./images/vz.png" alt="">
                </figure>
                <div class="text">充值中心</div>
            </a>
            <a href="" class="tab-item">
                <figure>
                    <img src="./images/jf.png" alt="">
                </figure>
                <div class="text">我的积分</div>
            </a>
        </div>
        <div class="line">
            <a href="" class="tab-item">
                <figure>
                    <img src="./images/qd.png" alt="">
                </figure>
                <div class="text">签到</div>
            </a>
            <a href="" class="tab-item">
                <figure>
                    <img src="./images/yh.png" alt="">
                </figure>
                <div class="text">优惠券</div>
            </a>
            <a href="" class="tab-item">
                <figure>
                    <img src="./images/sd.png" alt="">
                </figure>
                <div class="text">闪电购</div>
            </a>
            <a href="" class="tab-item">
                <figure>
                    <img src="./images/brand.png" alt="">
                </figure>
                <div class="text">品牌街</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "classify",
        data(){
            return{

            }
        }
    }
</script>

<style scoped lang="stylus">
    .classify
        font-size 14px
        width 100%
        background #fff
        overflow hidden
        .line
            width 100%
            display flex
            flex-direction row
            box-sizing border-box
            overflow hidden
            padding 10px
            .tab-item
                flex 1
                figure
                    margin 0 auto 0
                    padding 0!important
                    width 40%
                    img
                        width 100%
                .text
                    width 100%
                    text-align center
                    margin-top 10px
                    font-size 14px
                    color #666
</style>