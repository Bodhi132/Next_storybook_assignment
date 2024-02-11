import Image from "next/image";
import Pages from "@/stories/components/Pages";
import Charts from "@/stories/components/Charts";
import Camera_card from "@/stories/components/Camera_card";
import Recipe_card from "@/stories/components/Recipe_card";
import Forms from "@/stories/components/forms";
import MyTable from '../stories/components/Table'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
      <Recipe_card />
    </div>
  );
}
