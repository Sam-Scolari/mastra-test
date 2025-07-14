import { openai } from '@ai-sdk/openai';
import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';
import { LibSQLStore } from '@mastra/libsql';
import { logServer } from '../tools/logServer';

export const agent = new Agent({
  name: 'Agent',
  instructions: 'You are a helpful assistant that can execute tools upon request.',
  model: openai('gpt-4.1'),
  tools: {
    logServer,
  },
  memory: new Memory({
    storage: new LibSQLStore({
      url: 'file:../mastra.db', // path is relative to the .mastra/output directory
    }),
  }),
});
