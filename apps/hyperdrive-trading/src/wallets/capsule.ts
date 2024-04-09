import {
  GetCapsuleOpts,
  OAuthMethod,
  Theme,
  getCapsuleWallet,
} from "@usecapsule/rainbowkit-wallet";

const { VITE_CAPSULE_API_KEY, VITE_CAPSULE_ENV } = import.meta.env;

export const getCapsuleWalletOpts: GetCapsuleOpts = {
  capsule: {
    environment: VITE_CAPSULE_ENV, // Environment.PROD for Production

    apiKey: VITE_CAPSULE_API_KEY, // get one at usecapsule.com/beta
    constructorOpts: {
      // passkey configs
      portalBackgroundColor: '#12191D',
      portalPrimaryButtonColor: '#77FBB2',
      portalTextColor: '#F0F4F6',
      portalPrimaryButtonTextColor: '#12191D',
      
      // email configs
      emailTheme: 'dark',
      emailPrimaryColor: '#77FBB2',
      githubUrl: 'https://github.com/delvtech',
      linkedinUrl: 'https://www.linkedin.com/company/delv-tech/',
      xUrl: 'https://twitter.com/delv_tech',
      homepageUrl: 'https://hyperdrive.trade/',
      supportUrl: 'mailto:support@delv.tech',
    },
  },
  appName: "Hyperdrive",
  theme: Theme.dark,
  logo: "/hyperdrive-logo-white.svg",

  oAuthMethods: [
    OAuthMethod.GOOGLE,
    OAuthMethod.TWITTER,
    OAuthMethod.DISCORD,
    OAuthMethod.APPLE,
  ],
};
export const capsuleWallet = getCapsuleWallet(getCapsuleWalletOpts);
