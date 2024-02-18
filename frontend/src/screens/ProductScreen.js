import { useParams } from 'react-router-dom';

function ProductScreen() {
  const params = useParams();
  const { slug } = params;
  //alternative
  //const { slug } = useParams();

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}

export default ProductScreen;
