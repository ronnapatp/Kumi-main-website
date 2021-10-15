import Link from "next/link";
import Image from 'next/image';


export default function Contact() {
  return (
   <div className="container">
  <div className="row justify-content-center">
    <div className="col-5">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2389.0922410983308!2d100.51577036460203!3d13.737150412465095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29927bbcec325%3A0x7c29f70cef77a152!2zMzIwIOC4luC4meC4meC4nuC4o-C4sOC4o-C4suC4oeC4l-C4teC5iCDguZQg4LmB4LiC4Lin4LiHIOC4oeC4q-C4suC4nuC4pOC4kuC4suC4o-C4suC4oSDguYDguILguJXguJrguLLguIfguKPguLHguIEg4LiB4Lij4Li44LiH4LmA4LiX4Lie4Lih4Lir4Liy4LiZ4LiE4LijIDEwNTAw!5e0!3m2!1sth!2sth!4v1634269278127!5m2!1sth!2sth" width="500" height="500" ></iframe>  
    </div>
    <div className="col-5">

    <h2>ติดต่อเรา</h2>
    <p>เริ่มต้นที่จะติดต่อเรา ถ้าคุณต้องการความช่วยเหลือกรุณาไปที่หน้าช่วยเหลือก่อน</p>
    <br />
      <p className="fs-5">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      </svg> &nbsp;
      320 ถนนพระรามที่ ๔ แขวง มหาพฤฒาราม เขตบางรัก กรุงเทพมหานคร 10500
      </p>
      <p className="fs-5">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-open" viewBox="0 0 16 16">
        <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z"/>
      </svg> &nbsp;
      <Link href="mailto:kumithebear@gmail.com"><a target="_blank" className="text-dark">kumithebear@gmail.com</a></Link>
      </p>
      <p className="fs-5">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
      </svg> &nbsp;
      <Link href="https://www.facebook.com/Kumithechubbybear/"><a target="_blank" className="text-dark">Kumithechubbybear</a></Link>
      </p>
      </div>
  </div>
   </div>   
  );
}