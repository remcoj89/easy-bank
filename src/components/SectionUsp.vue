<template>
  <section id="section-usp" class="section__wrapper">
    <div class="section__usp">
      <!-- USP section title -->
      <div class="section__usp--top">
        <h2 class="top__title">Why Choose for Easy Bank?</h2>
        <p class="top__text">
          We leverage open bankink to turn your bank account into your financial hub.
        </p>
        <p class="top__text">Control your finances like never bevore.</p>
      </div>
      <!-- Usp section Usp's -->
      <div class="section__usp--bottom">
        <!-- Card 1 -->
        <div class="bottom__card">
          <img
            class="bottom__card--icon"
            src="src/assets/icons/icon-online.svg"
            alt="online banking"
          />
          <h2 class="bottom__card--title">Online Banking</h2>
          <p class="bottom__card--text">
            Our modern web and mobile applications allow you to keep track of your finances wherever
            you are in the world.
          </p>
        </div>
        <!-- Card 2 -->
        <div class="bottom__card">
          <img
            class="bottom__card--icon"
            src="src/assets/icons/icon-budgeting.svg"
            alt="simple budget"
          />
          <h2 class="bottom__card--title">Simple Budgeting</h2>
          <p class="bottom__card--text">
            See exactly where your money goes each month. Receive notifications when you’re close to
            hitting your limits.
          </p>
        </div>
        <!-- Card 3 -->
        <div class="bottom__card">
          <img
            class="bottom__card--icon"
            src="src/assets/icons/icon-onboarding.svg"
            alt="fast onboarding"
          />
          <h2 class="bottom__card--title">Fast Onboarding</h2>
          <p class="bottom__card--text">
            We don't do branches. Open your account in minutes online and start taking control of
            your finances right away.
          </p>
        </div>
        <!-- Card 4 -->
        <div class="bottom__card">
          <img class="bottom__card--icon" src="src/assets/icons/icon-api.svg" alt="open api" />
          <h2 class="bottom__card--title">Open API</h2>
          <p class="bottom__card--text">
            Manage your savings, investments, pension, and much more from one account. Tracking your
            money has never been easier.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'section-usp'
}
</script>
