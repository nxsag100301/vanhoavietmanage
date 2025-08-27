import React from 'react'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { useState } from 'react'
import icons from '@/constants/icons'
import PaginationCustom from './Components/PaginationCustom'

const DataTable = ({ title, data, columns, borderRow = false, sortBy }) => {
  const [sorting, setSorting] = useState([])
  const [columnFilters, setColumnFilters] = useState([])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  })

  return (
    <div className='w-full rounded-[32px] px-8 py-4 2xl:py-6 bg-white border border-grayneutral-200'>
      <div className='flex items-center py-1 2xl:py-4'>
        {/* <Input
          placeholder='Filter emails...'
          value={table.getColumn('email')?.getFilterValue() ?? ''}
          onChange={(event) =>
            table.getColumn('email')?.setFilterValue(event.target.value)
          }
          className='max-w-sm'
        /> */}
        <DropdownMenu>
          <div className='flex w-full justify-between items-center'>
            <h3 className='text-h5 2xl:text-h4 text-primary-700'>{title}</h3>
            <Button
              onClick={() => {
                const sortColumn = table.getColumn(sortBy)
                if (sortColumn) {
                  sortColumn.toggleSorting(sortColumn.getIsSorted() === 'asc')
                }
              }}
              variant='outline'
              className='h-[34px] w-[120px] 2xl:h-[38px] 2xl:w-[157px] text-tagline-semibold 2xl:text-body2-medium rounded-[12px]'
            >
              <img
                src={icons.sortByText}
                className='w-[14px] h-[14px] 2xl:w-[18px] 2xl:h-[18px]'
              />
              Sắp xếp theo
            </Button>
          </div>

          <DropdownMenuContent align='end'>
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className='capitalize'
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='overflow-hidden rounded-md'>
        <Table className='border-separate border-spacing-y-[8px]'>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className='text-subtitle3 font-semibold text-text-950 text-center border-b border-gray-neutral-200'
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} className=''>
                  {row.getVisibleCells().map((cell, idx) => (
                    <TableCell
                      key={cell.id}
                      className={`text-center ${
                        borderRow
                          ? `border-t border-b border-gray-neutral-200 ${
                              idx === 0
                                ? 'rounded-l-[24px] border-l'
                                : idx === row.getVisibleCells().length - 1
                                ? 'rounded-r-[24px] border-r'
                                : ''
                            }`
                          : ''
                      } `}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <PaginationCustom />
    </div>
  )
}

export default DataTable
