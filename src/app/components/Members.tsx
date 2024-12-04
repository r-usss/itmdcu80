export default function Members() {
    const list =[
        {"name" : "ณภัทษร สุกใส", "nickname" : "กึ๊น", "email": "keinkunluk@gmail.com", "ig":"kein._.stagram"},
        {"name" : "ธัทเดช กัลยพฤกษ์", "nickname" : "เอส", "email": "kanlayphrukthaddej@gmail.com", "ig":"ยังไม่ได้ใส่"},
        {"name" : "พิชชาภา ลักษณ์เลิศกุล", "nickname" : "ชูก้า", "email": "pidchapa.lucklertkul@docchula.com", "ig":"ยังไม่ได้ใส่"},
        {"name" : "ศิรดา อุทัยวัฒน์", "nickname" : "แนน", "email": "sirada.uth@docchula.com", "ig":"sira.uth"},
        {"name" : "จันทร์วลัย เลี่ยนเครือ", "nickname" : "เกน", "email": "jennissa0811@docchula.com", "ig":"ยังไม่ได้ใส่"},
        {"name" : "วรวีร์ พัวพรพงษ์", "nickname" : "วินชี่", "email": "worawee.pua@docchula.com", "ig":"ยังไม่ได้ใส่"},
        {"name" : "กัณณพงศ์ กาญจนกุลดำรง", "nickname" : "อาอัส", "email": "1234kannapongkarn@docchula.com", "ig":"ยังไม่ได้ใส่"},
        {"name" : "ศศิษา ปานพรหมมินทร์", "nickname" : "บลิ้งค์", "email":"sasisa.blink@dochula.com", "ig":"sasisap"}
    ]
    return (
        <>
            {list.map((item, index)=>(
                <div className="mt-5" key={item.name}>
                    <p>profile picture</p>
                    <p>{item.name} ({item.nickname})</p>
                    <p>E-Mail : {item.email}</p>
                    <p>IG : {item.ig}</p>
                </div>
        ))}
        </>
    )
}