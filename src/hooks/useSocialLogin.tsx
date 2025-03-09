import { useCallback } from 'react';

export function useSocialLogin() {
  const handleSocialLogin = useCallback((provider: string) => {
    console.log(`Logging in with ${provider}`);
    // Implement social login logic here
  }, []);

  return { handleSocialLogin };
}