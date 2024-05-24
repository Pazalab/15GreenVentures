"use client"
import { khumb_sans } from "@/app/layout"
import styles from "../page.module.css"
import { useState, useEffect } from "react";
import { IoCloseCircleOutline, IoCloudUploadOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import Image from "next/image";

const ProfileBody = () => {
    const [ userImage, setUserImage ] = useState([])
    const [ imageUrl, setImageUrl] = useState([]);
    const [ status, setStatus] = useState(false)

    //upload picture
    const uploadProfile = (e) => {
        setUserImage([...e.target.files]); 
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


  return (
    <div className={styles.profile_body}>
               <div className={styles.profile_header}>
                          <h3>Personal Info</h3>
                          <p>Update your photo and personal details here.</p>
               </div>
               <div className={styles.form_content}>
                        <form>
                                 <div className={styles.input_row}>
                                             <label htmlFor="name">Name</label>
                                             <input type="text" className={khumb_sans.className} placeholder="Name"/>
                                 </div>
                                 <div className={styles.input_row}>
                                             <label htmlFor="email">Email address</label>
                                             <input type="email" className={khumb_sans.className} placeholder="name@email.com" />
                                 </div>
                                  <div className={styles.input_row}>
                                              <div className={styles.left_col}>
                                                          <label htmlFor="image">Your photo</label>
                                                          <p>This will be displayed on your profile</p>
                                              </div>
                                              <div className={styles.right_image_col}>
                                                          <div className={styles.image_box}>
                                                                    { status ? <Image src={imageUrl}  sizes="100vw" fill style={{objectFit: 'cover'}} alt='' /> : <span><CiImageOn /> </span>}
                                                          </div>
                                                          <div className={styles.picture_btns}>      
                                                                      { status ?  <p onClick={clearImageProfile}><span><IoCloseCircleOutline /></span>Cancel</p> : 
                                                                           <span className={styles.upload_btn}>
                                                                                    <input type="file" onChange={uploadProfile} />
                                                                                    <p><span><IoCloudUploadOutline /></span>Upload</p>
                                                                          </span>
                                                                      }
                                                          </div>
                                              </div>
                                  </div>
                                  <div className={styles.input_row}>
                                             <label htmlFor="email">Role</label>
                                             <input type="text" className={khumb_sans.className} value="Investor" readOnly />
                                 </div>
                                 <div className={styles.input_row}>
                                             <label htmlFor="phone">Phone Number</label>
                                             <input type="tel" className={khumb_sans.className} placeholder="+254 712345678" />
                                 </div>
                                 <div className={styles.input_row}>
                                             <label htmlFor="Country">Country</label>
                                             <input type="text" className={khumb_sans.className} placeholder="Mauritius" />
                                 </div>
                                 <div className={styles.input_row}>
                                               <div className={styles.left_col}>
                                                          <label htmlFor="bio">Bio</label>
                                                          <p>Write a short intro about yourself</p>
                                              </div>
                                              <textarea className={khumb_sans.className} placeholder="Shortly describe yourself"></textarea>
                                 </div>

                                 <div className={styles.form_btn}>
                                            <button className={khumb_sans.className} type="submit">Save</button>
                                 </div>

                        </form>
               </div>
    </div>
  )
}

export default ProfileBody