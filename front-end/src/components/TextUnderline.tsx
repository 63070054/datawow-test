
interface TextUnderlineProps {
  text: string;
}

export default function TextUnderline({text}: TextUnderlineProps) {
  return (
    <div className="border-b border-gray-400 text-blue-500 text-3xl pb-6">
      <p>{ text }</p>
    </div>
  )
}