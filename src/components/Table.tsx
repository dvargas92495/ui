import React, { useEffect } from "react";
import {
  useTable,
  usePagination,
  UsePaginationInstanceProps,
  TableInstance,
  UsePaginationState,
  UsePaginationOptions,
  TableOptions,
} from "react-table";
import { useLoaderData, useSearchParams } from "@remix-run/react";

type PaginationTableInstance<T extends object> = TableInstance<T> &
  UsePaginationInstanceProps<T> & {
    state: UsePaginationState<T>;
  };

type Options<T extends object> = TableOptions<T> &
  UsePaginationOptions<T> & {
    initialState: UsePaginationState<T>;
  };

const Table = ({
  onRowClick,
}: {
  onRowClick?: (row: any, index: number) => void;
}) => {
  const { data, columns, count } = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();
  const index = Number(searchParams.get("index")) || 0;
  const size = Number(searchParams.get("size")) || 10;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canNextPage,
    canPreviousPage,
    gotoPage,
    previousPage,
    nextPage,
    pageCount,
    pageOptions,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: index,
        pageSize: size,
      },
      manualPagination: true,
      pageCount: Math.ceil((count || data.length) / size),
    } as Options<typeof data>,
    usePagination
  ) as PaginationTableInstance<typeof data>;
  useEffect(() => {
    if (index !== pageIndex || size !== pageSize) {
      setSearchParams({
        index: pageIndex.toString(),
        size: pageSize.toString(),
      });
    }
  }, [index, size, setSearchParams, pageIndex, pageSize]);

  return (
    <>
      <table {...getTableProps()} className="border-2 border-blue-600">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="border-b-2 border-b-red-500 bg-sky-400 text-black font-bold"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={`cursor-pointer ${
                  index % 2 === 0 ? "bg-gray-200" : "bg-gray-300"
                } hover:bg-gray-400`}
                onClick={() => onRowClick?.(data[index], index)}
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className={`p-3 border-2 border-gray-500`}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Table;
