import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
  {
    id: 13,
    // name: "James",
    // username: "@james",
    // body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/30dc.webp",
  },
  {
    id: 1,
    // name: "Jack",
    // username: "@jack",
    // body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/google.svg",
  },
  {
    id: 2,
    // name: "Jill",
    // username: "@jill",
    // body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/notion.svg",
  },
  {
    id: 3,
    // name: "John",
    // username: "@john",
    // body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/gemini.svg",
  },
  {
    id: 4,
    // name: "Jane",
    // username: "@jane",
    // body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/prisma.svg",
  },
  {
    id: 5,
    // name: "Jenny",
    // username: "@jenny",
    // body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/udemy.svg",
  },
  {
    id: 6,
    // name: "James",
    // username: "@james",
    // body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/chatgpt.svg",
  },
  {
    id: 7,
    // name: "James",
    // username: "@james",
    // body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/postman.svg",
  },

  {
    id: 8,
    // name: "James",
    // username: "@james",
    // body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/appwrite.svg",
  },
  {
    id: 9,
    // name: "James",
    // username: "@james",
    // body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/vscode.svg",
  },
  {
    id: 10,
    // name: "James",
    // username: "@james",
    // body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/supabase.svg",
  },
  {
    id: 11,
    // name: "James",
    // username: "@james",
    // body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/vercel.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ id, img }: { id: Number; img: string }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        <img className="rounded-full" width="48" height="48" alt="" src={img} />
        {/* <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div> */}
      </div>
      {/* <blockquote className="mt-2 text-sm">{body}</blockquote> */}
    </figure>
  );
};

const MarqueeLogo = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg py-10 px-20 md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
    </div>
  );
};

export default MarqueeLogo;
