<template>
    <div>
        <ul>
            <li v-for="(item, i) in list" :key="i">
                <router-link :to=item.href> {{item.text}}</router-link><span v-if="i !== list.length-1"> &#47;</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "BreadCrumbs",
        props: {
            list: Array
        }
    }
</script>

<style scoped>
    div {
        position: relative;
        margin-top: 5px;
        margin-bottom: -10px;
    }
    li {
        display: inline;
        font-size: 18px;
    }

</style>
