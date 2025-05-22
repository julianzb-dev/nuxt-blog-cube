<script setup>
useSeoMeta({
  title: "Web Development Blog",
  description: `Discover insights, tutorials, and best practices about web development, frontend frameworks, 
  and developer tools from my personal journey in the tech industry.`,
})

const {data: posts} = await usePosts().fetchPosts();

const router = useRouter()
function openPost(slug) {
  router.push({
    path: `/blog/${slug}`,
  })
}
</script>

<template>
  <div>
    <section class="section | stack center">
      <h2>Blog</h2>
      <h1>Latest Web Development Insights</h1>
    </section>
    <section class="section | grid">
      <article v-for="(post, index) in posts" :key="post.id" class="card" :tabindex="index + 1" @click="openPost(post.slug)">
        <div class="image-container">
          <div class="gradient"/>
          <img :src="post.featured_image" :alt="post.excerpt">
        </div>
        <div class="card-body | stack">
          <time class="text-sm-semibold">{{ useDateFormat(post.updated_at, 'MMM DD, YYYY') }}</time>
          <h3 class="display-xs-semibold">{{ post.title }}</h3>
          <p class="card-excerpt | text-md-regular">{{ post.excerpt }}</p>
          <ul v-for="tag in post.tags" :key="tag.id" class="cluster">
            <li class="badge | text-sm-medium">{{ tag.name }}</li>
          </ul>
        </div>
      </article>
    </section>
  </div>
</template>

<style scoped>
.card {
  cursor: pointer;
  border-radius: var(--radius-2xl);
  border: 1px solid var(--border-secondary);
  transition: all 0.3s ease-out;
  background: var(--bg-primary_alt);
}

.card:hover, .card:focus-visible {
  outline: none;
  border: 1px solid var(--border-secondary);
  box-shadow: 5px 5px 5px var(--shadow-default);
  transform: scale(1.03);
}

.card:hover .gradient, .card:focus-visible .gradient {
  opacity: 0;
}

.image-container {
  position: relative;
  width: 100%;
  height: 10.5rem;
}

.gradient {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

.card img {
  width: 100%;
  height: 10.5rem;
  object-fit: cover;
  display: block;
  border-radius: var(--radius-2xl) var(--radius-2xl) 0 0;
}

.card-body {
  --base-margin-block-start: 1rem; /* reduce margin-block-start for .stack class from 1.5rem to 1rem */

  text-align: start;
  margin-block: 1rem;
  margin-inline: 1rem;
}

.card-body time {
  color: var(--colors-text-brand-secondary-700);
}

.card-excerpt {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-clamp: 3;
  text-overflow: ellipsis;
}

</style>