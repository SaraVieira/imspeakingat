import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { ThemeProvider } from "../components/theme-provider";
import { api } from "~/utils/api";
import { Inter as FontSans } from "next/font/google";
import "~/styles/globals.css";
import { Toaster } from "~/components/ui/toaster";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
          --font-sans: ${fontSans.style.fontFamily};
        }`,
        }}
      />
      <SessionProvider session={session}>
        <Component {...pageProps} />
        <Toaster />
      </SessionProvider>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
