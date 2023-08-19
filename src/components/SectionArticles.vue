<template>
  <section id="section-articles">
    <div class="section__wrapper section__articles">
      <h2 class="section__articles--title">Latest Articles</h2>
      <div class="articles__container">
        <base-card>
          <img
            src="@/assets/images/image-currency.jpg"
            alt="Clair Robinson"
            class="articles__container--card__image"
          />
          <div class="articles__container--card__content">
            <p class="articles__container--card__content--author">By Claire Robinson</p>
            <h2 class="articles__container--card__content--title">
              Receive money in any currency with no fees
            </h2>
            <p class="articles__container--card__content--paragraph">
              The world is getting smaller and we're becoming more mobile. So why should you be
              forced to only receive money in a single …
            </p>
          </div>
        </base-card>
        <base-card>
          <img
            src="@/assets/images/image-restaurant.jpg"
            alt="Wilson Hutton"
            class="articles__container--card__image"
          />
          <div class="articles__container--card__content">
            <p class="articles__container--card__content--author">By Wilson Hutton</p>
            <h2 class="articles__container--card__content--title">
              Treat yourself without worrying about money
            </h2>
            <p class="articles__container--card__content--paragraph">
              Our simple budgeting feature allows you to separate out your spending and set
              realistic limits each month. That means you …
            </p>
          </div>
        </base-card>
        <base-card>
          <img
            src="@/assets/images/image-plane.jpg"
            alt="Wilson Hutton"
            class="articles__container--card__image"
          />
          <div class="articles__container--card__content">
            <p class="articles__container--card__content--author">Wilson Hutton</p>
            <h2 class="articles__container--card__content--title">
              Take your Easybank card wherever you go
            </h2>
            <p class="articles__container--card__content--paragraph">
              We want you to enjoy your travels. This is why we don’t charge any fees on purchases
              while you're abroad. We'll even show you …
            </p>
          </div>
        </base-card>
        <base-card>
          <img
            src="@/assets/images/image-confetti.jpg"
            alt="Claire Robinson"
            class="articles__container--card__image"
          />
          <div class="articles__container--card__content">
            <p class="articles__container--card__content--author">By Claire Robinson</p>
            <h2 class="articles__container--card__content--title">
              Our invite-only Beta accounts are now live!
            </h2>
            <p class="articles__container--card__content--paragraph">
              After a lot of hard work by the whole team, we're excited to launch our closed beta.
              It's easy to request an invite through the site ...
            </p>
          </div>
        </base-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'section-atricles'
}
</script>
