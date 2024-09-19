const TailwindColors = {
    // inherit: "inherit",
    // current: "currentColor",
    // transparent: "transparent",
    black: "#000",
    white: "#fff",
    slate:   { 50:"#f8fafc", 100:"#f1f5f9", 200:"#e2e8f0", 300:"#cbd5e1", 400:"#94a3b8", 500:"#64748b", 600:"#475569", 700:"#334155", 800:"#1e293b", 900:"#0f172a", 950:"#020617" },
    gray:    { 50:"#f9fafb", 100:"#f3f4f6", 200:"#e5e7eb", 300:"#d1d5db", 400:"#9ca3af", 500:"#6b7280", 600:"#4b5563", 700:"#374151", 800:"#1f2937", 900:"#111827", 950:"#030712" },
    zinc:    { 50:"#fafafa", 100:"#f4f4f5", 200:"#e4e4e7", 300:"#d4d4d8", 400:"#a1a1aa", 500:"#71717a", 600:"#52525b", 700:"#3f3f46", 800:"#27272a", 900:"#18181b", 950:"#09090b" },
    neutral: { 50:"#fafafa", 100:"#f5f5f5", 200:"#e5e5e5", 300:"#d4d4d4", 400:"#a3a3a3", 500:"#737373", 600:"#525252", 700:"#404040", 800:"#262626", 900:"#171717", 950:"#0a0a0a" },
    stone:   { 50:"#fafaf9", 100:"#f5f5f4", 200:"#e7e5e4", 300:"#d6d3d1", 400:"#a8a29e", 500:"#78716c", 600:"#57534e", 700:"#44403c", 800:"#292524", 900:"#1c1917", 950:"#0c0a09" },
    red:     { 50:"#fef2f2", 100:"#fee2e2", 200:"#fecaca", 300:"#fca5a5", 400:"#f87171", 500:"#ef4444", 600:"#dc2626", 700:"#b91c1c", 800:"#991b1b", 900:"#7f1d1d", 950:"#450a0a" },
    orange:  { 50:"#fff7ed", 100:"#ffedd5", 200:"#fed7aa", 300:"#fdba74", 400:"#fb923c", 500:"#f97316", 600:"#ea580c", 700:"#c2410c", 800:"#9a3412", 900:"#7c2d12", 950:"#431407" },
    amber:   { 50:"#fffbeb", 100:"#fef3c7", 200:"#fde68a", 300:"#fcd34d", 400:"#fbbf24", 500:"#f59e0b", 600:"#d97706", 700:"#b45309", 800:"#92400e", 900:"#78350f", 950:"#451a03" },
    yellow:  { 50:"#fefce8", 100:"#fef9c3", 200:"#fef08a", 300:"#fde047", 400:"#facc15", 500:"#eab308", 600:"#ca8a04", 700:"#a16207", 800:"#854d0e", 900:"#713f12", 950:"#422006" },
    lime:    { 50:"#f7fee7", 100:"#ecfccb", 200:"#d9f99d", 300:"#bef264", 400:"#a3e635", 500:"#84cc16", 600:"#65a30d", 700:"#4d7c0f", 800:"#3f6212", 900:"#365314", 950:"#1a2e05" },
    green:   { 50:"#f0fdf4", 100:"#dcfce7", 200:"#bbf7d0", 300:"#86efac", 400:"#4ade80", 500:"#22c55e", 600:"#16a34a", 700:"#15803d", 800:"#166534", 900:"#14532d", 950:"#052e16" },
    emerald: { 50:"#ecfdf5", 100:"#d1fae5", 200:"#a7f3d0", 300:"#6ee7b7", 400:"#34d399", 500:"#10b981", 600:"#059669", 700:"#047857", 800:"#065f46", 900:"#064e3b", 950:"#022c22" },
    teal:    { 50:"#f0fdfa", 100:"#ccfbf1", 200:"#99f6e4", 300:"#5eead4", 400:"#2dd4bf", 500:"#14b8a6", 600:"#0d9488", 700:"#0f766e", 800:"#115e59", 900:"#134e4a", 950:"#042f2e" },
    cyan:    { 50:"#ecfeff", 100:"#cffafe", 200:"#a5f3fc", 300:"#67e8f9", 400:"#22d3ee", 500:"#06b6d4", 600:"#0891b2", 700:"#0e7490", 800:"#155e75", 900:"#164e63", 950:"#083344" },
    sky:     { 50:"#f0f9ff", 100:"#e0f2fe", 200:"#bae6fd", 300:"#7dd3fc", 400:"#38bdf8", 500:"#0ea5e9", 600:"#0284c7", 700:"#0369a1", 800:"#075985", 900:"#0c4a6e", 950:"#082f49" },
    blue:    { 50:"#eff6ff", 100:"#dbeafe", 200:"#bfdbfe", 300:"#93c5fd", 400:"#60a5fa", 500:"#3b82f6", 600:"#2563eb", 700:"#1d4ed8", 800:"#1e40af", 900:"#1e3a8a", 950:"#172554" },
    indigo:  { 50:"#eef2ff", 100:"#e0e7ff", 200:"#c7d2fe", 300:"#a5b4fc", 400:"#818cf8", 500:"#6366f1", 600:"#4f46e5", 700:"#4338ca", 800:"#3730a3", 900:"#312e81", 950:"#1e1b4b" },
    violet:  { 50:"#f5f3ff", 100:"#ede9fe", 200:"#ddd6fe", 300:"#c4b5fd", 400:"#a78bfa", 500:"#8b5cf6", 600:"#7c3aed", 700:"#6d28d9", 800:"#5b21b6", 900:"#4c1d95", 950:"#2e1065" },
    purple:  { 50:"#faf5ff", 100:"#f3e8ff", 200:"#e9d5ff", 300:"#d8b4fe", 400:"#c084fc", 500:"#a855f7", 600:"#9333ea", 700:"#7e22ce", 800:"#6b21a8", 900:"#581c87", 950:"#3b0764" },
    fuchsia: { 50:"#fdf4ff", 100:"#fae8ff", 200:"#f5d0fe", 300:"#f0abfc", 400:"#e879f9", 500:"#d946ef", 600:"#c026d3", 700:"#a21caf", 800:"#86198f", 900:"#701a75", 950:"#4a044e" },
    pink:    { 50:"#fdf2f8", 100:"#fce7f3", 200:"#fbcfe8", 300:"#f9a8d4", 400:"#f472b6", 500:"#ec4899", 600:"#db2777", 700:"#be185d", 800:"#9d174d", 900:"#831843", 950:"#500724" },
    rose:    { 50:"#fff1f2", 100:"#ffe4e6", 200:"#fecdd3", 300:"#fda4af", 400:"#fb7185", 500:"#f43f5e", 600:"#e11d48", 700:"#be123c", 800:"#9f1239", 900:"#881337", 950:"#4c0519" },
};

