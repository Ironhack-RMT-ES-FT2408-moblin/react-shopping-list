import { useState } from "react"

function AddForm(props) {

  const { setAllProducts } = props

  const [ nameValue, setNameValue ] = useState("")
  const [ priceValue, setPriceValue ] = useState(0)

  const handleNameChange = (event) => {
    console.log(event.target.value)
    let value = event.target.value
    // setNameValue(value.toUpperCase() + "TROL")
    setNameValue(value)
  }

  const handlePriceChange = (event) => {
    setPriceValue(event.target.value)
  }

  const handleAddProduct = (event) => {
    event.preventDefault() // remueve todos los comportamiento predeterminados de este evento
    console.log("añadiendo producto")

    // 1. recopilar el producto a crear
    const newProduct = {
      name: nameValue,
      price: priceValue,
      isPurchased: false // valor inicial que siempre será así al inicio
    }
    console.log(newProduct)
    
    // 2. agregarlo a donde estan todos los productos
    // const clone = [...allProducts]
    // clone.unshift(newProduct)
    // setAllProducts(clone)

    // a las funciones set les puedo pasar una funcion de callback
    setAllProducts( (elValorActualDelEstado) => {
      console.log(elValorActualDelEstado)

      const clone = [...elValorActualDelEstado]
      clone.unshift(newProduct)

      // retornamos lo que queremos que sea el nuevo valor
      return clone
    } )

    // sintaxis muy avanzada de lo mismo que está escrito antes
    // setAllProducts((current) => [newProduct, ...current])

  }

  return (
    <div className="add-form container">
      
      <h2>Add Form</h2>

      <form onSubmit={handleAddProduct}>

        <div>
          <label htmlFor="name">Name: </label>
          <input onChange={handleNameChange} value={nameValue} type="text" name="name"/>
        </div>

        <div>
          <label htmlFor="price">Price: </label>
          <input onChange={handlePriceChange} value={priceValue} type="number" name="price" />
        </div>

        <button>Add</button>

      </form>

    </div>
  )
}

export default AddForm