'use client'
import TableHistory, { History } from "@/components/Table/TableHistory";
import httpRequest from "@/utils/axios/axiosInterceptor";
import useUser from "@/utils/store/useUser";
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
      console.log('error', err)
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