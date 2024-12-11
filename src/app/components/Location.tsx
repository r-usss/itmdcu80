import Link from "next/link";
export default function Location() {
  return (
    <>
      <h2 id="location" className="text-white dark:text-dark dark:bg-pink-400 pb-10">
        <div className="text-2xl font-bold pt-5">Location</div>

        <p>
          <Link href="https://maps.app.goo.gl/Qg6S6kzAWEeu3U2y5">
            คณะเเพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
          </Link>
          1873 ถ. พระรามที่ 4 แขวงปทุมวัน เขตปทุมวัน กรุงเทพมหานคร 10330
        </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.757138172596!2d100.53568109999999!3d13.733148199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f2976216109%3A0x69b485dd12323248!2z4LiE4LiT4Liw4LmB4Lie4LiX4Lii4Lio4Liy4Liq4LiV4Lij4LmMIOC4iOC4uOC4rOC4suC4peC4h-C4geC4o-C4k-C5jOC4oeC4q-C4suC4p-C4tOC4l-C4ouC4suC4peC4seC4og!5e0!3m2!1sth!2sth!4v1733817770779!5m2!1sth!2sth"
            width="70%"
            height="200"
            // height="450"
            // style="border:0;"
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
            className="mx-auto"
          ></iframe>
      </h2>
    </>
  );
}
