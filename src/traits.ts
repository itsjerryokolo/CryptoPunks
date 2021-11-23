export class Trait {
  type: string;
  accessories: string[];

  constructor(type: string, accessories: string[]) {
    this.type = type;
    this.accessories = accessories;
  }
}

export let traits: Trait[] = [
  // 0
  new Trait("female", ["blonde bob", "earring", "green eye shadow"]),

  //1
  new Trait("male", ["mohawk", "smile"]),

  //2
  new Trait("female", ["wild hair"]),

  //3
  new Trait("male", ["nerd glasses", "pipe", "wild hair"]),

  //4
  new Trait("male", ["nerd glasses", "pipe", "wild hair"]),

  //5
  new Trait("female", ["earring", "half shaved", "purple eye shadow"]),

  //6
  new Trait("male", ["do-rag"]),

  //7
  new Trait("female", ["clown eyes blue", "spots", "wild white hair"]),

  //8
  new Trait("male", ["luxurious beard", "messy hair"]),

  //9
  new Trait("male", ["big beard", "clown nose", "police cap"]),

  //10
  new Trait("female", ["blue eye shadow", "mohawk"]),

  /*
  //11
  new Trait("female", [
    "black lipstick",
    "clown eyes green",
    "straight hair dark",
  ]),

  //12
  new Trait("female", ["blonde short", "purple lipstick"]),

  //13
  new Trait("female", ["big shades", "black lipstick", "straight hair blonde"]),

  //14
  new Trait("female", ["hot lipstick", "pilot helmet", "pipe"]),

  //15
  new Trait("male", ["luxurious beard", "regular shades", "wild hair"]),

  //16
  new Trait("male", ["earring", "small shades", "stringy hair"]),

  //17
  new Trait("male", ["frown", "mohawk"]),

  //18
  new Trait("male", ["eye mask", "muttonchops"]),

  //19
  new Trait("female", ["bandana", "horned rim glasses", "hot lipstick"]),

  //20
  new Trait("male", ["crazy hair"]),

  //21
  new Trait("male", ["classic shades", "earring", "messy hair"]),

  //22
  new Trait("female", ["pilot helmet", "purple lipstick"]),

  //23
  new Trait("male", ["do-rag", "earring", "handlebars"]),

  //24
  new Trait("male", ["mohawk dark", "smile"]),

  //25
  new Trait("female", ["wild white hair"]),

  //26
  new Trait("female", ["dark hair"]),

  //27
  new Trait("male", ["earring", "peak spike"]),

  //28
  new Trait("male", ["big shades", "crazy hair"]),

  //29
  new Trait("male", ["cap", "normal beard black"]),

  //30
  new Trait("male", ["cap", "normal beard black"]),

  //31
  new Trait("female", ["stringy hair"]),

  //32
  new Trait("male", ["frown", "vr"]),

  //33
  new Trait("male", ["peak spike"]),

  //34
  new Trait("female", ["frumpy hair", "purple lipstick"]),

  //35
  new Trait("male", [
    "cigarette",
    "earring",
    "horned rim glasses",
    "normal beard",
    "peak spike",
  ]),

  //36
  new Trait("female", ["red mohawk"]),

  //37
  new Trait("female", ["cap", "clown eyes blue"]),

  //38
  new Trait("female", ["classic shades", "frumpy hair", "purple lipstick"]),

  //39
  new Trait("male", ["frown", "regular shades", "shaved head"]),

  //40
  new Trait("male", ["bandana", "chinstrap", "smile"]),

  //41
  new Trait("male", ["clown eyes green", "muttonchops", "wild hair"]),

  //42
  new Trait("female", ["cigarette", "wild hair"]),

  //43
  new Trait("female", ["half shaved"]),

  //44
  new Trait("male", ["messy hair"]),

  //45
  new Trait("male", ["earring", "mole"]),

  //46
  new Trait("female", ["purple lipstick", "straight hair dark"]),

  //47
  new Trait("male", ["knitted cap"]),

  //48
  new Trait("male", ["knitted cap"]),

  //49
  new Trait("female", ["bandana", "purple eye shadow"]),

  //50
  new Trait("male", ["fedora", "spots"]),

  //51
  new Trait("male", ["earring", "muttonchops", "wild hair"]),

  //52
  new Trait("male", ["earring", "knitted cap", "nerd glasses", "shadow beard"]),

  //53
  new Trait("female", ["big shades", "straight hair"]),

  //54
  new Trait("male", ["hoodie"]),

  //55
  new Trait("male", ["eye patch"]),

  //56
  new Trait("male", ["shaved head"]),

  //57
  new Trait("male", ["headband"]),

  //58
  new Trait("male", ["hoodie", "normal beard black"]),

  //59
  new Trait("male", ["cowboy hat", "muttonchops"]),

  //60
  new Trait("female", ["purple lipstick", "stringy hair"]),

  //61
  new Trait("female", ["dark hair"]),

  //62
  new Trait("female", [
    "clown eyes blue",
    "earring",
    "hot lipstick",
    "mohawk dark",
  ]),

  //63
  new Trait("male", ["earring", "shaved head", "small shades"]),

  //64
  new Trait("female", ["purple lipstick", "straight hair blonde"]),

  //65
  new Trait("female", ["eye mask", "headband"]),

  //66
  new Trait("female", ["tassle hat"]),

  //67
  new Trait("female", ["3d glasses", "half shaved", "purple lipstick"]),

  //68
  new Trait("male", ["do-rag", "nerd glasses"]),

  //69
  new Trait("male", ["fedora", "normal beard black"]),

  //70
  new Trait("female", ["cigarette", "crazy hair", "earring", "regular shades"]),

  //71
  new Trait("female", ["green eye shadow", "half shaved", "purple lipstick"]),

  //72
  new Trait("male", ["earring", "fedora", "nerd glasses", "normal beard"]),

  //73
  new Trait("female", ["bandana", "black lipstick", "earring"]),

  //74
  new Trait("male", ["earring", "mohawk dark", "shadow beard"]),

  //75
  new Trait("male", ["eye patch", "knitted cap", "shadow beard"]),

  //76
  new Trait("male", ["cigarette", "do-rag"]),

  //77
  new Trait("male", ["handlebars", "stringy hair"]),

  //78
  new Trait("male", ["eye patch", "handlebars", "knitted cap"]),

  //79
  new Trait("male", ["mohawk dark", "normal beard"]),

  //80"
  new Trait("male", ["mustache", "wild hair"]),

  //81"
  new Trait("male", ["headband", "small shades"]),

  //82"
  new Trait("male", ["headband"]),

  //83"
  new Trait("male", ["shaved head", "small shades", "vape"]),

  //84"
  new Trait("male", ["big shades", "earring", "messy hair"]),

  //85
  new Trait("female", ["crazy hair"]),

  //86 ,),
  new Trait("female", [
    "earring",
    "green eye shadow",
    "hot lipstick",
    "knitted cap",
  ]),

  new Trait("male", ["earring", "hoodie"]),
  //87 ,),

  new Trait("female", ["cap", "hot lipstick"]),
  //88 ,),

  new Trait("female", ["choker"]),
  //89 ,),

  new Trait("male", ["eye patch", "hoodie"]),
  //90 ,),

  new Trait("female", ["clown nose", "straight hair"]),
  //91 ,),

  new Trait("female", ["nerd glasses", "pink with hat", "purple lipstick"]),
  //92 ,),

  new Trait("female", ["bandana"]),
  //93 ,),

  new Trait("female", ["earring", "pink with hat", "regular shades"]),
  //94 ,),

  new Trait("male", ["earring", "mohawk"]),
  //95 ,),

  new Trait("female", ["blonde bob"]),
  //96 ,),

  new Trait("male", ["wild hair"]),
  //97 ,),

  new Trait("female", ["black lipstick", "dark hair", "welding goggles"]),
  //98 ,),

  new Trait("male", ["cigarette", "hoodie"]),
  //99 ,),

  new Trait("female", ["tassle hat"]),
  //100 ,),

  new Trait("male", ["nerd glasses", "police cap"]),
  //101 ,),

  new Trait("male", ["luxurious beard", "vampire hair"]),
  //102 ,),

  new Trait("female", ["black lipstick", "blonde bob", "green eye shadow"]),
  //103 ,),

  new Trait("male", [
    "crazy hair",
    "earring",
    "eye patch",
    "normal beard black",
  ]),
  //104 ,),

  new Trait("male", ["mohawk thin"]),
  //105 ,),

  new Trait("female", ["straight hair blonde"]),
  //106 ,),

  new Trait("male", ["headband"]),
  //107 ,),

  new Trait("female", ["black lipstick", "headband"]),
  //108 ,),

  new Trait("male", ["earring", "fedora", "handlebars"]),
  //109 ,),

  new Trait("female", [
    "cigarette",
    "earring",
    "mohawk dark",
    "purple lipstick",
  ]),
  //110 ,),

  new Trait("male", ["handlebars", "knitted cap"]),
  //111 ,),

  new Trait("male", ["bandana", "big beard", "earring", "horned rim glasses"]),
  //112 ,),

  new Trait("male", ["mohawk"]),
  //113 ,),

  new Trait("female", ["red mohawk"]),
  //114 ,),

  new Trait("female", ["earring", "half shaved"]),
  //115 ,),

  new Trait("female", [
    "black lipstick",
    "clown eyes blue",
    "earring",
    "tiara",
  ]),
  //116 ,),

  new Trait("zombie", ["front beard dark", "messy hair"]),
  //117 ,),

  new Trait("female", ["bandana", "black lipstick"]),
  //118 ,),

  new Trait("male", ["cap", "earring"]),
  //119 ,),

  new Trait("female", ["big shades", "tassle hat"]),
  //120 ,),

  new Trait("female", ["purple lipstick", "tiara"]),
  //121 ,),

  new Trait("male", ["cigarette", "mohawk"]),
  //122 ,),

  new Trait("female", ["spots", "wild white hair"]),
  //123 ,),

  new Trait("male", ["earring", "normal beard black", "peak spike"]),
  //124 ,),

  new Trait("female", ["big shades", "purple lipstick", "tassle hat"]),
  //125 ,),

  new Trait("male", ["cigarette", "earring", "eye patch", "headband"]),
  //126 ,),

  new Trait("female", ["clown eyes green", "stringy hair"]),
  //127 ,),

  new Trait("male", ["chinstrap", "mole", "police cap", "vape"]),
  //128 ,),

  new Trait("male", [
    "cap forward",
    "cigarette",
    "gold chain",
    "horned rim glasses",
  ]),
  //129 ,),

  new Trait("male", ["mohawk"]),
  //130 ,),

  new Trait("female", ["hot lipstick", "straight hair dark"]),
  //131 ,),

  new Trait("male", ["mohawk thin"]),
  //132 ,),

  new Trait("male", ["chinstrap", "pipe", "purple hair"]),
  //133 ,),

  new Trait("male", ["police cap"]),
  //134 ,),

  new Trait("male", ["cap forward"]),
  //135 ,),

  new Trait("male", ["clown eyes green", "shadow beard", "shaved head"]),
  //136 ,),

  new Trait("male", ["messy hair"]),
  //137 ,),

  new Trait("male", ["horned rim glasses", "stringy hair"]),
  //138 ,),

  new Trait("male", ["do-rag", "eye patch"]),
  //139 ,),

  new Trait("female", ["hot lipstick"]),
  //140 ,),

  new Trait("male", ["3d glasses", "chinstrap", "headband"]),
  //141 ,),

  new Trait("male", ["mohawk", "regular shades"]),
  //142 ,),

  new Trait("male", ["beanie", "horned rim glasses"]),
  //143 ,),

  new Trait("male", ["cigarette", "frumpy hair", "luxurious beard"]),
  //144 ,),

  new Trait("male", ["wild hair"]),
  //145 ,),

  new Trait("male", ["earring", "mohawk"]),
  //146 ,),

  new Trait("male", ["mohawk thin", "regular shades"]),
  //147 ,),

  new Trait("male", ["hoodie"]),
  //148 ,),

  new Trait("male", ["big shades", "luxurious beard", "messy hair"]),
  //149 ,),

  new Trait("female", ["earring", "purple lipstick"]),
  //150 ,),

  new Trait("male", ["stringy hair", "vr"]),
  //151 ,),

  new Trait("male", ["clown eyes green", "mohawk dark"]),
  //152 ,),

  new Trait("male", ["cap", "earring", "eye mask"]),
  //153 ,),

  new Trait("male", ["earring", "hoodie", "shadow beard"]),
  //154 ,),

  new Trait("male", ["clown hair green", "clown nose"]),
  //155 ,),

  new Trait("male", ["cap forward", "small shades"]),
  //156 ,),

  new Trait("male", ["cap", "cigarette"]),
  //157 ,),

  new Trait("male", ["goat", "regular shades", "wild hair"]),
  //158 ,),

  new Trait("male", ["earring", "stringy hair"]),
  //159 ,),

  new Trait("female", ["clown eyes blue", "pigtails", "purple lipstick"]),
  //160 ,),

  new Trait("female", ["frumpy hair", "hot lipstick"]),
  //161 ,),

  new Trait("male", [
    "frumpy hair",
    "horned rim glasses",
    "normal beard black",
  ]),
  //162 ,),

  new Trait("male", ["eye patch", "shaved head"]),
  //163 ,),

  new Trait("female", ["stringy hair", "vr"]),
  //164 ,),

  new Trait("male", ["cigarette", "front beard dark", "mohawk dark"]),
  //165 ,),

  new Trait("male", ["regular shades", "shaved head"]),
  //166 ,),

  new Trait("female", ["headband", "hot lipstick"]),
  //167 ,),

  new Trait("female", ["blonde bob", "blue eye shadow", "silver chain"]),
  //168 ,),

  new Trait("female", ["hot lipstick", "regular shades", "wild white hair"]),
  //169 ,),

  new Trait("male", ["classic shades", "mole", "peak spike"]),
  //170 ,),

  new Trait("male", ["earring", "mole", "stringy hair"]),
  //171 ,),

  new Trait("female", ["3d glasses", "blonde bob", "purple lipstick"]),
  //172 ,),

  new Trait("female", [
    "clown eyes blue",
    "hot lipstick",
    "messy hair",
    "mole",
    "pipe",
  ]),
  //173 ,),

  new Trait("male", ["earring", "horned rim glasses", "wild hair"]),
  //174 ,),

  new Trait("male", ["big shades", "cap"]),
  //175 ,),

  new Trait("female", [
    "earring",
    "purple lipstick",
    "regular shades",
    "wild hair",
  ]),
  //176 ,),

  new Trait("male", ["bandana", "luxurious beard"]),
  //177 ,),

  new Trait("male", ["fedora"]),
  //178 ,),

  new Trait("male", ["classic shades", "mohawk thin", "shadow beard"]),
  //179 ,),

  new Trait("female", ["hot lipstick", "pilot helmet"]),
  //180 ,),

  new Trait("male", ["mohawk"]),
  //181 ,),

  new Trait("male", ["peak spike"]),
  //182 ,),

  new Trait("male", ["shadow beard"]),
  //183 ,),

  new Trait("female", ["blonde bob", "green eye shadow"]),
  //184 ,),

  new Trait("female", ["hot lipstick", "wild white hair"]),
  //185 ,),

  new Trait("male", ["crazy hair", "mustache"]),
  //186 ,),

  new Trait("female", ["straight hair"]),
  //187 ,),

  new Trait("male", ["earring", "nerd glasses", "peak spike"]),
  //188 ,),

  new Trait("female", ["mohawk thin", "purple lipstick"]),
  //189 ,),

  new Trait("male", ["headband"]),
  //190 ,),

  new Trait("female", ["mohawk"]),
  //191 ,),

  new Trait("male", ["clown nose", "earring", "mohawk thin", "nerd glasses"]),
  //192 ,),

  new Trait("female", ["earring", "green eye shadow", "tassle hat"]),
  //193 ,),

  new Trait("male", ["clown eyes green", "wild hair"]),
  //194 ,),

  new Trait("female", ["nerd glasses", "straight hair blonde"]),
  //195 ,),

  new Trait("female", ["big shades", "hot lipstick", "tassle hat"]),
  //196 ,),

  new Trait("male", ["eye patch", "frumpy hair"]),
  //197 ,),

  new Trait("male", ["beanie", "luxurious beard"]),
  //198 ,),

  new Trait("female", ["blonde short", "classic shades"]),
  //199 ,),

  new Trait("female", ["wild hair"]),
  //200 ,),

  new Trait("female", [
    "blue eye shadow",
    "cigarette",
    "dark hair",
    "hot lipstick",
  ]),
  //201 ,),

  new Trait("female", ["earring", "headband", "purple lipstick"]),
  //202 ,),

  new Trait("male", ["front beard", "messy hair", "regular shades"]),
  //203 ,),

  new Trait("male", ["crazy hair", "regular shades"]),
  //204 ,),

  new Trait("male", ["big shades", "mohawk dark", "normal beard black"]),
  //205 ,),

  new Trait("male", ["cap forward", "cigarette", "clown nose"]),
  //206 ,),

  new Trait("male", ["eye patch", "peak spike", "pipe"]),
  //207 ,),

  new Trait("male", ["3d glasses", "earring", "shaved head"]),
  //208 ,),

  new Trait("female", ["hot lipstick", "stringy hair"]),
  //209 ,),

  new Trait("female", ["earring", "straight hair dark"]),
  //210 ,),

  new Trait("male", ["goat", "mohawk thin"]),
  //211 ,),

  new Trait("female", ["crazy hair", "hot lipstick"]),
  //212 ,),

  new Trait("female", ["crazy hair"]),
  //213 ,),

  new Trait("male", ["front beard dark", "mohawk"]),
  //214 ,),

  new Trait("female", ["mohawk"]),
  //215 ,),

  new Trait("male", ["bandana"]),
  //216 ,),

  new Trait("male", ["chinstrap", "earring", "mohawk dark"]),
  //217 ,),

  new Trait("male", ["cap", "handlebars", "mole", "regular shades"]),
  //218 ,),

  new Trait("female", ["bandana", "clown eyes blue", "earring", "rosy cheeks"]),
  //219 ,),

  new Trait("male", ["big shades", "headband"]),
  //220 ,),

  new Trait("male", [
    "cigarette",
    "classic shades",
    "muttonchops",
    "stringy hair",
  ]),
  //221 ,),

  new Trait("male", ["do-rag", "pipe", "small shades"]),
  //222 ,),

  new Trait("male", ["crazy hair", "nerd glasses", "normal beard"]),
  //223 ,),

  new Trait("male", ["cigarette", "earring", "headband", "nerd glasses"]),
  //224 ,),

  new Trait("female", ["earring", "hot lipstick", "orange side"]),
  //225 ,),

  new Trait("female", ["hot lipstick"]),
  //226 ,),

  new Trait("female", ["wild white hair"]),
  //227 ,),

  new Trait("male", ["peak spike", "small shades"]),
  //228 ,),

  new Trait("male", ["cigarette", "messy hair"]),
  //229 ,),

  new Trait("male", ["knitted cap", "luxurious beard"]),
  //230 ,),

  new Trait("female", ["earring", "pipe", "stringy hair"]),
  //231 ,),

  new Trait("female", ["blue eye shadow", "wild hair"]),
  //232 ,),

  new Trait("female", ["bandana", "hot lipstick"]),
  //233 ,),

  new Trait("male", ["knitted cap", "nerd glasses"]),
  //234 ,),

  new Trait("male", ["cigarette", "frumpy hair"]),
  //235 ,),

  new Trait("male", ["muttonchops", "vampire hair"]),
  //236 ,),

  new Trait("male", ["mohawk", "regular shades"]),
  //237 ,),

  new Trait("female", ["clown eyes green", "straight hair dark"]),
  //238 ,),

  new Trait("male", ["frown", "goat", "mohawk"]),
  //239 ,),

  new Trait("female", ["big shades", "straight hair blonde"]),
  //240 ,),

  new Trait("female", ["wild blonde"]),
  //241 ,),

  new Trait("female", ["black lipstick", "stringy hair"]),
  //242 ,),

  new Trait("male", ["cigarette", "earring", "front beard", "police cap"]),
  //243 ,),

  new Trait("female", ["purple lipstick", "regular shades", "wild hair"]),
  //244 ,),

  new Trait("female", ["dark hair"]),
  //245 ,),

  new Trait("male", ["bandana", "earring", "luxurious beard"]),
  //246 ,),

  new Trait("female", ["green eye shadow", "mohawk dark"]),
  //247 ,),

  new Trait("female", ["messy hair", "purple eye shadow"]),
  //248 ,),

  new Trait("female", ["orange side"]),
  //249 ,),

  new Trait("female", ["clown eyes green", "earring", "frumpy hair"]),
  //250 ,),

  new Trait("female", ["green eye shadow", "mohawk dark"]),
  //251 ,),

  new Trait("male", ["cap forward", "mole"]),
  //252 ,),

  new Trait("female", ["blonde short", "clown eyes green"]),
  //253 ,),

  new Trait("male", ["fedora"]),
  //254 ,),

  new Trait("male", ["mustache", "shaved head"]),
  //255 ,),

  new Trait("male", ["earring", "eye patch", "fedora", "vape"]),
  //256 ,),

  new Trait("male", ["cap", "frown"]),
  //257 ,),

  new Trait("male", ["cap forward", "handlebars"]),
  //258 ,),

  new Trait("male", ["cap forward", "earring", "eye mask"]),
  //259 ,),

  new Trait("male", ["3d glasses", "purple hair"]),
  //260 ,),

  new Trait("female", ["black lipstick", "wild white hair"]),
  //261 ,),

  new Trait("female", ["blonde short", "regular shades"]),
  //262 ,),

  new Trait("male", ["messy hair", "muttonchops"]),
  //263 ,),

  new Trait("female", ["earring", "wild white hair"]),
  //264 ,),

  new Trait("male", ["cap forward", "earring", "gold chain"]),
  //265 ,),

  new Trait("male", ["do-rag", "earring", "small shades"]),
  //266 ,),

  new Trait("male", ["clown nose", "fedora"]),
  //267 ,),

  new Trait("female", ["knitted cap"]),
  //268 ,),

  new Trait("male", ["earring", "hoodie", "luxurious beard", "small shades"]),
  //269 ,),

  new Trait("female", ["clown eyes blue", "red mohawk"]),
  //270 ,),

  new Trait("male", ["stringy hair"]),
  //271 ,),

  new Trait("male", ["buck teeth", "messy hair"]),
  //272 ,),

  new Trait("male", ["big shades", "cap forward"]),
  //273 ,),

  new Trait("male", ["cap", "earring", "handlebars", "regular shades"]),
  //274 ,),

  new Trait("female", ["purple eye shadow", "purple lipstick", "stringy hair"]),
  //275 ,),

  new Trait("female", ["crazy hair"]),
  //276 ,),

  new Trait("female", ["red mohawk"]),
  //277 ,),

  new Trait("female", ["black lipstick", "straight hair dark"]),
  //278 ,),

  new Trait("female", [
    "blue eye shadow",
    "purple lipstick",
    "straight hair blonde",
  ]),
  //279 ,),

  new Trait("male", ["earring"]),
  //280 ,),

  new Trait("male", []),
  //281 ,),

  new Trait("female", ["classic shades", "straight hair dark"]),
  //282 ,),

  new Trait("female", ["frumpy hair", "hot lipstick"]),
  //283 ,),

  new Trait("male", ["mohawk thin"]),
  //284 ,),

  new Trait("female", ["dark hair", "purple lipstick"]),
  //285 ,),

  new Trait("male", ["goat", "wild hair"]),
  //286 ,),

  new Trait("female", ["cigarette", "mohawk", "purple eye shadow"]),
  //287 ,),

  new Trait("male", ["shaved head"]),
  //288 ,),

  new Trait("female", ["eye patch", "mohawk thin"]),
  //289 ,),

  new Trait("female", ["wild blonde"]),
  //290 ,),

  new Trait("male", ["earring", "mohawk thin"]),
  //291 ,),

  new Trait("female", ["black lipstick", "tassle hat"]),
  //292 ,),

  new Trait("male", ["handlebars", "mohawk dark"]),
  //293 ,),

  new Trait("male", ["big shades", "earring", "hoodie"]),
  //294 ,),

  new Trait("male", ["frown", "shaved head"]),
  //295 ,),

  new Trait("male", ["mohawk thin"]),
  //296 ,),

  new Trait("male", ["crazy hair", "muttonchops"]),
  //297 ,),

  new Trait("female", ["half shaved"]),
  //298 ,),

  new Trait("male", ["do-rag", "muttonchops"]),
  //299 ,),

  new Trait("male", ["goat", "headband"]),
  //300 ,),

  new Trait("female", ["green eye shadow", "hot lipstick", "red mohawk"]),
  //301 ,),

  new Trait("female", ["bandana", "blue eye shadow", "purple lipstick"]),
  //302 ,),

  new Trait("female", ["purple lipstick", "red mohawk"]),
  //303 ,),

  new Trait("male", ["peak spike", "shadow beard"]),
  //304 ,),

  new Trait("female", ["blonde bob", "purple lipstick", "vr"]),
  //305 ,),

  new Trait("female", ["vape", "wild hair"]),
  //306 ,),

  new Trait("male", ["chinstrap", "frumpy hair"]),
  //307 ,),

  new Trait("male", ["horned rim glasses", "messy hair", "mole"]),
  //308 ,),

  new Trait("male", ["big shades", "shaved head"]),
  //309 ,),

  new Trait("male", ["bandana", "classic shades", "earring", "vape"]),
  //310 ,),

  new Trait("male", ["front beard", "frumpy hair"]),
  //311 ,),

  new Trait("male", ["cap forward", "chinstrap"]),
  //312 ,),

  new Trait("female", ["mohawk dark", "purple lipstick"]),
  //313 ,),

  new Trait("male", ["eye mask", "police cap"]),
  //314 ,),

  new Trait("female", ["black lipstick", "cigarette", "wild white hair"]),
  //315 ,),

  new Trait("female", ["bandana"]),
  //316 ,),

  new Trait("male", ["bandana", "chinstrap", "frown"]),
  //317 ,),

  new Trait("female", ["bandana", "cigarette", "hot lipstick"]),
  //318 ,),

  new Trait("female", ["earring", "straight hair dark"]),
  //319 ,),

  new Trait("male", ["stringy hair"]),
  //320 ,),

  new Trait("male", ["peak spike"]),
  //321 ,),

  new Trait("female", ["black lipstick", "clown eyes green", "pink with hat"]),
  //322 ,),

  new Trait("male", ["mohawk dark"]),
  //323 ,),

  new Trait("female", ["blonde bob", "earring", "hot lipstick"]),
  //324 ,),

  new Trait("male", ["mustache", "police cap", "small shades"]),
  //325 ,),

  new Trait("female", ["earring", "hot lipstick", "wild white hair"]),
  //326 ,),

  new Trait("male", ["crazy hair"]),
  //327 ,),

  new Trait("male", ["bandana", "horned rim glasses"]),
  //328 ,),

  new Trait("female", ["bandana", "eye patch"]),
  //329 ,),

  new Trait("male", ["clown eyes green", "knitted cap"]),
  //330 ,),

  new Trait("female", ["earring", "purple lipstick", "tassle hat"]),
  //331 ,),

  new Trait("male", ["horned rim glasses", "stringy hair"]),
  //332 ,),

  new Trait("female", [
    "purple eye shadow",
    "purple lipstick",
    "straight hair blonde",
  ]),
  //333 ,),

  new Trait("male", ["big beard", "wild hair"]),
  //334 ,),

  new Trait("male", ["clown hair green"]),
  //335 ,),

  new Trait("male", ["nerd glasses", "normal beard", "top hat"]),
  //336 ,),

  new Trait("male", ["frumpy hair"]),
  //337 ,),

  new Trait("male", ["messy hair", "small shades"]),
  //338 ,),

  new Trait("female", [
    "big shades",
    "black lipstick",
    "cap",
    "earring",
    "mole",
  ]),
  //339 ,),

  new Trait("male", ["3d glasses", "headband", "medical mask", "muttonchops"]),
  //340 ,),

  new Trait("female", ["earring", "messy hair"]),
  //341 ,),

  new Trait("female", ["bandana", "regular shades"]),
  //342 ,),

  new Trait("male", ["police cap", "shadow beard"]),
  //343 ,),

  new Trait("male", ["beanie"]),
  //344 ,),

  new Trait("female", ["earring", "tassle hat"]),
  //345 ,),

  new Trait("male", ["purple hair"]),
  //346 ,),

  new Trait("male", ["horned rim glasses", "knitted cap"]),
  //347 ,),

  new Trait("female", ["messy hair", "nerd glasses", "rosy cheeks"]),
  //348 ,),

  new Trait("male", ["earring", "front beard dark", "mohawk dark"]),
  //349 ,),

  new Trait("female", ["stringy hair"]),
  //350 ,),

  new Trait("male", ["goat", "mole", "purple hair"]),
  //351 ,),

  new Trait("female", ["green eye shadow", "straight hair"]),
  //352 ,),

  new Trait("female", ["bandana", "green eye shadow"]),
  //353 ,),

  new Trait("male", ["cigarette", "police cap"]),
  //354 ,),

  new Trait("female", [
    "black lipstick",
    "gold chain",
    "green eye shadow",
    "wild white hair",
  ]),
  //355 ,),

  new Trait("male", ["stringy hair"]),
  //356 ,),

  new Trait("female", ["earring", "tassle hat"]),
  //357 ,),

  new Trait("male", ["luxurious beard", "mohawk", "small shades"]),
  //358 ,),

  new Trait("female", ["hot lipstick", "messy hair"]),
  //359 ,),

  new Trait("male", ["bandana", "normal beard black"]),
  //360 ,),

  new Trait("male", ["mohawk dark"]),
  //361 ,),

  new Trait("male", ["eye mask", "peak spike", "shadow beard"]),
  //362 ,),

  new Trait("male", ["cowboy hat", "nerd glasses", "shadow beard"]),
  //363 ,),

  new Trait("male", ["hoodie", "normal beard black"]),
  //364 ,),

  new Trait("male", ["do-rag", "normal beard"]),
  //365 ,),

  new Trait("male", ["earring", "eye mask", "mohawk"]),
  //366 ,),

  new Trait("male", ["clown hair green"]),
  //367 ,),

  new Trait("female", ["frumpy hair", "purple lipstick"]),
  //368 ,),

  new Trait("male", ["earring", "fedora", "luxurious beard"]),
  //369 ,),

  new Trait("male", ["cigarette", "peak spike", "rosy cheeks", "small shades"]),
  //370 ,),

  new Trait("female", ["frumpy hair"]),
  //371 ,),

  new Trait("ape", ["cap forward"]),
  //372 ,),

  new Trait("male", ["earring", "headband"]),
  //373 ,),

  new Trait("female", ["bandana", "clown eyes blue"]),
  //374 ,),

  new Trait("female", ["green eye shadow", "wild hair"]),
  //375 ,),

  new Trait("female", ["half shaved", "nerd glasses"]),
  //376 ,),

  new Trait("male", [
    "cigarette",
    "earring",
    "headband",
    "normal beard",
    "regular shades",
  ]),
  //377 ,),

  new Trait("female", ["earring", "frumpy hair"]),
  //378 ,),

  new Trait("female", ["earring", "mohawk thin", "purple lipstick"]),
  //379 ,),

  new Trait("female", ["black lipstick", "earring", "wild hair"]),
  //380 ,),

  new Trait("female", ["knitted cap", "purple lipstick"]),
  //381 ,),

  new Trait("female", ["cigarette", "pilot helmet"]),
  //382 ,),

  new Trait("female", ["green eye shadow", "straight hair blonde"]),
  //383 ,),

  new Trait("female", ["bandana", "classic shades", "purple lipstick"]),
  //384 ,),

  new Trait("female", ["choker", "wild hair"]),
  //385 ,),

  new Trait("male", ["do-rag", "earring"]),
  //386 ,),

  new Trait("male", ["cap forward", "gold chain", "pipe"]),
  //387 ,),

  new Trait("female", [
    "clown eyes blue",
    "hot lipstick",
    "straight hair blonde",
  ]),
  //388 ,),

  new Trait("male", ["do-rag", "rosy cheeks"]),
  //389 ,),

  new Trait("female", ["messy hair"]),
  //390 ,),

  new Trait("female", ["black lipstick", "eye mask", "wild blonde"]),
  //391 ,),

  new Trait("male", ["shaved head"]),
  //392 ,),

  new Trait("male", ["cap forward", "cigarette", "vr"]),
  //393 ,),

  new Trait("female", ["earring", "pink with hat"]),
  //394 ,),

  new Trait("male", ["cap forward", "earring", "normal beard"]),
  //395 ,),

  new Trait("female", ["straight hair blonde"]),
  //396 ,),

  new Trait("male", ["cowboy hat"]),
  //397 ,),

  new Trait("male", ["bandana"]),
  //398 ,),

  new Trait("male", ["purple hair", "small shades"]),
  //399 ,),

  new Trait("female", ["blonde bob", "purple eye shadow", "purple lipstick"]),
  //400 ,),

  new Trait("male", ["big beard", "earring", "frumpy hair"]),
  //401 ,),

  new Trait("male", ["front beard dark", "mohawk thin"]),
  //402 ,),

  new Trait("male", ["classic shades", "clown hair green"]),
  //403 ,),

  new Trait("female", ["cigarette", "orange side", "silver chain"]),
  //404 ,),

  new Trait("female", ["messy hair"]),
  //405 ,),

  new Trait("male", ["hoodie", "nerd glasses"]),
  //406 ,),

  new Trait("female", ["earring", "purple lipstick", "wild blonde"]),
  //407 ,),

  new Trait("male", ["cap forward"]),
  //408 ,),

  new Trait("female", ["black lipstick", "knitted cap"]),
  //409 ,),

  new Trait("male", ["eye patch", "headband"]),
  //410 ,),

  new Trait("female", ["black lipstick", "clown eyes blue", "wild hair"]),
  //411 ,),

  new Trait("male", ["classic shades", "earring", "purple hair"]),
  //412 ,),

  new Trait("female", ["straight hair"]),
  //413 ,),

  new Trait("male", ["earring", "shadow beard", "top hat"]),
  //414 ,),

  new Trait("male", ["frown", "mole", "police cap", "small shades"]),
  //415 ,),

  new Trait("male", ["cigarette", "hoodie", "smile"]),
  //416 ,),

  new Trait("female", ["straight hair dark"]),
  //417 ,),

  new Trait("female", ["black lipstick", "vape", "wild white hair"]),
  //418 ,),

  new Trait("female", ["bandana", "earring"]),
  //419 ,),

  new Trait("male", ["crazy hair", "earring"]),
  //420 ,),

  new Trait("male", ["front beard", "wild hair"]),
  //421 ,),

  new Trait("female", [
    "dark hair",
    "earring",
    "purple eye shadow",
    "purple lipstick",
  ]),
  //422 ,),

  new Trait("male", ["clown eyes blue", "shaved head"]),
  //423 ,),

  new Trait("male", ["hoodie", "muttonchops", "regular shades"]),
  //424 ,),

  new Trait("female", ["black lipstick", "horned rim glasses", "messy hair"]),
  //425 ,),

  new Trait("male", ["big shades", "peak spike"]),
  //426 ,),

  new Trait("female", ["messy hair"]),
  //427 ,),

  new Trait("female", ["purple eye shadow"]),
  //428 ,),

  new Trait("male", ["police cap", "smile"]),
  //429 ,),

  new Trait("female", ["dark hair", "earring", "purple lipstick"]),
  //430 ,),

  new Trait("female", ["headband", "horned rim glasses"]),
  //431 ,),

  new Trait("male", ["cigarette", "earring", "messy hair"]),
  //432 ,),

  new Trait("male", [
    "earring",
    "mohawk thin",
    "normal beard",
    "regular shades",
  ]),
  //433 ,),

  new Trait("male", ["eye mask", "frumpy hair"]),
  //434 ,),

  new Trait("male", ["mohawk thin", "muttonchops"]),
  //435 ,),

  new Trait("male", ["medical mask"]),
  //436 ,),

  new Trait("male", ["crazy hair", "eye patch", "front beard dark"]),
  //437 ,),

  new Trait("female", ["mohawk dark"]),
  //438 ,),

  new Trait("male", ["knitted cap", "shadow beard"]),
  //439 ,),

  new Trait("female", ["black lipstick", "blonde short"]),
  //440 ,),

  new Trait("male", ["shadow beard", "stringy hair"]),
  //441 ,),

  new Trait("male", ["cowboy hat", "front beard"]),
  //442 ,),

  new Trait("female", ["wild blonde"]),
  //443 ,),

  new Trait("male", ["do-rag", "earring", "shadow beard"]),
  //444 ,),

  new Trait("female", ["earring", "pilot helmet", "pipe", "purple lipstick"]),
  //445 ,),

  new Trait("female", ["cigarette", "nerd glasses", "straight hair blonde"]),
  //446 ,),

  new Trait("male", ["big shades", "stringy hair"]),
  //447 ,),

  new Trait("male", ["shaved head"]),
  //448 ,),

  new Trait("female", ["cigarette", "purple lipstick", "straight hair"]),
  //449 ,),

  new Trait("male", ["cigarette", "fedora", "small shades"]),
  //450 ,),

  new Trait("male", ["do-rag"]),
  //451 ,),

  new Trait("male", ["knitted cap"]),
  //452 ,),

  new Trait("male", ["buck teeth", "cap"]),
  //453 ,),

  new Trait("male", ["chinstrap", "medical mask", "messy hair"]),
  //454 ,),

  new Trait("male", ["luxurious beard", "top hat", "vr"]),
  //455 ,),

  new Trait("male", ["earring", "mohawk thin", "nerd glasses", "spots"]),
  //456 ,),

  new Trait("male", ["3d glasses", "chinstrap", "knitted cap"]),
  //457 ,),

  new Trait("male", ["cap", "earring", "normal beard black"]),
  //458 ,),

  new Trait("male", ["police cap"]),
  //459 ,),

  new Trait("female", [
    "black lipstick",
    "choker",
    "classic shades",
    "earring",
    "mohawk dark",
  ]),
  //460 ,),

  new Trait("male", ["knitted cap", "smile"]),
  //461 ,),

  new Trait("male", ["cap forward", "clown nose", "regular shades"]),
  //462 ,),

  new Trait("male", ["bandana", "vape"]),
  //463 ,),

  new Trait("female", ["hot lipstick", "mohawk dark"]),
  //464 ,),

  new Trait("male", ["3d glasses", "hoodie", "pipe"]),
  //465 ,),

  new Trait("female", ["blonde bob", "purple lipstick"]),
  //466 ,),

  new Trait("male", ["classic shades", "front beard", "purple hair"]),
  //467 ,),

  new Trait("male", ["peak spike"]),
  //468 ,),

  new Trait("female", ["frumpy hair"]),
  //469 ,),

  new Trait("male", ["big shades", "knitted cap", "mole"]),
  //470 ,),

  new Trait("female", ["clown eyes green", "stringy hair"]),
  //471 ,),

  new Trait("male", ["mustache", "regular shades", "wild hair"]),
  //472 ,),

  new Trait("female", ["green eye shadow", "straight hair dark"]),
  //473 ,),

  new Trait("female", ["cigarette", "pigtails"]),
  //474 ,),

  new Trait("female", ["crazy hair"]),
  //475 ,),

  new Trait("male", ["mohawk", "muttonchops", "nerd glasses", "pipe"]),
  //476 ,),

  new Trait("female", ["mohawk dark", "purple lipstick"]),
  //477 ,),

  new Trait("male", ["cigarette", "peak spike"]),
  //478 ,),

  new Trait("female", ["dark hair", "regular shades"]),
  //479 ,),

  new Trait("male", ["chinstrap", "earring", "top hat"]),
  //480 ,),

  new Trait("female", ["nerd glasses", "wild hair"]),
  //481 ,),

  new Trait("female", ["hot lipstick", "tassle hat"]),
  //482 ,),

  new Trait("male", ["mustache", "stringy hair"]),
  //483 ,),

  new Trait("male", ["knitted cap", "nerd glasses"]),
  //484 ,),

  new Trait("male", ["3d glasses", "big beard", "earring", "headband"]),
  //485 ,),

  new Trait("female", ["hot lipstick", "straight hair blonde"]),
  //486 ,),

  new Trait("male", ["crazy hair"]),
  //487 ,),

  new Trait("female", ["earring", "half shaved", "mole"]),
  //488 ,),

  new Trait("male", ["classic shades", "do-rag"]),
  //489 ,),

  new Trait("female", ["earring", "pigtails"]),
  //490 ,),

  new Trait("female", ["blue eye shadow", "half shaved", "hot lipstick"]),
  //491 ,),

  new Trait("male", ["classic shades", "shadow beard", "shaved head"]),
  //492 ,),

  new Trait("female", ["purple lipstick", "wild blonde"]),
  //493 ,),

  new Trait("male", ["front beard dark", "stringy hair"]),
  //494 ,),

  new Trait("male", ["crazy hair", "smile"]),
  //495 ,),

  new Trait("male", ["cap", "earring", "normal beard black", "small shades"]),
  //496 ,),

  new Trait("male", ["mustache", "peak spike"]),
  //497 ,),

  new Trait("female", ["blonde short", "earring"]),
  //498 ,),

  new Trait("female", ["cigarette", "straight hair blonde", "welding goggles"]),
  //499 ,),

  new Trait("female", ["straight hair"]),
  //500 ,),

  new Trait("female", ["earring", "pilot helmet"]),
  //501 ,),

  new Trait("male", ["earring", "headband", "normal beard"]),
  //502 ,),

  new Trait("male", ["front beard dark", "mohawk dark"]),
  //503 ,),

  new Trait("female", ["black lipstick", "earring", "pilot helmet"]),
  //504 ,),

  new Trait("male", ["headband", "normal beard"]),
  //505 ,),

  new Trait("male", ["big shades", "messy hair"]),
  //506 ,),

  new Trait("female", ["dark hair", "hot lipstick"]),
  //507 ,),

  new Trait("male", ["earring", "knitted cap"]),
  //508 ,),

  new Trait("female", ["regular shades", "wild hair"]),
  //509 ,),

  new Trait("male", []),
  //510 ,),

  new Trait("male", ["bandana", "mole"]),
  //511 ,),

  new Trait("male", ["cigarette", "hoodie"]),
  //512 ,),

  new Trait("male", ["knitted cap"]),
  //513 ,),

  new Trait("female", ["eye patch", "hot lipstick", "straight hair"]),
  //514 ,),

  new Trait("male", ["mohawk dark", "normal beard"]),
  //515 ,),

  new Trait("male", ["3d glasses", "cowboy hat", "normal beard"]),
  //516 ,),

  new Trait("male", ["goat", "messy hair", "pipe"]),
  //517 ,),

  new Trait("male", ["earring", "mohawk", "vr"]),
  //518 ,),

  new Trait("male", ["frumpy hair"]),
  //519 ,),

  new Trait("male", ["handlebars", "hoodie", "regular shades"]),
  //520 ,),

  new Trait("female", ["blonde bob"]),
  //521 ,),

  new Trait("female", ["blonde bob", "nerd glasses"]),
  //522 ,),

  new Trait("male", ["smile", "stringy hair"]),
  //523 ,),

  new Trait("male", ["muttonchops", "purple hair"]),
  //524 ,),

  new Trait("female", [
    "earring",
    "hot lipstick",
    "silver chain",
    "straight hair dark",
  ]),
  //525 ,),

  new Trait("male", ["mole", "vampire hair"]),
  //526 ,),

  new Trait("female", [
    "hot lipstick",
    "regular shades",
    "straight hair blonde",
  ]),
  //527 ,),

  new Trait("female", ["mohawk"]),
  //528 ,),

  new Trait("female", ["headband"]),
  //529 ,),

  new Trait("female", ["blonde bob"]),
  //530 ,),

  new Trait("male", ["earring", "knitted cap"]),
  //531 ,),

  new Trait("female", ["mohawk dark"]),
  //532 ,),

  new Trait("male", ["peak spike", "spots"]),
  //533 ,),

  new Trait("female", ["pigtails", "vr"]),
  //534 ,),

  new Trait("male", ["knitted cap", "mole", "mustache"]),
  //535 ,),

  new Trait("male", ["hoodie", "horned rim glasses", "normal beard"]),
  //536 ,),

  new Trait("female", ["pink with hat", "purple lipstick"]),
  //537 ,),

  new Trait("female", ["green eye shadow", "hot lipstick", "knitted cap"]),
  //538 ,),

  new Trait("male", ["mohawk dark", "mustache", "vr"]),
  //539 ,),

  new Trait("male", ["mohawk", "shadow beard"]),
  //540 ,),

  new Trait("male", ["front beard dark", "messy hair", "nerd glasses"]),
  //541 ,),

  new Trait("male", ["goat", "medical mask", "regular shades", "stringy hair"]),
  //542 ,),

  new Trait("male", ["earring", "mustache", "stringy hair"]),
  //543 ,),

  new Trait("male", ["crazy hair"]),
  //544 ,),

  new Trait("female", ["messy hair", "vr"]),
  //545 ,),

  new Trait("male", ["frown", "headband", "small shades"]),
  //546 ,),

  new Trait("female", ["earring", "knitted cap"]),
  //547 ,),

  new Trait("female", ["black lipstick", "frumpy hair"]),
  //548 ,),

  new Trait("male", ["3d glasses"]),
  //549 ,),

  new Trait("male", ["earring", "top hat"]),
  //550 ,),

  new Trait("male", ["earring", "peak spike"]),
  //551 ,),

  new Trait("male", ["do-rag", "front beard", "vr"]),
  //552 ,),

  new Trait("female", ["3d glasses", "wild hair"]),
  //553 ,),

  new Trait("female", ["purple lipstick", "wild hair"]),
  //554 ,),

  new Trait("male", ["earring", "horned rim glasses", "mohawk"]),
  //555 ,),

  new Trait("male", ["messy hair", "shadow beard"]),
  //556 ,),

  new Trait("male", ["crazy hair", "normal beard black", "small shades"]),
  //557 ,),

  new Trait("male", ["earring", "mohawk dark"]),
  //558 ,),

  new Trait("female", ["mohawk thin"]),
  //559 ,),

  new Trait("female", ["black lipstick", "blonde bob"]),
  //560 ,),

  new Trait("male", ["3d glasses", "top hat"]),
  //561 ,),

  new Trait("male", ["cap", "eye mask", "rosy cheeks"]),
  //562 ,),

  new Trait("female", ["earring", "pipe", "straight hair dark", "vr"]),
  //563 ,),

  new Trait("male", ["big beard", "mohawk"]),
  //564 ,),

  new Trait("male", ["shadow beard"]),
  //565 ,),

  new Trait("female", ["wild hair"]),
  //566 ,),

  new Trait("male", ["bandana", "vr"]),
  //567 ,),

  new Trait("male", ["peak spike", "vr"]),
  //568 ,),

  new Trait("female", ["black lipstick", "knitted cap"]),
  //569 ,),

  new Trait("male", ["cap", "cigarette", "muttonchops"]),
  //570 ,),

  new Trait("female", ["pigtails", "purple lipstick"]),
  //571 ,),

  new Trait("male", ["clown eyes blue", "do-rag"]),
  //572 ,),

  new Trait("female", ["mole", "vr", "wild white hair"]),
  //573 ,),

  new Trait("male", ["bandana", "goat"]),
  //574 ,),

  new Trait("female", ["black lipstick", "frumpy hair"]),
  //575 ,),

  new Trait("female", ["black lipstick", "tassle hat"]),
  //576 ,),

  new Trait("male", ["cap", "spots"]),
  //577 ,),

  new Trait("male", ["fedora", "front beard dark"]),
  //578 ,),

  new Trait("female", ["earring", "straight hair blonde"]),
  //579 ,),

  new Trait("female", ["clown eyes green", "tassle hat"]),
  //580 ,),

  new Trait("female", ["blonde short", "cigarette", "earring"]),
  //581 ,),

  new Trait("male", ["cap"]),
  //582 ,),

  new Trait("male", ["classic shades", "do-rag"]),
  //583 ,),

  new Trait("female", ["hot lipstick", "red mohawk"]),
  //584 ,),

  new Trait("female", ["earring", "pink with hat"]),
  //585 ,),

  new Trait("female", ["purple eye shadow", "wild hair"]),
  //586 ,),

  new Trait("male", ["do-rag", "earring"]),
  //587 ,),

  new Trait("female", [
    "big shades",
    "black lipstick",
    "cigarette",
    "earring",
    "tassle hat",
  ]),
  //588 ,),

  new Trait("female", ["earring", "hot lipstick", "mohawk", "regular shades"]),
  //589 ,),

  new Trait("female", ["classic shades", "straight hair dark"]),
  //590 ,),

  new Trait("male", ["goat", "shaved head", "small shades"]),
  //591 ,),

  new Trait("male", ["cigarette", "eye patch", "purple hair"]),
  //592 ,),

  new Trait("female", ["earring", "nerd glasses", "tiara"]),
  //593 ,),

  new Trait("male", ["eye patch", "knitted cap"]),
  //594 ,),

  new Trait("male", ["eye patch", "headband"]),
  //595 ,),

  new Trait("female", ["blonde bob", "earring", "medical mask"]),
  //596 ,),

  new Trait("female", ["messy hair", "rosy cheeks"]),
  //597 ,),

  new Trait("female", ["earring", "purple eye shadow", "wild white hair"]),
  //598 ,),

  new Trait("male", ["mohawk thin", "shadow beard"]),
  //599 ,),

  new Trait("female", ["crazy hair", "purple lipstick"]),
  //600 ,),

  new Trait("female", ["black lipstick", "clown eyes blue", "mohawk dark"]),
  //601 ,),

  new Trait("female", ["crazy hair", "hot lipstick"]),
  //602 ,),

  new Trait("female", ["black lipstick", "cigarette", "wild blonde"]),
  //603 ,),

  new Trait("female", ["purple lipstick", "wild hair"]),
  //604 ,),

  new Trait("male", [
    "cigarette",
    "clown hair green",
    "earring",
    "mole",
    "small shades",
  ]),
  //605 ,),

  new Trait("female", ["clown eyes green", "mohawk dark", "purple lipstick"]),
  //606 ,),

  new Trait("male", ["clown eyes green", "earring", "stringy hair"]),
  //607 ,),

  new Trait("male", ["3d glasses", "stringy hair"]),
  //608 ,),

  new Trait("male", ["do-rag", "luxurious beard"]),
  //609 ,),

  new Trait("male", ["big shades", "cap forward", "earring"]),
  //610 ,),

  new Trait("female", ["cap"]),
  //611 ,),

  new Trait("male", ["mohawk dark", "shadow beard", "vr"]),
  //612 ,),

  new Trait("male", ["chinstrap", "frumpy hair"]),
  //613 ,),

  new Trait("female", ["headband"]),
  //614 ,),

  new Trait("male", ["small shades", "wild hair"]),
  //615 ,),

  new Trait("female", [
    "classic shades",
    "hot lipstick",
    "straight hair blonde",
  ]),
  //616 ,),

  new Trait("male", ["hoodie", "normal beard", "small shades"]),
  //617 ,),

  new Trait("female", ["clown eyes green", "wild hair"]),
  //618 ,),

  new Trait("male", ["earring", "eye patch", "front beard", "frumpy hair"]),
  //619 ,),

  new Trait("female", ["horned rim glasses", "straight hair"]),
  //620 ,),

  new Trait("male", [
    "earring",
    "eye patch",
    "normal beard",
    "peak spike",
    "smile",
  ]),
  //621 ,),

  new Trait("male", [
    "big beard",
    "earring",
    "frumpy hair",
    "horned rim glasses",
  ]),
  //622 ,),

  new Trait("male", ["fedora", "horned rim glasses", "normal beard", "smile"]),
  //623 ,),

  new Trait("male", ["big shades", "crazy hair", "earring"]),
  //624 ,),

  new Trait("male", [
    "cigarette",
    "eye patch",
    "normal beard black",
    "stringy hair",
  ]),
  //625 ,),

  new Trait("male", ["cowboy hat", "earring"]),
  //626 ,),

  new Trait("male", ["hoodie"]),
  //627 ,),

  new Trait("female", [
    "earring",
    "purple eye shadow",
    "purple lipstick",
    "stringy hair",
  ]),
  //628 ,),

  new Trait("male", ["regular shades"]),
  //629 ,),

  new Trait("male", ["handlebars", "mohawk thin"]),
  //630 ,),

  new Trait("female", ["big shades", "cigarette", "headband"]),
  //631 ,),

  new Trait("male", ["clown eyes blue", "peak spike"]),
  //632 ,),

  new Trait("male", ["cap", "earring", "regular shades", "spots"]),
  //633 ,),

  new Trait("male", ["big shades", "frumpy hair"]),
  //634 ,),

  new Trait("alien", ["bandana", "regular shades"]),
  //635 ,),

  new Trait("male", ["chinstrap", "classic shades", "mohawk"]),
  //636 ,),

  new Trait("female", ["black lipstick", "straight hair dark"]),
  //637 ,),

  new Trait("male", ["chinstrap", "smile", "top hat", "vr"]),
  //638 ,),

  new Trait("male", ["mole", "peak spike", "shadow beard"]),
  //639 ,),

  new Trait("male", ["knitted cap", "pipe"]),
  //640 ,),

  new Trait("female", []),
  //641 ,),

  new Trait("female", ["pink with hat", "purple lipstick"]),
  //642 ,),

  new Trait("male", ["mohawk", "mustache", "smile"]),
  //643 ,),

  new Trait("male", ["earring", "mohawk thin"]),
  //644 ,),

  new Trait("male", ["cap", "earring", "goat", "horned rim glasses"]),
  //645 ,),

  new Trait("female", [
    "earring",
    "green eye shadow",
    "hot lipstick",
    "mohawk dark",
  ]),
  //646 ,),

  new Trait("female", ["bandana"]),
  //647 ,),

  new Trait("male", ["big beard", "eye patch", "peak spike"]),
  //648 ,),

  new Trait("male", ["do-rag", "earring", "mustache", "pipe"]),
  //649 ,),

  new Trait("male", ["big beard", "messy hair"]),
  //650 ,),

  new Trait("male", ["do-rag"]),
  //651 ,),

  new Trait("male", ["mohawk dark", "normal beard black", "vape"]),
  //652 ,),

  new Trait("female", ["blue eye shadow", "wild blonde"]),
  //653 ,),

  new Trait("female", ["clown eyes green", "earring", "wild white hair"]),
  //654 ,),

  new Trait("male", ["chinstrap", "mohawk"]),
  //655 ,),

  new Trait("male", ["earring", "mohawk thin", "smile"]),
  //656 ,),

  new Trait("male", ["cap", "cigarette", "classic shades", "mustache"]),
  //657 ,),

  new Trait("female", ["black lipstick", "mohawk"]),
  //658 ,),

  new Trait("female", ["gold chain", "mole", "tassle hat"]),
  //659 ,),

  new Trait("female", [
    "earring",
    "purple eye shadow",
    "purple lipstick",
    "wild hair",
  ]),
  //660 ,),

  new Trait("male", ["goat", "knitted cap"]),
  //661 ,),

  new Trait("male", ["muttonchops", "purple hair"]),
  //662 ,),

  new Trait("male", ["frumpy hair"]),
  //663 ,),

  new Trait("female", ["horned rim glasses", "tassle hat"]),
  //664 ,),

  new Trait("male", ["clown hair green", "luxurious beard", "regular shades"]),
  //665 ,),

  new Trait("female", ["messy hair", "purple lipstick"]),
  //666 ,),

  new Trait("female", ["hot lipstick", "mohawk dark"]),
  //667 ,),

  new Trait("female", ["clown eyes green", "mohawk dark"]),
  //668 ,),

  new Trait("female", ["black lipstick", "mohawk thin"]),
  //669 ,),

  new Trait("female", ["mohawk thin"]),
  //670 ,),

  new Trait("female", ["classic shades", "earring", "half shaved"]),
  //671 ,),

  new Trait("female", ["purple lipstick", "wild blonde"]),
  //672 ,),

  new Trait("male", ["big shades", "mohawk dark"]),
  //673 ,),

  new Trait("male", ["messy hair", "nerd glasses"]),
  //674 ,),

  new Trait("female", ["classic shades", "mohawk thin"]),
  //675 ,),

  new Trait("male", ["regular shades", "smile", "stringy hair"]),
  //676 ,),

  new Trait("female", ["bandana", "clown eyes blue", "pipe"]),
  //677 ,),

  new Trait("male", ["do-rag", "earring"]),
  //678 ,),

  new Trait("male", ["crazy hair", "muttonchops", "silver chain"]),
  //679 ,),

  new Trait("male", ["front beard dark", "peak spike"]),
  //680 ,),

  new Trait("male", ["vampire hair"]),
  //681 ,),

  new Trait("female", ["black lipstick", "straight hair dark", "vape"]),
  //682 ,),

  new Trait("female", ["earring", "knitted cap", "vr"]),
  //683 ,),

  new Trait("female", [
    "clown eyes blue",
    "earring",
    "pink with hat",
    "purple lipstick",
  ]),
  //684 ,),

  new Trait("male", ["mohawk", "regular shades"]),
  //685 ,),

  new Trait("male", ["chinstrap", "earring", "pipe", "shaved head", "smile"]),
  //686 ,),

  new Trait("male", ["muttonchops", "peak spike"]),
  //687 ,),

  new Trait("female", ["clown hair green"]),
  //688 ,),

  new Trait("female", ["3d glasses", "black lipstick", "mohawk thin", "mole"]),
  //689 ,),

  new Trait("male", ["messy hair", "nerd glasses", "shadow beard"]),
  //690 ,),

  new Trait("female", ["earring", "horned rim glasses", "messy hair"]),
  //691 ,),

  new Trait("male", ["eye mask", "frumpy hair"]),
  //692 ,),

  new Trait("male", ["bandana", "earring", "vr"]),
  //693 ,),

  new Trait("male", ["earring", "messy hair"]),
  //694 ,),

  new Trait("female", ["blue eye shadow", "tassle hat"]),
  //695 ,),

  new Trait("female", ["mohawk thin", "purple eye shadow", "purple lipstick"]),
  //696 ,),

  new Trait("female", ["hot lipstick", "messy hair"]),
  //697 ,),

  new Trait("male", ["hoodie", "regular shades"]),
  //698 ,),

  new Trait("male", ["wild hair"]),
  //699 ,),

  new Trait("male", ["earring", "mohawk dark"]),
  //700 ,),

  new Trait("male", ["goat", "peak spike"]),
  //701 ,),

  new Trait("male", ["do-rag", "muttonchops"]),
  //702 ,),

  new Trait("male", ["nerd glasses", "peak spike"]),
  //703 ,),

  new Trait("male", ["cap forward", "mustache", "smile"]),
  //704 ,),

  new Trait("male", ["crazy hair", "horned rim glasses"]),
  //705 ,),

  new Trait("female", ["tiara"]),
  //706 ,),

  new Trait("female", ["hot lipstick", "rosy cheeks", "straight hair"]),
  //707 ,),

  new Trait("female", ["purple lipstick", "straight hair"]),
  //708 ,),

  new Trait("male", ["earring", "shadow beard", "shaved head"]),
  //709 ,),

  new Trait("male", ["earring", "headband", "mustache", "regular shades"]),
  //710 ,),

  new Trait("male", ["cap", "handlebars", "small shades"]),
  //711 ,),

  new Trait("female", ["purple lipstick", "straight hair"]),
  //712 ,),

  new Trait("male", ["peak spike", "vr"]),
  //713 ,),

  new Trait("female", [
    "cigarette",
    "earring",
    "green eye shadow",
    "half shaved",
  ]),
  //714 ,),

  new Trait("male", ["earring", "mohawk thin", "normal beard"]),
  //715 ,),

  new Trait("male", ["do-rag", "earring", "eye patch", "smile"]),
  //716 ,),

  new Trait("female", ["earring", "frumpy hair", "green eye shadow"]),
  //717 ,),

  new Trait("male", ["do-rag", "spots"]),
  //718 ,),

  new Trait("female", ["earring", "hot lipstick", "pink with hat"]),
  //719 ,),

  new Trait("male", ["cap forward", "earring"]),
  //720 ,),

  new Trait("female", ["black lipstick", "half shaved"]),
  //721 ,),

  new Trait("male", ["big shades", "mohawk dark", "normal beard black"]),
  //722 ,),

  new Trait("male", ["nerd glasses", "wild hair"]),
  //723 ,),

  new Trait("female", ["purple eye shadow", "red mohawk"]),
  //724 ,),

  new Trait("male", ["cap", "normal beard"]),
  //725 ,),

  new Trait("male", ["earring", "mohawk dark", "small shades", "vape"]),
  //726 ,),

  new Trait("female", ["black lipstick", "dark hair"]),
  //727 ,),

  new Trait("female", ["cap", "earring", "purple lipstick"]),
  //728 ,),

  new Trait("female", ["purple eye shadow", "straight hair"]),
  //729 ,),

  new Trait("male", ["bandana", "earring", "shadow beard"]),
  //730 ,),

  new Trait("male", ["eye mask", "shaved head"]),
  //731 ,),

  new Trait("female", ["tassle hat"]),
  //732 ,),

  new Trait("female", ["classic shades", "purple lipstick", "stringy hair"]),
  //733 ,),

  new Trait("male", ["mohawk", "nerd glasses"]),
  //734 ,),

  new Trait("male", ["cowboy hat", "earring", "mole", "nerd glasses"]),
  //735 ,),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "earring",
    "knitted cap",
  ]),
  //736 ,),

  new Trait("female", ["clown eyes green", "earring", "stringy hair"]),
  //737 ,),

  new Trait("male", ["earring"]),
  //738 ,),

  new Trait("female", ["bandana"]),
  //739 ,),

  new Trait("male", ["mohawk", "shadow beard"]),
  //740 ,),

  new Trait("male", []),
  //741 ,),

  new Trait("male", ["bandana"]),
  //742 ,),

  new Trait("male", ["earring", "front beard", "stringy hair"]),
  //743 ,),

  new Trait("female", ["blue eye shadow", "tiara"]),
  //744 ,),

  new Trait("male", ["knitted cap", "mustache", "nerd glasses"]),
  //745 ,),

  new Trait("female", ["medical mask", "stringy hair"]),
  //746 ,),

  new Trait("male", ["cap", "classic shades"]),
  //747 ,),

  new Trait("male", ["frumpy hair", "shadow beard"]),
  //748 ,),

  new Trait("female", ["dark hair", "green eye shadow"]),
  //749 ,),

  new Trait("male", ["chinstrap", "regular shades", "wild hair"]),
  //750 ,),

  new Trait("male", ["cigarette", "classic shades", "frumpy hair"]),
  //751 ,),

  new Trait("male", ["messy hair"]),
  //752 ,),

  new Trait("female", ["purple lipstick", "wild hair"]),
  //753 ,),

  new Trait("male", ["earring", "mohawk dark", "nerd glasses", "shadow beard"]),
  //754 ,),

  new Trait("female", [
    "black lipstick",
    "blonde bob",
    "cigarette",
    "clown eyes green",
    "earring",
    "mole",
  ]),
  //755 ,),

  new Trait("female", ["blue eye shadow", "cap"]),
  //756 ,),

  new Trait("female", ["earring", "messy hair", "purple lipstick"]),
  //757 ,),

  new Trait("female", ["black lipstick", "cigarette", "eye patch"]),
  //758 ,),

  new Trait("female", ["dark hair", "purple eye shadow"]),
  //759 ,),

  new Trait("female", ["black lipstick", "frumpy hair"]),
  //760 ,),

  new Trait("female", ["purple lipstick", "straight hair dark"]),
  //761 ,),

  new Trait("male", ["purple hair"]),
  //762

  new Trait("male", ["mohawk"]),
  //763 ,),

  new Trait("male", ["headband", "horned rim glasses"]),
  //764 ,),

  new Trait("male", ["clown eyes green", "goat", "hoodie"]),
  //765 ,),

  new Trait("female", ["black lipstick", "crazy hair", "horned rim glasses"]),
  //766 ,),

  new Trait("female", ["black lipstick", "earring", "tassle hat"]),
  //767 ,),

  new Trait("male", ["big shades", "cap forward", "earring", "muttonchops"]),
  //768 ,),

  new Trait("male", ["fedora", "silver chain"]),
  //769 ,),

  new Trait("male", ["crazy hair", "luxurious beard", "regular shades"]),
  //770 ,),

  new Trait("male", ["shadow beard", "stringy hair", "vr"]),
  //771 ,),

  new Trait("male", ["hoodie", "normal beard black"]),
  //772 ,),

  new Trait("female", ["hot lipstick", "purple eye shadow", "straight hair"]),
  //773 ,),

  new Trait("male", ["do-rag", "earring", "shadow beard"]),
  //774 ,),

  new Trait("male", ["eye patch", "peak spike"]),
  //775 ,),

  new Trait("female", ["purple lipstick", "tassle hat"]),
  //776 ,),

  new Trait("male", ["chinstrap", "earring", "mohawk", "spots"]),
  //777 ,),

  new Trait("female", [
    "blue eye shadow",
    "clown hair green",
    "purple lipstick",
  ]),
  //778 ,),

  new Trait("male", ["cap", "eye patch"]),
  //779 ,),

  new Trait("female", ["big shades", "wild blonde"]),
  //780 ,),

  new Trait("male", [
    "earring",
    "front beard dark",
    "police cap",
    "regular shades",
  ]),
  //781 ,),

  new Trait("female", ["blonde bob", "classic shades"]),
  //782 ,),

  new Trait("male", ["horned rim glasses", "mohawk"]),
  //783 ,),

  new Trait("male", [
    "3d glasses",
    "medical mask",
    "mohawk thin",
    "silver chain",
  ]),
  //784 ,),

  new Trait("male", ["earring", "frumpy hair"]),
  //785 ,),

  new Trait("male", ["earring", "normal beard", "vampire hair"]),
  //786 ,),

  new Trait("male", ["cap forward", "earring", "shadow beard"]),
  //787 ,),

  new Trait("male", ["clown eyes green", "earring", "mohawk thin", "mole"]),
  //788 ,),

  new Trait("female", ["cap"]),
  //789 ,),

  new Trait("female", ["cap", "horned rim glasses"]),
  //790 ,),

  new Trait("male", ["earring", "mohawk dark", "shadow beard", "small shades"]),
  //791 ,),

  new Trait("male", ["bandana", "clown eyes blue"]),
  //792 ,),

  new Trait("male", ["purple hair", "shadow beard"]),
  //793 ,),

  new Trait("male", ["clown nose", "headband"]),
  //794 ,),

  new Trait("female", ["blue eye shadow", "crazy hair", "hot lipstick"]),
  //795 ,),

  new Trait("female", ["bandana", "classic shades", "purple lipstick"]),
  //796 ,),

  new Trait("male", ["bandana", "cigarette"]),
  //797 ,),

  new Trait("male", ["spots"]),
  //798 ,),

  new Trait("male", ["fedora", "mole"]),
  //799 ,),

  new Trait("male", ["classic shades", "crazy hair"]),
  //800 ,),

  new Trait("male", ["shaved head", "small shades"]),
  //801 ,),

  new Trait("male", ["eye patch", "hoodie"]),
  //802 ,),

  new Trait("male", ["messy hair", "nerd glasses"]),
  //803 ,),

  new Trait("male", ["messy hair", "vape"]),
  //804 ,),

  new Trait("male", ["mohawk thin", "shadow beard"]),
  //805 ,),

  new Trait("male", ["clown nose", "mohawk"]),
  //806 ,),

  new Trait("male", ["cap", "earring", "handlebars"]),
  //807 ,),

  new Trait("male", ["earring", "peak spike", "shadow beard"]),
  //808 ,),

  new Trait("male", ["earring", "shaved head"]),
  //809 ,),

  new Trait("male", ["clown eyes blue", "front beard", "hoodie"]),
  //810 ,),

  new Trait("male", ["earring", "front beard", "stringy hair"]),
  //811 ,),

  new Trait("male", ["clown eyes green", "mohawk dark"]),
  //812 ,),

  new Trait("female", ["wild white hair"]),
  //813 ,),

  new Trait("male", ["3d glasses", "earring", "knitted cap"]),
  //814 ,),

  new Trait("female", ["blonde bob", "cigarette"]),
  //815 ,),

  new Trait("male", ["cap", "mole"]),
  //816 ,),

  new Trait("male", ["muttonchops", "wild hair"]),
  //817 ,),

  new Trait("female", ["clown eyes green", "earring", "wild blonde"]),
  //818 ,),

  new Trait("male", ["3d glasses", "headband", "pipe", "shadow beard"]),
  //819 ,),

  new Trait("male", ["cigarette", "mohawk thin"]),
  //820 ,),

  new Trait("male", ["big shades", "police cap"]),
  //821 ,),

  new Trait("female", ["3d glasses", "blonde bob"]),
  //822 ,),

  new Trait("male", ["front beard", "regular shades"]),
  //823 ,),

  new Trait("male", ["beanie", "nerd glasses"]),
  //824 ,),

  new Trait("female", [
    "earring",
    "purple lipstick",
    "rosy cheeks",
    "wild hair",
  ]),
  //825 ,),

  new Trait("female", ["black lipstick", "messy hair"]),
  //826 ,),

  new Trait("male", ["top hat", "vr"]),
  //827 ,),

  new Trait("female", ["hot lipstick", "stringy hair"]),
  //828 ,),

  new Trait("female", ["hot lipstick", "mohawk"]),
  //829 ,),

  new Trait("female", ["earring", "hot lipstick", "wild blonde"]),
  //830 ,),

  new Trait("female", ["half shaved", "purple lipstick"]),
  //831 ,),

  new Trait("female", ["cigarette", "red mohawk"]),
  //832 ,),

  new Trait("male", ["crazy hair", "shadow beard"]),
  //833 ,),

  new Trait("female", ["cigarette", "straight hair blonde"]),
  //834 ,),

  new Trait("female", ["clown eyes blue", "earring", "stringy hair"]),
  //835 ,),

  new Trait("male", ["front beard dark", "knitted cap"]),
  //836 ,),

  new Trait("female", ["black lipstick", "red mohawk"]),
  //837 ,),

  new Trait("female", ["pilot helmet"]),
  //838 ,),

  new Trait("female", ["frumpy hair", "mole", "purple eye shadow"]),
  //839 ,),

  new Trait("male", ["cigarette", "mohawk dark", "mustache"]),
  //840 ,),

  new Trait("male", ["earring", "goat", "mohawk"]),
  //841 ,),

  new Trait("male", ["nerd glasses", "purple hair", "smile"]),
  //842 ,),

  new Trait("female", [
    "cigarette",
    "earring",
    "pilot helmet",
    "purple lipstick",
  ]),
  //843 ,),

  new Trait("female", ["purple eye shadow", "stringy hair"]),
  //844 ,),

  new Trait("female", ["clown eyes green", "headband"]),
  //845 ,),

  new Trait("male", ["earring", "headband", "small shades"]),
  //846 ,),

  new Trait("male", ["clown nose", "mohawk thin"]),
  //847 ,),

  new Trait("male", ["classic shades", "messy hair", "mustache"]),
  //848 ,),

  new Trait("male", ["knitted cap"]),
  //849 ,),

  new Trait("male", ["bandana", "regular shades"]),
  //850 ,),

  new Trait("male", ["top hat"]),
  //851 ,),

  new Trait("male", ["classic shades", "do-rag", "goat"]),
  //852 ,),

  new Trait("male", ["knitted cap", "mustache", "regular shades"]),
  //853 ,),

  new Trait("male", ["earring", "messy hair"]),
  //854 ,),

  new Trait("female", ["bandana", "eye patch"]),
  //855 ,),

  new Trait("male", ["cap forward", "regular shades"]),
  //856 ,),

  new Trait("female", ["clown eyes green", "purple lipstick", "tassle hat"]),
  //857 ,),

  new Trait("female", ["clown eyes green", "straight hair blonde"]),
  //858 ,),

  new Trait("male", ["chinstrap", "knitted cap", "vr"]),
  //859 ,),

  new Trait("male", ["cowboy hat", "normal beard"]),
  //860 ,),

  new Trait("female", ["straight hair"]),
  //861 ,),

  new Trait("male", ["cigarette", "cowboy hat", "mole", "silver chain"]),
  //862 ,),

  new Trait("female", ["black lipstick"]),
  //863 ,),

  new Trait("male", ["bandana", "nerd glasses"]),
  //864 ,),

  new Trait("female", [
    "earring",
    "hot lipstick",
    "mohawk thin",
    "purple eye shadow",
  ]),
  //865 ,),

  new Trait("female", ["clown eyes green", "purple lipstick", "straight hair"]),
  //866 ,),

  new Trait("female", [
    "black lipstick",
    "blonde short",
    "cigarette",
    "clown eyes blue",
  ]),
  //867 ,),

  new Trait("female", ["frumpy hair", "silver chain"]),
  //868 ,),

  new Trait("male", ["bandana", "front beard dark", "small shades"]),
  //869 ,),

  new Trait("female", ["blonde short"]),
  //870 ,),

  new Trait("male", ["regular shades", "wild hair"]),
  //871 ,),

  new Trait("female", ["hot lipstick", "vape", "wild blonde"]),
  //872 ,),

  new Trait("male", ["eye patch", "mohawk dark", "mustache"]),
  //873 ,),

  new Trait("female", ["cigarette", "earring", "regular shades", "wild hair"]),
  //874 ,),

  new Trait("female", ["earring", "regular shades", "wild white hair"]),
  //875 ,),

  new Trait("female", ["mole", "tassle hat"]),
  //876 ,),

  new Trait("male", ["earring", "hoodie", "luxurious beard"]),
  //877 ,),

  new Trait("male", ["cap forward", "muttonchops"]),
  //878 ,),

  new Trait("male", ["classic shades", "earring", "handlebars", "purple hair"]),
  //879 ,),

  new Trait("male", ["earring", "stringy hair"]),
  //880 ,),

  new Trait("male", ["do-rag", "small shades"]),
  //881 ,),

  new Trait("male", ["cigarette", "mohawk dark"]),
  //882 ,),

  new Trait("female", ["black lipstick", "earring", "pilot helmet"]),
  //883 ,),

  new Trait("female", ["earring", "mohawk dark", "purple lipstick"]),
  //884 ,),

  new Trait("male", ["frown", "knitted cap", "silver chain"]),
  //885 ,),

  new Trait("female", ["blue eye shadow", "dark hair"]),
  //886 ,),

  new Trait("male", ["mohawk dark", "shadow beard"]),
  //887 ,),

  new Trait("female", ["clown eyes blue", "straight hair dark"]),
  //888 ,),

  new Trait("male", ["mohawk dark", "mole", "shadow beard"]),
  //889 ,),

  new Trait("male", ["shadow beard", "shaved head", "vr"]),
  //890 ,),

  new Trait("male", ["earring", "shadow beard", "top hat"]),
  //891 ,),

  new Trait("male", ["cap forward", "earring"]),
  //892 ,),

  new Trait("female", ["earring", "messy hair"]),
  //893 ,),

  new Trait("female", ["earring", "frumpy hair"]),
  //894 ,),

  new Trait("male", ["3d glasses", "do-rag", "muttonchops"]),
  //895 ,),

  new Trait("male", ["gold chain", "peak spike"]),
  //896 ,),

  new Trait("male", ["cap", "cigarette", "muttonchops"]),
  //897 ,),

  new Trait("female", ["blonde bob", "purple eye shadow"]),
  //898 ,),

  new Trait("male", ["headband", "nerd glasses"]),
  //899 ,),

  new Trait("male", ["front beard", "messy hair", "small shades"]),
  //900 ,),

  new Trait("female", ["cigarette", "hot lipstick", "tassle hat"]),
  //901 ,),

  new Trait("male", ["earring", "messy hair", "nerd glasses", "shadow beard"]),
  //902 ,),

  new Trait("male", ["cap", "horned rim glasses", "medical mask"]),
  //903 ,),

  new Trait("female", [
    "half shaved",
    "horned rim glasses",
    "hot lipstick",
    "vape",
  ]),
  //904 ,),

  new Trait("male", ["bandana", "mustache"]),
  //905 ,),

  new Trait("male", ["crazy hair", "mole"]),
  //906 ,),

  new Trait("female", ["clown hair green", "hot lipstick"]),
  //907 ,),

  new Trait("male", ["frown", "messy hair", "pipe"]),
  //908 ,),

  new Trait("male", ["nerd glasses", "stringy hair"]),
  //909 ,),

  new Trait("male", ["chinstrap", "earring", "headband"]),
  //910 ,),

  new Trait("male", ["shadow beard", "shaved head"]),
  //911 ,),

  new Trait("female", [
    "cigarette",
    "purple eye shadow",
    "straight hair blonde",
  ]),
  //912 ,),

  new Trait("male", ["fedora"]),
  //913 ,),

  new Trait("female", ["big shades", "cap"]),
  //914 ,),

  new Trait("male", ["cowboy hat", "front beard dark"]),
  //915 ,),

  new Trait("female", ["headband"]),
  //916 ,),

  new Trait("female", ["cigarette", "earring", "mohawk"]),
  //917 ,),

  new Trait("male", ["hoodie", "rosy cheeks", "vape"]),
  //918 ,),

  new Trait("male", ["messy hair", "muttonchops"]),
  //919 ,),

  new Trait("male", ["chinstrap", "earring", "smile", "vampire hair", "vr"]),
  //920 ,),

  new Trait("female", ["cigarette", "earring", "red mohawk", "regular shades"]),
  //921 ,),

  new Trait("female", ["horned rim glasses", "straight hair blonde"]),
  //922 ,),

  new Trait("male", ["mohawk thin", "shadow beard"]),
  //923 ,),

  new Trait("male", ["3d glasses", "earring", "hoodie", "luxurious beard"]),
  //924 ,),

  new Trait("male", [
    "big shades",
    "earring",
    "muttonchops",
    "peak spike",
    "vape",
  ]),
  //925 ,),

  new Trait("male", ["mole", "stringy hair"]),
  //926 ,),

  new Trait("female", ["black lipstick", "blonde bob", "clown eyes blue"]),
  //927 ,),

  new Trait("male", [
    "classic shades",
    "front beard",
    "headband",
    "silver chain",
  ]),
  //928 ,),

  new Trait("female", ["blonde short"]),
  //929 ,),

  new Trait("male", ["eye patch", "purple hair"]),
  //930 ,),

  new Trait("female", ["pilot helmet"]),
  //931 ,),

  new Trait("male", ["bandana", "earring", "luxurious beard"]),
  //932 ,),

  new Trait("male", ["mustache", "wild hair"]),
  //933 ,),

  new Trait("female", ["mohawk"]),
  //934 ,),

  new Trait("male", ["mohawk dark", "regular shades"]),
  //935 ,),

  new Trait("male", ["do-rag", "earring", "mole"]),
  //936 ,),

  new Trait("female", ["messy hair"]),
  //937 ,),

  new Trait("male", ["earring", "front beard dark", "stringy hair"]),
  //938 ,),

  new Trait("male", ["earring", "hoodie", "vr"]),
  //939 ,),

  new Trait("male", ["handlebars", "headband", "nerd glasses"]),
  //940 ,),

  new Trait("male", ["cigarette", "eye patch", "mohawk dark"]),
  //941 ,),

  new Trait("male", ["eye mask", "headband"]),
  //942 ,),

  new Trait("male", ["cowboy hat"]),
  //943 ,),

  new Trait("female", ["orange side", "purple lipstick"]),
  //944 ,),

  new Trait("male", ["big shades", "clown nose", "cowboy hat"]),
  //945 ,),

  new Trait("male", ["classic shades", "front beard", "wild hair"]),
  //946 ,),

  new Trait("male", ["mohawk dark", "normal beard black"]),
  //947 ,),

  new Trait("female", ["3d glasses", "tassle hat"]),
  //948 ,),

  new Trait("female", ["blue eye shadow", "pigtails"]),
  //949 ,),

  new Trait("male", ["knitted cap", "luxurious beard"]),
  //950 ,),

  new Trait("female", ["tassle hat"]),
  //951 ,),

  new Trait("female", ["earring", "eye patch", "mole", "straight hair dark"]),
  //952 ,),

  new Trait("male", ["normal beard black", "shaved head"]),
  //953 ,),

  new Trait("female", ["earring", "frumpy hair", "nerd glasses"]),
  //954 ,),

  new Trait("male", ["earring", "vampire hair"]),
  //955 ,),

  new Trait("male", ["peak spike", "small shades"]),
  //956 ,),

  new Trait("male", ["goat"]),
  //957 ,),

  new Trait("male", ["eye mask", "mohawk dark"]),
  //958 ,),

  new Trait("male", [
    "earring",
    "frown",
    "normal beard black",
    "pipe",
    "police cap",
  ]),
  //959 ,),

  new Trait("female", [
    "clown eyes blue",
    "earring",
    "purple lipstick",
    "straight hair blonde",
  ]),
  //960 ,),

  new Trait("male", ["headband", "mole"]),
  //961 ,),

  new Trait("male", ["eye mask", "frown", "police cap"]),
  //962 ,),

  new Trait("female", ["cap", "eye mask"]),
  //963 ,),

  new Trait("male", ["earring", "headband", "luxurious beard"]),
  //964 ,),

  new Trait("male", ["clown eyes blue", "earring", "purple hair"]),
  //965 ,),

  new Trait("female", ["earring", "mole", "purple lipstick", "red mohawk"]),
  //966 ,),

  new Trait("male", ["do-rag", "earring", "vr"]),
  //967 ,),

  new Trait("male", ["cap"]),
  //968 ,),

  new Trait("male", ["cap forward", "shadow beard"]),
  //969 ,),

  new Trait("male", ["muttonchops", "vampire hair"]),
  //970 ,),

  new Trait("female", ["hot lipstick", "red mohawk"]),
  //971 ,),

  new Trait("male", ["crazy hair", "vr"]),
  //972 ,),

  new Trait("male", ["big beard", "earring", "peak spike"]),
  //973 ,),

  new Trait("female", ["bandana", "classic shades", "hot lipstick"]),
  //974 ,),

  new Trait("male", ["knitted cap", "normal beard"]),
  //975 ,),

  new Trait("female", ["regular shades", "straight hair blonde"]),
  //976 ,),

  new Trait("female", ["purple lipstick", "tassle hat"]),
  //977 ,),

  new Trait("male", ["wild hair"]),
  //978 ,),

  new Trait("male", ["luxurious beard", "messy hair", "small shades"]),
  //979 ,),

  new Trait("female", ["black lipstick", "mohawk dark"]),
  //980 ,),

  new Trait("male", ["chinstrap", "earring", "peak spike"]),
  //981 ,),

  new Trait("female", ["nerd glasses", "wild blonde"]),
  //982 ,),

  new Trait("female", ["messy hair", "purple lipstick"]),
  //983 ,),

  new Trait("female", ["earring", "messy hair"]),
  //984 ,),

  new Trait("female", ["big shades", "blonde bob"]),
  //985 ,),

  new Trait("male", ["earring", "normal beard black", "peak spike", "smile"]),
  //986 ,),

  new Trait("zombie", ["horned rim glasses", "wild hair"]),
  //987 ,),

  new Trait("female", ["hot lipstick", "red mohawk"]),
  //988 ,),

  new Trait("male", ["mustache", "shaved head"]),
  //989 ,),

  new Trait("female", ["purple lipstick", "stringy hair"]),
  //990 ,),

  new Trait("female", ["black lipstick", "clown eyes blue", "tassle hat"]),
  //991 ,),

  new Trait("female", ["purple eye shadow", "red mohawk"]),
  //992 ,),

  new Trait("male", ["earring", "horned rim glasses", "messy hair", "mole"]),
  //993 ,),

  new Trait("female", ["black lipstick", "knitted cap", "spots", "vape"]),
  //994 ,),

  new Trait("male", [
    "bandana",
    "earring",
    "front beard",
    "horned rim glasses",
  ]),
  //995 ,),

  new Trait("female", ["cap", "cigarette", "purple eye shadow"]),
  //996 ,),

  new Trait("female", ["horned rim glasses", "straight hair dark"]),
  //997 ,),

  new Trait("male", [
    "buck teeth",
    "horned rim glasses",
    "normal beard",
    "stringy hair",
  ]),
  //998 ,),

  new Trait("male", ["headband", "normal beard", "pipe"]),
  //999 ,),

  new Trait("female", ["cigarette", "dark hair", "rosy cheeks"]),
  //1000 ,),

  new Trait("male", ["luxurious beard", "nerd glasses", "peak spike"]),
  //1001 ,),

  new Trait("male", ["mohawk dark"]),
  //1002 ,),

  new Trait("male", ["frumpy hair", "nerd glasses"]),
  //1003 ,),

  new Trait("female", ["black lipstick", "messy hair"]),
  //1004 ,),

  new Trait("male", ["purple hair", "regular shades"]),
  //1005 ,),

  new Trait("male", ["regular shades", "wild hair"]),
  //1006 ,),

  new Trait("male", ["earring", "regular shades", "vampire hair"]),
  //1007 ,),

  new Trait("male", ["cap forward", "earring", "luxurious beard"]),
  //1008 ,),

  new Trait("male", ["cap", "luxurious beard"]),
  //1009 ,),

  new Trait("female", ["classic shades", "earring", "pink with hat"]),
  //1010 ,),

  new Trait("female", ["earring", "stringy hair"]),
  //1011 ,),

  new Trait("male", ["eye patch", "mohawk thin"]),
  //1012 ,),

  new Trait("male", ["clown eyes green", "fedora"]),
  //1013 ,),

  new Trait("male", ["cap forward", "luxurious beard"]),
  //1014 ,),

  new Trait("female", ["messy hair", "silver chain"]),
  //1015 ,),

  new Trait("male", [
    "buck teeth",
    "headband",
    "horned rim glasses",
    "normal beard",
  ]),
  //1016 ,),

  new Trait("male", ["goat", "mole", "top hat"]),
  //1017 ,),

  new Trait("male", ["front beard", "top hat"]),
  //1018 ,),

  new Trait("male", ["chinstrap", "headband", "regular shades"]),
  //1019 ,),

  new Trait("male", ["cigarette", "eye patch", "gold chain", "stringy hair"]),
  //1020 ,),

  new Trait("ape", ["cap", "eye patch"]),
  //1021 ,),

  new Trait("male", ["mohawk thin", "mole"]),
  //1022 ,),

  new Trait("female", ["headband", "hot lipstick"]),
  //1023 ,),

  new Trait("female", [
    "clown eyes blue",
    "earring",
    "hot lipstick",
    "wild hair",
  ]),
  //1024 ,),

  new Trait("male", ["bandana", "earring"]),
  //1025 ,),

  new Trait("male", ["clown eyes blue", "mole", "peak spike"]),
  //1026 ,),

  new Trait("male", ["eye mask", "handlebars", "hoodie"]),
  //1027 ,),

  new Trait("male", ["big shades", "mohawk thin"]),
  //1028 ,),

  new Trait("male", ["horned rim glasses", "mustache"]),
  //1029 ,),

  new Trait("male", ["fedora", "muttonchops"]),
  //1030 ,),

  new Trait("male", ["cap forward", "small shades"]),
  //1031 ,),

  new Trait("female", ["nerd glasses", "straight hair dark"]),
  //1032 ,),

  new Trait("female", ["hot lipstick", "messy hair"]),
  //1033 ,),

  new Trait("male", ["big shades", "earring", "hoodie", "normal beard black"]),
  //1034 ,),

  new Trait("female", ["black lipstick", "wild hair"]),
  //1035 ,),

  new Trait("male", ["classic shades", "mohawk thin"]),
  //1036 ,),

  new Trait("female", ["blue eye shadow", "orange side"]),
  //1037 ,),

  new Trait("female", ["purple lipstick", "regular shades", "wild blonde"]),
  //1038 ,),

  new Trait("female", ["clown eyes blue", "hot lipstick", "messy hair"]),
  //1039 ,),

  new Trait("female", ["earring", "mohawk dark"]),
  //1040 ,),

  new Trait("female", ["hot lipstick", "mohawk", "purple eye shadow", "vape"]),
  //1041 ,),

  new Trait("female", ["classic shades", "half shaved"]),
  //1042 ,),

  new Trait("female", ["purple lipstick", "regular shades", "tassle hat"]),
  //1043 ,),

  new Trait("male", ["normal beard", "vr"]),
  //1044 ,),

  new Trait("male", ["earring", "shaved head"]),
  //1045 ,),

  new Trait("female", ["earring", "hot lipstick", "wild blonde"]),
  //1046 ,),

  new Trait("male", ["mohawk dark"]),
  //1047 ,),

  new Trait("male", ["front beard dark", "stringy hair"]),
  //1048 ,),

  new Trait("male", ["crazy hair", "smile"]),
  //1049 ,),

  new Trait("female", []),
  //1050 ,),

  new Trait("female", ["hot lipstick", "mole", "tassle hat"]),
  //1051 ,),

  new Trait("female", ["bandana", "earring", "purple lipstick"]),
  //1052 ,),

  new Trait("male", ["big beard", "cap forward", "nerd glasses"]),
  //1053 ,),

  new Trait("male", ["earring", "goat", "stringy hair"]),
  //1054 ,),

  new Trait("female", ["horned rim glasses", "hot lipstick", "wild blonde"]),
  //1055 ,),

  new Trait("male", ["handlebars", "peak spike"]),
  //1056 ,),

  new Trait("male", ["front beard dark", "messy hair"]),
  //1057 ,),

  new Trait("male", ["headband", "normal beard black"]),
  //1058 ,),

  new Trait("male", ["big shades", "earring", "frumpy hair"]),
  //1059 ,),

  new Trait("male", ["cowboy hat", "eye mask"]),
  //1060 ,),

  new Trait("male", ["classic shades", "messy hair"]),
  //1061 ,),

  new Trait("male", ["cigarette", "crazy hair", "shadow beard"]),
  //1062 ,),

  new Trait("male", ["peak spike", "shadow beard"]),
  //1063 ,),

  new Trait("male", ["front beard", "wild hair"]),
  //1064 ,),

  new Trait("female", ["crazy hair", "earring"]),
  //1065 ,),

  new Trait("male", ["frumpy hair", "small shades"]),
  //1066 ,),

  new Trait("male", ["front beard", "horned rim glasses", "mohawk"]),
  //1067 ,),

  new Trait("male", ["big beard", "mohawk"]),
  //1068 ,),

  new Trait("male", ["cap"]),
  //1069 ,),

  new Trait("female", ["earring", "pink with hat"]),
  //1070 ,),

  new Trait("female", ["purple lipstick", "stringy hair"]),
  //1071 ,),

  new Trait("male", ["chinstrap", "eye mask", "stringy hair"]),
  //1072 ,),

  new Trait("female", ["clown eyes blue", "mohawk dark", "purple lipstick"]),
  //1073 ,),

  new Trait("male", ["cowboy hat", "normal beard black"]),
  //1074 ,),

  new Trait("male", ["big shades", "cap", "chinstrap", "earring"]),
  //1075 ,),

  new Trait("female", ["clown eyes blue", "half shaved"]),
  //1076 ,),

  new Trait("male", ["mohawk dark", "mustache"]),
  //1077 ,),

  new Trait("male", ["eye mask", "hoodie"]),
  //1078 ,),

  new Trait("male", ["purple hair"]),
  //1079 ,),

  new Trait("male", ["classic shades", "hoodie"]),
  //1080 ,),

  new Trait("female", ["blue eye shadow", "cigarette", "frumpy hair"]),
  //1081 ,),

  new Trait("female", ["wild blonde"]),
  //1082 ,),

  new Trait("female", ["earring", "straight hair blonde", "vr"]),
  //1083 ,),

  new Trait("male", ["nerd glasses", "shaved head"]),
  //1084 ,),

  new Trait("male", ["big shades", "cigarette", "mohawk dark"]),
  //1085 ,),

  new Trait("female", ["blonde short"]),
  //1086 ,),

  new Trait("female", ["frumpy hair", "mole"]),
  //1087 ,),

  new Trait("male", ["classic shades", "clown nose", "shaved head"]),
  //1088 ,),

  new Trait("male", ["chinstrap", "knitted cap"]),
  //1089 ,),

  new Trait("female", ["mohawk thin", "purple lipstick"]),
  //1090 ,),

  new Trait("male", ["clown eyes blue", "vampire hair"]),
  //1091 ,),

  new Trait("female", ["blonde short", "cigarette", "spots"]),
  //1092 ,),

  new Trait("male", ["buck teeth", "mustache", "peak spike", "small shades"]),
  //1093 ,),

  new Trait("male", ["chinstrap", "classic shades", "hoodie"]),
  //1094 ,),

  new Trait("male", ["earring", "frumpy hair", "luxurious beard"]),
  //1095 ,),

  new Trait("female", ["black lipstick", "mohawk dark"]),
  //1096 ,),

  new Trait("male", ["frumpy hair", "mole", "nerd glasses"]),
  //1097 ,),

  new Trait("male", ["bandana", "earring"]),
  //1098 ,),

  new Trait("male", ["top hat"]),
  //1099 ,),

  new Trait("male", ["frown", "nerd glasses", "vampire hair"]),
  //1100 ,),

  new Trait("male", ["handlebars", "messy hair", "nerd glasses"]),
  //1101 ,),

  new Trait("female", [
    "black lipstick",
    "clown eyes blue",
    "clown nose",
    "straight hair",
  ]),
  //1102 ,),

  new Trait("male", ["nerd glasses", "peak spike"]),
  //1103 ,),

  new Trait("male", ["earring", "eye mask", "messy hair"]),
  //1104 ,),

  new Trait("male", ["gold chain", "luxurious beard", "wild hair"]),
  //1105 ,),

  new Trait("male", ["cigarette", "luxurious beard", "peak spike"]),
  //1106 ,),

  new Trait("female", ["hot lipstick", "mohawk dark"]),
  //1107 ,),

  new Trait("male", ["hoodie", "luxurious beard"]),
  //1108 ,),

  new Trait("male", ["mohawk thin", "small shades"]),
  //1109 ,),

  new Trait("female", [
    "earring",
    "purple eye shadow",
    "purple lipstick",
    "wild hair",
  ]),
  //1110 ,),

  new Trait("male", ["peak spike", "shadow beard", "silver chain"]),
  //1111 ,),

  new Trait("male", ["bandana", "regular shades"]),
  //1112 ,),

  new Trait("male", [
    "cigarette",
    "eye patch",
    "front beard dark",
    "knitted cap",
  ]),
  //1113 ,),

  new Trait("male", ["chinstrap", "purple hair"]),
  //1114 ,),

  new Trait("female", ["hot lipstick", "wild white hair"]),
  //1115 ,),

  new Trait("male", ["cowboy hat", "shadow beard"]),
  //1116 ,),

  new Trait("male", ["horned rim glasses", "mohawk thin", "shadow beard"]),
  //1117 ,),

  new Trait("male", ["cap forward", "smile"]),
  //1118 ,),

  new Trait("zombie", ["do-rag", "eye patch", "shadow beard"]),
  //1119 ,),

  new Trait("female", ["hot lipstick", "wild hair"]),
  //1120 ,),

  new Trait("male", ["big shades", "mohawk thin"]),
  //1121 ,),

  new Trait("male", ["mohawk dark", "small shades"]),
  //1122 ,),

  new Trait("female", ["3d glasses", "medical mask", "straight hair blonde"]),
  //1123 ,),

  new Trait("male", ["earring", "handlebars", "mohawk dark", "nerd glasses"]),
  //1124 ,),

  new Trait("male", ["bandana", "big shades"]),
  //1125 ,),

  new Trait("male", ["chinstrap", "messy hair", "vr"]),
  //1126 ,),

  new Trait("male", ["big beard", "purple hair"]),
  //1127 ,),

  new Trait("male", ["frumpy hair", "shadow beard"]),
  //1128 ,),

  new Trait("male", ["front beard", "purple hair", "vape"]),
  //1129 ,),

  new Trait("female", ["dark hair", "nerd glasses"]),
  //1130 ,),

  new Trait("male", ["cap forward", "cigarette"]),
  //1131 ,),

  new Trait("male", ["big shades", "wild hair"]),
  //1132 ,),

  new Trait("male", ["frown", "mohawk thin"]),
  //1133 ,),

  new Trait("male", ["goat", "nerd glasses", "wild hair"]),
  //1134 ,),

  new Trait("male", ["earring", "gold chain", "shaved head"]),
  //1135 ,),

  new Trait("male", ["earring", "muttonchops", "small shades", "wild hair"]),
  //1136 ,),

  new Trait("male", ["earring", "mohawk dark", "shadow beard"]),
  //1137 ,),

  new Trait("female", ["cigarette", "messy hair", "nerd glasses"]),
  //1138 ,),

  new Trait("female", ["dark hair", "eye patch", "hot lipstick", "mole"]),
  //1139 ,),

  new Trait("female", ["earring", "purple lipstick", "wild white hair"]),
  //1140 ,),

  new Trait("female", ["earring", "mohawk"]),
  //1141 ,),

  new Trait("female", ["black lipstick", "tassle hat"]),
  //1142 ,),

  new Trait("male", ["bandana", "front beard dark"]),
  //1143 ,),

  new Trait("male", ["muttonchops", "peak spike"]),
  //1144 ,),

  new Trait("male", ["cap", "earring"]),
  //1145 ,),

  new Trait("male", ["eye patch", "mohawk"]),
  //1146 ,),

  new Trait("male", ["3d glasses", "shaved head"]),
  //1147 ,),

  new Trait("female", ["earring", "eye patch", "wild blonde"]),
  //1148 ,),

  new Trait("female", ["hot lipstick", "mohawk dark"]),
  //1149 ,),

  new Trait("female", ["black lipstick", "straight hair"]),
  //1150 ,),

  new Trait("female", ["knitted cap"]),
  //1151 ,),

  new Trait("male", ["eye patch", "purple hair"]),
  //1152 ,),

  new Trait("male", ["earring", "messy hair", "mustache"]),
  //1153 ,),

  new Trait("male", ["frown", "purple hair"]),
  //1154 ,),

  new Trait("male", ["front beard", "frumpy hair", "nerd glasses"]),
  //1155 ,),

  new Trait("female", ["purple lipstick", "wild white hair"]),
  //1156 ,),

  new Trait("female", ["black lipstick"]),
  //1157 ,),

  new Trait("female", ["crazy hair", "mole"]),
  //1158 ,),

  new Trait("female", ["black lipstick", "wild blonde"]),
  //1159 ,),

  new Trait("male", ["earring", "knitted cap", "small shades"]),
  //1160 ,),

  new Trait("female", ["messy hair", "nerd glasses"]),
  //1161 ,),

  new Trait("female", [
    "hot lipstick",
    "spots",
    "straight hair blonde",
    "welding goggles",
  ]),
  //1162 ,),

  new Trait("female", ["blue eye shadow", "mole", "pink with hat"]),
  //1163 ,),

  new Trait("male", ["cap forward", "regular shades"]),
  //1164 ,),

  new Trait("female", ["cap", "hot lipstick", "vape"]),
  //1165 ,),

  new Trait("male", ["fedora", "goat"]),
  //1166 ,),

  new Trait("male", ["horned rim glasses", "police cap"]),
  //1167 ,),

  new Trait("male", ["handlebars", "vampire hair"]),
  //1168 ,),

  new Trait("female", ["purple lipstick", "wild hair"]),
  //1169 ,),

  new Trait("male", ["front beard", "shaved head"]),
  //1170 ,),

  new Trait("male", ["frown", "shaved head"]),
  //1171 ,),

  new Trait("male", [
    "cap forward",
    "cigarette",
    "nerd glasses",
    "shadow beard",
  ]),
  //1172 ,),

  new Trait("female", ["clown eyes blue", "mohawk"]),
  //1173 ,),

  new Trait("female", ["pipe", "wild hair"]),
  //1174 ,),

  new Trait("male", ["eye patch", "shaved head"]),
  //1175 ,),

  new Trait("female", ["mohawk dark", "vape"]),
  //1176 ,),

  new Trait("male", ["hoodie", "normal beard"]),
  //1177 ,),

  new Trait("male", ["headband", "pipe"]),
  //1178 ,),

  new Trait("male", ["classic shades", "mohawk dark"]),
  //1179 ,),

  new Trait("male", ["mohawk", "muttonchops"]),
  //1180 ,),

  new Trait("male", ["bandana", "cigarette", "muttonchops"]),
  //1181 ,),

  new Trait("male", ["goat", "hoodie", "nerd glasses"]),
  //1182 ,),

  new Trait("male", [
    "big shades",
    "cap",
    "earring",
    "gold chain",
    "muttonchops",
  ]),
  //1183 ,),

  new Trait("male", ["crazy hair", "mole"]),
  //1184 ,),

  new Trait("male", ["handlebars", "mohawk", "vape", "vr"]),
  //1185 ,),

  new Trait("female", [
    "bandana",
    "black lipstick",
    "earring",
    "purple eye shadow",
  ]),
  //1186 ,),

  new Trait("female", ["cigarette", "straight hair"]),
  //1187 ,),

  new Trait("male", ["3d glasses", "normal beard", "wild hair"]),
  //1188 ,),

  new Trait("male", ["mohawk thin", "spots"]),
  //1189 ,),

  new Trait("zombie", ["bandana", "cigarette", "earring", "handlebars"]),
  //1190 ,),

  new Trait("male", ["front beard", "messy hair"]),
  //1191 ,),

  new Trait("male", ["earring", "goat", "purple hair"]),
  //1192 ,),

  new Trait("male", ["crazy hair", "mustache", "smile", "spots"]),
  //1193 ,),

  new Trait("male", ["goat", "mohawk"]),
  //1194 ,),

  new Trait("male", ["eye patch", "headband"]),
  //1195 ,),

  new Trait("female", ["clown eyes green", "earring", "mohawk dark"]),
  //1196 ,),

  new Trait("female", ["blonde short"]),
  //1197 ,),

  new Trait("female", [
    "clown hair green",
    "gold chain",
    "horned rim glasses",
    "hot lipstick",
  ]),
  //1198 ,),

  new Trait("female", ["earring", "green eye shadow", "tassle hat"]),
  //1199 ,),

  new Trait("female", ["black lipstick"]),
  //1200 ,),

  new Trait("male", ["knitted cap", "normal beard black"]),
  //1201 ,),

  new Trait("male", ["big beard", "mohawk dark"]),
  //1202 ,),

  new Trait("male", ["big beard", "nerd glasses", "wild hair"]),
  //1203 ,),

  new Trait("female", ["hot lipstick", "pigtails"]),
  //1204 ,),

  new Trait("female", ["crazy hair", "earring"]),
  //1205 ,),

  new Trait("female", ["half shaved", "purple lipstick"]),
  //1206 ,),

  new Trait("male", ["fedora", "front beard"]),
  //1207 ,),

  new Trait("male", ["bandana"]),
  //1208 ,),

  new Trait("female", ["mohawk dark", "vr"]),
  //1209 ,),

  new Trait("female", [
    "cigarette",
    "purple eye shadow",
    "purple lipstick",
    "wild blonde",
  ]),
  //1210 ,),

  new Trait("male", ["cap forward", "smile"]),
  //1211 ,),

  new Trait("female", ["green eye shadow", "wild hair"]),
  //1212 ,),

  new Trait("male", ["luxurious beard", "mohawk"]),
  //1213 ,),

  new Trait("female", ["eye patch", "half shaved", "purple lipstick"]),
  //1214 ,),

  new Trait("male", ["earring", "headband"]),
  //1215 ,),

  new Trait("male", ["purple hair"]),
  //1216 ,),

  new Trait("female", ["bandana", "purple lipstick"]),
  //1217 ,),

  new Trait("male", ["stringy hair"]),
  //1218 ,),

  new Trait("male", ["eye patch", "hoodie"]),
  //1219 ,),

  new Trait("female", ["pink with hat", "purple lipstick"]),
  //1220 ,),

  new Trait("male", ["cowboy hat"]),
  //1221 ,),

  new Trait("male", [
    "big beard",
    "crazy hair",
    "earring",
    "horned rim glasses",
  ]),
  //1222 ,),

  new Trait("male", ["cap", "handlebars"]),
  //1223 ,),

  new Trait("female", ["cigarette", "headband", "purple eye shadow"]),
  //1224 ,),

  new Trait("female", ["black lipstick", "earring", "straight hair blonde"]),
  //1225 ,),

  new Trait("male", ["earring", "medical mask", "messy hair", "shadow beard"]),
  //1226 ,),

  new Trait("female", ["earring", "purple lipstick", "wild blonde"]),
  //1227 ,),

  new Trait("male", ["classic shades", "fedora", "handlebars"]),
  //1228 ,),

  new Trait("male", ["clown hair green", "goat"]),
  //1229 ,),

  new Trait("male", ["frumpy hair", "vr"]),
  //1230 ,),

  new Trait("male", ["bandana", "cigarette", "eye mask", "front beard"]),
  //1231 ,),

  new Trait("female", ["pigtails"]),
  //1232 ,),

  new Trait("female", ["hot lipstick", "knitted cap", "vape"]),
  //1233 ,),

  new Trait("female", ["blue eye shadow", "stringy hair"]),
  //1234 ,),

  new Trait("male", ["cigarette", "goat", "horned rim glasses", "knitted cap"]),
  //1235 ,),

  new Trait("male", ["mohawk", "muttonchops"]),
  //1236 ,),

  new Trait("female", ["pigtails"]),
  //1237 ,),

  new Trait("male", ["do-rag", "regular shades"]),
  //1238 ,),

  new Trait("male", ["big shades", "cap forward"]),
  //1239 ,),

  new Trait("male", ["3d glasses", "messy hair"]),
  //1240 ,),

  new Trait("male", ["goat", "shaved head"]),
  //1241 ,),

  new Trait("male", ["cap", "shadow beard"]),
  //1242 ,),

  new Trait("female", ["purple eye shadow", "wild blonde"]),
  //1243 ,),

  new Trait("male", ["mole", "purple hair"]),
  //1244 ,),

  new Trait("female", [
    "blonde short",
    "clown eyes green",
    "earring",
    "hot lipstick",
  ]),
  //1245 ,),

  new Trait("female", ["dark hair", "earring", "hot lipstick", "nerd glasses"]),
  //1246 ,),

  new Trait("female", ["clown eyes green", "crazy hair", "purple lipstick"]),
  //1247 ,),

  new Trait("female", ["earring", "mohawk thin"]),
  //1248 ,),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "earring",
    "mohawk thin",
  ]),
  //1249 ,),

  new Trait("male", ["hoodie", "mole", "pipe", "small shades"]),
  //1250 ,),

  new Trait("female", ["black lipstick", "blonde bob", "nerd glasses"]),
  //1251 ,),

  new Trait("male", ["bandana", "earring", "luxurious beard"]),
  //1252 ,),

  new Trait("female", ["blonde bob", "earring", "purple lipstick"]),
  //1253 ,),

  new Trait("male", ["clown eyes green", "earring", "mohawk thin"]),
  //1254 ,),

  new Trait("female", ["hot lipstick", "knitted cap"]),
  //1255 ,),

  new Trait("male", ["do-rag", "earring", "regular shades"]),
  //1256 ,),

  new Trait("male", ["classic shades", "do-rag", "earring"]),
  //1257 ,),

  new Trait("male", ["big shades", "cap", "earring"]),
  //1258 ,),

  new Trait("male", [
    "earring",
    "front beard dark",
    "shaved head",
    "small shades",
  ]),
  //1259 ,),

  new Trait("female", ["big shades", "crazy hair", "earring", "rosy cheeks"]),
  //1260 ,),

  new Trait("female", ["blonde bob", "clown eyes green"]),
  //1261 ,),

  new Trait("male", ["earring", "normal beard", "purple hair"]),
  //1262 ,),

  new Trait("male", ["normal beard", "wild hair"]),
  //1263 ,),

  new Trait("female", ["classic shades", "straight hair"]),
  //1264 ,),

  new Trait("female", ["dark hair", "earring", "eye mask", "purple lipstick"]),
  //1265 ,),

  new Trait("male", ["cap", "smile"]),
  //1266 ,),

  new Trait("female", ["crazy hair", "purple eye shadow"]),
  //1267 ,),

  new Trait("female", ["clown hair green", "earring"]),
  //1268 ,),

  new Trait("male", ["cap forward", "chinstrap", "eye patch"]),
  //1269 ,),

  new Trait("male", ["crazy hair", "regular shades", "shadow beard"]),
  //1270 ,),

  new Trait("male", ["big shades", "earring", "pipe", "purple hair", "spots"]),
  //1271 ,),

  new Trait("female", ["tassle hat", "vr"]),
  //1272 ,),

  new Trait("female", ["cigarette", "dark hair"]),
  //1273 ,),

  new Trait("male", ["regular shades", "shadow beard", "top hat"]),
  //1274 ,),

  new Trait("male", ["chinstrap", "knitted cap"]),
  //1275 ,),

  new Trait("female", ["black lipstick", "messy hair", "purple eye shadow"]),
  //1276 ,),

  new Trait("female", ["earring", "hot lipstick", "mohawk thin"]),
  //1277 ,),

  new Trait("male", ["mohawk dark", "normal beard black"]),
  //1278 ,),

  new Trait("male", ["earring", "police cap"]),
  //1279 ,),

  new Trait("male", ["clown nose", "messy hair", "small shades"]),
  //1280 ,),

  new Trait("male", ["cigarette", "messy hair"]),
  //1281 ,),

  new Trait("male", ["big shades", "peak spike"]),
  //1282 ,),

  new Trait("male", ["earring", "eye mask", "handlebars", "peak spike"]),
  //1283 ,),

  new Trait("male", ["big shades", "crazy hair", "mustache"]),
  //1284 ,),

  new Trait("male", ["earring", "mustache", "regular shades", "top hat"]),
  //1285 ,),

  new Trait("male", ["cigarette", "stringy hair"]),
  //1286 ,),

  new Trait("male", ["cap", "silver chain"]),
  //1287 ,),

  new Trait("male", ["cap forward", "pipe"]),
  //1288 ,),

  new Trait("female", ["dark hair", "eye patch", "purple lipstick"]),
  //1289 ,),

  new Trait("male", ["front beard", "shaved head"]),
  //1290 ,),

  new Trait("female", ["frumpy hair", "nerd glasses", "purple lipstick"]),
  //1291 ,),

  new Trait("male", ["classic shades", "muttonchops", "stringy hair"]),
  //1292 ,),

  new Trait("female", ["green eye shadow", "pipe", "straight hair blonde"]),
  //1293 ,),

  new Trait("male", ["fedora", "front beard dark", "mole"]),
  //1294 ,),

  new Trait("female", [
    "black lipstick",
    "clown eyes blue",
    "earring",
    "stringy hair",
  ]),
  //1295 ,),

  new Trait("female", ["clown eyes blue", "earring", "wild hair"]),
  //1296 ,),

  new Trait("male", ["earring", "mohawk dark", "small shades"]),
  //1297 ,),

  new Trait("male", ["cap forward", "front beard dark"]),
  //1298 ,),

  new Trait("female", ["frumpy hair", "hot lipstick", "purple eye shadow"]),
  //1299 ,),

  new Trait("male", ["eye patch", "muttonchops", "stringy hair"]),
  //1300 ,),

  new Trait("male", ["crazy hair", "earring"]),
  //1301 ,),

  new Trait("female", ["classic shades", "headband"]),
  //1302 ,),

  new Trait("male", ["cowboy hat", "frown", "handlebars"]),
  //1303 ,),

  new Trait("male", ["earring", "goat", "knitted cap"]),
  //1304 ,),

  new Trait("male", ["fedora", "shadow beard"]),
  //1305 ,),

  new Trait("male", ["earring", "stringy hair"]),
  //1306 ,),

  new Trait("male", ["nerd glasses", "stringy hair"]),
  //1307 ,),

  new Trait("male", ["normal beard black", "purple hair"]),
  //1308 ,),

  new Trait("male", ["chinstrap", "horned rim glasses", "knitted cap"]),
  //1309 ,),

  new Trait("male", ["classic shades", "stringy hair", "vape"]),
  //1310 ,),

  new Trait("female", ["hot lipstick", "messy hair", "spots"]),
  //1311 ,),

  new Trait("male", ["do-rag", "mole", "small shades"]),
  //1312 ,),

  new Trait("female", ["cigarette", "wild hair"]),
  //1313 ,),

  new Trait("male", ["bandana", "earring", "eye mask"]),
  //1314 ,),

  new Trait("female", ["stringy hair"]),
  //1315 ,),

  new Trait("male", ["front beard dark", "frumpy hair"]),
  //1316 ,),

  new Trait("male", ["eye patch", "normal beard black", "police cap"]),
  //1317 ,),

  new Trait("female", ["blue eye shadow", "clown nose", "straight hair"]),
  //1318 ,),

  new Trait("male", ["luxurious beard", "peak spike"]),
  //1319 ,),

  new Trait("male", ["earring", "eye mask", "mustache", "purple hair"]),
  //1320 ,),

  new Trait("male", ["classic shades", "shaved head"]),
  //1321 ,),

  new Trait("male", ["earring", "mole", "shaved head"]),
  //1322 ,),

  new Trait("male", ["mole", "wild hair"]),
  //1323 ,),

  new Trait("male", ["earring", "frumpy hair", "regular shades"]),
  //1324 ,),

  new Trait("male", ["big shades", "frumpy hair"]),
  //1325 ,),

  new Trait("male", ["3d glasses", "shaved head"]),
  //1326 ,),

  new Trait("male", ["chinstrap", "fedora"]),
  //1327 ,),

  new Trait("female", ["big shades", "half shaved"]),
  //1328 ,),

  new Trait("female", ["blonde short", "mole", "regular shades"]),
  //1329 ,),

  new Trait("male", ["police cap"]),
  //1330 ,),

  new Trait("male", ["normal beard", "peak spike"]),
  //1331 ,),

  new Trait("female", ["crazy hair", "earring"]),
  //1332 ,),

  new Trait("female", ["eye patch", "silver chain", "wild white hair"]),
  //1333 ,),

  new Trait("male", ["eye patch", "mohawk thin"]),
  //1334 ,),

  new Trait("male", ["cap", "shadow beard"]),
  //1335 ,),

  new Trait("male", ["front beard", "frumpy hair", "horned rim glasses"]),
  //1336 ,),

  new Trait("male", ["bandana", "handlebars"]),
  //1337 ,),

  new Trait("male", ["shaved head", "smile"]),
  //1338 ,),

  new Trait("female", ["black lipstick", "green eye shadow", "stringy hair"]),
  //1339 ,),

  new Trait("female", ["clown eyes green", "mohawk dark"]),
  //1340 ,),

  new Trait("female", ["horned rim glasses", "wild blonde"]),
  //1341 ,),

  new Trait("female", ["black lipstick", "cigarette", "messy hair"]),
  //1342 ,),

  new Trait("male", ["earring", "wild hair"]),
  //1343 ,),

  new Trait("male", ["messy hair", "mustache"]),
  //1344 ,),

  new Trait("female", ["clown eyes blue", "mole", "stringy hair"]),
  //1345 ,),

  new Trait("female", ["black lipstick", "green eye shadow", "wild blonde"]),
  //1346 ,),

  new Trait("male", ["frumpy hair", "goat"]),
  //1347 ,),

  new Trait("male", [
    "3d glasses",
    "crazy hair",
    "earring",
    "normal beard black",
  ]),
  //1348 ,),

  new Trait("male", ["mustache", "wild hair"]),
  //1349 ,),

  new Trait("female", ["black lipstick", "stringy hair"]),
  //1350 ,),

  new Trait("male", [
    "knitted cap",
    "mustache",
    "regular shades",
    "silver chain",
  ]),
  //1351 ,),

  new Trait("female", ["half shaved", "horned rim glasses"]),
  //1352 ,),

  new Trait("male", ["crazy hair", "nerd glasses"]),
  //1353 ,),

  new Trait("female", ["pigtails", "regular shades"]),
  //1354 ,),

  new Trait("female", ["blonde bob"]),
  //1355 ,),

  new Trait("male", ["bandana", "eye mask"]),
  //1356 ,),

  new Trait("female", [
    "classic shades",
    "hot lipstick",
    "mole",
    "straight hair dark",
  ]),
  //1357 ,),

  new Trait("male", [
    "earring",
    "gold chain",
    "mohawk",
    "shadow beard",
    "vape",
  ]),
  //1358 ,),

  new Trait("male", ["headband", "smile"]),
  //1359 ,),

  new Trait("male", ["cigarette", "stringy hair"]),
  //1360 ,),

  new Trait("male", ["3d glasses", "mohawk"]),
  //1361 ,),

  new Trait("male", ["spots", "stringy hair"]),
  //1362 ,),

  new Trait("male", [
    "front beard",
    "horned rim glasses",
    "spots",
    "wild hair",
  ]),
  //1363 ,),

  new Trait("female", ["hot lipstick", "pink with hat"]),
  //1364 ,),

  new Trait("male", ["mohawk dark", "normal beard", "vr"]),
  //1365 ,),

  new Trait("male", [
    "earring",
    "frumpy hair",
    "horned rim glasses",
    "shadow beard",
  ]),
  //1366 ,),

  new Trait("female", ["mohawk dark", "purple lipstick", "welding goggles"]),
  //1367 ,),

  new Trait("male", [
    "earring",
    "eye patch",
    "knitted cap",
    "normal beard black",
  ]),
  //1368 ,),

  new Trait("female", ["clown eyes blue", "knitted cap"]),
  //1369 ,),

  new Trait("male", ["earring", "handlebars", "messy hair", "vape"]),
  //1370 ,),

  new Trait("female", ["blue eye shadow", "tiara"]),
  //1371 ,),

  new Trait("female", ["dark hair", "horned rim glasses"]),
  //1372 ,),

  new Trait("male", ["classic shades", "earring", "frumpy hair"]),
  //1373 ,),

  new Trait("zombie", ["big shades", "earring", "mohawk dark"]),
  //1374 ,),

  new Trait("male", ["cigarette", "eye patch", "shaved head"]),
  //1375 ,),

  new Trait("male", ["earring", "luxurious beard", "messy hair"]),
  //1376 ,),

  new Trait("female", ["cigarette", "hot lipstick", "mohawk thin"]),
  //1377 ,),

  new Trait("male", ["chinstrap", "wild hair"]),
  //1378 ,),

  new Trait("female", ["headband", "purple eye shadow", "purple lipstick"]),
  //1379 ,),

  new Trait("male", ["bandana", "classic shades", "shadow beard", "smile"]),
  //1380 ,),

  new Trait("male", ["front beard", "stringy hair"]),
  //1381 ,),

  new Trait("female", ["cigarette", "clown nose", "earring", "stringy hair"]),
  //1382 ,),

  new Trait("male", ["classic shades", "wild hair"]),
  //1383 ,),

  new Trait("male", ["cigarette", "mohawk thin"]),
  //1384 ,),

  new Trait("male", ["goat", "peak spike", "small shades"]),
  //1385 ,),

  new Trait("female", ["clown nose", "mole", "tassle hat"]),
  //1386 ,),

  new Trait("male", ["earring", "frumpy hair"]),
  //1387 ,),

  new Trait("female", ["black lipstick", "straight hair"]),
  //1388 ,),

  new Trait("female", ["black lipstick", "straight hair blonde", "vr"]),
  //1389 ,),

  new Trait("female", ["blonde bob", "blue eye shadow", "earring"]),
  //1390 ,),

  new Trait("male", ["clown nose", "eye patch", "hoodie"]),
  //1391 ,),

  new Trait("female", ["classic shades", "stringy hair"]),
  //1392 ,),

  new Trait("male", [
    "big shades",
    "medical mask",
    "mohawk thin",
    "normal beard",
  ]),
  //1393 ,),

  new Trait("male", ["cigarette", "peak spike"]),
  //1394 ,),

  new Trait("male", ["luxurious beard", "mohawk"]),
  //1395 ,),

  new Trait("male", ["earring", "frumpy hair", "gold chain"]),
  //1396 ,),

  new Trait("male", ["do-rag", "horned rim glasses", "mustache"]),
  //1397 ,),

  new Trait("male", ["bandana", "shadow beard", "spots"]),
  //1398 ,),

  new Trait("female", ["black lipstick", "earring", "wild hair"]),
  //1399 ,),

  new Trait("male", ["chinstrap", "eye mask", "knitted cap", "mole"]),
  //1400 ,),

  new Trait("male", ["normal beard", "peak spike"]),
  //1401 ,),

  new Trait("male", ["clown eyes blue", "knitted cap", "shadow beard"]),
  //1402 ,),

  new Trait("male", ["small shades", "stringy hair"]),
  //1403 ,),

  new Trait("male", ["do-rag", "handlebars"]),
  //1404 ,),

  new Trait("male", ["cigarette", "clown eyes blue", "mohawk"]),
  //1405 ,),

  new Trait("male", ["cap forward", "front beard"]),
  //1406 ,),

  new Trait("male", ["medical mask", "mohawk"]),
  //1407 ,),

  new Trait("male", ["mohawk", "nerd glasses"]),
  //1408 ,),

  new Trait("male", ["earring", "police cap"]),
  //1409 ,),

  new Trait("female", ["black lipstick", "mohawk"]),
  //1410 ,),

  new Trait("female", ["blonde bob", "regular shades"]),
  //1411 ,),

  new Trait("male", ["chinstrap", "messy hair", "small shades"]),
  //1412 ,),

  new Trait("female", ["black lipstick", "cigarette", "frumpy hair"]),
  //1413 ,),

  new Trait("female", ["blonde bob", "clown eyes blue", "earring"]),
  //1414 ,),

  new Trait("female", ["black lipstick", "cap", "clown eyes blue"]),
  //1415 ,),

  new Trait("female", ["classic shades", "stringy hair"]),
  //1417 ,),

  new Trait("female", ["black lipstick", "frumpy hair", "regular shades"]),
  //1418 ,),

  new Trait("male", ["big shades", "frumpy hair"]),
  //1419 ,),

  new Trait("female", ["blonde bob", "blue eye shadow", "purple lipstick"]),
  //1420 ,),

  new Trait("male", ["big shades", "purple hair"]),
  //1421 ,),

  new Trait("male", ["clown eyes blue", "hoodie", "pipe"]),
  //1422 ,),

  new Trait("male", ["mohawk thin", "small shades"]),
  //1423 ,),

  new Trait("male", ["cigarette", "goat", "headband", "nerd glasses"]),
  //1424 ,),

  new Trait("male", ["chinstrap", "smile", "vampire hair"]),
  //1425 ,),

  new Trait("female", ["medical mask", "stringy hair"]),
  //1426 ,),

  new Trait("female", ["bandana", "cigarette"]),
  //1427 ,),

  new Trait("female", ["blonde short", "clown eyes blue"]),
  //1428 ,),

  new Trait("male", ["frown", "peak spike"]),
  //1429 ,),

  new Trait("male", ["chinstrap", "do-rag", "earring", "horned rim glasses"]),
  //1430 ,),

  new Trait("male", ["eye mask", "luxurious beard", "mohawk"]),
  //1431 ,),

  new Trait("male", ["big shades", "do-rag"]),
  //1432 ,),

  new Trait("female", ["gold chain", "pilot helmet"]),
  //1433 ,),

  new Trait("female", ["earring", "eye patch", "straight hair blonde"]),
  //1434 ,),

  new Trait("male", ["clown eyes green", "earring", "headband", "muttonchops"]),
  //1435 ,),

  new Trait("male", ["mohawk", "mole"]),
  //1436 ,),

  new Trait("male", ["goat", "wild hair"]),
  //1437 ,),

  new Trait("female", ["pilot helmet"]),
  //1438 ,),

  new Trait("male", ["3d glasses", "earring", "muttonchops", "stringy hair"]),
  //1439 ,),

  new Trait("male", ["earring", "headband"]),
  //1440 ,),

  new Trait("female", [
    "earring",
    "eye mask",
    "frumpy hair",
    "purple lipstick",
  ]),
  //1441 ,),

  new Trait("female", ["crazy hair", "earring", "eye mask"]),
  //1442 ,),

  new Trait("male", ["cap", "small shades"]),
  //1443 ,),

  new Trait("female", ["bandana", "classic shades"]),
  //1444 ,),

  new Trait("male", ["front beard dark", "headband"]),
  //1445 ,),

  new Trait("female", ["hot lipstick", "pigtails"]),
  //1446 ,),

  new Trait("male", ["cigarette", "eye patch", "frown", "hoodie"]),
  //1447 ,),

  new Trait("male", ["frumpy hair", "pipe", "vr"]),
  //1448 ,),

  new Trait("female", ["bandana", "big shades"]),
  //1449 ,),

  new Trait("female", ["3d glasses", "hot lipstick", "mohawk dark"]),
  //1450 ,),

  new Trait("male", ["bandana", "classic shades", "earring"]),
  //1451 ,),

  new Trait("female", ["bandana", "earring", "mole", "purple lipstick"]),
  //1452 ,),

  new Trait("female", ["blonde bob", "clown eyes blue", "purple lipstick"]),
  //1453 ,),

  new Trait("female", ["earring", "red mohawk"]),
  //1454 ,),

  new Trait("female", [
    "earring",
    "purple lipstick",
    "regular shades",
    "wild blonde",
  ]),
  //1455 ,),

  new Trait("male", ["headband", "mole"]),
  //1456 ,),

  new Trait("female", ["cigarette", "mohawk thin", "regular shades"]),
  //1457 ,),

  new Trait("male", ["cigarette", "earring", "peak spike"]),
  //1458 ,),

  new Trait("male", ["luxurious beard", "messy hair", "nerd glasses"]),
  //1459 ,),

  new Trait("male", ["3d glasses", "messy hair"]),
  //1460 ,),

  new Trait("female", ["clown eyes blue", "straight hair"]),
  //1461 ,),

  new Trait("male", ["big beard", "earring", "eye patch", "headband"]),
  //1462 ,),

  new Trait("male", ["cigarette", "earring", "mohawk thin"]),
  //1463 ,),

  new Trait("male", ["do-rag", "mole"]),
  //1464 ,),

  new Trait("male", ["cigarette", "mohawk dark", "regular shades"]),
  //1465 ,),

  new Trait("male", ["clown eyes green", "stringy hair"]),
  //1466 ,),

  new Trait("female", ["green eye shadow", "wild hair"]),
  //1467 ,),

  new Trait("female", ["hot lipstick", "straight hair dark"]),
  //1468 ,),

  new Trait("male", ["muttonchops", "regular shades", "stringy hair"]),
  //1469 ,),

  new Trait("female", ["mohawk thin", "purple lipstick", "welding goggles"]),
  //1470 ,),

  new Trait("female", ["blue eye shadow", "cap"]),
  //1471 ,),

  new Trait("male", ["eye mask", "hoodie"]),
  //1472 ,),

  new Trait("male", ["chinstrap", "earring", "messy hair"]),
  //1473 ,),

  new Trait("male", ["big shades", "gold chain", "peak spike"]),
  //1474 ,),

  new Trait("female", ["earring", "mohawk", "vr"]),
  //1475 ,),

  new Trait("female", ["dark hair", "earring", "pipe"]),
  //1476 ,),

  new Trait("female", ["big shades", "earring", "straight hair"]),
  //1477 ,),

  new Trait("zombie", ["shadow beard", "wild hair"]),
  //1478 ,),

  new Trait("female", ["crazy hair", "vr"]),
  //1479 ,),

  new Trait("male", ["chinstrap", "small shades", "stringy hair"]),
  //1480 ,),

  new Trait("male", ["mohawk dark", "rosy cheeks"]),
  //1481 ,),

  new Trait("male", ["cigarette", "mohawk"]),
  //1482 ,),

  new Trait("male", ["3d glasses", "frown", "top hat"]),
  //1483 ,),

  new Trait("male", ["earring", "handlebars", "hoodie"]),
  //1484 ,),

  new Trait("female", ["cap", "earring", "purple eye shadow"]),
  //1485 ,),

  new Trait("male", ["big shades", "mohawk thin", "muttonchops"]),
  //1486 ,),

  new Trait("female", ["black lipstick", "frumpy hair"]),
  //1487 ,),

  new Trait("male", ["3d glasses", "shaved head"]),
  //1488 ,),

  new Trait("female", ["earring", "purple lipstick", "wild white hair"]),
  //1489 ,),

  new Trait("male", ["cap", "clown eyes green", "earring"]),
  //1490 ,),

  new Trait("female", ["blue eye shadow", "clown hair green", "earring"]),
  //1491 ,),

  new Trait("male", ["big beard", "police cap", "vr"]),
  //1492 ,),

  new Trait("female", [
    "blonde bob",
    "cigarette",
    "hot lipstick",
    "mole",
    "regular shades",
  ]),
  //1493 ,),

  new Trait("female", ["black lipstick", "eye patch", "wild white hair"]),
  //1494 ,),

  new Trait("female", ["dark hair", "hot lipstick"]),
  //1495 ,),

  new Trait("female", ["blonde short", "welding goggles"]),
  //1496 ,),

  new Trait("male", ["earring", "knitted cap", "shadow beard"]),
  //1497 ,),

  new Trait("female", ["big shades", "crazy hair", "earring"]),
  //1498 ,),

  new Trait("male", ["crazy hair", "spots"]),
  //1499 ,),

  new Trait("female", ["hot lipstick", "mohawk thin"]),
  //1500 ,),

  new Trait("male", ["police cap", "shadow beard"]),
  //1501 ,),

  new Trait("male", ["eye mask", "shaved head"]),
  //1502 ,),

  new Trait("male", ["headband", "horned rim glasses", "shadow beard"]),
  //1503 ,),

  new Trait("female", [
    "black lipstick",
    "earring",
    "frumpy hair",
    "green eye shadow",
  ]),
  //1504 ,),

  new Trait("male", ["cigarette", "knitted cap", "vr"]),
  //1505 ,),

  new Trait("male", ["handlebars", "medical mask", "peak spike"]),
  //1506 ,),

  new Trait("male", ["cowboy hat", "earring", "smile"]),
  //1507 ,),

  new Trait("female", [
    "black lipstick",
    "choker",
    "horned rim glasses",
    "mohawk dark",
  ]),
  //1508 ,),

  new Trait("male", ["chinstrap", "nerd glasses", "peak spike"]),
  //1509 ,),

  new Trait("male", ["3d glasses", "cap"]),
  //1510 ,),

  new Trait("male", ["goat", "messy hair"]),
  //1511 ,),

  new Trait("female", ["mohawk thin", "mole"]),
  //1512 ,),

  new Trait("female", [
    "black lipstick",
    "frumpy hair",
    "mole",
    "welding goggles",
  ]),
  //1513 ,),

  new Trait("female", ["hot lipstick", "pink with hat", "regular shades"]),
  //1514 ,),

  new Trait("male", ["front beard dark", "mohawk dark", "vr"]),
  //1515 ,),

  new Trait("male", ["knitted cap", "mole"]),
  //1516 ,),

  new Trait("male", ["earring", "knitted cap", "small shades"]),
  //1517 ,),

  new Trait("male", ["classic shades", "knitted cap", "mustache"]),
  //1518 ,),

  new Trait("male", ["messy hair"]),
  //1519 ,),

  new Trait("female", ["clown eyes green", "medical mask", "mohawk dark"]),
  //1520 ,),

  new Trait("male", ["crazy hair", "mustache"]),
  //1521 ,),

  new Trait("male", ["classic shades", "muttonchops", "purple hair"]),
  //1522 ,),

  new Trait("female", ["blue eye shadow", "pigtails"]),
  //1523 ,),

  new Trait("male", ["earring", "frumpy hair"]),
  //1524 ,),

  new Trait("male", ["bandana", "normal beard", "small shades"]),
  //1525 ,),

  new Trait("zombie", ["cap", "eye patch", "gold chain"]),
  //1526 ,),

  new Trait("female", ["black lipstick", "half shaved", "mole"]),
  //1527 ,),

  new Trait("male", ["3d glasses", "bandana", "front beard dark"]),
  //1528 ,),

  new Trait("female", ["pipe", "red mohawk"]),
  //1529 ,),

  new Trait("male", ["eye patch", "knitted cap"]),
  //1530 ,),

  new Trait("male", ["peak spike", "regular shades"]),
  //1531 ,),

  new Trait("male", ["mohawk thin", "nerd glasses"]),
  //1532 ,),

  new Trait("male", ["cigarette", "headband"]),
  //1533 ,),

  new Trait("male", ["bandana", "muttonchops", "vape"]),
  //1534 ,),

  new Trait("female", ["classic shades", "dark hair", "earring"]),
  //1535 ,),

  new Trait("male", ["buck teeth", "crazy hair", "normal beard"]),
  //1536 ,),

  new Trait("male", ["vampire hair"]),
  //1537 ,),

  new Trait("male", ["cap", "earring", "mustache"]),
  //1538 ,),

  new Trait("male", ["classic shades", "mohawk thin"]),
  //1539 ,),

  new Trait("male", ["cigarette", "knitted cap"]),
  //1540 ,),

  new Trait("male", ["crazy hair", "mustache", "pipe"]),
  //1541 ,),

  new Trait("male", ["luxurious beard", "mohawk thin"]),
  //1542 ,),

  new Trait("male", ["do-rag", "eye mask"]),
  //1543 ,),

  new Trait("female", [
    "earring",
    "green eye shadow",
    "half shaved",
    "purple lipstick",
  ]),
  //1544 ,),

  new Trait("female", ["big shades", "frumpy hair"]),
  //1545 ,),

  new Trait("male", ["handlebars", "peak spike", "regular shades"]),
  //1546 ,),

  new Trait("female", ["blonde short", "choker"]),
  //1547 ,),

  new Trait("female", ["earring", "mohawk thin", "purple lipstick"]),
  //1548 ,),

  new Trait("male", ["cap forward"]),
  //1549 ,),

  new Trait("female", ["knitted cap", "purple lipstick"]),
  //1550 ,),

  new Trait("male", ["earring", "shaved head"]),
  //1551 ,),

  new Trait("female", ["dark hair", "regular shades"]),
  //1552 ,),

  new Trait("male", ["cigarette", "earring", "peak spike"]),
  //1553 ,),

  new Trait("female", ["purple lipstick", "tassle hat", "vape"]),
  //1554 ,),

  new Trait("male", ["fedora", "mustache"]),
  //1555 ,),

  new Trait("female", ["earring", "pigtails", "purple lipstick"]),
  //1556 ,),

  new Trait("male", ["knitted cap", "muttonchops"]),
  //1557 ,),

  new Trait("male", ["normal beard black"]),
  //1558 ,),

  new Trait("male", ["clown hair green"]),
  //1559 ,),

  new Trait("male", ["smile", "wild hair"]),
  //1560 ,),

  new Trait("female", ["clown hair green", "earring", "hot lipstick", "mole"]),
  //1561 ,),

  new Trait("male", ["clown eyes blue"]),
  //1562 ,),

  new Trait("female", ["clown eyes blue", "dark hair", "earring"]),
  //1563 ,),

  new Trait("male", ["medical mask", "wild hair"]),
  //1564 ,),

  new Trait("male", ["handlebars", "wild hair"]),
  //1565 ,),

  new Trait("female", ["headband", "hot lipstick", "pipe"]),
  //1566 ,),

  new Trait("male", ["eye mask", "goat", "shaved head"]),
  //1567 ,),

  new Trait("male", ["clown eyes green", "hoodie", "mustache"]),
  //1568 ,),

  new Trait("female", ["earring", "mohawk dark", "mole"]),
  //1569 ,),

  new Trait("male", ["headband", "horned rim glasses", "muttonchops"]),
  //1570 ,),

  new Trait("male", ["cap forward", "front beard dark"]),
  //1571 ,),

  new Trait("male", ["crazy hair", "muttonchops", "small shades"]),
  //1572 ,),

  new Trait("female", ["black lipstick", "crazy hair"]),
  //1573 ,),

  new Trait("male", ["3d glasses", "do-rag"]),
  //1574 ,),

  new Trait("male", ["goat", "shaved head", "vr"]),
  //1575 ,),

  new Trait("male", ["hoodie", "small shades"]),
  //1576 ,),

  new Trait("male", ["clown hair green", "normal beard"]),
  //1577 ,),

  new Trait("female", [
    "blue eye shadow",
    "dark hair",
    "medical mask",
    "rosy cheeks",
  ]),
  //1578 ,),

  new Trait("female", ["3d glasses", "tiara"]),
  //1579 ,),

  new Trait("male", ["classic shades", "messy hair", "pipe"]),
  //1580 ,),

  new Trait("male", ["messy hair", "muttonchops"]),
  //1581 ,),

  new Trait("female", ["messy hair", "vr"]),
  //1582 ,),

  new Trait("female", ["black lipstick", "straight hair"]),
  //1583 ,),

  new Trait("male", ["handlebars", "vampire hair"]),
  //1584 ,),

  new Trait("male", ["frown", "shaved head", "small shades"]),
  //1585 ,),

  new Trait("male", ["crazy hair", "horned rim glasses"]),
  //1586 ,),

  new Trait("female", ["3d glasses", "bandana"]),
  //1587 ,),

  new Trait("female", ["clown eyes blue", "tassle hat"]),
  //1588 ,),

  new Trait("male", ["chinstrap", "fedora"]),
  //1589 ,),

  new Trait("male", ["normal beard black", "small shades", "vampire hair"]),
  //1590 ,),

  new Trait("female", ["mohawk thin"]),
  //1591 ,),

  new Trait("male", ["mohawk dark", "nerd glasses"]),
  //1592 ,),

  new Trait("female", ["purple lipstick", "red mohawk"]),
  //1593 ,),

  new Trait("male", ["goat", "mohawk dark"]),
  //1594 ,),

  new Trait("female", ["clown eyes blue", "straight hair blonde"]),
  //1595 ,),

  new Trait("female", ["blonde short", "earring", "green eye shadow"]),
  //1596 ,),

  new Trait("male", ["goat", "messy hair"]),
  //1597 ,),

  new Trait("female", [
    "blue eye shadow",
    "earring",
    "purple lipstick",
    "tassle hat",
  ]),
  //1598 ,),

  new Trait("female", [
    "clown eyes blue",
    "earring",
    "mohawk thin",
    "purple lipstick",
  ]),
  //1599 ,),

  new Trait("male", ["goat", "silver chain", "vampire hair"]),
  //1600 ,),

  new Trait("male", ["classic shades", "knitted cap"]),
  //1601 ,),

  new Trait("male", ["eye patch", "goat", "mohawk thin"]),
  //1602 ,),

  new Trait("female", ["purple eye shadow", "tiara"]),
  //1603 ,),

  new Trait("female", ["black lipstick", "nerd glasses", "wild hair"]),
  //1604 ,),

  new Trait("male", ["earring", "frown", "shadow beard", "shaved head", "vr"]),
  //1605 ,),

  new Trait("male", [
    "cigarette",
    "front beard dark",
    "mole",
    "nerd glasses",
    "police cap",
  ]),
  //1606 ,),

  new Trait("male", ["earring", "handlebars", "headband"]),
  //1607 ,),

  new Trait("male", [
    "cigarette",
    "cowboy hat",
    "eye patch",
    "normal beard black",
  ]),
  //1608 ,),

  new Trait("female", ["pilot helmet", "purple lipstick"]),
  //1609 ,),

  new Trait("male", ["front beard dark", "wild hair"]),
  //1610 ,),

  new Trait("male", ["mohawk thin", "vr"]),
  //1611 ,),

  new Trait("female", ["half shaved", "hot lipstick"]),
  //1612 ,),

  new Trait("male", ["cigarette", "earring", "headband"]),
  //1613 ,),

  new Trait("male", ["earring", "frumpy hair", "handlebars"]),
  //1614 ,),

  new Trait("male", ["chinstrap", "hoodie"]),
  //1615 ,),

  new Trait("female", ["bandana", "black lipstick"]),
  //1616 ,),

  new Trait("male", ["do-rag", "front beard dark"]),
  //1617 ,),

  new Trait("female", ["clown eyes green", "frumpy hair", "hot lipstick"]),
  //1618 ,),

  new Trait("female", ["green eye shadow", "stringy hair"]),
  //1619 ,),

  new Trait("female", ["cigarette", "clown eyes blue", "earring"]),
  //1620 ,),

  new Trait("female", ["black lipstick", "cigarette", "clown hair green"]),
  //1621 ,),

  new Trait("male", ["earring", "knitted cap", "regular shades"]),
  //1622 ,),

  new Trait("female", ["3d glasses", "straight hair"]),
  //1623 ,),

  new Trait("male", ["bandana", "chinstrap", "earring", "eye patch"]),
  //1624 ,),

  new Trait("male", ["cap", "mole"]),
  //1625 ,),

  new Trait("female", ["3d glasses", "messy hair", "purple lipstick"]),
  //1626 ,),

  new Trait("male", ["normal beard black", "police cap"]),
  //1627 ,),

  new Trait("female", ["hot lipstick", "stringy hair"]),
  //1628 ,),

  new Trait("female", ["black lipstick", "pink with hat"]),
  //1629 ,),

  new Trait("male", ["shadow beard", "top hat"]),
  //1630 ,),

  new Trait("male", ["police cap", "small shades"]),
  //1631 ,),

  new Trait("male", ["handlebars", "top hat"]),
  //1632 ,),

  new Trait("male", ["bandana", "cigarette", "mole"]),
  //1633 ,),

  new Trait("female", [
    "black lipstick",
    "clown eyes blue",
    "mole",
    "wild blonde",
  ]),
  //1634 ,),

  new Trait("female", ["earring", "hot lipstick", "orange side"]),
  //1635 ,),

  new Trait("male", [
    "cigarette",
    "do-rag",
    "frown",
    "normal beard black",
    "regular shades",
  ]),
  //1636 ,),

  new Trait("female", ["3d glasses", "hot lipstick", "wild blonde"]),
  //1637 ,),

  new Trait("male", ["do-rag", "front beard dark"]),
  //1638 ,),

  new Trait("male", ["mohawk", "shadow beard"]),
  //1639 ,),

  new Trait("male", ["fedora", "mustache", "vr"]),
  //1640 ,),

  new Trait("male", ["frown", "knitted cap", "mole"]),
  //1641 ,),

  new Trait("male", ["mohawk dark", "mole", "normal beard"]),
  //1642 ,),

  new Trait("male", ["frumpy hair", "smile"]),
  //1643 ,),

  new Trait("male", ["big beard", "hoodie"]),
  //1644 ,),

  new Trait("female", ["earring", "purple lipstick", "tassle hat"]),
  //1645 ,),

  new Trait("male", ["earring", "knitted cap", "luxurious beard"]),
  //1646 ,),

  new Trait("male", ["eye mask", "purple hair"]),
  //1647 ,),

  new Trait("female", ["clown eyes green", "mohawk thin", "purple lipstick"]),
  //1648 ,),

  new Trait("male", [
    "crazy hair",
    "earring",
    "regular shades",
    "shadow beard",
  ]),
  //1649 ,),

  new Trait("male", ["clown nose", "messy hair", "normal beard black"]),
  //1650 ,),

  new Trait("male", ["beanie", "big shades", "muttonchops"]),
  //1651 ,),

  new Trait("female", ["cigarette", "earring", "hot lipstick", "tassle hat"]),
  //1652 ,),

  new Trait("male", ["clown eyes green", "earring", "hoodie", "normal beard"]),
  //1653 ,),

  new Trait("female", ["medical mask", "mohawk"]),
  //1654 ,),

  new Trait("male", ["clown eyes green", "frown", "peak spike"]),
  //1655 ,),

  new Trait("male", ["buck teeth", "purple hair", "regular shades"]),
  //1656 ,),

  new Trait("male", ["cap", "horned rim glasses"]),
  //1657 ,),

  new Trait("zombie", ["stringy hair"]),
  //1658 ,),

  new Trait("female", ["purple eye shadow", "straight hair"]),
  //1659 ,),

  new Trait("male", ["bandana", "normal beard"]),
  //1660 ,),

  new Trait("female", ["black lipstick", "blonde short", "nerd glasses"]),
  //1661 ,),

  new Trait("female", [
    "mole",
    "purple eye shadow",
    "purple lipstick",
    "straight hair dark",
  ]),
  //1662 ,),

  new Trait("male", ["mole", "purple hair", "regular shades"]),
  //1663 ,),

  new Trait("female", ["cap", "purple lipstick"]),
  //1664 ,),

  new Trait("male", ["cap forward", "cigarette"]),
  //1665 ,),

  new Trait("female", [
    "purple lipstick",
    "regular shades",
    "straight hair dark",
  ]),
  //1666 ,),

  new Trait("male", ["frumpy hair", "luxurious beard"]),
  //1667 ,),

  new Trait("male", ["earring", "goat", "mohawk dark"]),
  //1668 ,),

  new Trait("female", ["red mohawk", "welding goggles"]),
  //1669 ,),

  new Trait("female", ["earring", "purple eye shadow", "stringy hair"]),
  //1670 ,),

  new Trait("female", ["blue eye shadow", "straight hair"]),
  //1671 ,),

  new Trait("female", ["mohawk dark", "mole"]),
  //1672 ,),

  new Trait("male", ["classic shades", "headband"]),
  //1673 ,),

  new Trait("male", ["hoodie", "shadow beard"]),
  //1674 ,),

  new Trait("male", ["earring", "police cap", "regular shades"]),
  //1675 ,),

  new Trait("male", ["frumpy hair", "mole"]),
  //1676 ,),

  new Trait("male", ["front beard dark"]),
  //1677 ,),

  new Trait("female", ["clown eyes green", "purple lipstick"]),
  //1678 ,),

  new Trait("female", [
    "cigarette",
    "earring",
    "horned rim glasses",
    "purple lipstick",
    "tassle hat",
  ]),
  //1679 ,),

  new Trait("male", ["chinstrap", "headband", "vape"]),
  //1680 ,),

  new Trait("female", ["red mohawk"]),
  //1681 ,),

  new Trait("male", ["3d glasses", "chinstrap", "top hat"]),
  //1682 ,),

  new Trait("male", ["big shades", "mohawk dark", "mustache"]),
  //1683 ,),

  new Trait("female", ["choker", "orange side"]),
  //1684 ,),

  new Trait("male", ["hoodie", "nerd glasses"]),
  //1685 ,),

  new Trait("male", ["big shades", "messy hair"]),
  //1686 ,),

  new Trait("male", ["horned rim glasses", "top hat"]),
  //1687 ,),

  new Trait("female", ["clown eyes green", "purple lipstick", "stringy hair"]),
  //1688 ,),

  new Trait("female", ["black lipstick", "straight hair"]),
  //1689 ,),

  new Trait("male", ["bandana", "horned rim glasses", "mole"]),
  //1690 ,),

  new Trait("female", ["black lipstick", "clown eyes green", "straight hair"]),
  //1691 ,),

  new Trait("male", ["cigarette", "knitted cap", "shadow beard"]),
  //1692 ,),

  new Trait("female", ["clown eyes green", "crazy hair"]),
  //1693 ,),

  new Trait("female", ["black lipstick", "earring", "pink with hat"]),
  //1694 ,),

  new Trait("male", ["chinstrap", "earring", "shaved head"]),
  //1695 ,),

  new Trait("male", ["shadow beard", "stringy hair"]),
  //1696 ,),

  new Trait("female", ["big shades", "mohawk thin", "mole"]),
  //1697 ,),

  new Trait("male", ["clown eyes green", "wild hair"]),
  //1698 ,),

  new Trait("male", ["earring", "shaved head"]),
  //1699 ,),

  new Trait("female", ["blue eye shadow", "half shaved"]),
  //1700 ,),

  new Trait("male", ["earring", "horned rim glasses", "mohawk"]),
  //1701 ,),

  new Trait("male", ["clown hair green", "front beard", "frown"]),
  //1702 ,),

  new Trait("male", ["3d glasses", "do-rag", "muttonchops", "rosy cheeks"]),
  //1703 ,),

  new Trait("male", ["cigarette", "classic shades", "peak spike"]),
  //1704 ,),

  new Trait("female", ["mohawk", "nerd glasses"]),
  //1705 ,),

  new Trait("female", ["black lipstick", "red mohawk"]),
  //1706 ,),

  new Trait("female", ["clown eyes blue", "purple lipstick", "wild hair"]),
  //1707 ,),

  new Trait("male", ["fedora"]),
  //1708 ,),

  new Trait("male", ["front beard", "peak spike"]),
  //1709 ,),

  new Trait("female", ["classic shades", "orange side", "pipe"]),
  //1710 ,),

  new Trait("female", ["eye mask", "straight hair dark"]),
  //1711 ,),

  new Trait("male", ["police cap", "regular shades"]),
  //1712 ,),

  new Trait("female", ["earring", "stringy hair"]),
  //1713 ,),

  new Trait("female", ["choker", "classic shades", "straight hair blonde"]),
  //1714 ,),

  new Trait("female", ["green eye shadow", "half shaved"]),
  //1715 ,),

  new Trait("male", ["mohawk thin", "shadow beard"]),
  //1716 ,),

  new Trait("male", ["bandana", "chinstrap", "earring", "eye patch"]),
  //1717 ,),

  new Trait("male", ["luxurious beard", "mole"]),
  //1718 ,),

  new Trait("male", ["cap forward", "earring", "nerd glasses"]),
  //1719 ,),

  new Trait("male", ["big shades", "cowboy hat", "normal beard"]),
  //1720 ,),

  new Trait("female", ["black lipstick", "earring", "pigtails"]),
  //1721 ,),

  new Trait("male", ["fedora", "nerd glasses", "normal beard black"]),
  //1722 ,),

  new Trait("male", ["cap", "nerd glasses"]),
  //1723 ,),

  new Trait("female", ["clown eyes blue", "mohawk"]),
  //1724 ,),

  new Trait("female", ["hot lipstick", "messy hair"]),
  //1725 ,),

  new Trait("female", ["clown hair green", "hot lipstick", "mole", "vape"]),
  //1726 ,),

  new Trait("male", ["3d glasses", "stringy hair"]),
  //1727 ,),

  new Trait("male", ["frown", "mohawk thin", "small shades"]),
  //1728 ,),

  new Trait("male", ["gold chain", "luxurious beard", "nerd glasses"]),
  //1729 ,),

  new Trait("female", ["green eye shadow", "pink with hat"]),
  //1730 ,),

  new Trait("male", ["cap forward", "eye patch"]),
  //1731 ,),

  new Trait("male", ["3d glasses", "earring", "police cap"]),
  //1732 ,),

  new Trait("female", ["mohawk thin", "regular shades"]),
  //1733 ,),

  new Trait("female", ["black lipstick", "clown eyes green", "mohawk thin"]),
  //1734 ,),

  new Trait("female", ["earring", "mohawk dark"]),
  //1735 ,),

  new Trait("female", ["black lipstick", "straight hair dark"]),
  //1736 ,),

  new Trait("male", ["mohawk", "vr"]),
  //1737 ,),

  new Trait("female", ["blonde bob", "purple lipstick"]),
  //1738 ,),

  new Trait("male", ["shaved head", "vr"]),
  //1739 ,),

  new Trait("female", ["bandana", "hot lipstick"]),
  //1740 ,),

  new Trait("male", ["big shades"]),
  //1741 ,),

  new Trait("female", ["big shades", "stringy hair"]),
  //1742 ,),

  new Trait("male", ["big shades", "wild hair"]),
  //1743 ,),

  new Trait("female", ["big shades", "clown nose", "straight hair dark"]),
  //1744 ,),

  new Trait("male", ["3d glasses", "do-rag"]),
  //1745 ,),

  new Trait("female", ["dark hair", "earring", "green eye shadow"]),
  //1746 ,),

  new Trait("female", ["clown eyes green", "mohawk"]),
  //1747 ,),

  new Trait("zombie", ["front beard", "frown", "knitted cap"]),
  //1748 ,),

  new Trait("female", ["blonde bob", "hot lipstick", "nerd glasses"]),
  //1749 ,),

  new Trait("female", ["eye mask", "purple lipstick", "wild blonde"]),
  //1750 ,),

  new Trait("female", ["horned rim glasses", "pigtails"]),
  //1751 ,),

  new Trait("female", ["black lipstick", "earring", "half shaved"]),
  //1752 ,),

  new Trait("male", ["frumpy hair", "spots"]),
  //1753 ,),

  new Trait("female", ["clown eyes green", "mohawk"]),
  //1754 ,),

  new Trait("male", ["crazy hair", "gold chain", "vr"]),
  //1755 ,),

  new Trait("male", ["cigarette", "front beard", "knitted cap"]),
  //1756 ,),

  new Trait("male", ["nerd glasses", "shaved head"]),
  //1757 ,),

  new Trait("female", ["earring", "mohawk", "regular shades"]),
  //1758 ,),

  new Trait("female", ["hot lipstick", "pilot helmet"]),
  //1759 ,),

  new Trait("male", ["cap", "cigarette", "nerd glasses"]),
  //1760 ,),

  new Trait("female", ["blue eye shadow", "half shaved"]),
  //1761 ,),

  new Trait("male", ["earring", "frumpy hair", "rosy cheeks", "small shades"]),
  //1762 ,),

  new Trait("male", ["muttonchops", "purple hair", "regular shades"]),
  //1763 ,),

  new Trait("male", ["big shades", "earring", "frumpy hair"]),
  //1764 ,),

  new Trait("female", ["clown hair green", "purple eye shadow"]),
  //1765 ,),

  new Trait("female", ["clown eyes blue", "straight hair blonde"]),
  //1766 ,),

  new Trait("male", ["bandana", "front beard dark"]),
  //1767 ,),

  new Trait("female", ["3d glasses", "black lipstick", "crazy hair"]),
  //1768 ,),

  new Trait("male", ["cap forward", "mustache"]),
  //1769 ,),

  new Trait("male", ["frumpy hair", "regular shades", "smile"]),
  //1770 ,),

  new Trait("male", ["cap", "cigarette", "earring"]),
  //1771 ,),

  new Trait("female", ["blue eye shadow", "messy hair"]),
  //1772 ,),

  new Trait("male", ["eye patch", "muttonchops", "vampire hair"]),
  //1773 ,),

  new Trait("male", ["knitted cap", "nerd glasses"]),
  //1774 ,),

  new Trait("female", ["earring", "purple eye shadow", "tiara"]),
  //1775 ,),

  new Trait("female", ["hot lipstick", "mohawk thin"]),
  //1776 ,),

  new Trait("male", ["gold chain", "vampire hair"]),
  //1777 ,),

  new Trait("male", ["do-rag", "muttonchops"]),
  //1778 ,),

  new Trait("female", ["cap", "clown eyes green", "purple lipstick"]),
  //1779 ,),

  new Trait("female", ["horned rim glasses", "wild white hair"]),
  //1780 ,),

  new Trait("male", ["headband", "normal beard"]),
  //1781 ,),

  new Trait("male", ["cowboy hat", "earring", "handlebars"]),
  //1782 ,),

  new Trait("female", ["mohawk thin"]),
  //1783 ,),

  new Trait("male", ["classic shades", "crazy hair", "medical mask"]),
  //1784 ,),

  new Trait("male", ["earring", "wild hair"]),
  //1785 ,),

  new Trait("female", ["classic shades", "wild hair"]),
  //1786 ,),

  new Trait("male", ["bandana", "small shades"]),
  //1787 ,),

  new Trait("male", ["classic shades", "earring", "mohawk"]),
  //1788 ,),

  new Trait("female", ["blonde short", "purple eye shadow"]),
  //1789 ,),

  new Trait("male", ["headband", "horned rim glasses", "mole"]),
  //1790 ,),

  new Trait("male", ["classic shades", "mole"]),
  //1791 ,),

  new Trait("male", ["earring", "mohawk thin", "normal beard black"]),
  //1792 ,),

  new Trait("female", ["mohawk thin", "rosy cheeks"]),
  //1793 ,),

  new Trait("male", ["earring", "frown", "wild hair"]),
  //1794 ,),

  new Trait("female", [
    "horned rim glasses",
    "hot lipstick",
    "messy hair",
    "rosy cheeks",
  ]),
  //1795 ,),

  new Trait("female", ["bandana", "black lipstick", "rosy cheeks"]),
  //1796 ,),

  new Trait("male", ["classic shades", "mohawk", "muttonchops", "vape"]),
  //1797 ,),

  new Trait("male", ["cap forward", "earring", "medical mask"]),
  //1798 ,),

  new Trait("female", ["black lipstick", "classic shades", "half shaved"]),
  //1799 ,),

  new Trait("female", [
    "blue eye shadow",
    "mole",
    "purple lipstick",
    "stringy hair",
  ]),
  //1800 ,),

  new Trait("female", ["crazy hair", "spots"]),
  //1801 ,),

  new Trait("male", ["big beard", "cigarette", "fedora", "nerd glasses"]),
  //1802 ,),

  new Trait("female", ["frumpy hair", "hot lipstick", "nerd glasses"]),
  //1803 ,),

  new Trait("female", ["messy hair", "mole"]),
  //1804 ,),

  new Trait("male", ["do-rag", "regular shades"]),
  //1805 ,),

  new Trait("female", ["dark hair", "eye patch", "hot lipstick"]),
  //1806 ,),

  new Trait("female", ["messy hair", "purple eye shadow"]),
  //1807 ,),

  new Trait("male", ["earring", "front beard", "messy hair"]),
  //1808 ,),

  new Trait("male", ["cap", "cigarette", "mustache"]),
  //1809 ,),

  new Trait("male", ["big shades", "wild hair"]),
  //1810 ,),

  new Trait("male", ["pipe", "vampire hair"]),
  //1811 ,),

  new Trait("male", ["earring", "headband", "nerd glasses", "normal beard"]),
  //1812 ,),

  new Trait("female", ["black lipstick", "classic shades", "mohawk dark"]),
  //1813 ,),

  new Trait("male", ["knitted cap", "muttonchops"]),
  //1814 ,),

  new Trait("female", ["green eye shadow", "mohawk"]),
  //1815 ,),

  new Trait("female", ["blonde short", "cigarette"]),
  //1816 ,),

  new Trait("female", ["crazy hair", "earring", "purple lipstick"]),
  //1817 ,),

  new Trait("female", ["blonde short", "mole"]),
  //1818 ,),

  new Trait("male", ["big beard", "classic shades", "earring", "police cap"]),
  //1819 ,),

  new Trait("male", ["big beard", "eye mask", "messy hair"]),
  //1820 ,),

  new Trait("female", ["welding goggles"]),
  //1821 ,),

  new Trait("male", ["cap", "normal beard black", "small shades"]),
  //1822 ,),

  new Trait("male", ["earring", "goat", "shaved head"]),
  //1823 ,),

  new Trait("male", ["knitted cap", "normal beard"]),
  //1824 ,),

  new Trait("male", ["muttonchops", "police cap"]),
  //1825 ,),

  new Trait("female", ["clown nose", "frumpy hair", "horned rim glasses"]),
  //1826 ,),

  new Trait("female", ["green eye shadow", "mohawk thin"]),
  //1827 ,),

  new Trait("female", ["black lipstick", "blonde bob", "earring"]),
  //1828 ,),

  new Trait("female", ["classic shades", "mohawk dark"]),
  //1829 ,),

  new Trait("male", ["earring", "front beard dark", "knitted cap"]),
  //1830 ,),

  new Trait("male", [
    "bandana",
    "big beard",
    "horned rim glasses",
    "medical mask",
  ]),
  //1831 ,),

  new Trait("male", ["horned rim glasses", "messy hair"]),
  //1832 ,),

  new Trait("male", ["frumpy hair", "handlebars", "nerd glasses"]),
  //1833 ,),

  new Trait("male", ["cap", "earring", "mole"]),
  //1834 ,),

  new Trait("female", ["blue eye shadow", "frumpy hair", "hot lipstick"]),
  //1835 ,),

  new Trait("male", ["cap forward", "horned rim glasses"]),
  //1836 ,),

  new Trait("female", ["black lipstick", "crazy hair"]),
  //1837 ,),

  new Trait("male", [
    "cigarette",
    "earring",
    "knitted cap",
    "mustache",
    "nerd glasses",
    "smile",
  ]),
  //1839 ,),

  new Trait("male", ["cigarette", "earring", "mohawk dark"]),
  //1840 ,),

  new Trait("male", ["bandana", "eye patch"]),
  //1842 ,),

  new Trait("male", ["earring", "luxurious beard", "wild hair"]),
  //1843 ,),

  new Trait("female", ["blonde short", "regular shades"]),
  //1844 ,),

  new Trait("male", ["mohawk dark", "regular shades"]),
  //1845 ,),

  new Trait("male", ["cowboy hat", "luxurious beard"]),
  //1846 ,),

  new Trait("female", ["black lipstick", "earring", "mohawk"]),
  //1847 ,),

  new Trait("male", ["clown eyes blue", "stringy hair"]),
  //1848 ,),

  new Trait("female", ["black lipstick", "dark hair", "green eye shadow"]),
  //1849 ,),

  new Trait("female", ["black lipstick", "wild blonde"]),
  //1850 ,),

  new Trait("male", ["eye mask", "frown", "handlebars", "purple hair"]),
  //1851 ,),

  new Trait("male", ["earring", "mohawk dark"]),
  //1852 ,),

  new Trait("male", ["cap forward", "earring", "front beard dark"]),
  //1853 ,),

  new Trait("female", [
    "blonde short",
    "earring",
    "hot lipstick",
    "welding goggles",
  ]),
  //1854 ,),

  new Trait("female", ["bandana", "earring"]),
  //1855 ,),

  new Trait("female", ["earring", "horned rim glasses", "mohawk thin"]),
  //1856 ,),

  new Trait("female", ["black lipstick", "eye mask", "straight hair dark"]),
  //1857 ,),

  new Trait("male", ["big shades", "stringy hair"]),
  //1858 ,),

  new Trait("female", ["crazy hair", "purple eye shadow"]),
  //1859 ,),

  new Trait("female", ["purple eye shadow", "wild white hair"]),
  //1860 ,),

  new Trait("female", ["blue eye shadow", "earring", "messy hair"]),
  //1861 ,),

  new Trait("male", ["eye patch", "messy hair"]),
  //1862 ,),

  new Trait("male", [
    "earring",
    "eye patch",
    "front beard dark",
    "shaved head",
  ]),
  //1863 ,),

  new Trait("male", ["clown eyes blue", "clown hair green", "mole"]),
  //1864 ,),

  new Trait("female", ["blonde short", "welding goggles"]),
  //1865 ,),

  new Trait("female", ["blonde bob", "purple lipstick"]),
  //1866 ,),

  new Trait("male", ["messy hair", "muttonchops", "regular shades"]),
  //1867 ,),

  new Trait("female", ["blue eye shadow", "headband"]),
  //1868 ,),

  new Trait("female", ["vr", "wild blonde"]),
  //1869 ,),

  new Trait("female", ["knitted cap", "medical mask"]),
  //1870 ,),

  new Trait("male", ["headband", "smile"]),
  //1871 ,),

  new Trait("female", ["half shaved", "regular shades"]),
  //1872 ,),

  new Trait("female", ["cigarette", "straight hair dark"]),
  //1873 ,),

  new Trait("male", ["earring", "headband", "muttonchops"]),
  //1874 ,),

  new Trait("female", ["hot lipstick", "straight hair blonde"]),
  //1875 ,),

  new Trait("female", ["clown eyes green", "hot lipstick", "wild blonde"]),
  //1876 ,),

  new Trait("female", ["earring", "knitted cap", "purple eye shadow"]),
  //1877 ,),

  new Trait("male", ["big shades", "earring", "hoodie", "vape"]),
  //1878 ,),

  new Trait("male", ["earring", "frumpy hair", "nerd glasses", "normal beard"]),
  //1879 ,),

  new Trait("male", ["fedora", "small shades"]),
  //1880 ,),

  new Trait("female", ["mole", "purple lipstick", "straight hair dark"]),
  //1881 ,),

  new Trait("male", ["muttonchops", "wild hair"]),
  //1882 ,),

  new Trait("female", ["purple lipstick"]),
  //1883 ,),

  new Trait("male", ["chinstrap", "peak spike", "silver chain"]),
  //1884 ,),

  new Trait("female", ["green eye shadow", "tassle hat"]),
  //1885 ,),

  new Trait("zombie", ["messy hair", "shadow beard"]),
  //1886 ,),

  new Trait("male", ["nerd glasses", "police cap"]),
  //1887 ,),

  new Trait("female", ["earring", "wild blonde"]),
  //1888 ,),

  new Trait("male", ["luxurious beard", "peak spike"]),
  //1889 ,),

  new Trait("male", [
    "cigarette",
    "earring",
    "front beard dark",
    "knitted cap",
  ]),
  //1890 ,),

  new Trait("male", ["cigarette", "police cap"]),
  //1891 ,),

  new Trait("female", ["cap"]),
  //1892 ,),

  new Trait("female", ["clown eyes blue", "hot lipstick", "stringy hair"]),
  //1893 ,),

  new Trait("male", ["eye mask", "stringy hair"]),
  //1894 ,),

  new Trait("female", ["bandana", "black lipstick", "horned rim glasses"]),
  //1895 ,),

  new Trait("male", ["cap", "nerd glasses"]),
  //1896 ,),

  new Trait("male", ["goat", "mohawk dark", "vr"]),
  //1897 ,),

  new Trait("male", ["earring", "front beard dark", "headband"]),
  //1898 ,),

  new Trait("male", ["frumpy hair", "normal beard black"]),
  //1899 ,),

  new Trait("female", ["black lipstick", "mohawk dark", "mole"]),
  //1900 ,),

  new Trait("male", ["headband", "mustache", "regular shades"]),
  //1901 ,),

  new Trait("female", ["bandana", "purple lipstick"]),
  //1902 ,),

  new Trait("male", ["beanie"]),
  //1903 ,),

  new Trait("male", ["cigarette", "frumpy hair"]),
  //1904 ,),

  new Trait("male", ["frumpy hair", "horned rim glasses"]),
  //1905 ,),

  new Trait("female", ["purple eye shadow", "straight hair blonde"]),
  //1906 ,),

  new Trait("female", ["blue eye shadow", "dark hair", "purple lipstick"]),
  //1907 ,),

  new Trait("male", ["headband", "horned rim glasses"]),
  //1908 ,),

  new Trait("male", ["bandana", "big shades", "goat"]),
  //1909 ,),

  new Trait("female", ["crazy hair", "earring", "mole", "purple eye shadow"]),
  //1910 ,),

  new Trait("female", ["cigarette", "green eye shadow", "orange side"]),
  //1911 ,),

  new Trait("male", ["classic shades", "frown", "peak spike"]),
  //1912 ,),

  new Trait("female", ["earring", "hot lipstick", "straight hair"]),
  //1913 ,),

  new Trait("female", [
    "classic shades",
    "frumpy hair",
    "gold chain",
    "hot lipstick",
  ]),
  //1914 ,),

  new Trait("female", ["black lipstick", "mohawk"]),
  //1915 ,),

  new Trait("male", ["do-rag", "normal beard black"]),
  //1916 ,),

  new Trait("female", ["frumpy hair", "purple eye shadow"]),
  //1917 ,),

  new Trait("female", ["blonde bob", "earring", "hot lipstick"]),
  //1918 ,),

  new Trait("male", ["frown", "peak spike"]),
  //1919 ,),

  new Trait("male", ["earring", "goat", "mohawk dark"]),
  //1920 ,),

  new Trait("male", ["cap", "clown eyes green", "earring", "mole"]),
  //1921 ,),

  new Trait("male", ["knitted cap", "vr"]),
  //1922 ,),

  new Trait("male", ["goat", "vape", "wild hair"]),
  //1923 ,),

  new Trait("female", ["blue eye shadow", "dark hair"]),
  //1924 ,),

  new Trait("male", ["classic shades", "hoodie"]),
  //1925 ,),

  new Trait("female", ["blonde short", "hot lipstick"]),
  //1926 ,),

  new Trait("male", ["mohawk thin", "muttonchops"]),
  //1927 ,),

  new Trait("male", ["clown eyes green", "crazy hair"]),
  //1928 ,),

  new Trait("male", ["front beard dark", "police cap"]),
  //1929 ,),

  new Trait("female", ["clown eyes blue", "crazy hair"]),
  //1930 ,),

  new Trait("female", ["earring", "pilot helmet"]),
  //1931 ,),

  new Trait("male", ["big shades", "earring", "muttonchops", "wild hair"]),
  //1932 ,),

  new Trait("male", ["eye patch", "knitted cap"]),
  //1933 ,),

  new Trait("male", ["fedora", "normal beard", "small shades"]),
  //1934 ,),

  new Trait("zombie", ["earring", "shaved head"]),
  //1935 ,),

  new Trait("female", ["half shaved", "hot lipstick"]),
  //1936 ,),

  new Trait("female", [
    "blue eye shadow",
    "earring",
    "purple lipstick",
    "straight hair",
  ]),
  //1937 ,),

  new Trait("male", ["earring", "muttonchops", "vampire hair"]),
  //1938 ,),

  new Trait("female", ["bandana", "pipe"]),
  //1939 ,),

  new Trait("female", ["black lipstick", "green eye shadow", "knitted cap"]),
  //1940 ,),

  new Trait("male", ["earring", "luxurious beard", "wild hair"]),
  //1941 ,),

  new Trait("male", ["bandana", "chinstrap"]),
  //1942 ,),

  new Trait("male", ["front beard dark", "knitted cap"]),
  //1943 ,),

  new Trait("female", ["cigarette", "wild hair"]),
  //1944 ,),

  new Trait("male", ["classic shades", "earring", "messy hair"]),
  //1945 ,),

  new Trait("male", ["eye patch", "hoodie"]),
  //1946 ,),

  new Trait("male", ["muttonchops", "shaved head"]),
  //1947 ,),

  new Trait("male", [
    "classic shades",
    "earring",
    "mohawk dark",
    "shadow beard",
  ]),
  //1948 ,),

  new Trait("female", ["big shades", "hot lipstick", "vape"]),
  //1949 ,),

  new Trait("male", ["cigarette", "shaved head"]),
  //1950 ,),

  new Trait("female", ["earring", "half shaved", "vr"]),
  //1951 ,),

  new Trait("female", ["clown eyes green", "pigtails", "purple lipstick"]),
  //1952 ,),

  new Trait("female", ["purple lipstick"]),
  //1953 ,),

  new Trait("male", ["buck teeth", "muttonchops", "wild hair"]),
  //1954 ,),

  new Trait("male", ["chinstrap", "earring", "knitted cap", "medical mask"]),
  //1955 ,),

  new Trait("female", ["clown eyes blue", "wild blonde"]),
  //1956 ,),

  new Trait("male", ["3d glasses", "mohawk dark"]),
  //1957 ,),

  new Trait("female", ["blonde short", "hot lipstick"]),
  //1958 ,),

  new Trait("female", ["big shades", "wild blonde"]),
  //1959 ,),

  new Trait("male", ["cap", "earring"]),
  //1960 ,),

  new Trait("male", ["crazy hair", "earring", "front beard dark"]),
  //1961 ,),

  new Trait("female", ["earring", "green eye shadow", "headband"]),
  //1962 ,),

  new Trait("female", ["medical mask"]),
  //1963 ,),

  new Trait("male", ["big beard"]),
  //1964 ,),

  new Trait("male", ["clown eyes green", "earring", "mohawk"]),
  //1965 ,),

  new Trait("male", ["normal beard black", "stringy hair"]),
  //1966 ,),

  new Trait("female", ["black lipstick", "choker", "wild hair"]),
  //1967 ,),

  new Trait("male", [
    "big beard",
    "earring",
    "mohawk dark",
    "mole",
    "regular shades",
  ]),
  //1968 ,),

  new Trait("male", ["horned rim glasses", "messy hair"]),
  //1969 ,),

  new Trait("male", ["crazy hair", "goat"]),
  //1970 ,),

  new Trait("female", ["dark hair", "green eye shadow", "hot lipstick"]),
  //1971 ,),

  new Trait("female", ["choker", "half shaved"]),
  //1972 ,),

  new Trait("male", ["cigarette", "horned rim glasses"]),
  //1973 ,),

  new Trait("female", [
    "black lipstick",
    "earring",
    "nerd glasses",
    "red mohawk",
  ]),
  //1974 ,),

  new Trait("male", ["clown eyes green", "do-rag", "front beard dark"]),
  //1975 ,),

  new Trait("male", ["frumpy hair", "small shades"]),
  //1976 ,),

  new Trait("female", ["green eye shadow", "mohawk"]),
  //1977 ,),

  new Trait("male", ["chinstrap", "crazy hair", "eye patch"]),
  //1978 ,),

  new Trait("female", ["gold chain", "red mohawk"]),
  //1979 ,),

  new Trait("female", ["blonde bob", "regular shades"]),
  //1980 ,),

  new Trait("male", ["frumpy hair", "nerd glasses"]),
  //1981 ,),

  new Trait("female", [
    "green eye shadow",
    "hot lipstick",
    "straight hair dark",
  ]),
  //1982 ,),

  new Trait("male", ["cap forward", "earring", "normal beard black"]),
  //1983 ,),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "earring",
    "straight hair",
  ]),
  //1984 ,),

  new Trait("female", ["blonde short", "clown eyes blue", "hot lipstick"]),
  //1985 ,),

  new Trait("female", ["clown eyes blue", "earring", "wild blonde"]),
  //1986 ,),

  new Trait("male", ["front beard dark", "regular shades", "stringy hair"]),
  //1987 ,),

  new Trait("female", ["bandana", "clown eyes green", "purple lipstick"]),
  //1988 ,),

  new Trait("male", ["crazy hair", "small shades"]),
  //1989 ,),

  new Trait("female", [
    "blue eye shadow",
    "earring",
    "purple lipstick",
    "tassle hat",
  ]),
  //1990 ,),

  new Trait("male", ["fedora", "normal beard", "regular shades"]),
  //1991 ,),

  new Trait("male", ["frumpy hair", "regular shades"]),
  //1992 ,),

  new Trait("male", ["crazy hair", "luxurious beard"]),
  //1993 ,),

  new Trait("female", ["blonde bob", "classic shades"]),
  //1994 ,),

  new Trait("male", ["cap", "front beard", "mole"]),
  //1995 ,),

  new Trait("female", ["dark hair", "pipe"]),
  //1996 ,),

  new Trait("male", ["cigarette", "clown nose", "frumpy hair"]),
  //1997 ,),

  new Trait("male", ["big shades", "earring", "shaved head"]),
  //1998 ,),

  new Trait("male", ["cowboy hat", "front beard"]),
  //1999 ,),

  new Trait("female", ["big shades", "earring", "tiara"]),
  //2000 ,),

  new Trait("female", ["earring", "purple lipstick", "stringy hair"]),
  //2001 ,),

  new Trait("male", ["messy hair", "shadow beard"]),
  //2002 ,),

  new Trait("female", ["big shades", "earring", "tiara"]),
  //2000 ,),

  new Trait("female", ["earring", "purple lipstick", "stringy hair"]),
  //2001 ,),

  new Trait("male", ["messy hair", "shadow beard"]),
  //2002 ,),

  new Trait("male", ["headband", "horned rim glasses"]),
  //2003 ,),

  new Trait("male", ["eye patch", "frumpy hair", "handlebars"]),
  //2004 ,),

  new Trait("male", ["horned rim glasses", "knitted cap"]),
  //2005 ,),

  new Trait("male", ["cigarette", "crazy hair", "earring", "front beard dark"]),
  //2006 ,),

  new Trait("female", ["blonde bob", "hot lipstick"]),
  //2007 ,),

  new Trait("female", ["earring", "red mohawk"]),
  //2008 ,),

  new Trait("male", ["earring", "normal beard", "police cap"]),
  //2009 ,),

  new Trait("male", ["classic shades", "front beard dark", "purple hair"]),
  //2010 ,),

  new Trait("male", ["cap forward", "muttonchops", "nerd glasses"]),
  //2011 ,),

  new Trait("female", ["cigarette", "frumpy hair", "hot lipstick"]),
  //2012 ,),

  new Trait("female", ["mohawk dark"]),
  //2013 ,),

  new Trait("female", ["green eye shadow", "hot lipstick", "tassle hat"]),
  //2014 ,),

  new Trait("female", ["earring", "nerd glasses", "pink with hat"]),
  //2015 ,),

  new Trait("female", ["earring", "pigtails"]),
  //2016 ,),

  new Trait("female", ["messy hair", "mole"]),
  //2017 ,),

  new Trait("female", ["blonde bob", "clown eyes blue", "vape"]),
  //2018 ,),

  new Trait("female", ["clown eyes green", "mohawk dark"]),
  //2019 ,),

  new Trait("male", ["classic shades", "cowboy hat"]),
  //2020 ,),

  new Trait("male", ["bandana", "nerd glasses"]),
  //2021 ,),

  new Trait("female", ["green eye shadow", "straight hair"]),
  //2022 ,),

  new Trait("female", ["green eye shadow", "messy hair", "mole"]),
  //2023 ,),

  new Trait("male", ["goat", "knitted cap", "nerd glasses"]),
  //2024 ,),

  new Trait("male", ["mohawk dark", "small shades"]),
  //2025 ,),

  new Trait("male", ["cigarette", "horned rim glasses", "peak spike"]),
  //2026 ,),

  new Trait("male", ["3d glasses", "knitted cap"]),
  //2027 ,),

  new Trait("male", ["crazy hair", "earring", "front beard dark"]),
  //2028 ,),

  new Trait("male", ["cowboy hat", "horned rim glasses"]),
  //2029 ,),

  new Trait("female", ["3d glasses", "crazy hair", "earring"]),
  //2030 ,),

  new Trait("male", ["cigarette", "small shades", "wild hair"]),
  //2031 ,),

  new Trait("male", ["earring", "frown", "frumpy hair", "shadow beard"]),
  //2032 ,),

  new Trait("female", [
    "clown eyes blue",
    "gold chain",
    "mole",
    "purple lipstick",
    "straight hair dark",
  ]),
  //2033 ,),

  new Trait("female", ["purple eye shadow", "wild white hair"]),
  //2034 ,),

  new Trait("male", ["cap", "shadow beard", "vr"]),
  //2035 ,),

  new Trait("male", ["cigarette", "handlebars", "shaved head"]),
  //2036 ,),

  new Trait("female", ["frumpy hair", "hot lipstick", "mole"]),
  //2037 ,),

  new Trait("male", ["cap forward", "earring", "mole"]),
  //2038 ,),

  new Trait("female", ["green eye shadow", "purple lipstick", "stringy hair"]),
  //2039 ,),

  new Trait("male", ["headband", "mole"]),
  //2040 ,),

  new Trait("female", ["cigarette"]),
  //2041 ,),

  new Trait("male", ["3d glasses", "crazy hair"]),
  //2042 ,),

  new Trait("male", ["front beard dark", "stringy hair"]),
  //2043 ,),

  new Trait("male", ["handlebars", "police cap"]),
  //2044 ,),

  new Trait("male", ["front beard", "regular shades", "wild hair"]),
  //2045 ,),

  new Trait("female", ["clown eyes blue", "earring", "straight hair dark"]),
  //2046 ,),

  new Trait("female", ["half shaved", "mole"]),
  //2047 ,),

  new Trait("male", ["front beard dark", "hoodie", "vr"]),
  //2048 ,),

  new Trait("male", ["chinstrap", "do-rag", "earring", "pipe", "vr"]),
  //2049 ,),

  new Trait("male", [
    "do-rag",
    "earring",
    "front beard dark",
    "regular shades",
  ]),
  //2050 ,),

  new Trait("male", ["front beard", "hoodie"]),
  //2051 ,),

  new Trait("female", ["cap"]),
  //2052 ,),

  new Trait("female", ["big shades", "mohawk"]),
  //2053 ,),

  new Trait("female", [
    "clown eyes green",
    "clown nose",
    "pipe",
    "straight hair blonde",
  ]),
  //2054 ,),

  new Trait("male", ["eye mask", "peak spike"]),
  //2055 ,),

  new Trait("male", ["cigarette", "regular shades", "shaved head"]),
  //2056 ,),

  new Trait("male", ["normal beard black", "wild hair"]),
  //2057 ,),

  new Trait("male", ["earring", "goat", "purple hair"]),
  //2058 ,),

  new Trait("male", ["earring", "eye patch", "mohawk dark"]),
  //2059 ,),

  new Trait("male", ["muttonchops", "purple hair"]),
  //2060 ,),

  new Trait("male", ["cap forward", "normal beard"]),
  //2061 ,),

  new Trait("female", ["mohawk thin", "nerd glasses", "purple lipstick"]),
  //2062 ,),

  new Trait("male", ["earring", "front beard dark", "peak spike"]),
  //2063 ,),

  new Trait("male", ["front beard dark", "shaved head", "small shades"]),
  //2064 ,),

  new Trait("female", ["dark hair", "horned rim glasses", "hot lipstick"]),
  //2065 ,),

  new Trait("zombie", ["knitted cap"]),
  //2066 ,),

  new Trait("female", ["black lipstick", "crazy hair"]),
  //2067 ,),

  new Trait("female", ["purple lipstick", "regular shades", "tassle hat"]),
  //2068 ,),

  new Trait("female", ["frumpy hair", "green eye shadow", "hot lipstick"]),
  //2069 ,),

  new Trait("male", ["cigarette", "headband"]),
  //2070 ,),

  new Trait("male", ["horned rim glasses", "mohawk thin"]),
  //2071 ,),

  new Trait("female", [
    "bandana",
    "cigarette",
    "green eye shadow",
    "purple lipstick",
  ]),
  //2072 ,),

  new Trait("male", ["earring", "mohawk thin", "nerd glasses"]),
  //2073 ,),

  new Trait("female", [
    "clown eyes blue",
    "earring",
    "hot lipstick",
    "wild hair",
  ]),
  //2074 ,),

  new Trait("male", ["clown nose", "headband", "small shades"]),
  //2075 ,),

  new Trait("male", ["bandana", "regular shades"]),
  //2076 ,),

  new Trait("female", ["cigarette", "hot lipstick", "wild hair"]),
  //2077 ,),

  new Trait("female", ["clown eyes blue", "frumpy hair"]),
  //2078 ,),

  new Trait("male", ["earring", "knitted cap", "muttonchops"]),
  //2079 ,),

  new Trait("male", ["purple hair", "vape"]),
  //2080 ,),

  new Trait("male", ["eye patch", "police cap", "shadow beard"]),
  //2081 ,),

  new Trait("male", ["3d glasses", "knitted cap"]),
  //2082 ,),

  new Trait("male", ["headband", "mustache"]),
  //2083 ,),

  new Trait("male", ["mohawk thin", "vr"]),
  //2084 ,),

  new Trait("female", ["black lipstick", "blue eye shadow", "red mohawk"]),
  //2085 ,),

  new Trait("male", ["goat", "knitted cap"]),
  //2086 ,),

  new Trait("male", ["earring", "headband", "vr"]),
  //2087 ,),

  new Trait("male", ["bandana", "muttonchops"]),
  //2088 ,),

  new Trait("male", ["police cap", "regular shades"]),
  //2089 ,),

  new Trait("male", ["big shades", "knitted cap"]),
  //2090 ,),

  new Trait("female", ["bandana", "cigarette", "green eye shadow"]),
  //2091 ,),

  new Trait("female", ["blue eye shadow", "mohawk"]),
  //2092 ,),

  new Trait("male", ["big shades", "hoodie", "mustache"]),
  //2093 ,),

  new Trait("male", ["horned rim glasses", "mohawk thin", "mustache"]),
  //2094 ,),

  new Trait("female", ["classic shades", "clown hair green"]),
  //2095 ,),

  new Trait("male", ["do-rag", "earring", "front beard dark", "mole", "pipe"]),
  //2096 ,),

  new Trait("male", ["do-rag", "luxurious beard", "regular shades", "smile"]),
  //2097 ,),

  new Trait("male", ["luxurious beard", "mohawk dark"]),
  //2098 ,),

  new Trait("male", ["handlebars", "headband"]),
  //2099 ,),

  new Trait("female", ["black lipstick", "green eye shadow", "mohawk"]),
  //2100 ,),

  new Trait("female", ["black lipstick", "blue eye shadow", "wild blonde"]),
  //2101 ,),

  new Trait("male", ["do-rag", "mustache"]),
  //2102 ,),

  new Trait("female", ["mohawk", "purple lipstick"]),
  //2103 ,),

  new Trait("female", ["black lipstick", "blue eye shadow", "headband"]),
  //2104 ,),

  new Trait("female", ["earring", "headband", "hot lipstick"]),
  //2105 ,),

  new Trait("male", ["classic shades", "mohawk thin", "normal beard black"]),
  //2106 ,),

  new Trait("male", ["headband", "vr"]),
  //2107 ,),

  new Trait("male", ["classic shades", "do-rag"]),
  //2108 ,),

  new Trait("male", ["chinstrap", "earring", "eye patch", "stringy hair"]),
  //2109 ,),

  new Trait("female", ["3d glasses", "earring", "pigtails"]),
  //2110 ,),

  new Trait("male", ["earring", "messy hair", "pipe"]),
  //2111 ,),

  new Trait("male", ["buck teeth", "cap", "shadow beard"]),
  //2112 ,),

  new Trait("male", ["crazy hair", "earring", "handlebars"]),
  //2113 ,),

  new Trait("female", ["earring", "green eye shadow", "wild white hair"]),
  //2114 ,),

  new Trait("female", ["bandana", "earring"]),
  //2115 ,),

  new Trait("male", ["cap forward"]),
  //2116 ,),

  new Trait("female", ["eye mask", "purple lipstick", "straight hair blonde"]),
  //2117 ,),

  new Trait("female", ["blonde short", "earring"]),
  //2118 ,),

  new Trait("female", ["clown eyes green", "mohawk thin"]),
  //2119 ,),

  new Trait("female", ["earring", "hot lipstick", "mole", "pilot helmet"]),
  //2120 ,),

  new Trait("female", ["hot lipstick", "pigtails"]),
  //2121 ,),

  new Trait("male", ["handlebars", "shaved head"]),
  //2122 ,),

  new Trait("male", ["front beard dark", "frumpy hair", "medical mask"]),
  //2123 ,),

  new Trait("male", ["earring", "eye patch", "mole", "peak spike"]),
  //2124 ,),

  new Trait("male", ["crazy hair", "eye patch"]),
  //2125 ,),

  new Trait("male", ["clown eyes green", "frown", "frumpy hair"]),
  //2126 ,),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "earring",
    "mohawk dark",
  ]),
  //2127 ,),

  new Trait("male", ["earring", "mohawk dark"]),
  //2128 ,),

  new Trait("female", ["green eye shadow", "mole", "wild hair"]),
  //2129 ,),

  new Trait("male", ["big beard", "small shades", "top hat"]),
  //2130 ,),

  new Trait("female", [
    "black lipstick",
    "earring",
    "eye mask",
    "stringy hair",
  ]),
  //2131 ,),

  new Trait("zombie", ["hoodie", "nerd glasses", "normal beard black"]),
  //2132 ,),

  new Trait("female", ["earring", "pipe", "wild white hair"]),
  //2133 ,),

  new Trait("female", ["earring", "hot lipstick", "messy hair"]),
  //2134 ,),

  new Trait("male", ["handlebars", "regular shades", "vampire hair"]),
  //2135 ,),

  new Trait("male", ["classic shades", "crazy hair", "handlebars"]),
  //2136 ,),

  new Trait("female", [
    "cap",
    "cigarette",
    "clown eyes green",
    "purple lipstick",
  ]),
  //2137 ,),

  new Trait("female", ["black lipstick", "earring", "green eye shadow"]),
  //2138 ,),

  new Trait("male", ["chinstrap", "classic shades", "mohawk"]),
  //2139 ,),

  new Trait("ape", ["knitted cap", "small shades"]),
  //2140 ,),

  new Trait("male", ["bandana", "cigarette", "mustache"]),
  //2141 ,),

  new Trait("female", ["hot lipstick", "mole", "nerd glasses", "vape"]),
  //2142 ,),

  new Trait("female", ["black lipstick", "blonde short", "earring"]),
  //2143 ,),

  new Trait("male", ["mohawk thin", "mustache"]),
  //2144 ,),

  new Trait("female", ["eye mask", "mohawk"]),
  //2145 ,),

  new Trait("female", ["black lipstick", "choker", "clown eyes green"]),
  //2146 ,),

  new Trait("male", ["bandana", "nerd glasses"]),
  //2147 ,),

  new Trait("male", ["frumpy hair", "gold chain"]),
  //2148 ,),

  new Trait("female", ["frumpy hair", "purple lipstick"]),
  //2149 ,),

  new Trait("female", ["big shades", "black lipstick", "mohawk"]),
  //2150 ,),

  new Trait("male", ["muttonchops", "peak spike"]),
  //2151 ,),

  new Trait("female", ["frumpy hair", "nerd glasses"]),
  //2152 ,),

  new Trait("male", ["do-rag", "shadow beard"]),
  //2153 ,),

  new Trait("female", ["bandana", "hot lipstick"]),
  //2154 ,),

  new Trait("male", ["front beard dark", "headband"]),
  //2155 ,),

  new Trait("female", ["black lipstick", "crazy hair"]),
  //2156 ,),

  new Trait("male", ["crazy hair", "earring", "frown"]),
  //2157 ,),

  new Trait("female", [
    "earring",
    "hot lipstick",
    "messy hair",
    "purple eye shadow",
  ]),
  //2158 ,),

  new Trait("female", ["green eye shadow", "tassle hat"]),
  //2159 ,),

  new Trait("male", ["normal beard black", "peak spike", "vr"]),
  //2160 ,),

  new Trait("male", ["chinstrap", "cowboy hat", "horned rim glasses"]),
  //2161 ,),

  new Trait("female", ["purple eye shadow", "purple lipstick", "tassle hat"]),
  //2162 ,),

  new Trait("male", ["big shades", "headband", "smile"]),
  //2163 ,),

  new Trait("female", ["blonde short", "earring", "purple eye shadow"]),
  //2164 ,),

  new Trait("male", ["regular shades"]),
  //2165 ,),

  new Trait("female", ["black lipstick", "frumpy hair", "nerd glasses"]),
  //2166 ,),

  new Trait("male", ["frown", "messy hair", "muttonchops"]),
  //2167 ,),

  new Trait("female", [
    "classic shades",
    "hot lipstick",
    "mohawk dark",
    "mole",
  ]),
  //2168 ,),

  new Trait("female", ["pilot helmet", "purple lipstick"]),
  //2169 ,),

  new Trait("female", ["eye patch", "hot lipstick", "stringy hair"]),
  //2170 ,),

  new Trait("female", ["crazy hair", "eye patch"]),
  //2171 ,),

  new Trait("male", ["cap forward", "cigarette"]),
  //2172 ,),

  new Trait("male", ["normal beard black", "stringy hair"]),
  //2173 ,),

  new Trait("female", ["dark hair", "purple eye shadow"]),
  //2174 ,),

  new Trait("male", ["cap forward", "mole", "shadow beard"]),
  //2175 ,),

  new Trait("female", ["earring", "half shaved"]),
  //2176 ,),

  new Trait("female", ["classic shades", "frumpy hair"]),
  //2177 ,),

  new Trait("male", ["front beard dark", "hoodie"]),
  //2178 ,),

  new Trait("male", ["earring", "regular shades", "top hat"]),
  //2179 ,),

  new Trait("female", [
    "purple lipstick",
    "welding goggles",
    "wild white hair",
  ]),
  //2180 ,),

  new Trait("female", ["black lipstick", "frumpy hair", "mole"]),
  //2181 ,),

  new Trait("female", ["mole", "purple eye shadow", "straight hair blonde"]),
  //2182 ,),

  new Trait("female", [
    "clown eyes blue",
    "crazy hair",
    "earring",
    "mole",
    "purple lipstick",
  ]),
  //2183 ,),

  new Trait("female", ["black lipstick", "horned rim glasses", "mohawk"]),
  //2184 ,),

  new Trait("male", ["big shades", "clown hair green"]),
  //2185 ,),

  new Trait("female", ["cigarette", "frumpy hair", "nerd glasses"]),
  //2186 ,),

  new Trait("female", [
    "clown eyes green",
    "half shaved",
    "medical mask",
    "purple lipstick",
  ]),
  //2187 ,),

  new Trait("male", ["cap forward", "earring", "front beard dark"]),
  //2188 ,),

  new Trait("female", ["3d glasses", "frumpy hair"]),
  //2189 ,),

  new Trait("female", ["clown eyes blue", "earring", "pink with hat"]),
  //2190 ,),

  new Trait("male", ["bandana", "cigarette"]),
  //2191 ,),

  new Trait("male", ["earring", "frown", "horned rim glasses", "knitted cap"]),
  //2192 ,),

  new Trait("male", ["eye patch", "stringy hair"]),
  //2193 ,),

  new Trait("male", ["earring", "front beard dark", "stringy hair"]),
  //2194 ,),

  new Trait("female", ["hot lipstick", "wild hair"]),
  //2195 ,),

  new Trait("female", ["choker", "hot lipstick", "mohawk thin"]),
  //2196 ,),

  new Trait("female", [
    "black lipstick",
    "mole",
    "purple eye shadow",
    "stringy hair",
  ]),
  //2197 ,),

  new Trait("female", ["crazy hair", "hot lipstick", "pipe"]),
  //2198 ,),

  new Trait("female", ["blonde bob", "purple eye shadow", "purple lipstick"]),
  //2199 ,),

  new Trait("male", ["big beard", "knitted cap"]),
  //2200 ,),

  new Trait("female", ["choker", "frumpy hair"]),
  //2201 ,),

  new Trait("female", [
    "choker",
    "classic shades",
    "earring",
    "hot lipstick",
    "mole",
    "straight hair",
  ]),
  //2202 ,),

  new Trait("female", ["clown hair green", "earring", "green eye shadow"]),
  //2203 ,),

  new Trait("female", []),
  //2204 ,),

  new Trait("male", ["knitted cap", "mole"]),
  //2205 ,),

  new Trait("female", ["dark hair", "horned rim glasses"]),
  //2206 ,),

  new Trait("female", ["bandana", "purple eye shadow"]),
  //2207 ,),

  new Trait("female", [
    "blue eye shadow",
    "hot lipstick",
    "red mohawk",
    "rosy cheeks",
  ]),
  //2208 ,),

  new Trait("male", [
    "clown eyes green",
    "earring",
    "mohawk dark",
    "mole",
    "shadow beard",
  ]),
  //2209 ,),

  new Trait("female", ["blue eye shadow", "mohawk thin"]),
  //2210 ,),

  new Trait("male", ["front beard dark", "mole", "wild hair"]),
  //2211 ,),

  new Trait("female", ["blue eye shadow", "mohawk", "purple lipstick"]),
  //2212 ,),

  new Trait("female", ["3d glasses", "bandana"]),
  //2213 ,),

  new Trait("female", ["eye mask", "straight hair dark"]),
  //2214 ,),

  new Trait("male", ["cap", "eye patch", "mole"]),
  //2215 ,),

  new Trait("male", ["earring", "mohawk", "regular shades"]),
  //2216 ,),

  new Trait("female", ["green eye shadow", "half shaved"]),
  //2217 ,),

  new Trait("female", ["dark hair", "welding goggles"]),
  //2218 ,),

  new Trait("male", ["big beard"]),
  //2219 ,),

  new Trait("male", ["horned rim glasses", "luxurious beard", "messy hair"]),
  //2220 ,),

  new Trait("male", ["horned rim glasses", "wild hair"]),
  //2221 ,),

  new Trait("female", ["blonde short", "cigarette", "clown eyes green"]),
  //2222 ,),

  new Trait("male", ["horned rim glasses", "police cap"]),
  //2223 ,),

  new Trait("male", ["do-rag", "earring", "goat"]),
  //2224 ,),

  new Trait("male", ["clown eyes green", "muttonchops", "vampire hair"]),
  //2225 ,),

  new Trait("female", [
    "black lipstick",
    "horned rim glasses",
    "pink with hat",
  ]),
  //2226 ,),

  new Trait("male", ["mohawk dark", "vr"]),
  //2227 ,),

  new Trait("male", ["goat", "shaved head"]),
  //2228 ,),

  new Trait("female", ["blonde bob", "clown eyes green", "hot lipstick"]),
  //2229 ,),

  new Trait("male", ["bandana", "cigarette", "horned rim glasses"]),
  //2230 ,),

  new Trait("female", ["black lipstick", "messy hair", "vr"]),
  //2231 ,),

  new Trait("female", ["mohawk thin", "purple eye shadow"]),
  //2232 ,),

  new Trait("male", ["goat", "stringy hair"]),
  //2233 ,),

  new Trait("male", ["headband", "vr"]),
  //2234 ,),

  new Trait("male", ["eye mask", "muttonchops", "peak spike"]),
  //2235 ,),

  new Trait("male", ["earring", "regular shades", "shadow beard", "wild hair"]),
  //2236 ,),

  new Trait("female", ["blonde bob", "blue eye shadow"]),
  //2237 ,),

  new Trait("male", ["goat", "mohawk"]),
  //2238 ,),

  new Trait("male", ["big beard", "gold chain", "mohawk"]),
  //2239 ,),

  new Trait("female", ["big shades", "half shaved"]),
  //2240 ,),

  new Trait("male", ["eye patch", "mustache", "stringy hair"]),
  //2241 ,),

  new Trait("male", ["knitted cap", "smile"]),
  //2242 ,),

  new Trait("zombie", ["bandana", "nerd glasses"]),
  //2243 ,),

  new Trait("female", ["nerd glasses", "pink with hat"]),
  //2244 ,),

  new Trait("male", ["cap forward", "normal beard"]),
  //2245 ,),

  new Trait("male", ["bandana", "cigarette", "luxurious beard"]),
  //2246 ,),

  new Trait("male", ["earring", "normal beard black", "wild hair"]),
  //2247 ,),

  new Trait("male", ["clown eyes green", "front beard dark", "messy hair"]),
  //2248 ,),

  new Trait("zombie", ["bandana", "eye patch"]),
  //2249 ,),

  new Trait("male", ["goat", "mole", "purple hair"]),
  //2250 ,),

  new Trait("male", ["cap", "cigarette", "earring"]),
  //2251 ,),

  new Trait("female", ["clown eyes green", "messy hair"]),
  //2252 ,),

  new Trait("female", ["orange side", "spots"]),
  //2253 ,),

  new Trait("male", ["3d glasses", "fedora", "mole"]),
  //2254 ,),

  new Trait("male", ["cap", "nerd glasses", "normal beard"]),
  //2255 ,),

  new Trait("male", ["knitted cap", "small shades"]),
  //2256 ,),

  new Trait("female", ["classic shades", "hot lipstick", "mohawk"]),
  //2257 ,),

  new Trait("male", ["hoodie", "mustache"]),
  //2258 ,),

  new Trait("male", ["normal beard black", "wild hair"]),
  //2259 ,),

  new Trait("male", ["crazy hair", "eye patch", "normal beard"]),
  //2260 ,),

  new Trait("male", ["shaved head", "smile"]),
  //2261 ,),

  new Trait("female", ["blonde bob", "clown eyes blue"]),
  //2262 ,),

  new Trait("male", ["cap forward", "mole"]),
  //2263 ,),

  new Trait("male", [
    "earring",
    "purple hair",
    "regular shades",
    "shadow beard",
  ]),
  //2264 ,),

  new Trait("male", ["clown eyes blue", "mohawk dark"]),
  //2265 ,),

  new Trait("male", ["cigarette", "eye patch", "frumpy hair"]),
  //2266 ,),

  new Trait("male", [
    "buck teeth",
    "clown eyes green",
    "handlebars",
    "knitted cap",
  ]),
  //2267 ,),

  new Trait("male", ["big shades", "cap forward", "earring", "silver chain"]),
  //2268 ,),

  new Trait("male", ["do-rag", "eye mask"]),
  //2269 ,),

  new Trait("male", ["cowboy hat", "small shades"]),
  //2270 ,),

  new Trait("male", ["earring", "eye mask", "front beard", "mohawk"]),
  //2271 ,),

  new Trait("female", ["black lipstick", "dark hair"]),
  //2272 ,),

  new Trait("female", ["clown eyes blue", "wild white hair"]),
  //2273 ,),

  new Trait("female", ["3d glasses", "earring", "hot lipstick", "wild hair"]),
  //2274 ,),

  new Trait("female", ["black lipstick", "purple eye shadow", "tassle hat"]),
  //2275 ,),

  new Trait("male", [
    "buck teeth",
    "shadow beard",
    "small shades",
    "wild hair",
  ]),
  //2276 ,),

  new Trait("male", ["cigarette", "earring", "vampire hair"]),
  //2277 ,),

  new Trait("female", ["cigarette", "hot lipstick", "wild hair"]),
  //2278 ,),

  new Trait("female", ["nerd glasses", "pigtails"]),
  //2279 ,),

  new Trait("male", ["goat", "messy hair"]),
  //2280 ,),

  new Trait("female", [
    "cigarette",
    "earring",
    "hot lipstick",
    "mohawk",
    "purple eye shadow",
  ]),
  //2281 ,),

  new Trait("male", ["cap forward", "cigarette", "earring", "mole"]),
  //2282 ,),

  new Trait("female", ["earring", "frumpy hair", "pipe"]),
  //2283 ,),

  new Trait("female", ["red mohawk", "regular shades"]),
  //2284 ,),

  new Trait("male", ["horned rim glasses", "mohawk"]),
  //2285 ,),

  new Trait("female", ["regular shades", "stringy hair"]),
  //2286 ,),

  new Trait("male", ["chinstrap", "do-rag"]),
  //2287 ,),

  new Trait("male", ["crazy hair", "earring", "shadow beard"]),
  //2288 ,),

  new Trait("male", ["cap forward", "front beard"]),
  //2289 ,),

  new Trait("male", ["bandana", "luxurious beard"]),
  //2290 ,),

  new Trait("male", ["earring", "headband", "shadow beard"]),
  //2291 ,),

  new Trait("male", ["handlebars", "messy hair"]),
  //2292 ,),

  new Trait("female", ["earring", "regular shades", "wild blonde"]),
  //2293 ,),

  new Trait("male", ["big shades", "hoodie", "luxurious beard"]),
  //2294 ,),

  new Trait("male", ["gold chain", "luxurious beard", "shaved head"]),
  //2295 ,),

  new Trait("male", ["cap", "goat", "horned rim glasses"]),
  //2296 ,),

  new Trait("female", ["bandana", "clown eyes green"]),
  //2297 ,),

  new Trait("male", ["headband", "shadow beard"]),
  //2298 ,),

  new Trait("female", ["black lipstick", "horned rim glasses", "tassle hat"]),
  //2299 ,),

  new Trait("male", ["eye patch"]),
  //2300 ,),

  new Trait("male", ["eye patch", "front beard dark", "hoodie"]),
  //2301 ,),

  new Trait("male", ["chinstrap", "peak spike"]),
  //2302 ,),

  new Trait("male", ["chinstrap", "fedora", "small shades"]),
  //2303 ,),

  new Trait("male", ["big beard", "crazy hair", "regular shades"]),
  //2304 ,),

  new Trait("female", ["cigarette", "frumpy hair"]),
  //2305 ,),

  new Trait("zombie", ["cigarette", "earring", "mohawk thin"]),
  //2306 ,),

  new Trait("male", ["cap", "frown"]),
  //2307 ,),

  new Trait("male", ["frown", "wild hair"]),
  //2308 ,),

  new Trait("male", ["earring", "front beard", "frumpy hair"]),
  //2309 ,),

  new Trait("male", ["big shades", "chinstrap", "hoodie"]),
  //2310 ,),

  new Trait("male", ["earring", "hoodie", "shadow beard"]),
  //2311 ,),

  new Trait("female", ["pigtails"]),
  //2312 ,),

  new Trait("male", ["crazy hair", "earring", "shadow beard"]),
  //2313 ,),

  new Trait("male", ["do-rag", "shadow beard", "smile"]),
  //2314 ,),

  new Trait("male", ["nerd glasses", "shadow beard", "stringy hair"]),
  //2315 ,),

  new Trait("female", ["cap", "eye mask"]),
  //2316 ,),

  new Trait("male", ["mohawk thin", "normal beard"]),
  //2317 ,),

  new Trait("female", ["blue eye shadow", "half shaved", "purple lipstick"]),
  //2318 ,),

  new Trait("male", [
    "bandana",
    "frown",
    "nerd glasses",
    "rosy cheeks",
    "shadow beard",
  ]),
  //2319 ,),

  new Trait("male", ["bandana", "cigarette", "eye mask"]),
  //2320 ,),

  new Trait("female", ["clown eyes green", "half shaved"]),
  //2321 ,),

  new Trait("female", ["hot lipstick", "mole", "straight hair dark"]),
  //2322 ,),

  new Trait("male", ["earring", "headband", "small shades"]),
  //2323 ,),

  new Trait("female", ["black lipstick", "blonde bob"]),
  //2324 ,),

  new Trait("male", ["earring", "hoodie", "vr"]),
  //2325 ,),

  new Trait("male", ["clown hair green", "horned rim glasses"]),
  //2326 ,),

  new Trait("male", ["earring", "eye mask", "fedora", "mustache"]),
  //2327 ,),

  new Trait("female", ["eye patch", "mohawk thin"]),
  //2328 ,),

  new Trait("zombie", ["earring", "peak spike"]),
  //2329 ,),

  new Trait("female", ["black lipstick", "mohawk", "mole"]),
  //2330 ,),

  new Trait("male", ["cigarette", "horned rim glasses", "messy hair"]),
  //2331 ,),

  new Trait("male", ["fedora", "front beard"]),
  //2332 ,),

  new Trait("male", ["bandana", "medical mask", "small shades"]),
  //2333 ,),

  new Trait("female", ["eye mask", "knitted cap"]),
  //2334 ,),

  new Trait("male", ["crazy hair", "earring", "handlebars"]),
  //2335 ,),

  new Trait("male", ["clown hair green", "clown nose", "earring"]),
  //2336 ,),

  new Trait("male", ["earring", "mohawk"]),
  //2337 ,),

  new Trait("zombie", ["mohawk thin"]),
  //2338 ,),

  new Trait("female", ["black lipstick", "mohawk thin"]),
  //2339 ,),

  new Trait("male", ["messy hair", "mole"]),
  //2340 ,),

  new Trait("male", ["big shades", "headband", "normal beard black"]),
  //2341 ,),

  new Trait("male", ["big shades", "earring", "mole", "shaved head"]),
  //2342 ,),

  new Trait("male", [
    "classic shades",
    "earring",
    "mohawk thin",
    "normal beard black",
  ]),
  //2343 ,),

  new Trait("male", ["bandana", "clown eyes blue", "frown", "luxurious beard"]),
  //2344 ,),

  new Trait("male", ["big shades", "do-rag"]),
  //2345 ,),

  new Trait("female", ["black lipstick", "green eye shadow", "straight hair"]),
  //2346 ,),

  new Trait("male", ["eye patch", "wild hair"]),
  //2347 ,),

  new Trait("male", ["front beard", "mohawk thin", "small shades"]),
  //2348 ,),

  new Trait("male", ["peak spike", "vape"]),
  //2349 ,),

  new Trait("male", ["luxurious beard", "mole", "peak spike", "small shades"]),
  //2350 ,),

  new Trait("female", ["eye mask", "mohawk dark"]),
  //2351 ,),

  new Trait("male", ["frumpy hair", "nerd glasses"]),
  //2352 ,),

  new Trait("male", ["purple hair", "silver chain", "vr"]),
  //2353 ,),

  new Trait("male", ["bandana", "clown eyes green"]),
  //2354 ,),

  new Trait("male", ["crazy hair", "luxurious beard"]),
  //2355 ,),

  new Trait("male", ["cigarette", "earring", "hoodie", "regular shades"]),
  //2356 ,),

  new Trait("male", ["mohawk thin", "mole", "normal beard black"]),
  //2357 ,),

  new Trait("female", [
    "bandana",
    "classic shades",
    "earring",
    "purple lipstick",
  ]),
  //2358 ,),

  new Trait("female", ["cigarette", "earring", "mole", "wild blonde"]),
  //2359 ,),

  new Trait("female", ["clown eyes blue", "earring", "wild white hair"]),
  //2360 ,),

  new Trait("female", ["headband", "hot lipstick"]),
  //2361 ,),

  new Trait("male", [
    "bandana",
    "front beard dark",
    "rosy cheeks",
    "small shades",
  ]),
  //2362 ,),

  new Trait("male", ["headband", "nerd glasses", "normal beard"]),
  //2363 ,),

  new Trait("male", ["cap forward", "muttonchops", "spots"]),
  //2364 ,),

  new Trait("male", ["earring", "mustache", "nerd glasses", "peak spike"]),
  //2365 ,),

  new Trait("male", ["horned rim glasses", "mohawk"]),
  //2366 ,),

  new Trait("male", ["cap"]),
  //2367 ,),

  new Trait("female", ["purple lipstick", "tiara"]),
  //2368 ,),

  new Trait("male", ["cap", "classic shades", "normal beard black"]),
  //2369 ,),

  new Trait("female", ["cigarette", "half shaved"]),
  //2370 ,),

  new Trait("female", ["green eye shadow", "pigtails"]),
  //2371 ,),

  new Trait("female", ["blonde short", "green eye shadow"]),
  //2372 ,),

  new Trait("male", ["muttonchops", "police cap"]),
  //2373 ,),

  new Trait("male", ["do-rag", "earring", "horned rim glasses"]),
  //2374 ,),

  new Trait("male", ["clown hair green", "earring", "mustache", "pipe"]),
  //2375 ,),

  new Trait("male", ["handlebars", "headband"]),
  //2376 ,),

  new Trait("male", ["classic shades", "front beard", "rosy cheeks"]),
  //2377 ,),

  new Trait("male", ["handlebars", "mole", "wild hair"]),
  //2378 ,),

  new Trait("male", ["do-rag", "frown"]),
  //2379 ,),

  new Trait("female", ["black lipstick", "eye mask", "red mohawk"]),
  //2380 ,),

  new Trait("female", ["cigarette", "wild white hair"]),
  //2381 ,),

  new Trait("female", ["medical mask", "straight hair blonde"]),
  //2382 ,),

  new Trait("male", ["3d glasses", "goat", "shaved head"]),
  //2383 ,),

  new Trait("female", ["clown eyes blue", "straight hair"]),
  //2384 ,),

  new Trait("male", ["classic shades", "pipe", "shadow beard"]),
  //2385 ,),

  new Trait("zombie", ["headband", "small shades"]),
  //2386 ,),

  new Trait("female", ["bandana", "hot lipstick", "rosy cheeks"]),
  //2387 ,),

  new Trait("male", ["clown eyes blue", "earring", "mohawk dark"]),
  //2388 ,),

  new Trait("male", ["cap forward", "cigarette", "mustache"]),
  //2389 ,),

  new Trait("female", ["half shaved", "purple eye shadow"]),
  //2390 ,),

  new Trait("female", ["clown hair green"]),
  //2391 ,),

  new Trait("male", ["mohawk dark", "regular shades"]),
  //2392 ,),

  new Trait("female", ["black lipstick", "red mohawk"]),
  //2393 ,),

  new Trait("female", ["mohawk", "welding goggles"]),
  //2394 ,),

  new Trait("female", ["black lipstick", "blonde bob", "horned rim glasses"]),
  //2395 ,),

  new Trait("female", ["mohawk dark"]),
  //2396 ,),

  new Trait("female", [
    "earring",
    "nerd glasses",
    "purple lipstick",
    "red mohawk",
  ]),
  //2397 ,),

  new Trait("female", ["blue eye shadow", "cigarette", "mohawk", "mole"]),
  //2398 ,),

  new Trait("male", ["eye mask", "knitted cap"]),
  //2399 ,),

  new Trait("female", ["gold chain", "messy hair"]),
  //2400 ,),

  new Trait("male", ["earring", "police cap", "regular shades"]),
  //2401 ,),

  new Trait("male", ["bandana", "earring", "eye patch"]),
  //2402 ,),

  new Trait("female", ["black lipstick", "headband"]),
  //2403 ,),

  new Trait("male", ["chinstrap", "do-rag", "small shades"]),
  //2404 ,),

  new Trait("male", ["earring", "goat", "mohawk dark"]),
  //2405 ,),

  new Trait("male", ["luxurious beard", "silver chain"]),
  //2406 ,),

  new Trait("female", ["blue eye shadow", "knitted cap"]),
  //2407 ,),

  new Trait("male", ["cap", "cigarette", "eye patch"]),
  //2408 ,),

  new Trait("female", ["mohawk thin", "spots"]),
  //2409 ,),

  new Trait("male", ["eye mask", "luxurious beard", "shaved head"]),
  //2410 ,),

  new Trait("female", ["hot lipstick", "straight hair blonde"]),
  //2411 ,),

  new Trait("male", ["cap forward", "classic shades", "front beard"]),
  //2412 ,),

  new Trait("female", ["cigarette", "green eye shadow", "mole", "wild hair"]),
  //2413 ,),

  new Trait("male", ["earring"]),
  //2414 ,),

  new Trait("male", ["messy hair", "spots"]),
  //2415 ,),

  new Trait("male", ["fedora", "normal beard black"]),
  //2416 ,),

  new Trait("male", ["crazy hair", "normal beard", "small shades"]),
  //2417 ,),

  new Trait("female", ["3d glasses", "messy hair"]),
  //2418 ,),

  new Trait("male", ["buck teeth", "front beard", "frumpy hair"]),
  //2419 ,),

  new Trait("male", ["earring", "police cap", "shadow beard"]),
  //2420 ,),

  new Trait("male", ["headband", "smile", "vape"]),
  //2421 ,),

  new Trait("female", ["earring", "pigtails"]),
  //2422 ,),

  new Trait("male", ["clown eyes blue", "hoodie", "silver chain"]),
  //2423 ,),

  new Trait("zombie", ["bandana", "earring", "frown"]),
  //2424 ,),

  new Trait("female", ["clown eyes blue", "mohawk"]),
  //2425 ,),

  new Trait("female", ["earring", "green eye shadow", "tiara"]),
  //2426 ,),

  new Trait("male", ["messy hair", "mole"]),
  //2427 ,),

  new Trait("female", ["cigarette", "frumpy hair", "regular shades"]),
  //2428 ,),

  new Trait("female", [
    "green eye shadow",
    "hot lipstick",
    "straight hair dark",
  ]),
  //2429 ,),

  new Trait("male", ["bandana", "big shades", "mustache", "vape"]),
  //2430 ,),

  new Trait("female", ["horned rim glasses", "hot lipstick", "knitted cap"]),
  //2431 ,),

  new Trait("female", ["black lipstick", "wild white hair"]),
  //2432 ,),

  new Trait("male", ["classic shades", "handlebars", "stringy hair"]),
  //2433 ,),

  new Trait("male", ["eye patch", "peak spike", "vape"]),
  //2434 ,),

  new Trait("male", ["earring", "hoodie", "horned rim glasses"]),
  //2435 ,),

  new Trait("female", ["blonde short", "earring", "purple lipstick"]),
  //2436 ,),

  new Trait("male", ["3d glasses", "peak spike"]),
  //2437 ,),

  new Trait("male", ["cap", "luxurious beard"]),
  //2438 ,),

  new Trait("male", ["3d glasses", "cowboy hat"]),
  //2439 ,),

  new Trait("male", ["clown nose", "stringy hair"]),
  //2440 ,),

  new Trait("male", ["hoodie", "smile", "vape"]),
  //2441 ,),

  new Trait("female", ["blue eye shadow", "messy hair", "purple lipstick"]),
  //2442 ,),

  new Trait("male", ["horned rim glasses", "purple hair"]),
  //2443 ,),

  new Trait("male", ["earring", "fedora"]),
  //2444 ,),

  new Trait("female", ["mole"]),
  //2445 ,),

  new Trait("male", ["classic shades", "crazy hair", "earring"]),
  //2446 ,),

  new Trait("female", [
    "black lipstick",
    "clown eyes blue",
    "earring",
    "stringy hair",
  ]),
  //2447 ,),

  new Trait("male", ["cap", "horned rim glasses"]),
  //2448 ,),

  new Trait("male", ["big shades", "medical mask", "police cap"]),
  //2449 ,),

  new Trait("male", [
    "eye patch",
    "luxurious beard",
    "medical mask",
    "mohawk thin",
  ]),
  //2450 ,),

  new Trait("male", ["big shades", "cigarette", "mohawk thin"]),
  //2451 ,),

  new Trait("male", [
    "earring",
    "headband",
    "horned rim glasses",
    "medical mask",
  ]),
  //2452 ,),

  new Trait("male", ["crazy hair", "earring", "front beard"]),
  //2453 ,),

  new Trait("female", [
    "green eye shadow",
    "purple lipstick",
    "straight hair blonde",
  ]),
  //2454 ,),

  new Trait("female", ["cigarette", "hot lipstick", "straight hair blonde"]),
  //2455 ,),

  new Trait("male", ["cap", "normal beard"]),
  //2456 ,),

  new Trait("male", ["bandana", "earring", "front beard dark"]),
  //2457 ,),

  new Trait("male", ["knitted cap", "shadow beard"]),
  //2458 ,),

  new Trait("male", ["big shades", "goat", "knitted cap"]),
  //2459 ,),

  new Trait("zombie", ["bandana", "vr"]),
  //2460 ,),

  new Trait("female", ["clown eyes blue", "crazy hair", "earring"]),
  //2461 ,),

  new Trait("female", ["clown eyes blue", "messy hair"]),
  //2462 ,),

  new Trait("male", ["big beard", "cap", "mole"]),
  //2463 ,),

  new Trait("male", ["earring", "hoodie", "luxurious beard"]),
  //2464 ,),

  new Trait("male", ["earring", "knitted cap", "luxurious beard"]),
  //2465 ,),

  new Trait("male", ["smile", "wild hair"]),
  //2466 ,),

  new Trait("female", ["clown eyes blue", "hot lipstick", "tassle hat"]),
  //2467 ,),

  new Trait("male", ["knitted cap", "muttonchops", "vr"]),
  //2468 ,),

  new Trait("male", ["bandana", "earring", "horned rim glasses", "smile"]),
  //2469 ,),

  new Trait("male", ["eye patch", "luxurious beard", "stringy hair"]),
  //2470 ,),

  new Trait("male", ["bandana", "smile"]),
  //2471 ,),

  new Trait("male", ["cap", "earring", "horned rim glasses", "mustache"]),
  //2472 ,),

  new Trait("male", ["knitted cap", "luxurious beard"]),
  //2473 ,),

  new Trait("male", ["earring", "mole", "nerd glasses", "peak spike"]),
  //2474 ,),

  new Trait("female", ["clown hair green", "clown nose"]),
  //2475 ,),

  new Trait("female", ["half shaved", "regular shades"]),
  //2476 ,),

  new Trait("male", ["cap forward", "normal beard black"]),
  //2477 ,),

  new Trait("female", ["pilot helmet", "pipe"]),
  //2478 ,),

  new Trait("male", ["top hat"]),
  //2479 ,),

  new Trait("male", ["mohawk dark", "vape"]),
  //2480 ,),

  new Trait("female", ["bandana", "regular shades"]),
  //2481 ,),

  new Trait("male", ["fedora", "normal beard black"]),
  //2482 ,),

  new Trait("male", ["earring", "horned rim glasses", "mohawk dark"]),
  //2483 ,),

  new Trait("zombie", ["classic shades", "wild hair"]),
  //2484 ,),

  new Trait("male", ["cigarette", "purple hair"]),
  //2485 ,),

  new Trait("female", ["earring", "frumpy hair", "purple eye shadow"]),
  //2486 ,),

  new Trait("female", ["knitted cap"]),
  //2487 ,),

  new Trait("female", ["clown eyes green", "clown hair green"]),
  //2488 ,),

  new Trait("male", ["cap forward", "earring", "shadow beard"]),
  //2489 ,),

  new Trait("male", ["pipe", "shadow beard", "small shades", "vampire hair"]),
  //2490 ,),

  new Trait("zombie", ["cap"]),
  //2491 ,),

  new Trait("male", ["big beard", "do-rag", "horned rim glasses"]),
  //2492 ,),

  new Trait("male", ["classic shades", "mohawk"]),
  //2493 ,),

  new Trait("male", ["3d glasses", "mohawk dark", "smile"]),
  //2494 ,),

  new Trait("male", ["clown hair green", "earring", "mustache", "vape"]),
  //2495 ,),

  new Trait("female", [
    "blonde bob",
    "cigarette",
    "earring",
    "green eye shadow",
  ]),
  //2496 ,),

  new Trait("male", ["handlebars", "horned rim glasses", "vape", "wild hair"]),
  //2497 ,),

  new Trait("male", ["cigarette", "classic shades", "do-rag", "shadow beard"]),
  //2498 ,),

  new Trait("male", ["earring", "normal beard black", "wild hair"]),
  //2499 ,),

  new Trait("male", ["front beard", "mohawk", "regular shades"]),
  //2500 ,),

  new Trait("male", ["earring", "muttonchops", "police cap"]),
  //2501 ,),

  new Trait("female", ["earring", "pigtails", "regular shades"]),
  //2502 ,),

  new Trait("male", ["earring", "front beard", "wild hair"]),
  //2503 ,),

  new Trait("male", ["cigarette", "do-rag", "earring"]),
  //2504 ,),

  new Trait("male", ["chinstrap", "crazy hair", "earring", "eye patch"]),
  //2505 ,),

  new Trait("male", ["vape", "wild hair"]),
  //2506 ,),

  new Trait("female", ["black lipstick", "cigarette", "mohawk"]),
  //2507 ,),

  new Trait("male", ["police cap"]),
  //2508 ,),

  new Trait("male", ["front beard dark", "top hat"]),
  //2509 ,),

  new Trait("male", ["eye patch", "frumpy hair", "gold chain"]),
  //2510 ,),

  new Trait("male", ["earring", "mohawk"]),
  //2511 ,),

  new Trait("male", ["cap", "regular shades", "shadow beard"]),
  //2512 ,),

  new Trait("male", ["do-rag", "eye patch"]),
  //2513 ,),

  new Trait("female", ["crazy hair", "earring"]),
  //2514 ,),

  new Trait("female", ["earring", "orange side", "purple lipstick"]),
  //2515 ,),

  new Trait("female", ["hot lipstick", "mohawk thin"]),
  //2516 ,),

  new Trait("female", ["earring", "red mohawk"]),
  //2517 ,),

  new Trait("male", ["horned rim glasses", "mohawk", "mole", "mustache"]),
  //2518 ,),

  new Trait("male", ["police cap", "shadow beard"]),
  //2519 ,),

  new Trait("male", ["bandana", "front beard", "horned rim glasses"]),
  //2520 ,),

  new Trait("female", ["earring", "mohawk dark", "purple lipstick"]),
  //2521 ,),

  new Trait("male", ["earring", "mohawk thin"]),
  //2522 ,),

  new Trait("female", [
    "big shades",
    "purple lipstick",
    "straight hair blonde",
  ]),
  //2523 ,),

  new Trait("male", ["earring", "eye mask", "stringy hair"]),
  //2524 ,),

  new Trait("female", ["black lipstick", "cigarette", "earring", "tassle hat"]),
  //2525 ,),

  new Trait("female", ["purple lipstick"]),
  //2526 ,),

  new Trait("female", ["cigarette", "clown eyes blue", "pink with hat"]),
  //2527 ,),

  new Trait("male", ["eye patch", "mohawk dark", "shadow beard"]),
  //2528 ,),

  new Trait("male", ["mohawk", "mustache", "regular shades"]),
  //2529 ,),

  new Trait("female", ["earring", "knitted cap"]),
  //2530 ,),

  new Trait("female", ["purple lipstick", "stringy hair", "vr"]),
  //2531 ,),

  new Trait("female", ["blonde short", "clown eyes green", "earring"]),
  //2532 ,),

  new Trait("female", [
    "big shades",
    "mole",
    "purple lipstick",
    "straight hair",
  ]),
  //2533 ,),

  new Trait("male", ["luxurious beard", "shaved head"]),
  //2534 ,),

  new Trait("male", ["earring", "shadow beard", "shaved head"]),
  //2535 ,),

  new Trait("male", ["cowboy hat", "eye patch"]),
  //2536 ,),

  new Trait("male", ["cap forward", "earring", "nerd glasses"]),
  //2537 ,),

  new Trait("male", ["front beard", "horned rim glasses", "shaved head"]),
  //2538 ,),

  new Trait("male", ["big beard", "cap forward", "earring"]),
  //2539 ,),

  new Trait("female", ["black lipstick", "pilot helmet"]),
  //2540 ,),

  new Trait("male", ["mohawk dark", "silver chain"]),
  //2541 ,),

  new Trait("male", ["chinstrap", "do-rag", "earring"]),
  //2542 ,),

  new Trait("female", ["black lipstick", "messy hair"]),
  //2543 ,),

  new Trait("female", ["regular shades", "tassle hat"]),
  //2544 ,),

  new Trait("male", ["mohawk", "regular shades"]),
  //2545 ,),

  new Trait("female", ["black lipstick", "earring", "straight hair dark"]),
  //2546 ,),

  new Trait("male", ["bandana", "earring"]),
  //2547 ,),

  new Trait("male", ["cap forward", "nerd glasses", "smile"]),
  //2548 ,),

  new Trait("female", ["black lipstick", "earring", "pilot helmet"]),
  //2549 ,),

  new Trait("male", ["goat", "hoodie"]),
  //2550 ,),

  new Trait("female", ["medical mask", "purple lipstick", "red mohawk"]),
  //2551 ,),

  new Trait("female", ["earring", "headband", "purple eye shadow"]),
  //2552 ,),

  new Trait("male", ["eye mask", "knitted cap"]),
  //2553 ,),

  new Trait("female", ["clown eyes blue", "frumpy hair"]),
  //2554 ,),

  new Trait("female", ["vr", "wild hair"]),
  //2555 ,),

  new Trait("male", ["do-rag", "earring", "regular shades"]),
  //2556 ,),

  new Trait("male", ["do-rag", "goat", "mole"]),
  //2557 ,),

  new Trait("female", ["clown eyes blue", "headband"]),
  //2558 ,),

  new Trait("male", ["earring", "messy hair", "small shades"]),
  //2559 ,),

  new Trait("zombie", ["earring", "front beard", "headband", "vr"]),
  //2560 ,),

  new Trait("male", ["cap forward", "earring"]),
  //2561 ,),

  new Trait("female", [
    "cigarette",
    "green eye shadow",
    "hot lipstick",
    "knitted cap",
  ]),
  //2562 ,),

  new Trait("female", ["earring", "mohawk"]),
  //2563 ,),

  new Trait("male", ["bandana", "front beard"]),
  //2564 ,),

  new Trait("male", ["mohawk thin", "regular shades", "shadow beard"]),
  //2565 ,),

  new Trait("zombie", ["messy hair", "normal beard"]),
  //2566 ,),

  new Trait("male", ["cigarette", "fedora", "mustache"]),
  //2567 ,),

  new Trait("male", ["mole", "wild hair"]),
  //2568 ,),

  new Trait("male", ["eye patch", "shadow beard", "shaved head"]),
  //2569 ,),

  new Trait("male", ["mustache", "peak spike", "vr"]),
  //2570 ,),

  new Trait("male", ["cap forward", "regular shades", "smile"]),
  //2571 ,),

  new Trait("male", ["3d glasses", "front beard", "vampire hair"]),
  //2572 ,),

  new Trait("male", ["vampire hair"]),
  //2573 ,),

  new Trait("male", ["earring", "goat", "purple hair"]),
  //2574 ,),

  new Trait("male", ["clown eyes blue", "stringy hair"]),
  //2575 ,),

  new Trait("male", ["big shades"]),
  //2576 ,),

  new Trait("male", ["bandana", "eye mask", "shadow beard"]),
  //2577 ,),

  new Trait("female", ["earring"]),
  //2578 ,),

  new Trait("male", ["cap forward", "nerd glasses"]),
  //2579 ,),

  new Trait("male", ["mustache", "peak spike"]),
  //2580 ,),

  new Trait("male", ["chinstrap", "cowboy hat", "regular shades"]),
  //2581 ,),

  new Trait("male", ["bandana", "earring", "goat"]),
  //2582 ,),

  new Trait("female", ["clown eyes blue", "crazy hair"]),
  //2583 ,),

  new Trait("male", ["front beard", "mohawk thin"]),
  //2584"

  new Trait("male", ["big beard", "cigarette", "headband"]),
  //2585"]),

  new Trait("male", ["eye patch", "front beard dark", "mohawk"]),
  //2586"]),

  new Trait("male", ["earring", "frown", "headband"]),
  //2587"]),

  new Trait("female", ["clown eyes blue", "earring", "spots", "tassle hat"]),
  //2588"]),

  new Trait("female", ["dark hair", "rosy cheeks"]),
  //2589"]),

  new Trait("male", ["earring", "fedora", "muttonchops", "nerd glasses"]),
  //2590"]),

  new Trait("female", ["green eye shadow", "straight hair"]),
  //2591"]),

  new Trait("male", ["cap forward", "earring", "vr"]),
  //2592"]),

  new Trait("male", ["bandana", "eye patch", "goat"]),
  //2593"]),

  new Trait("female", ["clown eyes green", "frumpy hair"]),
  //2594"]),

  new Trait("male", ["classic shades", "earring", "mole", "stringy hair"]),
  //2595"]),

  new Trait("female", ["purple eye shadow"]),
  //2596"]),

  new Trait("male", ["mohawk", "mustache"]),
  //2597"]),

  new Trait("female", ["horned rim glasses", "messy hair"]),
  //2598"]),

  new Trait("male", ["earring", "front beard", "mohawk dark"]),
  //2599"]),

  new Trait("male", ["peak spike", "regular shades"]),
  //2600"]),

  new Trait("female", ["clown eyes blue", "tiara"]),
  //2601"]),

  new Trait("female", ["red mohawk", "vape"]),
  //2602"]),

  new Trait("male", ["horned rim glasses", "stringy hair"]),
  //2603"]),

  new Trait("male", ["handlebars", "stringy hair"]),
  //2604"]),

  new Trait("female", ["clown eyes green", "orange side"]),
  //2605"]),

  new Trait("male", ["headband", "mole"]),
  //2606"]),

  new Trait("male", ["big shades", "handlebars", "headband"]),
  //2607"]),

  new Trait("female", [
    "classic shades",
    "half shaved",
    "hot lipstick",
    "spots",
  ]),
  //2608"]),

  new Trait("male", ["knitted cap", "normal beard", "regular shades"]),
  //2609"]),

  new Trait("female", ["black lipstick", "clown eyes green", "crazy hair"]),
  //2610"]),

  new Trait("male", ["clown nose", "front beard", "mohawk thin"]),
  //2611"]),

  new Trait("male", ["handlebars", "peak spike"]),
  //2612"]),

  new Trait("female", ["mole", "pigtails", "welding goggles"]),
  //2613"]),

  new Trait("male", ["clown eyes blue", "luxurious beard", "police cap"]),
  //2614"]),

  new Trait("male", ["big shades", "cap", "earring"]),
  //2615"]),

  new Trait("male", ["hoodie", "mustache"]),
  //2616"]),

  new Trait("female", ["hot lipstick", "mohawk thin", "vape"]),
  //2617"]),

  new Trait("female", ["clown eyes green", "half shaved", "purple lipstick"]),
  //2618"]),

  new Trait("male", [
    "cigarette",
    "earring",
    "front beard dark",
    "horned rim glasses",
    "knitted cap",
  ]),
  //2619"]),

  new Trait("male", ["3d glasses", "normal beard", "wild hair"]),
  //2620"]),

  new Trait("female", ["earring", "orange side"]),
  //2621"]),

  new Trait("female", ["blue eye shadow", "gold chain", "messy hair"]),
  //2622"]),

  new Trait("female", [
    "big shades",
    "earring",
    "purple lipstick",
    "wild white hair",
  ]),
  //2623"]),

  new Trait("female", ["cigarette", "earring", "wild white hair"]),
  //2624"]),

  new Trait("male", ["front beard", "messy hair", "regular shades"]),
  //2625"]),

  new Trait("female", ["hot lipstick", "pink with hat"]),
  //2626"]),

  new Trait("female", ["bandana", "eye mask"]),
  //2627"]),

  new Trait("female", ["black lipstick", "frumpy hair", "nerd glasses"]),
  //2628"]),

  new Trait("female", ["black lipstick", "earring", "mohawk"]),
  //2629"]),

  new Trait("male", ["frumpy hair", "regular shades"]),
  //2630"]),

  new Trait("male", ["horned rim glasses", "police cap", "silver chain"]),
  //2631"]),

  new Trait("male", ["earring", "frown", "mohawk dark", "mole"]),
  //2632"]),

  new Trait("male", ["hoodie", "regular shades"]),
  //2633"]),

  new Trait("female", ["purple lipstick", "red mohawk"]),
  //2634"]),

  new Trait("male", ["frumpy hair", "mustache"]),
  //2635"]),

  new Trait("male", ["do-rag", "smile"]),
  //2636"]),

  new Trait("male", ["normal beard black", "purple hair"]),
  //2637"]),

  new Trait("female", ["bandana", "cigarette"]),
  //2638"]),

  new Trait("male", [
    "bandana",
    "classic shades",
    "frown",
    "pipe",
    "shadow beard",
  ]),
  //2639"]),

  new Trait("male", ["earring", "shadow beard", "shaved head"]),
  //2640"]),

  new Trait("male", ["cigarette", "cowboy hat", "small shades"]),
  //2641"]),

  new Trait("male", ["big shades", "earring", "front beard", "frumpy hair"]),
  //2642"]),

  new Trait("female", ["clown eyes blue", "earring", "pigtails"]),
  //2643"]),

  new Trait("male", ["handlebars", "mohawk", "smile"]),
  //2644"]),

  new Trait("female", ["hot lipstick", "regular shades", "wild white hair"]),
  //2645"]),

  new Trait("female", ["orange side"]),
  //2646"]),

  new Trait("male", ["frumpy hair", "muttonchops"]),
  //2647"]),

  new Trait("male", ["frown", "messy hair", "shadow beard"]),
  //2648"]),

  new Trait("female", ["green eye shadow", "wild blonde"]),
  //2649"]),

  new Trait("male", ["big shades", "cap", "mustache", "silver chain"]),
  //2650"]),

  new Trait("female", ["black lipstick", "messy hair", "nerd glasses"]),
  //2651"]),

  new Trait("female", ["bandana", "hot lipstick", "mole"]),
  //2652"]),

  new Trait("male", ["do-rag", "earring", "handlebars", "horned rim glasses"]),
  //2653"]),

  new Trait("female", ["big shades", "earring", "straight hair dark"]),
  //2654"]),

  new Trait("male", ["chinstrap", "clown nose", "shaved head"]),
  //2655"]),

  new Trait("male", ["handlebars"]),
  //2656"]),

  new Trait("male", [
    "clown nose",
    "fedora",
    "pipe",
    "regular shades",
    "smile",
  ]),
  //2657"]),

  new Trait("female", ["hot lipstick", "purple eye shadow", "red mohawk"]),
  //2658"]),

  new Trait("female", ["earring", "mole", "purple eye shadow", "stringy hair"]),
  //2659"]),

  new Trait("female", ["clown eyes green", "straight hair blonde"]),
  //2660"]),

  new Trait("male", ["crazy hair", "earring", "mole"]),
  //2661"]),

  new Trait("male", ["eye patch", "luxurious beard", "mohawk dark"]),
  //2662"]),

  new Trait("male", ["horned rim glasses", "wild hair"]),
  //2663"]),

  new Trait("female", [
    "green eye shadow",
    "purple lipstick",
    "wild white hair",
  ]),
  //2664"]),

  new Trait("male", ["eye patch", "purple hair"]),
  //2665"]),

  new Trait("male", ["bandana", "small shades"]),
  //2666"]),

  new Trait("male", ["cigarette", "earring", "frumpy hair"]),
  //2667"]),

  new Trait("male", ["chinstrap", "earring", "frumpy hair"]),
  //2668"]),

  new Trait("male", ["chinstrap", "shaved head"]),
  //2669"]),

  new Trait("male", ["classic shades", "earring", "stringy hair"]),
  //2670"]),

  new Trait("male", ["headband", "small shades"]),
  //2671"]),

  new Trait("male", ["earring", "frown", "muttonchops", "purple hair"]),
  //2672"]),

  new Trait("male", [
    "frumpy hair",
    "horned rim glasses",
    "muttonchops",
    "pipe",
  ]),
  //2673"]),

  new Trait("male", ["front beard dark", "mohawk thin"]),
  //2674"]),

  new Trait("female", ["blue eye shadow", "purple lipstick", "stringy hair"]),
  //2675"]),

  new Trait("female", ["tiara"]),
  //2676"]),

  new Trait("male", ["knitted cap", "mole"]),
  //2677"]),

  new Trait("male", ["buck teeth", "normal beard black", "wild hair"]),
  //2678"]),

  new Trait("male", ["goat", "shaved head"]),
  //2679"]),

  new Trait("female", [
    "black lipstick",
    "choker",
    "pink with hat",
    "purple eye shadow",
  ]),
  //2680"]),

  new Trait("zombie", ["cap", "clown eyes blue"]),
  //2681"]),

  new Trait("female", ["purple eye shadow", "tassle hat"]),
  //2682"]),

  new Trait("male", ["front beard dark", "peak spike"]),
  //2683"]),

  new Trait("male", ["muttonchops", "vampire hair"]),
  //2684"]),

  new Trait("male", ["normal beard black", "purple hair"]),
  //2685"]),

  new Trait("female", ["blonde bob", "clown eyes blue"]),
  //2686"]),

  new Trait("male", ["bandana", "big shades", "mole", "mustache"]),
  //2687"]),

  new Trait("male", [
    "earring",
    "normal beard",
    "regular shades",
    "vampire hair",
  ]),
  //2688"]),

  new Trait("male", ["earring", "normal beard black"]),
  //2689"]),

  new Trait("female", ["blue eye shadow", "pink with hat"]),
  //2690"]),

  new Trait("male", ["knitted cap", "shadow beard", "smile"]),
  //2691"]),

  new Trait("female", ["eye patch", "pipe", "purple lipstick", "wild hair"]),
  //2692"]),

  new Trait("male", ["frumpy hair", "smile"]),
  //2693"]),

  new Trait("male", ["earring", "front beard dark", "wild hair"]),
  //2694"]),

  new Trait("male", ["do-rag", "normal beard black", "small shades"]),
  //2695"]),

  new Trait("female", ["mohawk", "purple lipstick", "regular shades"]),
  //2696"]),

  new Trait("female", ["black lipstick", "clown eyes green", "straight hair"]),
  //2697"]),

  new Trait("female", ["choker", "straight hair blonde"]),
  //2698"]),

  new Trait("male", ["chinstrap", "shaved head"]),
  //2699"]),

  new Trait("female", ["big shades", "messy hair", "purple lipstick"]),
  //2700"]),

  new Trait("male", ["earring", "horned rim glasses", "peak spike", "vape"]),
  //2701"]),

  new Trait("male", ["eye patch", "shadow beard", "wild hair"]),
  //2702"]),

  new Trait("female", ["green eye shadow", "pink with hat"]),
  //2703"]),

  new Trait("female", ["cap", "medical mask", "silver chain"]),
  //2704"]),

  new Trait("female", ["blonde bob", "welding goggles"]),
  //2705"]),

  new Trait("female", ["purple lipstick", "straight hair dark"]),
  //2706"]),

  new Trait("female", ["blue eye shadow", "earring", "headband"]),
  //2707"]),

  new Trait("zombie", ["bandana", "earring"]),
  //2708"]),

  new Trait("male", ["messy hair", "shadow beard"]),
  //2709"]),

  new Trait("female", ["earring", "horned rim glasses", "straight hair dark"]),
  //2710"]),

  new Trait("ape", ["cap forward", "earring"]),
  //2711"]),

  new Trait("female", ["mohawk dark", "spots"]),
  //2712"]),

  new Trait("female", ["blonde short", "purple lipstick"]),
  //2713"]),

  new Trait("female", ["bandana", "earring"]),
  //2714"]),

  new Trait("male", ["earring", "frown", "luxurious beard", "medical mask"]),
  //2715"]),

  new Trait("female", [
    "clown eyes green",
    "hot lipstick",
    "straight hair blonde",
  ]),
  //2716"]),

  new Trait("female", ["pilot helmet", "purple lipstick"]),
  //2717"]),

  new Trait("male", ["cap", "front beard dark", "frown"]),
  //2718"]),

  new Trait("male", ["chinstrap", "wild hair"]),
  //2719"]),

  new Trait("male", ["earring", "eye mask", "messy hair"]),
  //2720"]),

  new Trait("female", ["eye mask", "hot lipstick", "pipe", "straight hair"]),
  //2721"]),

  new Trait("male", ["muttonchops", "wild hair"]),
  //2722"]),

  new Trait("female", ["big shades", "earring", "wild white hair"]),
  //2723"]),

  new Trait("male", ["handlebars", "stringy hair"]),
  //2724"]),

  new Trait("female", ["dark hair", "welding goggles"]),
  //2725"]),

  new Trait("male", ["earring", "fedora", "luxurious beard", "small shades"]),
  //2726"]),

  new Trait("male", ["classic shades", "frown", "shaved head"]),
  //2727"]),

  new Trait("male", [
    "chinstrap",
    "earring",
    "horned rim glasses",
    "stringy hair",
  ]),
  //2728"]),

  new Trait("male", ["cowboy hat", "vape"]),
  //2729"]),

  new Trait("female", ["dark hair", "regular shades"]),
  //2730"]),

  new Trait("female", [
    "earring",
    "hot lipstick",
    "straight hair dark",
    "vape",
  ]),
  //2731"]),

  new Trait("male", ["do-rag", "eye patch", "normal beard black"]),
  //2732"]),

  new Trait("male", ["chinstrap", "shaved head"]),
  //2733"]),

  new Trait("female", ["clown eyes blue", "straight hair dark"]),
  //2734"]),

  new Trait("female", ["crazy hair", "hot lipstick", "vape"]),
  //2735"]),

  new Trait("female", ["earring", "wild blonde"]),
  //2736"]),

  new Trait("male", ["big shades", "earring", "luxurious beard", "wild hair"]),
  //2737"]),

  new Trait("male", ["cigarette", "clown eyes green", "stringy hair"]),
  //2738"]),

  new Trait("male", ["cap", "earring", "goat", "mole"]),
  //2739"]),

  new Trait("female", [
    "gold chain",
    "purple lipstick",
    "straight hair blonde",
  ]),
  //2740"]),

  new Trait("female", ["nerd glasses", "orange side"]),
  //2741"]),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "eye patch",
    "wild white hair",
  ]),
  //2742"]),

  new Trait("female", [
    "black lipstick",
    "regular shades",
    "straight hair dark",
  ]),
  //2743"]),

  new Trait("male", ["mohawk", "shadow beard", "small shades"]),
  //2744"]),

  new Trait("male", ["nerd glasses", "normal beard", "peak spike", "pipe"]),
  //2745"]),

  new Trait("male", ["mohawk dark", "nerd glasses"]),
  //2746"]),

  new Trait("male", ["luxurious beard", "pipe", "purple hair"]),
  //2747"]),

  new Trait("male", ["top hat", "vape"]),
  //2748"]),

  new Trait("male", ["big shades", "headband"]),
  //2749"]),

  new Trait("male", ["cap forward", "mole", "nerd glasses"]),
  //2750"]),

  new Trait("female", ["blonde bob", "earring", "purple eye shadow"]),
  //2751"]),

  new Trait("male", ["small shades", "wild hair"]),
  //2752"]),

  new Trait("male", ["earring", "eye mask", "gold chain", "police cap"]),
  //2753"]),

  new Trait("female", ["black lipstick", "cigarette", "frumpy hair"]),
  //2754"]),

  new Trait("female", ["cigarette", "green eye shadow", "messy hair"]),
  //2755"]),

  new Trait("female", ["clown eyes green", "hot lipstick", "mohawk dark"]),
  //2756"]),

  new Trait("male", ["earring", "headband", "medical mask"]),
  //2757"]),

  new Trait("male", ["cap forward", "cigarette", "clown eyes green"]),
  //2758"]),

  new Trait("female", ["pilot helmet"]),
  //2759"]),

  new Trait("female", ["blue eye shadow", "pigtails"]),
  //2760"]),

  new Trait("female", ["gold chain", "nerd glasses", "straight hair dark"]),
  //2761"]),

  new Trait("male", ["do-rag", "silver chain"]),
  //2762"]),

  new Trait("male", ["cap", "frown", "handlebars"]),
  //2763"]),

  new Trait("male", ["eye patch", "normal beard", "wild hair"]),
  //2764"]),

  new Trait("male", ["cap forward", "muttonchops"]),
  //2765"]),

  new Trait("male", ["clown nose", "police cap", "vr"]),
  //2766"]),

  new Trait("male", ["do-rag", "regular shades", "rosy cheeks"]),
  //2767"]),

  new Trait("male", ["nerd glasses"]),
  //2768"]),

  new Trait("male", ["nerd glasses", "peak spike", "shadow beard"]),
  //2769"]),

  new Trait("male", ["cigarette", "luxurious beard", "mohawk thin"]),
  //2770"]),

  new Trait("male", ["mohawk dark", "shadow beard"]),
  //2771"]),

  new Trait("female", [
    "bandana",
    "black lipstick",
    "clown eyes green",
    "earring",
  ]),
  //2772"]),

  new Trait("male", ["medical mask", "mohawk"]),
  //2773"]),

  new Trait("male", ["earring", "nerd glasses", "stringy hair"]),
  //2774"]),

  new Trait("female", ["earring", "headband"]),
  //2775"]),

  new Trait("male", ["earring", "mohawk", "spots"]),
  //2776"]),

  new Trait("male", ["normal beard", "shaved head", "small shades"]),
  //2777"]),

  new Trait("male", ["big shades", "front beard", "messy hair"]),
  //2778"]),

  new Trait("male", ["earring", "frumpy hair", "handlebars"]),
  //2779"]),

  new Trait("male", ["crazy hair", "earring", "nerd glasses"]),
  //2780"]),

  new Trait("female", ["3d glasses", "red mohawk"]),
  //2781"]),

  new Trait("female", ["classic shades", "purple lipstick", "stringy hair"]),
  //2782"]),

  new Trait("male", ["bandana", "shadow beard"]),
  //2783"]),

  new Trait("male", ["clown eyes blue", "crazy hair", "normal beard black"]),
  //2784"]),

  new Trait("male", ["eye patch", "knitted cap", "normal beard"]),
  //2785"]),

  new Trait("male", ["bandana", "cigarette", "earring", "horned rim glasses"]),
  //2786"]),

  new Trait("female", ["earring", "mohawk dark", "purple eye shadow"]),
  //2787"]),

  new Trait("male", ["classic shades", "do-rag", "front beard", "mole"]),
  //2788"]),

  new Trait("male", ["horned rim glasses", "shadow beard", "vampire hair"]),
  //2789"]),

  new Trait("male", ["normal beard", "wild hair"]),
  //2790"]),

  new Trait("male", ["handlebars", "mohawk thin"]),
  //2791"]),

  new Trait("female", ["purple lipstick", "silver chain", "straight hair"]),
  //2792"]),

  new Trait("female", ["blonde short", "clown nose", "nerd glasses"]),
  //2793"]),

  new Trait("male", ["3d glasses", "cigarette", "messy hair"]),
  //2794"]),

  new Trait("female", ["green eye shadow", "rosy cheeks", "wild blonde"]),
  //2795"]),

  new Trait("male", ["horned rim glasses", "peak spike", "shadow beard"]),
  //2796"]),

  new Trait("male", ["goat", "horned rim glasses", "mohawk thin"]),
  //2797"]),

  new Trait("male", ["cap forward", "earring", "eye patch"]),
  //2798"]),

  new Trait("female", ["earring", "horned rim glasses", "wild hair"]),
  //2799"]),

  new Trait("female", ["orange side"]),
  //2800"]),

  new Trait("male", ["messy hair", "small shades"]),
  //2801"]),

  new Trait("male", ["big shades", "stringy hair"]),
  //2802"]),

  new Trait("male", ["chinstrap", "knitted cap", "regular shades"]),
  //2803"]),

  new Trait("male", ["nerd glasses", "shaved head", "spots"]),
  //2804"]),

  new Trait("male", ["chinstrap", "police cap"]),
  //2805"]),

  new Trait("male", ["goat", "purple hair"]),
  //2806"]),

  new Trait("female", ["cap", "earring", "hot lipstick", "vr"]),
  //2807"]),

  new Trait("female", ["knitted cap", "purple lipstick"]),
  //2808"]),

  new Trait("male", ["mohawk dark", "normal beard"]),
  //2809"]),

  new Trait("male", ["do-rag", "nerd glasses"]),
  //2810"]),

  new Trait("female", ["clown eyes green", "purple lipstick", "wild blonde"]),
  //2811"]),

  new Trait("female", ["cap", "purple lipstick", "vape"]),
  //2812"]),

  new Trait("female", ["blonde short", "hot lipstick"]),
  //2813"]),

  new Trait("female", ["earring", "half shaved", "hot lipstick", "vape"]),
  //2814"]),

  new Trait("female", [
    "earring",
    "nerd glasses",
    "purple lipstick",
    "straight hair",
  ]),
  //2815"]),

  new Trait("female", ["clown eyes blue", "clown nose", "straight hair dark"]),
  //2816"]),

  new Trait("female", ["clown eyes blue", "hot lipstick", "messy hair"]),
  //2817"]),

  new Trait("male", ["earring", "normal beard black", "stringy hair"]),
  //2818"]),

  new Trait("male", [
    "chinstrap",
    "horned rim glasses",
    "mole",
    "vampire hair",
  ]),
  //2819"]),

  new Trait("male", ["3d glasses", "bandana", "luxurious beard"]),
  //2820"]),

  new Trait("female", ["earring", "stringy hair"]),
  //2821"]),

  new Trait("female", ["purple eye shadow", "stringy hair"]),
  //2822"]),

  new Trait("male", ["hoodie", "vr"]),
  //2823"]),

  new Trait("male", ["knitted cap", "mustache"]),
  //2824"]),

  new Trait("male", ["bandana", "handlebars", "small shades"]),
  //2825"]),

  new Trait("female", ["earring", "frumpy hair", "vr"]),
  //2826"]),

  new Trait("male", ["earring", "fedora"]),
  //2827"]),

  new Trait("female", ["clown eyes green", "earring", "pigtails"]),
  //2828"]),

  new Trait("female", ["blonde bob", "blue eye shadow", "earring"]),
  //2829"]),

  new Trait("male", ["cigarette", "classic shades", "earring", "peak spike"]),
  //2830"]),

  new Trait("female", ["big shades", "black lipstick", "wild white hair"]),
  //2831"]),

  new Trait("female", ["horned rim glasses", "straight hair"]),
  //2832"]),

  new Trait("male", ["cowboy hat", "front beard"]),
  //2833"]),

  new Trait("male", ["fedora", "front beard"]),
  //2834"]),

  new Trait("male", [
    "earring",
    "nerd glasses",
    "normal beard black",
    "peak spike",
  ]),
  //2835"]),

  new Trait("female", [
    "cigarette",
    "earring",
    "welding goggles",
    "wild white hair",
  ]),
  //2836"]),

  new Trait("female", ["blue eye shadow", "stringy hair"]),
  //2837"]),

  new Trait("male", ["cap", "cigarette"]),
  //2838"]),

  new Trait("female", ["classic shades", "mohawk"]),
  //2839"]),

  new Trait("male", ["cap forward", "horned rim glasses"]),
  //2840"]),

  new Trait("female", ["spots", "straight hair blonde"]),
  //2841"]),

  new Trait("male", ["earring", "mohawk thin", "normal beard"]),
  //2842"]),

  new Trait("female", [
    "bandana",
    "black lipstick",
    "earring",
    "eye mask",
    "vape",
  ]),
  //2843"]),

  new Trait("female", ["black lipstick", "pilot helmet"]),
  //2844"]),

  new Trait("male", ["clown hair green", "earring", "eye patch"]),
  //2845"]),

  new Trait("female", ["black lipstick", "messy hair"]),
  //2846"]),

  new Trait("male", ["earring", "knitted cap", "nerd glasses"]),
  //2847"]),

  new Trait("male", ["earring", "mohawk thin", "mustache"]),
  //2848"]),

  new Trait("female", ["headband", "regular shades"]),
  //2849"]),

  new Trait("female", ["earring", "messy hair"]),
  //2850"]),

  new Trait("male", ["earring", "police cap"]),
  //2851"]),

  new Trait("female", [
    "black lipstick",
    "earring",
    "regular shades",
    "wild white hair",
  ]),
  //2852"]),

  new Trait("male", ["normal beard", "wild hair"]),
  //2853"]),

  new Trait("male", ["earring", "handlebars", "police cap"]),
  //2854"]),

  new Trait("male", ["handlebars", "mohawk dark"]),
  //2855"]),

  new Trait("male", ["eye mask", "peak spike", "pipe"]),
  //2856"]),

  new Trait("female", ["cigarette", "crazy hair", "welding goggles"]),
  //2857"]),

  new Trait("female", ["clown eyes green", "mohawk dark", "purple lipstick"]),
  //2858"]),

  new Trait("male", ["big beard", "headband", "small shades"]),
  //2859"]),

  new Trait("female", ["mohawk", "regular shades"]),
  //2860"]),

  new Trait("male", ["mole"]),
  //2861"]),

  new Trait("male", ["headband", "muttonchops"]),
  //2862"]),

  new Trait("male", ["police cap", "silver chain"]),
  //2863"]),

  new Trait("male", ["eye mask", "knitted cap", "mustache"]),
  //2864"]),

  new Trait("male", ["fedora", "handlebars"]),
  //2865"]),

  new Trait("male", ["bandana", "classic shades", "earring", "muttonchops"]),
  //2866"]),

  new Trait("female", ["blue eye shadow", "pink with hat"]),
  //2867"]),

  new Trait("male", ["front beard dark", "peak spike"]),
  //2868"]),

  new Trait("male", ["3d glasses", "mohawk dark"]),
  //2869"]),

  new Trait("male", ["chinstrap", "knitted cap"]),
  //2870"]),

  new Trait("male", ["cigarette", "horned rim glasses", "messy hair"]),
  //2871"]),

  new Trait("male", ["police cap", "silver chain", "small shades"]),
  //2872"]),

  new Trait("male", ["cigarette", "eye mask", "vampire hair"]),
  //2873"]),

  new Trait("male", ["clown nose", "crazy hair", "eye patch"]),
  //2874"]),

  new Trait("male", ["handlebars", "shaved head"]),
  //2875"]),

  new Trait("female", ["purple lipstick", "stringy hair", "vape"]),
  //2876"]),

  new Trait("male", ["crazy hair", "front beard dark"]),
  //2877"]),

  new Trait("male", ["clown eyes blue", "peak spike", "pipe"]),
  //2878"]),

  new Trait("male", ["muttonchops", "purple hair"]),
  //2879"]),

  new Trait("male", ["mohawk thin", "regular shades"]),
  //2880"]),

  new Trait("male", ["goat", "regular shades", "shaved head"]),
  //2881"]),

  new Trait("male", ["earring", "pipe"]),
  //2882"]),

  new Trait("male", ["messy hair", "vr"]),
  //2883"]),

  new Trait("female", ["pilot helmet", "vape"]),
  //2884"]),

  new Trait("male", [
    "earring",
    "headband",
    "mole",
    "shadow beard",
    "small shades",
  ]),
  //2885"]),

  new Trait("male", ["cigarette", "hoodie", "luxurious beard"]),
  //2886"]),

  new Trait("male", ["luxurious beard", "top hat"]),
  //2887"]),

  new Trait("female", ["black lipstick", "cigarette", "mohawk dark"]),
  //2888"]),

  new Trait("female", ["cigarette", "pilot helmet", "purple lipstick"]),
  //2889"]),

  new Trait("alien", ["cap"]),
  //2890"]),

  new Trait("female", ["regular shades", "tiara"]),
  //2891"]),

  new Trait("male", ["normal beard", "top hat", "vr"]),
  //2892"]),

  new Trait("female", ["earring", "nerd glasses", "wild blonde"]),
  //2893"]),

  new Trait("male", ["chinstrap", "earring", "frown", "gold chain", "hoodie"]),
  //2894"]),

  new Trait("male", ["3d glasses", "cowboy hat"]),
  //2895"]),

  new Trait("female", ["blue eye shadow", "earring", "straight hair dark"]),
  //2896"]),

  new Trait("male", ["big shades", "headband"]),
  //2897"]),

  new Trait("male", ["big shades", "do-rag", "earring"]),
  //2898"]),

  new Trait("male", ["front beard dark", "purple hair"]),
  //2899"]),

  new Trait("female", ["earring", "pilot helmet"]),
  //2900"]),

  new Trait("male", [
    "cap",
    "cigarette",
    "normal beard black",
    "regular shades",
  ]),
  //2901"]),

  new Trait("male", ["do-rag", "shadow beard"]),
  //2902"]),

  new Trait("female", [
    "classic shades",
    "earring",
    "hot lipstick",
    "mohawk dark",
  ]),
  //2903"]),

  new Trait("female", ["bandana", "choker", "clown eyes blue", "hot lipstick"]),
  //2904"]),

  new Trait("female", ["earring", "hot lipstick", "knitted cap"]),
  //2905"]),

  new Trait("male", ["eye patch", "front beard dark", "knitted cap"]),
  //2906"]),

  new Trait("male", ["eye patch", "goat", "messy hair"]),
  //2907"]),

  new Trait("male", ["eye mask", "wild hair"]),
  //2908"]),

  new Trait("female", ["black lipstick", "pilot helmet"]),
  //2909"]),

  new Trait("male", ["nerd glasses", "top hat"]),
  //2910"]),

  new Trait("male", ["front beard dark", "frumpy hair", "medical mask"]),
  //2911"]),

  new Trait("male", ["shadow beard", "shaved head"]),
  //2912"]),

  new Trait("male", ["front beard", "small shades", "stringy hair"]),
  //2913"]),

  new Trait("female", ["frumpy hair", "hot lipstick"]),
  //2914"]),

  new Trait("female", [
    "bandana",
    "clown eyes green",
    "earring",
    "purple lipstick",
  ]),
  //2915"]),

  new Trait("male", ["bandana", "clown nose", "goat"]),
  //2916"]),

  new Trait("female", ["bandana", "purple lipstick"]),
  //2917"]),

  new Trait("female", ["blue eye shadow", "tassle hat", "vape"]),
  //2918"]),

  new Trait("female", ["mole", "straight hair dark"]),
  //2919"]),

  new Trait("female", ["nerd glasses", "straight hair dark"]),
  //2920"]),

  new Trait("male", ["cigarette", "shaved head"]),
  //2921"]),

  new Trait("male", ["3d glasses", "cap", "earring"]),
  //2922"]),

  new Trait("male", [
    "buck teeth",
    "regular shades",
    "shadow beard",
    "stringy hair",
  ]),
  //2923"]),

  new Trait("ape", ["hoodie"]),
  //2924"]),

  new Trait("male", ["earring", "nerd glasses", "police cap"]),
  //2925"]),

  new Trait("male", ["messy hair", "mustache", "nerd glasses"]),
  //2926"]),

  new Trait("male", ["normal beard"]),
  //2927"]),

  new Trait("male", ["earring", "headband", "nerd glasses"]),
  //2928"]),

  new Trait("male", ["eye patch", "frumpy hair"]),
  //2929"]),

  new Trait("male", ["big shades", "clown hair green"]),
  //2930"]),

  new Trait("male", ["shadow beard", "stringy hair"]),
  //2931"]),

  new Trait("male", ["front beard"]),
  //2932"]),

  new Trait("male", ["bandana", "cigarette", "earring"]),
  //2933"]),

  new Trait("male", ["goat", "peak spike"]),
  //2934"]),

  new Trait("male", ["big beard", "cap forward", "classic shades", "earring"]),
  //2935"]),

  new Trait("male", ["crazy hair", "goat", "horned rim glasses"]),
  //2936"]),

  new Trait("female", ["purple eye shadow", "purple lipstick", "stringy hair"]),
  //2937"]),

  new Trait("zombie", ["wild hair"]),
  //2938"]),

  new Trait("male", ["earring", "knitted cap"]),
  //2939"]),

  new Trait("female", [
    "blonde bob",
    "clown eyes blue",
    "earring",
    "hot lipstick",
    "spots",
  ]),
  //2940"]),

  new Trait("female", ["bandana", "green eye shadow"]),
  //2941"]),

  new Trait("male", ["frumpy hair", "spots"]),
  //2942"]),

  new Trait("female", ["clown eyes green", "hot lipstick", "stringy hair"]),
  //2943"]),

  new Trait("male", ["frumpy hair", "nerd glasses", "shadow beard"]),
  //2944"]),

  new Trait("female", [
    "earring",
    "purple eye shadow",
    "purple lipstick",
    "straight hair dark",
  ]),
  //2945"]),

  new Trait("female", ["classic shades", "dark hair", "earring"]),
  //2946"]),

  new Trait("male", ["bandana", "earring", "front beard dark", "small shades"]),
  //2947"]),

  new Trait("male", ["eye mask", "wild hair"]),
  //2948"]),

  new Trait("male", ["earring", "eye patch", "medical mask", "mohawk thin"]),
  //2949"]),

  new Trait("female", ["headband"]),
  //2950"]),

  new Trait("male", ["police cap", "smile"]),
  //2951"]),

  new Trait("male", ["big shades", "earring", "mohawk dark"]),
  //2952"]),

  new Trait("male", [
    "normal beard black",
    "regular shades",
    "vape",
    "wild hair",
  ]),
  //2953"]),

  new Trait("female", ["vr", "wild blonde"]),
  //2954"]),

  new Trait("male", ["clown nose", "front beard", "frumpy hair"]),
  //2955"]),

  new Trait("male", ["messy hair", "regular shades", "shadow beard"]),
  //2956"]),

  new Trait("male", ["cigarette", "earring", "mohawk", "mole"]),
  //2957"]),

  new Trait("female", ["clown eyes blue", "pink with hat"]),
  //2958"]),

  new Trait("male", ["clown eyes green", "muttonchops", "shaved head"]),
  //2959"]),

  new Trait("female", ["medical mask", "tassle hat"]),
  //2960"]),

  new Trait("male", ["big beard", "frown", "mole", "wild hair"]),
  //2961"]),

  new Trait("male", [
    "cigarette",
    "clown eyes green",
    "crazy hair",
    "normal beard black",
  ]),
  //2962"]),

  new Trait("female", ["mohawk", "purple eye shadow", "purple lipstick"]),
  //2963"]),

  new Trait("male", ["beanie"]),
  //2964"]),

  new Trait("male", ["horned rim glasses", "normal beard", "shaved head"]),
  //2965"]),

  new Trait("female", ["blue eye shadow", "knitted cap", "pipe"]),
  //2966"]),

  new Trait("zombie", ["chinstrap", "mohawk thin"]),
  //2967"]),

  new Trait("female", ["eye mask", "mohawk dark", "vape"]),
  //2968"]),

  new Trait("female", ["classic shades", "frumpy hair", "hot lipstick"]),
  //2969"]),

  new Trait("male", ["earring", "shadow beard", "stringy hair"]),
  //2970"]),

  new Trait("male", ["classic shades", "mole", "peak spike"]),
  //2971"]),

  new Trait("female", ["clown eyes green", "messy hair"]),
  //2972"]),

  new Trait("female", ["frumpy hair", "purple lipstick", "vr"]),
  //2973"]),

  new Trait("female", ["black lipstick", "clown eyes green", "crazy hair"]),
  //2974"]),

  new Trait("male", ["cap forward", "muttonchops"]),
  //2975"]),

  new Trait("male", ["headband", "regular shades"]),
  //2976"]),

  new Trait("female", [
    "clown eyes green",
    "hot lipstick",
    "straight hair dark",
  ]),
  //2977"]),

  new Trait("female", ["black lipstick", "pink with hat", "regular shades"]),
  //2978"]),

  new Trait("male", ["front beard dark", "wild hair"]),
  //2979"]),

  new Trait("male", ["cap forward", "mustache", "vr"]),
  //2980"]),

  new Trait("female", ["mohawk thin", "welding goggles"]),
  //2981"]),

  new Trait("male", ["knitted cap", "medical mask"]),
  //2982"]),

  new Trait("male", ["earring", "regular shades", "shaved head"]),
  //2983"]),

  new Trait("female", ["hot lipstick", "red mohawk", "regular shades"]),
  //2984"]),

  new Trait("male", ["buck teeth", "fedora"]),
  //2985"]),

  new Trait("male", ["earring", "handlebars", "messy hair"]),
  //2986"]),

  new Trait("male", ["mustache", "shaved head"]),
  //2987"]),

  new Trait("male", ["cigarette", "frumpy hair", "normal beard black"]),
  //2988"]),

  new Trait("male", ["horned rim glasses", "shaved head"]),
  //2989"]),

  new Trait("male", ["nerd glasses", "purple hair"]),
  //2990"]),

  new Trait("male", ["front beard", "mohawk thin"]),
  //2991"]),

  new Trait("male", ["chinstrap", "police cap", "small shades"]),
  //2992"]),

  new Trait("male", ["do-rag", "front beard dark", "horned rim glasses"]),
  //2993"]),

  new Trait("female", ["blonde short", "hot lipstick", "nerd glasses"]),
  //2994"]),

  new Trait("male", ["eye patch"]),
  //2995"]),

  new Trait("male", ["do-rag", "handlebars"]),
  //2996"]),

  new Trait("female", ["clown eyes green", "clown hair green"]),
  //2997"]),

  new Trait("male", ["earring", "fedora", "shadow beard"]),
  //2998"]),

  new Trait("male", ["eye patch", "front beard dark", "stringy hair"]),
  //2999"]),

  new Trait("male", ["frumpy hair", "normal beard"]),
  //3000"]),

  new Trait("male", ["nerd glasses", "vampire hair"]),
  //3001"]),

  new Trait("female", ["mohawk", "purple eye shadow"]),
  //3002"]),

  new Trait("male", ["do-rag", "front beard"]),
  //3003"]),

  new Trait("female", ["earring", "mohawk", "nerd glasses", "purple lipstick"]),
  //3004"]),

  new Trait("female", ["messy hair", "welding goggles"]),
  //3005"]),

  new Trait("male", ["crazy hair", "front beard"]),
  //3006"]),

  new Trait("male", ["3d glasses", "wild hair"]),
  //3007"]),

  new Trait("female", ["horned rim glasses", "tassle hat"]),
  //3008"]),

  new Trait("male", [
    "big shades",
    "cigarette",
    "earring",
    "normal beard",
    "peak spike",
  ]),
  //3009"]),

  new Trait("male", ["shadow beard", "vampire hair"]),
  //3010"]),

  new Trait("male", [
    "earring",
    "frown",
    "normal beard",
    "pipe",
    "small shades",
    "vampire hair",
  ]),
  //3011"]),

  new Trait("male", ["gold chain", "stringy hair"]),
  //3012"]),

  new Trait("male", ["chinstrap", "gold chain", "stringy hair"]),
  //3013"]),

  new Trait("male", ["horned rim glasses", "shadow beard", "wild hair"]),
  //3014"]),

  new Trait("female", ["crazy hair", "hot lipstick", "welding goggles"]),
  //3015"]),

  new Trait("male", [
    "clown eyes green",
    "messy hair",
    "normal beard black",
    "smile",
  ]),
  //3016"]),

  new Trait("male", ["big beard", "eye mask", "frown", "knitted cap"]),
  //3017"]),

  new Trait("male", ["cigarette", "normal beard", "wild hair"]),
  //3018"]),

  new Trait("male", ["chinstrap", "eye patch", "mohawk dark"]),
  //3019"]),

  new Trait("male", ["cigarette", "do-rag", "luxurious beard"]),
  //3020"]),

  new Trait("male", ["handlebars", "messy hair", "vr"]),
  //3021"]),

  new Trait("male", ["clown eyes green", "hoodie"]),
  //3022"]),

  new Trait("male", ["bandana", "earring", "shadow beard"]),
  //3023"]),

  new Trait("male", ["frumpy hair", "vr"]),
  //3024"]),

  new Trait("female", ["clown eyes blue", "hot lipstick", "knitted cap"]),
  //3025"]),

  new Trait("female", ["blonde short", "horned rim glasses"]),
  //3026"]),

  new Trait("male", ["3d glasses", "bandana", "front beard dark"]),
  //3027"]),

  new Trait("male", ["bandana", "eye patch", "shadow beard"]),
  //3028"]),

  new Trait("female", ["blue eye shadow", "earring", "red mohawk"]),
  //3029"]),

  new Trait("female", ["clown eyes blue", "stringy hair"]),
  //3030"]),

  new Trait("female", ["nerd glasses", "tassle hat"]),
  //3031"]),

  new Trait("female", ["rosy cheeks", "wild blonde"]),
  //3032"]),

  new Trait("male", ["cigarette", "do-rag", "shadow beard"]),
  //3033"]),

  new Trait("female", ["bandana", "green eye shadow", "hot lipstick"]),
  //3034"]),

  new Trait("male", ["handlebars", "nerd glasses", "wild hair"]),
  //3035"]),

  new Trait("male", ["eye patch", "luxurious beard", "peak spike"]),
  //3036"]),

  new Trait("female", ["blonde bob", "hot lipstick"]),
  //3037"]),

  new Trait("female", ["cap", "cigarette", "spots"]),
  //3038"]),

  new Trait("male", ["frown", "hoodie", "mustache"]),
  //3039"]),

  new Trait("male", ["front beard dark", "knitted cap", "nerd glasses"]),
  //3040"]),

  new Trait("male", ["mustache", "purple hair"]),
  //3041"]),

  new Trait("female", ["black lipstick", "clown eyes blue", "mohawk"]),
  //3042"]),

  new Trait("female", ["blue eye shadow", "straight hair blonde", "vape"]),
  //3043"]),

  new Trait("female", ["classic shades", "straight hair dark"]),
  //3044"]),

  new Trait("male", ["horned rim glasses", "peak spike", "shadow beard"]),
  //3045"]),

  new Trait("male", ["cap", "classic shades", "earring"]),
  //3046"]),

  new Trait("male", ["earring", "shadow beard", "wild hair"]),
  //3047"]),

  new Trait("male", ["clown eyes green", "messy hair"]),
  //3048"]),

  new Trait("male", ["goat", "hoodie"]),
  //3049"]),

  new Trait("female", ["horned rim glasses", "stringy hair"]),
  //3050"]),

  new Trait("female", ["earring", "purple lipstick", "red mohawk"]),
  //3051"]),

  new Trait("male", ["cap", "medical mask", "normal beard black"]),
  //3052"]),

  new Trait("male", ["do-rag", "earring", "muttonchops"]),
  //3053"]),

  new Trait("male", ["messy hair", "small shades"]),
  //3054"]),

  new Trait("male", ["front beard dark", "nerd glasses", "peak spike"]),
  //3055"]),

  new Trait("male", ["cap forward", "earring", "small shades"]),
  //3056"]),

  new Trait("female", ["clown eyes green", "hot lipstick", "pink with hat"]),
  //3057"]),

  new Trait("female", ["crazy hair", "purple eye shadow"]),
  //3058"]),

  new Trait("female", ["earring", "headband"]),
  //3059"]),

  new Trait("female", ["pigtails"]),
  //3060"]),

  new Trait("male", ["big shades", "hoodie"]),
  //3061"]),

  new Trait("male", ["earring", "luxurious beard", "shaved head"]),
  //3062"]),

  new Trait("male", ["clown hair green", "handlebars"]),
  //3063"]),

  new Trait("male", ["cowboy hat", "earring", "horned rim glasses"]),
  //3064"]),

  new Trait("male", ["regular shades", "wild hair"]),
  //3065"]),

  new Trait("female", [
    "black lipstick",
    "clown eyes green",
    "earring",
    "headband",
  ]),
  //3066"]),

  new Trait("male", ["do-rag", "earring", "goat", "horned rim glasses"]),
  //3067"]),

  new Trait("male", ["shadow beard", "small shades", "wild hair"]),
  //3068"]),

  new Trait("male", ["eye patch", "knitted cap"]),
  //3069"]),

  new Trait("male", ["earring", "mohawk thin"]),
  //3070"]),

  new Trait("female", ["clown hair green", "hot lipstick"]),
  //3071"]),

  new Trait("male", ["big shades", "earring", "shaved head"]),
  //3072"]),

  new Trait("male", ["bandana", "big beard", "eye mask"]),
  //3073"]),

  new Trait("male", ["buck teeth", "earring", "purple hair", "vape"]),
  //3074"]),

  new Trait("male", ["do-rag", "eye mask", "pipe"]),
  //3075"]),

  new Trait("female", ["clown eyes green", "mohawk dark"]),
  //3076"]),

  new Trait("male", ["classic shades", "cowboy hat"]),
  //3077"]),

  new Trait("female", ["purple eye shadow", "purple lipstick", "wild blonde"]),
  //3078"]),

  new Trait("female", ["eye mask", "tassle hat"]),
  //3079"]),

  new Trait("male", ["cap forward", "earring", "front beard"]),
  //3080"]),

  new Trait("male", ["classic shades", "knitted cap"]),
  //3081"]),

  new Trait("female", ["black lipstick", "clown eyes green", "mohawk dark"]),
  //3082"]),

  new Trait("male", ["chinstrap", "cowboy hat"]),
  //3083"]),

  new Trait("female", [
    "black lipstick",
    "mohawk dark",
    "regular shades",
    "rosy cheeks",
  ]),
  //3084"]),

  new Trait("male", ["earring", "frumpy hair", "normal beard black", "vr"]),
  //3085"]),

  new Trait("male", ["cap", "mole", "regular shades"]),
  //3086"]),

  new Trait("female", ["blue eye shadow", "hot lipstick", "tassle hat"]),
  //3087"]),

  new Trait("male", ["earring", "normal beard black", "top hat", "vr"]),
  //3088"]),

  new Trait("female", ["cap", "earring"]),
  //3089"]),

  new Trait("male", ["classic shades", "frown", "luxurious beard", "mohawk"]),
  //3090"]),

  new Trait("male", ["classic shades", "muttonchops", "peak spike"]),
  //3091"]),

  new Trait("female", ["green eye shadow", "headband"]),
  //3092"]),

  new Trait("male", ["bandana", "horned rim glasses"]),
  //3093"]),

  new Trait("male", [
    "buck teeth",
    "classic shades",
    "muttonchops",
    "stringy hair",
  ]),
  //3094"]),

  new Trait("male", ["cigarette", "knitted cap", "normal beard black"]),
  //3095"]),

  new Trait("female", ["clown eyes blue", "earring", "pink with hat", "vape"]),
  //3096"]),

  new Trait("male", ["earring", "normal beard", "police cap"]),
  //3097"]),

  new Trait("female", ["hot lipstick", "mohawk thin", "nerd glasses", "pipe"]),
  //3098"]),

  new Trait("male", ["bandana", "chinstrap", "earring", "spots"]),
  //3099"]),

  new Trait("alien", ["headband"]),
  //3100"]),

  new Trait("male", ["hoodie", "nerd glasses", "shadow beard"]),
  //3101"]),

  new Trait("female", ["clown eyes green", "pink with hat"]),
  //3102"]),

  new Trait("male", ["clown hair green", "shadow beard"]),
  //3103"]),

  new Trait("male", ["horned rim glasses", "mohawk dark"]),
  //3104"]),

  new Trait("female", ["welding goggles"]),
  //3105"]),

  new Trait("male", ["beanie", "shadow beard"]),
  //3106"]),

  new Trait("male", ["beanie", "big beard", "earring"]),
  //3107"]),

  new Trait("male", ["mohawk dark", "vr"]),
  //3108"]),

  new Trait("female", ["cap", "nerd glasses", "purple lipstick"]),
  //3109"]),

  new Trait("female", ["bandana", "clown eyes blue", "earring"]),
  //3110"]),

  new Trait("female", ["knitted cap"]),
  //3111"]),

  new Trait("female", [
    "blue eye shadow",
    "cigarette",
    "hot lipstick",
    "mole",
    "straight hair blonde",
  ]),
  //3112"]),

  new Trait("female", ["clown eyes blue", "dark hair", "purple lipstick"]),
  //3113"]),

  new Trait("male", ["classic shades", "knitted cap"]),
  //3114"]),

  new Trait("male", ["goat", "mohawk thin", "regular shades"]),
  //3115"]),

  new Trait("female", ["blonde bob", "clown eyes blue", "hot lipstick"]),
  //3116"]),

  new Trait("male", ["crazy hair", "frown", "regular shades"]),
  //3117"]),

  new Trait("female", ["hot lipstick", "knitted cap"]),
  //3118"]),

  new Trait("female", [
    "black lipstick",
    "horned rim glasses",
    "wild white hair",
  ]),
  //3119"]),

  new Trait("male", ["cap forward", "front beard dark", "medical mask"]),
  //3120"]),

  new Trait("male", ["eye mask", "stringy hair"]),
  //3121"]),

  new Trait("male", ["classic shades", "luxurious beard", "mohawk dark"]),
  //3122"]),

  new Trait("male", ["cap", "cigarette", "muttonchops", "small shades"]),
  //3123"]),

  new Trait("female", ["big shades", "wild hair"]),
  //3124"]),

  new Trait("female", ["classic shades", "half shaved", "purple lipstick"]),
  //3125"]),

  new Trait("female", ["black lipstick", "earring"]),
  //3126"]),

  new Trait("male", ["chinstrap", "do-rag", "earring", "mole", "nerd glasses"]),
  //3127"]),

  new Trait("male", ["earring", "messy hair", "regular shades"]),
  //3128"]),

  new Trait("male", ["chinstrap", "vampire hair", "vr"]),
  //3129"]),

  new Trait("male", [
    "earring",
    "mohawk dark",
    "muttonchops",
    "rosy cheeks",
    "small shades",
  ]),
  //3130"]),

  new Trait("female", ["dark hair", "earring", "mole"]),
  //3131"]),

  new Trait("male", ["nerd glasses", "shaved head"]),
  //3132"]),

  new Trait("male", ["crazy hair", "front beard dark"]),
  //3133"]),

  new Trait("male", ["crazy hair", "gold chain", "regular shades"]),
  //3134"]),

  new Trait("female", ["black lipstick", "clown eyes blue", "pink with hat"]),
  //3135"]),

  new Trait("male", ["3d glasses", "headband", "rosy cheeks"]),
  //3136"]),

  new Trait("male", ["big shades", "messy hair", "normal beard"]),
  //3137"]),

  new Trait("male", ["cap", "eye patch"]),
  //3138"]),

  new Trait("female", ["big shades", "pink with hat", "spots"]),
  //3139"]),

  new Trait("female", ["black lipstick", "mohawk thin"]),
  //3140"]),

  new Trait("male", ["mohawk thin", "nerd glasses", "normal beard black"]),
  //3141"]),

  new Trait("male", ["do-rag", "goat", "small shades"]),
  //3142"]),

  new Trait("male", ["earring", "handlebars", "shaved head"]),
  //3143"]),

  new Trait("male", ["cowboy hat", "normal beard black"]),
  //3144"]),

  new Trait("male", ["do-rag", "eye patch", "mole"]),
  //3145"]),

  new Trait("male", ["peak spike", "vape"]),
  //3146"]),

  new Trait("male", ["bandana", "goat", "small shades"]),
  //3147"]),

  new Trait("female", ["big shades", "cigarette", "tassle hat"]),
  //3148"]),

  new Trait("female", ["black lipstick", "mohawk", "purple eye shadow"]),
  //3149"]),

  new Trait("male", ["eye patch", "mohawk"]),
  //3150"]),

  new Trait("female", ["straight hair dark"]),
  //3151"]),

  new Trait("male", ["bandana", "frown", "regular shades"]),
  //3152"]),

  new Trait("female", ["classic shades", "straight hair blonde"]),
  //3153"]),

  new Trait("male", ["big beard", "do-rag", "earring"]),
  //3154"]),

  new Trait("female", ["black lipstick", "cigarette", "dark hair"]),
  //3155"]),

  new Trait("male", ["cigarette", "eye mask", "front beard dark", "mohawk"]),
  //3156"]),

  new Trait("male", ["shadow beard", "shaved head"]),
  //3157"]),

  new Trait("female", ["earring", "mohawk thin", "purple lipstick"]),
  //3158"]),

  new Trait("male", ["handlebars", "small shades", "wild hair"]),
  //3159"]),

  new Trait("male", ["earring", "top hat"]),
  //3160"]),

  new Trait("male", ["eye mask", "mohawk"]),
  //3161"]),

  new Trait("female", ["green eye shadow", "messy hair"]),
  //3162"]),

  new Trait("male", ["mohawk", "normal beard black"]),
  //3163"]),

  new Trait("male", ["crazy hair", "earring", "normal beard black"]),
  //3164"]),

  new Trait("female", ["clown eyes green", "wild blonde"]),
  //3165"]),

  new Trait("female", ["black lipstick", "knitted cap"]),
  //3166"]),

  new Trait("male", ["3d glasses", "earring", "knitted cap"]),
  //3167"]),

  new Trait("male", ["chinstrap", "do-rag"]),
  //3168"]),

  new Trait("male", ["frown", "messy hair"]),
  //3169"]),

  new Trait("female", ["green eye shadow", "wild white hair"]),
  //3170"]),

  new Trait("male", ["cigarette", "small shades"]),
  //3171"]),

  new Trait("male", ["frown", "stringy hair"]),
  //3172"]),

  new Trait("male", [
    "cap forward",
    "front beard dark",
    "horned rim glasses",
    "mole",
  ]),
  //3173"]),

  new Trait("male", ["mohawk dark", "rosy cheeks"]),
  //3174"]),

  new Trait("male", ["normal beard", "shaved head"]),
  //3175"]),

  new Trait("female", ["earring", "straight hair", "welding goggles"]),
  //3176"]),

  new Trait("male", ["clown hair green", "frown", "luxurious beard"]),
  //3177"]),

  new Trait("female", ["3d glasses", "purple lipstick", "wild white hair"]),
  //3178"]),

  new Trait("female", ["green eye shadow", "mohawk"]),
  //3179"]),

  new Trait("male", ["3d glasses", "knitted cap", "shadow beard"]),
  //3180"]),

  new Trait("male", ["front beard", "frumpy hair", "horned rim glasses"]),
  //3181"]),

  new Trait("male", ["cap", "rosy cheeks"]),
  //3182"]),

  new Trait("female", [
    "earring",
    "hot lipstick",
    "purple eye shadow",
    "red mohawk",
  ]),
  //3183"]),

  new Trait("male", ["frown", "regular shades", "shadow beard", "wild hair"]),
  //3184"]),

  new Trait("female", ["earring", "messy hair", "purple lipstick"]),
  //3185"]),

  new Trait("male", ["crazy hair", "horned rim glasses"]),
  //3186"]),

  new Trait("female", ["blonde bob", "cigarette"]),
  //3187"]),

  new Trait("male", ["front beard", "purple hair"]),
  //3188"]),

  new Trait("male", ["frumpy hair", "handlebars"]),
  //3189"]),

  new Trait("female", ["earring", "hot lipstick", "straight hair"]),
  //3190"]),

  new Trait("male", ["clown nose", "mohawk dark", "shadow beard"]),
  //3191"]),

  new Trait("male", ["clown nose", "front beard dark", "knitted cap"]),
  //3192"]),

  new Trait("male", ["clown eyes green", "peak spike"]),
  //3193"]),

  new Trait("male", ["big shades", "cap forward", "chinstrap", "earring"]),
  //3194"]),

  new Trait("male", ["front beard dark", "mohawk thin"]),
  //3195"]),

  new Trait("male", [
    "cigarette",
    "earring",
    "goat",
    "horned rim glasses",
    "knitted cap",
  ]),
  //3196"]),

  new Trait("male", ["regular shades", "smile", "top hat"]),
  //3197"]),

  new Trait("female", ["black lipstick", "dark hair", "mole"]),
  //3198"]),

  new Trait("male", ["knitted cap", "mole", "vape"]),
  //3199"]),

  new Trait("male", ["cigarette", "headband", "horned rim glasses"]),
  //3200"]),

  new Trait("female", [
    "blue eye shadow",
    "purple lipstick",
    "straight hair blonde",
  ]),
  //3201"]),

  new Trait("female", ["frumpy hair", "purple eye shadow"]),
  //3202"]),

  new Trait("male", ["cigarette", "mustache", "shaved head"]),
  //3203"]),

  new Trait("male", ["classic shades", "peak spike", "pipe"]),
  //3204"]),

  new Trait("male", [
    "classic shades",
    "earring",
    "mohawk dark",
    "muttonchops",
  ]),
  //3205"]),

  new Trait("male", ["gold chain", "messy hair"]),
  //3206"]),

  new Trait("female", ["blue eye shadow", "cigarette", "earring"]),
  //3207"]),

  new Trait("male", ["clown hair green", "horned rim glasses"]),
  //3208"]),

  new Trait("male", ["3d glasses", "earring", "mohawk dark"]),
  //3209"]),

  new Trait("female", ["crazy hair", "nerd glasses", "purple lipstick"]),
  //3210"]),

  new Trait("zombie", ["goat", "headband"]),
  //3211"]),

  new Trait("female", [
    "eye mask",
    "pipe",
    "purple lipstick",
    "straight hair blonde",
  ]),
  //3212"]),

  new Trait("male", ["earring", "eye patch", "mohawk thin"]),
  //3213"]),

  new Trait("female", ["cigarette", "earring", "mohawk dark", "nerd glasses"]),
  //3214"]),

  new Trait("male", ["eye patch", "mohawk dark"]),
  //3215"]),

  new Trait("male", ["hoodie", "pipe"]),
  //3216"]),

  new Trait("male", ["big shades", "chinstrap", "earring", "stringy hair"]),
  //3217"]),

  new Trait("male", ["classic shades", "earring", "frumpy hair"]),
  //3218"]),

  new Trait("female", ["black lipstick", "mohawk"]),
  //3219"]),

  new Trait("female", ["big shades", "crazy hair", "hot lipstick"]),
  //3220"]),

  new Trait("female", ["black lipstick", "earring", "mohawk", "vape"]),
  //3221"]),

  new Trait("female", ["big shades", "mohawk dark"]),
  //3222"]),

  new Trait("male", ["cigarette", "eye mask", "wild hair"]),
  //3223"]),

  new Trait("male", ["cigarette", "mohawk thin", "normal beard"]),
  //3224"]),

  new Trait("female", ["earring", "messy hair", "mole", "silver chain"]),
  //3225"]),

  new Trait("male", ["do-rag", "muttonchops", "nerd glasses"]),
  //3226"]),

  new Trait("female", ["earring", "nerd glasses", "straight hair"]),
  //3227"]),

  new Trait("male", ["chinstrap", "do-rag", "eye patch"]),
  //3228"]),

  new Trait("male", ["cap forward", "earring", "normal beard", "small shades"]),
  //3229"]),

  new Trait("female", ["half shaved", "rosy cheeks"]),
  //3230"]),

  new Trait("female", ["purple eye shadow", "straight hair"]),
  //3231"]),

  new Trait("male", ["3d glasses", "mohawk dark"]),
  //3232"]),

  new Trait("male", ["big shades", "hoodie", "shadow beard"]),
  //3233"]),

  new Trait("male", ["handlebars", "messy hair"]),
  //3234"]),

  new Trait("male", ["normal beard", "stringy hair"]),
  //3235"]),

  new Trait("female", ["blue eye shadow", "messy hair", "pipe"]),
  //3236"]),

  new Trait("male", ["chinstrap", "cigarette", "earring", "wild hair"]),
  //3237"]),

  new Trait("male", ["earring", "messy hair", "regular shades"]),
  //3238"]),

  new Trait("male", ["horned rim glasses", "shaved head"]),
  //3239"]),

  new Trait("female", ["blue eye shadow", "earring", "wild white hair"]),
  //3240"]),

  new Trait("female", ["mohawk", "purple lipstick"]),
  //3241"]),

  new Trait("male", ["chinstrap", "classic shades", "earring", "peak spike"]),
  //3242"]),

  new Trait("male", ["clown eyes blue", "mohawk dark"]),
  //3243"]),

  new Trait("male", ["clown eyes green", "goat", "wild hair"]),
  //3244"]),

  new Trait("male", ["cigarette", "do-rag", "vr"]),
  //3245"]),

  new Trait("female", ["clown hair green", "mole"]),
  //3246"]),

  new Trait("female", ["earring", "hot lipstick", "messy hair"]),
  //3247"]),

  new Trait("male", ["peak spike", "pipe"]),
  //3248"]),

  new Trait("male", ["do-rag", "earring", "goat", "nerd glasses"]),
  //3249"]),

  new Trait("male", ["crazy hair", "horned rim glasses", "smile"]),
  //3250"]),

  new Trait("female", ["earring", "wild blonde"]),
  //3251"]),

  new Trait("female", ["black lipstick", "clown eyes blue", "wild blonde"]),
  //3252"]),

  new Trait("female", ["3d glasses", "purple lipstick", "straight hair dark"]),
  //3253"]),

  new Trait("female", ["cigarette", "dark hair", "earring", "purple lipstick"]),
  //3254"]),

  new Trait("male", ["earring", "mohawk thin", "vape"]),
  //3255"]),

  new Trait("male", ["cowboy hat"]),
  //3256"]),

  new Trait("female", ["black lipstick", "earring", "stringy hair"]),
  //3257"]),

  new Trait("male", ["cap forward", "goat", "nerd glasses"]),
  //3258"]),

  new Trait("male", ["mohawk thin", "vr"]),
  //3259"]),

  new Trait("male", ["bandana", "earring", "eye patch"]),
  //3260"]),

  new Trait("male", ["muttonchops", "shaved head"]),
  //3261"]),

  new Trait("male", [
    "clown nose",
    "frumpy hair",
    "muttonchops",
    "regular shades",
  ]),
  //3262"]),

  new Trait("female", ["black lipstick", "orange side"]),
  //3263"]),

  new Trait("female", ["big shades", "cap", "earring"]),
  //3264"]),

  new Trait("male", ["3d glasses", "mohawk thin"]),
  //3265"]),

  new Trait("female", ["black lipstick", "earring", "messy hair"]),
  //3266"]),

  new Trait("female", ["black lipstick", "earring", "orange side"]),
  //3267"]),

  new Trait("male", ["clown eyes blue", "crazy hair", "earring", "goat"]),
  //3268"]),

  new Trait("female", ["clown eyes blue", "dark hair"]),
  //3269"]),

  new Trait("male", ["cap", "earring", "nerd glasses"]),
  //3270"]),

  new Trait("female", ["green eye shadow", "pigtails"]),
  //3271"]),

  new Trait("male", ["mohawk", "small shades"]),
  //3272"]),

  new Trait("male", ["chinstrap", "cigarette", "headband"]),
  //3273"]),

  new Trait("male", ["clown eyes blue", "do-rag"]),
  //3274"]),

  new Trait("female", ["clown eyes blue", "silver chain", "stringy hair"]),
  //3275"]),

  new Trait("male", ["clown nose", "peak spike"]),
  //3276"]),

  new Trait("female", ["earring", "regular shades", "tassle hat"]),
  //3277"]),

  new Trait("female", ["cap", "earring"]),
  //3278"]),

  new Trait("male", ["mohawk", "small shades"]),
  //3279"]),

  new Trait("male", ["earring", "medical mask", "purple hair"]),
  //3280"]),

  new Trait("male", ["beanie", "earring", "small shades"]),
  //3281"]),

  new Trait("male", ["earring", "luxurious beard", "mohawk dark"]),
  //3282"]),

  new Trait("female", [
    "clown eyes green",
    "frumpy hair",
    "purple lipstick",
    "rosy cheeks",
  ]),
  //3283"]),

  new Trait("female", ["black lipstick", "cigarette", "crazy hair", "earring"]),
  //3284"]),

  new Trait("male", ["front beard dark", "knitted cap"]),
  //3285"]),

  new Trait("male", ["messy hair", "normal beard"]),
  //3286"]),

  new Trait("female", ["classic shades"]),
  //3287"]),

  new Trait("male", ["mohawk dark", "smile"]),
  //3288"]),

  new Trait("female", ["earring", "hot lipstick", "mole", "wild blonde"]),
  //3289"]),

  new Trait("female", ["earring", "hot lipstick", "red mohawk"]),
  //3290"]),

  new Trait("male", ["big shades", "cap", "normal beard"]),
  //3291"]),

  new Trait("male", ["smile", "top hat"]),
  //3292"]),

  new Trait("female", [
    "earring",
    "hot lipstick",
    "nerd glasses",
    "wild white hair",
  ]),
  //3293"]),

  new Trait("female", ["cigarette", "mole", "straight hair blonde"]),
  //3294"]),

  new Trait("male", ["clown eyes green", "wild hair"]),
  //3295"]),

  new Trait("male", [
    "chinstrap",
    "cigarette",
    "earring",
    "frumpy hair",
    "mole",
  ]),
  //3296"]),

  new Trait("male", ["mohawk", "mustache", "small shades"]),
  //3297"]),

  new Trait("male", ["big beard", "eye patch", "hoodie"]),
  //3298"]),

  new Trait("male", ["earring", "frumpy hair", "normal beard black"]),
  //3299"]),

  new Trait("male", ["horned rim glasses", "messy hair", "normal beard"]),
  //3300"]),

  new Trait("female", ["half shaved", "hot lipstick", "nerd glasses"]),
  //3301"]),

  new Trait("male", ["bandana", "horned rim glasses", "mustache", "pipe"]),
  //3302"]),

  new Trait("male", ["big beard", "shaved head"]),
  //3303"]),

  new Trait("female", ["mohawk thin", "purple lipstick"]),
  //3304"]),

  new Trait("male", ["front beard", "frown", "messy hair"]),
  //3305"]),

  new Trait("male", ["earring", "normal beard", "wild hair"]),
  //3306"]),

  new Trait("male", []),
  //3307"]),

  new Trait("female", ["hot lipstick", "pilot helmet"]),
  //3308"]),

  new Trait("male", ["front beard", "hoodie"]),
  //3309"]),

  new Trait("male", ["handlebars", "horned rim glasses", "mohawk thin"]),
  //3310"]),

  new Trait("female", ["earring", "purple lipstick", "spots", "tassle hat"]),
  //3311"]),

  new Trait("male", ["classic shades", "stringy hair"]),
  //3312"]),

  new Trait("male", ["3d glasses", "crazy hair", "smile"]),
  //3313"]),

  new Trait("female", ["blue eye shadow", "wild hair"]),
  //3314"]),

  new Trait("male", ["cigarette", "nerd glasses", "stringy hair"]),
  //3315"]),

  new Trait("male", ["clown hair green", "horned rim glasses", "shadow beard"]),
  //3316"]),

  new Trait("male", ["front beard", "top hat"]),
  //3317"]),

  new Trait("female", ["frumpy hair", "gold chain", "regular shades"]),
  //3318"]),

  new Trait("male", ["headband", "vape"]),
  //3319"]),

  new Trait("male", ["frumpy hair", "shadow beard"]),
  //3320"]),

  new Trait("female", ["black lipstick", "straight hair blonde"]),
  //3321"]),

  new Trait("male", ["bandana", "front beard dark", "vr"]),
  //3322"]),

  new Trait("male", ["knitted cap", "small shades"]),
  //3323"]),

  new Trait("male", ["big beard", "crazy hair", "earring"]),
  //3324"]),

  new Trait("male", ["mohawk", "vape"]),
  //3325"]),

  new Trait("male", ["chinstrap", "vampire hair"]),
  //3326"]),

  new Trait("male", ["earring", "headband"]),
  //3327"]),

  new Trait("zombie", ["cigarette", "messy hair"]),
  //3328"]),

  new Trait("female", ["clown eyes green", "earring", "mole"]),
  //3329"]),

  new Trait("male", ["fedora", "frown", "regular shades", "shadow beard"]),
  //3330"]),

  new Trait("male", ["cigarette", "earring", "eye patch", "headband"]),
  //3331"]),

  new Trait("female", ["clown eyes green", "red mohawk"]),
  //3332"]),

  new Trait("female", ["clown eyes green", "earring", "tassle hat"]),
  //3333"]),

  new Trait("female", ["dark hair", "green eye shadow"]),
  //3334"]),

  new Trait("male", ["luxurious beard", "purple hair"]),
  //3335"]),

  new Trait("female", ["hot lipstick", "messy hair", "purple eye shadow"]),
  //3336"]),

  new Trait("male", ["luxurious beard", "wild hair"]),
  //3337"]),

  new Trait("female", ["dark hair", "mole"]),
  //3338"]),

  new Trait("male", ["earring", "mohawk thin", "shadow beard"]),
  //3339"]),

  new Trait("female", ["cigarette", "crazy hair", "earring"]),
  //3340"]),

  new Trait("female", ["hot lipstick", "messy hair", "mole"]),
  //3341"]),

  new Trait("male", ["bandana", "earring", "normal beard", "spots"]),
  //3342"]),

  new Trait("female", ["regular shades", "tassle hat"]),
  //3343"]),

  new Trait("female", ["crazy hair", "purple lipstick"]),
  //3344"]),

  new Trait("female", ["dark hair", "gold chain"]),
  //3345"]),

  new Trait("male", ["classic shades", "stringy hair"]),
  //3346"]),

  new Trait("female", ["earring", "gold chain", "straight hair dark"]),
  //3347"]),

  new Trait("female", ["hot lipstick", "mole", "wild hair"]),
  //3348"]),

  new Trait("male", ["earring", "eye patch", "mohawk thin", "normal beard"]),
  //3349"]),

  new Trait("male", ["cigarette", "earring", "knitted cap"]),
  //3350"]),

  new Trait("female", ["big shades", "tassle hat", "vape"]),
  //3351"]),

  new Trait("male", [
    "earring",
    "mohawk dark",
    "regular shades",
    "shadow beard",
  ]),
  //3352"]),

  new Trait("male", ["do-rag", "earring", "eye mask", "front beard"]),
  //3353"]),

  new Trait("female", ["cigarette", "half shaved", "nerd glasses"]),
  //3354"]),

  new Trait("male", ["knitted cap", "shadow beard"]),
  //3355"]),

  new Trait("female", ["knitted cap", "regular shades"]),
  //3356"]),

  new Trait("male", ["clown eyes green", "earring", "shaved head"]),
  //3357"]),

  new Trait("female", ["big shades", "earring", "headband", "hot lipstick"]),
  //3358"]),

  new Trait("male", ["knitted cap", "muttonchops"]),
  //3359"]),

  new Trait("female", ["big shades", "blonde short", "hot lipstick", "mole"]),
  //3360"]),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "earring",
    "nerd glasses",
    "stringy hair",
  ]),
  //3361"]),

  new Trait("male", ["bandana", "rosy cheeks", "small shades"]),
  //3362"]),

  new Trait("male", ["pipe", "top hat"]),
  //3363"]),

  new Trait("female", ["clown eyes green", "mohawk", "purple lipstick"]),
  //3364"]),

  new Trait("male", ["shadow beard", "smile", "wild hair"]),
  //3365"]),

  new Trait("female", [
    "nerd glasses",
    "purple lipstick",
    "straight hair dark",
  ]),
  //3366"]),

  new Trait("female", ["earring", "headband"]),
  //3367"]),

  new Trait("male", ["fedora", "mole", "silver chain"]),
  //3368"]),

  new Trait("male", ["luxurious beard", "stringy hair"]),
  //3369"]),

  new Trait("male", ["earring", "purple hair", "shadow beard"]),
  //3370"]),

  new Trait("female", [
    "horned rim glasses",
    "hot lipstick",
    "straight hair blonde",
  ]),
  //3371"]),

  new Trait("male", [
    "earring",
    "headband",
    "nerd glasses",
    "normal beard black",
  ]),
  //3372"]),

  new Trait("male", ["police cap", "small shades"]),
  //3373"]),

  new Trait("male", ["classic shades", "frumpy hair", "normal beard black"]),
  //3374"]),

  new Trait("male", ["big shades", "cap forward", "earring", "normal beard"]),
  //3375"]),

  new Trait("female", [
    "black lipstick",
    "clown eyes blue",
    "earring",
    "mohawk dark",
  ]),
  //3376"]),

  new Trait("female", ["clown eyes green", "earring", "straight hair"]),
  //3377"]),

  new Trait("male", ["bandana", "earring", "handlebars"]),
  //3378"]),

  new Trait("male", ["handlebars", "mole", "nerd glasses", "wild hair"]),
  //3379"]),

  new Trait("male", ["classic shades", "mustache", "peak spike"]),
  //3380"]),

  new Trait("male", ["knitted cap", "silver chain"]),
  //3381"]),

  new Trait("male", ["clown nose", "mohawk dark", "nerd glasses"]),
  //3382"]),

  new Trait("male", ["handlebars", "medical mask", "stringy hair"]),
  //3383"]),

  new Trait("male", ["horned rim glasses", "silver chain", "vampire hair"]),
  //3384"]),

  new Trait("female", ["eye patch", "tassle hat"]),
  //3385"]),

  new Trait("female", ["big shades", "frumpy hair"]),
  //3386"]),

  new Trait("male", ["big shades", "police cap"]),
  //3387"]),

  new Trait("female", ["earring", "messy hair", "purple lipstick"]),
  //3388"]),

  new Trait("male", ["frumpy hair", "mole", "pipe"]),
  //3389"]),

  new Trait("male", ["handlebars", "horned rim glasses", "messy hair"]),
  //3390"]),

  new Trait("male", ["muttonchops", "shaved head"]),
  //3391"]),

  new Trait("male", ["earring", "fedora", "nerd glasses", "pipe"]),
  //3392"]),

  new Trait("zombie", ["crazy hair", "frown"]),
  //3393"]),

  new Trait("female", [
    "headband",
    "horned rim glasses",
    "hot lipstick",
    "mole",
  ]),
  //3394"]),

  new Trait("male", ["big shades", "cap", "clown nose", "mole"]),
  //3395"]),

  new Trait("male", ["clown eyes green", "mustache", "wild hair"]),
  //3396"]),

  new Trait("female", ["frumpy hair", "purple eye shadow", "purple lipstick"]),
  //3397"]),

  new Trait("male", ["mohawk", "muttonchops", "vr"]),
  //3398"]),

  new Trait("female", ["black lipstick", "half shaved"]),
  //3399"]),

  new Trait("male", ["mohawk thin", "rosy cheeks"]),
  //3400"]),

  new Trait("female", ["earring", "eye mask", "wild blonde"]),
  //3401"]),

  new Trait("female", [
    "horned rim glasses",
    "knitted cap",
    "purple lipstick",
    "spots",
  ]),
  //3402"]),

  new Trait("male", ["earring", "wild hair"]),
  //3403"]),

  new Trait("male", ["front beard dark", "messy hair"]),
  //3404"]),

  new Trait("female", ["crazy hair", "purple lipstick"]),
  //3405"]),

  new Trait("male", ["big shades", "mohawk dark", "mole", "smile"]),
  //3406"]),

  new Trait("male", ["mustache", "regular shades"]),
  //3407"]),

  new Trait("female", ["mohawk thin", "vape"]),
  //3408"]),

  new Trait("female", ["earring", "eye mask", "purple lipstick", "red mohawk"]),
  //3409"]),

  new Trait("male", ["headband", "shadow beard"]),
  //3410"]),

  new Trait("male", ["mohawk thin", "smile"]),
  //3411"]),

  new Trait("female", ["wild hair"]),
  //3412"]),

  new Trait("female", ["clown eyes green", "wild hair"]),
  //3413"]),

  new Trait("female", ["bandana", "eye patch", "purple lipstick"]),
  //3414"]),

  new Trait("male", ["do-rag", "eye patch", "smile"]),
  //3415"]),

  new Trait("male", ["eye mask", "purple hair"]),
  //3416"]),

  new Trait("female", ["big shades", "wild hair"]),
  //3417"]),

  new Trait("female", ["cigarette", "clown eyes blue", "mohawk"]),
  //3418"]),

  new Trait("male", ["mohawk dark", "nerd glasses", "silver chain"]),
  //3419"]),

  new Trait("female", ["horned rim glasses", "mohawk dark"]),
  //3420"]),

  new Trait("male", ["bandana", "horned rim glasses", "shadow beard"]),
  //3421"]),

  new Trait("male", ["headband", "nerd glasses", "pipe"]),
  //3422"]),

  new Trait("male", ["buck teeth", "do-rag", "earring", "goat"]),
  //3423"]),

  new Trait("female", ["earring", "purple lipstick", "straight hair blonde"]),
  //3424"]),

  new Trait("male", ["cigarette", "earring", "mole", "wild hair"]),
  //3425"]),

  new Trait("male", ["bandana", "earring", "small shades"]),
  //3426"]),

  new Trait("female", ["big shades", "black lipstick", "straight hair blonde"]),
  //3427"]),

  new Trait("male", ["goat", "mole", "wild hair"]),
  //3428"]),

  new Trait("male", ["cigarette", "messy hair", "vr"]),
  //3429"]),

  new Trait("female", ["big shades", "straight hair"]),
  //3430"]),

  new Trait("female", ["hot lipstick", "purple eye shadow", "red mohawk"]),
  //3431"]),

  new Trait("female", ["gold chain", "straight hair blonde"]),
  //3432"]),

  new Trait("male", ["eye patch", "peak spike", "shadow beard"]),
  //3433"]),

  new Trait("male", ["earring", "fedora", "goat", "nerd glasses"]),
  //3434"]),

  new Trait("female", ["headband", "purple lipstick"]),
  //3435"]),

  new Trait("female", ["big shades", "hot lipstick", "mohawk dark"]),
  //3436"]),

  new Trait("female", [
    "clown eyes blue",
    "earring",
    "mole",
    "pink with hat",
    "purple lipstick",
  ]),
  //3437"]),

  new Trait("male", [
    "classic shades",
    "earring",
    "frown",
    "frumpy hair",
    "shadow beard",
  ]),
  //3438"]),

  new Trait("male", ["cap forward", "earring", "frown"]),
  //3439"]),

  new Trait("male", ["do-rag", "front beard", "horned rim glasses"]),
  //3440"]),

  new Trait("female", ["3d glasses", "earring", "half shaved", "hot lipstick"]),
  //3441"]),

  new Trait("female", ["cap", "earring"]),
  //3442"]),

  new Trait("alien", ["cowboy hat", "earring"]),
  //3443"]),

  new Trait("male", ["cap forward", "earring", "smile"]),
  //3444"]),

  new Trait("male", ["mohawk thin", "nerd glasses", "shadow beard"]),
  //3445"]),

  new Trait("male", ["eye patch", "handlebars", "shaved head"]),
  //3446"]),

  new Trait("male", ["classic shades", "hoodie", "spots"]),
  //3447"]),

  new Trait("male", ["cap", "earring", "regular shades"]),
  //3448"]),

  new Trait("male", ["messy hair", "normal beard"]),
  //3449"]),

  new Trait("female", ["blue eye shadow", "mohawk dark"]),
  //3450"]),

  new Trait("female", ["dark hair", "vr"]),
  //3451"]),

  new Trait("male", ["classic shades", "knitted cap", "shadow beard"]),
  //3452"]),

  new Trait("female", ["eye patch", "hot lipstick"]),
  //3453"]),

  new Trait("male", ["cap", "eye patch", "handlebars"]),
  //3454"]),

  new Trait("male", ["mohawk", "mole", "shadow beard"]),
  //3455"]),

  new Trait("male", ["crazy hair", "spots"]),
  //3456"]),

  new Trait("female", ["earring", "purple lipstick", "wild blonde"]),
  //3457"]),

  new Trait("male", ["classic shades", "mohawk"]),
  //3458"]),

  new Trait("male", ["bandana", "classic shades", "earring"]),
  //3459"]),

  new Trait("male", ["eye mask", "frown", "frumpy hair", "shadow beard"]),
  //3460"]),

  new Trait("male", ["classic shades", "do-rag", "luxurious beard"]),
  //3461"]),

  new Trait("male", ["cigarette", "earring"]),
  //3462"]),

  new Trait("male", ["fedora", "frown", "vape"]),
  //3463"]),

  new Trait("female", ["big shades", "hot lipstick", "straight hair"]),
  //3464"]),

  new Trait("female", ["big shades", "hot lipstick", "straight hair"]),
  //3465"]),

  new Trait("male", ["hoodie", "vr"]),
  //3466"]),

  new Trait("male", ["big shades", "headband", "shadow beard"]),
  //3467"]),

  new Trait("female", [
    "3d glasses",
    "black lipstick",
    "cigarette",
    "wild white hair",
  ]),
  //3468"]),

  new Trait("male", [
    "earring",
    "police cap",
    "regular shades",
    "shadow beard",
  ]),
  //3469"]),

  new Trait("female", ["blonde bob", "blue eye shadow"]),
  //3470"]),

  new Trait("female", ["clown nose", "crazy hair", "silver chain"]),
  //3471"]),

  new Trait("male", ["crazy hair", "earring", "mustache"]),
  //3472"]),

  new Trait("male", ["front beard dark", "headband", "regular shades"]),
  //3473"]),

  new Trait("male", ["eye patch", "mohawk dark"]),
  //3474"]),

  new Trait("male", ["big beard", "hoodie"]),
  //3475"]),

  new Trait("female", ["cigarette", "purple lipstick", "straight hair dark"]),
  //3476"]),

  new Trait("male", ["clown eyes green", "crazy hair", "shadow beard"]),
  //3477"]),

  new Trait("male", ["big shades", "mohawk thin"]),
  //3478"]),

  new Trait("female", ["classic shades", "pink with hat"]),
  //3479"]),

  new Trait("female", ["half shaved", "pipe"]),
  //3480"]),

  new Trait("female", ["clown eyes blue", "dark hair", "hot lipstick"]),
  //3481"]),

  new Trait("male", ["earring", "handlebars", "headband"]),
  //3482"]),

  new Trait("female", ["blonde bob", "pipe"]),
  //3483"]),

  new Trait("male", ["cigarette", "earring", "goat", "knitted cap"]),
  //3484"]),

  new Trait("male", ["cap", "goat"]),
  //3485"]),

  new Trait("female", ["cap", "horned rim glasses", "hot lipstick"]),
  //3486"]),

  new Trait("female", ["bandana", "hot lipstick"]),
  //3487"]),

  new Trait("female", ["big shades", "earring", "red mohawk"]),
  //3488"]),

  new Trait("zombie", ["eye patch", "stringy hair"]),
  //3489"]),

  new Trait("female", [
    "blue eye shadow",
    "earring",
    "hot lipstick",
    "wild white hair",
  ]),
  //3490"]),

  new Trait("male", ["cigarette", "crazy hair", "earring", "mole", "mustache"]),
  //3491"]),

  new Trait("female", ["mole", "wild hair"]),
  //3492"]),

  new Trait("zombie", ["peak spike", "shadow beard"]),
  //3493"]),

  new Trait("female", ["blonde bob", "clown eyes blue", "earring"]),
  //3494"]),

  new Trait("male", ["frumpy hair", "muttonchops", "vape"]),
  //3495"]),

  new Trait("male", ["cigarette", "purple hair"]),
  //3496"]),

  new Trait("male", ["cigarette", "messy hair"]),
  //3497"]),

  new Trait("female", ["horned rim glasses", "mohawk dark"]),
  //3498"]),

  new Trait("male", ["earring", "regular shades", "wild hair"]),
  //3499"]),

  new Trait("male", ["frumpy hair", "vr"]),
  //3500"]),

  new Trait("male", ["bandana", "small shades"]),
  //3501"]),

  new Trait("female", ["frumpy hair", "mole"]),
  //3502"]),

  new Trait("female", ["earring", "pilot helmet", "pipe"]),
  //3503"]),

  new Trait("male", ["chinstrap", "earring", "regular shades", "wild hair"]),
  //3504"]),

  new Trait("male", ["nerd glasses", "shadow beard", "top hat"]),
  //3505"]),

  new Trait("male", ["earring", "headband", "shadow beard", "vr"]),
  //3506"]),

  new Trait("male", ["3d glasses", "do-rag", "handlebars"]),
  //3507"]),

  new Trait("male", ["cigarette", "clown eyes green", "frumpy hair", "goat"]),
  //3508"]),

  new Trait("male", ["classic shades", "mohawk", "shadow beard"]),
  //3509"]),

  new Trait("female", ["frumpy hair", "hot lipstick"]),
  //3510"]),

  new Trait("female", ["black lipstick", "pink with hat", "vr"]),
  //3511"]),

  new Trait("female", ["cigarette", "mohawk dark"]),
  //3512"]),

  new Trait("female", ["big shades", "mohawk"]),
  //3513"]),

  new Trait("male", ["goat", "police cap"]),
  //3514"]),

  new Trait("female", ["crazy hair", "earring", "purple lipstick"]),
  //3515"]),

  new Trait("male", ["3d glasses", "earring", "messy hair"]),
  //3516"]),

  new Trait("male", ["earring", "messy hair"]),
  //3517"]),

  new Trait("male", ["earring", "front beard dark", "hoodie"]),
  //3518"]),

  new Trait("female", ["clown eyes blue", "earring", "mole", "pink with hat"]),
  //3519"]),

  new Trait("female", ["black lipstick", "nerd glasses", "red mohawk"]),
  //3520"]),

  new Trait("male", ["do-rag", "small shades"]),
  //3521"]),

  new Trait("female", [
    "black lipstick",
    "clown nose",
    "earring",
    "red mohawk",
  ]),
  //3522"]),

  new Trait("male", ["big beard", "headband", "nerd glasses"]),
  //3523"]),

  new Trait("male", ["mohawk", "pipe"]),
  //3524"]),

  new Trait("female", ["nerd glasses", "wild white hair"]),
  //3525"]),

  new Trait("female", ["cap", "earring", "hot lipstick"]),
  //3526"]),

  new Trait("female", ["black lipstick", "mohawk dark"]),
  //3527"]),

  new Trait("female", ["hot lipstick", "wild hair"]),
  //3528"]),

  new Trait("female", ["clown hair green", "earring"]),
  //3529"]),

  new Trait("male", ["handlebars", "mohawk thin"]),
  //3530"]),

  new Trait("female", ["clown eyes blue", "headband", "purple lipstick"]),
  //3531"]),

  new Trait("male", ["eye patch", "shaved head"]),
  //3532"]),

  new Trait("male", ["mustache", "stringy hair"]),
  //3533"]),

  new Trait("female", ["earring", "pipe", "straight hair dark"]),
  //3534"]),

  new Trait("female", ["clown eyes blue", "pigtails", "purple lipstick"]),
  //3535"]),

  new Trait("male", ["cap forward", "earring"]),
  //3536"]),

  new Trait("male", ["handlebars", "hoodie"]),
  //3537"]),

  new Trait("male", ["frown", "peak spike"]),
  //3538"]),

  new Trait("male", ["earring", "mohawk", "regular shades"]),
  //3539"]),

  new Trait("male", ["handlebars", "horned rim glasses", "pipe", "wild hair"]),
  //3540"]),

  new Trait("female", ["earring", "mohawk thin"]),
  //3541"]),

  new Trait("female", ["clown eyes blue", "crazy hair", "earring", "vape"]),
  //3542"]),

  new Trait("male", ["hoodie", "pipe", "small shades"]),
  //3543"]),

  new Trait("male", ["earring", "mohawk thin", "shadow beard"]),
  //3544"]),

  new Trait("female", ["blue eye shadow", "red mohawk"]),
  //3545"]),

  new Trait("male", ["earring", "top hat"]),
  //3546"]),

  new Trait("female", ["nerd glasses", "pigtails"]),
  //3547"]),

  new Trait("female", ["black lipstick", "blonde short"]),
  //3548"]),

  new Trait("male", ["earring", "shadow beard", "stringy hair"]),
  //3549"]),

  new Trait("male", ["crazy hair", "eye patch"]),
  //3550"]),

  new Trait("male", ["cigarette", "normal beard black", "wild hair"]),
  //3551"]),

  new Trait("male", ["eye patch", "mohawk dark"]),
  //3552"]),

  new Trait("male", ["frumpy hair", "handlebars"]),
  //3553"]),

  new Trait("male", ["clown hair green", "earring"]),
  //3554"]),

  new Trait("male", [
    "earring",
    "front beard",
    "rosy cheeks",
    "small shades",
    "wild hair",
  ]),
  //3555"]),

  new Trait("female", ["earring", "half shaved", "welding goggles"]),
  //3556"]),

  new Trait("female", ["black lipstick", "eye patch", "messy hair"]),
  //3557"]),

  new Trait("female", [
    "cigarette",
    "frumpy hair",
    "hot lipstick",
    "rosy cheeks",
  ]),
  //3558"]),

  new Trait("male", ["nerd glasses", "peak spike"]),
  //3559"]),

  new Trait("female", ["blonde short", "clown eyes blue"]),
  //3560"]),

  new Trait("male", ["cap forward", "earring", "front beard"]),
  //3561"]),

  new Trait("male", ["clown eyes blue", "mohawk thin", "normal beard"]),
  //3562"]),

  new Trait("male", ["cigarette", "stringy hair", "vr"]),
  //3563"]),

  new Trait("male", ["buck teeth", "cigarette", "mohawk thin"]),
  //3564"]),

  new Trait("male", ["eye mask", "headband", "muttonchops"]),
  //3565"]),

  new Trait("male", ["do-rag", "earring", "nerd glasses", "shadow beard"]),
  //3566"]),

  new Trait("female", ["cap", "mole"]),
  //3567"]),

  new Trait("male", ["bandana", "silver chain"]),
  //3568"]),

  new Trait("male", ["earring", "shaved head", "smile"]),
  //3569"]),

  new Trait("female", ["eye mask", "straight hair dark"]),
  //3570"]),

  new Trait("male", ["front beard"]),
  //3571"]),

  new Trait("male", ["crazy hair", "earring"]),
  //3572"]),

  new Trait("male", ["earring", "hoodie", "small shades"]),
  //3573"]),

  new Trait("female", ["black lipstick", "earring", "mole", "wild hair"]),
  //3574"]),

  new Trait("male", ["bandana", "clown eyes green", "earring"]),
  //3575"]),

  new Trait("male", ["cigarette", "handlebars", "shaved head"]),
  //3576"]),

  new Trait("male", ["earring", "headband", "nerd glasses"]),
  //3577"]),

  new Trait("female", ["big shades", "frumpy hair", "hot lipstick"]),
  //3578"]),

  new Trait("male", ["cigarette", "classic shades", "shaved head"]),
  //3579"]),

  new Trait("male", ["cigarette", "knitted cap"]),
  //3580"]),

  new Trait("female", ["nerd glasses", "purple lipstick", "tassle hat"]),
  //3581"]),

  new Trait("female", ["blonde bob", "green eye shadow"]),
  //3582"]),

  new Trait("male", ["eye patch", "normal beard", "peak spike"]),
  //3583"]),

  new Trait("female", ["bandana", "clown eyes green"]),
  //3584"]),

  new Trait("male", ["cap forward", "horned rim glasses", "mustache"]),
  //3585"]),

  new Trait("male", ["mole", "peak spike"]),
  //3586"]),

  new Trait("male", ["mohawk dark", "mole", "silver chain", "vr"]),
  //3587"]),

  new Trait("male", ["small shades", "vampire hair"]),
  //3588"]),

  new Trait("female", ["blonde bob", "horned rim glasses", "purple lipstick"]),
  //3589"]),

  new Trait("female", ["hot lipstick", "tassle hat"]),
  //3590"]),

  new Trait("male", ["handlebars", "mohawk thin", "small shades"]),
  //3591"]),

  new Trait("female", ["black lipstick", "classic shades", "wild white hair"]),
  //3592"]),

  new Trait("female", ["clown eyes green", "mohawk", "purple lipstick"]),
  //3593"]),

  new Trait("female", ["hot lipstick", "wild blonde"]),
  //3594"]),

  new Trait("female", ["blonde bob", "cigarette", "purple lipstick"]),
  //3595"]),

  new Trait("male", ["do-rag", "frown"]),
  //3596"]),

  new Trait("male", ["crazy hair", "normal beard black"]),
  //3597"]),

  new Trait("male", ["classic shades", "fedora", "shadow beard"]),
  //3598"]),

  new Trait("male", ["earring", "goat", "mohawk thin"]),
  //3599"]),

  new Trait("male", ["peak spike", "shadow beard"]),
  //3600"]),

  new Trait("male", ["headband", "medical mask", "spots"]),
  //3601"]),

  new Trait("female", ["blue eye shadow", "frumpy hair", "purple lipstick"]),
  //3602"]),

  new Trait("male", [
    "big shades",
    "buck teeth",
    "earring",
    "peak spike",
    "pipe",
  ]),
  //3603"]),

  new Trait("female", ["classic shades", "stringy hair"]),
  //3604"]),

  new Trait("male", ["classic shades", "wild hair"]),
  //3605"]),

  new Trait("male", ["mohawk", "normal beard black", "regular shades"]),
  //3606"]),

  new Trait("female", ["earring", "purple lipstick", "stringy hair"]),
  //3607"]),

  new Trait("female", ["mohawk thin", "nerd glasses", "purple lipstick"]),
  //3608"]),

  new Trait("zombie", ["do-rag", "earring"]),
  //3609"]),

  new Trait("female", ["hot lipstick", "mole", "stringy hair"]),
  //3610"]),

  new Trait("male", ["messy hair", "nerd glasses"]),
  //3611"]),

  new Trait("male", ["cap forward", "cigarette", "earring"]),
  //3612"]),

  new Trait("male", [
    "clown eyes blue",
    "earring",
    "luxurious beard",
    "messy hair",
  ]),
  //3613"]),

  new Trait("male", ["hoodie", "shadow beard"]),
  //3614"]),

  new Trait("female", ["earring", "purple eye shadow", "straight hair dark"]),
  //3615"]),

  new Trait("female", ["black lipstick", "blonde short", "purple eye shadow"]),
  //3616"]),

  new Trait("female", ["cigarette", "hot lipstick", "wild hair"]),
  //3617"]),

  new Trait("male", ["big shades", "earring", "peak spike", "pipe"]),
  //3618"]),

  new Trait("male", ["chinstrap", "eye patch", "hoodie"]),
  //3619"]),

  new Trait("male", ["earring", "gold chain", "normal beard", "wild hair"]),
  //3620"]),

  new Trait("female", ["cigarette", "earring", "mohawk"]),
  //3621"]),

  new Trait("male", ["bandana", "front beard dark", "small shades", "vape"]),
  //3622"]),

  new Trait("female", ["big shades", "clown hair green", "hot lipstick"]),
  //3623"]),

  new Trait("male", ["do-rag", "eye patch", "normal beard"]),
  //3624"]),

  new Trait("male", [
    "front beard",
    "frown",
    "horned rim glasses",
    "peak spike",
  ]),
  //3625"]),

  new Trait("male", ["bandana", "medical mask"]),
  //3626"]),

  new Trait("female", ["clown eyes blue", "dark hair"]),
  //3627"]),

  new Trait("female", ["classic shades", "hot lipstick", "straight hair"]),
  //3628"]),

  new Trait("female", [
    "clown eyes green",
    "earring",
    "hot lipstick",
    "straight hair",
  ]),
  //3629"]),

  new Trait("male", ["eye patch", "vampire hair"]),
  //3630"]),

  new Trait("male", ["eye patch", "police cap"]),
  //3631"]),

  new Trait("female", ["earring", "mohawk"]),
  //3632"]),

  new Trait("male", ["chinstrap", "knitted cap", "vr"]),
  //3633"]),

  new Trait("male", ["goat", "knitted cap"]),
  //3634"]),

  new Trait("male", ["normal beard", "vampire hair"]),
  //3635"]),

  new Trait("zombie", ["earring", "front beard dark", "top hat"]),
  //3636"]),

  new Trait("female", ["earring", "green eye shadow"]),
  //3637"]),

  new Trait("male", ["cigarette", "cowboy hat", "mole"]),
  //3638"]),

  new Trait("female", ["clown nose", "crazy hair"]),
  //3639"]),

  new Trait("male", ["mohawk dark", "nerd glasses", "normal beard black"]),
  //3640"]),

  new Trait("female", ["black lipstick", "cigarette", "tassle hat"]),
  //3641"]),

  new Trait("male", ["headband", "vr"]),
  //3642"]),

  new Trait("male", ["do-rag", "frown", "muttonchops"]),
  //3643"]),

  new Trait("male", ["classic shades", "mohawk"]),
  //3644"]),

  new Trait("male", ["crazy hair", "nerd glasses"]),
  //3645"]),

  new Trait("female", ["cigarette", "regular shades", "stringy hair"]),
  //3646"]),

  new Trait("male", ["earring", "eye patch", "mohawk dark"]),
  //3647"]),

  new Trait("female", ["purple lipstick", "red mohawk", "welding goggles"]),
  //3648"]),

  new Trait("female", [
    "blonde short",
    "earring",
    "medical mask",
    "purple lipstick",
  ]),
  //3649"]),

  new Trait("male", ["handlebars", "nerd glasses", "vampire hair"]),
  //3650"]),

  new Trait("male", ["hoodie", "mustache", "small shades"]),
  //3651"]),

  new Trait("male", ["cap forward", "chinstrap", "earring"]),
  //3652"]),

  new Trait("female", ["black lipstick", "straight hair blonde"]),
  //3653"]),

  new Trait("male", ["classic shades", "shadow beard", "shaved head"]),
  //3654"]),

  new Trait("male", ["goat", "mohawk dark"]),
  //3655"]),

  new Trait("female", ["blonde short", "eye patch"]),
  //3656"]),

  new Trait("male", ["cowboy hat", "earring", "luxurious beard"]),
  //3657"]),

  new Trait("female", ["big shades", "mohawk"]),
  //3658"]),

  new Trait("female", ["black lipstick", "cigarette", "dark hair"]),
  //3659"]),

  new Trait("male", ["shaved head", "small shades"]),
  //3660"]),

  new Trait("male", ["vampire hair"]),
  //3661"]),

  new Trait("male", ["clown eyes green", "headband"]),
  //3662"]),

  new Trait("female", ["eye mask", "knitted cap", "purple lipstick"]),
  //3663"]),

  new Trait("male", ["big beard", "peak spike"]),
  //3664"]),

  new Trait("male", ["regular shades", "stringy hair"]),
  //3665"]),

  new Trait("male", ["hoodie", "muttonchops"]),
  //3666"]),

  new Trait("male", ["chinstrap", "clown eyes blue", "do-rag"]),
  //3667"]),

  new Trait("male", ["earring", "headband", "nerd glasses", "vape"]),
  //3668"]),

  new Trait("male", ["beanie", "eye patch"]),
  //3669"]),

  new Trait("male", ["cap forward", "shadow beard"]),
  //3670"]),

  new Trait("male", ["classic shades", "do-rag", "mole", "normal beard black"]),
  //3671"]),

  new Trait("male", ["clown eyes blue", "earring", "hoodie", "shadow beard"]),
  //3672"]),

  new Trait("female", ["blue eye shadow", "earring", "pink with hat"]),
  //3673"]),

  new Trait("female", ["black lipstick", "classic shades", "crazy hair"]),
  //3674"]),

  new Trait("female", ["cap", "hot lipstick", "nerd glasses"]),
  //3675"]),

  new Trait("male", ["messy hair", "shadow beard", "small shades"]),
  //3676"]),

  new Trait("male", ["3d glasses", "handlebars", "headband", "smile"]),
  //3677"]),

  new Trait("female", ["earring", "purple lipstick", "tassle hat"]),
  //3678"]),

  new Trait("male", ["horned rim glasses", "purple hair"]),
  //3679"]),

  new Trait("male", ["bandana", "horned rim glasses", "silver chain"]),
  //3680"]),

  new Trait("male", ["earring", "headband", "mole", "regular shades"]),
  //3681"]),

  new Trait("male", ["medical mask", "top hat"]),
  //3682"]),

  new Trait("male", ["cigarette", "frumpy hair", "handlebars"]),
  //3683"]),

  new Trait("female", ["earring", "gold chain", "hot lipstick", "tiara"]),
  //3684"]),

  new Trait("male", [
    "cigarette",
    "earring",
    "normal beard black",
    "police cap",
    "spots",
  ]),
  //3685"]),

  new Trait("female", ["black lipstick", "earring", "wild white hair"]),
  //3686"]),

  new Trait("male", ["cigarette", "handlebars", "mohawk dark"]),
  //3687"]),

  new Trait("female", ["earring", "green eye shadow", "mohawk"]),
  //3688"]),

  new Trait("male", ["frown", "hoodie"]),
  //3689"]),

  new Trait("male", ["knitted cap", "muttonchops", "nerd glasses"]),
  //3690"]),

  new Trait("male", ["big shades", "earring", "messy hair", "spots"]),
  //3691"]),

  new Trait("female", ["clown nose", "stringy hair"]),
  //3692"]),

  new Trait("male", ["cap", "clown eyes blue", "earring"]),
  //3693"]),

  new Trait("male", ["nerd glasses", "police cap", "vape"]),
  //3694"]),

  new Trait("male", ["front beard dark", "mohawk dark", "small shades"]),
  //3695"]),

  new Trait("male", ["chinstrap", "purple hair"]),
  //3696"]),

  new Trait("female", ["straight hair blonde"]),
  //3697"]),

  new Trait("male", ["3d glasses", "clown nose", "cowboy hat", "goat"]),
  //3698"]),

  new Trait("male", ["cigarette", "front beard dark", "messy hair", "vr"]),
  //3699"]),

  new Trait("male", [
    "earring",
    "frown",
    "knitted cap",
    "luxurious beard",
    "small shades",
  ]),
  //3700"]),

  new Trait("male", ["regular shades", "shadow beard", "wild hair"]),
  //3701"]),

  new Trait("male", ["clown hair green", "small shades"]),
  //3702"]),

  new Trait("female", ["green eye shadow", "medical mask", "orange side"]),
  //3703"]),

  new Trait("female", ["earring", "pigtails", "purple lipstick"]),
  //3704"]),

  new Trait("female", [
    "cigarette",
    "mohawk thin",
    "purple lipstick",
    "welding goggles",
  ]),
  //3705"]),

  new Trait("female", [
    "big shades",
    "black lipstick",
    "clown nose",
    "earring",
    "tassle hat",
  ]),
  //3706"]),

  new Trait("female", ["choker", "purple lipstick", "straight hair dark"]),
  //3707"]),

  new Trait("male", ["earring", "muttonchops", "peak spike"]),
  //3708"]),

  new Trait("female", ["half shaved", "vape"]),
  //3709"]),

  new Trait("male", ["frumpy hair", "vape"]),
  //3710"]),

  new Trait("female", ["gold chain", "stringy hair"]),
  //3711"]),

  new Trait("female", ["classic shades", "tiara", "vape"]),
  //3712"]),

  new Trait("male", [
    "cigarette",
    "classic shades",
    "luxurious beard",
    "mohawk thin",
  ]),
  //3713"]),

  new Trait("male", ["headband", "shadow beard"]),
  //3714"]),

  new Trait("male", ["big shades", "crazy hair"]),
  //3715"]),

  new Trait("male", ["mohawk", "regular shades", "shadow beard"]),
  //3716"]),

  new Trait("male", ["chinstrap", "mohawk dark"]),
  //3717"]),

  new Trait("male", ["clown eyes green", "mustache", "police cap"]),
  //3718"]),

  new Trait("male", ["cowboy hat", "shadow beard"]),
  //3719"]),

  new Trait("male", ["chinstrap", "hoodie", "nerd glasses"]),
  //3720"]),

  new Trait("female", ["bandana", "green eye shadow", "mole"]),
  //3721"]),

  new Trait("male", ["bandana", "big shades", "handlebars"]),
  //3722"]),

  new Trait("female", ["eye mask", "frumpy hair"]),
  //3723"]),

  new Trait("female", [
    "black lipstick",
    "clown eyes green",
    "straight hair dark",
  ]),
  //3724"]),

  new Trait("female", ["green eye shadow", "mole", "wild blonde"]),
  //3725"]),

  new Trait("male", ["pipe", "stringy hair"]),
  //3726"]),

  new Trait("male", ["police cap", "small shades"]),
  //3727"]),

  new Trait("male", ["eye patch", "fedora"]),
  //3728"]),

  new Trait("male", ["luxurious beard", "messy hair", "spots"]),
  //3729"]),

  new Trait("male", ["cigarette", "earring", "frumpy hair"]),
  //3730"]),

  new Trait("male", ["cap", "earring", "luxurious beard"]),
  //3731"]),

  new Trait("male", ["shadow beard", "vampire hair"]),
  //3732"]),

  new Trait("female", [
    "cigarette",
    "earring",
    "green eye shadow",
    "hot lipstick",
    "straight hair dark",
  ]),
  //3733"]),

  new Trait("female", ["crazy hair", "green eye shadow"]),
  //3734"]),

  new Trait("female", ["black lipstick", "cigarette", "tassle hat"]),
  //3735"]),

  new Trait("male", ["earring", "front beard dark", "frumpy hair"]),
  //3736"]),

  new Trait("male", ["luxurious beard", "small shades", "stringy hair"]),
  //3737"]),

  new Trait("male", ["3d glasses", "clown hair green", "vape"]),
  //3738"]),

  new Trait("male", ["big shades", "cigarette", "earring", "mohawk dark"]),
  //3739"]),

  new Trait("male", ["cap", "vape"]),
  //3740"]),

  new Trait("female", ["earring", "vr"]),
  //3741"]),

  new Trait("male", ["earring", "headband", "normal beard black"]),
  //3742"]),

  new Trait("female", ["black lipstick", "clown eyes green", "mohawk dark"]),
  //3743"]),

  new Trait("male", ["crazy hair", "earring", "mole"]),
  //3744"]),

  new Trait("male", ["big beard", "headband"]),
  //3745"]),

  new Trait("male", ["clown hair green", "luxurious beard", "vr"]),
  //3746"]),

  new Trait("female", ["pipe", "wild blonde"]),
  //3747"]),

  new Trait("male", ["clown eyes blue", "police cap"]),
  //3748"]),

  new Trait("female", ["hot lipstick", "orange side", "vape"]),
  //3749"]),

  new Trait("male", ["chinstrap", "classic shades", "crazy hair"]),
  //3750"]),

  new Trait("male", ["earring", "goat", "wild hair"]),
  //3751"]),

  new Trait("male", ["crazy hair", "earring", "regular shades"]),
  //3752"]),

  new Trait("male", ["front beard", "mohawk thin"]),
  //3753"]),

  new Trait("male", ["earring", "eye mask", "stringy hair", "vape"]),
  //3754"]),

  new Trait("female", ["earring", "pigtails", "purple eye shadow"]),
  //3755"]),

  new Trait("female", ["dark hair", "green eye shadow"]),
  //3756"]),

  new Trait("female", ["choker", "crazy hair", "hot lipstick"]),
  //3757"]),

  new Trait("male", ["classic shades", "frown", "messy hair", "mustache"]),
  //3758"]),

  new Trait("male", ["chinstrap", "do-rag"]),
  //3759"]),

  new Trait("male", ["3d glasses", "do-rag", "goat", "smile"]),
  //3760"]),

  new Trait("male", ["front beard", "headband", "small shades"]),
  //3761"]),

  new Trait("male", ["do-rag", "mustache", "spots"]),
  //3762"]),

  new Trait("female", ["blonde short", "choker", "regular shades"]),
  //3763"]),

  new Trait("male", ["eye patch", "hoodie", "normal beard"]),
  //3764"]),

  new Trait("female", ["purple eye shadow", "red mohawk", "vape"]),
  //3765"]),

  new Trait("male", ["rosy cheeks", "shaved head"]),
  //3766"]),

  new Trait("male", ["big shades", "frumpy hair", "mole"]),
  //3767"]),

  new Trait("female", ["black lipstick", "stringy hair"]),
  //3768"]),

  new Trait("male", ["earring", "messy hair", "normal beard black"]),
  //3769"]),

  new Trait("female", [
    "cigarette",
    "green eye shadow",
    "half shaved",
    "purple lipstick",
  ]),
  //3770"]),

  new Trait("male", ["bandana", "earring", "front beard"]),
  //3771"]),

  new Trait("female", ["cap", "eye patch"]),
  //3772"]),

  new Trait("female", ["classic shades", "earring", "half shaved"]),
  //3773"]),

  new Trait("female", ["hot lipstick", "straight hair dark"]),
  //3774"]),

  new Trait("female", ["blonde bob", "classic shades", "purple lipstick"]),
  //3775"]),

  new Trait("male", ["front beard dark", "frumpy hair"]),
  //3776"]),

  new Trait("female", ["clown eyes blue", "dark hair"]),
  //3777"]),

  new Trait("male", ["front beard", "nerd glasses", "stringy hair"]),
  //3778"]),

  new Trait("male", ["earring", "shadow beard", "shaved head", "vape"]),
  //3779"]),

  new Trait("male", ["earring", "messy hair", "shadow beard"]),
  //3780"]),

  new Trait("male", ["horned rim glasses", "mohawk", "vape"]),
  //3781"]),

  new Trait("male", ["cap", "chinstrap", "earring"]),
  //3782"]),

  new Trait("male", ["do-rag", "eye patch"]),
  //3783"]),

  new Trait("male", ["3d glasses", "bandana", "earring", "front beard"]),
  //3784"]),

  new Trait("female", ["horned rim glasses", "mohawk"]),
  //3785"]),

  new Trait("female", ["horned rim glasses", "hot lipstick", "mohawk"]),
  //3786"]),

  new Trait("female", ["eye patch", "mohawk dark", "spots"]),
  //3787"]),

  new Trait("female", ["bandana", "black lipstick"]),
  //3788"]),

  new Trait("female", ["earring", "mohawk", "purple lipstick"]),
  //3789"]),

  new Trait("male", ["cigarette", "vampire hair"]),
  //3790"]),

  new Trait("female", ["earring", "mole", "pilot helmet"]),
  //3791"]),

  new Trait("male", ["mohawk dark", "regular shades", "vape"]),
  //3792"]),

  new Trait("female", ["black lipstick", "blonde bob", "cigarette"]),
  //3793"]),

  new Trait("male", ["chinstrap", "earring", "stringy hair"]),
  //3794"]),

  new Trait("female", ["clown eyes green", "orange side"]),
  //3795"]),

  new Trait("female", ["bandana", "cigarette"]),
  //3796"]),

  new Trait("male", ["do-rag", "gold chain", "muttonchops"]),
  //3797"]),

  new Trait("female", ["earring", "purple lipstick", "straight hair", "vape"]),
  //3798"]),

  new Trait("female", ["classic shades", "hot lipstick", "tassle hat"]),
  //3799"]),

  new Trait("male", ["earring", "small shades", "top hat"]),
  //3800"]),

  new Trait("male", ["big beard", "clown nose", "cowboy hat", "earring"]),
  //3801"]),

  new Trait("male", ["earring", "mohawk dark", "muttonchops"]),
  //3802"]),

  new Trait("female", ["blonde short", "vape"]),
  //3803"]),

  new Trait("male", ["chinstrap", "mohawk dark"]),
  //3804"]),

  new Trait("male", ["earring", "mohawk thin", "nerd glasses", "vape"]),
  //3805"]),

  new Trait("male", [
    "horned rim glasses",
    "normal beard black",
    "stringy hair",
  ]),
  //3806"]),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "clown eyes blue",
    "wild hair",
  ]),
  //3807"]),

  new Trait("male", ["chinstrap", "cowboy hat", "vape"]),
  //3808"]),

  new Trait("male", ["hoodie", "small shades"]),
  //3809"]),

  new Trait("male", ["hoodie", "medical mask", "smile"]),
  //3810"]),

  new Trait("female", ["hot lipstick", "purple eye shadow", "wild hair"]),
  //3811"]),

  new Trait("female", [
    "hot lipstick",
    "purple eye shadow",
    "spots",
    "straight hair blonde",
  ]),
  //3812"]),

  new Trait("male", ["crazy hair", "normal beard"]),
  //3813"]),

  new Trait("male", ["smile", "spots", "stringy hair"]),
  //3814"]),

  new Trait("male", ["cigarette", "purple hair"]),
  //3815"]),

  new Trait("female", ["green eye shadow", "orange side", "purple lipstick"]),
  //3816"]),

  new Trait("male", ["do-rag", "goat"]),
  //3817"]),

  new Trait("female", ["clown eyes blue", "headband"]),
  //3818"]),

  new Trait("male", ["crazy hair", "earring", "horned rim glasses"]),
  //3819"]),

  new Trait("male", ["earring", "mohawk", "nerd glasses", "normal beard"]),
  //3820"]),

  new Trait("female", ["black lipstick", "dark hair", "earring", "eye patch"]),
  //3821"]),

  new Trait("male", ["headband", "smile"]),
  //3822"]),

  new Trait("female", ["half shaved", "hot lipstick"]),
  //3823"]),

  new Trait("female", ["bandana", "choker", "horned rim glasses"]),
  //3824"]),

  new Trait("male", ["big shades", "cigarette", "do-rag"]),
  //3825"]),

  new Trait("male", ["chinstrap", "frumpy hair", "vr"]),
  //3826"]),

  new Trait("female", ["blonde bob", "clown nose", "earring"]),
  //3827"]),

  new Trait("female", ["earring", "purple lipstick", "stringy hair"]),
  //3828"]),

  new Trait("female", ["clown nose", "mohawk dark"]),
  //3829"]),

  new Trait("male", ["classic shades", "headband"]),
  //3830"]),

  new Trait("zombie", ["big shades", "medical mask", "vampire hair"]),
  //3831"]),

  new Trait("male", ["clown nose", "fedora", "handlebars"]),
  //3832"]),

  new Trait("male", [
    "cap",
    "earring",
    "horned rim glasses",
    "luxurious beard",
  ]),
  //3833"]),

  new Trait("male", ["classic shades", "front beard", "frumpy hair"]),
  //3834"]),

  new Trait("male", ["big shades", "mohawk dark"]),
  //3835"]),

  new Trait("male", ["crazy hair", "front beard"]),
  //3836"]),

  new Trait("male", ["eye patch", "frumpy hair", "normal beard black"]),
  //3837"]),

  new Trait("male", ["headband", "muttonchops", "vr"]),
  //3838"]),

  new Trait("male", ["crazy hair", "earring", "eye mask", "front beard dark"]),
  //3839"]),

  new Trait("male", ["earring", "handlebars", "mohawk dark"]),
  //3840"]),

  new Trait("female", ["earring", "orange side"]),
  //3841"]),

  new Trait("female", ["bandana", "regular shades"]),
  //3842"]),

  new Trait("male", ["cap", "cigarette", "front beard dark", "regular shades"]),
  //3843"]),

  new Trait("male", ["fedora", "handlebars"]),
  //3844"]),

  new Trait("male", ["goat", "nerd glasses"]),
  //3845"]),

  new Trait("male", ["clown eyes blue", "frumpy hair"]),
  //3846"]),

  new Trait("male", [
    "earring",
    "front beard dark",
    "mohawk dark",
    "regular shades",
  ]),
  //3847"]),

  new Trait("female", ["eye patch", "mohawk"]),
  //3848"]),

  new Trait("male", ["cigarette", "clown nose", "headband", "shadow beard"]),
  //3849"]),

  new Trait("female", ["clown eyes blue", "earring", "pigtails"]),
  //3850"]),

  new Trait("male", ["clown eyes green", "shaved head"]),
  //3851"]),

  new Trait("male", ["bandana", "earring", "eye patch", "frown", "handlebars"]),
  //3852"]),

  new Trait("female", ["regular shades", "straight hair"]),
  //3853"]),

  new Trait("male", ["earring", "police cap"]),
  //3854"]),

  new Trait("male", ["classic shades", "earring", "knitted cap"]),
  //3855"]),

  new Trait("female", ["cap", "earring"]),
  //3856"]),

  new Trait("male", ["nerd glasses", "shaved head"]),
  //3857"]),

  new Trait("female", [
    "clown eyes blue",
    "clown nose",
    "earring",
    "knitted cap",
    "purple lipstick",
  ]),
  //3858"]),

  new Trait("female", ["cigarette", "mohawk thin", "vr"]),
  //3859"]),

  new Trait("male", ["big shades", "cigarette", "mohawk", "shadow beard"]),
  //3860"]),

  new Trait("female", ["purple lipstick", "wild blonde"]),
  //3861"]),

  new Trait("male", ["mohawk dark", "small shades"]),
  //3862"]),

  new Trait("male", ["bandana", "gold chain"]),
  //3863"]),

  new Trait("female", ["crazy hair", "horned rim glasses"]),
  //3864"]),

  new Trait("male", ["buck teeth", "knitted cap", "nerd glasses"]),
  //3865"]),

  new Trait("male", ["cap", "vr"]),
  //3866"]),

  new Trait("female", ["hot lipstick", "tassle hat"]),
  //3867"]),

  new Trait("male", ["cigarette", "stringy hair"]),
  //3868"]),

  new Trait("male", ["eye mask", "peak spike", "shadow beard", "vape"]),
  //3869"]),

  new Trait("female", [
    "blue eye shadow",
    "purple lipstick",
    "straight hair blonde",
  ]),
  //3870"]),

  new Trait("male", [
    "clown nose",
    "front beard dark",
    "medical mask",
    "messy hair",
    "smile",
  ]),
  //3871"]),

  new Trait("male", ["cowboy hat", "earring", "mustache", "nerd glasses"]),
  //3872"]),

  new Trait("male", ["big shades", "hoodie"]),
  //3873"]),

  new Trait("female", ["bandana", "horned rim glasses"]),
  //3874"]),

  new Trait("male", ["frumpy hair", "silver chain"]),
  //3875"]),

  new Trait("male", ["3d glasses", "hoodie"]),
  //3876"]),

  new Trait("male", ["front beard", "headband"]),
  //3877"]),

  new Trait("male", ["earring", "handlebars", "headband"]),
  //3878"]),

  new Trait("female", ["black lipstick", "mohawk thin", "purple eye shadow"]),
  //3879"]),

  new Trait("male", ["do-rag", "handlebars", "mole"]),
  //3880"]),

  new Trait("male", ["eye mask", "fedora"]),
  //3881"]),

  new Trait("female", ["black lipstick", "clown hair green"]),
  //3882"]),

  new Trait("male", ["vr", "wild hair"]),
  //3883"]),

  new Trait("female", ["classic shades", "messy hair"]),
  //3884"]),

  new Trait("female", ["clown hair green", "green eye shadow"]),
  //3885"]),

  new Trait("male", ["mohawk thin", "silver chain"]),
  //3886"]),

  new Trait("male", ["chinstrap", "top hat"]),
  //3887"]),

  new Trait("male", ["big shades", "clown nose", "handlebars", "messy hair"]),
  //3888"]),

  new Trait("male", ["police cap", "smile"]),
  //3889"]),

  new Trait("male", ["chinstrap", "horned rim glasses", "stringy hair"]),
  //3890"]),

  new Trait("female", ["blonde bob", "hot lipstick", "mole"]),
  //3891"]),

  new Trait("male", ["eye patch", "luxurious beard", "shaved head"]),
  //3892"]),

  new Trait("male", ["frumpy hair", "normal beard", "regular shades"]),
  //3893"]),

  new Trait("female", ["cap", "pipe"]),
  //3894"]),

  new Trait("male", ["classic shades", "hoodie", "mustache"]),
  //3895"]),

  new Trait("male", ["big shades", "cigarette", "hoodie"]),
  //3896"]),

  new Trait("male", ["earring", "regular shades", "shaved head"]),
  //3897"]),

  new Trait("female", ["frumpy hair", "gold chain"]),
  //3898"]),

  new Trait("female", ["clown eyes blue", "knitted cap"]),
  //3899"]),

  new Trait("male", ["cap", "clown eyes blue", "earring", "gold chain"]),
  //3900"]),

  new Trait("male", ["mohawk thin", "vape"]),
  //3901"]),

  new Trait("male", ["cigarette", "frumpy hair", "luxurious beard"]),
  //3902"]),

  new Trait("male", ["eye patch", "headband", "luxurious beard"]),
  //3903"]),

  new Trait("male", ["chinstrap", "fedora"]),
  //3904"]),

  new Trait("male", ["frumpy hair", "mustache"]),
  //3905"]),

  new Trait("male", ["bandana", "earring", "small shades"]),
  //3906"]),

  new Trait("male", ["clown eyes blue", "earring", "fedora", "muttonchops"]),
  //3907"]),

  new Trait("female", ["dark hair", "medical mask", "purple lipstick"]),
  //3908"]),

  new Trait("female", ["dark hair", "earring", "purple lipstick"]),
  //3909"]),

  new Trait("male", ["clown hair green", "eye patch"]),
  //3910"]),

  new Trait("female", ["clown eyes blue", "knitted cap", "purple lipstick"]),
  //3911"]),

  new Trait("female", ["black lipstick", "mohawk", "mole"]),
  //3912"]),

  new Trait("female", ["earring", "green eye shadow", "mohawk thin"]),
  //3913"]),

  new Trait("male", ["cowboy hat", "mole"]),
  //3914"]),

  new Trait("male", ["stringy hair", "vape"]),
  //3915"]),

  new Trait("male", ["chinstrap", "top hat"]),
  //3916"]),

  new Trait("male", ["clown eyes green", "earring", "headband"]),
  //3917"]),

  new Trait("female", ["3d glasses", "mohawk thin"]),
  //3918"]),

  new Trait("female", ["clown eyes green", "red mohawk"]),
  //3919"]),

  new Trait("female", ["earring", "mohawk thin"]),
  //3920"]),

  new Trait("male", ["clown hair green", "horned rim glasses"]),
  //3921"]),

  new Trait("male", ["classic shades", "stringy hair"]),
  //3922"]),

  new Trait("male", ["cap", "cigarette"]),
  //3923"]),

  new Trait("male", ["mohawk thin", "nerd glasses"]),
  //3924"]),

  new Trait("male", ["3d glasses", "do-rag"]),
  //3925"]),

  new Trait("male", ["do-rag", "earring", "shadow beard"]),
  //3926"]),

  new Trait("male", ["front beard dark", "shaved head", "vr"]),
  //3927"]),

  new Trait("male", ["mole", "regular shades", "vampire hair"]),
  //3928"]),

  new Trait("male", ["frown", "regular shades", "shaved head"]),
  //3929"]),

  new Trait("male", ["bandana", "cigarette", "earring", "handlebars"]),
  //3930"]),

  new Trait("male", ["goat", "vampire hair"]),
  //3931"]),

  new Trait("female", ["green eye shadow", "hot lipstick", "pink with hat"]),
  //3932"]),

  new Trait("male", ["earring", "shadow beard", "vape", "wild hair"]),
  //3933"]),

  new Trait("male", [
    "clown eyes green",
    "crazy hair",
    "earring",
    "normal beard",
  ]),
  //3934"]),

  new Trait("male", ["earring", "front beard dark", "shaved head"]),
  //3935"]),

  new Trait("male", ["3d glasses", "frumpy hair"]),
  //3936"]),

  new Trait("male", ["nerd glasses", "wild hair"]),
  //3937"]),

  new Trait("male", ["clown nose", "mohawk", "shadow beard"]),
  //3938"]),

  new Trait("female", ["eye mask", "mohawk thin"]),
  //3939"]),

  new Trait("female", ["black lipstick", "clown eyes green", "half shaved"]),
  //3940"]),

  new Trait("male", ["big shades", "earring", "shaved head"]),
  //3941"]),

  new Trait("male", ["chinstrap", "earring", "purple hair", "vr"]),
  //3942"]),

  new Trait("male", ["buck teeth", "cap forward", "medical mask", "spots"]),
  //3943"]),

  new Trait("male", ["3d glasses", "muttonchops", "police cap"]),
  //3944"]),

  new Trait("male", ["cap", "horned rim glasses", "normal beard"]),
  //3945"]),

  new Trait("female", ["crazy hair", "mole", "purple lipstick"]),
  //3946"]),

  new Trait("female", ["black lipstick", "earring", "mohawk"]),
  //3947"]),

  new Trait("female", ["purple lipstick", "straight hair dark"]),
  //3948"]),

  new Trait("female", ["black lipstick", "half shaved", "purple eye shadow"]),
  //3949"]),

  new Trait("female", [
    "clown eyes blue",
    "crazy hair",
    "earring",
    "hot lipstick",
  ]),
  //3950"]),

  new Trait("female", ["earring", "mohawk thin", "purple eye shadow"]),
  //3951"]),

  new Trait("male", ["cigarette", "handlebars", "messy hair"]),
  //3952"]),

  new Trait("male", ["goat", "pipe", "wild hair"]),
  //3953"]),

  new Trait("female", ["black lipstick", "clown eyes green", "half shaved"]),
  //3954"]),

  new Trait("male", ["fedora", "horned rim glasses"]),
  //3955"]),

  new Trait("male", ["earring", "front beard dark", "shaved head"]),
  //3956"]),

  new Trait("female", ["black lipstick", "crazy hair", "purple eye shadow"]),
  //3957"]),

  new Trait("male", ["cigarette", "headband", "regular shades"]),
  //3958"]),

  new Trait("female", ["cigarette", "stringy hair"]),
  //3959"]),

  new Trait("male", ["do-rag", "small shades"]),
  //3960"]),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "clown nose",
    "earring",
    "mohawk thin",
  ]),
  //3961"]),

  new Trait("female", ["green eye shadow", "straight hair blonde"]),
  //3962"]),

  new Trait("male", ["bandana", "earring"]),
  //3963"]),

  new Trait("female", [
    "black lipstick",
    "dark hair",
    "green eye shadow",
    "mole",
  ]),
  //3964"]),

  new Trait("female", ["blue eye shadow", "straight hair"]),
  //3965"]),

  new Trait("male", [
    "earring",
    "shadow beard",
    "small shades",
    "vampire hair",
  ]),
  //3966"]),

  new Trait("male", ["rosy cheeks", "vampire hair"]),
  //3967"]),

  new Trait("male", [
    "clown eyes blue",
    "earring",
    "shadow beard",
    "stringy hair",
  ]),
  //3968"]),

  new Trait("female", ["cigarette", "hot lipstick", "mohawk thin"]),
  //3969"]),

  new Trait("female", ["clown eyes blue", "earring", "tassle hat"]),
  //3970"]),

  new Trait("male", ["earring", "front beard", "knitted cap"]),
  //3971"]),

  new Trait("male", ["chinstrap", "stringy hair"]),
  //3972"]),

  new Trait("male", ["muttonchops", "purple hair", "small shades"]),
  //3973"]),

  new Trait("female", [
    "earring",
    "mohawk",
    "purple eye shadow",
    "rosy cheeks",
  ]),
  //3974"]),

  new Trait("female", ["earring", "hot lipstick", "tassle hat"]),
  //3975"]),

  new Trait("female", [
    "earring",
    "horned rim glasses",
    "hot lipstick",
    "straight hair dark",
  ]),
  //3976"]),

  new Trait("male", ["cigarette", "earring", "mohawk dark", "vr"]),
  //3977"]),

  new Trait("male", ["mole", "smile", "wild hair"]),
  //3978"]),

  new Trait("male", ["cap forward", "normal beard black"]),
  //3979"]),

  new Trait("male", ["eye mask", "headband"]),
  //3980"]),

  new Trait("female", ["clown nose", "green eye shadow", "red mohawk"]),
  //3981"]),

  new Trait("male", ["knitted cap", "small shades", "smile"]),
  //3982"]),

  new Trait("male", ["hoodie", "nerd glasses"]),
  //3983"]),

  new Trait("female", ["green eye shadow", "tassle hat"]),
  //3984"]),

  new Trait("female", ["earring", "eye patch", "mohawk", "purple lipstick"]),
  //3985"]),

  new Trait("female", [
    "black lipstick",
    "classic shades",
    "mohawk dark",
    "mole",
  ]),
  //3986"]),

  new Trait("male", ["eye mask", "mohawk dark"]),
  //3987"]),

  new Trait("female", ["3d glasses", "cap"]),
  //3988"]),

  new Trait("male", ["mustache", "shaved head", "small shades"]),
  //3989"]),

  new Trait("male", ["front beard dark", "hoodie"]),
  //3990"]),

  new Trait("female", [
    "choker",
    "hot lipstick",
    "purple eye shadow",
    "straight hair",
  ]),
  //3991"]),

  new Trait("male", ["gold chain", "mohawk dark"]),
  //3992"]),

  new Trait("male", ["front beard dark", "peak spike"]),
  //3993"]),

  new Trait("male", ["crazy hair", "shadow beard", "small shades"]),
  //3994"]),

  new Trait("female", ["purple eye shadow", "purple lipstick", "red mohawk"]),
  //3995"]),

  new Trait("female", ["earring", "hot lipstick", "mohawk", "nerd glasses"]),
  //3996"]),

  new Trait("female", ["clown eyes blue", "mohawk dark", "purple lipstick"]),
  //3997"]),

  new Trait("female", ["black lipstick", "half shaved"]),
  //3998"]),

  new Trait("female", [
    "big shades",
    "earring",
    "hot lipstick",
    "pipe",
    "straight hair blonde",
  ]),
  //3999"]),

  new Trait("male", ["bandana", "small shades"]),
  //4000"]),

  new Trait("male", [
    "cigarette",
    "classic shades",
    "front beard dark",
    "stringy hair",
  ]),
  //4001"]),

  new Trait("male", ["bandana", "earring", "frown", "small shades"]),
  //4002"]),

  new Trait("male", ["do-rag", "medical mask", "shadow beard"]),
  //4003"]),

  new Trait("female", ["eye patch", "tiara"]),
  //4004"]),

  new Trait("male", ["peak spike", "smile"]),
  //4005"]),

  new Trait("female", ["earring", "mohawk thin", "purple lipstick"]),
  //4006"]),

  new Trait("male", ["chinstrap", "earring", "frumpy hair", "regular shades"]),
  //4007"]),

  new Trait("male", ["beanie", "nerd glasses"]),
  //4008"]),

  new Trait("female", ["black lipstick", "clown eyes blue", "headband"]),
  //4009"]),

  new Trait("female", ["mohawk", "welding goggles"]),
  //4010"]),

  new Trait("male", ["classic shades", "mustache", "stringy hair"]),
  //4011"]),

  new Trait("male", ["top hat"]),
  //4012"]),

  new Trait("male", ["big shades", "muttonchops", "police cap"]),
  //4013"]),

  new Trait("male", ["bandana", "earring", "normal beard"]),
  //4014"]),

  new Trait("female", ["hot lipstick", "welding goggles", "wild white hair"]),
  //4015"]),

  new Trait("female", ["earring", "regular shades", "straight hair"]),
  //4016"]),

  new Trait("male", ["earring", "mohawk dark", "normal beard"]),
  //4017"]),

  new Trait("female", [
    "clown eyes blue",
    "hot lipstick",
    "pipe",
    "tassle hat",
  ]),
  //4018"]),

  new Trait("female", [
    "blue eye shadow",
    "earring",
    "hot lipstick",
    "straight hair blonde",
    "vape",
  ]),
  //4019"]),

  new Trait("male", ["front beard", "nerd glasses", "police cap"]),
  //4020"]),

  new Trait("female", ["pink with hat"]),
  //4021"]),

  new Trait("male", ["eye mask", "fedora", "handlebars"]),
  //4022"]),

  new Trait("male", ["bandana", "chinstrap"]),
  //4023"]),

  new Trait("male", ["cap", "frown", "regular shades"]),
  //4024"]),

  new Trait("male", ["knitted cap", "normal beard", "small shades"]),
  //4025"]),

  new Trait("male", ["big shades", "spots"]),
  //4026"]),

  new Trait("male", ["messy hair", "mole", "pipe"]),
  //4027"]),

  new Trait("female", ["green eye shadow", "purple lipstick", "wild hair"]),
  //4028"]),

  new Trait("male", ["big beard", "top hat"]),
  //4029"]),

  new Trait("female", ["cigarette", "earring", "hot lipstick", "wild hair"]),
  //4030"]),

  new Trait("male", ["frumpy hair", "luxurious beard", "regular shades"]),
  //4031"]),

  new Trait("female", ["blonde short", "green eye shadow", "purple lipstick"]),
  //4032"]),

  new Trait("male", ["earring", "shadow beard", "shaved head", "vr"]),
  //4033"]),

  new Trait("male", [
    "classic shades",
    "earring",
    "knitted cap",
    "luxurious beard",
  ]),
  //4034"]),

  new Trait("male", ["handlebars", "small shades", "stringy hair", "vape"]),
  //4035"]),

  new Trait("female", [
    "clown eyes green",
    "earring",
    "purple lipstick",
    "wild hair",
  ]),
  //4036"]),

  new Trait("female", ["half shaved", "purple lipstick", "vape"]),
  //4037"]),

  new Trait("male", ["front beard dark", "mohawk dark"]),
  //4038"]),

  new Trait("male", ["eye patch", "knitted cap", "shadow beard"]),
  //4039"]),

  new Trait("male", ["earring", "headband", "normal beard black"]),
  //4040"]),

  new Trait("male", ["small shades", "top hat"]),
  //4041"]),

  new Trait("female", ["cigarette", "hot lipstick", "mohawk"]),
  //4042"]),

  new Trait("female", ["classic shades", "hot lipstick", "wild blonde"]),
  //4043"]),

  new Trait("female", ["green eye shadow", "hot lipstick", "tassle hat"]),
  //4044"]),

  new Trait("male", ["big shades", "fedora"]),
  //4045"]),

  new Trait("female", ["mole", "purple lipstick", "stringy hair"]),
  //4046"]),

  new Trait("male", ["earring", "frown", "hoodie"]),
  //4047"]),

  new Trait("female", ["pink with hat", "purple eye shadow"]),
  //4048"]),

  new Trait("male", ["cap", "earring"]),
  //4049"]),

  new Trait("male", ["earring", "frown", "mohawk"]),
  //4050"]),

  new Trait("male", ["crazy hair", "front beard", "horned rim glasses"]),
  //4051"]),

  new Trait("male", ["bandana", "big shades", "handlebars"]),
  //4052"]),

  new Trait("male", ["knitted cap", "mustache"]),
  //4053"]),

  new Trait("male", ["big beard", "big shades", "messy hair"]),
  //4054"]),

  new Trait("female", ["medical mask", "straight hair"]),
  //4055"]),

  new Trait("female", ["earring", "purple lipstick", "tassle hat", "vr"]),
  //4056"]),

  new Trait("male", ["mohawk dark", "mustache", "silver chain"]),
  //4057"]),

  new Trait("male", ["peak spike", "regular shades"]),
  //4058"]),

  new Trait("male", ["clown nose", "eye patch", "stringy hair"]),
  //4059"]),

  new Trait("male", ["clown nose", "knitted cap", "regular shades"]),
  //4060"]),

  new Trait("female", ["green eye shadow", "purple lipstick", "wild blonde"]),
  //4061"]),

  new Trait("male", ["hoodie", "small shades"]),
  //4062"]),

  new Trait("male", ["cap forward", "classic shades"]),
  //4063"]),

  new Trait("male", ["chinstrap", "stringy hair"]),
  //4064"]),

  new Trait("female", ["cigarette", "earring", "half shaved", "hot lipstick"]),
  //4065"]),

  new Trait("male", ["knitted cap", "vr"]),
  //4066"]),

  new Trait("female", [
    "bandana",
    "cigarette",
    "earring",
    "horned rim glasses",
  ]),
  //4067"]),

  new Trait("male", ["earring", "frown", "mohawk", "mustache"]),
  //4068"]),

  new Trait("female", ["mohawk dark", "purple lipstick"]),
  //4069"]),

  new Trait("male", ["cowboy hat", "horned rim glasses"]),
  //4070"]),

  new Trait("male", ["chinstrap", "crazy hair", "earring"]),
  //4071"]),

  new Trait("female", [
    "clown eyes blue",
    "earring",
    "headband",
    "hot lipstick",
  ]),
  //4072"]),

  new Trait("female", ["half shaved", "purple eye shadow", "purple lipstick"]),
  //4073"]),

  new Trait("female", ["crazy hair", "hot lipstick", "rosy cheeks"]),
  //4074"]),

  new Trait("female", [
    "black lipstick",
    "blonde short",
    "gold chain",
    "green eye shadow",
  ]),
  //4075"]),

  new Trait("male", ["cigarette", "regular shades", "wild hair"]),
  //4076"]),

  new Trait("male", ["earring", "wild hair"]),
  //4077"]),

  new Trait("female", ["clown nose", "mohawk thin", "mole"]),
  //4078"]),

  new Trait("male", ["cap forward", "mustache", "regular shades"]),
  //4079"]),

  new Trait("female", ["green eye shadow"]),
  //4080"]),

  new Trait("male", ["big beard", "peak spike"]),
  //4081"]),

  new Trait("male", ["mustache", "pipe", "top hat"]),
  //4082"]),

  new Trait("female", ["mole", "purple lipstick", "wild hair"]),
  //4083"]),

  new Trait("male", ["big shades", "mole", "vampire hair"]),
  //4084"]),

  new Trait("female", ["earring", "knitted cap"]),
  //4085"]),

  new Trait("female", [
    "clown eyes green",
    "purple lipstick",
    "wild white hair",
  ]),
  //4086"]),

  new Trait("female", ["choker", "hot lipstick", "tassle hat"]),
  //4087"]),

  new Trait("female", ["black lipstick", "headband"]),
  //4088"]),

  new Trait("female", ["crazy hair", "purple lipstick", "regular shades"]),
  //4089"]),

  new Trait("male", ["horned rim glasses", "peak spike"]),
  //4090"]),

  new Trait("male", ["classic shades", "shadow beard", "stringy hair"]),
  //4091"]),

  new Trait("female", ["nerd glasses", "purple lipstick", "wild hair"]),
  //4092"]),

  new Trait("female", [
    "green eye shadow",
    "hot lipstick",
    "straight hair blonde",
  ]),
  //4093"]),

  new Trait("male", ["buck teeth", "headband", "medical mask"]),
  //4094"]),

  new Trait("female", ["purple lipstick", "tassle hat"]),
  //4095"]),

  new Trait("male", ["big shades", "cap forward", "front beard dark"]),
  //4096"]),

  new Trait("male", ["normal beard black", "vampire hair"]),
  //4097"]),

  new Trait("male", ["cap forward", "cigarette", "front beard"]),
  //4098"]),

  new Trait("female", ["cigarette", "hot lipstick", "wild blonde"]),
  //4099"]),

  new Trait("female", [
    "clown eyes blue",
    "earring",
    "hot lipstick",
    "stringy hair",
  ]),
  //4100"]),

  new Trait("female", ["horned rim glasses", "mole", "wild white hair"]),
  //4101"]),

  new Trait("male", ["handlebars", "peak spike"]),
  //4102"]),

  new Trait("female", ["mole", "wild white hair"]),
  //4103"]),

  new Trait("male", ["cigarette", "front beard dark", "mohawk dark"]),
  //4104"]),

  new Trait("female", ["hot lipstick", "mohawk thin", "spots"]),
  //4105"]),

  new Trait("female", ["blue eye shadow", "earring", "tassle hat"]),
  //4106"]),

  new Trait("female", ["cigarette", "clown eyes green", "red mohawk"]),
  //4107"]),

  new Trait("male", ["earring", "messy hair", "small shades"]),
  //4108"]),

  new Trait("male", ["normal beard black", "purple hair"]),
  //4109"]),

  new Trait("male", ["messy hair", "mustache", "nerd glasses"]),
  //4110"]),

  new Trait("male", ["goat", "mohawk", "small shades"]),
  //4111"]),

  new Trait("female", ["black lipstick", "pink with hat"]),
  //4112"]),

  new Trait("male", ["clown hair green", "eye patch"]),
  //4113"]),

  new Trait("male", ["cap forward", "normal beard"]),
  //4114"]),

  new Trait("male", ["cap forward", "small shades"]),
  //4115"]),

  new Trait("female", ["bandana", "hot lipstick", "nerd glasses"]),
  //4116"]),

  new Trait("female", ["clown eyes green", "hot lipstick", "stringy hair"]),
  //4117"]),

  new Trait("female", ["half shaved", "purple lipstick"]),
  //4118"]),

  new Trait("male", ["regular shades", "shaved head", "vape"]),
  //4119"]),

  new Trait("female", ["hot lipstick", "mohawk thin"]),
  //4120"]),

  new Trait("male", [
    "chinstrap",
    "cigarette",
    "earring",
    "mohawk",
    "silver chain",
    "spots",
  ]),
  //4121"]),

  new Trait("female", [
    "earring",
    "green eye shadow",
    "headband",
    "mole",
    "purple lipstick",
  ]),
  //4122"]),

  new Trait("male", ["chinstrap", "headband"]),
  //4123"]),

  new Trait("male", ["eye patch", "purple hair"]),
  //4124"]),

  new Trait("male", ["do-rag", "vr"]),
  //4125"]),

  new Trait("male", ["mohawk", "pipe", "small shades"]),
  //4126"]),

  new Trait("male", ["clown nose", "mohawk"]),
  //4127"]),

  new Trait("male", ["frumpy hair"]),
  //4128"]),

  new Trait("female", ["hot lipstick", "wild blonde"]),
  //4129"]),

  new Trait("female", ["dark hair", "purple lipstick"]),
  //4130"]),

  new Trait("male", ["mustache", "regular shades"]),
  //4131"]),

  new Trait("female", ["blonde short", "vr"]),
  //4132"]),

  new Trait("female", ["green eye shadow", "wild blonde"]),
  //4133"]),

  new Trait("female", ["cigarette", "frumpy hair"]),
  //4134"]),

  new Trait("male", ["cigarette", "crazy hair"]),
  //4135"]),

  new Trait("male", ["beanie", "horned rim glasses"]),
  //4136"]),

  new Trait("male", ["frumpy hair", "vape"]),
  //4137"]),

  new Trait("male", ["big shades", "front beard", "frumpy hair"]),
  //4138"]),

  new Trait("female", ["green eye shadow", "red mohawk"]),
  //4139"]),

  new Trait("female", ["black lipstick", "blonde short", "clown eyes blue"]),
  //4140"]),

  new Trait("male", ["messy hair", "pipe", "regular shades", "smile"]),
  //4141"]),

  new Trait("male", ["frown", "headband"]),
  //4142"]),

  new Trait("male", ["smile"]),
  //4143"]),

  new Trait("female", ["clown hair green"]),
  //4144"]),

  new Trait("female", ["black lipstick", "mohawk dark", "pipe"]),
  //4145"]),

  new Trait("female", ["eye patch", "wild hair"]),
  //4146"]),

  new Trait("female", [
    "earring",
    "horned rim glasses",
    "mohawk dark",
    "purple lipstick",
  ]),
  //4147"]),

  new Trait("male", ["cap forward", "luxurious beard", "regular shades"]),
  //4148"]),

  new Trait("female", ["horned rim glasses", "wild hair"]),
  //4149"]),

  new Trait("male", ["big shades", "frumpy hair"]),
  //4150"]),

  new Trait("female", [
    "earring",
    "mole",
    "purple eye shadow",
    "straight hair dark",
  ]),
  //4151"]),

  new Trait("female", ["big shades", "black lipstick", "stringy hair"]),
  //4152"]),

  new Trait("female", ["clown eyes green", "mole", "wild white hair"]),
  //4153"]),

  new Trait("male", ["clown nose", "do-rag"]),
  //4154"]),

  new Trait("male", ["cap forward", "earring", "goat"]),
  //4155"]),

  new Trait("ape", ["bandana"]),
  //4156"]),

  new Trait("male", ["bandana", "earring", "front beard dark"]),
  //4157"]),

  new Trait("male", ["headband", "luxurious beard"]),
  //4158"]),

  new Trait("female", ["hot lipstick", "red mohawk", "silver chain"]),
  //4159"]),

  new Trait("male", ["front beard dark", "purple hair", "small shades"]),
  //4160"]),

  new Trait("female", ["black lipstick", "earring", "mohawk dark"]),
  //4161"]),

  new Trait("male", ["do-rag", "earring", "front beard", "horned rim glasses"]),
  //4162"]),

  new Trait("male", ["frumpy hair", "shadow beard"]),
  //4163"]),

  new Trait("male", ["chinstrap", "headband"]),
  //4164"]),

  new Trait("male", ["purple hair", "vr"]),
  //4165"]),

  new Trait("female", [
    "black lipstick",
    "blonde bob",
    "earring",
    "purple eye shadow",
  ]),
  //4166"]),

  new Trait("female", ["black lipstick", "mohawk dark", "vr"]),
  //4167"]),

  new Trait("female", ["cigarette", "hot lipstick", "mole", "stringy hair"]),
  //4168"]),

  new Trait("female", ["green eye shadow", "hot lipstick", "tassle hat"]),
  //4169"]),

  new Trait("male", ["crazy hair", "earring"]),
  //4170"]),

  new Trait("male", ["mohawk thin", "mole"]),
  //4171"]),

  new Trait("male", ["classic shades", "mohawk"]),
  //4172"]),

  new Trait("male", [
    "clown nose",
    "medical mask",
    "mohawk thin",
    "nerd glasses",
  ]),
  //4173"]),

  new Trait("male", ["mohawk", "mole"]),
  //4174"]),

  new Trait("male", ["eye patch", "handlebars", "shaved head"]),
  //4175"]),

  new Trait("female", [
    "earring",
    "green eye shadow",
    "medical mask",
    "purple lipstick",
    "straight hair blonde",
  ]),
  //4176"]),

  new Trait("male", ["cigarette", "nerd glasses", "peak spike"]),
  //4177"]),

  new Trait("ape", ["do-rag"]),
  //4178"]),

  new Trait("male", ["big shades", "front beard", "peak spike"]),
  //4179"]),

  new Trait("female", ["black lipstick", "eye mask", "mohawk"]),
  //4180"]),

  new Trait("male", ["3d glasses", "handlebars", "wild hair"]),
  //4181"]),

  new Trait("male", ["earring", "mohawk thin", "shadow beard"]),
  //4182"]),

  new Trait("female", ["regular shades", "wild blonde"]),
  //4183"]),

  new Trait("female", ["horned rim glasses", "hot lipstick", "mohawk"]),
  //4184"]),

  new Trait("male", ["frumpy hair", "small shades"]),
  //4185"]),

  new Trait("male", ["classic shades", "frumpy hair"]),
  //4186"]),

  new Trait("male", ["crazy hair", "small shades"]),
  //4187"]),

  new Trait("female", ["dark hair", "nerd glasses"]),
  //4188"]),

  new Trait("male", ["horned rim glasses", "knitted cap"]),
  //4189"]),

  new Trait("female", ["earring", "half shaved", "hot lipstick"]),
  //4190"]),

  new Trait("female", ["hot lipstick", "mohawk", "nerd glasses", "pipe"]),
  //4191"]),

  new Trait("male", ["earring", "goat", "rosy cheeks", "shaved head"]),
  //4192"]),

  new Trait("male", ["frumpy hair", "normal beard black"]),
  //4193"]),

  new Trait("female", ["clown nose", "hot lipstick", "stringy hair"]),
  //4194"]),

  new Trait("female", ["dark hair", "mole"]),
  //4195"]),

  new Trait("female", ["clown hair green", "purple lipstick"]),
  //4196"]),

  new Trait("male", ["do-rag", "normal beard"]),
  //4197"]),

  new Trait("female", ["clown eyes green", "straight hair dark"]),
  //4198"]),

  new Trait("male", ["big shades", "mohawk dark", "normal beard black"]),
  //4199"]),

  new Trait("female", ["dark hair", "hot lipstick"]),
  //4200"]),

  new Trait("male", ["clown eyes green", "messy hair"]),
  //4201"]),

  new Trait("male", ["earring", "knitted cap", "normal beard"]),
  //4202"]),

  new Trait("male", ["goat", "headband"]),
  //4203"]),

  new Trait("male", ["chinstrap", "clown eyes green", "earring", "messy hair"]),
  //4204"]),

  new Trait("male", ["mohawk thin", "mustache"]),
  //4205"]),

  new Trait("male", ["chinstrap", "classic shades", "crazy hair"]),
  //4206"]),

  new Trait("male", ["goat", "hoodie", "mole"]),
  //4207"]),

  new Trait("female", ["cigarette", "earring", "stringy hair"]),
  //4208"]),

  new Trait("male", ["bandana", "small shades", "vape"]),
  //4209"]),

  new Trait("male", ["big shades", "cap forward", "earring", "shadow beard"]),
  //4210"]),

  new Trait("female", ["eye patch", "orange side"]),
  //4211"]),

  new Trait("male", ["big shades", "earring", "headband", "mole"]),
  //4212"]),

  new Trait("female", ["bandana", "nerd glasses"]),
  //4213"]),

  new Trait("female", ["cigarette", "earring", "pink with hat"]),
  //4214"]),

  new Trait("female", ["big shades", "black lipstick", "dark hair"]),
  //4215"]),

  new Trait("male", ["mohawk", "shadow beard", "small shades"]),
  //4216"]),

  new Trait("male", ["clown eyes blue", "do-rag", "normal beard"]),
  //4217"]),

  new Trait("female", ["3d glasses", "earring", "wild blonde"]),
  //4218"]),

  new Trait("male", ["messy hair", "mole"]),
  //4219"]),

  new Trait("male", ["big shades", "hoodie", "shadow beard"]),
  //4220"]),

  new Trait("male", ["headband", "normal beard black", "vape"]),
  //4221"]),

  new Trait("female", ["earring", "green eye shadow", "pigtails"]),
  //4222"]),

  new Trait("male", ["frumpy hair", "muttonchops", "vr"]),
  //4223"]),

  new Trait("female", ["black lipstick", "dark hair", "nerd glasses"]),
  //4224"]),

  new Trait("female", ["blue eye shadow", "straight hair blonde"]),
  //4225"]),

  new Trait("male", ["handlebars"]),
  //4226"]),

  new Trait("female", ["green eye shadow", "mohawk dark"]),
  //4227"]),

  new Trait("male", ["big beard", "cap forward", "classic shades"]),
  //4228"]),

  new Trait("female", ["big shades", "half shaved", "hot lipstick"]),
  //4229"]),

  new Trait("female", ["cigarette", "earring", "messy hair"]),
  //4230"]),

  new Trait("female", [
    "clown eyes blue",
    "dark hair",
    "earring",
    "medical mask",
    "purple lipstick",
  ]),
  //4231"]),

  new Trait("female", ["clown eyes green", "crazy hair"]),
  //4232"]),

  new Trait("male", ["bandana", "nerd glasses", "normal beard black"]),
  //4233"]),

  new Trait("male", [
    "earring",
    "gold chain",
    "horned rim glasses",
    "purple hair",
  ]),
  //4234"]),

  new Trait("female", [
    "clown eyes green",
    "hot lipstick",
    "straight hair blonde",
  ]),
  //4235"]),

  new Trait("female", ["bandana", "choker", "earring"]),
  //4236"]),

  new Trait("female", ["green eye shadow", "pigtails", "purple lipstick"]),
  //4237"]),

  new Trait("male", ["big shades", "do-rag"]),
  //4238"]),

  new Trait("female", [
    "cigarette",
    "clown eyes blue",
    "dark hair",
    "rosy cheeks",
  ]),
  //4239"]),

  new Trait("male", ["buck teeth", "earring", "goat"]),
  //4240"]),

  new Trait("male", ["cap", "earring", "mole"]),
  //4241"]),

  new Trait("female", ["green eye shadow", "hot lipstick", "mohawk thin"]),
  //4242"]),

  new Trait("female", ["earring", "green eye shadow", "red mohawk"]),
  //4243"]),

  new Trait("male", ["chinstrap", "horned rim glasses", "peak spike"]),
  //4244"]),

  new Trait("female", [
    "clown eyes green",
    "earring",
    "mole",
    "wild white hair",
  ]),
  //4245"]),

  new Trait("male", ["hoodie", "silver chain", "small shades"]),
  //4246"]),

  new Trait("female", ["blue eye shadow", "headband", "hot lipstick"]),
  //4247"]),

  new Trait("male", ["goat", "stringy hair"]),
  //4248"]),

  new Trait("female", ["earring", "hot lipstick", "messy hair"]),
  //4249"]),

  new Trait("female", ["purple lipstick", "welding goggles", "wild hair"]),
  //4250"]),

  new Trait("male", ["earring", "mustache", "top hat", "vr"]),
  //4251"]),

  new Trait("male", ["eye patch", "goat", "shaved head"]),
  //4252"]),

  new Trait("male", ["earring", "fedora"]),
  //4253"]),

  new Trait("female", [
    "blonde bob",
    "earring",
    "purple eye shadow",
    "purple lipstick",
  ]),
  //4254"]),

  new Trait("male", ["cap", "clown nose", "shadow beard", "small shades"]),
  //4255"]),

  new Trait("male", ["big shades", "earring", "headband"]),
  //4256"]),

  new Trait("female", ["hot lipstick", "mohawk thin", "purple eye shadow"]),
  //4257"]),

  new Trait("male", ["classic shades", "handlebars"]),
  //4258"]),

  new Trait("male", [
    "crazy hair",
    "horned rim glasses",
    "medical mask",
    "shadow beard",
  ]),
  //4259"]),

  new Trait("male", ["cigarette", "mohawk", "silver chain", "vr"]),
  //4260"]),

  new Trait("male", [
    "cigarette",
    "do-rag",
    "normal beard black",
    "silver chain",
  ]),
  //4261"]),

  new Trait("male", ["earring", "frumpy hair", "shadow beard"]),
  //4262"]),

  new Trait("female", ["mohawk", "pipe"]),
  //4263"]),

  new Trait("female", ["silver chain", "wild blonde"]),
  //4264"]),

  new Trait("female", ["blue eye shadow", "frumpy hair"]),
  //4265"]),

  new Trait("female", ["blue eye shadow", "hot lipstick", "knitted cap"]),
  //4266"]),

  new Trait("female", ["blonde short", "purple lipstick"]),
  //4267"]),

  new Trait("female", ["blue eye shadow", "cigarette", "wild white hair"]),
  //4268"]),

  new Trait("female", ["messy hair", "purple lipstick"]),
  //4269"]),

  new Trait("female", ["messy hair", "nerd glasses", "purple lipstick"]),
  //4270"]),

  new Trait("male", ["nerd glasses", "purple hair"]),
  //4271"]),

  new Trait("male", ["earring", "peak spike", "shadow beard", "silver chain"]),
  //4272"]),

  new Trait("female", ["bandana", "clown eyes green"]),
  //4273"]),

  new Trait("female", ["black lipstick", "mohawk dark", "regular shades"]),
  //4274"]),

  new Trait("female", ["big shades", "hot lipstick", "stringy hair"]),
  //4275"]),

  new Trait("female", ["big shades", "straight hair blonde"]),
  //4276"]),

  new Trait("female", ["black lipstick", "cigarette", "wild hair"]),
  //4277"]),

  new Trait("male", ["mustache", "police cap"]),
  //4278"]),

  new Trait("female", ["nerd glasses", "straight hair"]),
  //4279"]),

  new Trait("male", ["cap forward", "frown", "regular shades", "shadow beard"]),
  //4280"]),

  new Trait("female", ["classic shades", "wild white hair"]),
  //4281"]),

  new Trait("male", ["classic shades", "vampire hair"]),
  //4282"]),

  new Trait("male", ["3d glasses", "cap", "earring", "shadow beard"]),
  //4283"]),

  new Trait("male", ["knitted cap", "medical mask", "muttonchops"]),
  //4284"]),

  new Trait("male", ["cap", "earring", "normal beard", "vr"]),
  //4285"]),

  new Trait("female", [
    "earring",
    "green eye shadow",
    "hot lipstick",
    "straight hair blonde",
  ]),
  //4286"]),

  new Trait("male", ["do-rag", "horned rim glasses"]),
  //4287"]),

  new Trait("female", ["rosy cheeks", "wild white hair"]),
  //4288"]),

  new Trait("male", ["cap forward", "eye mask", "smile"]),
  //4289"]),

  new Trait("male", ["handlebars", "top hat"]),
  //4290"]),

  new Trait("male", ["bandana", "goat"]),
  //4291"]),

  new Trait("male", ["bandana", "eye mask"]),
  //4292"]),

  new Trait("male", ["cigarette", "mohawk dark", "nerd glasses"]),
  //4293"]),

  new Trait("female", ["3d glasses", "hot lipstick", "wild hair"]),
  //4294"]),

  new Trait("male", ["earring", "normal beard black", "vampire hair"]),
  //4295"]),

  new Trait("male", ["do-rag", "mole", "regular shades", "shadow beard"]),
  //4296"]),

  new Trait("male", ["eye patch", "shadow beard", "stringy hair"]),
  //4297"]),

  new Trait("male", ["earring", "knitted cap", "regular shades", "smile"]),
  //4298"]),

  new Trait("male", ["messy hair", "muttonchops"]),
  //4299"]),

  new Trait("female", ["mole", "pink with hat"]),
  //4300"]),

  new Trait("female", ["purple lipstick", "vr", "wild white hair"]),
  //4301"]),

  new Trait("female", [
    "clown eyes blue",
    "earring",
    "purple lipstick",
    "straight hair",
  ]),
  //4302"]),

  new Trait("male", ["do-rag", "muttonchops", "small shades"]),
  //4303"]),

  new Trait("female", ["purple lipstick", "red mohawk"]),
  //4304"]),

  new Trait("female", ["black lipstick", "cap", "purple eye shadow"]),
  //4305"]),

  new Trait("female", ["earring", "stringy hair"]),
  //4306"]),

  new Trait("male", [
    "earring",
    "knitted cap",
    "regular shades",
    "shadow beard",
  ]),
  //4307"]),

  new Trait("male", ["classic shades", "earring", "wild hair"]),
  //4308"]),

  new Trait("female", [
    "dark hair",
    "earring",
    "purple eye shadow",
    "purple lipstick",
  ]),
  //4309"]),

  new Trait("female", ["classic shades", "messy hair", "purple lipstick"]),
  //4310"]),

  new Trait("male", ["frown", "mohawk dark", "nerd glasses"]),
  //4311"]),

  new Trait("male", ["big shades", "chinstrap", "headband"]),
  //4312"]),

  new Trait("female", ["cigarette", "purple lipstick"]),
  //4313"]),

  new Trait("female", ["frumpy hair", "welding goggles"]),
  //4314"]),

  new Trait("female", ["black lipstick", "red mohawk"]),
  //4315"]),

  new Trait("female", [
    "cigarette",
    "classic shades",
    "earring",
    "hot lipstick",
    "tassle hat",
  ]),
  //4316"]),

  new Trait("male", ["do-rag", "mustache"]),
  //4317"]),

  new Trait("female", ["clown eyes green", "earring", "mohawk thin"]),
  //4318"]),

  new Trait("female", [
    "cigarette",
    "earring",
    "hot lipstick",
    "straight hair dark",
  ]),
  //4319"]),

  new Trait("male", ["cap forward", "vr"]),
  //4320"]),

  new Trait("male", ["front beard", "frumpy hair"]),
  //4321"]),

  new Trait("male", ["frown", "mohawk thin"]),
  //4322"]),

  new Trait("male", ["cigarette", "cowboy hat"]),
  //4323"]),

  new Trait("male", [
    "buck teeth",
    "earring",
    "eye mask",
    "headband",
    "normal beard black",
  ]),
  //4324"]),

  new Trait("male", ["classic shades", "do-rag", "earring"]),
  //4325"]),

  new Trait("male", ["mole", "wild hair"]),
  //4326"]),

  new Trait("female", ["bandana", "purple eye shadow"]),
  //4327"]),

  new Trait("male", ["fedora", "shadow beard"]),
  //4328"]),

  new Trait("male", ["eye mask", "mohawk thin"]),
  //4329"]),

  new Trait("male", ["earring", "horned rim glasses", "stringy hair"]),
  //4330"]),

  new Trait("male", ["big shades", "mohawk"]),
  //4331"]),

  new Trait("female", [
    "dark hair",
    "earring",
    "green eye shadow",
    "purple lipstick",
  ]),
  //4332"]),

  new Trait("female", ["mole", "pilot helmet"]),
  //4333"]),

  new Trait("female", ["clown eyes green", "hot lipstick", "wild hair"]),
  //4334"]),

  new Trait("male", ["cigarette", "earring", "mohawk thin"]),
  //4335"]),

  new Trait("male", ["cowboy hat", "earring", "mustache"]),
  //4336"]),

  new Trait("male", ["front beard", "mohawk dark", "pipe"]),
  //4337"]),

  new Trait("male", ["cap forward", "clown nose", "nerd glasses"]),
  //4338"]),

  new Trait("female", ["crazy hair", "regular shades"]),
  //4339"]),

  new Trait("female", ["mole", "red mohawk"]),
  //4340"]),

  new Trait("male", ["big shades", "frumpy hair", "normal beard"]),
  //4341"]),

  new Trait("male", ["medical mask", "peak spike"]),
  //4342"]),

  new Trait("female", ["cigarette", "purple lipstick", "straight hair dark"]),
  //4343"]),

  new Trait("female", ["clown eyes green", "frumpy hair", "hot lipstick"]),
  //4344"]),

  new Trait("female", ["big shades", "blonde short"]),
  //4345"]),

  new Trait("female", [
    "pink with hat",
    "purple eye shadow",
    "purple lipstick",
  ]),
  //4346"]),

  new Trait("female", ["nerd glasses", "pink with hat"]),
  //4347"]),

  new Trait("female", ["green eye shadow", "mole", "stringy hair"]),
  //4348"]),

  new Trait("female", ["blonde bob", "mole"]),
  //4349"]),

  new Trait("male", ["big beard", "clown eyes green", "earring", "headband"]),
  //4350"]),

  new Trait("female", ["clown nose", "frumpy hair", "purple lipstick"]),
  //4351"]),

  new Trait("male", ["classic shades", "messy hair", "normal beard", "smile"]),
  //4352"]),

  new Trait("female", ["clown eyes blue", "purple lipstick", "red mohawk"]),
  //4353"]),

  new Trait("female", ["classic shades", "wild white hair"]),
  //4354"]),

  new Trait("male", ["classic shades", "earring", "vampire hair"]),
  //4355"]),

  new Trait("male", ["horned rim glasses", "luxurious beard", "mohawk thin"]),
  //4356"]),

  new Trait("female", ["purple lipstick", "regular shades", "stringy hair"]),
  //4357"]),

  new Trait("female", ["choker", "headband", "purple lipstick"]),
  //4358"]),

  new Trait("male", ["mole", "stringy hair", "vr"]),
  //4359"]),

  new Trait("male", ["big shades", "do-rag", "goat"]),
  //4360"]),

  new Trait("male", ["earring", "mohawk", "normal beard black"]),
  //4361"]),

  new Trait("female", ["blonde bob", "horned rim glasses"]),
  //4362"]),

  new Trait("male", ["eye patch", "normal beard black", "vampire hair"]),
  //4363"]),

  new Trait("female", [
    "blue eye shadow",
    "crazy hair",
    "earring",
    "hot lipstick",
  ]),
  //4364"]),

  new Trait("female", ["cap", "hot lipstick"]),
  //4365"]),

  new Trait("female", ["blue eye shadow", "red mohawk"]),
  //4366"]),

  new Trait("female", ["pipe", "tassle hat"]),
  //4367"]),

  new Trait("female", [
    "black lipstick",
    "earring",
    "headband",
    "regular shades",
  ]),
  //4368"]),

  new Trait("male", ["headband", "muttonchops", "regular shades"]),
  //4369"]),

  new Trait("male", ["frown", "mohawk thin", "shadow beard"]),
  //4370"]),

  new Trait("male", ["cap", "front beard dark", "frown", "horned rim glasses"]),
  //4371"]),

  new Trait("female", ["black lipstick", "blue eye shadow", "wild white hair"]),
  //4372"]),

  new Trait("male", ["fedora", "nerd glasses"]),
  //4373"]),

  new Trait("female", ["clown eyes green", "messy hair"]),
  //4374"]),

  new Trait("male", ["horned rim glasses", "vape", "wild hair"]),
  //4375"]),

  new Trait("female", ["clown eyes blue", "hot lipstick", "pigtails"]),
  //4376"]),

  new Trait("female", ["crazy hair", "purple eye shadow", "purple lipstick"]),
  //4377"]),

  new Trait("male", ["front beard dark", "mohawk dark", "vr"]),
  //4378"]),

  new Trait("male", ["3d glasses", "hoodie", "shadow beard"]),
  //4379"]),

  new Trait("female", ["tiara"]),
  //4380"]),

  new Trait("female", ["black lipstick", "clown hair green"]),
  //4381"]),

  new Trait("female", ["cap", "gold chain", "purple lipstick"]),
  //4382"]),

  new Trait("female", [
    "classic shades",
    "earring",
    "hot lipstick",
    "pink with hat",
  ]),
  //4383"]),

  new Trait("male", ["do-rag", "horned rim glasses", "normal beard black"]),
  //4384"]),

  new Trait("male", ["mohawk", "nerd glasses", "normal beard black"]),
  //4385"]),

  new Trait("male", ["earring", "frumpy hair", "shadow beard"]),
  //4386"]),

  new Trait("male", [
    "cigarette",
    "headband",
    "mustache",
    "nerd glasses",
    "rosy cheeks",
  ]),
  //4387"]),

  new Trait("male", ["normal beard", "police cap"]),
  //4388"]),

  new Trait("male", ["cigarette", "hoodie", "nerd glasses"]),
  //4389"]),

  new Trait("male", ["clown nose", "earring", "front beard dark", "headband"]),
  //4390"]),

  new Trait("male", ["mohawk dark", "mustache"]),
  //4391"]),

  new Trait("male", ["frumpy hair", "mole"]),
  //4392"]),

  new Trait("female", ["black lipstick", "blonde bob", "welding goggles"]),
  //4393"]),

  new Trait("male", ["front beard dark", "stringy hair", "vr"]),
  //4394"]),

  new Trait("male", ["luxurious beard", "mohawk thin"]),
  //4395"]),

  new Trait("female", ["hot lipstick", "vr", "wild hair"]),
  //4396"]),

  new Trait("female", ["black lipstick", "pigtails"]),
  //4397"]),

  new Trait("female", ["blonde bob", "purple lipstick", "vape"]),
  //4398"]),

  new Trait("male", ["fedora", "front beard dark"]),
  //4399"]),

  new Trait("male", ["3d glasses", "cap forward"]),
  //4400"]),

  new Trait("female", ["eye mask", "purple lipstick", "red mohawk"]),
  //4401"]),

  new Trait("male", ["earring", "handlebars", "peak spike"]),
  //4402"]),

  new Trait("male", ["cowboy hat", "earring"]),
  //4403"]),

  new Trait("male", ["frumpy hair", "mole", "shadow beard", "vr"]),
  //4404"]),

  new Trait("female", ["earring", "purple lipstick", "wild white hair"]),
  //4405"]),

  new Trait("female", ["mole", "stringy hair"]),
  //4406"]),

  new Trait("male", ["big shades", "shadow beard", "wild hair"]),
  //4407"]),

  new Trait("male", ["3d glasses", "bandana"]),
  //4408"]),

  new Trait("male", ["classic shades", "mohawk thin", "silver chain"]),
  //4409"]),

  new Trait("female", ["clown eyes blue"]),
  //4410"]),

  new Trait("male", ["cap forward", "frown"]),
  //4411"]),

  new Trait("male", ["earring", "eye mask", "mohawk"]),
  //4412"]),

  new Trait("male", ["crazy hair", "mustache"]),
  //4413"]),

  new Trait("male", ["eye mask", "headband", "mole", "normal beard black"]),
  //4414"]),

  new Trait("male", [
    "eye patch",
    "luxurious beard",
    "mohawk",
    "pipe",
    "smile",
  ]),
  //4415"]),

  new Trait("female", ["classic shades", "mohawk thin"]),
  //4416"]),

  new Trait("female", ["blonde bob", "blue eye shadow", "hot lipstick"]),
  //4417"]),

  new Trait("female", ["pink with hat", "purple eye shadow"]),
  //4418"]),

  new Trait("male", ["earring", "frumpy hair", "muttonchops"]),
  //4419"]),

  new Trait("female", ["hot lipstick", "spots", "wild hair"]),
  //4420"]),

  new Trait("female", ["big shades", "black lipstick", "frumpy hair"]),
  //4421"]),

  new Trait("male", ["earring"]),
  //4422"]),

  new Trait("female", ["cap", "clown eyes blue", "hot lipstick"]),
  //4423"]),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "clown eyes green",
    "earring",
    "wild white hair",
  ]),
  //4424"]),

  new Trait("male", ["big shades", "earring", "peak spike", "shadow beard"]),
  //4425"]),

  new Trait("male", ["bandana", "big shades", "goat", "mole"]),
  //4426"]),

  new Trait("male", ["knitted cap", "normal beard black"]),
  //4427"]),

  new Trait("male", ["cap", "classic shades", "earring", "gold chain"]),
  //4428"]),

  new Trait("female", ["earring", "knitted cap"]),
  //4429"]),

  new Trait("female", ["clown eyes green", "frumpy hair"]),
  //4430"]),

  new Trait("male", ["earring", "goat", "stringy hair"]),
  //4431"]),

  new Trait("female", ["blonde bob", "horned rim glasses"]),
  //4432"]),

  new Trait("male", ["clown eyes green", "frumpy hair"]),
  //4433"]),

  new Trait("female", ["black lipstick", "green eye shadow", "wild hair"]),
  //4434"]),

  new Trait("male", [
    "cap",
    "front beard",
    "gold chain",
    "mole",
    "regular shades",
  ]),
  //4435"]),

  new Trait("male", ["bandana", "luxurious beard", "regular shades"]),
  //4436"]),

  new Trait("male", ["3d glasses", "fedora"]),
  //4437"]),

  new Trait("female", ["green eye shadow", "messy hair"]),
  //4438"]),

  new Trait("female", ["cigarette", "clown eyes green", "dark hair"]),
  //4439"]),

  new Trait("male", ["big shades", "crazy hair", "earring", "pipe"]),
  //4440"]),

  new Trait("male", ["3d glasses", "hoodie"]),
  //4441"]),

  new Trait("male", ["cowboy hat", "muttonchops"]),
  //4442"]),

  new Trait("female", ["bandana", "nerd glasses"]),
  //4443"]),

  new Trait("male", ["mole", "normal beard black", "shaved head"]),
  //4444"]),

  new Trait("male", ["peak spike", "small shades"]),
  //4445"]),

  new Trait("male", ["cap", "clown nose", "normal beard black"]),
  //4446"]),

  new Trait("male", ["cap", "goat"]),
  //4447"]),

  new Trait("male", ["nerd glasses", "shadow beard", "stringy hair"]),
  //4448"]),

  new Trait("female", ["earring", "knitted cap", "mole", "purple eye shadow"]),
  //4449"]),

  new Trait("male", ["do-rag", "earring", "frown"]),
  //4450"]),

  new Trait("male", ["do-rag", "horned rim glasses"]),
  //4451"]),

  new Trait("male", ["mohawk dark", "shadow beard", "vr"]),
  //4452"]),

  new Trait("female", ["horned rim glasses", "purple lipstick"]),
  //4453"]),

  new Trait("male", ["chinstrap", "mohawk thin"]),
  //4454"]),

  new Trait("female", ["earring", "purple lipstick", "stringy hair"]),
  //4455"]),

  new Trait("female", ["green eye shadow", "orange side"]),
  //4456"]),

  new Trait("male", ["peak spike", "rosy cheeks"]),
  //4457"]),

  new Trait("male", ["clown hair green", "front beard", "spots"]),
  //4458"]),

  new Trait("male", ["nerd glasses"]),
  //4459"]),

  new Trait("male", ["cap", "muttonchops"]),
  //4460"]),

  new Trait("female", [
    "blue eye shadow",
    "mole",
    "pipe",
    "straight hair blonde",
  ]),
  //4461"]),

  new Trait("male", ["big shades", "cigarette", "do-rag", "front beard"]),
  //4462"]),

  new Trait("male", ["mohawk", "pipe"]),
  //4463"]),

  new Trait("ape", ["do-rag", "eye mask", "vape"]),
  //4464"]),

  new Trait("female", [
    "blue eye shadow",
    "earring",
    "hot lipstick",
    "wild hair",
  ]),
  //4465"]),

  new Trait("male", ["cigarette", "do-rag"]),
  //4466"]),

  new Trait("female", ["dark hair", "earring", "regular shades"]),
  //4467"]),

  new Trait("female", ["earring", "nerd glasses", "orange side"]),
  //4468"]),

  new Trait("male", ["messy hair", "normal beard", "vr"]),
  //4469"]),

  new Trait("male", ["cap", "horned rim glasses", "shadow beard"]),
  //4470"]),

  new Trait("male", ["earring", "knitted cap"]),
  //4471"]),

  new Trait("zombie", ["cigarette", "purple hair"]),
  //4472"]),

  new Trait("male", ["knitted cap", "pipe"]),
  //4473"]),

  new Trait("male", ["cap", "chinstrap"]),
  //4474"]),

  new Trait("male", ["cigarette", "do-rag"]),
  //4475"]),

  new Trait("male", ["chinstrap", "earring", "knitted cap"]),
  //4476"]),

  new Trait("male", ["eye patch", "peak spike"]),
  //4477"]),

  new Trait("male", ["gold chain", "mohawk thin", "muttonchops"]),
  //4478"]),

  new Trait("male", ["eye patch", "mohawk", "mustache"]),
  //4479"]),

  new Trait("male", ["cap forward", "eye patch"]),
  //4480"]),

  new Trait("male", ["horned rim glasses", "shadow beard", "wild hair"]),
  //4481"]),

  new Trait("male", ["eye patch", "mohawk thin", "shadow beard"]),
  //4482"]),

  new Trait("male", [
    "earring",
    "fedora",
    "horned rim glasses",
    "shadow beard",
  ]),
  //4483"]),

  new Trait("male", ["headband", "regular shades", "shadow beard"]),
  //4484"]),

  new Trait("female", [
    "black lipstick",
    "horned rim glasses",
    "pink with hat",
  ]),
  //4485"]),

  new Trait("female", ["earring", "hot lipstick", "stringy hair"]),
  //4486"]),

  new Trait("male", ["cigarette", "fedora"]),
  //4487"]),

  new Trait("male", ["frown", "mohawk", "shadow beard"]),
  //4488"]),

  new Trait("female", ["earring", "mohawk dark"]),
  //4489"]),

  new Trait("male", ["mohawk", "small shades"]),
  //4490"]),

  new Trait("female", ["blue eye shadow", "hot lipstick", "mohawk"]),
  //4491"]),

  new Trait("male", ["normal beard", "pipe", "police cap"]),
  //4492"]),

  new Trait("male", ["goat", "stringy hair"]),
  //4493"]),

  new Trait("male", ["nerd glasses", "shadow beard", "smile", "wild hair"]),
  //4494"]),

  new Trait("male", ["front beard", "messy hair"]),
  //4495"]),

  new Trait("female", [
    "blue eye shadow",
    "earring",
    "hot lipstick",
    "mohawk thin",
  ]),
  //4496"]),

  new Trait("male", ["clown eyes green", "fedora"]),
  //4497"]),

  new Trait("male", ["front beard", "police cap"]),
  //4498"]),

  new Trait("male", ["earring", "mohawk dark", "vr"]),
  //4499"]),

  new Trait("female", ["dark hair", "purple lipstick", "welding goggles"]),
  //4500"]),

  new Trait("male", ["cowboy hat", "mustache"]),
  //4501"]),

  new Trait("female", ["black lipstick", "straight hair blonde"]),
  //4502"]),

  new Trait("male", ["crazy hair", "shadow beard"]),
  //4503"]),

  new Trait("female", ["black lipstick", "green eye shadow", "mohawk"]),
  //4504"]),

  new Trait("male", ["earring", "headband", "rosy cheeks"]),
  //4505"]),

  new Trait("male", ["beanie", "earring", "front beard"]),
  //4506"]),

  new Trait("male", ["cap forward", "normal beard black"]),
  //4507"]),

  new Trait("male", [
    "bandana",
    "big shades",
    "cigarette",
    "normal beard black",
  ]),
  //4508"]),

  new Trait("male", ["cap", "normal beard black"]),
  //4509"]),

  new Trait("male", [
    "earring",
    "eye patch",
    "mohawk dark",
    "normal beard black",
  ]),
  //4510"]),

  new Trait("male", ["do-rag", "mustache"]),
  //4511"]),

  new Trait("female", ["bandana", "clown eyes green", "hot lipstick"]),
  //4512"]),

  new Trait("zombie", ["beanie", "earring", "luxurious beard"]),
  //4513"]),

  new Trait("female", ["cap", "hot lipstick"]),
  //4514"]),

  new Trait("female", ["clown eyes blue", "clown hair green"]),
  //4515"]),

  new Trait("female", ["knitted cap", "purple eye shadow"]),
  //4516"]),

  new Trait("female", ["purple eye shadow", "wild white hair"]),
  //4517"]),

  new Trait("female", ["clown eyes green", "hot lipstick", "wild hair"]),
  //4518"]),

  new Trait("male", ["bandana", "goat", "horned rim glasses"]),
  //4519"]),

  new Trait("male", ["spots", "stringy hair"]),
  //4520"]),

  new Trait("male", ["knitted cap", "regular shades", "shadow beard"]),
  //4521"]),

  new Trait("male", ["nerd glasses", "top hat"]),
  //4522"]),

  new Trait("male", ["earring", "messy hair", "regular shades"]),
  //4523"]),

  new Trait("male", ["classic shades", "mohawk dark"]),
  //4524"]),

  new Trait("female", ["black lipstick", "earring", "half shaved", "pipe"]),
  //4525"]),

  new Trait("male", ["clown nose", "hoodie", "normal beard"]),
  //4526"]),

  new Trait("male", ["bandana", "vr"]),
  //4527"]),

  new Trait("male", ["front beard", "frown", "frumpy hair"]),
  //4528"]),

  new Trait("male", ["eye mask", "frown", "top hat"]),
  //4529"]),

  new Trait("female", ["cigarette", "hot lipstick", "mohawk"]),
  //4530"]),

  new Trait("male", ["luxurious beard", "purple hair", "small shades"]),
  //4531"]),

  new Trait("male", ["knitted cap", "vape"]),
  //4532"]),

  new Trait("male", ["goat", "police cap", "vr"]),
  //4533"]),

  new Trait("male", ["front beard", "knitted cap", "nerd glasses"]),
  //4534"]),

  new Trait("female", ["clown eyes green", "pink with hat"]),
  //4535"]),

  new Trait("female", ["dark hair", "purple lipstick", "vr"]),
  //4536"]),

  new Trait("female", ["cap", "earring", "hot lipstick"]),
  //4537"]),

  new Trait("male", ["front beard", "peak spike"]),
  //4538"]),

  new Trait("male", ["bandana", "big shades"]),
  //4539"]),

  new Trait("male", ["classic shades", "peak spike"]),
  //4540"]),

  new Trait("male", ["earring", "eye patch", "wild hair"]),
  //4541"]),

  new Trait("male", ["clown hair green", "earring"]),
  //4542"]),

  new Trait("male", ["frumpy hair", "luxurious beard"]),
  //4543"]),

  new Trait("male", ["crazy hair", "normal beard black"]),
  //4544"]),

  new Trait("female", ["hot lipstick", "purple eye shadow", "wild white hair"]),
  //4545"]),

  new Trait("female", ["earring", "mole", "stringy hair"]),
  //4546"]),

  new Trait("female", ["bandana", "earring", "hot lipstick"]),
  //4547"]),

  new Trait("female", ["hot lipstick", "red mohawk"]),
  //4548"]),

  new Trait("male", ["clown hair green", "vr"]),
  //4549"]),

  new Trait("male", ["big shades", "earring", "headband", "mustache"]),
  //4550"]),

  new Trait("male", ["goat", "hoodie", "vr"]),
  //4551"]),

  new Trait("male", ["classic shades", "earring", "headband", "vape"]),
  //4552"]),

  new Trait("male", ["classic shades", "crazy hair", "luxurious beard"]),
  //4553"]),

  new Trait("female", [
    "hot lipstick",
    "mole",
    "regular shades",
    "straight hair dark",
  ]),
  //4554"]),

  new Trait("male", ["frumpy hair", "muttonchops"]),
  //4555"]),

  new Trait("male", ["clown eyes green", "frown", "mohawk"]),
  //4556"]),

  new Trait("male", ["headband", "normal beard black"]),
  //4557"]),

  new Trait("male", ["cap forward", "normal beard", "smile"]),
  //4558"]),

  new Trait("zombie", ["earring", "stringy hair"]),
  //4559"]),

  new Trait("female", ["blonde short", "cigarette", "mole"]),
  //4560"]),

  new Trait("male", ["cigarette", "fedora"]),
  //4561"]),

  new Trait("female", ["black lipstick", "stringy hair", "vr"]),
  //4562"]),

  new Trait("female", ["knitted cap", "mole"]),
  //4563"]),

  new Trait("male", ["earring", "stringy hair"]),
  //4564"]),

  new Trait("male", ["hoodie", "shadow beard", "vr"]),
  //4565"]),

  new Trait("female", ["big shades", "pink with hat"]),
  //4566"]),

  new Trait("male", ["bandana", "big beard", "buck teeth"]),
  //4567"]),

  new Trait("female", ["purple lipstick", "straight hair blonde"]),
  //4568"]),

  new Trait("male", ["clown eyes blue", "mohawk", "shadow beard"]),
  //4569"]),

  new Trait("male", ["classic shades", "wild hair"]),
  //4570"]),

  new Trait("female", ["big shades", "crazy hair"]),
  //4571"]),

  new Trait("male", ["frown", "mustache", "nerd glasses", "purple hair"]),
  //4572"]),

  new Trait("female", ["clown eyes blue", "frumpy hair"]),
  //4573"]),

  new Trait("male", ["crazy hair", "frown", "shadow beard", "vr"]),
  //4574"]),

  new Trait("female", [
    "mole",
    "purple eye shadow",
    "purple lipstick",
    "wild white hair",
  ]),
  //4575"]),

  new Trait("male", ["3d glasses", "bandana", "earring"]),
  //4576"]),

  new Trait("male", ["luxurious beard", "shaved head"]),
  //4577"]),

  new Trait("male", ["cigarette", "headband", "vr"]),
  //4578"]),

  new Trait("female", ["stringy hair"]),
  //4579"]),

  new Trait("female", ["blue eye shadow", "crazy hair", "earring"]),
  //4580"]),

  new Trait("male", ["big shades", "buck teeth", "headband"]),
  //4581"]),

  new Trait("male", ["frumpy hair", "luxurious beard", "small shades"]),
  //4582"]),

  new Trait("male", ["mole", "top hat"]),
  //4583"]),

  new Trait("female", [
    "cigarette",
    "green eye shadow",
    "purple lipstick",
    "straight hair dark",
  ]),
  //4584"]),

  new Trait("female", ["clown eyes blue", "wild white hair"]),
  //4585"]),

  new Trait("female", ["big shades", "crazy hair"]),
  //4586"]),

  new Trait("male", ["front beard", "regular shades", "stringy hair"]),
  //4587"]),

  new Trait("male", ["chinstrap", "crazy hair", "vr"]),
  //4588"]),

  new Trait("male", ["hoodie", "muttonchops", "nerd glasses"]),
  //4589"]),

  new Trait("male", [
    "clown eyes blue",
    "earring",
    "muttonchops",
    "pipe",
    "police cap",
  ]),
  //4590"]),

  new Trait("male", ["cap", "shadow beard"]),
  //4591"]),

  new Trait("male", ["front beard", "horned rim glasses", "mohawk thin"]),
  //4592"]),

  new Trait("male", ["clown eyes green", "clown nose", "mohawk thin"]),
  //4593"]),

  new Trait("male", ["mustache", "police cap"]),
  //4594"]),

  new Trait("female", ["black lipstick", "blonde bob", "pipe"]),
  //4595"]),

  new Trait("male", [
    "clown nose",
    "gold chain",
    "knitted cap",
    "medical mask",
  ]),
  //4596"]),

  new Trait("female", ["black lipstick", "frumpy hair", "vr"]),
  //4597"]),

  new Trait("female", ["blonde short", "hot lipstick", "regular shades"]),
  //4598"]),

  new Trait("male", ["big shades", "shadow beard", "wild hair"]),
  //4599"]),

  new Trait("male", ["big shades", "shaved head"]),
  //4600"]),

  new Trait("male", ["classic shades", "normal beard", "peak spike"]),
  //4601"]),

  new Trait("male", ["handlebars", "nerd glasses", "police cap"]),
  //4602"]),

  new Trait("male", ["big shades", "cap forward", "earring"]),
  //4603"]),

  new Trait("male", ["shadow beard", "top hat"]),
  //4604"]),

  new Trait("male", ["clown nose", "earring", "headband"]),
  //4605"]),

  new Trait("female", ["big shades", "half shaved"]),
  //4606"]),

  new Trait("male", ["clown hair green", "vape"]),
  //4607"]),

  new Trait("male", ["goat", "hoodie"]),
  //4608"]),

  new Trait("male", ["headband", "nerd glasses"]),
  //4609"]),

  new Trait("male", ["earring", "eye mask", "stringy hair"]),
  //4610"]),

  new Trait("male", ["big shades", "cowboy hat", "medical mask"]),
  //4611"]),

  new Trait("female", ["earring", "pilot helmet", "purple lipstick"]),
  //4612"]),

  new Trait("male", ["frumpy hair", "regular shades"]),
  //4613"]),

  new Trait("male", ["do-rag", "earring", "nerd glasses"]),
  //4614"]),

  new Trait("female", ["half shaved", "purple lipstick", "regular shades"]),
  //4615"]),

  new Trait("female", ["blue eye shadow", "cap", "clown nose"]),
  //4616"]),

  new Trait("female", ["big shades", "black lipstick", "frumpy hair"]),
  //4617"]),

  new Trait("male", ["classic shades", "do-rag", "earring"]),
  //4618"]),

  new Trait("female", ["orange side"]),
  //4619"]),

  new Trait("male", ["big shades", "cap forward", "mole", "muttonchops"]),
  //4620"]),

  new Trait("female", ["green eye shadow", "tassle hat"]),
  //4621"]),

  new Trait("female", ["messy hair", "purple lipstick", "regular shades"]),
  //4622"]),

  new Trait("male", ["goat", "mohawk", "nerd glasses"]),
  //4623"]),

  new Trait("female", ["black lipstick", "cap"]),
  //4624"]),

  new Trait("female", ["big shades", "cap", "earring", "hot lipstick"]),
  //4625"]),

  new Trait("female", ["messy hair", "regular shades"]),
  //4626"]),

  new Trait("female", ["clown hair green", "welding goggles"]),
  //4627"]),

  new Trait("male", ["muttonchops", "peak spike", "vr"]),
  //4628"]),

  new Trait("male", ["big beard", "knitted cap"]),
  //4629"]),

  new Trait("female", ["black lipstick", "mohawk", "vr"]),
  //4630"]),

  new Trait("male", ["mustache", "purple hair"]),
  //4631"]),

  new Trait("male", ["chinstrap", "earring", "frown", "vampire hair"]),
  //4632"]),

  new Trait("male", ["big beard", "stringy hair"]),
  //4633"]),

  new Trait("female", ["crazy hair", "vape"]),
  //4634"]),

  new Trait("male", ["cap forward", "earring", "eye patch", "normal beard"]),
  //4635"]),

  new Trait("male", ["frumpy hair", "regular shades"]),
  //4636"]),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "red mohawk",
    "silver chain",
  ]),
  //4637"]),

  new Trait("female", ["black lipstick", "messy hair", "welding goggles"]),
  //4638"]),

  new Trait("female", ["silver chain", "wild white hair"]),
  //4639"]),

  new Trait("male", ["frown", "nerd glasses", "top hat"]),
  //4640"]),

  new Trait("female", ["cigarette", "purple eye shadow", "wild blonde"]),
  //4641"]),

  new Trait("male", ["fedora", "horned rim glasses", "mole", "muttonchops"]),
  //4642"]),

  new Trait("female", ["green eye shadow", "hot lipstick", "mohawk"]),
  //4643"]),

  new Trait("male", ["bandana", "big beard", "gold chain"]),
  //4644"]),

  new Trait("male", ["classic shades", "frumpy hair"]),
  //4645"]),

  new Trait("male", ["earring", "police cap", "small shades"]),
  //4646"]),

  new Trait("male", ["earring", "front beard dark", "mole", "top hat"]),
  //4647"]),

  new Trait("male", ["muttonchops", "shaved head"]),
  //4648"]),

  new Trait("male", ["earring", "normal beard", "shaved head"]),
  //4649"]),

  new Trait("male", ["earring", "front beard", "mohawk thin"]),
  //4650"]),

  new Trait("male", ["mohawk thin", "shadow beard", "smile"]),
  //4651"]),

  new Trait("female", ["clown eyes blue", "mohawk thin", "purple lipstick"]),
  //4652"]),

  new Trait("male", ["cigarette", "hoodie", "horned rim glasses", "spots"]),
  //4653"]),

  new Trait("female", ["eye patch", "pigtails", "purple lipstick"]),
  //4654"]),

  new Trait("male", ["earring", "normal beard", "pipe", "wild hair"]),
  //4655"]),

  new Trait("female", ["blonde short", "classic shades"]),
  //4656"]),

  new Trait("male", ["cigarette", "eye patch", "shaved head"]),
  //4657"]),

  new Trait("male", ["earring", "goat", "mole"]),
  //4658"]),

  new Trait("male", ["3d glasses", "wild hair"]),
  //4659"]),

  new Trait("male", [
    "earring",
    "eye patch",
    "front beard dark",
    "vampire hair",
  ]),
  //4660"]),

  new Trait("male", ["cap forward", "eye mask"]),
  //4661"]),

  new Trait("male", ["cap", "cigarette", "classic shades", "muttonchops"]),
  //4662"]),

  new Trait("male", ["horned rim glasses", "mohawk thin"]),
  //4663"]),

  new Trait("female", ["mohawk thin", "mole", "purple lipstick"]),
  //4664"]),

  new Trait("male", ["fedora", "normal beard"]),
  //4665"]),

  new Trait("female", [
    "black lipstick",
    "green eye shadow",
    "straight hair dark",
  ]),
  //4666"]),

  new Trait("male", ["bandana", "cigarette", "frown", "normal beard black"]),
  //4667"]),

  new Trait("male", ["clown eyes green", "earring", "hoodie", "mole"]),
  //4668"]),

  new Trait("male", ["earring", "frown", "mole", "small shades", "wild hair"]),
  //4669"]),

  new Trait("male", ["clown eyes blue", "do-rag", "normal beard black"]),
  //4670"]),

  new Trait("female", ["clown nose", "crazy hair"]),
  //4671"]),

  new Trait("male", ["earring", "horned rim glasses", "mohawk"]),
  //4672"]),

  new Trait("female", ["black lipstick", "nerd glasses"]),
  //4673"]),

  new Trait("female", ["black lipstick", "clown eyes blue", "pigtails"]),
  //4674"]),

  new Trait("female", ["bandana", "vr"]),
  //4675"]),

  new Trait("female", ["blonde bob", "rosy cheeks"]),
  //4676"]),

  new Trait("female", ["dark hair", "earring", "welding goggles"]),
  //4677"]),

  new Trait("male", [
    "cap forward",
    "earring",
    "horned rim glasses",
    "mole",
    "mustache",
  ]),
  //4678"]),

  new Trait("male", ["do-rag", "pipe"]),
  //4679"]),

  new Trait("male", ["eye mask", "hoodie", "mole", "shadow beard"]),
  //4680"]),

  new Trait("female", ["crazy hair", "medical mask"]),
  //4681"]),

  new Trait("female", ["earring", "messy hair", "nerd glasses"]),
  //4682"]),

  new Trait("male", ["earring", "handlebars", "hoodie", "vr"]),
  //4683"]),

  new Trait("male", ["cigarette", "do-rag", "earring", "shadow beard"]),
  //4684"]),

  new Trait("male", ["mustache", "police cap"]),
  //4685"]),

  new Trait("male", ["buck teeth", "cigarette", "fedora"]),
  //4686"]),

  new Trait("female", ["clown eyes blue", "vape"]),
  //4687"]),

  new Trait("male", ["cigarette", "do-rag", "earring"]),
  //4688"]),

  new Trait("male", ["cigarette", "normal beard"]),
  //4689"]),

  new Trait("male", ["cap forward", "clown eyes blue", "earring"]),
  //4690"]),

  new Trait("male", ["eye patch", "frumpy hair", "mole"]),
  //4691"]),

  new Trait("male", ["mohawk", "pipe"]),
  //4692"]),

  new Trait("female", ["eye patch", "wild hair"]),
  //4693"]),

  new Trait("male", ["do-rag", "smile"]),
  //4694"]),

  new Trait("male", ["crazy hair", "normal beard"]),
  //4695"]),

  new Trait("female", ["big shades", "cap", "earring"]),
  //4696"]),

  new Trait("male", ["headband", "luxurious beard", "smile"]),
  //4697"]),

  new Trait("male", ["big beard", "cigarette", "headband"]),
  //4698"]),

  new Trait("male", ["eye patch", "peak spike"]),
  //4699"]),

  new Trait("female", ["cigarette", "messy hair", "purple lipstick"]),
  //4700"]),

  new Trait("male", ["cigarette", "clown eyes green", "crazy hair"]),
  //4701"]),

  new Trait("female", ["earring", "eye mask", "purple lipstick", "tassle hat"]),
  //4702"]),

  new Trait("male", ["earring", "horned rim glasses", "knitted cap"]),
  //4703"]),

  new Trait("female", ["clown eyes green", "headband"]),
  //4704"]),

  new Trait("male", ["mohawk thin", "small shades"]),
  //4705"]),

  new Trait("male", ["cap forward", "chinstrap", "earring", "eye mask"]),
  //4706"]),

  new Trait("male", ["nerd glasses", "police cap", "smile"]),
  //4707"]),

  new Trait("male", ["earring", "eye patch", "police cap"]),
  //4708"]),

  new Trait("male", ["shadow beard"]),
  //4709"]),

  new Trait("female", ["black lipstick", "blonde short", "regular shades"]),
  //4710"]),

  new Trait("female", ["eye patch", "hot lipstick", "straight hair dark"]),
  //4711"]),

  new Trait("female", ["cigarette", "earring", "wild blonde"]),
  //4712"]),

  new Trait("male", ["hoodie", "horned rim glasses", "normal beard black"]),
  //4713"]),

  new Trait("male", ["earring", "luxurious beard", "peak spike"]),
  //4714"]),

  new Trait("male", ["frown", "knitted cap"]),
  //4715"]),

  new Trait("female", [
    "black lipstick",
    "earring",
    "eye mask",
    "mole",
    "tassle hat",
  ]),
  //4716"]),

  new Trait("male", ["cigarette", "nerd glasses", "shaved head"]),
  //4717"]),

  new Trait("male", ["medical mask", "shaved head"]),
  //4718"]),

  new Trait("female", ["pipe", "purple lipstick", "straight hair blonde"]),
  //4719"]),

  new Trait("male", ["mole", "shaved head"]),
  //4720"]),

  new Trait("female", ["cigarette", "hot lipstick", "stringy hair"]),
  //4721"]),

  new Trait("female", ["hot lipstick", "straight hair"]),
  //4722"]),

  new Trait("male", [
    "classic shades",
    "medical mask",
    "normal beard black",
    "shaved head",
  ]),
  //4723"]),

  new Trait("male", ["earring", "hoodie", "spots"]),
  //4724"]),

  new Trait("male", ["big beard", "earring", "shaved head"]),
  //4725"]),

  new Trait("female", ["silver chain", "straight hair dark"]),
  //4726"]),

  new Trait("male", ["bandana", "big shades"]),
  //4727"]),

  new Trait("male", ["do-rag", "earring", "eye mask"]),
  //4728"]),

  new Trait("female", ["regular shades"]),
  //4729"]),

  new Trait("male", ["big beard", "cigarette", "frown", "mohawk"]),
  //4730"]),

  new Trait("male", ["earring", "normal beard", "shaved head", "small shades"]),
  //4731"]),

  new Trait("male", ["cap", "horned rim glasses"]),
  //4732"]),

  new Trait("male", ["shaved head", "small shades"]),
  //4733"]),

  new Trait("male", ["eye mask", "mohawk dark", "mole"]),
  //4734"]),

  new Trait("male", ["mole", "peak spike", "smile"]),
  //4735"]),

  new Trait("male", ["eye patch", "frown"]),
  //4736"]),

  new Trait("male", ["do-rag", "earring", "horned rim glasses"]),
  //4737"]),

  new Trait("female", ["green eye shadow", "half shaved", "mole"]),
  //4738"]),

  new Trait("male", ["chinstrap", "mohawk dark"]),
  //4739"]),

  new Trait("female", ["green eye shadow", "wild white hair"]),
  //4740"]),

  new Trait("male", ["clown eyes blue", "muttonchops", "pipe"]),
  //4741"]),

  new Trait("female", ["green eye shadow", "hot lipstick", "messy hair"]),
  //4742"]),

  new Trait("male", ["bandana", "vape", "vr"]),
  //4743"]),

  new Trait("male", ["classic shades", "mohawk thin", "mustache"]),
  //4744"]),

  new Trait("male", ["clown nose", "eye mask", "mohawk thin", "shadow beard"]),
  //4745"]),

  new Trait("male", ["3d glasses", "bandana", "shadow beard", "smile"]),
  //4746"]),

  new Trait("zombie", ["clown eyes blue", "headband"]),
  //4747"]),

  new Trait("male", ["clown nose", "purple hair"]),
  //4748"]),

  new Trait("male", ["do-rag", "frown", "small shades"]),
  //4749"]),

  new Trait("male", ["cowboy hat", "front beard", "nerd glasses"]),
  //4750"]),

  new Trait("female", ["cigarette", "eye patch", "messy hair"]),
  //4751"]),

  new Trait("female", ["horned rim glasses", "purple lipstick", "tiara"]),
  //4752"]),

  new Trait("male", ["big shades", "cigarette", "knitted cap"]),
  //4753"]),

  new Trait("male", ["chinstrap", "vampire hair"]),
  //4754"]),

  new Trait("male", ["earring", "messy hair", "normal beard"]),
  //4755"]),

  new Trait("female", [
    "clown eyes blue",
    "hot lipstick",
    "straight hair dark",
  ]),
  //4756"]),

  new Trait("male", ["hoodie", "mole", "pipe"]),
  //4757"]),

  new Trait("male", ["earring", "mohawk dark", "normal beard"]),
  //4758"]),

  new Trait("male", ["big shades", "handlebars", "purple hair"]),
  //4759"]),

  new Trait("male", ["hoodie", "normal beard", "regular shades"]),
  //4760"]),

  new Trait("female", [
    "black lipstick",
    "horned rim glasses",
    "straight hair blonde",
  ]),
  //4761"]),

  new Trait("male", ["cigarette", "mohawk", "regular shades"]),
  //4762"]),

  new Trait("female", [
    "big shades",
    "black lipstick",
    "earring",
    "messy hair",
  ]),
  //4763"]),

  new Trait("male", ["cigarette", "earring", "peak spike"]),
  //4764"]),

  new Trait("male", ["pipe", "shadow beard", "vampire hair"]),
  //4765"]),

  new Trait("male", ["earring", "front beard", "messy hair", "nerd glasses"]),
  //4766"]),

  new Trait("female", [
    "clown eyes green",
    "earring",
    "purple lipstick",
    "tassle hat",
  ]),
  //4767"]),

  new Trait("female", ["hot lipstick", "mohawk thin", "mole"]),
  //4768"]),

  new Trait("female", ["pink with hat", "vape"]),
  //4769"]),

  new Trait("male", ["hoodie", "mole", "shadow beard"]),
  //4770"]),

  new Trait("male", ["goat", "messy hair"]),
  //4771"]),

  new Trait("female", ["big shades", "hot lipstick", "straight hair"]),
  //4772"]),

  new Trait("male", ["classic shades", "police cap"]),
  //4773"]),

  new Trait("male", ["clown eyes green", "do-rag", "earring", "rosy cheeks"]),
  //4774"]),

  new Trait("male", ["mole", "vampire hair", "vape"]),
  //4775"]),

  new Trait("male", ["big beard", "cigarette", "eye patch", "frumpy hair"]),
  //4776"]),

  new Trait("male", ["cigarette", "earring", "mohawk"]),
  //4777"]),

  new Trait("female", ["bandana", "clown eyes blue", "earring"]),
  //4778"]),

  new Trait("female", ["crazy hair", "eye mask"]),
  //4779"]),

  new Trait("male", ["cowboy hat", "vr"]),
  //4780"]),

  new Trait("male", ["frown", "mohawk thin"]),
  //4781"]),

  new Trait("female", ["clown nose", "wild hair"]),
  //4782"]),

  new Trait("male", ["bandana", "horned rim glasses", "luxurious beard"]),
  //4783"]),

  new Trait("female", ["earring", "eye patch", "straight hair"]),
  //4784"]),

  new Trait("male", [
    "luxurious beard",
    "medical mask",
    "mohawk dark",
    "rosy cheeks",
  ]),
  //4785"]),

  new Trait("male", ["buck teeth", "clown hair green"]),
  //4786"]),

  new Trait("female", ["black lipstick", "cigarette", "straight hair"]),
  //4787"]),

  new Trait("female", ["earring", "hot lipstick", "pilot helmet"]),
  //4788"]),

  new Trait("male", ["clown eyes blue", "mohawk dark"]),
  //4789"]),

  new Trait("male", ["big shades", "cigarette", "crazy hair", "mustache"]),
  //4790"]),

  new Trait("male", ["clown eyes blue", "shadow beard", "wild hair"]),
  //4791"]),

  new Trait("male", ["earring", "handlebars"]),
  //4792"]),

  new Trait("male", ["earring", "mohawk", "shadow beard"]),
  //4793"]),

  new Trait("male", ["fedora", "small shades"]),
  //4794"]),

  new Trait("male", ["gold chain", "wild hair"]),
  //4795"]),

  new Trait("male", ["cap forward", "mole"]),
  //4796"]),

  new Trait("female", ["mole", "tassle hat"]),
  //4797"]),

  new Trait("female", ["rosy cheeks", "straight hair blonde"]),
  //4798"]),

  new Trait("female", [
    "black lipstick",
    "blue eye shadow",
    "earring",
    "straight hair blonde",
  ]),
  //4799"]),

  new Trait("male", ["cap", "luxurious beard"]),
  //4800"]),

  new Trait("male", ["cap forward", "muttonchops", "regular shades"]),
  //4801"]),

  new Trait("female", ["hot lipstick", "silver chain", "straight hair dark"]),
  //4802"]),

  new Trait("female", ["black lipstick", "crazy hair", "nerd glasses"]),
  //4803"]),

  new Trait("male", ["eye patch", "wild hair"]),
  //4804"]),

  new Trait("male", ["clown eyes green", "clown nose", "crazy hair", "frown"]),
  //4805"]),

  new Trait("female", ["medical mask", "straight hair"]),
  //4806"]),

  new Trait("male", ["fedora", "frown", "shadow beard"]),
  //4807"]),

  new Trait("male", ["eye patch", "front beard dark", "shaved head"]),
  //4808"]),

  new Trait("male", ["horned rim glasses", "mohawk", "normal beard black"]),
  //4809"]),

  new Trait("male", ["shadow beard", "shaved head"]),
  //4810"]),

  new Trait("male", ["big shades", "shaved head"]),
  //4811"]),

  new Trait("male", ["buck teeth", "messy hair", "nerd glasses"]),
  //4812"]),

  new Trait("female", ["earring", "hot lipstick", "mohawk thin"]),
  //4813"]),

  new Trait("female", ["crazy hair", "earring", "green eye shadow"]),
  //4814"]),

  new Trait("female", ["blue eye shadow", "earring", "messy hair"]),
  //4815"]),

  new Trait("male", ["cap forward", "goat", "pipe"]),
  //4816"]),

  new Trait("female", ["clown eyes green"]),
  //4817"]),

  new Trait("male", ["goat", "mohawk thin"]),
  //4818"]),

  new Trait("male", ["cap", "earring", "vr"]),
  //4819"]),

  new Trait("male", [
    "cigarette",
    "earring",
    "horned rim glasses",
    "purple hair",
  ]),
  //4820"]),

  new Trait("female", ["mohawk", "purple eye shadow"]),
  //4821"]),

  new Trait("male", ["3d glasses", "normal beard black", "vampire hair"]),
  //4822"]),

  new Trait("female", ["bandana", "big shades"]),
  //4823"]),

  new Trait("male", ["clown eyes blue", "earring", "police cap"]),
  //4824"]),

  new Trait("male", ["handlebars", "peak spike", "regular shades"]),
  //4825"]),

  new Trait("male", ["eye mask", "shaved head"]),
  //4826"]),

  new Trait("male", ["luxurious beard", "regular shades", "stringy hair"]),
  //4827"]),

  new Trait("male", ["cap forward", "vr"]),
  //4828"]),

  new Trait("female", ["big shades", "medical mask", "straight hair blonde"]),
  //4829"]),

  new Trait("zombie", ["classic shades", "medical mask", "wild hair"]),
  //4830"]),

  new Trait("male", ["cigarette", "goat", "nerd glasses", "stringy hair"]),
  //4831"]),

  new Trait("male", ["clown hair green", "mole", "mustache"]),
  //4832"]),

  new Trait("female", ["classic shades", "dark hair", "hot lipstick"]),
  //4833"]),

  new Trait("female", ["clown eyes green", "hot lipstick", "messy hair"]),
  //4834"]),

  new Trait("female", ["earring", "green eye shadow", "pigtails"]),
  //4835"]),

  new Trait("male", ["front beard dark", "mohawk"]),
  //4836"]),

  new Trait("male", [
    "horned rim glasses",
    "knitted cap",
    "luxurious beard",
    "mole",
  ]),
  //4837"]),

  new Trait("male", ["clown nose", "vampire hair"]),
  //4838"]),

  new Trait("female", [
    "blue eye shadow",
    "cigarette",
    "purple lipstick",
    "red mohawk",
  ]),
  //4839"]),

  new Trait("male", ["shadow beard", "wild hair"]),
  //4840"]),

  new Trait("male", ["do-rag", "mole"]),
  //4841"]),

  new Trait("male", ["earring", "mohawk thin", "smile"]),
  //4842"]),

  new Trait("male", ["frumpy hair", "goat"]),
  //4843"]),

  new Trait("male", ["headband", "small shades"]),
  //4844"]),

  new Trait("male", ["do-rag", "horned rim glasses", "normal beard"]),
  //4845"]),

  new Trait("female", ["mole", "wild white hair"]),
  //4846"]),

  new Trait("male", ["crazy hair", "earring", "shadow beard", "smile"]),
  //4847"]),

  new Trait("female", ["blue eye shadow", "straight hair blonde"]),
  //4848"]),

  new Trait("female", ["green eye shadow", "wild blonde"]),
  //4849"]),

  new Trait("zombie", ["purple hair"]),
  //4850"]),

  new Trait("male", ["cowboy hat", "normal beard black"]),
  //4851"]),

  new Trait("male", ["big shades", "earring", "vampire hair"]),
  //4852"]),

  new Trait("male", ["big beard", "classic shades", "peak spike", "vape"]),
  //4853"]),

  new Trait("male", ["bandana", "chinstrap", "small shades"]),
  //4854"]),

  new Trait("male", ["earring", "shaved head", "vr"]),
  //4855"]),

  new Trait("male", ["headband", "horned rim glasses"]),
  //4856"]),

  new Trait("female", ["crazy hair", "vr"]),
  //4857"]),

  new Trait("male", ["earring", "normal beard black", "wild hair"]),
  //4858"]),

  new Trait("female", ["cigarette", "wild blonde"]),
  //4859"]),

  new Trait("female", ["clown eyes blue", "orange side"]),
  //4860"]),

  new Trait("male", ["mohawk thin", "normal beard black"]),
  //4861"]),

  new Trait("male", ["clown hair green", "nerd glasses"]),
  //4862"]),

  new Trait("male", ["do-rag", "earring", "regular shades", "smile"]),
  //4863"]),

  new Trait("male", ["earring", "eye patch", "mohawk"]),
  //4864"]),

  new Trait("male", ["knitted cap", "normal beard"]),
  //4865"]),

  new Trait("male", ["earring", "goat", "stringy hair"]),
  //4866"]),

  new Trait("male", ["headband", "mustache"]),
  //4867"]),

  new Trait("female", ["3d glasses", "blonde bob", "hot lipstick"]),
  //4868"]),

  new Trait("male", ["crazy hair", "shadow beard"]),
  //4869"]),

  new Trait("female", ["crazy hair", "mole"]),
  //4870"]),

  new Trait("male", ["earring", "mohawk dark", "shadow beard"]),
  //4871"]),

  new Trait("female", [
    "blue eye shadow",
    "cigarette",
    "earring",
    "red mohawk",
  ]),
  //4872"]),

  new Trait("male", ["regular shades", "stringy hair"]),
  //4873"]),

  new Trait("zombie", [
    "cigarette",
    "clown nose",
    "earring",
    "messy hair",
    "mustache",
  ]),
  //4874"]),

  new Trait("male", ["earring", "eye patch", "mustache", "stringy hair"]),
  //4875"]),

  new Trait("male", ["cigarette", "front beard", "police cap"]),
  //4876"]),

  new Trait("male", ["earring", "messy hair", "vr"]),
  //4877"]),

  new Trait("male", ["chinstrap", "classic shades", "frumpy hair"]),
  //4878"]),

  new Trait("male", ["cigarette", "frumpy hair", "horned rim glasses"]),
  //4879"]),

  new Trait("female", ["pink with hat", "silver chain"]),
  //4880"]),

  new Trait("male", ["police cap", "shadow beard", "small shades"]),
  //4881"]),

  new Trait("female", ["frumpy hair", "nerd glasses"]),
  //4882"]),

  new Trait("male", ["big shades", "do-rag", "luxurious beard"]),
  //4883"]),

  new Trait("female", [
    "clown eyes blue",
    "earring",
    "hot lipstick",
    "wild white hair",
  ]),
  //4884"]),

  new Trait("female", ["eye patch", "half shaved", "purple lipstick"]),
  //4885"]),

  new Trait("female", ["choker", "hot lipstick", "wild hair"]),
  //4886"]),

  new Trait("female", ["blue eye shadow", "half shaved", "hot lipstick"]),
  //4887"]),

  new Trait("male", ["normal beard black", "peak spike"]),
  //4888"]),

  new Trait("female", ["black lipstick", "blonde bob", "clown eyes blue"]),
  //4889"]),

  new Trait("male", ["bandana", "big shades", "normal beard"]),
  //4890"]),

  new Trait("male", ["luxurious beard", "mohawk", "nerd glasses"]),
  //4891"]),

  new Trait("male", ["cap forward", "small shades"]),
  //4892"]),

  new Trait("female", ["regular shades", "wild blonde"]),
  //4893"]),

  new Trait("male", ["regular shades", "shadow beard", "vape", "wild hair"]),
  //4894"]),

  new Trait("female", ["clown eyes blue", "wild white hair"]),
  //4895"]),

  new Trait("male", ["eye patch", "frumpy hair"]),
  //4896"]),

  new Trait("male", ["do-rag", "front beard dark", "vr"]),
  //4897"]),

  new Trait("female", ["blue eye shadow", "earring", "mole", "tassle hat"]),
  //4898"]),

  new Trait("female", ["black lipstick", "dark hair"]),
  //4899"]),

  new Trait("female", ["black lipstick", "earring", "messy hair"]),
  //4900"]),

  new Trait("male", ["big shades", "normal beard black", "purple hair"]),
  //4901"]),

  new Trait("male", ["earring", "eye patch", "shaved head"]),
  //4902"]),

  new Trait("female", [
    "black lipstick",
    "blonde short",
    "cigarette",
    "green eye shadow",
  ]),
  //4903"]),

  new Trait("male", ["normal beard black", "shaved head"]),
  //4904"]),

  new Trait("male", ["earring", "headband", "normal beard black"]),
  //4905"]),

  new Trait("male", ["do-rag", "handlebars", "horned rim glasses"]),
  //4906"]),

  new Trait("male", ["big shades", "crazy hair", "mustache"]),
  //4907"]),

  new Trait("male", ["mohawk", "muttonchops", "nerd glasses"]),
  //4908"]),

  new Trait("male", ["big shades", "wild hair"]),
  //4909"]),

  new Trait("male", ["chinstrap", "mohawk dark"]),
  //4910"]),

  new Trait("female", ["frumpy hair", "purple eye shadow", "purple lipstick"]),
  //4911"]),

  new Trait("female", ["black lipstick", "dark hair", "mole"]),
  //4912"]),

  new Trait("male", ["normal beard", "stringy hair"]),
  //4913"]),

  new Trait("male", ["bandana", "earring", "mustache"]),
  //4914"]),

  new Trait("male", ["eye mask", "normal beard", "stringy hair"]),
  //4915"]),

  new Trait("male", ["front beard dark", "stringy hair", "vr"]),
  //4916"]),

  new Trait("male", ["front beard dark", "vampire hair"]),
  //4917"]),

  new Trait("male", ["mohawk thin", "muttonchops", "nerd glasses"]),
  //4918"]),

  new Trait("male", ["cigarette", "mohawk thin", "shadow beard"]),
  //4919"]),

  new Trait("male", ["crazy hair", "goat", "rosy cheeks", "vape"]),
  //4920"]),

  new Trait("female", [
    "black lipstick",
    "blonde bob",
    "earring",
    "purple eye shadow",
  ]),
  //4921"]),

  new Trait("female", ["pipe", "purple lipstick", "straight hair blonde"]),
  //4922"]),

  new Trait("male", ["front beard dark", "rosy cheeks", "stringy hair"]),
  //4923"]),

  new Trait("female", ["big shades", "pink with hat"]),
  //4924"]),

  new Trait("male", ["bandana", "big shades", "chinstrap"]),
  //4925"]),

  new Trait("male", ["hoodie", "mole"]),
  //4926"]),

  new Trait("female", ["clown eyes green", "mohawk thin", "purple lipstick"]),
  //4927"]),

  new Trait("female", ["clown hair green", "pipe"]),
  //4928"]),

  new Trait("female", ["cigarette", "green eye shadow", "mohawk thin"]),
  //4929"]),

  new Trait("female", ["black lipstick", "mohawk thin", "spots"]),
  //4930"]),

  new Trait("female", ["crazy hair", "earring", "nerd glasses"]),
  //4931"]),

  new Trait("male", ["do-rag", "silver chain"]),
  //4932"]),

  new Trait("male", ["front beard", "mohawk dark", "mole"]),
  //4933"]),

  new Trait("female", ["earring", "eye mask", "purple lipstick", "red mohawk"]),
  //4934"]),

  new Trait("female", ["cigarette", "frumpy hair"]),
  //4935"]),

  new Trait("female", ["tiara"]),
  //4936"]),

  new Trait("female", ["frumpy hair", "welding goggles"]),
  //4937"]),

  new Trait("male", ["handlebars", "purple hair"]),
  //4938"]),

  new Trait("male", ["cap forward", "front beard"]),
  //4939"]),

  new Trait("male", ["classic shades", "hoodie"]),
  //4940"]),

  new Trait("female", ["purple lipstick", "straight hair"]),
  //4941"]),

  new Trait("male", ["eye patch", "headband", "normal beard black"]),
  //4942"]),

  new Trait("female", ["classic shades", "purple lipstick", "tassle hat"]),
  //4943"]),

  new Trait("male", ["earring", "police cap", "regular shades"]),
  //4944"]),

  new Trait("male", ["normal beard black", "police cap"]),
  //4945"]),

  new Trait("female", ["classic shades", "wild hair"]),
  //4946"]),

  new Trait("female", ["classic shades", "mohawk thin"]),
  //4947"]),

  new Trait("male", ["front beard", "mohawk dark"]),
  //4948"]),

  new Trait("female", ["big shades", "black lipstick", "wild hair"]),
  //4949"]),

  new Trait("female", ["bandana", "blue eye shadow", "mole"]),
  //4950"]),

  new Trait("male", ["classic shades", "mohawk thin"]),
  //4951"]),

  new Trait("male", ["cigarette", "normal beard", "shaved head"]),
  //4952"]),

  new Trait("male", ["earring", "fedora", "gold chain", "luxurious beard"]),
  //4953"]),

  new Trait("female", ["choker", "half shaved"]),
  //4954"]),

  new Trait("male", ["normal beard", "regular shades", "wild hair"]),
  //4955"]),

  new Trait("male", ["big shades", "front beard dark", "purple hair"]),
  //4956"]),

  new Trait("female", ["clown eyes blue", "red mohawk"]),
  //4957"]),

  new Trait("female", ["frumpy hair", "green eye shadow", "hot lipstick"]),
  //4958"]),

  new Trait("male", ["earring", "eye patch", "knitted cap"]),
  //4959"]),

  new Trait("male", ["front beard dark", "mole", "peak spike"]),
  //4960"]),

  new Trait("female", ["cap", "earring", "green eye shadow"]),
  //4961"]),

  new Trait("male", ["earring", "knitted cap", "mustache"]),
  //4962"]),

  new Trait("female", ["cap", "classic shades"]),
  //4963"]),

  new Trait("female", ["black lipstick", "mohawk thin", "vape"]),
  //4964"]),

  new Trait("male", ["knitted cap", "nerd glasses", "normal beard"]),
  //4965"]),

  new Trait("male", ["cigarette", "classic shades", "headband"]),
  //4966"]),

  new Trait("male", ["purple hair", "shadow beard", "small shades"]),
  //4967"]),

  new Trait("male", ["earring", "mohawk", "shadow beard"]),
  //4968"]),

  new Trait("male", ["fedora", "goat"]),
  //4969"]),

  new Trait("male", ["handlebars", "purple hair", "small shades"]),
  //4970"]),

  new Trait("male", [
    "cigarette",
    "earring",
    "eye patch",
    "front beard",
    "mohawk",
  ]),
  //4971"]),

  new Trait("female", ["clown eyes blue", "mohawk thin"]),
  //4972"]),

  new Trait("male", ["bandana", "earring", "front beard", "mole"]),
  //4973"]),

  new Trait("male", ["earring", "eye patch", "knitted cap"]),
  //4974"]),

  new Trait("male", ["cap forward", "earring", "eye patch"]),
  //4975"]),

  new Trait("male", ["goat", "messy hair", "smile"]),
  //4976"]),

  new Trait("male", ["eye mask", "vampire hair"]),
  //4977"]),

  new Trait("male", ["cap forward", "chinstrap", "cigarette"]),
  //4978"]),

  new Trait("female", ["big shades", "dark hair"]),
  //4979"]),

  new Trait("female", ["blonde bob", "regular shades"]),
  //4980"]),

  new Trait("female", ["earring", "pipe", "purple eye shadow", "wild hair"]),
  //4981"]),

  new Trait("male", [
    "cigarette",
    "nerd glasses",
    "shaved head",
    "silver chain",
  ]),
  //4982"]),

  new Trait("female", ["clown nose", "hot lipstick", "red mohawk"]),
  //4983"]),

  new Trait("male", ["cigarette", "normal beard", "vampire hair", "vr"]),
  //4984"]),

  new Trait("female", ["big shades", "tassle hat"]),
  //4985"]),

  new Trait("male", ["eye mask", "peak spike"]),
  //4986"]),

  new Trait("male", ["bandana", "buck teeth", "clown eyes green"]),
  //4987"]),

  new Trait("male", ["eye mask", "headband", "luxurious beard"]),
  //4988"]),

  new Trait("male", ["3d glasses", "goat", "vampire hair"]),
  //4989"]),

  new Trait("female", ["black lipstick", "cigarette", "clown eyes blue"]),
  //4990"]),

  new Trait("male", ["messy hair", "regular shades"]),
  //4991"]),

  new Trait("male", ["classic shades", "hoodie"]),
  //4992"]),

  new Trait("male", [
    "cigarette",
    "normal beard black",
    "regular shades",
    "stringy hair",
  ]),
  //4993"]),

  new Trait("male", ["goat", "mohawk", "mole"]),
  //4994"]),

  new Trait("male", ["hoodie", "horned rim glasses"]),
  //4995"]),

  new Trait("female", ["earring", "hot lipstick", "red mohawk"]),
  //4996"]),

  new Trait("female", [
    "hot lipstick",
    "purple eye shadow",
    "straight hair dark",
  ]),
  //4997"]),

  new Trait("male", ["chinstrap", "cigarette", "frown", "messy hair"]),
  //4998"]),

  new Trait("male", ["goat", "mole", "nerd glasses", "stringy hair"]),
  //4999"]),

  new Trait("female", ["green eye shadow", "hot lipstick", "wild white hair"]),
  //5000"]),

  new Trait("female", ["hot lipstick", "orange side"]),
  //5001"]),

  new Trait("male", ["beanie", "earring", "nerd glasses", "pipe"]),
  //5002"]),

  new Trait("male", ["3d glasses", "frown", "headband"]),
  //5003"]),

  new Trait("male", [
    "earring",
    "front beard dark",
    "headband",
    "horned rim glasses",
  ]),
  //5004"]),

  new Trait("female", ["messy hair", "nerd glasses"]),
  //5005"]),

  new Trait("male", ["chinstrap", "regular shades", "vampire hair"]),
  //5006"]),

  new Trait("female", ["hot lipstick", "straight hair"]),
  //5007"]),

  new Trait("male", ["classic shades", "cowboy hat"]),
  //5008"]),

  new Trait("female", ["big shades", "cap", "earring"]),
  //5009"]),

  new Trait("female", [
    "horned rim glasses",
    "medical mask",
    "purple lipstick",
    "straight hair",
  ]),
  //5010"]),

  new Trait("female", ["cigarette", "straight hair dark"]),
  //5011"]),

  new Trait("male", ["cigarette", "crazy hair"]),
  //5012"]),

  new Trait("male", ["messy hair", "normal beard black", "pipe"]),
  //5013"]),

  new Trait("female", [
    "black lipstick",
    "clown eyes blue",
    "straight hair blonde",
  ]),
  //5014"]),

  new Trait("male", ["buck teeth", "goat", "mohawk", "vape"]),
  //5015"]),

  new Trait("male", ["do-rag", "earring", "mole", "regular shades"]),
  //5016"]),

  new Trait("male", ["bandana", "big shades", "earring"]),
  //5017"]),

  new Trait("male", ["frumpy hair", "goat"]),
  //5018"]),

  new Trait("male", ["earring", "mohawk dark", "nerd glasses"]),
  //5019"]),

  new Trait("male", ["bandana", "classic shades", "front beard dark"]),
  //5020"]),

  new Trait("male", ["earring", "mohawk thin", "shadow beard"]),
  //5021"]),

  new Trait("male", ["mohawk", "normal beard"]),
  //5022"]),

  new Trait("male", [
    "earring",
    "front beard dark",
    "nerd glasses",
    "peak spike",
  ]),
  //5023"]),

  new Trait("female", [
    "black lipstick",
    "blue eye shadow",
    "earring",
    "straight hair dark",
  ]),
  //5024"]),

  new Trait("male", ["eye patch", "medical mask", "vampire hair"]),
  //5025"]),

  new Trait("female", ["classic shades", "earring", "straight hair"]),
  //5026"]),

  new Trait("female", ["clown eyes green", "earring", "wild white hair"]),
  //5027"]),

  new Trait("male", ["messy hair", "muttonchops", "small shades"]),
  //5028"]),

  new Trait("male", ["clown eyes green", "headband"]),
  //5029"]),

  new Trait("female", ["horned rim glasses", "wild hair"]),
  //5030"]),

  new Trait("male", ["clown eyes blue", "frumpy hair", "shadow beard"]),
  //5031"]),

  new Trait("female", [
    "cigarette",
    "clown eyes blue",
    "hot lipstick",
    "wild hair",
  ]),
  //5032"]),

  new Trait("male", ["classic shades", "handlebars", "peak spike"]),
  //5033"]),

  new Trait("male", ["cap", "classic shades", "shadow beard"]),
  //5034"]),

  new Trait("male", ["classic shades", "handlebars", "knitted cap"]),
  //5035"]),

  new Trait("female", [
    "clown eyes green",
    "earring",
    "hot lipstick",
    "red mohawk",
  ]),
  //5036"]),

  new Trait("male", ["cap", "earring", "shadow beard"]),
  //5037"]),

  new Trait("female", ["cigarette", "mohawk dark", "purple eye shadow"]),
  //5038"]),

  new Trait("male", ["do-rag", "front beard dark", "horned rim glasses"]),
  //5039"]),

  new Trait("female", ["black lipstick", "tassle hat"]),
  //5040"]),

  new Trait("male", ["mohawk dark", "mustache", "small shades"]),
  //5041"]),

  new Trait("female", ["clown eyes blue", "hot lipstick", "mohawk thin"]),
  //5042"]),

  new Trait("female", ["clown eyes blue", "messy hair"]),
  //5043"]),

  new Trait("female", ["black lipstick", "eye patch", "frumpy hair"]),
  //5044"]),

  new Trait("female", ["mohawk dark", "nerd glasses"]),
  //5045"]),

  new Trait("male", ["mole", "small shades"]),
  //5046"]),

  new Trait("male", ["police cap", "rosy cheeks"]),
  //5047"]),

  new Trait("male", ["bandana", "earring", "handlebars"]),
  //5048"]),

  new Trait("female", ["clown eyes green", "orange side", "purple lipstick"]),
  //5049"]),

  new Trait("male", ["regular shades", "shadow beard", "shaved head"]),
  //5050"]),

  new Trait("male", ["3d glasses", "earring", "front beard", "peak spike"]),
  //5051"]),

  new Trait("female", ["clown nose", "mohawk dark", "purple eye shadow"]),
  //5052"]),

  new Trait("female", ["earring", "hot lipstick", "vape", "wild white hair"]),
  //5053"]),

  new Trait("female", ["clown eyes blue"]),
  //5054"]),

  new Trait("female", [
    "black lipstick",
    "earring",
    "regular shades",
    "straight hair",
  ]),
  //5055"]),

  new Trait("male", ["beanie", "earring", "luxurious beard", "vr"]),
  //5056"]),

  new Trait("male", [
    "chinstrap",
    "classic shades",
    "earring",
    "mole",
    "shaved head",
  ]),
  //5057"]),

  new Trait("male", ["small shades", "stringy hair"]),
  //5058"]),

  new Trait("male", ["gold chain", "headband", "regular shades"]),
  //5059"]),

  new Trait("female", [
    "earring",
    "green eye shadow",
    "purple lipstick",
    "straight hair dark",
  ]),
  //5060"]),

  new Trait("male", ["big beard", "frumpy hair"]),
  //5061"]),

  new Trait("male", ["crazy hair", "front beard dark", "vr"]),
  //5062"]),

  new Trait("male", ["front beard dark", "nerd glasses", "shaved head"]),
  //5063"]),

  new Trait("female", ["cigarette", "eye mask", "straight hair"]),
  //5064"]),

  new Trait("male", ["earring", "fedora", "front beard dark"]),
  //5065"]),

  new Trait("zombie", ["earring", "knitted cap", "smile"]),
  //5066"]),

  new Trait("female", ["classic shades", "earring", "red mohawk"]),
  //5067"]),

  new Trait("female", ["earring", "messy hair", "welding goggles"]),
  //5068"]),

  new Trait("female", ["green eye shadow", "straight hair dark"]),
  //5069"]),

  new Trait("male", ["cap forward", "mole", "regular shades"]),
  //5070"]),

  new Trait("female", ["bandana", "big shades", "hot lipstick"]),
  //5071"]),

  new Trait("male", ["horned rim glasses", "knitted cap", "smile"]),
  //5072"]),

  new Trait("female", ["classic shades", "hot lipstick", "mohawk dark"]),
  //5073"]),

  new Trait("female", ["cap", "cigarette", "hot lipstick", "nerd glasses"]),
  //5074"]),

  new Trait("female", ["earring", "green eye shadow", "headband"]),
  //5075"]),

  new Trait("female", ["black lipstick", "wild blonde"]),
  //5076"]),

  new Trait("male", ["earring", "horned rim glasses", "messy hair"]),
  //5077"]),

  new Trait("male", ["classic shades", "knitted cap", "normal beard black"]),
  //5078"]),

  new Trait("female", [
    "clown eyes green",
    "hot lipstick",
    "messy hair",
    "pipe",
  ]),
  //5079"]),

  new Trait("male", ["earring", "shadow beard", "small shades", "wild hair"]),
  //5080"]),

  new Trait("female", ["black lipstick", "blonde short", "cigarette", "vr"]),
  //5081"]),

  new Trait("female", ["blonde short", "eye patch", "hot lipstick"]),
  //5082"]),

  new Trait("female", [
    "cigarette",
    "clown eyes green",
    "earring",
    "pink with hat",
  ]),
  //5083"]),

  new Trait("female", [
    "black lipstick",
    "clown eyes blue",
    "straight hair blonde",
  ]),
  //5084"]),

  new Trait("female", ["earring", "mohawk dark", "purple lipstick"]),
  //5085"]),

  new Trait("female", ["mohawk dark", "regular shades"]),
  //5086"]),

  new Trait("male", ["front beard", "knitted cap"]),
  //5087"]),

  new Trait("male", ["earring", "knitted cap", "regular shades"]),
  //5088"]),

  new Trait("male", ["muttonchops", "regular shades", "wild hair"]),
  //5089"]),

  new Trait("male", ["eye patch", "goat", "stringy hair"]),
  //5090"]),

  new Trait("male", ["nerd glasses", "wild hair"]),
  //5091"]),

  new Trait("male", ["hoodie", "luxurious beard", "regular shades"]),
  //5092"]),

  new Trait("male", ["3d glasses", "cap", "rosy cheeks"]),
  //5093"]),

  new Trait("female", ["clown eyes blue", "hot lipstick", "mohawk dark"]),
  //5094"]),

  new Trait("male", ["earring", "knitted cap", "shadow beard"]),
  //5095"]),

  new Trait("female", [
    "blonde bob",
    "clown eyes green",
    "hot lipstick",
    "pipe",
  ]),
  //5096"]),

  new Trait("female", ["black lipstick", "blue eye shadow", "wild hair"]),
  //5097"]),

  new Trait("male", ["front beard dark", "frown", "frumpy hair"]),
  //5098"]),

  new Trait("female", ["bandana", "clown eyes blue"]),
  //5099"]),

  new Trait("male", ["clown nose", "earring", "mohawk thin"]),
  //5100"]),

  new Trait("male", [
    "earring",
    "front beard dark",
    "frown",
    "mohawk thin",
    "small shades",
  ]),
  //5101"]),

  new Trait("female", ["crazy hair", "green eye shadow"]),
  //5102"]),

  new Trait("male", ["frumpy hair", "normal beard", "vr"]),
  //5103"]),

  new Trait("male", ["cigarette", "horned rim glasses", "peak spike"]),
  //5104"]),

  new Trait("female", ["clown eyes green", "earring", "mohawk"]),
  //5105"]),

  new Trait("female", [
    "classic shades",
    "hot lipstick",
    "mohawk dark",
    "mole",
  ]),
  //5106"]),

  new Trait("male", [
    "gold chain",
    "horned rim glasses",
    "muttonchops",
    "wild hair",
  ]),
  //5107"]),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "earring",
    "frumpy hair",
    "purple eye shadow",
  ]),
  //5108"]),

  new Trait("male", ["hoodie", "horned rim glasses", "mole", "shadow beard"]),
  //5109"]),

  new Trait("male", ["crazy hair", "earring", "goat", "nerd glasses"]),
  //5110"]),

  new Trait("male", ["cowboy hat", "eye mask", "normal beard"]),
  //5111"]),

  new Trait("male", ["earring", "goat", "vape", "wild hair"]),
  //5112"]),

  new Trait("male", ["frown", "mohawk thin", "mustache"]),
  //5113"]),

  new Trait("male", ["big beard", "earring", "mohawk thin", "regular shades"]),
  //5114"]),

  new Trait("female", ["blue eye shadow", "red mohawk"]),
  //5115"]),

  new Trait("male", ["3d glasses", "hoodie"]),
  //5116"]),

  new Trait("female", ["black lipstick", "blue eye shadow", "messy hair"]),
  //5117"]),

  new Trait("female", [
    "black lipstick",
    "earring",
    "medical mask",
    "pigtails",
  ]),
  //5118"]),

  new Trait("male", ["nerd glasses", "peak spike"]),
  //5119"]),

  new Trait("female", ["dark hair", "rosy cheeks"]),
  //5120"]),

  new Trait("female", ["purple eye shadow", "tassle hat"]),
  //5121"]),

  new Trait("male", ["cap", "front beard"]),
  //5122"]),

  new Trait("male", ["mohawk thin", "normal beard"]),
  //5123"]),

  new Trait("female", ["blonde bob", "vr"]),
  //5124"]),

  new Trait("female", ["blonde bob", "pipe", "rosy cheeks"]),
  //5125"]),

  new Trait("male", ["big shades", "handlebars", "mohawk"]),
  //5126"]),

  new Trait("male", ["big shades", "chinstrap", "cigarette", "peak spike"]),
  //5127"]),

  new Trait("male", ["cap forward", "earring", "mustache"]),
  //5128"]),

  new Trait("female", ["black lipstick", "crazy hair", "earring"]),
  //5129"]),

  new Trait("male", ["cap forward", "eye patch", "pipe"]),
  //5130"]),

  new Trait("male", ["earring", "mohawk thin", "smile"]),
  //5131"]),

  new Trait("female", ["choker", "clown eyes blue", "mohawk dark"]),
  //5132"]),

  new Trait("male", ["big shades", "earring", "mohawk dark", "normal beard"]),
  //5133"]),

  new Trait("female", ["black lipstick"]),
  //5134"]),

  new Trait("female", [
    "black lipstick",
    "blue eye shadow",
    "pipe",
    "wild white hair",
  ]),
  //5135"]),

  new Trait("male", ["3d glasses", "cap"]),
  //5136"]),

  new Trait("female", ["mole", "purple lipstick", "red mohawk"]),
  //5137"]),

  new Trait("male", ["earring", "mohawk dark", "vr"]),
  //5138"]),

  new Trait("female", ["bandana", "black lipstick", "cigarette"]),
  //5139"]),

  new Trait("male", ["cigarette", "earring", "headband", "normal beard black"]),
  //5140"]),

  new Trait("male", ["cap", "mustache"]),
  //5141"]),

  new Trait("male", ["knitted cap", "normal beard black"]),
  //5142"]),

  new Trait("male", ["clown hair green", "front beard"]),
  //5143"]),

  new Trait("male", ["cigarette", "clown nose", "stringy hair"]),
  //5144"]),

  new Trait("male", [
    "earring",
    "frumpy hair",
    "normal beard",
    "regular shades",
  ]),
  //5145"]),

  new Trait("male", ["classic shades", "goat", "messy hair"]),
  //5146"]),

  new Trait("male", ["earring", "headband", "luxurious beard"]),
  //5147"]),

  new Trait("male", ["eye mask", "hoodie", "normal beard"]),
  //5148"]),

  new Trait("male", [
    "classic shades",
    "clown nose",
    "knitted cap",
    "normal beard black",
    "smile",
  ]),
  //5149"]),

  new Trait("male", ["bandana", "cigarette", "clown eyes blue"]),
  //5150"]),

  new Trait("male", ["crazy hair", "mole"]),
  //5151"]),

  new Trait("male", ["regular shades", "stringy hair"]),
  //5152"]),

  new Trait("female", ["earring", "purple eye shadow", "wild hair"]),
  //5153"]),

  new Trait("female", [
    "clown eyes blue",
    "earring",
    "half shaved",
    "purple lipstick",
  ]),
  //5154"]),

  new Trait("male", ["normal beard", "regular shades", "wild hair"]),
  //5155"]),

  new Trait("male", ["knitted cap", "nerd glasses", "pipe"]),
  //5156"]),

  new Trait("male", ["mole", "peak spike", "vr"]),
  //5157"]),

  new Trait("female", ["big shades", "straight hair"]),
  //5158"]),

  new Trait("female", ["cigarette", "earring", "hot lipstick", "tassle hat"]),
  //5159"]),

  new Trait("female", ["eye patch", "hot lipstick", "wild blonde"]),
  //5160"]),

  new Trait("female", ["cigarette", "clown eyes green"]),
  //5161"]),

  new Trait("male", ["nerd glasses", "purple hair"]),
  //5162"]),

  new Trait("male", ["headband", "vape"]),
  //5163"]),

  new Trait("female", ["half shaved", "hot lipstick", "vr"]),
  //5164"]),

  new Trait("female", ["mohawk dark", "purple eye shadow"]),
  //5165"]),

  new Trait("female", [
    "clown eyes blue",
    "earring",
    "purple lipstick",
    "straight hair blonde",
  ]),
  //5166"]),

  new Trait("female", ["crazy hair", "gold chain", "purple lipstick"]),
  //5167"]),

  new Trait("female", ["orange side", "purple lipstick"]),
  //5168"]),

  new Trait("male", ["clown nose", "hoodie"]),
  //5169"]),

  new Trait("male", ["big shades", "earring", "fedora"]),
  //5170"]),

  new Trait("female", ["earring"]),
  //5171"]),

  new Trait("female", ["blue eye shadow", "straight hair"]),
  //5172"]),

  new Trait("male", ["front beard", "mohawk thin", "vr"]),
  //5173"]),

  new Trait("male", ["earring", "frumpy hair", "shadow beard"]),
  //5174"]),

  new Trait("male", ["bandana", "cigarette", "earring", "gold chain"]),
  //5175"]),

  new Trait("male", ["big shades", "earring", "frown", "mohawk"]),
  //5176"]),

  new Trait("female", [
    "clown eyes green",
    "hot lipstick",
    "straight hair blonde",
  ]),
  //5177"]),

  new Trait("male", ["big shades", "police cap"]),
  //5178"]),

  new Trait("male", ["eye patch", "fedora"]),
  //5179"]),

  new Trait("female", ["classic shades", "crazy hair"]),
  //5180"]),

  new Trait("female", ["cigarette", "purple eye shadow", "tassle hat"]),
  //5181"]),

  new Trait("male", ["earring", "mole", "police cap", "small shades"]),
  //5182"]),

  new Trait("female", ["regular shades", "straight hair dark", "vape"]),
  //5183"]),

  new Trait("male", ["normal beard"]),
  //5184"]),

  new Trait("male", ["regular shades", "top hat"]),
  //5185"]),

  new Trait("female", ["horned rim glasses", "pigtails", "pipe"]),
  //5186"]),

  new Trait("female", ["big shades", "hot lipstick", "red mohawk"]),
  //5187"]),

  new Trait("male", ["cigarette", "shaved head", "small shades"]),
  //5188"]),

  new Trait("male", ["cap", "earring", "muttonchops"]),
  //5189"]),

  new Trait("female", ["clown eyes green", "pigtails"]),
  //5190"]),

  new Trait("female", ["pink with hat", "vape"]),
  //5191"]),

  new Trait("male", ["earring", "nerd glasses", "wild hair"]),
  //5192"]),

  new Trait("female", ["black lipstick", "clown eyes green", "mohawk"]),
  //5193"]),

  new Trait("male", ["clown eyes green", "earring", "messy hair"]),
  //5194"]),

  new Trait("female", ["bandana", "hot lipstick", "pipe"]),
  //5195"]),

  new Trait("male", ["front beard", "vampire hair"]),
  //5196"]),

  new Trait("male", ["clown nose", "luxurious beard"]),
  //5197"]),

  new Trait("male", ["mohawk", "mustache", "regular shades"]),
  //5198"]),

  new Trait("female", ["hot lipstick", "messy hair", "nerd glasses"]),
  //5199"]),

  new Trait("male", ["eye patch", "mohawk"]),
  //5200"]),

  new Trait("male", ["eye mask", "frumpy hair", "pipe"]),
  //5201"]),

  new Trait("female", [
    "black lipstick",
    "classic shades",
    "earring",
    "mohawk thin",
  ]),
  //5202"]),

  new Trait("female", ["big shades", "dark hair"]),
  //5203"]),

  new Trait("male", [
    "classic shades",
    "earring",
    "fedora",
    "front beard dark",
    "medical mask",
  ]),
  //5204"]),

  new Trait("male", ["frown", "police cap"]),
  //5205"]),

  new Trait("male", ["normal beard black", "regular shades", "shaved head"]),
  //5206"]),

  new Trait("male", ["goat", "mohawk dark"]),
  //5207"]),

  new Trait("female", [
    "black lipstick",
    "clown eyes blue",
    "crazy hair",
    "earring",
    "vape",
  ]),
  //5208"]),

  new Trait("male", ["small shades", "vampire hair"]),
  //5209"]),

  new Trait("female", ["green eye shadow", "straight hair dark"]),
  //5210"]),

  new Trait("female", [
    "cigarette",
    "earring",
    "purple eye shadow",
    "purple lipstick",
    "straight hair dark",
  ]),
  //5211"]),

  new Trait("female", ["blonde bob", "clown eyes green", "purple lipstick"]),
  //5212"]),

  new Trait("male", ["chinstrap", "police cap", "vr"]),
  //5213"]),

  new Trait("male", ["eye patch", "silver chain", "wild hair"]),
  //5214"]),

  new Trait("male", ["crazy hair", "regular shades"]),
  //5215"]),

  new Trait("male", ["cap", "normal beard black"]),
  //5216"]),

  new Trait("ape", ["gold chain", "knitted cap"]),
  //5217"]),

  new Trait("male", ["classic shades", "hoodie", "shadow beard"]),
  //5218"]),

  new Trait("female", ["medical mask", "purple lipstick", "wild blonde"]),
  //5219"]),

  new Trait("male", ["bandana", "earring", "front beard"]),
  //5220"]),

  new Trait("female", ["big shades", "hot lipstick", "tassle hat"]),
  //5221"]),

  new Trait("female", ["black lipstick", "mohawk dark", "mole"]),
  //5222"]),

  new Trait("male", ["big beard", "classic shades", "headband"]),
  //5223"]),

  new Trait("male", ["crazy hair", "luxurious beard"]),
  //5224"]),

  new Trait("male", ["earring", "eye patch"]),
  //5225"]),

  new Trait("male", [
    "earring",
    "regular shades",
    "shadow beard",
    "stringy hair",
  ]),
  //5226"]),

  new Trait("male", ["cigarette", "frumpy hair"]),
  //5227"]),

  new Trait("male", ["front beard", "stringy hair"]),
  //5228"]),

  new Trait("male", ["big shades", "muttonchops", "peak spike", "smile"]),
  //5229"]),

  new Trait("male", ["beanie", "shadow beard"]),
  //5230"]),

  new Trait("male", ["earring", "normal beard", "peak spike"]),
  //5231"]),

  new Trait("female", [
    "black lipstick",
    "earring",
    "nerd glasses",
    "wild white hair",
  ]),
  //5232"]),

  new Trait("male", ["cigarette", "knitted cap", "smile"]),
  //5233"]),

  new Trait("zombie", ["big shades", "crazy hair", "earring"]),
  //5234"]),

  new Trait("male", ["clown nose", "cowboy hat", "silver chain"]),
  //5235"]),

  new Trait("female", ["cap", "eye patch"]),
  //5236"]),

  new Trait("male", ["classic shades", "peak spike"]),
  //5237"]),

  new Trait("male", ["classic shades", "messy hair", "smile"]),
  //5238"]),

  new Trait("male", ["clown hair green", "handlebars"]),
  //5239"]),

  new Trait("male", ["3d glasses", "knitted cap"]),
  //5240"]),

  new Trait("male", [
    "do-rag",
    "horned rim glasses",
    "shadow beard",
    "silver chain",
  ]),
  //5241"]),

  new Trait("male", ["big shades", "cowboy hat", "shadow beard"]),
  //5242"]),

  new Trait("female", ["black lipstick", "earring", "headband"]),
  //5243"]),

  new Trait("male", ["cigarette", "earring", "messy hair"]),
  //5244"]),

  new Trait("male", ["3d glasses", "do-rag", "goat"]),
  //5245"]),

  new Trait("male", ["fedora", "gold chain"]),
  //5246"]),

  new Trait("male", ["chinstrap", "horned rim glasses", "mohawk"]),
  //5247"]),

  new Trait("female", ["earring", "green eye shadow", "mohawk"]),
  //5248"]),

  new Trait("male", ["classic shades", "earring", "headband"]),
  //5249"]),

  new Trait("female", ["blue eye shadow", "knitted cap"]),
  //5250"]),

  new Trait("female", [
    "bandana",
    "clown eyes blue",
    "earring",
    "hot lipstick",
    "vape",
  ]),
  //5251"]),

  new Trait("male", ["clown eyes blue", "front beard dark", "shaved head"]),
  //5252"]),

  new Trait("zombie", ["messy hair", "mole"]),
  //5253"]),

  new Trait("female", ["cigarette", "clown eyes blue", "stringy hair"]),
  //5254"]),

  new Trait("male", ["buck teeth", "normal beard", "shaved head"]),
  //5255"]),

  new Trait("female", ["hot lipstick", "mole", "wild blonde"]),
  //5256"]),

  new Trait("male", ["handlebars", "mohawk dark", "regular shades", "vape"]),
  //5257"]),

  new Trait("male", ["clown eyes blue", "headband"]),
  //5258"]),

  new Trait("male", ["do-rag", "earring", "normal beard black"]),
  //5259"]),

  new Trait("male", ["clown eyes green", "gold chain", "shaved head"]),
  //5260"]),

  new Trait("male", [
    "crazy hair",
    "earring",
    "gold chain",
    "horned rim glasses",
    "smile",
  ]),
  //5261"]),

  new Trait("male", ["muttonchops"]),
  //5262"]),

  new Trait("male", ["frown", "pipe"]),
  //5263"]),

  new Trait("female", ["purple eye shadow", "wild blonde"]),
  //5264"]),

  new Trait("female", ["cap", "clown eyes green", "earring"]),
  //5265"]),

  new Trait("female", ["purple lipstick", "straight hair"]),
  //5266"]),

  new Trait("female", ["purple lipstick", "straight hair blonde", "vape"]),
  //5267"]),

  new Trait("male", ["bandana", "front beard", "horned rim glasses"]),
  //5268"]),

  new Trait("male", ["chinstrap", "knitted cap", "small shades"]),
  //5269"]),

  new Trait("female", ["mole", "straight hair blonde"]),
  //5270"]),

  new Trait("female", ["blonde short", "nerd glasses"]),
  //5271"]),

  new Trait("male", ["big shades", "clown hair green"]),
  //5272"]),

  new Trait("male", ["headband", "nerd glasses", "shadow beard"]),
  //5273"]),

  new Trait("male", ["buck teeth", "muttonchops", "shaved head"]),
  //5274"]),

  new Trait("male", ["clown eyes blue", "police cap"]),
  //5275"]),

  new Trait("male", ["frown", "frumpy hair", "normal beard", "vr"]),
  //5276"]),

  new Trait("female", ["clown hair green", "eye mask", "hot lipstick"]),
  //5277"]),

  new Trait("male", ["front beard dark", "mohawk dark"]),
  //5278"]),

  new Trait("female", ["bandana", "blue eye shadow"]),
  //5279"]),

  new Trait("male", ["cigarette", "muttonchops", "nerd glasses", "wild hair"]),
  //5280"]),

  new Trait("female", ["pigtails", "purple lipstick"]),
  //5281"]),

  new Trait("female", ["3d glasses", "earring", "straight hair blonde"]),
  //5282"]),

  new Trait("male", ["do-rag", "nerd glasses", "normal beard black"]),
  //5283"]),

  new Trait("male", ["frumpy hair", "medical mask", "regular shades"]),
  //5284"]),

  new Trait("female", ["cap", "hot lipstick", "regular shades"]),
  //5285"]),

  new Trait("male", ["earring", "shadow beard", "shaved head", "small shades"]),
  //5286"]),

  new Trait("male", ["eye patch", "mohawk thin", "pipe"]),
  //5287"]),

  new Trait("male", ["horned rim glasses", "purple hair"]),
  //5288"]),

  new Trait("male", ["handlebars", "hoodie"]),
  //5289"]),

  new Trait("male", [
    "horned rim glasses",
    "mohawk dark",
    "normal beard black",
  ]),
  //5290"]),

  new Trait("female", ["black lipstick", "classic shades", "stringy hair"]),
  //5291"]),

  new Trait("male", ["buck teeth", "clown eyes blue", "frumpy hair"]),
  //5292"]),

  new Trait("female", ["frumpy hair", "mole", "purple lipstick"]),
  //5293"]),

  new Trait("male", ["cap forward", "clown eyes blue", "luxurious beard"]),
  //5294"]),

  new Trait("female", [
    "earring",
    "hot lipstick",
    "purple eye shadow",
    "straight hair blonde",
  ]),
  //5295"]),

  new Trait("male", ["earring", "eye patch", "goat", "messy hair"]),
  //5296"]),

  new Trait("male", ["shadow beard", "wild hair"]),
  //5297"]),

  new Trait("male", ["buck teeth", "earring", "hoodie", "horned rim glasses"]),
  //5298"]),

  new Trait("zombie", ["cigarette", "earring", "handlebars", "mohawk dark"]),
  //5299"]),

  new Trait("male", ["do-rag", "goat", "nerd glasses", "silver chain"]),
  //5300"]),

  new Trait("female", ["blue eye shadow", "frumpy hair"]),
  //5301"]),

  new Trait("female", ["mohawk", "nerd glasses", "purple lipstick"]),
  //5302"]),

  new Trait("male", ["cigarette", "mustache", "top hat"]),
  //5303"]),

  new Trait("male", ["cigarette", "classic shades", "earring", "vampire hair"]),
  //5304"]),

  new Trait("male", ["classic shades", "handlebars", "messy hair"]),
  //5305"]),

  new Trait("male", ["cigarette", "front beard", "purple hair", "spots"]),
  //5306"]),

  new Trait("female", [
    "earring",
    "purple eye shadow",
    "purple lipstick",
    "red mohawk",
  ]),
  //5307"]),

  new Trait("male", ["hoodie", "vape"]),
  //5308"]),

  new Trait("male", ["cigarette", "wild hair"]),
  //5309"]),

  new Trait("female", ["earring", "hot lipstick", "wild blonde"]),
  //5310"]),

  new Trait("male", ["earring", "handlebars", "stringy hair"]),
  //5311"]),

  new Trait("zombie", ["knitted cap", "luxurious beard"]),
  //5312"]),

  new Trait("male", ["chinstrap", "fedora", "mole", "pipe"]),
  //5313"]),

  new Trait("ape", ["do-rag", "horned rim glasses"]),
  //5314"]),

  new Trait("male", ["horned rim glasses", "messy hair"]),
  //5315"]),

  new Trait("female", ["blue eye shadow", "cigarette", "pink with hat"]),
  //5316"]),

  new Trait("male", ["normal beard black", "police cap"]),
  //5317"]),

  new Trait("male", ["cowboy hat", "mustache"]),
  //5318"]),

  new Trait("male", ["big shades", "mustache", "peak spike"]),
  //5319"]),

  new Trait("male", ["earring", "eye mask", "fedora", "silver chain"]),
  //5320"]),

  new Trait("female", ["mohawk thin", "nerd glasses"]),
  //5321"]),

  new Trait("male", ["earring", "knitted cap", "shadow beard"]),
  //5322"]),

  new Trait("female", ["clown eyes green", "crazy hair"]),
  //5323"]),

  new Trait("male", ["headband", "mustache", "nerd glasses"]),
  //5324"]),

  new Trait("male", ["regular shades", "vampire hair"]),
  //5325"]),

  new Trait("female", ["eye patch", "pigtails"]),
  //5326"]),

  new Trait("male", ["nerd glasses", "rosy cheeks", "stringy hair"]),
  //5327"]),

  new Trait("male", ["3d glasses", "bandana", "earring"]),
  //5328"]),

  new Trait("male", ["mohawk thin", "regular shades"]),
  //5329"]),

  new Trait("female", ["crazy hair", "earring", "horned rim glasses"]),
  //5330"]),

  new Trait("female", ["cigarette", "earring", "pilot helmet"]),
  //5331"]),

  new Trait("female", ["black lipstick", "nerd glasses", "red mohawk", "vape"]),
  //5332"]),

  new Trait("female", ["cigarette", "dark hair", "earring"]),
  //5333"]),

  new Trait("male", ["earring", "goat", "mole", "wild hair"]),
  //5334"]),

  new Trait("male", ["do-rag", "luxurious beard"]),
  //5335"]),

  new Trait("zombie", ["police cap"]),
  //5336"]),

  new Trait("male", ["earring", "handlebars", "shaved head"]),
  //5337"]),

  new Trait("male", ["goat", "vampire hair"]),
  //5338"]),

  new Trait("female", ["headband", "purple lipstick", "spots"]),
  //5339"]),

  new Trait("female", ["eye patch", "mohawk"]),
  //5340"]),

  new Trait("male", ["cap", "horned rim glasses", "normal beard black"]),
  //5341"]),

  new Trait("male", ["cigarette", "do-rag", "earring", "eye patch"]),
  //5342"]),

  new Trait("female", ["clown eyes blue", "tassle hat"]),
  //5343"]),

  new Trait("male", ["buck teeth", "earring"]),
  //5344"]),

  new Trait("female", ["clown eyes blue", "straight hair blonde"]),
  //5345"]),

  new Trait("male", ["earring", "horned rim glasses", "vampire hair"]),
  //5346"]),

  new Trait("female", ["blue eye shadow", "wild blonde"]),
  //5347"]),

  new Trait("female", ["black lipstick", "clown hair green"]),
  //5348"]),

  new Trait("male", ["eye mask", "mohawk", "shadow beard"]),
  //5349"]),

  new Trait("male", ["horned rim glasses", "top hat"]),
  //5350"]),

  new Trait("male", ["eye mask", "hoodie", "muttonchops"]),
  //5351"]),

  new Trait("male", ["cigarette", "front beard", "peak spike"]),
  //5352"]),

  new Trait("male", ["mohawk", "muttonchops", "small shades"]),
  //5353"]),

  new Trait("female", ["black lipstick", "mole", "stringy hair"]),
  //5354"]),

  new Trait("male", ["3d glasses", "cap", "handlebars"]),
  //5355"]),

  new Trait("male", [
    "clown eyes blue",
    "earring",
    "front beard",
    "messy hair",
  ]),
  //5356"]),

  new Trait("male", ["horned rim glasses", "shaved head"]),
  //5357"]),

  new Trait("female", ["black lipstick", "blue eye shadow", "crazy hair"]),
  //5358"]),

  new Trait("male", ["clown hair green", "earring", "luxurious beard"]),
  //5359"]),

  new Trait("male", ["small shades"]),
  //5360"]),

  new Trait("female", ["3d glasses", "blonde short"]),
  //5361"]),

  new Trait("male", [
    "cigarette",
    "earring",
    "front beard dark",
    "spots",
    "stringy hair",
  ]),
  //5362"]),

  new Trait("male", ["cap", "classic shades", "handlebars"]),
  //5363"]),

  new Trait("male", ["bandana", "cigarette", "classic shades"]),
  //5364"]),

  new Trait("male", ["horned rim glasses", "peak spike", "shadow beard"]),
  //5365"]),

  new Trait("male", ["mohawk", "normal beard"]),
  //5366"]),

  new Trait("male", ["classic shades", "frumpy hair", "luxurious beard"]),
  //5367"]),

  new Trait("male", ["earring", "mohawk", "normal beard"]),
  //5368"]),

  new Trait("male", ["luxurious beard", "peak spike"]),
  //5369"]),

  new Trait("male", ["frumpy hair", "nerd glasses", "pipe", "shadow beard"]),
  //5370"]),

  new Trait("male", ["bandana", "cigarette"]),
  //5371"]),

  new Trait("female", ["classic shades", "wild blonde"]),
  //5372"]),

  new Trait("female", ["earring", "frumpy hair", "pipe", "purple lipstick"]),
  //5373"]),

  new Trait("male", ["front beard", "wild hair"]),
  //5374"]),

  new Trait("male", ["clown hair green", "mustache"]),
  //5375"]),

  new Trait("female", ["clown eyes blue", "half shaved"]),
  //5376"]),

  new Trait("male", ["big shades", "luxurious beard", "messy hair", "smile"]),
  //5377"]),

  new Trait("male", ["front beard", "vampire hair"]),
  //5378"]),

  new Trait("male", ["clown nose", "mohawk thin"]),
  //5379"]),

  new Trait("male", ["front beard dark", "mohawk thin", "nerd glasses"]),
  //5380"]),

  new Trait("male", ["clown eyes green", "cowboy hat"]),
  //5381"]),

  new Trait("male", ["cigarette", "nerd glasses", "peak spike"]),
  //5382"]),

  new Trait("female", ["blue eye shadow", "dark hair", "vape"]),
  //5383"]),

  new Trait("female", ["clown eyes green", "frumpy hair", "purple lipstick"]),
  //5384"]),

  new Trait("female", ["clown eyes green", "red mohawk"]),
  //5385"]),

  new Trait("female", ["blue eye shadow", "wild blonde"]),
  //5386"]),

  new Trait("male", ["eye patch", "handlebars", "mohawk dark"]),
  //5387"]),

  new Trait("male", ["eye mask", "normal beard black", "vampire hair"]),
  //5388"]),

  new Trait("female", ["welding goggles", "wild hair"]),
  //5389"]),

  new Trait("male", ["big shades", "handlebars", "mohawk thin"]),
  //5390"]),

  new Trait("female", [
    "big shades",
    "cigarette",
    "purple lipstick",
    "straight hair",
  ]),
  //5391"]),

  new Trait("male", ["eye mask", "frumpy hair", "shadow beard"]),
  //5392"]),

  new Trait("male", ["earring", "front beard", "peak spike", "small shades"]),
  //5393"]),

  new Trait("male", ["eye patch", "mohawk"]),
  //5394"]),

  new Trait("male", ["mohawk thin", "small shades"]),
  //5395"]),

  new Trait("male", ["chinstrap", "clown eyes green", "mohawk thin"]),
  //5396"]),

  new Trait("male", ["purple hair", "shadow beard"]),
  //5397"]),

  new Trait("female", ["clown eyes blue", "half shaved", "hot lipstick"]),
  //5398"]),

  new Trait("male", ["do-rag", "handlebars"]),
  //5399"]),

  new Trait("male", ["bandana", "clown eyes green", "earring"]),
  //5400"]),

  new Trait("female", ["bandana", "purple lipstick", "rosy cheeks"]),
  //5401"]),

  new Trait("male", ["clown eyes green", "hoodie", "shadow beard"]),
  //5402"]),

  new Trait("male", ["clown eyes green", "shaved head"]),
  //5403"]),

  new Trait("male", ["headband", "regular shades"]),
  //5404"]),

  new Trait("female", ["clown eyes blue", "wild blonde"]),
  //5405"]),

  new Trait("male", ["gold chain", "mohawk thin"]),
  //5406"]),

  new Trait("female", ["straight hair dark", "welding goggles"]),
  //5407"]),

  new Trait("male", ["eye patch", "wild hair"]),
  //5408"]),

  new Trait("female", ["green eye shadow", "hot lipstick", "pigtails"]),
  //5409"]),

  new Trait("male", ["frumpy hair", "mustache", "rosy cheeks"]),
  //5410"]),

  new Trait("male", ["big shades", "clown nose", "wild hair"]),
  //5411"]),

  new Trait("zombie", ["crazy hair", "nerd glasses"]),
  //5412"]),

  new Trait("female", ["blonde short", "horned rim glasses", "hot lipstick"]),
  //5413"]),

  new Trait("female", ["black lipstick", "silver chain", "straight hair"]),
  //5414"]),

  new Trait("male", [
    "cigarette",
    "headband",
    "luxurious beard",
    "regular shades",
  ]),
  //5415"]),

  new Trait("male", ["earring", "eye mask", "shaved head"]),
  //5416"]),

  new Trait("male", ["luxurious beard", "mohawk thin"]),
  //5417"]),

  new Trait("male", ["earring", "mustache", "nerd glasses", "shaved head"]),
  //5418"]),

  new Trait("female", ["blonde short", "purple eye shadow", "purple lipstick"]),
  //5419"]),

  new Trait("male", ["cap", "horned rim glasses", "luxurious beard"]),
  //5420"]),

  new Trait("male", ["pipe", "purple hair"]),
  //5421"]),

  new Trait("male", ["big shades", "cap"]),
  //5422"]),

  new Trait("male", ["cap forward", "frown", "handlebars"]),
  //5423"]),

  new Trait("male", ["goat", "purple hair", "small shades"]),
  //5424"]),

  new Trait("male", ["chinstrap", "cowboy hat"]),
  //5425"]),

  new Trait("female", ["blue eye shadow"]),
  //5426"]),

  new Trait("male", ["cap forward", "cigarette", "earring"]),
  //5427"]),

  new Trait("male", ["eye mask", "mohawk thin", "mole"]),
  //5428"]),

  new Trait("female", ["cigarette", "earring", "nerd glasses", "wild blonde"]),
  //5429"]),

  new Trait("male", ["earring", "luxurious beard", "spots"]),
  //5430"]),

  new Trait("female", [
    "purple eye shadow",
    "purple lipstick",
    "straight hair blonde",
  ]),
  //5431"]),

  new Trait("female", ["hot lipstick", "mohawk"]),
  //5432"]),

  new Trait("male", ["clown hair green", "frown", "muttonchops"]),
  //5433"]),

  new Trait("male", ["goat", "mohawk"]),
  //5434"]),

  new Trait("male", ["chinstrap", "classic shades", "stringy hair"]),
  //5435"]),

  new Trait("male", ["crazy hair", "muttonchops", "nerd glasses"]),
  //5436"]),

  new Trait("male", ["earring", "nerd glasses", "stringy hair"]),
  //5437"]),

  new Trait("female", ["cigarette", "straight hair"]),
  //5438"]),

  new Trait("male", ["earring", "front beard dark", "mohawk thin"]),
  //5439"]),

  new Trait("male", ["luxurious beard", "police cap"]),
  //5440"]),

  new Trait("female", [
    "bandana",
    "black lipstick",
    "clown eyes blue",
    "earring",
  ]),
  //5441"]),

  new Trait("male", ["cap", "clown eyes blue"]),
  //5442"]),

  new Trait("male", ["front beard", "mole", "wild hair"]),
  //5443"]),

  new Trait("male", ["front beard", "top hat"]),
  //5444"]),

  new Trait("male", ["cap", "earring", "eye patch"]),
  //5445"]),

  new Trait("female", [
    "black lipstick",
    "earring",
    "eye patch",
    "half shaved",
  ]),
  //5446"]),

  new Trait("male", ["cap forward", "earring", "goat", "small shades"]),
  //5447"]),

  new Trait("male", ["shadow beard", "wild hair"]),
  //5448"]),

  new Trait("female", ["black lipstick", "clown eyes blue", "frumpy hair"]),
  //5449"]),

  new Trait("male", [
    "cigarette",
    "clown eyes blue",
    "front beard dark",
    "stringy hair",
  ]),
  //5450"]),

  new Trait("male", ["chinstrap", "earring", "mohawk thin"]),
  //5451"]),

  new Trait("male", ["big shades", "cigarette", "mohawk dark"]),
  //5452"]),

  new Trait("male", ["big shades", "earring", "shadow beard", "spots"]),
  //5453"]),

  new Trait("male", ["cowboy hat", "gold chain", "nerd glasses"]),
  //5454"]),

  new Trait("male", ["peak spike", "pipe"]),
  //5455"]),

  new Trait("male", ["eye patch", "frown", "headband", "vape"]),
  //5456"]),

  new Trait("female", [
    "black lipstick",
    "earring",
    "green eye shadow",
    "straight hair blonde",
  ]),
  //5457"]),

  new Trait("male", ["do-rag", "earring", "mole", "nerd glasses"]),
  //5458"]),

  new Trait("male", ["big shades", "earring", "mohawk thin", "muttonchops"]),
  //5459"]),

  new Trait("male", ["do-rag", "earring", "eye patch", "frown"]),
  //5460"]),

  new Trait("female", ["clown eyes blue", "stringy hair"]),
  //5461"]),

  new Trait("female", ["earring", "hot lipstick", "stringy hair"]),
  //5462"]),

  new Trait("male", ["front beard dark"]),
  //5463"]),

  new Trait("male", [
    "earring",
    "regular shades",
    "shaved head",
    "silver chain",
  ]),
  //5464"]),

  new Trait("male", ["chinstrap", "frown", "regular shades", "shaved head"]),
  //5465"]),

  new Trait("male", ["smile"]),
  //5466"]),

  new Trait("female", ["earring", "hot lipstick", "stringy hair"]),
  //5467"]),

  new Trait("female", ["clown eyes blue", "purple lipstick", "wild hair"]),
  //5468"]),

  new Trait("female", [
    "black lipstick",
    "blue eye shadow",
    "earring",
    "stringy hair",
  ]),
  //5469"]),

  new Trait("male", ["cigarette", "wild hair"]),
  //5470"]),

  new Trait("female", ["3d glasses", "earring", "wild hair"]),
  //5471"]),

  new Trait("male", ["mohawk thin", "nerd glasses"]),
  //5472"]),

  new Trait("male", ["hoodie", "pipe", "shadow beard"]),
  //5473"]),

  new Trait("female", ["blonde short", "blue eye shadow"]),
  //5474"]),

  new Trait("male", ["earring", "peak spike", "vr"]),
  //5475"]),

  new Trait("male", ["big beard", "messy hair"]),
  //5476"]),

  new Trait("male", ["chinstrap", "earring", "mohawk thin", "rosy cheeks"]),
  //5477"]),

  new Trait("male", ["normal beard", "top hat"]),
  //5478"]),

  new Trait("male", ["cigarette", "earring", "police cap"]),
  //5479"]),

  new Trait("male", ["purple hair", "small shades"]),
  //5480"]),

  new Trait("female", ["clown eyes blue", "mohawk", "purple lipstick"]),
  //5481"]),

  new Trait("male", ["handlebars", "knitted cap"]),
  //5482"]),

  new Trait("male", ["chinstrap", "wild hair"]),
  //5483"]),

  new Trait("male", ["big shades", "cap forward", "mustache"]),
  //5484"]),

  new Trait("female", ["clown eyes green", "mohawk dark", "purple lipstick"]),
  //5485"]),

  new Trait("male", ["earring", "eye patch", "hoodie", "muttonchops", "vape"]),
  //5486"]),

  new Trait("male", ["3d glasses", "police cap"]),
  //5487"]),

  new Trait("male", ["eye patch", "mustache", "police cap"]),
  //5488"]),

  new Trait("zombie", ["fedora"]),
  //5489"]),

  new Trait("female", ["half shaved", "hot lipstick", "mole", "vr"]),
  //5490"]),

  new Trait("male", ["police cap", "smile"]),
  //5491"]),

  new Trait("female", ["frumpy hair", "rosy cheeks"]),
  //5492"]),

  new Trait("female", [
    "classic shades",
    "pigtails",
    "pipe",
    "purple lipstick",
  ]),
  //5493"]),

  new Trait("male", ["earring", "normal beard black", "stringy hair"]),
  //5494"]),

  new Trait("male", ["chinstrap", "fedora", "mole"]),
  //5495"]),

  new Trait("female", ["big shades", "tassle hat"]),
  //5496"]),

  new Trait("female", [
    "cigarette",
    "earring",
    "purple lipstick",
    "straight hair blonde",
  ]),
  //5497"]),

  new Trait("male", ["do-rag", "goat", "medical mask"]),
  //5498"]),

  new Trait("female", ["earring", "hot lipstick", "mohawk thin", "mole"]),
  //5499"]),

  new Trait("male", [
    "big shades",
    "chinstrap",
    "medical mask",
    "stringy hair",
  ]),
  //5500"]),

  new Trait("male", ["horned rim glasses", "mohawk dark"]),
  //5501"]),

  new Trait("female", ["black lipstick", "stringy hair"]),
  //5502"]),

  new Trait("female", ["blonde short", "eye mask"]),
  //5503"]),

  new Trait("male", ["3d glasses", "do-rag", "earring"]),
  //5504"]),

  new Trait("male", ["crazy hair", "mole", "small shades"]),
  //5505"]),

  new Trait("male", ["buck teeth", "normal beard", "peak spike"]),
  //5506"]),

  new Trait("female", ["big shades", "messy hair"]),
  //5507"]),

  new Trait("female", ["blonde short", "earring", "pipe"]),
  //5508"]),

  new Trait("male", ["buck teeth", "cigarette", "earring", "shaved head"]),
  //5509"]),

  new Trait("male", [
    "earring",
    "eye mask",
    "front beard dark",
    "stringy hair",
  ]),
  //5510"]),

  new Trait("male", ["cap", "chinstrap", "silver chain"]),
  //5511"]),

  new Trait("male", ["earring", "mustache", "nerd glasses", "vampire hair"]),
  //5512"]),

  new Trait("female", [
    "cigarette",
    "earring",
    "pink with hat",
    "purple lipstick",
  ]),
  //5513"]),

  new Trait("male", ["cap", "shadow beard"]),
  //5514"]),

  new Trait("female", ["spots", "straight hair blonde"]),
  //5515"]),

  new Trait("female", ["blue eye shadow", "knitted cap"]),
  //5516"]),

  new Trait("male", ["mustache", "regular shades"]),
  //5517"]),

  new Trait("female", ["messy hair", "purple eye shadow"]),
  //5518"]),

  new Trait("male", ["big shades", "knitted cap", "normal beard"]),
  //5519"]),

  new Trait("male", ["eye patch", "messy hair"]),
  //5520"]),

  new Trait("male", ["bandana", "eye patch"]),
  //5521"]),

  new Trait("female", ["bandana", "blue eye shadow", "earring"]),
  //5522"]),

  new Trait("male", ["big shades", "cap"]),
  //5523"]),

  new Trait("female", ["black lipstick", "dark hair", "welding goggles"]),
  //5524"]),

  new Trait("female", ["spots"]),
  //5525"]),

  new Trait("male", ["cap forward", "cigarette", "gold chain", "mole"]),
  //5526"]),

  new Trait("male", ["earring", "frumpy hair", "mustache", "pipe"]),
  //5527"]),

  new Trait("male", ["cap forward", "spots"]),
  //5528"]),

  new Trait("male", ["earring", "mohawk dark", "shadow beard", "smile"]),
  //5529"]),

  new Trait("male", ["front beard", "mohawk thin", "silver chain"]),
  //5530"]),

  new Trait("female", ["black lipstick", "pigtails"]),
  //5531"]),

  new Trait("female", ["clown eyes green", "hot lipstick", "mohawk thin"]),
  //5532"]),

  new Trait("male", ["3d glasses", "front beard", "police cap"]),
  //5533"]),

  new Trait("female", ["3d glasses", "wild blonde"]),
  //5534"]),

  new Trait("female", ["blue eye shadow", "hot lipstick", "stringy hair"]),
  //5535"]),

  new Trait("male", ["mohawk", "mole", "shadow beard"]),
  //5536"]),

  new Trait("male", ["bandana", "clown eyes green", "normal beard black"]),
  //5537"]),

  new Trait("male", ["earring", "front beard", "nerd glasses", "police cap"]),
  //5538"]),

  new Trait("male", ["big shades", "earring", "headband"]),
  //5539"]),

  new Trait("female", ["bandana", "horned rim glasses"]),
  //5540"]),

  new Trait("female", ["clown eyes green", "hot lipstick", "orange side"]),
  //5541"]),

  new Trait("male", ["big shades", "handlebars", "messy hair"]),
  //5542"]),

  new Trait("male", ["cigarette", "shadow beard", "wild hair"]),
  //5543"]),

  new Trait("male", ["eye mask", "mohawk", "mustache"]),
  //5544"]),

  new Trait("female", [
    "3d glasses",
    "earring",
    "hot lipstick",
    "vape",
    "wild hair",
  ]),
  //5545"]),

  new Trait("male", ["vr", "wild hair"]),
  //5546"]),

  new Trait("male", ["crazy hair", "earring", "front beard dark", "mole"]),
  //5547"]),

  new Trait("male", ["earring", "front beard dark", "frown", "wild hair"]),
  //5548"]),

  new Trait("male", ["earring", "front beard dark", "headband"]),
  //5549"]),

  new Trait("female", ["choker", "earring", "hot lipstick", "messy hair"]),
  //5550"]),

  new Trait("female", ["vape", "wild blonde"]),
  //5551"]),

  new Trait("female", ["hot lipstick", "knitted cap", "mole"]),
  //5552"]),

  new Trait("female", ["cigarette", "horned rim glasses", "knitted cap"]),
  //5553"]),

  new Trait("female", ["eye mask", "pink with hat", "purple lipstick"]),
  //5554"]),

  new Trait("male", ["cigarette", "messy hair", "vr"]),
  //5555"]),

  new Trait("male", ["clown eyes green", "police cap"]),
  //5556"]),

  new Trait("male", ["normal beard", "shaved head"]),
  //5557"]),

  new Trait("male", ["cap", "earring", "mustache"]),
  //5558"]),

  new Trait("male", ["eye patch", "headband", "mole", "normal beard"]),
  //5559"]),

  new Trait("female", ["black lipstick", "earring", "knitted cap"]),
  //5560"]),

  new Trait("male", ["cap forward", "classic shades"]),
  //5561"]),

  new Trait("female", ["dark hair", "purple lipstick", "spots"]),
  //5562"]),

  new Trait("female", ["earring", "hot lipstick", "vape", "wild blonde"]),
  //5563"]),

  new Trait("female", ["cap", "nerd glasses", "pipe"]),
  //5564"]),

  new Trait("female", ["black lipstick", "green eye shadow", "knitted cap"]),
  //5565"]),

  new Trait("female", ["black lipstick", "classic shades", "straight hair"]),
  //5566"]),

  new Trait("female", ["messy hair", "purple eye shadow"]),
  //5567"]),

  new Trait("male", ["do-rag", "pipe"]),
  //5568"]),

  new Trait("male", ["3d glasses", "cap"]),
  //5569"]),

  new Trait("male", ["big shades", "frumpy hair", "mustache"]),
  //5570"]),

  new Trait("male", ["big shades", "messy hair", "vape"]),
  //5571"]),

  new Trait("female", [
    "clown eyes blue",
    "earring",
    "medical mask",
    "pigtails",
  ]),
  //5572"]),

  new Trait("zombie", ["3d glasses", "luxurious beard", "mohawk"]),
  //5573"]),

  new Trait("female", ["blonde bob", "eye patch"]),
  //5574"]),

  new Trait("male", ["do-rag", "front beard"]),
  //5575"]),

  new Trait("female", ["blonde short", "cigarette", "earring"]),
  //5576"]),

  new Trait("ape", ["cowboy hat"]),
  //5577"]),

  new Trait("female", ["vr"]),
  //5578"]),

  new Trait("male", ["messy hair", "mustache"]),
  //5579"]),

  new Trait("male", ["earring", "mohawk", "regular shades"]),
  //5580"]),

  new Trait("male", ["bandana", "mustache"]),
  //5581"]),

  new Trait("male", ["crazy hair", "muttonchops"]),
  //5582"]),

  new Trait("male", ["big beard", "eye mask", "top hat"]),
  //5583"]),

  new Trait("male", ["earring", "eye patch", "messy hair"]),
  //5584"]),

  new Trait("male", ["nerd glasses", "peak spike", "shadow beard"]),
  //5585"]),

  new Trait("male", ["classic shades", "gold chain", "headband"]),
  //5586"]),

  new Trait("female", ["mohawk", "pipe", "purple eye shadow"]),
  //5587"]),

  new Trait("male", ["3d glasses", "knitted cap", "mole"]),
  //5588"]),

  new Trait("male", ["big shades", "front beard dark", "stringy hair"]),
  //5589"]),

  new Trait("female", ["clown eyes green", "headband"]),
  //5590"]),

  new Trait("female", ["cigarette", "frumpy hair", "purple lipstick"]),
  //5591"]),

  new Trait("female", ["black lipstick", "cigarette", "red mohawk"]),
  //5592"]),

  new Trait("male", ["horned rim glasses", "wild hair"]),
  //5593"]),

  new Trait("female", ["green eye shadow", "messy hair"]),
  //5594"]),

  new Trait("male", ["shadow beard", "top hat"]),
  //5595"]),

  new Trait("male", [
    "classic shades",
    "crazy hair",
    "earring",
    "front beard dark",
  ]),
  //5596"]),

  new Trait("male", ["hoodie", "mole", "muttonchops"]),
  //5597"]),

  new Trait("male", ["cowboy hat", "front beard", "small shades"]),
  //5598"]),

  new Trait("male", ["hoodie", "mole"]),
  //5599"]),

  new Trait("male", ["frumpy hair", "gold chain", "small shades"]),
  //5600"]),

  new Trait("female", ["classic shades", "orange side"]),
  //5601"]),

  new Trait("male", ["cigarette", "front beard", "messy hair"]),
  //5602"]),

  new Trait("male", ["do-rag", "front beard dark"]),
  //5603"]),

  new Trait("male", ["frown", "knitted cap", "vape"]),
  //5604"]),

  new Trait("female", ["blonde bob", "nerd glasses"]),
  //5605"]),

  new Trait("male", ["earring", "goat", "mohawk", "nerd glasses"]),
  //5606"]),

  new Trait("female", ["clown eyes blue", "pigtails"]),
  //5607"]),

  new Trait("female", ["3d glasses", "pigtails"]),
  //5608"]),

  new Trait("female", [
    "bandana",
    "clown eyes blue",
    "earring",
    "hot lipstick",
  ]),
  //5609"]),

  new Trait("female", ["horned rim glasses", "tiara"]),
  //5610"]),

  new Trait("female", ["horned rim glasses", "mohawk dark"]),
  //5611"]),

  new Trait("female", [
    "black lipstick",
    "classic shades",
    "dark hair",
    "earring",
  ]),
  //5612"]),

  new Trait("male", ["messy hair", "normal beard black"]),
  //5613"]),

  new Trait("male", ["earring", "frown", "mohawk thin"]),
  //5614"]),

  new Trait("female", ["hot lipstick", "orange side", "purple eye shadow"]),
  //5615"]),

  new Trait("female", ["earring", "hot lipstick", "knitted cap"]),
  //5616"]),

  new Trait("male", ["3d glasses", "knitted cap", "luxurious beard"]),
  //5617"]),

  new Trait("male", ["messy hair", "vr"]),
  //5618"]),

  new Trait("female", ["earring", "hot lipstick", "tassle hat"]),
  //5619"]),

  new Trait("female", ["bandana", "blue eye shadow", "hot lipstick"]),
  //5620"]),

  new Trait("female", [
    "classic shades",
    "purple lipstick",
    "straight hair blonde",
  ]),
  //5621"]),

  new Trait("female", [
    "blonde bob",
    "clown eyes green",
    "earring",
    "gold chain",
    "hot lipstick",
    "pipe",
  ]),
  //5622"]),

  new Trait("female", ["blue eye shadow", "orange side", "purple lipstick"]),
  //5623"]),

  new Trait("male", ["earring", "eye patch", "peak spike"]),
  //5624"]),

  new Trait("male", ["clown nose", "do-rag", "earring", "mustache"]),
  //5625"]),

  new Trait("male", ["classic shades", "normal beard black", "wild hair"]),
  //5626"]),

  new Trait("male", ["3d glasses", "wild hair"]),
  //5627"]),

  new Trait("female", [
    "clown eyes green",
    "earring",
    "hot lipstick",
    "messy hair",
  ]),
  //5628"]),

  new Trait("female", [
    "clown eyes green",
    "dark hair",
    "earring",
    "purple lipstick",
  ]),
  //5629"]),

  new Trait("male", ["earring", "messy hair"]),
  //5630"]),

  new Trait("male", ["cap forward", "clown nose"]),
  //5631"]),

  new Trait("male", ["handlebars", "shaved head"]),
  //5632"]),

  new Trait("male", ["big shades", "shadow beard", "top hat"]),
  //5633"]),

  new Trait("male", ["earring", "messy hair", "shadow beard"]),
  //5634"]),

  new Trait("male", ["mohawk thin", "nerd glasses", "silver chain"]),
  //5635"]),

  new Trait("female", ["messy hair", "regular shades"]),
  //5636"]),

  new Trait("female", ["clown eyes green", "earring", "mohawk thin"]),
  //5637"]),

  new Trait("female", ["half shaved", "purple lipstick"]),
  //5638"]),

  new Trait("female", ["gold chain", "wild hair"]),
  //5639"]),

  new Trait("female", ["clown hair green", "purple lipstick"]),
  //5640"]),

  new Trait("male", ["earring", "handlebars", "mohawk thin"]),
  //5641"]),

  new Trait("female", [
    "blonde short",
    "earring",
    "nerd glasses",
    "silver chain",
  ]),
  //5642"]),

  new Trait("male", ["shadow beard", "smile", "stringy hair"]),
  //5643"]),

  new Trait("female", ["messy hair", "vr"]),
  //5644"]),

  new Trait("female", ["gold chain", "pilot helmet"]),
  //5645"]),

  new Trait("female", ["earring", "eye patch", "pigtails"]),
  //5646"]),

  new Trait("male", ["bandana", "earring", "goat", "nerd glasses", "pipe"]),
  //5647"]),

  new Trait("female", ["eye patch", "mohawk dark", "purple lipstick"]),
  //5648"]),

  new Trait("female", ["black lipstick", "blonde short", "gold chain"]),
  //5649"]),

  new Trait("male", ["normal beard", "regular shades", "stringy hair"]),
  //5650"]),

  new Trait("male", ["pipe", "purple hair"]),
  //5651"]),

  new Trait("female", ["clown eyes green", "tassle hat"]),
  //5652"]),

  new Trait("male", [
    "clown eyes green",
    "earring",
    "front beard",
    "mohawk thin",
  ]),
  //5653"]),

  new Trait("male", ["bandana", "earring", "nerd glasses"]),
  //5654"]),

  new Trait("male", ["cigarette", "earring", "smile", "stringy hair"]),
  //5655"]),

  new Trait("male", ["clown hair green", "medical mask", "silver chain"]),
  //5656"]),

  new Trait("male", ["crazy hair", "frown"]),
  //5657"]),

  new Trait("male", ["goat", "knitted cap", "small shades"]),
  //5658"]),

  new Trait("male", ["big shades", "fedora", "mole", "smile"]),
  //5659"]),

  new Trait("female", ["eye patch", "stringy hair"]),
  //5660"]),

  new Trait("male", ["cap forward", "chinstrap", "earring"]),
  //5661"]),

  new Trait("male", ["gold chain", "horned rim glasses", "shaved head"]),
  //5662"]),

  new Trait("male", ["horned rim glasses", "mohawk dark", "shadow beard"]),
  //5663"]),

  new Trait("male", ["cap forward", "goat"]),
  //5664"]),

  new Trait("male", ["big shades", "shadow beard", "top hat", "vape"]),
  //5665"]),

  new Trait("female", ["black lipstick", "clown eyes green", "tassle hat"]),
  //5666"]),

  new Trait("female", ["classic shades", "hot lipstick", "wild hair"]),
  //5667"]),

  new Trait("female", ["choker", "cigarette", "wild white hair"]),
  //5668"]),

  new Trait("female", ["clown eyes green", "stringy hair"]),
  //5669"]),

  new Trait("female", ["orange side", "welding goggles"]),
  //5670"]),

  new Trait("male", ["crazy hair", "goat"]),
  //5671"]),

  new Trait("female", ["mohawk", "mole", "purple lipstick"]),
  //5672"]),

  new Trait("female", ["regular shades", "wild blonde"]),
  //5673"]),

  new Trait("male", ["clown nose", "front beard dark", "stringy hair"]),
  //5674"]),

  new Trait("female", ["gold chain", "green eye shadow", "mole", "red mohawk"]),
  //5675"]),

  new Trait("male", ["big shades", "cap", "mole"]),
  //5676"]),

  new Trait("female", ["cigarette", "earring", "wild hair"]),
  //5677"]),

  new Trait("male", ["cap", "classic shades", "normal beard"]),
  //5678"]),

  new Trait("female", ["black lipstick", "pigtails", "regular shades"]),
  //5679"]),

  new Trait("male", ["crazy hair", "handlebars", "medical mask"]),
  //5680"]),

  new Trait("female", [
    "3d glasses",
    "black lipstick",
    "earring",
    "red mohawk",
  ]),
  //5681"]),

  new Trait("female", ["black lipstick", "cigarette", "half shaved", "mole"]),
  //5682"]),

  new Trait("male", ["frown", "frumpy hair"]),
  //5683"]),

  new Trait("female", ["choker", "pilot helmet"]),
  //5684"]),

  new Trait("female", ["cap", "purple lipstick", "vr"]),
  //5685"]),

  new Trait("male", ["handlebars", "purple hair"]),
  //5686"]),

  new Trait("male", ["front beard dark", "messy hair"]),
  //5687"]),

  new Trait("male", ["cap forward", "handlebars"]),
  //5688"]),

  new Trait("female", ["nerd glasses", "red mohawk"]),
  //5689"]),

  new Trait("male", ["3d glasses", "beanie", "muttonchops"]),
  //5690"]),

  new Trait("female", [
    "clown hair green",
    "green eye shadow",
    "purple lipstick",
  ]),
  //5691"]),

  new Trait("female", [
    "earring",
    "hot lipstick",
    "purple eye shadow",
    "tiara",
  ]),
  //5692"]),

  new Trait("female", ["classic shades", "straight hair", "vape"]),
  //5693"]),

  new Trait("male", ["mohawk", "shadow beard", "small shades"]),
  //5694"]),

  new Trait("male", [
    "big shades",
    "earring",
    "mohawk dark",
    "normal beard black",
  ]),
  //5695"]),

  new Trait("male", ["eye mask", "mustache", "police cap"]),
  //5696"]),

  new Trait("female", ["black lipstick", "crazy hair", "nerd glasses"]),
  //5697"]),

  new Trait("female", ["earring", "headband", "purple eye shadow"]),
  //5698"]),

  new Trait("male", [
    "3d glasses",
    "cigarette",
    "normal beard",
    "vampire hair",
  ]),
  //5699"]),

  new Trait("male", ["knitted cap", "normal beard", "regular shades"]),
  //5700"]),

  new Trait("male", ["earring", "mohawk thin", "normal beard"]),
  //5701"]),

  new Trait("female", ["black lipstick", "dark hair", "mole"]),
  //5702"]),

  new Trait("female", ["blue eye shadow", "hot lipstick", "mohawk thin"]),
  //5703"]),

  new Trait("female", ["nerd glasses", "red mohawk"]),
  //5704"]),

  new Trait("male", ["cap", "classic shades"]),
  //5705"]),

  new Trait("male", ["regular shades", "wild hair"]),
  //5706"]),

  new Trait("male", ["big shades", "earring", "messy hair", "shadow beard"]),
  //5707"]),

  new Trait("female", ["clown hair green", "hot lipstick"]),
  //5708"]),

  new Trait("male", ["3d glasses", "muttonchops", "peak spike"]),
  //5709"]),

  new Trait("male", ["classic shades", "fedora", "luxurious beard"]),
  //5710"]),

  new Trait("male", [
    "clown eyes blue",
    "earring",
    "normal beard",
    "peak spike",
  ]),
  //5711"]),

  new Trait("female", ["blonde bob", "gold chain"]),
  //5712"]),

  new Trait("female", ["dark hair", "hot lipstick"]),
  //5713"]),

  new Trait("male", ["cowboy hat", "front beard", "vr"]),
  //5714"]),

  new Trait("male", ["police cap", "vr"]),
  //5715"]),

  new Trait("male", ["earring", "frown", "medical mask", "messy hair"]),
  //5716"]),

  new Trait("female", ["bandana", "vape"]),
  //5717"]),

  new Trait("male", ["clown eyes blue", "mohawk", "mustache"]),
  //5718"]),

  new Trait("female", ["cigarette", "dark hair", "welding goggles"]),
  //5719"]),

  new Trait("male", ["bandana", "clown nose"]),
  //5720"]),

  new Trait("female", ["hot lipstick", "pigtails", "spots", "vape"]),
  //5721"]),

  new Trait("male", ["bandana", "classic shades", "shadow beard"]),
  //5722"]),

  new Trait("female", ["blonde bob", "earring", "hot lipstick", "mole"]),
  //5723"]),

  new Trait("female", ["eye patch", "wild hair"]),
  //5724"]),

  new Trait("male", ["earring", "eye patch", "hoodie", "normal beard black"]),
  //5725"]),

  new Trait("male", ["clown hair green", "earring", "mustache"]),
  //5726"]),

  new Trait("male", ["buck teeth", "front beard", "pipe"]),
  //5727"]),

  new Trait("female", ["blue eye shadow", "frumpy hair", "rosy cheeks"]),
  //5728"]),

  new Trait("male", ["earring", "eye patch", "front beard", "mohawk"]),
  //5729"]),

  new Trait("male", ["mustache", "police cap"]),
  //5730"]),

  new Trait("female", ["black lipstick", "mole", "red mohawk"]),
  //5731"]),

  new Trait("male", [
    "clown eyes blue",
    "normal beard black",
    "smile",
    "stringy hair",
  ]),
  //5732"]),

  new Trait("male", ["eye patch", "frown", "messy hair"]),
  //5733"]),

  new Trait("female", ["green eye shadow", "mole", "tiara"]),
  //5734"]),

  new Trait("male", ["earring", "hoodie", "silver chain"]),
  //5735"]),

  new Trait("male", ["cigarette", "peak spike", "small shades", "smile"]),
  //5736"]),

  new Trait("male", ["earring", "horned rim glasses", "shaved head"]),
  //5737"]),

  new Trait("male", ["earring", "luxurious beard", "peak spike"]),
  //5738"]),

  new Trait("female", ["earring", "knitted cap", "vape"]),
  //5739"]),

  new Trait("male", ["3d glasses", "goat", "shaved head"]),
  //5740"]),

  new Trait("male", ["goat", "horned rim glasses", "mohawk"]),
  //5741"]),

  new Trait("zombie", ["mohawk dark"]),
  //5742"]),

  new Trait("female", ["earring", "tassle hat"]),
  //5743"]),

  new Trait("female", ["big shades", "frumpy hair"]),
  //5744"]),

  new Trait("female", ["blonde short", "spots"]),
  //5745"]),

  new Trait("male", [
    "clown hair green",
    "earring",
    "mole",
    "shadow beard",
    "small shades",
  ]),
  //5746"]),

  new Trait("male", ["classic shades", "frumpy hair"]),
  //5747"]),

  new Trait("female", [
    "blue eye shadow",
    "cigarette",
    "mole",
    "wild white hair",
  ]),
  //5748"]),

  new Trait("male", ["front beard", "knitted cap"]),
  //5749"]),

  new Trait("male", ["3d glasses", "messy hair"]),
  //5750"]),

  new Trait("female", ["hot lipstick", "knitted cap"]),
  //5751"]),

  new Trait("male", ["frumpy hair", "mole"]),
  //5752"]),

  new Trait("male", ["knitted cap", "small shades"]),
  //5753"]),

  new Trait("male", [
    "do-rag",
    "front beard dark",
    "gold chain",
    "regular shades",
  ]),
  //5754"]),

  new Trait("male", ["classic shades", "earring", "shaved head"]),
  //5755"]),

  new Trait("male", ["mohawk dark", "normal beard black"]),
  //5756"]),

  new Trait("female", ["clown eyes green", "mohawk", "vape"]),
  //5757"]),

  new Trait("female", ["big shades", "crazy hair", "purple lipstick"]),
  //5758"]),

  new Trait("female", ["cigarette", "crazy hair", "nerd glasses"]),
  //5759"]),

  new Trait("male", ["clown nose", "mohawk thin"]),
  //5760"]),

  new Trait("zombie", ["bandana", "horned rim glasses"]),
  //5761"]),

  new Trait("male", ["headband", "regular shades"]),
  //5762"]),

  new Trait("male", [
    "classic shades",
    "earring",
    "luxurious beard",
    "wild hair",
  ]),
  //5763"]),

  new Trait("male", ["bandana", "clown eyes green"]),
  //5764"]),

  new Trait("female", [
    "cigarette",
    "classic shades",
    "hot lipstick",
    "straight hair dark",
  ]),
  //5765"]),

  new Trait("female", ["black lipstick", "green eye shadow", "mohawk"]),
  //5766"]),

  new Trait("male", ["luxurious beard", "mole", "purple hair"]),
  //5767"]),

  new Trait("male", ["hoodie", "mole"]),
  //5768"]),

  new Trait("female", ["black lipstick", "dark hair", "horned rim glasses"]),
  //5769"]),

  new Trait("female", ["cigarette", "hot lipstick", "knitted cap"]),
  //5770"]),

  new Trait("female", ["dark hair", "eye patch"]),
  //5771"]),

  new Trait("female", ["3d glasses", "cap"]),
  //5772"]),

  new Trait("male", ["mohawk thin", "vape"]),
  //5773"]),

  new Trait("male", ["cap", "eye patch", "front beard dark", "smile"]),
  //5774"]),

  new Trait("female", ["clown eyes green", "clown hair green"]),
  //5775"]),

  new Trait("male", ["horned rim glasses", "peak spike"]),
  //5776"]),

  new Trait("male", ["earring", "mohawk dark", "regular shades"]),
  //5777"]),

  new Trait("female", ["blonde short", "earring"]),
  //5778"]),

  new Trait("female", ["black lipstick", "crazy hair", "mole"]),
  //5779"]),

  new Trait("male", ["luxurious beard"]),
  //5780"]),

  new Trait("female", ["regular shades", "tassle hat"]),
  //5781"]),

  new Trait("male", ["earring", "normal beard", "vampire hair", "vr"]),
  //5782"]),

  new Trait("female", ["3d glasses", "red mohawk"]),
  //5783"]),

  new Trait("male", ["3d glasses", "mohawk"]),
  //5784"]),

  new Trait("female", ["blonde short", "purple lipstick", "welding goggles"]),
  //5785"]),

  new Trait("male", ["cowboy hat", "eye patch"]),
  //5786"]),

  new Trait("female", [
    "black lipstick",
    "choker",
    "purple eye shadow",
    "tiara",
  ]),
  //5787"]),

  new Trait("female", ["dark hair", "vape"]),
  //5788"]),

  new Trait("male", ["front beard", "peak spike"]),
  //5789"]),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "earring",
    "green eye shadow",
  ]),
  //5790"]),

  new Trait("male", ["earring", "normal beard black", "wild hair"]),
  //5791"]),

  new Trait("male", ["messy hair", "silver chain"]),
  //5792"]),

  new Trait("male", ["goat", "mole", "purple hair"]),
  //5793"]),

  new Trait("male", ["cigarette", "classic shades", "fedora"]),
  //5794"]),

  new Trait("ape", ["police cap"]),
  //5795"]),

  new Trait("female", ["cigarette", "messy hair"]),
  //5796"]),

  new Trait("male", [
    "cap forward",
    "earring",
    "nerd glasses",
    "normal beard black",
  ]),
  //5797"]),

  new Trait("female", ["green eye shadow", "orange side"]),
  //5798"]),

  new Trait("male", ["earring", "mohawk dark", "nerd glasses"]),
  //5799"]),

  new Trait("male", ["big beard", "earring", "wild hair"]),
  //5800"]),

  new Trait("female", ["black lipstick", "purple eye shadow", "wild hair"]),
  //5801"]),

  new Trait("male", ["frumpy hair", "mole", "shadow beard"]),
  //5802"]),

  new Trait("male", ["do-rag", "goat"]),
  //5803"]),

  new Trait("female", [
    "earring",
    "knitted cap",
    "purple lipstick",
    "rosy cheeks",
  ]),
  //5804"]),

  new Trait("male", ["frown", "mohawk thin", "shadow beard"]),
  //5805"]),

  new Trait("male", ["horned rim glasses", "police cap"]),
  //5806"]),

  new Trait("male", ["mohawk thin", "mole", "regular shades"]),
  //5807"]),

  new Trait("female", ["blonde short", "cigarette", "mole"]),
  //5808"]),

  new Trait("female", ["spots", "tassle hat"]),
  //5809"]),

  new Trait("male", ["classic shades", "stringy hair"]),
  //5810"]),

  new Trait("female", ["cigarette", "clown hair green", "earring"]),
  //5811"]),

  new Trait("male", ["front beard dark", "headband"]),
  //5812"]),

  new Trait("female", ["clown eyes green", "straight hair"]),
  //5813"]),

  new Trait("male", ["earring", "messy hair", "silver chain"]),
  //5814"]),

  new Trait("female", ["clown eyes blue", "wild hair"]),
  //5815"]),

  new Trait("male", ["cap forward", "cigarette", "goat"]),
  //5816"]),

  new Trait("male", ["handlebars", "vampire hair", "vape"]),
  //5817"]),

  new Trait("male", ["3d glasses", "hoodie", "medical mask"]),
  //5818"]),

  new Trait("female", ["black lipstick", "pigtails"]),
  //5819"]),

  new Trait("male", ["classic shades", "messy hair"]),
  //5820"]),

  new Trait("female", ["clown eyes blue", "earring", "stringy hair"]),
  //5821"]),

  new Trait("alien", ["bandana"]),
  //5822"]),

  new Trait("female", ["big shades", "crazy hair", "vape"]),
  //5823"]),

  new Trait("female", ["3d glasses", "earring", "headband"]),
  //5824"]),

  new Trait("female", [
    "earring",
    "eye patch",
    "purple lipstick",
    "straight hair blonde",
  ]),
  //5825"]),

  new Trait("female", ["clown eyes blue", "knitted cap", "purple lipstick"]),
  //5826"]),

  new Trait("male", ["hoodie", "normal beard", "regular shades"]),
  //5827"]),

  new Trait("male", ["mohawk dark", "mustache", "small shades"]),
  //5828"]),

  new Trait("female", ["bandana", "black lipstick"]),
  //5829"]),

  new Trait("male", ["big shades", "front beard dark", "mohawk thin"]),
  //5830"]),

  new Trait("male", ["chinstrap", "messy hair"]),
  //5831"]),

  new Trait("female", ["eye patch", "straight hair dark"]),
  //5832"]),

  new Trait("female", ["green eye shadow", "hot lipstick", "mohawk dark"]),
  //5833"]),

  new Trait("female", [
    "black lipstick",
    "green eye shadow",
    "mohawk thin",
    "vape",
  ]),
  //5834"]),

  new Trait("male", ["chinstrap", "classic shades", "purple hair"]),
  //5835"]),

  new Trait("female", ["cigarette", "dark hair", "eye patch", "hot lipstick"]),
  //5836"]),

  new Trait("male", ["knitted cap", "vr"]),
  //5837"]),

  new Trait("female", ["medical mask", "purple lipstick", "wild white hair"]),
  //5838"]),

  new Trait("male", ["big beard", "earring", "mohawk"]),
  //5839"]),

  new Trait("male", ["horned rim glasses", "normal beard", "peak spike"]),
  //5840"]),

  new Trait("male", ["earring", "shadow beard", "silver chain", "top hat"]),
  //5841"]),

  new Trait("male", ["mohawk thin", "muttonchops", "small shades"]),
  //5842"]),

  new Trait("female", ["frumpy hair", "green eye shadow"]),
  //5843"]),

  new Trait("female", ["purple eye shadow", "straight hair dark"]),
  //5844"]),

  new Trait("male", ["big beard", "cap forward"]),
  //5845"]),

  new Trait("male", ["do-rag", "goat", "mole", "small shades"]),
  //5846"]),

  new Trait("female", ["black lipstick", "mole", "red mohawk"]),
  //5847"]),

  new Trait("female", ["black lipstick", "blonde short", "earring"]),
  //5848"]),

  new Trait("male", ["shadow beard", "wild hair"]),
  //5849"]),

  new Trait("male", ["clown eyes green", "peak spike"]),
  //5850"]),

  new Trait("male", ["earring", "messy hair", "vr"]),
  //5851"]),

  new Trait("female", ["earring", "nerd glasses", "red mohawk"]),
  //5852"]),

  new Trait("male", ["headband", "shadow beard"]),
  //5853"]),

  new Trait("male", ["chinstrap", "shaved head", "vr"]),
  //5854"]),

  new Trait("male", ["bandana", "shadow beard"]),
  //5855"]),

  new Trait("female", ["mole", "tassle hat"]),
  //5856"]),

  new Trait("female", ["cigarette", "mohawk"]),
  //5857"]),

  new Trait("female", [
    "clown eyes green",
    "earring",
    "hot lipstick",
    "wild blonde",
  ]),
  //5858"]),

  new Trait("male", ["fedora", "shadow beard"]),
  //5859"]),

  new Trait("female", ["blonde short", "blue eye shadow", "spots"]),
  //5860"]),

  new Trait("male", ["earring", "peak spike"]),
  //5861"]),

  new Trait("male", ["earring", "frumpy hair", "normal beard"]),
  //5862"]),

  new Trait("female", ["hot lipstick", "rosy cheeks", "stringy hair"]),
  //5863"]),

  new Trait("male", ["cigarette", "do-rag", "small shades"]),
  //5864"]),

  new Trait("male", ["goat", "horned rim glasses", "peak spike"]),
  //5865"

  new Trait("male", ["eye patch", "goat", "mole", "police cap"]),
  //5866"]),

  new Trait("male", ["cigarette", "eye patch"]),
  //5867"]),

  new Trait("male", ["normal beard", "police cap"]),
  //5868"]),

  new Trait("female", ["cigarette", "messy hair"]),
  //5869"]),

  new Trait("male", ["cigarette", "knitted cap", "muttonchops"]),
  //5870"]),

  new Trait("male", ["muttonchops", "top hat"]),
  //5871"]),

  new Trait("female", [
    "black lipstick",
    "earring",
    "green eye shadow",
    "stringy hair",
  ]),
  //5872"]),

  new Trait("female", ["blue eye shadow", "crazy hair", "purple lipstick"]),
  //5873"]),

  new Trait("male", ["3d glasses", "earring", "purple hair"]),
  //5874"]),

  new Trait("male", ["bandana", "nerd glasses"]),
  //5875"]),

  new Trait("male", ["earring", "headband", "shadow beard"]),
  //5876"]),

  new Trait("male", ["frown", "nerd glasses", "wild hair"]),
  //5877"]),

  new Trait("female", ["bandana", "black lipstick", "eye mask"]),
  //5878"]),

  new Trait("female", ["earring", "green eye shadow", "straight hair dark"]),
  //5879"]),

  new Trait("male", ["front beard dark", "wild hair"]),
  //5880"]),

  new Trait("female", ["hot lipstick", "mohawk dark", "mole"]),
  //5881"]),

  new Trait("male", ["mole", "regular shades", "stringy hair"]),
  //5882"]),

  new Trait("male", ["chinstrap", "fedora", "silver chain"]),
  //5883"]),

  new Trait("male", ["cigarette", "nerd glasses", "peak spike"]),
  //5884"]),

  new Trait("male", [
    "earring",
    "normal beard black",
    "police cap",
    "small shades",
  ]),
  //5885"]),

  new Trait("male", ["eye patch", "mohawk dark", "muttonchops"]),
  //5886"]),

  new Trait("male", ["chinstrap", "do-rag"]),
  //5887"]),

  new Trait("female", ["headband", "purple lipstick"]),
  //5888"]),

  new Trait("male", ["eye patch", "gold chain"]),
  //5889"]),

  new Trait("female", ["choker", "earring", "headband"]),
  //5890"]),

  new Trait("male", ["handlebars", "horned rim glasses", "top hat"]),
  //5891"]),

  new Trait("male", [
    "earring",
    "horned rim glasses",
    "mohawk thin",
    "shadow beard",
  ]),
  //5892"]),

  new Trait("female", ["black lipstick", "blue eye shadow", "cap"]),
  //5893"]),

  new Trait("male", ["clown eyes blue", "earring", "peak spike"]),
  //5894"]),

  new Trait("female", ["clown nose", "green eye shadow", "straight hair"]),
  //5895"]),

  new Trait("female", [
    "earring",
    "green eye shadow",
    "hot lipstick",
    "mohawk",
  ]),
  //5896"]),

  new Trait("male", ["big shades", "knitted cap", "shadow beard"]),
  //5897"]),

  new Trait("female", ["earring", "tiara"]),
  //5898"]),

  new Trait("male", ["knitted cap", "regular shades"]),
  //5899"]),

  new Trait("female", [
    "big shades",
    "cigarette",
    "purple lipstick",
    "red mohawk",
  ]),
  //5900"]),

  new Trait("female", ["clown eyes blue", "pink with hat"]),
  //5901"]),

  new Trait("male", ["hoodie", "shadow beard", "small shades"]),
  //5902"]),

  new Trait("male", ["front beard", "headband"]),
  //5903"]),

  new Trait("female", ["blue eye shadow", "mohawk thin"]),
  //5904"]),

  new Trait("alien", ["do-rag", "small shades"]),
  //5905"]),

  new Trait("female", ["mohawk dark", "purple eye shadow"]),
  //5906"]),

  new Trait("male", ["classic shades", "knitted cap", "luxurious beard"]),
  //5907"]),

  new Trait("female", ["clown hair green"]),
  //5908"]),

  new Trait("male", ["mohawk thin", "regular shades"]),
  //5909"]),

  new Trait("male", ["mohawk", "normal beard black"]),
  //5910"]),

  new Trait("male", ["eye mask", "mole"]),
  //5911"]),

  new Trait("male", ["bandana", "big shades", "earring", "muttonchops"]),
  //5912"]),

  new Trait("female", ["half shaved", "purple lipstick", "vr"]),
  //5913"]),

  new Trait("female", ["hot lipstick", "red mohawk", "rosy cheeks"]),
  //5914"]),

  new Trait("male", ["classic shades", "police cap"]),
  //5915"]),

  new Trait("male", ["mohawk dark", "vr"]),
  //5916"]),

  new Trait("female", ["mole", "purple lipstick", "straight hair"]),
  //5917"]),

  new Trait("male", ["big shades", "earring", "peak spike"]),
  //5918"]),

  new Trait("female", ["blue eye shadow", "hot lipstick", "straight hair"]),
  //5919"]),

  new Trait("male", ["earring", "peak spike"]),
  //5920"]),

  new Trait("male", ["horned rim glasses", "mohawk dark"]),
  //5921"]),

  new Trait("male", ["spots", "vr", "wild hair"]),
  //5922"]),

  new Trait("male", ["cowboy hat", "earring", "eye mask"]),
  //5923"]),

  new Trait("male", ["big shades", "cowboy hat", "normal beard black"]),
  //5924"]),

  new Trait("male", ["earring", "eye patch", "frown", "frumpy hair"]),
  //5925"]),

  new Trait("male", ["goat", "hoodie", "regular shades"]),
  //5926"]),

  new Trait("female", ["bandana", "cigarette", "classic shades"]),
  //5927"]),

  new Trait("female", ["black lipstick", "cigarette", "wild blonde"]),
  //5928"]),

  new Trait("female", ["tassle hat", "vr"]),
  //5929"]),

  new Trait("male", ["gold chain", "handlebars", "messy hair"]),
  //5930"]),

  new Trait("female", ["cigarette", "mohawk thin", "purple lipstick"]),
  //5931"]),

  new Trait("male", ["big shades", "goat", "headband"]),
  //5932"]),

  new Trait("male", ["peak spike", "shadow beard"]),
  //5933"]),

  new Trait("female", ["pink with hat", "pipe"]),
  //5934"]),

  new Trait("male", ["frown", "frumpy hair", "handlebars"]),
  //5935"]),

  new Trait("male", ["eye mask", "normal beard black"]),
  //5936"]),

  new Trait("male", ["mole", "police cap"]),
  //5937"]),

  new Trait("male", ["frumpy hair", "goat", "vape"]),
  //5938"]),

  new Trait("male", ["police cap", "small shades"]),
  //5939"]),

  new Trait("female", ["bandana", "classic shades", "hot lipstick"]),
  //5940"]),

  new Trait("male", ["classic shades", "crazy hair"]),
  //5941"]),

  new Trait("male", ["earring", "eye patch", "mohawk dark", "vape"]),
  //5942"]),

  new Trait("male", ["classic shades", "clown nose", "peak spike"]),
  //5943"]),

  new Trait("zombie", ["mohawk"]),
  //5944"]),

  new Trait("female", ["cigarette", "mohawk", "mole"]),
  //5945"]),

  new Trait("male", ["luxurious beard", "messy hair", "small shades"]),
  //5946"]),

  new Trait("female", ["regular shades", "straight hair"]),
  //5947"]),

  new Trait("male", ["fedora", "luxurious beard"]),
  //5948"]),

  new Trait("female", [
    "big shades",
    "earring",
    "medical mask",
    "mole",
    "purple lipstick",
    "tassle hat",
  ]),
  //5949"]),

  new Trait("female", ["red mohawk", "vr"]),
  //5950"]),

  new Trait("female", ["dark hair"]),
  //5951"]),

  new Trait("female", ["frumpy hair", "mole"]),
  //5952"]),

  new Trait("male", ["knitted cap", "regular shades"]),
  //5953"]),

  new Trait("male", ["earring", "knitted cap", "nerd glasses"]),
  //5954"]),

  new Trait("female", ["green eye shadow", "headband", "purple lipstick"]),
  //5955"]),

  new Trait("male", ["knitted cap", "smile"]),
  //5956"]),

  new Trait("male", ["eye patch", "normal beard", "peak spike"]),
  //5957"]),

  new Trait("male", ["horned rim glasses", "medical mask", "wild hair"]),
  //5958"]),

  new Trait("male", ["cigarette", "eye patch", "mohawk", "mustache"]),
  //5959"]),

  new Trait("male", ["front beard dark", "mohawk"]),
  //5960"]),

  new Trait("male", ["cap", "earring", "normal beard"]),
  //5961"]),

  new Trait("male", ["frown", "frumpy hair", "regular shades"]),
  //5962"]),

  new Trait("male", ["3d glasses", "bandana", "normal beard black"]),
  //5963"]),

  new Trait("male", ["shaved head", "vr"]),
  //5964"]),

  new Trait("male", ["do-rag", "regular shades"]),
  //5965"]),

  new Trait("male", ["normal beard", "peak spike", "regular shades"]),
  //5966"]),

  new Trait("female", ["clown eyes blue", "purple lipstick", "stringy hair"]),
  //5967"]),

  new Trait("male", ["classic shades", "mohawk dark", "mole", "shadow beard"]),
  //5968"]),

  new Trait("male", ["big shades", "messy hair", "mustache"]),
  //5969"]),

  new Trait("male", ["cowboy hat", "handlebars"]),
  //5970"]),

  new Trait("male", [
    "cap",
    "clown nose",
    "earring",
    "front beard",
    "small shades",
  ]),
  //5971"]),

  new Trait("female", ["bandana", "green eye shadow"]),
  //5972"]),

  new Trait("male", ["cigarette", "earring", "handlebars", "shaved head"]),
  //5973"]),

  new Trait("male", ["cowboy hat", "vr"]),
  //5974"]),

  new Trait("male", ["front beard", "frumpy hair", "regular shades"]),
  //5975"]),

  new Trait("female", ["classic shades", "hot lipstick", "pink with hat"]),
  //5976"]),

  new Trait("female", ["clown eyes green", "tassle hat"]),
  //5977"]),

  new Trait("female", [
    "earring",
    "horned rim glasses",
    "hot lipstick",
    "mole",
    "pigtails",
  ]),
  //5978"]),

  new Trait("male", ["earring", "eye mask"]),
  //5979"]),

  new Trait("female", ["gold chain", "straight hair"]),
  //5980"]),

  new Trait("male", ["cigarette", "knitted cap"]),
  //5981"]),

  new Trait("female", ["clown eyes blue", "hot lipstick", "stringy hair"]),
  //5982"]),

  new Trait("female", ["cigarette", "messy hair", "regular shades"]),
  //5983"]),

  new Trait("male", ["fedora", "frown"]),
  //5984"]),

  new Trait("male", ["earring", "shadow beard", "wild hair"]),
  //5985"]),

  new Trait("male", ["clown eyes blue", "earring", "fedora", "mustache"]),
  //5986"]),

  new Trait("male", ["earring", "eye patch", "wild hair"]),
  //5987"]),

  new Trait("female", ["blue eye shadow", "mohawk"]),
  //5988"]),

  new Trait("male", ["bandana", "normal beard black"]),
  //5989"]),

  new Trait("female", ["clown nose", "crazy hair"]),
  //5990"]),

  new Trait("female", ["bandana", "cigarette", "hot lipstick"]),
  //5991"]),

  new Trait("male", ["cigarette", "classic shades", "frumpy hair"]),
  //5992"]),

  new Trait("female", [
    "horned rim glasses",
    "hot lipstick",
    "straight hair dark",
  ]),
  //5993"]),

  new Trait("male", ["cap forward", "normal beard", "regular shades"]),
  //5994"]),

  new Trait("female", ["headband", "mole"]),
  //5995"]),

  new Trait("male", ["cap", "earring", "mole"]),
  //5996"]),

  new Trait("male", ["knitted cap", "mole", "small shades"]),
  //5997"]),

  new Trait("female", ["mole", "wild hair"]),
  //5998"]),

  new Trait("male", ["mohawk", "mole", "small shades"]),
  //5999"]),

  new Trait("male", ["crazy hair", "front beard"]),
  //6000"]),

  new Trait("male", ["bandana", "muttonchops"]),
  //6001"]),

  new Trait("male", ["3d glasses", "chinstrap", "earring", "knitted cap"]),
  //6002"]),

  new Trait("female", ["eye patch", "mohawk dark", "purple lipstick"]),
  //6003"]),

  new Trait("female", ["clown eyes green", "messy hair"]),
  //6004"]),

  new Trait("female", [
    "black lipstick",
    "earring",
    "eye patch",
    "straight hair",
  ]),
  //6005"]),

  new Trait("male", ["small shades", "wild hair"]),
  //6006"]),

  new Trait("male", ["horned rim glasses", "mohawk thin", "normal beard"]),
  //6007"]),

  new Trait("male", ["eye patch", "mohawk thin", "muttonchops"]),
  //6008"]),

  new Trait("male", ["cigarette", "earring", "eye mask", "headband"]),
  //6009"]),

  new Trait("male", ["earring", "purple hair", "vape"]),
  //6010"]),

  new Trait("male", ["big shades", "medical mask", "wild hair"]),
  //6011"]),

  new Trait("male", ["earring", "mole", "vr", "wild hair"]),
  //6012"]),

  new Trait("male", ["headband", "horned rim glasses", "luxurious beard"]),
  //6013"]),

  new Trait("male", ["buck teeth", "police cap"]),
  //6014"]),

  new Trait("female", [
    "black lipstick",
    "straight hair blonde",
    "welding goggles",
  ]),
  //6015"]),

  new Trait("male", [
    "cigarette",
    "front beard dark",
    "gold chain",
    "peak spike",
  ]),
  //6016"]),

  new Trait("female", ["clown eyes blue", "mohawk thin", "purple lipstick"]),
  //6017"]),

  new Trait("male", ["chinstrap", "gold chain", "knitted cap", "vr"]),
  //6018"]),

  new Trait("male", ["regular shades", "shaved head"]),
  //6019"]),

  new Trait("male", ["horned rim glasses", "mole", "pipe", "stringy hair"]),
  //6020"]),

  new Trait("female", ["bandana", "eye mask"]),
  //6021"]),

  new Trait("male", ["crazy hair", "horned rim glasses", "normal beard"]),
  //6022"]),

  new Trait("female", ["earring", "messy hair", "regular shades"]),
  //6023"]),

  new Trait("male", ["fedora", "normal beard", "regular shades"]),
  //6024"]),

  new Trait("female", ["black lipstick", "cigarette", "red mohawk"]),
  //6025"]),

  new Trait("male", ["luxurious beard", "wild hair"]),
  //6026"]),

  new Trait("male", ["classic shades", "mole", "shaved head"]),
  //6027"]),

  new Trait("female", ["earring", "green eye shadow", "stringy hair"]),
  //6028"]),

  new Trait("female", ["earring", "purple eye shadow", "tassle hat"]),
  //6029"]),

  new Trait("female", ["classic shades", "spots", "wild blonde"]),
  //6030"]),

  new Trait("male", ["front beard dark", "horned rim glasses", "pipe"]),
  //6031"]),

  new Trait("male", ["big beard", "regular shades", "stringy hair"]),
  //6032"]),

  new Trait("male", ["do-rag", "muttonchops", "vape"]),
  //6033"]),

  new Trait("male", ["cap", "clown nose", "normal beard", "pipe"]),
  //6034"]),

  new Trait("male", ["cigarette", "front beard", "headband"]),
  //6035"]),

  new Trait("male", ["hoodie", "horned rim glasses", "muttonchops"]),
  //6036"]),

  new Trait("female", ["crazy hair", "hot lipstick"]),
  //6037"]),

  new Trait("female", ["crazy hair", "hot lipstick", "purple eye shadow"]),
  //6038"]),

  new Trait("male", ["classic shades", "earring", "mohawk thin"]),
  //6039"]),

  new Trait("male", ["gold chain", "police cap", "regular shades"]),
  //6040"]),

  new Trait("male", ["clown eyes blue", "crazy hair"]),
  //6041"]),

  new Trait("male", ["3d glasses", "cap forward", "earring"]),
  //6042"]),

  new Trait("female", ["3d glasses", "orange side"]),
  //6043"]),

  new Trait("male", ["earring", "mole", "regular shades", "shaved head"]),
  //6044"]),

  new Trait("female", ["clown eyes green", "straight hair dark"]),
  //6045"]),

  new Trait("male", ["3d glasses", "cigarette", "frumpy hair"]),
  //6046"]),

  new Trait("female", [
    "black lipstick",
    "blue eye shadow",
    "earring",
    "tassle hat",
  ]),
  //6047"]),

  new Trait("male", ["frumpy hair", "muttonchops", "nerd glasses"]),
  //6048"]),

  new Trait("female", ["clown eyes blue", "gold chain", "wild white hair"]),
  //6049"]),

  new Trait("male", ["chinstrap", "earring", "messy hair"]),
  //6050"]),

  new Trait("male", ["messy hair", "rosy cheeks"]),
  //6051"]),

  new Trait("male", ["earring", "shaved head", "small shades"]),
  //6052"]),

  new Trait("male", ["handlebars", "mohawk dark", "nerd glasses"]),
  //6053"]),

  new Trait("male", ["3d glasses", "front beard dark", "mohawk thin", "pipe"]),
  //6054"]),

  new Trait("female", [
    "earring",
    "nerd glasses",
    "purple lipstick",
    "wild white hair",
  ]),
  //6055"]),

  new Trait("male", ["bandana", "horned rim glasses", "shadow beard", "smile"]),
  //6056"]),

  new Trait("female", [
    "cigarette",
    "green eye shadow",
    "purple lipstick",
    "straight hair",
  ]),
  //6057"]),

  new Trait("male", ["earring", "smile", "stringy hair"]),
  //6058"]),

  new Trait("female", ["black lipstick", "cap", "earring"]),
  //6059"]),

  new Trait("male", ["do-rag", "smile", "spots"]),
  //6060"]),

  new Trait("male", ["3d glasses", "earring", "smile", "stringy hair"]),
  //6061"]),

  new Trait("male", [
    "3d glasses",
    "cigarette",
    "earring",
    "mustache",
    "police cap",
  ]),
  //6062"]),

  new Trait("male", ["big shades", "police cap", "smile"]),
  //6063"]),

  new Trait("female", ["clown eyes blue", "earring", "knitted cap"]),
  //6064"]),

  new Trait("female", ["classic shades", "purple lipstick", "wild hair"]),
  //6065"]),

  new Trait("male", ["crazy hair", "frown", "horned rim glasses"]),
  //6066"]),

  new Trait("female", ["purple eye shadow", "red mohawk"]),
  //6067"]),

  new Trait("male", [
    "cigarette",
    "horned rim glasses",
    "mustache",
    "stringy hair",
  ]),
  //6068"]),

  new Trait("male", ["earring", "front beard", "shaved head"]),
  //6069"]),

  new Trait("female", ["earring", "knitted cap", "purple lipstick"]),
  //6070"]),

  new Trait("female", ["clown eyes blue", "purple lipstick", "straight hair"]),
  //6071"]),

  new Trait("female", ["blonde bob", "clown nose"]),
  //6072"]),

  new Trait("female", ["eye patch", "hot lipstick", "pigtails"]),
  //6073"]),

  new Trait("female", [
    "black lipstick",
    "clown eyes blue",
    "earring",
    "red mohawk",
  ]),
  //6074"]),

  new Trait("female", ["3d glasses", "straight hair dark"]),
  //6075"]),

  new Trait("male", ["clown eyes green", "earring", "messy hair"]),
  //6076"]),

  new Trait("female", ["black lipstick", "mohawk thin", "nerd glasses"]),
  //6077"]),

  new Trait("female", ["clown eyes blue", "hot lipstick", "red mohawk"]),
  //6078"]),

  new Trait("female", ["clown eyes blue", "hot lipstick", "wild hair"]),
  //6079"]),

  new Trait("male", ["3d glasses", "frumpy hair"]),
  //6080"]),

  new Trait("male", ["smile"]),
  //6081"]),

  new Trait("male", ["goat", "peak spike"]),
  //6082"]),

  new Trait("male", ["cigarette", "horned rim glasses", "wild hair"]),
  //6083"]),

  new Trait("female", ["purple lipstick", "tassle hat"]),
  //6084"]),

  new Trait("male", ["frumpy hair", "mustache"]),
  //6085"]),

  new Trait("female", ["earring", "frumpy hair", "hot lipstick", "pipe"]),
  //6086"]),

  new Trait("male", ["goat", "peak spike", "regular shades"]),
  //6087"]),

  new Trait("female", ["earring", "mohawk", "mole", "nerd glasses"]),
  //6088"]),

  new Trait("alien", ["earring", "knitted cap"]),
  //6089"]),

  new Trait("male", ["cap forward", "classic shades", "earring"]),
  //6090"]),

  new Trait("male", ["clown nose"]),
  //6091"]),

  new Trait("male", ["earring", "frumpy hair", "shadow beard"]),
  //6092"]),

  new Trait("female", ["half shaved", "hot lipstick", "medical mask"]),
  //6093"]),

  new Trait("male", ["gold chain", "headband"]),
  //6094"]),

  new Trait("male", ["gold chain", "wild hair"]),
  //6095"]),

  new Trait("female", ["green eye shadow", "mohawk thin"]),
  //6096"]),

  new Trait("male", ["normal beard black", "peak spike"]),
  //6097"]),

  new Trait("female", ["big shades", "hot lipstick", "straight hair dark"]),
  //6098"]),

  new Trait("female", ["crazy hair", "welding goggles"]),
  //6099"]),

  new Trait("male", ["eye patch", "mustache", "vampire hair"]),
  //6100"]),

  new Trait("male", ["bandana", "regular shades", "smile"]),
  //6101"]),

  new Trait("female", ["red mohawk", "regular shades"]),
  //6102"]),

  new Trait("male", ["earring", "horned rim glasses", "peak spike"]),
  //6103"]),

  new Trait("female", [
    "clown eyes blue",
    "hot lipstick",
    "mole",
    "wild blonde",
  ]),
  //6104"]),

  new Trait("male", ["big beard", "shaved head"]),
  //6105"]),

  new Trait("male", ["chinstrap", "frown", "hoodie"]),
  //6106"]),

  new Trait("female", ["blue eye shadow", "crazy hair", "gold chain"]),
  //6107"]),

  new Trait("male", ["clown eyes green", "headband"]),
  //6108"]),

  new Trait("male", ["clown eyes green", "mohawk"]),
  //6109"]),

  new Trait("female", ["cigarette", "hot lipstick", "mohawk"]),
  //6110"]),

  new Trait("female", ["earring", "hot lipstick", "pigtails"]),
  //6111"]),

  new Trait("male", ["earring", "eye patch", "frown", "mohawk thin"]),
  //6112"]),

  new Trait("female", ["horned rim glasses", "messy hair", "silver chain"]),
  //6113"]),

  new Trait("male", ["handlebars", "police cap"]),
  //6114"]),

  new Trait("female", ["mohawk dark", "purple lipstick"]),
  //6115"]),

  new Trait("female", [
    "blue eye shadow",
    "cigarette",
    "purple lipstick",
    "straight hair dark",
  ]),
  //6116"]),

  new Trait("male", [
    "earring",
    "knitted cap",
    "muttonchops",
    "regular shades",
  ]),
  //6117"]),

  new Trait("male", ["eye patch", "normal beard", "peak spike"]),
  //6118"]),

  new Trait("male", ["cigarette", "clown eyes blue", "crazy hair"]),
  //6119"]),

  new Trait("male", ["big beard", "cap forward", "small shades"]),
  //6120"]),

  new Trait("male", ["clown hair green", "goat"]),
  //6121"]),

  new Trait("male", ["earring", "mustache", "wild hair"]),
  //6122"]),

  new Trait("male", ["bandana", "luxurious beard"]),
  //6123"]),

  new Trait("male", ["do-rag", "vape"]),
  //6124"]),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "clown eyes green",
    "frumpy hair",
  ]),
  //6125"]),

  new Trait("male", ["earring", "messy hair", "shadow beard", "small shades"]),
  //6126"]),

  new Trait("male", ["clown eyes green", "earring", "mohawk dark"]),
  //6127"]),

  new Trait("male", ["eye patch", "police cap"]),
  //6128"]),

  new Trait("male", ["do-rag", "luxurious beard", "regular shades"]),
  //6129"]),

  new Trait("male", ["front beard", "mohawk dark"]),
  //6130"]),

  new Trait("male", ["earring", "goat", "horned rim glasses"]),
  //6131"]),

  new Trait("male", ["cigarette", "mohawk thin", "shadow beard", "vr"]),
  //6132"]),

  new Trait("female", ["hot lipstick", "purple eye shadow", "tassle hat"]),
  //6133"]),

  new Trait("male", ["frumpy hair", "muttonchops"]),
  //6134"]),

  new Trait("male", ["hoodie", "muttonchops", "regular shades"]),
  //6135"]),

  new Trait("female", ["bandana", "black lipstick", "blue eye shadow"]),
  //6136"]),

  new Trait("male", ["hoodie", "normal beard black", "small shades"]),
  //6137"]),

  new Trait("male", [
    "earring",
    "horned rim glasses",
    "purple hair",
    "shadow beard",
  ]),
  //6138"]),

  new Trait("male", ["mohawk", "normal beard black", "spots"]),
  //6139"]),

  new Trait("male", ["frown", "spots", "wild hair"]),
  //6140"]),

  new Trait("female", ["pink with hat", "pipe", "purple lipstick"]),
  //6141"]),

  new Trait("male", ["cigarette", "clown eyes blue", "earring", "peak spike"]),
  //6142"]),

  new Trait("male", ["earring", "mohawk thin", "mustache", "vape"]),
  //6143"]),

  new Trait("female", [
    "clown eyes blue",
    "earring",
    "hot lipstick",
    "tassle hat",
  ]),
  //6144"]),

  new Trait("ape", ["cap", "cigarette", "earring"]),
  //6145"]),

  new Trait("male", ["do-rag", "shadow beard", "silver chain"]),
  //6146"]),

  new Trait("male", ["do-rag", "vr"]),
  //6147"]),

  new Trait("male", ["clown nose", "mohawk"]),
  //6148"]),

  new Trait("female", ["big shades", "stringy hair"]),
  //6149"]),

  new Trait("female", [
    "clown eyes green",
    "purple lipstick",
    "straight hair dark",
  ]),
  //6150"]),

  new Trait("male", ["3d glasses", "handlebars", "hoodie"]),
  //6151"]),

  new Trait("female", ["blue eye shadow", "medical mask", "stringy hair"]),
  //6152"]),

  new Trait("male", [
    "clown nose",
    "earring",
    "goat",
    "horned rim glasses",
    "medical mask",
    "messy hair",
  ]),
  //6153"]),

  new Trait("male", ["big beard", "clown eyes blue", "peak spike"]),
  //6154"]),

  new Trait("female", ["blonde bob", "blue eye shadow", "cigarette"]),
  //6155"]),

  new Trait("male", ["shaved head", "silver chain"]),
  //6156"]),

  new Trait("male", ["bandana", "classic shades"]),
  //6157"]),

  new Trait("female", ["blue eye shadow", "straight hair dark"]),
  //6158"]),

  new Trait("male", ["3d glasses", "earring", "mohawk thin"]),
  //6159"]),

  new Trait("male", ["eye patch", "knitted cap", "pipe"]),
  //6160"]),

  new Trait("female", ["crazy hair", "horned rim glasses"]),
  //6161"]),

  new Trait("male", [
    "big beard",
    "earring",
    "horned rim glasses",
    "knitted cap",
  ]),
  //6162"]),

  new Trait("female", ["mole", "pigtails"]),
  //6163"]),

  new Trait("female", ["blonde bob", "choker", "cigarette"]),
  //6164"]),

  new Trait("female", ["earring", "tiara"]),
  //6165"]),

  new Trait("male", ["eye mask", "hoodie", "normal beard black"]),
  //6166"]),

  new Trait("male", ["cap", "front beard dark"]),
  //6167"]),

  new Trait("male", ["front beard", "headband", "nerd glasses"]),
  //6168"]),

  new Trait("female", ["purple eye shadow", "straight hair"]),
  //6169"]),

  new Trait("female", ["messy hair", "pipe"]),
  //6170"]),

  new Trait("male", ["chinstrap", "mohawk", "small shades"]),
  //6171"]),

  new Trait("male", [
    "earring",
    "mohawk",
    "nerd glasses",
    "normal beard black",
  ]),
  //6172"]),

  new Trait("male", ["medical mask", "mohawk dark"]),
  //6173"]),

  new Trait("male", ["fedora", "muttonchops", "small shades"]),
  //6174"]),

  new Trait("female", ["classic shades", "crazy hair", "earring"]),
  //6175"]),

  new Trait("male", ["handlebars", "vr", "wild hair"]),
  //6176"]),

  new Trait("male", ["regular shades", "shadow beard", "wild hair"]),
  //6177"]),

  new Trait("female", [
    "classic shades",
    "earring",
    "medical mask",
    "straight hair",
  ]),
  //6178"]),

  new Trait("male", ["cigarette", "eye mask", "stringy hair"]),
  //6179"]),

  new Trait("male", ["knitted cap", "luxurious beard"]),
  //6180"]),

  new Trait("male", ["clown nose", "front beard", "stringy hair"]),
  //6181"]),

  new Trait("female", ["green eye shadow", "tiara"]),
  //6182"]),

  new Trait("female", ["pipe", "straight hair", "vr"]),
  //6183"]),

  new Trait("female", ["green eye shadow", "pipe", "wild blonde"]),
  //6184"]),

  new Trait("male", ["mohawk thin", "normal beard"]),
  //6185"]),

  new Trait("female", ["clown eyes blue", "earring", "red mohawk"]),
  //6186"]),

  new Trait("female", ["clown eyes green", "straight hair blonde"]),
  //6187"]),

  new Trait("male", [
    "earring",
    "front beard dark",
    "rosy cheeks",
    "shaved head",
  ]),
  //6188"]),

  new Trait("male", ["big shades", "fedora"]),
  //6189"]),

  new Trait("female", ["cigarette", "earring", "tassle hat"]),
  //6190"]),

  new Trait("female", ["half shaved", "hot lipstick", "mole"]),
  //6191"]),

  new Trait("male", ["bandana", "handlebars"]),
  //6192"]),

  new Trait("male", [
    "earring",
    "eye patch",
    "front beard dark",
    "stringy hair",
  ]),
  //6193"]),

  new Trait("male", ["big beard", "eye patch", "mohawk thin"]),
  //6194"]),

  new Trait("male", ["big shades", "crazy hair", "earring", "goat"]),
  //6195"]),

  new Trait("male", ["clown eyes blue", "knitted cap", "luxurious beard"]),
  //6196"]),

  new Trait("female", ["clown eyes green", "knitted cap"]),
  //6197"]),

  new Trait("male", ["do-rag", "horned rim glasses"]),
  //6198"]),

  new Trait("female", ["frumpy hair", "spots"]),
  //6199"]),

  new Trait("male", ["big shades", "gold chain", "mohawk"]),
  //6200"]),

  new Trait("female", ["regular shades", "straight hair dark"]),
  //6201"]),

  new Trait("male", ["big shades", "pipe", "shaved head"]),
  //6202"]),

  new Trait("male", [
    "chinstrap",
    "frown",
    "horned rim glasses",
    "mohawk dark",
  ]),
  //6203"]),

  new Trait("male", ["cowboy hat", "front beard", "small shades"]),
  //6204"]),

  new Trait("female", ["hot lipstick", "mohawk dark", "purple eye shadow"]),
  //6205"]),

  new Trait("female", ["hot lipstick", "purple eye shadow"]),
  //6206"]),

  new Trait("male", ["shaved head", "vr"]),
  //6207"]),

  new Trait("male", ["earring", "shadow beard"]),
  //6208"]),

  new Trait("male", ["cap", "eye mask", "pipe"]),
  //6209"]),

  new Trait("male", ["bandana", "classic shades", "medical mask"]),
  //6210"]),

  new Trait("male", ["eye patch", "handlebars", "knitted cap"]),
  //6211"]),

  new Trait("male", ["cap", "muttonchops"]),
  //6212"]),

  new Trait("male", ["horned rim glasses", "shadow beard", "stringy hair"]),
  //6213"]),

  new Trait("male", ["cap forward", "eye mask", "goat"]),
  //6214"]),

  new Trait("female", ["blonde short", "purple lipstick", "regular shades"]),
  //6215"]),

  new Trait("female", ["green eye shadow", "straight hair blonde", "vape"]),
  //6216"]),

  new Trait("male", ["earring", "pipe", "wild hair"]),
  //6217"]),

  new Trait("male", ["cowboy hat", "earring", "mole", "nerd glasses"]),
  //6218"]),

  new Trait("male", ["cigarette", "crazy hair", "spots"]),
  //6219"]),

  new Trait("male", ["frumpy hair", "normal beard"]),
  //6220"]),

  new Trait("female", [
    "cigarette",
    "earring",
    "green eye shadow",
    "half shaved",
  ]),
  //6221"]),

  new Trait("male", ["clown eyes green", "earring", "headband"]),
  //6222"]),

  new Trait("female", ["black lipstick", "purple eye shadow", "wild hair"]),
  //6223"]),

  new Trait("female", [
    "clown eyes green",
    "earring",
    "medical mask",
    "straight hair",
  ]),
  //6224"]),

  new Trait("male", ["pipe"]),
  //6225"]),

  new Trait("male", [
    "earring",
    "horned rim glasses",
    "purple hair",
    "shadow beard",
  ]),
  //6226"]),

  new Trait("female", ["3d glasses", "headband"]),
  //6227"]),

  new Trait("male", ["classic shades", "headband", "normal beard black"]),
  //6228"]),

  new Trait("male", [
    "cigarette",
    "earring",
    "eye patch",
    "knitted cap",
    "smile",
  ]),
  //6229"]),

  new Trait("female", ["cigarette", "mohawk"]),
  //6230"]),

  new Trait("female", ["choker", "half shaved", "hot lipstick"]),
  //6231"]),

  new Trait("male", ["3d glasses", "bandana"]),
  //6232"]),

  new Trait("male", ["cigarette", "eye patch", "police cap", "shadow beard"]),
  //6233"]),

  new Trait("male", ["classic shades", "normal beard", "wild hair"]),
  //6234"]),

  new Trait("female", ["crazy hair", "hot lipstick", "pipe"]),
  //6235"]),

  new Trait("male", ["muttonchops", "regular shades", "shaved head"]),
  //6236"]),

  new Trait("male", ["3d glasses", "cowboy hat", "handlebars"]),
  //6237"]),

  new Trait("male", ["cap", "mustache"]),
  //6238"]),

  new Trait("female", ["earring", "mole", "wild blonde"]),
  //6239"]),

  new Trait("male", ["3d glasses", "earring", "frumpy hair", "gold chain"]),
  //6240"]),

  new Trait("male", ["clown eyes blue", "hoodie", "mole"]),
  //6241"]),

  new Trait("female", ["blonde bob", "spots"]),
  //6242"]),

  new Trait("female", [
    "classic shades",
    "half shaved",
    "hot lipstick",
    "mole",
  ]),
  //6243"]),

  new Trait("male", ["mole"]),
  //6244"]),

  new Trait("female", ["black lipstick", "earring", "mohawk", "pipe"]),
  //6245"]),

  new Trait("male", ["mohawk thin", "mole", "regular shades", "shadow beard"]),
  //6246"]),

  new Trait("male", ["cap forward", "normal beard", "small shades"]),
  //6247"]),

  new Trait("male", ["messy hair", "pipe"]),
  //6248"]),

  new Trait("female", [
    "clown eyes green",
    "purple lipstick",
    "straight hair dark",
  ]),
  //6249"]),

  new Trait("female", ["orange side", "purple eye shadow"]),
  //6250"]),

  new Trait("male", ["3d glasses", "do-rag", "earring", "mustache"]),
  //6251"]),

  new Trait("male", ["big shades", "goat", "pipe", "top hat"]),
  //6252"]),

  new Trait("female", ["cigarette", "straight hair dark"]),
  //6253"]),

  new Trait("male", ["bandana", "earring", "eye patch", "handlebars"]),
  //6254"]),

  new Trait("female", ["eye mask", "pink with hat", "purple lipstick"]),
  //6255"]),

  new Trait("female", ["blonde short", "earring", "hot lipstick"]),
  //6256"]),

  new Trait("female", ["bandana", "black lipstick", "cigarette"]),
  //6257"]),

  new Trait("male", ["mohawk dark", "shadow beard"]),
  //6258"]),

  new Trait("female", ["earring", "hot lipstick", "mohawk thin"]),
  //6259"]),

  new Trait("male", ["earring", "mohawk dark", "pipe"]),
  //6260"]),

  new Trait("male", ["big shades", "knitted cap", "pipe"]),
  //6261"]),

  new Trait("male", ["big beard", "cap", "earring", "mole", "nerd glasses"]),
  //6262"]),

  new Trait("female", ["black lipstick", "purple eye shadow", "straight hair"]),
  //6263"]),

  new Trait("male", ["3d glasses", "police cap"]),
  //6264"]),

  new Trait("female", [
    "black lipstick",
    "clown eyes blue",
    "earring",
    "straight hair",
  ]),
  //6265"]),

  new Trait("male", ["medical mask", "shaved head", "spots"]),
  //6266"]),

  new Trait("male", ["crazy hair", "earring", "eye patch", "mustache"]),
  //6267"]),

  new Trait("male", ["classic shades", "luxurious beard", "shaved head"]),
  //6268"]),

  new Trait("male", [
    "earring",
    "horned rim glasses",
    "luxurious beard",
    "messy hair",
  ]),
  //6269"]),

  new Trait("female", ["mole", "pink with hat"]),
  //6270"]),

  new Trait("male", ["bandana", "classic shades", "clown nose"]),
  //6271"]),

  new Trait("female", ["clown eyes green", "crazy hair"]),
  //6272"]),

  new Trait("female", ["cigarette", "green eye shadow", "tassle hat"]),
  //6273"]),

  new Trait("male", [
    "earring",
    "knitted cap",
    "normal beard black",
    "regular shades",
  ]),
  //6274"]),

  new Trait("zombie", ["mohawk dark", "shadow beard"]),
  //6275"]),

  new Trait("male", ["mole", "shaved head"]),
  //6276"]),

  new Trait("female", [
    "blonde bob",
    "earring",
    "green eye shadow",
    "silver chain",
  ]),
  //6277"]),

  new Trait("female", ["cigarette", "messy hair", "nerd glasses"]),
  //6278"]),

  new Trait("male", ["frumpy hair", "rosy cheeks"]),
  //6279"]),

  new Trait("male", ["cowboy hat", "nerd glasses"]),
  //6280"]),

  new Trait("female", ["black lipstick", "dark hair", "nerd glasses"]),
  //6281"]),

  new Trait("male", ["bandana", "front beard", "nerd glasses"]),
  //6282"]),

  new Trait("male", ["front beard", "gold chain", "stringy hair"]),
  //6283"]),

  new Trait("male", ["earring", "frumpy hair", "mustache"]),
  //6284"]),

  new Trait("female", ["green eye shadow", "headband"]),
  //6285"]),

  new Trait("female", ["black lipstick", "half shaved", "vape"]),
  //6286"]),

  new Trait("male", ["classic shades", "fedora"]),
  //6287"]),

  new Trait("female", ["pipe"]),
  //6288"]),

  new Trait("male", ["mohawk dark", "shadow beard", "small shades", "smile"]),
  //6289"]),

  new Trait("female", ["big shades", "hot lipstick", "stringy hair"]),
  //6290"]),

  new Trait("male", ["mohawk", "regular shades", "smile"]),
  //6291"]),

  new Trait("female", ["blue eye shadow", "headband"]),
  //6292"]),

  new Trait("female", [
    "clown nose",
    "green eye shadow",
    "hot lipstick",
    "knitted cap",
  ]),
  //6293"]),

  new Trait("female", ["classic shades", "crazy hair", "hot lipstick"]),
  //6294"]),

  new Trait("male", [
    "cigarette",
    "earring",
    "eye patch",
    "normal beard black",
    "stringy hair",
  ]),
  //6295"]),

  new Trait("male", ["big shades", "clown hair green"]),
  //6296"]),

  new Trait("zombie", ["cigarette", "nerd glasses", "top hat"]),
  //6297"]),

  new Trait("female", ["clown eyes green", "crazy hair", "purple lipstick"]),
  //6298"]),

  new Trait("male", ["bandana", "shadow beard"]),
  //6299"]),

  new Trait("female", ["earring", "hot lipstick", "mohawk dark", "mole"]),
  //6300"]),

  new Trait("male", [
    "earring",
    "front beard dark",
    "messy hair",
    "nerd glasses",
  ]),
  //6301"]),

  new Trait("female", ["blue eye shadow", "dark hair", "mole"]),
  //6302"]),

  new Trait("male", ["cap", "frown", "small shades"]),
  //6303"]),

  new Trait("zombie", ["crazy hair", "regular shades"]),
  //6304"]),

  new Trait("female", ["frumpy hair", "pipe"]),
  //6305"]),

  new Trait("male", ["cap forward", "horned rim glasses"]),
  //6306"]),

  new Trait("male", ["shadow beard", "silver chain", "wild hair"]),
  //6307"]),

  new Trait("male", ["chinstrap", "hoodie"]),
  //6308"]),

  new Trait("female", ["horned rim glasses", "hot lipstick", "red mohawk"]),
  //6309"]),

  new Trait("male", ["horned rim glasses", "pipe", "stringy hair"]),
  //6310"]),

  new Trait("male", ["small shades", "vampire hair"]),
  //6311"]),

  new Trait("male", ["mohawk thin", "pipe"]),
  //6312"]),

  new Trait("male", ["cigarette", "classic shades", "mohawk", "shadow beard"]),
  //6313"]),

  new Trait("male", ["peak spike", "shadow beard", "small shades"]),
  //6314"]),

  new Trait("male", ["muttonchops", "police cap", "vr"]),
  //6315"]),

  new Trait("male", ["3d glasses", "messy hair", "shadow beard"]),
  //6316"]),

  new Trait("male", ["3d glasses", "earring", "stringy hair"]),
  //6317"]),

  new Trait("male", ["earring", "eye mask", "mohawk", "mole"]),
  //6318"]),

  new Trait("male", ["big beard", "big shades"]),
  //6319"]),

  new Trait("female", ["3d glasses", "messy hair", "silver chain"]),
  //6320"]),

  new Trait("female", [
    "cigarette",
    "clown eyes green",
    "frumpy hair",
    "purple lipstick",
  ]),
  //6321"]),

  new Trait("male", ["mole", "vampire hair"]),
  //6322"]),

  new Trait("female", ["mohawk thin", "regular shades"]),
  //6323"]),

  new Trait("female", ["clown eyes green", "frumpy hair"]),
  //6324"]),

  new Trait("male", ["earring", "knitted cap", "mole"]),
  //6325"]),

  new Trait("female", ["black lipstick", "clown hair green"]),
  //6326"]),

  new Trait("male", ["do-rag", "regular shades", "shadow beard"]),
  //6327"]),

  new Trait("male", ["mohawk", "silver chain"]),
  //6328"]),

  new Trait("female", ["purple lipstick", "straight hair", "vr"]),
  //6329"]),

  new Trait("male", ["cap", "goat", "regular shades"]),
  //6330"]),

  new Trait("female", ["mohawk thin", "purple eye shadow"]),
  //6331"]),

  new Trait("male", ["vr"]),
  //6332"]),

  new Trait("male", ["big shades", "cap", "cigarette", "normal beard"]),
  //6333"]),

  new Trait("male", ["do-rag", "gold chain", "shadow beard", "small shades"]),
  //6334"]),

  new Trait("male", ["earring", "mohawk thin", "muttonchops"]),
  //6335"]),

  new Trait("male", ["beanie", "shadow beard"]),
  //6336"]),

  new Trait("male", ["big shades", "mohawk dark"]),
  //6337"]),

  new Trait("female", ["blue eye shadow", "wild blonde"]),
  //6338"]),

  new Trait("male", ["horned rim glasses"]),
  //6339"]),

  new Trait("female", ["dark hair", "earring", "hot lipstick", "mole"]),
  //6340"]),

  new Trait("female", ["clown eyes blue", "mole"]),
  //6341"]),

  new Trait("male", ["cowboy hat", "earring", "small shades"]),
  //6342"]),

  new Trait("female", ["green eye shadow", "purple lipstick", "wild hair"]),
  //6343"]),

  new Trait("male", [
    "cigarette",
    "nerd glasses",
    "purple hair",
    "shadow beard",
  ]),
  //6344"]),

  new Trait("female", ["black lipstick", "welding goggles", "wild white hair"]),
  //6345"]),

  new Trait("male", ["eye mask", "knitted cap"]),
  //6346"]),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "crazy hair",
    "green eye shadow",
  ]),
  //6347"]),

  new Trait("female", ["frumpy hair", "welding goggles"]),
  //6348"]),

  new Trait("male", ["earring", "headband", "shadow beard", "vape"]),
  //6349"]),

  new Trait("female", [
    "earring",
    "hot lipstick",
    "nerd glasses",
    "straight hair blonde",
  ]),
  //6350"]),

  new Trait("male", ["fedora", "front beard", "silver chain"]),
  //6351"]),

  new Trait("female", ["clown eyes blue", "hot lipstick", "wild white hair"]),
  //6352"]),

  new Trait("male", ["big shades", "cigarette", "earring", "shaved head"]),
  //6353"]),

  new Trait("male", ["earring", "frown", "shaved head"]),
  //6354"]),

  new Trait("male", ["mustache", "small shades", "wild hair"]),
  //6355"]),

  new Trait("male", ["big shades"]),
  //6356"]),

  new Trait("female", ["blonde short", "earring", "purple lipstick"]),
  //6357"]),

  new Trait("female", ["medical mask", "messy hair", "purple lipstick"]),
  //6358"]),

  new Trait("male", ["chinstrap", "peak spike", "spots"]),
  //6359"]),

  new Trait("male", ["cowboy hat", "earring", "mustache", "regular shades"]),
  //6360"]),

  new Trait("male", ["frumpy hair", "shadow beard", "small shades"]),
  //6361"]),

  new Trait("male", ["eye mask", "mohawk thin", "normal beard"]),
  //6362"]),

  new Trait("male", ["front beard", "shaved head"]),
  //6363"]),

  new Trait("male", ["earring", "mohawk thin", "normal beard black"]),
  //6364"]),

  new Trait("female", [
    "clown eyes green",
    "clown nose",
    "purple lipstick",
    "straight hair",
  ]),
  //6365"]),

  new Trait("male", ["bandana", "mustache"]),
  //6366"]),

  new Trait("male", [
    "cigarette",
    "earring",
    "muttonchops",
    "shaved head",
    "vr",
  ]),
  //6367"]),

  new Trait("female", ["purple lipstick", "silver chain", "straight hair"]),
  //6368"]),

  new Trait("female", ["half shaved", "mole", "pipe", "purple lipstick"]),
  //6369"]),

  new Trait("female", ["earring", "purple eye shadow", "straight hair blonde"]),
  //6370"]),

  new Trait("female", ["mohawk thin", "purple eye shadow"]),
  //6371"]),

  new Trait("male", ["goat", "mole", "nerd glasses", "peak spike"]),
  //6372"]),

  new Trait("male", ["big beard", "headband", "nerd glasses"]),
  //6373"]),

  new Trait("male", [
    "cap forward",
    "cigarette",
    "shadow beard",
    "small shades",
  ]),
  //6374"]),

  new Trait("male", ["cowboy hat", "pipe"]),
  //6375"]),

  new Trait("female", ["eye mask", "pipe", "purple lipstick", "stringy hair"]),
  //6376"]),

  new Trait("female", ["hot lipstick", "regular shades", "wild blonde"]),
  //6377"]),

  new Trait("female", ["eye mask", "messy hair"]),
  //6378"]),

  new Trait("female", ["black lipstick", "earring", "mohawk thin"]),
  //6379"]),

  new Trait("male", ["do-rag", "earring", "front beard dark", "nerd glasses"]),
  //6380"]),

  new Trait("female", ["regular shades", "straight hair blonde"]),
  //6381"]),

  new Trait("male", ["luxurious beard", "police cap"]),
  //6382"]),

  new Trait("female", ["black lipstick", "mole", "stringy hair"]),
  //6383"]),

  new Trait("male", ["earring", "handlebars", "mohawk thin"]),
  //6384"]),

  new Trait("male", ["cap", "cigarette", "mustache", "silver chain"]),
  //6385"]),

  new Trait("female", ["mohawk thin", "pipe"]),
  //6386"]),

  new Trait("male", ["earring", "frumpy hair", "handlebars"]),
  //6387"]),

  new Trait("female", ["bandana", "earring", "green eye shadow"]),
  //6388"]),

  new Trait("female", ["dark hair", "nerd glasses", "purple lipstick"]),
  //6389"]),

  new Trait("female", ["blue eye shadow", "mohawk dark", "purple lipstick"]),
  //6390"]),

  new Trait("male", ["big shades", "chinstrap", "frumpy hair"]),
  //6391"]),

  new Trait("male", ["cigarette", "frown", "regular shades", "wild hair"]),
  //6392"]),

  new Trait("male", ["cigarette", "mohawk", "small shades"]),
  //6393"]),

  new Trait("female", ["mole", "purple eye shadow", "wild hair"]),
  //6394"]),

  new Trait("male", ["cigarette", "goat", "mohawk"]),
  //6395"]),

  new Trait("male", ["classic shades", "knitted cap", "mole", "normal beard"]),
  //6396"]),

  new Trait("male", ["cap", "earring", "front beard"]),
  //6397"]),

  new Trait("male", ["earring", "horned rim glasses", "peak spike"]),
  //6398"]),

  new Trait("male", ["big shades", "cigarette", "knitted cap", "shadow beard"]),
  //6399"]),

  new Trait("male", ["hoodie", "pipe"]),
  //6400"]),

  new Trait("female", ["black lipstick", "blue eye shadow", "messy hair"]),
  //6401"]),

  new Trait("female", ["pigtails", "vr"]),
  //6402"]),

  new Trait("male", ["cap forward", "cigarette"]),
  //6403"]),

  new Trait("male", ["luxurious beard", "purple hair", "silver chain"]),
  //6404"]),

  new Trait("female", ["earring", "mohawk dark", "silver chain"]),
  //6405"]),

  new Trait("male", ["luxurious beard", "shaved head"]),
  //6406"]),

  new Trait("male", ["3d glasses", "knitted cap", "muttonchops"]),
  //6407"]),

  new Trait("male", ["big shades", "cigarette", "clown nose", "crazy hair"]),
  //6408"]),

  new Trait("male", ["front beard", "horned rim glasses", "mohawk dark"]),
  //6409"]),

  new Trait("male", ["buck teeth", "stringy hair"]),
  //6410"]),

  new Trait("male", ["clown eyes blue", "crazy hair", "earring"]),
  //6411"]),

  new Trait("male", ["cap forward", "classic shades", "earring"]),
  //6412"]),

  new Trait("male", ["buck teeth", "shadow beard"]),
  //6413"]),

  new Trait("male", ["3d glasses", "mohawk", "normal beard"]),
  //6414"]),

  new Trait("female", ["black lipstick", "frumpy hair", "vr"]),
  //6415"]),

  new Trait("female", [
    "black lipstick",
    "clown eyes green",
    "earring",
    "wild hair",
  ]),
  //6416"]),

  new Trait("male", ["cigarette", "eye patch", "mole", "peak spike"]),
  //6417"]),

  new Trait("female", ["clown eyes green", "pigtails"]),
  //6418"]),

  new Trait("male", ["classic shades", "earring", "top hat"]),
  //6419"]),

  new Trait("male", ["earring", "frown", "hoodie", "nerd glasses"]),
  //6420"]),

  new Trait("male", ["clown eyes blue", "mohawk", "shadow beard"]),
  //6421"]),

  new Trait("female", [
    "blue eye shadow",
    "frumpy hair",
    "medical mask",
    "purple lipstick",
  ]),
  //6422"]),

  new Trait("male", ["eye patch", "goat", "headband"]),
  //6423"]),

  new Trait("male", ["chinstrap", "messy hair"]),
  //6424"]),

  new Trait("female", ["black lipstick", "eye mask", "straight hair"]),
  //6425"]),

  new Trait("male", ["front beard", "hoodie", "small shades"]),
  //6426"]),

  new Trait("male", ["frown", "goat", "stringy hair"]),
  //6427"]),

  new Trait("male", ["luxurious beard", "wild hair"]),
  //6428"]),

  new Trait("male", ["mohawk", "mustache"]),
  //6429"]),

  new Trait("female", ["eye mask", "wild white hair"]),
  //6430"]),

  new Trait("male", ["normal beard", "regular shades", "shaved head"]),
  //6431"]),

  new Trait("female", ["choker", "stringy hair"]),
  //6432"]),

  new Trait("male", ["bandana", "earring", "normal beard"]),
  //6433"]),

  new Trait("female", ["mohawk thin", "mole", "purple lipstick"]),
  //6434"]),

  new Trait("male", ["classic shades", "fedora", "front beard"]),
  //6435"]),

  new Trait("female", [
    "blue eye shadow",
    "clown hair green",
    "purple lipstick",
  ]),
  //6436"]),

  new Trait("male", ["hoodie", "horned rim glasses"]),
  //6437"]),

  new Trait("male", ["frown", "knitted cap"]),
  //6438"]),

  new Trait("male", ["clown eyes green", "mohawk thin", "pipe"]),
  //6439"]),

  new Trait("female", ["big shades", "mohawk thin"]),
  //6440"]),

  new Trait("female", ["hot lipstick"]),
  //6441"]),

  new Trait("female", [
    "black lipstick",
    "clown eyes green",
    "earring",
    "straight hair blonde",
  ]),
  //6442"]),

  new Trait("male", ["clown hair green", "horned rim glasses"]),
  //6443"]),

  new Trait("male", ["earring", "mole", "normal beard black", "peak spike"]),
  //6444"]),

  new Trait("male", ["front beard dark", "frumpy hair", "nerd glasses"]),
  //6445"]),

  new Trait("male", ["classic shades", "luxurious beard", "wild hair"]),
  //6446"]),

  new Trait("male", ["do-rag", "smile"]),
  //6447"]),

  new Trait("female", ["eye patch", "knitted cap"]),
  //6448"]),

  new Trait("male", ["front beard dark", "shaved head"]),
  //6449"]),

  new Trait("female", ["hot lipstick", "spots", "wild hair"]),
  //6450"]),

  new Trait("female", [
    "earring",
    "medical mask",
    "purple lipstick",
    "straight hair dark",
  ]),
  //6451"]),

  new Trait("male", ["earring", "eye mask", "mohawk thin"]),
  //6452"]),

  new Trait("male", ["bandana", "front beard", "vr"]),
  //6453"]),

  new Trait("female", ["big shades", "earring", "headband"]),
  //6454"]),

  new Trait("male", ["medical mask", "mohawk dark"]),
  //6455"]),

  new Trait("male", ["cigarette", "mohawk dark"]),
  //6456"]),

  new Trait("male", ["front beard dark", "small shades", "stringy hair"]),
  //6457"]),

  new Trait("female", ["vr"]),
  //6458"]),

  new Trait("male", ["normal beard black", "top hat", "vr"]),
  //6459"]),

  new Trait("female", ["mohawk", "nerd glasses"]),
  //6460"]),

  new Trait("female", ["earring", "mohawk", "purple lipstick"]),
  //6461"]),

  new Trait("female", ["pipe", "straight hair"]),
  //6462"]),

  new Trait("male", ["cap", "nerd glasses", "smile"]),
  //6463"]),

  new Trait("female", ["cap", "classic shades", "hot lipstick"]),
  //6464"]),

  new Trait("female", ["blonde short", "earring", "purple lipstick"]),
  //6465"]),

  new Trait("male", [
    "buck teeth",
    "chinstrap",
    "cowboy hat",
    "gold chain",
    "mole",
  ]),
  //6466"]),

  new Trait("male", ["headband", "horned rim glasses", "luxurious beard"]),
  //6467"]),

  new Trait("female", [
    "black lipstick",
    "clown nose",
    "purple eye shadow",
    "straight hair dark",
  ]),
  //6468"]),

  new Trait("female", [
    "cigarette",
    "crazy hair",
    "horned rim glasses",
    "hot lipstick",
  ]),
  //6469"]),

  new Trait("male", ["big shades", "fedora"]),
  //6470"]),

  new Trait("male", ["clown hair green", "spots"]),
  //6471"]),

  new Trait("male", ["beanie", "earring"]),
  //6472"]),

  new Trait("male", ["purple hair", "vr"]),
  //6473"]),

  new Trait("male", ["luxurious beard", "mohawk dark"]),
  //6474"]),

  new Trait("male", ["frown", "mohawk"]),
  //6475"]),

  new Trait("male", [
    "clown eyes blue",
    "earring",
    "normal beard black",
    "peak spike",
  ]),
  //6476"]),

  new Trait("male", ["eye mask", "handlebars", "top hat"]),
  //6477"]),

  new Trait("female", [
    "black lipstick",
    "blue eye shadow",
    "cigarette",
    "mohawk",
  ]),
  //6478"]),

  new Trait("male", ["cap forward", "horned rim glasses", "normal beard"]),
  //6479"]),

  new Trait("male", ["cigarette", "front beard", "stringy hair"]),
  //6480"]),

  new Trait("female", ["hot lipstick", "stringy hair"]),
  //6481"]),

  new Trait("male", ["fedora", "muttonchops"]),
  //6482"]),

  new Trait("female", ["crazy hair", "eye mask", "hot lipstick", "mole"]),
  //6483"]),

  new Trait("male", ["normal beard black", "vape", "wild hair"]),
  //6484"]),

  new Trait("male", ["normal beard", "vampire hair"]),
  //6485"]),

  new Trait("female", ["mole", "welding goggles", "wild hair"]),
  //6486"]),

  new Trait("female", []),
  //6487"]),

  new Trait("male", ["headband", "normal beard black"]),
  //6488"]),

  new Trait("male", ["cap forward", "normal beard black", "regular shades"]),
  //6489"]),

  new Trait("female", ["black lipstick", "tiara"]),
  //6490"]),

  new Trait("zombie", ["cap forward", "earring", "shadow beard"]),
  //6491"]),

  new Trait("male", ["clown eyes green", "stringy hair"]),
  //6492"]),

  new Trait("male", ["earring", "police cap", "shadow beard"]),
  //6493"]),

  new Trait("male", ["peak spike", "rosy cheeks"]),
  //6494"]),

  new Trait("female", ["classic shades", "messy hair"]),
  //6495"]),

  new Trait("female", ["blue eye shadow", "half shaved"]),
  //6496"]),

  new Trait("female", ["blonde short", "eye patch"]),
  //6497"]),

  new Trait("female", [
    "cigarette",
    "clown eyes blue",
    "earring",
    "headband",
    "hot lipstick",
  ]),
  //6498"]),

  new Trait("male", ["clown eyes green", "knitted cap"]),
  //6499"]),

  new Trait("female", ["crazy hair", "nerd glasses"]),
  //6500"]),

  new Trait("male", ["goat", "peak spike"]),
  //6501"]),

  new Trait("male", ["buck teeth", "do-rag"]),
  //6502"]),

  new Trait("male", ["chinstrap", "earring", "peak spike"]),
  //6503"]),

  new Trait("male", ["horned rim glasses", "top hat"]),
  //6504"]),

  new Trait("male", [
    "classic shades",
    "earring",
    "front beard dark",
    "hoodie",
  ]),
  //6505"]),

  new Trait("female", ["horned rim glasses", "mohawk thin"]),
  //6506"]),

  new Trait("male", ["clown eyes blue", "frumpy hair"]),
  //6507"]),

  new Trait("male", ["cigarette", "do-rag", "muttonchops", "small shades"]),
  //6508"]),

  new Trait("female", ["black lipstick", "blue eye shadow", "dark hair"]),
  //6509"]),

  new Trait("female", ["cap", "eye patch", "hot lipstick"]),
  //6510"]),

  new Trait("male", ["earring", "regular shades", "top hat"]),
  //6511"]),

  new Trait("female", ["clown eyes blue", "hot lipstick", "knitted cap"]),
  //6512"]),

  new Trait("female", ["3d glasses", "pink with hat", "purple lipstick"]),
  //6513"]),

  new Trait("male", ["do-rag", "mole", "shadow beard"]),
  //6514"]),

  new Trait("zombie", ["cigarette", "wild hair"]),
  //6515"]),

  new Trait("male", ["bandana", "cigarette"]),
  //6516"]),

  new Trait("male", ["earring", "front beard dark", "stringy hair"]),
  //6517"]),

  new Trait("female", ["bandana", "earring", "purple lipstick"]),
  //6518"]),

  new Trait("male", ["big beard", "stringy hair"]),
  //6519"]),

  new Trait("female", ["black lipstick", "blonde short", "mole"]),
  //6520"]),

  new Trait("male", ["fedora", "goat", "regular shades"]),
  //6521"]),

  new Trait("female", ["cap", "earring", "vr"]),
  //6522"]),

  new Trait("male", ["big shades", "cigarette", "knitted cap"]),
  //6523"]),

  new Trait("male", ["chinstrap", "clown hair green", "nerd glasses"]),
  //6524"]),

  new Trait("male", ["goat", "mohawk thin", "vr"]),
  //6525"]),

  new Trait("male", ["cigarette", "mustache", "nerd glasses"]),
  //6526"]),

  new Trait("male", [
    "horned rim glasses",
    "messy hair",
    "mole",
    "normal beard black",
  ]),
  //6527"]),

  new Trait("female", [
    "black lipstick",
    "earring",
    "green eye shadow",
    "straight hair blonde",
  ]),
  //6528"]),

  new Trait("male", ["frown", "hoodie", "nerd glasses", "shadow beard"]),
  //6529"]),

  new Trait("male", ["cigarette", "fedora", "regular shades"]),
  //6530"]),

  new Trait("male", ["cowboy hat", "earring"]),
  //6531"]),

  new Trait("female", ["earring", "orange side"]),
  //6532"]),

  new Trait("male", ["eye mask", "peak spike"]),
  //6533"]),

  new Trait("female", ["crazy hair", "mole"]),
  //6534"]),

  new Trait("male", ["handlebars", "mohawk thin", "small shades"]),
  //6535"]),

  new Trait("male", ["earring", "headband", "mustache"]),
  //6536"]),

  new Trait("female", ["3d glasses", "messy hair"]),
  //6537"]),

  new Trait("male", [
    "cigarette",
    "gold chain",
    "luxurious beard",
    "stringy hair",
  ]),
  //6538"]),

  new Trait("male", ["frown", "wild hair"]),
  //6539"]),

  new Trait("male", ["classic shades", "frown", "wild hair"]),
  //6540"]),

  new Trait("male", ["crazy hair", "silver chain"]),
  //6541"]),

  new Trait("male", ["fedora", "normal beard", "vr"]),
  //6542"]),

  new Trait("female", ["black lipstick", "clown hair green", "mole"]),
  //6543"]),

  new Trait("male", ["fedora", "front beard dark", "vr"]),
  //6544"]),

  new Trait("male", ["mohawk dark", "mole", "mustache"]),
  //6545"]),

  new Trait("male", ["earring", "knitted cap", "normal beard"]),
  //6546"]),

  new Trait("female", ["black lipstick", "purple eye shadow", "stringy hair"]),
  //6547"]),

  new Trait("male", ["clown eyes green", "do-rag", "earring", "front beard"]),
  //6548"]),

  new Trait("female", ["classic shades", "half shaved", "purple lipstick"]),
  //6549"]),

  new Trait("female", [
    "clown eyes blue",
    "purple lipstick",
    "straight hair dark",
  ]),
  //6550"]),

  new Trait("male", ["mole", "peak spike"]),
  //6551"]),

  new Trait("male", ["cowboy hat", "smile"]),
  //6552"]),

  new Trait("male", ["mohawk", "shadow beard"]),
  //6553"]),

  new Trait("female", [
    "blonde short",
    "cigarette",
    "hot lipstick",
    "purple eye shadow",
  ]),
  //6554"]),

  new Trait("male", ["do-rag", "normal beard black"]),
  //6555"]),

  new Trait("female", ["blonde bob", "hot lipstick", "nerd glasses"]),
  //6556"]),

  new Trait("male", ["clown hair green", "shadow beard"]),
  //6557"]),

  new Trait("female", ["clown eyes green", "mole", "red mohawk"]),
  //6558"]),

  new Trait("female", ["welding goggles", "wild hair"]),
  //6559"]),

  new Trait("female", [
    "black lipstick",
    "blue eye shadow",
    "earring",
    "straight hair blonde",
  ]),
  //6560"]),

  new Trait("male", ["classic shades", "muttonchops", "shaved head"]),
  //6561"]),

  new Trait("male", ["chinstrap", "earring", "mole"]),
  //6562"]),

  new Trait("female", ["cap", "earring", "vr"]),
  //6563"]),

  new Trait("female", ["blue eye shadow", "cigarette", "wild blonde"]),
  //6564"]),

  new Trait("female", ["dark hair", "mole", "nerd glasses", "purple lipstick"]),
  //6565"]),

  new Trait("female", ["3d glasses", "earring", "knitted cap"]),
  //6566"]),

  new Trait("male", ["knitted cap", "normal beard", "small shades"]),
  //6567"]),

  new Trait("female", ["nerd glasses", "wild blonde"]),
  //6568"]),

  new Trait("female", ["cigarette", "dark hair", "earring", "hot lipstick"]),
  //6569"]),

  new Trait("female", ["earring", "purple lipstick", "red mohawk"]),
  //6570"]),

  new Trait("female", ["black lipstick", "dark hair", "silver chain"]),
  //6571"]),

  new Trait("male", ["clown eyes green", "front beard", "stringy hair"]),
  //6572"]),

  new Trait("female", ["black lipstick", "knitted cap", "purple eye shadow"]),
  //6573"]),

  new Trait("female", ["bandana", "cigarette", "earring"]),
  //6574"]),

  new Trait("male", ["buck teeth", "clown hair green"]),
  //6575"]),

  new Trait("female", ["regular shades", "tassle hat"]),
  //6576"]),

  new Trait("female", ["blonde bob", "hot lipstick", "spots"]),
  //6577"]),

  new Trait("male", ["hoodie", "regular shades"]),
  //6578"]),

  new Trait("male", ["earring", "frumpy hair", "vr"]),
  //6579"]),

  new Trait("male", ["chinstrap", "mohawk dark", "nerd glasses"]),
  //6580"]),

  new Trait("female", ["cigarette", "tiara"]),
  //6581"]),

  new Trait("male", ["3d glasses", "crazy hair", "luxurious beard"]),
  //6582"]),

  new Trait("male", ["bandana", "big beard"]),
  //6583"]),

  new Trait("female", ["nerd glasses", "stringy hair"]),
  //6584"]),

  new Trait("male", ["chinstrap", "classic shades", "messy hair"]),
  //6585"]),

  new Trait("zombie", ["knitted cap", "smile"]),
  //6586"]),

  new Trait("female", ["cap", "earring", "hot lipstick"]),
  //6587"]),

  new Trait("female", ["classic shades", "mohawk dark"]),
  //6588"]),

  new Trait("female", ["clown nose", "wild white hair"]),
  //6589"]),

  new Trait("female", ["clown hair green", "earring", "hot lipstick"]),
  //6590"]),

  new Trait("male", ["clown eyes blue", "handlebars", "mohawk dark"]),
  //6591"]),

  new Trait("female", [
    "black lipstick",
    "regular shades",
    "straight hair blonde",
  ]),
  //6592"]),

  new Trait("female", ["black lipstick", "earring", "mohawk dark"]),
  //6593"]),

  new Trait("male", ["luxurious beard", "purple hair"]),
  //6594"]),

  new Trait("male", ["knitted cap", "nerd glasses", "shadow beard"]),
  //6595"]),

  new Trait("male", ["bandana", "classic shades", "gold chain"]),
  //6596"]),

  new Trait("male", ["cap", "handlebars", "horned rim glasses"]),
  //6597"]),

  new Trait("female", ["big shades", "black lipstick", "straight hair"]),
  //6598"]),

  new Trait("male", ["earring", "handlebars", "police cap"]),
  //6599"]),

  new Trait("male", [
    "cigarette",
    "classic shades",
    "do-rag",
    "luxurious beard",
  ]),
  //6600"]),

  new Trait("male", ["front beard", "horned rim glasses", "police cap"]),
  //6601"]),

  new Trait("male", ["mohawk", "nerd glasses", "rosy cheeks", "shadow beard"]),
  //6602"]),

  new Trait("female", ["cigarette", "headband"]),
  //6603"]),

  new Trait("male", ["peak spike", "vape"]),
  //6604"]),

  new Trait("male", ["horned rim glasses", "mohawk", "shadow beard"]),
  //6605"]),

  new Trait("female", ["black lipstick", "blue eye shadow", "messy hair"]),
  //6606"]),

  new Trait("male", ["cowboy hat", "front beard dark"]),
  //6607"]),

  new Trait("female", ["black lipstick", "mohawk dark", "purple eye shadow"]),
  //6608"]),

  new Trait("male", ["cigarette", "classic shades", "crazy hair", "earring"]),
  //6609"]),

  new Trait("male", ["messy hair", "shadow beard"]),
  //6610"]),

  new Trait("male", ["cap forward", "regular shades", "silver chain", "vape"]),
  //6611"]),

  new Trait("female", ["hot lipstick", "tassle hat", "vr"]),
  //6612"]),

  new Trait("female", ["earring", "straight hair blonde", "vr"]),
  //6613"]),

  new Trait("male", ["frumpy hair", "goat", "nerd glasses"]),
  //6614"]),

  new Trait("male", ["big beard", "mohawk thin"]),
  //6615"]),

  new Trait("male", ["mohawk", "normal beard"]),
  //6616"]),

  new Trait("male", ["clown eyes blue", "top hat"]),
  //6617"]),

  new Trait("female", [
    "horned rim glasses",
    "purple lipstick",
    "straight hair",
  ]),
  //6618"]),

  new Trait("male", ["hoodie", "silver chain"]),
  //6619"]),

  new Trait("female", ["eye mask", "tassle hat"]),
  //6620"]),

  new Trait("female", ["cigarette", "hot lipstick", "tassle hat"]),
  //6621"]),

  new Trait("male", ["buck teeth", "earring", "shaved head"]),
  //6622"]),

  new Trait("male", ["big shades", "cap", "muttonchops"]),
  //6623"]),

  new Trait("male", ["horned rim glasses", "messy hair", "normal beard"]),
  //6624"]),

  new Trait("female", ["3d glasses", "straight hair"]),
  //6625"]),

  new Trait("female", ["earring", "purple eye shadow", "tassle hat"]),
  //6626"]),

  new Trait("female", ["cigarette", "classic shades", "mole", "wild hair"]),
  //6627"]),

  new Trait("male", ["crazy hair", "vape"]),
  //6628"]),

  new Trait("female", ["black lipstick", "welding goggles", "wild blonde"]),
  //6629"]),

  new Trait("male", ["headband", "nerd glasses"]),
  //6630"]),

  new Trait("female", ["half shaved", "hot lipstick", "purple eye shadow"]),
  //6631"]),

  new Trait("male", ["peak spike", "smile"]),
  //6632"]),

  new Trait("male", ["3d glasses", "earring", "smile", "stringy hair"]),
  //6633"]),

  new Trait("male", ["3d glasses", "cigarette", "earring", "hoodie"]),
  //6634"]),

  new Trait("male", ["cap forward", "front beard", "horned rim glasses"]),
  //6635"]),

  new Trait("male", ["earring", "mohawk thin", "mole"]),
  //6636"]),

  new Trait("female", ["earring", "hot lipstick", "messy hair"]),
  //6637"]),

  new Trait("female", ["blonde bob", "clown eyes blue", "silver chain"]),
  //6638"]),

  new Trait("male", ["bandana", "muttonchops", "spots"]),
  //6639"]),

  new Trait("female", ["cap", "clown eyes blue", "earring"]),
  //6640"]),

  new Trait("male", ["earring", "front beard", "mohawk thin"]),
  //6641"]),

  new Trait("male", ["big shades", "crazy hair", "normal beard black"]),
  //6642"]),

  new Trait("male", ["cigarette", "shaved head"]),
  //6643"]),

  new Trait("male", [
    "earring",
    "eye mask",
    "mohawk dark",
    "normal beard black",
  ]),
  //6644"]),

  new Trait("male", ["crazy hair", "front beard", "vape"]),
  //6645"]),

  new Trait("male", ["eye patch", "frumpy hair", "handlebars"]),
  //6646"]),

  new Trait("male", ["earring", "eye patch", "front beard", "messy hair"]),
  //6647"]),

  new Trait("male", ["goat", "top hat"]),
  //6648"]),

  new Trait("zombie", ["crazy hair", "front beard dark"]),
  //6649"]),

  new Trait("male", ["cap forward", "goat", "small shades"]),
  //6650"]),

  new Trait("female", ["half shaved", "vr"]),
  //6651"]),

  new Trait("male", ["frown", "messy hair"]),
  //6652"]),

  new Trait("male", ["earring", "eye patch", "wild hair"]),
  //6653"]),

  new Trait("male", ["bandana", "front beard dark", "regular shades"]),
  //6654"]),

  new Trait("male", ["do-rag", "frown", "horned rim glasses"]),
  //6655"]),

  new Trait("male", ["eye mask", "police cap"]),
  //6656"]),

  new Trait("male", ["frown", "headband"]),
  //6657"]),

  new Trait("male", ["earring", "vampire hair"]),
  //6658"]),

  new Trait("male", ["mohawk dark", "mustache"]),
  //6659"]),

  new Trait("male", ["chinstrap", "earring", "mohawk thin", "pipe"]),
  //6660"]),

  new Trait("male", ["smile", "wild hair"]),
  //6661"]),

  new Trait("female", ["clown eyes blue", "purple lipstick", "stringy hair"]),
  //6662"]),

  new Trait("female", ["half shaved", "mole", "welding goggles"]),
  //6663"]),

  new Trait("female", ["cigarette", "knitted cap"]),
  //6664"]),

  new Trait("female", ["black lipstick", "earring", "eye mask", "tassle hat"]),
  //6665"]),

  new Trait("female", [
    "black lipstick",
    "clown eyes blue",
    "earring",
    "orange side",
  ]),
  //6666"]),

  new Trait("female", [
    "earring",
    "gold chain",
    "nerd glasses",
    "purple lipstick",
    "straight hair dark",
  ]),
  //6667"]),

  new Trait("female", ["black lipstick", "dark hair", "horned rim glasses"]),
  //6668"]),

  new Trait("male", ["front beard", "mole", "police cap", "vr"]),
  //6669"]),

  new Trait("male", ["cigarette", "hoodie"]),
  //6670"]),

  new Trait("male", ["earring", "normal beard black", "shaved head"]),
  //6671"]),

  new Trait("male", ["crazy hair", "regular shades"]),
  //6672"]),

  new Trait("male", ["shaved head", "small shades", "smile"]),
  //6673"]),

  new Trait("female", [
    "black lipstick",
    "earring",
    "green eye shadow",
    "orange side",
  ]),
  //6674"]),

  new Trait("male", ["chinstrap", "headband", "regular shades"]),
  //6675"]),

  new Trait("male", ["mohawk thin", "silver chain"]),
  //6676"]),

  new Trait("male", ["cap forward", "chinstrap", "gold chain"]),
  //6677"]),

  new Trait("female", ["dark hair", "horned rim glasses", "purple lipstick"]),
  //6678"]),

  new Trait("male", ["chinstrap", "eye patch", "stringy hair"]),
  //6679"]),

  new Trait("male", ["cigarette", "luxurious beard", "police cap"]),
  //6680"]),

  new Trait("female", ["clown eyes green"]),
  //6681"]),

  new Trait("male", ["cigarette", "frown", "headband"]),
  //6682"]),

  new Trait("male", ["handlebars", "shaved head"]),
  //6683"]),

  new Trait("male", ["big shades", "purple hair"]),
  //6684"]),

  new Trait("male", ["bandana", "clown eyes blue"]),
  //6685"]),

  new Trait("female", ["clown eyes green", "knitted cap"]),
  //6686"]),

  new Trait("male", ["big shades", "gold chain", "police cap"]),
  //6687"]),

  new Trait("female", ["green eye shadow", "knitted cap"]),
  //6688"]),

  new Trait("male", ["bandana", "earring", "front beard dark"]),
  //6689"]),

  new Trait("female", ["black lipstick", "cigarette", "straight hair dark"]),
  //6690"]),

  new Trait("male", [
    "earring",
    "front beard",
    "horned rim glasses",
    "knitted cap",
  ]),
  //6691"]),

  new Trait("male", ["cigarette", "mohawk"]),
  //6692"]),

  new Trait("male", [
    "classic shades",
    "earring",
    "luxurious beard",
    "purple hair",
  ]),
  //6693"]),

  new Trait("male", ["buck teeth", "luxurious beard", "shaved head", "vape"]),
  //6694"]),

  new Trait("female", ["big shades", "headband"]),
  //6695"]),

  new Trait("female", ["crazy hair", "green eye shadow", "purple lipstick"]),
  //6696"]),

  new Trait("male", [
    "cigarette",
    "front beard",
    "horned rim glasses",
    "messy hair",
  ]),
  //6697"]),

  new Trait("female", ["clown eyes green", "headband", "hot lipstick"]),
  //6698"]),

  new Trait("female", ["blue eye shadow", "purple lipstick", "wild hair"]),
  //6699"]),

  new Trait("male", ["big beard", "mohawk thin", "mole"]),
  //6700"]),

  new Trait("male", ["medical mask", "top hat"]),
  //6701"]),

  new Trait("male", ["big shades", "knitted cap"]),
  //6702"]),

  new Trait("female", [
    "black lipstick",
    "blonde bob",
    "green eye shadow",
    "mole",
  ]),
  //6703"]),

  new Trait("zombie", ["cigarette", "earring", "rosy cheeks"]),
  //6704"]),

  new Trait("male", [
    "earring",
    "regular shades",
    "shadow beard",
    "stringy hair",
  ]),
  //6705"]),

  new Trait("female", ["spots", "wild blonde"]),
  //6706"]),

  new Trait("female", ["pigtails", "purple eye shadow"]),
  //6707"]),

  new Trait("female", ["black lipstick", "regular shades", "wild white hair"]),
  //6708"]),

  new Trait("male", ["shadow beard", "small shades", "stringy hair"]),
  //6709"]),

  new Trait("female", ["hot lipstick", "mohawk", "mole"]),
  //6710"]),

  new Trait("female", ["3d glasses", "blonde bob", "rosy cheeks"]),
  //6711"]),

  new Trait("female", ["clown nose", "horned rim glasses", "wild hair"]),
  //6712"]),

  new Trait("male", ["big shades", "shaved head"]),
  //6713"]),

  new Trait("female", ["blonde short", "regular shades"]),
  //6714"]),

  new Trait("male", ["chinstrap", "nerd glasses", "peak spike", "pipe"]),
  //6715"]),

  new Trait("female", ["bandana", "big shades", "earring"]),
  //6716"]),

  new Trait("male", ["smile", "stringy hair"]),
  //6717"]),

  new Trait("female", [
    "crazy hair",
    "earring",
    "purple eye shadow",
    "purple lipstick",
  ]),
  //6718"]),

  new Trait("male", ["cowboy hat", "goat"]),
  //6719"]),

  new Trait("female", ["cigarette", "earring", "pilot helmet"]),
  //6720"]),

  new Trait("male", ["hoodie", "smile"]),
  //6721"]),

  new Trait("male", ["nerd glasses", "stringy hair"]),
  //6722"]),

  new Trait("female", ["clown nose", "green eye shadow", "wild blonde"]),
  //6723"]),

  new Trait("male", ["earring", "frown", "mohawk", "normal beard"]),
  //6724"]),

  new Trait("male", ["big shades", "earring", "stringy hair"]),
  //6725"]),

  new Trait("male", ["big shades", "do-rag", "rosy cheeks"]),
  //6726"]),

  new Trait("female", ["black lipstick", "nerd glasses", "pink with hat"]),
  //6727"]),

  new Trait("female", ["hot lipstick", "straight hair dark"]),
  //6728"]),

  new Trait("male", ["bandana", "goat", "pipe", "small shades"]),
  //6729"]),

  new Trait("male", [
    "horned rim glasses",
    "mole",
    "shaved head",
    "silver chain",
  ]),
  //6730"]),

  new Trait("female", ["mole", "pink with hat", "purple lipstick"]),
  //6731"]),

  new Trait("female", ["black lipstick", "blue eye shadow", "stringy hair"]),
  //6732"]),

  new Trait("female", ["black lipstick", "crazy hair", "mole", "silver chain"]),
  //6733"]),

  new Trait("female", ["earring", "purple lipstick", "red mohawk"]),
  //6734"]),

  new Trait("female", [
    "green eye shadow",
    "purple lipstick",
    "straight hair dark",
  ]),
  //6735"]),

  new Trait("male", ["crazy hair", "regular shades"]),
  //6736"]),

  new Trait("male", ["silver chain", "wild hair"]),
  //6737"]),

  new Trait("male", ["shaved head", "silver chain"]),
  //6738"]),

  new Trait("female", ["earring", "purple lipstick", "wild blonde"]),
  //6739"]),

  new Trait("male", ["clown hair green", "clown nose", "luxurious beard"]),
  //6740"]),

  new Trait("male", ["mohawk thin", "pipe"]),
  //6741"]),

  new Trait("male", ["cigarette", "clown hair green", "shadow beard"]),
  //6742"]),

  new Trait("male", ["do-rag", "eye mask"]),
  //6743"]),

  new Trait("male", ["headband", "normal beard black", "small shades"]),
  //6744"]),

  new Trait("male", ["earring", "eye mask", "shaved head"]),
  //6745"]),

  new Trait("male", ["classic shades", "mohawk dark", "shadow beard"]),
  //6746"]),

  new Trait("male", ["cowboy hat", "nerd glasses"]),
  //6747"]),

  new Trait("male", ["cap", "eye mask"]),
  //6748"]),

  new Trait("male", ["bandana", "big shades", "shadow beard"]),
  //6749"]),

  new Trait("male", ["eye patch", "front beard", "stringy hair"]),
  //6750"]),

  new Trait("male", ["cap", "eye mask"]),
  //6751"]),

  new Trait("female", [
    "green eye shadow",
    "hot lipstick",
    "straight hair blonde",
  ]),
  //6752"]),

  new Trait("female", [
    "blue eye shadow",
    "earring",
    "hot lipstick",
    "wild white hair",
  ]),
  //6753"]),

  new Trait("female", ["dark hair", "eye patch"]),
  //6754"]),

  new Trait("male", ["do-rag", "mole", "regular shades"]),
  //6755"]),

  new Trait("male", ["3d glasses"]),
  //6756"]),

  new Trait("female", ["black lipstick", "crazy hair", "green eye shadow"]),
  //6757"]),

  new Trait("male", ["classic shades", "earring", "fedora", "shadow beard"]),
  //6758"]),

  new Trait("female", ["big shades", "earring", "orange side"]),
  //6759"]),

  new Trait("male", ["crazy hair", "earring", "medical mask", "mustache"]),
  //6760"]),

  new Trait("female", ["clown eyes green", "hot lipstick", "knitted cap"]),
  //6761"]),

  new Trait("female", ["cap", "purple eye shadow"]),
  //6762"]),

  new Trait("female", ["knitted cap", "purple eye shadow"]),
  //6763"]),

  new Trait("female", ["blue eye shadow", "hot lipstick", "tiara"]),
  //6764"]),

  new Trait("female", ["bandana", "earring", "purple lipstick"]),
  //6765"]),

  new Trait("female", ["cap", "vr"]),
  //6766"]),

  new Trait("female", ["eye patch", "purple lipstick", "red mohawk"]),
  //6767"]),

  new Trait("female", ["classic shades", "tassle hat"]),
  //6768"]),

  new Trait("female", ["hot lipstick"]),
  //6769"]),

  new Trait("female", ["black lipstick", "straight hair", "vr"]),
  //6770"]),

  new Trait("male", ["big shades", "frumpy hair", "silver chain"]),
  //6771"]),

  new Trait("male", ["earring", "front beard dark", "mohawk"]),
  //6772"]),

  new Trait("male", ["cap", "regular shades"]),
  //6773"]),

  new Trait("male", ["bandana", "pipe"]),
  //6774"]),

  new Trait("male", ["chinstrap", "mohawk thin", "silver chain"]),
  //6775"]),

  new Trait("female", ["clown eyes blue", "dark hair", "purple lipstick"]),
  //6776"]),

  new Trait("female", ["clown eyes green", "wild hair"]),
  //6777"]),

  new Trait("male", ["big shades", "earring", "purple hair"]),
  //6778"]),

  new Trait("female", ["blue eye shadow", "hot lipstick", "pink with hat"]),
  //6779"]),

  new Trait("female", ["earring", "pipe", "wild hair"]),
  //6780"]),

  new Trait("male", ["clown hair green"]),
  //6781"]),

  new Trait("male", ["eye patch", "headband"]),
  //6782"]),

  new Trait("male", ["earring", "handlebars", "wild hair"]),
  //6783"]),

  new Trait("zombie", ["bandana", "cigarette", "frown"]),
  //6784"]),

  new Trait("male", ["eye patch", "peak spike"]),
  //6785"]),

  new Trait("male", ["chinstrap", "earring", "fedora", "medical mask"]),
  //6786"]),

  new Trait("male", ["cap", "earring", "regular shades"]),
  //6787"]),

  new Trait("male", ["big beard", "earring", "stringy hair"]),
  //6788"]),

  new Trait("male", ["big shades", "cigarette", "wild hair"]),
  //6789"]),

  new Trait("male", ["earring", "goat", "messy hair"]),
  //6790"]),

  new Trait("female", ["clown eyes blue", "knitted cap"]),
  //6791"]),

  new Trait("male", ["frumpy hair", "medical mask"]),
  //6792"]),

  new Trait("female", ["cigarette", "earring", "orange side"]),
  //6793"]),

  new Trait("female", ["choker", "mohawk dark", "spots"]),
  //6794"]),

  new Trait("male", [
    "clown nose",
    "frown",
    "goat",
    "messy hair",
    "silver chain",
  ]),
  //6795"]),

  new Trait("female", [
    "pink with hat",
    "purple eye shadow",
    "purple lipstick",
  ]),
  //6796"]),

  new Trait("female", ["blonde short", "nerd glasses"]),
  //6797"]),

  new Trait("male", ["cap", "classic shades"]),
  //6798"]),

  new Trait("male", ["cigarette", "crazy hair", "goat"]),
  //6799"]),

  new Trait("male", ["eye patch", "pipe", "purple hair"]),
  //6800"]),

  new Trait("female", ["purple lipstick"]),
  //6801"]),

  new Trait("male", ["clown nose", "fedora", "goat"]),
  //6802"]),

  new Trait("male", ["earring", "goat", "knitted cap"]),
  //6803"]),

  new Trait("female", ["regular shades", "stringy hair"]),
  //6804"]),

  new Trait("male", ["cigarette", "police cap"]),
  //6805"]),

  new Trait("female", ["cap", "classic shades"]),
  //6806"]),

  new Trait("female", ["clown eyes green", "pink with hat", "purple lipstick"]),
  //6807"]),

  new Trait("female", ["black lipstick", "dark hair", "vr"]),
  //6808"]),

  new Trait("male", ["big beard", "horned rim glasses", "peak spike"]),
  //6809"]),

  new Trait("female", ["horned rim glasses", "purple lipstick", "wild hair"]),
  //6810"]),

  new Trait("female", ["clown eyes green", "crazy hair", "mole"]),
  //6811"]),

  new Trait("female", ["blonde short", "purple eye shadow"]),
  //6812"]),

  new Trait("male", ["eye mask", "messy hair"]),
  //6813"]),

  new Trait("female", ["clown eyes blue", "earring", "spots", "wild blonde"]),
  //6814"]),

  new Trait("male", ["headband", "mustache", "regular shades"]),
  //6815"]),

  new Trait("female", ["blonde bob", "clown eyes blue", "hot lipstick"]),
  //6816"]),

  new Trait("female", ["pilot helmet", "purple lipstick", "vape"]),
  //6817"]),

  new Trait("male", ["do-rag", "vr"]),
  //6818"]),

  new Trait("male", ["buck teeth", "cap", "front beard dark"]),
  //6819"]),

  new Trait("male", ["chinstrap", "earring", "wild hair"]),
  //6820"]),

  new Trait("female", ["crazy hair", "earring", "purple lipstick"]),
  //6821"]),

  new Trait("female", ["eye mask", "half shaved", "purple lipstick"]),
  //6822"]),

  new Trait("female", ["earring", "horned rim glasses"]),
  //6823"]),

  new Trait("female", ["black lipstick", "classic shades", "frumpy hair"]),
  //6824"]),

  new Trait("female", ["knitted cap", "purple eye shadow"]),
  //6825"]),

  new Trait("male", ["do-rag", "pipe", "small shades"]),
  //6826"]),

  new Trait("male", ["big shades", "earring", "handlebars", "mohawk"]),
  //6827"]),

  new Trait("male", ["eye patch", "handlebars", "peak spike"]),
  //6828"]),

  new Trait("male", ["big beard", "do-rag"]),
  //6829"]),

  new Trait("male", ["eye patch", "front beard", "peak spike"]),
  //6830"]),

  new Trait("female", ["clown eyes green", "wild hair"]),
  //6831"]),

  new Trait("male", ["headband", "spots"]),
  //6832"]),

  new Trait("male", ["earring", "headband", "vape"]),
  //6833"]),

  new Trait("female", ["dark hair", "pipe", "purple eye shadow"]),
  //6834"]),

  new Trait("male", ["horned rim glasses", "normal beard black"]),
  //6835"]),

  new Trait("female", [
    "blue eye shadow",
    "hot lipstick",
    "mole",
    "straight hair blonde",
  ]),
  //6836"]),

  new Trait("male", ["cap", "earring", "eye mask"]),
  //6837"]),

  new Trait("male", [
    "cigarette",
    "eye patch",
    "knitted cap",
    "luxurious beard",
  ]),
  //6838"]),

  new Trait("male", ["earring", "fedora", "medical mask"]),
  //6839"]),

  new Trait("female", ["cigarette", "purple lipstick", "wild white hair"]),
  //6840"]),

  new Trait("male", ["do-rag", "earring", "pipe"]),
  //6841"]),

  new Trait("female", ["purple lipstick", "tiara"]),
  //6842"]),

  new Trait("male", ["cigarette", "mohawk dark", "regular shades"]),
  //6843"]),

  new Trait("female", ["earring", "pigtails", "purple lipstick"]),
  //6844"]),

  new Trait("female", ["earring", "knitted cap", "purple eye shadow"]),
  //6845"]),

  new Trait("male", ["earring", "horned rim glasses", "mohawk thin"]),
  //6846"]),

  new Trait("male", ["handlebars", "police cap"]),
  //6847"]),

  new Trait("female", [
    "bandana",
    "earring",
    "hot lipstick",
    "purple eye shadow",
  ]),
  //6848"]),

  new Trait("male", ["do-rag", "nerd glasses", "normal beard"]),
  //6849"]),

  new Trait("male", ["mohawk", "regular shades", "shadow beard"]),
  //6850"]),

  new Trait("male", ["horned rim glasses", "police cap"]),
  //6851"]),

  new Trait("male", [
    "clown eyes blue",
    "earring",
    "frumpy hair",
    "mole",
    "shadow beard",
  ]),
  //6852"]),

  new Trait("male", ["eye patch", "fedora", "front beard dark"]),
  //6853"]),

  new Trait("female", ["horned rim glasses", "mole", "wild hair"]),
  //6854"]),

  new Trait("female", ["blonde short", "clown eyes blue"]),
  //6855"]),

  new Trait("female", ["cigarette", "pilot helmet", "purple lipstick"]),
  //6856"]),

  new Trait("male", ["earring", "eye patch", "knitted cap"]),
  //6857"]),

  new Trait("female", ["blonde bob", "pipe"]),
  //6858"]),

  new Trait("female", [
    "blonde short",
    "earring",
    "green eye shadow",
    "hot lipstick",
  ]),
  //6859"]),

  new Trait("female", ["black lipstick", "dark hair", "eye patch"]),
  //6860"]),

  new Trait("female", ["big shades", "earring", "mohawk thin"]),
  //6861"]),

  new Trait("female", ["pink with hat", "regular shades"]),
  //6862"]),

  new Trait("female", ["cigarette", "hot lipstick", "red mohawk"]),
  //6863"]),

  new Trait("female", ["mole"]),
  //6864"]),

  new Trait("male", ["cap", "goat"]),
  //6865"]),

  new Trait("male", ["mohawk thin", "normal beard black", "small shades"]),
  //6866"]),

  new Trait("male", ["fedora", "muttonchops", "vr"]),
  //6867"]),

  new Trait("female", ["green eye shadow", "headband", "hot lipstick"]),
  //6868"]),

  new Trait("male", ["buck teeth", "cap forward", "classic shades"]),
  //6869"]),

  new Trait("female", ["dark hair", "gold chain"]),
  //6870"]),

  new Trait("male", ["bandana", "buck teeth", "nerd glasses", "pipe"]),
  //6871"]),

  new Trait("female", ["bandana", "black lipstick", "clown eyes blue"]),
  //6872"]),

  new Trait("male", ["cap forward", "horned rim glasses", "vape"]),
  //6873"]),

  new Trait("male", ["eye mask", "hoodie", "shadow beard"]),
  //6874"]),

  new Trait("female", ["orange side", "purple eye shadow"]),
  //6875"]),

  new Trait("male", ["buck teeth", "vampire hair"]),
  //6876"]),

  new Trait("male", ["classic shades", "wild hair"]),
  //6877"]),

  new Trait("male", ["bandana", "mole"]),
  //6878"]),

  new Trait("male", ["bandana", "big beard", "clown eyes blue"]),
  //6879"]),

  new Trait("female", ["crazy hair", "hot lipstick", "mole", "nerd glasses"]),
  //6880"]),

  new Trait("female", ["blue eye shadow", "tassle hat"]),
  //6881"]),

  new Trait("female", ["black lipstick", "frumpy hair", "green eye shadow"]),
  //6882"]),

  new Trait("male", ["classic shades", "do-rag", "earring", "mustache"]),
  //6883"]),

  new Trait("female", ["knitted cap", "mole", "purple eye shadow"]),
  //6884"]),

  new Trait("female", ["eye patch", "red mohawk"]),
  //6885"]),

  new Trait("male", ["earring", "headband", "regular shades", "silver chain"]),
  //6886"]),

  new Trait("male", ["big shades", "mohawk thin", "muttonchops"]),
  //6887"]),

  new Trait("male", ["horned rim glasses", "silver chain", "stringy hair"]),
  //6888"]),

  new Trait("male", ["cowboy hat", "earring", "shadow beard"]),
  //6889"]),

  new Trait("female", ["blonde short", "clown nose"]),
  //6890"]),

  new Trait("male", ["cowboy hat", "front beard"]),
  //6891"]),

  new Trait("male", ["big shades", "clown nose", "knitted cap"]),
  //6892"]),

  new Trait("female", ["black lipstick", "pipe", "wild white hair"]),
  //6893"]),

  new Trait("male", ["gold chain", "knitted cap", "small shades"]),
  //6894"]),

  new Trait("female", ["big shades", "black lipstick", "wild blonde"]),
  //6895"]),

  new Trait("female", [
    "bandana",
    "earring",
    "purple eye shadow",
    "purple lipstick",
  ]),
  //6896"]),

  new Trait("female", [
    "clown nose",
    "green eye shadow",
    "hot lipstick",
    "mohawk dark",
  ]),
  //6897"]),

  new Trait("male", ["classic shades", "mohawk", "smile"]),
  //6898"]),

  new Trait("male", ["handlebars", "horned rim glasses", "mohawk dark"]),
  //6899"]),

  new Trait("female", ["cigarette", "crazy hair", "purple eye shadow"]),
  //6900"]),

  new Trait("male", ["normal beard", "stringy hair"]),
  //6901"]),

  new Trait("female", ["black lipstick", "blue eye shadow", "tassle hat"]),
  //6902"]),

  new Trait("female", ["eye mask", "gold chain", "stringy hair"]),
  //6903"]),

  new Trait("female", ["dark hair", "eye mask", "hot lipstick"]),
  //6904"]),

  new Trait("male", ["big shades", "headband"]),
  //6905"]),

  new Trait("male", ["fedora", "mustache", "regular shades"]),
  //6906"]),

  new Trait("male", ["eye mask", "knitted cap", "mustache"]),
  //6907"]),

  new Trait("male", ["cigarette", "front beard dark", "mohawk"]),
  //6908"]),

  new Trait("female", ["cigarette", "dark hair", "mole"]),
  //6909"]),

  new Trait("female", ["cigarette", "crazy hair", "earring", "hot lipstick"]),
  //6910"]),

  new Trait("male", ["cigarette", "frumpy hair", "regular shades"]),
  //6911"]),

  new Trait("male", ["hoodie", "normal beard black", "regular shades"]),
  //6912"]),

  new Trait("male", ["eye patch", "stringy hair"]),
  //6913"]),

  new Trait("male", ["cigarette", "top hat"]),
  //6914"]),

  new Trait("ape", ["cap", "earring", "eye patch"]),
  //6915"]),

  new Trait("male", ["mohawk dark", "muttonchops"]),
  //6916"]),

  new Trait("male", ["mole", "shaved head", "small shades"]),
  //6917"]),

  new Trait("male", ["eye patch", "mohawk dark", "normal beard"]),
  //6918"]),

  new Trait("male", ["messy hair", "vape"]),
  //6919"]),

  new Trait("male", ["big shades", "front beard", "stringy hair"]),
  //6920"]),

  new Trait("male", ["front beard"]),
  //6921"]),

  new Trait("male", ["earring", "mustache", "small shades", "wild hair"]),
  //6922"]),

  new Trait("male", ["hoodie", "mustache", "small shades"]),
  //6923"]),

  new Trait("female", ["clown eyes blue", "hot lipstick", "pigtails"]),
  //6924"]),

  new Trait("male", ["do-rag", "earring", "regular shades"]),
  //6925"]),

  new Trait("male", ["cigarette", "eye patch", "hoodie", "muttonchops"]),
  //6926"]),

  new Trait("male", ["big shades", "goat", "messy hair"]),
  //6927"]),

  new Trait("male", ["cigarette", "earring", "police cap"]),
  //6928"]),

  new Trait("female", ["pipe", "red mohawk"]),
  //6929"]),

  new Trait("male", ["do-rag"]),
  //6930"]),

  new Trait("female", ["classic shades", "hot lipstick", "mohawk dark"]),
  //6931"]),

  new Trait("female", ["clown eyes blue", "earring", "tiara"]),
  //6932"]),

  new Trait("female", ["cigarette", "clown eyes green", "straight hair"]),
  //6933"]),

  new Trait("male", ["classic shades", "luxurious beard", "messy hair"]),
  //6934"]),

  new Trait("male", ["handlebars", "hoodie", "nerd glasses"]),
  //6935"]),

  new Trait("female", ["mohawk dark", "purple eye shadow", "purple lipstick"]),
  //6936"]),

  new Trait("male", ["normal beard black", "purple hair", "small shades"]),
  //6937"]),

  new Trait("male", ["clown eyes green", "knitted cap"]),
  //6938"]),

  new Trait("female", ["crazy hair", "purple lipstick", "regular shades"]),
  //6939"]),

  new Trait("male", ["front beard dark", "hoodie", "vr"]),
  //6940"]),

  new Trait("male", ["classic shades", "purple hair"]),
  //6941"]),

  new Trait("male", ["classic shades", "mohawk", "silver chain"]),
  //6942"]),

  new Trait("male", ["clown nose", "crazy hair", "mole", "pipe", "smile"]),
  //6943"]),

  new Trait("female", ["clown eyes blue", "earring", "half shaved", "vape"]),
  //6944"]),

  new Trait("female", [
    "green eye shadow",
    "headband",
    "mole",
    "purple lipstick",
  ]),
  //6945"]),

  new Trait("female", ["dark hair", "mole", "purple eye shadow"]),
  //6946"]),

  new Trait("male", ["3d glasses", "cap", "mustache"]),
  //6947"]),

  new Trait("male", ["cigarette", "earring"]),
  //6948"]),

  new Trait("male", [
    "cigarette",
    "classic shades",
    "gold chain",
    "purple hair",
    "shadow beard",
  ]),
  //6949"]),

  new Trait("female", ["black lipstick", "blonde short", "mole"]),
  //6950"]),

  new Trait("male", ["cap forward", "mole", "small shades"]),
  //6951"]),

  new Trait("male", ["goat", "top hat"]),
  //6952"]),

  new Trait("male", ["frown", "muttonchops", "shaved head"]),
  //6953"]),

  new Trait("female", ["blonde bob", "earring", "purple eye shadow"]),
  //6954"]),

  new Trait("male", ["3d glasses", "fedora", "pipe"]),
  //6955"]),

  new Trait("male", ["eye mask", "stringy hair"]),
  //6956"]),

  new Trait("male", [
    "3d glasses",
    "cigarette",
    "knitted cap",
    "mole",
    "normal beard black",
  ]),
  //6957"]),

  new Trait("female", ["cigarette", "hot lipstick", "wild white hair"]),
  //6958"]),

  new Trait("male", ["earring", "mohawk", "normal beard"]),
  //6959"]),

  new Trait("female", ["3d glasses", "stringy hair"]),
  //6960"]),

  new Trait("female", ["clown eyes green", "hot lipstick", "mohawk thin"]),
  //6961"]),

  new Trait("male", ["frumpy hair", "luxurious beard"]),
  //6962"]),

  new Trait("female", ["clown nose", "wild white hair"]),
  //6963"]),

  new Trait("male", ["cap", "eye patch", "front beard"]),
  //6964"]),

  new Trait("ape", ["fedora"]),
  //6965"]),

  new Trait("male", ["cigarette", "cowboy hat", "earring"]),
  //6966"]),

  new Trait("male", ["mohawk thin", "normal beard black"]),
  //6967"]),

  new Trait("male", ["headband", "spots", "vr"]),
  //6968"]),

  new Trait("male", ["earring", "regular shades", "wild hair"]),
  //6969"]),

  new Trait("female", ["classic shades", "crazy hair"]),
  //6970"]),

  new Trait("male", [
    "earring",
    "front beard",
    "headband",
    "regular shades",
    "spots",
  ]),
  //6971"]),

  new Trait("female", ["hot lipstick", "wild blonde"]),
  //6972"]),

  new Trait("male", ["bandana", "earring", "shadow beard"]),
  //6973"]),

  new Trait("male", ["big beard", "cap forward", "horned rim glasses"]),
  //6974"]),

  new Trait("male", ["big shades", "cigarette", "goat", "headband"]),
  //6975"]),

  new Trait("male", ["headband", "rosy cheeks", "small shades"]),
  //6976"]),

  new Trait("male", ["cap forward", "mustache"]),
  //6977"]),

  new Trait("male", ["3d glasses", "big beard", "frumpy hair"]),
  //6978"]),

  new Trait("male", ["big beard", "vr", "wild hair"]),
  //6979"]),

  new Trait("male", ["small shades", "stringy hair"]),
  //6980"]),

  new Trait("female", ["purple lipstick", "stringy hair"]),
  //6981"]),

  new Trait("male", ["big shades", "frumpy hair", "shadow beard"]),
  //6982"]),

  new Trait("male", ["cap forward", "earring", "horned rim glasses"]),
  //6983"]),

  new Trait("male", ["classic shades", "cowboy hat", "mustache"]),
  //6984"]),

  new Trait("male", ["mole", "shadow beard", "shaved head"]),
  //6985"]),

  new Trait("male", ["knitted cap", "mustache"]),
  //6986"]),

  new Trait("male", ["goat", "mole", "regular shades", "top hat"]),
  //6987"]),

  new Trait("female", ["blue eye shadow", "clown hair green"]),
  //6988"]),

  new Trait("male", ["front beard dark", "frumpy hair", "silver chain"]),
  //6989"]),

  new Trait("female", ["bandana", "earring", "purple lipstick", "vr"]),
  //6990"]),

  new Trait("female", ["big shades", "messy hair"]),
  //6991"]),

  new Trait("male", ["eye patch", "frown", "shadow beard", "stringy hair"]),
  //6992"]),

  new Trait("male", ["normal beard", "purple hair"]),
  //6993"]),

  new Trait("female", ["3d glasses", "pink with hat", "purple lipstick"]),
  //6994"]),

  new Trait("male", ["earring", "horned rim glasses", "stringy hair", "vape"]),
  //6995"]),

  new Trait("male", ["frumpy hair", "small shades", "smile"]),
  //6996"]),

  new Trait("female", ["earring", "regular shades", "straight hair dark"]),
  //6997"]),

  new Trait("female", ["blonde short", "clown nose"]),
  //6998"]),

  new Trait("male", ["earring", "peak spike", "regular shades"]),
  //6999"]),

  new Trait("male", ["classic shades", "messy hair"]),
  //7000"]),

  new Trait("male", ["chinstrap", "police cap", "regular shades", "vape"]),
  //7001"]),

  new Trait("male", ["cigarette", "knitted cap", "normal beard black"]),
  //7002"]),

  new Trait("male", ["mole", "mustache", "stringy hair"]),
  //7003"]),

  new Trait("male", ["front beard", "purple hair"]),
  //7004"]),

  new Trait("male", ["goat", "wild hair"]),
  //7005"]),

  new Trait("male", ["eye patch", "knitted cap", "normal beard black"]),
  //7006"]),

  new Trait("male", [
    "bandana",
    "earring",
    "horned rim glasses",
    "luxurious beard",
    "vape",
  ]),
  //7007"]),

  new Trait("male", ["cap forward", "shadow beard"]),
  //7008"]),

  new Trait("female", [
    "clown nose",
    "straight hair blonde",
    "welding goggles",
  ]),
  //7009"]),

  new Trait("female", ["black lipstick", "pipe"]),
  //7010"]),

  new Trait("female", ["black lipstick", "blonde bob", "clown nose"]),
  //7011"]),

  new Trait("male", ["fedora", "nerd glasses"]),
  //7012"]),

  new Trait("female", ["eye patch", "messy hair", "purple lipstick"]),
  //7013"]),

  new Trait("zombie", ["cigarette", "frumpy hair"]),
  //7014"]),

  new Trait("female", [
    "black lipstick",
    "blue eye shadow",
    "earring",
    "tassle hat",
    "vape",
  ]),
  //7015"]),

  new Trait("female", ["cap", "purple eye shadow"]),
  //7016"]),

  new Trait("male", ["big beard", "mohawk"]),
  //7017"]),

  new Trait("male", ["buck teeth", "earring", "purple hair"]),
  //7018"]),

  new Trait("male", [
    "classic shades",
    "clown nose",
    "normal beard black",
    "peak spike",
  ]),
  //7019"]),

  new Trait("female", ["black lipstick", "blonde short", "green eye shadow"]),
  //7020"]),

  new Trait("male", ["clown eyes green", "shaved head"]),
  //7021"]),

  new Trait("female", ["3d glasses", "mole", "wild hair"]),
  //7022"]),

  new Trait("male", ["3d glasses", "crazy hair", "goat"]),
  //7023"]),

  new Trait("female", ["eye patch", "knitted cap"]),
  //7024"]),

  new Trait("male", ["classic shades", "shaved head"]),
  //7025"]),

  new Trait("male", ["cowboy hat", "earring", "mustache"]),
  //7026"]),

  new Trait("female", ["cigarette", "vr", "wild blonde"]),
  //7027"]),

  new Trait("male", ["earring", "front beard dark", "peak spike"]),
  //7028"]),

  new Trait("male", ["cap forward", "front beard dark", "mole"]),
  //7029"]),

  new Trait("male", ["bandana", "big shades", "goat"]),
  //7030"]),

  new Trait("male", ["cowboy hat", "smile"]),
  //7031"]),

  new Trait("male", [
    "cigarette",
    "clown eyes blue",
    "mustache",
    "stringy hair",
  ]),
  //7032"]),

  new Trait("female", ["clown eyes green", "mohawk thin", "mole"]),
  //7033"]),

  new Trait("male", [
    "clown nose",
    "earring",
    "frumpy hair",
    "luxurious beard",
  ]),
  //7034"]),

  new Trait("male", ["cigarette", "goat", "vampire hair"]),
  //7035"]),

  new Trait("male", ["clown eyes blue", "earring", "fedora"]),
  //7036"]),

  new Trait("male", ["cowboy hat", "earring", "horned rim glasses"]),
  //7037"]),

  new Trait("female", ["black lipstick", "gold chain", "red mohawk"]),
  //7038"]),

  new Trait("female", [
    "crazy hair",
    "earring",
    "green eye shadow",
    "hot lipstick",
  ]),
  //7039"]),

  new Trait("male", ["bandana", "normal beard"]),
  //7040"]),

  new Trait("female", ["cap", "green eye shadow", "hot lipstick"]),
  //7041"]),

  new Trait("male", ["cigarette", "frown", "wild hair"]),
  //7042"]),

  new Trait("female", ["mohawk", "vape"]),
  //7043"]),

  new Trait("female", [
    "earring",
    "green eye shadow",
    "hot lipstick",
    "tassle hat",
  ]),
  //7044"]),

  new Trait("female", ["earring", "nerd glasses", "tassle hat"]),
  //7045"]),

  new Trait("male", ["earring", "gold chain", "nerd glasses", "stringy hair"]),
  //7046"]),

  new Trait("male", ["handlebars", "top hat"]),
  //7047"]),

  new Trait("male", ["messy hair", "spots", "vr"]),
  //7048"]),

  new Trait("male", ["clown eyes green", "mohawk thin"]),
  //7049"]),

  new Trait("male", ["do-rag", "luxurious beard", "vape"]),
  //7050"]),

  new Trait("male", ["mohawk thin", "smile"]),
  //7051"]),

  new Trait("female", [
    "hot lipstick",
    "regular shades",
    "straight hair blonde",
  ]),
  //7052"]),

  new Trait("male", ["cap", "eye mask"]),
  //7053"]),

  new Trait("male", ["goat", "regular shades"]),
  //7054"]),

  new Trait("male", [
    "medical mask",
    "mustache",
    "regular shades",
    "stringy hair",
  ]),
  //7055"]),

  new Trait("female", ["blonde short", "clown eyes blue", "purple lipstick"]),
  //7056"]),

  new Trait("female", ["clown nose", "hot lipstick", "pilot helmet"]),
  //7057"]),

  new Trait("male", ["headband", "nerd glasses"]),
  //7058"]),

  new Trait("female", ["classic shades", "red mohawk"]),
  //7059"]),

  new Trait("male", ["3d glasses", "crazy hair", "mole"]),
  //7060"]),

  new Trait("male", ["earring", "pipe", "police cap"]),
  //7061"]),

  new Trait("male", ["clown eyes green", "goat", "headband"]),
  //7062"]),

  new Trait("female", ["purple eye shadow", "wild blonde"]),
  //7063"]),

  new Trait("male", ["big beard", "cap", "eye mask"]),
  //7064"]),

  new Trait("male", ["big shades", "messy hair", "normal beard black", "vape"]),
  //7065"]),

  new Trait("female", ["crazy hair", "nerd glasses"]),
  //7066"]),

  new Trait("male", ["eye mask", "messy hair"]),
  //7067"]),

  new Trait("male", ["mohawk", "small shades"]),
  //7068"]),

  new Trait("female", ["earring", "nerd glasses", "stringy hair"]),
  //7069"]),

  new Trait("female", ["hot lipstick", "mole", "straight hair"]),
  //7070"]),

  new Trait("female", [
    "medical mask",
    "purple lipstick",
    "regular shades",
    "stringy hair",
  ]),
  //7071"]),

  new Trait("male", ["cigarette", "vampire hair"]),
  //7072"]),

  new Trait("female", ["mohawk", "purple lipstick"]),
  //7073"]),

  new Trait("female", ["mohawk thin", "welding goggles"]),
  //7074"]),

  new Trait("male", ["front beard", "police cap"]),
  //7075"]),

  new Trait("female", ["black lipstick", "choker", "earring", "mohawk"]),
  //7076"]),

  new Trait("female", ["cigarette", "classic shades", "knitted cap"]),
  //7077"]),

  new Trait("male", ["cigarette", "police cap"]),
  //7078"]),

  new Trait("female", ["purple lipstick", "red mohawk", "welding goggles"]),
  //7079"]),

  new Trait("male", ["frown", "knitted cap", "muttonchops"]),
  //7080"]),

  new Trait("female", ["frumpy hair", "horned rim glasses"]),
  //7081"]),

  new Trait("female", ["half shaved", "nerd glasses", "purple lipstick"]),
  //7082"]),

  new Trait("female", [
    "clown eyes green",
    "purple lipstick",
    "wild white hair",
  ]),
  //7083"]),

  new Trait("male", ["do-rag", "earring", "small shades"]),
  //7084"]),

  new Trait("female", [
    "big shades",
    "hot lipstick",
    "straight hair blonde",
    "vape",
  ]),
  //7085"]),

  new Trait("female", ["3d glasses", "black lipstick", "blonde bob"]),
  //7086"]),

  new Trait("female", ["rosy cheeks", "stringy hair"]),
  //7087"]),

  new Trait("male", ["cap forward", "horned rim glasses", "pipe"]),
  //7088"]),

  new Trait("male", ["front beard dark", "mohawk"]),
  //7089"]),

  new Trait("female", ["clown eyes blue", "earring", "pink with hat"]),
  //7090"]),

  new Trait("male", ["crazy hair", "front beard dark", "vape"]),
  //7091"]),

  new Trait("male", ["luxurious beard", "police cap"]),
  //7092"]),

  new Trait("female", ["cigarette", "earring", "pigtails", "purple lipstick"]),
  //7093"]),

  new Trait("male", ["cigarette", "messy hair", "muttonchops", "nerd glasses"]),
  //7094"]),

  new Trait("female", ["cigarette", "red mohawk"]),
  //7095"]),

  new Trait("male", ["chinstrap", "police cap"]),
  //7096"]),

  new Trait("male", ["big shades", "hoodie", "mole"]),
  //7097"]),

  new Trait("male", ["cap forward", "luxurious beard"]),
  //7098"]),

  new Trait("male", ["big beard", "vampire hair"]),
  //7099"]),

  new Trait("male", ["chinstrap", "do-rag", "nerd glasses"]),
  //7100"]),

  new Trait("female", ["green eye shadow", "half shaved"]),
  //7101"]),

  new Trait("female", ["crazy hair", "horned rim glasses"]),
  //7102"]),

  new Trait("female", ["crazy hair", "earring", "hot lipstick"]),
  //7103"]),

  new Trait("female", ["cigarette", "messy hair"]),
  //7104"]),

  new Trait("female", [
    "cigarette",
    "earring",
    "mohawk thin",
    "purple lipstick",
  ]),
  //7105"]),

  new Trait("male", ["classic shades", "mohawk thin", "pipe"]),
  //7106"]),

  new Trait("male", ["cap", "small shades"]),
  //7107"]),

  new Trait("female", ["purple eye shadow", "stringy hair"]),
  //7108"]),

  new Trait("male", ["crazy hair", "eye mask"]),
  //7109"]),

  new Trait("male", ["goat", "police cap", "small shades"]),
  //7110"]),

  new Trait("female", ["silver chain"]),
  //7111"]),

  new Trait("male", ["big beard", "shaved head"]),
  //7112"]),

  new Trait("male", ["front beard dark", "knitted cap"]),
  //7113"]),

  new Trait("female", ["blonde bob", "cigarette", "hot lipstick"]),
  //7114"]),

  new Trait("male", ["chinstrap", "frown", "mohawk dark"]),
  //7115"]),

  new Trait("female", ["blue eye shadow", "mohawk dark", "purple lipstick"]),
  //7116"]),

  new Trait("male", ["messy hair", "regular shades"]),
  //7117"]),

  new Trait("male", ["cap forward", "cigarette", "earring"]),
  //7118"]),

  new Trait("male", ["eye patch", "front beard", "wild hair"]),
  //7119"]),

  new Trait("male", ["handlebars", "peak spike", "small shades"]),
  //7120"]),

  new Trait("zombie", ["frumpy hair", "horned rim glasses"]),
  //7121"]),

  new Trait("female", [
    "cigarette",
    "eye patch",
    "headband",
    "purple lipstick",
  ]),
  //7122"]),

  new Trait("female", ["cigarette", "knitted cap", "silver chain"]),
  //7123"]),

  new Trait("male", ["cigarette", "peak spike"]),
  //7124"]),

  new Trait("female", [
    "clown eyes blue",
    "earring",
    "purple lipstick",
    "tassle hat",
  ]),
  //7125"]),

  new Trait("female", ["black lipstick", "cigarette", "messy hair"]),
  //7126"]),

  new Trait("zombie", ["bandana", "earring", "eye mask"]),
  //7127"]),

  new Trait("female", ["cigarette", "straight hair blonde"]),
  //7128"]),

  new Trait("male", ["clown eyes green", "goat", "hoodie"]),
  //7129"]),

  new Trait("male", ["frown", "shaved head"]),
  //7130"]),

  new Trait("female", [
    "blue eye shadow",
    "cigarette",
    "clown hair green",
    "purple lipstick",
  ]),
  //7131"]),

  new Trait("male", ["clown eyes green", "earring", "wild hair"]),
  //7132"]),

  new Trait("female", ["big shades", "blonde bob"]),
  //7133"]),

  new Trait("male", ["cigarette", "eye patch", "goat", "mohawk dark", "smile"]),
  //7134"]),

  new Trait("male", ["cap forward", "pipe"]),
  //7135"]),

  new Trait("female", ["crazy hair", "earring", "hot lipstick"]),
  //7136"]),

  new Trait("male", ["classic shades", "crazy hair", "earring", "mustache"]),
  //7137"]),

  new Trait("female", ["clown eyes blue", "purple lipstick", "tiara"]),
  //7138"]),

  new Trait("male", ["3d glasses", "earring", "shadow beard", "wild hair"]),
  //7139"]),

  new Trait("male", ["messy hair", "nerd glasses", "normal beard black"]),
  //7140"]),

  new Trait("female", ["cigarette", "earring", "half shaved", "nerd glasses"]),
  //7141"]),

  new Trait("female", ["clown hair green", "earring", "mole"]),
  //7142"]),

  new Trait("male", ["cigarette", "do-rag", "earring", "vr"]),
  //7143"]),

  new Trait("male", ["hoodie", "vape"]),
  //7144"]),

  new Trait("female", ["tassle hat", "vr"]),
  //7145"]),

  new Trait("male", ["cap", "muttonchops", "small shades"]),
  //7146"]),

  new Trait("male", ["mustache", "shaved head"]),
  //7147"]),

  new Trait("male", ["clown eyes blue", "crazy hair", "mustache"]),
  //7148"]),

  new Trait("male", ["big shades", "cap"]),
  //7149"]),

  new Trait("male", ["earring", "headband", "pipe"]),
  //7150"]),

  new Trait("male", ["big shades", "muttonchops", "stringy hair"]),
  //7151"]),

  new Trait("male", ["cowboy hat", "regular shades", "shadow beard"]),
  //7152"]),

  new Trait("female", ["hot lipstick", "mole", "regular shades", "tassle hat"]),
  //7153"]),

  new Trait("male", ["earring", "hoodie", "regular shades", "shadow beard"]),
  //7154"]),

  new Trait("female", ["black lipstick", "cigarette", "earring", "messy hair"]),
  //7155"]),

  new Trait("male", ["clown eyes green", "hoodie"]),
  //7156"]),

  new Trait("male", ["big shades", "do-rag", "earring"]),
  //7157"]),

  new Trait("male", [
    "clown eyes green",
    "earring",
    "luxurious beard",
    "purple hair",
  ]),
  //7158"]),

  new Trait("male", ["eye patch", "headband", "normal beard black"]),
  //7159"]),

  new Trait("male", ["messy hair", "mustache"]),
  //7160"]),

  new Trait("male", ["cap", "handlebars"]),
  //7161"]),

  new Trait("male", ["classic shades", "earring", "hoodie", "spots"]),
  //7162"]),

  new Trait("male", ["big beard", "fedora", "horned rim glasses", "vape"]),
  //7163"]),

  new Trait("male", ["earring", "fedora"]),
  //7164"]),

  new Trait("female", ["nerd glasses", "stringy hair"]),
  //7165"]),

  new Trait("male", ["peak spike", "smile"]),
  //7166"]),

  new Trait("male", ["3d glasses", "earring", "shadow beard", "shaved head"]),
  //7167"]),

  new Trait("male", ["3d glasses", "cap forward", "front beard"]),
  //7168"]),

  new Trait("female", ["mole", "straight hair blonde"]),
  //7169"]),

  new Trait("female", ["bandana", "hot lipstick", "regular shades", "vape"]),
  //7170"]),

  new Trait("male", ["handlebars", "hoodie", "pipe"]),
  //7171"]),

  new Trait("female", ["blue eye shadow", "earring", "mohawk dark"]),
  //7172"]),

  new Trait("male", ["3d glasses", "mohawk", "vape"]),
  //7173"]),

  new Trait("female", ["blue eye shadow", "cigarette", "pigtails"]),
  //7174"]),

  new Trait("male", ["big shades", "clown nose", "mohawk thin"]),
  //7175"]),

  new Trait("female", ["big shades", "black lipstick", "tassle hat"]),
  //7176"]),

  new Trait("male", ["horned rim glasses", "silver chain", "wild hair"]),
  //7177"]),

  new Trait("male", ["clown eyes blue", "earring", "mohawk thin"]),
  //7178"]),

  new Trait("male", ["earring", "messy hair", "shadow beard"]),
  //7179"]),

  new Trait("female", ["blonde bob", "earring", "eye mask"]),
  //7180"]),

  new Trait("male", ["chinstrap", "regular shades", "stringy hair"]),
  //7181"]),

  new Trait("male", [
    "earring",
    "frumpy hair",
    "gold chain",
    "horned rim glasses",
    "mole",
  ]),
  //7182"]),

  new Trait("female", ["cigarette", "knitted cap", "purple lipstick", "vr"]),
  //7183"]),

  new Trait("male", ["front beard", "headband", "small shades"]),
  //7184"]),

  new Trait("male", ["earring", "police cap", "rosy cheeks", "shadow beard"]),
  //7185"]),

  new Trait("male", ["cap", "mole", "shadow beard"]),
  //7186"]),

  new Trait("male", ["cap", "chinstrap", "earring", "horned rim glasses"]),
  //7187"]),

  new Trait("male", ["eye mask", "goat", "peak spike"]),
  //7188"]),

  new Trait("male", ["3d glasses", "do-rag", "earring", "normal beard black"]),
  //7189"]),

  new Trait("male", ["bandana", "eye patch", "mole", "smile"]),
  //7190"]),

  new Trait("ape", ["knitted cap", "nerd glasses"]),
  //7191"]),

  new Trait("male", ["bandana", "normal beard black"]),
  //7192"]),

  new Trait("male", ["cap", "clown eyes green"]),
  //7193"]),

  new Trait("male", ["horned rim glasses", "wild hair"]),
  //7194"]),

  new Trait("male", ["clown nose", "earring", "peak spike"]),
  //7195"]),

  new Trait("female", ["blonde bob", "cigarette", "green eye shadow"]),
  //7196"]),

  new Trait("male", ["earring", "gold chain", "mohawk thin", "vr"]),
  //7197"]),

  new Trait("male", [
    "classic shades",
    "medical mask",
    "smile",
    "vampire hair",
  ]),
  //7198"]),

  new Trait("male", ["medical mask", "police cap"]),
  //7199"]),

  new Trait("female", ["black lipstick", "mole", "wild hair"]),
  //7200"]),

  new Trait("male", ["cigarette", "normal beard black", "police cap", "smile"]),
  //7201"]),

  new Trait("male", ["mohawk", "normal beard black"]),
  //7202"]),

  new Trait("male", ["classic shades", "cowboy hat", "earring"]),
  //7203"]),

  new Trait("female", ["clown eyes green", "frumpy hair", "purple lipstick"]),
  //7204"]),

  new Trait("male", [
    "cap forward",
    "earring",
    "front beard",
    "horned rim glasses",
  ]),
  //7205"]),

  new Trait("male", ["fedora", "spots"]),
  //7206"]),

  new Trait("male", ["bandana", "chinstrap", "earring"]),
  //7207"]),

  new Trait("male", ["big beard", "mole", "stringy hair"]),
  //7208"]),

  new Trait("male", ["3d glasses", "crazy hair"]),
  //7209"]),

  new Trait("male", ["crazy hair", "mole", "nerd glasses"]),
  //7210"]),

  new Trait("female", [
    "3d glasses",
    "clown nose",
    "earring",
    "straight hair blonde",
  ]),
  //7211"]),

  new Trait("female", [
    "green eye shadow",
    "medical mask",
    "mohawk thin",
    "purple lipstick",
  ]),
  //7212"]),

  new Trait("male", ["big shades", "hoodie", "normal beard"]),
  //7213"]),

  new Trait("female", ["clown eyes blue", "messy hair"]),
  //7214"]),

  new Trait("male", ["earring", "fedora", "shadow beard"]),
  //7215"]),

  new Trait("female", ["green eye shadow", "hot lipstick", "wild white hair"]),
  //7216"]),

  new Trait("male", ["earring", "eye patch", "hoodie", "mustache"]),
  //7217"]),

  new Trait("female", ["bandana", "cigarette", "mole"]),
  //7218"]),

  new Trait("female", ["3d glasses", "choker", "earring", "half shaved"]),
  //7219"]),

  new Trait("male", ["big beard", "do-rag"]),
  //7220"]),

  new Trait("male", ["big beard", "do-rag", "horned rim glasses"]),
  //7221"]),

  new Trait("male", ["crazy hair", "nerd glasses"]),
  //7222"]),

  new Trait("male", ["earring", "small shades", "top hat"]),
  //7223"]),

  new Trait("male", ["mohawk", "smile", "vape"]),
  //7224"]),

  new Trait("male", ["earring", "frumpy hair", "nerd glasses"]),
  //7225"]),

  new Trait("male", [
    "big shades",
    "clown nose",
    "front beard dark",
    "knitted cap",
  ]),
  //7226"]),

  new Trait("male", ["front beard dark", "police cap"]),
  //7227"]),

  new Trait("female", ["black lipstick", "clown nose", "frumpy hair"]),
  //7228"]),

  new Trait("female", ["hot lipstick", "purple eye shadow", "wild white hair"]),
  //7229"]),

  new Trait("female", ["black lipstick", "eye mask", "mohawk dark"]),
  //7230"]),

  new Trait("male", ["classic shades", "crazy hair", "mole"]),
  //7231"]),

  new Trait("male", ["headband", "muttonchops"]),
  //7232"]),

  new Trait("male", ["cap forward", "earring", "muttonchops"]),
  //7233"]),

  new Trait("female", ["earring", "green eye shadow", "half shaved", "mole"]),
  //7234"]),

  new Trait("male", ["mustache"]),
  //7235"]),

  new Trait("male", [
    "earring",
    "gold chain",
    "normal beard black",
    "police cap",
  ]),
  //7236"]),

  new Trait("female", [
    "cigarette",
    "green eye shadow",
    "mohawk dark",
    "mole",
    "purple lipstick",
  ]),
  //7237"]),

  new Trait("male", ["mohawk", "mole", "shadow beard"]),
  //7238"]),

  new Trait("male", ["earring", "eye mask", "luxurious beard", "wild hair"]),
  //7239"]),

  new Trait("male", ["cigarette", "shadow beard", "vampire hair"]),
  //7240"]),

  new Trait("male", ["cigarette", "shaved head"]),
  //7241"]),

  new Trait("male", ["do-rag", "frown", "nerd glasses"]),
  //7242"]),

  new Trait("male", ["eye mask", "hoodie"]),
  //7243"]),

  new Trait("female", ["clown eyes green", "earring", "pigtails", "pipe"]),
  //7244"]),

  new Trait("male", [
    "earring",
    "messy hair",
    "regular shades",
    "shadow beard",
  ]),
  //7245"]),

  new Trait("male", ["bandana", "mustache"]),
  //7246"]),

  new Trait("male", ["3d glasses", "earring", "mohawk thin"]),
  //7247"]),

  new Trait("female", ["3d glasses", "black lipstick", "wild hair"]),
  //7248"]),

  new Trait("male", ["chinstrap", "cigarette", "cowboy hat", "small shades"]),
  //7249"]),

  new Trait("female", ["blue eye shadow", "hot lipstick", "red mohawk"]),
  //7250"]),

  new Trait("male", ["clown eyes green", "shaved head"]),
  //7251"]),

  new Trait("zombie", ["chinstrap", "crazy hair", "earring"]),
  //7252"]),

  new Trait("male", ["bandana", "frown"]),
  //7253"]),

  new Trait("male", ["small shades", "stringy hair"]),
  //7254"]),

  new Trait("male", ["bandana", "earring", "nerd glasses"]),
  //7255"]),

  new Trait("male", ["bandana", "chinstrap", "nerd glasses"]),
  //7256"]),

  new Trait("male", ["earring", "goat", "messy hair", "pipe", "silver chain"]),
  //7257"]),

  new Trait("female", ["hot lipstick", "wild white hair"]),
  //7258"]),

  new Trait("female", ["3d glasses", "knitted cap"]),
  //7259"]),

  new Trait("female", ["blue eye shadow", "earring", "wild white hair"]),
  //7260"]),

  new Trait("male", ["beanie", "earring", "normal beard"]),
  //7261"]),

  new Trait("male", ["3d glasses", "police cap"]),
  //7262"]),

  new Trait("male", ["fedora", "horned rim glasses"]),
  //7263"]),

  new Trait("male", ["classic shades", "earring", "headband"]),
  //7264"]),

  new Trait("male", ["front beard", "frumpy hair", "small shades"]),
  //7265"]),

  new Trait("female", ["blue eye shadow", "earring", "stringy hair"]),
  //7266"]),

  new Trait("male", ["big shades", "cap", "vape"]),
  //7267"]),

  new Trait("male", ["front beard", "frumpy hair", "regular shades"]),
  //7268"]),

  new Trait("female", ["classic shades", "purple lipstick", "wild blonde"]),
  //7269"]),

  new Trait("male", ["eye patch", "front beard", "frown", "knitted cap"]),
  //7270"]),

  new Trait("male", ["bandana", "chinstrap", "earring", "horned rim glasses"]),
  //7271"]),

  new Trait("female", ["green eye shadow", "hot lipstick", "wild blonde"]),
  //7272"]),

  new Trait("male", ["3d glasses", "cap", "smile"]),
  //7273"]),

  new Trait("male", ["earring", "frumpy hair", "horned rim glasses"]),
  //7274"]),

  new Trait("male", ["horned rim glasses", "purple hair"]),
  //7275"]),

  new Trait("male", ["messy hair", "mole"]),
  //7276"]),

  new Trait("male", ["cigarette", "do-rag", "regular shades", "smile"]),
  //7277"]),

  new Trait("male", ["clown eyes green", "crazy hair", "handlebars"]),
  //7278"]),

  new Trait("male", ["cap forward", "eye patch"]),
  //7279"]),

  new Trait("male", ["classic shades", "headband", "luxurious beard"]),
  //7280"]),

  new Trait("male", ["cigarette", "clown eyes blue", "mohawk thin"]),
  //7281"]),

  new Trait("male", ["big shades", "cigarette", "wild hair"]),
  //7282"]),

  new Trait("male", ["big shades", "earring", "mohawk"]),
  //7283"]),

  new Trait("male", ["earring", "eye mask", "mohawk", "pipe"]),
  //7284"]),

  new Trait("male", ["police cap", "regular shades"]),
  //7285"]),

  new Trait("male", ["mole", "regular shades", "vampire hair"]),
  //7286"]),

  new Trait("male", ["clown nose", "wild hair"]),
  //7287"]),

  new Trait("female", ["horned rim glasses", "wild white hair"]),
  //7288"]),

  new Trait("female", ["eye mask", "straight hair"]),
  //7289"]),

  new Trait("male", ["chinstrap", "earring", "horned rim glasses", "mohawk"]),
  //7290"]),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "earring",
    "green eye shadow",
    "mohawk thin",
  ]),
  //7291"]),

  new Trait("female", ["black lipstick", "blonde short", "earring"]),
  //7292"]),

  new Trait("male", ["classic shades", "fedora", "mole"]),
  //7293"]),

  new Trait("male", ["cigarette", "earring", "nerd glasses", "purple hair"]),
  //7294"]),

  new Trait("female", [
    "cigarette",
    "clown eyes blue",
    "mole",
    "purple lipstick",
    "red mohawk",
  ]),
  //7295"]),

  new Trait("female", [
    "black lipstick",
    "earring",
    "horned rim glasses",
    "straight hair",
  ]),
  //7296"]),

  new Trait("male", ["mohawk", "rosy cheeks"]),
  //7297"]),

  new Trait("male", ["bandana", "regular shades", "rosy cheeks"]),
  //7298"]),

  new Trait("female", ["bandana", "pipe", "purple lipstick"]),
  //7299"]),

  new Trait("female", ["cigarette", "earring", "headband"]),
  //7300"]),

  new Trait("female", [
    "earring",
    "purple eye shadow",
    "purple lipstick",
    "tassle hat",
  ]),
  //7301"]),

  new Trait("male", [
    "cigarette",
    "handlebars",
    "horned rim glasses",
    "peak spike",
  ]),
  //7302"]),

  new Trait("male", ["cigarette", "normal beard black", "peak spike"]),
  //7303"]),

  new Trait("female", [
    "bandana",
    "clown eyes blue",
    "mole",
    "purple lipstick",
  ]),
  //7304"]),

  new Trait("female", ["earring", "green eye shadow", "knitted cap"]),
  //7305"]),

  new Trait("female", ["cigarette", "half shaved"]),
  //7306"]),

  new Trait("male", ["horned rim glasses", "shadow beard", "wild hair"]),
  //7307"]),

  new Trait("male", ["chinstrap", "earring", "headband"]),
  //7308"]),

  new Trait("male", ["earring", "mole", "wild hair"]),
  //7309"]),

  new Trait("male", ["crazy hair", "earring", "front beard"]),
  //7310"]),

  new Trait("female", ["3d glasses", "purple lipstick", "tassle hat"]),
  //7311"]),

  new Trait("male", ["luxurious beard", "mohawk"]),
  //7312"]),

  new Trait("male", ["muttonchops", "stringy hair"]),
  //7313"]),

  new Trait("male", ["big shades", "crazy hair", "frown", "muttonchops"]),
  //7314"]),

  new Trait("male", ["frumpy hair", "horned rim glasses"]),
  //7315"]),

  new Trait("male", ["big beard", "earring", "mohawk thin"]),
  //7316"]),

  new Trait("male", ["earring", "horned rim glasses", "shaved head"]),
  //7317"]),

  new Trait("male", ["earring", "fedora", "front beard dark"]),
  //7318"]),

  new Trait("male", ["headband", "normal beard black"]),
  //7319"]),

  new Trait("male", ["cap forward", "cigarette", "horned rim glasses"]),
  //7320"]),

  new Trait("male", ["earring", "mohawk", "normal beard"]),
  //7321"]),

  new Trait("female", ["nerd glasses", "straight hair blonde"]),
  //7322"]),

  new Trait("male", ["goat", "headband"]),
  //7323"]),

  new Trait("male", ["cap forward", "cigarette", "handlebars"]),
  //7324"]),

  new Trait("female", ["black lipstick", "nerd glasses", "straight hair dark"]),
  //7325"]),

  new Trait("female", ["dark hair", "earring", "green eye shadow", "mole"]),
  //7326"]),

  new Trait("female", ["cap", "green eye shadow"]),
  //7327"]),

  new Trait("male", ["classic shades", "mustache", "purple hair"]),
  //7328"]),

  new Trait("male", ["normal beard black", "stringy hair"]),
  //7329"]),

  new Trait("male", ["big shades", "front beard dark", "knitted cap"]),
  //7330"]),

  new Trait("male", [
    "earring",
    "frown",
    "gold chain",
    "knitted cap",
    "luxurious beard",
  ]),
  //7331"]),

  new Trait("male", ["classic shades", "front beard", "knitted cap", "smile"]),
  //7332"]),

  new Trait("female", ["cigarette", "clown eyes blue", "messy hair"]),
  //7333"]),

  new Trait("male", [
    "bandana",
    "big shades",
    "cigarette",
    "earring",
    "shadow beard",
  ]),
  //7334"]),

  new Trait("male", ["eye patch", "knitted cap", "smile"]),
  //7335"]),

  new Trait("female", ["blonde short", "classic shades", "earring"]),
  //7336"]),

  new Trait("zombie", ["normal beard black", "peak spike"]),
  //7337"]),

  new Trait("female", ["earring", "hot lipstick", "pilot helmet"]),
  //7338"]),

  new Trait("male", ["cap", "clown eyes green", "earring", "goat"]),
  //7339"]),

  new Trait("male", ["mohawk", "normal beard", "silver chain"]),
  //7340"]),

  new Trait("male", ["clown eyes green", "front beard", "vampire hair"]),
  //7341"]),

  new Trait("female", ["choker", "dark hair", "green eye shadow"]),
  //7342"]),

  new Trait("female", [
    "black lipstick",
    "clown eyes green",
    "straight hair blonde",
  ]),
  //7343"]),

  new Trait("female", ["earring", "mohawk", "nerd glasses"]),
  //7344"]),

  new Trait("male", ["earring", "frown", "peak spike"]),
  //7345"]),

  new Trait("male", ["bandana", "cigarette", "regular shades"]),
  //7346"]),

  new Trait("male", ["earring", "eye mask", "mohawk thin"]),
  //7347"]),

  new Trait("female", ["earring", "half shaved", "purple lipstick", "vape"]),
  //7348"]),

  new Trait("male", ["front beard", "messy hair"]),
  //7349"]),

  new Trait("male", ["bandana", "clown nose"]),
  //7350"]),

  new Trait("male", ["fedora", "front beard dark"]),
  //7351"]),

  new Trait("female", ["black lipstick", "red mohawk", "welding goggles"]),
  //7352"]),

  new Trait("male", ["cigarette", "earring", "mustache", "stringy hair"]),
  //7353"]),

  new Trait("female", ["clown nose", "earring", "straight hair"]),
  //7354"]),

  new Trait("male", ["earring", "headband", "mole"]),
  //7355"]),

  new Trait("male", ["eye patch", "top hat"]),
  //7356"]),

  new Trait("male", ["3d glasses", "cigarette", "wild hair"]),
  //7357"]),

  new Trait("male", ["eye mask", "mohawk"]),
  //7358"]),

  new Trait("male", ["classic shades", "crazy hair"]),
  //7359"]),

  new Trait("male", ["classic shades", "hoodie", "muttonchops"]),
  //7360"]),

  new Trait("male", ["frumpy hair", "mustache", "pipe"]),
  //7361"]),

  new Trait("female", ["classic shades", "dark hair"]),
  //7362"]),

  new Trait("male", [
    "cap forward",
    "chinstrap",
    "cigarette",
    "earring",
    "horned rim glasses",
  ]),
  //7363"]),

  new Trait("male", ["big beard", "shaved head", "vape"]),
  //7364"]),

  new Trait("male", ["cowboy hat", "earring", "nerd glasses"]),
  //7365"]),

  new Trait("female", ["cigarette", "clown eyes blue", "straight hair blonde"]),
  //7366"]),

  new Trait("female", ["hot lipstick", "purple eye shadow", "wild blonde"]),
  //7367"]),

  new Trait("male", ["fedora", "front beard dark", "frown", "nerd glasses"]),
  //7368"]),

  new Trait("female", ["3d glasses", "dark hair"]),
  //7369"]),

  new Trait("male", ["eye mask", "headband", "vape"]),
  //7370"]),

  new Trait("female", ["black lipstick", "earring", "red mohawk"]),
  //7371"]),

  new Trait("male", ["3d glasses", "earring", "front beard dark", "headband"]),
  //7372"]),

  new Trait("female", ["clown eyes blue", "crazy hair"]),
  //7373"]),

  new Trait("male", ["cowboy hat", "earring", "normal beard"]),
  //7374"]),

  new Trait("male", ["eye mask", "frumpy hair", "muttonchops"]),
  //7375"]),

  new Trait("male", ["fedora", "shadow beard"]),
  //7376"]),

  new Trait("male", ["do-rag", "eye patch", "muttonchops"]),
  //7377"]),

  new Trait("female", ["purple lipstick", "regular shades", "wild white hair"]),
  //7378"]),

  new Trait("male", ["earring", "luxurious beard", "small shades"]),
  //7379"]),

  new Trait("female", [
    "black lipstick",
    "blue eye shadow",
    "straight hair dark",
  ]),
  //7380"]),

  new Trait("male", ["pipe", "wild hair"]),
  //7381"]),

  new Trait("male", ["cap", "small shades"]),
  //7382"]),

  new Trait("male", ["big shades", "earring"]),
  //7383"]),

  new Trait("male", [
    "classic shades",
    "earring",
    "luxurious beard",
    "shaved head",
  ]),
  //7384"]),

  new Trait("male", ["big shades", "shadow beard", "shaved head"]),
  //7385"]),

  new Trait("male", ["normal beard black", "small shades", "wild hair"]),
  //7386"]),

  new Trait("female", ["knitted cap", "purple lipstick", "regular shades"]),
  //7387"]),

  new Trait("male", ["mohawk thin", "shadow beard", "small shades"]),
  //7388"]),

  new Trait("male", ["big shades", "messy hair"]),
  //7389"]),

  new Trait("female", ["earring", "horned rim glasses", "mohawk thin"]),
  //7390"]),

  new Trait("female", ["black lipstick", "earring"]),
  //7391"]),

  new Trait("female", ["black lipstick", "earring", "stringy hair"]),
  //7392"]),

  new Trait("male", ["earring", "messy hair", "shadow beard", "vr"]),
  //7393"]),

  new Trait("female", ["bandana", "green eye shadow", "hot lipstick"]),
  //7394"]),

  new Trait("female", ["clown eyes blue", "clown hair green", "earring"]),
  //7395"]),

  new Trait("male", ["big beard", "clown nose"]),
  //7396"]),

  new Trait("female", ["hot lipstick", "pink with hat", "purple eye shadow"]),
  //7397"]),

  new Trait("female", ["clown hair green", "hot lipstick", "spots"]),
  //7398"]),

  new Trait("male", [
    "cigarette",
    "headband",
    "regular shades",
    "shadow beard",
  ]),
  //7399"]),

  new Trait("male", ["cap forward", "nerd glasses"]),
  //7400"]),

  new Trait("male", ["crazy hair", "frown"]),
  //7401"]),

  new Trait("male", ["cigarette", "mohawk dark"]),
  //7402"]),

  new Trait("male", ["hoodie", "vape", "vr"]),
  //7403"]),

  new Trait("male", ["cap forward", "goat"]),
  //7404"]),

  new Trait("male", ["knitted cap", "pipe", "shadow beard"]),
  //7405"]),

  new Trait("male", ["earring", "goat", "headband", "nerd glasses"]),
  //7406"]),

  new Trait("male", ["beanie", "classic shades"]),
  //7407"]),

  new Trait("male", ["classic shades", "headband"]),
  //7408"]),

  new Trait("male", ["cap forward", "eye patch"]),
  //7409"]),

  new Trait("male", ["cap", "small shades", "smile"]),
  //7410"]),

  new Trait("female", ["black lipstick", "clown eyes blue", "mohawk"]),
  //7411"]),

  new Trait("female", ["gold chain", "straight hair"]),
  //7412"]),

  new Trait("female", ["purple eye shadow", "straight hair blonde"]),
  //7413"]),

  new Trait("male", ["3d glasses", "clown nose", "mohawk", "vape"]),
  //7414"]),

  new Trait("female", [
    "dark hair",
    "earring",
    "green eye shadow",
    "medical mask",
  ]),
  //7415"]),

  new Trait("male", ["cigarette", "mustache", "stringy hair"]),
  //7416"]),

  new Trait("male", ["goat", "hoodie", "vr"]),
  //7417"]),

  new Trait("male", ["3d glasses", "handlebars", "vampire hair"]),
  //7418"]),

  new Trait("female", ["earring", "purple eye shadow", "red mohawk"]),
  //7419"]),

  new Trait("female", [
    "horned rim glasses",
    "purple lipstick",
    "rosy cheeks",
    "tassle hat",
  ]),
  //7420"]),

  new Trait("female", ["cigarette", "mole", "straight hair"]),
  //7421"]),

  new Trait("female", [
    "horned rim glasses",
    "purple lipstick",
    "straight hair blonde",
  ]),
  //7422"]),

  new Trait("male", ["3d glasses", "peak spike"]),
  //7423"]),

  new Trait("male", ["do-rag", "frown", "small shades"]),
  //7424"]),

  new Trait("male", ["cap", "regular shades", "smile"]),
  //7425"]),

  new Trait("female", ["earring", "hot lipstick", "pigtails", "pipe"]),
  //7426"]),

  new Trait("male", ["goat", "headband"]),
  //7427"]),

  new Trait("male", ["cigarette", "messy hair", "normal beard black"]),
  //7428"]),

  new Trait("female", ["bandana", "blue eye shadow", "purple lipstick"]),
  //7429"]),

  new Trait("male", ["do-rag", "normal beard", "vr"]),
  //7430"]),

  new Trait("male", ["bandana", "mole", "smile"]),
  //7431"]),

  new Trait("female", [
    "black lipstick",
    "blue eye shadow",
    "earring",
    "tassle hat",
  ]),
  //7432"]),

  new Trait("male", ["classic shades", "cowboy hat", "earring"]),
  //7433"]),

  new Trait("male", ["cap", "gold chain"]),
  //7434"]),

  new Trait("male", ["frown", "headband", "shadow beard"]),
  //7435"]),

  new Trait("male", [
    "big shades",
    "cigarette",
    "frumpy hair",
    "luxurious beard",
  ]),
  //7436"]),

  new Trait("female", ["blonde bob", "vape"]),
  //7437"]),

  new Trait("male", ["front beard", "headband"]),
  //7438"]),

  new Trait("female", ["blue eye shadow", "wild white hair"]),
  //7439"]),

  new Trait("male", ["frown", "knitted cap", "shadow beard"]),
  //7440"]),

  new Trait("female", ["black lipstick", "headband"]),
  //7441"]),

  new Trait("male", ["frown", "horned rim glasses", "knitted cap"]),
  //7442"]),

  new Trait("male", ["bandana", "big shades", "clown nose"]),
  //7443"]),

  new Trait("male", ["luxurious beard", "mohawk", "small shades"]),
  //7444"]),

  new Trait("female", ["cigarette", "hot lipstick", "wild blonde"]),
  //7445"]),

  new Trait("male", ["eye patch", "wild hair"]),
  //7446"]),

  new Trait("female", ["crazy hair", "green eye shadow"]),
  //7447"]),

  new Trait("female", ["blue eye shadow", "crazy hair"]),
  //7448"]),

  new Trait("male", [
    "cigarette",
    "do-rag",
    "front beard dark",
    "small shades",
  ]),
  //7449"]),

  new Trait("female", ["cigarette", "gold chain", "mohawk", "purple lipstick"]),
  //7450"]),

  new Trait("male", ["crazy hair", "vr"]),
  //7451"]),

  new Trait("male", ["messy hair", "normal beard black"]),
  //7452"]),

  new Trait("male", ["cap", "luxurious beard", "vr"]),
  //7453"]),

  new Trait("male", ["front beard", "shaved head"]),
  //7454"]),

  new Trait("female", ["headband", "pipe"]),
  //7455"]),

  new Trait("female", [
    "black lipstick",
    "green eye shadow",
    "straight hair dark",
  ]),
  //7456"]),

  new Trait("female", ["black lipstick", "blonde bob", "welding goggles"]),
  //7457"]),

  new Trait("zombie", ["knitted cap", "regular shades", "shadow beard"]),
  //7458"]),

  new Trait("female", ["cap", "earring", "purple eye shadow"]),
  //7459"]),

  new Trait("male", ["earring", "eye mask", "mohawk"]),
  //7460"]),

  new Trait("male", ["handlebars", "medical mask", "wild hair"]),
  //7461"]),

  new Trait("male", ["chinstrap", "eye mask", "mohawk dark"]),
  //7462"]),

  new Trait("male", ["cigarette", "earring", "headband"]),
  //7463"]),

  new Trait("female", [
    "blue eye shadow",
    "earring",
    "headband",
    "hot lipstick",
  ]),
  //7464"]),

  new Trait("female", ["horned rim glasses", "straight hair blonde"]),
  //7465"]),

  new Trait("male", ["messy hair", "regular shades", "shadow beard"]),
  //7466"]),

  new Trait("male", ["cap forward", "cigarette", "front beard"]),
  //7467"]),

  new Trait("male", ["big shades", "cap forward", "normal beard black"]),
  //7468"]),

  new Trait("female", ["earring", "nerd glasses", "tassle hat"]),
  //7469"]),

  new Trait("male", ["clown eyes green", "earring", "vampire hair"]),
  //7470"]),

  new Trait("male", ["cowboy hat", "eye patch", "mole"]),
  //7471"]),

  new Trait("male", ["big shades", "mohawk thin", "normal beard"]),
  //7472"]),

  new Trait("female", [
    "clown eyes green",
    "gold chain",
    "hot lipstick",
    "straight hair dark",
  ]),
  //7473"]),

  new Trait("female", ["black lipstick", "earring", "headband"]),
  //7474"]),

  new Trait("female", ["medical mask", "mohawk thin"]),
  //7475"]),

  new Trait("male", ["medical mask", "mohawk dark"]),
  //7476"]),

  new Trait("male", ["big shades", "knitted cap", "smile"]),
  //7477"]),

  new Trait("male", ["earring", "shadow beard", "vampire hair"]),
  //7478"]),

  new Trait("male", ["3d glasses", "bandana", "normal beard black"]),
  //7479"]),

  new Trait("male", ["classic shades", "medical mask", "peak spike"]),
  //7480"]),

  new Trait("male", ["front beard", "small shades", "wild hair"]),
  //7481"]),

  new Trait("female", ["blonde short", "green eye shadow"]),
  //7482"]),

  new Trait("male", ["earring", "messy hair", "nerd glasses", "pipe"]),
  //7483"]),

  new Trait("female", ["dark hair", "hot lipstick", "rosy cheeks"]),
  //7484"]),

  new Trait("male", ["cowboy hat", "gold chain", "shadow beard"]),
  //7485"]),

  new Trait("female", ["black lipstick", "earring", "mohawk", "mole"]),
  //7486"]),

  new Trait("male", ["horned rim glasses", "knitted cap", "shadow beard"]),
  //7487"]),

  new Trait("male", ["3d glasses", "crazy hair", "shadow beard"]),
  //7488"]),

  new Trait("male", ["classic shades", "earring", "messy hair", "muttonchops"]),
  //7489"]),

  new Trait("male", ["big shades", "mole", "shaved head", "vape"]),
  //7490"]),

  new Trait("male", ["classic shades", "headband", "mustache"]),
  //7491"]),

  new Trait("male", ["front beard", "knitted cap"]),
  //7492"]),

  new Trait("female", ["bandana", "mole", "purple eye shadow"]),
  //7493"]),

  new Trait("male", ["nerd glasses", "wild hair"]),
  //7494"]),

  new Trait("female", ["cigarette", "purple lipstick", "straight hair"]),
  //7495"]),

  new Trait("male", [
    "clown eyes green",
    "earring",
    "frumpy hair",
    "luxurious beard",
    "rosy cheeks",
  ]),
  //7496"]),

  new Trait("female", ["blue eye shadow", "wild hair"]),
  //7497"]),

  new Trait("female", ["eye mask", "wild hair"]),
  //7498"]),

  new Trait("female", ["blue eye shadow", "frumpy hair"]),
  //7499"]),

  new Trait("female", ["earring", "eye mask", "hot lipstick", "mohawk dark"]),
  //7500"]),

  new Trait("male", ["cigarette", "hoodie", "normal beard"]),
  //7501"]),

  new Trait("female", ["bandana", "clown eyes blue", "earring"]),
  //7502"]),

  new Trait("female", ["blonde short", "spots"]),
  //7503"]),

  new Trait("male", ["cap forward", "vr"]),
  //7504"]),

  new Trait("male", ["do-rag", "earring", "eye patch", "mustache"]),
  //7505"]),

  new Trait("female", ["earring", "hot lipstick", "mohawk"]),
  //7506"]),

  new Trait("male", ["clown nose", "messy hair", "normal beard black"]),
  //7507"]),

  new Trait("male", ["earring", "vr", "wild hair"]),
  //7508"]),

  new Trait("female", ["black lipstick", "blue eye shadow", "half shaved"]),
  //7509"]),

  new Trait("male", ["chinstrap", "mohawk", "smile"]),
  //7510"]),

  new Trait("female", ["clown eyes blue", "earring", "frumpy hair", "mole"]),
  //7511"]),

  new Trait("female", ["mohawk thin", "nerd glasses"]),
  //7512"]),

  new Trait("male", ["big shades", "front beard", "mohawk thin"]),
  //7513"]),

  new Trait("male", ["big beard", "cigarette", "stringy hair"]),
  //7514"]),

  new Trait("female", ["blonde bob", "cigarette", "purple eye shadow"]),
  //7515"]),

  new Trait("male", ["3d glasses", "fedora", "front beard dark"]),
  //7516"]),

  new Trait("male", ["cap forward", "cigarette", "shadow beard"]),
  //7517"]),

  new Trait("male", ["classic shades", "peak spike"]),
  //7518"]),

  new Trait("male", ["medical mask", "shadow beard", "top hat"]),
  //7519"]),

  new Trait("female", ["blonde bob", "green eye shadow", "purple lipstick"]),
  //7520"]),

  new Trait("female", ["mole", "straight hair dark"]),
  //7521"]),

  new Trait("female", ["stringy hair", "vape"]),
  //7522"]),

  new Trait("alien", ["earring", "knitted cap", "medical mask"]),
  //7523"]),

  new Trait("male", ["earring", "front beard", "wild hair"]),
  //7524"]),

  new Trait("male", ["luxurious beard", "vampire hair"]),
  //7525"]),

  new Trait("male", ["muttonchops", "nerd glasses", "purple hair"]),
  //7526"]),

  new Trait("male", ["big shades", "cigarette", "peak spike"]),
  //7527"]),

  new Trait("female", ["clown nose", "earring", "straight hair dark"]),
  //7528"]),

  new Trait("male", ["cap", "clown eyes green", "muttonchops"]),
  //7529"]),

  new Trait("female", ["gold chain", "knitted cap", "purple eye shadow"]),
  //7530"]),

  new Trait("male", [
    "crazy hair",
    "earring",
    "front beard dark",
    "regular shades",
  ]),
  //7531"]),

  new Trait("female", ["black lipstick", "mohawk", "pipe"]),
  //7532"]),

  new Trait("male", ["cap", "eye patch"]),
  //7533"]),

  new Trait("female", ["big shades", "crazy hair"]),
  //7534"]),

  new Trait("female", ["clown eyes green", "tiara"]),
  //7535"]),

  new Trait("male", ["crazy hair", "luxurious beard", "mole"]),
  //7536"]),

  new Trait("male", ["front beard", "horned rim glasses", "shaved head"]),
  //7537"]),

  new Trait("male", [
    "earring",
    "shadow beard",
    "small shades",
    "stringy hair",
  ]),
  //7538"]),

  new Trait("male", ["normal beard", "peak spike", "rosy cheeks"]),
  //7539"]),

  new Trait("male", ["classic shades", "front beard dark", "messy hair"]),
  //7540"]),

  new Trait("male", ["big shades", "headband", "shadow beard"]),
  //7541"]),

  new Trait("male", ["horned rim glasses"]),
  //7542"]),

  new Trait("male", [
    "earring",
    "fedora",
    "horned rim glasses",
    "normal beard",
  ]),
  //7543"]),

  new Trait("male", ["eye mask", "messy hair"]),
  //7544"]),

  new Trait("female", ["mohawk", "nerd glasses", "purple lipstick"]),
  //7545"]),

  new Trait("male", ["cigarette", "police cap", "shadow beard"]),
  //7546"]),

  new Trait("male", ["earring", "luxurious beard", "police cap"]),
  //7547"]),

  new Trait("male", ["3d glasses", "knitted cap", "normal beard black"]),
  //7548"]),

  new Trait("male", ["clown hair green", "frown"]),
  //7549"]),

  new Trait("male", ["earring", "frown", "nerd glasses", "police cap"]),
  //7550"]),

  new Trait("male", ["big shades", "handlebars", "mohawk thin"]),
  //7551"]),

  new Trait("male", ["big shades", "mohawk"]),
  //7552"]),

  new Trait("female", [
    "black lipstick",
    "clown eyes green",
    "earring",
    "red mohawk",
  ]),
  //7553"]),

  new Trait("male", ["eye mask", "shadow beard", "shaved head"]),
  //7554"]),

  new Trait("female", ["hot lipstick", "mole", "red mohawk"]),
  //7555"]),

  new Trait("female", ["clown eyes green", "mohawk thin"]),
  //7556"]),

  new Trait("female", [
    "horned rim glasses",
    "mole",
    "purple lipstick",
    "tiara",
  ]),
  //7557"]),

  new Trait("male", ["cap forward", "nerd glasses"]),
  //7558"]),

  new Trait("male", ["earring", "frumpy hair", "nerd glasses"]),
  //7559"]),

  new Trait("female", ["green eye shadow", "purple lipstick"]),
  //7560"]),

  new Trait("male", ["cap forward", "normal beard black", "small shades"]),
  //7561"]),

  new Trait("female", ["blonde bob", "cigarette", "regular shades"]),
  //7562"]),

  new Trait("female", ["welding goggles", "wild blonde"]),
  //7563"]),

  new Trait("male", ["rosy cheeks", "shaved head"]),
  //7564"]),

  new Trait("male", ["bandana", "cigarette", "eye mask"]),
  //7565"]),

  new Trait("male", ["earring", "horned rim glasses", "shaved head"]),
  //7566"]),

  new Trait("male", ["horned rim glasses", "stringy hair"]),
  //7567"]),

  new Trait("female", ["blue eye shadow", "dark hair", "hot lipstick"]),
  //7568"]),

  new Trait("male", ["cowboy hat", "gold chain"]),
  //7569"]),

  new Trait("male", [
    "earring",
    "mohawk",
    "nerd glasses",
    "normal beard black",
  ]),
  //7570"]),

  new Trait("male", ["headband", "rosy cheeks"]),
  //7571"]),

  new Trait("male", ["police cap", "regular shades", "shadow beard"]),
  //7572"]),

  new Trait("male", ["bandana", "goat"]),
  //7573"]),

  new Trait("male", ["mohawk", "vape"]),
  //7574"]),

  new Trait("male", ["bandana", "earring", "horned rim glasses"]),
  //7575"]),

  new Trait("male", ["earring", "fedora", "horned rim glasses", "mole"]),
  //7576"]),

  new Trait("female", ["classic shades", "straight hair blonde"]),
  //7577"]),

  new Trait("male", ["mohawk thin", "normal beard", "rosy cheeks"]),
  //7578"]),

  new Trait("male", ["earring", "shaved head", "smile"]),
  //7579"]),

  new Trait("female", ["cap", "purple lipstick"]),
  //7580"]),

  new Trait("male", ["bandana", "eye mask"]),
  //7581"]),

  new Trait("male", ["muttonchops", "police cap", "vape"]),
  //7582"]),

  new Trait("male", ["mustache", "small shades", "stringy hair"]),
  //7583"]),

  new Trait("male", ["3d glasses", "frumpy hair"]),
  //7584"]),

  new Trait("male", [
    "big shades",
    "cowboy hat",
    "earring",
    "normal beard black",
  ]),
  //7585"]),

  new Trait("female", [
    "cigarette",
    "classic shades",
    "frumpy hair",
    "purple lipstick",
  ]),
  //7586"]),

  new Trait("female", ["earring", "eye mask", "tassle hat"]),
  //7587"]),

  new Trait("male", ["frown"]),
  //7588"]),

  new Trait("female", ["dark hair", "horned rim glasses"]),
  //7589"]),

  new Trait("female", ["medical mask", "mohawk"]),
  //7590"]),

  new Trait("male", ["earring", "mohawk", "smile"]),
  //7591"]),

  new Trait("male", ["cowboy hat", "earring", "muttonchops"]),
  //7592"]),

  new Trait("female", ["half shaved", "hot lipstick", "purple eye shadow"]),
  //7593"]),

  new Trait("female", ["clown eyes blue", "mohawk thin"]),
  //7594"]),

  new Trait("male", ["eye patch", "frumpy hair", "luxurious beard"]),
  //7595"]),

  new Trait("male", ["3d glasses", "clown hair green"]),
  //7596"]),

  new Trait("male", ["cap", "muttonchops", "nerd glasses"]),
  //7597"]),

  new Trait("male", ["bandana", "horned rim glasses"]),
  //7598"]),

  new Trait("male", ["big shades", "earring", "wild hair"]),
  //7599"]),

  new Trait("male", ["frown", "purple hair", "regular shades"]),
  //7600"]),

  new Trait("female", ["clown eyes blue", "tiara"]),
  //7601"]),

  new Trait("male", [
    "frown",
    "luxurious beard",
    "peak spike",
    "rosy cheeks",
    "vape",
  ]),
  //7602"]),

  new Trait("female", ["3d glasses", "crazy hair"]),
  //7603"]),

  new Trait("female", ["messy hair", "purple lipstick"]),
  //7604"]),

  new Trait("male", ["clown eyes blue", "fedora"]),
  //7605"]),

  new Trait("female", [
    "classic shades",
    "pipe",
    "purple lipstick",
    "wild blonde",
  ]),
  //7606"]),

  new Trait("male", ["buck teeth", "knitted cap"]),
  //7607"]),

  new Trait("male", ["front beard", "mohawk dark"]),
  //7608"]),

  new Trait("male", ["big shades", "earring", "knitted cap"]),
  //7609"]),

  new Trait("female", ["clown eyes green", "hot lipstick", "mohawk"]),
  //7610"]),

  new Trait("male", ["big beard", "cigarette", "mohawk"]),
  //7611"]),

  new Trait("male", ["earring", "vampire hair"]),
  //7612"]),

  new Trait("male", ["3d glasses", "goat", "purple hair"]),
  //7613"]),

  new Trait("male", ["handlebars", "horned rim glasses", "mohawk dark"]),
  //7614"]),

  new Trait("female", ["eye mask", "straight hair"]),
  //7615"]),

  new Trait("male", ["cap forward", "eye mask"]),
  //7616"]),

  new Trait("female", ["classic shades", "crazy hair"]),
  //7617"]),

  new Trait("male", [
    "earring",
    "luxurious beard",
    "spots",
    "vape",
    "wild hair",
  ]),
  //7618"]),

  new Trait("male", ["eye patch", "frumpy hair"]),
  //7619"]),

  new Trait("male", ["cap", "vape", "vr"]),
  //7620"]),

  new Trait("male", ["big shades", "frumpy hair", "luxurious beard"]),
  //7621"]),

  new Trait("female", [
    "black lipstick",
    "dark hair",
    "green eye shadow",
    "spots",
  ]),
  //7622"]),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "earring",
    "mohawk dark",
    "nerd glasses",
  ]),
  //7623"]),

  new Trait("male", ["spots", "vampire hair"]),
  //7624"]),

  new Trait("male", ["big shades", "mohawk thin", "mole", "shadow beard"]),
  //7625"]),

  new Trait("female", ["earring", "mohawk thin", "purple eye shadow", "vape"]),
  //7626"]),

  new Trait("male", ["cigarette", "earring", "mohawk", "shadow beard"]),
  //7627"]),

  new Trait("male", ["horned rim glasses", "messy hair", "muttonchops"]),
  //7628"]),

  new Trait("male", ["earring", "goat", "regular shades", "top hat"]),
  //7629"]),

  new Trait("male", ["mole", "mustache", "nerd glasses", "top hat"]),
  //7630"]),

  new Trait("female", [
    "cigarette",
    "earring",
    "purple lipstick",
    "stringy hair",
  ]),
  //7631"]),

  new Trait("male", ["big shades", "crazy hair"]),
  //7632"]),

  new Trait("male", ["cap", "clown eyes blue"]),
  //7633"]),

  new Trait("male", ["big shades", "earring", "fedora", "front beard"]),
  //7634"]),

  new Trait("male", ["clown eyes green", "mohawk"]),
  //7635"]),

  new Trait("male", ["frumpy hair", "pipe"]),
  //7636"]),

  new Trait("female", ["hot lipstick", "nerd glasses", "wild white hair"]),
  //7637"]),

  new Trait("male", ["bandana", "horned rim glasses", "mustache"]),
  //7638"]),

  new Trait("female", ["bandana", "black lipstick", "green eye shadow"]),
  //7639"]),

  new Trait("male", ["peak spike", "silver chain"]),
  //7640"]),

  new Trait("male", ["hoodie", "normal beard"]),
  //7641"]),

  new Trait("male", ["messy hair", "nerd glasses"]),
  //7642"]),

  new Trait("female", ["purple lipstick", "straight hair dark", "vr"]),
  //7643"]),

  new Trait("male", ["cap forward", "chinstrap", "nerd glasses"]),
  //7644"]),

  new Trait("female", [
    "clown eyes blue",
    "mole",
    "purple lipstick",
    "wild blonde",
  ]),
  //7645"]),

  new Trait("male", ["classic shades", "front beard", "vampire hair"]),
  //7646"]),

  new Trait("male", ["clown nose", "do-rag"]),
  //7647"]),

  new Trait("female", ["blonde short", "cigarette", "spots"]),
  //7648"]),

  new Trait("female", [
    "earring",
    "pigtails",
    "purple eye shadow",
    "purple lipstick",
  ]),
  //7649"]),

  new Trait("female", ["cigarette", "mohawk thin"]),
  //7650"]),

  new Trait("male", ["clown hair green", "nerd glasses", "normal beard black"]),
  //7651"]),

  new Trait("female", ["big shades", "straight hair blonde"]),
  //7652"]),

  new Trait("male", ["luxurious beard", "vampire hair"]),
  //7653"]),

  new Trait("female", ["green eye shadow", "pigtails", "purple lipstick"]),
  //7654"]),

  new Trait("male", ["mole", "small shades", "wild hair"]),
  //7655"]),

  new Trait("male", ["beanie", "handlebars"]),
  //7656"]),

  new Trait("male", ["cigarette", "earring", "headband", "nerd glasses"]),
  //7657"]),

  new Trait("male", ["earring", "goat", "headband", "silver chain"]),
  //7658"]),

  new Trait("female", ["black lipstick", "pipe", "tassle hat"]),
  //7659"]),

  new Trait("zombie", ["do-rag", "smile"]),
  //7660"]),

  new Trait("female", [
    "blue eye shadow",
    "hot lipstick",
    "mole",
    "straight hair",
    "vape",
  ]),
  //7661"]),

  new Trait("female", ["bandana", "purple lipstick"]),
  //7662"]),

  new Trait("female", [
    "earring",
    "green eye shadow",
    "pink with hat",
    "purple lipstick",
  ]),
  //7663"]),

  new Trait("female", ["black lipstick", "green eye shadow", "tassle hat"]),
  //7664"]),

  new Trait("male", ["earring", "luxurious beard", "small shades", "top hat"]),
  //7665"]),

  new Trait("male", ["police cap", "shadow beard", "vr"]),
  //7666"]),

  new Trait("male", ["earring", "mohawk dark", "mustache", "smile"]),
  //7667"]),

  new Trait("male", ["do-rag", "eye mask"]),
  //7668"]),

  new Trait("male", ["frumpy hair", "gold chain"]),
  //7669"]),

  new Trait("female", ["earring", "mohawk thin", "welding goggles"]),
  //7670"]),

  new Trait("male", [
    "horned rim glasses",
    "medical mask",
    "normal beard black",
    "peak spike",
    "rosy cheeks",
  ]),
  //7671"]),

  new Trait("male", ["goat", "regular shades", "stringy hair"]),
  //7672"]),

  new Trait("male", ["earring", "nerd glasses", "shaved head"]),
  //7673"]),

  new Trait("male", ["hoodie", "nerd glasses", "normal beard", "pipe"]),
  //7674"]),

  new Trait("male", ["earring", "mohawk dark", "muttonchops"]),
  //7675"]),

  new Trait("female", ["clown eyes blue"]),
  //7676"]),

  new Trait("male", ["hoodie", "medical mask"]),
  //7677"]),

  new Trait("female", ["mohawk", "mole"]),
  //7678"]),

  new Trait("male", [
    "chinstrap",
    "classic shades",
    "medical mask",
    "police cap",
  ]),
  //7679"]),

  new Trait("male", ["mohawk dark", "normal beard", "vr"]),
  //7680"]),

  new Trait("male", ["mohawk", "nerd glasses"]),
  //7681"]),

  new Trait("female", ["cigarette", "crazy hair", "earring", "hot lipstick"]),
  //7682"]),

  new Trait("male", ["crazy hair", "handlebars", "medical mask"]),
  //7683"]),

  new Trait("male", ["headband", "nerd glasses", "shadow beard"]),
  //7684"]),

  new Trait("male", ["3d glasses", "handlebars", "messy hair"]),
  //7685"]),

  new Trait("male", ["big shades", "cowboy hat", "luxurious beard"]),
  //7686"]),

  new Trait("male", ["cap forward", "goat"]),
  //7687"]),

  new Trait("male", ["frumpy hair", "muttonchops", "smile"]),
  //7688"]),

  new Trait("female", [
    "cap",
    "horned rim glasses",
    "medical mask",
    "purple lipstick",
  ]),
  //7689"]),

  new Trait("male", ["luxurious beard", "stringy hair"]),
  //7690"]),

  new Trait("male", ["normal beard", "police cap", "small shades"]),
  //7691"]),

  new Trait("male", ["eye patch", "frown", "headband", "luxurious beard"]),
  //7692"]),

  new Trait("female", ["hot lipstick", "mohawk", "regular shades"]),
  //7693"]),

  new Trait("female", ["hot lipstick", "nerd glasses", "pigtails"]),
  //7694"]),

  new Trait("female", ["3d glasses", "blonde bob", "medical mask"]),
  //7695"]),

  new Trait("male", ["bandana", "muttonchops", "nerd glasses"]),
  //7696"]),

  new Trait("male", [
    "cigarette",
    "nerd glasses",
    "normal beard black",
    "purple hair",
  ]),
  //7697"]),

  new Trait("female", ["earring", "welding goggles", "wild blonde"]),
  //7698"]),

  new Trait("male", ["classic shades", "normal beard black", "purple hair"]),
  //7699"]),

  new Trait("female", [
    "earring",
    "hot lipstick",
    "nerd glasses",
    "wild blonde",
  ]),
  //7700"]),

  new Trait("female", ["clown eyes green", "straight hair dark", "vape"]),
  //7701"]),

  new Trait("male", ["eye patch", "mohawk dark", "mustache"]),
  //7702"]),

  new Trait("female", ["blonde bob", "clown eyes green", "purple lipstick"]),
  //7703"]),

  new Trait("male", ["cigarette", "front beard dark", "peak spike"]),
  //7704"]),

  new Trait("male", ["bandana", "chinstrap", "eye patch"]),
  //7705"]),

  new Trait("male", ["eye mask", "frumpy hair"]),
  //7706"]),

  new Trait("female", ["clown eyes green", "orange side"]),
  //7707"]),

  new Trait("male", ["cigarette", "crazy hair", "eye patch", "muttonchops"]),
  //7708"]),

  new Trait("male", ["earring", "mohawk thin", "mole", "silver chain"]),
  //7709"]),

  new Trait("female", [
    "earring",
    "half shaved",
    "purple eye shadow",
    "purple lipstick",
  ]),
  //7710"]),

  new Trait("male", ["frown", "frumpy hair"]),
  //7711"]),

  new Trait("male", ["cowboy hat", "goat"]),
  //7712"]),

  new Trait("male", ["big shades", "goat", "mohawk", "vape"]),
  //7713"]),

  new Trait("female", [
    "bandana",
    "black lipstick",
    "earring",
    "purple eye shadow",
  ]),
  //7714"]),

  new Trait("female", ["classic shades", "hot lipstick", "wild white hair"]),
  //7715"]),

  new Trait("male", ["chinstrap", "earring", "frown", "headband"]),
  //7716"]),

  new Trait("male", ["cigarette", "front beard dark", "mohawk"]),
  //7717"]),

  new Trait("male", ["horned rim glasses", "mohawk thin", "mustache"]),
  //7718"]),

  new Trait("female", ["cigarette", "clown eyes green", "tassle hat"]),
  //7719"]),

  new Trait("female", ["black lipstick", "half shaved", "vape"]),
  //7720"]),

  new Trait("male", ["earring", "eye mask", "knitted cap", "muttonchops"]),
  //7721"]),

  new Trait("male", ["3d glasses", "luxurious beard", "peak spike"]),
  //7722"]),

  new Trait("male", ["earring", "muttonchops", "police cap"]),
  //7723"]),

  new Trait("male", ["big shades", "knitted cap"]),
  //7724"]),

  new Trait("male", [
    "earring",
    "horned rim glasses",
    "mustache",
    "vampire hair",
  ]),
  //7725"]),

  new Trait("male", ["3d glasses", "cap forward"]),
  //7726"]),

  new Trait("female", ["black lipstick", "gold chain", "red mohawk"]),
  //7727"]),

  new Trait("male", ["buck teeth", "headband", "small shades"]),
  //7728"]),

  new Trait("male", ["crazy hair", "earring", "muttonchops"]),
  //7729"]),

  new Trait("male", ["clown nose", "mohawk dark"]),
  //7730"]),

  new Trait("female", ["black lipstick", "mohawk thin", "silver chain"]),
  //7731"]),

  new Trait("male", ["3d glasses", "chinstrap", "hoodie"]),
  //7732"]),

  new Trait("female", ["cigarette", "earring", "stringy hair"]),
  //7733"]),

  new Trait("female", ["blonde bob", "horned rim glasses", "mole"]),
  //7734"]),

  new Trait("female", ["crazy hair", "purple lipstick"]),
  //7735"]),

  new Trait("female", ["green eye shadow"]),
  //7736"]),

  new Trait("male", ["horned rim glasses", "mohawk", "normal beard"]),
  //7737"]),

  new Trait("male", ["police cap", "regular shades", "smile"]),
  //7738"]),

  new Trait("male", ["cigarette", "earring", "gold chain", "headband"]),
  //7739"]),

  new Trait("male", ["eye mask", "frown", "messy hair", "normal beard"]),
  //7740"]),

  new Trait("male", ["horned rim glasses", "mole"]),
  //7741"]),

  new Trait("male", ["cap forward", "goat", "small shades"]),
  //7742"]),

  new Trait("male", ["cigarette", "regular shades", "vampire hair"]),
  //7743"]),

  new Trait("male", ["earring", "muttonchops"]),
  //7744"]),

  new Trait("male", ["shadow beard", "small shades", "wild hair"]),
  //7745"]),

  new Trait("male", ["clown eyes blue", "cowboy hat"]),
  //7746"]),

  new Trait("male", ["eye patch", "messy hair", "normal beard"]),
  //7747"]),

  new Trait("male", ["hoodie", "luxurious beard", "pipe"]),
  //7748"]),

  new Trait("female", ["medical mask", "stringy hair"]),
  //7749"]),

  new Trait("female", ["classic shades", "crazy hair", "earring"]),
  //7750"]),

  new Trait("female", ["blonde short", "clown eyes blue", "hot lipstick"]),
  //7751"]),

  new Trait("female", ["dark hair", "purple eye shadow"]),
  //7752"]),

  new Trait("male", ["earring", "normal beard", "purple hair", "vr"]),
  //7753"]),

  new Trait("male", ["chinstrap", "frumpy hair"]),
  //7754"]),

  new Trait("male", ["muttonchops", "stringy hair"]),
  //7755"]),

  new Trait("zombie", ["do-rag", "horned rim glasses", "shadow beard"]),
  //7756"]),

  new Trait("male", ["clown hair green", "shadow beard"]),
  //7757"]),

  new Trait("female", ["blonde bob", "eye patch", "mole"]),
  //7758"]),

  new Trait("male", ["classic shades", "goat"]),
  //7759"]),

  new Trait("female", ["eye mask", "wild white hair"]),
  //7760"]),

  new Trait("female", ["crazy hair", "medical mask"]),
  //7761"]),

  new Trait("male", ["cap", "handlebars", "nerd glasses"]),
  //7762"]),

  new Trait("female", [
    "big shades",
    "purple lipstick",
    "red mohawk",
    "rosy cheeks",
  ]),
  //7763"]),

  new Trait("male", ["mole", "wild hair"]),
  //7764"]),

  new Trait("male", ["earring", "horned rim glasses", "smile", "wild hair"]),
  //7765"]),

  new Trait("male", ["earring", "fedora", "normal beard black"]),
  //7766"]),

  new Trait("female", ["clown eyes green", "pink with hat"]),
  //7767"]),

  new Trait("female", ["mole", "red mohawk"]),
  //7768"]),

  new Trait("male", ["mole", "pipe"]),
  //7769"]),

  new Trait("male", [
    "horned rim glasses",
    "knitted cap",
    "mustache",
    "rosy cheeks",
  ]),
  //7770"]),

  new Trait("male", ["frown", "frumpy hair", "pipe"]),
  //7771"]),

  new Trait("male", ["frown", "frumpy hair", "regular shades"]),
  //7772"]),

  new Trait("male", ["clown nose", "regular shades", "wild hair"]),
  //7773"]),

  new Trait("male", ["earring", "messy hair", "muttonchops"]),
  //7774"]),

  new Trait("male", ["classic shades", "cowboy hat", "earring", "muttonchops"]),
  //7775"]),

  new Trait("male", ["fedora", "vape"]),
  //7776"]),

  new Trait("female", ["black lipstick", "blonde short", "mole"]),
  //7777"]),

  new Trait("female", [
    "clown eyes blue",
    "medical mask",
    "mohawk thin",
    "purple lipstick",
  ]),
  //7778"]),

  new Trait("male", ["hoodie", "mustache"]),
  //7779"]),

  new Trait("male", ["front beard dark", "shaved head"]),
  //7780"]),

  new Trait("male", ["frumpy hair", "horned rim glasses", "shadow beard"]),
  //7781"]),

  new Trait("male", ["earring", "mohawk dark", "pipe"]),
  //7782"]),

  new Trait("male", ["earring", "shaved head", "silver chain"]),
  //7783"]),

  new Trait("male", ["cigarette", "messy hair", "smile"]),
  //7784"]),

  new Trait("male", [
    "cigarette",
    "earring",
    "headband",
    "nerd glasses",
    "normal beard black",
  ]),
  //7785"]),

  new Trait("female", ["bandana", "blue eye shadow", "purple lipstick"]),
  //7786"]),

  new Trait("male", ["fedora", "nerd glasses", "smile"]),
  //7787"]),

  new Trait("male", ["classic shades", "earring", "front beard", "wild hair"]),
  //7788"]),

  new Trait("male", ["do-rag", "regular shades", "spots", "vape"]),
  //7789"]),

  new Trait("male", ["earring", "front beard", "wild hair"]),
  //7790"]),

  new Trait("female", ["half shaved", "hot lipstick", "mole"]),
  //7791"]),

  new Trait("female", ["blonde short", "blue eye shadow", "cigarette"]),
  //7792"]),

  new Trait("female", ["clown eyes green", "straight hair blonde"]),
  //7793"]),

  new Trait("female", ["cap", "cigarette", "earring", "mole"]),
  //7794"]),

  new Trait("male", ["earring", "normal beard black", "police cap"]),
  //7795"]),

  new Trait("male", ["classic shades", "crazy hair", "shadow beard"]),
  //7796"]),

  new Trait("male", ["clown eyes green", "knitted cap", "luxurious beard"]),
  //7797"]),

  new Trait("female", ["blue eye shadow", "pipe", "tassle hat"]),
  //7798"]),

  new Trait("male", ["cigarette", "front beard", "purple hair"]),
  //7799"]),

  new Trait("male", ["earring", "normal beard", "shaved head", "silver chain"]),
  //7800"]),

  new Trait("female", ["horned rim glasses", "messy hair"]),
  //7801"]),

  new Trait("female", [
    "classic shades",
    "hot lipstick",
    "straight hair blonde",
  ]),
  //7802"]),

  new Trait("female", ["blue eye shadow", "earring", "mohawk"]),
  //7803"]),

  new Trait("alien", ["cap forward", "pipe", "small shades"]),
  //7804"]),

  new Trait("female", ["black lipstick", "mole", "wild white hair"]),
  //7805"]),

  new Trait("male", [
    "cigarette",
    "horned rim glasses",
    "normal beard",
    "peak spike",
  ]),
  //7806"]),

  new Trait("male", ["clown nose", "horned rim glasses", "mohawk dark"]),
  //7807"]),

  new Trait("male", ["cigarette", "mohawk dark", "muttonchops"]),
  //7808"]),

  new Trait("male", ["cap forward", "clown eyes blue"]),
  //7809"]),

  new Trait("female", ["cigarette", "earring", "mohawk thin"]),
  //7810"]),

  new Trait("female", ["mole", "straight hair blonde"]),
  //7811"]),

  new Trait("male", ["eye patch", "front beard", "wild hair"]),
  //7812"]),

  new Trait("female", ["pipe"]),
  //7813"]),

  new Trait("female", ["blonde bob", "pipe", "vr"]),
  //7814"]),

  new Trait("male", ["big shades", "cap forward", "shadow beard"]),
  //7815"]),

  new Trait("male", ["big shades", "peak spike"]),
  //7816"]),

  new Trait("male", ["nerd glasses", "pipe", "vampire hair"]),
  //7817"]),

  new Trait("male", ["chinstrap", "crazy hair"]),
  //7818"]),

  new Trait("male", ["earring", "fedora", "regular shades"]),
  //7819"]),

  new Trait("male", ["mohawk", "normal beard black", "vr"]),
  //7820"]),

  new Trait("female", ["earring", "headband", "horned rim glasses"]),
  //7821"]),

  new Trait("male", ["cigarette", "eye patch", "handlebars", "shaved head"]),
  //7822"]),

  new Trait("female", ["bandana", "big shades", "purple lipstick"]),
  //7823"]),

  new Trait("male", ["mustache", "regular shades"]),
  //7824"]),

  new Trait("female", ["earring", "mohawk thin", "vr"]),
  //7825"]),

  new Trait("female", ["big shades", "mohawk thin"]),
  //7826"]),

  new Trait("female", ["black lipstick", "clown eyes green", "stringy hair"]),
  //7827"]),

  new Trait("male", ["classic shades", "earring", "mustache", "top hat"]),
  //7828"]),

  new Trait("female", ["blue eye shadow", "clown nose", "messy hair"]),
  //7829"]),

  new Trait("female", ["big shades", "mohawk dark"]),
  //7830"]),

  new Trait("male", ["earring", "purple hair", "vr"]),
  //7831"]),

  new Trait("female", ["big shades", "choker", "headband"]),
  //7832"]),

  new Trait("male", ["eye mask", "front beard", "frumpy hair"]),
  //7833"]),

  new Trait("female", ["black lipstick", "clown eyes green", "mohawk thin"]),
  //7834"]),

  new Trait("male", ["handlebars", "mohawk", "smile"]),
  //7835"]),

  new Trait("female", ["black lipstick", "pipe", "stringy hair"]),
  //7836"]),

  new Trait("male", ["frumpy hair", "handlebars", "small shades"]),
  //7837"]),

  new Trait("male", ["big shades", "front beard dark", "mohawk dark"]),
  //7838"]),

  new Trait("male", ["earring", "fedora", "mole", "vr"]),
  //7839"]),

  new Trait("female", ["green eye shadow", "mohawk"]),
  //7840"]),

  new Trait("female", ["clown eyes blue", "crazy hair"]),
  //7841"]),

  new Trait("male", ["bandana", "mole"]),
  //7842"]),

  new Trait("male", ["cap forward", "clown nose", "front beard"]),
  //7843"]),

  new Trait("male", ["classic shades", "earring", "front beard", "hoodie"]),
  //7844"]),

  new Trait("male", ["classic shades", "luxurious beard", "messy hair"]),
  //7845"]),

  new Trait("male", ["3d glasses", "beanie"]),
  //7846"]),

  new Trait("male", ["earring", "front beard", "headband"]),
  //7847"]),

  new Trait("male", ["clown hair green", "earring", "mustache"]),
  //7848"]),

  new Trait("female", ["half shaved", "pipe"]),
  //7849"]),

  new Trait("female", ["clown hair green", "nerd glasses"]),
  //7850"]),

  new Trait("male", ["cowboy hat", "regular shades", "vape"]),
  //7851"]),

  new Trait("female", ["bandana", "earring", "vr"]),
  //7852"]),

  new Trait("female", ["blue eye shadow", "purple lipstick", "straight hair"]),
  //7853"]),

  new Trait("male", ["big beard", "cap", "nerd glasses"]),
  //7854"]),

  new Trait("female", ["earring", "headband", "nerd glasses"]),
  //7855"]),

  new Trait("female", ["clown nose", "red mohawk"]),
  //7856"]),

  new Trait("female", ["classic shades", "earring", "mohawk"]),
  //7857"]),

  new Trait("male", ["cigarette"]),
  //7858"]),

  new Trait("female", ["cigarette", "horned rim glasses", "mohawk"]),
  //7859"]),

  new Trait("female", ["choker", "cigarette", "straight hair"]),
  //7860"]),

  new Trait("male", ["big beard", "cigarette", "earring", "headband"]),
  //7861"]),

  new Trait("female", [
    "frumpy hair",
    "purple lipstick",
    "rosy cheeks",
    "vape",
  ]),
  //7862"]),

  new Trait("male", ["cap forward", "goat"]),
  //7863"]),

  new Trait("male", ["big shades", "cigarette", "frumpy hair", "goat"]),
  //7864"]),

  new Trait("male", ["eye mask", "luxurious beard", "messy hair"]),
  //7865"]),

  new Trait("female", [
    "blue eye shadow",
    "cigarette",
    "earring",
    "hot lipstick",
    "red mohawk",
  ]),
  //7866"]),

  new Trait("male", ["3d glasses", "mohawk thin"]),
  //7867"]),

  new Trait("male", ["hoodie", "medical mask"]),
  //7868"]),

  new Trait("male", ["bandana", "earring", "medical mask"]),
  //7869"]),

  new Trait("male", ["chinstrap", "mohawk dark", "nerd glasses"]),
  //7870"]),

  new Trait("male", ["cap", "normal beard black", "vr"]),
  //7871"]),

  new Trait("female", ["blue eye shadow", "purple lipstick", "wild hair"]),
  //7872"]),

  new Trait("male", ["cap", "clown nose", "mole"]),
  //7873"]),

  new Trait("female", ["black lipstick", "frumpy hair", "horned rim glasses"]),
  //7874"]),

  new Trait("female", ["blue eye shadow", "straight hair blonde"]),
  //7875"]),

  new Trait("female", ["clown eyes green", "hot lipstick", "mohawk"]),
  //7876"]),

  new Trait("female", ["cigarette", "purple lipstick", "straight hair dark"]),
  //7877"]),

  new Trait("male", ["bandana", "cigarette", "muttonchops", "small shades"]),
  //7878"]),

  new Trait("male", ["chinstrap", "vampire hair"]),
  //7879"]),

  new Trait("male", ["cowboy hat", "mustache", "vape"]),
  //7880"]),

  new Trait("male", ["luxurious beard", "mohawk thin", "pipe", "silver chain"]),
  //7881"]),

  new Trait("female", [
    "blue eye shadow",
    "crazy hair",
    "earring",
    "medical mask",
  ]),
  //7882"]),

  new Trait("male", ["earring", "frumpy hair"]),
  //7883"]),

  new Trait("male", [
    "classic shades",
    "luxurious beard",
    "messy hair",
    "spots",
  ]),
  //7884"]),

  new Trait("male", ["earring", "messy hair", "muttonchops"]),
  //7885"]),

  new Trait("male", ["fedora", "medical mask", "small shades"]),
  //7886"]),

  new Trait("female", ["earring", "tassle hat", "vape"]),
  //7887"]),

  new Trait("female", ["black lipstick", "earring", "pigtails"]),
  //7888"]),

  new Trait("female", ["earring", "mohawk", "rosy cheeks"]),
  //7889"]),

  new Trait("male", ["frown", "vampire hair"]),
  //7890"]),

  new Trait("female", ["cap", "earring", "medical mask"]),
  //7891"]),

  new Trait("male", ["cowboy hat", "smile"]),
  //7892"]),

  new Trait("male", ["goat", "shaved head"]),
  //7893"]),

  new Trait("female", ["clown eyes blue", "earring", "headband"]),
  //7894"]),

  new Trait("male", ["cowboy hat", "horned rim glasses"]),
  //7895"]),

  new Trait("male", ["earring", "horned rim glasses", "pipe", "wild hair"]),
  //7896"]),

  new Trait("female", ["clown eyes blue", "hot lipstick", "red mohawk"]),
  //7897"]),

  new Trait("female", [
    "earring",
    "hot lipstick",
    "orange side",
    "welding goggles",
  ]),
  //7898"]),

  new Trait("female", ["headband", "nerd glasses"]),
  //7899"]),

  new Trait("female", [
    "clown eyes blue",
    "hot lipstick",
    "straight hair dark",
  ]),
  //7900"]),

  new Trait("male", ["3d glasses", "handlebars", "top hat"]),
  //7901"]),

  new Trait("male", [
    "horned rim glasses",
    "mohawk dark",
    "pipe",
    "shadow beard",
  ]),
  //7902"]),

  new Trait("female", ["big shades", "hot lipstick", "red mohawk"]),
  //7903"]),

  new Trait("female", [
    "clown eyes blue",
    "crazy hair",
    "earring",
    "hot lipstick",
  ]),
  //7904"]),

  new Trait("male", ["earring", "normal beard black", "stringy hair"]),
  //7905"]),

  new Trait("female", ["bandana", "clown eyes green", "purple lipstick"]),
  //7906"]),

  new Trait("female", ["clown eyes blue", "red mohawk"]),
  //7907"]),

  new Trait("male", ["clown eyes blue", "normal beard", "peak spike"]),
  //7908"]),

  new Trait("male", ["front beard dark", "horned rim glasses", "police cap"]),
  //7909"]),

  new Trait("male", ["gold chain", "purple hair"]),
  //7910"]),

  new Trait("male", ["knitted cap", "mustache"]),
  //7911"]),

  new Trait("male", [
    "earring",
    "horned rim glasses",
    "mohawk dark",
    "normal beard black",
  ]),
  //7912"]),

  new Trait("male", ["cap", "chinstrap"]),
  //7913"]),

  new Trait("zombie", ["knitted cap", "normal beard black"]),
  //7914"]),

  new Trait("female", ["earring", "green eye shadow", "straight hair"]),
  //7915"]),

  new Trait("female", ["eye patch", "messy hair"]),
  //7916"]),

  new Trait("male", ["cigarette", "earring", "purple hair", "smile"]),
  //7917"]),

  new Trait("male", ["big shades", "frown", "knitted cap"]),
  //7918"]),

  new Trait("female", ["mohawk thin", "pipe"]),
  //7919"]),

  new Trait("female", [
    "cigarette",
    "clown nose",
    "crazy hair",
    "hot lipstick",
    "rosy cheeks",
    "vr",
  ]),
  //7920"]),

  new Trait("male", ["big shades", "handlebars", "pipe", "stringy hair"]),
  //7921"]),

  new Trait("female", ["black lipstick", "classic shades", "mohawk"]),
  //7922"]),

  new Trait("male", [
    "buck teeth",
    "earring",
    "mohawk dark",
    "normal beard black",
  ]),
  //7923"]),

  new Trait("female", ["cap", "cigarette", "green eye shadow"]),
  //7924"]),

  new Trait("male", ["peak spike", "small shades", "smile"]),
  //7925"]),

  new Trait("male", ["earring", "mohawk", "mustache", "smile"]),
  //7926"]),

  new Trait("male", ["cigarette", "classic shades", "knitted cap"]),
  //7927"]),

  new Trait("female", ["black lipstick", "tiara"]),
  //7928"]),

  new Trait("female", [
    "clown eyes blue",
    "gold chain",
    "hot lipstick",
    "straight hair",
  ]),
  //7929"]),

  new Trait("female", ["mole", "straight hair"]),
  //7930"]),

  new Trait("male", ["mohawk thin", "mustache"]),
  //7931"]),

  new Trait("female", ["knitted cap", "nerd glasses", "purple lipstick"]),
  //7932"]),

  new Trait("male", ["3d glasses", "clown nose", "do-rag", "earring"]),
  //7933"]),

  new Trait("male", ["classic shades", "earring", "headband"]),
  //7934"]),

  new Trait("female", ["earring", "gold chain", "hot lipstick"]),
  //7935"]),

  new Trait("male", ["cap", "nerd glasses"]),
  //7936"]),

  new Trait("female", ["hot lipstick", "nerd glasses", "tassle hat"]),
  //7937"]),

  new Trait("female", ["clown eyes green", "earring"]),
  //7938"]),

  new Trait("male", ["classic shades", "fedora", "goat"]),
  //7939"]),

  new Trait("female", ["big shades", "earring", "hot lipstick", "red mohawk"]),
  //7940"]),

  new Trait("female", ["clown eyes blue", "half shaved"]),
  //7941"]),

  new Trait("female", ["choker", "hot lipstick", "pink with hat"]),
  //7942"]),

  new Trait("female", ["clown eyes green", "headband", "pipe"]),
  //7943"]),

  new Trait("male", [
    "earring",
    "eye patch",
    "frown",
    "muttonchops",
    "peak spike",
  ]),
  //7944"]),

  new Trait("male", ["earring", "eye patch", "goat", "messy hair", "pipe"]),
  //7945"]),

  new Trait("male", ["big shades", "top hat"]),
  //7946"]),

  new Trait("male", ["mohawk dark", "mustache", "smile"]),
  //7947"]),

  new Trait("male", ["earring", "handlebars", "purple hair"]),
  //7948"]),

  new Trait("male", ["eye mask", "mohawk"]),
  //7949"]),

  new Trait("male", ["front beard dark", "regular shades", "wild hair"]),
  //7950"]),

  new Trait("male", ["cap", "muttonchops", "silver chain"]),
  //7951"]),

  new Trait("male", ["gold chain", "purple hair", "shadow beard"]),
  //7952"]),

  new Trait("male", ["earring", "headband", "small shades", "smile", "vape"]),
  //7953"]),

  new Trait("male", ["knitted cap", "pipe"]),
  //7954"]),

  new Trait("male", ["cap", "mole", "nerd glasses"]),
  //7955"]),

  new Trait("male", ["frown", "goat", "pipe", "police cap", "small shades"]),
  //7956"]),

  new Trait("female", ["black lipstick", "clown eyes green", "messy hair"]),
  //7957"]),

  new Trait("female", ["clown hair green", "hot lipstick"]),
  //7958"]),

  new Trait("male", ["frumpy hair", "muttonchops", "pipe"]),
  //7959"]),

  new Trait("male", ["eye mask", "fedora"]),
  //7960"]),

  new Trait("male", ["chinstrap", "clown nose", "mohawk"]),
  //7961"]),

  new Trait("male", ["bandana", "earring", "small shades"]),
  //7962"]),

  new Trait("male", ["horned rim glasses", "mohawk thin"]),
  //7963"]),

  new Trait("male", ["bandana", "classic shades"]),
  //7964"]),

  new Trait("female", ["classic shades", "mohawk", "purple lipstick"]),
  //7965"]),

  new Trait("male", ["small shades"]),
  //7966"]),

  new Trait("female", [
    "black lipstick",
    "blue eye shadow",
    "earring",
    "straight hair dark",
  ]),
  //7967"]),

  new Trait("male", ["big shades", "do-rag", "earring"]),
  //7968"]),

  new Trait("male", ["eye patch", "headband", "muttonchops"]),
  //7969"]),

  new Trait("female", ["mohawk thin", "vape"]),
  //7970"]),

  new Trait("female", [
    "big shades",
    "black lipstick",
    "cigarette",
    "earring",
    "mole",
    "wild hair",
  ]),
  //7971"]),

  new Trait("male", ["medical mask", "messy hair", "small shades"]),
  //7972"]),

  new Trait("female", ["earring", "orange side", "purple eye shadow"]),
  //7973"]),

  new Trait("male", ["cigarette", "eye mask", "mohawk"]),
  //7974"]),

  new Trait("male", [
    "chinstrap",
    "clown hair green",
    "eye patch",
    "medical mask",
  ]),
  //7975"]),

  new Trait("female", ["blonde bob", "medical mask", "purple eye shadow"]),
  //7976"]),

  new Trait("female", ["dark hair", "purple eye shadow", "rosy cheeks"]),
  //7977"]),

  new Trait("female", [
    "black lipstick",
    "clown eyes green",
    "earring",
    "frumpy hair",
  ]),
  //7978"]),

  new Trait("male", ["eye patch", "handlebars", "vampire hair"]),
  //7979"]),

  new Trait("female", ["clown eyes green", "half shaved", "hot lipstick"]),
  //7980"]),

  new Trait("female", [
    "clown eyes green",
    "earring",
    "headband",
    "hot lipstick",
  ]),
  //7981"]),

  new Trait("female", ["gold chain", "mohawk"]),
  //7982"]),

  new Trait("female", ["black lipstick", "frumpy hair", "green eye shadow"]),
  //7983"]),

  new Trait("male", ["eye patch", "normal beard black", "vampire hair"]),
  //7984"]),

  new Trait("female", ["blue eye shadow", "pipe", "tassle hat"]),
  //7985"]),

  new Trait("male", ["cowboy hat", "earring", "nerd glasses", "pipe"]),
  //7986"]),

  new Trait("female", ["blonde bob", "hot lipstick", "regular shades"]),
  //7987"]),

  new Trait("male", ["earring", "frown", "headband"]),
  //7988"]),

  new Trait("male", ["clown nose", "frumpy hair"]),
  //7989"]),

  new Trait("male", ["buck teeth", "eye patch", "purple hair"]),
  //7990"]),

  new Trait("male", ["big shades", "front beard dark", "mohawk"]),
  //7991"]),

  new Trait("male", ["big beard", "knitted cap"]),
  //7992"]),

  new Trait("male", ["clown hair green", "earring"]),
  //7993"]),

  new Trait("female", ["3d glasses", "black lipstick", "dark hair"]),
  //7994"]),

  new Trait("male", ["pipe", "shaved head"]),
  //7995"]),

  new Trait("male", ["beanie", "earring", "luxurious beard"]),
  //7996"]),

  new Trait("male", ["bandana", "gold chain", "normal beard"]),
  //7997"]),

  new Trait("male", ["cap forward", "earring", "eye patch"]),
  //7998"]),

  new Trait("female", [
    "blonde short",
    "earring",
    "hot lipstick",
    "nerd glasses",
  ]),
  //7999"]),

  new Trait("male", ["cap", "cigarette", "mustache", "rosy cheeks", "vr"]),
  //8000"]),

  new Trait("female", ["gold chain", "mohawk", "regular shades"]),
  //8001"]),

  new Trait("male", ["mole", "shadow beard", "wild hair"]),
  //8002"]),

  new Trait("male", ["goat", "hoodie", "regular shades"]),
  //8003"]),

  new Trait("male", ["chinstrap", "peak spike"]),
  //8004"]),

  new Trait("male", ["messy hair", "mustache", "pipe"]),
  //8005"]),

  new Trait("male", ["3d glasses", "clown nose", "frumpy hair"]),
  //8006"]),

  new Trait("female", [
    "earring",
    "hot lipstick",
    "knitted cap",
    "purple eye shadow",
  ]),
  //8007"]),

  new Trait("male", ["handlebars", "nerd glasses", "police cap"]),
  //8008"]),

  new Trait("female", ["clown eyes green", "wild blonde"]),
  //8009"]),

  new Trait("female", ["hot lipstick", "orange side"]),
  //8010"]),

  new Trait("male", ["chinstrap", "classic shades", "do-rag"]),
  //8011"]),

  new Trait("male", ["clown nose", "fedora", "goat"]),
  //8012"]),

  new Trait("male", ["cigarette", "normal beard black", "wild hair"]),
  //8013"]),

  new Trait("male", ["earring", "front beard", "police cap"]),
  //8014"]),

  new Trait("male", ["big shades", "cap forward", "front beard"]),
  //8015"]),

  new Trait("male", ["crazy hair", "luxurious beard", "medical mask"]),
  //8016"]),

  new Trait("male", ["earring", "eye mask", "top hat"]),
  //8017"]),

  new Trait("female", ["crazy hair", "hot lipstick"]),
  //8018"]),

  new Trait("male", ["earring", "frown", "knitted cap", "regular shades"]),
  //8019"]),

  new Trait("female", ["big shades", "blonde short", "hot lipstick"]),
  //8020"]),

  new Trait("male", ["gold chain", "mohawk thin"]),
  //8021"]),

  new Trait("male", ["cap", "clown eyes green", "shadow beard"]),
  //8022"]),

  new Trait("female", [
    "black lipstick",
    "blue eye shadow",
    "clown nose",
    "pigtails",
  ]),
  //8023"]),

  new Trait("female", ["pipe", "tassle hat"]),
  //8024"]),

  new Trait("male", ["crazy hair", "eye mask", "luxurious beard"]),
  //8025"]),

  new Trait("male", ["knitted cap", "smile", "vape"]),
  //8026"]),

  new Trait("female", [
    "big shades",
    "earring",
    "messy hair",
    "purple lipstick",
  ]),
  //8027"]),

  new Trait("male", ["big shades", "mohawk thin", "pipe"]),
  //8028"]),

  new Trait("female", ["earring", "messy hair", "mole"]),
  //8029"]),

  new Trait("female", ["earring", "vape", "wild white hair"]),
  //8030"]),

  new Trait("male", ["cigarette", "do-rag", "muttonchops"]),
  //8031"]),

  new Trait("female", ["clown eyes green", "earring", "mole", "wild hair"]),
  //8032"]),

  new Trait("male", ["3d glasses", "cap forward"]),
  //8033"]),

  new Trait("female", ["dark hair", "earring", "spots"]),
  //8034"]),

  new Trait("female", [
    "cigarette",
    "dark hair",
    "earring",
    "hot lipstick",
    "mole",
  ]),
  //8035"]),

  new Trait("male", ["peak spike", "rosy cheeks", "small shades", "smile"]),
  //8036"]),

  new Trait("female", [
    "black lipstick",
    "blue eye shadow",
    "frumpy hair",
    "mole",
  ]),
  //8037"]),

  new Trait("female", ["blue eye shadow", "purple lipstick", "red mohawk"]),
  //8038"]),

  new Trait("female", ["eye patch", "hot lipstick", "messy hair"]),
  //8039"]),

  new Trait("male", ["bandana", "earring", "eye patch", "silver chain"]),
  //8040"]),

  new Trait("male", ["clown hair green", "eye mask", "mustache", "spots"]),
  //8041"]),

  new Trait("male", ["pipe", "police cap"]),
  //8042"]),

  new Trait("female", ["big shades", "stringy hair"]),
  //8043"]),

  new Trait("female", ["big shades", "hot lipstick", "orange side"]),
  //8044"]),

  new Trait("male", ["big beard", "clown hair green", "earring"]),
  //8045"]),

  new Trait("male", ["eye patch", "fedora"]),
  //8046"]),

  new Trait("male", [
    "earring",
    "fedora",
    "horned rim glasses",
    "luxurious beard",
  ]),
  //8047"]),

  new Trait("male", ["chinstrap", "shaved head"]),
  //8048"]),

  new Trait("male", ["headband", "normal beard"]),
  //8049"]),

  new Trait("male", ["earring", "headband", "nerd glasses", "shadow beard"]),
  //8050"]),

  new Trait("male", ["clown eyes green", "handlebars", "messy hair"]),
  //8051"]),

  new Trait("male", ["eye patch", "knitted cap", "mustache"]),
  //8052"]),

  new Trait("male", ["mustache", "top hat"]),
  //8053"]),

  new Trait("female", ["bandana", "blue eye shadow"]),
  //8054"]),

  new Trait("female", ["clown eyes blue", "hot lipstick", "straight hair"]),
  //8055"]),

  new Trait("male", ["clown nose", "luxurious beard", "mohawk dark", "vr"]),
  //8056"]),

  new Trait("female", ["black lipstick", "cigarette", "half shaved", "vr"]),
  //8057"]),

  new Trait("female", ["hot lipstick", "regular shades", "straight hair"]),
  //8058"]),

  new Trait("male", ["fedora", "goat"]),
  //8059"]),

  new Trait("female", ["bandana", "big shades", "cigarette", "earring"]),
  //8060"]),

  new Trait("male", ["eye mask", "fedora", "front beard dark"]),
  //8061"]),

  new Trait("male", ["eye mask", "mohawk dark", "muttonchops"]),
  //8062"]),

  new Trait("female", ["blonde bob", "choker", "purple lipstick"]),
  //8063"]),

  new Trait("male", ["cigarette", "fedora", "nerd glasses"]),
  //8064"]),

  new Trait("male", [
    "earring",
    "gold chain",
    "regular shades",
    "vampire hair",
  ]),
  //8065"]),

  new Trait("female", ["classic shades", "hot lipstick", "orange side"]),
  //8066"]),

  new Trait("male", ["goat", "knitted cap", "mole"]),
  //8067"]),

  new Trait("male", ["crazy hair", "eye mask", "normal beard black"]),
  //8068"]),

  new Trait("male", ["frumpy hair", "handlebars", "small shades"]),
  //8069"]),

  new Trait("male", ["3d glasses", "peak spike", "shadow beard"]),
  //8070"]),

  new Trait("male", [
    "muttonchops",
    "nerd glasses",
    "silver chain",
    "vampire hair",
  ]),
  //8071"]),

  new Trait("male", ["earring", "mustache", "nerd glasses", "police cap"]),
  //8072"]),

  new Trait("male", ["cap", "cigarette", "horned rim glasses"]),
  //8073"]),

  new Trait("male", ["cigarette", "fedora", "small shades"]),
  //8074"]),

  new Trait("male", ["knitted cap", "mole", "small shades"]),
  //8075"]),

  new Trait("female", ["cap", "green eye shadow", "pipe"]),
  //8076"]),

  new Trait("female", ["cap", "eye patch", "purple lipstick"]),
  //8077"]),

  new Trait("male", ["frumpy hair", "muttonchops"]),
  //8078"]),

  new Trait("male", [
    "cigarette",
    "do-rag",
    "front beard",
    "horned rim glasses",
    "smile",
  ]),
  //8079"]),

  new Trait("male", ["cigarette", "earring", "messy hair", "shadow beard"]),
  //8080"]),

  new Trait("male", ["clown nose", "do-rag", "normal beard"]),
  //8081"]),

  new Trait("male", ["cowboy hat", "normal beard", "regular shades"]),
  //8082"]),

  new Trait("male", ["front beard", "mole", "purple hair"]),
  //8083"]),

  new Trait("male", ["clown eyes blue", "normal beard"]),
  //8084"]),

  new Trait("male", ["big beard", "hoodie", "regular shades"]),
  //8085"]),

  new Trait("male", ["bandana", "cigarette", "frown", "horned rim glasses"]),
  //8086"]),

  new Trait("male", ["clown nose", "frumpy hair", "shadow beard"]),
  //8087"]),

  new Trait("male", ["silver chain", "wild hair"]),
  //8088"]),

  new Trait("female", ["black lipstick", "mole", "straight hair dark"]),
  //8089"]),

  new Trait("male", ["big shades", "mohawk dark", "mustache"]),
  //8090"]),

  new Trait("female", ["knitted cap", "regular shades"]),
  //8091"]),

  new Trait("female", ["cigarette", "eye patch", "frumpy hair"]),
  //8092"]),

  new Trait("male", ["front beard dark", "horned rim glasses", "mohawk thin"]),
  //8093"]),

  new Trait("female", ["hot lipstick", "nerd glasses", "wild blonde"]),
  //8094"]),

  new Trait("male", ["eye patch", "shadow beard", "vampire hair"]),
  //8095"]),

  new Trait("female", ["half shaved", "welding goggles"]),
  //8096"]),

  new Trait("female", ["black lipstick", "blue eye shadow", "frumpy hair"]),
  //8097"]),

  new Trait("male", ["earring", "frumpy hair", "luxurious beard"]),
  //8098"]),

  new Trait("male", ["cap", "small shades"]),
  //8099"]),

  new Trait("male", ["chinstrap", "top hat"]),
  //8100"]),

  new Trait("male", ["chinstrap", "earring", "frown", "mole", "stringy hair"]),
  //8101"]),

  new Trait("male", ["shadow beard", "vr", "wild hair"]),
  //8102"]),

  new Trait("male", ["bandana", "front beard dark", "vr"]),
  //8103"]),

  new Trait("male", ["luxurious beard", "stringy hair"]),
  //8104"]),

  new Trait("female", ["black lipstick", "choker", "pigtails", "rosy cheeks"]),
  //8105"]),

  new Trait("male", ["earring", "handlebars", "knitted cap"]),
  //8106"]),

  new Trait("male", ["earring", "frown", "stringy hair"]),
  //8107"]),

  new Trait("male", ["earring", "frumpy hair", "normal beard black"]),
  //8108"]),

  new Trait("male", ["cigarette", "front beard", "messy hair"]),
  //8109"]),

  new Trait("female", ["mohawk dark", "purple eye shadow"]),
  //8110"]),

  new Trait("male", ["vampire hair", "vr"]),
  //8111"]),

  new Trait("male", ["cap", "mole", "nerd glasses", "normal beard"]),
  //8112"]),

  new Trait("male", ["eye mask", "messy hair"]),
  //8113"]),

  new Trait("male", ["crazy hair", "eye mask"]),
  //8114"]),

  new Trait("female", ["black lipstick", "headband", "vr"]),
  //8115"]),

  new Trait("male", ["cigarette", "mohawk", "normal beard"]),
  //8116"]),

  new Trait("male", ["cowboy hat", "muttonchops"]),
  //8117"]),

  new Trait("male", ["big shades", "do-rag", "front beard dark"]),
  //8118"]),

  new Trait("female", ["black lipstick", "frumpy hair", "horned rim glasses"]),
  //8119"]),

  new Trait("male", ["clown nose", "front beard", "frown", "stringy hair"]),
  //8120"]),

  new Trait("male", ["chinstrap", "horned rim glasses", "mohawk"]),
  //8121"]),

  new Trait("male", ["earring", "shadow beard"]),
  //8122"]),

  new Trait("male", ["big beard", "do-rag", "small shades"]),
  //8123"]),

  new Trait("male", ["big beard", "eye patch", "mohawk dark"]),
  //8124"]),

  new Trait("male", ["3d glasses", "chinstrap", "stringy hair"]),
  //8125"]),

  new Trait("female", ["clown eyes green", "purple lipstick", "red mohawk"]),
  //8126"]),

  new Trait("zombie", ["headband"]),
  //8127"]),

  new Trait("female", ["vr", "wild blonde"]),
  //8128"]),

  new Trait("male", ["do-rag", "eye mask", "luxurious beard"]),
  //8129"]),

  new Trait("male", ["nerd glasses", "silver chain", "stringy hair"]),
  //8130"]),

  new Trait("male", ["frumpy hair", "normal beard", "vr"]),
  //8131"]),

  new Trait("male", ["clown eyes green", "front beard dark", "peak spike"]),
  //8132"]),

  new Trait("female", ["cap", "purple lipstick"]),
  //8133"]),

  new Trait("female", ["hot lipstick", "pink with hat"]),
  //8134"]),

  new Trait("male", ["earring", "nerd glasses", "shaved head"]),
  //8135"]),

  new Trait("male", ["frown", "mohawk thin", "nerd glasses"]),
  //8136"]),

  new Trait("female", ["half shaved", "nerd glasses"]),
  //8137"]),

  new Trait("male", ["earring", "handlebars", "small shades"]),
  //8138"]),

  new Trait("male", ["earring", "goat", "vampire hair"]),
  //8139"]),

  new Trait("female", ["cigarette", "classic shades", "straight hair"]),
  //8140"]),

  new Trait("female", ["mohawk dark", "rosy cheeks"]),
  //8141"]),

  new Trait("female", ["green eye shadow", "mohawk thin", "purple lipstick"]),
  //8142"]),

  new Trait("male", ["bandana", "chinstrap", "earring"]),
  //8143"]),

  new Trait("male", ["mole", "stringy hair"]),
  //8144"]),

  new Trait("male", ["classic shades", "luxurious beard", "stringy hair"]),
  //8145"]),

  new Trait("male", ["beanie", "cigarette"]),
  //8146"]),

  new Trait("female", ["cigarette", "crazy hair", "purple lipstick"]),
  //8147"]),

  new Trait("female", ["blonde short", "purple eye shadow"]),
  //8148"]),

  new Trait("female", ["purple eye shadow", "straight hair blonde"]),
  //8149"]),

  new Trait("female", ["green eye shadow", "stringy hair"]),
  //8150"]),

  new Trait("male", ["front beard dark", "headband", "small shades"]),
  //8151"]),

  new Trait("male", [
    "earring",
    "eye patch",
    "gold chain",
    "knitted cap",
    "luxurious beard",
    "smile",
  ]),
  //8152"]),

  new Trait("male", ["clown nose", "goat", "stringy hair"]),
  //8153"]),

  new Trait("female", ["knitted cap", "vape"]),
  //8154"]),

  new Trait("male", ["eye patch", "fedora", "shadow beard"]),
  //8155"]),

  new Trait("male", ["chinstrap", "eye mask", "mohawk thin"]),
  //8156"]),

  new Trait("male", ["classic shades", "earring", "front beard", "headband"]),
  //8157"]),

  new Trait("male", ["big shades", "cigarette", "do-rag", "front beard dark"]),
  //8158"]),

  new Trait("male", ["headband", "horned rim glasses", "normal beard black"]),
  //8159"]),

  new Trait("male", ["3d glasses", "mohawk dark", "muttonchops"]),
  //8160"]),

  new Trait("male", ["do-rag", "handlebars", "vr"]),
  //8161"]),

  new Trait("female", ["black lipstick", "pilot helmet"]),
  //8162"]),

  new Trait("male", [
    "earring",
    "horned rim glasses",
    "normal beard black",
    "peak spike",
  ]),
  //8163"]),

  new Trait("female", ["blue eye shadow", "half shaved", "purple lipstick"]),
  //8164"]),

  new Trait("male", ["crazy hair", "vape"]),
  //8165"]),

  new Trait("female", ["big shades", "headband", "hot lipstick"]),
  //8166"]),

  new Trait("female", ["clown eyes green", "crazy hair", "spots"]),
  //8167"]),

  new Trait("female", ["classic shades", "red mohawk"]),
  //8168"]),

  new Trait("female", ["blue eye shadow", "earring", "red mohawk"]),
  //8169"]),

  new Trait("male", ["luxurious beard", "nerd glasses", "wild hair"]),
  //8170"]),

  new Trait("male", ["earring", "eye mask", "frown", "knitted cap"]),
  //8171"]),

  new Trait("female", [
    "clown eyes blue",
    "earring",
    "messy hair",
    "purple lipstick",
  ]),
  //8172"]),

  new Trait("female", [
    "earring",
    "hot lipstick",
    "purple eye shadow",
    "stringy hair",
  ]),
  //8173"]),

  new Trait("male", ["big shades", "frown", "mohawk"]),
  //8174"]),

  new Trait("male", ["frumpy hair", "pipe"]),
  //8175"]),

  new Trait("female", ["green eye shadow", "mohawk thin", "rosy cheeks"]),
  //8176"]),

  new Trait("male", ["clown eyes blue", "mohawk"]),
  //8177"]),

  new Trait("male", ["chinstrap", "headband"]),
  //8178"]),

  new Trait("male", ["frown", "headband", "luxurious beard", "vape"]),
  //8179"]),

  new Trait("male", ["frumpy hair", "shadow beard", "small shades"]),
  //8180"]),

  new Trait("male", ["earring", "shadow beard", "top hat"]),
  //8181"]),

  new Trait("male", ["cap", "clown nose", "handlebars"]),
  //8182"]),

  new Trait("female", ["earring", "purple lipstick", "straight hair blonde"]),
  //8183"]),

  new Trait("female", ["big shades", "blonde bob", "pipe"]),
  //8184"]),

  new Trait("male", ["messy hair", "regular shades"]),
  //8185"]),

  new Trait("male", ["shadow beard", "spots", "wild hair"]),
  //8186"]),

  new Trait("female", [
    "cigarette",
    "earring",
    "hot lipstick",
    "tassle hat",
    "vr",
  ]),
  //8187"]),

  new Trait("male", ["cowboy hat", "normal beard", "small shades"]),
  //8188"]),

  new Trait("male", ["messy hair", "normal beard", "small shades"]),
  //8189"]),

  new Trait("female", ["black lipstick", "blue eye shadow", "red mohawk"]),
  //8190"]),

  new Trait("male", [
    "3d glasses",
    "frown",
    "mole",
    "normal beard black",
    "top hat",
  ]),
  //8191"]),

  new Trait("male", ["handlebars", "headband", "small shades"]),
  //8192"]),

  new Trait("female", ["big shades", "black lipstick", "blonde short"]),
  //8193"]),

  new Trait("female", [
    "blonde bob",
    "earring",
    "gold chain",
    "purple eye shadow",
    "purple lipstick",
  ]),
  //8194"]),

  new Trait("male", ["crazy hair", "earring", "front beard", "spots"]),
  //8195"]),

  new Trait("female", ["blue eye shadow", "cap"]),
  //8196"]),

  new Trait("male", ["earring", "handlebars", "mohawk", "vape"]),
  //8197"]),

  new Trait("male", ["front beard", "headband"]),
  //8198"]),

  new Trait("male", ["eye patch", "knitted cap", "muttonchops"]),
  //8199"]),

  new Trait("male", ["cigarette", "eye mask", "fedora", "mustache"]),
  //8200"]),

  new Trait("female", ["blue eye shadow", "earring", "vape", "wild hair"]),
  //8201"]),

  new Trait("male", ["police cap", "spots"]),
  //8202"]),

  new Trait("female", ["mole", "purple eye shadow", "straight hair"]),
  //8203"]),

  new Trait("male", ["crazy hair", "eye patch", "handlebars"]),
  //8204"]),

  new Trait("male", ["big shades", "front beard", "messy hair"]),
  //8205"]),

  new Trait("female", ["medical mask", "stringy hair"]),
  //8206"]),

  new Trait("male", ["3d glasses", "messy hair", "vape"]),
  //8207"]),

  new Trait("male", ["clown eyes blue", "goat", "mohawk dark"]),
  //8208"]),

  new Trait("female", ["bandana", "eye patch"]),
  //8209"]),

  new Trait("male", ["big beard", "crazy hair"]),
  //8210"]),

  new Trait("male", ["cap", "mole"]),
  //8211"]),

  new Trait("male", ["earring", "goat", "headband"]),
  //8212"]),

  new Trait("male", ["frown", "knitted cap"]),
  //8213"]),

  new Trait("male", ["do-rag", "luxurious beard"]),
  //8214"]),

  new Trait("male", ["chinstrap", "mohawk thin", "small shades"]),
  //8215"]),

  new Trait("male", ["chinstrap", "small shades", "vampire hair"]),
  //8216"]),

  new Trait("female", [
    "clown nose",
    "crazy hair",
    "purple lipstick",
    "welding goggles",
  ]),
  //8217"]),

  new Trait("female", ["black lipstick", "eye patch", "tassle hat"]),
  //8218"]),

  new Trait("ape", ["knitted cap"]),
  //8219"]),

  new Trait("female", ["eye mask", "hot lipstick", "tassle hat", "vape"]),
  //8220"]),

  new Trait("female", ["3d glasses", "mohawk"]),
  //8221"]),

  new Trait("male", [
    "3d glasses",
    "cigarette",
    "earring",
    "luxurious beard",
    "peak spike",
  ]),
  //8222"]),

  new Trait("male", ["fedora", "mustache"]),
  //8223"]),

  new Trait("female", ["nerd glasses", "wild hair"]),
  //8224"]),

  new Trait("male", ["3d glasses", "big beard", "cap forward"]),
  //8225"]),

  new Trait("male", ["earring", "fedora", "goat"]),
  //8226"]),

  new Trait("male", ["crazy hair", "small shades"]),
  //8227"]),

  new Trait("female", ["earring", "purple eye shadow", "wild blonde"]),
  //8228"]),

  new Trait("female", [
    "black lipstick",
    "crazy hair",
    "earring",
    "green eye shadow",
  ]),
  //8229"]),

  new Trait("female", ["blue eye shadow", "orange side", "purple lipstick"]),
  //8230"]),

  new Trait("male", ["eye mask", "messy hair", "smile"]),
  //8231"]),

  new Trait("male", ["normal beard black", "peak spike"]),
  //8232"]),

  new Trait("male", ["cap", "goat", "small shades"]),
  //8233"]),

  new Trait("male", ["cigarette", "do-rag", "earring", "mole"]),
  //8234"]),

  new Trait("female", ["classic shades", "earring", "red mohawk"]),
  //8235"]),

  new Trait("male", ["cigarette", "earring", "knitted cap", "small shades"]),
  //8236"]),

  new Trait("male", ["shadow beard", "vampire hair"]),
  //8237"]),

  new Trait("male", ["mohawk thin", "vape"]),
  //8238"]),

  new Trait("female", ["bandana", "black lipstick", "eye mask", "pipe"]),
  //8239"]),

  new Trait("female", ["earring", "mohawk", "nerd glasses"]),
  //8240"]),

  new Trait("female", ["black lipstick", "mole", "regular shades", "tiara"]),
  //8241"]),

  new Trait("male", ["earring", "eye patch", "gold chain", "mohawk dark"]),
  //8242"]),

  new Trait("female", ["blue eye shadow", "earring", "pigtails"]),
  //8243"]),

  new Trait("male", ["earring", "peak spike", "smile"]),
  //8244"]),

  new Trait("male", ["bandana", "muttonchops", "regular shades"]),
  //8245"]),

  new Trait("male", ["horned rim glasses", "pipe", "shaved head"]),
  //8246"]),

  new Trait("male", ["earring", "handlebars", "mohawk dark", "regular shades"]),
  //8247"]),

  new Trait("female", [
    "black lipstick",
    "blue eye shadow",
    "clown nose",
    "earring",
    "frumpy hair",
  ]),
  //8248"]),

  new Trait("female", ["bandana", "black lipstick", "purple eye shadow"]),
  //8249"]),

  new Trait("male", ["cigarette", "clown hair green", "eye patch"]),
  //8250"]),

  new Trait("female", ["pilot helmet", "pipe"]),
  //8251"]),

  new Trait("female", ["cigarette", "crazy hair"]),
  //8252"]),

  new Trait("male", ["cowboy hat", "normal beard"]),
  //8253"]),

  new Trait("female", ["mole", "purple eye shadow", "wild blonde"]),
  //8254"]),

  new Trait("female", ["big shades", "mole", "straight hair blonde"]),
  //8255"]),

  new Trait("male", ["cigarette", "earring", "mohawk", "shadow beard"]),
  //8256"]),

  new Trait("male", ["knitted cap", "luxurious beard", "regular shades"]),
  //8257"]),

  new Trait("male", ["big beard", "cap forward", "earring", "nerd glasses"]),
  //8258"]),

  new Trait("male", ["fedora", "handlebars", "horned rim glasses"]),
  //8259"]),

  new Trait("female", ["black lipstick", "earring", "tiara"]),
  //8260"]),

  new Trait("female", ["cigarette", "purple lipstick", "red mohawk"]),
  //8261"]),

  new Trait("male", ["earring", "shaved head", "smile"]),
  //8262"]),

  new Trait("female", ["earring", "rosy cheeks"]),
  //8263"]),

  new Trait("male", ["crazy hair", "earring", "eye patch"]),
  //8264"]),

  new Trait("female", ["big shades", "earring", "pigtails", "purple lipstick"]),
  //8265"]),

  new Trait("male", ["mohawk thin", "mustache", "regular shades"]),
  //8266"]),

  new Trait("female", ["eye patch", "wild blonde"]),
  //8267"]),

  new Trait("female", ["clown hair green", "hot lipstick", "nerd glasses"]),
  //8268"]),

  new Trait("female", ["cigarette", "earring", "red mohawk"]),
  //8269"]),

  new Trait("male", ["cap", "nerd glasses", "pipe"]),
  //8270"]),

  new Trait("female", ["bandana", "green eye shadow", "purple lipstick"]),
  //8271"]),

  new Trait("male", ["chinstrap", "headband"]),
  //8272"]),

  new Trait("male", ["crazy hair", "goat"]),
  //8273"]),

  new Trait("male", ["cap", "chinstrap", "eye mask"]),
  //8274"]),

  new Trait("female", ["frumpy hair", "green eye shadow"]),
  //8275"]),

  new Trait("female", ["earring", "silver chain", "wild blonde"]),
  //8276"]),

  new Trait("male", ["hoodie", "mole", "small shades"]),
  //8277"]),

  new Trait("male", ["cap", "chinstrap", "vr"]),
  //8278"]),

  new Trait("female", ["earring", "half shaved", "purple eye shadow"]),
  //8279"]),

  new Trait("male", [
    "bandana",
    "cigarette",
    "clown eyes blue",
    "normal beard black",
  ]),
  //8280"]),

  new Trait("male", ["do-rag", "goat", "nerd glasses"]),
  //8281"]),

  new Trait("female", ["classic shades", "purple lipstick", "wild white hair"]),
  //8282"]),

  new Trait("male", ["eye patch", "mohawk thin", "muttonchops"]),
  //8283"]),

  new Trait("female", ["3d glasses", "earring", "mohawk"]),
  //8284"]),

  new Trait("male", ["cigarette", "mohawk dark", "normal beard"]),
  //8285"]),

  new Trait("female", ["3d glasses", "headband"]),
  //8286"]),

  new Trait("female", [
    "blue eye shadow",
    "cigarette",
    "hot lipstick",
    "straight hair",
  ]),
  //8287"]),

  new Trait("male", ["classic shades", "goat", "peak spike"]),
  //8288"]),

  new Trait("male", ["big shades", "cigarette", "goat", "vampire hair"]),
  //8289"]),

  new Trait("female", ["mole", "vr", "wild white hair"]),
  //8290"]),

  new Trait("male", ["earring", "horned rim glasses", "mohawk dark"]),
  //8291"]),

  new Trait("male", ["handlebars", "headband"]),
  //8292"]),

  new Trait("female", ["hot lipstick", "wild blonde"]),
  //8293"]),

  new Trait("male", ["classic shades", "knitted cap", "pipe"]),
  //8294"]),

  new Trait("male", ["classic shades", "luxurious beard", "messy hair"]),
  //8295"]),

  new Trait("female", ["black lipstick", "dark hair"]),
  //8296"]),

  new Trait("male", ["cap forward", "chinstrap"]),
  //8297"]),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "crazy hair",
    "green eye shadow",
  ]),
  //8298"]),

  new Trait("female", ["choker", "dark hair"]),
  //8299"]),

  new Trait("female", ["horned rim glasses", "hot lipstick", "tassle hat"]),
  //8300"]),

  new Trait("male", ["earring", "eye patch", "smile"]),
  //8301"

  new Trait("male", ["big shades", "cap forward", "earring", "handlebars"]),
  //8302"]),

  new Trait("male", ["fedora", "nerd glasses", "normal beard"]),
  //8303"]),

  new Trait("male", ["front beard", "horned rim glasses", "purple hair"]),
  //8304"]),

  new Trait("male", ["3d glasses", "cigarette", "clown nose", "hoodie"]),
  //8305"]),

  new Trait("male", ["do-rag", "regular shades"]),
  //8306"]),

  new Trait("zombie", ["mustache", "stringy hair"]),
  //8307"]),

  new Trait("female", ["black lipstick", "horned rim glasses", "knitted cap"]),
  //8308"]),

  new Trait("female", ["big shades", "knitted cap"]),
  //8309"]),

  new Trait("female", ["bandana", "earring", "eye patch"]),
  //8310"]),

  new Trait("male", ["3d glasses", "headband"]),
  //8311"]),

  new Trait("male", ["earring", "frown", "purple hair"]),
  //8312"]),

  new Trait("male", ["cigarette", "muttonchops", "top hat"]),
  //8313"]),

  new Trait("female", ["clown nose", "earring", "mohawk thin"]),
  //8314"]),

  new Trait("male", ["cap", "earring", "pipe"]),
  //8315"]),

  new Trait("female", ["blue eye shadow", "cigarette", "half shaved"]),
  //8316"]),

  new Trait("male", ["classic shades", "cowboy hat", "luxurious beard"]),
  //8317"]),

  new Trait("male", ["bandana", "handlebars"]),
  //8318"]),

  new Trait("male", ["chinstrap", "earring", "knitted cap"]),
  //8319"]),

  new Trait("female", ["gold chain", "rosy cheeks", "tassle hat"]),
  //8320"]),

  new Trait("female", ["blonde short", "blue eye shadow"]),
  //8321"]),

  new Trait("male", ["front beard", "regular shades", "stringy hair"]),
  //8322"]),

  new Trait("female", [
    "clown nose",
    "frumpy hair",
    "nerd glasses",
    "purple lipstick",
  ]),
  //8323"]),

  new Trait("male", ["luxurious beard", "mohawk thin", "nerd glasses"]),
  //8324"]),

  new Trait("male", ["buck teeth", "clown hair green", "earring"]),
  //8325"]),

  new Trait("female", [
    "black lipstick",
    "earring",
    "green eye shadow",
    "mohawk thin",
  ]),
  //8326"]),

  new Trait("male", ["big shades", "goat", "knitted cap"]),
  //8327"]),

  new Trait("male", ["cigarette", "gold chain", "hoodie"]),
  //8328"]),

  new Trait("male", ["pipe", "wild hair"]),
  //8329"]),

  new Trait("female", ["mohawk dark", "purple lipstick", "vape"]),
  //8330"]),

  new Trait("female", ["bandana", "earring", "regular shades"]),
  //8331"]),

  new Trait("male", ["earring", "goat", "peak spike"]),
  //8332"]),

  new Trait("male", ["frumpy hair", "vr"]),
  //8333"]),

  new Trait("male", ["classic shades", "fedora", "muttonchops"]),
  //8334"]),

  new Trait("male", ["bandana", "horned rim glasses", "mustache"]),
  //8335"]),

  new Trait("male", ["clown eyes blue", "wild hair"]),
  //8336"]),

  new Trait("male", ["crazy hair", "small shades", "smile"]),
  //8337"]),

  new Trait("male", ["big shades", "knitted cap", "vape"]),
  //8338"]),

  new Trait("male", ["bandana", "earring", "mole"]),
  //8339"]),

  new Trait("male", ["goat", "mohawk", "pipe"]),
  //8340"]),

  new Trait("male", ["earring", "muttonchops", "shaved head"]),
  //8341"]),

  new Trait("male", ["front beard", "knitted cap", "silver chain"]),
  //8342"]),

  new Trait("male", ["cigarette", "messy hair", "muttonchops", "small shades"]),
  //8343"]),

  new Trait("male", [
    "big shades",
    "clown hair green",
    "earring",
    "normal beard black",
  ]),
  //8344"]),

  new Trait("female", ["black lipstick", "green eye shadow", "half shaved"]),
  //8345"]),

  new Trait("male", ["cigarette", "clown eyes blue", "knitted cap", "smile"]),
  //8346"]),

  new Trait("female", ["earring", "red mohawk"]),
  //8347"]),

  new Trait("male", [
    "big beard",
    "buck teeth",
    "cigarette",
    "classic shades",
    "earring",
    "mole",
    "top hat",
  ]),
  //8348"]),

  new Trait("female", ["crazy hair", "purple lipstick", "welding goggles"]),
  //8349"]),

  new Trait("female", ["mole", "pilot helmet"]),
  //8350"]),

  new Trait("female", ["earring", "mohawk", "mole"]),
  //8351"]),

  new Trait("female", ["blue eye shadow", "cap", "earring"]),
  //8352"]),

  new Trait("male", ["cigarette", "crazy hair", "luxurious beard"]),
  //8353"]),

  new Trait("female", ["blue eye shadow", "dark hair", "hot lipstick"]),
  //8354"]),

  new Trait("male", ["cigarette", "mohawk"]),
  //8355"]),

  new Trait("female", ["mohawk dark", "nerd glasses"]),
  //8356"]),

  new Trait("male", ["clown nose", "earring", "front beard", "vampire hair"]),
  //8357"]),

  new Trait("male", ["eye patch", "messy hair"]),
  //8358"]),

  new Trait("male", ["big shades", "front beard dark", "hoodie"]),
  //8359"]),

  new Trait("female", ["gold chain", "green eye shadow", "stringy hair"]),
  //8360"]),

  new Trait("male", ["classic shades", "muttonchops", "police cap"]),
  //8361"]),

  new Trait("male", ["messy hair", "smile"]),
  //8362"]),

  new Trait("female", ["clown eyes green", "hot lipstick", "straight hair"]),
  //8363"]),

  new Trait("female", ["purple lipstick", "stringy hair", "welding goggles"]),
  //8364"]),

  new Trait("female", ["3d glasses", "cigarette", "wild white hair"]),
  //8365"]),

  new Trait("male", ["eye patch", "shadow beard", "shaved head"]),
  //8366"]),

  new Trait("male", ["cigarette", "eye patch", "knitted cap"]),
  //8367"]),

  new Trait("male", ["3d glasses", "clown hair green", "earring"]),
  //8368"]),

  new Trait("male", ["earring", "hoodie", "smile"]),
  //8369"]),

  new Trait("male", ["chinstrap", "regular shades"]),
  //8370"]),

  new Trait("male", ["mustache"]),
  //8371"]),

  new Trait("male", ["big shades", "chinstrap", "stringy hair"]),
  //8372"]),

  new Trait("male", ["mohawk thin", "smile"]),
  //8373"]),

  new Trait("female", [
    "clown eyes blue",
    "earring",
    "purple lipstick",
    "wild blonde",
  ]),
  //8374"]),

  new Trait("male", ["earring", "mohawk thin", "regular shades"]),
  //8375"]),

  new Trait("female", [
    "black lipstick",
    "earring",
    "headband",
    "nerd glasses",
  ]),
  //8376"]),

  new Trait("male", ["do-rag", "luxurious beard", "small shades"]),
  //8377"]),

  new Trait("male", ["clown nose", "horned rim glasses", "mohawk"]),
  //8378"]),

  new Trait("male", ["eye mask", "handlebars", "stringy hair"]),
  //8379"]),

  new Trait("male", ["earring", "vr"]),
  //8380"]),

  new Trait("male", ["bandana", "muttonchops"]),
  //8381"]),

  new Trait("male", ["cigarette", "crazy hair", "nerd glasses"]),
  //8382"]),

  new Trait("male", ["eye patch", "goat", "mohawk thin"]),
  //8383"]),

  new Trait("male", ["mohawk thin", "spots"]),
  //8384"]),

  new Trait("male", ["frown", "frumpy hair", "mole", "silver chain"]),
  //8385"]),

  new Trait("zombie", ["classic shades", "crazy hair"]),
  //8386"]),

  new Trait("female", [
    "blonde bob",
    "clown eyes green",
    "earring",
    "purple lipstick",
  ]),
  //8387"]),

  new Trait("male", ["classic shades", "mohawk", "normal beard"]),
  //8388"]),

  new Trait("male", ["cap forward", "frown", "mustache"]),
  //8389"]),

  new Trait("male", ["frown", "goat", "nerd glasses", "stringy hair"]),
  //8390"]),

  new Trait("male", ["big shades", "knitted cap"]),
  //8391"]),

  new Trait("female", ["black lipstick", "orange side"]),
  //8392"]),

  new Trait("male", ["cigarette", "crazy hair", "smile"]),
  //8393"]),

  new Trait("female", ["big shades", "blonde bob", "purple lipstick"]),
  //8394"]),

  new Trait("male", ["big beard", "shaved head", "silver chain"]),
  //8395"]),

  new Trait("male", ["mole", "stringy hair"]),
  //8396"]),

  new Trait("female", ["mole", "straight hair dark"]),
  //8397"]),

  new Trait("male", ["handlebars", "peak spike", "pipe"]),
  //8398"]),

  new Trait("female", [
    "black lipstick",
    "earring",
    "frumpy hair",
    "purple eye shadow",
  ]),
  //8399"]),

  new Trait("female", ["bandana", "big shades", "gold chain", "hot lipstick"]),
  //8400"]),

  new Trait("male", ["3d glasses", "bandana", "handlebars"]),
  //8401"]),

  new Trait("male", ["big beard", "cowboy hat", "eye mask"]),
  //8402"]),

  new Trait("male", ["classic shades"]),
  //8403"]),

  new Trait("male", ["goat", "hoodie", "vape"]),
  //8404"]),

  new Trait("female", ["big shades", "cigarette", "tassle hat"]),
  //8405"]),

  new Trait("female", ["earring", "headband", "purple lipstick"]),
  //8406"]),

  new Trait("male", ["cigarette", "fedora", "normal beard", "vr"]),
  //8407"]),

  new Trait("male", ["cigarette", "mohawk dark", "muttonchops"]),
  //8408"]),

  new Trait("male", ["eye patch", "muttonchops", "shaved head"]),
  //8409"]),

  new Trait("male", ["cowboy hat", "earring", "front beard"]),
  //8410"]),

  new Trait("female", ["clown eyes green", "clown hair green"]),
  //8411"]),

  new Trait("male", ["chinstrap", "nerd glasses", "vape", "wild hair"]),
  //8412"]),

  new Trait("male", ["fedora", "smile"]),
  //8413"]),

  new Trait("female", ["purple lipstick", "wild blonde"]),
  //8414"]),

  new Trait("male", ["clown eyes green", "stringy hair"]),
  //8415"]),

  new Trait("female", [
    "blue eye shadow",
    "earring",
    "purple lipstick",
    "tassle hat",
  ]),
  //8416"]),

  new Trait("female", ["mole", "wild white hair"]),
  //8417"]),

  new Trait("female", ["green eye shadow", "half shaved", "hot lipstick"]),
  //8418"]),

  new Trait("female", ["blonde short", "mole"]),
  //8419"]),

  new Trait("female", ["cigarette", "tiara"]),
  //8420"]),

  new Trait("female", ["purple lipstick", "regular shades", "wild hair"]),
  //8421"]),

  new Trait("male", ["cigarette", "earring", "mohawk", "muttonchops"]),
  //8422"]),

  new Trait("male", ["earring", "knitted cap", "normal beard black"]),
  //8423"]),

  new Trait("female", ["bandana", "clown eyes blue"]),
  //8424"]),

  new Trait("female", [
    "black lipstick",
    "earring",
    "mohawk thin",
    "purple eye shadow",
  ]),
  //8425"]),

  new Trait("female", ["purple lipstick", "welding goggles", "wild blonde"]),
  //8426"]),

  new Trait("male", [
    "earring",
    "eye patch",
    "normal beard black",
    "peak spike",
  ]),
  //8427"]),

  new Trait("female", ["blonde short", "clown eyes blue", "earring"]),
  //8428"]),

  new Trait("male", [
    "horned rim glasses",
    "normal beard black",
    "stringy hair",
  ]),
  //8429"]),

  new Trait("male", ["frown", "mohawk dark", "small shades"]),
  //8430"]),

  new Trait("female", ["blonde bob", "clown nose", "purple lipstick"]),
  //8431"]),

  new Trait("male", [
    "cigarette",
    "earring",
    "eye patch",
    "mole",
    "shadow beard",
  ]),
  //8432"]),

  new Trait("male", ["classic shades", "mohawk thin", "mole"]),
  //8433"]),

  new Trait("female", ["eye mask", "purple lipstick", "straight hair dark"]),
  //8434"]),

  new Trait("male", ["mohawk dark", "nerd glasses"]),
  //8435"]),

  new Trait("female", ["bandana", "horned rim glasses"]),
  //8436"]),

  new Trait("female", ["bandana", "gold chain"]),
  //8437"]),

  new Trait("female", ["blue eye shadow", "cigarette", "mohawk dark", "mole"]),
  //8438"]),

  new Trait("female", ["choker", "hot lipstick", "messy hair"]),
  //8439"]),

  new Trait("female", ["earring", "eye patch", "half shaved", "hot lipstick"]),
  //8440"]),

  new Trait("male", ["goat", "small shades", "wild hair"]),
  //8441"]),

  new Trait("male", ["eye mask", "peak spike"]),
  //8442"]),

  new Trait("male", ["cigarette", "crazy hair", "earring", "normal beard"]),
  //8443"]),

  new Trait("male", ["horned rim glasses", "muttonchops", "shaved head"]),
  //8444"]),

  new Trait("male", ["big shades", "hoodie", "normal beard", "smile"]),
  //8445"]),

  new Trait("male", ["bandana", "classic shades", "earring", "goat"]),
  //8446"]),

  new Trait("female", ["gold chain", "messy hair", "rosy cheeks"]),
  //8447"]),

  new Trait("male", ["frown", "frumpy hair", "goat", "small shades"]),
  //8448"]),

  new Trait("male", ["mohawk dark", "nerd glasses"]),
  //8449"]),

  new Trait("female", ["clown eyes blue", "headband", "hot lipstick"]),
  //8450"]),

  new Trait("male", ["earring", "messy hair", "regular shades"]),
  //8451"]),

  new Trait("male", ["cowboy hat", "muttonchops"]),
  //8452"]),

  new Trait("male", ["eye mask", "knitted cap", "muttonchops"]),
  //8453"]),

  new Trait("female", ["horned rim glasses", "straight hair blonde"]),
  //8454"]),

  new Trait("male", ["clown eyes green", "muttonchops", "police cap"]),
  //8455"]),

  new Trait("female", ["cigarette", "stringy hair"]),
  //8456"]),

  new Trait("male", ["clown eyes green", "frumpy hair", "normal beard"]),
  //8457"]),

  new Trait("female", ["eye mask", "pipe", "wild hair"]),
  //8458"]),

  new Trait("male", ["big shades", "earring", "wild hair"]),
  //8459"]),

  new Trait("male", ["classic shades", "normal beard", "wild hair"]),
  //8460"]),

  new Trait("female", ["black lipstick", "welding goggles", "wild hair"]),
  //8461"]),

  new Trait("male", ["bandana", "eye patch", "pipe"]),
  //8462"]),

  new Trait("male", ["bandana", "earring", "frown", "muttonchops"]),
  //8463"]),

  new Trait("male", ["frumpy hair", "normal beard"]),
  //8464"]),

  new Trait("female", ["cigarette", "pilot helmet", "purple lipstick"]),
  //8465"]),

  new Trait("male", ["eye patch", "handlebars", "headband"]),
  //8466"]),

  new Trait("female", ["gold chain", "tassle hat"]),
  //8467"]),

  new Trait("male", ["earring", "gold chain", "mohawk thin"]),
  //8468"]),

  new Trait("male", ["cigarette", "mustache", "purple hair", "small shades"]),
  //8469"]),

  new Trait("female", ["clown eyes blue", "earring", "mohawk thin"]),
  //8470"]),

  new Trait("male", ["3d glasses", "goat", "police cap"]),
  //8471"]),

  new Trait("zombie", ["mohawk thin", "small shades"]),
  //8472"]),

  new Trait("male", ["3d glasses", "cigarette", "crazy hair"]),
  //8473"]),

  new Trait("male", ["cap forward", "horned rim glasses"]),
  //8474"]),

  new Trait("male", ["mole", "peak spike"]),
  //8475"]),

  new Trait("male", ["cigarette", "earring", "stringy hair"]),
  //8476"]),

  new Trait("male", ["crazy hair", "handlebars"]),
  //8477"]),

  new Trait("male", ["muttonchops", "peak spike", "vr"]),
  //8478"]),

  new Trait("male", ["clown nose", "earring", "nerd glasses", "purple hair"]),
  //8479"]),

  new Trait("male", ["cigarette", "eye mask", "frumpy hair"]),
  //8480"]),

  new Trait("male", ["cigarette", "headband", "small shades"]),
  //8481"]),

  new Trait("male", ["mohawk thin", "smile"]),
  //8482"]),

  new Trait("female", [
    "earring",
    "frumpy hair",
    "green eye shadow",
    "purple lipstick",
  ]),
  //8483"]),

  new Trait("male", ["earring", "regular shades", "shaved head"]),
  //8484"]),

  new Trait("female", [
    "black lipstick",
    "purple eye shadow",
    "tassle hat",
    "vape",
  ]),
  //8485"]),

  new Trait("male", ["nerd glasses", "police cap", "silver chain"]),
  //8486"]),

  new Trait("female", ["blonde bob", "cigarette", "green eye shadow"]),
  //8487"]),

  new Trait("male", ["eye mask", "goat", "peak spike"]),
  //8488"]),

  new Trait("male", ["cap forward", "vr"]),
  //8489"]),

  new Trait("male", ["eye patch", "frumpy hair", "muttonchops"]),
  //8490"]),

  new Trait("male", ["chinstrap"]),
  //8491"]),

  new Trait("male", ["frumpy hair", "shadow beard", "small shades"]),
  //8492"]),

  new Trait("female", ["hot lipstick", "pipe", "tiara"]),
  //8493"]),

  new Trait("male", ["earring", "normal beard", "peak spike"]),
  //8494"]),

  new Trait("female", ["bandana", "earring", "mole", "purple lipstick"]),
  //8495"]),

  new Trait("female", ["clown eyes blue", "gold chain", "half shaved"]),
  //8496"]),

  new Trait("female", ["black lipstick", "crazy hair", "purple eye shadow"]),
  //8497"]),

  new Trait("ape", ["regular shades", "top hat"]),
  //8498"]),

  new Trait("male", ["chinstrap", "hoodie", "rosy cheeks"]),
  //8499"]),

  new Trait("male", ["horned rim glasses", "shadow beard", "stringy hair"]),
  //8500"]),

  new Trait("male", ["do-rag", "handlebars", "nerd glasses"]),
  //8501"]),

  new Trait("female", ["clown eyes green", "frumpy hair", "vape"]),
  //8502"]),

  new Trait("male", ["messy hair", "muttonchops", "nerd glasses"]),
  //8503"]),

  new Trait("male", ["crazy hair", "eye patch", "goat"]),
  //8504"]),

  new Trait("female", ["clown eyes blue", "headband"]),
  //8505"]),

  new Trait("female", ["blonde bob", "blue eye shadow", "medical mask"]),
  //8506"]),

  new Trait("male", ["big shades", "hoodie", "smile"]),
  //8507"]),

  new Trait("male", ["classic shades", "earring", "mohawk thin"]),
  //8508"]),

  new Trait("female", ["green eye shadow", "mohawk thin", "purple lipstick"]),
  //8509"]),

  new Trait("male", ["earring", "mohawk", "vr"]),
  //8510"]),

  new Trait("female", ["spots", "wild white hair"]),
  //8511"]),

  new Trait("female", ["blue eye shadow", "cigarette", "stringy hair"]),
  //8512"]),

  new Trait("male", ["horned rim glasses", "normal beard", "wild hair"]),
  //8513"]),

  new Trait("female", [
    "horned rim glasses",
    "hot lipstick",
    "straight hair dark",
  ]),
  //8514"]),

  new Trait("male", ["big beard", "hoodie"]),
  //8515"]),

  new Trait("female", ["hot lipstick", "straight hair dark", "vape"]),
  //8516"]),

  new Trait("male", ["bandana", "eye patch", "handlebars"]),
  //8517"]),

  new Trait("male", ["mustache", "regular shades", "stringy hair"]),
  //8518"]),

  new Trait("female", ["hot lipstick", "mohawk"]),
  //8519"]),

  new Trait("male", ["cowboy hat", "shadow beard", "small shades"]),
  //8520"]),

  new Trait("male", ["big shades", "luxurious beard", "peak spike"]),
  //8521"]),

  new Trait("male", ["mohawk thin", "muttonchops", "vr"]),
  //8522"]),

  new Trait("female", ["crazy hair", "earring", "purple eye shadow"]),
  //8523"]),

  new Trait("female", ["blue eye shadow", "clown hair green"]),
  //8524"]),

  new Trait("male", ["clown nose", "police cap"]),
  //8525"]),

  new Trait("female", ["classic shades", "straight hair dark"]),
  //8526"]),

  new Trait("female", ["eye mask", "tiara"]),
  //8527"]),

  new Trait("female", ["black lipstick", "eye mask", "stringy hair"]),
  //8528"]),

  new Trait("female", ["blonde bob", "purple lipstick", "vr"]),
  //8529"]),

  new Trait("male", ["cigarette", "fedora", "regular shades"]),
  //8530"]),

  new Trait("zombie", ["goat", "regular shades", "stringy hair"]),
  //8531"]),

  new Trait("male", ["buck teeth", "top hat"]),
  //8532"]),

  new Trait("female", ["half shaved", "nerd glasses", "purple lipstick"]),
  //8533"]),

  new Trait("male", ["messy hair", "normal beard black", "vr"]),
  //8534"]),

  new Trait("female", ["dark hair", "green eye shadow", "purple lipstick"]),
  //8535"]),

  new Trait("male", ["eye patch", "shadow beard", "shaved head"]),
  //8536"]),

  new Trait("female", ["hot lipstick", "regular shades", "straight hair dark"]),
  //8537"]),

  new Trait("female", ["clown eyes blue", "hot lipstick", "stringy hair"]),
  //8538"]),

  new Trait("female", [
    "blonde bob",
    "earring",
    "green eye shadow",
    "hot lipstick",
  ]),
  //8539"]),

  new Trait("male", ["mohawk", "normal beard black"]),
  //8540"]),

  new Trait("male", ["mohawk", "normal beard", "regular shades"]),
  //8541"]),

  new Trait("male", ["muttonchops", "stringy hair"]),
  //8542"]),

  new Trait("male", ["cap", "earring", "horned rim glasses"]),
  //8543"]),

  new Trait("female", ["black lipstick", "earring", "mohawk dark"]),
  //8544"]),

  new Trait("male", ["3d glasses", "mohawk thin", "shadow beard"]),
  //8545"]),

  new Trait("male", ["frown", "top hat"]),
  //8546"]),

  new Trait("male", [
    "cigarette",
    "classic shades",
    "frumpy hair",
    "normal beard black",
  ]),
  //8547"]),

  new Trait("female", ["bandana", "clown eyes blue", "hot lipstick"]),
  //8548"]),

  new Trait("male", ["muttonchops"]),
  //8549"]),

  new Trait("male", ["3d glasses", "purple hair", "shadow beard"]),
  //8550"]),

  new Trait("male", ["earring", "knitted cap", "smile"]),
  //8551"]),

  new Trait("female", ["black lipstick", "blue eye shadow", "pink with hat"]),
  //8552"]),

  new Trait("zombie", ["front beard dark"]),
  //8553"]),

  new Trait("male", ["earring", "fedora", "gold chain"]),
  //8554"]),

  new Trait("male", ["knitted cap", "regular shades"]),
  //8555"]),

  new Trait("female", ["black lipstick", "purple eye shadow", "tassle hat"]),
  //8556"]),

  new Trait("male", ["eye mask", "front beard", "peak spike", "pipe"]),
  //8557"]),

  new Trait("male", ["earring", "mustache", "wild hair"]),
  //8558"]),

  new Trait("male", ["front beard dark", "horned rim glasses", "messy hair"]),
  //8559"]),

  new Trait("female", [
    "black lipstick",
    "horned rim glasses",
    "straight hair",
  ]),
  //8560"]),

  new Trait("male", ["cap forward", "rosy cheeks"]),
  //8561"]),

  new Trait("male", ["beanie", "earring"]),
  //8562"]),

  new Trait("male", ["cigarette", "crazy hair", "earring", "nerd glasses"]),
  //8563"]),

  new Trait("male", ["big beard", "cap forward"]),
  //8564"]),

  new Trait("female", ["blonde short", "clown eyes blue"]),
  //8565"]),

  new Trait("female", ["vape", "wild blonde"]),
  //8566"]),

  new Trait("male", ["earring", "frown", "frumpy hair", "nerd glasses"]),
  //8567"]),

  new Trait("male", ["shadow beard", "vr"]),
  //8568"]),

  new Trait("male", ["big beard", "cap", "nerd glasses"]),
  //8569"]),

  new Trait("female", ["black lipstick", "blue eye shadow", "straight hair"]),
  //8570"]),

  new Trait("male", ["bandana", "earring", "rosy cheeks", "shadow beard"]),
  //8571"]),

  new Trait("male", ["cigarette", "mohawk", "regular shades"]),
  //8572"]),

  new Trait("male", ["do-rag", "goat"]),
  //8573"]),

  new Trait("male", ["cap", "earring", "silver chain", "vr"]),
  //8574"]),

  new Trait("male", ["purple hair", "vr"]),
  //8575"]),

  new Trait("female", ["3d glasses", "cigarette", "pigtails"]),
  //8576"]),

  new Trait("female", ["silver chain", "wild blonde"]),
  //8577"]),

  new Trait("male", ["nerd glasses", "normal beard"]),
  //8578"]),

  new Trait("female", ["black lipstick", "green eye shadow", "pink with hat"]),
  //8579"]),

  new Trait("female", [
    "cap",
    "clown eyes green",
    "earring",
    "purple lipstick",
  ]),
  //8580"]),

  new Trait("male", ["beanie", "gold chain", "horned rim glasses"]),
  //8581"]),

  new Trait("female", ["blonde short", "clown eyes green", "pipe"]),
  //8582"]),

  new Trait("male", ["front beard", "police cap"]),
  //8583"]),

  new Trait("male", ["clown nose", "earring", "mohawk", "muttonchops"]),
  //8584"]),

  new Trait("female", ["dark hair", "nerd glasses", "purple lipstick"]),
  //8585"]),

  new Trait("male", ["clown eyes blue", "mohawk thin"]),
  //8586"]),

  new Trait("male", ["earring", "nerd glasses", "wild hair"]),
  //8587"]),

  new Trait("male", ["headband", "luxurious beard", "small shades"]),
  //8588"]),

  new Trait("female", ["pigtails", "purple eye shadow"]),
  //8589"]),

  new Trait("male", ["cap forward", "normal beard black"]),
  //8590"]),

  new Trait("male", ["eye patch", "headband", "muttonchops"]),
  //8591"]),

  new Trait("female", ["big shades", "mole", "wild blonde"]),
  //8592"]),

  new Trait("male", ["normal beard black"]),
  //8593"]),

  new Trait("male", ["mohawk", "nerd glasses", "smile"]),
  //8594"]),

  new Trait("female", ["mohawk dark", "vr"]),
  //8595"]),

  new Trait("male", ["cigarette", "earring", "goat", "regular shades"]),
  //8596"]),

  new Trait("male", ["bandana", "normal beard"]),
  //8597"]),

  new Trait("male", ["big shades", "shadow beard", "shaved head"]),
  //8598"]),

  new Trait("male", ["crazy hair", "normal beard black", "pipe"]),
  //8599"]),

  new Trait("female", ["clown eyes green", "dark hair"]),
  //8600"]),

  new Trait("male", ["classic shades", "purple hair"]),
  //8601"]),

  new Trait("female", ["messy hair", "purple eye shadow", "purple lipstick"]),
  //8602"]),

  new Trait("male", ["big shades", "normal beard black", "stringy hair"]),
  //8603"]),

  new Trait("female", ["black lipstick", "blue eye shadow", "knitted cap"]),
  //8604"]),

  new Trait("female", ["blonde short", "cigarette"]),
  //8605"]),

  new Trait("male", ["gold chain", "knitted cap", "luxurious beard"]),
  //8606"]),

  new Trait("male", ["classic shades", "shaved head"]),
  //8607"]),

  new Trait("male", ["cap", "medical mask", "smile"]),
  //8608"]),

  new Trait("male", ["earring", "frown", "mohawk dark"]),
  //8609"]),

  new Trait("male", ["cap forward", "cigarette", "eye patch", "mole"]),
  //8610"]),

  new Trait("male", ["earring", "handlebars", "shaved head"]),
  //8611"]),

  new Trait("male", ["stringy hair", "vr"]),
  //8612"]),

  new Trait("male", ["big shades", "earring", "messy hair"]),
  //8613"]),

  new Trait("male", ["cap", "chinstrap", "clown eyes green", "earring"]),
  //8614"]),

  new Trait("male", ["mole", "smile", "stringy hair"]),
  //8615"]),

  new Trait("male", ["cap", "front beard dark", "nerd glasses"]),
  //8616"]),

  new Trait("female", ["big shades", "earring", "orange side", "pipe"]),
  //8617"]),

  new Trait("male", [
    "earring",
    "hoodie",
    "medical mask",
    "muttonchops",
    "regular shades",
  ]),
  //8618"]),

  new Trait("male", ["classic shades", "messy hair", "shadow beard"]),
  //8619"]),

  new Trait("male", ["beanie", "regular shades"]),
  //8620"]),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "earring",
    "straight hair dark",
  ]),
  //8621"]),

  new Trait("male", ["regular shades", "smile"]),
  //8622"]),

  new Trait("female", [
    "black lipstick",
    "regular shades",
    "straight hair dark",
  ]),
  //8623"]),

  new Trait("male", ["mohawk thin", "regular shades", "rosy cheeks"]),
  //8624"]),

  new Trait("male", ["mole", "top hat"]),
  //8625"]),

  new Trait("male", ["chinstrap", "earring", "peak spike"]),
  //8626"]),

  new Trait("male", ["cigarette", "do-rag", "earring", "muttonchops"]),
  //8627"]),

  new Trait("male", ["cap forward", "clown eyes green"]),
  //8628"]),

  new Trait("female", ["clown nose", "tassle hat"]),
  //8629"]),

  new Trait("female", ["purple lipstick", "tiara"]),
  //8630"]),

  new Trait("female", [
    "hot lipstick",
    "purple eye shadow",
    "straight hair dark",
  ]),
  //8631"]),

  new Trait("male", ["classic shades", "mole", "wild hair"]),
  //8632"]),

  new Trait("male", ["cap forward", "gold chain", "regular shades"]),
  //8633"]),

  new Trait("male", ["frown", "pipe", "shaved head"]),
  //8634"]),

  new Trait("female", ["clown eyes green", "purple lipstick", "red mohawk"]),
  //8635"]),

  new Trait("female", ["blonde bob", "clown eyes green", "hot lipstick"]),
  //8636"]),

  new Trait("male", ["earring", "headband", "normal beard"]),
  //8637"]),

  new Trait("female", ["blue eye shadow", "pink with hat", "silver chain"]),
  //8638"]),

  new Trait("female", ["clown eyes green"]),
  //8639"]),

  new Trait("male", ["horned rim glasses", "vampire hair"]),
  //8640"]),

  new Trait("male", ["clown eyes blue", "frumpy hair"]),
  //8641"]),

  new Trait("male", ["bandana", "eye patch", "shadow beard"]),
  //8642"]),

  new Trait("male", ["muttonchops", "silver chain", "wild hair"]),
  //8643"]),

  new Trait("male", ["clown eyes blue", "messy hair"]),
  //8644"]),

  new Trait("male", ["cap", "front beard", "horned rim glasses"]),
  //8645"]),

  new Trait("female", ["blue eye shadow", "mohawk thin", "purple lipstick"]),
  //8646"]),

  new Trait("female", [
    "horned rim glasses",
    "purple lipstick",
    "stringy hair",
  ]),
  //8647"]),

  new Trait("male", ["eye patch", "mohawk thin", "mole"]),
  //8648"]),

  new Trait("male", ["do-rag", "horned rim glasses", "muttonchops"]),
  //8649"]),

  new Trait("male", ["big shades", "messy hair", "shadow beard"]),
  //8650"]),

  new Trait("male", [
    "clown nose",
    "cowboy hat",
    "horned rim glasses",
    "shadow beard",
  ]),
  //8651"]),

  new Trait("male", ["bandana", "chinstrap"]),
  //8652"]),

  new Trait("male", ["cigarette", "mole", "peak spike"]),
  //8653"]),

  new Trait("male", ["earring", "gold chain", "mohawk dark"]),
  //8654"]),

  new Trait("male", ["earring", "front beard dark", "mohawk dark"]),
  //8655"]),

  new Trait("female", ["eye patch", "mohawk thin"]),
  //8656"]),

  new Trait("female", ["mohawk", "pipe"]),
  //8657"]),

  new Trait("male", ["pipe", "shadow beard", "smile", "wild hair"]),
  //8658"]),

  new Trait("male", ["gold chain", "shadow beard", "stringy hair"]),
  //8659"]),

  new Trait("male", ["earring", "front beard", "medical mask"]),
  //8660"]),

  new Trait("male", ["clown hair green", "horned rim glasses", "shadow beard"]),
  //8661"]),

  new Trait("female", ["bandana", "mole"]),
  //8662"]),

  new Trait("female", ["black lipstick", "cap", "cigarette", "eye patch"]),
  //8663"]),

  new Trait("male", ["eye mask", "luxurious beard", "police cap"]),
  //8664"]),

  new Trait("female", ["purple eye shadow", "red mohawk"]),
  //8665"]),

  new Trait("male", ["earring", "eye patch", "peak spike"]),
  //8666"]),

  new Trait("male", ["frown", "muttonchops", "wild hair"]),
  //8667"]),

  new Trait("male", ["handlebars", "wild hair"]),
  //8668"]),

  new Trait("female", ["clown eyes blue", "dark hair", "medical mask"]),
  //8669"]),

  new Trait("female", [
    "green eye shadow",
    "purple lipstick",
    "silver chain",
    "straight hair blonde",
  ]),
  //8670"]),

  new Trait("male", ["cigarette", "earring", "muttonchops", "shaved head"]),
  //8671"]),

  new Trait("male", ["buck teeth", "clown eyes blue", "messy hair"]),
  //8672"]),

  new Trait("male", ["crazy hair", "earring", "luxurious beard"]),
  //8673"]),

  new Trait("female", ["earring", "pipe", "purple lipstick", "wild hair"]),
  //8674"]),

  new Trait("male", ["clown nose", "fedora"]),
  //8675"]),

  new Trait("male", ["fedora", "vr"]),
  //8676"]),

  new Trait("male", ["cap", "rosy cheeks", "small shades"]),
  //8677"]),

  new Trait("male", ["eye patch", "muttonchops", "stringy hair"]),
  //8678"]),

  new Trait("male", ["big shades", "chinstrap", "wild hair"]),
  //8679"]),

  new Trait("female", ["blonde bob", "cigarette", "clown nose"]),
  //8680"]),

  new Trait("male", ["big shades", "mohawk thin", "normal beard"]),
  //8681"]),

  new Trait("male", [
    "cigarette",
    "nerd glasses",
    "normal beard",
    "shaved head",
  ]),
  //8682"]),

  new Trait("female", ["mole", "purple lipstick", "wild hair"]),
  //8683"]),

  new Trait("male", [
    "earring",
    "horned rim glasses",
    "muttonchops",
    "vampire hair",
  ]),
  //8684"]),

  new Trait("male", ["smile", "stringy hair", "vr"]),
  //8685"]),

  new Trait("male", ["gold chain", "hoodie"]),
  //8686"]),

  new Trait("male", ["classic shades", "fedora", "mole"]),
  //8687"]),

  new Trait("male", ["muttonchops", "peak spike"]),
  //8688"]),

  new Trait("male", ["cigarette", "classic shades", "clown hair green"]),
  //8689"]),

  new Trait("male", ["mohawk dark", "pipe"]),
  //8690"]),

  new Trait("male", ["big shades", "vampire hair"]),
  //8691"]),

  new Trait("male", ["3d glasses", "headband", "normal beard black"]),
  //8692"]),

  new Trait("female", ["big shades", "earring", "knitted cap"]),
  //8693"]),

  new Trait("male", ["earring", "peak spike", "small shades"]),
  //8694"]),

  new Trait("male", ["cigarette", "earring", "mohawk dark"]),
  //8695"]),

  new Trait("male", ["big shades", "medical mask", "vampire hair"]),
  //8696"]),

  new Trait("female", ["black lipstick", "mohawk", "welding goggles"]),
  //8697"]),

  new Trait("male", ["bandana", "clown eyes green", "luxurious beard"]),
  //8698"]),

  new Trait("male", ["crazy hair", "earring", "eye patch", "mole"]),
  //8699"]),

  new Trait("male", [
    "cigarette",
    "classic shades",
    "frown",
    "hoodie",
    "normal beard",
  ]),
  //8700"]),

  new Trait("male", ["clown nose", "mole", "normal beard black", "wild hair"]),
  //8701"]),

  new Trait("female", ["earring", "mohawk dark", "mole", "purple lipstick"]),
  //8702"]),

  new Trait("male", ["clown eyes green", "do-rag"]),
  //8703"]),

  new Trait("female", ["hot lipstick", "purple eye shadow", "straight hair"]),
  //8704"]),

  new Trait("male", ["clown eyes green", "purple hair"]),
  //8705"]),

  new Trait("male", ["earring", "mole", "shaved head"]),
  //8706"]),

  new Trait("male", [
    "earring",
    "shadow beard",
    "small shades",
    "vampire hair",
  ]),
  //8707"]),

  new Trait("male", ["medical mask", "mustache", "peak spike"]),
  //8708"]),

  new Trait("female", [
    "earring",
    "green eye shadow",
    "hot lipstick",
    "wild blonde",
  ]),
  //8709"]),

  new Trait("male", ["horned rim glasses", "luxurious beard", "mohawk"]),
  //8710"]),

  new Trait("male", ["regular shades", "vampire hair"]),
  //8711"]),

  new Trait("male", ["earring", "eye patch", "front beard", "top hat"]),
  //8712"]),

  new Trait("male", ["hoodie", "horned rim glasses"]),
  //8713"]),

  new Trait("male", ["do-rag", "handlebars", "horned rim glasses"]),
  //8714"]),

  new Trait("male", ["clown eyes green", "frown", "mohawk", "mustache"]),
  //8715"]),

  new Trait("male", ["chinstrap", "headband", "medical mask"]),
  //8716"]),

  new Trait("male", [
    "cap forward",
    "earring",
    "horned rim glasses",
    "normal beard black",
  ]),
  //8717"]),

  new Trait("male", ["earring", "small shades", "wild hair"]),
  //8718"]),

  new Trait("female", [
    "blue eye shadow",
    "earring",
    "hot lipstick",
    "tassle hat",
  ]),
  //8719"]),

  new Trait("male", ["classic shades", "front beard dark", "top hat"]),
  //8720"]),

  new Trait("male", ["pipe", "stringy hair"]),
  //8721"]),

  new Trait("female", ["black lipstick", "cap"]),
  //8722"]),

  new Trait("female", ["cigarette", "wild blonde"]),
  //8723"]),

  new Trait("male", ["clown hair green", "nerd glasses"]),
  //8724"]),

  new Trait("female", ["blue eye shadow", "pink with hat", "purple lipstick"]),
  //8725"]),

  new Trait("female", ["black lipstick", "clown hair green", "vape"]),
  //8726"]),

  new Trait("male", ["cigarette", "frumpy hair", "handlebars"]),
  //8727"]),

  new Trait("male", ["handlebars", "mohawk dark", "nerd glasses"]),
  //8728"]),

  new Trait("male", ["cigarette", "hoodie", "nerd glasses"]),
  //8729"]),

  new Trait("male", ["earring", "normal beard", "stringy hair"]),
  //8730"]),

  new Trait("female", ["earring", "hot lipstick", "tiara"]),
  //8731"]),

  new Trait("female", ["classic shades", "dark hair", "spots"]),
  //8732"]),

  new Trait("female", ["welding goggles", "wild white hair"]),
  //8733"]),

  new Trait("male", ["bandana", "eye mask", "normal beard black"]),
  //8734"]),

  new Trait("male", ["cap", "mustache"]),
  //8735"]),

  new Trait("female", ["messy hair", "nerd glasses"]),
  //8736"]),

  new Trait("male", ["mohawk dark", "shadow beard", "vape"]),
  //8737"]),

  new Trait("male", ["beanie", "clown eyes green"]),
  //8738"]),

  new Trait("male", ["messy hair", "regular shades"]),
  //8739"]),

  new Trait("male", ["earring", "eye patch", "mohawk thin"]),
  //8740"]),

  new Trait("male", [
    "earring",
    "horned rim glasses",
    "normal beard",
    "police cap",
  ]),
  //8741"]),

  new Trait("female", ["cigarette", "eye mask"]),
  //8742"]),

  new Trait("male", ["clown eyes blue", "clown hair green"]),
  //8743"]),

  new Trait("female", ["clown hair green", "horned rim glasses"]),
  //8744"]),

  new Trait("female", [
    "black lipstick",
    "purple eye shadow",
    "straight hair blonde",
  ]),
  //8745"]),

  new Trait("female", ["clown eyes green", "hot lipstick", "tassle hat"]),
  //8746"]),

  new Trait("female", [
    "blue eye shadow",
    "purple lipstick",
    "straight hair dark",
  ]),
  //8747"]),

  new Trait("male", ["headband", "mustache", "rosy cheeks"]),
  //8748"]),

  new Trait("female", ["cigarette", "clown nose", "frumpy hair"]),
  //8749"]),

  new Trait("female", ["black lipstick", "orange side", "rosy cheeks"]),
  //8750"]),

  new Trait("male", ["do-rag", "normal beard"]),
  //8751"]),

  new Trait("male", ["beanie", "regular shades"]),
  //8752"]),

  new Trait("male", [
    "buck teeth",
    "cap forward",
    "earring",
    "front beard dark",
    "horned rim glasses",
  ]),
  //8753"]),

  new Trait("male", ["cap forward", "earring", "mustache"]),
  //8754"]),

  new Trait("female", ["horned rim glasses", "mohawk thin"]),
  //8755"]),

  new Trait("male", ["peak spike", "rosy cheeks", "small shades"]),
  //8756"]),

  new Trait("female", ["earring", "pigtails", "vape"]),
  //8757"]),

  new Trait("male", ["classic shades", "earring", "mohawk dark"]),
  //8758"]),

  new Trait("female", ["big shades", "blonde short", "earring"]),
  //8759"]),

  new Trait("female", ["purple lipstick", "regular shades", "wild blonde"]),
  //8760"]),

  new Trait("male", ["cap", "cigarette", "front beard dark", "regular shades"]),
  //8761"]),

  new Trait("male", ["handlebars", "mohawk thin", "vape"]),
  //8762"]),

  new Trait("female", ["headband", "vape"]),
  //8763"]),

  new Trait("female", ["green eye shadow", "pipe", "straight hair"]),
  //8764"]),

  new Trait("female", ["horned rim glasses", "straight hair dark"]),
  //8765"]),

  new Trait("female", ["blonde bob", "classic shades", "pipe"]),
  //8766"]),

  new Trait("female", [
    "earring",
    "horned rim glasses",
    "hot lipstick",
    "wild white hair",
  ]),
  //8767"]),

  new Trait("male", ["luxurious beard", "stringy hair", "vr"]),
  //8768"]),

  new Trait("female", ["mohawk dark", "mole"]),
  //8769"]),

  new Trait("male", [
    "clown eyes green",
    "earring",
    "hoodie",
    "mole",
    "normal beard black",
  ]),
  //8770"]),

  new Trait("female", [
    "classic shades",
    "earring",
    "hot lipstick",
    "straight hair",
  ]),
  //8771"]),

  new Trait("male", ["front beard", "frown", "hoodie", "small shades"]),
  //8772"]),

  new Trait("female", ["3d glasses", "cigarette", "earring", "wild hair"]),
  //8773"]),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "earring",
    "straight hair",
  ]),
  //8774"]),

  new Trait("female", ["black lipstick", "pipe", "straight hair"]),
  //8775"]),

  new Trait("female", ["green eye shadow", "straight hair blonde"]),
  //8776"]),

  new Trait("male", ["cigarette", "handlebars", "wild hair"]),
  //8777"]),

  new Trait("male", ["earring", "frumpy hair", "horned rim glasses"]),
  //8778"]),

  new Trait("female", ["clown eyes blue", "tiara"]),
  //8779"]),

  new Trait("zombie", ["frumpy hair", "shadow beard"]),
  //8780"]),

  new Trait("male", ["big shades", "frown", "knitted cap", "shadow beard"]),
  //8781"]),

  new Trait("female", ["classic shades", "tassle hat"]),
  //8782"]),

  new Trait("male", ["big shades", "cigarette", "goat", "peak spike"]),
  //8783"]),

  new Trait("male", ["cap forward", "chinstrap", "classic shades", "earring"]),
  //8784"]),

  new Trait("male", ["beanie", "earring", "luxurious beard"]),
  //8785"]),

  new Trait("male", ["crazy hair", "earring", "regular shades", "smile"]),
  //8786"]),

  new Trait("female", ["blonde bob", "earring", "vr"]),
  //8787"]),

  new Trait("male", ["bandana", "front beard", "mole"]),
  //8788"]),

  new Trait("male", ["messy hair", "normal beard", "silver chain"]),
  //8789"]),

  new Trait("female", [
    "black lipstick",
    "horned rim glasses",
    "pipe",
    "wild hair",
  ]),
  //8790"]),

  new Trait("male", ["big beard", "cowboy hat", "small shades"]),
  //8791"]),

  new Trait("female", [
    "earring",
    "hot lipstick",
    "purple eye shadow",
    "stringy hair",
  ]),
  //8792"]),

  new Trait("female", ["classic shades", "red mohawk"]),
  //8793"]),

  new Trait("male", ["cigarette", "horned rim glasses", "purple hair"]),
  //8794"]),

  new Trait("female", ["black lipstick", "blonde short"]),
  //8795"]),

  new Trait("male", ["crazy hair", "muttonchops", "vr"]),
  //8796"]),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "clown eyes blue",
    "half shaved",
  ]),
  //8797"]),

  new Trait("male", ["front beard dark", "messy hair", "vape"]),
  //8798"]),

  new Trait("male", ["goat", "hoodie"]),
  //8799"]),

  new Trait("female", ["earring", "purple eye shadow", "red mohawk"]),
  //8800"]),

  new Trait("male", ["smile", "top hat"]),
  //8801"]),

  new Trait("female", ["blonde bob", "clown eyes green", "earring", "mole"]),
  //8802"]),

  new Trait("male", ["chinstrap", "cowboy hat", "frown"]),
  //8803"]),

  new Trait("female", ["big shades", "vape", "wild white hair"]),
  //8804"]),

  new Trait("female", ["gold chain", "pilot helmet", "purple lipstick"]),
  //8805"]),

  new Trait("male", ["knitted cap", "shadow beard", "small shades"]),
  //8806"]),

  new Trait("female", ["cap", "clown eyes blue", "purple lipstick"]),
  //8807"]),

  new Trait("male", ["bandana", "normal beard black", "vr"]),
  //8808"]),

  new Trait("female", ["rosy cheeks", "stringy hair"]),
  //8809"]),

  new Trait("female", ["classic shades", "mohawk thin", "purple lipstick"]),
  //8810"]),

  new Trait("male", ["buck teeth", "handlebars", "vampire hair"]),
  //8811"]),

  new Trait("male", ["earring", "frown", "shaved head"]),
  //8812"]),

  new Trait("female", ["cap", "horned rim glasses", "hot lipstick"]),
  //8813"]),

  new Trait("female", ["earring", "purple eye shadow", "stringy hair"]),
  //8814"]),

  new Trait("male", ["mole", "stringy hair"]),
  //8815"]),

  new Trait("male", ["earring", "normal beard", "wild hair"]),
  //8816"]),

  new Trait("male", ["earring", "mohawk dark", "normal beard"]),
  //8817"]),

  new Trait("female", ["earring", "medical mask", "mohawk"]),
  //8818"]),

  new Trait("male", ["do-rag", "medical mask"]),
  //8819"]),

  new Trait("male", ["eye mask", "mohawk thin"]),
  //8820"]),

  new Trait("male", ["big beard", "earring", "wild hair"]),
  //8821"]),

  new Trait("female", ["3d glasses", "hot lipstick", "tassle hat"]),
  //8822"]),

  new Trait("male", ["normal beard black", "small shades", "stringy hair"]),
  //8823"]),

  new Trait("male", ["frumpy hair", "nerd glasses", "normal beard"]),
  //8824"]),

  new Trait("male", [
    "earring",
    "luxurious beard",
    "mohawk thin",
    "nerd glasses",
  ]),
  //8825"]),

  new Trait("male", ["chinstrap", "mohawk thin"]),
  //8826"]),

  new Trait("male", ["clown nose", "earring", "wild hair"]),
  //8827"]),

  new Trait("male", ["clown eyes blue", "hoodie", "normal beard"]),
  //8828"]),

  new Trait("female", ["mole", "red mohawk"]),
  //8829"]),

  new Trait("male", ["classic shades", "frown", "goat", "messy hair"]),
  //8830"]),

  new Trait("male", ["headband", "mustache", "pipe"]),
  //8831"]),

  new Trait("male", ["big shades", "messy hair", "muttonchops"]),
  //8832"]),

  new Trait("male", ["big shades", "messy hair"]),
  //8833"]),

  new Trait("male", ["earring", "police cap", "shadow beard"]),
  //8834"]),

  new Trait("female", ["cap", "green eye shadow"]),
  //8835"]),

  new Trait("female", ["hot lipstick", "purple eye shadow", "straight hair"]),
  //8836"]),

  new Trait("female", ["headband", "hot lipstick", "purple eye shadow"]),
  //8837"]),

  new Trait("male", ["3d glasses", "knitted cap", "mole"]),
  //8838"]),

  new Trait("male", [
    "cigarette",
    "classic shades",
    "luxurious beard",
    "shaved head",
  ]),
  //8839"]),

  new Trait("male", ["beanie", "frown", "mustache"]),
  //8840"]),

  new Trait("female", ["black lipstick", "blue eye shadow", "tassle hat"]),
  //8841"]),

  new Trait("female", ["classic shades", "purple lipstick", "tiara"]),
  //8842"]),

  new Trait("male", ["front beard", "mohawk"]),
  //8843"]),

  new Trait("male", [
    "cigarette",
    "earring",
    "fedora",
    "luxurious beard",
    "nerd glasses",
  ]),
  //8844"]),

  new Trait("male", ["3d glasses", "cigarette", "do-rag"]),
  //8845"]),

  new Trait("female", ["clown nose", "frumpy hair", "gold chain"]),
  //8846"]),

  new Trait("female", ["cigarette", "orange side", "purple lipstick"]),
  //8847"]),

  new Trait("male", ["cigarette", "eye mask", "peak spike"]),
  //8848"]),

  new Trait("female", ["horned rim glasses", "hot lipstick", "pink with hat"]),
  //8849"]),

  new Trait("female", ["blonde short", "earring", "purple lipstick"]),
  //8850"]),

  new Trait("male", ["beanie", "eye patch", "shadow beard"]),
  //8851"]),

  new Trait("male", [
    "horned rim glasses",
    "normal beard black",
    "stringy hair",
  ]),
  //8852"]),

  new Trait("male", [
    "front beard dark",
    "pipe",
    "regular shades",
    "stringy hair",
  ]),
  //8853"]),

  new Trait("female", ["big shades", "knitted cap"]),
  //8854"]),

  new Trait("female", ["hot lipstick", "mohawk", "vape"]),
  //8855"]),

  new Trait("female", ["blonde bob", "eye mask"]),
  //8856"]),

  new Trait("zombie", ["3d glasses", "wild hair"]),
  //8857"]),

  new Trait("female", ["bandana", "clown eyes green", "earring"]),
  //8858"]),

  new Trait("male", ["eye mask", "shaved head"]),
  //8859"]),

  new Trait("male", ["cigarette", "hoodie", "luxurious beard"]),
  //8860"]),

  new Trait("male", ["chinstrap", "earring", "mohawk", "small shades"]),
  //8861"]),

  new Trait("female", [
    "big shades",
    "black lipstick",
    "dark hair",
    "gold chain",
  ]),
  //8862"]),

  new Trait("male", ["chinstrap", "mohawk dark", "vr"]),
  //8863"]),

  new Trait("male", ["goat", "pipe", "police cap"]),
  //8864"]),

  new Trait("male", ["beanie", "horned rim glasses"]),
  //8865"]),

  new Trait("male", [
    "earring",
    "horned rim glasses",
    "luxurious beard",
    "wild hair",
  ]),
  //8866"]),

  new Trait("female", [
    "medical mask",
    "pink with hat",
    "purple lipstick",
    "rosy cheeks",
  ]),
  //8867"]),

  new Trait("male", ["3d glasses", "hoodie", "shadow beard"]),
  //8868"]),

  new Trait("male", ["bandana", "muttonchops", "regular shades"]),
  //8869"]),

  new Trait("male", [
    "big shades",
    "cigarette",
    "earring",
    "luxurious beard",
    "top hat",
  ]),
  //8870"]),

  new Trait("male", ["earring", "front beard", "small shades", "stringy hair"]),
  //8871"]),

  new Trait("male", ["big shades", "earring", "mustache", "police cap"]),
  //8872"]),

  new Trait("female", ["blonde short", "purple eye shadow", "purple lipstick"]),
  //8873"]),

  new Trait("female", ["knitted cap", "mole", "purple eye shadow"]),
  //8874"]),

  new Trait("male", ["cigarette", "frown", "top hat"]),
  //8875"]),

  new Trait("male", ["earring", "horned rim glasses", "mohawk thin"]),
  //8876"]),

  new Trait("male", ["handlebars", "hoodie", "regular shades"]),
  //8877"]),

  new Trait("male", ["bandana", "cigarette", "normal beard"]),
  //8878"]),

  new Trait("male", ["classic shades", "crazy hair", "mustache"]),
  //8879"]),

  new Trait("female", ["half shaved", "purple eye shadow"]),
  //8880"]),

  new Trait("male", ["eye patch", "medical mask", "top hat"]),
  //8881"]),

  new Trait("male", ["buck teeth", "chinstrap", "earring", "stringy hair"]),
  //8882"]),

  new Trait("female", ["eye mask", "hot lipstick", "messy hair"]),
  //8883"]),

  new Trait("female", [
    "earring",
    "pilot helmet",
    "purple lipstick",
    "rosy cheeks",
  ]),
  //8884"]),

  new Trait("female", ["black lipstick", "blue eye shadow", "stringy hair"]),
  //8885"]),

  new Trait("female", [
    "earring",
    "hot lipstick",
    "purple eye shadow",
    "tiara",
  ]),
  //8886"]),

  new Trait("female", [
    "cigarette",
    "horned rim glasses",
    "purple lipstick",
    "straight hair blonde",
  ]),
  //8887"]),

  new Trait("female", ["eye mask", "red mohawk"]),
  //8888"]),

  new Trait("male", [
    "classic shades",
    "luxurious beard",
    "peak spike",
    "smile",
    "vape",
  ]),
  //8889"]),

  new Trait("female", ["eye patch", "tassle hat"]),
  //8890"]),

  new Trait("female", ["frumpy hair", "rosy cheeks"]),
  //8891"]),

  new Trait("male", ["do-rag", "muttonchops", "small shades"]),
  //8892"]),

  new Trait("female", ["hot lipstick", "messy hair", "vr"]),
  //8893"]),

  new Trait("male", ["mohawk", "mole"]),
  //8894"]),

  new Trait("female", ["clown eyes blue", "hot lipstick", "messy hair"]),
  //8895"]),

  new Trait("female", [
    "cigarette",
    "clown eyes green",
    "hot lipstick",
    "wild white hair",
  ]),
  //8896"]),

  new Trait("male", ["big shades", "mohawk dark", "normal beard"]),
  //8897"]),

  new Trait("male", ["goat", "nerd glasses", "top hat"]),
  //8898"]),

  new Trait("male", ["3d glasses", "buck teeth", "stringy hair"]),
  //8899"]),

  new Trait("male", ["buck teeth", "cap forward"]),
  //8900"]),

  new Trait("male", ["earring", "handlebars", "mohawk dark"]),
  //8901"]),

  new Trait("male", ["normal beard", "small shades"]),
  //8902"]),

  new Trait("female", ["bandana", "earring", "hot lipstick"]),
  //8903"]),

  new Trait("female", ["cap", "clown nose", "pipe", "purple eye shadow"]),
  //8904"]),

  new Trait("female", ["clown eyes blue", "mole", "wild hair"]),
  //8905"]),

  new Trait("female", ["hot lipstick", "stringy hair", "welding goggles"]),
  //8906"]),

  new Trait("female", ["earring", "horned rim glasses", "pink with hat"]),
  //8907"]),

  new Trait("male", ["front beard", "mohawk thin", "small shades", "smile"]),
  //8908"]),

  new Trait("zombie", ["luxurious beard", "police cap", "regular shades"]),
  //8909"]),

  new Trait("male", ["nerd glasses", "police cap"]),
  //8910"]),

  new Trait("male", ["big shades", "mohawk dark", "normal beard"]),
  //8911"]),

  new Trait("female", ["hot lipstick", "purple eye shadow", "wild blonde"]),
  //8912"]),

  new Trait("male", ["big shades", "vampire hair"]),
  //8913"]),

  new Trait("male", ["big shades", "chinstrap", "headband"]),
  //8914"]),

  new Trait("male", ["earring", "frumpy hair", "small shades"]),
  //8915"]),

  new Trait("female", ["cigarette", "pigtails", "purple eye shadow"]),
  //8916"]),

  new Trait("female", ["cigarette", "gold chain", "headband"]),
  //8917"]),

  new Trait("male", ["earring", "nerd glasses", "smile", "stringy hair"]),
  //8918"]),

  new Trait("male", ["big shades", "do-rag", "shadow beard"]),
  //8919"]),

  new Trait("male", [
    "buck teeth",
    "cigarette",
    "clown eyes green",
    "stringy hair",
  ]),
  //8920"]),

  new Trait("male", [
    "cigarette",
    "front beard dark",
    "nerd glasses",
    "police cap",
  ]),
  //8921"]),

  new Trait("female", ["classic shades", "hot lipstick"]),
  //8922"]),

  new Trait("female", ["horned rim glasses", "messy hair"]),
  //8923"]),

  new Trait("female", ["black lipstick", "headband", "horned rim glasses"]),
  //8924"]),

  new Trait("male", ["cigarette", "do-rag", "horned rim glasses", "smile"]),
  //8925"]),

  new Trait("male", ["bandana", "classic shades", "smile"]),
  //8926"]),

  new Trait("male", ["bandana", "silver chain"]),
  //8927"]),

  new Trait("female", ["hot lipstick", "vr"]),
  //8928"]),

  new Trait("male", [
    "big shades",
    "do-rag",
    "earring",
    "mole",
    "normal beard black",
  ]),
  //8929"]),

  new Trait("male", ["crazy hair", "earring", "small shades"]),
  //8930"]),

  new Trait("male", ["do-rag", "shadow beard", "small shades", "vape"]),
  //8931"]),

  new Trait("female", [
    "clown eyes blue",
    "earring",
    "half shaved",
    "hot lipstick",
  ]),
  //8932"]),

  new Trait("female", ["dark hair", "pipe"]),
  //8933"]),

  new Trait("male", ["horned rim glasses", "muttonchops", "police cap"]),
  //8934"]),

  new Trait("male", ["cigarette", "fedora", "smile"]),
  //8935"]),

  new Trait("female", ["earring", "medical mask", "wild hair"]),
  //8936"]),

  new Trait("female", ["frumpy hair", "horned rim glasses", "hot lipstick"]),
  //8937"]),

  new Trait("male", ["bandana", "front beard dark"]),
  //8938"]),

  new Trait("female", ["black lipstick", "purple eye shadow", "straight hair"]),
  //8939"]),

  new Trait("male", ["chinstrap", "shaved head", "smile"]),
  //8940"]),

  new Trait("male", ["headband", "mustache"]),
  //8941"]),

  new Trait("female", ["blue eye shadow", "stringy hair"]),
  //8942"]),

  new Trait("male", ["mohawk dark", "small shades", "vape"]),
  //8943"]),

  new Trait("female", ["clown eyes green", "crazy hair", "earring"]),
  //8944"]),

  new Trait("male", ["earring", "mohawk dark", "mole"]),
  //8945"]),

  new Trait("male", ["bandana", "rosy cheeks"]),
  //8946"]),

  new Trait("male", ["crazy hair", "earring", "eye mask"]),
  //8947"]),

  new Trait("male", ["classic shades", "mohawk dark", "spots"]),
  //8948"]),

  new Trait("male", ["classic shades", "earring", "frumpy hair", "vape"]),
  //8949"]),

  new Trait("female", [
    "cigarette",
    "hot lipstick",
    "knitted cap",
    "nerd glasses",
  ]),
  //8950"]),

  new Trait("male", ["chinstrap", "do-rag", "vr"]),
  //8951"]),

  new Trait("female", ["bandana", "black lipstick", "regular shades"]),
  //8952"]),

  new Trait("male", ["medical mask", "wild hair"]),
  //8953"]),

  new Trait("female", ["black lipstick", "horned rim glasses", "messy hair"]),
  //8954"]),

  new Trait("female", ["black lipstick", "eye mask", "half shaved"]),
  //8955"]),

  new Trait("male", ["mohawk", "vape"]),
  //8956"]),

  new Trait("zombie", ["frumpy hair", "luxurious beard"]),
  //8957"]),

  new Trait("male", ["beanie", "horned rim glasses", "shadow beard"]),
  //8958"]),

  new Trait("female", ["earring", "green eye shadow", "knitted cap"]),
  //8959"]),

  new Trait("male", ["handlebars", "mohawk dark", "nerd glasses"]),
  //8960"]),

  new Trait("female", ["blue eye shadow", "mohawk dark"]),
  //8961"]),

  new Trait("female", ["nerd glasses", "tassle hat"]),
  //8962"]),

  new Trait("male", [
    "cigarette",
    "clown eyes green",
    "handlebars",
    "shaved head",
  ]),
  //8963"]),

  new Trait("female", ["big shades", "half shaved"]),
  //8964"]),

  new Trait("male", [
    "big shades",
    "earring",
    "knitted cap",
    "luxurious beard",
  ]),
  //8965"]),

  new Trait("female", ["orange side", "purple lipstick"]),
  //8966"]),

  new Trait("male", ["big shades", "hoodie", "vape"]),
  //8967"]),

  new Trait("male", ["hoodie", "muttonchops", "regular shades"]),
  //8968"]),

  new Trait("male", ["earring", "normal beard", "police cap", "vr"]),
  //8969"]),

  new Trait("male", ["mohawk dark", "muttonchops"]),
  //8970"]),

  new Trait("male", [
    "classic shades",
    "earring",
    "luxurious beard",
    "mohawk thin",
  ]),
  //8971"]),

  new Trait("female", ["black lipstick", "eye mask", "pigtails"]),
  //8972"]),

  new Trait("female", ["frumpy hair", "mole"]),
  //8973"]),

  new Trait("male", ["cigarette", "clown eyes green", "hoodie"]),
  //8974"]),

  new Trait("female", ["frumpy hair", "welding goggles"]),
  //8975"]),

  new Trait("female", ["classic shades", "dark hair"]),
  //8976"]),

  new Trait("female", ["cigarette", "crazy hair", "earring", "hot lipstick"]),
  //8977"]),

  new Trait("male", ["chinstrap", "horned rim glasses", "purple hair"]),
  //8978"]),

  new Trait("male", ["normal beard", "shaved head"]),
  //8979"]),

  new Trait("female", ["blue eye shadow", "dark hair", "hot lipstick", "mole"]),
  //8980"]),

  new Trait("male", ["cowboy hat", "shadow beard"]),
  //8981"]),

  new Trait("female", [
    "horned rim glasses",
    "mohawk",
    "mole",
    "purple lipstick",
  ]),
  //8982"]),

  new Trait("female", ["cigarette", "earring"]),
  //8983"]),

  new Trait("male", ["earring", "front beard dark", "messy hair"]),
  //8984"]),

  new Trait("male", ["do-rag", "eye mask", "front beard dark", "gold chain"]),
  //8985"]),

  new Trait("female", ["blue eye shadow", "straight hair dark"]),
  //8986"]),

  new Trait("male", ["chinstrap", "nerd glasses"]),
  //8987"]),

  new Trait("male", ["cap", "earring", "front beard"]),
  //8988"]),

  new Trait("female", ["blonde short", "blue eye shadow", "earring"]),
  //8989"]),

  new Trait("male", ["peak spike", "pipe", "vr"]),
  //8990"]),

  new Trait("male", ["cap forward", "regular shades"]),
  //8991"]),

  new Trait("male", ["big shades", "earring", "handlebars", "mohawk"]),
  //8992"]),

  new Trait("male", ["clown eyes blue", "luxurious beard", "wild hair"]),
  //8993"]),

  new Trait("female", ["cigarette", "clown eyes blue", "tiara"]),
  //8994"]),

  new Trait("male", ["eye mask", "mustache", "shaved head"]),
  //8995"]),

  new Trait("male", ["cigarette", "earring", "knitted cap"]),
  //8996"]),

  new Trait("female", ["blonde bob", "blue eye shadow", "hot lipstick"]),
  //8997"]),

  new Trait("male", ["clown nose", "frown", "purple hair"]),
  //8998"]),

  new Trait("female", [
    "blonde short",
    "clown eyes green",
    "earring",
    "purple lipstick",
  ]),
  //8999"]),

  new Trait("female", ["blonde short", "cigarette", "hot lipstick"]),
  //9000"]),

  new Trait("female", ["bandana", "clown nose", "nerd glasses"]),
  //9001"]),

  new Trait("male", ["classic shades", "mohawk dark", "normal beard black"]),
  //9002"]),

  new Trait("female", ["black lipstick", "cigarette", "mohawk thin"]),
  //9003"]),

  new Trait("male", ["nerd glasses", "stringy hair"]),
  //9004"]),

  new Trait("male", ["classic shades", "clown hair green"]),
  //9005"]),

  new Trait("female", ["big shades", "wild blonde"]),
  //9006"]),

  new Trait("male", ["clown eyes green", "mohawk thin"]),
  //9007"]),

  new Trait("male", ["frown", "goat", "mohawk thin", "regular shades"]),
  //9008"]),

  new Trait("male", ["cigarette", "cowboy hat", "nerd glasses"]),
  //9009"]),

  new Trait("male", ["earring", "police cap", "vr"]),
  //9010"]),

  new Trait("male", ["earring", "muttonchops", "small shades", "top hat"]),
  //9011"]),

  new Trait("male", ["earring", "frumpy hair", "medical mask"]),
  //9012"]),

  new Trait("female", ["cigarette", "dark hair"]),
  //9013"]),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "green eye shadow",
    "straight hair",
  ]),
  //9014"]),

  new Trait("male", ["cap", "earring", "pipe"]),
  //9015"]),

  new Trait("male", [
    "chinstrap",
    "horned rim glasses",
    "smile",
    "stringy hair",
  ]),
  //9016"]),

  new Trait("male", ["do-rag", "shadow beard", "small shades"]),
  //9017"]),

  new Trait("male", ["classic shades", "earring", "handlebars", "peak spike"]),
  //9018"]),

  new Trait("male", ["bandana", "big beard", "medical mask", "vr"]),
  //9019"]),

  new Trait("female", ["dark hair", "eye mask", "purple lipstick"]),
  //9020"]),

  new Trait("female", [
    "cigarette",
    "green eye shadow",
    "hot lipstick",
    "red mohawk",
  ]),
  //9021"]),

  new Trait("male", ["frown", "frumpy hair", "muttonchops"]),
  //9022"]),

  new Trait("female", ["headband", "purple eye shadow"]),
  //9023"]),

  new Trait("male", ["classic shades", "earring", "mohawk thin", "mustache"]),
  //9024"]),

  new Trait("male", ["earring", "frumpy hair", "muttonchops"]),
  //9025"]),

  new Trait("male", ["bandana", "classic shades", "earring", "front beard"]),
  //9026"]),

  new Trait("female", ["black lipstick", "frumpy hair", "nerd glasses"]),
  //9027"]),

  new Trait("female", ["pipe"]),
  //9028"]),

  new Trait("female", ["mohawk", "purple lipstick"]),
  //9029"]),

  new Trait("female", ["black lipstick", "frumpy hair", "regular shades"]),
  //9030"]),

  new Trait("male", ["big shades", "cap forward"]),
  //9031"]),

  new Trait("male", [
    "earring",
    "gold chain",
    "horned rim glasses",
    "knitted cap",
    "mole",
  ]),
  //9032"]),

  new Trait("male", ["eye patch", "stringy hair"]),
  //9033"]),

  new Trait("female", [
    "earring",
    "horned rim glasses",
    "hot lipstick",
    "wild blonde",
  ]),
  //9034"]),

  new Trait("female", ["earring", "green eye shadow", "mohawk"]),
  //9035"]),

  new Trait("male", ["earring", "frown", "frumpy hair", "shadow beard", "vr"]),
  //9036"]),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "clown eyes green",
    "half shaved",
    "mole",
  ]),
  //9037"]),

  new Trait("male", [
    "big beard",
    "crazy hair",
    "eye patch",
    "medical mask",
    "smile",
  ]),
  //9038"]),

  new Trait("male", ["buck teeth", "messy hair", "regular shades"]),
  //9039"]),

  new Trait("male", ["chinstrap", "horned rim glasses", "stringy hair"]),
  //9040"]),

  new Trait("female", ["bandana", "black lipstick", "earring"]),
  //9041"]),

  new Trait("female", [
    "blue eye shadow",
    "earring",
    "purple lipstick",
    "wild hair",
  ]),
  //9042"]),

  new Trait("female", ["clown eyes blue", "frumpy hair", "pipe"]),
  //9043"]),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "green eye shadow",
    "messy hair",
  ]),
  //9044"]),

  new Trait("male", ["eye patch", "headband", "muttonchops"]),
  //9045"]),

  new Trait("male", ["classic shades", "earring", "fedora", "smile"]),
  //9046"]),

  new Trait("male", ["bandana", "shadow beard"]),
  //9047"]),

  new Trait("male", ["front beard dark", "purple hair"]),
  //9048"]),

  new Trait("male", [
    "bandana",
    "clown eyes blue",
    "luxurious beard",
    "silver chain",
  ]),
  //9049"]),

  new Trait("female", [
    "black lipstick",
    "classic shades",
    "rosy cheeks",
    "stringy hair",
  ]),
  //9050"]),

  new Trait("male", ["crazy hair", "earring", "pipe"]),
  //9051"]),

  new Trait("female", ["blonde bob", "blue eye shadow", "gold chain"]),
  //9052"]),

  new Trait("female", ["earring", "mole", "tassle hat", "vape"]),
  //9053"]),

  new Trait("male", ["big beard", "horned rim glasses", "mole", "purple hair"]),
  //9054"]),

  new Trait("male", ["cigarette", "frumpy hair", "mole"]),
  //9055"]),

  new Trait("male", ["bandana", "mole", "shadow beard", "smile"]),
  //9056"]),

  new Trait("female", ["pigtails", "purple lipstick"]),
  //9057"]),

  new Trait("female", ["earring", "pigtails"]),
  //9058"]),

  new Trait("male", ["big shades", "front beard dark", "headband"]),
  //9059"]),

  new Trait("male", ["cigarette", "clown hair green"]),
  //9060"]),

  new Trait("male", [
    "earring",
    "horned rim glasses",
    "mohawk dark",
    "mustache",
  ]),
  //9061"]),

  new Trait("male", ["handlebars"]),
  //9062"]),

  new Trait("female", ["mole", "orange side"]),
  //9063"]),

  new Trait("female", ["earring", "welding goggles", "wild white hair"]),
  //9064"]),

  new Trait("male", ["bandana", "cigarette", "front beard dark", "mole"]),
  //9065"]),

  new Trait("female", [
    "big shades",
    "black lipstick",
    "cigarette",
    "straight hair",
  ]),
  //9066"]),

  new Trait("female", ["big shades", "cigarette", "straight hair"]),
  //9067"]),

  new Trait("female", ["earring", "pipe", "purple lipstick", "tassle hat"]),
  //9068"]),

  new Trait("male", ["cigarette", "normal beard black", "purple hair"]),
  //9069"]),

  new Trait("male", ["cigarette", "handlebars", "knitted cap"]),
  //9070"]),

  new Trait("female", ["cigarette", "half shaved", "hot lipstick"]),
  //9071"]),

  new Trait("male", ["chinstrap", "clown hair green"]),
  //9072"]),

  new Trait("female", ["black lipstick", "frumpy hair", "horned rim glasses"]),
  //9073"]),

  new Trait("female", ["eye mask", "tassle hat"]),
  //9074"]),

  new Trait("male", ["eye patch", "mohawk thin"]),
  //9075"]),

  new Trait("male", ["knitted cap", "shadow beard", "vape"]),
  //9076"]),

  new Trait("male", ["clown nose", "earring", "mohawk"]),
  //9077"]),

  new Trait("female", ["clown eyes blue", "earring", "half shaved"]),
  //9078"]),

  new Trait("male", ["cowboy hat", "eye patch", "shadow beard"]),
  //9079"]),

  new Trait("male", ["big shades", "frumpy hair", "mustache", "smile"]),
  //9080"]),

  new Trait("female", ["cigarette", "earring", "pigtails"]),
  //9081"]),

  new Trait("male", ["bandana", "big shades", "shadow beard"]),
  //9082"]),

  new Trait("male", ["hoodie", "horned rim glasses", "smile"]),
  //9083"]),

  new Trait("male", ["earring", "mohawk", "muttonchops", "rosy cheeks"]),
  //9084"]),

  new Trait("male", ["cap", "front beard"]),
  //9085"]),

  new Trait("female", ["horned rim glasses", "orange side", "vape"]),
  //9086"]),

  new Trait("male", ["classic shades", "police cap"]),
  //9087"]),

  new Trait("male", ["earring", "headband", "mole"]),
  //9088"]),

  new Trait("male", ["cap forward", "frown"]),
  //9089"]),

  new Trait("male", ["earring", "front beard dark", "frown", "shaved head"]),
  //9090"]),

  new Trait("female", ["bandana", "eye patch"]),
  //9091"]),

  new Trait("male", ["big beard", "eye patch", "hoodie"]),
  //9092"]),

  new Trait("male", ["chinstrap", "earring", "eye patch", "fedora"]),
  //9093"]),

  new Trait("male", ["earring", "eye mask", "peak spike", "shadow beard"]),
  //9094"]),

  new Trait("female", ["frumpy hair", "purple eye shadow"]),
  //9095"]),

  new Trait("male", ["big shades", "goat", "silver chain", "wild hair"]),
  //9096"]),

  new Trait("male", ["earring", "nerd glasses", "smile", "vape", "wild hair"]),
  //9097"]),

  new Trait("male", ["clown hair green", "regular shades"]),
  //9098"]),

  new Trait("male", ["cigarette", "crazy hair", "earring", "mustache"]),
  //9099"]),

  new Trait("male", ["eye patch", "hoodie", "normal beard black"]),
  //9100"]),

  new Trait("male", ["bandana", "cigarette", "earring", "nerd glasses"]),
  //9101"]),

  new Trait("female", [
    "clown eyes green",
    "clown hair green",
    "purple lipstick",
  ]),
  //9102"]),

  new Trait("male", ["mohawk", "mustache"]),
  //9103"]),

  new Trait("male", ["handlebars", "hoodie", "vr"]),
  //9104"]),

  new Trait("female", ["clown nose", "mohawk dark", "silver chain"]),
  //9105"]),

  new Trait("male", [
    "cigarette",
    "front beard",
    "regular shades",
    "stringy hair",
  ]),
  //9106"]),

  new Trait("female", ["black lipstick", "clown nose", "mohawk dark"]),
  //9107"]),

  new Trait("male", ["earring", "normal beard black", "shaved head"]),
  //9108"]),

  new Trait("female", ["black lipstick", "earring", "wild blonde"]),
  //9109"]),

  new Trait("male", ["earring", "frown", "mohawk", "muttonchops"]),
  //9110"]),

  new Trait("female", ["big shades", "knitted cap"]),
  //9111"]),

  new Trait("male", ["buck teeth", "mohawk dark", "shadow beard"]),
  //9112"]),

  new Trait("male", ["cigarette", "frown", "frumpy hair", "shadow beard"]),
  //9113"]),

  new Trait("male", ["earring", "frumpy hair", "mole"]),
  //9114"]),

  new Trait("male", ["3d glasses", "mohawk thin", "muttonchops"]),
  //9115"]),

  new Trait("male", ["do-rag", "luxurious beard"]),
  //9116"]),

  new Trait("male", ["earring", "mohawk thin", "normal beard black"]),
  //9117"]),

  new Trait("male", ["purple hair", "regular shades"]),
  //9118"]),

  new Trait("male", ["classic shades", "do-rag", "shadow beard"]),
  //9119"]),

  new Trait("female", ["pipe", "purple lipstick", "tassle hat"]),
  //9120"]),

  new Trait("male", ["cap forward", "earring", "nerd glasses", "shadow beard"]),
  //9121"]),

  new Trait("male", ["eye mask", "frumpy hair", "luxurious beard"]),
  //9122"]),

  new Trait("male", ["eye patch", "frumpy hair", "shadow beard"]),
  //9123"]),

  new Trait("male", [
    "classic shades",
    "shadow beard",
    "shaved head",
    "silver chain",
  ]),
  //9124"]),

  new Trait("female", ["big shades", "clown nose", "wild blonde"]),
  //9125"]),

  new Trait("female", [
    "clown eyes green",
    "earring",
    "frumpy hair",
    "purple lipstick",
  ]),
  //9126"]),

  new Trait("female", ["cigarette", "earring", "messy hair"]),
  //9127"]),

  new Trait("male", ["classic shades", "earring", "normal beard", "wild hair"]),
  //9128"]),

  new Trait("male", ["beanie", "eye patch", "muttonchops"]),
  //9129"]),

  new Trait("male", ["front beard", "purple hair", "smile"]),
  //9130"]),

  new Trait("female", ["black lipstick", "crazy hair", "earring"]),
  //9131"]),

  new Trait("male", ["cigarette", "earring", "mohawk"]),
  //9132"]),

  new Trait("male", ["clown eyes green", "luxurious beard", "top hat"]),
  //9133"]),

  new Trait("female", ["eye patch", "mohawk", "purple lipstick"]),
  //9134"]),

  new Trait("male", ["chinstrap", "do-rag", "small shades"]),
  //9135"]),

  new Trait("female", ["gold chain", "purple lipstick", "straight hair dark"]),
  //9136"]),

  new Trait("male", ["3d glasses", "hoodie", "luxurious beard"]),
  //9137"]),

  new Trait("male", ["big shades", "handlebars", "headband"]),
  //9138"]),

  new Trait("male", ["earring", "mohawk dark", "mole", "nerd glasses"]),
  //9139"]),

  new Trait("male", ["luxurious beard", "stringy hair"]),
  //9140"]),

  new Trait("male", ["chinstrap", "crazy hair"]),
  //9141"]),

  new Trait("male", ["classic shades", "earring", "goat", "messy hair"]),
  //9142"]),

  new Trait("male", ["earring", "goat", "vampire hair"]),
  //9143"]),

  new Trait("male", ["big shades", "goat", "mohawk"]),
  //9144"]),

  new Trait("female", ["rosy cheeks"]),
  //9145"]),

  new Trait("male", ["eye patch", "front beard dark", "stringy hair"]),
  //9146"]),

  new Trait("female", [
    "blonde bob",
    "horned rim glasses",
    "hot lipstick",
    "mole",
  ]),
  //9147"]),

  new Trait("female", ["medical mask", "mohawk dark"]),
  //9148"]),

  new Trait("female", ["cigarette", "purple eye shadow", "wild white hair"]),
  //9149"]),

  new Trait("male", ["big beard", "crazy hair"]),
  //9150"]),

  new Trait("female", ["black lipstick", "orange side"]),
  //9151"]),

  new Trait("female", ["black lipstick", "cigarette", "dark hair"]),
  //9152"]),

  new Trait("female", ["cap", "purple eye shadow"]),
  //9153"]),

  new Trait("male", ["chinstrap", "mohawk thin"]),
  //9154"]),

  new Trait("male", ["nerd glasses", "normal beard", "peak spike"]),
  //9155"]),

  new Trait("male", [
    "cap forward",
    "frown",
    "horned rim glasses",
    "normal beard black",
  ]),
  //9156"]),

  new Trait("male", ["earring", "eye patch", "shadow beard", "stringy hair"]),
  //9157"]),

  new Trait("male", ["big shades", "fedora", "goat"]),
  //9158"]),

  new Trait("male", ["hoodie", "nerd glasses", "shadow beard"]),
  //9159"]),

  new Trait("female", ["black lipstick", "medical mask", "pilot helmet"]),
  //9160"]),

  new Trait("male", ["bandana", "normal beard", "regular shades"]),
  //9161"]),

  new Trait("male", ["cigarette", "front beard dark", "rosy cheeks"]),
  //9162"]),

  new Trait("female", ["bandana", "black lipstick", "earring", "nerd glasses"]),
  //9163"]),

  new Trait("female", ["earring", "messy hair", "purple lipstick"]),
  //9164"]),

  new Trait("male", ["cigarette", "frumpy hair", "regular shades"]),
  //9165"]),

  new Trait("male", ["frown", "nerd glasses", "police cap"]),
  //9166"]),

  new Trait("female", [
    "black lipstick",
    "purple eye shadow",
    "wild white hair",
  ]),
  //9167"]),

  new Trait("male", ["knitted cap", "muttonchops", "smile", "vr"]),
  //9168"]),

  new Trait("male", ["3d glasses", "peak spike"]),
  //9169"]),

  new Trait("male", ["cowboy hat", "normal beard", "regular shades"]),
  //9170"]),

  new Trait("male", ["cap", "front beard", "nerd glasses"]),
  //9171"]),

  new Trait("male", ["fedora", "nerd glasses", "shadow beard"]),
  //9172"]),

  new Trait("male", ["cap", "classic shades", "goat"]),
  //9173"]),

  new Trait("male", ["front beard dark", "stringy hair"]),
  //9174"]),

  new Trait("male", ["clown hair green", "goat", "vape"]),
  //9175"]),

  new Trait("male", ["crazy hair", "front beard dark"]),
  //9176"]),

  new Trait("female", ["half shaved", "hot lipstick", "purple eye shadow"]),
  //9177"]),

  new Trait("male", ["cigarette", "earring", "front beard", "nerd glasses"]),
  //9178"]),

  new Trait("male", ["cigarette", "mohawk", "normal beard black"]),
  //9179"]),

  new Trait("male", ["bandana", "big shades", "earring", "luxurious beard"]),
  //9180"]),

  new Trait("female", ["big shades", "black lipstick", "cap"]),
  //9181"]),

  new Trait("female", ["bandana", "earring", "horned rim glasses"]),
  //9182"]),

  new Trait("female", ["black lipstick", "clown eyes blue", "red mohawk"]),
  //9183"]),

  new Trait("male", ["cigarette", "luxurious beard", "messy hair"]),
  //9184"]),

  new Trait("male", ["normal beard", "purple hair"]),
  //9185"]),

  new Trait("female", ["knitted cap", "nerd glasses", "purple lipstick"]),
  //9186"]),

  new Trait("male", ["earring", "goat", "mohawk thin"]),
  //9187"]),

  new Trait("female", [
    "cigarette",
    "earring",
    "hot lipstick",
    "wild white hair",
  ]),
  //9188"]),

  new Trait("male", ["earring", "fedora", "front beard"]),
  //9189"]),

  new Trait("male", ["earring", "small shades"]),
  //9190"]),

  new Trait("female", ["clown eyes green", "purple lipstick", "wild blonde"]),
  //9191"]),

  new Trait("male", ["mohawk", "muttonchops", "smile"]),
  //9192"]),

  new Trait("female", ["cigarette", "clown eyes green", "wild white hair"]),
  //9193"]),

  new Trait("female", ["hot lipstick", "tassle hat"]),
  //9194"]),

  new Trait("female", ["blonde short", "nerd glasses"]),
  //9195"]),

  new Trait("male", ["clown eyes green", "crazy hair"]),
  //9196"]),

  new Trait("male", ["front beard dark", "shaved head"]),
  //9197"]),

  new Trait("male", ["3d glasses", "bandana"]),
  //9198"]),

  new Trait("male", ["headband", "mustache", "vape"]),
  //9199"]),

  new Trait("female", ["eye mask", "mohawk dark"]),
  //9200"]),

  new Trait("female", ["straight hair blonde", "welding goggles"]),
  //9201"]),

  new Trait("male", ["big shades", "messy hair", "pipe"]),
  //9202"]),

  new Trait("zombie", ["cap forward", "clown nose", "goat", "mole"]),
  //9203"]),

  new Trait("male", ["cigarette", "clown eyes green", "stringy hair"]),
  //9204"]),

  new Trait("female", ["big shades", "earring", "mole", "straight hair dark"]),
  //9205"]),

  new Trait("male", ["eye patch", "handlebars", "headband", "pipe"]),
  //9206"]),

  new Trait("male", ["hoodie", "nerd glasses", "shadow beard", "vape"]),
  //9207"]),

  new Trait("male", ["shadow beard", "vape"]),
  //9208"]),

  new Trait("male", ["cigarette", "luxurious beard", "stringy hair"]),
  //9209"]),

  new Trait("male", [
    "earring",
    "eye patch",
    "mohawk thin",
    "normal beard black",
  ]),
  //9210"]),

  new Trait("female", [
    "black lipstick",
    "clown eyes blue",
    "half shaved",
    "silver chain",
  ]),
  //9211"]),

  new Trait("male", ["bandana", "eye patch", "luxurious beard"]),
  //9212"]),

  new Trait("female", [
    "clown eyes green",
    "dark hair",
    "earring",
    "hot lipstick",
  ]),
  //9213"]),

  new Trait("male", ["eye mask", "top hat"]),
  //9214"]),

  new Trait("female", ["mole", "purple lipstick", "stringy hair"]),
  //9215"]),

  new Trait("male", ["gold chain", "horned rim glasses", "vampire hair"]),
  //9216"]),

  new Trait("female", ["earring", "mohawk thin", "purple eye shadow"]),
  //9217"]),

  new Trait("male", ["eye patch", "front beard", "shaved head"]),
  //9218"]),

  new Trait("male", ["3d glasses", "vampire hair"]),
  //9219"]),

  new Trait("male", ["big shades", "chinstrap", "purple hair"]),
  //9220"]),

  new Trait("male", ["cigarette", "classic shades", "mohawk dark"]),
  //9221"]),

  new Trait("male", ["knitted cap", "nerd glasses"]),
  //9222"]),

  new Trait("female", ["pink with hat", "purple lipstick", "regular shades"]),
  //9223"]),

  new Trait("female", ["earring", "vape", "wild white hair"]),
  //9224"]),

  new Trait("male", ["bandana", "muttonchops", "pipe"]),
  //9225"]),

  new Trait("male", ["big shades", "handlebars", "peak spike"]),
  //9226"]),

  new Trait("male", ["clown eyes blue", "headband"]),
  //9227"]),

  new Trait("female", ["black lipstick", "horned rim glasses", "mohawk"]),
  //9228"]),

  new Trait("female", ["classic shades", "crazy hair", "vape"]),
  //9229"]),

  new Trait("female", ["black lipstick", "pipe", "tassle hat"]),
  //9230"]),

  new Trait("male", ["mustache", "regular shades", "stringy hair"]),
  //9231"]),

  new Trait("male", ["cigarette", "fedora"]),
  //9232"]),

  new Trait("male", ["bandana", "clown eyes green", "earring"]),
  //9233"]),

  new Trait("male", ["knitted cap", "luxurious beard", "medical mask"]),
  //9234"]),

  new Trait("male", [
    "cigarette",
    "clown nose",
    "hoodie",
    "normal beard black",
  ]),
  //9235"]),

  new Trait("male", ["classic shades", "mohawk dark"]),
  //9236"]),

  new Trait("female", [
    "cigarette",
    "clown eyes blue",
    "earring",
    "orange side",
  ]),
  //9237"]),

  new Trait("male", ["regular shades", "shaved head"]),
  //9238"]),

  new Trait("male", ["big shades", "crazy hair", "handlebars"]),
  //9239"]),

  new Trait("female", ["mole", "orange side"]),
  //9240"]),

  new Trait("male", ["big beard", "earring", "mohawk dark", "regular shades"]),
  //9241"]),

  new Trait("male", ["frown", "knitted cap", "mustache"]),
  //9242"]),

  new Trait("male", ["mole", "mustache", "peak spike"]),
  //9243"]),

  new Trait("female", [
    "clown eyes green",
    "clown nose",
    "hot lipstick",
    "wild hair",
  ]),
  //9244"]),

  new Trait("male", ["earring", "fedora", "mustache", "nerd glasses"]),
  //9245"]),

  new Trait("male", ["clown eyes green"]),
  //9246"]),

  new Trait("female", ["eye mask", "purple lipstick", "straight hair"]),
  //9247"]),

  new Trait("female", ["bandana", "hot lipstick", "vr"]),
  //9248"]),

  new Trait("male", ["cap forward", "cigarette", "shadow beard"]),
  //9249"]),

  new Trait("male", ["classic shades", "earring", "handlebars", "messy hair"]),
  //9250"]),

  new Trait("male", ["medical mask", "nerd glasses", "stringy hair"]),
  //9251"]),

  new Trait("male", ["regular shades", "vape", "wild hair"]),
  //9252"]),

  new Trait("female", ["earring", "hot lipstick", "tassle hat"]),
  //9253"]),

  new Trait("male", ["clown hair green", "eye patch", "shadow beard"]),
  //9254"]),

  new Trait("male", ["mohawk dark", "normal beard black"]),
  //9255"]),

  new Trait("male", ["3d glasses", "mohawk thin", "mustache"]),
  //9256"]),

  new Trait("female", ["clown eyes blue", "hot lipstick"]),
  //9257"]),

  new Trait("female", ["cigarette", "straight hair", "welding goggles"]),
  //9258"]),

  new Trait("male", ["frown", "stringy hair"]),
  //9259"]),

  new Trait("male", ["cap", "horned rim glasses", "muttonchops"]),
  //9260"]),

  new Trait("female", ["eye mask", "frumpy hair"]),
  //9261"]),

  new Trait("male", ["earring", "purple hair", "small shades", "vape"]),
  //9262"]),

  new Trait("male", ["do-rag", "eye patch"]),
  //9263"]),

  new Trait("male", ["cap forward", "clown nose", "shadow beard", "vr"]),
  //9264"]),

  new Trait("ape", ["bandana", "big shades"]),
  //9265"]),

  new Trait("male", ["clown eyes blue", "mohawk dark", "mole", "shadow beard"]),
  //9266"]),

  new Trait("male", ["3d glasses", "earring", "peak spike"]),
  //9267"]),

  new Trait("male", ["goat", "shaved head", "spots"]),
  //9268"]),

  new Trait("female", ["bandana", "black lipstick", "earring"]),
  //9269"]),

  new Trait("female", [
    "big shades",
    "black lipstick",
    "earring",
    "stringy hair",
  ]),
  //9270"]),

  new Trait("female", [
    "earring",
    "hot lipstick",
    "knitted cap",
    "purple eye shadow",
  ]),
  //9271"]),

  new Trait("male", ["clown eyes green", "do-rag", "pipe"]),
  //9272"]),

  new Trait("male", ["classic shades", "crazy hair", "front beard"]),
  //9273"]),

  new Trait("male", ["luxurious beard", "nerd glasses", "shaved head"]),
  //9274"]),

  new Trait("male", ["nerd glasses", "police cap", "shadow beard"]),
  //9275"]),

  new Trait("male", ["normal beard", "pipe", "police cap"]),
  //9276"]),

  new Trait("male", ["bandana", "chinstrap"]),
  //9277"]),

  new Trait("female", ["earring", "hot lipstick", "straight hair blonde"]),
  //9278"]),

  new Trait("male", ["earring", "frown", "purple hair", "shadow beard"]),
  //9279"]),

  new Trait("ape", ["3d glasses", "cowboy hat"]),
  //9280"]),

  new Trait("male", ["classic shades", "front beard dark", "mohawk"]),
  //9281"]),

  new Trait("male", ["big beard", "fedora"]),
  //9282"]),

  new Trait("male", ["frown", "mohawk", "vr"]),
  //9283"]),

  new Trait("male", ["nerd glasses", "normal beard black"]),
  //9284"]),

  new Trait("male", ["crazy hair", "normal beard black", "regular shades"]),
  //9285"]),

  new Trait("female", ["bandana", "hot lipstick", "pipe"]),
  //9286"]),

  new Trait("male", ["earring", "eye patch", "messy hair", "shadow beard"]),
  //9287"]),

  new Trait("female", ["black lipstick", "earring", "pipe", "wild hair"]),
  //9288"]),

  new Trait("male", ["cap", "cigarette", "frown", "nerd glasses"]),
  //9289"]),

  new Trait("male", ["clown hair green", "goat", "pipe", "regular shades"]),
  //9290"]),

  new Trait("male", ["buck teeth", "mohawk thin"]),
  //9291"]),

  new Trait("male", ["eye patch", "messy hair", "spots"]),
  //9292"]),

  new Trait("male", ["cigarette", "handlebars", "mohawk thin"]),
  //9293"]),

  new Trait("male", ["nerd glasses", "police cap"]),
  //9294"]),

  new Trait("female", ["mole", "pipe", "straight hair dark"]),
  //9295"]),

  new Trait("male", ["goat", "messy hair", "vr"]),
  //9296"]),

  new Trait("male", ["crazy hair", "handlebars", "vr"]),
  //9297"]),

  new Trait("male", ["big shades", "cigarette", "vampire hair"]),
  //9298"]),

  new Trait("male", ["cap forward", "handlebars"]),
  //9299"]),

  new Trait("male", ["cap forward", "smile"]),
  //9300"]),

  new Trait("female", [
    "black lipstick",
    "purple eye shadow",
    "straight hair dark",
  ]),
  //9301"]),

  new Trait("male", [
    "cigarette",
    "front beard dark",
    "frumpy hair",
    "nerd glasses",
  ]),
  //9302"]),

  new Trait("female", ["clown eyes blue", "mohawk dark"]),
  //9303"]),

  new Trait("female", ["earring", "messy hair", "mole"]),
  //9304"]),

  new Trait("male", ["cigarette", "front beard dark", "mohawk dark", "mole"]),
  //9305"]),

  new Trait("male", ["cap forward", "classic shades"]),
  //9306"]),

  new Trait("female", ["cigarette", "purple eye shadow", "stringy hair"]),
  //9307"]),

  new Trait("female", ["blonde bob", "horned rim glasses"]),
  //9308"]),

  new Trait("female", ["black lipstick", "blue eye shadow", "mohawk"]),
  //9309"]),

  new Trait("female", ["cigarette", "nerd glasses", "straight hair blonde"]),
  //9310"]),

  new Trait("female", ["clown eyes blue", "pink with hat", "purple lipstick"]),
  //9311"]),

  new Trait("female", ["clown eyes green", "hot lipstick", "messy hair"]),
  //9312"]),

  new Trait("female", ["eye mask", "messy hair"]),
  //9313"]),

  new Trait("male", ["beanie", "frown"]),
  //9314"]),

  new Trait("male", ["classic shades", "crazy hair", "mustache"]),
  //9315"]),

  new Trait("male", [
    "big shades",
    "chinstrap",
    "crazy hair",
    "earring",
    "smile",
  ]),
  //9316"]),

  new Trait("female", ["hot lipstick", "orange side"]),
  //9317"]),

  new Trait("male", ["big shades", "clown nose", "mohawk dark"]),
  //9318"]),

  new Trait("male", ["bandana", "clown eyes blue", "silver chain"]),
  //9319"]),

  new Trait("female", ["bandana", "mole"]),
  //9320"]),

  new Trait("male", ["horned rim glasses", "mohawk", "mustache"]),
  //9321"]),

  new Trait("male", ["cap", "eye patch", "shadow beard"]),
  //9322"]),

  new Trait("male", ["classic shades", "front beard dark", "headband"]),
  //9323"]),

  new Trait("female", [
    "black lipstick",
    "clown eyes green",
    "earring",
    "straight hair dark",
  ]),
  //9324"]),

  new Trait("female", ["black lipstick", "straight hair", "welding goggles"]),
  //9325"]),

  new Trait("female", ["cap", "earring", "purple lipstick", "regular shades"]),
  //9326"]),

  new Trait("female", ["blue eye shadow", "straight hair dark"]),
  //9327"]),

  new Trait("male", [
    "earring",
    "gold chain",
    "horned rim glasses",
    "stringy hair",
  ]),
  //9328"]),

  new Trait("male", ["buck teeth", "cap", "earring", "shadow beard"]),
  //9329"]),

  new Trait("male", ["frown", "horned rim glasses"]),
  //9330"]),

  new Trait("female", ["clown eyes blue", "hot lipstick", "mohawk dark"]),
  //9331"]),

  new Trait("female", ["half shaved", "welding goggles"]),
  //9332"]),

  new Trait("female", [
    "black lipstick",
    "earring",
    "horned rim glasses",
    "mohawk thin",
  ]),
  //9333"]),

  new Trait("female", ["eye patch", "stringy hair"]),
  //9334"]),

  new Trait("male", ["classic shades", "earring", "shaved head"]),
  //9335"]),

  new Trait("male", ["clown eyes green", "handlebars", "mohawk", "smile"]),
  //9336"]),

  new Trait("male", ["earring", "luxurious beard", "mohawk"]),
  //9337"]),

  new Trait("female", [
    "clown eyes green",
    "purple lipstick",
    "straight hair dark",
  ]),
  //9338"]),

  new Trait("female", ["clown eyes green", "hot lipstick", "tiara"]),
  //9339"]),

  new Trait("male", ["earring", "luxurious beard", "mohawk thin"]),
  //9340"]),

  new Trait("female", ["black lipstick", "mole", "wild white hair"]),
  //9341"]),

  new Trait("male", ["chinstrap", "earring", "knitted cap", "regular shades"]),
  //9342"]),

  new Trait("male", ["big shades", "earring", "mohawk"]),
  //9343"]),

  new Trait("male", ["classic shades", "hoodie", "normal beard"]),
  //9344"]),

  new Trait("male", ["front beard", "mohawk"]),
  //9345"]),

  new Trait("male", ["front beard dark", "shaved head", "vape", "vr"]),
  //9346"]),

  new Trait("male", ["clown eyes green", "purple hair"]),
  //9347"]),

  new Trait("female", ["hot lipstick", "mohawk"]),
  //9348"]),

  new Trait("female", ["cigarette", "crazy hair", "hot lipstick"]),
  //9349"]),

  new Trait("male", ["cowboy hat", "front beard dark", "small shades"]),
  //9350"]),

  new Trait("male", ["earring", "mohawk", "small shades"]),
  //9351"]),

  new Trait("male", ["regular shades", "top hat"]),
  //9352"]),

  new Trait("female", ["black lipstick", "eye mask", "messy hair"]),
  //9353"]),

  new Trait("male", ["earring", "nerd glasses", "purple hair"]),
  //9354"]),

  new Trait("male", ["bandana", "earring", "frown", "luxurious beard"]),
  //9355"]),

  new Trait("male", ["nerd glasses", "vampire hair"]),
  //9356"]),

  new Trait("male", ["chinstrap", "frown", "mohawk"]),
  //9357"]),

  new Trait("female", ["blue eye shadow", "earring", "tassle hat"]),
  //9358"]),

  new Trait("female", [
    "crazy hair",
    "earring",
    "green eye shadow",
    "purple lipstick",
  ]),
  //9359"]),

  new Trait("male", ["cowboy hat", "luxurious beard"]),
  //9360"]),

  new Trait("male", ["bandana", "eye mask", "luxurious beard"]),
  //9361"]),

  new Trait("male", ["knitted cap", "mole", "regular shades", "smile"]),
  //9362"]),

  new Trait("male", ["cap forward", "clown eyes green"]),
  //9363"]),

  new Trait("male", ["handlebars", "mohawk dark"]),
  //9364"]),

  new Trait("male", ["cigarette", "frumpy hair"]),
  //9365"]),

  new Trait("female", ["blue eye shadow", "earring", "half shaved", "pipe"]),
  //9366"]),

  new Trait("female", ["clown eyes blue", "straight hair"]),
  //9367"]),

  new Trait("zombie", ["earring", "hoodie"]),
  //9368"]),

  new Trait("female", ["cap", "earring", "eye mask"]),
  //9369"]),

  new Trait("female", ["earring", "green eye shadow", "stringy hair"]),
  //9370"]),

  new Trait("male", ["eye patch", "fedora", "muttonchops"]),
  //9371"]),

  new Trait("male", ["eye patch", "front beard", "stringy hair"]),
  //9372"]),

  new Trait("female", ["black lipstick", "cigarette", "pilot helmet"]),
  //9373"]),

  new Trait("male", ["earring", "mohawk dark", "smile"]),
  //9374"]),

  new Trait("male", ["earring", "nerd glasses", "shaved head", "smile"]),
  //9375"]),

  new Trait("female", ["horned rim glasses", "orange side", "purple lipstick"]),
  //9376"]),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "nerd glasses",
    "stringy hair",
  ]),
  //9377"]),

  new Trait("male", [
    "big shades",
    "cigarette",
    "earring",
    "mole",
    "shaved head",
  ]),
  //9378"]),

  new Trait("female", ["medical mask", "orange side"]),
  //9379"]),

  new Trait("male", ["classic shades", "headband", "mole"]),
  //9380"]),

  new Trait("female", ["classic shades", "hot lipstick", "tassle hat"]),
  //9381"]),

  new Trait("male", ["cigarette", "earring", "purple hair", "small shades"]),
  //9382"]),

  new Trait("female", ["big shades", "earring", "hot lipstick", "mohawk thin"]),
  //9383"]),

  new Trait("male", ["earring", "normal beard", "shaved head"]),
  //9384"]),

  new Trait("male", ["frown", "muttonchops", "stringy hair", "vape", "vr"]),
  //9385"]),

  new Trait("male", ["mohawk dark", "muttonchops", "small shades"]),
  //9386"]),

  new Trait("male", ["big beard", "big shades", "messy hair"]),
  //9387"]),

  new Trait("female", ["earring", "mohawk", "nerd glasses"]),
  //9388"]),

  new Trait("male", ["crazy hair", "gold chain", "shadow beard"]),
  //9389"]),

  new Trait("male", [
    "big shades",
    "earring",
    "front beard dark",
    "knitted cap",
  ]),
  //9390"]),

  new Trait("male", ["bandana", "mole", "shadow beard"]),
  //9391"]),

  new Trait("female", ["cigarette", "hot lipstick", "tiara"]),
  //9392"]),

  new Trait("male", ["clown eyes blue", "earring", "hoodie"]),
  //9393"]),

  new Trait("male", ["3d glasses", "peak spike"]),
  //9394"]),

  new Trait("female", ["earring", "half shaved", "hot lipstick", "mole"]),
  //9395"]),

  new Trait("female", ["blue eye shadow", "clown nose", "mohawk dark", "vape"]),
  //9396"]),

  new Trait("female", ["black lipstick", "purple eye shadow", "wild blonde"]),
  //9397"]),

  new Trait("male", ["cigarette", "regular shades", "wild hair"]),
  //9398"]),

  new Trait("male", ["fedora", "regular shades"]),
  //9399"]),

  new Trait("female", ["pipe", "purple lipstick", "vr", "wild blonde"]),
  //9400"]),

  new Trait("female", ["clown eyes green", "stringy hair"]),
  //9401"]),

  new Trait("male", ["big beard", "earring", "frumpy hair"]),
  //9402"]),

  new Trait("male", ["horned rim glasses", "peak spike"]),
  //9403"]),

  new Trait("male", ["earring", "muttonchops", "peak spike", "regular shades"]),
  //9404"]),

  new Trait("male", ["big beard", "knitted cap", "small shades"]),
  //9405"]),

  new Trait("female", ["cigarette", "crazy hair", "purple lipstick"]),
  //9406"]),

  new Trait("male", ["cigarette", "clown eyes blue", "knitted cap"]),
  //9407"]),

  new Trait("female", ["clown eyes blue", "wild blonde"]),
  //9408"]),

  new Trait("female", ["crazy hair", "spots"]),
  //9409"]),

  new Trait("female", ["clown eyes blue", "knitted cap", "medical mask"]),
  //9410"]),

  new Trait("female", ["mohawk dark", "purple eye shadow", "purple lipstick"]),
  //9411"]),

  new Trait("male", ["crazy hair", "earring", "mustache", "smile"]),
  //9412"]),

  new Trait("female", [
    "earring",
    "hot lipstick",
    "nerd glasses",
    "vape",
    "wild white hair",
  ]),
  //9413"]),

  new Trait("female", ["cigarette", "earring", "headband", "nerd glasses"]),
  //9414"]),

  new Trait("male", ["fedora", "horned rim glasses", "smile"]),
  //9415"]),

  new Trait("male", ["earring", "fedora", "goat"]),
  //9416"]),

  new Trait("female", ["earring", "pilot helmet", "purple lipstick"]),
  //9417"]),

  new Trait("male", ["crazy hair", "muttonchops", "smile"]),
  //9418"]),

  new Trait("female", ["green eye shadow", "hot lipstick", "straight hair"]),
  //9419"]),

  new Trait("male", ["eye mask", "fedora"]),
  //9420"]),

  new Trait("male", ["do-rag", "earring", "eye patch", "shadow beard"]),
  //9421"]),

  new Trait("male", ["frown", "police cap"]),
  //9422"]),

  new Trait("female", ["cigarette", "wild white hair"]),
  //9423"]),

  new Trait("male", ["nerd glasses", "vape", "wild hair"]),
  //9424"]),

  new Trait("male", ["big shades", "luxurious beard", "shaved head"]),
  //9425"]),

  new Trait("male", ["front beard", "mohawk"]),
  //9426"]),

  new Trait("male", ["luxurious beard", "nerd glasses", "police cap"]),
  //9427"]),

  new Trait("female", ["cigarette", "purple eye shadow", "straight hair"]),
  //9428"]),

  new Trait("male", ["gold chain", "top hat"]),
  //9429"]),

  new Trait("female", [
    "dark hair",
    "earring",
    "nerd glasses",
    "purple lipstick",
  ]),
  //9430"]),

  new Trait("female", ["blonde bob", "green eye shadow"]),
  //9431"]),

  new Trait("male", [
    "big shades",
    "earring",
    "front beard dark",
    "peak spike",
  ]),
  //9432"]),

  new Trait("female", ["clown nose", "hot lipstick", "mohawk thin", "pipe"]),
  //9433"]),

  new Trait("male", ["bandana", "big shades", "mole"]),
  //9434"]),

  new Trait("male", ["earring", "mohawk dark", "muttonchops"]),
  //9435"]),

  new Trait("male", ["chinstrap", "messy hair", "rosy cheeks"]),
  //9436"]),

  new Trait("male", ["handlebars", "mohawk", "rosy cheeks"]),
  //9437"]),

  new Trait("female", [
    "3d glasses",
    "blonde short",
    "earring",
    "purple lipstick",
  ]),
  //9438"]),

  new Trait("male", ["classic shades", "mohawk", "mustache"]),
  //9439"]),

  new Trait("female", [
    "clown eyes green",
    "earring",
    "hot lipstick",
    "stringy hair",
  ]),
  //9440"]),

  new Trait("male", ["big shades", "normal beard", "wild hair"]),
  //9441"]),

  new Trait("male", ["chinstrap", "cigarette", "frumpy hair", "mole"]),
  //9442"]),

  new Trait("male", ["normal beard", "top hat"]),
  //9443"]),

  new Trait("male", ["bandana", "eye patch", "handlebars"]),
  //9444"]),

  new Trait("male", ["earring", "knitted cap", "mustache", "nerd glasses"]),
  //9445"]),

  new Trait("female", ["cigarette", "stringy hair", "welding goggles"]),
  //9446"]),

  new Trait("male", ["bandana", "big beard"]),
  //9447"]),

  new Trait("male", ["clown eyes blue", "mohawk thin", "shadow beard"]),
  //9448"]),

  new Trait("male", ["front beard dark", "police cap"]),
  //9449"]),

  new Trait("male", ["cigarette", "clown nose", "mohawk dark"]),
  //9450"]),

  new Trait("female", ["silver chain", "straight hair"]),
  //9451"]),

  new Trait("female", ["black lipstick", "tiara"]),
  //9452"]),

  new Trait("male", ["cap", "cigarette", "mustache"]),
  //9453"]),

  new Trait("female", [
    "3d glasses",
    "black lipstick",
    "cigarette",
    "earring",
    "straight hair dark",
  ]),
  //9454"]),

  new Trait("female", ["big shades", "clown hair green"]),
  //9455"]),

  new Trait("female", ["frumpy hair", "hot lipstick", "nerd glasses"]),
  //9456"]),

  new Trait("female", ["mohawk", "welding goggles"]),
  //9457"]),

  new Trait("male", ["bandana", "muttonchops", "small shades"]),
  //9458"]),

  new Trait("female", ["blonde short", "purple eye shadow"]),
  //9459"]),

  new Trait("female", ["earring", "hot lipstick", "pigtails"]),
  //9460"]),

  new Trait("female", ["straight hair blonde", "welding goggles"]),
  //9461"]),

  new Trait("male", ["mustache", "peak spike", "regular shades"]),
  //9462"]),

  new Trait("male", ["crazy hair", "earring", "normal beard"]),
  //9463"]),

  new Trait("male", ["chinstrap", "cigarette", "mole"]),
  //9464"]),

  new Trait("male", ["front beard", "mohawk dark", "nerd glasses"]),
  //9465"]),

  new Trait("female", ["hot lipstick", "purple eye shadow", "wild hair"]),
  //9466"]),

  new Trait("male", ["clown eyes blue", "clown nose", "vampire hair"]),
  //9467"]),

  new Trait("female", ["hot lipstick", "purple eye shadow", "wild hair"]),
  //9468"]),

  new Trait("male", [
    "clown eyes green",
    "earring",
    "mohawk",
    "normal beard black",
  ]),
  //9469"]),

  new Trait("female", ["blonde bob", "cigarette", "earring"]),
  //9470"]),

  new Trait("female", ["medical mask", "wild white hair"]),
  //9471"]),

  new Trait("male", ["bandana", "shadow beard", "small shades"]),
  //9472"]),

  new Trait("female", ["blonde short", "pipe", "purple lipstick"]),
  //9473"]),

  new Trait("zombie", ["peak spike"]),
  //9474"]),

  new Trait("male", ["clown eyes green", "front beard dark", "stringy hair"]),
  //9475"]),

  new Trait("male", ["cigarette", "hoodie", "vr"]),
  //9476"]),

  new Trait("male", ["earring", "mohawk thin", "nerd glasses"]),
  //9477"]),

  new Trait("male", ["cap forward", "earring", "luxurious beard"]),
  //9478"]),

  new Trait("female", ["blue eye shadow", "pink with hat", "silver chain"]),
  //9479"]),

  new Trait("female", ["black lipstick", "stringy hair", "vr"]),
  //9480"]),

  new Trait("female", ["green eye shadow", "mole", "wild white hair"]),
  //9481"]),

  new Trait("female", ["crazy hair", "earring", "eye mask", "hot lipstick"]),
  //9482"]),

  new Trait("female", ["hot lipstick", "mohawk thin", "mole", "pipe"]),
  //9483"]),

  new Trait("female", ["earring", "nerd glasses", "pigtails"]),
  //9484"]),

  new Trait("female", [
    "cigarette",
    "hot lipstick",
    "stringy hair",
    "welding goggles",
  ]),
  //9485"]),

  new Trait("female", [
    "clown eyes blue",
    "purple lipstick",
    "wild white hair",
  ]),
  //9486"]),

  new Trait("male", ["earring", "police cap", "vr"]),
  //9487"]),

  new Trait("male", ["chinstrap", "regular shades", "vampire hair"]),
  //9488"]),

  new Trait("female", ["clown eyes green", "messy hair", "vape"]),
  //9489"]),

  new Trait("female", ["green eye shadow", "hot lipstick", "mohawk thin"]),
  //9490"]),

  new Trait("female", ["earring", "tassle hat"]),
  //9491"]),

  new Trait("female", [
    "blue eye shadow",
    "mohawk thin",
    "pipe",
    "purple lipstick",
  ]),
  //9492"]),

  new Trait("female", ["purple eye shadow", "purple lipstick", "wild blonde"]),
  //9493"]),

  new Trait("male", ["shadow beard", "shaved head", "vr"]),
  //9494"]),

  new Trait("female", ["3d glasses", "clown hair green", "silver chain"]),
  //9495"]),

  new Trait("male", ["cowboy hat", "earring", "eye patch"]),
  //9496"]),

  new Trait("male", ["beanie", "horned rim glasses", "mustache"]),
  //9497"]),

  new Trait("male", ["earring", "mohawk dark", "normal beard black"]),
  //9498"]),

  new Trait("male", ["earring", "eye patch", "mohawk dark", "normal beard"]),
  //9499"]),

  new Trait("female", ["black lipstick", "clown eyes blue", "dark hair"]),
  //9500"]),

  new Trait("male", ["big shades", "handlebars", "mohawk", "mole"]),
  //9501"]),

  new Trait("male", ["earring", "gold chain", "muttonchops", "shaved head"]),
  //9502"]),

  new Trait("female", ["eye patch", "frumpy hair"]),
  //9503"]),

  new Trait("male", ["vampire hair", "vape"]),
  //9504"]),

  new Trait("male", ["do-rag", "nerd glasses"]),
  //9505"]),

  new Trait("female", ["cigarette", "classic shades", "straight hair blonde"]),
  //9506"]),

  new Trait("male", ["eye mask", "shadow beard", "vampire hair"]),
  //9507"]),

  new Trait("male", ["cap forward", "chinstrap", "nerd glasses"]),
  //9508"]),

  new Trait("male", ["eye patch", "normal beard", "vampire hair"]),
  //9509"]),

  new Trait("male", ["big beard", "wild hair"]),
  //9510"]),

  new Trait("male", ["big beard", "eye patch", "headband"]),
  //9511"]),

  new Trait("male", ["eye patch", "front beard", "headband", "pipe"]),
  //9512"]),

  new Trait("male", ["hoodie", "normal beard"]),
  //9513"]),

  new Trait("female", ["blonde bob", "cigarette"]),
  //9514"]),

  new Trait("female", ["classic shades", "pigtails"]),
  //9515"]),

  new Trait("male", ["frown", "knitted cap", "muttonchops", "regular shades"]),
  //9516"]),

  new Trait("female", ["classic shades", "earring", "headband"]),
  //9517"]),

  new Trait("male", ["eye patch", "messy hair", "mustache"]),
  //9518"]),

  new Trait("male", ["bandana", "goat", "mole", "regular shades"]),
  //9519"]),

  new Trait("female", ["pigtails", "purple lipstick"]),
  //9520"]),

  new Trait("male", ["bandana", "handlebars", "regular shades"]),
  //9521"]),

  new Trait("female", ["big shades", "blonde short", "medical mask"]),
  //9522"]),

  new Trait("female", ["big shades", "messy hair"]),
  //9523"]),

  new Trait("female", ["black lipstick", "mohawk dark", "regular shades"]),
  //9524"]),

  new Trait("male", ["bandana", "earring", "eye patch", "shadow beard"]),
  //9525"]),

  new Trait("female", ["blue eye shadow", "hot lipstick", "straight hair"]),
  //9526"]),

  new Trait("male", ["cigarette", "knitted cap", "mustache"]),
  //9527"]),

  new Trait("male", ["cigarette", "luxurious beard", "stringy hair"]),
  //9528"]),

  new Trait("female", ["bandana", "hot lipstick", "vr"]),
  //9529"]),

  new Trait("male", ["clown nose", "top hat"]),
  //9530"]),

  new Trait("female", ["clown hair green", "earring"]),
  //9531"]),

  new Trait("female", [
    "black lipstick",
    "crazy hair",
    "earring",
    "nerd glasses",
  ]),
  //9532"]),

  new Trait("male", ["bandana", "front beard", "vape"]),
  //9533"]),

  new Trait("female", ["half shaved", "purple lipstick", "silver chain"]),
  //9534"]),

  new Trait("male", ["mohawk dark", "mustache"]),
  //9535"]),

  new Trait("male", [
    "earring",
    "front beard",
    "messy hair",
    "mole",
    "nerd glasses",
  ]),
  //9536"]),

  new Trait("male", ["cap", "earring", "mustache", "regular shades"]),
  //9537"]),

  new Trait("male", ["earring", "fedora", "handlebars"]),
  //9538"]),

  new Trait("female", ["clown eyes green", "pink with hat", "purple lipstick"]),
  //9539"]),

  new Trait("female", [
    "blue eye shadow",
    "earring",
    "messy hair",
    "purple lipstick",
  ]),
  //9540"]),

  new Trait("male", ["mole", "normal beard", "vampire hair"]),
  //9541"]),

  new Trait("male", ["earring", "eye patch", "shaved head"]),
  //9542"]),

  new Trait("female", ["black lipstick", "classic shades", "crazy hair"]),
  //9543"]),

  new Trait("female", ["pipe", "purple lipstick", "straight hair blonde"]),
  //9544"]),

  new Trait("female", ["cigarette", "red mohawk"]),
  //9545"]),

  new Trait("female", ["earring", "hot lipstick", "pigtails"]),
  //9546"]),

  new Trait("male", [
    "normal beard black",
    "regular shades",
    "rosy cheeks",
    "stringy hair",
  ]),
  //9547"]),

  new Trait("male", ["cigarette", "do-rag", "eye mask"]),
  //9548"]),

  new Trait("female", ["big shades", "black lipstick", "mole"]),
  //9549"]),

  new Trait("female", [
    "classic shades",
    "earring",
    "hot lipstick",
    "straight hair dark",
  ]),
  //9550"]),

  new Trait("male", ["cigarette", "crazy hair"]),
  //9551"]),

  new Trait("male", ["earring", "mohawk thin", "nerd glasses"]),
  //9552"]),

  new Trait("male", ["regular shades", "shadow beard", "shaved head"]),
  //9553"]),

  new Trait("male", ["headband", "vr"]),
  //9554"]),

  new Trait("male", ["eye mask", "normal beard", "shaved head"]),
  //9555"]),

  new Trait("male", ["do-rag", "normal beard black", "regular shades"]),
  //9556"]),

  new Trait("male", ["classic shades", "do-rag", "shadow beard"]),
  //9557"]),

  new Trait("male", ["cigarette", "frumpy hair", "vr"]),
  //9558"]),

  new Trait("female", [
    "big shades",
    "black lipstick",
    "earring",
    "wild white hair",
  ]),
  //9559"]),

  new Trait("male", ["cap", "classic shades", "medical mask", "shadow beard"]),
  //9560"]),

  new Trait("male", ["big beard", "eye mask", "headband"]),
  //9561"]),

  new Trait("male", ["crazy hair", "earring", "muttonchops", "nerd glasses"]),
  //9562"]),

  new Trait("female", ["crazy hair", "welding goggles"]),
  //9563"]),

  new Trait("male", [
    "earring",
    "front beard dark",
    "frumpy hair",
    "horned rim glasses",
  ]),
  //9564"]),

  new Trait("male", ["bandana", "rosy cheeks", "vr"]),
  //9565"]),

  new Trait("female", ["blonde bob", "classic shades", "hot lipstick"]),
  //9566"]),

  new Trait("male", ["do-rag", "earring", "normal beard"]),
  //9567"]),

  new Trait("male", ["clown eyes green", "fedora"]),
  //9568"]),

  new Trait("male", ["crazy hair", "shadow beard", "smile"]),
  //9569"]),

  new Trait("male", [
    "cigarette",
    "classic shades",
    "messy hair",
    "normal beard black",
  ]),
  //9570"]),

  new Trait("female", ["cigarette", "half shaved", "purple lipstick"]),
  //9571"]),

  new Trait("female", ["frumpy hair", "hot lipstick", "welding goggles"]),
  //9572"]),

  new Trait("male", [
    "cigarette",
    "earring",
    "frown",
    "headband",
    "regular shades",
  ]),
  //9573"]),

  new Trait("male", ["3d glasses", "cap forward", "muttonchops"]),
  //9574"]),

  new Trait("female", [
    "earring",
    "mohawk thin",
    "purple eye shadow",
    "purple lipstick",
  ]),
  //9575"]),

  new Trait("female", ["classic shades", "headband"]),
  //9576"]),

  new Trait("female", ["clown hair green", "pipe"]),
  //9577"]),

  new Trait("male", ["3d glasses", "cap forward", "muttonchops"]),
  //9578"]),

  new Trait("female", [
    "earring",
    "hot lipstick",
    "nerd glasses",
    "straight hair dark",
  ]),
  //9579"]),

  new Trait("male", ["handlebars", "horned rim glasses", "silver chain"]),
  //9580"]),

  new Trait("female", ["cigarette", "straight hair dark"]),
  //9581"]),

  new Trait("male", ["front beard", "mohawk", "nerd glasses"]),
  //9582"]),

  new Trait("male", [
    "3d glasses",
    "earring",
    "front beard",
    "messy hair",
    "mole",
  ]),
  //9583"]),

  new Trait("male", [
    "earring",
    "eye patch",
    "normal beard black",
    "purple hair",
  ]),
  //9584"]),

  new Trait("male", [
    "earring",
    "eye patch",
    "normal beard black",
    "stringy hair",
  ]),
  //9585"]),

  new Trait("female", ["3d glasses", "bandana", "earring", "purple lipstick"]),
  //9586"]),

  new Trait("male", ["bandana", "cigarette", "normal beard", "small shades"]),
  //9587"]),

  new Trait("male", ["clown eyes green", "clown hair green"]),
  //9588"]),

  new Trait("male", ["earring", "headband", "muttonchops", "small shades"]),
  //9589"]),

  new Trait("female", ["black lipstick", "green eye shadow", "tassle hat"]),
  //9590"]),

  new Trait("male", ["crazy hair", "frown", "small shades"]),
  //9591"]),

  new Trait("female", ["blue eye shadow", "hot lipstick"]),
  //9592"]),

  new Trait("female", ["horned rim glasses", "wild blonde"]),
  //9593"]),

  new Trait("male", ["big beard", "regular shades", "spots", "stringy hair"]),
  //9594"]),

  new Trait("female", ["clown eyes blue", "messy hair", "purple lipstick"]),
  //9595"]),

  new Trait("male", ["classic shades", "mohawk dark", "normal beard"]),
  //9596"]),

  new Trait("male", ["big beard", "headband"]),
  //9597"]),

  new Trait("female", ["big shades", "black lipstick", "straight hair dark"]),
  //9598"]),

  new Trait("female", ["blonde bob", "mole", "regular shades"]),
  //9599"]),

  new Trait("male", [
    "classic shades",
    "front beard dark",
    "smile",
    "wild hair",
  ]),
  //9600"]),

  new Trait("male", ["cap", "clown eyes blue"]),
  //9601"]),

  new Trait("male", ["horned rim glasses", "mole", "shaved head"]),
  //9602"]),

  new Trait("male", ["clown nose", "horned rim glasses", "shaved head"]),
  //9603"]),

  new Trait("male", ["fedora", "front beard dark", "mole"]),
  //9604"]),

  new Trait("male", ["3d glasses", "earring", "peak spike"]),
  //9605"]),

  new Trait("female", ["black lipstick", "cigarette", "red mohawk"]),
  //9606"]),

  new Trait("female", ["bandana", "earring", "hot lipstick"]),
  //9607"]),

  new Trait("female", [
    "cigarette",
    "clown eyes blue",
    "earring",
    "straight hair",
  ]),
  //9608"]),

  new Trait("male", ["cigarette", "classic shades", "earring", "mohawk"]),
  //9609"]),

  new Trait("male", ["bandana", "earring", "regular shades"]),
  //9610"]),

  new Trait("male", [
    "earring",
    "hoodie",
    "horned rim glasses",
    "luxurious beard",
  ]),
  //9611"]),

  new Trait("male", ["frown", "goat", "hoodie"]),
  //9612"]),

  new Trait("female", ["green eye shadow", "mohawk thin", "vape"]),
  //9613"]),

  new Trait("female", ["black lipstick", "cigarette", "wild hair"]),
  //9614"]),

  new Trait("male", ["big beard", "earring", "police cap"]),
  //9615"]),

  new Trait("male", ["pipe", "stringy hair"]),
  //9616"]),

  new Trait("male", ["mohawk thin", "mole", "vr"]),
  //9617"]),

  new Trait("male", [
    "earring",
    "front beard dark",
    "police cap",
    "silver chain",
  ]),
  //9618"]),

  new Trait("female", ["eye patch", "wild white hair"]),
  //9619"]),

  new Trait("female", ["bandana", "black lipstick", "blue eye shadow"]),
  //9620"]),

  new Trait("male", ["gold chain", "hoodie", "small shades"]),
  //9621"]),

  new Trait("male", ["cigarette", "mohawk", "spots"]),
  //9622"]),

  new Trait("male", ["hoodie", "normal beard black", "vr"]),
  //9623"]),

  new Trait("male", ["bandana", "earring", "normal beard black"]),
  //9624"]),

  new Trait("male", ["medical mask", "peak spike", "silver chain"]),
  //9625"]),

  new Trait("male", ["cap forward", "shadow beard", "small shades"]),
  //9626"]),

  new Trait("male", ["chinstrap", "cigarette", "earring", "headband"]),
  //9627"]),

  new Trait("male", ["earring", "frown", "frumpy hair", "mustache"]),
  //9628"]),

  new Trait("female", ["blonde bob", "earring", "eye patch"]),
  //9629"]),

  new Trait("female", ["clown eyes green", "purple lipstick"]),
  //9630"]),

  new Trait("male", ["mohawk dark", "normal beard", "pipe"]),
  //9631"]),

  new Trait("female", ["clown eyes blue", "stringy hair"]),
  //9632"]),

  new Trait("female", ["clown nose", "pilot helmet"]),
  //9633"]),

  new Trait("male", ["earring", "luxurious beard", "wild hair"]),
  //9634"]),

  new Trait("female", ["black lipstick", "mohawk thin"]),
  //9635"]),

  new Trait("male", ["medical mask", "stringy hair", "vr"]),
  //9636"]),

  new Trait("male", ["frown", "horned rim glasses", "messy hair", "pipe"]),
  //9637"]),

  new Trait("female", ["green eye shadow", "mohawk dark", "purple lipstick"]),
  //9638"]),

  new Trait("male", ["3d glasses", "do-rag", "normal beard black"]),
  //9639"]),

  new Trait("female", ["blue eye shadow", "crazy hair", "hot lipstick"]),
  //9640"]),

  new Trait("female", ["earring", "hot lipstick", "orange side"]),
  //9641"]),

  new Trait("female", ["eye mask", "half shaved"]),
  //9642"]),

  new Trait("male", ["buck teeth", "mohawk"]),
  //9643"]),

  new Trait("male", ["clown hair green", "goat", "medical mask"]),
  //9644"]),

  new Trait("male", [
    "classic shades",
    "crazy hair",
    "earring",
    "normal beard",
  ]),
  //9645"]),

  new Trait("female", ["eye mask", "hot lipstick", "pigtails"]),
  //9646"]),

  new Trait("female", [
    "horned rim glasses",
    "purple lipstick",
    "stringy hair",
  ]),
  //9647"]),

  new Trait("female", ["earring", "orange side", "rosy cheeks"]),
  //9648"]),

  new Trait("male", ["horned rim glasses", "mohawk dark", "shadow beard"]),
  //9649"]),

  new Trait("female", ["3d glasses", "hot lipstick", "wild blonde"]),
  //9650"]),

  new Trait("male", ["eye patch", "mohawk thin", "mole", "silver chain"]),
  //9651"]),

  new Trait("female", ["3d glasses", "mohawk dark", "purple lipstick"]),
  //9652"]),

  new Trait("male", ["classic shades", "messy hair", "smile"]),
  //9653"]),

  new Trait("male", ["buck teeth", "crazy hair"]),
  //9654"]),

  new Trait("male", ["chinstrap", "small shades", "vampire hair"]),
  //9655"]),

  new Trait("male", ["earring", "frumpy hair", "mole"]),
  //9656"]),

  new Trait("male", ["do-rag", "gold chain"]),
  //9657"]),

  new Trait("male", ["mohawk dark", "small shades", "spots"]),
  //9658"]),

  new Trait("male", ["pipe", "smile"]),
  //9659"]),

  new Trait("female", [
    "earring",
    "hot lipstick",
    "messy hair",
    "nerd glasses",
  ]),
  //9660"]),

  new Trait("female", ["clown hair green", "nerd glasses"]),
  //9661"]),

  new Trait("female", ["bandana", "clown eyes blue", "purple lipstick"]),
  //9662"]),

  new Trait("female", [
    "classic shades",
    "earring",
    "purple lipstick",
    "straight hair blonde",
  ]),
  //9663"]),

  new Trait("male", ["eye patch", "vampire hair"]),
  //9664"]),

  new Trait("male", ["earring", "horned rim glasses", "police cap"]),
  //9665"]),

  new Trait("male", ["goat", "mohawk thin"]),
  //9666"]),

  new Trait("male", ["cap forward", "frown", "regular shades"]),
  //9667"]),

  new Trait("male", ["big shades", "frumpy hair", "smile"]),
  //9668"]),

  new Trait("male", ["normal beard black", "regular shades", "vampire hair"]),
  //9669"]),

  new Trait("female", ["crazy hair", "nerd glasses"]),
  //9670"]),

  new Trait("male", ["messy hair", "vr"]),
  //9671"]),

  new Trait("male", ["medical mask", "mohawk thin", "nerd glasses"]),
  //9672"]),

  new Trait("male", ["classic shades", "earring", "shaved head"]),
  //9673"]),

  new Trait("female", [
    "blue eye shadow",
    "clown nose",
    "earring",
    "headband",
    "silver chain",
  ]),
  //9674"]),

  new Trait("female", ["cap", "cigarette", "hot lipstick"]),
  //9675"]),

  new Trait("male", ["nerd glasses", "normal beard", "peak spike"]),
  //9676"]),

  new Trait("male", ["horned rim glasses", "vampire hair"]),
  //9677"]),

  new Trait("male", ["buck teeth", "clown hair green"]),
  //9678"]),

  new Trait("male", ["cowboy hat", "small shades"]),
  //9679"]),

  new Trait("male", ["cap", "handlebars", "regular shades"]),
  //9680"]),

  new Trait("male", ["cap forward", "classic shades", "shadow beard"]),
  //9681"]),

  new Trait("female", ["hot lipstick", "knitted cap"]),
  //9682"]),

  new Trait("male", ["goat", "top hat"]),
  //9683"]),

  new Trait("male", ["3d glasses", "cap forward", "handlebars", "pipe"]),
  //9684"]),

  new Trait("male", ["horned rim glasses", "knitted cap"]),
  //9685"]),

  new Trait("male", ["big shades", "earring", "knitted cap"]),
  //9686"]),

  new Trait("male", ["cap", "horned rim glasses", "normal beard"]),
  //9687"]),

  new Trait("male", ["cowboy hat", "frown"]),
  //9688"]),

  new Trait("female", ["blue eye shadow", "clown hair green", "earring"]),
  //9689"]),

  new Trait("male", ["eye mask", "frumpy hair"]),
  //9690"]),

  new Trait("female", ["black lipstick", "green eye shadow", "mohawk dark"]),
  //9691"]),

  new Trait("male", [
    "cigarette",
    "clown eyes green",
    "earring",
    "normal beard black",
    "shaved head",
  ]),
  //9692"]),

  new Trait("female", ["clown eyes green", "clown nose", "mohawk dark"]),
  //9693"]),

  new Trait("male", ["goat", "peak spike", "vr"]),
  //9694"]),

  new Trait("male", ["crazy hair", "eye patch", "goat"]),
  //9695"]),

  new Trait("male", ["cigarette", "crazy hair", "mole"]),
  //9696"]),

  new Trait("male", ["cap forward", "earring", "eye mask"]),
  //9697"]),

  new Trait("male", ["clown nose", "eye patch", "silver chain", "wild hair"]),
  //9698"]),

  new Trait("male", ["mohawk dark", "mustache", "nerd glasses"]),
  //9699"]),

  new Trait("male", ["clown eyes green", "mohawk", "normal beard"]),
  //9700"]),

  new Trait("male", ["big shades", "buck teeth", "frumpy hair"]),
  //9701"]),

  new Trait("male", ["medical mask", "muttonchops", "shaved head"]),
  //9702"]),

  new Trait("male", ["beanie", "mole"]),
  //9703"]),

  new Trait("male", [
    "clown eyes green",
    "earring",
    "mohawk dark",
    "shadow beard",
  ]),
  //9704"]),

  new Trait("male", ["cigarette", "mohawk thin"]),
  //9705"]),

  new Trait("male", ["chinstrap", "messy hair"]),
  //9706"]),

  new Trait("male", ["classic shades", "hoodie", "mustache"]),
  //9707"]),

  new Trait("male", ["cigarette", "mohawk thin", "small shades"]),
  //9708"]),

  new Trait("male", ["cap forward", "cigarette", "classic shades", "frown"]),
  //9709"]),

  new Trait("female", ["clown eyes green", "dark hair", "purple lipstick"]),
  //9710"]),

  new Trait("male", ["crazy hair", "eye mask", "front beard dark"]),
  //9711"]),

  new Trait("female", ["earring", "mole", "vape", "wild blonde"]),
  //9712"]),

  new Trait("female", ["clown eyes blue", "mohawk dark"]),
  //9713"]),

  new Trait("female", ["half shaved", "vape"]),
  //9714"]),

  new Trait("female", ["blue eye shadow", "crazy hair", "medical mask"]),
  //9715"]),

  new Trait("male", ["chinstrap", "mohawk dark", "small shades"]),
  //9716"]),

  new Trait("male", ["earring", "mohawk", "mustache", "nerd glasses"]),
  //9717"]),

  new Trait("male", ["clown hair green", "eye mask"]),
  //9718"]),

  new Trait("female", ["clown eyes blue", "earring", "mohawk dark"]),
  //9719"]),

  new Trait("male", ["earring", "peak spike", "vape"]),
  //9720"]),

  new Trait("male", ["cap", "cigarette", "mole"]),
  //9721"]),

  new Trait("male", ["hoodie", "mole", "small shades"]),
  //9722"]),

  new Trait("male", ["3d glasses", "do-rag", "luxurious beard", "mole"]),
  //9723"]),

  new Trait("male", ["earring", "fedora", "regular shades"]),
  //9724"]),

  new Trait("female", ["3d glasses", "half shaved", "hot lipstick"]),
  //9725"]),

  new Trait("male", ["earring", "shadow beard", "shaved head"]),
  //9726"]),

  new Trait("female", ["clown eyes green", "dark hair", "mole"]),
  //9727"]),

  new Trait("male", ["big shades", "earring", "mohawk thin", "muttonchops"]),
  //9728"]),

  new Trait("female", ["mohawk dark", "mole"]),
  //9729"]),

  new Trait("female", ["black lipstick", "earring", "knitted cap"]),
  //9730"]),

  new Trait("female", ["clown nose", "dark hair", "purple lipstick"]),
  //9731"]),

  new Trait("female", [
    "black lipstick",
    "clown eyes green",
    "crazy hair",
    "earring",
  ]),
  //9732"]),

  new Trait("male", ["goat", "regular shades", "wild hair"]),
  //9733"]),

  new Trait("male", ["3d glasses", "chinstrap", "frown", "wild hair"]),
  //9734"]),

  new Trait("male", ["goat", "mohawk", "vr"]),
  //9735"]),

  new Trait("male", ["cowboy hat", "mustache"]),
  //9736"]),

  new Trait("male", ["cap", "eye mask", "normal beard black"]),
  //9737"]),

  new Trait("male", ["earring", "luxurious beard", "messy hair"]),
  //9738"]),

  new Trait("male", ["classic shades", "frumpy hair", "normal beard"]),
  //9739"]),

  new Trait("female", ["clown eyes blue", "dark hair", "hot lipstick"]),
  //9740"]),

  new Trait("female", ["hot lipstick", "vr", "wild hair"]),
  //9741"]),

  new Trait("female", ["blonde short", "nerd glasses"]),
  //9742"]),

  new Trait("male", ["cigarette", "knitted cap", "normal beard black"]),
  //9743"]),

  new Trait("male", ["earring", "mustache", "peak spike"]),
  //9744"]),

  new Trait("female", ["crazy hair", "earring", "horned rim glasses"]),
  //9745"]),

  new Trait("female", ["clown eyes blue", "pipe", "red mohawk"]),
  //9746"]),

  new Trait("female", ["green eye shadow", "mohawk thin"]),
  //9747"]),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "green eye shadow",
    "mohawk dark",
  ]),
  //9748"]),

  new Trait("male", ["beanie", "chinstrap", "eye patch"]),
  //9749"]),

  new Trait("male", ["big shades", "vampire hair"]),
  //9750"]),

  new Trait("male", ["clown eyes blue", "earring", "headband"]),
  //9751"]),

  new Trait("male", ["front beard", "medical mask", "mohawk"]),
  //9752"]),

  new Trait("male", ["cap", "earring", "goat"]),
  //9753"]),

  new Trait("male", ["nerd glasses", "normal beard"]),
  //9754"]),

  new Trait("female", ["blue eye shadow", "hot lipstick", "messy hair"]),
  //9755"]),

  new Trait("female", ["choker", "nerd glasses", "straight hair dark"]),
  //9756"]),

  new Trait("female", ["gold chain", "green eye shadow", "half shaved"]),
  //9757"]),

  new Trait("female", ["cap", "earring", "eye patch"]),
  //9758"]),

  new Trait("male", ["chinstrap", "wild hair"]),
  //9759"]),

  new Trait("male", [
    "cigarette",
    "eye patch",
    "frumpy hair",
    "silver chain",
    "smile",
  ]),
  //9760"]),

  new Trait("male", ["normal beard", "purple hair"]),
  //9761"]),

  new Trait("male", ["messy hair", "normal beard black", "vr"]),
  //9762"]),

  new Trait("female", ["classic shades", "earring", "knitted cap"]),
  //9763"]),

  new Trait("male", ["buck teeth", "front beard dark", "mohawk dark"]),
  //9764"]),

  new Trait("male", ["earring", "muttonchops", "peak spike"]),
  //9765"]),

  new Trait("male", ["big shades", "shadow beard", "wild hair"]),
  //9766"]),

  new Trait("male", ["chinstrap", "messy hair", "smile"]),
  //9767"]),

  new Trait("male", ["eye mask", "front beard", "headband"]),
  //9768"]),

  new Trait("male", ["do-rag", "front beard"]),
  //9769"]),

  new Trait("female", [
    "black lipstick",
    "green eye shadow",
    "mole",
    "stringy hair",
  ]),
  //9770"]),

  new Trait("male", ["front beard dark", "horned rim glasses", "peak spike"]),
  //9771"]),

  new Trait("male", ["cap", "classic shades", "earring"]),
  //9772"

  new Trait("male", ["clown nose", "wild hair"]),
  //9773"]),

  new Trait("male", ["cowboy hat", "eye patch", "shadow beard", "smile"]),
  //9774"

  new Trait("female", ["bandana", "gold chain"]),
  //9775"]),

  new Trait("male", [
    "cigarette",
    "front beard dark",
    "mohawk",
    "small shades",
  ]),
  //9776"]),

  new Trait("male", ["frumpy hair", "luxurious beard", "small shades"]),
  //9777"]),

  new Trait("male", ["big shades", "cigarette", "hoodie"]),
  //9778"]),

  new Trait("male", ["earring", "messy hair", "normal beard black"]),
  //9779"]),

  new Trait("male", ["classic shades", "earring", "front beard dark", "pipe"]),
  //9780"]),

  new Trait("female", ["crazy hair", "regular shades"]),
  //9781"]),

  new Trait("female", ["hot lipstick", "pigtails", "welding goggles"]),
  //9782"]),

  new Trait("male", ["gold chain", "police cap"]),
  //9783"]),

  new Trait("female", ["classic shades", "tiara"]),
  //9784"]),

  new Trait("male", [
    "earring",
    "eye mask",
    "mole",
    "shadow beard",
    "shaved head",
  ]),
  //9785"]),

  new Trait("female", ["big shades", "frumpy hair", "purple lipstick"]),
  //9786"]),

  new Trait("male", ["earring", "eye patch", "mohawk dark"]),
  //9787"]),

  new Trait("male", ["big beard", "knitted cap", "small shades"]),
  //9788"]),

  new Trait("male", ["big beard", "cigarette", "mohawk thin"]),
  //9789"]),

  new Trait("male", ["3d glasses", "mohawk"]),
  //9790"]),

  new Trait("female", ["black lipstick", "crazy hair", "eye mask", "spots"]),
  //9791"]),

  new Trait("female", ["blue eye shadow", "frumpy hair", "hot lipstick"]),
  //9792"]),

  new Trait("male", ["big shades", "earring", "mohawk thin", "muttonchops"]),
  //9793"]),

  new Trait("male", ["big shades", "fedora", "shadow beard"]),
  //9794"]),

  new Trait("male", ["handlebars", "horned rim glasses", "knitted cap"]),
  //9795"]),

  new Trait("female", ["cigarette", "mole", "wild white hair"]),
  //9796"]),

  new Trait("male", ["frumpy hair", "muttonchops", "silver chain"]),
  //9797"]),

  new Trait("male", ["earring", "front beard", "mohawk dark"]),
  //9798"]),

  new Trait("male", ["hoodie", "muttonchops"]),
  //9799"]),

  new Trait("male", ["handlebars", "peak spike", "silver chain"]),
  //9800"]),

  new Trait("female", ["earring", "green eye shadow", "messy hair"]),
  //9801"

  new Trait("male", ["do-rag", "luxurious beard", "silver chain"]),
  //9802"]),

  new Trait("male", ["big shades", "cowboy hat"]),
  //9803"]),

  new Trait("zombie", [
    "shadow beard",
    "small shades",
    "smile",
    "stringy hair",
  ]),
  //9804"]),

  new Trait("female", ["black lipstick", "classic shades", "mohawk"]),
  //9805"]),

  new Trait("female", ["knitted cap", "mole", "nerd glasses"]),
  //9806"]),

  new Trait("male", ["fedora", "frown"]),
  //9807"]),

  new Trait("female", ["eye patch", "headband"]),
  //9808"]),

  new Trait("male", ["eye patch", "top hat"]),
  //9809"]),

  new Trait("male", ["earring", "shadow beard", "stringy hair"]),
  //9810"]),

  new Trait("male", ["frown", "headband", "muttonchops", "regular shades"]),
  //9811"]),

  new Trait("male", ["clown nose", "knitted cap", "muttonchops"]),
  //9812"]),

  new Trait("male", ["classic shades", "crazy hair", "smile"]),
  //9813"]),

  new Trait("female", [
    "horned rim glasses",
    "hot lipstick",
    "mohawk dark",
    "vape",
  ]),
  //9814"]),

  new Trait("male", ["clown eyes green", "mohawk dark", "muttonchops"]),
  //9815"]),

  new Trait("male", ["3d glasses", "frown", "shaved head"]),
  //9816"]),

  new Trait("male", ["big shades", "mole", "shaved head"]),
  //9817"]),

  new Trait("male", ["big beard", "big shades", "peak spike"]),
  //9818"]),

  new Trait("male", [
    "eye patch",
    "gold chain",
    "headband",
    "luxurious beard",
    "mole",
  ]),
  //9819"]),

  new Trait("female", ["black lipstick", "pipe", "straight hair dark"]),
  //9820"]),

  new Trait("male", ["earring", "muttonchops"]),
  //9821"]),

  new Trait("male", ["cigarette", "stringy hair"]),
  //9822"]),

  new Trait("male", ["eye patch", "mohawk thin", "shadow beard"]),
  //9823"]),

  new Trait("female", ["bandana", "cigarette", "hot lipstick", "mole"]),
  //9824"]),

  new Trait("female", ["choker", "wild white hair"]),
  //9825"]),

  new Trait("male", ["goat", "wild hair"]),
  //9826"]),

  new Trait("male", ["regular shades", "shaved head", "smile"]),
  //9827"]),

  new Trait("female", [
    "black lipstick",
    "earring",
    "nerd glasses",
    "straight hair blonde",
  ]),
  //9828"]),

  new Trait("male", ["big shades", "cowboy hat"]),
  //9829"]),

  new Trait("male", ["earring", "handlebars", "peak spike"]),
  //9830"]),

  new Trait("female", ["blonde short", "clown eyes green", "earring"]),
  //9831"]),

  new Trait("female", [
    "hot lipstick",
    "straight hair blonde",
    "welding goggles",
  ]),
  //9832"]),

  new Trait("male", ["bandana", "clown nose", "earring", "eye patch"]),
  //9833"]),

  new Trait("female", ["dark hair", "earring", "nerd glasses"]),
  //9834"]),

  new Trait("male", ["cigarette", "earring", "shadow beard", "wild hair"]),
  //9835"]),

  new Trait("female", ["black lipstick", "earring", "mohawk thin", "pipe"]),
  //9836"]),

  new Trait("male", ["headband", "horned rim glasses", "normal beard black"]),
  //9837"]),

  new Trait("zombie", ["earring", "front beard dark", "peak spike"]),
  //9838"]),

  new Trait("male", ["earring", "knitted cap", "vr"]),
  //9839"]),

  new Trait("female", ["frumpy hair", "horned rim glasses", "hot lipstick"]),
  //9840"]),

  new Trait("male", ["front beard", "regular shades"]),
  //9841"]),

  new Trait("male", ["cap forward", "earring", "normal beard black"]),
  //9842"]),

  new Trait("female", ["black lipstick", "cap", "nerd glasses"]),
  //9843"]),

  new Trait("female", ["mole", "pilot helmet", "purple lipstick"]),
  //9844"]),

  new Trait("male", ["cap forward", "cigarette", "regular shades"]),
  //9845"]),

  new Trait("female", ["blue eye shadow", "mohawk thin"]),
  //9846"]),

  new Trait("male", ["bandana", "normal beard black"]),
  //9847"]),

  new Trait("male", ["big beard", "earring", "hoodie", "nerd glasses"]),
  //9848"]),

  new Trait("female", ["red mohawk", "vr"]),
  //9849"]),

  new Trait("male", ["knitted cap", "mole", "regular shades", "shadow beard"]),
  //9850"]),

  new Trait("female", ["clown hair green", "mole", "regular shades"]),
  //9851"]),

  new Trait("female", ["blonde bob", "blue eye shadow", "silver chain"]),
  //9852"]),

  new Trait("male", ["clown hair green", "regular shades"]),
  //9853"]),

  new Trait("male", ["muttonchops"]),
  //9854"]),

  new Trait("male", ["earring", "headband", "small shades"]),
  //9855"]),

  new Trait("male", ["horned rim glasses", "mole", "purple hair"]),
  //9856"]),

  new Trait("female", [
    "earring",
    "horned rim glasses",
    "mohawk",
    "purple lipstick",
  ]),
  //9857"]),

  new Trait("male", ["chinstrap", "purple hair", "regular shades"]),
  //9858"]),

  new Trait("male", ["mohawk dark", "regular shades", "silver chain"]),
  //9859"]),

  new Trait("male", [
    "earring",
    "regular shades",
    "shadow beard",
    "shaved head",
  ]),
  //9860"]),

  new Trait("female", [
    "classic shades",
    "clown nose",
    "earring",
    "wild white hair",
  ]),
  //9861"]),

  new Trait("male", ["earring", "mohawk thin", "mustache"]),
  //9862"]),

  new Trait("male", ["cigarette"]),
  //9863"]),

  new Trait("female", ["orange side", "purple eye shadow"]),
  //9864"]),

  new Trait("male", ["classic shades", "luxurious beard", "vampire hair"]),
  //9865"]),

  new Trait("female", ["clown eyes blue", "hot lipstick", "straight hair"]),
  //9866"]),

  new Trait("female", ["gold chain", "mohawk dark"]),
  //9867"]),

  new Trait("female", ["earring", "hot lipstick", "mohawk dark"]),
  //9868"]),

  new Trait("female", ["green eye shadow", "mole", "wild white hair"]),
  //9869"]),

  new Trait("male", ["cowboy hat", "earring", "horned rim glasses"]),
  //9870"]),

  new Trait("female", ["earring", "hot lipstick"]),
  //9871"]),

  new Trait("male", ["regular shades", "shadow beard"]),
  //9872"]),

  new Trait("male", ["handlebars", "wild hair"]),
  //9873"]),

  new Trait("male", ["big beard"]),
  //9874"]),

  new Trait("female", ["eye mask", "tassle hat"]),
  //9875"]),

  new Trait("female", ["eye patch", "pink with hat", "purple lipstick"]),
  //9876"]),

  new Trait("male", ["mustache", "purple hair"]),
  //9877"]),

  new Trait("male", [
    "gold chain",
    "hoodie",
    "normal beard black",
    "small shades",
  ]),
  //9878"]),

  new Trait("male", ["cap forward", "earring", "normal beard black"]),
  //9879"]),

  new Trait("male", ["bandana", "goat", "regular shades", "vape"]),
  //9880"]),

  new Trait("female", [
    "blue eye shadow",
    "cigarette",
    "messy hair",
    "purple lipstick",
  ]),
  //9881"]),

  new Trait("female", [
    "classic shades",
    "earring",
    "medical mask",
    "straight hair",
  ]),
  //9882"]),

  new Trait("male", ["cowboy hat", "horned rim glasses", "muttonchops"]),
  //9883"]),

  new Trait("female", ["black lipstick", "nerd glasses", "straight hair dark"]),
  //9884"]),

  new Trait("female", ["hot lipstick", "purple eye shadow", "wild hair"]),
  //9885"]),

  new Trait("male", ["classic shades", "front beard dark", "headband"]),
  //9886"]),

  new Trait("male", ["earring", "goat", "mohawk thin", "mole"]),
  //9887"]),

  new Trait("male", ["3d glasses", "front beard", "frumpy hair", "mole"]),
  //9888"]),

  new Trait("female", ["big shades", "straight hair dark", "vape"]),
  //9889"]),

  new Trait("female", [
    "black lipstick",
    "blue eye shadow",
    "earring",
    "red mohawk",
  ]),
  //9890"]),

  new Trait("male", ["clown eyes blue", "luxurious beard", "mohawk"]),
  //9891"]),

  new Trait("female", ["blue eye shadow", "medical mask", "tassle hat"]),
  //9892"]),

  new Trait("male", ["hoodie", "luxurious beard", "vape"]),
  //9893"]),

  new Trait("male", ["do-rag", "vr"]),
  //9894"]),

  new Trait("female", ["earring", "hot lipstick", "mohawk dark"]),
  //9895"]),

  new Trait("male", ["cap", "cigarette", "earring", "horned rim glasses"]),
  //9896"]),

  new Trait("male", ["buck teeth", "do-rag", "goat"]),
  //9897"]),

  new Trait("female", ["eye mask", "headband", "vape"]),
  //9898"]),

  new Trait("female", ["clown eyes blue", "dark hair", "hot lipstick"]),
  //9899"]),

  new Trait("male", ["do-rag", "mole"]),
  //9900"]),

  new Trait("male", ["cigarette", "front beard", "hoodie"]),
  //9901"]),

  new Trait("male", ["mohawk dark", "mole"]),
  //9902"]),

  new Trait("female", ["eye patch", "hot lipstick", "mohawk"]),
  //9903"]),

  new Trait("male", ["handlebars", "mohawk thin", "nerd glasses"]),
  //9904"]),

  new Trait("male", ["eye mask", "muttonchops"]),
  //9905"]),

  new Trait("male", ["eye mask", "front beard", "police cap"]),
  //9906"]),

  new Trait("female", ["blue eye shadow", "earring", "tiara"]),
  //9907"]),

  new Trait("female", ["3d glasses", "dark hair", "hot lipstick"]),
  //9908"]),

  new Trait("zombie", ["cap"]),
  //9909"]),

  new Trait("male", ["mohawk thin", "silver chain"]),
  //9910"]),

  new Trait("male", ["eye mask", "mohawk thin"]),
  //9911"]),

  new Trait("female", [
    "black lipstick",
    "mohawk dark",
    "nerd glasses",
    "pipe",
    "rosy cheeks",
  ]),
  //9912"]),

  new Trait("male", ["earring", "mustache", "shaved head"]),
  //9913"]),

  new Trait("male", ["shadow beard", "shaved head", "small shades"]),
  //9914"]),

  new Trait("male", ["earring", "eye mask", "knitted cap", "mole"]),
  //9915"]),

  new Trait("male", ["beanie", "front beard"]),
  //9916"]),

  new Trait("female", ["bandana", "mole", "vape"]),
  //9917"]),

  new Trait("male", ["clown nose", "frumpy hair"]),
  //9918"]),

  new Trait("female", ["black lipstick", "earring", "messy hair"]),
  //9919"]),

  new Trait("female", ["big shades", "messy hair", "purple lipstick"]),
  //9920"]),

  new Trait("female", [
    "cigarette",
    "clown nose",
    "frumpy hair",
    "welding goggles",
  ]),
  //9921"]),

  new Trait("male", ["do-rag", "front beard dark"]),
  //9922"]),

  new Trait("female", ["cap", "clown eyes green", "earring", "hot lipstick"]),
  //9923"]),

  new Trait("female", ["hot lipstick", "mohawk dark", "mole"]),
  //9924"]),

  new Trait("female", [
    "blue eye shadow",
    "cigarette",
    "earring",
    "purple lipstick",
    "wild blonde",
  ]),
  //9925"]),

  new Trait("female", ["hot lipstick", "tiara"]),
  //9926"]),

  new Trait("female", ["black lipstick", "clown eyes green", "half shaved"]),
  //9927"]),

  new Trait("female", ["cigarette", "clown hair green"]),
  //9928"]),

  new Trait("male", ["earring", "peak spike", "shadow beard"]),
  //9929"]),

  new Trait("male", ["goat", "horned rim glasses"]),
  //9930"]),

  new Trait("male", ["big shades", "earring", "mohawk"]),
  //9931"]),

  new Trait("female", ["3d glasses", "clown hair green"]),
  //9932"]),

  new Trait("female", ["clown eyes blue", "mohawk dark", "mole"]),
  //9933"]),

  new Trait("female", ["blue eye shadow", "pink with hat", "purple lipstick"]),
  //9934"]),

  new Trait("male", ["eye patch", "fedora", "mustache"]),
  //9935"]),

  new Trait("male", ["headband", "regular shades", "smile"]),
  //9936"]),

  new Trait("female", ["hot lipstick", "welding goggles", "wild hair"]),
  //9937"]),

  new Trait("female", ["headband", "spots"]),
  //9938"]),

  new Trait("male", ["cap", "earring", "nerd glasses"]),
  //9939"]),

  new Trait("female", ["blue eye shadow", "mohawk", "purple lipstick"]),
  //9940"]),

  new Trait("female", ["black lipstick", "pigtails", "vr"]),
  //9941"]),

  new Trait("female", ["hot lipstick", "nerd glasses", "straight hair"]),
  //9942"]),

  new Trait("female", [
    "black lipstick",
    "cigarette",
    "earring",
    "eye patch",
    "mohawk thin",
  ]),
  //9943"]),

  new Trait("male", ["front beard", "frumpy hair", "mole"]),
  //9944"]),

  new Trait("female", ["big shades", "black lipstick", "half shaved"]),
  //9945"]),

  new Trait("male", ["mohawk dark", "shadow beard", "silver chain"]),
  //9946"]),

  new Trait("male", ["earring", "goat", "knitted cap", "vr"]),
  //9947"]),

  new Trait("male", ["buck teeth", "classic shades", "do-rag"]),
  //9948"]),

  new Trait("male", ["bandana", "regular shades"]),
  //9949"]),

  new Trait("male", ["do-rag", "eye patch", "shadow beard"]),
  //9950"]),

  new Trait("male", ["cigarette", "hoodie", "shadow beard"]),
  //9951"]),

  new Trait("male", ["hoodie", "normal beard", "smile"]),
  //9952"]),

  new Trait("male", ["big shades", "cigarette", "hoodie", "luxurious beard"]),
  //9953"]),

  new Trait("male", ["front beard", "regular shades", "shaved head"]),
  //9954"]),

  new Trait("zombie", ["shaved head"]),
  //9955"]),

  new Trait("female", ["black lipstick", "clown eyes green", "messy hair"]),
  //9956"]),

  new Trait("female", [
    "black lipstick",
    "horned rim glasses",
    "medical mask",
    "spots",
    "straight hair",
  ]),
  //9957"]),

  new Trait("female", [
    "earring",
    "green eye shadow",
    "mohawk thin",
    "purple lipstick",
  ]),
  //9958"]),

  new Trait("female", [
    "classic shades",
    "pink with hat",
    "pipe",
    "rosy cheeks",
  ]),
  //9959"]),

  new Trait("female", [
    "blue eye shadow",
    "earring",
    "half shaved",
    "purple lipstick",
    "rosy cheeks",
  ]),
  //9960"]),

  new Trait("male", ["medical mask", "normal beard", "shaved head", "vr"]),
  //9961"]),

  new Trait("male", [
    "luxurious beard",
    "messy hair",
    "mole",
    "regular shades",
  ]),
  //9962"]),

  new Trait("male", ["chinstrap", "earring", "purple hair", "vr"]),
  //9963"]),

  new Trait("female", [
    "bandana",
    "clown eyes blue",
    "earring",
    "purple lipstick",
  ]),
  //9964"]),

  new Trait("male", ["earring", "hoodie", "nerd glasses"]),
  //9965"]),

  new Trait("female", ["earring", "eye patch", "hot lipstick", "wild hair"]),
  //9966"]),

  new Trait("female", ["green eye shadow", "knitted cap"]),
  //9967"]),

  new Trait("male", ["big beard", "big shades", "vampire hair"]),
  //9968"]),

  new Trait("male", ["peak spike", "vr"]),
  //9969"]),

  new Trait("male", ["classic shades", "pipe", "shaved head"]),
  //9970"]),

  new Trait("female", ["black lipstick", "blue eye shadow", "dark hair"]),
  //9971"]),

  new Trait("male", ["big shades", "frown", "frumpy hair"]),
  //9972"]),

  new Trait("male", ["chinstrap", "do-rag", "eye patch"]),
  //9973"]),

  new Trait("female", ["blue eye shadow", "clown hair green"]),
  //9974"]),

  new Trait("male", ["earring", "messy hair", "mole"]),
  //9975"]),

  new Trait("female", ["half shaved", "pipe"]),
  //9976"]),

  new Trait("male", ["chinstrap", "regular shades", "shaved head"]),
  //9977"]),

  new Trait("male", ["earring", "eye patch", "fedora"]),
  //9978"]),

  new Trait("male", ["cigarette", "earring", "nerd glasses", "shaved head"]),
  //9979"]),

  new Trait("female", [
    "black lipstick",
    "blonde short",
    "cigarette",
    "classic shades",
  ]),
  //9980"]),

  new Trait("female", ["black lipstick", "earring", "nerd glasses"]),
  //9981"]),

  new Trait("female", ["earring", "stringy hair", "vr"]),
  //9982"]),

  new Trait("female", ["classic shades", "mole", "purple lipstick"]),
  //9983"]),

  new Trait("male", ["goat", "mole", "smile", "stringy hair"]),
  //9984"]),

  new Trait("male", ["big beard", "vampire hair"]),
  //9985"]),

  new Trait("male", ["mohawk", "muttonchops"]),
  //9986"]),

  new Trait("male", ["regular shades", "shadow beard", "vampire hair"]),
  //9987"]),

  new Trait("male", ["gold chain", "messy hair"]),
  //9988"]),

  new Trait("female", ["cigarette", "hot lipstick", "pilot helmet"]),
  //9989"]),

  new Trait("male", ["horned rim glasses", "mohawk"]),
  //9990"]),

  new Trait("male", ["beanie", "earring", "muttonchops", "regular shades"]),
  //9991"]),

  new Trait("male", ["bandana", "chinstrap", "smile"]),
  //9992"]),

  new Trait("male", ["cap", "nerd glasses", "shadow beard"]),
  //9993"]),

  new Trait("female", ["blonde short", "green eye shadow"]),
  //9994"]),

  new Trait("female", ["purple eye shadow", "straight hair dark"]),
  //9995"]),

  new Trait("male", ["cigarette", "crazy hair", "earring", "smile"]),
  //9996"]),

  new Trait("zombie", ["cap forward", "front beard"]),
  //9997"]),

  new Trait("female", [
    "black lipstick",
    "clown eyes green",
    "wild white hair",
  ]),
  //9998"]),

  new Trait("female", ["mohawk", "nerd glasses"]),
  //9999"

  */
];

export function getTrait(index: i32): Trait | null {
  if (index < traits.length) {
    return traits[index];
  } else {
    return null;
  }
}
