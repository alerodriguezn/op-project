import { Player } from "@/components/music/player";
import { TopMenu } from "@/components/ui/top-menu";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      {children}
      <Player/>
    </main>
  );
}
