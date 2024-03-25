import { BsDatabaseSlash } from "react-icons/bs";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-10 w-full h-full justify-center items-center text-center">
      <BsDatabaseSlash size={70} className="fill-ac-sec" />
      <div>
        <h1 className="text-3xl font-bold">404 Not Found</h1>
        <p>URL is invalid, please check it again</p>
      </div>
    </div>
  );
}
