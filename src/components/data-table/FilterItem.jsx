import { useContext, useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import DataTableContext from "../../contexts/DataTableContext";
import camelCaseToWords from "../../utils/camelCaseToWords";
import destructDataTable from "../../utils/destructDataTable";

const FilterItem = (props) => {
  const { type, key_, values, filter, clearFilter } = props;
  const text = camelCaseToWords(key_);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);
  const { setTable, page, pageSize, setTotal } = useContext(DataTableContext);
  const [value, setValue] = useState("");

  // Toggle dropdown open/close
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  const filter_ = async () => {
    if (value === "") return;
    setTotal(0);
    setTable([0]);
    let filteredData = await filter(
      pageSize,
      page,
      key_,
      type === "select" ? value.toLowerCase() : value
    );
    setTotal(filteredData.total);
    setTable(destructDataTable(filteredData.data));
  };

  const clear_ = async () => {
    setTotal(0);
    setTable([0]);
    let data = await clearFilter(pageSize, page, key_, value);
    setTotal(data.total);
    setTable(destructDataTable(data.data));
  };

  const submitted = (e) => {
    e.preventDefault();
    filter_();
    close();
  };

  const clear = () => {
    clear_();
    close();
    setValue("");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) inputRef.current.focus();
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`flex items-center gap-1 ${isOpen && "font-bold"}`}
        onClick={toggle}
      >
        {text} <BsChevronDown size={14} />
      </button>
      {isOpen && (
        <form
          onSubmit={submitted}
          className="shadow-md absolute p-5 min-w-64 top-[30px] rounded-md bg-prm border-2 border-acc-tran flex flex-col gap-3"
        >
          {type !== "select" ? (
            <input
              ref={inputRef}
              type={type}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="px-2 border-2 border-ac-sec rounded-sm w-full"
            />
          ) : (
            <select
              className="w-full"
              ref={inputRef}
              value={value}
              onChange={() => {
                setValue(inputRef.current.value);
              }}
            >
              {values.map((value) => (
                <option key={value.value}>{value.text}</option>
              ))}
            </select>
          )}
          <div className="flex justify-end gap-1">
            <input
              type="button"
              value="Clear Filter"
              className="text-sm rounded-sm cursor-pointer px-4 py-2 bg-ac text-prm-txt"
              onClick={clear}
            />
            <input
              type="submit"
              value="Apply"
              className="text-sm rounded-sm cursor-pointer px-4 py-2 bg-ac-sec text-prm-txt"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default FilterItem;
