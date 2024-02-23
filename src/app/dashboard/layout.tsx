import Sidenav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children}: { children: React.ReactNode }) {
  return (
    <div className="border-4 border-pink-500 flex space-x-24">
      <div className="border-4 border-green-600">
        <Sidenav />
      </div>
      <div className="border-4 border-yellow-400 basis-10/12 ">{children}</div>
    </div>
  );
}