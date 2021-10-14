import Link from "next/link";
import Image from 'next/image';


export default function Faq() {
  return (
  <div className="bg-light">
    <div className="p-4 p-md-5 mb-4 container">
    <span className="float-end"><Image src="/kumiprofile.jpg" alt="unknow" width={100} height={100} /></span>

        <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">เกี่ยวกับเรา</h1>
            <p className="lead my-3">แบรนด์ Kumi ก่อตั้งและเปิดตัวผลิตภัณฑ์ครั้งแรกเมื่อเดือนสิงหาคม 2562 ด้วยความร่วมมือ ระหว่างกุมารแพทย์โรคภูมิแพ้ และนักเคมีที่ต้องการพัฒนาผลิตภัณฑ์กันยุงที่มาจากธรรมชาติ อ่อนโยน...</p>
            <Link href="/th/about"><a className="text-decoration-none text-dark">อ่านต่อ &rarr;</a></Link>
        </div>
    </div>
  </div>
  );
}
