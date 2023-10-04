import Sidebar from "@/component/Sidebar";
import Title from "@/container/Title";
import styles from './style.module.css'
import EmployeeList from "@/container/Employee-List";


const ListEmployee = () => {

    return (
        <>
            <Title title="List-Employee" />
            <div className={styles.sideemenu}>
                <Sidebar />
                <div className="mainsection">
                    <h4 style={{marginLeft:'10px'}}>List Emplyoee</h4>
                    <EmployeeList />
                </div>
            </div>
        </>
    )

}
export default ListEmployee;