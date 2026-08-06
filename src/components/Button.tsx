import { ReactNode } from "react";

interface Props {
  onClick: () => void;
  children: ReactNode;
}

export function Button({ onClick, children }: Props) {
  return <button onClick={onClick}>{children}</button>;
}
