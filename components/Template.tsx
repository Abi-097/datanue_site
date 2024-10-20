"use client";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Input } from "@nextui-org/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Template = () => {
  return (
    <div className="mx-5 h-[1000px] ">
      <div className="p-3 h-[500px] bg-[#176081]">
        <nav className="p-3">
          <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
              <Dropdown>
                <DropdownTrigger>
                  <button>
                    <Image
                      src="/grid-100.png"
                      alt="grid"
                      width={24}
                      height={24}
                    />
                  </button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="new">New file</DropdownItem>
                  <DropdownItem key="copy">Copy link</DropdownItem>
                  <DropdownItem key="edit">Edit file</DropdownItem>
                  <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                  >
                    Delete file
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Image
                src="/compass-100.png"
                alt="compass"
                width={24}
                height={24}
              />
              <Image src="/plus-96.png" alt="plus" width={24} height={24} />
              <Image src="/search-96.png" alt="search" width={24} height={24} />
            </div>
            <div className="flex gap-3 items-center">
              <Image src="/bell-96.png" alt="bell" width={24} height={24} />
              <Image
                src="/heart-with-pulse-100.png"
                alt="heart"
                width={24}
                height={24}
              />
              <Image
                src="/hamburger-90.png"
                alt="hamburger"
                width={24}
                height={24}
              />
              <Image src="/help-100.png" alt="help" width={24} height={24} />
              <Avatar
                isBordered
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                className="w-6 h-6 text-tiny"
              />
            </div>
          </div>
        </nav>
        <p className="pt-2 text-white">Good Morning</p>
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[30rem] h-9 bg-white rounded-lg mt-2",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </div>
      <div className="p-3 h-[500px] bg-green-100">Template</div>
    </div>
  );
};

export default Template;
