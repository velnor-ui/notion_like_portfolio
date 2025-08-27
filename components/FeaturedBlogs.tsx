import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MotionDiv from "./MotionDiv";
import { getFeaturedBlogs } from "@/lib/mdx";
import Container from "./Container";
import SectionHeader from "./SectionHeader";
import { IconDeviceImacBolt } from "@tabler/icons-react";

interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  image: string;
  tags: string[];
  slug: string;
  readTime?: string;
}

export default async function FeaturedBlogs() {
  // Get the latest 2 blog posts
  const featuredPosts = (await getFeaturedBlogs()) as BlogFrontmatter[];

  return (
    <Container>
      <SectionHeader
        badge={<IconDeviceImacBolt className="mr-2 h-5 w-5" />}
        badgeText="Featured"
        title="Featured Blogs"
        description="Some of the latest blog posts"
      />

      <div className="grid gap-8">
        {featuredPosts.map((post, index) => (
          <MotionDiv
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:bg-zinc-800"
          >
            <div className="flex h-full flex-col">
              <div className="flex-1">
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {post.description}
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
                  Read more
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>

      <Link
        href="/blog"
        className="group text-primary hover:text-primary/80 mt-6 inline-flex items-center text-base font-medium"
      >
        View all posts
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Container>
  );
}
