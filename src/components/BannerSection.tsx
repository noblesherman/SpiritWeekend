import Image from "next/image";

export function BannerSection() {
  return (
    <div className="banner">
      <Image
        src="/Spirit_Weekend_Fire.jpg"
        alt="Spirit Weekend bonfire"
        fill
        className="banner-image"
        style={{ objectFit: "cover" }}
        priority
      />
    </div>
  );
}
