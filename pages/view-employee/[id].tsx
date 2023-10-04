import Sidebar from "@/component/Sidebar"
import Title from "@/container/Title"
import styles from './style.module.css'
import EmployeeView from "@/container/View-Employee"
import employeeStore from "@/store/employee"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


const ViewEmployee=()=>{
    const router:any = useRouter()
    const employeeDetails = employeeStore();
    const [viewdata,setViewdata]=useState([])

    console.log("router.query.id",typeof router.query.id)
    useEffect(()=>{
        const employeeDetailsArr = employeeDetails?.employeeDetails?.filter((e: any, i: number) => e.id === +(router.query.id))
        setViewdata(employeeDetailsArr)
    },[])


    return (
        <>
            <Title title="List-Employee" />
            <div className={styles.sideemenu}>
                <Sidebar />
                <div className="mainsection">
                    <h4 style={{marginLeft:'10px'}}>View Emplyoee</h4>
                    <EmployeeView employeeDetailsArr={viewdata[0]}/>
                </div>
            </div>
        </>
    )
}
export default ViewEmployee