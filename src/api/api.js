/**
 * Created by lenovo on 2017/10/16.
 */
import io from './io';
// import axios from 'axios';
import config from './config';
let base = config.host
console.log(base)
 // let base2 = '/pagestyle'
export const getApiSublist = (params) => { return io.post(`${base}/api/api-jssdk/funclistbytype`, params) };

export const getWorkBenchData = () => { return io.get(`${base}/config/work-bench?spId=1c5d468652ba4af295f9dd83aa62e152`) };

export const saveData = (params) => { return io.post(`${base}/config/save-workBench`, params) };
// 获取业务图标
export const getAllConfigData = () => { return io.get(`${base}/config/get-groupbiz?spId=1c5d468652ba4af295f9dd83aa62e152&groupId=59eda7f727414e5a7ccea040`) };
// 获取自定义模块
export const getSelfData = () => { return io.get(`${base}/config/opt-config`) };
