"use client";

import { useState } from "react";
import BlogPostItem from "../../components/BlogPostItem";
import PaginationControls from "../../components/PaginationControls";
import LoadingIndicator from "../../components/LoadingIndicator";
import ErrorMessage from "../../components/ErrorMessage";
import usePosts from "../../hooks/usePosts";
import Section from "@/components/Section";

const BlogPostGrid = ({ initialPosts }) => {
  const { posts, loading, error, loadMore } = usePosts(1);

  const handleRetry = () => setCurrentPage((prev) => prev);

  return (
    <>
      <Section></Section>
      <section>
        {loading && <LoadingIndicator />}
        {error && <ErrorMessage onRetry={handleRetry} />}
        {!loading && !error && posts.length === 0 && (
          <p>No blog posts available.</p>
        )}
        <div className="grid">
          {posts.map((post) => (
            <BlogPostItem
              key={post.id}
              title={post.title}
              date={post.published_at}
              socialImage={post.cover_image}
              url={post.url}
              userImage={post.user.profile_image}
              userName={post.user.name}
              userWebsite={post.user.website_url}
              type={post.type_of}
              description={post.description}
            />
          ))}
        </div>
        <PaginationControls
          setCurrentPage={() => loadMore()}
          loading={loading}
        />
      </section>
    </>
  );
};

export default BlogPostGrid;
