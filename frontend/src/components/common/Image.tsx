import { useState } from "react";
import { ContentLoader } from "../../design/common";

interface Props {
  src: string;
  width: number;
  height: number;
  alt?: string;
}

export default function Image({ src, width, height, alt }: Props) {
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      {showImage ? null : (
        <ContentLoader width={width + "px"} height={height + "px"} />
      )}
      <img
        alt={alt || `${src}-alt`}
        src={src}
        width={width}
        height={height}
        onLoad={() => setShowImage(true)}
        style={{ display: showImage ? "initial" : "none" }}
      />
    </>
  );
}
