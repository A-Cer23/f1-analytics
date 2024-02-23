import Link from "next/link";


export default function Sidenav() {
  return (
    <div className={''}>
      <ul>
        <li><Link href={'/dashboard/races'}>Race Analysis</Link></li>
        <li>Analysis2</li>
        <li>Analysis3</li>
        <li>Analysis4</li>
      </ul>
    </div>
  );
}