"use client";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const SocialLogin = () => {

  const router = useRouter();
  const { googleLogin } = useAuth();

  const handleGoogleSignIn = () => {
    googleLogin().then((result) => {
      console.log(result);
      const socialInfo = {
        userName: result.user.displayName,
        userEmail: result.user.email,
        userPhoto: result.user.photoURL,
        userRole: "user",
      };
      console.log(socialInfo);
      fetch("/api/user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(socialInfo),
      })
        .then((req) => req.json())
        .then((data) => console.log(data));
      router.push("/");
    });
  };

  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center my-4">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline"
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
