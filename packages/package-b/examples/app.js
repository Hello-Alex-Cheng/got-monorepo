
const { ref, onMounted, h } = Vue;

console.log('Vue3 app', Vue);

const HeaderTitle = (props, context) => {
  return h('h1', context.attrs, props.title)
}

Vue.createApp({
  template: `
    <h1>mount Other root app.</h1>
  `
}).mount('#root1')

const app = Vue.createApp({
  template: `
    <HeaderTitle :title="msg" />
    <h3>数量 {{count}}</h3>
    <button @click="increment">增加</button>
    <global-comp></global-comp>
  `,
  components: {
    HeaderTitle
  },
  setup() {
    const msg = "This is Vue3 demo!"

    const count = ref(0);

    const increment = () => {
      count.value += 1
    }

    onMounted(() => {
      console.info('onMounted hooks')
    })

    return {
      msg,
      count,
      increment
    }
  }
})

app.component('global-comp', {
  template: `
    <h1>Global component</h1>
  `
})

app.mount('#root')
