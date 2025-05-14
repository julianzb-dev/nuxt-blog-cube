<script setup lang="ts">
import logo from 'assets/images/accelerate.svg'
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
</script>

<template>
  <div>
    <header>
      <nav class="navbar | cluster">
        <a href="/">
          <img :src="logo" alt="Company Name Logo">
        </a>
        <ul class="cluster">
          <li><a href="/">Home</a></li>
          <li><a href="/">Blog</a></li>
          <li>
            <theme-switcher/>
          </li>
        </ul>
      </nav>
    </header>
    <section class="hero | stack center">
          <img class="avatar" src="https://picsum.photos/300" alt="Digital innovation concept illustration">
          <h2>Julian Zapata</h2>
          <h1>Full-Stack Mastered</h1>
          <p>
            Hey there, welcome! I'm a web developer with 12 years of experience crafting online solutions. I'm
            particularly passionate about Vue.js – you'll find plenty of insights and discoveries on my blog.
          </p>
          <p>
            Currently, I'm diving into Web Design, Nuxt, and Rust. Please check out my portfolio(coming soon), have a look
            around, and feel free to reach me out!
          </p>
          <div>
            <nuxt-link class="btn" data-size="xl" data-priority="primary">Contact Me</nuxt-link>
          </div>
      </section>
  </div>
</template>

<style scoped>
/* Navbar */
.navbar {
  justify-content: space-between;
}

.navbar img {
  height: 2rem;
}

/* Hero section */
.hero {
  text-align: center;
}

.hero > .avatar {
  width: 12rem;
  height: 12rem;
  border-radius: var(--radius-full);
}

</style>