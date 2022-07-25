import create from 'vue-zustand'

interface currentAddressState {
    currentAddress: string
    setCurrentAddress: (text: string) => void
}

interface fixAddress {
    fixAddress: string
    setFixAddress: (text: string) => void
}

interface phoneState {
    phone: string
    setPhone: (text: string) => void
}

export const currentAddressState = create<currentAddressState>(set => ({
    currentAddress: "",
    setCurrentAddress: (text: string) => set({ currentAddress: text }),
}))

export const fixAddressState = create<fixAddress>(set => ({
    fixAddress: "",
    setFixAddress: (text: string) => set({ fixAddress: text }),
}))

export const phoneState = create<phoneState>(set => ({
    phone: "",
    setPhone: (text: string) => set({ phone: text }),
}))