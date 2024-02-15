import Sidenav from '@/app/ui/dashboard/sidenav';


export const runtime = "edge";

export default function Layout({ children}: { children: React.ReactNode }) {
  return (
    <div className="border-2 border-pink-500 flex">
      <div className="border-2 border-green-600 mr-5">
        <Sidenav />
      </div>
      <div className="border-2 border-yellow-400">{children}</div>
    </div>
  );
}