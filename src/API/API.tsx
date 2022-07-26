import axios from "axios"
import { useEffect, useState } from "react"

// TData = {
//     id:number,
//     name:string
// }
export default function API(){
    const [api, setApi] = useState([])

    async function getData() {
        const {data} = await axios.get("https://rickandmortyapi.com/api/character")
       setApi(data.results)
       console.log(data)
    }

    useEffect(()=>{
        getData()
    },[])

return ( 
    <> 
        {api.map((datas)  => {
            return( 
                <>
                    <h1 key={datas.id}>{datas.name}</h1>
                    <img src={datas.image}  />
                </>
            )

        })}
    </>
)
}

