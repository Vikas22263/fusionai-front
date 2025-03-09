import { SocialLoginProvider } from "../../types/auth";
import { Button } from "../ui/Button";

interface SocialLoginButtonProps {
  provider: SocialLoginProvider;
  onClick: () => void;
}

export function SocialLoginButton({
  provider,
  onClick,
}: SocialLoginButtonProps) {
  return (
    <Button
      variant="social"
      fullWidth
      onClick={onClick}
      className={provider.className}
    >
      {provider.icon}
      <span>Continue with {provider.name}</span>
    </Button>
  );
}
