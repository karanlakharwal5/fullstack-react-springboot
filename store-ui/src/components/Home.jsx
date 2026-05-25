import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import apiClient from "../api/apiClient";

export default function Home() {
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
  } catch (error) {}
}
