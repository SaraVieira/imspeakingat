function HeroHome() {
  return (
    <section className="relative text-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-8 pb-6 pt-32 md:pb-20 md:pt-40">
          <div className="pb-12 text-center md:pb-16">
            <h1 className="leading-tighter mb-4 text-5xl font-extrabold tracking-tighter md:text-6xl">
              iamsepaking{" "}
              <span className="-ml-1 bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text text-transparent">
                .at
              </span>
            </h1>
            <div className="mx-auto max-w-3xl text-muted-foreground">
              <p className="mb-8 text-xl">
                All your speaking events in one place.
                <br />
                Keep track, share your page.
              </p>
            </div>
          </div>

          <div>
            <div className="relative mb-8 flex justify-center">
              <div className="flex flex-col justify-center">
                <img
                  className="mx-auto"
                  src={"/hero-image.png"}
                  width="768"
                  height="432"
                  alt="Hero"
                />
                <svg
                  className="absolute inset-0 mx-auto h-auto max-w-full md:max-w-none"
                  width="768"
                  height="432"
                  viewBox="0 0 768 432"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                      id="hero-ill-a"
                    >
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#EAEAEA" offset="77.402%" />
                      <stop stopColor="#DFDFDF" offset="100%" />
                    </linearGradient>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="99.24%"
                      id="hero-ill-b"
                    >
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#EAEAEA" offset="48.57%" />
                      <stop stopColor="#DFDFDF" stopOpacity="0" offset="100%" />
                    </linearGradient>
                    <radialGradient
                      cx="21.152%"
                      cy="86.063%"
                      fx="21.152%"
                      fy="86.063%"
                      r="79.941%"
                      id="hero-ill-e"
                    >
                      <stop stopColor="#4FD1C5" offset="0%" />
                      <stop stopColor="#81E6D9" offset="25.871%" />
                      <stop stopColor="#338CF5" offset="100%" />
                    </radialGradient>
                    <circle id="hero-ill-d" cx="384" cy="216" r="64" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <circle
                      fillOpacity=".04"
                      fill="url(#hero-ill-a)"
                      cx="384"
                      cy="216"
                      r="128"
                    />
                    <circle
                      fillOpacity=".16"
                      fill="url(#hero-ill-b)"
                      cx="384"
                      cy="216"
                      r="96"
                    />
                    <g fillRule="nonzero">
                      <use fill="#000" xlinkHref="#hero-ill-d" />
                      <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
