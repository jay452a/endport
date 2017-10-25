/**
 * Created by lenovo on 2017/10/16.
 */
import io from './io';
// import axios from 'axios';
import config from './config';
let base = config.host
console.log(base)
let base2 = '/pagestyle'
export const getApiSublist = (params) => { return io.post(`${base}/api/api-jssdk/funclistbytype`, params) };

export const getWorkBenchData = () => { return io.get(`${base2}/config/work-bench?spId=1c5d468652ba4af295f9dd83aa62e152`) };

export const saveData = (params) => { return io.post(`${base2}/config/save-workBench`, params) };
