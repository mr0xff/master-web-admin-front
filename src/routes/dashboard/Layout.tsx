import Sidebar from "@/components/Sidebar";
import AuthProvider from "@/lib/AuthProvider";

type Props = React.PropsWithChildren<{
  title?: string;
}>;
export default function Layout({ children, title }: Props ) {
  const menus = [
    { title: "Grupos de usuários", url: "/cpanel/groups" },
    { title: "Controle de Acesso", url: "/cpanel/roles" },
    { title: "Usuários", url: "/cpanel/users" }
  ]
  return(
    <main className="md:flex flex-row h-screen">
      <Sidebar menus={menus} />
      <AuthProvider />
      <div className="px-4 py-2 w-full min-[1560px]:mx-[10%] min-[1950px]:mx-96 bg-pink-500">
        <div className="my-3">
          <h2 className="font-medium text-xl">{title}</h2>
        </div>
        {children}
      </div>
    </main>
  )
}