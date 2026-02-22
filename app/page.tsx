import Image from "next/image";
import FloatingMenu from "./Components/FloatingMenu";
import ChatList from "./Components/ChatComponents/ChatList";
import ChatModal from "./Components/ChatComponents/ChatModal";

export default async function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="fixed top-0 left-0 w-full bg-blue-500 overflow-hidden h-12 flex items-center">
          <div className="marquee text-white text-lg font-semibold">
            Simpul Tech Challenge - Ketika Lighning icon disorot muncul Task Icon dan Inbox Icon,
            ketika masing-masing icon di klik mengaktifkan mode nya masing-masing, ketika mode yang
            sedang aktif di klik maka kembali ke mode awal{" "}
          </div>
        </div>
        <FloatingMenu />
      </main>
    </div>
  );
}
