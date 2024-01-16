import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState, useEffect } from "react"

export default function ExampleFour() {

  // a number that starts at 0; default template for useState
  /** number is a variable on the left side that is used to display or
   * grab value from useState. setNumber is used to update the useState
   */
  // var [text, setText] = useState("")
    const [number, setNumber] = useState(0); 
  // a color that starts at gray
    const [color, setColor] = useState("gray"); 
  // only takes a trigger that is a boolean value and starts with false 
    const [trigger, setTrigger] = useState(false); 

    const HandleChange = () => {
      if(number > 2) {
        setColor("orange"); 
        //setText("") to make the setText an empty string again
      }
      console.log(number); 
    }

    useEffect(() => {
      var interval; 

      if(trigger) {
        interval = setInterval(() => {
          HandleChange(); 
          setTrigger(false); 
        }, 3000) //after 3 seconds it will do the console.log
      }

      console.log(number); 
      console.log(trigger); 

      return () => clearInterval(interval); //clearing the interval so it doesn't get stuck in a loop
    }, [trigger])

  return(
    <>
        <Header/>
        <main>
            <button onClick={() => {
              setNumber(number + 1);
              // changes trigger value to true
              setTrigger(true);
            }}>Add Number</button>
            <h1 style={{color: color}}>Changing the text color</h1>

            {

              // if number > 1, show the div 
                number > 1 && <div style={{
                  backgroundColor: `${color}`, //can also just do color; calls gray color
                  lineHeight: 10, 
                  padding: 20
                }}>
                  Box
                </div>
            }
        </main>
        <Footer/>
    </>
  )
}