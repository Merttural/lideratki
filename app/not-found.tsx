import type { Metadata } from "next";
import { NotFoundView } from "@/components/not-found-view";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı | Lider Atkı",
  description: "Bu adres Lider Atkı sitesinde yok.",
  robots: { index: false, follow: true },
  openGraph: {
    title: "Sayfa bulunamadı | Lider Atkı",
    description: "Bu adres Lider Atkı sitesinde yok.",
    siteName: "Lider Atkı",
  },
};

export default function NotFound() {
  return <NotFoundView />;
}
