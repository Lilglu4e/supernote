import SideBar from "../Components/SideBar"
import Tasks from "../Components/Tasks"
import List from './List'
import Menu from './Menu'

export default function Home() {
  return (
    <div className="flex flex-row bg-transparent min-h-screen items-center justify-between relative">
      <SideBar />
      <List />
      <Tasks />
    </div>
  );
}
