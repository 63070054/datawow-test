'use server'
import AdminCreate from "@/components/Admin/Dashboard/AdminCreate";
import AdminOverview from "@/components/Admin/Dashboard/AdminOverview";
import CardStatistic from "@/components/CardStatistic";
import Tab, { TabMenu } from "@/components/Tab";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCancel, faMedal } from "@fortawesome/free-solid-svg-icons";

export default async function Home() {

  const tabData: TabMenu[] = [
    {
      tabName: "Overview",
      content: <AdminOverview />
    },
    {
      tabName: "Create",
      content: <AdminCreate />
    },
  ]

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <CardStatistic icon={faUser} statisticName="Total of seats" amount={500} twBgColor="bg-blue-500" />
          <CardStatistic icon={faMedal} statisticName="Reserve" amount={120} twBgColor="bg-green-500" />
          <CardStatistic icon={faCancel} statisticName="Cancel" amount={12} twBgColor="bg-red-500" />
        </div>
        <Tab tabs={tabData} />
      </div>
    </>
  );
}
