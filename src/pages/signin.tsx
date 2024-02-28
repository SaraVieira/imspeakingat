import { signIn } from "next-auth/react";
import React from "react";
import Header from "~/components/home/Header";

function SignIn() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-zinc-100">
      <Header />

      <main className="flex-grow">
        <section className="from-zinc-50-100 bg-gradient-to-b to-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="pb-12 pt-32 md:pb-20 md:pt-40">
              {/* Page header */}
              <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
                <h1 className="h1">Welcome back</h1>
              </div>

              {/* Form */}
              <div className="mx-auto max-w-sm">
                <div className="-mx-3 mb-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <button
                      onClick={() => signIn("discord", { callbackUrl: "/app" })}
                      className="btn relative flex w-full items-center bg-[#5865F2] px-0 text-white hover:bg-[#4a54cb]"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-4 h-4 w-4 flex-shrink-0 fill-current text-white opacity-75"
                      >
                        <title>Discord</title>
                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                      </svg>
                      <span className="-ml-16 flex-auto pl-16 pr-8">
                        Continue with Discord
                      </span>
                    </button>
                  </div>
                </div>
                <div className="-mx-3 mb-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <button
                      className="btn relative flex w-full items-center bg-gray-900 px-0 text-white hover:bg-gray-800"
                      onClick={() => signIn("google", { callbackUrl: "/app" })}
                    >
                      <svg
                        className="mx-4 h-4 w-4 flex-shrink-0 fill-current text-white opacity-75"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.993-2.683-.993-.398-.895-.895-1.193-.895-1.193-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.895 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.975 0-.895.298-1.59.795-2.087-.1-.2-.397-.994.1-2.087 0 0 .695-.2 2.186.795a6.408 6.408 0 011.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.795 2.186-.795.398 1.093.199 1.888.1 2.087.496.596.795 1.291.795 2.087 0 3.08-1.889 3.677-3.677 3.875.298.398.596.895.596 1.59v2.187c0 .198.1.497.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0z" />
                      </svg>
                      <span className="-ml-16 flex-auto pl-16 pr-8">
                        Continue with GitHub
                      </span>
                    </button>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <button
                      className="btn relative flex w-full items-center bg-red-600 px-0 text-white hover:bg-red-700"
                      onClick={() => signIn("github", { callbackUrl: "/app" })}
                    >
                      <svg
                        className="mx-4 h-4 w-4 flex-shrink-0 fill-current text-white opacity-75"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                      </svg>
                      <span className="-ml-16 flex-auto pl-16 pr-8">
                        Continue with Google
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignIn;
