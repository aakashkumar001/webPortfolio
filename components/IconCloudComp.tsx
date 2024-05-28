import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "shadcn",
  "es6",
  "react",
  "expressjs",
  "appwrite",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "supabase",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "reactquery",
  "redux",
  "mongodb",
  "docker",
  "git",
  "notion",
  "github",
  "visualstudiocode",
  "npm",
  "graphql",
  "figma",
];

export default function IconCloudComp() {
  return (
    <>
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
    </>
  );
}
