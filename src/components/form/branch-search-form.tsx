import { useState } from "react";

export default function ServiceCenterSearch() {
  const [formData, setFormData] = useState({
    province: "",
    district: "",
    road: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="rounded-t-lg w-full max-w-[300px] mx-auto">
      <h2 className="bg-primary-orange p-2 text-white">
        ค้นหาศูนย์บริการใกล้บ้านคุณ
      </h2>
      <div className="bg-secondary-gray p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-[100px_1fr] items-center">
            <label className="text-white">จังหวัด</label>
            <select
              className="w-full p-2 rounded bg-white"
              title="State"
              value={formData.province}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, province: e.target.value }))
              }
            >
              <option value="">--เลือกหน้าว่าง--</option>
            </select>
          </div>

          <div className="grid grid-cols-[100px_1fr] items-center">
            <label className="text-white">เขต/อำเภอ</label>
            <select
              className="w-full p-2 rounded bg-white"
              title="Province"
              value={formData.district}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, district: e.target.value }))
              }
            >
              <option value="">--เลือกหน้าว่าง--</option>
            </select>
          </div>

          <div className="grid grid-cols-[100px_1fr] items-center">
            <label className="text-white">ถนน</label>
            <select
              className="w-full p-2 rounded bg-white"
              title="Road"
              value={formData.road}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, road: e.target.value }))
              }
            >
              <option value="">--เลือกหน้าว่าง--</option>
            </select>
          </div>

          <p className="text-primary-orange text-sm">
            หมายเหตุ : กรุณาเลือกอย่างใดอย่างหนึ่ง
          </p>

          <button
            type="submit"
            className="w-full bg-primary-orange text-white py-2 rounded hover:opacity-90 transition-opacity"
          >
            ค้นหา
          </button>
        </form>
      </div>
    </div>
  );
}
