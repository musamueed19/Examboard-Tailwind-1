'use client'
import { useRouter } from "next/navigation";
import DashboardLayout from "@/app/(dashboard)/layout";
import { useEffect, useState } from "react";
import TitleHeader from "../common/TitleHeader";
import Loginpage from "@/app/auth/login/page";

export default function AccountStateHandler() {
  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter()

  function stateHandler(state) {
    setIsLogged(state);
  }
  console.log(typeof stateHandler);

  useEffect(() => {
    console.log(isLogged);
  }, [isLogged]);

  return (
    <div>
      {isLogged ? (
        <DashboardLayout setIsLogged={setIsLogged}>
          <div className="flex w-full h-full text-[#1d4ed8] items-center justify-center">
            <TitleHeader title="Welcome to Our Dashboard Page!" fontSize="4xl" />
          </div>
        </DashboardLayout>
      )
        : (
          <Loginpage onStateChange={stateHandler} />
        )}
    </div>
  );
}

