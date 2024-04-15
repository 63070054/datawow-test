import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from "./Button";
import TextUnderline from "./TextUnderline";
import CardWithBorder from "./CardWithBorder";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export interface CardConcertProps {
  concertName: string;
  concertDescription: string;
  amountSeats: number;
}

export default function CardConcert({ concertName, concertDescription, amountSeats }: CardConcertProps) {

  return (
    <CardWithBorder>
      <div className="flex flex-col gap-4">
        <TextUnderline text={concertName} />
        <p className="py-2">{concertDescription}</p>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faUser} className="w-4 aspect-square" />
            <p>{amountSeats}</p>
          </div>
          <Button variant="error">
            <FontAwesomeIcon icon={faTrash} className="w-4 aspect-square" />
            <p>Delete</p>
          </Button>
        </div>
      </div>
    </CardWithBorder>
    
   )
 }