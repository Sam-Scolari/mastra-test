import { MastraClient } from "@mastra/client-js";
import { logClient } from "./src/mastra/tools/logClient";
import z from "zod";

export const mastraClient = new MastraClient({
    baseUrl: "http://localhost:4111",
});

const agent = mastraClient.getAgent("agent");

const result = await agent.generate({
    messages: [
        {
            role: "user",
            content: "Log this is a test!! to the client and respond with the message that was logged",
        },
        // {
        //     role: "user",
        //     content: "Log this is a test!! to the server and respond with the message that was logged",
        // },
    ],
    experimental_output: z.object({
        text: z.string().describe("The text response to the prompt"),
    }).describe("The output of the agent"),
    clientTools: {
        logClient
    }
});

console.log(result);