
import { QueryClient } from "@tanstack/react-query";

// Configure retry behavior for all queries.
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Retry a failed request one time.
      retry: 1,

      // Increase the delay before each retry.
      retryDelay: (attempt) =>
        Math.min(1000 * 2 ** attempt, 30000),
    },
  },
});
