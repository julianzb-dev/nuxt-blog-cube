<script setup lang="ts">
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
</script>

<template>
  <div>
    <!-- Start header -->
    <header>
      <nav class="navbar | cluster">
        <ul class="cluster">
          <li><nuxt-link class="nav-link" to="/">Home</nuxt-link></li>
          <li><nuxt-link class="nav-link" to="/blog">Blog</nuxt-link></li>
          <li><nuxt-link class="nav-link" to="/contact">Contact</nuxt-link></li>
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

.nav-link {
  font-size: var(--font-size-text-md);
  font-weight: 600;
  line-height: var(--line-height-text-md);
  color: var(--button-tertiary-fg);
}

.nav-link:hover {
  color: var(--button-tertiary-fg_hover);
}

/* End header section */
</style>