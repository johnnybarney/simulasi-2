import { redirect } from "next/navigation";
import { routes } from "@/lib/navigation";

export default function PlatformCdXRedirect() {
  redirect(routes.cdX);
}
