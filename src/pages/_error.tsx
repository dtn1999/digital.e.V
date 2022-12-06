import { NextPage } from "next";
import Container from "src/components/Container";
import Headline from "src/components/Headline";

const ErrorPage: NextPage = (props: any) => {
  return (
    <div className="">
      <Container className="flex h-[80vh] flex-col items-center justify-center">
        <Headline
          className="text-5xl"
          blok={{
            value: "[Oops, something went wrong",
            color: "black",
          }}
        />
        <p className="py-4">
          report the error to{" "}
          <span className="text-primary">wesolution.cm@gmail.com</span>
        </p>
      </Container>
    </div>
  );
};

export default ErrorPage;
