import Image from "next/image";
import Pages from "@/components/Pages";
import Charts from "@/components/Charts";
import Camera_card from "@/components/Camera_card";
import Recipe_card from "@/components/Recipe_card";
import Forms from "@/components/forms";
import MyTable from '../components/Table'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
      <MyTable />
    </div>
  );
}
