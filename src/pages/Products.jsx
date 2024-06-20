/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Products  = () => {
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()
  
  function handleSubmit(e) {
    e.preventDefault()
    navigate(`/products/${inputValue}`)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#3498db] text-[30px] flex justify-center items-center gap-x-4">

      <input className="p-[5px] rounded-md outline-none" type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} autoFocus />

      <button className="bg-[#34495e] hover:bg-[#2c3e50] py-[5px] px-[10px] rounded-md text-white" type="submit">Search</button>

    </form>
  )
}

export default Products 
