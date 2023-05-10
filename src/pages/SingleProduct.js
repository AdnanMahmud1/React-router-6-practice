import { Link,useParams } from 'react-router-dom';


const SingleProduct = () => {
  const {productId} = useParams();

  return (
    <section className='section product'>
      <h4>single product code {productId}</h4>
      <Link to="/products">back to all products</Link>
    </section>
  );
};

export default SingleProduct;
