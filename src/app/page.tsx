import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
// import smcu from "/public/smcu.png"

//*****แก้*********
//ไม่ค่อยใช้ br ลองใช้ mt-number
//ถ้าใช้ tailwind ก็ใช้ไปทั้งหมด (ตอนนี้มี CSS รวมอยู่ด้วย)
//const Navbar = () => { ถ้าใช้แบบนี้ใน components ก็ใช้ให้เหมือนกันทั้งหมด
//code format ให้เหมือนกัน alt+shift+F
//loop ส่วนที่ซำ้ๆกัน
//<br /> ปิดในตัวมันเอง
//https://tailwindui.com/?ref=top
//find example of git commit message
//dont commit with error
//styling ex ig->logo, email-> e-Mail

import itlogo from "/public/it_logo.png";

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="container">
        <h2 id="home" className="text-center mt-10">
          <div className="home">
            <Image
              className="mx-auto"
              src={itlogo}
              alt="it_smcu"
              width={250}
              height={250}
            />
          </div>
          <br />
          <div className="text-4xl lg:text-6xl font-bold">IT Division</div>
          <div className="text-4xl lg:text-6xl font-bold">
            The Student Union of Faculty of Medicine,
            <br></br>Chulalongkorn University
          </div>
        </h2>

        <br></br>

        <h2 id="aboutus ">
          <div className="text-2xl font-bold">About us</div>
        </h2>
        <p className="text-lg">
          ฝ่ายเทคโนโลยีสารสนเทศ หรือฝ่าย IT สพจ.
          พวกเราเป็นฝ่ายที่รวมตัวกันของคนที่สนใจด้านคอมพิวเตอร์
          เพื่อจัดกิจกรรมสนุก ๆ สร้างชิ้นงานทางคอมพิวเตอร์และเรียนรู้สิ่งใหม่ ๆ
          ไปด้วยกัน ปัจจุบันฝ่ายเราเป็นฝ่ายที่ดูแลข้อมูลสารสนเทศต่าง ๆ
          ให้กับนิสิตในคณะ ให้บริการทางเทคโนโลยีที่สะดวกและรวดเร็ว
          พวกเราคือคนดูแลบริการต่าง ๆ เช่น server docchula.com และ google
          workspace พวกเราสร้างเว็บไซต์สำหรับงานต่าง ๆ ในคณะไม่ว่าจะเป็น AMSci,
          ANAN DAY, MDCU Voice และอื่น ๆ นอกจากนี้พวกเรายังสนใจใน computer
          science, data science, machine learning และ AI
          เพื่อนำไปพัฒนาเทคโนโลยีทางการแพทย์
          ถ้าคิดว่าสนใจในคอมพิวเตอร์ก็อย่าลังเลที่จะเข้าร่วมกับฝ่ายเทคโนโลยีแล้วมาเรียนรู้ไปด้วยกัน
          !ฝ่ายเทคโนโลยีสารสนเทศ หรือฝ่าย IT สพจ.
          พวกเราเป็นฝ่ายที่รวมตัวกันของคนที่สนใจด้านคอมพิวเตอร์
          เพื่อจัดกิจกรรมสนุก ๆ สร้างชิ้นงานทางคอมพิวเตอร์และเรียนรู้สิ่งใหม่ ๆ
          ไปด้วยกัน
        </p>

        <br></br>

        <h2 id="location">
          <div className="text-2xl font-bold">Location</div>
        </h2>

        <p>
          <Link href="https://maps.app.goo.gl/Qg6S6kzAWEeu3U2y5">
            คณะเเพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
          </Link>
          1873 ถ. พระรามที่ 4 แขวงปทุมวัน เขตปทุมวัน กรุงเทพมหานคร 10330
        </p>

        <br></br>

        <h2 id="contact">
          <div className="text-2xl font-bold">Contact</div>
        </h2>
        <h5>Email : itdivision@docchula.com</h5>
        <br></br>
        <h2 id="teammembers">
          <div className="text-2xl font-bold"> Team members</div>
        </h2>

        <h4>ชั้นปีที่ 1</h4>
        <div className="item">
          <div className="content">
            <ul>
              <li>
                {/* <Image src="/smcu.png" width={50} height={50}/> */}
                <h4>ณภัทษร สุกใส (กึ๊น)</h4>
                <div>
                  Email : keinkunluk@gmail.com
                  <div>
                    Ig :
                    <a href="https://www.instagram.com/kein._.stagram?igsh=MTBveWN0d2trMTNoeQ==">
                      kein._.stagram
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <ul>
              <li>
                {/* <Image src="/smcu.png" width={50} height={50}/> */}
                <h4>ธัทเดช กัลยพฤกษ์(เอส)</h4>
                <div>
                  Email : kanlayphrukthaddej@gmail.com
                  <div>
                    Ig :<a href="8">ยังไม่ได้ใส่จ้า</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <ul>
              <li>
                {/* <Image src="/smcu.png" width={50} height={50}/> */}
                <h4>พิชชาภา ลักษณ์เลิศกุล(ชูก้า)</h4>
                <div>
                  Email : pidchapa.lucklertkul@docchula.com
                  <div>
                    Ig :<a href="8">ยังไม่ได้ใส่จ้า</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <ul>
              <li>
                {/* <Image src="/smcu.png" width={50} height={50}/> */}
                <h4>ศิรดา อุทัยวัฒน์ (แนน)</h4>
                <div>
                  Email : sirada.uth@docchula.com
                  <div>
                    Ig :
                    <a href="https://www.instagram.com/sira.uth?igsh=MXhmYW5lOGFvMGZ6OQ%3D%3D&utm_source=qr">
                      sira.uth
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <ul>
              <li>
                {/* <Image src="/smcu.png" width={50} height={50}/> */}
                <h4>จันทร์วลัย เลี่ยนเครือ (เกน)</h4>
                <div>
                  Email : jennissa0811@docchula.com
                  <div>
                    Ig :<a href="8">ยังไม่ได้ใส่จ้า</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <ul>
              <li>
                {/* <Image src="/smcu.png" width={50} height={50}/> */}
                <h4>วรวีร์ พัวพรพงษ์ (วินชี่)</h4>
                <div>
                  Email : worawee.pua@docchula.com
                  <div>
                    Ig :<a href="8">ยังไม่ได้ใส่จ้า</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <ul>
              <li>
                {/* <Image src="/smcu.png" width={50} height={50}/> */}
                <h4>กัณณพงศ์ กาญจนกุลดำรง (อาอัส)</h4>
                <div>
                  Email : kannapongkarn@docchula.com
                  <div>
                    Ig :<a href="https://www.instagram.com/r_you.s/">r_you.s</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <ul>
              <li>
                {/* <Image src="/smcu.png" width={50} height={50}/> */}
                <h4>ศศิษา ปานพรหมมินทร์ (บลิ้งค์)</h4>
                <div>
                  Email : sasisa.blink@dochula.com
                  <div>
                    Ig :
                    <Link href="https://www.instagram.com/sasisap?igsh=aGZuM2Nudnd0cXJj">
                      sasisap
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
