import { Github, Twitter } from "lucide-react";

import { LoginProps } from "../../types/auth";

import { SocialLoginButton } from "./SocialLoginButton";

export function LoginForm({ onClose }: LoginProps) {


  const socialProviders = [
    {
      name: "Google",
      icon: (
        <img
          src="https://www.google.com/favicon.ico"
          alt="Google"
          className="w-5 h-5"
        />
      ),
      href: "http://localhost:8000/api/v1/auth/google",
    },
    // {
    //   name: "GitHub",
    //   icon: <Github size={20} />,
    //   href: "http://localhost:8000/api/v1/auth/github",
    // },
    // {
    //   name: "Twitter",
    //   icon: <Twitter size={20} />,
    //   href: "http://localhost:8000/api/v1/auth/twitter",
    // },
  ];

  const handleLoginClick = (href: string) => {
    const width = 500;
    const height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    window.open(
      href,
      "_blank",
      `width=${width},height=${height},top=${top},left=${left}`
    );
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>
      <p className="text-center text-gray-600 mb-8">
        Sign in to continue to your account
      </p>

      <div className="space-y-4">
        {socialProviders.map((provider) => (
          <SocialLoginButton
            key={provider.name}
            provider={provider}
            onClick={() => handleLoginClick(provider.href)}
          />
        ))}
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>
          By continuing, you agree to our{" "}
          <a href="/Privacy-Policy" className="text-blue-600 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/Privacy-Policy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
