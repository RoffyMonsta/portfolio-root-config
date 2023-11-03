import { assetUrl } from "./asset-url";

export function loadFonts(): void {
  const id = 'fonts';
  if (document.getElementById(id) !== null) {
    return;
  }
  const style = document.createElement('style');
  style.innerHTML = `

  @font-face {
    font-family: 'Lady Ice';
    src: url(${assetUrl('/fonts/lady-ice/lady-ice.regular.ttf')}) format('truetype');
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: 'Lady Ice';
    src: url(${assetUrl('/fonts/lady-ice/lady-ice.bold.ttf')}) format('truetype');
    font-style: normal;
    font-weight: bold;
  }

  @font-face {
    font-family: 'Lady Ice';
    src: url(${assetUrl('/fonts/lady-ice/lady-ice.light.ttf')}) format('truetype');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Lady Ice';
    src: url(${assetUrl('/fonts/lady-ice/lady-ice.extra-light.ttf')}) format('truetype');
    font-style: normal;
    font-weight: 200;
  }
`;
  style.id = id;
  document.head.appendChild(style);
}