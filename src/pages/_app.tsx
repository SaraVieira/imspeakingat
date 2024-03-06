import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { ThemeProvider } from "../components/theme-provider";
import { api } from "~/utils/api";
import { Inter as FontSans } from "next/font/google";
import "~/styles/globals.css";
import { Toaster } from "~/components/ui/toaster";
import { TooltipProvider } from "~/components/ui/tooltip";
import Head from "next/head";

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
      defaultTheme="dark"
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
      <Head>
        <script
          defer
          data-domain="imspeaking.at"
          src="https://analytics.iamsaravieira.com/js/script.js"
        ></script>
      </Head>
      <TooltipProvider>
        <SessionProvider session={session}>
          <Component {...pageProps} />
          <Toaster />
        </SessionProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
