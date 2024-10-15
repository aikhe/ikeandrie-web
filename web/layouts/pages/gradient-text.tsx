import { TextScroll } from "../../components/text-scroll";

const paragraph = `kung ikaw na ba, i'll make the effort to. if you do, i'll be happy to do so.
  pero kung di possible, it's alright. ayoko lng mabuburden ng walang kasiguraduhan.`;

const GradientText = () => {
  return (
    <>
      <div className="h-[100svh] w-full"></div>
      <TextScroll paragraph={paragraph} />
      <div className="h-[100svh] w-full"></div>
    </>
  );
};

export default GradientText;
