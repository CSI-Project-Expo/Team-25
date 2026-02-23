import { useState,useEffect } from "react"
import { Button } from "@/components/ui/button"

import img1 from "../assets/image1.png"
import img2 from "../assets/image2.png"
import img3 from "../assets/image3.png"

export default function Home(){

const images=[img1,img2,img3]
const[index,setIndex]=useState(0)

useEffect(()=>{
 const t=setInterval(()=>{
   setIndex(prev=>(prev+1)%images.length)
 },5000)
 return()=>clearInterval(t)
},[])

return(

<div className="min-h-screen">

{/* HERO */}
<div className="relative h-screen">

{images.map((img,i)=>(
<img key={i}
src={img}
className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${i===index?"opacity-100":"opacity-0"}`}/>
))}

<div className="absolute inset-0 bg-black/60"></div>

<div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">

<h1 className="text-5xl font-bold">Reuniting Families. Restoring Hope.</h1>

<p className="mt-4 max-w-xl">
Every minute matters. Help bring someone home.
</p>

<div className="mt-6 space-x-4">
<Button>Report Missing Person</Button>
<Button className="bg-white text-black">Report Sighting</Button>
</div>

</div>
</div>

{/* INSTRUCTIONS */}
<div className="p-12 text-center">
<h2 className="text-3xl font-semibold">How You Can Help</h2>
<p className="mt-4 text-muted-foreground">
Register missing persons, report sightings anonymously, and help reunite families faster.
</p>
</div>

</div>
)
}