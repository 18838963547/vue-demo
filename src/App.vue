<template>
    <div>
       <router-link to="/login">login</router-link>
       <router-link to="/register">register</router-link>
       <router-view></router-view>
    </div>
</template>
<script>
export default {
    data(){
        //组建中的data必须是function
        return{
            msg:'nihao'
        }
    }
}
</script>
<style lang="sass" scoped>

</style>


