import Link from "next/link"
import { useEffect, useState } from "react"
import styles from './style.module.css'
import employeeStore from "@/store/employee"


const Sidebar=()=>{
    const [sidemenu, setSidemenu] = useState<any[]>([])
    const empId = employeeStore((state) => state.empId);

    const menu=[
        { name: "List", url: "/employee-list", disabled: false },
        { name: "Add", url: "/add-employee", disabled: false },
    ]
    const handleSideMenu=()=>{
        setSidemenu(menu)
        empId(null)
    }

    useEffect(()=>{
        handleSideMenu()
    },[])

    return(
        <>  
        <div className={styles.sidemenu}>
        <nav className={styles.nav}>
            {sidemenu?.map((data,index)=>(
                <Link href={`${data?.disabled ? '#' :data.url}`} key={index} legacyBehavior>
                    <a>
                        <span>{data.name}</span>
                    </a>
                </Link>
            ))}
            </nav>
        </div>
        </>
    )

}
export default Sidebar