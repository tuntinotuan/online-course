import React from "react";
import { IconBars3, IconDocument, IconPen, IconTrash } from "../icon";
const Block = ({
  onClickPen = () => {},
  onClickTrash = () => {},
  className,
  title,
  childrenTitle,
  children,
}) => {
  return (
    <div
      className={`flex items-center gap-2 py-5 px-2 cursor-move group ${className}`}
    >
      {childrenTitle}
      <div className="flex-1 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <IconDocument size={15}></IconDocument>
          <span>{title}</span>
          <IconPen
            className="opacity-0 invisible group-hover:opacity-100 group-hover:visible"
            size={15}
            onClick={onClickPen}
          ></IconPen>
          <IconTrash
            className="opacity-0 invisible group-hover:opacity-100 group-hover:visible"
            size={15}
            onClick={onClickTrash}
          ></IconTrash>
        </div>
        <div className="flex items-center gap-2">
          {children}
          <IconBars3
            className="opacity-0 invisible group-hover:opacity-100 group-hover:visible"
            size={20}
            stroke={2}
          ></IconBars3>
        </div>
      </div>
    </div>
  );
};

export default Block;
