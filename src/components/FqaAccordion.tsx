interface FqaAccordionProps {
  fqa: [string, string][];
}
import * as Accordion from "@radix-ui/react-accordion";
import arrow from "../assets/icons/arrow.svg";

export default function FqaAccordion({ fqa }: FqaAccordionProps) {
  return (
    <Accordion.Root
      className="w-full rounded-lg space-y-2"
      type="single"
      collapsible
    >
      {fqa.map(([question, answer], index) => (
        <AccordionItem value={index.toString()}>
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion.Root>
  );
}

function AccordionItem({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) {
  return (
    <Accordion.Item
      value={value}
      className={
        "mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b"
      }
    >
      <p>{children}</p>
    </Accordion.Item>
  );
}

function AccordionTrigger({ children }: { children: React.ReactNode }) {
  return (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className="text-[#1A1442] text-start group flex h-16 
      flex-1 cursor-default items-center justify-between 
      bg-white px-5 leading-none outline-none"
      >
        <h1>{children}</h1>
        <div className="bg-[#FFE7E6] rounded-sm">
          <img
            src={arrow.src}
            alt="Seta de expansão"
            className="w-5 h-5 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform 
        duration-300 group-data-[state=open]:rotate-180"
          />
        </div>
      </Accordion.Trigger>
    </Accordion.Header>
  );
}

function AccordionContent({ children }: { children: React.ReactNode }) {
  return (
    <Accordion.Content className="bg-white data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-sm">
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  );
}
