"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import Heading from "../about/Heading";
const center = {
  lat: 30.7333,
  lng: 76.7794,
};

const ContactUsForm = () => {
  const containerStyle = {
    width: "90vw",
    height: "550px",
  };
  const formSchema = z.object({
    userName: z.string().min(2).max(50),
    email: z.string().email(),
    message: z.string().min(10).max(1000),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const loadingToast = toast.loading("Sending message...");
    try {
      // Call the API with form values
      const response = await fetch(
        "https://gemini-backend-ls9c.onrender.com/api/v1/send-email",
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
      if (response.ok && data.success) {
        toast.success("Message successfully sent!");

        // Reset form values
        form.reset({
          userName: "",
          email: "",
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
    <>
      <div
        className={`${inter.className} max-w-maxContent flex px-4 flex-col gap-[50px] mx-auto mt-[50px]`}
      >
        <div className="flex items-center mt-[50px]  flex-col lg:flex-row lg:gap-0 gap-[20px]">
          <LoadScript googleMapsApiKey="AIzaSyCwCcN6c496MXlMUk3a4balxosMQnsHaHM">
            <GoogleMap
              zoom={12}
              center={center}
              mapContainerClassName="rounded-xl dark:shadow-white shadow-2xl"
              mapContainerStyle={containerStyle}
            >
              <MarkerF position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
        <Heading as="h3" size="md">
          Send us your query
        </Heading>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-extrabold">Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-extrabold">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-extrabold">Your Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your message"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              // variant={"outline"}
              className="hover:cursor-pointer bg-light-850 text-dark-500 dark:bg-dark-500 hover:bg-dark-500 hover:text-light-900 dark:border-white border dark:hover:bg-light-900 dark:hover:text-dark-500 dark:text-light-900 hover:scale-105 py-4 px-8  transition-all"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default ContactUsForm;
