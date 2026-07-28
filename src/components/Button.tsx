interface Props {
  onClick: () => void;
  content: string;
}

export function Button({ onClick, content }: Props) {
  return <button onClick={onClick}>{content}</button>;
}
