import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		id:100,
		list:[]
  },
  mutations: {
		addToList:function(state, item) {
			item.id = state.id;
			state.id++;
			state.list.push(item);
		},
		removeFromList:function(state,id) {
			for(let i=0;i<state.list.length;i++) {
				if(state.list[i].id == id) {
						state.list.splice(i,1);
						return;
				}				
			}
		},
		editItem:function(state,item) {
			for(let i=0;i<state.list.length;i++) {
				if(state.list[i].id == item.id) {
						state.list.splice(i,1,item);
						return;
				}				
			}			
		}
  },
  actions: {
		addToList:function(context,item) {
			context.commit("addToList",item);
		},
		removeFromList:function({commit},id) {
			commit("removeFromList",id);
		},
		editItem:function(context,item) {
			context.commit("editItem",item);
		}
  }
})
