import { TextScroll } from "../../components/text-scroll";

const paragraph = `Eto ung time na inuulit, pero alam mona, but you still keep insisting despite
  the pain and disappointment the outcome is gonna be. The thing is you know it, kaya
  alam mo kung paano maiiwasan, so eto ako ginagawang laro na kala mo walang pandama,
  owing to the fact that I already know it. So un eto ako nahihirapan mahulog.`;

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
