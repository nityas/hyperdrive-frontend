import { APP_VERSION } from "src/version.output";

export function logAppVersion(): void {
  const repoUrl = "https://github.com/delvtech/hyperdrive-frontend";
  const versionUrl = `${repoUrl}/commit/${APP_VERSION}`;
  const unreleasedUrl = `${repoUrl}/compare/${APP_VERSION}...main`;

  // eslint-disable-next-line no-console
  console.log(`App version: ${versionUrl}`);
  // eslint-disable-next-line no-console
  console.log(`Unreleased commits: ${unreleasedUrl}`);
}
