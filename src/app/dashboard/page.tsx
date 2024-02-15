import {fetchPitStops} from "@/app/services/pitstops/service";

export default async function Page() {

  const results = await fetchPitStops();

  return (
    <div>
      <h1>/dashboard/page</h1>
    </div>
  );
}