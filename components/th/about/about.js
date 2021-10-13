import Link from "next/link";
import Image from 'next/image';


export default function Nav() {
  return (
   <div className="container">
  <div className="row justify-content-center">
    <div className="col-4">
      <h2>About us</h2>
      <p>
          Kumi is bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
      </p>
    </div>
    <div className="col-4">
      <Image src="/kumiprofile.jpg" alt="idk" width={1000} height={1000}/>
    </div>
  </div>
   </div>   
  );
}
