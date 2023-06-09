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
import Top from "../Top/Top";
import Bottom from "../Bottom/Bottom";
import Shoes from "../Shoes/Shoes";
import "./App.css";

function App() {
  const [top, setTop] = useState({ imageUrl: "", name: "", price: {current:{value:0}} });
  const [bottom, setBottom] = useState({ imageUrl: "", name: "", price: {current:{value:0}}});
  const [shoes, setShoes] = useState({ imageUrl: "", name: "", price: {current:{value:0}} });
  const [topReload, setTopReload] = useState(false);
  const [bottomReload, setBottomReload] = useState(false);
  const [shoesReload, setShoesReload] = useState(false);

  useEffect(() => {
    // set options for fetch
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "09936077c8msh07545fa1753d725p199eb5jsn572c671425ea",
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    // fetch top data
    async function fetchTopData() {
      const item = "t-shirt";
      const response = await fetch(
        `https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=50&country=US&currency=USD&sort=freshness&sizeSchema=US&lang=en-US&q=${item}`,
        options
      );
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.products.length);
      setTop(data.products[randomIndex]);
    }

    fetchTopData();
  }, [topReload]);

  useEffect(() => {
    // set options for fetch
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "09936077c8msh07545fa1753d725p199eb5jsn572c671425ea",
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    // fetch bottom data
    async function fetchBottomData() {
      const item = "trousers";
      const response = await fetch(
        `https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=50&country=US&currency=USD&sort=freshness&sizeSchema=US&lang=en-US&q=${item}`,
        options
      );
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.products.length);
      setBottom(data.products[randomIndex]);
    }

    fetchBottomData();
  }, [bottomReload]);

  useEffect(() => {
    // set options for fetch
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "09936077c8msh07545fa1753d725p199eb5jsn572c671425ea",
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    // fetch shoes data
    async function fetchShoesData() {
      const item = "shoes";
      const response = await fetch(
        `https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=50&country=US&currency=USD&sort=freshness&sizeSchema=US&lang=en-US&q=${item}`,
        options
      );
      const data = await response.json();
      console.log(data);
      const randomIndex = Math.floor(Math.random() * data.products.length);
      setShoes(data.products[randomIndex]);
    }

    fetchShoesData();
  }, [shoesReload]);

  function handleClickTop() {
    setTopReload(!topReload);
  }

  function handleClickBottom() {
    setBottomReload(!bottomReload);
  }

  function handleClickShoes() {
    setShoesReload(!shoesReload);
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#">Brand 1</a>
          </li>
          <li>
            <a href="#">Brand 2</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>

      <h1>Mix Match Me</h1>
      <div className="container">
        <Top
          url={`https://${top.imageUrl}`}
          alt={top.name}
          onClick={handleClickTop}
          website={top.url}
          name={top.name}
          price={top.price.current.value}
        />
        <Bottom
          url={`https://${bottom.imageUrl}`}
          alt={bottom.name}
          onClick={handleClickBottom}
          website={bottom.url}
          name={bottom.name}
          price={bottom.price.current.value}
        />
        <Shoes
          url={`https://${shoes.imageUrl}`}
          alt={shoes.name}
          onClick={handleClickShoes}
          website={shoes.url}
          name={shoes.name}
          price={shoes.price.current.value}
        />
      </div>

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
