import { twMerge } from "tailwind-merge";

type InputProps = {
  placeholder: string;
  //   value: string;
  //   onChange: (value: string) => void;
  className?: string;
};

export default function Input({
  placeholder,
  //   value,
  //   onChange,
  className,
}: InputProps) {
  return (
    <input
      className={twMerge(
        "rounded-xl px-4 py-3 font-geist font-normal text-base leading-6 bg-beige text-purple",
        className
      )}
      placeholder={placeholder}
      // value={value}
      // onChange={(e) => onChange(e.target.value)}
    />
  );
}
