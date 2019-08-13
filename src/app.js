import Input from './input'
import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Row from './row'
import Col from './col'

Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)

new Vue({
  el:"#app",
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
  },
})
