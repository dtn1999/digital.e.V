import React from "react";
import { useRouter } from "next/router";

interface Props {
  loading: boolean;
  setLoading: (value: boolean) => void;
  component: React.ReactNode;
}

const NextSplashScreen: React.FC<Props> = React.memo(
  ({ loading, setLoading, component }) => {
    const router = useRouter();

    React.useEffect(() => {
      const handleStart = (url: string) =>
        url !== router.asPath && setLoading(true);
      const handleComplete = (url: string) => {
        return url === router.asPath && setLoading(false);
      };

      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleComplete);
      router.events.on("routeChangeError", handleComplete);

      return () => {
        router.events.off("routeChangeStart", handleStart);
        router.events.off("routeChangeComplete", handleComplete);
        router.events.off("routeChangeError", handleComplete);
      };
    });

    return (
      <React.Fragment>
        {loading && (
          <div className="absolute z-[10000] h-full w-full bg-white">
            {component}
          </div>
        )}
      </React.Fragment>
    );
  }
);
export default NextSplashScreen;
