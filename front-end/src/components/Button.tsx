import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";


interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: (...args: any[]) => void;
  variant?: "primary" | "error" | "disabled"
  removeDefaultClassName?: boolean;
  type?: "submit" | "button"
}

export default function Button({ children, className, variant = "primary", removeDefaultClassName, type="button", onClick }: ButtonProps) {

  const getTwBgButton = () => {
    switch (variant) { 
      case "primary":
        return "bg-blue-500 hover:bg-blue-600"
      case "error":
        return "bg-red-500 hover:bg-red-600"
      case "disabled":
        return "bg-gray-700 opacity-50 cursor-not-allowed"
     }
  }
  
  return (
    <button onClick={onClick} type={type} className={`${!removeDefaultClassName && `btn flex gap-2 px-4 py-2 rounded-md text-white items-center ${getTwBgButton()}`} ${className}`}>
      {children}
    </button>
  )
}