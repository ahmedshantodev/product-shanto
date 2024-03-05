import React from "react";
import Container from "../layout/Container";
import Flex from "../layout/Flex";

const Navbar = () => {
  let NameMenu = [
    { href: "#", name: "desktop" },
    { href: "#", name: "laptop" },
    { href: "#", name: "components" },
    { href: "#", name: "monitor" },
    { href: "#", name: "ups" },
    { href: "#", name: "phone" },
    { href: "#", name: "tablet" },
    { href: "#", name: "office equipment" },
    { href: "#", name: "camera" },
    { href: "#", name: "security" },
    { href: "#", name: "networking" },
    { href: "#", name: "software" },
    { href: "#", name: "server & storage" },
    { href: "#", name: "accressories" },
    { href: "#", name: "gedget" },
    { href: "#", name: "gaming" },
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
