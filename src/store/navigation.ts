import { ref } from 'vue'

export type RouteType = 'home' | 'dashboard' | 'peternakan' | 'perkebunan' | 'information' | 'login'

export const currentRoute = ref<RouteType>('home')
