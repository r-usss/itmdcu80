import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
// import smcu from "/public/smcu.png"
import itlogo from "/public/it_logo.png"

export default function Home() {
  return (
<main>
    <Navbar />
    <br></br>
    <br></br>
    <h2 id="home">
        <div className = "home" ><Image src={itlogo} alt="it_smcu" width={250} height={250}/></div>
        <div className = "text-4xl lg:text-6xl font-bold">IT Division</div>
        <div className = "text-4xl lg:text-6xl font-bold">The Student Union of Faculty of Medicine, Chulalongkorn University
        </div>
    </h2>




    <h2 id="aboutus ">
        <h2 className="text-2xl ">About us</h2>
    </h2>
  <p className="text-lg">
    ฝ่ายเทคโนโลยีสารสนเทศ หรือฝ่าย IT สพจ. พวกเราเป็นฝ่ายที่รวมตัวกันของคนที่สนใจด้านคอมพิวเตอร์ เพื่อจัดกิจกรรมสนุก ๆ สร้างชิ้นงานทางคอมพิวเตอร์และเรียนรู้สิ่งใหม่ ๆ ไปด้วยกัน 
      ปัจจุบันฝ่ายเราเป็นฝ่ายที่ดูแลข้อมูลสารสนเทศต่าง ๆ ให้กับนิสิตในคณะ ให้บริการทางเทคโนโลยีที่สะดวกและรวดเร็ว พวกเราคือคนดูแลบริการต่าง ๆ เช่น server docchula.com และ google workspace พวกเราสร้างเว็บไซต์สำหรับงานต่าง ๆ ในคณะไม่ว่าจะเป็น AMSci, ANAN DAY, MDCU Voice และอื่น ๆ นอกจากนี้พวกเรายังสนใจใน computer science, data science, machine learning และ AI เพื่อนำไปพัฒนาเทคโนโลยีทางการแพทย์
      ถ้าคิดว่าสนใจในคอมพิวเตอร์ก็อย่าลังเลที่จะเข้าร่วมกับฝ่ายเทคโนโลยีแล้วมาเรียนรู้ไปด้วยกัน !ฝ่ายเทคโนโลยีสารสนเทศ หรือฝ่าย IT สพจ. พวกเราเป็นฝ่ายที่รวมตัวกันของคนที่สนใจด้านคอมพิวเตอร์ เพื่อจัดกิจกรรมสนุก ๆ สร้างชิ้นงานทางคอมพิวเตอร์และเรียนรู้สิ่งใหม่ ๆ ไปด้วยกัน 

  
  </p>
 
      
  <h2 id="location">
    <h2 className="text-2xl ">Location</h2>
  </h2>
    
  <p>
      <Link href="https://maps.app.goo.gl/Qg6S6kzAWEeu3U2y5">
          คณะเเพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
      </Link>
    
      1873 ถ. พระรามที่ 4 แขวงปทุมวัน เขตปทุมวัน กรุงเทพมหานคร 10330
      
  </p>
   
      
  <h2 id="contact">
    <h2 className="text-2xl ">Contact</h2>
  </h2>
  <h5>
      Email : itdivision@docchula.com
  </h5>
  <h2 id="teammembers">
    <h2 className="text-2xl ">  Team members</h2>
  </h2>
  
  <h4>ชั้นปีที่ 1</h4>
            <div className="item">
                <div className="content">
                    <ul>
                        <li>
                            {/* <Image src="/smcu.png" width={50} height={50}/> */}
                            <h4>
                                ณภัทษร สุกใส(กึ๊น)
                            </h4>
                            <p>
                                Email : keinkunluk@gmail.com
                                <div>
                                    Ig : 
                                    <a href="https://www.instagram.com/kein._.stagram?igsh=MTBveWN0d2trMTNoeQ==">
                                        kein._.stagram
                                    </a>
                                </div>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="item">
                <div className="content">
                    <ul>
                        <li>
                            {/* <Image src="/smcu.png" width={50} height={50}/> */}
                            <h4>
                                ธัทเดช กัลยพฤกษ์(เอส)
                            </h4>
                            <p>
                                Email : kanlayphrukthaddej@gmail.com
                                 <div>
                                       Ig : 
                                        <a href="8">
                                        ยังไม่ได้ใส่จ้า
                                        </a>
                                </div>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="item">
                <div className="content">
                    <ul>
                        <li>
                            {/* <Image src="/smcu.png" width={50} height={50}/> */}
                            <h4>
                                พิชชาภา ลักษณ์เลิศกุล(ชูก้า)
                            </h4>
                            <p>
                                Email : pidchapa.lucklertkul@docchula.com
                                 <div>
                                       Ig : 
                                        <a href="8">
                                        ยังไม่ได้ใส่จ้า
                                        </a>
                                </div>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="item">
                <div className="content">
                    <ul>
                        <li>
                            {/* <Image src="/smcu.png" width={50} height={50}/> */}
                            <h4>
                                ศิรดา อุทัยวัฒน์ (แนน)
                            </h4>
                            <p>
                                Email : sirada.uth@docchula.com
                                 <div>
                                       Ig : 
                                        <a href="https://www.instagram.com/sira.uth?igsh=MXhmYW5lOGFvMGZ6OQ%3D%3D&utm_source=qr">
                                        sira.uth
                                        </a>
                                </div>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
             <div className="item">
                <div className="content">
                    <ul>
                        <li>
                            {/* <Image src="/smcu.png" width={50} height={50}/> */}
                            <h4>
                                จันทร์วลัย เลี่ยนเครือ (เกน)
                            </h4>
                            <p>
                                Email : jennissa0811@docchula.com
                                 <div>
                                       Ig : 
                                        <a href="8">
                                        ยังไม่ได้ใส่จ้า
                                        </a>
                                </div>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
             <div className="item">
                <div className="content">
                    <ul>
                        <li>
                            {/* <Image src="/smcu.png" width={50} height={50}/> */}
                            <h4>
                                วรวีร์ พัวพรพงษ์ (วินชี่)
                            </h4>
                            <p>
                                Email : worawee.pua@docchula.com
                                 <div>
                                       Ig : 
                                        <a href="8">
                                        ยังไม่ได้ใส่จ้า
                                        </a>
                                </div>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="item">
                <div className="content">
                    <ul>
                        <li>
                            {/* <Image src="/smcu.png" width={50} height={50}/> */}
                            <h4>
                                กัณณพงศ์ กาญจนกุลดำรง (อาอัส)
                            </h4>
                            <p>
                                Email : kannapongkarn@docchula.com
                                 <div>
                                       Ig : 
                                        <a href="https://www.instagram.com/r_you.s/">
                                        r_you.s
                                        </a>
                                </div>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="item">
                <div className="content">
                    <ul>
                        <li>
                            {/* <Image src="/smcu.png" width={50} height={50}/> */}
                            <h4>
                               ศศิษา ปานพรหมมินทร์ (บลิ้งค์)
                            </h4>
                            <p>
                                Email : sasisa.blink@dochula.com
                                 <div>
                                       Ig : 
                                        <Link href="https://www.instagram.com/sasisap?igsh=aGZuM2Nudnd0cXJj">
                                        sasisap</Link>
                                </div>
                            </p>
                        </li>
                    </ul>
                </div>
              </div>
  </main>
  
  );
}
