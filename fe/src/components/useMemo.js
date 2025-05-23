import { useMemo, useRef, useState } from "react";


const UseMemo = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);

  const nameRef = useRef();

  const handleSubmit = () => {
    setProducts(prev => ([...prev, {
      name,
      price: +price,
    }]))

    setName('')
    setPrice('')
    nameRef.current.focus();
  }

  const total = useMemo(() => {
    const result = products.reduce((sum, product) => {
      console.log("result");

      return sum + product.price;
    }, 0);

    return result;
  }, [products]);

  return (
    <>
      <div style={{padding: '10px 32 px'}}>
        <input 
          ref={nameRef}
          value={name}
          placeholder="Enter name..."
          onChange={(e) => setName(e.target.value)}
        />
        <br/>
        <input 
          value={price}
          placeholder="Enter price..."
          onChange={(e) => setPrice(e.target.value)}
        />
        <br/>
        <button onClick={handleSubmit}>Add</button>
        <br/>
        Total:{total}
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product.name} - {product.price}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default UseMemo;