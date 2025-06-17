import Button from "../components/Button/Button";
import SideBar from "../components/SideBar/SideBar";

export default function Home() {
  return (
    <div className="flex-3 flex flex-row w-1/4 h-full">
      <SideBar />
      <Button>Add project</Button>
    </div>
  );
}
