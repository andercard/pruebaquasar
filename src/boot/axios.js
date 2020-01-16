import Vue from 'vue'
import axios from 'axios'

const config= axios.create({
  baseURL: 'https://opendata.aemet.es/opendata',
  params: {
    'api_key': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbmRlcmNhcmQ2NkBnbWFpbC5jb20iLCJqdGkiOiJkNWE0ZjA1YS1iZWZjLTRjYmEtYmE0Yy01NzI4MWY0ZTE5MmEiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTU3OTEyNTQ2NSwidXNlcklkIjoiZDVhNGYwNWEtYmVmYy00Y2JhLWJhNGMtNTcyODFmNGUxOTJhIiwicm9sZSI6IiJ9.qlMVj5c6pkE4asaOwGzXcjjEludbh0lpN8yvJi6pVFU'
  }
})

Vue.prototype.$axios = config
Vue.prototype.$axiosOriginal = axios
