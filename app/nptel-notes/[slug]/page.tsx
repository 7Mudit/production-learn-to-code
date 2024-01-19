// import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
// import { useMDXComponent } from "next-contentlayer/hooks";
// import { absoluteUrl, cn, formatDate } from "@/lib/utils";
import Image from "next/image";
// import { Callout } from "@/components/courses/callout";
// import page from "../page";
// import { Metadata } from "next";
// import { env } from "process";
import Link from "next/link";
import { Icons } from "@/components/courses/icons";
import { buttonVariants } from "@/components/ui/button";
import { Mdx } from "@/components/courses/mdx-components";
import { cn, formatDate } from "@/lib/utils";

interface PageProps {
  params: {
    slug: string[];
  };
}

const authors = [
  {
    id: 1,
    avatar: "/profile.jpeg",
    title: "Mudit Kapoor",
    linkedin: "7_Mudit",
  },
];

// export const generateStaticParams = async () =>
//   allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

// export const generateMetadata = ({ params }) => {
//   const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
//   return { title: post.title };
// };

async function getPageFromParams(params: any) {
  console.log(params);
  const slug = params?.slug;
  const page = allPosts.find((page) => page._raw.flattenedPath === slug);

  if (!page) {
    console.log("not found");
  }
  return page;
}

// export async function generateMetadata({
//   params,
// }: PageProps): Promise<Metadata> {
//   const page = await getPageFromParams(params);

//   if (!page) {
//     return {};
//   }

//   const url = "localhost:3000";

//   const ogUrl = new URL(`${url}/api/og`);
//   ogUrl.searchParams.set("heading", page.title);
//   ogUrl.searchParams.set("type", "Education");
//   ogUrl.searchParams.set("mode", "light");

//   return {
//     title: page.title,
//     description: page.description,
//     openGraph: {
//       title: page.title,
//       description: page.description,
//       type: "article",
//       url: absoluteUrl(page.url),
//       images: [
//         {
//           url: ogUrl.toString(),
//           width: 1200,
//           height: 630,
//           alt: page.title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: page.title,
//       description: page.description,
//       images: [ogUrl.toString()],
//     },
//   };
// }

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/nptel-notes"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        See all posts
      </Link>
      <div>
        {post.date && (
          <time
            dateTime={post.date}
            className="block text-sm text-muted-foreground"
          >
            Published on {formatDate(post.date)}
          </time>
        )}
        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>
        {authors?.length ? (
          <div className="mt-4 flex space-x-4">
            {authors.map((author) =>
              author ? (
                <Link
                  key={author.id}
                  href={`https://twitter.com/${author.twitter}`}
                  className="flex items-center space-x-2 text-sm"
                >
                  <Image
                    src={author.avatar}
                    alt={author.title}
                    width={42}
                    height={42}
                    className="rounded-full bg-white"
                  />
                  <div className="flex-1 text-left leading-tight">
                    <p className="font-medium">{author.title}</p>
                    <p className="text-[12px] text-muted-foreground">
                      @{author.linkedin}
                    </p>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        ) : null}
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
      <div className="pt-10">
        <Mdx code={post.body.code} />
      </div>

      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/nptel-notes"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
      </div>
    </article>
  );
};

export default PostLayout;
