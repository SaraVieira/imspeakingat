import { HomeLayout } from "~/components/homeLayout";

export default function Home() {
  return (
    <HomeLayout>
      <section className="container relative mx-auto flex flex-col items-center justify-center gap-12 py-8 sm:flex-row ">
        <div className="text-center">
          <h1 className="leading-tighter mb-4 text-5xl font-extrabold tracking-tighter md:text-6xl">
            imspeaking{" "}
            <span className="-ml-1 bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text text-transparent">
              .at
            </span>
          </h1>
          <div className="mx-auto max-w-3xl text-muted-foreground">
            <p className="text-xl">
              all your speaking events in one place.
              <br />
              create your own page.
            </p>
          </div>
        </div>

        <div>
          <img
            className="mx-auto"
            src={"/hero-image.png"}
            width="768"
            height="432"
            alt="Hero"
          />
        </div>
      </section>
    </HomeLayout>
  );
}
