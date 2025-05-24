<script setup>
const route = useRoute();
const slug = route.params.slug;

const {data: post} = await usePosts().fetchPostBySlug(slug);

useSeoMeta({
  description: post.value?.excerpt,
  title: `${post.value?.title} by Test Developer`
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
        <NuxtImg src="/avatar.png" width="60" height="60" class="avatar" alt="Author's avatar" aria-hidden="true" />
        <div class="author-info | stack">
          <p class="author-name | text-md-semibold">John Doe</p>
          <p class="text-md-regular">Test Developer</p>
        </div>
      </div>

      <div class="social-links | cluster">
        <a href="https://www.linkedin.com/in/jzapatab/" class="social-link" target="_blank">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
          >
            <path
                d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                fill="#A4A7AE"
            />
          </svg>
        </a>
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
                <a class="tc-anchor | text-md-semibold" :href="`#${tacItem.id}`">{{ tacItem.text }}</a>
                <ul v-if="tacItem?.children" class="tac-item stack" >
                  <li v-for="tacSubItem in tacItem.children" :key="tacSubItem.id">
                    <a class="tc-anchor-sub" :href="`#${tacSubItem.id}`">{{ tacSubItem.text }}</a>
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

.tc-anchor {
  color: var(--colors-text-primary-900);
  font-weight: 600;
}

.tc-anchor-sub {
  color: var(--colors-text-tertiary-600);
  font-weight: 500;
}

.with-sidebar {
  align-items: flex-start; /* Needed to position: sticky in .sticky-container take effect */
}

.sticky-container {
  position: sticky;
  top: 6rem;
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

.social-links {
  margin-block-start: 0.5rem;
}

@media screen and (max-width: 612px) {
  .sticky-container {
    position: relative;
    top: 0;
    margin-block-end: 1rem;
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