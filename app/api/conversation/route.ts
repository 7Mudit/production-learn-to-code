import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

interface ChatCompletionMessageParam {
  role: string;
  content: string;
}

const instructionMessageForConversation: ChatCompletionMessageParam = {
  role: "system",
  content: "You are an AI conversationalist. Help the user with their queries.",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;

    // google gemini code
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const chat = model.startChat({
      // history: [
      //   {
      //     role: "user",
      //     parts: "Hello, I have 2 dogs in my house.",
      //   },
      //   {
      //     role: "model",
      //     parts: "Great to meet you. What would you like to know?",
      //   },
      // ],
      // Additional configuration as needed
    });

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    // const response = await openai.chat.completions.create({
    //   model: "gpt-3.5-turbo",
    //   messages: [instructionMessageForConversation, ...messages],
    // });
    // console.log("Messages are ", messages);
    const latestMessage = messages[messages.length - 1].parts;
    // console.log("Latest message is ", latestMessage);
    const result = await chat.sendMessage(latestMessage);

    const response = result.response;
    const text = response.text();

    // return NextResponse.json(response.choices[0].message);
    return NextResponse.json(text);
  } catch (err) {
    console.log("Conversation Error", err);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
