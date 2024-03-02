import SideBar from "./Components/SideBar"
import Tasks from "./Components/Tasks"
import ToDoList from './Components/ToDoList'

export default function Home() {
  return (
    <main className="flex flex-row bg-black min-h-screen items-center justify-between">
      <SideBar />
      <ToDoList />
      <Tasks />
    </main>
  );
}
