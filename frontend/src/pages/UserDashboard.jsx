import React, { useEffect } from 'react'
import { getAllProductsApi } from '../api/Api'

const UserDashboard = () => {
  const [products, setProducts] = React.useState([])
  useEffect(() => {
    const getallProducts = async () => {
      try {
        const response = await getAllProductsApi()
        if (response.data.success) {
          setProducts(response.data.products)
        } else {
          console.error('Failed to fetch products:', response.data.message)
          return  
        }
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    getallProducts()
  }, [])
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-green-600 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserDashboard
