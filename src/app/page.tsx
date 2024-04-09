import Basket from "@/components/Basket";
import ItemsList from "@/components/ItemsList";

export default function Home() {
  return (
    <main className="w-screen h-screen mt-4">
      <div className="flex flex-row gap-5 justify-around h-[90%] ">
        <ItemsList />
        <Basket name="Fruit" type="Fruit"/>
        <Basket name="Vegatable" type="Vegetable"/>
      </div>
    </main>
  );
}
