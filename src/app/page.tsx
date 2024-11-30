import { Suspense } from "react";
import { CardStatsWrapper } from "./_widgets/CardStatsWrapper";
import { StatsCardList } from "./_widgets/StatsCardList";
import { Separator } from "@/components/ui/separator";
import { CreateFormBtn } from "./_widgets/CreateFormBtn";
import { FormCardSkeleton } from "@/components/templates/FormCardSkeleton";
import FormCardList from "./_widgets/FormCardList";


export default function Home() {
  return (
    <div className="container pt-4">
      <Suspense fallback={<StatsCardList loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className="my-6" />
      <h2 className="text-4xl font-bold col-span-2">Your forms</h2>
      <Separator className="my-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CreateFormBtn />
        <Suspense fallback={Array(5).fill(null).map(el => <FormCardSkeleton key={el} />)}>
          <FormCardList />
        </Suspense>
      </div>
    </div>
  )
}

