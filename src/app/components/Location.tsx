import Link from "next/link"
export default function Location(){
    return(
        <>
        <h2 id="location" className="text-white">
              <div className="text-2xl font-bold pt-5">Location</div>

              <p>
                <Link href="https://maps.app.goo.gl/Qg6S6kzAWEeu3U2y5">
                  คณะเเพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
                </Link>
                1873 ถ. พระรามที่ 4 แขวงปทุมวัน เขตปทุมวัน กรุงเทพมหานคร 10330
              </p>
            </h2>
        </>
    )
}