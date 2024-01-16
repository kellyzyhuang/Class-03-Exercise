import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleFive() {

  // we want to setup a counter
  // after every one second the number increases by 1
  // we want to display that number on screen as it increases
  // no button is needde it will update automatically 

  const [count, setCount] = useState(0); 

  useEffect(() => {
    var interval = setInterval(() => {
      setCount(count + 1)
    }, 1000); 

    return () => clearInterval(interval); 
    }, [count])

  return(
    <>
      <Header/>
      <main>
      <div>{count}</div>
      </main>
      <Footer/>
    </>
  )
}

