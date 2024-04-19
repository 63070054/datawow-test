'use client'
import TableHistory, { History } from "@/components/Table/TableHistory";
import httpRequest from "@/utils/axios/axiosInterceptor";
import useUser from "@/utils/store/useUser";
import Swal from "sweetalert2";
import useSWR from "swr";

export default function HistoryPage() {

  const { getEncodedUser } = useUser()
  const fetchConcerts = async () => {
    try {
      const result = await httpRequest.get("/history", {
        headers: {
          "Authorization": getEncodedUser()
        }
      });

      return result.data || [];

    } catch (err) {
      await Swal.fire({
        title: "Error!",
        text: "There is error occurred!",
        icon: "error"
      });
      console.log(err)
    }
  }

  const { data, error, isLoading } = useSWR<History[]>('fetchHistories', fetchConcerts)

  if (error) return <>error</>
  if (!data && isLoading) return <div>Loading...</div>;

  const histories = data as History[];

  return (
    <TableHistory histories={histories} />
  )
}