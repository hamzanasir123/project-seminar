"use client";
import { Tabs } from "../ui/tabs";
import { AppleCardsCarouselDemo } from "../AppleCards/ProjectsCard";
import { ClassAssignmentCards } from "../AppleCards/ClassAssignmentCards";
import { MilestoneCards } from "../AppleCards/MilestoneCards";
import { HackathonCards } from "../AppleCards/HackathonCards";

export function TabsDemo() {
  const tabs = [
    {
      title: "Projects",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <AppleCardsCarouselDemo/>
        </div>
      ),
    },
    {
      title: "Class-Assignment",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative  rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <ClassAssignmentCards/>
        </div>
      ),
    },
    {
      title: "Nextjs Milestone",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <MilestoneCards/>
        </div>
      ),
    },
    {
      title: "Hackathon",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <HackathonCards/>
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Random tab</p>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10">
      <Tabs tabs={tabs} />
    </div>
  );
}



