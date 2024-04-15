import { ReactNode } from "react"

interface CardWithBorderProps {
  children: ReactNode;
}

export default function CardWithBorder({ children }: CardWithBorderProps) {
  return (
    <div className="p-6 border rounded-md">
      {children}
    </div>
  )
}