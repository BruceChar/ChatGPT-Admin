import useSWR from "swr";
import fetcher from "@/app/utils/fetcher";
import { ChatResponse } from "@caw/types";

export async function apiPlan() {
  const plan = await (await fetcher("/api/plan")).json();
  console.log(plan);
  alert(JSON.stringify(plan));
  return plan;
}

export function usePlan() {
  const { data, isLoading } = useSWR<ChatResponse.PlanGet>(
    "/api/plan",
    apiPlan,
  );

  return {
    data,
    isLoading,
  };
}
