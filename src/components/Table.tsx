import React from "react";
import {
  createTable,
  useTableInstance,
  getCoreRowModelSync,
  getColumnFilteredRowModelSync,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { useLoaderData, useSearchParams } from "@remix-run/react";

const table = createTable();

const Table = ({
  onRowClick,
  className = "border-2 border-blue-600 w-full",
  thClassName = "border-b-2 border-b-red-500 bg-sky-400 text-black font-bold cursor-pointer",
  theadClassName = "",
  getTrClassName = (index: number) =>
    `cursor-pointer ${
      index % 2 === 0 ? "bg-gray-200" : "bg-gray-300"
    } hover:bg-gray-400`,
  getTdClassName = () => `p-3 border-2 border-gray-500`,
}: {
  onRowClick?: (row: any, index: number) => void;
  className?: string;
  thClassName?: string;
  theadClassName?: string;
  getTrClassName?: (index: number) => string;
  getTdClassName?: (index: number) => string;
}) => {
  const { data, columns: loaderColumns, count } = useLoaderData<{
    count: number;
    columns: { Header: string; accessor: string }[];
    data: {}[];
  }>();
  const columns = React.useMemo(
    () =>
      table.createColumns(
        loaderColumns.map((col) =>
          table.createDataColumn(col.accessor, {
            header: col.Header,
          })
        )
      ),
    []
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const index = Number(searchParams.get("index")) || 0;
  const size = Number(searchParams.get("size")) || 10;
  const {
    getTableProps,
    getTableBodyProps,
    getHeaderGroups,
    getRowModel,
    getCanNextPage,
    getCanPreviousPage,
    setPageIndex,
    previousPage,
    nextPage,
    getPageCount,
    getPageOptions,
    setPageSize,
    getState,
  } = useTableInstance(table, {
    columns,
    data,
    state: {
      pagination: {
        pageIndex: index,
        pageSize: size,
        pageCount: count,
      },
    },

    getCoreRowModel: getCoreRowModelSync(),
    getColumnFilteredRowModel: getColumnFilteredRowModelSync(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: (val) => {
      if (typeof val !== "function") {
        setSearchParams({
          index: val.pageIndex.toString(),
          size: val.pageSize.toString(),
        });
      }
    },
  });
  const {
    pagination: { pageIndex, pageSize },
  } = getState();

  return (
    <div className="w-full">
      <table {...getTableProps()} className={className}>
        <thead className={theadClassName}>
          {getHeaderGroups().map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className={thClassName}>
                  {column.renderHeader()}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {getRowModel().rows.map((row, index) => {
            return (
              <tr
                {...row.getRowProps()}
                className={getTrClassName(index)}
                onClick={() => onRowClick?.(data[index], index)}
              >
                {row.getAllCells().map((cell, jndex) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className={getTdClassName(jndex)}
                    >
                      {cell.renderCell()}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {getPageOptions().length > 1 && (
        <div className="w-full flex justify-space-between items-center">
          <div>
            <button
              onClick={() => setPageIndex(0)}
              disabled={!getCanPreviousPage()}
            >
              {"<<"}
            </button>
            <button
              onClick={() => previousPage()}
              disabled={!getCanPreviousPage()}
            >
              {"<"}
            </button>
            <button onClick={() => nextPage()} disabled={!getCanNextPage()}>
              {">"}
            </button>
            <button
              onClick={() => setPageIndex(getPageCount() - 1)}
              disabled={!getCanNextPage()}
            >
              {">>"}
            </button>
          </div>
          <div>
            <span>
              Page
              <strong>
                {pageIndex + 1} of {getPageOptions().length}
              </strong>
            </span>
            <span>
              | Go to page:
              <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  setPageIndex(page);
                }}
                className={" w-24"}
              />
            </span>
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
        </div>
      )}
    </div>
  );
};

export default Table;
