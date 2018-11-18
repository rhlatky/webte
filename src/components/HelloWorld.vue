<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
            <div class="magrin">
                <b-alert show>Default Alert</b-alert>

                <b-alert variant="success" show>Success Alert</b-alert>
                <b-alert variant="danger"
                         dismissible
                         :show="showDismissibleAlert"
                         @dismissed="showDismissibleAlert=false">
                    Dismissible Alert!
                </b-alert>

                <b-alert :show="dismissCountDown"
                         dismissible
                         variant="warning"
                         @dismissed="dismissCountDown=0"
                         @dismiss-count-down="countDownChanged">
                    <p>This alert will dismiss after {{dismissCountDown}} seconds...</p>
                    <b-progress variant="warning"
                                :max="dismissSecs"
                                :value="dismissCountDown"
                                height="4px">
                    </b-progress>
                </b-alert>

                <b-btn @click="showAlert" variant="info" class="m-1">
                    Show alert with count-down timer
                </b-btn>
                <b-btn @click="showDismissibleAlert=true" variant="info" class="m-1">
                    Show dismissible alert ({{showDismissibleAlert?'visible':'hidden'}})
                </b-btn>
        </div>
        <div class="alert alert-success alert-dismissible fade show mt-1 magrin" role="alert">
            With Bootstrap! Skap Dinh!
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <p>
            For guide and recipes on how to configure / customize this project,<br>
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
        <h3>Installed CLI Plugins</h3>
        <ul>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
                   rel="noopener">babel</a></li>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank"
                   rel="noopener">eslint</a></li>
        </ul>
        <h3>Essential Links</h3>
        <ul>
            <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
            <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
        </ul>
        <h3>Ecosystem</h3>
        <ul>
            <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
            <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
            <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank"
                   rel="noopener">vue-devtools</a></li>
            <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
        </ul>
    </div>
</template>

<script>
    import bAlert from 'bootstrap-vue/es/components/alert/alert'
    import bBtn from 'bootstrap-vue/es/components/button/button'
    import bProgress from 'bootstrap-vue/es/components/progress/progress'

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                dismissSecs: 10,
                dismissCountDown: 0,
                showDismissibleAlert: false
            }
        },
        methods: {
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            }
        },
        components: {
            'b-alert': bAlert,
            'b-btn': bBtn,
            'b-progress': bProgress
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
    .magrin {
        margin-right: 25%;
        margin-left: 25%;
    }
</style>
