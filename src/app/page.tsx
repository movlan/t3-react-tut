import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/8f8b15d0-4a11-4645-90a9-2322f89253b0-frw7ng.png",
  "https://utfs.io/f/c8f0caae-b1b7-4504-8295-fad71443ef43-frw8aw.png",
  "https://utfs.io/f/b9b34445-d8a7-4659-8580-8be1aecc7480-frw89y.png",
  "https://utfs.io/f/f3233c4b-d1b4-49d9-9e84-ebaf6a997966-frw6u9.png",
];

const mockImages = mockUrls.map((url, idx) => ({
  url,
  id: idx + 1,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            <p>{post.name}</p>
          </div> 
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
