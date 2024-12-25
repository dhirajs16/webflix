import { Outlet } from "react-router-dom"
import TopNav from "./components/TopNav/TopNav"
import SideNav from "./components/SideNav/SideNav"

const App: React.FC = () => {
  return (
    <>
      <TopNav />
      <SideNav />
      <Outlet />
    </>
  )
}

export default App