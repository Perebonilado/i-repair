import React, { FC } from "react";

const FacebookIcon: FC = () => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: `
   <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="72" height="72" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_109_346" transform="scale(0.00195312)"/>
</pattern>
<image id="image0_109_346" width="512" height="512" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>

   `,
      }}
    ></span>
  );
};

export default FacebookIcon;
