import { redirect } from "next/navigation";
import Image from "next/image";
import {
  getAllBlogs,
  getBlogFrontmatterBySlug,
  getSingleBlog,
} from "@/lib/mdx";
import MotionDiv from "@/components/MotionDiv";
import Tags from "@/components/Tags";
import Container from "@/components/Container";

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  if (!blogs) return [];
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const frontmatter = await getBlogFrontmatterBySlug(slug);

  const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || "https://yourdomain.com";

  if (!frontmatter) {
    return {
      title: "Blog not found",
    };
  }
  return {
    title: frontmatter.title + " | Muhammed Sanjid",
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title + " | Muhammed Sanjid",
      description: frontmatter.description,
      type: "article",
      url: `${DOMAIN}/blog/${slug}`,
      images: [
        {
          url: frontmatter.image,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title + " | Muhammed Sanjid",
      description: frontmatter.description,
      images: [frontmatter.image],
    },
    alternates: {
      canonical: `${DOMAIN}/blog/${slug}`,
    },
  };
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content, frontmatter } = blog;

  return (
    <Container>
      <MotionDiv
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <article className="bg-background px-4 py-8 md:px-6">
          <header className="mb-4">
            {frontmatter.image && (
              <Image
                src={frontmatter.image}
                alt={frontmatter.title}
                width={1000}
                height={600}
                className="m-3 mx-auto mb-4 rounded-md border"
              />
            )}
            <h1 className="mb-4 text-2xl font-bold md:text-4xl">
              {frontmatter.title}
            </h1>
            <p className="mb-4 text-lg md:text-xl">{frontmatter.description}</p>
            <div className="text-muted-foreground flex items-center gap-4 text-sm">
              <time dateTime={frontmatter.date}>
                {new Date(frontmatter.date).toLocaleDateString("en-us", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
              {frontmatter.tags && <Tags tags={frontmatter.tags} />}
            </div>
          </header>
          <div className="prose max-w-none">{content}</div>
        </article>
      </MotionDiv>
    </Container>
  );
}
