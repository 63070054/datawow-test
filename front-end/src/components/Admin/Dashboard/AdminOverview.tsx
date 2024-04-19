"use client"

import CardConcert, { Concert } from "@/components/CardConcert";
import httpRequest from "@/utils/axios/axiosInterceptor";
import useUser from "@/utils/store/useUser";
import useSWR from "swr";

export default function AdminOverview() {

  const { getEncodedUser } = useUser()
  const fetchConcerts = async ()  => {
    try {
      const result = await httpRequest.get("/concert", {
        headers: {
          "Authorization": getEncodedUser()
        }
      });

      return result.data || [];

    } catch (err) {
      console.log('error', err)
    }
  }

  const { data, error, isLoading } = useSWR<Concert[]>('fetchConcerts', fetchConcerts)

  if (error) return <>error</>
  if (!data && isLoading) return <div>Loading...</div>;

  const concerts = data as Concert[];

  console.log("concerts", concerts)

  return (
    <>
      <div className="flex flex-col gap-4">
        {concerts?.map((concert: Concert, index: number) => {
          return (
            <CardConcert key={index} {...concert} />
          )
        })}

      </div>
    </>
  )

}