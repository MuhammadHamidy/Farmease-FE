import { ref } from 'vue'

export interface UserSession {
  code: string;
  name: string;
  role: string;
}

export interface CageSession {
  code: string;
  name: string;
  type: string;
}

export const isLoginOpen = ref(false)

export const userSession = ref<UserSession | null>(null)
export const cageSession = ref<CageSession | null>(null)

export const selectedTernakId = ref<string | null>(null)
export const selectedPencatatanPayload = ref<any | null>(null)
export const activePencatatanForm = ref<any | null>(null)
