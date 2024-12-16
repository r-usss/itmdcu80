import Image from "next/image";
import smcu from "/public/smcu.png";
//import /image/pic1.webp from "/image/pic1.webp";
//import moon from "/public/moon icon.png";
import gmail from "/public/gmail.png";
export default function Members() {
    const list =[
        {"name" : "ณภัทษร สุกใส", "nickname" : "กึ๊น", "email": "keinkunluk@gmail.com", "ig":"kein._.stagram", "image":"/image/pic1.webp"},
        {"name" : "ธัทเดช กัลยพฤกษ์", "nickname" : "เอส", "email": "kanlayphrukthaddej@gmail.com", "ig":"ยังไม่ได้ใส่", "image":"/image/pic1.webp" },
        {"name" : "พิชชาภา ลักษณ์เลิศกุล", "nickname" : "ชูก้า", "email": "pidchapa.lucklertkul@docchula.com", "ig":"ยังไม่ได้ใส่", "image":"/image/pic1.webp"},
        {"name" : "ศิรดา อุทัยวัฒน์", "nickname" : "แนน", "email": "sirada.uth@docchula.com", "ig":"sira.uth", "image":"/image/pic1.webp"},
        {"name" : "จันทร์วลัย เลี่ยนเครือ", "nickname" : "เกน", "email": "jennissa0811@docchula.com", "ig":"ยังไม่ได้ใส่","image":"/image/pic1.webp"},
        {"name" : "วรวีร์ พัวพรพงษ์", "nickname" : "วินชี่", "email": "worawee.pua@docchula.com", "ig":"ยังไม่ได้ใส่", "image":"/image/pic1.webp"},
        {"name" : "กัณณพงศ์ กาญจนกุลดำรง", "nickname" : "อาอัส", "email": "1234kannapongkarn@docchula.com", "ig":"ยังไม่ได้ใส่", "image":"/image/pic1.webp"},
        {"name" : "ศศิษา ปานพรหมมินทร์", "nickname" : "บลิ้งค์", "email":"sasisa.blink@dochula.com", "ig":"sasisap", "image":"/image/pic1.webp"},
    ]
    return (
        <>   
          <div className="bg-white dark:text-white dark:bg-gray-500 px-10 pb-20 grid grid-cols-3 gap-4" >
            {list.map((item, index)=>(
                <div className="flex flex-col items-center pb-5 rounded-l-lg rounded-r-lg dark:text-dark dark:bg-pink-400 bg-green-600 "  key={item.name} >
                    <img 
                        className=" rounded-full object-cover mb-2 mt-2  "
                        src={item.image} 
                        alt={`${item.name}'s profile`}
                        width={96} 
                        height={96} 
                    />
                    <p >{item.name} ({item.nickname})</p>
                    <p>email : {item.email}</p>
                    <p>IG : {item.ig}</p>
                </div>
        ))}
          </div>
        </>
    )
}
//pl-10 mx-5 pt-5 
