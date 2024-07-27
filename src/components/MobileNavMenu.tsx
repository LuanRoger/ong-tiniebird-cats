import * as Popover from "@radix-ui/react-popover";
import menuIcon from "../assets/icons/menu.svg";
import closeIcon from "../assets/icons/close.svg";
import paw from "../assets/icons/paw.svg";
import PrimaryButton from "./PrimaryButton";

export default function MobileNavMenu() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="rounded-lg bg-[#FFE7E6] p-2 inline-flex items-center justify-center"
          aria-label="Update dimensions"
        >
          <img src={menuIcon.src} width={16} height={16} />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="rounded p-5 w-56 bg-[#FFE7E6] shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] 
          focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade 
          data-[state=open]:data-[side=bottom]:animate-slideUpAndFade 
          data-[state=open]:data-[side=left]:animate-slideRightAndFade"
        >
          <div className="flex flex-col">
            <nav className="flex flex-col gap-2 items-start">
              <NavItem text="Home" />
              <NavItem text="Sobre" selected />
              <NavItem text="Quero ajudar" />
              <NavItem text="Notícias" />
              <NavItem text="Contato" />
            </nav>
            <PrimaryButton>Quero adotar</PrimaryButton>
          </div>
          <Popover.Close
            className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[5px] right-[5px] hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-default"
            aria-label="Close"
          >
            <img src={closeIcon.src} width={16} height={16} />
          </Popover.Close>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

function NavItem({
  text,
  selected,
  href,
}: {
  text: string;
  selected?: boolean | undefined;
  href?: string | undefined;
}) {
  const hrefValue = href ?? "/";
  return (
    <li className="flex flex-row gap-1 text-sm font-bold hover:bg-[#ffccca88] w-full">
      {selected && (
        <img src={paw.src} width={20} height={20} alt={"Icone de seleção"} />
      )}
      <h2 className={selected ? "text-[#FF8B87]" : ""}>
        <a href={hrefValue}>{text}</a>
      </h2>
    </li>
  );
}
