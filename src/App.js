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
      console.log(response);
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
    <span className="loading">Loading.....</span>
  ) : (
    <div className="app">
      <Header
        name={data.restaurant.name}
        description={data.restaurant.description}
        picture={data.restaurant.picture}
      />
      <Main categories={data.categories} />
    </div>
  );
}

export default App;
