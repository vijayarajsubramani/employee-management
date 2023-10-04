import DataTable from "@/component/Table"
import employeeStore from "@/store/employee"
import { useRouter } from "next/router";
import { useEffect, useState } from "react"

const api = 'https://api.allorigins.win/raw?url=https://dummy.restapiexample.com/api/v1/employees';

const EmployeeList = () => {
    const router=useRouter();
    const employeeDetails = employeeStore();
    const addEmployee = employeeStore((state) => state.InitialFetchEmployee);
    const data = employeeStore((state: { employeeDetails: any; }) => state.employeeDetails)

    const fetchData = async (url: RequestInfo | URL) => {
        return new Promise(function (resolve, reject) {
            fetch(url).then(res => {
                resolve(res)
            }
            ).catch(err => reject(err))
        })
    }
    useEffect(() => {
        if (router.query.name ==='update' || router.query.name==='add') {
            return addEmployee(data)
        } else {
            fetchData(api).then((res: any) => res.json()).then((res: any) => {
                addEmployee(res?.data)
            }).catch(err => {
                console.log("err", err)
            })
        }
    }, [api])

    return (
        <>
            {employeeDetails?.employeeDetails.length > 0 ? <DataTable rows={employeeDetails?.employeeDetails} /> : <h4 style={{ marginLeft: '50px' }}>No data found</h4>}
        </>
    )
}
export default EmployeeList
