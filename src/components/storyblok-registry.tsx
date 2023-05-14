import HeaderMenu from "./HeaderMenu";
import MenuLink from "./MenuLink";
import Page from "./Page";
import Banner from "./Banner";
import Teaser from "./Teaser";
import Carousel from "./Carousel";
import CarouselSlide from "./Carousel/CarouselSlide";
import SectionWithImage from "./SectionWithImage";
import { BlokContainer } from "./Container";
import CountUp from "./CountUp";
import Paragraph from "./Paragraph";
import { HeadlineBlock } from "./Headline";
import Grid, { Column } from "./Grid";
import Tab from "./Tab";
import FeaturedProjects from "./FeaturedProjects";
import FeaturedMembers from "./FeaturedMembers";
import Accordion, { AccordionItem } from "./Accordion";
import Event from "./Event";
import AllProjects from "./AllProjects";
import dynamic from "next/dynamic";
import PartnersAndSponsors from "./PartnersAndSponsors";
import ImageBlok from "./ImageBlok";
import Footer from "./common/Footer";
import FooterMenuLink from "./common/FooterMenuLink";
import RichtextPage from "./RichtextPage";
import Project from "./Project";
import DynamicForm from "./form/DynamicForm";
import FormCheckbox from "./form/FormCheckbox";
import FormInput from "./form/FormInput";
import FormSelect from "./form/FormSelect";
import FormTextarea from "./form/FormTextarea";
import FlexBox from "./FlexBox";
import FormSubmit from "./form/FormSubmit";
import Collaborator from "./Collaborator";
import AllServices from "./AllServices";
import Service from "./Service";
import MemberCard from "./MemberCard";
import TestimonialSection from "./TestimonialSection";

const CollaboratorsCarousel = dynamic(() => import("./CollaboratorsCarousel"), {
  ssr: false,
});

const AllEvents = dynamic(() => import("./AllEvents"), {
  ssr: false,
});
export const STORY_BLOK_COMPONENTS = {
  Page,
  Event,
  Project,
  Collaborator,
  Service,
  Member: MemberCard,
  HeaderMenu,
  Footer,
  MenuLink,
  Banner,
  Teaser,
  Carousel,
  CarouselSlide,
  SectionWithImage,
  Container: BlokContainer,
  Headline: HeadlineBlock,
  Paragraph,
  Image: ImageBlok,
  Grid,
  Column,
  CountUp,
  Tab,
  FeaturedProjects,
  FeaturedMembers,
  Accordion,
  AccordionItem,
  CollaboratorsCarousel,
  AllProjects,
  AllEvents,
  AllServices,
  PartnersAndSponsors,
  FooterMenuLink,
  RichtextPage,
  Form: DynamicForm,
  FormInput,
  FormTextarea,
  FormSelect,
  FormCheckbox,
  FlexBox,
  FormSubmit,
  TestimonialSection,
};
