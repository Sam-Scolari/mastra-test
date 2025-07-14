import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const logClient = createTool({
      id: 'log-client',
      description: 'Log a message to the client',
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
