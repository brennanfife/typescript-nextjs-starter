/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-nested-ternary */
import {
  Table as CTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
} from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { useTable, useSortBy } from 'react-table';
import { useMemo } from 'react';

export default function Table() {
  const data = useMemo(
    () => [
      {
        protocol: `Curve`,
        daily: 0,
        weekly: 0,
        monthly: 0,
        total: 0,
      },
      {
        protocol: `Compound`,
        daily: 0,
        weekly: 0,
        monthly: 0,
        total: 0,
      },
      {
        protocol: `AAVE`,
        daily: 0,
        weekly: 0,
        monthly: 0,
        total: 0,
      },
      {
        protocol: `Keeper`,
        daily: 0,
        weekly: 0,
        monthly: 0,
        total: 0,
      },
      {
        protocol: `Sushi`,
        daily: 0,
        weekly: 0,
        monthly: 0,
        total: 0,
      },
      {
        protocol: `Yearn`,
        daily: 0,
        weekly: 0,
        monthly: 0,
        total: 0,
      },
      {
        protocol: `Pickle`,
        daily: 0,
        weekly: 0,
        monthly: 0,
        total: 0,
      },
      {
        protocol: `88MPH`,
        daily: 0,
        weekly: 0,
        monthly: 0,
        total: 0,
      },
      {
        protocol: `Saffron`,
        daily: 0,
        weekly: 0,
        monthly: 0,
        total: 0,
      },
      {
        protocol: `Alpha`,
        daily: 0,
        weekly: 0,
        monthly: 0,
        total: 0,
      },
    ],
    [],
  );

  const columns = useMemo(
    () => [
      {
        Header: `Protocol`,
        accessor: `protocol`,
      },
      {
        Header: `Daily`,
        accessor: `daily`,
        isNumeric: true,
      },
      {
        Header: `Weekly`,
        accessor: `weekly`,
        isNumeric: true,
      },
      {
        Header: `Monthly`,
        accessor: `monthly`,
        isNumeric: true,
      },
      {
        Header: `Total`,
        accessor: `total`,
        isNumeric: true,
      },
    ],
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);
  return (
    <CTable {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th
                // @ts-ignore
                {...column.getHeaderProps(column.getSortByToggleProps())}
                // @ts-ignore
                isNumeric={column.isNumeric}
              >
                {column.render(`Header`)}
                <chakra.span pl="4">
                  {/* @ts-ignore */}
                  {column.isSorted ? (
                    // @ts-ignore
                    column.isSortedDesc ? (
                      <TriangleDownIcon aria-label="sorted descending" />
                    ) : (
                      <TriangleUpIcon aria-label="sorted ascending" />
                    )
                  ) : null}
                </chakra.span>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                // @ts-ignore
                <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                  {cell.render(`Cell`)}
                </Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </CTable>
  );
}
