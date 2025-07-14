import { MastraClient } from "@mastra/client-js";
import { consoleTool } from "./src/mastra/tools/console-tool";
import z from "zod";

export const mastraClient = new MastraClient({
    baseUrl: "http://localhost:4111",
});

const agent = mastraClient.getAgent("agent");

const result = await agent.generate({
    messages: [
        {
            role: "user",
            content: "Log this is a test!! to the console and respond with the message that was logged",
        },
    ],
    experimental_output: z.object({
        text: z.string().describe("The text response to the prompt"),
    }).describe("The output of the agent"),
    clientTools: {
        logConsole: consoleTool
    }
});

console.log(result);