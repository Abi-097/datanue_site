"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { PlusIcon } from "lucide-react";
import React from "react";

const questionAnswerResponse = [
  {
    question: "1What is data Ilinear and why is important? ",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    question: "2What is data Ilinear and why is important? ",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    question: "3What is data Ilinear and why is important? ",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    question: "4What is data Ilinear and why is important? ",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    question: "5What is data Ilinear and why is important? ",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
];
const QuestionAnswer = () => {
  return (
    <div className="mx-auto max-w-7xl py-10 px-6 flex-grow">
      <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
        Frequently asked questions
      </h2>
      <Accordion>
        {questionAnswerResponse.map((answers, index) => (
          <AccordionItem
            key={index}
            aria-label={answers.question}
            title={answers.question}
            startContent={<PlusIcon className="w-5 h-5 text-navblue" />}
          >
            {answers.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default QuestionAnswer;
