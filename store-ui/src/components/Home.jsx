import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import apiClient from "../api/apiClient";
import { useState, useEffect, use } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Run once when the component mounts
  //Mounting is the process of creating and inserting a component into the DOM. When a component is mounted, it goes through several lifecycle phases, including initialization, rendering, and finally being added to the DOM. During this process, you can perform actions such as fetching data, setting up event listeners, or initializing state. The useEffect hook with an empty dependency array ensures that the effect runs only once after the initial render, making it ideal for tasks that should only happen when the component is first added to the DOM.
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true); //Before making the API call, the loading state is set to true to indicate that data is being fetched. This can be used to show a loading spinner or message in the UI while the data is being retrieved.
      const response = await apiClient.get("/products"); //Axios get request to the /products endpoint of the API. This will return a promise that resolves to the response from the server, which should contain the list of products.
      setProducts(response.data); //The response data is then stored in the products state variable using the setProducts function. This will trigger a re-render of the component, allowing the product listings to be displayed on the page.
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to fetch products. Please try again.",
      ); //If there is an error during the API call, the catch block will set the error state variable with a message. If the error has a response from the server, it will use that message; otherwise, it will use a generic error message.
    } finally {
      setLoading(false); //Finally, the loading state is set to false to indicate that the data fetching process has completed, regardless of whether it was successful or if an error occurred. This allows the UI to update accordingly, such as hiding a loading spinner or showing an error message.
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl font-semibold">Loading products..</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl font-semibold text-red-500">
          Error: {error}
        </span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <PageHeading title="Explore Stickers!">
        Add a touch of creativity to your space with our wide range of fun and
        unique stickers. Perfect for any occassion.
      </PageHeading>
      <ProductListings products={products} />
    </div>
  );
}
