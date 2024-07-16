import React, { useEffect, useState } from "react";
import ProductCard from "../shop/productCard";
import fetchAllProducts from "../../../utils/Products/GetAllProducts";

function NewArrival() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const allProducts = await fetchAllProducts();
        setProducts(allProducts);
      } catch (error) {
        console.error("Error fetching Products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, []);

  return (
    <section className="bg-opacity-20  text-primary py-6">
      <div className="flex flex-col text-center mx-auto mt-8 font-bold text-[30px] items-center justify-center">
        <div>NEW ARRIVAL</div>
        <img
          className="w-[220px] h-[165px] mt-[-5rem] items-center justify-center"
          src="/assets/icons/categories_ic.svg"
        />
      </div>

      <>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 md:mx-16">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {isLoading ? (
          <div className="flex gap-3 my-12 justify-center items-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-4 border-black"></div>
            Loading...
          </div>
        ) : null}
      </>
    </section>
  );
}

export default NewArrival;
