import { Heading } from "@radix-ui/themes";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-[#111A27] border-t-1 border-[#1B537B] text-white p-7 max-md:p-4">
      <Heading as="h2" className="max-md:text-lg">Made in Vite/React/Tailwind/Radix</Heading>
    </footer>
  );
};

export default Footer;
