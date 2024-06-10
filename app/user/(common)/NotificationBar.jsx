import { useEffect, useRef } from "react";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosCloseCircle } from "react-icons/io";

const NotificationBar = ({ status, type, message,func}) => {
    const notifyRef = useRef()

    useEffect(() => {
            if(status){
                  notifyRef.current.classList.add("active")
            }else{
                  notifyRef.current.classList.remove("active")
            }

            setTimeout(() => {
                notifyRef.current.classList.remove("active")
                
            }, 4000)
      
           setTimeout(() => {
                  func({ status: false })
            }, 4500)
    }, [status, func])


  return (
    <div ref={notifyRef} className={ type === 'success' ? "notification-bar success" : "notification-bar error"}>
            <p>{type === 'success' ? <span><GoCheckCircleFill /></span> : <span><IoIosCloseCircle /></span> }
            {message}</p>
    </div>
  )
}

export default NotificationBar