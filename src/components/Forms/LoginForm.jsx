'use client'
import InputFields from '../common/InputFields'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import AccountStateHandler from '../Dashboard/AccountStateHandler';

export default function LoginForm() {
  const router = useRouter(); // Initialize the router

  function formSubmitter(event) {
    event.preventDefault();
    <AccountStateHandler isLoggedIn={true} />;
    router.push('/')
  }
  return (
    <form onSubmit={formSubmitter} className="flex flex-col gap-4 w-full px-5">
      <InputFields
        label="Email"
        name="email"
        input="email"
        placeholder="Enter your email"
      />
      <div className="flex flex-col gap-1">
        <InputFields
          label="Password"
          name="password"
          input="password"
          placeholder="Enter your password"
        />
        <div className="flex justify-end">
          <Link
            className="text-xs font-medium text-[#3FA2F7]"
            href="/auth/forgotpassword"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
      <button
        type="submit"
        className="bg-[#226FFE] text-white font-bold rounded-sm py-1 mt-6"
      >
        Sign in
      </button>
    </form>
  );
}
