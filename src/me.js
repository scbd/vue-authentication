import UCookies from 'universal-cookie'
const cookie = new UCookies()

import Vue from 'vue'

// initial state
const state = {
      token:false,
      isAuthenticated: false
}

// actions
const actions = {
    setToken: setTokenAction,
    logout:logoutAction
}

// mutations
const mutations = {
    setToken: setTokenMutation,
    me: meMutation
}
//============================================================
//
//============================================================
export default {
  namespaced: true,
  state,
  actions,
  mutations
}

//============================================================
//
//============================================================
function setTokenAction ({commit},token){
    commit('setToken',token)
    cookie.set('token',token,{path:'/'})
}

//============================================================
//
//============================================================
function setTokenMutation (state,token){

    if(token && token!=='false')
      Vue.set(state,'token',token);
    else
      Vue.set(state,'token',false);
}

//============================================================
//
//============================================================
async function logoutAction({dispatch,commit}){
   await dispatch('setToken',false)
   await commit('me',false)
}

//============================================================
//
//============================================================
function meMutation (state,me){

  if(me){
    Vue.set(state,'_id',me._id);
    Vue.set(state,'id',me.id || me.userID);
    Vue.set(state,'firstName',me.firstName);
    Vue.set(state,'lastName',me.lastName);
    Vue.set(state,'email',me.email);
    Vue.set(state,'mobile',me.firstName);
    Vue.set(state,'verified',me.verified);
    Vue.set(state,'roles',me.roles);
    Vue.set(state,'isAuthenticated',true);
  }
  else {
    Vue.set(state,'_id',undefined);
    Vue.set(state,'id',undefined);
    Vue.set(state,'firstName',false);
    Vue.set(state,'lastName',false);
    Vue.set(state,'email',false);
    Vue.set(state,'mobile',false);
    Vue.set(state,'verified',false);
    Vue.set(state,'roles',false);
    Vue.set(state,'isAuthenticated',false);
    Vue.set(state,'token',true);
  }
}
