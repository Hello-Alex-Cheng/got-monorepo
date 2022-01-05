
console.log(Vue)

new Vue({
  // el: '#root',
  template: '<h1>{{msg}}</h1>',
  data: {
    msg: 'This is Vue@2.6.14 demo'
  }
}).$mount('#root');
