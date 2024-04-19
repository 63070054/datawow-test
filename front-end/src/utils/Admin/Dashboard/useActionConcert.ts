import { CardConcertProps } from "@/components/CardConcert"
import httpRequest from "@/utils/axios/axiosInterceptor"
import { User } from "@/utils/store/useUser"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import Swal from "sweetalert2"
import { mutate } from "swr"

interface useActionConcertProps {
  user: User
  encodedUser: string
}

export default function useActionConcert({user, encodedUser}: useActionConcertProps) {
  const reserveConcert = async (concert: CardConcertProps) => {

    const createReserveHistory = {
      date: new Date(),
      userId: user.id,
      concertId: concert.id,
      action: "Reserve",
    }

    try {
      await httpRequest.post("history", createReserveHistory, {
        headers: {
          Authorization: encodedUser
        }
      })
      await Swal.fire({
        title: "Success!",
        text: "You have reserved the new concert!",
        icon: "success"
      });

      await mutate("fetchConcerts")

    } catch (err) { 
      console.log(err)
     }
  }

  const cancelConcert = async (concert: CardConcertProps) => { 
    const createCancelHistory = {
      date: new Date(),
      userId: user.id,
      concertId: concert.id,
      action: "Cancel",
    }

    try {
      await httpRequest.post("history", createCancelHistory, {
        headers: {
          Authorization: encodedUser
        }
      })
      await Swal.fire({
        title: "Success!",
        text: "You have cancel the concert!",
        icon: "success"
      });

      await mutate("fetchConcerts")
    } catch (err) {
      console.log(err)
    }
  }

  const deleteConcert = async () => {

  }
  
  return {
    reserveConcert,
    cancelConcert,
    deleteConcert
  };

}