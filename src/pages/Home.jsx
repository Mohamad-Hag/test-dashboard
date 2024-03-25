import CardsContainer from "../components/home/CardsContainer";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="py-5">
        <span className="bg-ac-sec">Home</span>
      </h2>
      <h3 className="text-2xl ">Welcome Mohammad! How is your day?</h3>
      <p className="mb-10">Check you statistics today. There is an increase in sales!</p>
      <CardsContainer />
    </div>
  );
}
