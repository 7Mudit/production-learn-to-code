//@ts-nocheck
"use client";
import * as z from "zod";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { GoDependabot } from "react-icons/go";
import { Mdx } from "@/components/courses/mdx-components";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Empty from "@/components/Empty";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Loader } from "@/components/Loader";
import ReactMarkdown from "react-markdown";
// import { Heading } from "@/components/Heading";
import { MessageSquare, MessageSquareCode } from "lucide-react";
import { FaUser } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// Choose the theme you like
import Heading from "@/components/homePage/Heading";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const components = {
  // Define custom component for 'code'
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={oneDark}
        language={match[1]}
        // PreTag="div"
        // className="overflow-x-scroll"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={cn(className)} {...props}>
        {children}
      </code>
    );
  },
  h1: ({ className, ...props }: any) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: any) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: any) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: any) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: any) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: any) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: any) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: any) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: any) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: any) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: any) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: any) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md border", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: any) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: any) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: any) => (
    <pre
      className={cn("mb-4 mt-6   rounded-lg   py-4", className)}
      {...props}
    />
  ),
  // code: ({ className, ...props }) => (
  //   <code
  //     className={cn(
  //       "relative rounded text-purple-800 dark:text-yellow-200  px-2 py-[0.2rem] font-mono text-sm",
  //       className
  //     )}
  //     {...props}
  //   />
  // ),
};

interface ChatCompletionRequestMessage {
  role: "user" | "model";
  parts: string;
}

const formSchema = z.object({
  prompt: z.string().min(2),
});

const Page = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([
    // {
    //   role: "model",
    //   parts: "Ask me anything. I will answer you",
    // },
  ]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        parts: values.prompt,
      };
      const newMessages = [...messages, userMessage];
      // const response = await axios.post(`${URL}/api/conversation`, {
      const response = await axios.post(
        `https://gemini-backend-ls9c.onrender.com/api/v1/gemini`,
        // `http://localhost:8000/api/v1/gemini`,
        {
          messages: newMessages,
        }
      );
      console.log("Response recieved ", response.data);
      const createMessage: ChatCompletionRequestMessage = {
        role: "model",
        parts: response.data,
      };
      setMessages((current) => [...current, userMessage, createMessage]);
      form.reset();
    } catch (Err: any) {
      if (Err?.response?.status === 403) {
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      router.refresh();
    }
  };
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  const messagesEndRef = useRef(null);
  return (
    <div className="md:container  ">
      <div className="px-4 my-[15px] flex flex-col h-[86vh] justify-between  lg:px-8">
        <div className="space-y-4 min-h-[67vh]  max-h-[67vh] overflow-x-scroll  scroll-smooth  ">
          <div className="flex flex-col gap-y-4">
            {messages.map((message, index) => (
              <div
                key={message.parts}
                ref={index === messages.length - 1 ? messagesEndRef : null}
                className={cn(
                  "p-4 md:p-8 w-full flex flex-col gap-5 md:flex-row items-start  overflow-x-scroll gap-x-8 rounded-lg",
                  message.role === "user" ? " border " : ""
                )}
              >
                <div className="">
                  {message.role === "user" ? (
                    <FaUser size={20} className="w-8 h-8 items-center" />
                  ) : (
                    <GoDependabot size={20} className="w-8 h-8 items-center" />
                  )}
                </div>
                <div className="">
                  <ReactMarkdown
                    components={components}
                    className="text-sm  leading-7"
                  >
                    {message.parts || ""}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
          </div>
          {isLoading && (
            <div className="p-8  min-h-[60vh]  rounded-lg w-full flex items-center justify-center ">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <div>
              <Empty label="No conversation started" />
            </div>
          )}
        </div>

        <div className="mt-2 ">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10 ">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="How do I calculate radius of a circle?"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Page;
