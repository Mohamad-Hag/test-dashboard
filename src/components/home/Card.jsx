export default function Card({ title, value, icon, featured }) {
  return (
    <div
      className={`${
        featured ? "bg-ac-sec" : "bg-ac"
      } shadow-lg rounded-lg p-4 flex-auto h-40 flex items-center justify-center border-[0.5px] border-ter-txt ${
        featured && "scale-125"
      }`}
    >
      <div className="flex items-center">
        {icon}
        <div className="ml-4">
          <p className="text-md text-ter-txt">{title}</p>
          <p className="text-7xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
}
