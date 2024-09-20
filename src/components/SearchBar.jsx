import { useState } from "react"

function SearchBar(props) {

  const { searchValue, setSearchValue } = props

  

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
    // ! nunca tenemos acceso al nuevo valor del estado en la misma secuencia de código donde lo estamos actualizando
    
    // const filteredProducts = allProducts.filter((eachProduct) => {
    //   return eachProduct.name.includes(event.target.value)
    // })
    
    // setFilteredProducts(filteredProducts)

  }

  return (
    <div className="search-bar container">
      
      <h2>Search Bar</h2>
        
      <input onChange={handleSearchChange} value={searchValue} type="text" />

    </div>
  )
}

export default SearchBar