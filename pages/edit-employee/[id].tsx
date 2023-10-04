import Sidebar from "@/component/Sidebar";
import Title from "@/container/Title";
import styles from './style.module.css'
import AddNewEmployee from "@/container/Add-NewEmployee";
import { useRouter } from "next/router";


const EditEmployee = () => {
    const router = useRouter();

    return (
        <>
            <Title title="Add-Employee" />
            <div className={styles.sideemenu}>
                <Sidebar />
                <div className="mainsection">
                    <h4 style={{marginLeft:'10px'}}>Create New Emplyoee</h4>
                    <AddNewEmployee detail={router?.query.id}/>
                </div>
            </div>
        </>
    )

}
export default EditEmployee;