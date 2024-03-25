import { useContext, useEffect, useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import DataTableContext from "../../contexts/DataTableContext";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const { table, setFilteredTable, setIsFilterMode } =
    useContext(DataTableContext);
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  const toggle = () => {
    if (isOpen) {
      setQuery("");
      setIsFilterMode(false);
      setFilteredTable({});
    }
    setIsOpen(!isOpen);
  };

  const queryChanged = (e) => {
    let value = e.target.value;
    setIsFilterMode(value !== "");
    setQuery(value);
    let tb = { ...table };
    let data = tb.data.filter((row) =>
      row.some((cell) =>
        String(cell).trim().toLowerCase().includes(value.trim().toLowerCase())
      )
    );
    tb.data = data;
    setFilteredTable(tb);
  };

  useEffect(() => {
    if (isOpen && inputRef) inputRef.current.focus();
  }, [isOpen]);

  return (
    <div className="border-x-2 px-5 flex items-center gap-1">
      <button
        className="p-2 hover:bg-ac-sec rounded active:opacity-50"
        onClick={toggle}
      >
        {isOpen ? <IoMdClose /> : <RiSearchLine />}
      </button>
      {isOpen && (
        <input
          ref={inputRef}
          type="search"
          onChange={queryChanged}
          value={query}
          className="px-2 border-2 border-ac-sec rounded-sm"
        />
      )}
    </div>
  );
}
