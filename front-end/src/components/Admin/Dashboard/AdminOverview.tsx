"use client"

import CardConcert, { Concert } from "@/components/CardConcert";

interface AdminOverviewProps {
  concerts: Concert[];
}

export default function AdminOverview({ concerts }: AdminOverviewProps) {

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