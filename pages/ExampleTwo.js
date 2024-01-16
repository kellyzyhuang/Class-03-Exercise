import { useEffect } from "react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function ExampleTwo() {

  /** The square brackets [] makes sure the useEffect only runs 
   * once on page load. Code on pages will run two times. Once 
   * to render what we want and another is to render strict 
   * mode to find any common bugs.
   */

  useEffect(() => {
      console.log("run")
  }, [])

  return(
    <>
      <Header/>
      <main>
        <h1>Example 2</h1>
      </main>
      <Footer/>
    </>
  )
}