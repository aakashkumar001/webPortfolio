import TypingAnimation from "@/components/magicui/typing-animation";

export async function TextRevealDemo() {
  return (
    <>
    <TypingAnimation
      className="text-1xl text-black italic dark:text-white"
      text="Hey there! I'm a full stack developer with a passion for creating seamless, user-friendly end to end applications."
    />
    </>
  );
}
