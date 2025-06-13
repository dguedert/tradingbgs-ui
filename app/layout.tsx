// app/layout.tsx
"use client";

import { ReactNode, useEffect } from "react";
import { useAuthStore } from "@/hooks/useAuthStore"; // ou onde estiver o seu store
import { usePathname, useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const token = useAuthStore((s) => s.accessToken);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // se não estiver no login e não tiver token → manda pro login
    if (!token && !pathname.startsWith("/(auth)/login")) {
      router.replace("/(auth)/login");
    }
    // se já estiver logado e estiver no login → manda pra protected home
    if (token && pathname.startsWith("/(auth)/login")) {
      router.replace("/(protected)");
    }
  }, [token, pathname, router]);

  return <>{children}</>;
}
