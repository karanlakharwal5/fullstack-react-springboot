import products from "../data/Products";
import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";

export default function Home() {
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
