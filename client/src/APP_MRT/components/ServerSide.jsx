import React, { useEffect, useMemo, useState } from 'react';
import MaterialReactTable from 'material-react-table';

const ServerSide = () => {
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRefetching, setIsRefetching] = useState(false);
    const [columnFilters, setColumnFilters] = useState([]);
    const [globalFilter, setGlobalFilter] = useState('');
    const [sorting, setSorting] = useState([]);
    const [pagination, setPagination] = useState({
        pageIndex: 1,
        pageSize: 10,
    });
    const [rowCount, setRowCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            if (!data.length) {
                setIsLoading(true);
            } else {
                setIsRefetching(true);
            }

            const url = new URL(
                '/api/data',
                process.env.NODE_ENV === 'production'
                    ? 'https://www.material-react-table.com'
                    : 'http://localhost:3000',
            );
            url.searchParams.set(
                'start',
                `${pagination.pageIndex * pagination.pageSize}`,
            );
            url.searchParams.set('size', `${pagination.pageSize}`);
            url.searchParams.set('filters', JSON.stringify(columnFilters ?? []));
            url.searchParams.set('globalFilter', globalFilter ?? '');
            url.searchParams.set('sorting', JSON.stringify(sorting ?? []));

            try {
                const response = await fetch(`http://localhost:7100/mui/list?page=${pagination.pageIndex}&limit=${pagination.pageSize}`);
                const json = await response.json()
                setData(json.rows)
                setRowCount(json.count)
            } catch (error) {
                setIsError(true)
                console.error(error)
                return
            }
            setIsError(false)
            setIsLoading(false)
            setIsRefetching(false)
        };
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pagination.pageIndex, pagination.pageSize])

    const columns = useMemo(
        () => [
            {
                accessorKey: 'id', header: 'ID',
            },
            {
                accessorKey: 'name', header: 'name',
            },
            {
                accessorKey: 'company', header: 'company',
            },
            {
                accessorKey: 'city', header: 'city',
            },
            {
                accessorKey: 'salary', header: 'salary',
            },
            {
                accessorKey: 'animal', header: 'animal',
            },
            {
                accessorKey: 'location', header: 'location',
            },
            {
                accessorKey: 'vehicle', header: 'vehicle',
            },
            {
                accessorKey: 'music', header: 'music',
            },
            {
                accessorKey: 'phone', header: 'phone',
            },
            {
                accessorKey: 'lorem', header: 'lorem'
            }
        ],
        [],
    );


    return (
        <MaterialReactTable
            columns={columns}
            data={data}
            enableRowSelection
            getRowId={(row) => row.phoneNumber}
            initialState={{ showColumnFilters: true }}
            manualFiltering
            manualPagination
            manualSorting
            muiToolbarAlertBannerProps={
                isError
                    ? {
                        color: 'error',
                        children: 'Error loading data',
                    }
                    : undefined
            }
            // onColumnFiltersChange={setColumnFilters}
            // onGlobalFilterChange={setGlobalFilter}
            onPaginationChange={setPagination}
            // onSortingChange={setSorting}
            rowCount={rowCount}
            state={{
                columnFilters,
                globalFilter,
                isLoading,
                pagination,
                showAlertBanner: isError,
                showProgressBars: isRefetching,
                sorting,
            }}
            // for all columns
            defaultColumn={{
                minSize: 20, //allow columns to get smaller than default
                maxSize: 9001, //allow columns to get larger than default
                size: 260, //make columns wider by default
            }}
            // for grid by default
            muiTableProps={{
                sx: {
                    tableLayout: 'fixed',
                },
            }}
            muiTableBodyCellProps={{
                style: {
                    whiteSpace: 'nowrap',
                    // wordWrap: "break-word"
                }
            }}
        />
    )
}

export default ServerSide