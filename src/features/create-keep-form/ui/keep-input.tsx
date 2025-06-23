import { forwardRef, KeyboardEvent } from "react";

type KeepInputProps = {
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
};

export const KeepInput = forwardRef<HTMLInputElement, KeepInputProps>(
  ({ onKeyDown }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        placeholder="Название..."
        className="py-2 h-10 text-xl font-bold input transition-all duration-300 ease-in-out"
        tabIndex={1}
        onKeyDown={onKeyDown}
      />
    );
  }
);

KeepInput.displayName = "KeepInput";
