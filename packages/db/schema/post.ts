import { relations, sql } from "drizzle-orm";
import { serial, timestamp, varchar } from "drizzle-orm/mysql-core";

import { mySqlTable } from "./_table";
import { users } from "./auth";

export const post = mySqlTable("post", {
  id: serial("id").primaryKey(),
  authorId: varchar("author_id", { length: 256 }).notNull(),
  title: varchar("name", { length: 256 }).notNull(),
  content: varchar("content", { length: 256 }).notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt").onUpdateNow(),
});

export const postRelations = relations(post, ({ one }) => ({
  author: one(users, { fields: [post.authorId], references: [users.id] }),
}));
