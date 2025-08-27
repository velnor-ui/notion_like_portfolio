import Container from "@/components/Container";
import MotionDiv from "@/components/MotionDiv";
import SectionHeader from "@/components/SectionHeader";
import Tags from "@/components/Tags";
import { getAllBlogs } from "@/lib/mdx";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog | John Wick",
  description:
    "Insights, tutorials, and thoughts on web development and technology.",
};

interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  image: string;
  tags: string[];
  slug: string;
  readTime?: string;
}

const Blog = async () => {
  const allBlogs = (await getAllBlogs()) as BlogFrontmatter[];

  return (
    <Container id="blog" className="bg-neutral-50 dark:bg-neutral-900">
      <div className="py-20">
        <SectionHeader
          title="Blog"
          description="Insights, tutorials, and thoughts on web development and technology."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {allBlogs.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Blog;

const BlogCard = ({
  post,
  index,
}: {
  post: BlogFrontmatter;
  index: number;
}) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
    >
      <Link href={`/blog/${post.slug}`}>
        {post.image && (
          <div className="overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={1000}
              height={600}
              className="h-48 w-full rounded-t-2xl object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="flex flex-col gap-3 p-6">
          <h2 className="text-xl leading-snug font-bold tracking-tight md:text-2xl">
            {post.title}
          </h2>
          <p className="text-muted-foreground line-clamp-3 text-base md:text-lg">
            {post.description}
          </p>
          <div className="text-muted-foreground mt-auto flex flex-wrap items-center gap-3 text-sm">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
            {post.tags && <Tags tags={post.tags} />}
          </div>
        </div>
      </Link>
    </MotionDiv>
  );
};
