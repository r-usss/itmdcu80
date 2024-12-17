import { activitiesList } from "../constants/actlist";
export default function Activities() {
  return (
    <>
      <div className="text-2xl font-bold py-5">Recent Activities</div>

      {/* เสร็จแล้ว */}
      <h2>ทำแล้ว</h2>
      {activitiesList.map((actItem, actIndex) => (
        <div className="my-2 mx-2 inline-block">
          {actItem.status === "finished" && (
            <div className="w-72 bg-white text-black rounded-xl">
              <p className="text-xl">{actItem.act}</p>
              <p>{actItem.detail}</p>
            </div>
          )}
        </div>
      ))}
      <h2>ทำอยู่</h2>
      {/* ทำอยู่ */}
      {activitiesList.map((actItem, actIndex) => (
        <div className="my-2 mx-2 inline-block">
          {actItem.status === "ongoing" && (
            <div className="w-72 bg-white text-black rounded-xl">
              <p className="text-xl">{actItem.act}</p>
              <p>{actItem.detail}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
