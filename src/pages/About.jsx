/* eslint-disable no-unused-vars */
import { useLocation } from "react-router-dom"

const About = () => {
  const location = useLocation()
  return (
    <div className="bg-[#3498db] text-white flex justify-center items-center">
      <p className="text-[30px]">This is {location.pathname.split('/')[1]} Page</p>
    </div>
  )
}

export default About
