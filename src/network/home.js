// import axios from 'axios';
import {require} from "./network";

export function getMultiData() {
  return require({
    url: '/home/multidata',
  })
}

export function getProductData(type,page) {
  return require({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}