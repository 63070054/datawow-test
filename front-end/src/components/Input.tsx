import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

interface InputWithError {
  showErr: boolean;
  errMsg: string | undefined;
}

interface InputWithoutError {
  showErr?: false;
}

interface InputMultilineProps {
  multiline: true;
  rows:number;
}

interface InputWithoutMultiline {
  multiline?: false;
}

type InputProps = {
  label?: string;
  placeholder?: string;
  register: UseFormRegisterReturn<any>;
  type?: "number" | "text" | "password";
  endIcon?: IconDefinition;
  defaultValue?: string | number;
} & (InputMultilineProps | InputWithoutMultiline) & (InputWithError | InputWithoutError)

export default function Input(props: InputProps) {

  const { label, placeholder, type, register, endIcon, defaultValue } = props;

  const InputElement = props.multiline ? 'textarea' : 'input';

  return (
    <div className="flex flex-col gap-2">
      <p className="text-lg pb-2">{label}</p>
      <div className="relative">
        <InputElement value={defaultValue} className="px-3 w-full py-2 border rounded-md text-xs" {...register} placeholder={placeholder} type={type} rows={(props as InputMultilineProps)?.rows} />
        {endIcon && (
          <FontAwesomeIcon icon={endIcon} className="absolute top-1/2 -translate-y-1/2 right-4 text-xs" />
        )}
      </div>
      {props?.showErr && <p className="text-red-500 text-xs">{props?.errMsg}</p>}

    </div>

  )
}