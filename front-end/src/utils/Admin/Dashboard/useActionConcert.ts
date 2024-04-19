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
      await mutate("fetchHistories")

    } catch (err) { 
      await Swal.fire({
        title: "Error!",
        text: "There is error occurred!",
        icon: "error"
      });
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
      await mutate("fetchHistories")
    } catch (err) {
      await Swal.fire({
        title: "Error!",
        text: "There is error occurred!",
        icon: "error"
      });
      console.log(err)
    }
  }

  const deleteConcert = async (concert: CardConcertProps) => {

    const { isConfirmed } = await Swal.fire({
      title: `Do you want to delete concert ${concert.name} ?`,
      text: 'You will not be able to recover this concert!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    });

    if (isConfirmed) { 
      try {
        await httpRequest.delete(`concert/${concert.id}`, {
          headers: {
            Authorization: encodedUser
          }
        })

        await Swal.fire({
          title: "Success!",
          text: "You have deleted the concert!",
          icon: "success"
        });

        await mutate("fetchConcerts")
        await mutate("fetchHistories")
      } catch (err) {
        await Swal.fire({
          title: "Error!",
          text: "There is error occurred!",
          icon: "error"
        });
        console.log(err)
      }
     }
  }
  
  return {
    reserveConcert,
    cancelConcert,
    deleteConcert
  };

}