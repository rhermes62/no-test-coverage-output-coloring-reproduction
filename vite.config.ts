import { defineConfig } from 'vite-plus';

export default defineConfig({
  test: {
    include: ['test/**/*.test.ts'],
    coverage: {
      enabled: true,
      provider: 'v8',
      // skipFull: false keeps 100%-covered files in the table so green rows show up.
      reporter: [['text', { skipFull: false }]],
      include: ['src/**/*.ts'],
      all: true,
    },
  },
});
