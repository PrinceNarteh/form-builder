import { getFormStats } from "@/actions/form";
import { StatsCardList } from "./StatsCardList";

export async function CardStatsWrapper() {
  const stats = await getFormStats();
  return <StatsCardList loading={false} data={stats} />;
}
