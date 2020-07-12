import axios from "axios";
import URLs from "./URLs";

const instance = axios.create({
  //创建axios实例
  baseURL: URLs.baseURL, //设置baseURL
  method: "get", //设置请求方式
  params: {
    //'设置默认的拼接appkey'
    // appkey: "zhangzhuo_1581653670182",
    appkey: "DuYiyongzhi_1564986206465",

  },
});

instance.interceptors.response.use(function(res) {
  if (res.data.data) {
    return res.data.data;
  } else {
    return res.data;
  }
});
function addStu(options) {
  return instance({
    url: URLs.addStu,
    params: {
      ...options,
    },
  });
}
function findAll() {
  return instance({
    url:URLs.findAll
  })

  
}
function searchList(search,page,size) {
  return instance({
    url:URLs.searchStu,
    params:{
      search,
      page,
      size,
      sex:-1
    }
  }) 
}
function getFindPage(page,size) {
  return instance({
    url:URLs.findByPage,
    params:{
      page,
      size
    }
  }) 
}
function del(sNo) {
  return instance({
    url:URLs.delStu,
    params:{
      sNo
    }
  })
  
}
function updateStu(options) {
    return instance({
      url:URLs.updateStu,
      params:{
        ...options
      }
    })
    
  }
export default {
  addStu,
  updateStu,
  getFindPage,
  searchList,
  del,
  findAll
};
