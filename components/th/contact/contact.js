import Link from "next/link";
import Image from 'next/image';


export default function Contact() {
  return (
   <div className="container">
  <div className="row justify-content-center">
    <div className="col-5">
    <Image src="/kumiprofile.jpg" alt="idk" width={1000} height={1000}/>
    </div>
    <div className="col-5">

    <h2>CONTACT US</h2>
      <p>
        You can contact kumi at bla bla bla bla bla 
      </p>    
      </div>
  </div>
   </div>   
  );
}