import { useRef, useState } from "react";
import style from './style.module.css'
import PhotoView from "../Photoview";
import { Badge } from "@mui/material";

type Props = {
    setImageFile?: any,
    imageFile?: string
}
const Imageuploader: React.FC<Props> = ({ setImageFile, imageFile }) => {
    const [imagesrc,setImageSrc]=useState("")
    const inputElement: any = useRef(null);
    const uploadHandler = () => {
        if (inputElement) inputElement?.current.click()
    }
    const handleUpload = async (e: any) => {
        if (e.target.files[0]) {
            const formData = new FormData();
            formData.append('image', e.target.files[0]);
            try {
                const res = await fetch('/api/upload', { method: 'POST', body: formData }).then(res => res.json())
                console.log(res)
                if (res) {
                    if (setImageFile) setImageFile(res?.data)
                        setImageSrc(res?.data)
                } else {
                    console.log("image upload error")
                }
            } catch (err) {
                console.log("image upload error", err)
            }
        }
    }
    const onDelete=()=>{

    }
    return (
        <>
            <div onClick={uploadHandler} className={style.image}>
                <input type="file" ref={inputElement} className={style.hideimage} accept="image/*" onChange={handleUpload} onClick={(e: any) => { e.target.value = null }} />
                <p>Profile photo</p>
            </div>
            <div>
                    <Badge color="error" onClick={onDelete}>
                        <PhotoView thumbnail={imageFile ?? imagesrc} />
                    </Badge>
            </div>
        </>
    )

}
export default Imageuploader