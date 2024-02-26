import Link from "next/link";


export const runtime = 'edge';

export default function Page() {

  return (
    <div className={''}>
      <Link href={'/dashboard/races/totalBetween/2000/2023'}>Total races in between two seasons</Link>
    </div>
  )
}