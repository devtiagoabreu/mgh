import { redirect } from "next/navigation";
import { StructuralPreview } from "@/components/structural-preview";
import { getAuthenticatedDemoLogin } from "@/lib/auth/demo-session";

export default async function HomePage() {
  const login = await getAuthenticatedDemoLogin();
  if (!login) redirect("/login");

  return <StructuralPreview username={login.username} />;
}
