import Image from "next/image";
import profile from "../../../public/images/profile.png";
import { Badge } from "./UI/Badge";
import { Button } from "./UI/Button";
import { SeenIcon } from "./Icons/seen";
import { ShareIcon } from "./Icons/share";
import { DownloadIcon } from "./Icons/download";
import { LogoIcon } from "./Icons/logo";
import QrCode from "../../../public/images/QR-code.png";
import { FollowersIcon } from "./Icons/followersIcon";
import { StarIcon } from "./Icons/star";
import { FollowingIcon } from "./Icons/following";

export function Aside() {
  const badges = [
    {
      icon: <FollowingIcon />,
      label: "Following",
      num: 5,
    },
    {
      icon: <FollowersIcon />,
      label: "Followers",
      num: 20,
    },
    {
      icon: <StarIcon />,
      label: "Rate",
      num: 4.2,
      pNum: 15,
    },
  ];
  return (
    <aside className="h-96 w-3/12 min-w-80 mx-auto">
      <figure>
        <div className="w-20 mb-4">
          <Image
            src={profile}
            alt="User Avatar"
            width={100}
            height={100}
            layout="responsive"
            className="cursor-pointer"
          />
        </div>
        <figcaption className="mb-4 text-xl font-semibold">
          Hala Ahmed
        </figcaption>
      </figure>
      <p className=" text-stone-500 text-sm mb-6">
        I am Hala Ahmed, I am the owner of the local brand called Beauty which
        is for Makeup and Skin Care.
      </p>
      <div className="flex justify-between mb-6">
        {badges.map((b) => {
          return (
            <Badge
              Icon={b.icon}
              label={b.label}
              number={b.num}
              parenthesesNum={b.pNum ? b.pNum : undefined}
            />
          );
        })}
      </div>
      <Button styles="w-full mb-6">Follow</Button>
      <div>
        <h3>QR Code</h3>
        <SeenIcon />
        <ShareIcon />
        <DownloadIcon />
      </div>
      <div>
        <DownloadIcon />
        <p>Download the QR code or share it with your friends.</p>
      </div>
      <div>
        <div>
          <LogoIcon />
          <h2>Hala Ahmed</h2>
          <figure className="w-10 rounded-full overflow-hidden ">
            <Image
              src={QrCode}
              alt="User Avatar"
              width={10}
              height={10}
              layout="responsive"
              className="cursor-pointer"
            />
            <figcaption>Follow Us ON Mazaady</figcaption>
          </figure>
        </div>
      </div>
    </aside>
  );
}
