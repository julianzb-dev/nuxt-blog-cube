import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
import {sql, relations } from "drizzle-orm";

export const posts = sqliteTable('post', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    title: text('title').notNull(),
    slug: text('slug').notNull().unique(),
    excerpt: text('excerpt').notNull(),
    content_md_id: text('content_md_id').notNull().unique(),
    language: text('language', { enum: ['es', 'en'] }).default('en'),
    featured_image: text('featured_image'),
    status: text('status', { enum: ['draft', 'published'] }).default('draft'),
    created_at: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`(unixepoch())`),
    updated_at: integer('updated_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
});

export const categories = sqliteTable('category', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    slug: text('slug').notNull().unique(),
    created_at: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`(unixepoch())`)
});

export const tags = sqliteTable('tag', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    slug: text('slug').notNull().unique(),
    created_at: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`(unixepoch())`)
});

export const postCategories = sqliteTable('post_category', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    post_id: integer('post_id').notNull().references(() => posts.id, { onDelete: 'cascade' }),
    category_id: integer('category_id').notNull().references(() => categories.id, { onDelete: 'cascade' }),
});

export const postTags = sqliteTable('post_tag', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    post_id: integer('post_id').notNull().references(() => posts.id, { onDelete: 'cascade' }),
    tag_id: integer('tag_id').notNull().references(() => tags.id, { onDelete: 'cascade' }),
});

// Define all relations
export const postsRelations = relations(posts, ({ many }) => ({
    postTags: many(postTags),
    postCategories: many(postCategories),
}));

export const postTagsRelations = relations(postTags, ({ one }) => ({
    post: one(posts, {
        fields: [postTags.post_id],
        references: [posts.id]
    }),
    tag: one(tags, {
        fields: [postTags.tag_id],
        references: [tags.id]
    })
}));

export const postCategoriesRelations = relations(postCategories, ({ one }) => ({
    post: one(posts, {
        fields: [postCategories.post_id],
        references: [posts.id]
    }),
    category: one(categories, {
        fields: [postCategories.category_id],
        references: [categories.id]
    })
}));

export const tagsRelations = relations(tags, ({ many }) => ({
    postTags: many(postTags)
}));

export const categoriesRelations = relations(categories, ({ many }) => ({
    postCategories: many(postCategories)
}));