<script setup>
// import avatar from '~/assets/images/avatar.jpeg';
const route = useRoute();
const slug = route.params.slug;

const {data: post} = await usePosts().fetchPostBySlug(slug);

useSeoMeta({
  description: post.value?.excerpt,
  title: `${post.value?.title} by Julian Zapata`
})

const {data: postContentData} = await useAsyncData(() => queryCollection('content').path(post.value.content_md_id).first())
const tableOfContent = postContentData.value?.body?.toc ? postContentData.value?.body?.toc : {links: []}
</script>

<template>
  <div>
    <!-- Start - hero section -->
    <section class="section | stack center">
      <h2 v-if="false">Updated on {{ useDateFormat(post.updated_at, 'MMM DD, YYYY') }}</h2>
      <h1>{{ post.title }}</h1>
      <p>
        {{ post.excerpt }}
      </p>
      <div class="author-profile | cluster">
        <img src="https://picsum.photos/60" alt="author's avatar" aria-hidden="true">
        <div class="author-info | stack">
          <p class="author-name | text-md-semibold">Julian Zapata</p>
          <p class="text-md-regular">Web Developer</p>
        </div>
      </div>
    </section>
    <!-- End - hero section -->

    <!-- Start - featured image section -->
    <section class="section">
      <img class="featured-image" :src="post.featured_image" alt="featured image for post" aria-hidden="true">
    </section>
    <!-- End - featured image section -->

    <!-- Start - blog's content section -->
    <section class="section | with-sidebar">
      <div class="sticky-container" >
        <aside class="sidebar | stack">
          <h4>Table of contents</h4>
          <ul class="stack-r">
            <template v-for="tacItem in tableOfContent.links" :key="tacItem.id">
              <li>
                <a class="text-md-semibold" :href="`#${tacItem.id}`">{{ tacItem.text }}</a>
                <ul v-if="tacItem?.children" class="tac-item stack" >
                  <li v-for="tacSubItem in tacItem.children" :key="tacSubItem.id">
                    <a :href="`#${tacSubItem.id}`">{{ tacSubItem.text }}</a>
                  </li>
                </ul>
              </li>
            </template>
          </ul>
        </aside>  
      </div>
      
      <article class="not-sidebar">
        <ContentRenderer class="post-content" :value="postContentData"/>
      </article>
    </section>
    <!-- End - blog's content section -->
  </div>
</template>

<style scoped>

.section.with-sidebar {
  --base-margin-block-start: 1rem;
  text-align: left;
}

.sidebar {
  max-inline-size: 30ch;
}

.with-sidebar {
  align-items: flex-start; /* Needed to position: sticky in .sticky-container take effect */
}

.sticky-container {
  position: sticky;
  top: 4rem;
}

.author-profile {
  img {
    width: 60px;
    height: 60px;
    border-radius: var(--radius-full);
  }
}

.author-info {
  --base-margin-block-start: 0;
  text-align: left;
}

.author-name {
  color: var(--colors-text-primary-900);
}

.featured-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
}

.tac-item > li {
  margin-inline-start: 1rem;
}

.post-content {
  width: 100%;

  p, li {
    font-family: "BuckeyeSerif", "Georgia", serif;
  }
}
</style>

<style>
.post-content {
  p, li {
    font-family: "BuckeyeSerif", "Georgia", serif;
  }

  li > strong {
    font-family: var(--font-family, Inter), serif;
  }

  a {
    text-decoration: none;
    color: var(--button-secondary-fg);
  }

  ul {
    list-style: inside;
    padding: 1.25rem 0 0 1.875rem;
  }

  li {
    font-size: var(--font-size-text-lg);
    font-style: normal;
    font-weight: 400;
    line-height: var(--line-height-text-lg);
    color: var(--colors-text-tertiary-600);
  }

  p {
    /* text-xl-regular */
    font-size: var(--font-size-text-xl);
    font-weight: 400;
    
    color: var(--colors-text-tertiary-600);
    margin-top: 0.625rem;
    letter-spacing: -0.003em;
    line-height: 32px;
  }

  h1 {
    /* display-md-semibold */
    font-size: var(--font-size-display-md);
    font-weight: 600;
    line-height: var(--line-height-display-md);
    letter-spacing: -0.72px;
  }

  h2 {
    /* display-sm-semibold */
    font-size: var(--font-size-display-sm);
    font-weight: 600;
    line-height: var(--line-height-display-sm);
  }

  h3 {
    /* display-xs-semibold */
    font-size: var(--font-size-display-xs);
    font-weight: 600;
    line-height: var(--line-height-display-xs);

    margin-block-start: 1.875rem;
  }

  span {
    line-height: var(--line-height-text-md);
  }

  pre {
    margin-top: 1.875rem;
    margin-bottom: 1.875rem;
    width: 100%;
    overflow-x: auto;
    background-color: var(--colors-bg-primary);
    scrollbar-color: var(--bg-brand-solid) white;
    scrollbar-width: thin;
  }
  
}
</style>