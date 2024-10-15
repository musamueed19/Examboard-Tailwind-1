'use client'
import { useNavigate } from "next/navigation";
import DashboardLayout from "@/app/(dashboard)/layout";
import { useEffect, useState } from "react";
import TitleHeader from "../common/TitleHeader";

export default function AccountStateHandler({ isLoggedIn = false }) {
  const [isLogged, setIsLogged] = useState(isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLogged(isLoggedIn);
  }, [isLoggedIn]);

  if (!isLogged) {
    navigate("/auth/login", { replace: true });
    return null;
  }

  return (
    <DashboardLayout setIsLogged={setIsLogged}>
      <div className="flex w-full h-full text-[#1d4ed8] items-center justify-center">
        <TitleHeader title="Welcome to Our Dashboard Page!" fontSize="4xl" />
      </div>
    </DashboardLayout>
  );
}
