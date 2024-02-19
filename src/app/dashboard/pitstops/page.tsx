import {fetchPitStops} from "@/app/services/pitstops/service";




export default async function Page() {

  const results = await fetchPitStops();

  return (
    <div>
      {JSON.stringify(results)}
    </div>
  );
};