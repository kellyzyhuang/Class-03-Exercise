import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleThree() {
  const [number, setNumber] = useState(0); 

  const colors = ["red", "orange", "yellow", "green", "blue", "violet"]; 

  useEffect(() => {
    // length of array, colors.length, if/else
    // 5 = violet > colors.length = 6 - 1 = 5 
    if(number > colors.length - 1) {
      setNumber(0); 
      console.log("changing number value: " + colors[0]); 
    } else {
      console.log("changing number value: " + colors[number]); 
    }
  }, [number])


  return(
    <>
        <Header/>
        <main>
            <h1>Example 3</h1>

            <button style={{backgroundColor: colors[number]}}
                    onClick={() => setNumber(number + 1)}>
                    Increment Number
            </button>
            <div>
              {number}
            </div>
        </main>
        <Footer/>
    </>
  )
}