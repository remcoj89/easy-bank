<template>
  <section class="section__wrapper">
    <div class="nav-bar">
      <img class="nav-bar__logo" src="@/assets/icons/logo.svg" height="15" fill="black" alt="easybank logo" />
      <ul class="nav-bar__nav-list">
        <li class="nav-bar__nav-list--list-item">Home</li>
        <li class="nav-bar__nav-list--list-item">About</li>
        <li class="nav-bar__nav-list--list-item">Contact</li>
        <li class="nav-bar__nav-list--list-item">Blog</li>
        <li class="nav-bar__nav-list--list-item">Carreers</li>
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
