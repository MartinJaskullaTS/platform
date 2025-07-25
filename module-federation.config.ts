import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'cc_platform',
  // This will add rslib_provider, cc_shared on the window: https://github.com/module-federation/module-federation-examples/discussions/1493#discussioncomment-2100532
  remotes: {
    'plugin': 'rslib_provider@https://unpkg.com/module-federation-rslib-provider@latest/dist/mf/mf-manifest.json',
    // 'plugin': 'rslib_provider@http://localhost:3001/mf-manifest.json',
    // Including and exposing cc_shared from the cc_platform repo should also work: https://youtu.be/pGy5vrFJlH0?si=XLBXA81ua98JRVX5&t=743
    // If a repo is exposing multiple things that should not depend on each other: https://youtu.be/pGy5vrFJlH0?si=bAU_ukrixnGtiGXG&t=1096
    cc_shared: 'cc_shared@http://localhost:3002/mf-manifest.json',
  },
  shareStrategy: 'loaded-first',
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
