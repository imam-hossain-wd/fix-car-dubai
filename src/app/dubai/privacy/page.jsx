import { SiteConfig } from '@/config/site';
import PrivacyPolicyPage from '@/pages/PrivacyPolicy/PrivacyPolicy';

export const metadata = {
  title: "Privacy Policy | Fix Car Dubai",
  description: "Read our privacy policy to understand how Fix Car Dubai collects, uses, and protects your personal information.",
  alternates: {
    canonical: `${SiteConfig.url}/dubai/privacy`,
  },
};


export default function Policy() {
  return <PrivacyPolicyPage />
}


