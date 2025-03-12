import { Outlet } from "react-router-dom"
import Menu from "../components/Menu"

import'./MainLayout.scss'

const MainLayout = () => {
  return (
    <div className={"main-layout"}>
      <Menu/>
      <Outlet/>
    </div>
  )
}

export default MainLayout
