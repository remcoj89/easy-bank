<template>
  <section class="section__wrapper">
    <!-- Desktop Navigation bar -->
    <div class="desktop-nav-bar">
      <img
        class="desktop-nav-bar__logo"
        src="@/assets/icons/logo.svg"
        height="15"
        fill="black"
        alt="easybank logo"
      />
      <ul class="desktop-nav-bar__nav-list">
        <li class="desktop-nav-bar__nav-list--list-item">Home</li>
        <li class="desktop-nav-bar__nav-list--list-item">About</li>
        <li class="desktop-nav-bar__nav-list--list-item">Contact</li>
        <li class="desktop-nav-bar__nav-list--list-item">Blog</li>
        <li class="desktop-nav-bar__nav-list--list-item">Carreers</li>
      </ul>
      <base-button class="btn content--button">Request invite</base-button>
    </div>

    <!-- Mobile Navigation bar -->
    <div class="mobile-nav-bar">
      <img
        class="mobile-nav-bar__logo"
        src="@/assets/icons/logo.svg"
        height="15"
        width="200"
        fill="black"
        alt="easybank logo"
      />
      <img id="burger-menu" src="@/assets/icons/icon-hamburger.svg" alt="hamburger menu" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'nav-bar',
  data() {
    return {}
  }
}
</script>
