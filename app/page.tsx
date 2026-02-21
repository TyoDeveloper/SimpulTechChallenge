import Image from "next/image";
import FloatingMenu from "./Components/FloatingMenu";
import Link from "next/link";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}
export default async function Home() {
  const users = await getUsers();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="w-[734] h-[737] mx-auto mt-10 bg-white shadow rounded-lg">
          <h1 className="text-xl font-bold p-4 border-b">Chat List</h1>

          {users.map((user: any) => (
            <Link
              key={user.id}
              href={`/chat/${user.id}`}
              className="block p-4 border-b hover:bg-gray-100"
            >
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </Link>
          ))}
        </div>
        <FloatingMenu />
      </main>
    </div>
  );
}
