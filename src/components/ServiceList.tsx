import React from "react";
import cn from "classnames";
import { gql } from "graphql-request";
import Container from "./Container";
import { useServices } from "src/hooks/useServices";
import ServiceTeaser from "./ServiceTeaser";
interface Props {}

const ServiceList: React.FC<Props> = React.memo(({}) => {
  const { loading, services } = useServices();
  return (
    <Container>
      <div className="">
        <div className="grid w-full grid-cols-1 py-20 md:grid-cols-3">
          {services.map((service) => (
            <ServiceTeaser
              key={service.id || service.uuid}
              service={service.content}
              slug={service.full_slug}
            />
          ))}
        </div>
      </div>
    </Container>
  );
});
export default ServiceList;
