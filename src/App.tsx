import { Outlet } from "react-router-dom"

const App: React.FC = () => {
  return (
    <>
      <h1 className="text-2xl">Nav</h1>
      <Outlet />
    </>
  )
}

export default App