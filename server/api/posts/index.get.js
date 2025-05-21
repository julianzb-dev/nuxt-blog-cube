export default eventHandler(async () => {

    const posts = await useDrizzle().query.posts.findMany({
        columns: {
            id: true,
            title: true,
            slug: true,
            featured_image: true,
            updated_at: true,
            excerpt: true,
            content_md_id: true,
        },
        with: {
            postTags: {
                columns: {}, // Don't select columns from the linking table
                with: {
                    tag: {
                        columns: {
                            id: true,
                            name: true,
                        },
                    },
                },
            },
            postCategories: {
                columns: {}, // Don't select columns from the linking table
                with: {
                    category: {
                        columns: {
                            id: true,
                            name: true,
                        },
                    },
                },
            },
        },
    });

    // The result structure will be posts with nested postTags and postCategories objects.
    // You might need to transform this structure to the desired output format
    // (e.g., an array of tags and categories directly on the post object).

    return posts.map(post => ({
        ...post,
        tags: post.postTags.map(pt => pt.tag),
        categories: post.postCategories.map(pc => pc.category),
        // Remove the intermediate linking objects if not needed
        postTags: undefined,
        postCategories: undefined,
    }));
});