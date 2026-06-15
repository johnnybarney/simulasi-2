import Image from "next/image";
import { cn } from "@/lib/cn";

type ReferenceImageProps = {
  src: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function ReferenceImage({
  src,
  alt = "",
  className,
  imageClassName,
  priority = false,
}: ReferenceImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={cn("object-cover", imageClassName)}
      />
    </div>
  );
}
