import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from "./Button";
import TextUnderline from "./TextUnderline";
import CardWithBorder from "./CardWithBorder";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import useUser, { User } from "@/utils/store/useUser";
import useActionConcert from "@/utils/Admin/Dashboard/useActionConcert";
import { useRouter } from "next/navigation";

export interface CardConcertProps {
  id?: number;
  name: string;
  description: string;
  seat: number;
}

export interface Concert extends CardConcertProps {
  usersReserve: User[];
}

export default function CardConcert(concert: Concert) {

  const { name, description, seat } = concert

  const { user, getEncodedUser } = useUser();

  const { reserveConcert, cancelConcert, deleteConcert } = useActionConcert({
    user,
    encodedUser: getEncodedUser()
  });


  const alreadyReserved = concert?.usersReserve?.some(userReserve => userReserve.id == user.id)

  const getActionCardConcert = () => {
    if (alreadyReserved) return (
      <Button variant="error" onClick={() => {
        cancelConcert(concert)
      }} >
        Cancel
      </Button>
    )

    const isOutOfTicket = concert?.usersReserve?.length || 0 === concert.seat

    if (isOutOfTicket) {
      return (
        <Button variant="disabled">
          Out of Ticket
        </Button>
      )
    }

    return (
      <Button variant="primary" onClick={() => {
        reserveConcert(concert)
      }} >
        Reserve
      </Button>
    )
  }


  return (
    <CardWithBorder>
      <div className="flex flex-col gap-4">
        <TextUnderline text={name} />
        <p className="py-2" style={{wordBreak: "break-word"}}>{description}</p>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faUser} className="w-4 aspect-square" />
            <p>{seat}</p>
          </div>
          {user.role === "admin" ? (
            <Button variant="error" onClick={() => deleteConcert(concert)}>
              <FontAwesomeIcon icon={faTrash} className="w-4 aspect-square" />
              <p>Delete</p>
            </Button>
          ) : (
              <>
                {getActionCardConcert()}
              </>
          )}
        </div>
      </div>
    </CardWithBorder>
    
   )
 }