const CSS_HEX_colors = {
    "black": "#000000",
    "silver": "#c0c0c0",
    "gray": "#808080",
    "white": "#ffffff",
    "maroon": "#800000",
    "red": "#ff0000",
    "purple": "#800080",
    "fuchsia": "#ff00ff",
    "green": "#008000",
    "lime": "#00ff00",
    "olive": "#808000",
    "yellow": "#ffff00",
    "navy": "#000080",
    "blue": "#0000ff",
    "teal": "#008080",
    "aqua": "#00ffff",
    "aliceblue": "#f0f8ff",
    "antiquewhite": "#faebd7",
    "aquamarine": "#7fffd4",
    "azure": "#f0ffff",
    "beige": "#f5f5dc",
    "bisque": "#ffe4c4",
    "blanchedalmond": "#ffebcd",
    "blueviolet": "#8a2be2",
    "brown": "#a52a2a",
    "burlywood": "#deb887",
    "cadetblue": "#5f9ea0",
    "chartreuse": "#7fff00",
    "chocolate": "#d2691e",
    "coral": "#ff7f50",
    "cornflowerblue": "#6495ed",
    "cornsilk": "#fff8dc",
    "crimson": "#dc143c",
    "cyan": "#00ffff",
    "darkblue": "#00008b",
    "darkcyan": "#008b8b",
    "darkgoldenrod": "#b8860b",
    "darkgray": "#a9a9a9",
    "darkgreen": "#006400",
    "darkgrey": "#a9a9a9",
    "darkkhaki": "#bdb76b",
    "darkmagenta": "#8b008b",
    "darkolivegreen": "#556b2f",
    "darkorange": "#ff8c00",
    "darkorchid": "#9932cc",
    "darkred": "#8b0000",
    "darksalmon": "#e9967a",
    "darkseagreen": "#8fbc8f",
    "darkslateblue": "#483d8b",
    "darkslategray": "#2f4f4f",
    "darkslategrey": "#2f4f4f",
    "darkturquoise": "#00ced1",
    "darkviolet": "#9400d3",
    "deeppink": "#ff1493",
    "deepskyblue": "#00bfff",
    "dimgray": "#696969",
    "dimgrey": "#696969",
    "dodgerblue": "#1e90ff",
    "firebrick": "#b22222",
    "floralwhite": "#fffaf0",
    "forestgreen": "#228b22",
    "gainsboro": "#dcdcdc",
    "ghostwhite": "#f8f8ff",
    "gold": "#ffd700",
    "goldenrod": "#daa520",
    "greenyellow": "#adff2f",
    "grey": "#808080",
    "honeydew": "#f0fff0",
    "hotpink": "#ff69b4",
    "indianred": "#cd5c5c",
    "indigo": "#4b0082",
    "ivory": "#fffff0",
    "khaki": "#f0e68c",
    "lavender": "#e6e6fa",
    "lavenderblush": "#fff0f5",
    "lawngreen": "#7cfc00",
    "lemonchiffon": "#fffacd",
    "lightblue": "#add8e6",
    "lightcoral": "#f08080",
    "lightcyan": "#e0ffff",
    "lightgoldenrodyellow": "#fafad2",
    "lightgray": "#d3d3d3",
    "lightgreen": "#90ee90",
    "lightgrey": "#d3d3d3",
    "lightpink": "#ffb6c1",
    "lightsalmon": "#ffa07a",
    "lightseagreen": "#20b2aa",
    "lightskyblue": "#87cefa",
    "lightslategray": "#778899",
    "lightslategrey": "#778899",
    "lightsteelblue": "#b0c4de",
    "lightyellow": "#ffffe0",
    "limegreen": "#32cd32",
    "linen": "#faf0e6",
    "magenta": "#ff00ff",
    "mediumaquamarine": "#66cdaa",
    "mediumblue": "#0000cd",
    "mediumorchid": "#ba55d3",
    "mediumpurple": "#9370db",
    "mediumseagreen": "#3cb371",
    "mediumslateblue": "#7b68ee",
    "mediumspringgreen": "#00fa9a",
    "mediumturquoise": "#48d1cc",
    "mediumvioletred": "#c71585",
    "midnightblue": "#191970",
    "mintcream": "#f5fffa",
    "mistyrose": "#ffe4e1",
    "moccasin": "#ffe4b5",
    "navajowhite": "#ffdead",
    "oldlace": "#fdf5e6",
    "olivedrab": "#6b8e23",
    "orange": "#ffa500",
    "orangered": "#ff4500",
    "orchid": "#da70d6",
    "palegoldenrod": "#eee8aa",
    "palegreen": "#98fb98",
    "paleturquoise": "#afeeee",
    "palevioletred": "#db7093",
    "papayawhip": "#ffefd5",
    "peachpuff": "#ffdab9",
    "peru": "#cd853f",
    "pink": "#ffc0cb",
    "plum": "#dda0dd",
    "powderblue": "#b0e0e6",
    "rosybrown": "#bc8f8f",
    "royalblue": "#4169e1",
    "saddlebrown": "#8b4513",
    "salmon": "#fa8072",
    "sandybrown": "#f4a460",
    "seagreen": "#2e8b57",
    "seashell": "#fff5ee",
    "sienna": "#a0522d",
    "skyblue": "#87ceeb",
    "slateblue": "#6a5acd",
    "slategray": "#708090",
    "slategrey": "#708090",
    "snow": "#fffafa",
    "springgreen": "#00ff7f",
    "steelblue": "#4682b4",
    "tan": "#d2b48c",
    "thistle": "#d8bfd8",
    "tomato": "#ff6347",
    "turquoise": "#40e0d0",
    "violet": "#ee82ee",
    "wheat": "#f5deb3",
    "whitesmoke": "#f5f5f5",
    "yellowgreen": "#9acd32"
};

