import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import apiClient from "../api/apiClient";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const products = useLoaderData(); //The useLoaderData hook is used to access the data that was loaded by the loader function defined for this route. In this case, it will contain the list of products fetched from the API. The products variable can then be used to render the product listings on the page.
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <PageHeading title="Explore Stickers!">
        Add a touch of creativity to your space with our wide range of fun and unique stickers. Perfect for any
        occassion.
      </PageHeading>
      <ProductListings products={products} />
    </div>
  );
}

export async function productsLoader() {
  try {
    const response = await apiClient.get("/products"); //Axios get request to the /products endpoint of the API. This will return a promise that resolves to the response from the server, which should contain the list of products.
    return response.data; //The response data is then stored in the products state variable using the setProducts function. This will trigger a re-render of the component, allowing the product listings to be displayed on the page.
  } catch (error) {
    throw new Response(error.message || "Failed to fetch products. Please atry again", { status: error.status || 500 }); //If there is an error during the API request, a new Response object is thrown with a message indicating that the products failed to load and a status code of 500 (Internal Server Error). This will allow the error to be handled by the error handling mechanism defined in the routing configuration, such as displaying an error page or showing an error message to the user.
  }
}
