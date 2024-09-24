import { Player } from "@/components/music/player";
import { TopMenu } from "@/components/ui/top-menu";
import { Sidebar } from '@/components/ui/sidebar/sidebar';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      <Sidebar/>
      {children}
      <Player/>
    </main>
  );
}
