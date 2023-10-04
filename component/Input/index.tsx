import style from './style.module.css'

type Props = {
    name: string;
    label?: string;
    error?: any;
    register?: any;
}
const InputField: React.FC<Props> = ({ label, register, name, error }) => {
    return (
        <>
            <div className={style.input}>
                {label && <label htmlFor={name}>{label}</label>}
                <input {...register(name)} className={style.input}/><br />
                {error && <span style={{ color: 'red' }}>{error}</span>}
            </div>
        </>
    )

}
export default InputField