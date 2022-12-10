import React from "react";
import { BiListPlus } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/actionCreators.js/productActions";

const ProductCard = ({ product }) => {

  const { pathname } = useLocation();
  const dispatch = useDispatch();
  return (
    <div
      className='shadow-lg rounded-3xl border relative  p-3 flex flex-col text-indigo-900'
      key={product._id}
    >
      {pathname.includes("cart") && <div className="absolute top-2 right-2 rounded-md grid place-items-center h-6 w-6 text-white bg-blue-600 ">
        <p>{product.quantity}</p>
      </div>}
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature) => {
            return <li className='text-sm ' key={feature}>{feature}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
        {pathname.includes("cart") && <button className='bg-yellow-400 rounded-full py-1 px-2 flex justify-around items-center text-red-500 text-bold'
          onClick={() => dispatch(removeFromCart(product))}
        >
          <p>Remove</p>
          <MdDeleteForever size={20} />
        </button>}
        {!pathname.includes("cart") && <button className='bg-orange-500 rounded-full py-1 px-2 flex-1 text-black text-bold'
          onClick={() => dispatch(addToCart(product))}
        >
          Add to cart
        </button>}
        {!pathname.includes("cart") && <button
          title='Add to wishlist'
          className='bg-indigo-500  py-1 px-2 rounded-full'>
          <BiListPlus className='text-white' />
        </button>}
      </div>
    </div>
  );
};

export default ProductCard;
