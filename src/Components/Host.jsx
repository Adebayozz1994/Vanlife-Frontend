import { Outlet } from "react-router-dom"
import Hostlink from "./Hostlink"



const Host = () => {

  return (
    <section>
      <Hostlink/>
      <Outlet/>
    </section>
  )
}

export default Host