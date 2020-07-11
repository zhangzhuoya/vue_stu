import Vue from "vue";
import Vuex from "vuex";
import api from "../api";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
    size: 3,
    stuList: [],
    stu: [],
    nowPage: 1,
    activeStu: {},
    showModal: false,
    totalPage: 1,
    searchValue: "",
  },
  mutations: {
    setStuList(state, list) {
      state.stuList = list;
    },
    setStu(state, stu) {
      state.activeStu = stu;
    },
    update(state, list) {
      state.stu = list;
    },
    setPage(state, page) {
      state.nowPage = page;
    },
    setModal(state, isShow) {
      state.showModal = isShow;
    },
    setTotalPage(state, count) {
      state.totalPage = Math.ceil(count / state.size);
    },
    setSearchValue(state, val) {
      state.searchValue = val;
    },
  },
  actions: {
    async getStuList({ commit, state }, page) {
      try {
        commit("setPage", page);
        const { findByPage, cont } = await api.getFindPage(page, state.size);
        // console.log(cont);
        // console.log(findByPage);
        commit("setTotalPage", cont);
        commit("setStuList", findByPage);
      } catch (error) {
        console.log(error);
      }
    },
    async delStu({ dispatch, state }, sNo) {
      console.log('1');
      
      try {
        console.log('1');
        
        const value = await api.del(sNo);
        console.log(value);
        if (
          Math.ceil(this.count - 1 / state.size) < state.totalPage &&
          this.nowPage === this.totalPage
        ) {
          dispatch("turnPage", state.nowPage - 1);
        } else {
          dispatch("turnPage", state.nowPage);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async searchList({ commit, state }, page) {
      try {
        commit("setPage", page);
        const { cont, searchList } = await api.searchList(
          state.searchValue,
          page,
          state.size
        );
        commit("setStuList", searchList);
        commit("setTotalPage", cont);
      } catch (error) {
        console.log(error);
      }
    },
    async upData({ commit, state }, options) {
      const data = await api.updateStu(options);
      if (data.status == "success") {
        commit("setModal", false);
        console.log(this.state.showModal);
        Object.assign(state.activeStu, options);
      }
      return data;
    },
    turnPage({ dispatch, state }, page) {
      if (state.searchValue === "") {
        dispatch("getStuList", page);
      } else {
        this.dispatch("searchList", page);
      }
    },
  },
});
