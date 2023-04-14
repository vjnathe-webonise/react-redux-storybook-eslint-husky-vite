import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="login">Login</Link>
      <br />
      <Link to="product">Products</Link>
    </div>
  );
}
