import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run migrate-repo:serve:development',
        production: 'nx run migrate-repo:serve:production',
      },
      ciWebServerCommand: 'nx run migrate-repo:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
