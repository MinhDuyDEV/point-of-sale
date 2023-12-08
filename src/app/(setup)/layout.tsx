import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = getCookie("token");
  if (!token) {
    redirect("/sign-in");
  } else {
    redirect(`/customers`);
  }

  return <>{children}</>;
}
