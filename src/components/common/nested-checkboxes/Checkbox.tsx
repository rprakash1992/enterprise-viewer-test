import { useRef, useLayoutEffect } from "react";
import { status } from "./constants";

export default function CustomCheckbox(props: any) {
  const { indeterminate, checked, id, compute, ...rest } = props;
  const inputRef = useRef<any>(null);

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
      inputRef.current.checked = checked;
    }
  }, [indeterminate, checked]);

  return (
    <input
      {...rest}
      ref={inputRef}
      type="checkbox"
      onChange={() => {
        const newStatus = inputRef.current.checked
          ? status.checked
          : status.unchecked;
        compute(id, newStatus);
      }}
    />
  );
}
