<script setup lang="ts">
const currentYear = new Date().getFullYear();
const startOfCareerDate = currentYear - 2013;

useSeoMeta({
  title: "Julian Zapata",
  description: `Discover insights, tutorials, and best practices about web development, frontend frameworks, and 
  developer tools from my personal journey in the tech industry.`,
})
</script>

<template>
  <section class="section | stack center">
    <img class="avatar" src="https://picsum.photos/300" alt="Digital innovation concept illustration">
    <h2>Julian Zapata</h2>
    <h1>Full-Stack Mastered</h1>
    <p>
      Hey there, welcome! I'm a <strong>web developer</strong> with {{ startOfCareerDate }} years of
      experience crafting online solutions. I'm particularly passionate about
      <strong>Vue.js</strong> – you'll find plenty of insights and discoveries on my <strong>blog</strong>.
    </p>
    <p>
      Currently, I'm diving into <strong>Web Design</strong>, <strong>Nuxt</strong>, and <strong>Rust</strong>.
      Please check out my <strong>portfolio</strong>(coming soon), have a look around, and feel free to reach me out!
    </p>
    <div class="cta | cluster ">
      <nuxt-link class="btn" data-size="xl" data-priority="secondary" to="/blog">Read my blog</nuxt-link>
      <nuxt-link class="btn" data-size="xl" data-priority="primary" to="/contact">Contact Me</nuxt-link>
    </div>
  </section>
</template>

<style scoped>
.section > .avatar {
  width: 12rem;
  height: 12rem;
  border-radius: var(--radius-full);
  user-select: none;
}
</style>