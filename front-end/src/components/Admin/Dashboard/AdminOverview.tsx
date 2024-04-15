"use server"

import CardConcert from "@/components/CardConcert";

export default async function AdminOverview() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <CardConcert concertName="Name 1" concertDescription="test" amountSeats={200} />
        <CardConcert concertName="Name 1" concertDescription="test" amountSeats={200} />

      </div>
    </>
  )

}