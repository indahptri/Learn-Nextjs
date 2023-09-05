"use client";

import * as Avatar from "@radix-ui/react-avatar";

const MyAvatar = () => {
  return (
    <Avatar.Root className="bg-gray-300 inline-flex h-24 w-24 select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        alt="Pedro Duarte"
      />
      <Avatar.Fallback
        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        HY
      </Avatar.Fallback>
    </Avatar.Root>
  );
};

export default MyAvatar;
