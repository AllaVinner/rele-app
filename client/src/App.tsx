import { QueryClient, QueryClientProvider } from "react-query"
import AppBase from "./AppBase"
import AppTheme from "./AppTheme"


const queryClient = new QueryClient();

function App() {
  return (
    <>
      <AppTheme>
        <QueryClientProvider client={queryClient}>
          <AppBase>
          </AppBase>
        </QueryClientProvider>
      </AppTheme>
    </>
  )
}

export default App
