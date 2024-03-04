import React, { useState } from "react";
import Heading from "../components/layout/Heading";
import Paragraph from "../components/layout/Paragraph";
import Container from "../components/layout/Container";
import Flex from "../components/layout/Flex";
import Select from "../components/layout/Select";
import Option from "../components/layout/Option";
import ProductCard from "../components/layout/ProductCard";

import laptopImage from "../../src/assets/laptop-1.webp";
import PaginatedItems from "../components/layout/PaginatedItems";

const Product = () => {
  const [paginatioinItemsShow, setPaginatioinItemsShow] = useState(12);
  return (
    <section className="bg-[#F2F4F8]">
      <div className="py-5 border-b-2 border-gray-200 bg-white">
        <Container>
          <Heading
            text="hp laptop price in bangladesh"
            className="text-[22px] text-cus-blue capitalize mt-5 mb-2 font-semibold"
          />
          <Paragraph
            text={
              "HP Laptop Price in Bangladesh starts from BDT 38,000 to BDT 185,000 depending on series and configuration. Buy Latest HP Laptop for home and office use from Star Tech online shop. Browse below and order yours now!"
            }
            className={"text-[14px]"}
          />
        </Container>
      </div>
      <Container>
        <Flex className={"justify-between gap-x-5"}>
          <div className="bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] w-1/4 mt-5 rounded-lg">
            sidebar
          </div>
          <div className="w-3/4 ">
            <Flex className="justify-between bg-white items-center py-3 px-2.5 w-full mt-5 border border-gray-300 rounded-lg">
              <Paragraph text={"HP"} />
              <Flex className={"items-center gap-x-4"}>
                <Flex className={"items-center gap-x-2.5"}>
                  <Paragraph text={"Show"} className={"text-[#666666]"} />
                  <Select
                    onChange={(e) => setPaginatioinItemsShow(e.target.value)}
                    className={"bg-[#F1F3F5] px-1 py-1 rounded"}
                  >
                    <Option text={"12"} value={"12"} />
                    <Option text={"24"} value={"24"} />
                    <Option text={"48"} value={"48"} />
                  </Select>
                </Flex>
                <Flex className={"items-center gap-x-2.5"}>
                  <Paragraph text={"Sort By"} className={"text-[#666666]"} />
                  <Select className={"bg-[#F1F3F5] rounded px-1 py-1"}>
                    <Option text={"Default"} value={"Default"} />
                    <Option text={"Price (High to Low"} value={"highToLow"} />
                    <Option text={"Price (Low to High"} value={"lowToHigh"} />
                  </Select>
                </Flex>
              </Flex>
            </Flex>
            <div className="mt-5 ">
              <PaginatedItems itemsPerPage={paginatioinItemsShow} />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Product;
