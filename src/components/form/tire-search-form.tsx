import { useState } from "react";
import tireImg from "../../assets/search/SOne_index_bg_searchtype.jpg";

export default function TireSearchForm() {
  const [formData, setFormData] = useState({
    width: "",
    series: "",
    wheel: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="bg-primary-orange w-full max-w-[400px] mx-auto text-nowrap">
      <h2 className="p-2 text-white">ค้นหายาง</h2>
      <div className="bg-secondary-gray relative min-h-[300px]">
        <img
          src={tireImg}
          alt=""
          className="absolute left-0 top-0 h-full w-[100%] z-10 object-fill"
        />

        <div className="relative p-4 z-20 w-[60%] ml-auto">
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            aria-label="Tire search form"
          >
            <div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                <label className="text-white">หน้ายาง</label>
                <span className="text-gray-400 text-sm">(มม.)</span>
              </div>
              <select
                className="w-full p-2 rounded mt-1 bg-white"
                value={formData.width}
                title="Tires Width"
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, width: e.target.value }))
                }
              >
                <option value="">--เลือกหน้ายาง--</option>
              </select>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                <label className="text-white">ซีรี่ย์</label>
                <span className="text-gray-400 text-xs whitespace-nowrap">
                  อัตราส่วนความสูงแก้มยาง (%)
                </span>
              </div>
              <select
                className="w-full p-2 rounded mt-1 bg-white"
                value={formData.series}
                title="Tires Series"
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, series: e.target.value }))
                }
              >
                <option value="">--เลือกซีรี่ย์--</option>
              </select>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                <label className="text-white">กระทะล้อ</label>
                <span className="text-gray-400 text-sm">(นิ้ว)</span>
              </div>
              <select
                className="w-full p-2 rounded mt-1 bg-white"
                value={formData.wheel}
                title="Wheel size"
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, wheel: e.target.value }))
                }
              >
                <option value="">--เลือกกระทะล้อ--</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-orange text-white py-2 rounded hover:opacity-90 transition-opacity"
            >
              ค้นหา
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
