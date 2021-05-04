import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main";
const url = "https://baf-deliveroo-backend.herokuapp.com/";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span className="loading">Loading data.....</span>
  ) : (
    <div className="app">
      <Header
        name={data.restaurant.name}
        description={data.restaurant.description}
        picture={data.restaurant.picture}
      />
      <Main categories={data.categories} />
      <a href="#aside" id="go-to-cart">
        Go to
        <br />
        cart
      </a>
    </div>
  );
}

export default App;
