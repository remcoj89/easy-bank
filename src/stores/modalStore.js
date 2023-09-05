import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
    state: () => {
        return {
            isOpen: true
        }
    },
    getters: {},
    actions: {
        toggleModal() {
            this.isOpen = !this.isOpen
        }
    }

})