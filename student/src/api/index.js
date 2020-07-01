import axios from "axios";
import URLs from "./URLs";

const instance = axios.create({
  //创建axios实例
  baseURL: URLs.baseURL, //设置baseURL
  method: "get", //设置请求方式
  params: {
    //'设置默认的拼接appkey'
    appkey: "zhangzhuo_1581653670182",
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
export default {
  addStu,
};
