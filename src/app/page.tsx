import { getFormStats } from "@/actions/form";
import { Suspense } from "react";
import { CardStatsWrapper } from "./_widgets/CardStatsWrapper";
import { StatsCardList } from "./_widgets/StatsCardList";
import { Separator } from "@/components/ui/separator";
import { CreateFormBtn } from "./_widgets/CreateFormBtn";


export default function Home() {
  return (
    <div className="container pt-4">
      <Suspense fallback={<StatsCardList loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className="my-6" />
      <h2 className="text-4xl font-bold col-span-2">Your forms</h2>
      <Separator className="my-6" />
      <CreateFormBtn />
    </div>
  )
}

