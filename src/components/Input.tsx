interface Props {
  value: string;
  setValue: (e: string) => void;
}

export function Input({ value, setValue }: Props) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        console.log(e.target.value);
      }}
    />
  );
}
