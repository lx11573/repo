import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import App from '@/App.vue'
import 'uno.css'

// eslint-disable-next-line import/order
import uvUI from '@climblee/uv-ui'

export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia())
  app.use(uvUI)
  return {
    app,
    Pinia,
  }
}
