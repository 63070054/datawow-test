'use client'
import AdminCreate from "@/components/Admin/Dashboard/AdminCreate";
import AdminOverview from "@/components/Admin/Dashboard/AdminOverview";
import { Concert } from "@/components/CardConcert";
import CardStatistic from "@/components/CardStatistic";
import Tab, { TabMenu } from "@/components/Tab";
import { History } from "@/components/Table/TableHistory";
import httpRequest from "@/utils/axios/axiosInterceptor";
import useUser from "@/utils/store/useUser";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCancel, faMedal } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Swal from "sweetalert2";
import useSWR from "swr";

export default function HomePage() {

  const [activeTab, setActiveTab] = useState<number>(0);
  const { user } = useUser();

  const { getEncodedUser } = useUser()
  const fetchConcerts = async () => {
    try {
      const result = await httpRequest.get("/concert", {
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

  const fetchHistories = async () => {
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

  const { data: dataHistories, error: errorHistories, isLoading: isLoadingHistories } = useSWR<History[]>('fetchHistories', fetchHistories)

  
  const { data, error, isLoading } = useSWR<Concert[]>('fetchConcerts', fetchConcerts)
  
  if (error || errorHistories) return <>error</>
  if (!data && !dataHistories && isLoading && isLoadingHistories) return <div>Loading...</div>;
  
  const concerts = data as Concert[];
  const histories = dataHistories as History[];
  
  const tabData: TabMenu[] = [
    {
      tabName: "Overview",
      content: <AdminOverview concerts={concerts} />
    },
    {
      tabName: "Create",
      content: <AdminCreate setActiveTab={setActiveTab} />,
      show: user.role === "admin"
    },
  ]

  const totalOfSeats = concerts?.reduce((total, concert) => {
    return total + concert.seat;
  }, 0);

  let sumReserveAction = 0;
  let sumCancelAction = 0;

  histories?.map(history => {
    if (history.action === "Reserve") {
      sumReserveAction += 1
    }

    if (history.action === "Cancel") {
      sumCancelAction += 1
    }

  })


  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <CardStatistic icon={faUser} statisticName="Total of seats" amount={totalOfSeats} twBgColor="bg-blue-500" />
          <CardStatistic icon={faMedal} statisticName="Reserve" amount={sumReserveAction} twBgColor="bg-green-500" />
          <CardStatistic icon={faCancel} statisticName="Cancel" amount={sumCancelAction} twBgColor="bg-red-500" />
        </div>
        <Tab tabs={tabData} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </>
  );
}
