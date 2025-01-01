import type { Metadata } from 'next';
import { Sidebar } from '../components/Sidebar';

import styles from './page.module.css';
import { Providers } from './providers';
import { cookies } from 'next/headers';

import './globals.css';
import '../../packages/canon/src/css/core.css';
import '../../packages/canon/src/css/components.css';
import '../../packages/canon/.storybook/themes/backstage.css';

export const metadata: Metadata = {
  title: 'Canon',
  description: 'UI library for Backstage',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value || 'light';
  const version = cookieStore.get('version')?.value || 'v1';

  let dataTheme = 'light';
  if (version === 'v1' && theme === 'light') dataTheme = 'backstage-light';
  if (version === 'v1' && theme === 'dark') dataTheme = 'backstage-dark';
  if (version === 'v2' && theme === 'light') dataTheme = 'light';
  if (version === 'v2' && theme === 'dark') dataTheme = 'dark';

  return (
    <html lang="en" data-theme={dataTheme}>
      <body>
        <Providers>
          <div className={styles.global}>
            <Sidebar />
            <div className={styles.container}>{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
