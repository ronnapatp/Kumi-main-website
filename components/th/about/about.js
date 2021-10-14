import Link from "next/link";
import Image from 'next/image';


export default function Nav() {
  return (
   <div className="container">
  <div className="row justify-content-center">
    <div className="col-4">
      <h2>เกี่ยวกับเรา</h2>
      <p>
      แบรนด์ Kumi ก่อตั้งและเปิดตัวผลิตภัณฑ์ครั้งแรกเมื่อเดือนสิงหาคม 2562 ด้วยความร่วมมือ ระหว่างกุมารแพทย์โรคภูมิแพ้ และนักเคมีที่ต้องการพัฒนาผลิตภัณฑ์กันยุงที่มาจากธรรมชาติ อ่อนโยน สามารถใช้กับเด็กอ่อนได้ ในขณะที่คงประสิทธิภาพกันยุงได้ดีจึงร่วมมือกันคิดค้นและพัฒนาสูตร Kumi Ricebutter Balm ขึ้น โดยเลือกสรรส่วนผสมจากธรรมชาติ เช่น ไรซ์บัตเตอร์ หอมแดง ฯ และ ปราศจากสารอันตรายต่างๆ
      </p>
    </div>
    <div className="col-4">
      <Image src="/kumiprofile.jpg" alt="idk" width={1000} height={1000}/>
    </div>
  </div>
   </div>   
  );
}
