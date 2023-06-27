import React, {useEffect, useMemo} from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, TableProps, chakra, omitThemingProps, Progress,
} from '@chakra-ui/react';
import {
    ColumnDef, flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable
} from "@tanstack/react-table";
import {LaravelPaginationAPI} from "./types/PaginationAPI";

export interface DataTableProps<T> extends TableProps {
    columns: ColumnDef<T>[]
    fetchAPI: (page: number, pageSize: number, sortBy: string|null, sortOrder: "ASC" | "DESC", search: string|null) => Promise<LaravelPaginationAPI<T>>,
    defaultPageSize?: number;
}

const DataTable = <T extends object>(props: DataTableProps<T>) => {

    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [data, setData] = React.useState<LaravelPaginationAPI<T> | undefined>(undefined);

    const [sortBy, setSortBy] = React.useState<string|null>(null);
    const [sortOrder, setSortOrder] = React.useState<"ASC" | "DESC">("ASC");
    const [search, setSearch] = React.useState<string|null>(null);

    const _fetchAPI = (page: number, pageSize: number) => {
        return props.fetchAPI(page, pageSize, sortBy, sortOrder, search).then((r) => {
            setData(r);
        }).finally(() => setIsLoading(false));
    }

    useEffect(() => {
        _fetchAPI(1, props.defaultPageSize ?? 50);
    }, []);

    if(isLoading) {
        return (<Progress isIndeterminate/>)
    }

    const pagination = useMemo(() => ({
        pageIndex: data?.current_page ?? 0,
        pageSize: data?.per_page ?? 0,
    }), [data]);

    const table = useReactTable({
        data: data?.data ?? [],
        columns: props.columns,
        pageCount: data?.last_page ?? 0,
        state: {
            pagination
        },
        // @ts-ignore
        onPaginationChange: ({pageIndex, pageSize}) => _fetchAPI(pageIndex, pageSize),
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <TableContainer>
            <Table {...props}>
                <Thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <Tr key={headerGroup.id}>
                            {headerGroup.headers.map(column => (
                                <Th key={column.id} colSpan={column.colSpan}>
                                    {flexRender(column.column.columnDef.header, column.getContext())}
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </Thead>
                <Tbody>
                    {table.getRowModel().rows.map(row => (
                        <Tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <Td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
}

export default DataTable;
