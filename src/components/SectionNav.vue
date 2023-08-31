<template>
  <section class="section__wrapper">
    <div class="nav-bar">
      <img class="nav-bar__logo" src="@/assets/icons/logo.svg" height="15" alt="easybank logo" />
      <ul class="nav-bar__nav-list">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Carreers</li>
      </ul>
      <base-button class="btn content--button">Request invite</base-button>
    </div>
  </section>
</template>

<script>
  export default {
    name: "nav-bar"
  }
</script>
