<script setup lang="ts">
useSeoMeta({
  title: "Web Development Blog",
  description: `Discover insights, tutorials, and best practices about web development, frontend frameworks, 
  and developer tools from my personal journey in the tech industry.`,
})
</script>

<template>
  <div>
    <section class="section | stack center">
      <h2>Blog</h2>
      <h1>Latest Web Development Insights</h1>
    </section>
    <section class="grid" >
      <article v-for="index in 10" :key="index"  class="card | stack" >
        <div>
          <img src="https://picsum.photos/250" alt="some alternative description">
        </div>
        <div>
          <time>Mar 26, 2025</time>
          <h3>UX Designs</h3>
          <p>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
        </div>
      </article>
    </section>
  </div>
</template>

<style scoped>
.card {
  cursor: pointer;
  border-radius: var(--radius-2xl);
}

.card img {
  width: 100%;
  height: 10.5rem;
  object-fit: cover;
  display: block;
}

</style>