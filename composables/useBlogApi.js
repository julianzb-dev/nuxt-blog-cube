export const usePosts = () => {
    //const runtimeConfig = useRuntimeConfig();

    const fetchPosts = () => {
        //return useFetch(`${runtimeConfig.public.apiBase}/posts`, {server: true, key: 'posts'});
        return useFetch('/api/posts')
    }
    const fetchPostBySlug = (slug) => {
        //return useFetch(`${runtimeConfig.public.apiBase}/posts/slug/${slug}`, {server: true, key: `post-${slug}`});
        return useFetch(`/api/posts/slug/${slug}`)
    }

    return {fetchPosts, fetchPostBySlug}
}

