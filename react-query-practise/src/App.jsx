import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </QueryClientProvider>
  );
}

export default App;
