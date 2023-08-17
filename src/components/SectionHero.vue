<template>
  <section id="hero">
    <img id="hero__image" src="../assets/icons/bg-intro-desktop.svg" alt="hero-image" />
    <div class="section__wrapper hero">
      <div class="hero__left">
        <div class="content">
          <h1 class="content--title">Next Generation <span>Digital Banking</span></h1>
          <p class="content--text">
            Take your financial life online. Your Easy Bank account wil be a one-stop-shop for
            spending, saving, budgeting, investing and much more.
          </p>
          <button class="btn content--button">Request invite</button>
        </div>
      </div>
      <div class="hero__right">
        <img class="overlay-image" src="src/assets/images/image-mockups.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'hero-component'
}
</script>
