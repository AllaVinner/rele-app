import { QueryClient, QueryClientProvider } from "react-query"
import AppRoot from "./AppRoot"
import AppTheme from "./AppTheme"


const queryClient = new QueryClient();

function App() {
  return (
    <>
      <AppTheme>
        <QueryClientProvider client={queryClient}>
          <AppRoot />
        </QueryClientProvider>
      </AppTheme>
    </>
  )
}

export default App
