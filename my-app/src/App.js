import React, { useEffect, useState } from "react";

function App() {
  const [product, setProduct] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "b26cfd607bmshde566492f02abf2p1c0a23jsn1608f6ffd82d",
          "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(
          "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=50&country=US&currency=USD&sort=freshness&sizeSchema=US&lang=en-US",
          options
        );
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.products.length);
        setProduct(data.products[randomIndex]);
        
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
console.log(product)
  return (
    <div>
      <h1>Random Clothing Item</h1>
      {product ? (
        <div>
          {product.imageUrl && (
            <img
              src={`https://${product.imageUrl}`}
              alt={product.name}
              style={{ width: "300px", display: imageLoaded ? "block" : "none" }}
              onLoad={handleImageLoad}
            />
          )}
          <h2>{product.name}</h2>
          <p>Price: ${product.price.current.value}</p>
          <a
            href={`https://www.asos.com/${product.url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on ASOS
          </a>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;