const NAMES_HEX_colors = {
    "absolutezero": "#0048BA",
    "acidgreen": "#B0BF1A",
    "aero": "#7CB9E8",
    "africanviolet": "#B284BE",
    "airsuperiorityblue": "#72A0C1",
    "aliceblue": "#F0F8FF",
    "alizarin": "#DB2D43",
    "alloyorange": "#C46210",
    "almond": "#EED9C4",
    "amaranthdeeppurple": "#9F2B68",
    "amaranthpink": "#F19CBB",
    "amaranthpurple": "#AB274F",
    "amazon": "#3B7A57",
    "amber": "#FFBF00",
    "amethyst": "#9966CC",
    "androidgreen": "#3DDC84",
    "antiquebrass": "#C88A65",
    "antiquebronze": "#665D1E",
    "antiquefuchsia": "#915C83",
    "antiqueruby": "#841B2D",
    "antiquewhite": "#FAEBD7",
    "apricot": "#FBCEB1",
    "aqua": "#00FFFF",
    "aquamarine": "#7FFFD4",
    "arcticlime": "#D0FF14",
    "artichokegreen": "#4B6F44",
    "arylideyellow": "#E9D66B",
    "ashgray": "#B2BEB5",
    "atomictangerine": "#FF9966",
    "aureolin": "#FDEE00",
    "azure": "#007FFF",
    "azurex11webcolor": "#F0FFFF",
    "babyblue": "#89CFF0",
    "babyblueeyes": "#A1CAF1",
    "babypink": "#F4C2C2",
    "babypowder": "#FEFEFA",
    "bakermillerpink": "#FF91AF",
    "bananamania": "#FAE7B5",
    "barbiepink": "#DA1884",
    "barnred": "#7C0A02",
    "battleshipgrey": "#848482",
    "beaublue": "#BCD4E6",
    "beaver": "#9F8170",
    "beige": "#F5F5DC",
    "bdazzledblue": "#2E5894",
    "bigdiporuby": "#9C2542",
    "bisque": "#FFE4C4",
    "bistre": "#3D2B1F",
    "bistrebrown": "#967117",
    "bitterlemon": "#CAE00D",
    "black": "#000000",
    "blackbean": "#3D0C02",
    "blackcoral": "#54626F",
    "blackolive": "#3B3C36",
    "blackshadows": "#BFAFB2",
    "blanchedalmond": "#FFEBCD",
    "blastoffbronze": "#A57164",
    "bleudefrance": "#318CE7",
    "blizzardblue": "#ACE5EE",
    "bloodred": "#660000",
    "blue": "#0000FF",
    "bluecrayola": "#1F75FE",
    "bluemunsell": "#0093AF",
    "bluencs": "#0087BD",
    "bluepantone": "#0018A8",
    "bluepigment": "#333399",
    "bluebell": "#A2A2D0",
    "bluegraycrayola": "#6699CC",
    "bluejeans": "#5DADEC",
    "bluesapphire": "#126180",
    "blueviolet": "#8A2BE2",
    "blueyonder": "#5072A7",
    "bluetiful": "#3C69E7",
    "blush": "#DE5D83",
    "bole": "#79443B",
    "bone": "#E3DAC9",
    "brickred": "#CB4154",
    "brightlilac": "#D891EF",
    "brightyellowcrayola": "#FFAA1D",
    "britishracinggreen": "#004225",
    "bronze": "#CD7F32",
    "brown": "#964B00",
    "brownsugar": "#AF6E4D",
    "budgreen": "#7BB661",
    "buff": "#FFC680",
    "burgundy": "#800020",
    "burlywood": "#DEB887",
    "burnishedbrown": "#A17A74",
    "burntorange": "#CC5500",
    "burntsienna": "#E97451",
    "burntumber": "#8A3324",
    "byzantine": "#BD33A4",
    "byzantium": "#702963",
    "cadetblue": "#5F9EA0",
    "cadetgrey": "#91A3B0",
    "cadmiumgreen": "#006B3C",
    "cadmiumorange": "#ED872D",
    "cafaulait": "#A67B5B",
    "cafnoir": "#4B3621",
    "cambridgeblue": "#A3C1AD",
    "camel": "#C19A6B",
    "cameopink": "#EFBBCC",
    "canary": "#FFFF99",
    "canaryyellow": "#FFEF00",
    "candypink": "#E4717A",
    "cardinal": "#C41E3A",
    "caribbeangreen": "#00CC99",
    "carmine": "#960018",
    "carminemp": "#D70040",
    "carnationpink": "#FFA6C9",
    "carnelian": "#B31B1B",
    "carolinablue": "#56A0D3",
    "carrotorange": "#ED9121",
    "catawba": "#703642",
    "cedarchest": "#C95A49",
    "celadon": "#ACE1AF",
    "celeste": "#B2FFFF",
    "cerise": "#DE3163",
    "cerulean": "#007BA7",
    "ceruleanblue": "#2A52BE",
    "ceruleanfrost": "#6D9BC3",
    "ceruleancrayola": "#1DACD6",
    "ceruleanrgb": "#0040FF",
    "champagne": "#F7E7CE",
    "champagnepink": "#F1DDCF",
    "charcoal": "#36454F",
    "charmpink": "#E68FAC",
    "chartreuseweb": "#80FF00",
    "cherryblossompink": "#FFB7C5",
    "chestnut": "#954535",
    "chilired": "#E23D28",
    "chinapink": "#DE6FA1",
    "chinesered": "#AA381E",
    "chineseviolet": "#856088",
    "chineseyellow": "#FFB200",
    "chocolatetraditional": "#7B3F00",
    "chocolateweb": "#D2691E",
    "cinereous": "#98817B",
    "cinnabar": "#E34234",
    "cinnamonsatin": "#CD607E",
    "citrine": "#E4D00A",
    "citron": "#9FA91F",
    "claret": "#7F1734",
    "coffee": "#6F4E37",
    "columbiablue": "#B9D9EB",
    "congopink": "#F88379",
    "coolgrey": "#8C92AC",
    "copper": "#B87333",
    "coppercrayola": "#DA8A67",
    "copperpenny": "#AD6F69",
    "copperred": "#CB6D51",
    "copperrose": "#996666",
    "coquelicot": "#FF3800",
    "coral": "#FF7F50",
    "coralpink": "#F88379",
    "cordovan": "#893F45",
    "corn": "#FBEC5D",
    "cornflowerblue": "#6495ED",
    "cornsilk": "#FFF8DC",
    "cosmiccobalt": "#2E2D88",
    "cosmiclatte": "#FFF8E7",
    "coyotebrown": "#81613C",
    "cottoncandy": "#FFBCD9",
    "cream": "#FFFDD0",
    "crimson": "#DC143C",
    "crimsonua": "#9E1B32",
    "culturedpearl": "#F5F5F5",
    "cyan": "#00FFFF",
    "cyanprocess": "#00B7EB",
    "cybergrape": "#58427C",
    "cyberyellow": "#FFD300",
    "cyclamen": "#F56FA1",
    "dandelion": "#FED85D",
    "darkbrown": "#654321",
    "darkbyzantium": "#5D3954",
    "darkcyan": "#008B8B",
    "darkelectricblue": "#536878",
    "darkgoldenrod": "#B8860B",
    "darkgreenx11": "#006400",
    "darkjunglegreen": "#1A2421",
    "darkkhaki": "#BDB76B",
    "darklava": "#483C32",
    "darkliverhorses": "#543D37",
    "darkmagenta": "#8B008B",
    "darkolivegreen": "#556B2F",
    "darkorange": "#FF8C00",
    "darkorchid": "#9932CC",
    "darkpurple": "#301934",
    "darkred": "#8B0000",
    "darksalmon": "#E9967A",
    "darkseagreen": "#8FBC8F",
    "darksienna": "#3C1414",
    "darkskyblue": "#8CBED6",
    "darkslateblue": "#483D8B",
    "darkslategray": "#2F4F4F",
    "darkspringgreen": "#177245",
    "darkturquoise": "#00CED1",
    "darkviolet": "#9400D3",
    "davysgrey": "#555555",
    "deepcerise": "#DA3287",
    "deepchampagne": "#FAD6A5",
    "deepchestnut": "#B94E48",
    "deepjunglegreen": "#004B49",
    "deeppink": "#FF1493",
    "deepsaffron": "#FF9933",
    "deepskyblue": "#00BFFF",
    "deepspacesparkle": "#4A646C",
    "deeptaupe": "#7E5E60",
    "denim": "#1560BD",
    "denimblue": "#2243B6",
    "desert": "#C19A6B",
    "desertsand": "#EDC9AF",
    "dimgray": "#696969",
    "dodgerblue": "#1E90FF",
    "drabdarkbrown": "#4A412A",
    "dukeblue": "#00009C",
    "dutchwhite": "#EFDFBB",
    "ebony": "#555D50",
    "ecru": "#C2B280",
    "eerieblack": "#1B1B1B",
    "eggplant": "#614051",
    "eggshell": "#F0EAD6",
    "electriclime": "#CCFF00",
    "electricpurple": "#BF00FF",
    "electricviolet": "#8F00FF",
    "emerald": "#50C878",
    "eminence": "#6C3082",
    "englishlavender": "#B48395",
    "englishred": "#AB4B52",
    "englishvermillion": "#CC474B",
    "englishviolet": "#563C5C",
    "erin": "#00FF40",
    "etonblue": "#96C8A2",
    "fallow": "#C19A6B",
    "falured": "#801818",
    "fandango": "#B53389",
    "fandangopink": "#DE5285",
    "fawn": "#E5AA70",
    "ferngreen": "#4F7942",
    "fielddrab": "#6C541E",
    "fieryrose": "#FF5470",
    "finn": "#683068",
    "firebrick": "#B22222",
    "fireenginered": "#CE2029",
    "flame": "#E25822",
    "flax": "#EEDC82",
    "flirt": "#A2006D",
    "floralwhite": "#FFFAF0",
    "forestgreenweb": "#228B22",
    "frenchbeige": "#A67B5B",
    "frenchbistre": "#856D4D",
    "frenchblue": "#0072BB",
    "frenchfuchsia": "#FD3F92",
    "frenchlilac": "#86608E",
    "frenchlime": "#9EFD38",
    "frenchmauve": "#D473D4",
    "frenchpink": "#FD6C9E",
    "frenchraspberry": "#C72C48",
    "frenchskyblue": "#77B5FE",
    "frenchviolet": "#8806CE",
    "frostbite": "#E936A7",
    "fuchsia": "#FF00FF",
    "fuchsiacrayola": "#C154C1",
    "fulvous": "#E48400",
    "fuzzywuzzy": "#87421F",
    "gainsboro": "#DCDCDC",
    "gamboge": "#E49B0F",
    "genericviridian": "#007F66",
    "ghostwhite": "#F8F8FF",
    "glaucous": "#6082B6",
    "glossygrape": "#AB92B3",
    "gogreen": "#00AB66",
    "goldmetallic": "#D4AF37",
    "goldwebgolden": "#FFD700",
    "goldcrayola": "#E6BE8A",
    "goldfusion": "#85754E",
    "goldenbrown": "#996515",
    "goldenpoppy": "#FCC200",
    "goldenyellow": "#FFDF00",
    "goldenrod": "#DAA520",
    "gothamgreen": "#00573F",
    "granitegray": "#676767",
    "grannysmithapple": "#A8E4A0",
    "grayweb": "#808080",
    "grayx11gray": "#BEBEBE",
    "green": "#00FF00",
    "greencrayola": "#1CAC78",
    "greenweb": "#008000",
    "greenmunsell": "#00A877",
    "greenncs": "#009F6B",
    "greenpantone": "#00AD43",
    "greenpigment": "#00A550",
    "greenblue": "#1164B4",
    "greenlizard": "#A7F432",
    "greensheen": "#6EAEA1",
    "gunmetal": "#2a3439",
    "hansayellow": "#E9D66B",
    "harlequin": "#3FFF00",
    "harvestgold": "#DA9100",
    "heatwave": "#FF7A00",
    "heliotrope": "#DF73FF",
    "heliotropegray": "#AA98A9",
    "hollywoodcerise": "#F400A1",
    "honolulublue": "#006DB0",
    "hookersgreen": "#49796B",
    "hotmagentabrokenanchor": "#FF1DCE",
    "hotpink": "#FF69B4",
    "huntergreen": "#355E3B",
    "iceberg": "#71A6D2",
    "illuminatingemerald": "#319177",
    "imperialred": "#ED2939",
    "inchworm": "#B2EC5D",
    "independence": "#4C516D",
    "indiagreen": "#138808",
    "indianred": "#CD5C5C",
    "indianyellow": "#E3A857",
    "indigo": "#6A5DFF",
    "indigodye": "#00416A",
    "internationalkleinblue": "#130a8f",
    "internationalorangeengineering": "#BA160C",
    "internationalorangegoldengatebridge": "#C0362C",
    "irresistible": "#B3446C",
    "isabelline": "#F4F0EC",
    "italianskyblue": "#B2FFFF",
    "ivory": "#FFFFF0",
    "japanesecarmine": "#9D2933",
    "japaneseviolet": "#5B3256",
    "jasmine": "#F8DE7E",
    "jazzberryjam": "#A50B5E",
    "jet": "#343434",
    "jonquil": "#F4CA16",
    "junebud": "#BDDA57",
    "junglegreen": "#29AB87",
    "kellygreen": "#4CBB17",
    "keppel": "#3AB09E",
    "keylime": "#E8F48C",
    "khakiweb": "#C3B091",
    "khakix11lightkhaki": "#F0E68C",
    "kobe": "#882D17",
    "kobi": "#E79FC4",
    "kobicha": "#6B4423",
    "ksupurple": "#512888",
    "languidlavender": "#D6CADD",
    "lapislazuli": "#26619C",
    "laserlemon": "#FFFF66",
    "laurelgreen": "#A9BA9D",
    "lava": "#CF1020",
    "lavenderfloral": "#B57EDC",
    "lavenderweb": "#E6E6FA",
    "lavenderblue": "#CCCCFF",
    "lavenderblush": "#FFF0F5",
    "lavendergray": "#C4C3D0",
    "lawngreen": "#7CFC00",
    "lemon": "#FFF700",
    "lemonchiffon": "#FFFACD",
    "lemoncurry": "#CCA01D",
    "lemonglacier": "#FDFF00",
    "lemonmeringue": "#F6EABE",
    "lemonyellow": "#FFF44F",
    "lemonyellowcrayola": "#FFFF9F",
    "liberty": "#545AA7",
    "lightblue": "#ADD8E6",
    "lightcoral": "#F08080",
    "lightcornflowerblue": "#93CCEA",
    "lightcyan": "#E0FFFF",
    "lightfrenchbeige": "#C8AD7F",
    "lightgoldenrodyellow": "#FAFAD2",
    "lightgray": "#D3D3D3",
    "lightgreen": "#90EE90",
    "lightorange": "#FED8B1",
    "lightperiwinkle": "#C5CBE1",
    "lightpink": "#FFB6C1",
    "lightsalmon": "#FFA07A",
    "lightseagreen": "#20B2AA",
    "lightskyblue": "#87CEFA",
    "lightslategray": "#778899",
    "lightsteelblue": "#B0C4DE",
    "lightyellow": "#FFFFE0",
    "lilac": "#C8A2C8",
    "lilacluster": "#AE98AA",
    "limecolorwheel": "#BFFF00",
    "limewebx11green": "#00FF00",
    "limegreen": "#32CD32",
    "lincolngreen": "#195905",
    "linen": "#FAF0E6",
    "lion": "#DECC9C",
    "liseranpurple": "#DE6FA1",
    "littleboyblue": "#6CA0DC",
    "liver": "#674C47",
    "liverdogs": "#B86D29",
    "liverorgan": "#6C2E1F",
    "liverchestnut": "#987456",
    "livid": "#6699CC",
    "macaroniandcheese": "#FFBD88",
    "madderlake": "#CC3336",
    "magenta": "#FF00FF",
    "magentacrayolabrokenanchor": "#F653A6",
    "magentadye": "#CA1F7B",
    "magentapantone": "#D0417E",
    "magentaprocess": "#FF0090",
    "magentahaze": "#9F4576",
    "magicmint": "#AAF0D1",
    "magnolia": "#F2E8D7",
    "mahogany": "#C04000",
    "maize": "#FBEC5D",
    "maizecrayola": "#F2C649",
    "majorelleblue": "#6050DC",
    "malachite": "#0BDA51",
    "manatee": "#979AAA",
    "mandarin": "#F37A48",
    "mango": "#FDBE02",
    "mangotango": "#FF8243",
    "mantis": "#74C365",
    "mardigras": "#880085",
    "marigold": "#EAA221",
    "marooncrayola": "#C32148",
    "maroonweb": "#800000",
    "maroonx11": "#B03060",
    "mauve": "#E0B0FF",
    "mauvetaupe": "#915F6D",
    "mauvelous": "#EF98AA",
    "maximumblue": "#47ABCC",
    "maximumbluegreen": "#30BFBF",
    "maximumbluepurple": "#ACACE6",
    "maximumgreen": "#5E8C31",
    "maximumgreenyellow": "#D9E650",
    "maximumpurple": "#733380",
    "maximumred": "#D92121",
    "maximumredpurple": "#A63A79",
    "maximumyellow": "#FAFA37",
    "maximumyellowred": "#F2BA49",
    "maygreen": "#4C9141",
    "mayablue": "#73C2FB",
    "mediumaquamarine": "#66DDAA",
    "mediumblue": "#0000CD",
    "mediumcandyapplered": "#E2062C",
    "mediumcarmine": "#AF4035",
    "mediumchampagne": "#F3E5AB",
    "mediumorchid": "#BA55D3",
    "mediumpurple": "#9370DB",
    "mediumseagreen": "#3CB371",
    "mediumslateblue": "#7B68EE",
    "mediumspringgreen": "#00FA9A",
    "mediumturquoise": "#48D1CC",
    "mediumvioletred": "#C71585",
    "mellowapricot": "#F8B878",
    "mellowyellow": "#F8DE7E",
    "melon": "#FEBAAD",
    "metallicgold": "#D3AF37",
    "metallicseaweed": "#0A7E8C",
    "metallicsunburst": "#9C7C38",
    "mexicanpink": "#E4007C",
    "middleblue": "#7ED4E6",
    "middlebluegreen": "#8DD9CC",
    "middlebluepurple": "#8B72BE",
    "middlegrey": "#8B8680",
    "middlegreen": "#4D8C57",
    "middlegreenyellow": "#ACBF60",
    "middlepurple": "#D982B5",
    "middlered": "#E58E73",
    "middleredpurple": "#A55353",
    "middleyellow": "#FFEB00",
    "middleyellowred": "#ECB176",
    "midnight": "#702670",
    "midnightblue": "#191970",
    "midnightgreeneaglegreen": "#004953",
    "mikadoyellow": "#FFC40C",
    "mimipink": "#FFDAE9",
    "mindaro": "#E3F988",
    "ming": "#36747D",
    "minionyellow": "#F5E050",
    "mint": "#3EB489",
    "mintcream": "#F5FFFA",
    "mintgreen": "#98FF98",
    "mistymoss": "#BBB477",
    "mistyrose": "#FFE4E1",
    "moccasin": "#FFE4B5",
    "modebeige": "#967117",
    "monalisa": "#FF948E",
    "morningblue": "#8DA399",
    "mossgreen": "#8A9A5B",
    "mountainmeadow": "#30BA8F",
    "mountbattenpink": "#997A8D",
    "msugreen": "#18453B",
    "mulberry": "#C54B8C",
    "mulberrycrayola": "#C8509B",
    "mustard": "#FFDB58",
    "myrtlegreen": "#317873",
    "mystic": "#D65282",
    "mysticmaroon": "#AD4379",
    "nadeshikopink": "#F6ADC6",
    "naplesyellow": "#FADA5E",
    "navajowhite": "#FFDEAD",
    "navyblue": "#000080",
    "navybluecrayola": "#1974D2",
    "neonblue": "#4666FF",
    "neongreen": "#39FF14",
    "neonfuchsia": "#FE4164",
    "newcar": "#214FC6",
    "newyorkpink": "#D7837F",
    "nickel": "#727472",
    "nonphotoblue": "#A4DDED",
    "nyanza": "#E9FFDB",
    "ochre": "#CC7722",
    "oldburgundy": "#43302E",
    "oldgold": "#CFB53B",
    "oldlace": "#FDF5E6",
    "oldlavender": "#796878",
    "oldmauve": "#673147",
    "oldrose": "#C08081",
    "oldsilver": "#848482",
    "olive": "#808000",
    "olivedrab3": "#6B8E23",
    "olivedrab7": "#3C341F",
    "olivegreen": "#B5B35C",
    "olivine": "#9AB973",
    "onyx": "#353839",
    "opal": "#A8C3BC",
    "operamauve": "#B784A7",
    "orange": "#FF7F00",
    "orangecrayola": "#FF7538",
    "orangepantone": "#FF5800",
    "orangeweb": "#FFA500",
    "orangepeel": "#FF9F00",
    "orangered": "#FF681F",
    "orangeredcrayola": "#FF5349",
    "orangesoda": "#FA5B3D",
    "orangeyellow": "#F5BD1F",
    "orangeyellowcrayola": "#F8D568",
    "orchid": "#DA70D6",
    "orchidpink": "#F2BDCD",
    "orchidcrayola": "#E29CD2",
    "outerspacecrayola": "#2D383A",
    "outrageousorange": "#FF6E4A",
    "oxblood": "#4A0000",
    "oxfordblue": "#002147",
    "oucrimsonred": "#841617",
    "pacificblue": "#1CA9C9",
    "pakistangreen": "#006600",
    "palatinatepurple": "#682860",
    "paleaqua": "#BED3E5",
    "palecerulean": "#9BC4E2",
    "paledogwood": "#ED7A9B",
    "palepink": "#FADADD",
    "palepurplepantone": "#FAE6FA",
    "palespringbud": "#ECEBBD",
    "pansypurple": "#78184A",
    "paoloveronesegreen": "#009B7D",
    "papayawhip": "#FFEFD5",
    "paradisepink": "#E63E62",
    "parchment": "#F1E9D2",
    "parisgreen": "#50C878",
    "pastelpink": "#DEA5A4",
    "patriarch": "#800080",
    "paua": "#1F005E",
    "paynesgrey": "#536878",
    "peach": "#FFE5B4",
    "peachcrayola": "#FFCBA4",
    "peachpuff": "#FFDAB9",
    "pear": "#D1E231",
    "pearlypurple": "#B768A2",
    "periwinkle": "#CCCCFF",
    "periwinklecrayola": "#C3CDE6",
    "permanentgeraniumlake": "#E12C2C",
    "persianblue": "#1C39BB",
    "persiangreen": "#00A693",
    "persianindigo": "#32127A",
    "persianorange": "#D99058",
    "persianpink": "#F77FBE",
    "persianplum": "#701C1C",
    "persianred": "#CC3333",
    "persianrose": "#FE28A2",
    "persimmon": "#EC5800",
    "pewterblue": "#8BA8B7",
    "phlox": "#DF00FF",
    "phthaloblue": "#000F89",
    "phthalogreen": "#123524",
    "picoteeblue": "#2E2787",
    "pictorialcarmine": "#C30B4E",
    "piggypink": "#FDDDE6",
    "pinegreen": "#2A2F23",
    "pink": "#FFC0CB",
    "pinkpantone": "#D74894",
    "pinklace": "#FFDDF4",
    "pinklavender": "#D8B2D1",
    "pinksherbet": "#F78FA7",
    "pistachio": "#93C572",
    "platinum": "#E5E4E2",
    "plum": "#8E4585",
    "plumweb": "#DDA0DD",
    "plumppurple": "#5946B2",
    "polishedpine": "#5DA493",
    "pompandpower": "#86608E",
    "popstar": "#BE4F62",
    "portlandorange": "#FF5A36",
    "powderblue": "#B0E0E6",
    "prairiegold": "#E1CA7A",
    "princetonorange": "#F58025",
    "prune": "#701C1C",
    "prussianblue": "#003153",
    "psychedelicpurple": "#DF00FF",
    "puce": "#CC8899",
    "pullmanbrownupsbrown": "#644117",
    "pumpkin": "#FF7518",
    "purple": "#6A0DAD",
    "purpleweb": "#800080",
    "purplemunsell": "#9F00C5",
    "purplex11": "#A020F0",
    "purplemountainmajesty": "#9678B6",
    "purplenavy": "#4E5180",
    "purplepizzazzbrokenanchor": "#FE4EDA",
    "purpleplum": "#9C51B6",
    "purpureus": "#9A4EAE",
    "queenblue": "#436B95",
    "queenpink": "#E8CCD7",
    "quicksilver": "#A6A6A6",
    "quinacridonemagenta": "#8E3A59",
    "radicalred": "#FF355E",
    "raisinblack": "#242124",
    "rajah": "#FBAB60",
    "raspberry": "#E30B5D",
    "raspberryglac": "#915F6D",
    "raspberryrose": "#B3446C",
    "rawsienna": "#D68A59",
    "rawumber": "#826644",
    "razzledazzlerose": "#FF33CC",
    "razzmatazz": "#E3256B",
    "razzmicberry": "#8D4E85",
    "rebeccapurple": "#663399",
    "red": "#FF0000",
    "redcrayola": "#EE204D",
    "redmunsell": "#F2003C",
    "redncs": "#C40233",
    "redpantone": "#ED2939",
    "redpigment": "#ED1C24",
    "redryb": "#FE2712",
    "redorange": "#FF5349",
    "redorangecrayola": "#FF681F",
    "redorangecolorwheel": "#FF4500",
    "redpurple": "#E40078",
    "redsalsa": "#FD3A4A",
    "redviolet": "#C71585",
    "redvioletcrayola": "#C0448F",
    "redvioletcolorwheel": "#922B3E",
    "redwood": "#A45A52",
    "resolutionblue": "#002387",
    "rhythm": "#777696",
    "richblack": "#004040",
    "richblackfogra29": "#010B13",
    "richblackfogra39": "#010203",
    "riflegreen": "#444C38",
    "robineggblue": "#00CCCC",
    "rocketmetallic": "#8A7F80",
    "rojospanishred": "#A91101",
    "romansilver": "#838996",
    "rose": "#FF007F",
    "rosebonbon": "#F9429E",
    "rosedust": "#9E5E6F",
    "roseebony": "#674846",
    "rosemadder": "#E32636",
    "rosepink": "#FF66CC",
    "rosepompadour": "#ED7A9B",
    "rosered": "#C21E56",
    "rosetaupe": "#905D5D",
    "rosevale": "#AB4E52",
    "rosewood": "#65000B",
    "rossocorsa": "#D40000",
    "rosybrown": "#BC8F8F",
    "royalbluedark": "#002366",
    "royalbluelight": "#4169E1",
    "royalpurple": "#7851A9",
    "royalyellow": "#FADA5E",
    "ruber": "#CE4676",
    "rubinered": "#D10056",
    "ruby": "#E0115F",
    "rubyred": "#9B111E",
    "rufous": "#A81C07",
    "russet": "#80461B",
    "russiangreen": "#679267",
    "russianviolet": "#32174D",
    "rust": "#B7410E",
    "rustyred": "#DA2C43",
    "sacramentostategreen": "#043927",
    "saddlebrown": "#8B4513",
    "safetyorange": "#FF7800",
    "safetyorangeblazeorange": "#FF6700",
    "safetyyellow": "#EED202",
    "saffron": "#F4C430",
    "sage": "#BCB88A",
    "stpatricksblue": "#23297A",
    "salmon": "#FA8072",
    "salmonpink": "#FF91A4",
    "sand": "#C2B280",
    "sanddune": "#967117",
    "sandybrown": "#F4A460",
    "sapgreen": "#507D2A",
    "sapphire": "#0F52BA",
    "sapphireblue": "#0067A5",
    "sapphirecrayola": "#2D5DA1",
    "satinsheengold": "#CBA135",
    "scarlet": "#FF2400",
    "schausspink": "#FF91AF",
    "schoolbusyellow": "#FFD800",
    "screamingreen": "#66FF66",
    "seagreen": "#2E8B57",
    "seagreencrayola": "#00FFCD",
    "seance": "#612086",
    "sealbrown": "#59260B",
    "seashell": "#FFF5EE",
    "secret": "#764374",
    "selectiveyellow": "#FFBA00",
    "sepia": "#704214",
    "shadow": "#8A795D",
    "shadowblue": "#778BA5",
    "shamrockgreen": "#009E60",
    "sheengreen": "#8FD400",
    "shimmeringblush": "#D98695",
    "shinyshamrock": "#5FA778",
    "shockingpink": "#FC0FC0",
    "shockingpinkcrayola": "#FF6FFF",
    "sienna": "#882D17",
    "silver": "#C0C0C0",
    "silvercrayola": "#C9C0BB",
    "silvermetallic": "#AAA9AD",
    "silverchalice": "#ACACAC",
    "silverpink": "#C4AEAD",
    "silversand": "#BFC1C2",
    "sinopia": "#CB410B",
    "sizzlingred": "#FF3855",
    "sizzlingsunrise": "#FFDB00",
    "skobeloff": "#007474",
    "skyblue": "#87CEEB",
    "skybluecrayola": "#76D7EA",
    "skymagenta": "#CF71AF",
    "slateblue": "#6A5ACD",
    "slategray": "#708090",
    "slimygreen": "#299617",
    "smitten": "#C84186",
    "smokyblack": "#100C08",
    "snow": "#FFFAFA",
    "solidpink": "#893843",
    "sonicsilver": "#757575",
    "spacecadet": "#1D2951",
    "spanishbistre": "#807532",
    "spanishblue": "#0070B8",
    "spanishcarmine": "#D10047",
    "spanishgray": "#989898",
    "spanishgreen": "#009150",
    "spanishorange": "#E86100",
    "spanishpink": "#F7BFBE",
    "spanishred": "#E60026",
    "spanishskyblue": "#00FFFE",
    "spanishviolet": "#4C2882",
    "spanishviridian": "#007F5C",
    "springbud": "#A7FC00",
    "springfrost": "#87FF2A",
    "springgreen": "#00FF7F",
    "springgreencrayola": "#ECEBBD",
    "starcommandblue": "#007BB8",
    "steelblue": "#4682B4",
    "steelpink": "#CC33CC",
    "stildegrainyellow": "#FADA5E",
    "stizza": "#900910",
    "straw": "#E4D96F",
    "strawberry": "#FA5053",
    "strawberryblonde": "#FF9361",
    "stronglimegreen": "#33CC33",
    "sugarplum": "#914E75",
    "sunglow": "#FFCC33",
    "sunray": "#E3AB57",
    "sunset": "#FAD6A5",
    "superpink": "#CF6BA9",
    "sweetbrown": "#A83731",
    "syracuseorange": "#D44500",
    "tan": "#D2B48C",
    "tancrayola": "#D99A6C",
    "tangerine": "#F28500",
    "tangopink": "#E4717A",
    "tartorange": "#FB4D46",
    "taupe": "#483C32",
    "taupegray": "#8B8589",
    "teagreen": "#D0F0C0",
    "tearose": "#F4C2C2",
    "teal": "#008080",
    "tealblue": "#367588",
    "technobotanica": "#00FFBF",
    "telemagenta": "#CF3476",
    "tenntawny": "#CD5700",
    "terracotta": "#E2725B",
    "thistle": "#D8BFD8",
    "thulianpink": "#DE6FA1",
    "ticklemepink": "#FC89AC",
    "tiffanyblue": "#0ABAB5",
    "timberwolf": "#DBD7D2",
    "titaniumyellow": "#EEE600",
    "tomato": "#FF6347",
    "tourmaline": "#86A1A9",
    "tropicalrainforest": "#00755E",
    "trueblue": "#2D68C4",
    "trypanblue": "#1C05B3",
    "tuftsblue": "#3E8EDE",
    "tumbleweed": "#DEAA88",
    "turquoise": "#40E0D0",
    "turquoiseblue": "#00FFEF",
    "turquoisegreen": "#A0D6B4",
    "turtlegreen": "#8A9A5B",
    "tuscan": "#FAD6A5",
    "tuscanbrown": "#6F4E37",
    "tuscanred": "#7C4848",
    "tuscantan": "#A67B5B",
    "tuscany": "#C09999",
    "twilightlavender": "#8A496B",
    "tyrianpurple": "#66023C",
    "uablue": "#0033AA",
    "uared": "#D9004C",
    "ultramarine": "#3F00FF",
    "ultramarineblue": "#4166F5",
    "ultrapink": "#FF6FFF",
    "ultrared": "#FC6C85",
    "umber": "#635147",
    "unbleachedsilk": "#FFDDCA",
    "unitednationsblue": "#009EDB",
    "universityofpennsylvaniared": "#A50021",
    "unmellowyellow": "#FFFF66",
    "upforestgreen": "#014421",
    "upmaroon": "#7B1113",
    "upsdellred": "#AE2029",
    "uranianblue": "#AFDBF5",
    "usafablue": "#004F98",
    "vandykebrown": "#664228",
    "vanilla": "#F3E5AB",
    "vanillaice": "#F38FA9",
    "vegasgold": "#C5B358",
    "venetianred": "#C80815",
    "verdigris": "#43B3AE",
    "vermilion": "#D9381E",
    "veronica": "#A020F0",
    "violet": "#8F00FF",
    "violetcolorwheel": "#7F00FF",
    "violetcrayola": "#963D7F",
    "violetryb": "#8601AF",
    "violetweb": "#EE82EE",
    "violetblue": "#324AB2",
    "violetbluecrayola": "#766EC8",
    "violetred": "#F75394",
    "violetredperbang": "#F0599C",
    "viridian": "#40826D",
    "viridiangreen": "#009698",
    "vividburgundy": "#9F1D35",
    "vividskyblue": "#00CCFF",
    "vividtangerine": "#FFA089",
    "vividviolet": "#9F00FF",
    "volt": "#CEFF00",
    "warmblack": "#004242",
    "weezyblue": "#189BCC",
    "weezyred": "#EA213A",
    "wheat": "#F5DEB3",
    "white": "#FFFFFF",
    "wildblueyonder": "#A2ADD0",
    "wildorchid": "#D470A2",
    "wildstrawberry": "#FF43A4",
    "wildwatermelon": "#FC6C85",
    "windsortan": "#A75502",
    "wine": "#722F37",
    "winedregs": "#673147",
    "wintersky": "#FF007C",
    "wintergreendream": "#56887D",
    "wisteria": "#C9A0DC",
    "woodbrown": "#C19A6B",
    "xanadu": "#738678",
    "xanthic": "#EEED09",
    "xanthous": "#F1B42F",
    "yaleblue": "#00356B",
    "yellow": "#FFFF00",
    "yellowcrayola": "#FCE883",
    "yellowmunsell": "#EFCC00",
    "yellowncs": "#FFD300",
    "yellowpantone": "#FEDF00",
    "yellowprocess": "#FFEF00",
    "yellowryb": "#FEFE33",
    "yellowgreen": "#9ACD32",
    "yellowgreencrayola": "#C5E384",
    "yellowgreencolorwheel": "#30B21A",
    "yelloworange": "#FFAE42",
    "yelloworangecolorwheel": "#FF9505",
    "yellowsunshine": "#FFF700",
    "yinmnblue": "#2E5090",
    "zaffre": "#0014A8",
    "zinnwalditebrown": "#2C1608",
    "zomp": "#39A78E"
};


