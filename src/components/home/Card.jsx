export default function Card({ title, value, icon, featured }) {
  return (
    <div
      className={`${
        featured ? "bg-ac-sec" : "bg-ac"
      } shadow-md rounded-lg p-4 flex-auto flex items-center justify-center ${
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
