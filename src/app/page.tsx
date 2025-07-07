import Image from "next/image";
import Navbar from "./components/Navbar";
import Members from "./components/Members";
import Location from "./components/Location";
import Activities from "./components/Activities";

import bgsmcu from "/public/bg.jpg";
import transparent from "/public/1.png";
import itlogo from "/public/it_logo.png";

export default function Home() {
  return (
    <main>
      <div>
        {/* Fixed background image - does NOT scroll */}
        <div
          style={{
            position: "fixed",
            zIndex: -1,
            height: "100vh",
            width: "100vw",
            backgroundAttachment: "fixed",
          }}
        >
          <Image
            alt="Background Image"
            src={bgsmcu}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Foreground content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <Navbar />

          {/* Responsive transparent image */}
          <div
            className="relative w-full max-w-md mx-auto mb-0"
            style={{ aspectRatio: "1 / 1" }}
          >
            <Image
  alt="transparent"
  src={transparent}
  width={500}
  height={500}
  sizes="100vw"
  style={{ width: "100%", height: "auto", display: "block" }}
/>

          </div>

          {/* Text content */}
          <div className="text-center">
            <div style={{ backgroundColor: "white", width: "100vw" }}>
              <div
                id="home"
                className="bg-white dark:text-white dark:bg-darkerpurple pb-8 pt-8 text-center"
              >
                <Image
                  className="mx-auto"
                  src={itlogo}
                  alt="it_smcu"
                  width={250}
                  height={250}
                  priority
                />

                <div className="text-4xl lg:text-6xl font-bold pt-5 max-md:text-3xl">
                  IT Division
                </div>
                <div className="text-4xl lg:text-6xl font-bold max-md:text-3xl">
                  The Student Union of <br className="md:hidden" />
                  Faculty of Medicine,
                  <br />
                  Chulalongkorn University
                </div>
              </div>
            </div>

            <div
              style={{ backgroundColor: "rgb(67, 160, 71)", width: "100vw" }}
            >
              <h2
                id="aboutus"
                className="text-white dark:text-white dark:bg-darkpurple px-16 max-md:px-8"
              >
                <div className="text-2xl font-bold py-5">About us</div>
                <p className="text-lg">
                  ฝ่ายเทคโนโลยีสารสนเทศ หรือฝ่าย IT สพจ.
                  พวกเราเป็นฝ่ายที่รวมตัวกันของคนที่สนใจด้านคอมพิวเตอร์
                  เพื่อจัดกิจกรรมสนุก ๆ
                  สร้างชิ้นงานทางคอมพิวเตอร์และเรียนรู้สิ่งใหม่ ๆ ไปด้วยกัน
                  ปัจจุบันฝ่ายเราเป็นฝ่ายที่ดูแลข้อมูลสารสนเทศต่าง ๆ
                  ให้กับนิสิตในคณะ ให้บริการทางเทคโนโลยีที่สะดวกและรวดเร็ว
                  พวกเราคือคนดูแลบริการต่าง ๆ เช่น server docchula.com และ
                  google workspace พวกเราสร้างเว็บไซต์สำหรับงานต่าง ๆ
                  ในคณะไม่ว่าจะเป็น AMSci, ANAN DAY, MDCU Voice และอื่น ๆ
                  นอกจากนี้พวกเรายังสนใจใน computer science, data science,
                  machine learning และ AI เพื่อนำไปพัฒนาเทคโนโลยีทางการแพทย์
                  ถ้าคิดว่าสนใจในคอมพิวเตอร์ก็อย่าลังเลที่จะเข้าร่วมกับฝ่ายเทคโนโลยีแล้วมาเรียนรู้ไปด้วยกัน
                  !ฝ่ายเทคโนโลยีสารสนเทศ หรือฝ่าย IT สพจ.
                  พวกเราเป็นฝ่ายที่รวมตัวกันของคนที่สนใจด้านคอมพิวเตอร์
                  เพื่อจัดกิจกรรมสนุก ๆ
                  สร้างชิ้นงานทางคอมพิวเตอร์และเรียนรู้สิ่งใหม่ ๆ ไปด้วยกัน
                  <Activities />
                </p>
              </h2>

              <Location />

              <h2 id="contact" className="text-white dark:bg-darkpurple pb-10">
                <div className="text-2xl font-bold pt-5">Contact</div>
                <h5>Email : itdivision@docchula.com</h5>
              </h2>
            </div>

            <div style={{ backgroundColor: "white", width: "100vw" }}>
              <h2 id="teammembers">
                <div className="text-2xl font-bold pt-5 dark:text-white dark:bg-darkerpurple pb-5">
                  Team members
                </div>
              </h2>
              <Members />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
