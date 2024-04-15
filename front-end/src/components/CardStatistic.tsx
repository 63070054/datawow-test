import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface CardStatisticProps {
  icon: IconDefinition;
  statisticName: string;
  amount: number;
  twBgColor: string;
}

export default function CardStatistic({ icon, statisticName, amount, twBgColor} : CardStatisticProps) {
  return (
    <>
      <div className={`rounded-md flex flex-col justify-center text-center px-2 py-5 gap-2 text-white ${twBgColor}`}>
        <FontAwesomeIcon icon={icon} className="w-6 aspect-square flex self-center" />
        <p>{ statisticName }</p>
        <p className="text-4xl py-4 font-bold">{ amount }</p>
      </div>
    </>
  )
}