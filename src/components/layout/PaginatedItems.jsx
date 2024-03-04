import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import ProductCard from "../layout/ProductCard";
import laptopImage from "../../assets/laptop-1.webp";
import Paragraph from "./Paragraph";
import Listitem from "./Listitem";

import { productDetails } from "../../demoData/productInfo";

const items = [...productDetails];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className="w-[24%]">
            <ProductCard
              productImage={item.productImage}
              productName={item.productName}
              productPrice={item.productPrice}
            >
              {item.productInfo &&
                item.productInfo.map((item) => (
                  <Listitem>{item.info}</Listitem>
                ))}
            </ProductCard>
          </div>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex flex-wrap justify-between mb-5">
        <Items currentItems={currentItems} />
      </div>
      <div className="flex justify-between items-center py-6 border-b-[1px] border-t-[1px] border-gray-200 mb-10">
        <ReactPaginate
          previousLinkClassName="hover:bg-cus-red hover:text-white px-3 py-1 rounded hover:underline"
          previousLabel="PREV"
          breakLabel="..."
          breakClassName="hidden"
          nextLabel="NEXT"
          nextLinkClassName=" hover:bg-cus-red hover:text-white px-3 py-1 rounded hover:underline"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={0}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName="pagination flex items-center gap-x-2.5"
          activeLinkClassName="bg-[#ef4a23] px-3 py-1 rounded text-white"
          pageLinkClassName="px-3 py-1 rounded bg-white hover:bg-cus-red hover:text-white"
        />
        <Paragraph
          text={`Showing ${itemOffset + 1} to ${endOffset} of ${
            items.length
          } (${pageCount} Pages)`}
        />
      </div>
    </>
  );
}

export default PaginatedItems;
