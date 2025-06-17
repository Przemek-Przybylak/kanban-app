import { redirect } from "next/navigation";
import Button from "../components/Button/Button";

export default function Home() {
  return (
    <div className="p-6 flex-3">
      <Button>Add project</Button>
    </div>
  );
}
