import React from "react";
import Container from "../layout/Container";
import Flex from "../layout/Flex";
import Heading from "../layout/Heading";
import Paragraph from "../layout/Paragraph";
import Image from "../layout/Image";
import Button from "../layout/Button";
import Input from "../layout/Input";
import logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { GoGift } from "react-icons/go";
import { MdElectricBolt } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";

const TopBar = () => {
  return (
    <section className="bg-[#081621] py-3">
      <Container>
        <Flex className={"items-center justify-between"}>
          <picture>
            <Image
              imageLink={logo}
              altText={"startech logo"}
              className={"w-[120px] cursor-pointer"}
            />
          </picture>
          <div className="w-[580px] relative">
            <Input
              type={"text"}
              placeholder={"Search"}
              className={"w-full py-3 pl-4 pr-8 rounded-md outline-none"}
            />
            <FaSearch className=" absolute top-2/4 -translate-y-2/4 right-2.5" />
          </div>
          <Flex className={"gap-x-5"}>
            <Flex className={"gap-x-2.5 items-center cursor-pointer"}>
              <GoGift className="text-cus-red text-[30px]" />
              <div>
                <Heading
                  as="h5"
                  text="Offers"
                  className={"text-white font-poppins text-[15px] capitalize"}
                />
                <Paragraph
                  text={"Best Offers"}
                  className={"text-white font-poppins text-[11px] capitalize"}
                />
              </div>
            </Flex>
            <Flex className={"gap-x-2.5 items-center cursor-pointer"}>
              <MdElectricBolt className="text-cus-red text-[30px]" />
              <div>
                <Heading
                  as="h5"
                  text="17th deals"
                  className={"text-white font-poppins text-[15px] capitalize"}
                />
                <Paragraph
                  text={"special deals"}
                  className={"text-white font-poppins text-[11px] capitalize"}
                />
              </div>
            </Flex>
            <Flex className={"gap-x-2.5 items-center cursor-pointer"}>
              <MdAccountCircle className="text-cus-red text-[30px]" />
              <div>
                <Heading
                  as="h5"
                  text="account"
                  className={"text-white font-poppins text-[15px] capitalize"}
                />
                <Paragraph
                  text={"register or login"}
                  className={"text-white font-poppins text-[11px] capitalize"}
                />
              </div>
            </Flex>
          </Flex>
          <Button
            text={"PC Builder"}
            className={
              "rounded-lg py-2.5 px-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500"
            }
          />
        </Flex>
      </Container>
    </section>
  );
};

export default TopBar;
