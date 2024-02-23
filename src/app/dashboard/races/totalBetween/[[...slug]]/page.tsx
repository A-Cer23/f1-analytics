import ChartTotalRacesBetween from "@/app/ui/charts/races/chartTotalRacesBetween";
import {redirect} from "next/navigation";


export default function Page({params}: {params: {slug: string[]}}) {

  if (Object.keys(params).length === 0 || params.slug.length < 2) {
    redirect("/dashboard/races")
  }

  const start = parseInt(params.slug[0])
  const end = parseInt(params.slug[1])

  return (
    <div>
      <ChartTotalRacesBetween start={start} end={end}/>
    </div>
  )
}