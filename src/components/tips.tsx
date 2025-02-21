import tipsImg from "../assets/tips/SOne_index_tips1.png";
import searchImg from "../assets/nav/SOne_Mobile_search.png";
import telNoImg from "../assets/tips/SOne_index_call.png";

export default function Tips() {
  return (
    <div className="max-w-[300px] mx-auto space-y-2">
      <div className="relative overflow-hidden min-h-[150px]">
        <div className="absolute left-[30%] right-0 top-1 bg-secondary-gray h-[140px]" />

        <div className="absolute -left-10 -bottom-1 w-2/3 h-full z-10">
          <img
            src={tipsImg}
            alt="Tips mascot"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="relative ml-[33%] text-white p-4 space-y-2 z-20">
          <h4 className="text-primary-orange text-xl">Safety Tips</h4>
          <div className="relative">
            <span className="text-6xl text-primary-orange absolute -top-4 left-0">
              "
            </span>
            <p className="pl-6">
              ควรเติมน้ำมันตอนเช้าขณะที่อุณหภูมิบนพื้นดินยังเย็นอยู่
            </p>
            <span className="text-6xl text-primary-orange absolute -bottom-10 -right-2">
              "
            </span>
          </div>
        </div>
      </div>

      {/* Newsletter Form */}
      <div className="flex items-center gap-2 p-2">
        <label className="whitespace-nowrap text-sm">สมัครรับข่าวสาร</label>
        <div className="bg-primary p-px w-full">
          <div className="flex bg-white items-center border-primary-orange border-solid border-2">
            <input
              type="email"
              placeholder="กรุณาใส่อีเมล์"
              className="w-full h-[23px] outline-none px-2"
            />
            <button className="border-primary-orange border-solid border-l-2 bg-primary-orange">
              <img src={searchImg} alt="Search" className="p-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Phone Number */}
      <div className="p-2">
        <hr className="border-t-2 border-dashed border-primary-orange mb-4" />
        <img src={telNoImg} alt="Telephone number" className="w-full" />
      </div>
    </div>
  );
}
