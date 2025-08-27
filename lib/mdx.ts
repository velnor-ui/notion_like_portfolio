import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

// Blog utilities
type Frontmatter = {
  title: string;
  description: string;
  date: string;
  image: string;
  readTime: string;
  tags: string[];
  slug: string;
};

export const getSingleBlog = async (slug: string) => {
  try {
    const singleBlog = await fs.promises.readFile(
      path.join(process.cwd(), "content/blog", `${slug}.mdx`),
      "utf8",
    );
    if (!singleBlog) {
      return null;
    }

    const { content, frontmatter } = await compileMDX<Frontmatter>({
      source: singleBlog,
      options: { parseFrontmatter: true },
    });

    return { content, frontmatter };
  } catch (error) {
    console.error(`Error reading file: for slug ${slug}`, error);
    return null;
  }
};

export const getAllBlogs = async () => {
  try {
    const files = await fs.promises.readdir(
      path.join(process.cwd(), "content/blog"),
    );
    const allBlogs = await Promise.all(
      files.map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");
        const frontmatter = await getBlogFrontmatterBySlug(slug);
        return {
          slug,
          ...frontmatter,
        };
      }),
    );
    return allBlogs;
  } catch (error) {
    console.error("Error reading files:", error);
    return [];
  }
};

export const getBlogFrontmatterBySlug = async (slug: string) => {
  const singleBlog = await fs.promises.readFile(
    path.join(process.cwd(), "content/blog", `${slug}.mdx`),
    "utf8",
  );

  if (!singleBlog) {
    return null;
  }
  const { frontmatter } = await compileMDX<Frontmatter>({
    source: singleBlog,
    options: { parseFrontmatter: true },
  });
  return frontmatter;
};

export const getFeaturedBlogs = async () => {
  try {
    const files = await fs.promises.readdir(
      path.join(process.cwd(), "content/blog"),
    );

    const allBlogs = await Promise.all(
      files.map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");
        const frontmatter = await getBlogFrontmatterBySlug(slug);
        return {
          slug,
          ...frontmatter,
        };
      }),
    );

    // return only 3
    return allBlogs.slice(0, 3);
  } catch (error) {
    console.error("Error reading files:", error);
    return [];
  }
};
