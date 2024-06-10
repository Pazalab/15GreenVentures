const { useState, useEffect } = require("react")

export const useProfileFetch = () => {
         const [data, setData]  = useState()

         useEffect(() => {
                const fetchData = async () => {
                       const response = await fetch("/api/user");
                       const json = await response.json();
                       setData(json)
                }
                fetchData();
         }, [])

         return { data }
}