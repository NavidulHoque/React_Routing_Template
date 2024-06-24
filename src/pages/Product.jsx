/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom"

const Product = () => {
    const location = useParams()
  return (
    <div className="bg-[#3498db] text-white flex justify-center items-center gap-x-3">
      <p className="text-[30px]">This is {location.name}</p>
      <button className="bg-[#34495e] hover:bg-[#2c3e50] py-[5px] px-[10px] rounded-md text-white"><Link to='/'>Go To Home</Link></button>
    </div>
  )
}

export default Product
