import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import employeeStore from '@/store/employee';
import style from './style.module.css'
import { useRouter } from "next/router"



export default function DataTable({ rows }: any) {
    const router = useRouter()
    const empId  = employeeStore((state) => state.empId);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 130 },
        { field: 'employee_name', headerName: 'Name', width: 130 },
        { field: 'employee_age', headerName: 'Age', width: 130 },
        {
            field: 'employee_salary',
            headerName: 'Salary',
            type: 'number',
            width: 130,
        },
        {
            field: 'actions', headerName: 'Actions', width: 130, renderCell: (params) => {
                return (
                    <>
                        <button onClick={(e) => onButtonEdit(e, params.row)} style={{margin:'2px'}}> Edit</button>
                        <button onClick={(e) => onButtonView(e, params.row)}> View</button>
                    </>

                );
            }
        }
    ];
    const onButtonEdit = (e: any, row: any) => {
        e.stopPropagation();
        empId(row)
        router.push(`/edit-employee/${row.id}`)
    };
    const onButtonView=(e: any, row: any)=>{
        e.stopPropagation();
        empId(row)
        router.push(`/view-employee/${row.id}`)

    }
    return (
        <div className={style.list}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
        </div>
    );
}
