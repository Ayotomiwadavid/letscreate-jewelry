import React, { useEffect, useState } from "react";
import { products } from "../../../data";
import { useParams } from "react-router-dom";
import Add_to_cart from "./add_to_cart";

export default function ProductDisplay() {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const [imageSrc, setImageSrc] = useState(0);

  useEffect(() => {
    // Convert productId to a number if necessary
    const id = parseInt(productId, 10);
    const fetchedProduct = products.find((prod) => prod.id === id);
    setProduct(fetchedProduct);
  }, [productId]);

  // Handlers for incrementing and decrementing quantity
  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleImageChange = (index) =>{
    setImageSrc(index)
  }

  return (
    <div>
      <section className="product-display p-5">
        {product ? (
          <div className="grid grid-cols-1 md:grid-cols-2 md:m-10 md:mx-5">
            <div className="col w-full flex flex-col items-center justify-center">
              <div className="image-display w-full">
                <img
                  src={product.image[imageSrc]}
                  className=" p-4 w-[80%] h-[400px]"
                  alt=""
                />
              </div>
              <div className="w-full px-4 flex gap-4 items-center justify-start">
                {product.image.map((img, index) => (
                  <img key={index} id={index} src={img} onClick={() => handleImageChange(index)} alt="Product Image" width="100" className="shadow-md cursor-pointer"/>
                ))}
              </div>
            </div>

            <div className="col">
              <div className="content">
                <h1 className="text-3xl uppercase pb-4">{product.title}</h1>
                <p className="price text-gray-500 text-2xl">${product.price}</p>
                <br />
                <p className="price text-gray-500 text-lg pb-4">
                  {product.category}
                </p>

                <h1 className="text-gray-900 text-2xl mt-0">
                  About This Product
                </h1>
                <p className="description text-gray-500 text-md mt-6">
                  {product.description}
                </p>

                <div className="w-full flex flex-col items-start justify-center py-3 gap-3 px-1">
                  <p className="font-bold text-xl capitalize font-serif ">category: <span className="font-serif font-light text-lg capitalize">{product.Category}</span></p>
                  <p className="font-bold text-xl capitalize font-serif ">Tags: <span className="font-serif font-light text-lg capitalize">{product.Tags}</span></p>
                </div>

                <div className="flex gap-10 items-center my-6">
                  <div className="border w-20 flex justify-center items-center py-1 px-auto">
                    <button
                      className="text-gray-900 font-semibold px-1.5"
                      onClick={handleDecrement}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={quantity}
                      readOnly
                      className="w-8 border-none text-center"
                    />
                    <button
                      className="text-gray-900 font-semibold px-1.5"
                      onClick={handleIncrement}
                    >
                      +
                    </button>
                  </div>

                  <div className="add-to-cart">
                    <Add_to_cart quantity={quantity} product={product} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="flex justify-center h-screen items-center">
            Loading...
          </p>
        )}
      </section>
    </div>
  );
}
