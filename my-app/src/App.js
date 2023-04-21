/*Plan

Goal: Mix and Match App for clothing 
1. Three buttons:
   - TopButton
   - BottomButton
   - ShoesButton
2. Each button will bring a random clothing item respectively, filtered by: 
   - 
3. Create three children components: <Top />, <Bottom />, <Shoe s/>
4. In the <App />, we fentch all the data from the API,
5. Pass down the {props} to the three children components
6. {props} = data.___.top.imageURL <-check this with the API 
7. CSS


*/

import React, { useEffect, useState } from "react";
import Top from './Top.js';
import Bottom from './Bottom.js';
import Shoes from './Shoes.js';

function App() {
  const [product, setProduct] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [index, setIndex] = useState(0);

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

        function handleClickTop () {
          const randomIndex = Math.floor(Math.random() * data.products.length);
          setIndex (randomIndex);
        }
        
        function handleClickBottom () {
          const randomIndex = Math.floor(Math.random() * data.products.length);
          setIndex (randomIndex);
        }
        
        function handleClickShoes () {
          const randomIndex = Math.floor(Math.random() * data.products.length);
          setIndex (randomIndex);
        }
        
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

// function handleClickTop () {
//   const randomIndex = Math.floor(Math.random() * data.products.length);
//   setIndex (randomIndex);
// }

// function handleClickBottom () {
//   const randomIndex = Math.floor(Math.random() * data.products.length);
//   setIndex (randomIndex);
// }

// function handleClickShoes () {
//   const randomIndex = Math.floor(Math.random() * data.products.length);
//   setIndex (randomIndex);
// }

  return (
    <div>
      <h1>Random Clothing Item</h1>
      <Top topUrl={`https://${product.imageUrl}`} topAlt={product.name}/>
      <Bottom bottomUrl={`https://${product.imageUrl}`} bottomAlt={product.name}/>
      <Shoes shoesUrl={`https://${product.imageUrl}`} shoesAlt={product.name}/>
      {/* {product ? (
        <div>
          {product.imageUrl && (
            <img
              src={`https://${product.imageUrl}`}
              alt={product.name}
              style={{ width: "300px", display: imageLoaded ? "block" : "none" }}
              onLoad={handleImageLoad}
            />
          )} */}
          {/* <h2>{product.name}</h2>
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
      )} */}
    </div>
  );
}

export default App;