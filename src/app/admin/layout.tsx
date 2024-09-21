
export default function AdminLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center ">
        {children}
    </div>
  );
}