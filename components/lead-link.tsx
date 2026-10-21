"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackLead, type LeadConversion } from "@/components/ads-tracker";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "onClick"> & {
  conversion: LeadConversion;
  children: ReactNode;
};

export function LeadLink({ conversion, children, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={() => {
        trackLead(conversion);
      }}
    >
      {children}
    </a>
  );
}
