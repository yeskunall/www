export const createOgImage = ({
  meta,
  title,
}: {
  title: string;
  meta: string;
}) =>
  [
    `https://res.cloudinary.com/dwjzu6ozg/image/upload`,
    `w_1600,h_840,q_100`,
    `l_text:Karla_72_bold_letter_spacing_-3.5:${e(
      title,
    )},co_rgb:000000,c_fit,w_1400,h_240`,
    `fl_layer_apply,g_south_west,x_100,y_180`,
    `l_text:Karla_48_letter_spacing_1.5:${e(meta)},co_rgb:000000,c_fit,w_1400`,
    `fl_layer_apply,g_south_west,x_100,y_100`,
    `og_rkulik.png`,
  ].join("/");

const e = (str: string) => encodeURIComponent(encodeURIComponent(str));
