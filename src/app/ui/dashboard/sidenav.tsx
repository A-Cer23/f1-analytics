import Link from "next/link";


export default function Sidenav() {
  return (
    <div className={'border-2 border-red-700'}>
      <ul>
        <li><Link href={'/dashboard/pitstops'}>Pitstop Analysis</Link></li>
        <li>Analysis2</li>
        <li>Analysis3</li>
        <li>Analysis4</li>
        <li>Analysis5</li>
      </ul>
    </div>
  );
}