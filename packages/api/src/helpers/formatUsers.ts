import type { User } from "@clerk/nextjs/dist/types/server";
import { TRPCError } from "@trpc/server";

const formatUsername = (user: User) => {
  if (user?.username) {
    return user.username;
  }
  const fullName = `${user?.firstName ?? ""}${
    user.lastName ? `_${user.lastName}` : ""
  }`;

  return fullName;
};

export const filterUserForClient = (user: User) => {
  if (!user.username && !user.firstName && !user.lastName) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Author not found",
    });
  }

  const username = formatUsername(user);
  return {
    id: user.id,
    username,
    profileImageUrl: user.profileImageUrl,
  };
};
