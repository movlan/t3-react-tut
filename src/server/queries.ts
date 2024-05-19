import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getMyImages() {
  // get the user from auth and check if the user has access to the images
  const user = auth();

  if (!user.userId) {
    throw new Error("Unauthorized");
  }

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });

  return images;
}

export async function getImage(id: number) {
  const user = auth();

  if (!user.userId) {
    throw new Error("Unauthorized");
  }

  const image = await db.query.images.findFirst({
    where: (model, { eq, and }) => and(
      eq(model.id, id),
      eq(model.userId, user.userId)
    )
  });

  if (!image) {
    throw new Error("Image not found");
  }

  return image;
}

export async function deleteImage(id: number) {
}