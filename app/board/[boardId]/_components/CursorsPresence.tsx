"use client";

import { memo } from "react";
import {
  shallow,
  useOthersConnectionIds,
  useOthersMapped,
} from "@liveblocks/react/suspense";
import { Cursor } from "./Cursor";
import { Path } from "./Path";
import { colorToCSS } from "@/lib/utils";

const Cursors = () => {
  const connectionIds = useOthersConnectionIds();

  return (
    <>
      {connectionIds.map((connectionId) => {
        return <Cursor key={connectionId} connectionId={connectionId} />;
      })}
    </>
  );
};

const Drafts = () => {
  const others = useOthersMapped((other) => {
    return {
      pencilDraft: other.presence.pencilDraft,
      penColor: other.presence.penColor,
    };
  }, shallow);

  return (
    <>
      {others.map(([key, other]) => {
        if (other.pencilDraft) {
          return (
            <Path
              key={key}
              x={0}
              y={0}
              points={other.pencilDraft}
              fill={other.penColor ? colorToCSS(other.penColor) : "#000"}
            />
          );
        }

        return null;
      })}
    </>
  );
};

export const CursorsPresence = memo(() => {
  return (
    <>
      <Drafts />
      <Cursors />
    </>
  );
});

CursorsPresence.displayName = "CursorPresence"
