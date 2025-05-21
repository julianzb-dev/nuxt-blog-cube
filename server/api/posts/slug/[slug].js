export default eventHandler(async (event) => {
    const slug = getRouterParam(event, 'slug')
    const post = await useDrizzle().select({
        id: tables.posts.id,
        title: tables.posts.title,
        slug: tables.posts.slug,
        featured_image: tables.posts.featured_image,
        updated_at: tables.posts.updated_at,
        excerpt: tables.posts.excerpt,
        content_md_id: tables.posts.content_md_id,
        tags: []
    }).from(tables.posts).where(eq(tables.posts.slug, slug)).get();

    post.tags = await useDrizzle().select({
        id: tables.tags.id,
        name: tables.tags.name
    })
        .from(tables.tags)
        .innerJoin(
            tables.postTags,
            eq(tables.tags.id, tables.postTags.tag_id)
        )
        .all()

    return post
})