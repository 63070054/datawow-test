'use client'

import { Dispatch, ReactNode, useState } from "react";

interface TabProps {
  tabs: TabMenu[];
  activeTab: number;
  setActiveTab: Dispatch<number>;
}

export interface TabMenu {
  tabName: string;
  content: ReactNode;
}

export default function Tab({ tabs, activeTab, setActiveTab }: TabProps) {
  
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="w-full flex gap-4">
          {tabs.map((tab, index) => {
            return (
              <div key={index} onClick={() => setActiveTab(index)} className={`py-2 text-lg cursor-pointer ${activeTab === index && "text-blue-500 border-b-2 border-blue-500"}`}>
                <p className="px-5">{tab.tabName}</p>
              </div>
            )
          })}
        </div>
        {tabs[activeTab].content}
      </div>

    </>
  )

}