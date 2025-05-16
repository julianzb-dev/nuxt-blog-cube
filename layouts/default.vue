<script setup lang="ts">
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
</script>

<template>
  <div>
    <!-- Start header -->
    <header>
      <nav class="navbar | cluster">
        <ul class="cluster">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/blog">Blog</nuxt-link></li>
          <li>
            <theme-switcher/>
          </li>
        </ul>
      </nav>
    </header>
    <!-- End header -->
    
    <!-- Start content -->
    <slot/>
    <!-- End content -->
  </div>
</template>

<style scoped>
/* Start header section */
header {
  border-bottom: 0.063rem solid var(--border-primary);
}

.navbar {
  justify-content: right;
  padding-block: 0.5rem;
  padding-inline: 1rem;
}

.navbar img {
  height: 2rem;
}
/* End header section */
</style>