"use client";

import { LayerType } from "@/types/canvas";
import { useStorage } from "@liveblocks/react/suspense";
import { memo } from "react";
import { Rectangle } from "./Rectangle";
import { Ellipsis } from "./Ellipsis";
import { Text } from "./Text";
import { Note } from "./Note";
import { Path } from "./Path";
import { colorToCSS } from "@/lib/utils";

interface LayerPreviewProps {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

export const LayerPreview = memo(
  ({ id, onLayerPointerDown, selectionColor }: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));

    if (!layer) {
      return null;
    }

    switch (layer.type) {
      case LayerType.Rectangle:
        return (
          <Rectangle
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Ellipsis:
        return (
          <Ellipsis
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Text:
        return (
          <Text
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Note:
        return (
          <Note
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Path:
        return (
          <Path
            points={layer.points}
            x={layer.x}
            y={layer.y}
            onPointerDown={(e) => onLayerPointerDown(e, id)}
            fill={layer.fill ? colorToCSS(layer.fill) : "#000"}
            stroke={selectionColor}
          />
        );
      default:
        console.warn("Unknown");
        return null;
    }
  }
);

LayerPreview.displayName = "LayerPreview";
