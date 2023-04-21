import React, { useEffect, useState } from "react";

function App() {
  const [product, setProduct] = useState(null);

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
        if (product && product.additionalImageUrls) {
          console.log(product.additionalImageUrls[0]);
        }

        console.log(data.products[randomIndex]);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Random Clothing Item</h1>
      {product ? (
        <div>
          <img
            src={product.additionalImageUrls}
            alt={product.name}
            style={{ width: "300px" }}
          />
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
