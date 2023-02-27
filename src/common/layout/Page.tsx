import { Suspense } from "react";
import type { PropsWithChildren, ReactNode } from "react";
import AppSpin from "../feedback/AppSpin";
import useSetHelp from "../feedback/useSetHelp";
import Link from "../navigation/Link";

export interface BreadcrumItem {
  key: string;
  href: string;
  label: string;
}

export interface PageProps {
  breadcrumbs?: BreadcrumItem[];
  title: string;
  help: ReactNode;
}

export default function Page({
  breadcrumbs,
  children,
  help,
  title,
}: PropsWithChildren<PageProps>) {
  const setHelp = useSetHelp();
  setHelp(help);

  return (
    <div className="space-y-lg">
      <Suspense fallback={<AppSpin.Block />}>{children}</Suspense>
    </div>
  );
}
