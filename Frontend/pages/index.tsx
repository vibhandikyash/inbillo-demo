import { useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import {
  ChartComponent,
  Header,
  LeftNavComponent,
  RightNavComponent,
} from "../components";

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    if (router.asPath === router.route) {
      router.push("?duration=1H&rightNav=Otwarcie+sprawyy");
    }
  }, [router]);
  return (
    <>
      <div className="font-Nunito cursor-pointer">
        <Header />
        <div className="flex bg-whiteBG-950">
          <LeftNavComponent />
          <ChartComponent />
          <RightNavComponent />
        </div>
      </div>
    </>
  );
};
export const getServerSideProps = async () => {
  if (typeof window === undefined) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return {
    props: {},
  };
};

export default Home;
