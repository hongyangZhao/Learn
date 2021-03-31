import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)
//创建VueX对象
const store = new Vuex.Store({
  state: {
    //存放的键值对就是所要管理的状态
    name: 'helloVueX'

  },
  mutations: {
    arr(state, payload) {
      state.name = 'haha'
      console.log(payload);
      return this.name
    },
    del() {
      // delete this.state.name
      Vue.delete(this.state, 'name')
      Vue.set(this.state, 'val', 1)
    },
    sett(state, a) {
      state.sex = a
    },
    edit(state, payload) {
      state.name = 'haha'
      state.age = payload

    }
  },
  getters: {
    nameInfo(state) {
      return "姓名" + state.name
    },
    fullInfo(state, getters) {
      return getters.nameInfo + '年龄' + state.age
    }
  },
  actions: {
    aEdit(context, payload) {
      setTimeout(() => {
        context.commit('edit', payload)
        console.log(context.state);
      }, 2000)
    }
  }
})

export default store