import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { DOTS, usePagination } from "../hooks/usePagination";
import Button from "../ui/Button";
import { useContext } from "react";
import DataTableContext from "../../contexts/DataTableContext";

function TablePagination(props) {
  const {
    totalItems,
    pageSize,
    currentPage,
    siblingCount = 1,
    onPageChange,
  } = props;
  const paginationRange = usePagination({
    currentPage: currentPage,
    pageSize: pageSize,
    totalItems: totalItems,
    siblingCount: siblingCount,
  });
  const { isFilterMode } = useContext(DataTableContext);

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  if (isFilterMode) return <></>;
  return (
    <div className="flex items-center gap-1 justify-center">
      {/* Left navigation arrow */}

      <Button
        type="secondary"
        onClick={onPrevious}
        disabled={currentPage === 1}
        variant="ghost"
        aria-label="previous page button"
      >
        <BsArrowLeft />
      </Button>
      {paginationRange.map((pageNumber, i) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return "...";
        }

        // Render our Page Pills
        return (
          <button
            key={i}
            className={`${
              pageNumber === currentPage ? "bg-ac" : "disabled"
            } h-10 p-1 min-w-10 rounded-sm`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
      {/*  Right Navigation arrow */}
      <Button
        type="secondary"
        onClick={onNext}
        disabled={currentPage === lastPage}
        variant="ghost"
        aria-label="next page button"
      >
        <BsArrowRight />
      </Button>
    </div>
  );
}

export default TablePagination;
