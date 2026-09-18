
// import product from '../../data/Data'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
    
  return (
    <div key={product.productId} className='w-full h-50 bg-blue-400'>
      <div className='flex flex-col justify-between'>
        <h1>{product.productName}</h1>

        <Link className='text-3xl' to={`/product/${product.productId}`}> View details</Link>
      </div>
    </div>
  )
}

export default ProductCard


