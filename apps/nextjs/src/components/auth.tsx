import type { ComponentProps } from "react";
import { SignInButton, SignOutButton } from "@clerk/nextjs";

export function SignIn(props: ComponentProps<"button">) {
  return <SignInButton {...props} />;
}

export function SignOut(props: ComponentProps<"button">) {
  return <SignOutButton {...props} />;
}
