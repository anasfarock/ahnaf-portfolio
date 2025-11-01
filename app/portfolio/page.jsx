"use client";

import { Suspense } from "react";
import PortfolioPage from "@/components/pages/PortfolioPage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PortfolioPage />
    </Suspense>
  );
}
