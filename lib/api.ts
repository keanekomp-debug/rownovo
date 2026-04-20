import buoys from "@/data/buoys.json";

export async function getBuoys() {
  // TODO: Replace DEMO_BUOYS with live GPS feed
  // or connect to your Supabase/REST endpoint here
  return buoys.buoys;
}
