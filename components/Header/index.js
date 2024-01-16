import Link from "next/link"

export default function Header() {
  return(
    <header>
      <div>Header Area</div>
      <Link href={'/'}>Home</Link>
    </header>
  )
}