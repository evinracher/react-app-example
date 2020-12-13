import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import { useAxiosGet } from '../Hooks/HttpRequests';

function Products() {
  const { id } = useParams();
  const url = `https://5fd56e9366125e00165004ba.mockapi.io/products/${id}`;
  
  let product = useAxiosGet(url);

  if (product.error) {
    return (<p>There was an error. Please try again later.</p>)
  }

  if (product.loading) {
    return (<Loader />)
  }

  if (product.data) {
    return (
      <div>
        <h1 className="font-bold text-2xl mb-3">{product.data.name}</h1>
        <div>
          <img className="h-64" src={product.data.images[0].imageUrl} alt={product.data.name} />
        </div>
        <div className="font-bold text-xl mb-3">
          $ {product.data.price}
        </div>
        <div>
          {product.data.description}
        </div>
      </div>

    )
  }

  return (<div></div>)
}

export default Products;