import { theme } from "../../theme/theme";
import { Svg } from "./icon.styles";

const DownloadSvg = () => {
  return (
    <Svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0.98 3 22.05 17.02"
    >
      <path
        fill={theme.colors.secondary}
        d="M8 10a4 4 0 1 1 8 0v1h1a3.5 3.5 0 1 1 0 7h-.1a1 1 0 1 0 0 2h.1a5.5 5.5 0 0 0 1-11A6 6 0 0 0 6 9a5.5 5.5 0 0 0 1 11h.1a1 1 0 1 0 0-2H7a3.5 3.5 0 1 1 0-7h1v-1Zm5 1a1 1 0 1 0-2 0v5.6l-1.3-1.3a1 1 0 0 0-1.4 1.4l3 3c.4.4 1 .4 1.4 0l3-3a1 1 0 0 0-1.4-1.4L13 16.6V11Z"
      ></path>
    </Svg>
  );
};

export default DownloadSvg;
