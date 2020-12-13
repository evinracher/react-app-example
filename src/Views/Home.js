import React from 'react';
import HelloWorld from '../Components/HelloWorld';
import ProductCard from '../Components/ProductCard';
import Loader from '../Components/Loader';
import { useAxiosGet } from '../Hooks/HttpRequests';

function Home() {
  const url = `https://5fd56e9366125e00165004ba.mockapi.io/products?page=1&limit=10`;

  let products = useAxiosGet(url);

  let content = null;

  if (products.error) {
    content = (<p>There was an error. Please try again later.</p>)
  }

  if (products.loading) {
    content = (<Loader />)
  }

  if (products.data) {
    content = (<div>
      {products.data.map((product, key) => {
        return (<ProductCard {...{ product, key }} />)
      })}
    </div>)
  }

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">
        Bests sellers
      </h1>
      <HelloWorld name="Pedro" />
      {content}
    </div>
  )
}

export default Home;