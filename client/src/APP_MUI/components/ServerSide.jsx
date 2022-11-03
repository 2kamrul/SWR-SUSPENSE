import React, { useEffect, useState } from 'react'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { Container } from '@mui/material';

const columns = [
    {
        field: 'id', headerName: 'ID', width: 70
    },
    {
        field: 'name', headerName: 'name', width: 200
    },
    {
        field: 'company', headerName: 'company', width: 200
    },
    {
        field: 'city', headerName: 'city', width: 200
    },
    {
        field: 'salary', headerName: 'salary', width: 200
    },
    {
        field: 'animal', headerName: 'animal', width: 200
    },
    {
        field: 'location', headerName: 'location', width: 200
    },
    {
        field: 'vehicle', headerName: 'vehicle', width: 200
    },
    {
        field: 'music', headerName: 'music', width: 200
    },
    {
        field: 'phone', headerName: 'phone', width: 200
    },
    {
        field: 'lorem', headerName: 'lorem', width: 200
    },
]



const ServerSide = () => {

    const [pageState, setPageState] = useState({
        isLoading: false,
        data: [],
        total: 0,
        page: 1,
        pageSize: 10
    })

    useEffect(() => {
        const fetchData = async () => {
            console.log('ON')
            setPageState(old => ({ ...old, isLoading: true }))
            const response = await fetch(`http://localhost:7100/mui/list?page=${pageState.page}&limit=${pageState.pageSize}`)
            const json = await response.json()
            console.log(json)
            setPageState(old => ({ ...old, isLoading: false, data: json.rows, total: json.count }))
        }
        fetchData()
    }, [pageState.page, pageState.pageSize])


    return (
        <Container style={{ minHeight: 400 }}>
            <DataGrid
                autoHeight
                rows={pageState.data}
                rowCount={pageState.total}
                loading={pageState.isLoading}
                rowsPerPageOptions={[10, 30, 50, 70, 100]}
                pagination
                page={pageState.page - 1}
                pageSize={pageState.pageSize}
                paginationMode="server"
                onPageChange={(newPage) => {
                    setPageState(old => ({ ...old, page: newPage + 1 }))
                }}
                onPageSizeChange={(newPageSize) => setPageState(old => ({ ...old, pageSize: newPageSize }))}
                columns={columns}
            />
        </Container>
    )
}

export default ServerSide