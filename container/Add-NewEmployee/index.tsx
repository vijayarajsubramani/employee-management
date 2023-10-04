import Imageuploader from "@/component/Imageuploader";
import Input from "@/component/Input"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import style from './style.module.css'
import Button from "@/component/button";
import employeeStore from '../../store/employee'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const schema = yup.object().shape({
    employee_name: yup.string().trim().required('Please enter the employee_name').min(3).max(25),
    employee_salary: yup.number().required('Please enter the employee_salary').positive().integer(),
    employee_age: yup.number().required('Please enter the employee_age').positive().integer(),
    profile_image: yup.string()

})

const AddNewEmployee = ({ detail }: any) => {
    console.log("detail", detail)
    const router = useRouter()
    const addEmployee = employeeStore((state) => state.addItem);
    const updateEmployee = employeeStore((state) => state.updateEmployee);
    const employeeDetails = employeeStore();
    const [imageFile, setImageFile] = useState<any>()
    const employeeDetailsArr = employeeDetails?.employeeDetails?.filter((e: any, i: number) => e.id === +detail)

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const dispatchData = () => {
        setValue('employee_name', employeeDetailsArr[0].employee_name);
        setValue('employee_salary', employeeDetailsArr[0].employee_salary)
        setValue('employee_age', employeeDetailsArr[0].employee_age)
        setValue('profile_image', employeeDetailsArr[0].profile_image ?? imageFile)
        setImageFile(employeeDetailsArr[0].profile_image)
    }

    const onsubmitHandler = async (data: any) => {
        console.log("data", data)
        try {
            console.log("submit called")
            data.profile_image = imageFile || employeeDetailsArr[0].profile_image
            if (+detail) {
                console.log("update--->", data)
                updateEmployee({ ...data, id: +detail })
                router.push({ pathname: '/employee-list', query: { name: 'update' } })
            } else {
                data.id = Math.floor(Math.random() * 100 + 100)
                console.log("add--->", data)
                addEmployee(data)
                router.push({ pathname: '/employee-list', query: { name: 'add' } })
            }
        } catch (err) {
            console.log('err', err)
        }
    }

    useEffect(() => {
        if (employeeDetailsArr[0]) dispatchData()
    }, [detail])

    return (
        <>
            <div className={style.employeeForm}>
                <form onSubmit={handleSubmit(onsubmitHandler)}>
                    <Input label="Employee Name" register={register} name="employee_name" error={errors?.employee_name?.message} />
                    <Input label="Employee Salary" register={register} name="employee_salary" error={errors?.employee_salary?.message} />
                    <Input label="Employee Age" register={register} name="employee_age" error={errors?.employee_age?.message} />
                    <Imageuploader setImageFile={setImageFile} imageFile={imageFile} />
                    <Button text={+detail ? 'Update' : 'Add'} />
                </form>
            </div>
        </>
    )

}
export default AddNewEmployee