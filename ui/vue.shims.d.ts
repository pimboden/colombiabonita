import Vue from 'vue'
import { Context, Middleware } from '@nuxt/types'

// Fix use of nuxt specific component options layout, middleware, fetch

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    fetch?(ctx: Context): Promise<void> | void
    layout?: string | ((ctx: Context) => string)
    middleware?: Middleware | Middleware[]
  }
}

declare module '*.vue' {
  export default Vue
}

declare module '@nuxtjs/composition-api' {
  interface SetupContext {
    readonly refs: { [key: string]: Vue | Element | Vue[] | Element[] }
  }
}
