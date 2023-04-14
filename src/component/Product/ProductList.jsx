import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Proxy set for /api
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div>
      <Link to="/">Dashboard</Link>
      <h3>Products ({products.length})</h3>
      {products.length ? (
        <ol>
          {products.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ol>
      ) : null}
    </div>
  );
}
