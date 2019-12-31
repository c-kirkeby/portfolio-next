import { css } from 'styled-components'

export default css`
  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 100;
    font-display: swap;
    src: url("/static/Inter-Thin.woff2") format("woff2"),
        url("/static/Inter-Thin.woff") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 100;
    font-display: swap;
    src: url("/static/Inter-ThinItalic.woff2") format("woff2"),
        url("/static/Inter-ThinItalic.woff") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 200;
    font-display: swap;
    src: url("/static/Inter-ExtraLight.woff2") format("woff2"),
        url("/static/Inter-ExtraLight.woff") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 200;
    font-display: swap;
    src: url("/static/Inter-ExtraLightItalic.woff2") format("woff2"),
        url("/static/Inter-ExtraLightItalic.woff") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 300;
    font-display: swap;
    src: url("/static/Inter-Light.woff2") format("woff2"),
        url("/static/Inter-Light.woff") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 300;
    font-display: swap;
    src: url("/static/Inter-LightItalic.woff2") format("woff2"),
        url("/static/Inter-LightItalic.woff") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 400;
    font-display: swap;
    src: url("/static/Inter-Regular.woff2") format("woff2"),
        url("/static/Inter-Regular.woff") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 400;
    font-display: swap;
    src: url("/static/Inter-Italic.woff2") format("woff2"),
        url("/static/Inter-Italic.woff") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 500;
    font-display: swap;
    src: url("/static/Inter-Medium.woff2") format("woff2"),
        url("/static/Inter-Medium.woff") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 500;
    font-display: swap;
    src: url("/static/Inter-MediumItalic.woff2") format("woff2"),
        url("/static/Inter-MediumItalic.woff") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 600;
    font-display: swap;
    src: url("/static/Inter-SemiBold.woff2") format("woff2"),
        url("/static/Inter-SemiBold.woff") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 600;
    font-display: swap;
    src: url("/static/Inter-SemiBoldItalic.woff2") format("woff2"),
        url("/static/Inter-SemiBoldItalic.woff") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 700;
    font-display: swap;
    src: url("/static/Inter-Bold.woff2") format("woff2"),
        url("/static/Inter-Bold.woff") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 700;
    font-display: swap;
    src: url("/static/Inter-BoldItalic.woff2") format("woff2"),
        url("/static/Inter-BoldItalic.woff") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 800;
    font-display: swap;
    src: url("/static/Inter-ExtraBold.woff2") format("woff2"),
        url("/static/Inter-ExtraBold.woff") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 800;
    font-display: swap;
    src: url("/static/Inter-ExtraBoldItalic.woff2") format("woff2"),
        url("/static/Inter-ExtraBoldItalic.woff") format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 900;
    font-display: swap;
    src: url("/static/Inter-Black.woff2") format("woff2"),
        url("/static/Inter-Black.woff") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style:  italic;
    font-weight: 900;
    font-display: swap;
    src: url("/static/Inter-BlackItalic.woff2") format("woff2"),
        url("/static/Inter-BlackItalic.woff") format("woff");
  }

  @font-face {
    font-family: 'Metropolis';
    font-style:  normal;
    font-weight: 100;
    font-display: swap;
    src: url("/static/Metropolis-Thin.woff2") format("woff2"),
        url("/static/Metropolis-Thin.woff") format("woff");
  }
  @font-face {
    font-family: 'Metropolis';
    font-style:  italic;
    font-weight: 100;
    font-display: swap;
    src: url("/static/Metropolis-ThinItalic.woff2") format("woff2"),
        url("/static/Metropolis-ThinItalic.woff") format("woff");
  }

  @font-face {
    font-family: 'Metropolis';
    font-style:  normal;
    font-weight: 200;
    font-display: swap;
    src: url("/static/Metropolis-ExtraLight.woff2") format("woff2"),
        url("/static/Metropolis-ExtraLight.woff") format("woff");
  }
  @font-face {
    font-family: 'Metropolis';
    font-style:  italic;
    font-weight: 200;
    font-display: swap;
    src: url("/static/Metropolis-ExtraLightItalic.woff2") format("woff2"),
        url("/static/Metropolis-ExtraLightItalic.woff") format("woff");
  }

  @font-face {
    font-family: 'Metropolis';
    font-style:  normal;
    font-weight: 300;
    font-display: swap;
    src: url("/static/Metropolis-Light.woff2") format("woff2"),
        url("/static/Metropolis-Light.woff") format("woff");
  }
  @font-face {
    font-family: 'Metropolis';
    font-style:  italic;
    font-weight: 300;
    font-display: swap;
    src: url("/static/Metropolis-LightItalic.woff2") format("woff2"),
        url("/static/Metropolis-LightItalic.woff") format("woff");
  }

  @font-face {
    font-family: 'Metropolis';
    font-style:  normal;
    font-weight: 400;
    font-display: swap;
    src: url("/static/Metropolis-Regular.woff2") format("woff2"),
        url("/static/Metropolis-Regular.woff") format("woff");
  }
  @font-face {
    font-family: 'Metropolis';
    font-style:  italic;
    font-weight: 400;
    font-display: swap;
    src: url("/static/Metropolis-Italic.woff2") format("woff2"),
        url("/static/Metropolis-Italic.woff") format("woff");
  }

  @font-face {
    font-family: 'Metropolis';
    font-style:  normal;
    font-weight: 500;
    font-display: swap;
    src: url("/static/Metropolis-Medium.woff2") format("woff2"),
        url("/static/Metropolis-Medium.woff") format("woff");
  }
  @font-face {
    font-family: 'Metropolis';
    font-style:  italic;
    font-weight: 500;
    font-display: swap;
    src: url("/static/Metropolis-MediumItalic.woff2") format("woff2"),
        url("/static/Metropolis-MediumItalic.woff") format("woff");
  }

  @font-face {
    font-family: 'Metropolis';
    font-style:  normal;
    font-weight: 600;
    font-display: swap;
    src: url("/static/Metropolis-SemiBold.woff2") format("woff2"),
        url("/static/Metropolis-SemiBold.woff") format("woff");
  }
  @font-face {
    font-family: 'Metropolis';
    font-style:  italic;
    font-weight: 600;
    font-display: swap;
    src: url("/static/Metropolis-SemiBoldItalic.woff2") format("woff2"),
        url("/static/Metropolis-SemiBoldItalic.woff") format("woff");
  }

  @font-face {
    font-family: 'Metropolis';
    font-style:  normal;
    font-weight: 700;
    font-display: swap;
    src: url("/static/Metropolis-Bold.woff2") format("woff2"),
        url("/static/Metropolis-Bold.woff") format("woff");
  }
  @font-face {
    font-family: 'Metropolis';
    font-style:  italic;
    font-weight: 700;
    font-display: swap;
    src: url("/static/Metropolis-BoldItalic.woff2") format("woff2"),
        url("/static/Metropolis-BoldItalic.woff") format("woff");
  }

  @font-face {
    font-family: 'Metropolis';
    font-style:  normal;
    font-weight: 800;
    font-display: swap;
    src: url("/static/Metropolis-ExtraBold.woff2") format("woff2"),
        url("/static/Metropolis-ExtraBold.woff") format("woff");
  }
  @font-face {
    font-family: 'Metropolis';
    font-style:  italic;
    font-weight: 800;
    font-display: swap;
    src: url("/static/Metropolis-ExtraBoldItalic.woff2") format("woff2"),
        url("/static/Metropolis-ExtraBoldItalic.woff") format("woff");
  }

  @font-face {
    font-family: 'Metropolis';
    font-style:  normal;
    font-weight: 900;
    font-display: swap;
    src: url("/static/Metropolis-Black.woff2") format("woff2"),
        url("/static/Metropolis-Black.woff") format("woff");
  }
  @font-face {
    font-family: 'Metropolis';
    font-style:  italic;
    font-weight: 900;
    font-display: swap;
    src: url("/static/Metropolis-BlackItalic.woff2") format("woff2"),
        url("/static/Metropolis-BlackItalic.woff") format("woff");
  }

  /* -------------------------------------------------------
  Variable font.
  Usage:

    html { font-family: 'Inter', sans-serif; }
    @supports (font-variation-settings: normal) {
      html { font-family: 'Inter var', sans-serif; }
    }
  */
  @font-face {
    font-family: 'Inter var';
    font-weight: 100 900;
    font-style: normal;
    font-named-instance: 'Regular';
    font-display: swap;
    src: url("/static/Inter-roman.var.woff2") format("woff2");
  }
  @font-face {
    font-family: 'Inter var';
    font-weight: 100 900;
    font-style: italic;
    font-named-instance: 'Italic';
    font-display: swap;
    src: url("/static/Inter-italic.var.woff2") format("woff2");
  }
`
