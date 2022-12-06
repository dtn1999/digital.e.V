import { NextPage } from "next";
import Container from "src/components/Container";
import Headline from "src/components/Headline";

const NotFoundPage: NextPage = (props: any) => {
  return (
    <div className="">
      <Container className="flex h-[80vh] flex-col items-center justify-center px-4">
        <Headline
          className="text-5xl"
          blok={{
            value: "[404] Page Not Found",
            color: "black",
          }}
        />
        <p className="py-4">
          The page you are trying to view doesn&lsquo;t exist yet.
        </p>
        <p>
          However, if you think it is an error please report to{" "}
          <span className="text-primary">wesolution.cm@gmail.com</span>
        </p>
      </Container>
    </div>
  );
};

export default NotFoundPage;
