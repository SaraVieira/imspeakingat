import { HomeLayout } from "~/components/homeLayout";
import { HomeBg } from "~/components/icons/bg";
import { ImageComparison } from "~/components/imageComparison";

export default function Home() {
  return (
    <HomeLayout>
      <section className="container relative mx-auto mt-12 flex max-w-[100vw] flex-col items-center justify-center lg:mt-0 lg:flex-row lg:gap-12">
        <div className="mt-0 text-center lg:-mt-20">
          <h1 className="leading-tighter mb-4 text-5xl font-extrabold tracking-tighter md:text-6xl">
            imspeaking{" "}
            <span className="-ml-1 bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text text-transparent">
              .at
            </span>
          </h1>
          <div className="mx-auto max-w-3xl text-muted-foreground">
            <p className="text-xl">
              All your speaking events in one place.
              <br />
              Create your own page.
            </p>
          </div>
        </div>

        <div className="relative w-[768px] max-w-[100vw] overflow-hidden">
          <HomeBg />
          <div className="absolute top-1/2 mx-auto -translate-y-1/2">
            <img src={"/browser1.png"} width="768" alt="Hero" />
            <div className="absolute left-3 top-0 m-auto h-[430px] w-[727px] max-w-[100vw] overflow-hidden sm:left-[19px]">
              <ImageComparison
                firstImageUrl={"./1.png"}
                secondImageUrl={"./2.png"}
              />
            </div>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
}
