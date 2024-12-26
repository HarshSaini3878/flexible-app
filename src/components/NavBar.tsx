"use client"; // Ensure this component is client-side to use React hooks

import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react"; // Import necessary functions
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import CustomButton from "./CustomButton";

const NavBar = () => {
  const { data: session } = useSession(); // Get session data using useSession hook
  const router = useRouter(); // Initialize the useRouter hook

  const handleSignIn = () => {
    router.push("/auth/signin"); // Redirect to the sign-in page
  };

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <div>
          {session ? (
            <div className="flex items-center space-x-4">
              <p className="text-sm text-gray-700">Welcome, {session.user?.name || "User"}!</p>
              <button
                onClick={() => signOut()}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <CustomButton
              title="Login"
              btnType="button"
              containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
              handleClick={handleSignIn} // Trigger redirect when the button is clicked
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
