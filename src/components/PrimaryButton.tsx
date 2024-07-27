import paw from "../assets/icons/white-paw.svg";

export default function PrimaryButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="text-sm p-3 bg-[#1268AE] text-white rounded-md whitespace-nowrap flex flex-row gap-2 items-center justify-center">
      {children}
      <img src={paw.src} width={16} height={16} alt={"Pata"} />
    </button>
  );
}
