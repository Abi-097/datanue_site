"use client";
import { SearchIcon } from "@/components/icons";
import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { Select, SelectItem } from "@nextui-org/select";
import { Card, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import { values } from "@/data/data";
const checkList = [
  {
    name: "All Types",
    value: "all",
  },
  {
    name: "Regular",
    value: "regular",
  },
  {
    name: "Trigger",
    value: "trigger",
  },
  {
    name: "Core Nodes",
    value: "core",
  },
];

export default function AboutPage() {
  const [selectedOption, setSelectedOption] = useState("all");
  const [selectedCheckbox, setSelectedCheckbox] = useState("all");

  const handleCheckboxChange = (value: string) => {
    setSelectedCheckbox(value);
  };

  // Handle dropdown selection for smaller screens
  const handleDropdownChange = (value: string) => {
    setSelectedOption(value);
    setSelectedCheckbox(value); // Sync with checkbox selection
  };

  return (
    <div className="container mx-auto max-w-7xl py-10 px-6 flex-grow">
      {/* Grid container for the layout, centered horizontally */}
      <div className="grid grid-cols-1 mdx:grid-cols-[2fr_8fr] gap-6 justify-center">
        {/* Left Side - Type and checkboxes */}
        <div className="hidden mdx:block">
          <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mb-2">
            Type
          </h4>
          {checkList.map((list, index) => (
            <div key={index} className="flex items-center space-x-3 mb-3">
              <Checkbox
                key={list.value}
                isSelected={selectedCheckbox === list.value}
                size="sm"
                onChange={() => handleCheckboxChange(list.value)}
              >
                {list.name}
              </Checkbox>
            </div>
          ))}
        </div>

        {/* On smaller screens, show a dropdown instead of checkboxes */}

        {/* Right Side - Search box and content */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
            Connect anything to everything
          </h2>

          <Input
            classNames={{
              base: "w-full h-10",
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
          <div className="block mdx:hidden w-full mt-4">
            <Select className="w-full" defaultSelectedKeys="all" label="Type">
              {checkList.map((list) => (
                <SelectItem key={list.value} value={list.value}>
                  {list.name}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="grid grid-cols-2 mdx:grid-cols-4 mt-4">
            {values.map((data, index) => (
              <Card
                key={index}
                className="py-4 shadow-sm h-[200px] rounded-none border border-gray-100"
              >
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                  <div className="flex items-center justify-center">
                    <Image
                      alt={data.image}
                      className="mb-2"
                      height={40}
                      src={data.image}
                      width={40}
                    />
                  </div>
                  <p className="text-sm font-bold">{data.heading}</p>
                  <small className="text-default-500 line-clamp-3 text-center mt-2">
                    {data.description}
                  </small>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
