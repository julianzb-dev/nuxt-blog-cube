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
    <NuxtImg src="/avatar.png" width="192" height="192" class="avatar" alt="User's avatar" aria-hidden="true" />
    <h2>John Doe</h2>
    <h1>Test Developer</h1>
    <p>
      Hey there, welcome! I'm a <strong>test developer</strong> with 5 years of
      experience crafting online solutions. I'm particularly passionate about
      <strong>React.js</strong> – you'll find plenty of insights and discoveries on my <strong>blog</strong>.
    </p>
    <p>
      Currently, I'm diving into <strong>UI/UX Design</strong>, <strong>Next.js</strong>, and <strong>Go</strong>.
      Please check out my <strong>portfolio</strong>, have a look around, and feel free to reach me out!
    </p>
    <div class="cta | cluster ">
      <nuxt-link class="btn" data-size="xl" data-priority="secondary" to="/blog">Read my blog</nuxt-link>
      <nuxt-link class="btn" data-size="xl" data-priority="primary" to="/contact">Contact Me</nuxt-link>
    </div>
  </section>
</template>

<style scoped>
.section > .avatar {
  border-radius: var(--radius-full);
  user-select: none;
}
</style>