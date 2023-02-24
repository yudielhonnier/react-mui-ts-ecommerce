import { useToggle } from "ahooks";
import { cloneElement, Suspense, useRef } from "react";
import type { ReactElement, ReactNode } from "react";
import { useTranslation } from "react-i18next";

import { Outlet } from "react-router-dom";
import useAuth from "@/modules/auth/hooks/useAuth";
import useAuthFunctions from "@/modules/auth/hooks/useAuthFunctions";
import ChangeLanguage from "@/common/display/ChangeLanguage";
import AppSpin from "@/common/feedback/AppSpin";
import { SetHelpContext } from "@/common/feedback/HelpContext";
import Link from "@/common/navigation/Link";
import useNavigate from "@/common/navigation/useNavigate";
import NavBar from "@/layout/NavBar";

export default function AppLayout() {
  const [collapse, { toggle }] = useToggle(true);
  const { user } = useAuth();
  const { logout } = useAuthFunctions();
  const { t } = useTranslation("appLayout");
  const { t: tCommon } = useTranslation("common");
  const { t: tRoutes } = useTranslation("routes");
  const navigate = useNavigate();
  const helpNode = useRef<ReactNode | null>(null);

  // TODO:ADD DRAWER
  return (
    <div>
      <NavBar />

      <SetHelpContext.Provider
        value={(node: ReactNode) => (helpNode.current = node)}
      >
        <Suspense fallback={<AppSpin.Block />}>
          <Outlet />
        </Suspense>
      </SetHelpContext.Provider>
    </div>
  );
}
