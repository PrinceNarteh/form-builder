import { LuView } from "react-icons/lu";
import { getFormStats } from "@/actions/form";
import { StatsCard } from "./StatsCard";

const cards = [
  {
    title: 'Total Visits',
    helperText: "All time form visits",
    icon: <LuView className="text-blue-600" />
  },
  {
    title: 'Total Submissions',
    helperText: "All time form submissions",
    icon: <LuView className="text-blue-600" />
  },
  {
    title: 'Submission Rate',
    helperText: "All time form visits",
    icon: <LuView className="text-blue-600" />
  },
  {
    title: 'Bounce Rate',
    helperText: "All time form visits",
    icon: <LuView className="text-blue-600" />
  },
]

interface StatsCardProps {
  data?: Awaited<ReturnType<typeof getFormStats>>;
  loading: boolean;
}

export function StatsCardList(props: StatsCardProps) {
  const { data, loading } = props;

  return (
    <div className="w-full p-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {
        cards.map((card, idx) => (
          <StatsCard
            key={idx}
            title={card.title}
            icon={card.icon}
            helperText={card.helperText}
            value={data?.visits.toLocaleString() || ''}
            loading={loading}
          />
        ))
      }
    </div>
  )
}
