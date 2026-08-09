import { Search } from "./Icons";
import "./input.css";

interface Props {
  value: string;
  setValue: (e: string) => void;
}

export function Input({ value, setValue }: Props) {
  return (
    <label className="label">
      <Search width="24" height="24" />
      <input
        placeholder="buscar por pais..."
        className="input"
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          console.log(e.target.value);
        }}
      />
    </label>
  );
}
