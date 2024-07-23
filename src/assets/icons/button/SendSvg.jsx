import { theme } from "../../../theme/theme";
import { Svg } from "../icon.styles";

// const SendSvg = () => {
//   return (
//     <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
//       <path
//         fill={theme.colors.secondary}
//         d="M352 224h-46c-45 0-82 37-82 82 0 22 10 34 19 40 7 5 13 12 13 20 0 10-8 18-18 18h-2l-7-1c-18-8-101-50-101-143 0-79 65-144 144-144h80V35a35 35 0 0 1 58-26l138 124a36 36 0 0 1 0 54L409 312c-6 5-13 8-21 8h-4c-18 0-32-14-32-32v-64zM80 96c-9 0-16 7-16 16v320c0 9 7 16 16 16h320c9 0 16-7 16-16v-48a32 32 0 1 1 64 0v48c0 44-36 80-80 80H80c-44 0-80-36-80-80V112c0-44 36-80 80-80h48a32 32 0 1 1 0 64H80z"
//       />
//     </Svg>
//   );
// };
const SendSvg = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        fill={theme.colors.secondary}
        d="M16 260a32 32 0 0 0 4 57l140 59v103a33 33 0 0 0 58 21l62-74 124 51c19 8 40-4 44-24l64-416a32 32 0 0 0-48-33L16 260zm52 26L410 91 190 336l1 1-123-51zm335 139-166-69 214-239-48 308z"
      />
    </Svg>
  );
};

export default SendSvg;
