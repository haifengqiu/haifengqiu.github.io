import React, { forwardRef, useEffect, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Giscus, { GiscusProps } from '@giscus/react';
import {
  useThemeConfig,
  useColorMode,
  ThemeConfig
} from '@docusaurus/theme-common';
interface CustomThemeConfig extends ThemeConfig {
  giscus: GiscusProps & { darkTheme: string };
}

export const Comment = forwardRef<HTMLDivElement>((_props, ref) => {
  const { giscus } = useThemeConfig() as CustomThemeConfig;
  const { colorMode } = useColorMode();
  const { theme = 'light', darkTheme = 'dark_dimmed' } = giscus;
  const giscusTheme = colorMode === 'dark' ? darkTheme : theme;
  const [routeDidUpdate, setRouteDidUpdate] = useState(false);

  return (
    <BrowserOnly fallback={<div>Loading Comments...</div>}>
      {() => (
        <div ref={ref} id="comment" style={{ paddingTop: 50 }}>
          <Giscus
            id="comments"
            {...giscus}
            theme={giscusTheme}
          />
        </div>
      )}
    </BrowserOnly>
  );
});

export default Comment;