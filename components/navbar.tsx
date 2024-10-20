"use client";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const productList = [
  {
    key: "overview",
    label: "Platform Overview",
    description: [
      "ACME scales apps to meet user demand,",
      "automagically, based on load.",
    ],
    icon: (
      <Image src="/platform.png" alt="Datanue Logo" width={25} height={25} />
    ),
  },
  {
    key: "ai",
    label: "Gen AI App Builder",
    description: "Build enterprise-grade agents,automagically, based on load.",

    icon: (
      <Image src="/app-store.png" alt="Datanue Logo" width={25} height={25} />
    ),
  },
  {
    key: "integration",
    label: "Data Integration",
    description: [
      "ACME scales apps to meet user demand,",
      "automagically, based on load.",
    ],
    icon: (
      <Image
        src="/data-integration.png"
        alt="Datanue Logo"
        width={25}
        height={25}
      />
    ),
  },
];
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full p-2 shadow-md bg-white">
      <div className="flex items-center justify-between px-5 2xl:px-16">
        <Link href="/">
          {" "}
          <Image
            src="/WebsiteLogo.svg"
            alt="Datanue Logo"
            width={220}
            height={50}
          />
        </Link>
        <div>
          <ul className="hidden md3:flex space-x-8 items-center">
            <li className="relative group">
              <Dropdown showArrow>
                <DropdownTrigger>
                  <Button
                    className="rounded-none relative pb-2 px-0 pt-0 bg-transparent data-[hover=true]:bg-transparent text-md hover:text-blue-500 text-navblue"
                    disableRipple
                    variant="light"
                  >
                    Products
                    <span className="absolute top-9 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Dynamic Actions"
                  className="w-[300px]"
                  itemClasses={{
                    base: "gap-4",
                  }}
                  items={productList}
                >
                  {(item) => (
                    <DropdownItem
                      key={item.key}
                      description={item.description}
                      startContent={item.icon}
                    >
                      {item.label}
                    </DropdownItem>
                  )}
                </DropdownMenu>
              </Dropdown>
            </li>{" "}
            <Dropdown showArrow>
              <DropdownTrigger>
                <Button
                  className="rounded-none relative pb-2 px-0 pt-0 bg-transparent data-[hover=true]:bg-transparent text-md hover:text-blue-500 text-navblue"
                  disableRipple
                  variant="light"
                >
                  Use Cases
                  <span className="absolute top-9 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Dynamic Actions"
                className="w-[300px]"
                itemClasses={{
                  base: "gap-4",
                }}
                items={productList}
              >
                {(item) => (
                  <DropdownItem
                    key={item.key}
                    description={item.description}
                    startContent={item.icon}
                  >
                    {item.label}
                  </DropdownItem>
                )}
              </DropdownMenu>
            </Dropdown>
            <li className="relative group">
              <Dropdown showArrow>
                <DropdownTrigger>
                  <Button
                    className="rounded-none relative pb-2 px-0 pt-0 bg-transparent data-[hover=true]:bg-transparent text-md hover:text-blue-500 text-navblue"
                    disableRipple
                    variant="light"
                  >
                    Products
                    <span className="absolute top-9 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Dynamic Actions"
                  className="w-[300px]"
                  itemClasses={{
                    base: "gap-4",
                  }}
                  items={productList}
                >
                  {(item) => (
                    <DropdownItem
                      key={item.key}
                      description={item.description}
                      startContent={item.icon}
                    >
                      {item.label}
                    </DropdownItem>
                  )}
                </DropdownMenu>
              </Dropdown>
            </li>{" "}
            <li className="relative group">
              <Dropdown showArrow>
                <DropdownTrigger>
                  <Button
                    className="rounded-none relative pb-2 px-0 pt-0 bg-transparent data-[hover=true]:bg-transparent text-md hover:text-blue-500 text-navblue"
                    disableRipple
                    variant="light"
                  >
                    Use Cases
                    <span className="absolute top-9 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Dynamic Actions"
                  className="w-[300px]"
                  itemClasses={{
                    base: "gap-4",
                  }}
                  items={productList}
                >
                  {(item) => (
                    <DropdownItem
                      key={item.key}
                      description={item.description}
                      startContent={item.icon}
                    >
                      {item.label}
                    </DropdownItem>
                  )}
                </DropdownMenu>
              </Dropdown>
            </li>{" "}
            <li>
              <button className="text-white bg-[#F26D0E] py-2 px-4 rounded-3xl roboto-flex-regular hover:text-[#F26D0E] hover:bg-white border-1 border-[#F26D0E]">
                <p className="font-semibold">Talk to Us</p>
              </button>
            </li>
            <li className="relative group">
              <Dropdown showArrow>
                <DropdownTrigger>
                  <Button
                    className="rounded-none relative pb-2 px-0 pt-0 bg-transparent data-[hover=true]:bg-transparent text-md hover:text-blue-500 text-navblue"
                    disableRipple
                    variant="light"
                  >
                    English
                    <span className="absolute top-9 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Dynamic Actions"
                  className="w-[300px]"
                  itemClasses={{
                    base: "gap-4",
                  }}
                  items={productList}
                >
                  {(item) => (
                    <DropdownItem
                      key={item.key}
                      description={item.description}
                      startContent={item.icon}
                    >
                      {item.label}
                    </DropdownItem>
                  )}
                </DropdownMenu>
              </Dropdown>
            </li>{" "}
            <li className="relative group">
              <Dropdown showArrow>
                <DropdownTrigger>
                  <Button
                    className="rounded-none relative pb-2 px-0 pt-0 bg-transparent data-[hover=true]:bg-transparent text-md hover:text-blue-500 text-navblue"
                    disableRipple
                    variant="light"
                  >
                    Contact Us
                    <span className="absolute top-9 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Dynamic Actions"
                  className="w-[300px]"
                  itemClasses={{
                    base: "gap-4",
                  }}
                  items={productList}
                >
                  {(item) => (
                    <DropdownItem
                      key={item.key}
                      description={item.description}
                      startContent={item.icon}
                    >
                      {item.label}
                    </DropdownItem>
                  )}
                </DropdownMenu>
              </Dropdown>
            </li>{" "}
            <li className="relative group">
              <Button
                className="rounded-none relative pb-2 px-0 pt-0 bg-transparent data-[hover=true]:bg-transparent text-md hover:text-blue-500 text-navblue"
                disableRipple
                variant="light"
              >
                <Link href="/integration">Login</Link>
                <span className="absolute top-9 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </Button>
            </li>{" "}
          </ul>
        </div>
        <button
          className="md3:hidden cursor-pointer pl-24"
          onClick={handleOpen}
        >
          <Menu />
        </button>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-full md:w-[65%] md3:hidden h-screen bg-slate-100 p-10 ease-in duration-500 no-scrollbar z-[999]"
            : "fixed left-[-100%] top-0 p-10  ease-in duration-500"
        }
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
          onClick={() => setMenuOpen(false)}
        >
          <X size={24} />
        </button>
        <Accordion>
          <AccordionItem key="product" aria-label="Product" title="Product">
            <div className="px-4">
              {/* Map through productList and display labels */}
              {productList.map((product) => (
                <div key={product.key} className="py-2">
                  <p className="text-navblue font-semibold">{product.label}</p>
                </div>
              ))}
            </div>
          </AccordionItem>
        </Accordion>
        <Accordion>
          <AccordionItem key="product" aria-label="Use Case" title="Use Case">
            <div className="px-4">
              {/* Map through productList and display labels */}
              {productList.map((product) => (
                <div key={product.key} className="py-2">
                  <p className="text-navblue font-semibold">{product.label}</p>
                </div>
              ))}
            </div>
          </AccordionItem>
        </Accordion>
        <Accordion>
          <AccordionItem key="product" aria-label="Product" title="Product">
            <div className="px-4">
              {/* Map through productList and display labels */}
              {productList.map((product) => (
                <div key={product.key} className="py-2">
                  <p className="text-navblue font-semibold">{product.label}</p>
                </div>
              ))}
            </div>
          </AccordionItem>
        </Accordion>
        <Accordion>
          <AccordionItem key="product" aria-label="Product" title="Product">
            <div className="px-4">
              {/* Map through productList and display labels */}
              {productList.map((product) => (
                <div key={product.key} className="py-2">
                  <p className="text-navblue font-semibold">{product.label}</p>
                </div>
              ))}
            </div>
          </AccordionItem>
        </Accordion>
        <button className="w-full text-white bg-[#F26D0E] py-2 px-4 rounded-3xl roboto-flex-regular hover:text-[#F26D0E] hover:bg-white border-1 border-[#F26D0E]">
          <p className="font-semibold">Talk to Us</p>
        </button>
        <button className="w-full text-white bg-[#F26D0E] py-2 px-4 rounded-3xl roboto-flex-regular hover:text-[#F26D0E] hover:bg-white border-1 border-[#F26D0E] mt-3">
          <p className="font-semibold">Login</p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
