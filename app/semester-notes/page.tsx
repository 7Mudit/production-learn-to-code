import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { m } from "framer-motion";
// import { getMDXComponent } from "next-contentlayer/hooks";

// function PostCard(post: Post) {
//   //   const Content = getMDXComponent(post.body.code);

//   return (
//     <div className="mb-8">
//       <h2 className="text-xl">
//         <Link
//           href={post.url}
//           className="text-blue-700 hover:text-blue-900"
//           legacyBehavior
//         >
//           {post.title}
//         </Link>
//       </h2>
//       <time dateTime={post.date} className="block mb-2 text-xs text-gray-600">
//         {format(parseISO(post.date), "LLLL d, yyyy")}
//       </time>
//       <div className="text-sm">{/* <Content /> */}</div>
//     </div>
//   );
// }

const subjects = [
  {
    _id: 1,
    name: "PROJECT BASED LEARNING IN JAVA WITH LAB",
    description:
      "Dive deep into Java through hands-on projects and real-world applications in our interactive lab.",
    link: "semester-notes/java",
  },
  // {
  //   _id: 2,
  //   name: "ADVANCED PROGRAMMING ",
  //   description:
  //     "Elevate your coding skills to the next level with advanced concepts and complex problem-solving techniques.",
  //   link: "semester-notes/advanced-programming",
  // },
  // {
  //   _id: 3,
  //   name: "MOBILE APPLICATION DEVELOPMENT WITH LAB",
  //   description:
  //     "Learn to create stunning mobile applications for Android  from scratch in our comprehensive lab sessions.",
  //   link: "semester-notes/mad",
  // },
  // {
  //   _id: 4,
  //   name: "CLOUD COMPUTING AND DISTRIBUTED SYSTEMS LAB",
  //   description:
  //     "Explore the world of cloud computing and understand the architecture of distributed systems through practical lab exercises.",
  //   link: "semester-notes/cloud-computing",
  // },
  // {
  //   _id: 5,
  //   name: "THEORY OF COMPUTATION",
  //   description:
  //     "Unravel the fundamentals of computation, automata theory, and computational complexity in this foundational course.",
  //   link: "semester-notes/toc",
  // },
];

export default function Home() {
  //   const filteredPosts = allPosts.filter(
  //     (post) => post._raw.sourceFileDir === "nptel-notes/quantumPhysics"
  //   );
  //   const sortedPosts = filteredPosts.sort((a, b) =>
  //     compareDesc(new Date(a.date), new Date(b.date))
  //   );

  return (
    <>
      <div className="container   max-w-4xl py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
              Documentation
            </h1>
            <p className="text-sm text-muted-foreground">
              ~Built by <span className="text-xl ">M</span>
              udit Kapoor
            </p>
          </div>
        </div>
        <hr className="my-8" />
        {subjects?.length ? (
          <div className="grid gap-10 sm:grid-cols-2">
            {subjects.map((post, index) => (
              <article
                key={post._id}
                className="group relative duration-300 transition-all hover:border rounded-3xl hover:scale-105  flex flex-col p-4 space-y-2"
              >
                {/* {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={804}
                    height={352}
                    className="rounded-xl  object-cover  border bg-white transition-colors "
                    priority={index <= 1}
                  />
                )} */}
                <h2 className="text-2xl font-extrabold">{post.name}</h2>
                {post.description && (
                  <p className="text-pure-greys-200">{post.description}</p>
                )}
                {/* {post.date && (
                  <p className="text-sm text-muted-foreground">
                    {formatDate(post.date)}
                  </p>
                )} */}
                <div>
                  <Link href={post.link} className="text-sm">
                    <Button
                      variant={"ghost"}
                      className="border-dark-500 dark:border-light-800 border"
                    >
                      View Notes
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p>No posts published.</p>
        )}
      </div>
    </>
  );
  // return (
  //   <div className="max-w-xl py-8 mx-auto">
  //     <h1 className="mb-8 text-3xl font-bold text-center">Next.js Example</h1>

  //     {posts.map((post: any, idx: any) => (
  //       <PostCard key={idx} {...post} />
  //     ))}
  //   </div>
  // );
}
