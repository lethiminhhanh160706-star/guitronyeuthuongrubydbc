import { describe, expect, it } from "vitest";

import { MEMBERS } from "@/routes/doi-ngu";

describe("Đội ngũ – đội RUBY", () => {
  it("chỉ hiển thị đúng 3 thành viên", () => {
    expect(MEMBERS).toHaveLength(3);
  });

  it("liệt kê đúng tên và chức vụ từng thành viên", () => {
    expect(MEMBERS.map((m) => m.name)).toEqual([
      "LÊ THỊ MINH HẠNH",
      "VŨ THỊ LINH CHI",
      "TRẦN VIỆT HOÀNG",
    ]);
    expect(MEMBERS.map((m) => m.role)).toEqual([
      "Trưởng nhóm – Phụ trách nội dung và tài liệu dự án",
      "Phụ trách thiết kế và thuyết trình",
      "Phụ trách truyền thông",
    ]);
  });

  it("mỗi thành viên có nhiệm vụ, không có mục rỗng", () => {
    for (const member of MEMBERS) {
      expect(member.duties.length).toBeGreaterThan(0);
      for (const duty of member.duties) {
        expect(duty.trim().length).toBeGreaterThan(0);
      }
    }
  });
});
