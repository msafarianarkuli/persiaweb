import { useMemo } from "react";
import { useSession } from "next-auth/react";

function usePrivateLink({ link }) {
  const { status } = useSession();

  return useMemo(() => {
    if (status === "authenticated") {
      return link;
    }
    return "/login";
  }, [link, status]);
}

export default usePrivateLink;
