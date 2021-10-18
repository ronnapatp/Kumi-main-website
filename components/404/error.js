import Img from 'next/image';
import Link from 'next/link';

export default function Error () {
    return (
        <div className="container">
            <div className="px-4 py-5 my-5 text-center">
                <span className="d-block mx-auto mb-4">
                    <Img src="/kumiprofile.jpg" alt="kumi" width={72} height={72} />
                </span>
              <h1 className="display-5 fw-bold">404 - Page not found</h1>
              <div className="col-lg-6 mx-auto">
                <p>สำหรับภาษาไทยกรุณาเลื่อนลง</p>
                <p className="lead mb-4">Kumi the chubby bear website can not find this page for you! But not worry you can back to home page by click button down below.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link href="/">
                  <button type="button" className="btn btn-outline-secondary btn-lg px-4">Back to home page!</button>
                  </Link>
                </div>
              </div>
            </div>
            <br /><hr /><br />
            <div className="px-4 py-5 my-5 text-center">
                <span className="d-block mx-auto mb-4">
                    <Img src="/kumiprofile.jpg" alt="kumi" width={72} height={72} />
                </span>
              <h1 className="display-5 fw-bold">404 - ไม่พบหน้านี้</h1>
              <div className="col-lg-6 mx-auto">
                <p>For English please scroll up</p>
                <p className="lead mb-4">Kumi เว็บไซต์ไม่พบหน้านี้สําหรับคุณ! แต่ไม่ต้องกังวลคุณสามารถกลับไปที่หน้าแรกได้โดยคลิกปุ่มด้านล่าง</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link href="/th/">
                  <button type="button" className="btn btn-outline-secondary btn-lg px-4">กลับหน้าหลัก!</button>
                  </Link>
                </div>
              </div>
            </div>
        </div>
    )
}