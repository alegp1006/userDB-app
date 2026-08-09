import { ReactNode } from "react";
import "./button.css";

interface Props {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

export function Button({ onClick, children, className = "button" }: Props) {
  return (
    <button className={`${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
