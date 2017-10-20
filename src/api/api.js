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

export const getWorkBenchData = (params) => { return io.post(`${base2}/config/work-bench?spId=2017092910204000000`, params) };
