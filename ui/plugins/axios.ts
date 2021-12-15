import axios from 'axios'

axios.interceptors.request.use((config) => {
  config.headers.common['Cache-Control'] = 'no-cache, no-store, must-revalidate'
  config.headers.common['Pragma'] = 'no-cache'
  config.headers.common['Expires'] = '0'
  return config
})
