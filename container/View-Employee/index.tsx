import PhotoView from '@/component/Photoview';
import style from './style.module.css'

const EmployeeView = ({ employeeDetailsArr }: any) => {
    console.log("employeeDetailsArr", employeeDetailsArr)
    const { employee_name, employee_salary, employee_age, profile_image } = employeeDetailsArr ?? {};
    return (
        <div>
            {employeeDetailsArr ? <div className={style.employeeForm}>
                <h5>Employee Name</h5>
                <p>{employee_name}</p>
                <h5>Employee Age</h5>
                <p>{employee_age}</p>
                <h5>Employee Salaray</h5>
                <p>{employee_salary}</p>
                <h5>Employee Image</h5>
                <PhotoView thumbnail={profile_image}/>
            </div> : <h4 style={{ margin: "20px" }}>Loading....</h4>}

        </div>
    )
}
export default EmployeeView