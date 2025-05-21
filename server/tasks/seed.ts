export default defineTask({
    meta: {
        name: 'db:seed',
        description: 'Run database seed task'
    },
    async run() {
        console.log('Running DB seed task...')

        const posts = [
            {
                title: 'UX review presentations',
                slug: 'ux-review-presentations',
                excerpt: 'How do you create compelling presentations that wow your colleagues and impress your managers? Find out with our in-depth guide on UX presentations.',
                content_md_id: '/ux-review-presentations',
                language: 'en',
                featured_image: 'https://picsum.photos/1280/640',
                status: 'draft',
                created_at: sql`(unixepoch())`
            },
            {
                title: 'Design systems fundamentals',
                slug: 'design-systems-fundamentals',
                excerpt: 'Learn the basics of creating and maintaining effective design systems to improve collaboration and consistency across your products.',
                content_md_id: '/design-systems-fundamentals',
                language: 'en',
                featured_image: 'https://picsum.photos/1280/640',
                status: 'draft',
                created_at: sql`(unixepoch())`
            }
        ]
        await useDrizzle().insert(tables.posts).values(posts)
        return { result: 'success' }
    }
})