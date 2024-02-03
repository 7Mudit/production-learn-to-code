"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { Inter } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const noto_sans2 = Noto_Sans({ weight: "600", subsets: ["latin"] });
const inter = Inter({ weight: "400", subsets: ["latin"] });
const navbarLinks = [
  { href: "/about", title: "About", id: "1" },
  { href: "/gemini", title: "Gemini", id: "2" },
  { href: "/upsolving", title: "Upsolving", id: "3" },
  { href: "/nptel-notes", title: "NPTEL", id: "4" },
  { href: "/contact", title: "Contact", id: "5" },
  { href: "/privacy-policy", title: "Privacy Policy", id: "6" },
  { href: "/terms-conditions", title: "T & C", id: "6" },
  { href: "/refund-policy", title: "Refunds & Cancellation", id: "7" },
];
const Footer = () => {
  const formSchema = z.object({
    message: z.string().min(2).max(50),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const loadingToast = toast.loading("Sending message...");
    try {
      // Call the API with form values
      const response = await fetch(
        "https://ltc-app-apis.onrender.com/api/v1/add-feedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      const data = await response.json(); // Assuming the API responds with JSON
      // Dismiss the loading toast regardless of the response
      toast.dismiss(loadingToast);
      // Check for successful response
      if (response.ok) {
        toast.success("Thanks for feedback 😊");

        // Reset form values
        form.reset({
          message: "",
        });
      } else {
        // Handle non-successful responses
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("An error occurred. Please try again later.");
    }
  }
  return (
    <div
      className={`flex flex-col py-[50px] justify-center gap-[50px] ${noto_sans2.className}`}
    >
      <div className="flex flex-row w-full items-center justify-start gap-[20px]">
        <p className="text-black dark:text-white text-lg font-sans">
          Follow me
        </p>
        <Link href="https://www.instagram.com/learntocode_official/">
          <FaInstagram
            size={24}
            className="text-pure-greys-200 dark:hover:text-white  hover:text-black duration-300 hover:scale-110 cursor-pointer"
          />
        </Link>
        <Link href="https://github.com/7Mudit">
          <FaGithub
            size={24}
            className="text-pure-greys-200 dark:hover:text-white hover:text-black duration-300 hover:scale-110 cursor-pointer"
          />
        </Link>
        <Link href="https://www.youtube.com/@learn_to_code10">
          <FaYoutube
            size={24}
            className="text-pure-greys-200 dark:hover:text-white  hover:text-black duration-300 hover:scale-110 cursor-pointer"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/mudit-kapoor-1b7582227/">
          <LuLinkedin
            size={24}
            className="text-pure-greys-200 dark:hover:text-white  hover:text-black duration-300 hover:scale-110 cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-start gap-[10px] py-10 border-t-2 border-b-2 border-pure-greys-200 ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex-1 items-center justify-center relative flex flex-col md:flex-row gap-[30px]"
          >
            <IoMailOutline
              size={24}
              className="absolute text-pure-greys-200 left-4 top-[20%] md:top-[50%] translate-y-[-50%]"
            />
            <div className="w-full">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your message"
                        className="form-style w-full h-[50px] rounded-md   font-sans font-semibold !bg-transparent border !text-pure-greys-300 !pl-[60px] sm:placeholder:text-[16px] placeholder:text-[12px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className="py-2 px-8 font-sans transition-all font-semibold dark:bg-white dark:text-black rounded-md duration-300 hover:scale-110"
            >
              Submit
            </Button>
          </form>
        </Form>

        <p className="text-pure-greys-400 text-sm font-sans">
          I accept Learn To Code&apos;s Terms and Conditions and acknowledge
          that my information will be used in accordance with Learn To
          Code&apos;s{" "}
          <Link
            href="/privacy-policy"
            className="underline underline-offset-2 text-blue-100"
          >
            Privacy Policy.
          </Link>
        </p>
      </div>
      <div className="flex flex-row items-center justify-start gap-[10px]">
        <div className="flex flex-col items-start justify-start sm:flex-row text-pure-greys-200 sm:items-center sm:justify-center gap-5">
          <Link href="/" className="font-sans">
            <h1 className="text-xl text-black dark:text-white ">
              Learn To Code
            </h1>
          </Link>
          {navbarLinks.map((link) => (
            <div className="text-pure-greys-200" key={link.id}>
              <Link
                href={`${link.href}`}
                className="hover:underline hover:underline-offset-[20px] hover:cursor-pointer decoration-caribbeangreen-300"
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
