export interface SocialLoginProvider {
    name: string;
    icon: JSX.Element | string;
    className?: string;
  }
  
  export interface LoginProps {
    onClose: () => void;
  }
  