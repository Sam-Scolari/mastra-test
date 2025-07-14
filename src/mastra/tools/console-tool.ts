import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const consoleTool = createTool({
      id: 'log-console',
      description: 'Log a message to the console',
      inputSchema: z.object({
        message: z.string().describe('Message to log'),
      }),
      outputSchema: z.object({
        success: z.boolean(),
      }),
      execute: async ({ context }) => {
        console.log(context.message);

        return { success: true };
      },
  });
