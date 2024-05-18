import { db } from "~/server/db";

// to tell nextjs that this page is dynamic
export const dynamic = "force-dynamic";


export default async function HomePage() {
  const images = await db.query.image.findMany({
    orderBy: (model, {desc}) => desc(model.id)
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-48">
            <p>{image.name}</p>
            <img src={image.url} alt="image" />
          </div> 
        ))}
      </div>
    </main>
  );
}
