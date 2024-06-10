"use client"
import { khumb_sans } from "@/app/layout"
import styles from "../page.module.css"
import { useState, useEffect, useRef } from "react";
import { IoCloseCircleOutline, IoCloudUploadOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useTransition } from "react";
import { updateUser } from "@/actions/profileSettings";
import Spinner from "../../(common)/Spinner";
import { useProfileStore } from "@/lib/store";
import Spinner2 from "../../(common)/Spinner2";
import NotificationBar from "../../(common)/NotificationBar";

const ProfileBody = () => {
    const [ userImage, setUserImage ] = useState([])
    const [ imageUrl, setImageUrl] = useState([]);
    const [ status, setStatus] = useState(false);
    const [ notification, setNotification ] = useState({
             status: false,
             type: "",
             message: ""
    })
      //Zustand
   const { setUserProfile, userProfile } = useProfileStore();
   
    const { register, handleSubmit, formState: { errors},  reset} = useForm({
              values: userProfile
    });
    const [isPending, startTransition ] = useTransition();
    const [uploadError, setUploadError] = useState("")
    const uploadRef = useRef();
   
    //upload picture
    const uploadProfile = () => {
           setUploadError("")
           if(uploadRef){
                  uploadRef.current.addEventListener("change", () => {
                        setUserImage([...uploadRef.current.files])
                  })
           }
    }
  
    //cancel upload process ~ make it empty
    const clearImageProfile = () => {
        setImageUrl([]);
        setUserImage([]);
        setStatus(false)
   }

   //Extract image image url
     useEffect(() => {
         if(userImage.length < 1) return;

         const profileUrl = [];
         userImage.forEach(kitu => {
                 profileUrl.push(URL.createObjectURL(kitu))
                 setStatus(true)
         });
         setImageUrl(profileUrl[0])

  }, [userImage])


  //Save settings
  const SaveSettings = async(data) => {
         if(userImage.length < 1 && userProfile.image === null){
                setUploadError("Please upload your profile photo")
         }
         
         const formData = new FormData();
         formData.append('data', JSON.stringify(data));
         formData.append("image",  userImage.length > 0 ? userImage[0] : userProfile.image)
         
         startTransition(async() => {
                updateUser(formData).then(res=> {
                         setStatus(false)
                         if(res.data){
                               const response = JSON.parse(res.data);
                               setUserProfile(response)
                         }
                         setNotification({ status: true, type: res.type, message: res.msg })
                })
          })
  }
  return (
    <div className={styles.profile_body}>
               <NotificationBar status={notification.status} type={notification.type} message={notification.message} func={setNotification}  />
               <div className={styles.profile_header}>
                          <h3>Personal Info</h3>
                          <p>Update your photo and personal details here.</p>
               </div>
               <div className={styles.form_content}>
                        <form onSubmit={handleSubmit(SaveSettings)}>
                                 <div className={styles.input_row}>
                                             <label htmlFor="name">Name</label>
                                             <div className={styles.inner_input_row}>
                                                        <input type="text" {...register("name", { required: "Please fill in your name"})} className={khumb_sans.className} placeholder="Name"  />
                                                        <span className="error">{errors.name && errors.name.message}</span>
                                             </div>
                                 </div>
                                 <div className={styles.input_row}>
                                             <label htmlFor="email">Email address</label>
                                             <div className={styles.inner_input_row}>
                                                      <input type="email" {...register("email", { required: "Please fill in your email address"})} className={khumb_sans.className} placeholder="name@email.com"  />
                                                      <span className="error">{errors.email && errors.email.message}</span>
                                             </div>
                                 </div>
                                  <div className={styles.input_row}>
                                              <div className={styles.left_col}>
                                                          <label htmlFor="image">Your photo</label>
                                                          <p>This will be displayed on your profile</p>
                                              </div>
                                              <div className={styles.right_col_wrapper}>
                                                   <div className={styles.right_image_col}>
                                                          <div className={styles.image_box}>
                                                                    { }
                                                                    { status ? <Image src={imageUrl}  sizes="100vw" fill style={{objectFit: 'cover'}} alt='' /> :
                                                                    <>
                                                                         { userProfile && userProfile.image ? <Image src={userProfile.image} sizes="100vw" fill style={{objectFit: "cover"}} alt="" /> : <span><CiImageOn /> </span>}
                                                                    </>}
                                                          </div>
                                                          <div className={styles.picture_btns}>      
                                                                      { status ?  <p onClick={clearImageProfile}><span><IoCloseCircleOutline /></span>Cancel</p> : 
                                                                           <span className={styles.upload_btn}>
                                                                                    <input ref={uploadRef} type="file" onClick={uploadProfile} />
                                                                                    <p><span><IoCloudUploadOutline /></span>Upload</p>
                                                                          </span>
                                                                      }
                                                          </div>
                                                     </div>
                                                     <span className="error">{uploadError}</span>
                                              </div>
                                  </div>
                                  <div className={styles.input_row}>
                                             <label htmlFor="email">Role</label>
                                             <input type="text" className={khumb_sans.className} value="Investor" readOnly />
                                 </div>
                                 <div className={styles.input_row}>
                                             <label htmlFor="phone">Phone Number</label>
                                             <div className={styles.inner_input_row}>
                                                        <input type="tel" {...register("phone", { required: "Please add your phone number"})} className={khumb_sans.className}  placeholder="+254 712345678" />
                                                        <span className="error">{errors.phone && errors.phone.message}</span>
                                             </div>
                                 </div>
                                 <div className={styles.input_row}>
                                             <label htmlFor="Country">Country</label>
                                             <div className={styles.inner_input_row}>
                                                       <input type="text" className={khumb_sans.className} {...register("country", { required: "Please state your country"})}  placeholder="Mauritius" />
                                                       <span className="error">{errors.country && errors.country.message}</span>
                                             </div>              
                                 </div>
                                 <div className={styles.input_row}>
                                               <div className={styles.left_col}>
                                                          <label htmlFor="bio">Bio</label>
                                                          <p>Write a short intro about yourself</p>
                                              </div>
                                              <div className={styles.inner_input_row}>
                                                           <textarea className={khumb_sans.className} {...register("bio", { required: "Please write a short bio about yourself"})} placeholder="Shortly describe yourself"></textarea> 
                                                           <span className="error">{errors.bio && errors.bio.message}</span>
                                              </div>
                                 </div>

                                 <div className={styles.form_btn}>
                                            <button className={khumb_sans.className} type="submit">
                                                  { isPending ? <Spinner /> : "Save"}
                                            </button>
                                 </div>

                        </form>
               </div>
    </div>
  )
}

export default ProfileBody