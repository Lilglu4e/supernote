import SideBar from "../Components/SideBar"
import Tasks from "../Components/Tasks"
import List from './List'

export default function Home() {
  return (
    <main className="flex flex-row bg-black min-h-screen items-center justify-between">
      <SideBar />
      <List />
      {/* <Tasks /> */}
    </main>
  );
}
