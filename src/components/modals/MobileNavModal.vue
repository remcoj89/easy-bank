<template>
  <div class="mobile-nav-modal" v-show="showModal">
    <div class="mobile-menu">
      <ul class="mobile-menu__nav-list">
        <li class="mobile-menu__nav-list--list-item" @click="closeModal">Home</li>
        <li class="mobile-menu__nav-list--list-item" @click="closeModal">About</li>
        <li class="mobile-menu__nav-list--list-item" @click="closeModal">Contact</li>
        <li class="mobile-menu__nav-list--list-item" @click="closeModal">Blog</li>
        <li class="mobile-menu__nav-list--list-item" @click="closeModal">Carreers</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useModalStore } from '@/stores/modalStore';
import { mapWritableState, mapStores } from 'pinia';
export default {
  name: 'MobileNavModal',
  computed: {
    ...mapStores(useModalStore),
    ...mapWritableState(useModalStore, {
        showModal: 'isOpen'
    })
  },
  methods: {
    closeModal() {
        this.showModal = false
    }
  }
}
</script>
