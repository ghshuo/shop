<template>
    <div id="app">
        <banner></banner>
        <classify></classify>
    </div>
</template>

<script>
    import banner from './components/banner/banner'
    import classify from './components/classify/classify'
    export default {
        name: 'app',
        components: {
            banner,
            classify
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    html, body
        font-size 62.5%
        background #f7f7f7
</style>
