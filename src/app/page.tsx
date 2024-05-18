import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

// to tell nextjs that this page is dynamic
export const dynamic = "force-dynamic";

const Images = async () => {
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id)
  });

  return (<div className="flex flex-wrap gap-4">
    {images.map((image) => (
      <div key={image.id} className="w-48">
        <img src={image.url} alt="image" />
        <div>{image.name}</div>
      </div>
    ))}
  </div>);
}

export default async function HomePage() {

  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please sign in to view this page</div>
      </SignedOut>
      <SignedIn>
      <Images />
      </SignedIn>
    </main>
  );
}
