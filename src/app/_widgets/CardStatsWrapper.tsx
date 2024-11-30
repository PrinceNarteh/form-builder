import { GetFormStats } from "@/actions/form";
import { StatsCardList } from "./StatsCardList";

export async function CardStatsWrapper() {
  const stats = await GetFormStats();
  return <StatsCardList loading={false} data={stats} />;
}
