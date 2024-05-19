import { getImage } from "~/server/queries";
import { Modal } from "./modal";
import { FullPageImageView } from "~/common/full-page-image-component";

export default async function PhotosModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);

  if (isNaN(idAsNumber)) throw new Error("Invalid photo ID");

  return <FullPageImageView photoId={photoId} />;
}
