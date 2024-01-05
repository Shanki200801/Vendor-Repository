//The below page is the home page of the website, where information about the website is displayed

import Card from "@/components/home/card";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
export default async function Home() {
  //route the user to /demo.tsx if they are logged in
  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
    router.push("/demo");
  }
  return (
    <div className="text-black">
      <div>Home page</div>
      <div>Login to continue</div>
      <div>
        This page provides you a demo app for using vercel postgress and prisma
      </div>
    </div>
  );
}
