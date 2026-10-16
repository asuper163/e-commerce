import {ChevronLeft, ChevronRight, ChevronsRight} from "lucide-react";

export default function Pagination({currentPage, totalPages, onPageChange}) {
  const getVisiblePages = () => {
    if (totalPages <= 4) {
      return Array.from({length: totalPages}, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, "...", totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, "...", currentPage, "...", totalPages];
  };

  const buttonClass =
    "inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg px-3 py-2 text-sm transition focus:outline-none disabled:pointer-events-none disabled:opacity-40";

  return (
    <nav
      className="flex flex-wrap items-center justify-center gap-x-1"
      aria-label="Pagination"
    >
      {/* Previous */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous"
        className={`${buttonClass} text-gray-700 hover:bg-gray-100`}
      >
        <ChevronLeft className="size-3.5" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-x-1">
        {getVisiblePages().map((page, index) =>
          page === "..." ? (
            <button
              key={`ellipsis-${index}`}
              type="button"
              onClick={() =>
                onPageChange(Math.min(currentPage + 4, totalPages))
              }
              aria-label="Next 4 pages"
              title="Next 4 pages"
              className={`${buttonClass} text-xs text-gray-500 hover:bg-gray-100`}
            >
              <span className="group-hover:hidden">•••</span>
              <ChevronsRight className="hidden size-5 group-hover:block" />
            </button>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              aria-current={currentPage === page ? "page" : undefined}
              className={`${buttonClass} ${
                currentPage === page
                  ? "bg-gray-100 font-medium text-gray-900"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ),
        )}
      </div>

      {/* Next */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next"
        className={`${buttonClass} text-gray-700 hover:bg-gray-100`}
      >
        <ChevronRight className="size-3.5" />
      </button>
    </nav>
  );
}
