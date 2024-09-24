"use client";

import { ClerkProvider, SignInButton, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import {
  Authenticated,
  AuthLoading,
  ConvexReactClient,
  Unauthenticated,
} from "convex/react";
import Loading from "@/components/auth/Loading";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(convexUrl);

interface ConvexClietProviderProps {
  children: React.ReactNode;
}

const ConvexClietProvider: React.FC<ConvexClietProviderProps> = ({
  children,
}) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <AuthLoading>
          <Loading />
        </AuthLoading>
        <Unauthenticated>
          <SignInButton />
        </Unauthenticated>
        <Authenticated>{children}</Authenticated>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClietProvider;
