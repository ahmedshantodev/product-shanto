import React from "react";
import Image from "../layout/Image";
import Heading from "../layout/Heading";
import List from "../layout/List";
import Paragraph from "../layout/Paragraph";
import Button from "../layout/Button";
import { FaShoppingCart } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";

const ProductCard = ({ productImage, productName, productPrice , children , className }) => {
  return (
    <div className={`${className} bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded p-5 mb-4`}>
      <Image
        imageLink={productImage}
        altText={"product-image"}
        className={"w-full"}
      />
      <Heading
        as="h4"
        text={productName}
        className="font-bold hover:underline cursor-pointer"
      />
      <List
        className={
          " list-disc list-inside text-[#666666] text-[13px] mt-5 border-b-[1px] pb-2.5 border-gray-300"
        }
      >
        {children}
      </List>
      <Paragraph
        text={productPrice}
        className={"text-center font-bold text-cus-red text-[20px] mt-5"}
      />
      <Button
        icon={<FaShoppingCart />}
        iconAlignment={"left"}
        text={"Buy Now"}
        className={
          "text-cus-blue mt-3 py-2 rounded bg-cus-blue/30 w-full flex justify-center items-center gap-x-2.5 cursor-pointer hover:text-white hover:bg-cus-blue"
        }
      />
      <Button
        icon={<CiSquarePlus className="text-[24px]" />}
        iconAlignment={"left"}
        text={"Buy Now"}
        className={
          "flex text-[20px] justify-center w-full mt-3 items-center gap-x-2.5 cursor-pointer text-cus-gray"
        }
      />
    </div>
  );
};

export default ProductCard;
