import { ButtonProps } from "./types";

export default function Button({ value, handleOnClick, styles }: ButtonProps) {
  return (
    <button
      className={`border border-gray-400 text-2xl font-medium py-6 ${styles}`}
      onClick={() => handleOnClick()}
    >
      {value}
    </button>
  );
}
