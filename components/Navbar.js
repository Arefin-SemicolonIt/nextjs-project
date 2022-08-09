import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";


const Navbar = () => {
  return ( 
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={200} height={45}/>
      </div>
      <Link href="/" ><a className={styles.navbar}>Home</a></Link>
      <Link href="/about" ><a className={styles.navbar}>About</a></Link>
      <Link href="/semicolon" ><a className={styles.navbar}>Our team</a></Link>
    </nav>
   );
}
 
export default Navbar;