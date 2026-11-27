import { getVerifiedSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";

/** Entrada única: sessão verificada vai para o workspace, senão para /login. */
export default async function HomePage() {
  const verified = await getVerifiedSession();
  redirect(verified ? "/app" : "/login");
}