const TailwindKeys = Object.keys(TailwindColors).flatMap(k => typeof TailwindColors[k] == 'object' ? Object.keys(TailwindColors[k]).map(u => k +'-'+ u) : k);
const CSSKeys = Object.keys(CSS_HEX_colors);
const NamedKeys = Object.keys(NAMES_HEX_colors);

const UniqueKeys = Array.from(new Set([...TailwindKeys, ...CSSKeys, ...NamedKeys]));

// ----------------------------------------------------------------------------------------------------
console.log("--[ Colors.js ] --");
console.log(`${TailwindKeys.length} Tailwind Colors.`);
console.log(`${CSSKeys.length} CSS Colors.`);
console.log(`${NamedKeys.length} Named Colors.`);
console.log(`Support ${UniqueKeys.length} Uniques Colors.`);
// ----------------------------------------------------------------------------------------------------

function getTailwindHexColor(n) {
    let [cn, cm] = String(n).toLowerCase().split(/-/);
    if (!TailwindColors[cn]) return null;
    return TailwindColors[cn][cm] ?? null;
}

function getCSSColors(n) {
    let name = String(n)?.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    return CSS_HEX_colors[name] ?? null;
}

function getNamedColors(n) {
    let name = String(n)?.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    return NAMES_HEX_colors[name] ?? null;
}

function ParseColorName(color) {
    return getTailwindHexColor(color) ?? getCSSColors(color) ?? getNamedColors(color) ?? color;
}

function FindNearName(n) {
    let name = n?.toLowerCase().replace(/[^A-Za-z0-9\-]/g, '');
    return UniqueKeys.filter(k => k.includes(name)).sort(a => a.startsWith(name))
}

function getRandomColor(list) {
    return (list ?? UniqueKeys)[Math.floor(Math.random() * (list ?? UniqueKeys).length)];
}