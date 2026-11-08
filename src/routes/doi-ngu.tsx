import { createFileRoute } from "@tanstack/react-router";
import { User } from "lucide-react";
import { PageHero, Section, Placeholder, Card, meta } from "@/components/site";

export const Route = createFileRoute("/doi-ngu")({
  head: () =>
    meta(
      "Đội ngũ | Đội RUBY – Trà Sâm Trường Nhân DBC2026",
      "Đội RUBY gồm 3 thành viên phụ trách nội dung – tài liệu, thiết kế – thuyết trình và truyền thông cho dự án Trường Nhân – Trà Sâm, chiến dịch “Gửi trọn yêu thương”.",
    ),
  component: Team,
});

export type Member = {
  name: string;
  role: string;
  duties: string[];
};

export const MEMBERS: Member[] = [
  {
    name: "LÊ THỊ MINH HẠNH",
    role: "Trưởng nhóm – Phụ trách nội dung và tài liệu dự án",
    duties: [
      "Điều phối và phân công công việc trong nhóm.",
      "Tổng hợp, biên soạn và hoàn thiện nội dung đề án.",
      "Thiết kế, trình bày và hoàn thiện hồ sơ dự án dưới dạng PDF.",
      "Theo dõi tiến độ và đảm bảo sự thống nhất giữa các phần nội dung.",
    ],
  },
  {
    name: "VŨ THỊ LINH CHI",
    role: "Phụ trách thiết kế và thuyết trình",
    duties: [
      "Thiết kế và xây dựng slide thuyết trình dự án bằng PowerPoint.",
      "Sắp xếp nội dung, hình ảnh và dữ liệu trên slide.",
      "Đảm bảo tính trực quan, logic và nhất quán trong thiết kế.",
      "Phối hợp chuẩn bị tài liệu phục vụ phần trình bày dự thi.",
    ],
  },
  {
    name: "TRẦN VIỆT HOÀNG",
    role: "Phụ trách truyền thông",
    duties: [
      "Xây dựng kế hoạch và nội dung truyền thông cho chiến dịch.",
      "Quản lý và vận hành các trang mạng xã hội của dự án.",
      "Lên lịch đăng bài, theo dõi và cập nhật nội dung.",
      "Theo dõi mức độ tương tác và đánh giá hiệu quả hoạt động truyền thông.",
    ],
  },
];

function Portrait() {
  return (
    <div className="flex aspect-square w-36 items-center justify-center rounded-full border-2 border-dashed border-gold/50 bg-muted">
      <div className="px-3 text-center">
        <User className="mx-auto h-8 w-8 text-gold" aria-hidden />
        <p className="mt-1 text-[11px] leading-tight text-muted-foreground">[CẦN BỔ SUNG: Ảnh chân dung]</p>
      </div>
    </div>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (
    <Card className="flex h-full flex-col items-center text-center">
      <Portrait />
      <h3 className="mt-5 font-display text-lg font-semibold uppercase tracking-wide text-primary">{member.name}</h3>
      <p className="mt-3 inline-flex items-center rounded-full border border-gold/40 bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
        {member.role}
      </p>
      <div className="gold-rule mx-auto mt-5" />
      <p className="mt-5 text-xs uppercase tracking-[0.25em] text-accent">Nhiệm vụ</p>
      <ul className="mt-3 flex-1 space-y-2.5 text-left">
        {member.duties.map((duty) => (
          <li key={duty} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden />
            <span>{duty}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function Team() {
  return (
    <>
      <PageHero eyebrow="Đội thi" title="Đội RUBY" desc="[CẦN BỔ SUNG: Giới thiệu ngắn về đội thi]" />
      <Section title="Logo & hình ảnh đội">
        <div className="grid gap-6 md:grid-cols-3">
          <Placeholder label="[CẦN BỔ SUNG: Logo đội]" className="aspect-square" />
          <Placeholder label="[CẦN BỔ SUNG: Ảnh tập thể đội]" className="aspect-video md:col-span-2 md:aspect-auto" />
        </div>
      </Section>
      <Section eyebrow="3 thành viên" title="Thành viên đội RUBY">
        <div className="grid gap-6 md:grid-cols-3">
          {MEMBERS.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </Section>
    </>
  );
}
