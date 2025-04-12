import AppBase from "./AppBase"
import AppNavbar from "./AppNavbar"
import AppTheme from "./AppTheme"

function App() {
  return (
    <AppTheme>
      <AppBase>
        <AppNavbar>
        </AppNavbar>
        <div style={{ color: "red" }}> asdf </div>
      </AppBase>
    </AppTheme>
  )
}

export default App
