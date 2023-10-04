import Sidebar from "@/component/Sidebar";
import Title from "@/container/Title";
import styles from './style.module.css'
import AddNewEmployee from "@/container/Add-NewEmployee";


const AddEmployee = () => {

    return (
        <>
            <Title title="Add-Employee" />
            <div className={styles.sideemenu}>
                <Sidebar />
                <div className="mainsection">
                    <h4 style={{marginLeft:'10px'}}>Create New Emplyoee</h4>
                    <AddNewEmployee/>
                </div>
            </div>
        </>
    )

}
export default AddEmployee;