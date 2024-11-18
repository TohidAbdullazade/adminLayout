import { Button } from "antd";
import { MouseEventHandler } from "react";

export default function TopSide({
  title,
  onClick,
  isDanger,
  buttonText,
}: {
  title: string;
  onClick: MouseEventHandler<HTMLElement>;
  isDanger?: boolean;
  buttonText: string;
}) {
  return (
    <div className="flex items-center w-full justify-between px-5 border h-[72px]">
      <h1 className="text-3xl font-poppins font-[600]">{title}</h1>
      <Button
        danger={isDanger ? true : false}
        onClick={onClick}
        type={isDanger ? "default" : "primary"}
        className="text-sm font-poppins w-[120px] h-12"
      >
        {buttonText}
      </Button>
    </div>
  );
}
