<template>
  <section id="footer">
    <div class="section__wrapper footer">
      <div class="footer__grid-box">
        <div class="container__left">
          <div class="container__left--logo">
            '
            <img src="src/assets/icons/logo.svg" alt="easybank logo" />
            <h2>easybank</h2>
          </div>
          <div class="container__left--socials">
            <img src="@/assets/icons/icon-facebook.svg" alt="facebook" />
            <img src="@/assets/icons/icon-youtube.svg" alt="youtube" />
            <img src="@/assets/icons/icon-twitter.svg" alt="twitter" />
            <img src="@/assets/icons/icon-pinterest.svg" alt="pintrest" />
            <img src="@/assets/icons/icon-instagram.svg" alt="instagram" />
          </div>
        </div>
      </div>
      <div class="footer__grid-box">
        <ul class="footer__grid-box--unordered-list">
          <li class="footer__grid-box--unordered-list__list-item">About us</li>
          <li class="footer__grid-box--unordered-list__list-item">Contact</li>
          <li class="footer__grid-box--unordered-list__list-item">Blog</li>
        </ul>
      </div>
      <div class="footer__grid-box">
        <ul class="footer__grid-box--unordered-list">
          <li class="footer__grid-box--unordered-list__list-item">Careers</li>
          <li class="footer__grid-box--unordered-list__list-item">Support</li>
          <li class="footer__grid-box--unordered-list__list-item">Privacy Policy</li>
        </ul>
      </div>
      <div class="footer__grid-box" id="grid-box--right">
        <button class="btn content--button">Request invite</button>
        <p>©️ Easybank All Rights Reserved</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'section-footer'
}
</script>
