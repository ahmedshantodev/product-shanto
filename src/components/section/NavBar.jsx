import React from "react";
import Container from "../layout/Container";
import Flex from "../layout/Flex";

const Navbar = () => {
  let NameMenu = [
    { id: 0, name: "desktop" },
    { id: 1, name: "laptop" },
    { id: 3, name: "components" },
    { id: 4, name: "monitor" },
    { id: 5, name: "ups" },
    { id: 6, name: "phone" },
    { id: 7, name: "tablet" },
    { id: 8, name: "office equipment" },
    { id: 9, name: "camera" },
    { id: 10, name: "security" },
    { id: 11, name: "networking" },
    { id: 12, name: "software" },
    { id: 13, name: "server & storage" },
    { id: 14, name: "accressories" },
    { id: 15, name: "gedget" },
    { id: 16, name: "gaming" },
  ];
  return (
    <nav className="py-5 bg-white border-[2px] sticky top-0  border-gray-200">
      <Container>
        <Flex className={"justify-between items-center"}>
          {NameMenu.map((item) => (
            <a href="" className=" capitalize">{item.name}</a>
          ))}
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
