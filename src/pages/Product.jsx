import { useParams } from "react-router-dom"

const Product = () => {
    const location = useParams()
  return (
    <div className="bg-[#3498db] text-white flex justify-center items-center">
      <p className="text-[30px]">This is {location.id}</p>
    </div>
  )
}

export default Product
