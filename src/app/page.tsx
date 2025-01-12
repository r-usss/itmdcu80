import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Members from "./components/Members";
import bgsmcu from "/public/bg.jpg";
import transparent from "/public/1.png";


    


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
    <div style={{ fontFamily: 'Kanit', scrollBehavior: 'smooth',scrollPadding: '70px'}}>
      <div style={{ position: "fixed", zIndex: -1, overflow: "hidden", backgroundAttachment: "fixed"}}>
        <Image 
          alt="Background Image" 
          src={bgsmcu} 
          width={1700} 
          height={1700} 
        />
      </div>

      <div style={{ position: "relative", zIndex: 1, overflow: "hidden" }}>
        <Navbar />
        <Image alt="transparent" src={transparent} width={500} height={500} />
        <div className="text-center">
          <div style={{ backgroundColor: "white", width: "100vw" }}>
            <h2 id="home" className="text-center pt-14">
              <div className="home">
                <Image
                  className="mx-auto"
                  src={itlogo}
                  alt="it_smcu"
                  width={250}
                  height={250}
                />
              </div>

              <div className="text-4xl lg:text-6xl font-bold pt-5">
                IT Division
              </div>
              <div className="text-4xl lg:text-6xl font-bold">
                The Student Union of Faculty of Medicine,
                <br />
                Chulalongkorn University
              </div>
            </h2>
            <br />
          </div>

          <div style={{ backgroundColor: "rgb(67, 160, 71)", width: "100vw" }}>
            <h2 id="aboutus" className="text-white ml-8 mr-8">
              <div className="text-2xl font-bold pt-5">About us</div>
              <p className="text-lg ">
                ฝ่ายเทคโนโลยีสารสนเทศ หรือฝ่าย IT สพจ.
                พวกเราเป็นฝ่ายที่รวมตัวกันของคนที่สนใจด้านคอมพิวเตอร์
                เพื่อจัดกิจกรรมสนุก ๆ
                สร้างชิ้นงานทางคอมพิวเตอร์และเรียนรู้สิ่งใหม่ ๆ ไปด้วยกัน
                ปัจจุบันฝ่ายเราเป็นฝ่ายที่ดูแลข้อมูลสารสนเทศต่าง ๆ
                ให้กับนิสิตในคณะ ให้บริการทางเทคโนโลยีที่สะดวกและรวดเร็ว
                พวกเราคือคนดูแลบริการต่าง ๆ เช่น server docchula.com และ google
                workspace พวกเราสร้างเว็บไซต์สำหรับงานต่าง ๆ
                ในคณะไม่ว่าจะเป็น AMSci, ANAN DAY, MDCU Voice และอื่น ๆ
                นอกจากนี้พวกเรายังสนใจใน computer science, data science, machine
                learning และ AI
                เพื่อนำไปพัฒนาเทคโนโลยีทางการแพทย์
                ถ้าคิดว่าสนใจในคอมพิวเตอร์ก็อย่าลังเลที่จะเข้าร่วมกับฝ่ายเทคโนโลยีแล้วมาเรียนรู้ไปด้วยกัน
                !ฝ่ายเทคโนโลยีสารสนเทศ หรือฝ่าย IT สพจ.
                พวกเราเป็นฝ่ายที่รวมตัวกันของคนที่สนใจด้านคอมพิวเตอร์
                เพื่อจัดกิจกรรมสนุก ๆ
                สร้างชิ้นงานทางคอมพิวเตอร์และเรียนรู้สิ่งใหม่ ๆ ไปด้วยกัน
              </p>
            </h2>

            <h2 id="location" className="text-white">
              <div className="text-2xl font-bold pt-5">Location</div>

              <p>
                <Link href="https://maps.app.goo.gl/Qg6S6kzAWEeu3U2y5">
                  คณะเเพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
                </Link>
                1873 ถ. พระรามที่ 4 แขวงปทุมวัน เขตปทุมวัน กรุงเทพมหานคร 10330
              </p>
            </h2>
            <h2 id="contact" className="text-white">
              <div className="text-2xl font-bold pt-5">Contact</div>

              <h5>Email : itdivision@docchula.com</h5>
            </h2>
            <br />
          </div>

          <div style={{ backgroundColor: "white", width: "100vw" }}>
            <h2 id="teammembers">
              <div className="text-2xl font-bold pt-5"> Team members</div>
            </h2>

            <Members />
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}
