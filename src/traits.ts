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
  new Trait("female", ["blonde bob", "earring", "green eye shadow"],),

  //1
  new Trait("male, accessories",["mohawk","smile"],),
  
  //2
  new Trait("female, accessories", ["wild hair"],),

  //3
  new Trait("male, accessories", ["nerd glasses", "pipe", "wild hair"],),

  //4
  new Trait("male, accessories", ["nerd glasses", "pipe", "wild hair"],),

  //5
  new Trait("female, accessories",["earring","half shaved","purple eye shadow"],),
  
  //6
  new Trait("male, accessories",["do-rag"],),
  
  //7
  new Trait("female, accessories",["clown eyes blue","spots", "wild white hair"],),
  
  //8
  new Trait("male,accessories", ["luxurious beard","messy hair"],),
  
  //9
  new Trait("male, accessories",["big beard","clown nose","police cap"],),

  //10
  new Trait ("female, accessories", ["blue eye shadow","mohawk"],),

  //11
  new Trait ("female, accessories", ["black lipstick", "clown eyes green", "straight hair dark"],),

  //12
  new Trait ("female, accessories", ["blonde short", "purple lipstick"]),

  //13
  new Trait ("female, accessories", ["big shades","black lipstick", "straight hair blonde"],),
  
  //14
  new Trait ("female, accessories",["hot lipstick","pilot helmet", "pipe"],),

  //15
  new Trait ("male, accessories",["luxurious beard", "regular shades","wild hair"],),
  
  //16
  new Trait ("male, accessories",["earring","small shades","stringy hair"],),

  //17
  new Trait ("male, accessories", ["frown", "mohawk"]),
  
  //18
  new Trait ("male, accessories", ["eye mask", "muttonchops"]),

  //19
  new Trait ("female, accessories",["bandana","horned rim glasses","hot lipstick"],),

  //20
  new Trait ("male, accessories", ["crazy hair"],),

  //21
  new Trait ("male, accessories", ["classic shades", "earring","messy hair"],),

  //22
  new Trait ("female, accessories", ["pilot helmet", "purple lipstick"],),

  //23
  new Trait("male,accessories",["do-rag","earring","handlebars"],),
 
  //24
  new Trait("male,accessories",["mohawk dark","smile"],),

  //25
  new Trait ("female, accessories",["wild white hair"],),

  //26
  new Trait ("female, accessories",["dark hair"],),

  //27
  new Trait ("male,accessories", ["earring","peak spike"],),

  //28
  new Trait ("male, accessories", ["big shades","crazy hair"]),

  //29
  new Trait ("male, accessories",["cap", "normal beard black"],),
  
  //30
  new Trait ("male, accessories", ["cap","normal beard black"],),

  //31
  new Trait ("female ,accessories",["stringy hair"]),
  
  //32
  new Trait ("male, accessories",["frown","vr"],),

  //33
  new Trait ("male, accessories",["peak spike"]),
  
  //34
  new Trait ("female,accessories" ,["frumpy hair", "purple lipstick"]),

  //35
  new Trait ("male,accessories",["cigarette","earring","horned rim glasses","normal beard","peak spike"],),

  //36
  new Trait( "female,accessories", ["red mohawk"],),

  //37
  new Trait( "female, accessories",["cap,clown eyes blue"],),

  //38
  new Trait( "female,accessories",["classic shades", "frumpy hair", "purple lipstick"],),

  //39
  new Trait("male,accessories",["frown,regular shades", "shaved head"],),

  //40
  new Trait("male,accessories",["bandana,chinstrap","smile"],),

  //41
  new Trait( "male,accessories", ["clown eyes green","muttonchops","wild hair"],),

  //42
  new Trait( "female,accessories",["cigarette","wild hair"],),

  //43
  new Trait ("female, accessories",["half shaved"],),

  //44
  new Trait ("male,accessories", ["messy hair"],),

  //45
  new Trait ("male,accessories", ["earring","mole"],),

  //46
  new Trait( "female,accessories", ["purple lipstick","straight hair dark"],),

  //47
  new Trait("male, accessories", ["knitted cap"],),
  
  //48
  new Trait( "male,accessories", ["knitted cap"],),

  //49
  new Trait("female,accessories", ["bandana","purple eye shadow"],),

  //50
  new Trait("male, accessories", ["fedora","spots"],),

  //51
  new Trait("male, accessories", ["earring","muttonchops","wild hair"],),
  
  //52
  new Trait("male,accessories",["earring","knitted cap","nerd glasses","shadow beard"],),

  //53
  new Trait("female,accessories",["big shades","straight hair"],),
  
  //54
  new Trait("male, accessories",["hoodie"],),
  
  //55
  new Trait("male, accessories",["eye patch"],),
  
  //56
  new Trait("male, accessories",["shaved head"],),

  //57
  new Trait("male, accessories",["headband"],),
  
  //58
  new Trait("male, accessories",["hoodie","normal beard black"],),

  //59
  new Trait("male, accessories",["cowboy hat","muttonchops"],),

  //60
  new Trait("female, accessories",["purple lipstick","stringy hair"],),
  
  //61
  new Trait("female, accessories",["dark hair"],),
  
  //62
  new Trait("female, accessories",["clown eyes blue","earring","hot lipstick","mohawk dark"],),
  
  //63
  new Trait("male,accessories",["earring","shaved head","small shades"],),
  
  //64
  new Trait("female, accessories",["purple lipstick","straight hair blonde"],),
  
  //65
  new Trait("female, accessories",["eye mask","headband"],),

  //66
  new Trait("female, accessories", ["tassle hat"],),

  //67
  new Trait("female, accessories", ["3d glasses","half shaved","purple lipstick"],),

  //68
  new Trait("male, accessories", ["do-rag ", "nerd glasses"],),
  
  //69
  new Trait("male, accessories", [ "fedora ", "normal beard black"],),

  //70
  new Trait("female, accessories", [ "cigarette ", "crazy hair ", "earring ", "regular shades"],),
  
  //71
  new Trait("female, accessories" ,[ "green eye shadow ", "half shaved ", "purple lipstick"],),
  
  //72
  new Trait("male, accessories", [ "earring ", "fedora ", "nerd glasses ", "normal beard"],),

  //73
  new Trait("female, accessories", [ "bandana ", "black lipstick ", "earring"],),
  
  //74
  new Trait("male, accessories", [ "earring ", "mohawk dark ", "shadow beard"],),
  
  //75
  new Trait("male, accessories", [ "eye patch ", "knitted cap ", "shadow beard"],),
  
  //76
  new Trait("male, accessories", [ "cigarette ", "do-rag"]",),
  
  //77
  new Trait("male, accessories", [ "handlebars ", "stringy hair"]",),
  
  //78
  new Trait("male, accessories", [ "eye patch ", "handlebars ", "knitted cap"]",),
  
  //79
  new Trait("male, accessories", [ "mohawk dark ", "normal beard"]",),
  
  //80"
  new Trait("male, accessories", [ "mustache ", "wild hair"]",),
  
  //81"
  new Trait("male, accessories", [ "headband ", "small shades"]",),
  
  //82"
  new Trait("male, accessories", [ "headband"]",),
  
   //83"
  new Trait("male, accessories", [ "shaved head ", "small shades ", "vape"]",),
  
  //84"
  new Trait("male, accessories", [ "big shades ", "earring ", "messy hair"]",),
  
//85
new Traits( "female, accessories" ,[ "crazy hair"),],),
 
//86 ,),
new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "hot lipstick ", "knitted cap",],),
 
new Traits( "male, accessories" ,[ "earring ", "hoodie",],),
//87 ,),
 
new Traits( "female, accessories" ,[ "cap ", "hot lipstick",],),
//88 ,),
 
new Traits( "female, accessories" ,[ "choker",],),
//89 ,),
 
new Traits( "male, accessories" ,[ "eye patch ", "hoodie",],),
//90 ,),
 
new Traits( "female, accessories" ,[ "clown nose ", "straight hair",],),
//91 ,),
 
new Traits( "female, accessories" ,[ "nerd glasses ", "pink with hat ", "purple lipstick",],),
//92 ,),
 
new Traits( "female, accessories" ,[ "bandana",],),
//93 ,),
 
new Traits( "female, accessories" ,[ "earring ", "pink with hat ", "regular shades",],),
//94 ,),
 
new Traits( "male, accessories" ,[ "earring ", "mohawk",],),
//95 ,),
 
new Traits( "female, accessories" ,[ "blonde bob",],),
//96 ,),
 
new Traits( "male, accessories" ,[ "wild hair",],),
//97 ,),
 
new Traits( "female, accessories" ,[ "black lipstick ", "dark hair ", "welding goggles",],),
//98 ,),
 
new Traits( "male, accessories" ,[ "cigarette ", "hoodie",],),
//99 ,),
 
new Traits( "female, accessories" ,[ "tassle hat",],),
//100 ,),
 
new Traits( "male, accessories" ,[ "nerd glasses ", "police cap",],),
//101 ,),
 
new Traits( "male, accessories" ,[ "luxurious beard ", "vampire hair",],),
//102 ,),
 
new Traits( "female, accessories" ,[ "black lipstick ", "blonde bob ", "green eye shadow",],),
//103 ,),
 
new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "eye patch ", "normal beard black",],),
//104 ,),
 
new Traits( "male, accessories" ,[ "mohawk thin",],),
//105 ,),
 
new Traits( "female, accessories" ,[ "straight hair blonde",],),
//106 ,),
 
new Traits( "male, accessories" ,[ "headband",],),
//107 ,),
 
new Traits( "female, accessories" ,[ "black lipstick ", "headband",],),
//108 ,),
 
new Traits( "male, accessories" ,[ "earring ", "fedora ", "handlebars",],),
//109 ,),
 
new Traits( "female, accessories" ,[ "cigarette ", "earring ", "mohawk dark ", "purple lipstick",],),
//110 ,),
 
new Traits( "male, accessories" ,[ "handlebars ", "knitted cap",],),
//111 ,),
 
new Traits( "male, accessories" ,[ "bandana ", "big beard ", "earring ", "horned rim glasses",],),
//112 ,),
 
new Traits( "male, accessories" ,[ "mohawk",],),
//113 ,),
 
new Traits( "female, accessories" ,[ "red mohawk",],),
//114 ,),
 
new Traits( "female, accessories" ,[ "earring ", "half shaved",],),
//115 ,),
 
new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes blue ", "earring ", "tiara",],),
//116 ,),
 
new Traits( "zombie, accessories" ,[ "front beard dark ", "messy hair",],),
//117 ,),
 
new Traits( "female, accessories" ,[ "bandana ", "black lipstick",],),
//118 ,),
 
new Traits( "male, accessories" ,[ "cap ", "earring",],),
//119 ,),
 
new Traits( "female, accessories" ,[ "big shades ", "tassle hat",],),
//120 ,),
 
new Traits( "female, accessories" ,[ "purple lipstick ", "tiara",],),
//121 ,),
 
new Traits( "male, accessories" ,[ "cigarette ", "mohawk",],),
//122 ,),
 
new Traits( "female, accessories" ,[ "spots ", "wild white hair",],),
//123 ,),
 
new Traits( "male, accessories" ,[ "earring ", "normal beard black ", "peak spike",],),
//124 ,),
 
new Traits( "female, accessories" ,[ "big shades ", "purple lipstick ", "tassle hat",],),
//125 ,),
 
new Traits( "male, accessories" ,[ "cigarette ", "earring ", "eye patch ", "headband",],),
//126 ,),
 
new Traits( "female, accessories" ,[ "clown eyes green ", "stringy hair",],),
//127 ,),
 
new Traits( "male, accessories" ,[ "chinstrap ", "mole ", "police cap ", "vape",],),
//128 ,),
 
new Traits( "male, accessories" ,[ "cap forward ", "cigarette ", "gold chain ", "horned rim glasses",],),
//129 ,),
 
new Traits( "male, accessories" ,[ "mohawk",],),
//130 ,),
 
new Traits( "female, accessories" ,[ "hot lipstick ", "straight hair dark",],),
//131 ,),
 
new Traits( "male, accessories" ,[ "mohawk thin",],),
//132 ,),
 
new Traits( "male, accessories" ,[ "chinstrap ", "pipe ", "purple hair",],),
//133 ,),
 
new Traits( "male, accessories" ,[ "police cap",],),
//134 ,),
 
new Traits( "male, accessories" ,[ "cap forward",],),
//135 ,),
 
new Traits( "male, accessories" ,[ "clown eyes green ", "shadow beard ", "shaved head",],),
//136 ,),
 
new Traits( "male, accessories" ,[ "messy hair",],),
//137 ,),
 
new Traits( "male, accessories" ,[ "horned rim glasses ", "stringy hair",],),
//138 ,),
 
new Traits( "male, accessories" ,[ "do-rag ", "eye patch",],),
//139 ,),
 
new Traits( "female, accessories" ,[ "hot lipstick",],),
//140 ,),
 
new Traits( "male, accessories" ,[ "3d glasses ", "chinstrap ", "headband",],),
//141 ,),
 
new Traits( "male, accessories" ,[ "mohawk ", "regular shades",],),
//142 ,),
 
new Traits( "male, accessories" ,[ "beanie ", "horned rim glasses",],),
//143 ,),
 
new Traits( "male, accessories" ,[ "cigarette ", "frumpy hair ", "luxurious beard",],),
//144 ,),
 
new Traits( "male, accessories" ,[ "wild hair",],),
//145 ,),
 
new Traits( "male, accessories" ,[ "earring ", "mohawk",],),
//146 ,),
 
new Traits( "male, accessories" ,[ "mohawk thin ", "regular shades",],),
//147 ,),
 
new Traits( "male, accessories" ,[ "hoodie",],),
//148 ,),
 
new Traits( "male, accessories" ,[ "big shades ", "luxurious beard ", "messy hair",],),
//149 ,),
 
new Traits( "female, accessories" ,[ "earring ", "purple lipstick",],),
//150 ,),
 
new Traits( "male, accessories" ,[ "stringy hair ", "vr",],),
//151 ,),
 
new Traits( "male, accessories" ,[ "clown eyes green ", "mohawk dark",],),
//152 ,),
 
new Traits( "male, accessories" ,[ "cap ", "earring ", "eye mask",],),
//153 ,),
 
new Traits( "male, accessories" ,[ "earring ", "hoodie ", "shadow beard",],),
//154 ,),
 
new Traits( "male, accessories" ,[ "clown hair green ", "clown nose",],),
//155 ,),
 
new Traits( "male, accessories" ,[ "cap forward ", "small shades",],),
//156 ,),
 
new Traits( "male, accessories" ,[ "cap ", "cigarette",],),
//157 ,),
 
new Traits( "male, accessories" ,[ "goat ", "regular shades ", "wild hair",],),
//158 ,),
 
new Traits( "male, accessories" ,[ "earring ", "stringy hair",],),
//159 ,),
 
new Traits( "female, accessories" ,[ "clown eyes blue ", "pigtails ", "purple lipstick",],),
//160 ,),
 
new Traits( "female, accessories" ,[ "frumpy hair ", "hot lipstick",],),
//161 ,),
 
new Traits( "male, accessories" ,[ "frumpy hair ", "horned rim glasses ", "normal beard black",],),
//162 ,),
 
new Traits( "male, accessories" ,[ "eye patch ", "shaved head",],),
//163 ,),
 
new Traits( "female, accessories" ,[ "stringy hair ", "vr",],),
//164 ,),
 
new Traits( "male, accessories" ,[ "cigarette ", "front beard dark ", "mohawk dark",],),
//165 ,),
 
new Traits( "male, accessories" ,[ "regular shades ", "shaved head",],),
//166 ,),
 
new Traits( "female, accessories" ,[ "headband ", "hot lipstick",],),
//167 ,),
 
new Traits( "female, accessories" ,[ "blonde bob ", "blue eye shadow ", "silver chain",],),
//168 ,),
 
new Traits( "female, accessories" ,[ "hot lipstick ", "regular shades ", "wild white hair",],),
//169 ,),
 
new Traits( "male, accessories" ,[ "classic shades ", "mole ", "peak spike",],),
//170 ,),
 
new Traits( "male, accessories" ,[ "earring ", "mole ", "stringy hair",],),
//171 ,),
 
new Traits( "female, accessories" ,[ "3d glasses ", "blonde bob ", "purple lipstick",],),
//172 ,),
 
new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "messy hair ", "mole ", "pipe",],),
//173 ,),
 
new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "wild hair",],),
//174 ,),
 
new Traits( "male, accessories" ,[ "big shades ", "cap",],),
//175 ,),
 
new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "regular shades ", "wild hair",],),
//176 ,),
 
new Traits( "male, accessories" ,[ "bandana ", "luxurious beard",],),
//177 ,),
 
new Traits( "male, accessories" ,[ "fedora",],),
//178 ,),
 
new Traits( "male, accessories" ,[ "classic shades ", "mohawk thin ", "shadow beard",],),
//179 ,),
 
new Traits( "female, accessories" ,[ "hot lipstick ", "pilot helmet",],),
//180 ,),
 
new Traits( "male, accessories" ,[ "mohawk",],),
//181 ,),
 
new Traits( "male, accessories" ,[ "peak spike",],),
//182 ,),
 
new Traits( "male, accessories" ,[ "shadow beard",],),
//183 ,),
 
new Traits( "female, accessories" ,[ "blonde bob ", "green eye shadow",],),
//184 ,),
 
new Traits( "female, accessories" ,[ "hot lipstick ", "wild white hair",],),
//185 ,),
 
new Traits( "male, accessories" ,[ "crazy hair ", "mustache",],),
//186 ,),
 
new Traits( "female, accessories" ,[ "straight hair",],),
//187 ,),
 
new Traits( "male, accessories" ,[ "earring ", "nerd glasses ", "peak spike",],),
//188 ,),
 
new Traits( "female, accessories" ,[ "mohawk thin ", "purple lipstick",],),
//189 ,),
 
new Traits( "male, accessories" ,[ "headband",],),
//190 ,),
 
new Traits( "female, accessories" ,[ "mohawk",],),
//191 ,),
 
new Traits( "male, accessories" ,[ "clown nose ", "earring ", "mohawk thin ", "nerd glasses",],),
//192 ,),
 
new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "tassle hat",],),
//193 ,),
 
new Traits( "male, accessories" ,[ "clown eyes green ", "wild hair",],),
//194 ,),
 
new Traits( "female, accessories" ,[ "nerd glasses ", "straight hair blonde",],),
//195 ,),
 
new Traits( "female, accessories" ,[ "big shades ", "hot lipstick ", "tassle hat",],),
//196 ,),
 
new Traits( "male, accessories" ,[ "eye patch ", "frumpy hair",],),
//197 ,),
 
new Traits( "male, accessories" ,[ "beanie ", "luxurious beard",],),
//198 ,),
 
new Traits( "female, accessories" ,[ "blonde short ", "classic shades",],),
//199 ,),
 
new Traits( "female, accessories" ,[ "wild hair",],),
//200 ,),
 
new Traits( "female, accessories" ,[ "blue eye shadow ", "cigarette ", "dark hair ", "hot lipstick",],),
//201 ,),
 
new Traits( "female, accessories" ,[ "earring ", "headband ", "purple lipstick",],),
//202 ,),
 
new Traits( "male, accessories" ,[ "front beard ", "messy hair ", "regular shades",],),
//203 ,),
 
new Traits( "male, accessories" ,[ "crazy hair ", "regular shades",],),
//204 ,),
 
new Traits( "male, accessories" ,[ "big shades ", "mohawk dark ", "normal beard black",],),
//205 ,),
 
new Traits( "male, accessories" ,[ "cap forward ", "cigarette ", "clown nose",],),
//206 ,),
 
new Traits( "male, accessories" ,[ "eye patch ", "peak spike ", "pipe",],),
//207 ,),
 
new Traits( "male, accessories" ,[ "3d glasses ", "earring ", "shaved head",],),
//208 ,),
 
new Traits( "female, accessories" ,[ "hot lipstick ", "stringy hair",],),
//209 ,),
 
new Traits( "female, accessories" ,[ "earring ", "straight hair dark",],),
//210 ,),
 
new Traits( "male, accessories" ,[ "goat ", "mohawk thin",],),
//211 ,),
 
new Traits( "female, accessories" ,[ "crazy hair ", "hot lipstick",],),
//212 ,),
 
new Traits( "female, accessories" ,[ "crazy hair",],),
//213 ,),
 
new Traits( "male, accessories" ,[ "front beard dark ", "mohawk",],),
//214 ,),
 
new Traits( "female, accessories" ,[ "mohawk",],),
//215 ,),
 
new Traits( "male, accessories" ,[ "bandana",],),
//216 ,),
 
new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "mohawk dark",],),
//217 ,),
 
new Traits( "male, accessories" ,[ "cap ", "handlebars ", "mole ", "regular shades",],),
//218 ,),
 
new Traits( "female, accessories" ,[ "bandana ", "clown eyes blue ", "earring ", "rosy cheeks",],),
//219 ,),
 
new Traits( "male, accessories" ,[ "big shades ", "headband",],),
//220 ,),
 
new Traits( "male, accessories" ,[ "cigarette ", "classic shades ", "muttonchops ", "stringy hair",],),
//221 ,),
 
new Traits( "male, accessories" ,[ "do-rag ", "pipe ", "small shades",],),
//222 ,),
 
new Traits( "male, accessories" ,[ "crazy hair ", "nerd glasses ", "normal beard",],),
//223 ,),
 
new Traits( "male, accessories" ,[ "cigarette ", "earring ", "headband ", "nerd glasses",],),
//224 ,),
 
new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "orange side",],),
//225 ,),
 
new Traits( "female, accessories" ,[ "hot lipstick",],),
//226 ,),
 
new Traits( "female, accessories" ,[ "wild white hair",],),
//227 ,),
 
new Traits( "male, accessories" ,[ "peak spike ", "small shades",],),
//228 ,),
 
new Traits( "male, accessories" ,[ "cigarette ", "messy hair",],),
//229 ,),
 
new Traits( "male, accessories" ,[ "knitted cap ", "luxurious beard",],),
//230 ,),
 
new Traits( "female, accessories" ,[ "earring ", "pipe ", "stringy hair",],),
//231 ,),
 
new Traits( "female, accessories" ,[ "blue eye shadow ", "wild hair",],),
//232 ,),
 
new Traits( "female, accessories" ,[ "bandana ", "hot lipstick",],),
//233 ,),
 
new Traits( "male, accessories" ,[ "knitted cap ", "nerd glasses",],),
//234 ,),
 
new Traits( "male, accessories" ,[ "cigarette ", "frumpy hair",],),
//235 ,),
 
new Traits( "male, accessories" ,[ "muttonchops ", "vampire hair",],),
//236 ,),
 
new Traits( "male, accessories" ,[ "mohawk ", "regular shades",],),
//237 ,),
 
new Traits( "female, accessories" ,[ "clown eyes green ", "straight hair dark",],),
//238 ,),
 
new Traits( "male, accessories" ,[ "frown ", "goat ", "mohawk",],),
//239 ,),
 
new Traits( "female, accessories" ,[ "big shades ", "straight hair blonde",],),
//240 ,),
 
new Traits( "female, accessories" ,[ "wild blonde",],),
//241 ,),
 
new Traits( "female, accessories" ,[ "black lipstick ", "stringy hair",],),
//242 ,),
 
new Traits( "male, accessories" ,[ "cigarette ", "earring ", "front beard ", "police cap",],),
//243 ,),
 
new Traits( "female, accessories" ,[ "purple lipstick ", "regular shades ", "wild hair",],),
//244 ,),
 
new Traits( "female, accessories" ,[ "dark hair",],),
//245 ,),
 
new Traits( "male, accessories" ,[ "bandana ", "earring ", "luxurious beard",],),
//246 ,),
 
new Traits( "female, accessories" ,[ "green eye shadow ", "mohawk dark",],),
//247 ,),
 
new Traits( "female, accessories" ,[ "messy hair ", "purple eye shadow",],),
//248 ,),
 
new Traits( "female, accessories" ,[ "orange side",],),
//249 ,),
 
new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "frumpy hair",],),
//250 ,),
 
new Traits( "female, accessories" ,[ "green eye shadow ", "mohawk dark",],),
//251 ,),
 
new Traits( "male, accessories" ,[ "cap forward ", "mole",],),
//252 ,),
 
new Traits( "female, accessories" ,[ "blonde short ", "clown eyes green",],),
//253 ,),
 
new Traits( "male, accessories" ,[ "fedora",],),
//254 ,),
 
new Traits( "male, accessories" ,[ "mustache ", "shaved head",],),
//255 ,),
 
new Traits( "male, accessories" ,[ "earring ", "eye patch ", "fedora ", "vape",],),
//256 ,),
 
new Traits( "male, accessories" ,[ "cap ", "frown",],),
//257 ,),
 
new Traits( "male, accessories" ,[ "cap forward ", "handlebars",],),
//258 ,),
 
new Traits( "male, accessories" ,[ "cap forward ", "earring ", "eye mask",],),
//259 ,),
 
new Traits( "male, accessories" ,[ "3d glasses ", "purple hair",],),
//260 ,),
 
new Traits( "female, accessories" ,[ "black lipstick ", "wild white hair",],),
//261 ,),
 
new Traits( "female, accessories" ,[ "blonde short ", "regular shades",],),
//262 ,),
 
new Traits( "male, accessories" ,[ "messy hair ", "muttonchops",],),
//263 ,),
 
new Traits( "female, accessories" ,[ "earring ", "wild white hair",],),
//264 ,),
 
new Traits( "male, accessories" ,[ "cap forward ", "earring ", "gold chain",],),
//265 ,),
 
new Traits( "male, accessories" ,[ "do-rag ", "earring ", "small shades",],),
//266 ,),
 
new Traits( "male, accessories" ,[ "clown nose ", "fedora",],),
//267 ,),
 
new Traits( "female, accessories" ,[ "knitted cap",],),
//268 ,),
 
new Traits( "male, accessories" ,[ "earring ", "hoodie ", "luxurious beard ", "small shades",],),
//269 ,),
 
new Traits( "female, accessories" ,[ "clown eyes blue ", "red mohawk",],),
//270 ,),
 
new Traits( "male, accessories" ,[ "stringy hair",],),
//271 ,),
 
new Traits( "male, accessories" ,[ "buck teeth ", "messy hair",],),
//272 ,),
 
new Traits( "male, accessories" ,[ "big shades ", "cap forward",],),
//273 ,),
 
new Traits( "male, accessories" ,[ "cap ", "earring ", "handlebars ", "regular shades",],),
//274 ,),
 
new Traits( "female, accessories" ,[ "purple eye shadow ", "purple lipstick ", "stringy hair",],),
//275 ,),
 
new Traits( "female, accessories" ,[ "crazy hair",],),
//276 ,),
 
new Traits( "female, accessories" ,[ "red mohawk",],),
//277 ,),
 
new Traits( "female, accessories" ,[ "black lipstick ", "straight hair dark",],),
//278 ,),
 
new Traits( "female, accessories" ,[ "blue eye shadow ", "purple lipstick ", "straight hair blonde",],),
//279 ,),
 
new Traits( "male, accessories" ,[ "earring",],),
//280 ,),
 
new Traits( "male, accessories" ,[ "",],),
//281 ,),
 
new Traits( "female, accessories" ,[ "classic shades ", "straight hair dark",],),
//282 ,),
 
new Traits( "female, accessories" ,[ "frumpy hair ", "hot lipstick",],),
//283 ,),
 
new Traits( "male, accessories" ,[ "mohawk thin",],),
//284 ,),
 
new Traits( "female, accessories" ,[ "dark hair ", "purple lipstick",],),
//285 ,),
 
new Traits( "male, accessories" ,[ "goat ", "wild hair",],),
//286 ,),
 
new Traits( "female, accessories" ,[ "cigarette ", "mohawk ", "purple eye shadow",],),
//287 ,),
 
new Traits( "male, accessories" ,[ "shaved head",],),
//288 ,),
 
new Traits( "female, accessories" ,[ "eye patch ", "mohawk thin",],),
//289 ,),
 
new Traits( "female, accessories" ,[ "wild blonde",],),
//290 ,),
 
new Traits( "male, accessories" ,[ "earring ", "mohawk thin",],),
//291 ,),
 
new Traits( "female, accessories" ,[ "black lipstick ", "tassle hat",],),
//292 ,),
 
new Traits( "male, accessories" ,[ "handlebars ", "mohawk dark",],),
//293 ,),
 
new Traits( "male, accessories" ,[ "big shades ", "earring ", "hoodie",],),
//294 ,),
 
new Traits( "male, accessories" ,[ "frown ", "shaved head",],),
//295 ,),
 
new Traits( "male, accessories" ,[ "mohawk thin",],),
//296 ,),
 
new Traits( "male, accessories" ,[ "crazy hair ", "muttonchops",],),
//297 ,),
 
new Traits( "female, accessories" ,[ "half shaved",],),
//298 ,),
 
new Traits( "male, accessories" ,[ "do-rag ", "muttonchops",],),
//299 ,),
 
new Traits( "male, accessories" ,[ "goat ", "headband",],),
//300 ,),
 
new Traits( "female, accessories" ,[ "green eye shadow ", "hot lipstick ", "red mohawk",],),
//301 ,),
 
new Traits( "female, accessories" ,[ "bandana ", "blue eye shadow ", "purple lipstick",],),
//302 ,),
 
new Traits( "female, accessories" ,[ "purple lipstick ", "red mohawk",],),
//303 ,),
 
new Traits( "male, accessories" ,[ "peak spike ", "shadow beard",],),
//304 ,),
 
new Traits( "female, accessories" ,[ "blonde bob ", "purple lipstick ", "vr",],),
//305 ,),
 
new Traits( "female, accessories" ,[ "vape", "wild hair",],),
//306 ,),
 
new Traits( "male, accessories" ,[ "chinstrap ", "frumpy hair",],),
//307 ,),
 
new Traits( "male, accessories" ,[ "horned rim glasses ", "messy hair ", "mole",],),
//308 ,),
 
new Traits( "male, accessories" ,[ "big shades ", "shaved head",],),
//309 ,),
 
new Traits( "male, accessories" ,[ "bandana ", "classic shades ", "earring ", "vape",],),
//310 ,),
 
new Traits( "male, accessories" ,[ "front beard ", "frumpy hair",],),
//311 ,),
 
new Traits( "male, accessories" ,[ "cap forward ", "chinstrap",],),
//312 ,),
 
new Traits( "female, accessories" ,[ "mohawk dark ", "purple lipstick",],),
//313 ,),
 
new Traits( "male, accessories" ,[ "eye mask ", "police cap",],),
//314 ,),
 
new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "wild white hair",],),
//315 ,),
 
new Traits( "female, accessories" ,[ "bandana",],),
//316 ,),
 
new Traits( "male, accessories" ,[ "bandana ", "chinstrap ", "frown",],),
//317 ,),
 
new Traits( "female, accessories" ,[ "bandana ", "cigarette ", "hot lipstick",],),
//318 ,),
 
new Traits( "female, accessories" ,[ "earring ", "straight hair dark",],),
//319 ,),
 
new Traits( "male, accessories" ,[ "stringy hair",],),
//320 ,),
 
new Traits( "male, accessories" ,[ "peak spike",],),
//321 ,),
 
new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "pink with hat",],),
//322 ,),
 
new Traits( "male, accessories" ,[ "mohawk dark",],),
//323 ,),
 
new Traits( "female, accessories" ,[ "blonde bob ", "earring ", "hot lipstick",],),
//324 ,),
 
new Traits( "male, accessories" ,[ "mustache ", "police cap ", "small shades",],),
//325 ,),
 
new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "wild white hair",],),
//326 ,),
 
new Traits( "male, accessories" ,[ "crazy hair",],),
//327 ,),
 
new Traits( "male, accessories" ,[ "bandana ", "horned rim glasses",],),
//328 ,),
 
new Traits( "female, accessories" ,[ "bandana ", "eye patch",],),
//329 ,),
 
new Traits( "male, accessories" ,[ "clown eyes green ", "knitted cap",],),
//330 ,),
 
new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "tassle hat",],),
//331 ,),
 
new Traits( "male, accessories" ,[ "horned rim glasses ", "stringy hair",],),
//332 ,),
 
new Traits( "female, accessories" ,[ "purple eye shadow ", "purple lipstick ", "straight hair blonde",],),
//333 ,),
 
new Traits( "male, accessories" ,[ "big beard ", "wild hair",],),
//334 ,),
 
new Traits( "male, accessories" ,[ "clown hair green",],),
//335 ,),
 
new Traits( "male, accessories" ,[ "nerd glasses ", "normal beard ", "top hat",],),
//336 ,),
 
new Traits( "male, accessories" ,[ "frumpy hair",],),
//337 ,),
 
new Traits( "male, accessories" ,[ "messy hair ", "small shades",],),
//338 ,),
 
new Traits( "female, accessories" ,[ "big shades ", "black lipstick ", "cap ", "earring ", "mole",],),
//339 ,),
 
new Traits( "male, accessories" ,[ "3d glasses ", "headband ", "medical mask ", "muttonchops",],),
//340 ,),
 
new Traits( "female, accessories" ,[ "earring ", "messy hair",],),
//341 ,),
 
new Traits( "female, accessories" ,[ "bandana ", "regular shades",],),
//342 ,),
 
new Traits( "male, accessories" ,[ "police cap ", "shadow beard",],),
//343 ,),
 
new Traits( "male, accessories" ,[ "beanie",],),
//344 ,),
 
new Traits( "female, accessories" ,[ "earring ", "tassle hat",],),
//345 ,),
 
new Traits( "male, accessories" ,[ "purple hair",],),
//346 ,),
 
new Traits( "male, accessories" ,[ "horned rim glasses ", "knitted cap",],),
//347 ,),
 
new Traits( "female, accessories" ,[ "messy hair ", "nerd glasses ", "rosy cheeks",],),
//348 ,),
 
new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "mohawk dark",],),
//349 ,),
 
new Traits( "female, accessories" ,[ "stringy hair",],),
//350 ,),
 
new Traits( "male, accessories" ,[ "goat ", "mole ", "purple hair",],),
//351 ,),
 
new Traits( "female, accessories" ,[ "green eye shadow ", "straight hair",],),
//352 ,),
 
new Traits( "female, accessories" ,[ "bandana ", "green eye shadow",],),
//353 ,),
 
new Traits( "male, accessories" ,[ "cigarette ", "police cap",],),
//354 ,),
 
new Traits( "female, accessories" ,[ "black lipstick ", "gold chain ", "green eye shadow ", "wild white hair",],),
//355 ,),
 
new Traits( "male, accessories" ,[ "stringy hair",],),
//356 ,),
 
new Traits( "female, accessories" ,[ "earring ", "tassle hat",],),
//357 ,),
 
new Traits( "male, accessories" ,[ "luxurious beard ", "mohawk ", "small shades",],),
//358 ,),
 
new Traits( "female, accessories" ,[ "hot lipstick ", "messy hair",],),
//359 ,),
 
new Traits( "male, accessories" ,[ "bandana ", "normal beard black",],),
//360 ,),
 
new Traits( "male, accessories" ,[ "mohawk dark",],),
//361 ,),
 
new Traits( "male, accessories" ,[ "eye mask ", "peak spike ", "shadow beard",],),
//362 ,),
 
new Traits( "male, accessories" ,[ "cowboy hat ", "nerd glasses ", "shadow beard",],),
//363 ,),
 
new Traits( "male, accessories" ,[ "hoodie ", "normal beard black",],),
//364 ,),
 
new Traits( "male, accessories" ,[ "do-rag ", "normal beard",],),
//365 ,),
 
new Traits( "male, accessories" ,[ "earring ", "eye mask ", "mohawk",],),
//366 ,),
 
new Traits( "male, accessories" ,[ "clown hair green",],),
//367 ,),
 
new Traits( "female, accessories" ,[ "frumpy hair ", "purple lipstick",],),
//368 ,),
 
new Traits( "male, accessories" ,[ "earring ", "fedora ", "luxurious beard",],),
//369 ,),
 
new Traits( "male, accessories" ,[ "cigarette ", "peak spike ", "rosy cheeks ", "small shades",],),
//370 ,),
 
new Traits( "female, accessories" ,[ "frumpy hair",],),
//371 ,),
 
new Traits( "ape, accessories" ,[ "cap forward",],),
//372 ,),
 
new Traits( "male, accessories" ,[ "earring ", "headband",],),
//373 ,),
 
new Traits( "female, accessories" ,[ "bandana ", "clown eyes blue",],),
//374 ,),
 
new Traits( "female, accessories" ,[ "green eye shadow ", "wild hair",],),
//375 ,),
 
new Traits( "female, accessories" ,[ "half shaved ", "nerd glasses",],),
//376 ,),
 
new Traits( "male, accessories" ,[ "cigarette ", "earring ", "headband ", "normal beard ", "regular shades",],),
//377 ,),
 
new Traits( "female, accessories" ,[ "earring ", "frumpy hair",],),
//378 ,),
 
new Traits( "female, accessories" ,[ "earring ", "mohawk thin ", "purple lipstick",],),
//379 ,),
 
new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "wild hair",],),
//380 ,),
 
new Traits( "female, accessories" ,[ "knitted cap ", "purple lipstick",],),
//381 ,),
 
new Traits( "female, accessories" ,[ "cigarette ", "pilot helmet",],),
//382 ,),
 
new Traits( "female, accessories" ,[ "green eye shadow ", "straight hair blonde",],),
//383 ,),
 
new Traits( "female, accessories" ,[ "bandana ", "classic shades ", "purple lipstick",],),
//384 ,),
 
new Traits( "female, accessories" ,[ "choker ", "wild hair",],),
//385 ,),
 
new Traits( "male, accessories" ,[ "do-rag ", "earring",],),
//386 ,),
 
new Traits( "male, accessories" ,[ "cap forward ", "gold chain ", "pipe",],),
//387 ,),
 
new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "straight hair blonde",],),
//388 ,),
 
new Traits( "male, accessories" ,[ "do-rag ", "rosy cheeks",],),
//389 ,),
 
new Traits( "female, accessories" ,[ "messy hair",],),
//390 ,),
 
new Traits( "female, accessories" ,[ "black lipstick ", "eye mask ", "wild blonde",],),
//391 ,),
 
new Traits( "male, accessories" ,[ "shaved head",],),
//392 ,),
 
new Traits( "male, accessories" ,[ "cap forward ", "cigarette ", "vr",],),
//393 ,),
 
new Traits( "female, accessories" ,[ "earring ", "pink with hat",],),
//394 ,),
 
new Traits( "male, accessories" ,[ "cap forward ", "earring ", "normal beard",],),
//395 ,),
 
new Traits( "female, accessories" ,[ "straight hair blonde",],),
//396 ,),
 
new Traits( "male, accessories" ,[ "cowboy hat",],),
//397 ,),
 
new Traits( "male, accessories" ,[ "bandana",],),
//398 ,),
 
new Traits( "male, accessories" ,[ "purple hair ", "small shades",],),
//399 ,),
 
new Traits( "female, accessories" ,[ "blonde bob ", "purple eye shadow ", "purple lipstick",],),
//400 ,),
 
new Traits( "male, accessories" ,[ "big beard ", "earring ", "frumpy hair",],),
//401 ,),
 
new Traits( "male, accessories" ,[ "front beard dark ", "mohawk thin",],),
//402 ,),
 
new Traits( "male, accessories" ,[ "classic shades ", "clown hair green",],),
//403 ,),
 
new Traits( "female, accessories" ,[ "cigarette ", "orange side ", "silver chain",],),
//404 ,),
 
new Traits( "female, accessories" ,[ "messy hair",],),
//405 ,),
 
new Traits( "male, accessories" ,[ "hoodie ", "nerd glasses",],),
//406 ,),
 
new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "wild blonde",],),
//407 ,),
 
new Traits( "male, accessories" ,[ "cap forward",],),
//408 ,),
 
new Traits( "female, accessories" ,[ "black lipstick ", "knitted cap",],),
//409 ,),
 
new Traits( "male, accessories" ,[ "eye patch ", "headband",],),
//410 ,),
 
new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes blue ", "wild hair",],),
//411 ,),
 
new Traits( "male, accessories" ,[ "classic shades ", "earring ", "purple hair",],),
//412 ,),
 
new Traits( "female, accessories" ,[ "straight hair",],),
//413 ,),
 
new Traits( "male, accessories" ,[ "earring ", "shadow beard ", "top hat",],),
//414 ,),
 
new Traits( "male, accessories" ,[ "frown ", "mole ", "police cap ", "small shades",],),
//415 ,),
 
new Traits( "male, accessories" ,[ "cigarette ", "hoodie ", "smile",],),
//416 ,),
 
new Traits( "female, accessories" ,[ "straight hair dark",],),
//417 ,),
 
new Traits( "female, accessories" ,[ "black lipstick ", "vape", "wild white hair",],),
//418 ,),
 
new Traits( "female, accessories" ,[ "bandana ", "earring",],),
//419 ,),
 
new Traits( "male, accessories" ,[ "crazy hair ", "earring",],),
//420 ,),
 
new Traits( "male, accessories" ,[ "front beard ", "wild hair",],),
//421 ,),
 
new Traits( "female, accessories" ,[ "dark hair ", "earring ", "purple eye shadow ", "purple lipstick",],),
//422 ,),
 
new Traits( "male, accessories" ,[ "clown eyes blue ", "shaved head",],),
//423 ,),
 
new Traits( "male, accessories" ,[ "hoodie ", "muttonchops ", "regular shades",],),
//424 ,),
 
new Traits( "female, accessories" ,[ "black lipstick ", "horned rim glasses ", "messy hair",],),
//425 ,),
 
new Traits( "male, accessories" ,[ "big shades ", "peak spike",],),
//426 ,),
 
new Traits( "female, accessories" ,[ "messy hair",],),
//427 ,),
 
new Traits( "female, accessories" ,[ "purple eye shadow",],),
//428 ,),
 
new Traits( "male, accessories" ,[ "police cap ", "smile",],),
//429 ,),
 
new Traits( "female, accessories" ,[ "dark hair ", "earring ", "purple lipstick",],),
//430 ,),
 
new Traits( "female, accessories" ,[ "headband ", "horned rim glasses",],),
//431 ,),
 
new Traits( "male, accessories" ,[ "cigarette ", "earring ", "messy hair",],),
//432 ,),
 
new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "normal beard ", "regular shades",],),
//433 ,),
 
new Traits( "male, accessories" ,[ "eye mask ", "frumpy hair",],),
//434 ,),
 
new Traits( "male, accessories" ,[ "mohawk thin ", "muttonchops",],),
//435 ,),
 
new Traits( "male, accessories" ,[ "medical mask",],),
//436 ,),
 
new Traits( "male, accessories" ,[ "crazy hair ", "eye patch ", "front beard dark",],),
//437 ,),
 
new Traits( "female, accessories" ,[ "mohawk dark",],),
//438 ,),
 
new Traits( "male, accessories" ,[ "knitted cap ", "shadow beard",],),
//439 ,),
 
new Traits( "female, accessories" ,[ "black lipstick ", "blonde short",],),
//440 ,),
 
new Traits( "male, accessories" ,[ "shadow beard ", "stringy hair",],),
//441 ,),
 
new Traits( "male, accessories" ,[ "cowboy hat ", "front beard",],),
//442 ,),
 
new Traits( "female, accessories" ,[ "wild blonde",],),
//443 ,),
 
new Traits( "male, accessories" ,[ "do-rag ", "earring ", "shadow beard",],),
//444 ,),
 
new Traits( "female, accessories" ,[ "earring ", "pilot helmet ", "pipe ", "purple lipstick",],),
//445 ,),
 
new Traits( "female, accessories" ,[ "cigarette ", "nerd glasses ", "straight hair blonde",],),
//446 ,),
 
new Traits( "male, accessories" ,[ "big shades ", "stringy hair",],),
//447 ,),
 
new Traits( "male, accessories" ,[ "shaved head",],),
//448 ,),
 
new Traits( "female, accessories" ,[ "cigarette ", "purple lipstick ", "straight hair",],),
//449 ,),
 
new Traits( "male, accessories" ,[ "cigarette ", "fedora ", "small shades",],),
//450 ,),
 
new Traits( "male, accessories" ,[ "do-rag",],),
//451 ,),
 
new Traits( "male, accessories" ,[ "knitted cap",],),
//452 ,),
 
new Traits( "male, accessories" ,[ "buck teeth ", "cap",],),
//453 ,),
 
new Traits( "male, accessories" ,[ "chinstrap ", "medical mask ", "messy hair",],),
//454 ,),
 
new Traits( "male, accessories" ,[ "luxurious beard ", "top hat ", "vr",],),
//455 ,),
 
new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "nerd glasses ", "spots",],),
//456 ,),
 
new Traits( "male, accessories" ,[ "3d glasses ", "chinstrap ", "knitted cap",],),
//457 ,),
 
new Traits( "male, accessories" ,[ "cap ", "earring ", "normal beard black",],),
//458 ,),
 
new Traits( "male, accessories" ,[ "police cap",],),
//459 ,),
 
new Traits( "female, accessories" ,[ "black lipstick ", "choker ", "classic shades ", "earring ", "mohawk dark",],),
//460 ,),
 
new Traits( "male, accessories" ,[ "knitted cap ", "smile",],),
//461 ,),
 
new Traits( "male, accessories" ,[ "cap forward ", "clown nose ", "regular shades",],),
//462 ,),
 
new Traits( "male, accessories" ,[ "bandana ", "vape",],),
//463 ,),
 
new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk dark",],),
//464 ,),
 
new Traits( "male, accessories" ,[ "3d glasses ", "hoodie ", "pipe",],),
//465 ,),
 
new Traits( "female, accessories" ,[ "blonde bob ", "purple lipstick",],),
//466 ,),
 
new Traits( "male, accessories" ,[ "classic shades ", "front beard ", "purple hair",],),
//467 ,),
 
new Traits( "male, accessories" ,[ "peak spike",],),
//468 ,),
 
new Traits( "female, accessories" ,[ "frumpy hair",],),
//469 ,),
 
new Traits( "male, accessories" ,[ "big shades ", "knitted cap ", "mole",],),
//470 ,),
 
new Traits( "female, accessories" ,[ "clown eyes green ", "stringy hair",],),
//471 ,),
 
new Traits( "male, accessories" ,[ "mustache ", "regular shades ", "wild hair",],),
//472 ,),
 
new Traits( "female, accessories" ,[ "green eye shadow ", "straight hair dark",],),
//473 ,),
 
new Traits( "female, accessories" ,[ "cigarette ", "pigtails",],),
//474 ,),
 
new Traits( "female, accessories" ,[ "crazy hair",],),
//475 ,),
 
new Traits( "male, accessories" ,[ "mohawk ", "muttonchops ", "nerd glasses ", "pipe",],),
//476 ,),
 
new Traits( "female, accessories" ,[ "mohawk dark ", "purple lipstick",],),
//477 ,),
 
new Traits( "male, accessories" ,[ "cigarette ", "peak spike",],),
//478 ,),
 
new Traits( "female, accessories" ,[ "dark hair ", "regular shades",],),
//479 ,),
 
new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "top hat",],),
//480 ,),
 
new Traits( "female, accessories" ,[ "nerd glasses ", "wild hair",],),
//481 ,),
 
new Traits( "female, accessories" ,[ "hot lipstick ", "tassle hat",],),
//482 ,),
 
new Traits( "male, accessories" ,[ "mustache ", "stringy hair",],),
//483 ,),
 
new Traits( "male, accessories" ,[ "knitted cap ", "nerd glasses",],),
//484 ,),
 
new Traits( "male, accessories" ,[ "3d glasses ", "big beard ", "earring ", "headband",],),
//485 ,),
 
new Traits( "female, accessories" ,[ "hot lipstick ", "straight hair blonde",],),
//486 ,),
 
new Traits( "male, accessories" ,[ "crazy hair",],),
//487 ,),
 
new Traits( "female, accessories" ,[ "earring ", "half shaved ", "mole",],),
//488 ,),
 
new Traits( "male, accessories" ,[ "classic shades ", "do-rag",],),
//489 ,),
 
new Traits( "female, accessories" ,[ "earring ", "pigtails",],),
//490 ,),
 
new Traits( "female, accessories" ,[ "blue eye shadow ", "half shaved ", "hot lipstick",],),
//491 ,),
 
new Traits( "male, accessories" ,[ "classic shades ", "shadow beard ", "shaved head",],),
//492 ,),
 
new Traits( "female, accessories" ,[ "purple lipstick ", "wild blonde",],),
//493 ,),
 
new Traits( "male, accessories" ,[ "front beard dark ", "stringy hair",],),
//494 ,),
 
new Traits( "male, accessories" ,[ "crazy hair ", "smile",],),
//495 ,),
 
new Traits( "male, accessories" ,[ "cap ", "earring ", "normal beard black ", "small shades",],),
//496 ,),
 
new Traits( "male, accessories" ,[ "mustache ", "peak spike",],),
//497 ,),
 
new Traits( "female, accessories" ,[ "blonde short ", "earring",],),
//498 ,),
 
new Traits( "female, accessories" ,[ "cigarette ", "straight hair blonde ", "welding goggles",],),
//499 ,),
 
new Traits( "female, accessories" ,[ "straight hair",],),
//500 ,),
 
new Traits( "female, accessories" ,[ "earring ", "pilot helmet",],),
//501 ,),
 
new Traits( "male, accessories" ,[ "earring ", "headband ", "normal beard",],),
//502 ,),
 
new Traits( "male, accessories" ,[ "front beard dark ", "mohawk dark",],),
//503 ,),
 
new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "pilot helmet",],),
//504 ,),
 
new Traits( "male, accessories" ,[ "headband ", "normal beard",],),
//505 ,),
 
new Traits( "male, accessories" ,[ "big shades ", "messy hair",],),
//506 ,),
 
new Traits( "female, accessories" ,[ "dark hair ", "hot lipstick",],),
//507 ,),
 
new Traits( "male, accessories" ,[ "earring ", "knitted cap",],),
//508 ,),
 
new Traits( "female, accessories" ,[ "regular shades ", "wild hair",],),
//509 ,),
 
new Traits( "male, accessories" ,[ "",],),
//510 ,),
 
new Traits( "male, accessories" ,[ "bandana ", "mole",],),
//511 ,),
 
new Traits( "male, accessories" ,[ "cigarette ", "hoodie",],),
//512 ,),
 
new Traits( "male, accessories" ,[ "knitted cap",],),
//513 ,),
 
new Traits( "female, accessories" ,[ "eye patch ", "hot lipstick ", "straight hair",],),
//514 ,),
 
new Traits( "male, accessories" ,[ "mohawk dark ", "normal beard",],),
//515 ,),
 
new Traits( "male, accessories" ,[ "3d glasses ", "cowboy hat ", "normal beard",],),
//516 ,),
 
new Traits( "male, accessories" ,[ "goat ", "messy hair ", "pipe",],),
//517 ,),
 
new Traits( "male, accessories" ,[ "earring ", "mohawk ", "vr",],),
//518 ,),
 
new Traits( "male, accessories" ,[ "frumpy hair",],),
//519 ,),
 
new Traits( "male, accessories" ,[ "handlebars ", "hoodie ", "regular shades",],),
//520 ,),
 
new Traits( "female, accessories" ,[ "blonde bob",],),
//521 ,),
 
new Traits( "female, accessories" ,[ "blonde bob ", "nerd glasses",],),
//522 ,),
 
new Traits( "male, accessories" ,[ "smile ", "stringy hair",],),
//523 ,),
 
new Traits( "male, accessories" ,[ "muttonchops ", "purple hair",],),
//524 ,),
 
new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "silver chain ", "straight hair dark",],),
//525 ,),
 
new Traits( "male, accessories" ,[ "mole ", "vampire hair",],),
//526 ,),
 
new Traits( "female, accessories" ,[ "hot lipstick ", "regular shades ", "straight hair blonde",],),
//527 ,),
 
new Traits( "female, accessories" ,[ "mohawk",],),
//528 ,),
 
new Traits( "female, accessories" ,[ "headband",],),
//529 ,),
 
new Traits( "female, accessories" ,[ "blonde bob",],),
//530 ,),
 
new Traits( "male, accessories" ,[ "earring ", "knitted cap",],),
//531 ,),
 
new Traits( "female, accessories" ,[ "mohawk dark",],),
//532 ,),
 
new Traits( "male, accessories" ,[ "peak spike ", "spots",],),
//533 ,),
 
new Traits( "female, accessories" ,[ "pigtails ", "vr",],),
//534 ,),
 
new Traits( "male, accessories" ,[ "knitted cap ", "mole ", "mustache",],),
//535 ,),
 
new Traits( "male, accessories" ,[ "hoodie ", "horned rim glasses ", "normal beard",],),
//536 ,),
 
new Traits( "female, accessories" ,[ "pink with hat ", "purple lipstick",],),
//537 ,),
 
new Traits( "female, accessories" ,[ "green eye shadow ", "hot lipstick ", "knitted cap",],),
//538 ,),
 
new Traits( "male, accessories" ,[ "mohawk dark ", "mustache ", "vr",],),
//539 ,),
 
new Traits( "male, accessories" ,[ "mohawk ", "shadow beard",],),
//540 ,),
 
new Traits( "male, accessories" ,[ "front beard dark ", "messy hair ", "nerd glasses",],),
//541 ,),
 
  new Traits( "male, accessories" ,[ "goat ", "medical mask ", "regular shades ", "stringy hair",],),
  //542 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "mustache ", "stringy hair",],),
  //543 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair",],),
  //544 ,),
  
  new Traits( "female, accessories" ,[ "messy hair ", "vr",],),
  //545 ,),
  
  new Traits( "male, accessories" ,[ "frown ", "headband ", "small shades",],),
  //546 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "knitted cap",],),
  //547 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "frumpy hair",],),
  //548 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses",],),
  //549 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "top hat",],),
  //550 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "peak spike",],),
  //551 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "front beard ", "vr",],),
  //552 ,),
  
  new Traits( "female, accessories" ,[ "3d glasses ", "wild hair",],),
  //553 ,),
  
  new Traits( "female, accessories" ,[ "purple lipstick ", "wild hair",],),
  //554 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "mohawk",],),
  //555 ,),
  
  new Traits( "male, accessories" ,[ "messy hair ", "shadow beard",],),
  //556 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "normal beard black ", "small shades",],),
  //557 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "mohawk dark",],),
  //558 ,),
  
  new Traits( "female, accessories" ,[ "mohawk thin",],),
  //559 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "blonde bob",],),
  //560 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "top hat",],),
  //561 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "eye mask ", "rosy cheeks",],),
  //562 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "pipe ", "straight hair dark ", "vr",],),
  //563 ,),
  
  new Traits( "male, accessories" ,[ "big beard ", "mohawk",],),
  //564 ,),
  
  new Traits( "male, accessories" ,[ "shadow beard",],),
  //565 ,),
  
  new Traits( "female, accessories" ,[ "wild hair",],),
  //566 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "vr",],),
  //567 ,),
  
  new Traits( "male, accessories" ,[ "peak spike ", "vr",],),
  //568 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "knitted cap",],),
  //569 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "cigarette ", "muttonchops",],),
  //570 ,),
  
  new Traits( "female, accessories" ,[ "pigtails ", "purple lipstick",],),
  //571 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes blue ", "do-rag",],),
  //572 ,),
  
  new Traits( "female, accessories" ,[ "mole ", "vr ", "wild white hair",],),
  //573 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "goat",],),
  //574 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "frumpy hair",],),
  //575 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "tassle hat",],),
  //576 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "spots",],),
  //577 ,),
  
  new Traits( "male, accessories" ,[ "fedora ", "front beard dark",],),
  //578 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "straight hair blonde",],),
  //579 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "tassle hat",],),
  //580 ,),
  
  new Traits( "female, accessories" ,[ "blonde short ", "cigarette ", "earring",],),
  //581 ,),
  
  new Traits( "male, accessories" ,[ "cap",],),
  //582 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "do-rag",],),
  //583 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "red mohawk",],),
  //584 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "pink with hat",],),
  //585 ,),
  
  new Traits( "female, accessories" ,[ "purple eye shadow ", "wild hair",],),
  //586 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "earring",],),
  //587 ,),
  
  new Traits( "female, accessories" ,[ "big shades ", "black lipstick ", "cigarette ", "earring ", "tassle hat",],),
  //588 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "mohawk ", "regular shades",],),
  //589 ,),
  
  new Traits( "female, accessories" ,[ "classic shades ", "straight hair dark",],),
  //590 ,),
  
  new Traits( "male, accessories" ,[ "goat ", "shaved head ", "small shades",],),
  //591 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "eye patch ", "purple hair",],),
  //592 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "nerd glasses ", "tiara",],),
  //593 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "knitted cap",],),
  //594 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "headband",],),
  //595 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob ", "earring ", "medical mask",],),
  //596 ,),
  
  new Traits( "female, accessories" ,[ "messy hair ", "rosy cheeks",],),
  //597 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "purple eye shadow ", "wild white hair",],),
  //598 ,),
  
  new Traits( "male, accessories" ,[ "mohawk thin ", "shadow beard",],),
  //599 ,),
  
  new Traits( "female, accessories" ,[ "crazy hair ", "purple lipstick",],),
  //600 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes blue ", "mohawk dark",],),
  //601 ,),
  
  new Traits( "female, accessories" ,[ "crazy hair ", "hot lipstick",],),
  //602 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "wild blonde",],),
  //603 ,),
  
  new Traits( "female, accessories" ,[ "purple lipstick ", "wild hair",],),
  //604 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "clown hair green ", "earring ", "mole ", "small shades",],),
  //605 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "mohawk dark ", "purple lipstick",],),
  //606 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes green ", "earring ", "stringy hair",],),
  //607 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "stringy hair",],),
  //608 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "luxurious beard",],),
  //609 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "cap forward ", "earring",],),
  //610 ,),
  
  new Traits( "female, accessories" ,[ "cap",],),
  //611 ,),
  
  new Traits( "male, accessories" ,[ "mohawk dark ", "shadow beard ", "vr",],),
  //612 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "frumpy hair",],),
  //613 ,),
  
  new Traits( "female, accessories" ,[ "headband",],),
  //614 ,),
  
  new Traits( "male, accessories" ,[ "small shades ", "wild hair",],),
  //615 ,),
  
  new Traits( "female, accessories" ,[ "classic shades ", "hot lipstick ", "straight hair blonde",],),
  //616 ,),
  
  new Traits( "male, accessories" ,[ "hoodie ", "normal beard ", "small shades",],),
  //617 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "wild hair",],),
  //618 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "front beard ", "frumpy hair",],),
  //619 ,),
  
  new Traits( "female, accessories" ,[ "horned rim glasses ", "straight hair",],),
  //620 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "normal beard ", "peak spike ", "smile",],),
  //621 ,),
  
  new Traits( "male, accessories" ,[ "big beard ", "earring ", "frumpy hair ", "horned rim glasses",],),
  //622 ,),
  
  new Traits( "male, accessories" ,[ "fedora ", "horned rim glasses ", "normal beard ", "smile",],),
  //623 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "crazy hair ", "earring",],),
  //624 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "eye patch ", "normal beard black ", "stringy hair",],),
  //625 ,),
  
  new Traits( "male, accessories" ,[ "cowboy hat ", "earring",],),
  //626 ,),
  
  new Traits( "male, accessories" ,[ "hoodie",],),
  //627 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "purple eye shadow ", "purple lipstick ", "stringy hair",],),
  //628 ,),
  
  new Traits( "male, accessories" ,[ "regular shades",],),
  //629 ,),
  
  new Traits( "male, accessories" ,[ "handlebars ", "mohawk thin",],),
  //630 ,),
  
  new Traits( "female, accessories" ,[ "big shades ", "cigarette ", "headband",],),
  //631 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes blue ", "peak spike",],),
  //632 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "earring ", "regular shades ", "spots",],),
  //633 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "frumpy hair",],),
  //634 ,),
  
  new Traits( "alien ", accessories" ,[ "bandana ", "regular shades",],),
  //635 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "classic shades ", "mohawk",],),
  //636 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "straight hair dark",],),
  //637 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "smile ", "top hat ", "vr",],),
  //638 ,),
  
  new Traits( "male, accessories" ,[ "mole ", "peak spike ", "shadow beard",],),
  //639 ,),
  
  new Traits( "male, accessories" ,[ "knitted cap ", "pipe",],),
  //640 ,),
  
  new Traits( "female, accessories" ,[ "",],),
  //641 ,),
  
  new Traits( "female, accessories" ,[ "pink with hat ", "purple lipstick",],),
  //642 ,),
  
  new Traits( "male, accessories" ,[ "mohawk ", "mustache ", "smile",],),
  //643 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "mohawk thin",],),
  //644 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "earring ", "goat ", "horned rim glasses",],),
  //645 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "hot lipstick ", "mohawk dark",],),
  //646 ,),
  
  new Traits( "female, accessories" ,[ "bandana",],),
  //647 ,),
  
  new Traits( "male, accessories" ,[ "big beard ", "eye patch ", "peak spike",],),
  //648 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "mustache ", "pipe",],),
  //649 ,),
  
  new Traits( "male, accessories" ,[ "big beard ", "messy hair",],),
  //650 ,),
  
  new Traits( "male, accessories" ,[ "do-rag",],),
  //651 ,),
  
  new Traits( "male, accessories" ,[ "mohawk dark ", "normal beard black ", "vape",],),
  //652 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "wild blonde",],),
  //653 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "wild white hair",],),
  //654 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "mohawk",],),
  //655 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "smile",],),
  //656 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "cigarette ", "classic shades ", "mustache",],),
  //657 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk",],),
  //658 ,),
  
  new Traits( "female, accessories" ,[ "gold chain ", "mole ", "tassle hat",],),
  //659 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "purple eye shadow ", "purple lipstick ", "wild hair",],),
  //660 ,),
  
  new Traits( "male, accessories" ,[ "goat ", "knitted cap",],),
  //661 ,),
  
  new Traits( "male, accessories" ,[ "muttonchops ", "purple hair",],),
  //662 ,),
  
  new Traits( "male, accessories" ,[ "frumpy hair",],),
  //663 ,),
  
  new Traits( "female, accessories" ,[ "horned rim glasses ", "tassle hat",],),
  //664 ,),
  
  new Traits( "male, accessories" ,[ "clown hair green ", "luxurious beard ", "regular shades",],),
  //665 ,),
  
  new Traits( "female, accessories" ,[ "messy hair ", "purple lipstick",],),
  //666 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk dark",],),
  //667 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "mohawk dark",],),
  //668 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk thin",],),
  //669 ,),
  
  new Traits( "female, accessories" ,[ "mohawk thin",],),
  //670 ,),
  
  new Traits( "female, accessories" ,[ "classic shades ", "earring ", "half shaved",],),
  //671 ,),
  
  new Traits( "female, accessories" ,[ "purple lipstick ", "wild blonde",],),
  //672 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "mohawk dark",],),
  //673 ,),
  
  new Traits( "male, accessories" ,[ "messy hair ", "nerd glasses",],),
  //674 ,),
  
  new Traits( "female, accessories" ,[ "classic shades ", "mohawk thin",],),
  //675 ,),
  
  new Traits( "male, accessories" ,[ "regular shades ", "smile ", "stringy hair",],),
  //676 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "clown eyes blue ", "pipe",],),
  //677 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "earring",],),
  //678 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "muttonchops ", "silver chain",],),
  //679 ,),
  
  new Traits( "male, accessories" ,[ "front beard dark ", "peak spike",],),
  //680 ,),
  
  new Traits( "male, accessories" ,[ "vampire hair",],),
  //681 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "straight hair dark ", "vape",],),
  //682 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "knitted cap ", "vr",],),
  //683 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "pink with hat ", "purple lipstick",],),
  //684 ,),
  
  new Traits( "male, accessories" ,[ "mohawk ", "regular shades",],),
  //685 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "pipe ", "shaved head ", "smile",],),
  //686 ,),
  
  new Traits( "male, accessories" ,[ "muttonchops ", "peak spike",],),
  //687 ,),
  
  new Traits( "female, accessories" ,[ "clown hair green",],),
  //688 ,),
  
  new Traits( "female, accessories" ,[ "3d glasses ", "black lipstick ", "mohawk thin ", "mole",],),
  //689 ,),
  
  new Traits( "male, accessories" ,[ "messy hair ", "nerd glasses ", "shadow beard",],),
  //690 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "horned rim glasses ", "messy hair",],),
  //691 ,),
  
  new Traits( "male, accessories" ,[ "eye mask ", "frumpy hair",],),
  //692 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "earring ", "vr",],),
  //693 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "messy hair",],),
  //694 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "tassle hat",],),
  //695 ,),
  
  new Traits( "female, accessories" ,[ "mohawk thin ", "purple eye shadow ", "purple lipstick",],),
  //696 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "messy hair",],),
  //697 ,),
  
  new Traits( "male, accessories" ,[ "hoodie ", "regular shades",],),
  //698 ,),
  
  new Traits( "male, accessories" ,[ "wild hair",],),
  //699 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "mohawk dark",],),
  //700 ,),
  
  new Traits( "male, accessories" ,[ "goat ", "peak spike",],),
  //701 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "muttonchops",],),
  //702 ,),
  
  new Traits( "male, accessories" ,[ "nerd glasses ", "peak spike",],),
  //703 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "mustache ", "smile",],),
  //704 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "horned rim glasses",],),
  //705 ,),
  
  new Traits( "female, accessories" ,[ "tiara",],),
  //706 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "rosy cheeks ", "straight hair",],),
  //707 ,),
  
  new Traits( "female, accessories" ,[ "purple lipstick ", "straight hair",],),
  //708 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "shadow beard ", "shaved head",],),
  //709 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "headband ", "mustache ", "regular shades",],),
  //710 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "handlebars ", "small shades",],),
  //711 ,),
  
  new Traits( "female, accessories" ,[ "purple lipstick ", "straight hair",],),
  //712 ,),
  
  new Traits( "male, accessories" ,[ "peak spike ", "vr",],),
  //713 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "green eye shadow ", "half shaved",],),
  //714 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "normal beard",],),
  //715 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "eye patch ", "smile",],),
  //716 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "frumpy hair ", "green eye shadow",],),
  //717 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "spots",],),
  //718 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "pink with hat",],),
  //719 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "earring",],),
  //720 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "half shaved",],),
  //721 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "mohawk dark ", "normal beard black",],),
  //722 ,),
  
  new Traits( "male, accessories" ,[ "nerd glasses ", "wild hair",],),
  //723 ,),
  
  new Traits( "female, accessories" ,[ "purple eye shadow ", "red mohawk",],),
  //724 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "normal beard",],),
  //725 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "small shades ", "vape",],),
  //726 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "dark hair",],),
  //727 ,),
  
  new Traits( "female, accessories" ,[ "cap ", "earring ", "purple lipstick",],),
  //728 ,),
  
  new Traits( "female, accessories" ,[ "purple eye shadow ", "straight hair",],),
  //729 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "earring ", "shadow beard",],),
  //730 ,),
  
  new Traits( "male, accessories" ,[ "eye mask ", "shaved head",],),
  //731 ,),
  
  new Traits( "female, accessories" ,[ "tassle hat",],),
  //732 ,),
  
  new Traits( "female, accessories" ,[ "classic shades ", "purple lipstick ", "stringy hair",],),
  //733 ,),
  
  new Traits( "male, accessories" ,[ "mohawk ", "nerd glasses",],),
  //734 ,),
  
  new Traits( "male, accessories" ,[ "cowboy hat ", "earring ", "mole ", "nerd glasses",],),
  //735 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "earring ", "knitted cap",],),
  //736 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "stringy hair",],),
  //737 ,),
  
  new Traits( "male, accessories" ,[ "earring",],),
  //738 ,),
  
  new Traits( "female, accessories" ,[ "bandana",],),
  //739 ,),
  
  new Traits( "male, accessories" ,[ "mohawk ", "shadow beard",],),
  //740 ,),
  
  new Traits( "male, accessories" ,[ "",],),
  //741 ,),
  
  new Traits( "male, accessories" ,[ "bandana",],),
  //742 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "front beard ", "stringy hair",],),
  //743 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "tiara",],),
  //744 ,),
  
  new Traits( "male, accessories" ,[ "knitted cap ", "mustache ", "nerd glasses",],),
  //745 ,),
  
  new Traits( "female, accessories" ,[ "medical mask ", "stringy hair",],),
  //746 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "classic shades",],),
  //747 ,),
  
  new Traits( "male, accessories" ,[ "frumpy hair ", "shadow beard",],),
  //748 ,),
  
  new Traits( "female, accessories" ,[ "dark hair ", "green eye shadow",],),
  //749 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "regular shades ", "wild hair",],),
  //750 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "classic shades ", "frumpy hair",],),
  //751 ,),
  
  new Traits( "male, accessories" ,[ "messy hair",],),
  //752 ,),
  
  new Traits( "female, accessories" ,[ "purple lipstick ", "wild hair",],),
  //753 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "nerd glasses ", "shadow beard",],),
  //754 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "blonde bob ", "cigarette ", "clown eyes green ", "earring ", "mole",],),
  //755 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "cap",],),
  //756 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "messy hair ", "purple lipstick",],),
  //757 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "eye patch",],),
  //758 ,),
  
  new Traits( "female, accessories" ,[ "dark hair ", "purple eye shadow",],),
  //759 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "frumpy hair",],),
  //760 ,),
  
  new Traits( "female, accessories" ,[ "purple lipstick ", "straight hair dark",],),
  //761 ,),
  
  new Traits( "male, accessories" ,[ "purple hair",],),
  //762
  
  new Traits( "male, accessories" ,[ "mohawk",],),
  //763 ,),
  
  new Traits( "male, accessories" ,[ "headband ", "horned rim glasses",],),
  //764 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes green ", "goat ", "hoodie",],),
  //765 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "crazy hair ", "horned rim glasses",],),
  //766 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "tassle hat",],),
  //767 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "cap forward ", "earring ", "muttonchops",],),
  //768 ,),
  
  new Traits( "male, accessories" ,[ "fedora ", "silver chain",],),
  //769 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "luxurious beard ", "regular shades",],),
  //770 ,),
  
  new Traits( "male, accessories" ,[ "shadow beard ", "stringy hair ", "vr",],),
  //771 ,),
  
  new Traits( "male, accessories" ,[ "hoodie ", "normal beard black",],),
  //772 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "purple eye shadow ", "straight hair",],),
  //773 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "shadow beard",],),
  //774 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "peak spike",],),
  //775 ,),
  
  new Traits( "female, accessories" ,[ "purple lipstick ", "tassle hat",],),
  //776 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "mohawk ", "spots",],),
  //777 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "clown hair green ", "purple lipstick",],),
  //778 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "eye patch",],),
  //779 ,),
  
  new Traits( "female, accessories" ,[ "big shades ", "wild blonde",],),
  //780 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "police cap ", "regular shades",],),
  //781 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob ", "classic shades",],),
  //782 ,),
  
  new Traits( "male, accessories" ,[ "horned rim glasses ", "mohawk",],),
  //783 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "medical mask ", "mohawk thin ", "silver chain",],),
  //784 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "frumpy hair",],),
  //785 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "normal beard ", "vampire hair",],),
  //786 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "shadow beard",],),
  //787 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes green ", "earring ", "mohawk thin ", "mole",],),
  //788 ,),
  
  new Traits( "female, accessories" ,[ "cap",],),
  //789 ,),
  
  new Traits( "female, accessories" ,[ "cap ", "horned rim glasses",],),
  //790 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "shadow beard ", "small shades",],),
  //791 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "clown eyes blue",],),
  //792 ,),
  
  new Traits( "male, accessories" ,[ "purple hair ", "shadow beard",],),
  //793 ,),
  
  new Traits( "male, accessories" ,[ "clown nose ", "headband",],),
  //794 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "crazy hair ", "hot lipstick",],),
  //795 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "classic shades ", "purple lipstick",],),
  //796 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "cigarette",],),
  //797 ,),
  
  new Traits( "male, accessories" ,[ "spots",],),
  //798 ,),
  
  new Traits( "male, accessories" ,[ "fedora ", "mole",],),
  //799 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "crazy hair",],),
  //800 ,),
  
  new Traits( "male, accessories" ,[ "shaved head ", "small shades",],),
  //801 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "hoodie",],),
  //802 ,),
  
  new Traits( "male, accessories" ,[ "messy hair ", "nerd glasses",],),
  //803 ,),
  
  new Traits( "male, accessories" ,[ "messy hair ", "vape",],),
  //804 ,),
  
  new Traits( "male, accessories" ,[ "mohawk thin ", "shadow beard",],),
  //805 ,),
  
  new Traits( "male, accessories" ,[ "clown nose ", "mohawk",],),
  //806 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "earring ", "handlebars",],),
  //807 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "peak spike ", "shadow beard",],),
  //808 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "shaved head",],),
  //809 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes blue ", "front beard ", "hoodie",],),
  //810 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "front beard ", "stringy hair",],),
  //811 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes green ", "mohawk dark",],),
  //812 ,),
  
  new Traits( "female, accessories" ,[ "wild white hair",],),
  //813 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "earring ", "knitted cap",],),
  //814 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob ", "cigarette",],),
  //815 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "mole",],),
  //816 ,),
  
  new Traits( "male, accessories" ,[ "muttonchops ", "wild hair",],),
  //817 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "wild blonde",],),
  //818 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "headband ", "pipe ", "shadow beard",],),
  //819 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "mohawk thin",],),
  //820 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "police cap",],),
  //821 ,),
  
  new Traits( "female, accessories" ,[ "3d glasses ", "blonde bob",],),
  //822 ,),
  
  new Traits( "male, accessories" ,[ "front beard ", "regular shades",],),
  //823 ,),
  
  new Traits( "male, accessories" ,[ "beanie ", "nerd glasses",],),
  //824 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "rosy cheeks ", "wild hair",],),
  //825 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "messy hair",],),
  //826 ,),
  
  new Traits( "male, accessories" ,[ "top hat ", "vr",],),
  //827 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "stringy hair",],),
  //828 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk",],),
  //829 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "wild blonde",],),
  //830 ,),
  
  new Traits( "female, accessories" ,[ "half shaved ", "purple lipstick",],),
  //831 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "red mohawk",],),
  //832 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "shadow beard",],),
  //833 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "straight hair blonde",],),
  //834 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "stringy hair",],),
  //835 ,),
  
  new Traits( "male, accessories" ,[ "front beard dark ", "knitted cap",],),
  //836 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "red mohawk",],),
  //837 ,),
  
  new Traits( "female, accessories" ,[ "pilot helmet",],),
  //838 ,),
  
  new Traits( "female, accessories" ,[ "frumpy hair ", "mole ", "purple eye shadow",],),
  //839 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "mohawk dark ", "mustache",],),
  //840 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "goat ", "mohawk",],),
  //841 ,),
  
  new Traits( "male, accessories" ,[ "nerd glasses ", "purple hair ", "smile",],),
  //842 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "pilot helmet ", "purple lipstick",],),
  //843 ,),
  
  new Traits( "female, accessories" ,[ "purple eye shadow ", "stringy hair",],),
  //844 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "headband",],),
  //845 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "headband ", "small shades",],),
  //846 ,),
  
  new Traits( "male, accessories" ,[ "clown nose ", "mohawk thin",],),
  //847 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "messy hair ", "mustache",],),
  //848 ,),
  
  new Traits( "male, accessories" ,[ "knitted cap",],),
  //849 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "regular shades",],),
  //850 ,),
  
  new Traits( "male, accessories" ,[ "top hat",],),
  //851 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "do-rag ", "goat",],),
  //852 ,),
  
  new Traits( "male, accessories" ,[ "knitted cap ", "mustache ", "regular shades",],),
  //853 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "messy hair",],),
  //854 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "eye patch",],),
  //855 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "regular shades",],),
  //856 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "purple lipstick ", "tassle hat",],),
  //857 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "straight hair blonde",],),
  //858 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "knitted cap ", "vr",],),
  //859 ,),
  
  new Traits( "male, accessories" ,[ "cowboy hat ", "normal beard",],),
  //860 ,),
  
  new Traits( "female, accessories" ,[ "straight hair",],),
  //861 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "cowboy hat ", "mole ", "silver chain",],),
  //862 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick",],),
  //863 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "nerd glasses",],),
  //864 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "mohawk thin ", "purple eye shadow",],),
  //865 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "purple lipstick ", "straight hair",],),
  //866 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "blonde short ", "cigarette ", "clown eyes blue",],),
  //867 ,),
  
  new Traits( "female, accessories" ,[ "frumpy hair ", "silver chain",],),
  //868 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "front beard dark ", "small shades",],),
  //869 ,),
  
  new Traits( "female, accessories" ,[ "blonde short",],),
  //870 ,),
  
  new Traits( "male, accessories" ,[ "regular shades ", "wild hair",],),
  //871 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "vape", "wild blonde",],),
  //872 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "mohawk dark ", "mustache",],),
  //873 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "regular shades ", "wild hair",],),
  //874 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "regular shades ", "wild white hair",],),
  //875 ,),
  
  new Traits( "female, accessories" ,[ "mole ", "tassle hat",],),
  //876 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "hoodie ", "luxurious beard",],),
  //877 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "muttonchops",],),
  //878 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "handlebars ", "purple hair",],),
  //879 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "stringy hair",],),
  //880 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "small shades",],),
  //881 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "mohawk dark",],),
  //882 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "pilot helmet",],),
  //883 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "mohawk dark ", "purple lipstick",],),
  //884 ,),
  
  new Traits( "male, accessories" ,[ "frown ", "knitted cap ", "silver chain",],),
  //885 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "dark hair",],),
  //886 ,),
  
  new Traits( "male, accessories" ,[ "mohawk dark ", "shadow beard",],),
  //887 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "straight hair dark",],),
  //888 ,),
  
  new Traits( "male, accessories" ,[ "mohawk dark ", "mole ", "shadow beard",],),
  //889 ,),
  
  new Traits( "male, accessories" ,[ "shadow beard ", "shaved head ", "vr",],),
  //890 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "shadow beard ", "top hat",],),
  //891 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "earring",],),
  //892 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "messy hair",],),
  //893 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "frumpy hair",],),
  //894 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "do-rag ", "muttonchops",],),
  //895 ,),
  
  new Traits( "male, accessories" ,[ "gold chain ", "peak spike",],),
  //896 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "cigarette ", "muttonchops",],),
  //897 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob ", "purple eye shadow",],),
  //898 ,),
  
  new Traits( "male, accessories" ,[ "headband ", "nerd glasses",],),
  //899 ,),
  
  new Traits( "male, accessories" ,[ "front beard ", "messy hair ", "small shades",],),
  //900 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "hot lipstick ", "tassle hat",],),
  //901 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "messy hair ", "nerd glasses ", "shadow beard",],),
  //902 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "horned rim glasses ", "medical mask",],),
  //903 ,),
  
  new Traits( "female, accessories" ,[ "half shaved ", "horned rim glasses ", "hot lipstick ", "vape",],),
  //904 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "mustache",],),
  //905 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "mole",],),
  //906 ,),
  
  new Traits( "female, accessories" ,[ "clown hair green ", "hot lipstick",],),
  //907 ,),
  
  new Traits( "male, accessories" ,[ "frown ", "messy hair ", "pipe",],),
  //908 ,),
  
  new Traits( "male, accessories" ,[ "nerd glasses ", "stringy hair",],),
  //909 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "headband",],),
  //910 ,),
  
  new Traits( "male, accessories" ,[ "shadow beard ", "shaved head",],),
  //911 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "purple eye shadow ", "straight hair blonde",],),
  //912 ,),
  
  new Traits( "male, accessories" ,[ "fedora",],),
  //913 ,),
  
  new Traits( "female, accessories" ,[ "big shades ", "cap",],),
  //914 ,),
  
  new Traits( "male, accessories" ,[ "cowboy hat ", "front beard dark",],),
  //915 ,),
  
  new Traits( "female, accessories" ,[ "headband",],),
  //916 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "mohawk",],),
  //917 ,),
  
  new Traits( "male, accessories" ,[ "hoodie ", "rosy cheeks ", "vape",],),
  //918 ,),
  
  new Traits( "male, accessories" ,[ "messy hair ", "muttonchops",],),
  //919 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "smile ", "vampire hair ", "vr",],),
  //920 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "red mohawk ", "regular shades",],),
  //921 ,),
  
  new Traits( "female, accessories" ,[ "horned rim glasses ", "straight hair blonde",],),
  //922 ,),
  
  new Traits( "male, accessories" ,[ "mohawk thin ", "shadow beard",],),
  //923 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "earring ", "hoodie ", "luxurious beard",],),
  //924 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "earring ", "muttonchops ", "peak spike ", "vape",],),
  //925 ,),
  
  new Traits( "male, accessories" ,[ "mole ", "stringy hair",],),
  //926 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "blonde bob ", "clown eyes blue",],),
  //927 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "front beard ", "headband ", "silver chain",],),
  //928 ,),
  
  new Traits( "female, accessories" ,[ "blonde short",],),
  //929 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "purple hair",],),
  //930 ,),
  
  new Traits( "female, accessories" ,[ "pilot helmet",],),
  //931 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "earring ", "luxurious beard",],),
  //932 ,),
  
  new Traits( "male, accessories" ,[ "mustache ", "wild hair",],),
  //933 ,),
  
  new Traits( "female, accessories" ,[ "mohawk",],),
  //934 ,),
  
  new Traits( "male, accessories" ,[ "mohawk dark ", "regular shades",],),
  //935 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "mole",],),
  //936 ,),
  
  new Traits( "female, accessories" ,[ "messy hair",],),
  //937 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "stringy hair",],),
  //938 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "hoodie ", "vr",],),
  //939 ,),
  
  new Traits( "male, accessories" ,[ "handlebars ", "headband ", "nerd glasses",],),
  //940 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "eye patch ", "mohawk dark",],),
  //941 ,),
  
  new Traits( "male, accessories" ,[ "eye mask ", "headband",],),
  //942 ,),
  
  new Traits( "male, accessories" ,[ "cowboy hat",],),
  //943 ,),
  
  new Traits( "female, accessories" ,[ "orange side ", "purple lipstick",],),
  //944 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "clown nose ", "cowboy hat",],),
  //945 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "front beard ", "wild hair",],),
  //946 ,),
  
  new Traits( "male, accessories" ,[ "mohawk dark ", "normal beard black",],),
  //947 ,),
  
  new Traits( "female, accessories" ,[ "3d glasses ", "tassle hat",],),
  //948 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "pigtails",],),
  //949 ,),
  
  new Traits( "male, accessories" ,[ "knitted cap ", "luxurious beard",],),
  //950 ,),
  
  new Traits( "female, accessories" ,[ "tassle hat",],),
  //951 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "eye patch ", "mole ", "straight hair dark",],),
  //952 ,),
  
  new Traits( "male, accessories" ,[ "normal beard black ", "shaved head",],),
  //953 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "frumpy hair ", "nerd glasses",],),
  //954 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "vampire hair",],),
  //955 ,),
  
  new Traits( "male, accessories" ,[ "peak spike ", "small shades",],),
  //956 ,),
  
  new Traits( "male, accessories" ,[ "goat",],),
  //957 ,),
  
  new Traits( "male, accessories" ,[ "eye mask ", "mohawk dark",],),
  //958 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "frown ", "normal beard black ", "pipe ", "police cap",],),
  //959 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "purple lipstick ", "straight hair blonde",],),
  //960 ,),
  
  new Traits( "male, accessories" ,[ "headband ", "mole",],),
  //961 ,),
  
  new Traits( "male, accessories" ,[ "eye mask ", "frown ", "police cap",],),
  //962 ,),
  
  new Traits( "female, accessories" ,[ "cap ", "eye mask",],),
  //963 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "headband ", "luxurious beard",],),
  //964 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes blue ", "earring ", "purple hair",],),
  //965 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "mole ", "purple lipstick ", "red mohawk",],),
  //966 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "vr",],),
  //967 ,),
  
  new Traits( "male, accessories" ,[ "cap",],),
  //968 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "shadow beard",],),
  //969 ,),
  
  new Traits( "male, accessories" ,[ "muttonchops ", "vampire hair",],),
  //970 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "red mohawk",],),
  //971 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "vr",],),
  //972 ,),
  
  new Traits( "male, accessories" ,[ "big beard ", "earring ", "peak spike",],),
  //973 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "classic shades ", "hot lipstick",],),
  //974 ,),
  
  new Traits( "male, accessories" ,[ "knitted cap ", "normal beard",],),
  //975 ,),
  
  new Traits( "female, accessories" ,[ "regular shades ", "straight hair blonde",],),
  //976 ,),
  
  new Traits( "female, accessories" ,[ "purple lipstick ", "tassle hat",],),
  //977 ,),
  
  new Traits( "male, accessories" ,[ "wild hair",],),
  //978 ,),
  
  new Traits( "male, accessories" ,[ "luxurious beard ", "messy hair ", "small shades",],),
  //979 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk dark",],),
  //980 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "peak spike",],),
  //981 ,),
  
  new Traits( "female, accessories" ,[ "nerd glasses ", "wild blonde",],),
  //982 ,),
  
  new Traits( "female, accessories" ,[ "messy hair ", "purple lipstick",],),
  //983 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "messy hair",],),
  //984 ,),
  
  new Traits( "female, accessories" ,[ "big shades ", "blonde bob",],),
  //985 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "normal beard black ", "peak spike ", "smile",],),
  //986 ,),
  
  new Traits( "zombie, accessories" ,[ "horned rim glasses ", "wild hair",],),
  //987 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "red mohawk",],),
  //988 ,),
  
  new Traits( "male, accessories" ,[ "mustache ", "shaved head",],),
  //989 ,),
  
  new Traits( "female, accessories" ,[ "purple lipstick ", "stringy hair",],),
  //990 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes blue ", "tassle hat",],),
  //991 ,),
  
  new Traits( "female, accessories" ,[ "purple eye shadow ", "red mohawk",],),
  //992 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "messy hair ", "mole",],),
  //993 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "knitted cap ", "spots ", "vape",],),
  //994 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "earring ", "front beard ", "horned rim glasses",],),
  //995 ,),
  
  new Traits( "female, accessories" ,[ "cap ", "cigarette ", "purple eye shadow",],),
  //996 ,),
  
  new Traits( "female, accessories" ,[ "horned rim glasses ", "straight hair dark",],),
  //997 ,),
  
  new Traits( "male, accessories" ,[ "buck teeth ", "horned rim glasses ", "normal beard ", "stringy hair",],),
  //998 ,),
  
  new Traits( "male, accessories" ,[ "headband ", "normal beard ", "pipe",],),
  //999 ,),
  ],),
  "data" ,],),
  "nfts" , [],),
  ],),
  new Traits( "female, accessories" ,[ "cigarette ", "dark hair ", "rosy cheeks",],),
  //1000 ,),
  
  new Traits( "male, accessories" ,[ "luxurious beard ", "nerd glasses ", "peak spike",],),
  //1001 ,),
  
  new Traits( "male, accessories" ,[ "mohawk dark",],),
  //1002 ,),
  
  new Traits( "male, accessories" ,[ "frumpy hair ", "nerd glasses",],),
  //1003 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "messy hair",],),
  //1004 ,),
  
  new Traits( "male, accessories" ,[ "purple hair ", "regular shades",],),
  //1005 ,),
  
  new Traits( "male, accessories" ,[ "regular shades ", "wild hair",],),
  //1006 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "regular shades ", "vampire hair",],),
  //1007 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "luxurious beard",],),
  //1008 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "luxurious beard",],),
  //1009 ,),
  
  new Traits( "female, accessories" ,[ "classic shades ", "earring ", "pink with hat",],),
  //1010 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "stringy hair",],),
  //1011 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "mohawk thin",],),
  //1012 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes green ", "fedora",],),
  //1013 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "luxurious beard",],),
  //1014 ,),
  
  new Traits( "female, accessories" ,[ "messy hair ", "silver chain",],),
  //1015 ,),
  
  new Traits( "male, accessories" ,[ "buck teeth ", "headband ", "horned rim glasses ", "normal beard",],),
  //1016 ,),
  
  new Traits( "male, accessories" ,[ "goat ", "mole ", "top hat",],),
  //1017 ,),
  
  new Traits( "male, accessories" ,[ "front beard ", "top hat",],),
  //1018 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "headband ", "regular shades",],),
  //1019 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "eye patch ", "gold chain ", "stringy hair",],),
  //1020 ,),
  
  new Traits( "ape, accessories" ,[ "cap ", "eye patch",],),
  //1021 ,),
  
  new Traits( "male, accessories" ,[ "mohawk thin ", "mole",],),
  //1022 ,),
  
  new Traits( "female, accessories" ,[ "headband ", "hot lipstick",],),
  //1023 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "hot lipstick ", "wild hair",],),
  //1024 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "earring",],),
  //1025 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes blue ", "mole ", "peak spike",],),
  //1026 ,),
  
  new Traits( "male, accessories" ,[ "eye mask ", "handlebars ", "hoodie",],),
  //1027 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "mohawk thin",],),
  //1028 ,),
  
  new Traits( "male, accessories" ,[ "horned rim glasses ", "mustache",],),
  //1029 ,),
  
  new Traits( "male, accessories" ,[ "fedora ", "muttonchops",],),
  //1030 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "small shades",],),
  //1031 ,),
  
  new Traits( "female, accessories" ,[ "nerd glasses ", "straight hair dark",],),
  //1032 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "messy hair",],),
  //1033 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "earring ", "hoodie ", "normal beard black",],),
  //1034 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "wild hair",],),
  //1035 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "mohawk thin",],),
  //1036 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "orange side",],),
  //1037 ,),
  
  new Traits( "female, accessories" ,[ "purple lipstick ", "regular shades ", "wild blonde",],),
  //1038 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "messy hair",],),
  //1039 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "mohawk dark",],),
  //1040 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk ", "purple eye shadow ", "vape",],),
  //1041 ,),
  
  new Traits( "female, accessories" ,[ "classic shades ", "half shaved",],),
  //1042 ,),
  
  new Traits( "female, accessories" ,[ "purple lipstick ", "regular shades ", "tassle hat",],),
  //1043 ,),
  
  new Traits( "male, accessories" ,[ "normal beard ", "vr",],),
  //1044 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "shaved head",],),
  //1045 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "wild blonde",],),
  //1046 ,),
  
  new Traits( "male, accessories" ,[ "mohawk dark",],),
  //1047 ,),
  
  new Traits( "male, accessories" ,[ "front beard dark ", "stringy hair",],),
  //1048 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "smile",],),
  //1049 ,),
  
  new Traits( "female, accessories" ,[ "",],),
  //1050 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "mole ", "tassle hat",],),
  //1051 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "earring ", "purple lipstick",],),
  //1052 ,),
  
  new Traits( "male, accessories" ,[ "big beard ", "cap forward ", "nerd glasses",],),
  //1053 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "goat ", "stringy hair",],),
  //1054 ,),
  
  new Traits( "female, accessories" ,[ "horned rim glasses ", "hot lipstick ", "wild blonde",],),
  //1055 ,),
  
  new Traits( "male, accessories" ,[ "handlebars ", "peak spike",],),
  //1056 ,),
  
  new Traits( "male, accessories" ,[ "front beard dark ", "messy hair",],),
  //1057 ,),
  
  new Traits( "male, accessories" ,[ "headband ", "normal beard black",],),
  //1058 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "earring ", "frumpy hair",],),
  //1059 ,),
  
  new Traits( "male, accessories" ,[ "cowboy hat ", "eye mask",],),
  //1060 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "messy hair",],),
  //1061 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "crazy hair ", "shadow beard",],),
  //1062 ,),
  
  new Traits( "male, accessories" ,[ "peak spike ", "shadow beard",],),
  //1063 ,),
  
  new Traits( "male, accessories" ,[ "front beard ", "wild hair",],),
  //1064 ,),
  
  new Traits( "female, accessories" ,[ "crazy hair ", "earring",],),
  //1065 ,),
  
  new Traits( "male, accessories" ,[ "frumpy hair ", "small shades",],),
  //1066 ,),
  
  new Traits( "male, accessories" ,[ "front beard ", "horned rim glasses ", "mohawk",],),
  //1067 ,),
  
  new Traits( "male, accessories" ,[ "big beard ", "mohawk",],),
  //1068 ,),
  
  new Traits( "male, accessories" ,[ "cap",],),
  //1069 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "pink with hat",],),
  //1070 ,),
  
  new Traits( "female, accessories" ,[ "purple lipstick ", "stringy hair",],),
  //1071 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "eye mask ", "stringy hair",],),
  //1072 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "mohawk dark ", "purple lipstick",],),
  //1073 ,),
  
  new Traits( "male, accessories" ,[ "cowboy hat ", "normal beard black",],),
  //1074 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "cap ", "chinstrap ", "earring",],),
  //1075 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "half shaved",],),
  //1076 ,),
  
  new Traits( "male, accessories" ,[ "mohawk dark ", "mustache",],),
  //1077 ,),
  
  new Traits( "male, accessories" ,[ "eye mask ", "hoodie",],),
  //1078 ,),
  
  new Traits( "male, accessories" ,[ "purple hair",],),
  //1079 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "hoodie",],),
  //1080 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "cigarette ", "frumpy hair",],),
  //1081 ,),
  
  new Traits( "female, accessories" ,[ "wild blonde",],),
  //1082 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "straight hair blonde ", "vr",],),
  //1083 ,),
  
  new Traits( "male, accessories" ,[ "nerd glasses ", "shaved head",],),
  //1084 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "mohawk dark",],),
  //1085 ,),
  
  new Traits( "female, accessories" ,[ "blonde short",],),
  //1086 ,),
  
  new Traits( "female, accessories" ,[ "frumpy hair ", "mole",],),
  //1087 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "clown nose ", "shaved head",],),
  //1088 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "knitted cap",],),
  //1089 ,),
  
  new Traits( "female, accessories" ,[ "mohawk thin ", "purple lipstick",],),
  //1090 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes blue ", "vampire hair",],),
  //1091 ,),
  
  new Traits( "female, accessories" ,[ "blonde short ", "cigarette ", "spots",],),
  //1092 ,),
  
  new Traits( "male, accessories" ,[ "buck teeth ", "mustache ", "peak spike ", "small shades",],),
  //1093 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "classic shades ", "hoodie",],),
  //1094 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "luxurious beard",],),
  //1095 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk dark",],),
  //1096 ,),
  
  new Traits( "male, accessories" ,[ "frumpy hair ", "mole ", "nerd glasses",],),
  //1097 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "earring",],),
  //1098 ,),
  
  new Traits( "male, accessories" ,[ "top hat",],),
  //1099 ,),
  
  new Traits( "male, accessories" ,[ "frown ", "nerd glasses ", "vampire hair",],),
  //1100 ,),
  
  new Traits( "male, accessories" ,[ "handlebars ", "messy hair ", "nerd glasses",],),
  //1101 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes blue ", "clown nose ", "straight hair",],),
  //1102 ,),
  
  new Traits( "male, accessories" ,[ "nerd glasses ", "peak spike",],),
  //1103 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "messy hair",],),
  //1104 ,),
  
  new Traits( "male, accessories" ,[ "gold chain ", "luxurious beard ", "wild hair",],),
  //1105 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "luxurious beard ", "peak spike",],),
  //1106 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk dark",],),
  //1107 ,),
  
  new Traits( "male, accessories" ,[ "hoodie ", "luxurious beard",],),
  //1108 ,),
  
  new Traits( "male, accessories" ,[ "mohawk thin ", "small shades",],),
  //1109 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "purple eye shadow ", "purple lipstick ", "wild hair",],),
  //1110 ,),
  
  new Traits( "male, accessories" ,[ "peak spike ", "shadow beard ", "silver chain",],),
  //1111 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "regular shades",],),
  //1112 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "eye patch ", "front beard dark ", "knitted cap",],),
  //1113 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "purple hair",],),
  //1114 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "wild white hair",],),
  //1115 ,),
  
  new Traits( "male, accessories" ,[ "cowboy hat ", "shadow beard",],),
  //1116 ,),
  
  new Traits( "male, accessories" ,[ "horned rim glasses ", "mohawk thin ", "shadow beard",],),
  //1117 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "smile",],),
  //1118 ,),
  
  new Traits( "zombie, accessories" ,[ "do-rag ", "eye patch ", "shadow beard",],),
  //1119 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "wild hair",],),
  //1120 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "mohawk thin",],),
  //1121 ,),
  
  new Traits( "male, accessories" ,[ "mohawk dark ", "small shades",],),
  //1122 ,),
  
  new Traits( "female, accessories" ,[ "3d glasses ", "medical mask ", "straight hair blonde",],),
  //1123 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "mohawk dark ", "nerd glasses",],),
  //1124 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "big shades",],),
  //1125 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "messy hair ", "vr",],),
  //1126 ,),
  
  new Traits( "male, accessories" ,[ "big beard ", "purple hair",],),
  //1127 ,),
  
  new Traits( "male, accessories" ,[ "frumpy hair ", "shadow beard",],),
  //1128 ,),
  
  new Traits( "male, accessories" ,[ "front beard ", "purple hair ", "vape",],),
  //1129 ,),
  
  new Traits( "female, accessories" ,[ "dark hair ", "nerd glasses",],),
  //1130 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "cigarette",],),
  //1131 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "wild hair",],),
  //1132 ,),
  
  new Traits( "male, accessories" ,[ "frown ", "mohawk thin",],),
  //1133 ,),
  
  new Traits( "male, accessories" ,[ "goat ", "nerd glasses ", "wild hair",],),
  //1134 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "gold chain ", "shaved head",],),
  //1135 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "muttonchops ", "small shades ", "wild hair",],),
  //1136 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "shadow beard",],),
  //1137 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "messy hair ", "nerd glasses",],),
  //1138 ,),
  
  new Traits( "female, accessories" ,[ "dark hair ", "eye patch ", "hot lipstick ", "mole",],),
  //1139 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "wild white hair",],),
  //1140 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "mohawk",],),
  //1141 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "tassle hat",],),
  //1142 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "front beard dark",],),
  //1143 ,),
  
  new Traits( "male, accessories" ,[ "muttonchops ", "peak spike",],),
  //1144 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "earring",],),
  //1145 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "mohawk",],),
  //1146 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "shaved head",],),
  //1147 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "eye patch ", "wild blonde",],),
  //1148 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk dark",],),
  //1149 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "straight hair",],),
  //1150 ,),
  
  new Traits( "female, accessories" ,[ "knitted cap",],),
  //1151 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "purple hair",],),
  //1152 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "messy hair ", "mustache",],),
  //1153 ,),
  
  new Traits( "male, accessories" ,[ "frown ", "purple hair",],),
  //1154 ,),
  
  new Traits( "male, accessories" ,[ "front beard ", "frumpy hair ", "nerd glasses",],),
  //1155 ,),
  
  new Traits( "female, accessories" ,[ "purple lipstick ", "wild white hair",],),
  //1156 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick",],),
  //1157 ,),
  
  new Traits( "female, accessories" ,[ "crazy hair ", "mole",],),
  //1158 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "wild blonde",],),
  //1159 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "knitted cap ", "small shades",],),
  //1160 ,),
  
  new Traits( "female, accessories" ,[ "messy hair ", "nerd glasses",],),
  //1161 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "spots ", "straight hair blonde ", "welding goggles",],),
  //1162 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "mole ", "pink with hat",],),
  //1163 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "regular shades",],),
  //1164 ,),
  
  new Traits( "female, accessories" ,[ "cap ", "hot lipstick ", "vape",],),
  //1165 ,),
  
  new Traits( "male, accessories" ,[ "fedora ", "goat",],),
  //1166 ,),
  
  new Traits( "male, accessories" ,[ "horned rim glasses ", "police cap",],),
  //1167 ,),
  
  new Traits( "male, accessories" ,[ "handlebars ", "vampire hair",],),
  //1168 ,),
  
  new Traits( "female, accessories" ,[ "purple lipstick ", "wild hair",],),
  //1169 ,),
  
  new Traits( "male, accessories" ,[ "front beard ", "shaved head",],),
  //1170 ,),
  
  new Traits( "male, accessories" ,[ "frown ", "shaved head",],),
  //1171 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "cigarette ", "nerd glasses ", "shadow beard",],),
  //1172 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "mohawk",],),
  //1173 ,),
  
  new Traits( "female, accessories" ,[ "pipe ", "wild hair",],),
  //1174 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "shaved head",],),
  //1175 ,),
  
  new Traits( "female, accessories" ,[ "mohawk dark ", "vape",],),
  //1176 ,),
  
  new Traits( "male, accessories" ,[ "hoodie ", "normal beard",],),
  //1177 ,),
  
  new Traits( "male, accessories" ,[ "headband ", "pipe",],),
  //1178 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "mohawk dark",],),
  //1179 ,),
  
  new Traits( "male, accessories" ,[ "mohawk ", "muttonchops",],),
  //1180 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "cigarette ", "muttonchops",],),
  //1181 ,),
  
  new Traits( "male, accessories" ,[ "goat ", "hoodie ", "nerd glasses",],),
  //1182 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "cap ", "earring ", "gold chain ", "muttonchops",],),
  //1183 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "mole",],),
  //1184 ,),
  
  new Traits( "male, accessories" ,[ "handlebars ", "mohawk ", "vape", "vr",],),
  //1185 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "black lipstick ", "earring ", "purple eye shadow",],),
  //1186 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "straight hair",],),
  //1187 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "normal beard ", "wild hair",],),
  //1188 ,),
  
  new Traits( "male, accessories" ,[ "mohawk thin ", "spots",],),
  //1189 ,),
  
  new Traits( "zombie, accessories" ,[ "bandana ", "cigarette ", "earring ", "handlebars",],),
  //1190 ,),
  
  new Traits( "male, accessories" ,[ "front beard ", "messy hair",],),
  //1191 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "goat ", "purple hair",],),
  //1192 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "mustache ", "smile ", "spots",],),
  //1193 ,),
  
  new Traits( "male, accessories" ,[ "goat ", "mohawk",],),
  //1194 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "headband",],),
  //1195 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "mohawk dark",],),
  //1196 ,),
  
  new Traits( "female, accessories" ,[ "blonde short",],),
  //1197 ,),
  
  new Traits( "female, accessories" ,[ "clown hair green ", "gold chain ", "horned rim glasses ", "hot lipstick",],),
  //1198 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "tassle hat",],),
  //1199 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick",],),
  //1200 ,),
  
  new Traits( "male, accessories" ,[ "knitted cap ", "normal beard black",],),
  //1201 ,),
  
  new Traits( "male, accessories" ,[ "big beard ", "mohawk dark",],),
  //1202 ,),
  
  new Traits( "male, accessories" ,[ "big beard ", "nerd glasses ", "wild hair",],),
  //1203 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "pigtails",],),
  //1204 ,),
  
  new Traits( "female, accessories" ,[ "crazy hair ", "earring",],),
  //1205 ,),
  
  new Traits( "female, accessories" ,[ "half shaved ", "purple lipstick",],),
  //1206 ,),
  
  new Traits( "male, accessories" ,[ "fedora ", "front beard",],),
  //1207 ,),
  
  new Traits( "male, accessories" ,[ "bandana",],),
  //1208 ,),
  
  new Traits( "female, accessories" ,[ "mohawk dark ", "vr",],),
  //1209 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "purple eye shadow ", "purple lipstick ", "wild blonde",],),
  //1210 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "smile",],),
  //1211 ,),
  
  new Traits( "female, accessories" ,[ "green eye shadow ", "wild hair",],),
  //1212 ,),
  
  new Traits( "male, accessories" ,[ "luxurious beard ", "mohawk",],),
  //1213 ,),
  
  new Traits( "female, accessories" ,[ "eye patch ", "half shaved ", "purple lipstick",],),
  //1214 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "headband",],),
  //1215 ,),
  
  new Traits( "male, accessories" ,[ "purple hair",],),
  //1216 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "purple lipstick",],),
  //1217 ,),
  
  new Traits( "male, accessories" ,[ "stringy hair",],),
  //1218 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "hoodie",],),
  //1219 ,),
  
  new Traits( "female, accessories" ,[ "pink with hat ", "purple lipstick",],),
  //1220 ,),
  
  new Traits( "male, accessories" ,[ "cowboy hat",],),
  //1221 ,),
  
  new Traits( "male, accessories" ,[ "big beard ", "crazy hair ", "earring ", "horned rim glasses",],),
  //1222 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "handlebars",],),
  //1223 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "headband ", "purple eye shadow",],),
  //1224 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "straight hair blonde",],),
  //1225 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "medical mask ", "messy hair ", "shadow beard",],),
  //1226 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "wild blonde",],),
  //1227 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "fedora ", "handlebars",],),
  //1228 ,),
  
  new Traits( "male, accessories" ,[ "clown hair green ", "goat",],),
  //1229 ,),
  
  new Traits( "male, accessories" ,[ "frumpy hair ", "vr",],),
  //1230 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "cigarette ", "eye mask ", "front beard",],),
  //1231 ,),
  
  new Traits( "female, accessories" ,[ "pigtails",],),
  //1232 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "knitted cap ", "vape",],),
  //1233 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "stringy hair",],),
  //1234 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "goat ", "horned rim glasses ", "knitted cap",],),
  //1235 ,),
  
  new Traits( "male, accessories" ,[ "mohawk ", "muttonchops",],),
  //1236 ,),
  
  new Traits( "female, accessories" ,[ "pigtails",],),
  //1237 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "regular shades",],),
  //1238 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "cap forward",],),
  //1239 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "messy hair",],),
  //1240 ,),
  
  new Traits( "male, accessories" ,[ "goat ", "shaved head",],),
  //1241 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "shadow beard",],),
  //1242 ,),
  
  new Traits( "female, accessories" ,[ "purple eye shadow ", "wild blonde",],),
  //1243 ,),
  
  new Traits( "male, accessories" ,[ "mole ", "purple hair",],),
  //1244 ,),
  
  new Traits( "female, accessories" ,[ "blonde short ", "clown eyes green ", "earring ", "hot lipstick",],),
  //1245 ,),
  
  new Traits( "female, accessories" ,[ "dark hair ", "earring ", "hot lipstick ", "nerd glasses",],),
  //1246 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "crazy hair ", "purple lipstick",],),
  //1247 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "mohawk thin",],),
  //1248 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "earring ", "mohawk thin",],),
  //1249 ,),
  
  new Traits( "male, accessories" ,[ "hoodie ", "mole ", "pipe ", "small shades",],),
  //1250 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "blonde bob ", "nerd glasses",],),
  //1251 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "earring ", "luxurious beard",],),
  //1252 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob ", "earring ", "purple lipstick",],),
  //1253 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes green ", "earring ", "mohawk thin",],),
  //1254 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "knitted cap",],),
  //1255 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "regular shades",],),
  //1256 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "do-rag ", "earring",],),
  //1257 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "cap ", "earring",],),
  //1258 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "shaved head ", "small shades",],),
  //1259 ,),
  
  new Traits( "female, accessories" ,[ "big shades ", "crazy hair ", "earring ", "rosy cheeks",],),
  //1260 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob ", "clown eyes green",],),
  //1261 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "normal beard ", "purple hair",],),
  //1262 ,),
  
  new Traits( "male, accessories" ,[ "normal beard ", "wild hair",],),
  //1263 ,),
  
  new Traits( "female, accessories" ,[ "classic shades ", "straight hair",],),
  //1264 ,),
  
  new Traits( "female, accessories" ,[ "dark hair ", "earring ", "eye mask ", "purple lipstick",],),
  //1265 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "smile",],),
  //1266 ,),
  
  new Traits( "female, accessories" ,[ "crazy hair ", "purple eye shadow",],),
  //1267 ,),
  
  new Traits( "female, accessories" ,[ "clown hair green ", "earring",],),
  //1268 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "chinstrap ", "eye patch",],),
  //1269 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "regular shades ", "shadow beard",],),
  //1270 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "earring ", "pipe ", "purple hair ", "spots",],),
  //1271 ,),
  
  new Traits( "female, accessories" ,[ "tassle hat ", "vr",],),
  //1272 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "dark hair",],),
  //1273 ,),
  
  new Traits( "male, accessories" ,[ "regular shades ", "shadow beard ", "top hat",],),
  //1274 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "knitted cap",],),
  //1275 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "messy hair ", "purple eye shadow",],),
  //1276 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "mohawk thin",],),
  //1277 ,),
  
  new Traits( "male, accessories" ,[ "mohawk dark ", "normal beard black",],),
  //1278 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "police cap",],),
  //1279 ,),
  
  new Traits( "male, accessories" ,[ "clown nose ", "messy hair ", "small shades",],),
  //1280 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "messy hair",],),
  //1281 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "peak spike",],),
  //1282 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "handlebars ", "peak spike",],),
  //1283 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "crazy hair ", "mustache",],),
  //1284 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "mustache ", "regular shades ", "top hat",],),
  //1285 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "stringy hair",],),
  //1286 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "silver chain",],),
  //1287 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "pipe",],),
  //1288 ,),
  
  new Traits( "female, accessories" ,[ "dark hair ", "eye patch ", "purple lipstick",],),
  //1289 ,),
  
  new Traits( "male, accessories" ,[ "front beard ", "shaved head",],),
  //1290 ,),
  
  new Traits( "female, accessories" ,[ "frumpy hair ", "nerd glasses ", "purple lipstick",],),
  //1291 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "muttonchops ", "stringy hair",],),
  //1292 ,),
  
  new Traits( "female, accessories" ,[ "green eye shadow ", "pipe ", "straight hair blonde",],),
  //1293 ,),
  
  new Traits( "male, accessories" ,[ "fedora ", "front beard dark ", "mole",],),
  //1294 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes blue ", "earring ", "stringy hair",],),
  //1295 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "wild hair",],),
  //1296 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "small shades",],),
  //1297 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "front beard dark",],),
  //1298 ,),
  
  new Traits( "female, accessories" ,[ "frumpy hair ", "hot lipstick ", "purple eye shadow",],),
  //1299 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "muttonchops ", "stringy hair",],),
  //1300 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "earring",],),
  //1301 ,),
  
  new Traits( "female, accessories" ,[ "classic shades ", "headband",],),
  //1302 ,),
  
  new Traits( "male, accessories" ,[ "cowboy hat ", "frown ", "handlebars",],),
  //1303 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "goat ", "knitted cap",],),
  //1304 ,),
  
  new Traits( "male, accessories" ,[ "fedora ", "shadow beard",],),
  //1305 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "stringy hair",],),
  //1306 ,),
  
  new Traits( "male, accessories" ,[ "nerd glasses ", "stringy hair",],),
  //1307 ,),
  
  new Traits( "male, accessories" ,[ "normal beard black ", "purple hair",],),
  //1308 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "horned rim glasses ", "knitted cap",],),
  //1309 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "stringy hair ", "vape",],),
  //1310 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "messy hair ", "spots",],),
  //1311 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "mole ", "small shades",],),
  //1312 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "wild hair",],),
  //1313 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "earring ", "eye mask",],),
  //1314 ,),
  
  new Traits( "female, accessories" ,[ "stringy hair",],),
  //1315 ,),
  
  new Traits( "male, accessories" ,[ "front beard dark ", "frumpy hair",],),
  //1316 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "normal beard black ", "police cap",],),
  //1317 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "clown nose ", "straight hair",],),
  //1318 ,),
  
  new Traits( "male, accessories" ,[ "luxurious beard ", "peak spike",],),
  //1319 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "mustache ", "purple hair",],),
  //1320 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "shaved head",],),
  //1321 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "mole ", "shaved head",],),
  //1322 ,),
  
  new Traits( "male, accessories" ,[ "mole ", "wild hair",],),
  //1323 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "regular shades",],),
  //1324 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "frumpy hair",],),
  //1325 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "shaved head",],),
  //1326 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "fedora",],),
  //1327 ,),
  
  new Traits( "female, accessories" ,[ "big shades ", "half shaved",],),
  //1328 ,),
  
  new Traits( "female, accessories" ,[ "blonde short ", "mole ", "regular shades",],),
  //1329 ,),
  
  new Traits( "male, accessories" ,[ "police cap",],),
  //1330 ,),
  
  new Traits( "male, accessories" ,[ "normal beard ", "peak spike",],),
  //1331 ,),
  
  new Traits( "female, accessories" ,[ "crazy hair ", "earring",],),
  //1332 ,),
  
  new Traits( "female, accessories" ,[ "eye patch ", "silver chain ", "wild white hair",],),
  //1333 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "mohawk thin",],),
  //1334 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "shadow beard",],),
  //1335 ,),
  
  new Traits( "male, accessories" ,[ "front beard ", "frumpy hair ", "horned rim glasses",],),
  //1336 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "handlebars",],),
  //1337 ,),
  
  new Traits( "male, accessories" ,[ "shaved head ", "smile",],),
  //1338 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "green eye shadow ", "stringy hair",],),
  //1339 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "mohawk dark",],),
  //1340 ,),
  
  new Traits( "female, accessories" ,[ "horned rim glasses ", "wild blonde",],),
  //1341 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "messy hair",],),
  //1342 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "wild hair",],),
  //1343 ,),
  
  new Traits( "male, accessories" ,[ "messy hair ", "mustache",],),
  //1344 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "mole ", "stringy hair",],),
  //1345 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "green eye shadow ", "wild blonde",],),
  //1346 ,),
  
  new Traits( "male, accessories" ,[ "frumpy hair ", "goat",],),
  //1347 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "crazy hair ", "earring ", "normal beard black",],),
  //1348 ,),
  
  new Traits( "male, accessories" ,[ "mustache ", "wild hair",],),
  //1349 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "stringy hair",],),
  //1350 ,),
  
  new Traits( "male, accessories" ,[ "knitted cap ", "mustache ", "regular shades ", "silver chain",],),
  //1351 ,),
  
  new Traits( "female, accessories" ,[ "half shaved ", "horned rim glasses",],),
  //1352 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "nerd glasses",],),
  //1353 ,),
  
  new Traits( "female, accessories" ,[ "pigtails ", "regular shades",],),
  //1354 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob",],),
  //1355 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "eye mask",],),
  //1356 ,),
  
  new Traits( "female, accessories" ,[ "classic shades ", "hot lipstick ", "mole ", "straight hair dark",],),
  //1357 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "gold chain ", "mohawk ", "shadow beard ", "vape",],),
  //1358 ,),
  
  new Traits( "male, accessories" ,[ "headband ", "smile",],),
  //1359 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "stringy hair",],),
  //1360 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "mohawk",],),
  //1361 ,),
  
  new Traits( "male, accessories" ,[ "spots ", "stringy hair",],),
  //1362 ,),
  
  new Traits( "male, accessories" ,[ "front beard ", "horned rim glasses ", "spots ", "wild hair",],),
  //1363 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "pink with hat",],),
  //1364 ,),
  
  new Traits( "male, accessories" ,[ "mohawk dark ", "normal beard ", "vr",],),
  //1365 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "horned rim glasses ", "shadow beard",],),
  //1366 ,),
  
  new Traits( "female, accessories" ,[ "mohawk dark ", "purple lipstick ", "welding goggles",],),
  //1367 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "knitted cap ", "normal beard black",],),
  //1368 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "knitted cap",],),
  //1369 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "messy hair ", "vape",],),
  //1370 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "tiara",],),
  //1371 ,),
  
  new Traits( "female, accessories" ,[ "dark hair ", "horned rim glasses",],),
  //1372 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "frumpy hair",],),
  //1373 ,),
  
  new Traits( "zombie, accessories" ,[ "big shades ", "earring ", "mohawk dark",],),
  //1374 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "eye patch ", "shaved head",],),
  //1375 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "luxurious beard ", "messy hair",],),
  //1376 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "hot lipstick ", "mohawk thin",],),
  //1377 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "wild hair",],),
  //1378 ,),
  
  new Traits( "female, accessories" ,[ "headband ", "purple eye shadow ", "purple lipstick",],),
  //1379 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "classic shades ", "shadow beard ", "smile",],),
  //1380 ,),
  
  new Traits( "male, accessories" ,[ "front beard ", "stringy hair",],),
  //1381 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "clown nose ", "earring ", "stringy hair",],),
  //1382 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "wild hair",],),
  //1383 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "mohawk thin",],),
  //1384 ,),
  
  new Traits( "male, accessories" ,[ "goat ", "peak spike ", "small shades",],),
  //1385 ,),
  
  new Traits( "female, accessories" ,[ "clown nose ", "mole ", "tassle hat",],),
  //1386 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "frumpy hair",],),
  //1387 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "straight hair",],),
  //1388 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "straight hair blonde ", "vr",],),
  //1389 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob ", "blue eye shadow ", "earring",],),
  //1390 ,),
  
  new Traits( "male, accessories" ,[ "clown nose ", "eye patch ", "hoodie",],),
  //1391 ,),
  
  new Traits( "female, accessories" ,[ "classic shades ", "stringy hair",],),
  //1392 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "medical mask ", "mohawk thin ", "normal beard",],),
  //1393 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "peak spike",],),
  //1394 ,),
  
  new Traits( "male, accessories" ,[ "luxurious beard ", "mohawk",],),
  //1395 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "gold chain",],),
  //1396 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "horned rim glasses ", "mustache",],),
  //1397 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "shadow beard ", "spots",],),
  //1398 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "wild hair",],),
  //1399 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "eye mask ", "knitted cap ", "mole",],),
  //1400 ,),
  
  new Traits( "male, accessories" ,[ "normal beard ", "peak spike",],),
  //1401 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes blue ", "knitted cap ", "shadow beard",],),
  //1402 ,),
  
  new Traits( "male, accessories" ,[ "small shades ", "stringy hair",],),
  //1403 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "handlebars",],),
  //1404 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "clown eyes blue ", "mohawk",],),
  //1405 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "front beard",],),
  //1406 ,),
  
  new Traits( "male, accessories" ,[ "medical mask ", "mohawk",],),
  //1407 ,),
  
  new Traits( "male, accessories" ,[ "mohawk ", "nerd glasses",],),
  //1408 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "police cap",],),
  //1409 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk",],),
  //1410 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob ", "regular shades",],),
  //1411 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "messy hair ", "small shades",],),
  //1412 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "frumpy hair",],),
  //1413 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob ", "clown eyes blue ", "earring",],),
  //1414 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "cap ", "clown eyes blue",],),
  //1415 ,),
  
  new Traits( "female, accessories" ,[ "classic shades ", "stringy hair",],),
  //1417 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "frumpy hair ", "regular shades",],),
  //1418 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "frumpy hair",],),
  //1419 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob ", "blue eye shadow ", "purple lipstick",],),
  //1420 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "purple hair",],),
  //1421 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes blue ", "hoodie ", "pipe",],),
  //1422 ,),
  
  new Traits( "male, accessories" ,[ "mohawk thin ", "small shades",],),
  //1423 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "goat ", "headband ", "nerd glasses",],),
  //1424 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "smile ", "vampire hair",],),
  //1425 ,),
  
  new Traits( "female, accessories" ,[ "medical mask ", "stringy hair",],),
  //1426 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "cigarette",],),
  //1427 ,),
  
  new Traits( "female, accessories" ,[ "blonde short ", "clown eyes blue",],),
  //1428 ,),
  
  new Traits( "male, accessories" ,[ "frown ", "peak spike",],),
  //1429 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "do-rag ", "earring ", "horned rim glasses",],),
  //1430 ,),
  
  new Traits( "male, accessories" ,[ "eye mask ", "luxurious beard ", "mohawk",],),
  //1431 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "do-rag",],),
  //1432 ,),
  
  new Traits( "female, accessories" ,[ "gold chain ", "pilot helmet",],),
  //1433 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "eye patch ", "straight hair blonde",],),
  //1434 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes green ", "earring ", "headband ", "muttonchops",],),
  //1435 ,),
  
  new Traits( "male, accessories" ,[ "mohawk ", "mole",],),
  //1436 ,),
  
  new Traits( "male, accessories" ,[ "goat ", "wild hair",],),
  //1437 ,),
  
  new Traits( "female, accessories" ,[ "pilot helmet",],),
  //1438 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "earring ", "muttonchops ", "stringy hair",],),
  //1439 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "headband",],),
  //1440 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "eye mask ", "frumpy hair ", "purple lipstick",],),
  //1441 ,),
  
  new Traits( "female, accessories" ,[ "crazy hair ", "earring ", "eye mask",],),
  //1442 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "small shades",],),
  //1443 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "classic shades",],),
  //1444 ,),
  
  new Traits( "male, accessories" ,[ "front beard dark ", "headband",],),
  //1445 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "pigtails",],),
  //1446 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "eye patch ", "frown ", "hoodie",],),
  //1447 ,),
  
  new Traits( "male, accessories" ,[ "frumpy hair ", "pipe ", "vr",],),
  //1448 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "big shades",],),
  //1449 ,),
  
  new Traits( "female, accessories" ,[ "3d glasses ", "hot lipstick ", "mohawk dark",],),
  //1450 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "classic shades ", "earring",],),
  //1451 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "earring ", "mole ", "purple lipstick",],),
  //1452 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob ", "clown eyes blue ", "purple lipstick",],),
  //1453 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "red mohawk",],),
  //1454 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "regular shades ", "wild blonde",],),
  //1455 ,),
  
  new Traits( "male, accessories" ,[ "headband ", "mole",],),
  //1456 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "mohawk thin ", "regular shades",],),
  //1457 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "peak spike",],),
  //1458 ,),
  
  new Traits( "male, accessories" ,[ "luxurious beard ", "messy hair ", "nerd glasses",],),
  //1459 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "messy hair",],),
  //1460 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "straight hair",],),
  //1461 ,),
  
  new Traits( "male, accessories" ,[ "big beard ", "earring ", "eye patch ", "headband",],),
  //1462 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "mohawk thin",],),
  //1463 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "mole",],),
  //1464 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "mohawk dark ", "regular shades",],),
  //1465 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes green ", "stringy hair",],),
  //1466 ,),
  
  new Traits( "female, accessories" ,[ "green eye shadow ", "wild hair",],),
  //1467 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "straight hair dark",],),
  //1468 ,),
  
  new Traits( "male, accessories" ,[ "muttonchops ", "regular shades ", "stringy hair",],),
  //1469 ,),
  
  new Traits( "female, accessories" ,[ "mohawk thin ", "purple lipstick ", "welding goggles",],),
  //1470 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "cap",],),
  //1471 ,),
  
  new Traits( "male, accessories" ,[ "eye mask ", "hoodie",],),
  //1472 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "messy hair",],),
  //1473 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "gold chain ", "peak spike",],),
  //1474 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "mohawk ", "vr",],),
  //1475 ,),
  
  new Traits( "female, accessories" ,[ "dark hair ", "earring ", "pipe",],),
  //1476 ,),
  
  new Traits( "female, accessories" ,[ "big shades ", "earring ", "straight hair",],),
  //1477 ,),
  
  new Traits( "zombie, accessories" ,[ "shadow beard ", "wild hair",],),
  //1478 ,),
  
  new Traits( "female, accessories" ,[ "crazy hair ", "vr",],),
  //1479 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "small shades ", "stringy hair",],),
  //1480 ,),
  
  new Traits( "male, accessories" ,[ "mohawk dark ", "rosy cheeks",],),
  //1481 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "mohawk",],),
  //1482 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "frown ", "top hat",],),
  //1483 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "hoodie",],),
  //1484 ,),
  
  new Traits( "female, accessories" ,[ "cap ", "earring ", "purple eye shadow",],),
  //1485 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "mohawk thin ", "muttonchops",],),
  //1486 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "frumpy hair",],),
  //1487 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "shaved head",],),
  //1488 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "wild white hair",],),
  //1489 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "clown eyes green ", "earring",],),
  //1490 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "clown hair green ", "earring",],),
  //1491 ,),
  
  new Traits( "male, accessories" ,[ "big beard ", "police cap ", "vr",],),
  //1492 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob ", "cigarette ", "hot lipstick ", "mole ", "regular shades",],),
  //1493 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "eye patch ", "wild white hair",],),
  //1494 ,),
  
  new Traits( "female, accessories" ,[ "dark hair ", "hot lipstick",],),
  //1495 ,),
  
  new Traits( "female, accessories" ,[ "blonde short ", "welding goggles",],),
  //1496 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "knitted cap ", "shadow beard",],),
  //1497 ,),
  
  new Traits( "female, accessories" ,[ "big shades ", "crazy hair ", "earring",],),
  //1498 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "spots",],),
  //1499 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk thin",],),
  //1500 ,),
  
  new Traits( "male, accessories" ,[ "police cap ", "shadow beard",],),
  //1501 ,),
  
  new Traits( "male, accessories" ,[ "eye mask ", "shaved head",],),
  //1502 ,),
  
  new Traits( "male, accessories" ,[ "headband ", "horned rim glasses ", "shadow beard",],),
  //1503 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "frumpy hair ", "green eye shadow",],),
  //1504 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "knitted cap ", "vr",],),
  //1505 ,),
  
  new Traits( "male, accessories" ,[ "handlebars ", "medical mask ", "peak spike",],),
  //1506 ,),
  
  new Traits( "male, accessories" ,[ "cowboy hat ", "earring ", "smile",],),
  //1507 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "choker ", "horned rim glasses ", "mohawk dark",],),
  //1508 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "nerd glasses ", "peak spike",],),
  //1509 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "cap",],),
  //1510 ,),
  
  new Traits( "male, accessories" ,[ "goat ", "messy hair",],),
  //1511 ,),
  
  new Traits( "female, accessories" ,[ "mohawk thin ", "mole",],),
  //1512 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "frumpy hair ", "mole ", "welding goggles",],),
  //1513 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "pink with hat ", "regular shades",],),
  //1514 ,),
  
  new Traits( "male, accessories" ,[ "front beard dark ", "mohawk dark ", "vr",],),
  //1515 ,),
  
  new Traits( "male, accessories" ,[ "knitted cap ", "mole",],),
  //1516 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "knitted cap ", "small shades",],),
  //1517 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "knitted cap ", "mustache",],),
  //1518 ,),
  
  new Traits( "male, accessories" ,[ "messy hair",],),
  //1519 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "medical mask ", "mohawk dark",],),
  //1520 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "mustache",],),
  //1521 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "muttonchops ", "purple hair",],),
  //1522 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "pigtails",],),
  //1523 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "frumpy hair",],),
  //1524 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "normal beard ", "small shades",],),
  //1525 ,),
  
  new Traits( "zombie, accessories" ,[ "cap ", "eye patch ", "gold chain",],),
  //1526 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "half shaved ", "mole",],),
  //1527 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "bandana ", "front beard dark",],),
  //1528 ,),
  
  new Traits( "female, accessories" ,[ "pipe ", "red mohawk",],),
  //1529 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "knitted cap",],),
  //1530 ,),
  
  new Traits( "male, accessories" ,[ "peak spike ", "regular shades",],),
  //1531 ,),
  
  new Traits( "male, accessories" ,[ "mohawk thin ", "nerd glasses",],),
  //1532 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "headband",],),
  //1533 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "muttonchops ", "vape",],),
  //1534 ,),
  
  new Traits( "female, accessories" ,[ "classic shades ", "dark hair ", "earring",],),
  //1535 ,),
  
  new Traits( "male, accessories" ,[ "buck teeth ", "crazy hair ", "normal beard",],),
  //1536 ,),
  
  new Traits( "male, accessories" ,[ "vampire hair",],),
  //1537 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "earring ", "mustache",],),
  //1538 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "mohawk thin",],),
  //1539 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "knitted cap",],),
  //1540 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "mustache ", "pipe",],),
  //1541 ,),
  
  new Traits( "male, accessories" ,[ "luxurious beard ", "mohawk thin",],),
  //1542 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "eye mask",],),
  //1543 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "half shaved ", "purple lipstick",],),
  //1544 ,),
  
  new Traits( "female, accessories" ,[ "big shades ", "frumpy hair",],),
  //1545 ,),
  
  new Traits( "male, accessories" ,[ "handlebars ", "peak spike ", "regular shades",],),
  //1546 ,),
  
  new Traits( "female, accessories" ,[ "blonde short ", "choker",],),
  //1547 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "mohawk thin ", "purple lipstick",],),
  //1548 ,),
  
  new Traits( "male, accessories" ,[ "cap forward",],),
  //1549 ,),
  
  new Traits( "female, accessories" ,[ "knitted cap ", "purple lipstick",],),
  //1550 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "shaved head",],),
  //1551 ,),
  
  new Traits( "female, accessories" ,[ "dark hair ", "regular shades",],),
  //1552 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "peak spike",],),
  //1553 ,),
  
  new Traits( "female, accessories" ,[ "purple lipstick ", "tassle hat ", "vape",],),
  //1554 ,),
  
  new Traits( "male, accessories" ,[ "fedora ", "mustache",],),
  //1555 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "pigtails ", "purple lipstick",],),
  //1556 ,),
  
  new Traits( "male, accessories" ,[ "knitted cap ", "muttonchops",],),
  //1557 ,),
  
  new Traits( "male, accessories" ,[ "normal beard black",],),
  //1558 ,),
  
  new Traits( "male, accessories" ,[ "clown hair green",],),
  //1559 ,),
  
  new Traits( "male, accessories" ,[ "smile ", "wild hair",],),
  //1560 ,),
  
  new Traits( "female, accessories" ,[ "clown hair green ", "earring ", "hot lipstick ", "mole",],),
  //1561 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes blue",],),
  //1562 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "dark hair ", "earring",],),
  //1563 ,),
  
  new Traits( "male, accessories" ,[ "medical mask ", "wild hair",],),
  //1564 ,),
  
  new Traits( "male, accessories" ,[ "handlebars ", "wild hair",],),
  //1565 ,),
  
  new Traits( "female, accessories" ,[ "headband ", "hot lipstick ", "pipe",],),
  //1566 ,),
  
  new Traits( "male, accessories" ,[ "eye mask ", "goat ", "shaved head",],),
  //1567 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes green ", "hoodie ", "mustache",],),
  //1568 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "mohawk dark ", "mole",],),
  //1569 ,),
  
  new Traits( "male, accessories" ,[ "headband ", "horned rim glasses ", "muttonchops",],),
  //1570 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "front beard dark",],),
  //1571 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "muttonchops ", "small shades",],),
  //1572 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "crazy hair",],),
  //1573 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "do-rag",],),
  //1574 ,),
  
  new Traits( "male, accessories" ,[ "goat ", "shaved head ", "vr",],),
  //1575 ,),
  
  new Traits( "male, accessories" ,[ "hoodie ", "small shades",],),
  //1576 ,),
  
  new Traits( "male, accessories" ,[ "clown hair green ", "normal beard",],),
  //1577 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "dark hair ", "medical mask ", "rosy cheeks",],),
  //1578 ,),
  
  new Traits( "female, accessories" ,[ "3d glasses ", "tiara",],),
  //1579 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "messy hair ", "pipe",],),
  //1580 ,),
  
  new Traits( "male, accessories" ,[ "messy hair ", "muttonchops",],),
  //1581 ,),
  
  new Traits( "female, accessories" ,[ "messy hair ", "vr",],),
  //1582 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "straight hair",],),
  //1583 ,),
  
  new Traits( "male, accessories" ,[ "handlebars ", "vampire hair",],),
  //1584 ,),
  
  new Traits( "male, accessories" ,[ "frown ", "shaved head ", "small shades",],),
  //1585 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "horned rim glasses",],),
  //1586 ,),
  
  new Traits( "female, accessories" ,[ "3d glasses ", "bandana",],),
  //1587 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "tassle hat",],),
  //1588 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "fedora",],),
  //1589 ,),
  
  new Traits( "male, accessories" ,[ "normal beard black ", "small shades ", "vampire hair",],),
  //1590 ,),
  
  new Traits( "female, accessories" ,[ "mohawk thin",],),
  //1591 ,),
  
  new Traits( "male, accessories" ,[ "mohawk dark ", "nerd glasses",],),
  //1592 ,),
  
  new Traits( "female, accessories" ,[ "purple lipstick ", "red mohawk",],),
  //1593 ,),
  
  new Traits( "male, accessories" ,[ "goat ", "mohawk dark",],),
  //1594 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "straight hair blonde",],),
  //1595 ,),
  
  new Traits( "female, accessories" ,[ "blonde short ", "earring ", "green eye shadow",],),
  //1596 ,),
  
  new Traits( "male, accessories" ,[ "goat ", "messy hair",],),
  //1597 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "purple lipstick ", "tassle hat",],),
  //1598 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "mohawk thin ", "purple lipstick",],),
  //1599 ,),
  
  new Traits( "male, accessories" ,[ "goat ", "silver chain ", "vampire hair",],),
  //1600 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "knitted cap",],),
  //1601 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "goat ", "mohawk thin",],),
  //1602 ,),
  
  new Traits( "female, accessories" ,[ "purple eye shadow ", "tiara",],),
  //1603 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "nerd glasses ", "wild hair",],),
  //1604 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "frown ", "shadow beard ", "shaved head ", "vr",],),
  //1605 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "front beard dark ", "mole ", "nerd glasses ", "police cap",],),
  //1606 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "headband",],),
  //1607 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "cowboy hat ", "eye patch ", "normal beard black",],),
  //1608 ,),
  
  new Traits( "female, accessories" ,[ "pilot helmet ", "purple lipstick",],),
  //1609 ,),
  
  new Traits( "male, accessories" ,[ "front beard dark ", "wild hair",],),
  //1610 ,),
  
  new Traits( "male, accessories" ,[ "mohawk thin ", "vr",],),
  //1611 ,),
  
  new Traits( "female, accessories" ,[ "half shaved ", "hot lipstick",],),
  //1612 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "headband",],),
  //1613 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "handlebars",],),
  //1614 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "hoodie",],),
  //1615 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "black lipstick",],),
  //1616 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "front beard dark",],),
  //1617 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "frumpy hair ", "hot lipstick",],),
  //1618 ,),
  
  new Traits( "female, accessories" ,[ "green eye shadow ", "stringy hair",],),
  //1619 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "clown eyes blue ", "earring",],),
  //1620 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "clown hair green",],),
  //1621 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "knitted cap ", "regular shades",],),
  //1622 ,),
  
  new Traits( "female, accessories" ,[ "3d glasses ", "straight hair",],),
  //1623 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "chinstrap ", "earring ", "eye patch",],),
  //1624 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "mole",],),
  //1625 ,),
  
  new Traits( "female, accessories" ,[ "3d glasses ", "messy hair ", "purple lipstick",],),
  //1626 ,),
  
  new Traits( "male, accessories" ,[ "normal beard black ", "police cap",],),
  //1627 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "stringy hair",],),
  //1628 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "pink with hat",],),
  //1629 ,),
  
  new Traits( "male, accessories" ,[ "shadow beard ", "top hat",],),
  //1630 ,),
  
  new Traits( "male, accessories" ,[ "police cap ", "small shades",],),
  //1631 ,),
  
  new Traits( "male, accessories" ,[ "handlebars ", "top hat",],),
  //1632 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "cigarette ", "mole",],),
  //1633 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes blue ", "mole ", "wild blonde",],),
  //1634 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "orange side",],),
  //1635 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "do-rag ", "frown ", "normal beard black ", "regular shades",],),
  //1636 ,),
  
  new Traits( "female, accessories" ,[ "3d glasses ", "hot lipstick ", "wild blonde",],),
  //1637 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "front beard dark",],),
  //1638 ,),
  
  new Traits( "male, accessories" ,[ "mohawk ", "shadow beard",],),
  //1639 ,),
  
  new Traits( "male, accessories" ,[ "fedora ", "mustache ", "vr",],),
  //1640 ,),
  
  new Traits( "male, accessories" ,[ "frown ", "knitted cap ", "mole",],),
  //1641 ,),
  
  new Traits( "male, accessories" ,[ "mohawk dark ", "mole ", "normal beard",],),
  //1642 ,),
  
  new Traits( "male, accessories" ,[ "frumpy hair ", "smile",],),
  //1643 ,),
  
  new Traits( "male, accessories" ,[ "big beard ", "hoodie",],),
  //1644 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "tassle hat",],),
  //1645 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "knitted cap ", "luxurious beard",],),
  //1646 ,),
  
  new Traits( "male, accessories" ,[ "eye mask ", "purple hair",],),
  //1647 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "mohawk thin ", "purple lipstick",],),
  //1648 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "regular shades ", "shadow beard",],),
  //1649 ,),
  
  new Traits( "male, accessories" ,[ "clown nose ", "messy hair ", "normal beard black",],),
  //1650 ,),
  
  new Traits( "male, accessories" ,[ "beanie ", "big shades ", "muttonchops",],),
  //1651 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "hot lipstick ", "tassle hat",],),
  //1652 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes green ", "earring ", "hoodie ", "normal beard",],),
  //1653 ,),
  
  new Traits( "female, accessories" ,[ "medical mask ", "mohawk",],),
  //1654 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes green ", "frown ", "peak spike",],),
  //1655 ,),
  
  new Traits( "male, accessories" ,[ "buck teeth ", "purple hair ", "regular shades",],),
  //1656 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "horned rim glasses",],),
  //1657 ,),
  
  new Traits( "zombie , accessories" ,[ "stringy hair",],),
  //1658 ,),
  
  new Traits( "female, accessories" ,[ "purple eye shadow ", "straight hair",],),
  //1659 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "normal beard",],),
  //1660 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "blonde short ", "nerd glasses",],),
  //1661 ,),
  
  new Traits( "female, accessories" ,[ "mole ", "purple eye shadow ", "purple lipstick ", "straight hair dark",],),
  //1662 ,),
  
  new Traits( "male, accessories" ,[ "mole ", "purple hair ", "regular shades",],),
  //1663 ,),
  
  new Traits( "female, accessories" ,[ "cap ", "purple lipstick",],),
  //1664 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "cigarette",],),
  //1665 ,),
  
  new Traits( "female, accessories" ,[ "purple lipstick ", "regular shades ", "straight hair dark",],),
  //1666 ,),
  
  new Traits( "male, accessories" ,[ "frumpy hair ", "luxurious beard",],),
  //1667 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "goat ", "mohawk dark",],),
  //1668 ,),
  
  new Traits( "female, accessories" ,[ "red mohawk ", "welding goggles",],),
  //1669 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "purple eye shadow ", "stringy hair",],),
  //1670 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "straight hair",],),
  //1671 ,),
  
  new Traits( "female, accessories" ,[ "mohawk dark ", "mole",],),
  //1672 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "headband",],),
  //1673 ,),
  
  new Traits( "male, accessories" ,[ "hoodie ", "shadow beard",],),
  //1674 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "police cap ", "regular shades",],),
  //1675 ,),
  
  new Traits( "male, accessories" ,[ "frumpy hair ", "mole",],),
  //1676 ,),
  
  new Traits( "male, accessories" ,[ "front beard dark",],),
  //1677 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "purple lipstick",],),
  //1678 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "horned rim glasses ", "purple lipstick ", "tassle hat",],),
  //1679 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "headband ", "vape",],),
  //1680 ,),
  
  new Traits( "female, accessories" ,[ "red mohawk",],),
  //1681 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "chinstrap ", "top hat",],),
  //1682 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "mohawk dark ", "mustache",],),
  //1683 ,),
  
  new Traits( "female, accessories" ,[ "choker ", "orange side",],),
  //1684 ,),
  
  new Traits( "male, accessories" ,[ "hoodie ", "nerd glasses",],),
  //1685 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "messy hair",],),
  //1686 ,),
  
  new Traits( "male, accessories" ,[ "horned rim glasses ", "top hat",],),
  //1687 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "purple lipstick ", "stringy hair",],),
  //1688 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "straight hair",],),
  //1689 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "horned rim glasses ", "mole",],),
  //1690 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "straight hair",],),
  //1691 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "knitted cap ", "shadow beard",],),
  //1692 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "crazy hair",],),
  //1693 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "pink with hat",],),
  //1694 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "shaved head",],),
  //1695 ,),
  
  new Traits( "male, accessories" ,[ "shadow beard ", "stringy hair",],),
  //1696 ,),
  
  new Traits( "female, accessories" ,[ "big shades ", "mohawk thin ", "mole",],),
  //1697 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes green ", "wild hair",],),
  //1698 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "shaved head",],),
  //1699 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "half shaved",],),
  //1700 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "mohawk",],),
  //1701 ,),
  
  new Traits( "male, accessories" ,[ "clown hair green ", "front beard ", "frown",],),
  //1702 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "do-rag ", "muttonchops ", "rosy cheeks",],),
  //1703 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "classic shades ", "peak spike",],),
  //1704 ,),
  
  new Traits( "female, accessories" ,[ "mohawk ", "nerd glasses",],),
  //1705 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "red mohawk",],),
  //1706 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "purple lipstick ", "wild hair",],),
  //1707 ,),
  
  new Traits( "male, accessories" ,[ "fedora",],),
  //1708 ,),
  
  new Traits( "male, accessories" ,[ "front beard ", "peak spike",],),
  //1709 ,),
  
  new Traits( "female, accessories" ,[ "classic shades ", "orange side ", "pipe",],),
  //1710 ,),
  
  new Traits( "female, accessories" ,[ "eye mask ", "straight hair dark",],),
  //1711 ,),
  
  new Traits( "male, accessories" ,[ "police cap ", "regular shades",],),
  //1712 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "stringy hair",],),
  //1713 ,),
  
  new Traits( "female, accessories" ,[ "choker ", "classic shades ", "straight hair blonde",],),
  //1714 ,),
  
  new Traits( "female, accessories" ,[ "green eye shadow ", "half shaved",],),
  //1715 ,),
  
  new Traits( "male, accessories" ,[ "mohawk thin ", "shadow beard",],),
  //1716 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "chinstrap ", "earring ", "eye patch",],),
  //1717 ,),
  
  new Traits( "male, accessories" ,[ "luxurious beard ", "mole",],),
  //1718 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "nerd glasses",],),
  //1719 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "cowboy hat ", "normal beard",],),
  //1720 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "pigtails",],),
  //1721 ,),
  
  new Traits( "male, accessories" ,[ "fedora ", "nerd glasses ", "normal beard black",],),
  //1722 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "nerd glasses",],),
  //1723 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "mohawk",],),
  //1724 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "messy hair",],),
  //1725 ,),
  
  new Traits( "female, accessories" ,[ "clown hair green ", "hot lipstick ", "mole ", "vape",],),
  //1726 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "stringy hair",],),
  //1727 ,),
  
  new Traits( "male, accessories" ,[ "frown ", "mohawk thin ", "small shades",],),
  //1728 ,),
  
  new Traits( "male, accessories" ,[ "gold chain ", "luxurious beard ", "nerd glasses",],),
  //1729 ,),
  
  new Traits( "female, accessories" ,[ "green eye shadow ", "pink with hat",],),
  //1730 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "eye patch",],),
  //1731 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "earring ", "police cap",],),
  //1732 ,),
  
  new Traits( "female, accessories" ,[ "mohawk thin ", "regular shades",],),
  //1733 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "mohawk thin",],),
  //1734 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "mohawk dark",],),
  //1735 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "straight hair dark",],),
  //1736 ,),
  
  new Traits( "male, accessories" ,[ "mohawk ", "vr",],),
  //1737 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob ", "purple lipstick",],),
  //1738 ,),
  
  new Traits( "male, accessories" ,[ "shaved head ", "vr",],),
  //1739 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "hot lipstick",],),
  //1740 ,),
  
  new Traits( "male, accessories" ,[ "big shades",],),
  //1741 ,),
  
  new Traits( "female, accessories" ,[ "big shades ", "stringy hair",],),
  //1742 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "wild hair",],),
  //1743 ,),
  
  new Traits( "female, accessories" ,[ "big shades ", "clown nose ", "straight hair dark",],),
  //1744 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "do-rag",],),
  //1745 ,),
  
  new Traits( "female, accessories" ,[ "dark hair ", "earring ", "green eye shadow",],),
  //1746 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "mohawk",],),
  //1747 ,),
  
  new Traits( "zombie, accessories" ,[ "front beard ", "frown ", "knitted cap",],),
  //1748 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob ", "hot lipstick ", "nerd glasses",],),
  //1749 ,),
  
  new Traits( "female, accessories" ,[ "eye mask ", "purple lipstick ", "wild blonde",],),
  //1750 ,),
  
  new Traits( "female, accessories" ,[ "horned rim glasses ", "pigtails",],),
  //1751 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "half shaved",],),
  //1752 ,),
  
  new Traits( "male, accessories" ,[ "frumpy hair ", "spots",],),
  //1753 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "mohawk",],),
  //1754 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "gold chain ", "vr",],),
  //1755 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "front beard ", "knitted cap",],),
  //1756 ,),
  
  new Traits( "male, accessories" ,[ "nerd glasses ", "shaved head",],),
  //1757 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "mohawk ", "regular shades",],),
  //1758 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "pilot helmet",],),
  //1759 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "cigarette ", "nerd glasses",],),
  //1760 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "half shaved",],),
  //1761 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "rosy cheeks ", "small shades",],),
  //1762 ,),
  
  new Traits( "male, accessories" ,[ "muttonchops ", "purple hair ", "regular shades",],),
  //1763 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "earring ", "frumpy hair",],),
  //1764 ,),
  
  new Traits( "female, accessories" ,[ "clown hair green ", "purple eye shadow",],),
  //1765 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "straight hair blonde",],),
  //1766 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "front beard dark",],),
  //1767 ,),
  
  new Traits( "female, accessories" ,[ "3d glasses ", "black lipstick ", "crazy hair",],),
  //1768 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "mustache",],),
  //1769 ,),
  
  new Traits( "male, accessories" ,[ "frumpy hair ", "regular shades ", "smile",],),
  //1770 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "cigarette ", "earring",],),
  //1771 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "messy hair",],),
  //1772 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "muttonchops ", "vampire hair",],),
  //1773 ,),
  
  new Traits( "male, accessories" ,[ "knitted cap ", "nerd glasses",],),
  //1774 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "purple eye shadow ", "tiara",],),
  //1775 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk thin",],),
  //1776 ,),
  
  new Traits( "male, accessories" ,[ "gold chain ", "vampire hair",],),
  //1777 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "muttonchops",],),
  //1778 ,),
  
  new Traits( "female, accessories" ,[ "cap ", "clown eyes green ", "purple lipstick",],),
  //1779 ,),
  
  new Traits( "female, accessories" ,[ "horned rim glasses ", "wild white hair",],),
  //1780 ,),
  
  new Traits( "male, accessories" ,[ "headband ", "normal beard",],),
  //1781 ,),
  
  new Traits( "male, accessories" ,[ "cowboy hat ", "earring ", "handlebars",],),
  //1782 ,),
  
  new Traits( "female, accessories" ,[ "mohawk thin",],),
  //1783 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "crazy hair ", "medical mask",],),
  //1784 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "wild hair",],),
  //1785 ,),
  
  new Traits( "female, accessories" ,[ "classic shades ", "wild hair",],),
  //1786 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "small shades",],),
  //1787 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "mohawk",],),
  //1788 ,),
  
  new Traits( "female, accessories" ,[ "blonde short ", "purple eye shadow",],),
  //1789 ,),
  
  new Traits( "male, accessories" ,[ "headband ", "horned rim glasses ", "mole",],),
  //1790 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "mole",],),
  //1791 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "normal beard black",],),
  //1792 ,),
  
  new Traits( "female, accessories" ,[ "mohawk thin ", "rosy cheeks",],),
  //1793 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "frown ", "wild hair",],),
  //1794 ,),
  
  new Traits( "female, accessories" ,[ "horned rim glasses ", "hot lipstick ", "messy hair ", "rosy cheeks",],),
  //1795 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "black lipstick ", "rosy cheeks",],),
  //1796 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "mohawk ", "muttonchops ", "vape",],),
  //1797 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "medical mask",],),
  //1798 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "classic shades ", "half shaved",],),
  //1799 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "mole ", "purple lipstick ", "stringy hair",],),
  //1800 ,),
  
  new Traits( "female, accessories" ,[ "crazy hair ", "spots",],),
  //1801 ,),
  
  new Traits( "male, accessories" ,[ "big beard ", "cigarette ", "fedora ", "nerd glasses",],),
  //1802 ,),
  
  new Traits( "female, accessories" ,[ "frumpy hair ", "hot lipstick ", "nerd glasses",],),
  //1803 ,),
  
  new Traits( "female, accessories" ,[ "messy hair ", "mole",],),
  //1804 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "regular shades",],),
  //1805 ,),
  
  new Traits( "female, accessories" ,[ "dark hair ", "eye patch ", "hot lipstick",],),
  //1806 ,),
  
  new Traits( "female, accessories" ,[ "messy hair ", "purple eye shadow",],),
  //1807 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "front beard ", "messy hair",],),
  //1808 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "cigarette ", "mustache",],),
  //1809 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "wild hair",],),
  //1810 ,),
  
  new Traits( "male, accessories" ,[ "pipe ", "vampire hair",],),
  //1811 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "headband ", "nerd glasses ", "normal beard",],),
  //1812 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "classic shades ", "mohawk dark",],),
  //1813 ,),
  
  new Traits( "male, accessories" ,[ "knitted cap ", "muttonchops",],),
  //1814 ,),
  
  new Traits( "female, accessories" ,[ "green eye shadow ", "mohawk",],),
  //1815 ,),
  
  new Traits( "female, accessories" ,[ "blonde short ", "cigarette",],),
  //1816 ,),
  
  new Traits( "female, accessories" ,[ "crazy hair ", "earring ", "purple lipstick",],),
  //1817 ,),
  
  new Traits( "female, accessories" ,[ "blonde short ", "mole",],),
  //1818 ,),
  
  new Traits( "male, accessories" ,[ "big beard ", "classic shades ", "earring ", "police cap",],),
  //1819 ,),
  
  new Traits( "male, accessories" ,[ "big beard ", "eye mask ", "messy hair",],),
  //1820 ,),
  
  new Traits( "female, accessories" ,[ "welding goggles",],),
  //1821 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "normal beard black ", "small shades",],),
  //1822 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "goat ", "shaved head",],),
  //1823 ,),
  
  new Traits( "male, accessories" ,[ "knitted cap ", "normal beard",],),
  //1824 ,),
  
  new Traits( "male, accessories" ,[ "muttonchops ", "police cap",],),
  //1825 ,),
  
  new Traits( "female, accessories" ,[ "clown nose ", "frumpy hair ", "horned rim glasses",],),
  //1826 ,),
  
  new Traits( "female, accessories" ,[ "green eye shadow ", "mohawk thin",],),
  //1827 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "blonde bob ", "earring",],),
  //1828 ,),
  
  new Traits( "female, accessories" ,[ "classic shades ", "mohawk dark",],),
  //1829 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "knitted cap",],),
  //1830 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "big beard ", "horned rim glasses ", "medical mask",],),
  //1831 ,),
  
  new Traits( "male, accessories" ,[ "horned rim glasses ", "messy hair",],),
  //1832 ,),
  
  new Traits( "male, accessories" ,[ "frumpy hair ", "handlebars ", "nerd glasses",],),
  //1833 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "earring ", "mole",],),
  //1834 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "frumpy hair ", "hot lipstick",],),
  //1835 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "horned rim glasses",],),
  //1836 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "crazy hair",],),
  //1837 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "knitted cap ", "mustache ", "nerd glasses ", "smile",],),
  //1839 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "mohawk dark",],),
  //1840 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "eye patch",],),
  //1842 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "luxurious beard ", "wild hair",],),
  //1843 ,),
  
  new Traits( "female, accessories" ,[ "blonde short ", "regular shades",],),
  //1844 ,),
  
  new Traits( "male, accessories" ,[ "mohawk dark ", "regular shades",],),
  //1845 ,),
  
  new Traits( "male, accessories" ,[ "cowboy hat ", "luxurious beard",],),
  //1846 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "mohawk",],),
  //1847 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes blue ", "stringy hair",],),
  //1848 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "dark hair ", "green eye shadow",],),
  //1849 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "wild blonde",],),
  //1850 ,),
  
  new Traits( "male, accessories" ,[ "eye mask ", "frown ", "handlebars ", "purple hair",],),
  //1851 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "mohawk dark",],),
  //1852 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "front beard dark",],),
  //1853 ,),
  
  new Traits( "female, accessories" ,[ "blonde short ", "earring ", "hot lipstick ", "welding goggles",],),
  //1854 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "earring",],),
  //1855 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "horned rim glasses ", "mohawk thin",],),
  //1856 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "eye mask ", "straight hair dark",],),
  //1857 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "stringy hair",],),
  //1858 ,),
  
  new Traits( "female, accessories" ,[ "crazy hair ", "purple eye shadow",],),
  //1859 ,),
  
  new Traits( "female, accessories" ,[ "purple eye shadow ", "wild white hair",],),
  //1860 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "messy hair",],),
  //1861 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "messy hair",],),
  //1862 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "front beard dark ", "shaved head",],),
  //1863 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes blue ", "clown hair green ", "mole",],),
  //1864 ,),
  
  new Traits( "female, accessories" ,[ "blonde short ", "welding goggles",],),
  //1865 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob ", "purple lipstick",],),
  //1866 ,),
  
  new Traits( "male, accessories" ,[ "messy hair ", "muttonchops ", "regular shades",],),
  //1867 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "headband",],),
  //1868 ,),
  
  new Traits( "female, accessories" ,[ "vr ", "wild blonde",],),
  //1869 ,),
  
  new Traits( "female, accessories" ,[ "knitted cap ", "medical mask",],),
  //1870 ,),
  
  new Traits( "male, accessories" ,[ "headband ", "smile",],),
  //1871 ,),
  
  new Traits( "female, accessories" ,[ "half shaved ", "regular shades",],),
  //1872 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "straight hair dark",],),
  //1873 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "headband ", "muttonchops",],),
  //1874 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "straight hair blonde",],),
  //1875 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "hot lipstick ", "wild blonde",],),
  //1876 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "knitted cap ", "purple eye shadow",],),
  //1877 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "earring ", "hoodie ", "vape",],),
  //1878 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "nerd glasses ", "normal beard",],),
  //1879 ,),
  
  new Traits( "male, accessories" ,[ "fedora ", "small shades",],),
  //1880 ,),
  
  new Traits( "female, accessories" ,[ "mole ", "purple lipstick ", "straight hair dark",],),
  //1881 ,),
  
  new Traits( "male, accessories" ,[ "muttonchops ", "wild hair",],),
  //1882 ,),
  
  new Traits( "female, accessories" ,[ "purple lipstick",],),
  //1883 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "peak spike ", "silver chain",],),
  //1884 ,),
  
  new Traits( "female, accessories" ,[ "green eye shadow ", "tassle hat",],),
  //1885 ,),
  
  new Traits( "zombie, accessories" ,[ "messy hair ", "shadow beard",],),
  //1886 ,),
  
  new Traits( "male, accessories" ,[ "nerd glasses ", "police cap",],),
  //1887 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "wild blonde",],),
  //1888 ,),
  
  new Traits( "male, accessories" ,[ "luxurious beard ", "peak spike",],),
  //1889 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "front beard dark ", "knitted cap",],),
  //1890 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "police cap",],),
  //1891 ,),
  
  new Traits( "female, accessories" ,[ "cap",],),
  //1892 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "stringy hair",],),
  //1893 ,),
  
  new Traits( "male, accessories" ,[ "eye mask ", "stringy hair",],),
  //1894 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "black lipstick ", "horned rim glasses",],),
  //1895 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "nerd glasses",],),
  //1896 ,),
  
  new Traits( "male, accessories" ,[ "goat ", "mohawk dark ", "vr",],),
  //1897 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "headband",],),
  //1898 ,),
  
  new Traits( "male, accessories" ,[ "frumpy hair ", "normal beard black",],),
  //1899 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk dark ", "mole",],),
  //1900 ,),
  
  new Traits( "male, accessories" ,[ "headband ", "mustache ", "regular shades",],),
  //1901 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "purple lipstick",],),
  //1902 ,),
  
  new Traits( "male, accessories" ,[ "beanie",],),
  //1903 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "frumpy hair",],),
  //1904 ,),
  
  new Traits( "male, accessories" ,[ "frumpy hair ", "horned rim glasses",],),
  //1905 ,),
  
  new Traits( "female, accessories" ,[ "purple eye shadow ", "straight hair blonde",],),
  //1906 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "dark hair ", "purple lipstick",],),
  //1907 ,),
  
  new Traits( "male, accessories" ,[ "headband ", "horned rim glasses",],),
  //1908 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "big shades ", "goat",],),
  //1909 ,),
  
  new Traits( "female, accessories" ,[ "crazy hair ", "earring ", "mole ", "purple eye shadow",],),
  //1910 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "green eye shadow ", "orange side",],),
  //1911 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "frown ", "peak spike",],),
  //1912 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "straight hair",],),
  //1913 ,),
  
  new Traits( "female, accessories" ,[ "classic shades ", "frumpy hair ", "gold chain ", "hot lipstick",],),
  //1914 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk",],),
  //1915 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "normal beard black",],),
  //1916 ,),
  
  new Traits( "female, accessories" ,[ "frumpy hair ", "purple eye shadow",],),
  //1917 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob ", "earring ", "hot lipstick",],),
  //1918 ,),
  
  new Traits( "male, accessories" ,[ "frown ", "peak spike",],),
  //1919 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "goat ", "mohawk dark",],),
  //1920 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "clown eyes green ", "earring ", "mole",],),
  //1921 ,),
  
  new Traits( "male, accessories" ,[ "knitted cap ", "vr",],),
  //1922 ,),
  
  new Traits( "male, accessories" ,[ "goat ", "vape", "wild hair",],),
  //1923 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "dark hair",],),
  //1924 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "hoodie",],),
  //1925 ,),
  
  new Traits( "female, accessories" ,[ "blonde short ", "hot lipstick",],),
  //1926 ,),
  
  new Traits( "male, accessories" ,[ "mohawk thin ", "muttonchops",],),
  //1927 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes green ", "crazy hair",],),
  //1928 ,),
  
  new Traits( "male, accessories" ,[ "front beard dark ", "police cap",],),
  //1929 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "crazy hair",],),
  //1930 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "pilot helmet",],),
  //1931 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "earring ", "muttonchops ", "wild hair",],),
  //1932 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "knitted cap",],),
  //1933 ,),
  
  new Traits( "male, accessories" ,[ "fedora ", "normal beard ", "small shades",],),
  //1934 ,),
  
  new Traits( "zombie, accessories" ,[ "earring ", "shaved head",],),
  //1935 ,),
  
  new Traits( "female, accessories" ,[ "half shaved ", "hot lipstick",],),
  //1936 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "purple lipstick ", "straight hair",],),
  //1937 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "muttonchops ", "vampire hair",],),
  //1938 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "pipe",],),
  //1939 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "green eye shadow ", "knitted cap",],),
  //1940 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "luxurious beard ", "wild hair",],),
  //1941 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "chinstrap",],),
  //1942 ,),
  
  new Traits( "male, accessories" ,[ "front beard dark ", "knitted cap",],),
  //1943 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "wild hair",],),
  //1944 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "messy hair",],),
  //1945 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "hoodie",],),
  //1946 ,),
  
  new Traits( "male, accessories" ,[ "muttonchops ", "shaved head",],),
  //1947 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "mohawk dark ", "shadow beard",],),
  //1948 ,),
  
  new Traits( "female, accessories" ,[ "big shades ", "hot lipstick ", "vape",],),
  //1949 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "shaved head",],),
  //1950 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "half shaved ", "vr",],),
  //1951 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "pigtails ", "purple lipstick",],),
  //1952 ,),
  
  new Traits( "female, accessories" ,[ "purple lipstick",],),
  //1953 ,),
  
  new Traits( "male, accessories" ,[ "buck teeth ", "muttonchops ", "wild hair",],),
  //1954 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "knitted cap ", "medical mask",],),
  //1955 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "wild blonde",],),
  //1956 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "mohawk dark",],),
  //1957 ,),
  
  new Traits( "female, accessories" ,[ "blonde short ", "hot lipstick",],),
  //1958 ,),
  
  new Traits( "female, accessories" ,[ "big shades ", "wild blonde",],),
  //1959 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "earring",],),
  //1960 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "front beard dark",],),
  //1961 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "headband",],),
  //1962 ,),
  
  new Traits( "female, accessories" ,[ "medical mask",],),
  //1963 ,),
  
  new Traits( "male, accessories" ,[ "big beard",],),
  //1964 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes green ", "earring ", "mohawk",],),
  //1965 ,),
  
  new Traits( "male, accessories" ,[ "normal beard black ", "stringy hair",],),
  //1966 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "choker ", "wild hair",],),
  //1967 ,),
  
  new Traits( "male, accessories" ,[ "big beard ", "earring ", "mohawk dark ", "mole ", "regular shades",],),
  //1968 ,),
  
  new Traits( "male, accessories" ,[ "horned rim glasses ", "messy hair",],),
  //1969 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "goat",],),
  //1970 ,),
  
  new Traits( "female, accessories" ,[ "dark hair ", "green eye shadow ", "hot lipstick",],),
  //1971 ,),
  
  new Traits( "female, accessories" ,[ "choker ", "half shaved",],),
  //1972 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "horned rim glasses",],),
  //1973 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "nerd glasses ", "red mohawk",],),
  //1974 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes green ", "do-rag ", "front beard dark",],),
  //1975 ,),
  
  new Traits( "male, accessories" ,[ "frumpy hair ", "small shades",],),
  //1976 ,),
  
  new Traits( "female, accessories" ,[ "green eye shadow ", "mohawk",],),
  //1977 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "crazy hair ", "eye patch",],),
  //1978 ,),
  
  new Traits( "female, accessories" ,[ "gold chain ", "red mohawk",],),
  //1979 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob ", "regular shades",],),
  //1980 ,),
  
  new Traits( "male, accessories" ,[ "frumpy hair ", "nerd glasses",],),
  //1981 ,),
  
  new Traits( "female, accessories" ,[ "green eye shadow ", "hot lipstick ", "straight hair dark",],),
  //1982 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "normal beard black",],),
  //1983 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "earring ", "straight hair",],),
  //1984 ,),
  
  new Traits( "female, accessories" ,[ "blonde short ", "clown eyes blue ", "hot lipstick",],),
  //1985 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "wild blonde",],),
  //1986 ,),
  
  new Traits( "male, accessories" ,[ "front beard dark ", "regular shades ", "stringy hair",],),
  //1987 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "clown eyes green ", "purple lipstick",],),
  //1988 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "small shades",],),
  //1989 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "purple lipstick ", "tassle hat",],),
  //1990 ,),
  
  new Traits( "male, accessories" ,[ "fedora ", "normal beard ", "regular shades",],),
  //1991 ,),
  
  new Traits( "male, accessories" ,[ "frumpy hair ", "regular shades",],),
  //1992 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "luxurious beard",],),
  //1993 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob ", "classic shades",],),
  //1994 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "front beard ", "mole",],),
  //1995 ,),
  
  new Traits( "female, accessories" ,[ "dark hair ", "pipe",],),
  //1996 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "clown nose ", "frumpy hair",],),
  //1997 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "earring ", "shaved head",],),
  //1998 ,),
  
  new Traits( "male, accessories" ,[ "cowboy hat ", "front beard",],),
  //1999 ,),
  
  new Traits( "female, accessories" ,[ "big shades ", "earring ", "tiara",],),
  //2000 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "stringy hair",],),
  //2001 ,),
  
  new Traits( "male, accessories" ,[ "messy hair ", "shadow beard",],),
  //2002 ,),
  ],),
  "data" ,],),
  "nfts" , [],),
  ],),
  new Traits( "female, accessories" ,[ "big shades ", "earring ", "tiara",],),
  //2000 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "stringy hair",],),
  //2001 ,),
  
  new Traits( "male, accessories" ,[ "messy hair ", "shadow beard",],),
  //2002 ,),
  
  new Traits( "male, accessories" ,[ "headband ", "horned rim glasses",],),
  //2003 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "frumpy hair ", "handlebars",],),
  //2004 ,),
  
  new Traits( "male, accessories" ,[ "horned rim glasses ", "knitted cap",],),
  //2005 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "crazy hair ", "earring ", "front beard dark",],),
  //2006 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob ", "hot lipstick",],),
  //2007 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "red mohawk",],),
  //2008 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "normal beard ", "police cap",],),
  //2009 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "front beard dark ", "purple hair",],),
  //2010 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "muttonchops ", "nerd glasses",],),
  //2011 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "frumpy hair ", "hot lipstick",],),
  //2012 ,),
  
  new Traits( "female, accessories" ,[ "mohawk dark",],),
  //2013 ,),
  
  new Traits( "female, accessories" ,[ "green eye shadow ", "hot lipstick ", "tassle hat",],),
  //2014 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "nerd glasses ", "pink with hat",],),
  //2015 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "pigtails",],),
  //2016 ,),
  
  new Traits( "female, accessories" ,[ "messy hair ", "mole",],),
  //2017 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob ", "clown eyes blue ", "vape",],),
  //2018 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "mohawk dark",],),
  //2019 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "cowboy hat",],),
  //2020 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "nerd glasses",],),
  //2021 ,),
  
  new Traits( "female, accessories" ,[ "green eye shadow ", "straight hair",],),
  //2022 ,),
  
  new Traits( "female, accessories" ,[ "green eye shadow ", "messy hair ", "mole",],),
  //2023 ,),
  
  new Traits( "male, accessories" ,[ "goat ", "knitted cap ", "nerd glasses",],),
  //2024 ,),
  
  new Traits( "male, accessories" ,[ "mohawk dark ", "small shades",],),
  //2025 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "horned rim glasses ", "peak spike",],),
  //2026 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "knitted cap",],),
  //2027 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "front beard dark",],),
  //2028 ,),
  
  new Traits( "male, accessories" ,[ "cowboy hat ", "horned rim glasses",],),
  //2029 ,),
  
  new Traits( "female, accessories" ,[ "3d glasses ", "crazy hair ", "earring",],),
  //2030 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "small shades ", "wild hair",],),
  //2031 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "frown ", "frumpy hair ", "shadow beard",],),
  //2032 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "gold chain ", "mole ", "purple lipstick ", "straight hair dark",],),
  //2033 ,),
  
  new Traits( "female, accessories" ,[ "purple eye shadow ", "wild white hair",],),
  //2034 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "shadow beard ", "vr",],),
  //2035 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "handlebars ", "shaved head",],),
  //2036 ,),
  
  new Traits( "female, accessories" ,[ "frumpy hair ", "hot lipstick ", "mole",],),
  //2037 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "mole",],),
  //2038 ,),
  
  new Traits( "female, accessories" ,[ "green eye shadow ", "purple lipstick ", "stringy hair",],),
  //2039 ,),
  
  new Traits( "male, accessories" ,[ "headband ", "mole",],),
  //2040 ,),
  
  new Traits( "female, accessories" ,[ "cigarette",],),
  //2041 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "crazy hair",],),
  //2042 ,),
  
  new Traits( "male, accessories" ,[ "front beard dark ", "stringy hair",],),
  //2043 ,),
  
  new Traits( "male, accessories" ,[ "handlebars ", "police cap",],),
  //2044 ,),
  
  new Traits( "male, accessories" ,[ "front beard ", "regular shades ", "wild hair",],),
  //2045 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "straight hair dark",],),
  //2046 ,),
  
  new Traits( "female, accessories" ,[ "half shaved ", "mole",],),
  //2047 ,),
  
  new Traits( "male, accessories" ,[ "front beard dark ", "hoodie ", "vr",],),
  //2048 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "do-rag ", "earring ", "pipe ", "vr",],),
  //2049 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "front beard dark ", "regular shades",],),
  //2050 ,),
  
  new Traits( "male, accessories" ,[ "front beard ", "hoodie",],),
  //2051 ,),
  
  new Traits( "female, accessories" ,[ "cap",],),
  //2052 ,),
  
  new Traits( "female, accessories" ,[ "big shades ", "mohawk",],),
  //2053 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "clown nose ", "pipe ", "straight hair blonde",],),
  //2054 ,),
  
  new Traits( "male, accessories" ,[ "eye mask ", "peak spike",],),
  //2055 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "regular shades ", "shaved head",],),
  //2056 ,),
  
  new Traits( "male, accessories" ,[ "normal beard black ", "wild hair",],),
  //2057 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "goat ", "purple hair",],),
  //2058 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "mohawk dark",],),
  //2059 ,),
  
  new Traits( "male, accessories" ,[ "muttonchops ", "purple hair",],),
  //2060 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "normal beard",],),
  //2061 ,),
  
  new Traits( "female, accessories" ,[ "mohawk thin ", "nerd glasses ", "purple lipstick",],),
  //2062 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "peak spike",],),
  //2063 ,),
  
  new Traits( "male, accessories" ,[ "front beard dark ", "shaved head ", "small shades",],),
  //2064 ,),
  
  new Traits( "female, accessories" ,[ "dark hair ", "horned rim glasses ", "hot lipstick",],),
  //2065 ,),
  
  new Traits( "zombie, accessories" ,[ "knitted cap",],),
  //2066 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "crazy hair",],),
  //2067 ,),
  
  new Traits( "female, accessories" ,[ "purple lipstick ", "regular shades ", "tassle hat",],),
  //2068 ,),
  
  new Traits( "female, accessories" ,[ "frumpy hair ", "green eye shadow ", "hot lipstick",],),
  //2069 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "headband",],),
  //2070 ,),
  
  new Traits( "male, accessories" ,[ "horned rim glasses ", "mohawk thin",],),
  //2071 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "cigarette ", "green eye shadow ", "purple lipstick",],),
  //2072 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "nerd glasses",],),
  //2073 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "hot lipstick ", "wild hair",],),
  //2074 ,),
  
  new Traits( "male, accessories" ,[ "clown nose ", "headband ", "small shades",],),
  //2075 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "regular shades",],),
  //2076 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "hot lipstick ", "wild hair",],),
  //2077 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "frumpy hair",],),
  //2078 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "knitted cap ", "muttonchops",],),
  //2079 ,),
  
  new Traits( "male, accessories" ,[ "purple hair ", "vape",],),
  //2080 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "police cap ", "shadow beard",],),
  //2081 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "knitted cap",],),
  //2082 ,),
  
  new Traits( "male, accessories" ,[ "headband ", "mustache",],),
  //2083 ,),
  
  new Traits( "male, accessories" ,[ "mohawk thin ", "vr",],),
  //2084 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "red mohawk",],),
  //2085 ,),
  
  new Traits( "male, accessories" ,[ "goat ", "knitted cap",],),
  //2086 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "headband ", "vr",],),
  //2087 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "muttonchops",],),
  //2088 ,),
  
  new Traits( "male, accessories" ,[ "police cap ", "regular shades",],),
  //2089 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "knitted cap",],),
  //2090 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "cigarette ", "green eye shadow",],),
  //2091 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "mohawk",],),
  //2092 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "hoodie ", "mustache",],),
  //2093 ,),
  
  new Traits( "male, accessories" ,[ "horned rim glasses ", "mohawk thin ", "mustache",],),
  //2094 ,),
  
  new Traits( "female, accessories" ,[ "classic shades ", "clown hair green",],),
  //2095 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "front beard dark ", "mole ", "pipe",],),
  //2096 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "luxurious beard ", "regular shades ", "smile",],),
  //2097 ,),
  
  new Traits( "male, accessories" ,[ "luxurious beard ", "mohawk dark",],),
  //2098 ,),
  
  new Traits( "male, accessories" ,[ "handlebars ", "headband",],),
  //2099 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "green eye shadow ", "mohawk",],),
  //2100 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "wild blonde",],),
  //2101 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "mustache",],),
  //2102 ,),
  
  new Traits( "female, accessories" ,[ "mohawk ", "purple lipstick",],),
  //2103 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "headband",],),
  //2104 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "headband ", "hot lipstick",],),
  //2105 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "mohawk thin ", "normal beard black",],),
  //2106 ,),
  
  new Traits( "male, accessories" ,[ "headband ", "vr",],),
  //2107 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "do-rag",],),
  //2108 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "eye patch ", "stringy hair",],),
  //2109 ,),
  
  new Traits( "female, accessories" ,[ "3d glasses ", "earring ", "pigtails",],),
  //2110 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "messy hair ", "pipe",],),
  //2111 ,),
  
  new Traits( "male, accessories" ,[ "buck teeth ", "cap ", "shadow beard",],),
  //2112 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "handlebars",],),
  //2113 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "wild white hair",],),
  //2114 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "earring",],),
  //2115 ,),
  
  new Traits( "male, accessories" ,[ "cap forward",],),
  //2116 ,),
  
  new Traits( "female, accessories" ,[ "eye mask ", "purple lipstick ", "straight hair blonde",],),
  //2117 ,),
  
  new Traits( "female, accessories" ,[ "blonde short ", "earring",],),
  //2118 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "mohawk thin",],),
  //2119 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "mole ", "pilot helmet",],),
  //2120 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "pigtails",],),
  //2121 ,),
  
  new Traits( "male, accessories" ,[ "handlebars ", "shaved head",],),
  //2122 ,),
  
  new Traits( "male, accessories" ,[ "front beard dark ", "frumpy hair ", "medical mask",],),
  //2123 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "mole ", "peak spike",],),
  //2124 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "eye patch",],),
  //2125 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes green ", "frown ", "frumpy hair",],),
  //2126 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "earring ", "mohawk dark",],),
  //2127 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "mohawk dark",],),
  //2128 ,),
  
  new Traits( "female, accessories" ,[ "green eye shadow ", "mole ", "wild hair",],),
  //2129 ,),
  
  new Traits( "male, accessories" ,[ "big beard ", "small shades ", "top hat",],),
  //2130 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "eye mask ", "stringy hair",],),
  //2131 ,),
  
  new Traits( "zombie, accessories" ,[ "hoodie ", "nerd glasses ", "normal beard black",],),
  //2132 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "pipe ", "wild white hair",],),
  //2133 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "messy hair",],),
  //2134 ,),
  
  new Traits( "male, accessories" ,[ "handlebars ", "regular shades ", "vampire hair",],),
  //2135 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "crazy hair ", "handlebars",],),
  //2136 ,),
  
  new Traits( "female, accessories" ,[ "cap ", "cigarette ", "clown eyes green ", "purple lipstick",],),
  //2137 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "green eye shadow",],),
  //2138 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "classic shades ", "mohawk",],),
  //2139 ,),
  
  new Traits( "ape, accessories" ,[ "knitted cap ", "small shades",],),
  //2140 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "cigarette ", "mustache",],),
  //2141 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "mole ", "nerd glasses ", "vape",],),
  //2142 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "blonde short ", "earring",],),
  //2143 ,),
  
  new Traits( "male, accessories" ,[ "mohawk thin ", "mustache",],),
  //2144 ,),
  
  new Traits( "female, accessories" ,[ "eye mask ", "mohawk",],),
  //2145 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "choker ", "clown eyes green",],),
  //2146 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "nerd glasses",],),
  //2147 ,),
  
  new Traits( "male, accessories" ,[ "frumpy hair ", "gold chain",],),
  //2148 ,),
  
  new Traits( "female, accessories" ,[ "frumpy hair ", "purple lipstick",],),
  //2149 ,),
  
  new Traits( "female, accessories" ,[ "big shades ", "black lipstick ", "mohawk",],),
  //2150 ,),
  
  new Traits( "male, accessories" ,[ "muttonchops ", "peak spike",],),
  //2151 ,),
  
  new Traits( "female, accessories" ,[ "frumpy hair ", "nerd glasses",],),
  //2152 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "shadow beard",],),
  //2153 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "hot lipstick",],),
  //2154 ,),
  
  new Traits( "male, accessories" ,[ "front beard dark ", "headband",],),
  //2155 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "crazy hair",],),
  //2156 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "frown",],),
  //2157 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "messy hair ", "purple eye shadow",],),
  //2158 ,),
  
  new Traits( "female, accessories" ,[ "green eye shadow ", "tassle hat",],),
  //2159 ,),
  
  new Traits( "male, accessories" ,[ "normal beard black ", "peak spike ", "vr",],),
  //2160 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "cowboy hat ", "horned rim glasses",],),
  //2161 ,),
  
  new Traits( "female, accessories" ,[ "purple eye shadow ", "purple lipstick ", "tassle hat",],),
  //2162 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "headband ", "smile",],),
  //2163 ,),
  
  new Traits( "female, accessories" ,[ "blonde short ", "earring ", "purple eye shadow",],),
  //2164 ,),
  
  new Traits( "male, accessories" ,[ "regular shades",],),
  //2165 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "frumpy hair ", "nerd glasses",],),
  //2166 ,),
  
  new Traits( "male, accessories" ,[ "frown ", "messy hair ", "muttonchops",],),
  //2167 ,),
  
  new Traits( "female, accessories" ,[ "classic shades ", "hot lipstick ", "mohawk dark ", "mole",],),
  //2168 ,),
  
  new Traits( "female, accessories" ,[ "pilot helmet ", "purple lipstick",],),
  //2169 ,),
  
  new Traits( "female, accessories" ,[ "eye patch ", "hot lipstick ", "stringy hair",],),
  //2170 ,),
  
  new Traits( "female, accessories" ,[ "crazy hair ", "eye patch",],),
  //2171 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "cigarette",],),
  //2172 ,),
  
  new Traits( "male, accessories" ,[ "normal beard black ", "stringy hair",],),
  //2173 ,),
  
  new Traits( "female, accessories" ,[ "dark hair ", "purple eye shadow",],),
  //2174 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "mole ", "shadow beard",],),
  //2175 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "half shaved",],),
  //2176 ,),
  
  new Traits( "female, accessories" ,[ "classic shades ", "frumpy hair",],),
  //2177 ,),
  
  new Traits( "male, accessories" ,[ "front beard dark ", "hoodie",],),
  //2178 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "regular shades ", "top hat",],),
  //2179 ,),
  
  new Traits( "female, accessories" ,[ "purple lipstick ", "welding goggles ", "wild white hair",],),
  //2180 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "frumpy hair ", "mole",],),
  //2181 ,),
  
  new Traits( "female, accessories" ,[ "mole ", "purple eye shadow ", "straight hair blonde",],),
  //2182 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "crazy hair ", "earring ", "mole ", "purple lipstick",],),
  //2183 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "horned rim glasses ", "mohawk",],),
  //2184 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "clown hair green",],),
  //2185 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "frumpy hair ", "nerd glasses",],),
  //2186 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "half shaved ", "medical mask ", "purple lipstick",],),
  //2187 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "front beard dark",],),
  //2188 ,),
  
  new Traits( "female, accessories" ,[ "3d glasses ", "frumpy hair",],),
  //2189 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "pink with hat",],),
  //2190 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "cigarette",],),
  //2191 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "frown ", "horned rim glasses ", "knitted cap",],),
  //2192 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "stringy hair",],),
  //2193 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "stringy hair",],),
  //2194 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "wild hair",],),
  //2195 ,),
  
  new Traits( "female, accessories" ,[ "choker ", "hot lipstick ", "mohawk thin",],),
  //2196 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "mole ", "purple eye shadow ", "stringy hair",],),
  //2197 ,),
  
  new Traits( "female, accessories" ,[ "crazy hair ", "hot lipstick ", "pipe",],),
  //2198 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob ", "purple eye shadow ", "purple lipstick",],),
  //2199 ,),
  
  new Traits( "male, accessories" ,[ "big beard ", "knitted cap",],),
  //2200 ,),
  
  new Traits( "female, accessories" ,[ "choker ", "frumpy hair",],),
  //2201 ,),
  
  new Traits( "female, accessories" ,[ "choker ", "classic shades ", "earring ", "hot lipstick ", "mole ", "straight hair",],),
  //2202 ,),
  
  new Traits( "female, accessories" ,[ "clown hair green ", "earring ", "green eye shadow",],),
  //2203 ,),
  
  new Traits( "female, accessories" ,[ "",],),
  //2204 ,),
  
  new Traits( "male, accessories" ,[ "knitted cap ", "mole",],),
  //2205 ,),
  
  new Traits( "female, accessories" ,[ "dark hair ", "horned rim glasses",],),
  //2206 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "purple eye shadow",],),
  //2207 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "hot lipstick ", "red mohawk ", "rosy cheeks",],),
  //2208 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes green ", "earring ", "mohawk dark ", "mole ", "shadow beard",],),
  //2209 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "mohawk thin",],),
  //2210 ,),
  
  new Traits( "male, accessories" ,[ "front beard dark ", "mole ", "wild hair",],),
  //2211 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "mohawk ", "purple lipstick",],),
  //2212 ,),
  
  new Traits( "female, accessories" ,[ "3d glasses ", "bandana",],),
  //2213 ,),
  
  new Traits( "female, accessories" ,[ "eye mask ", "straight hair dark",],),
  //2214 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "eye patch ", "mole",],),
  //2215 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "mohawk ", "regular shades",],),
  //2216 ,),
  
  new Traits( "female, accessories" ,[ "green eye shadow ", "half shaved",],),
  //2217 ,),
  
  new Traits( "female, accessories" ,[ "dark hair ", "welding goggles",],),
  //2218 ,),
  
  new Traits( "male, accessories" ,[ "big beard",],),
  //2219 ,),
  
  new Traits( "male, accessories" ,[ "horned rim glasses ", "luxurious beard ", "messy hair",],),
  //2220 ,),
  
  new Traits( "male, accessories" ,[ "horned rim glasses ", "wild hair",],),
  //2221 ,),
  
  new Traits( "female, accessories" ,[ "blonde short ", "cigarette ", "clown eyes green",],),
  //2222 ,),
  
  new Traits( "male, accessories" ,[ "horned rim glasses ", "police cap",],),
  //2223 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "goat",],),
  //2224 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes green ", "muttonchops ", "vampire hair",],),
  //2225 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "horned rim glasses ", "pink with hat",],),
  //2226 ,),
  
  new Traits( "male, accessories" ,[ "mohawk dark ", "vr",],),
  //2227 ,),
  
  new Traits( "male, accessories" ,[ "goat ", "shaved head",],),
  //2228 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob ", "clown eyes green ", "hot lipstick",],),
  //2229 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "cigarette ", "horned rim glasses",],),
  //2230 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "messy hair ", "vr",],),
  //2231 ,),
  
  new Traits( "female, accessories" ,[ "mohawk thin ", "purple eye shadow",],),
  //2232 ,),
  
  new Traits( "male, accessories" ,[ "goat ", "stringy hair",],),
  //2233 ,),
  
  new Traits( "male, accessories" ,[ "headband ", "vr",],),
  //2234 ,),
  
  new Traits( "male, accessories" ,[ "eye mask ", "muttonchops ", "peak spike",],),
  //2235 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "regular shades ", "shadow beard ", "wild hair",],),
  //2236 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob ", "blue eye shadow",],),
  //2237 ,),
  
  new Traits( "male, accessories" ,[ "goat ", "mohawk",],),
  //2238 ,),
  
  new Traits( "male, accessories" ,[ "big beard ", "gold chain ", "mohawk",],),
  //2239 ,),
  
  new Traits( "female, accessories" ,[ "big shades ", "half shaved",],),
  //2240 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "mustache ", "stringy hair",],),
  //2241 ,),
  
  new Traits( "male, accessories" ,[ "knitted cap ", "smile",],),
  //2242 ,),
  
  new Traits( "ape , accessories" ,[ "bandana ", "nerd glasses",],),
  //2243 ,),
  
  new Traits( "female, accessories" ,[ "nerd glasses ", "pink with hat",],),
  //2244 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "normal beard",],),
  //2245 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "cigarette ", "luxurious beard",],),
  //2246 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "normal beard black ", "wild hair",],),
  //2247 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes green ", "front beard dark ", "messy hair",],),
  //2248 ,),
  
  new Traits( "zombie, accessories" ,[ "bandana ", "eye patch",],),
  //2249 ,),
  
  new Traits( "male, accessories" ,[ "goat ", "mole ", "purple hair",],),
  //2250 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "cigarette ", "earring",],),
  //2251 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "messy hair",],),
  //2252 ,),
  
  new Traits( "female, accessories" ,[ "orange side ", "spots",],),
  //2253 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "fedora ", "mole",],),
  //2254 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "nerd glasses ", "normal beard",],),
  //2255 ,),
  
  new Traits( "male, accessories" ,[ "knitted cap ", "small shades",],),
  //2256 ,),
  
  new Traits( "female, accessories" ,[ "classic shades ", "hot lipstick ", "mohawk",],),
  //2257 ,),
  
  new Traits( "male, accessories" ,[ "hoodie ", "mustache",],),
  //2258 ,),
  
  new Traits( "male, accessories" ,[ "normal beard black ", "wild hair",],),
  //2259 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "eye patch ", "normal beard",],),
  //2260 ,),
  
  new Traits( "male, accessories" ,[ "shaved head ", "smile",],),
  //2261 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob ", "clown eyes blue",],),
  //2262 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "mole",],),
  //2263 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "purple hair ", "regular shades ", "shadow beard",],),
  //2264 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes blue ", "mohawk dark",],),
  //2265 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "eye patch ", "frumpy hair",],),
  //2266 ,),
  
  new Traits( "male, accessories" ,[ "buck teeth ", "clown eyes green ", "handlebars ", "knitted cap",],),
  //2267 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "cap forward ", "earring ", "silver chain",],),
  //2268 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "eye mask",],),
  //2269 ,),
  
  new Traits( "male, accessories" ,[ "cowboy hat ", "small shades",],),
  //2270 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "front beard ", "mohawk",],),
  //2271 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "dark hair",],),
  //2272 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "wild white hair",],),
  //2273 ,),
  
  new Traits( "female, accessories" ,[ "3d glasses ", "earring ", "hot lipstick ", "wild hair",],),
  //2274 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "purple eye shadow ", "tassle hat",],),
  //2275 ,),
  
  new Traits( "male, accessories" ,[ "buck teeth ", "shadow beard ", "small shades ", "wild hair",],),
  //2276 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "vampire hair",],),
  //2277 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "hot lipstick ", "wild hair",],),
  //2278 ,),
  
  new Traits( "female, accessories" ,[ "nerd glasses ", "pigtails",],),
  //2279 ,),
  
  new Traits( "male, accessories" ,[ "goat ", "messy hair",],),
  //2280 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "hot lipstick ", "mohawk ", "purple eye shadow",],),
  //2281 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "cigarette ", "earring ", "mole",],),
  //2282 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "frumpy hair ", "pipe",],),
  //2283 ,),
  
  new Traits( "female, accessories" ,[ "red mohawk ", "regular shades",],),
  //2284 ,),
  
  new Traits( "male, accessories" ,[ "horned rim glasses ", "mohawk",],),
  //2285 ,),
  
  new Traits( "female, accessories" ,[ "regular shades ", "stringy hair",],),
  //2286 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "do-rag",],),
  //2287 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "shadow beard",],),
  //2288 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "front beard",],),
  //2289 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "luxurious beard",],),
  //2290 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "headband ", "shadow beard",],),
  //2291 ,),
  
  new Traits( "male, accessories" ,[ "handlebars ", "messy hair",],),
  //2292 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "regular shades ", "wild blonde",],),
  //2293 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "hoodie ", "luxurious beard",],),
  //2294 ,),
  
  new Traits( "male, accessories" ,[ "gold chain ", "luxurious beard ", "shaved head",],),
  //2295 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "goat ", "horned rim glasses",],),
  //2296 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "clown eyes green",],),
  //2297 ,),
  
  new Traits( "male, accessories" ,[ "headband ", "shadow beard",],),
  //2298 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "horned rim glasses ", "tassle hat",],),
  //2299 ,),
  
  new Traits( "male, accessories" ,[ "eye patch",],),
  //2300 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "front beard dark ", "hoodie",],),
  //2301 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "peak spike",],),
  //2302 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "fedora ", "small shades",],),
  //2303 ,),
  
  new Traits( "male, accessories" ,[ "big beard ", "crazy hair ", "regular shades",],),
  //2304 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "frumpy hair",],),
  //2305 ,),
  
  new Traits( "zombie , accessories" ,[ "cigarette ", "earring ", "mohawk thin",],),
  //2306 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "frown",],),
  //2307 ,),
  
  new Traits( "male, accessories" ,[ "frown ", "wild hair",],),
  //2308 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "front beard ", "frumpy hair",],),
  //2309 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "chinstrap ", "hoodie",],),
  //2310 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "hoodie ", "shadow beard",],),
  //2311 ,),
  
  new Traits( "female, accessories" ,[ "pigtails",],),
  //2312 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "shadow beard",],),
  //2313 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "shadow beard ", "smile",],),
  //2314 ,),
  
  new Traits( "male, accessories" ,[ "nerd glasses ", "shadow beard ", "stringy hair",],),
  //2315 ,),
  
  new Traits( "female, accessories" ,[ "cap ", "eye mask",],),
  //2316 ,),
  
  new Traits( "male, accessories" ,[ "mohawk thin ", "normal beard",],),
  //2317 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "half shaved ", "purple lipstick",],),
  //2318 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "frown ", "nerd glasses ", "rosy cheeks ", "shadow beard",],),
  //2319 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "cigarette ", "eye mask",],),
  //2320 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "half shaved",],),
  //2321 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "mole ", "straight hair dark",],),
  //2322 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "headband ", "small shades",],),
  //2323 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "blonde bob",],),
  //2324 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "hoodie ", "vr",],),
  //2325 ,),
  
  new Traits( "male, accessories" ,[ "clown hair green ", "horned rim glasses",],),
  //2326 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "fedora ", "mustache",],),
  //2327 ,),
  
  new Traits( "female, accessories" ,[ "eye patch ", "mohawk thin",],),
  //2328 ,),
  
  new Traits( "zombie , accessories" ,[ "earring ", "peak spike",],),
  //2329 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk ", "mole",],),
  //2330 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "horned rim glasses ", "messy hair",],),
  //2331 ,),
  
  new Traits( "male, accessories" ,[ "fedora ", "front beard",],),
  //2332 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "medical mask ", "small shades",],),
  //2333 ,),
  
  new Traits( "female, accessories" ,[ "eye mask ", "knitted cap",],),
  //2334 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "handlebars",],),
  //2335 ,),
  
  new Traits( "male, accessories" ,[ "clown hair green ", "clown nose ", "earring",],),
  //2336 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "mohawk",],),
  //2337 ,),
  
  new Traits( "zombie , accessories" ,[ "mohawk thin",],),
  //2338 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk thin",],),
  //2339 ,),
  
  new Traits( "male, accessories" ,[ "messy hair ", "mole",],),
  //2340 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "headband ", "normal beard black",],),
  //2341 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "earring ", "mole ", "shaved head",],),
  //2342 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "mohawk thin ", "normal beard black",],),
  //2343 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "clown eyes blue ", "frown ", "luxurious beard",],),
  //2344 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "do-rag",],),
  //2345 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "green eye shadow ", "straight hair",],),
  //2346 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "wild hair",],),
  //2347 ,),
  
  new Traits( "male, accessories" ,[ "front beard ", "mohawk thin ", "small shades",],),
  //2348 ,),
  
  new Traits( "male, accessories" ,[ "peak spike ", "vape",],),
  //2349 ,),
  
  new Traits( "male, accessories" ,[ "luxurious beard ", "mole ", "peak spike ", "small shades",],),
  //2350 ,),
  
  new Traits( "female, accessories" ,[ "eye mask ", "mohawk dark",],),
  //2351 ,),
  
  new Traits( "male, accessories" ,[ "frumpy hair ", "nerd glasses",],),
  //2352 ,),
  
  new Traits( "male, accessories" ,[ "purple hair ", "silver chain ", "vr",],),
  //2353 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "clown eyes green",],),
  //2354 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "luxurious beard",],),
  //2355 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "hoodie ", "regular shades",],),
  //2356 ,),
  
  new Traits( "male, accessories" ,[ "mohawk thin ", "mole ", "normal beard black",],),
  //2357 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "classic shades ", "earring ", "purple lipstick",],),
  //2358 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "mole ", "wild blonde",],),
  //2359 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "wild white hair",],),
  //2360 ,),
  
  new Traits( "female, accessories" ,[ "headband ", "hot lipstick",],),
  //2361 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "front beard dark ", "rosy cheeks ", "small shades",],),
  //2362 ,),
  
  new Traits( "male, accessories" ,[ "headband ", "nerd glasses ", "normal beard",],),
  //2363 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "muttonchops ", "spots",],),
  //2364 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "mustache ", "nerd glasses ", "peak spike",],),
  //2365 ,),
  
  new Traits( "male, accessories" ,[ "horned rim glasses ", "mohawk",],),
  //2366 ,),
  
  new Traits( "male, accessories" ,[ "cap",],),
  //2367 ,),
  
  new Traits( "female, accessories" ,[ "purple lipstick ", "tiara",],),
  //2368 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "classic shades ", "normal beard black",],),
  //2369 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "half shaved",],),
  //2370 ,),
  
  new Traits( "female, accessories" ,[ "green eye shadow ", "pigtails",],),
  //2371 ,),
  
  new Traits( "female, accessories" ,[ "blonde short ", "green eye shadow",],),
  //2372 ,),
  
  new Traits( "male, accessories" ,[ "muttonchops ", "police cap",],),
  //2373 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "horned rim glasses",],),
  //2374 ,),
  
  new Traits( "male, accessories" ,[ "clown hair green ", "earring ", "mustache ", "pipe",],),
  //2375 ,),
  
  new Traits( "male, accessories" ,[ "handlebars ", "headband",],),
  //2376 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "front beard ", "rosy cheeks",],),
  //2377 ,),
  
  new Traits( "male, accessories" ,[ "handlebars ", "mole ", "wild hair",],),
  //2378 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "frown",],),
  //2379 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "eye mask ", "red mohawk",],),
  //2380 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "wild white hair",],),
  //2381 ,),
  
  new Traits( "female, accessories" ,[ "medical mask ", "straight hair blonde",],),
  //2382 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "goat ", "shaved head",],),
  //2383 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "straight hair",],),
  //2384 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "pipe ", "shadow beard",],),
  //2385 ,),
  
  new Traits( "ape , accessories" ,[ "headband ", "small shades",],),
  //2386 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "hot lipstick ", "rosy cheeks",],),
  //2387 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes blue ", "earring ", "mohawk dark",],),
  //2388 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "cigarette ", "mustache",],),
  //2389 ,),
  
  new Traits( "female, accessories" ,[ "half shaved ", "purple eye shadow",],),
  //2390 ,),
  
  new Traits( "female, accessories" ,[ "clown hair green",],),
  //2391 ,),
  
  new Traits( "male, accessories" ,[ "mohawk dark ", "regular shades",],),
  //2392 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "red mohawk",],),
  //2393 ,),
  
  new Traits( "female, accessories" ,[ "mohawk ", "welding goggles",],),
  //2394 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "blonde bob ", "horned rim glasses",],),
  //2395 ,),
  
  new Traits( "female, accessories" ,[ "mohawk dark",],),
  //2396 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "nerd glasses ", "purple lipstick ", "red mohawk",],),
  //2397 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "cigarette ", "mohawk ", "mole",],),
  //2398 ,),
  
  new Traits( "male, accessories" ,[ "eye mask ", "knitted cap",],),
  //2399 ,),
  
  new Traits( "female, accessories" ,[ "gold chain ", "messy hair",],),
  //2400 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "police cap ", "regular shades",],),
  //2401 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "earring ", "eye patch",],),
  //2402 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "headband",],),
  //2403 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "do-rag ", "small shades",],),
  //2404 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "goat ", "mohawk dark",],),
  //2405 ,),
  
  new Traits( "male, accessories" ,[ "luxurious beard ", "silver chain",],),
  //2406 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "knitted cap",],),
  //2407 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "cigarette ", "eye patch",],),
  //2408 ,),
  
  new Traits( "female, accessories" ,[ "mohawk thin ", "spots",],),
  //2409 ,),
  
  new Traits( "male, accessories" ,[ "eye mask ", "luxurious beard ", "shaved head",],),
  //2410 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "straight hair blonde",],),
  //2411 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "classic shades ", "front beard",],),
  //2412 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "green eye shadow ", "mole ", "wild hair",],),
  //2413 ,),
  
  new Traits( "male, accessories" ,[ "earring",],),
  //2414 ,),
  
  new Traits( "male, accessories" ,[ "messy hair ", "spots",],),
  //2415 ,),
  
  new Traits( "male, accessories" ,[ "fedora ", "normal beard black",],),
  //2416 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "normal beard ", "small shades",],),
  //2417 ,),
  
  new Traits( "female, accessories" ,[ "3d glasses ", "messy hair",],),
  //2418 ,),
  
  new Traits( "male, accessories" ,[ "buck teeth ", "front beard ", "frumpy hair",],),
  //2419 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "police cap ", "shadow beard",],),
  //2420 ,),
  
  new Traits( "male, accessories" ,[ "headband ", "smile ", "vape",],),
  //2421 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "pigtails",],),
  //2422 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes blue ", "hoodie ", "silver chain",],),
  //2423 ,),
  
  new Traits( "zombie, accessories" ,[ "bandana ", "earring ", "frown",],),
  //2424 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "mohawk",],),
  //2425 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "tiara",],),
  //2426 ,),
  
  new Traits( "male, accessories" ,[ "messy hair ", "mole",],),
  //2427 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "frumpy hair ", "regular shades",],),
  //2428 ,),
  
  new Traits( "female, accessories" ,[ "green eye shadow ", "hot lipstick ", "straight hair dark",],),
  //2429 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "big shades ", "mustache ", "vape",],),
  //2430 ,),
  
  new Traits( "female, accessories" ,[ "horned rim glasses ", "hot lipstick ", "knitted cap",],),
  //2431 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "wild white hair",],),
  //2432 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "handlebars ", "stringy hair",],),
  //2433 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "peak spike ", "vape",],),
  //2434 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "hoodie ", "horned rim glasses",],),
  //2435 ,),
  
  new Traits( "female, accessories" ,[ "blonde short ", "earring ", "purple lipstick",],),
  //2436 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "peak spike",],),
  //2437 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "luxurious beard",],),
  //2438 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "cowboy hat",],),
  //2439 ,),
  
  new Traits( "male, accessories" ,[ "clown nose ", "stringy hair",],),
  //2440 ,),
  
  new Traits( "male, accessories" ,[ "hoodie ", "smile ", "vape",],),
  //2441 ,),
  
  new Traits( "female, accessories" ,[ "blue eye shadow ", "messy hair ", "purple lipstick",],),
  //2442 ,),
  
  new Traits( "male, accessories" ,[ "horned rim glasses ", "purple hair",],),
  //2443 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "fedora",],),
  //2444 ,),
  
  new Traits( "female, accessories" ,[ "mole",],),
  //2445 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "crazy hair ", "earring",],),
  //2446 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes blue ", "earring ", "stringy hair",],),
  //2447 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "horned rim glasses",],),
  //2448 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "medical mask ", "police cap",],),
  //2449 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "luxurious beard ", "medical mask ", "mohawk thin",],),
  //2450 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "mohawk thin",],),
  //2451 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "headband ", "horned rim glasses ", "medical mask",],),
  //2452 ,),
  
  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "front beard",],),
  //2453 ,),
  
  new Traits( "female, accessories" ,[ "green eye shadow ", "purple lipstick ", "straight hair blonde",],),
  //2454 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "hot lipstick ", "straight hair blonde",],),
  //2455 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "normal beard",],),
  //2456 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "earring ", "front beard dark",],),
  //2457 ,),
  
  new Traits( "male, accessories" ,[ "knitted cap ", "shadow beard",],),
  //2458 ,),
  
  new Traits( "male, accessories" ,[ "big shades ", "goat ", "knitted cap",],),
  //2459 ,),
  
  new Traits( "ape , accessories" ,[ "bandana ", "vr",],),
  //2460 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "crazy hair ", "earring",],),
  //2461 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "messy hair",],),
  //2462 ,),
  
  new Traits( "male, accessories" ,[ "big beard ", "cap ", "mole",],),
  //2463 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "hoodie ", "luxurious beard",],),
  //2464 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "knitted cap ", "luxurious beard",],),
  //2465 ,),
  
  new Traits( "male, accessories" ,[ "smile ", "wild hair",],),
  //2466 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "tassle hat",],),
  //2467 ,),
  
  new Traits( "male, accessories" ,[ "knitted cap ", "muttonchops ", "vr",],),
  //2468 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "earring ", "horned rim glasses ", "smile",],),
  //2469 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "luxurious beard ", "stringy hair",],),
  //2470 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "smile",],),
  //2471 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "earring ", "horned rim glasses ", "mustache",],),
  //2472 ,),
  
  new Traits( "male, accessories" ,[ "knitted cap ", "luxurious beard",],),
  //2473 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "mole ", "nerd glasses ", "peak spike",],),
  //2474 ,),
  
  new Traits( "female, accessories" ,[ "clown hair green ", "clown nose",],),
  //2475 ,),
  
  new Traits( "female, accessories" ,[ "half shaved ", "regular shades",],),
  //2476 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "normal beard black",],),
  //2477 ,),
  
  new Traits( "female, accessories" ,[ "pilot helmet ", "pipe",],),
  //2478 ,),
  
  new Traits( "male, accessories" ,[ "top hat",],),
  //2479 ,),
  
  new Traits( "male, accessories" ,[ "mohawk dark ", "vape",],),
  //2480 ,),
  
  new Traits( "female, accessories" ,[ "bandana ", "regular shades",],),
  //2481 ,),
  
  new Traits( "male, accessories" ,[ "fedora ", "normal beard black",],),
  //2482 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "mohawk dark",],),
  //2483 ,),
  
  new Traits( "zombie , accessories" ,[ "classic shades ", "wild hair",],),
  //2484 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "purple hair",],),
  //2485 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "frumpy hair ", "purple eye shadow",],),
  //2486 ,),
  
  new Traits( "female, accessories" ,[ "knitted cap",],),
  //2487 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "clown hair green",],),
  //2488 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "shadow beard",],),
  //2489 ,),
  
  new Traits( "male, accessories" ,[ "pipe ", "shadow beard ", "small shades ", "vampire hair",],),
  //2490 ,),
  
  new Traits( "ape , accessories" ,[ "cap",],),
  //2491 ,),
  
  new Traits( "male, accessories" ,[ "big beard ", "do-rag ", "horned rim glasses",],),
  //2492 ,),
  
  new Traits( "male, accessories" ,[ "classic shades ", "mohawk",],),
  //2493 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "mohawk dark ", "smile",],),
  //2494 ,),
  
  new Traits( "male, accessories" ,[ "clown hair green ", "earring ", "mustache ", "vape",],),
  //2495 ,),
  
  new Traits( "female, accessories" ,[ "blonde bob ", "cigarette ", "earring ", "green eye shadow",],),
  //2496 ,),
  
  new Traits( "male, accessories" ,[ "handlebars ", "horned rim glasses ", "vape", "wild hair",],),
  //2497 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "classic shades ", "do-rag ", "shadow beard",],),
  //2498 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "normal beard black ", "wild hair",],),
  //2499 ,),
  
  new Traits( "male, accessories" ,[ "front beard ", "mohawk ", "regular shades",],),
  //2500 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "muttonchops ", "police cap",],),
  //2501 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "pigtails ", "regular shades",],),
  //2502 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "front beard ", "wild hair",],),
  //2503 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "do-rag ", "earring",],),
  //2504 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "crazy hair ", "earring ", "eye patch",],),
  //2505 ,),
  
  new Traits( "male, accessories" ,[ "vape", "wild hair",],),
  //2506 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "mohawk",],),
  //2507 ,),
  
  new Traits( "male, accessories" ,[ "police cap",],),
  //2508 ,),
  
  new Traits( "male, accessories" ,[ "front beard dark ", "top hat",],),
  //2509 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "frumpy hair ", "gold chain",],),
  //2510 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "mohawk",],),
  //2511 ,),
  
  new Traits( "male, accessories" ,[ "cap ", "regular shades ", "shadow beard",],),
  //2512 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "eye patch",],),
  //2513 ,),
  
  new Traits( "female, accessories" ,[ "crazy hair ", "earring",],),
  //2514 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "orange side ", "purple lipstick",],),
  //2515 ,),
  
  new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk thin",],),
  //2516 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "red mohawk",],),
  //2517 ,),
  
  new Traits( "male, accessories" ,[ "horned rim glasses ", "mohawk ", "mole ", "mustache",],),
  //2518 ,),
  
  new Traits( "male, accessories" ,[ "police cap ", "shadow beard",],),
  //2519 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "front beard ", "horned rim glasses",],),
  //2520 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "mohawk dark ", "purple lipstick",],),
  //2521 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "mohawk thin",],),
  //2522 ,),
  
  new Traits( "female, accessories" ,[ "big shades ", "purple lipstick ", "straight hair blonde",],),
  //2523 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "stringy hair",],),
  //2524 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "earring ", "tassle hat",],),
  //2525 ,),
  
  new Traits( "female, accessories" ,[ "purple lipstick",],),
  //2526 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "clown eyes blue ", "pink with hat",],),
  //2527 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "mohawk dark ", "shadow beard",],),
  //2528 ,),
  
  new Traits( "male, accessories" ,[ "mohawk ", "mustache ", "regular shades",],),
  //2529 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "knitted cap",],),
  //2530 ,),
  
  new Traits( "female, accessories" ,[ "purple lipstick ", "stringy hair ", "vr",],),
  //2531 ,),
  
  new Traits( "female, accessories" ,[ "blonde short ", "clown eyes green ", "earring",],),
  //2532 ,),
  
  new Traits( "female, accessories" ,[ "big shades ", "mole ", "purple lipstick ", "straight hair",],),
  //2533 ,),
  
  new Traits( "male, accessories" ,[ "luxurious beard ", "shaved head",],),
  //2534 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "shadow beard ", "shaved head",],),
  //2535 ,),
  
  new Traits( "male, accessories" ,[ "cowboy hat ", "eye patch",],),
  //2536 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "nerd glasses",],),
  //2537 ,),
  
  new Traits( "male, accessories" ,[ "front beard ", "horned rim glasses ", "shaved head",],),
  //2538 ,),
  
  new Traits( "male, accessories" ,[ "big beard ", "cap forward ", "earring",],),
  //2539 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "pilot helmet",],),
  //2540 ,),
  
  new Traits( "male, accessories" ,[ "mohawk dark ", "silver chain",],),
  //2541 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "do-rag ", "earring",],),
  //2542 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "messy hair",],),
  //2543 ,),
  
  new Traits( "female, accessories" ,[ "regular shades ", "tassle hat",],),
  //2544 ,),
  
  new Traits( "male, accessories" ,[ "mohawk ", "regular shades",],),
  //2545 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "straight hair dark",],),
  //2546 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "earring",],),
  //2547 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "nerd glasses ", "smile",],),
  //2548 ,),
  
  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "pilot helmet",],),
  //2549 ,),
  
  new Traits( "male, accessories" ,[ "goat ", "hoodie",],),
  //2550 ,),
  
  new Traits( "female, accessories" ,[ "medical mask ", "purple lipstick ", "red mohawk",],),
  //2551 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "headband ", "purple eye shadow",],),
  //2552 ,),
  
  new Traits( "male, accessories" ,[ "eye mask ", "knitted cap",],),
  //2553 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "frumpy hair",],),
  //2554 ,),
  
  new Traits( "female, accessories" ,[ "vr ", "wild hair",],),
  //2555 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "regular shades",],),
  //2556 ,),
  
  new Traits( "male, accessories" ,[ "do-rag ", "goat ", "mole",],),
  //2557 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "headband",],),
  //2558 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "messy hair ", "small shades",],),
  //2559 ,),
  
  new Traits( "zombie, accessories" ,[ "earring ", "front beard ", "headband ", "vr",],),
  //2560 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "earring",],),
  //2561 ,),
  
  new Traits( "female, accessories" ,[ "cigarette ", "green eye shadow ", "hot lipstick ", "knitted cap",],),
  //2562 ,),
  
  new Traits( "female, accessories" ,[ "earring ", "mohawk",],),
  //2563 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "front beard",],),
  //2564 ,),
  
  new Traits( "male, accessories" ,[ "mohawk thin ", "regular shades ", "shadow beard",],),
  //2565 ,),
  
  new Traits( "zombie , accessories" ,[ "messy hair ", "normal beard",],),
  //2566 ,),
  
  new Traits( "male, accessories" ,[ "cigarette ", "fedora ", "mustache",],),
  //2567 ,),
  
  new Traits( "male, accessories" ,[ "mole ", "wild hair",],),
  //2568 ,),
  
  new Traits( "male, accessories" ,[ "eye patch ", "shadow beard ", "shaved head",],),
  //2569 ,),
  
  new Traits( "male, accessories" ,[ "mustache ", "peak spike ", "vr",],),
  //2570 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "regular shades ", "smile",],),
  //2571 ,),
  
  new Traits( "male, accessories" ,[ "3d glasses ", "front beard ", "vampire hair",],),
  //2572 ,),
  
  new Traits( "male, accessories" ,[ "vampire hair",],),
  //2573 ,),
  
  new Traits( "male, accessories" ,[ "earring ", "goat ", "purple hair",],),
  //2574 ,),
  
  new Traits( "male, accessories" ,[ "clown eyes blue ", "stringy hair",],),
  //2575 ,),
  
  new Traits( "male, accessories" ,[ "big shades",],),
  //2576 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "eye mask ", "shadow beard",],),
  //2577 ,),
  
  new Traits( "female, accessories" ,[ "earring",],),
  //2578 ,),
  
  new Traits( "male, accessories" ,[ "cap forward ", "nerd glasses",],),
  //2579 ,),
  
  new Traits( "male, accessories" ,[ "mustache ", "peak spike",],),
  //2580 ,),
  
  new Traits( "male, accessories" ,[ "chinstrap ", "cowboy hat ", "regular shades",],),
  //2581 ,),
  
  new Traits( "male, accessories" ,[ "bandana ", "earring ", "goat",],),
  //2582 ,),
  
  new Traits( "female, accessories" ,[ "clown eyes blue ", "crazy hair",],),
  //2583 ,),


  new Traits( "male, accessories" ,[ "front beard ", "mohawk thin",],),
  //2584"
  
  new Traits( "male, accessories" ,[ "big beard ", "cigarette ", "headband",],),
  //2585"],),

  new Traits( "male, accessories" ,[ "eye patch ", "front beard dark ", "mohawk",],),
  //2586"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "headband",],),
  //2587"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "spots ", "tassle hat",],),
  //2588"],),

  new Traits( "female, accessories" ,[ "dark hair ", "rosy cheeks",],),
  //2589"],),
  
  
  new Traits( "male, accessories" ,[ "earring ", "fedora ", "muttonchops ", "nerd glasses",],),
  //2590"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "straight hair",],),
  //2591"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "vr",],),
  //2592"],),

  new Traits( "male, accessories" ,[ "bandana ", "eye patch ", "goat",],),
  //2593"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "frumpy hair",],),
  //2594"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "mole ", "stringy hair",],),
  //2595"],),

  new Traits( "female, accessories" ,[ "purple eye shadow",],),
  //2596"],),

  new Traits( "male, accessories" ,[ "mohawk ", "mustache",],),
  //2597"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "messy hair",],),
  //2598"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard ", "mohawk dark",],),
  //2599"],),

  new Traits( "male, accessories" ,[ "peak spike ", "regular shades",],),
  //2600"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "tiara",],),
  //2601"],),

  new Traits( "female, accessories" ,[ "red mohawk ", "vape",],),
  //2602"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "stringy hair",],),
  //2603"],),

  new Traits( "male, accessories" ,[ "handlebars ", "stringy hair",],),
  //2604"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "orange side",],),
  //2605"],),

  new Traits( "male, accessories" ,[ "headband ", "mole",],),
  //2606"],),

  new Traits( "male, accessories" ,[ "big shades ", "handlebars ", "headband",],),
  //2607"],),

  new Traits( "female, accessories" ,[ "classic shades ", "half shaved ", "hot lipstick ", "spots",],),
  //2608"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "normal beard ", "regular shades",],),
  //2609"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "crazy hair",],),
  //2610"],),

  new Traits( "male, accessories" ,[ "clown nose ", "front beard ", "mohawk thin",],),
  //2611"],),

  new Traits( "male, accessories" ,[ "handlebars ", "peak spike",],),
  //2612"],),

  new Traits( "female, accessories" ,[ "mole ", "pigtails ", "welding goggles",],),
  //2613"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "luxurious beard ", "police cap",],),
  //2614"],),

  new Traits( "male, accessories" ,[ "big shades ", "cap ", "earring",],),
  //2615"],),

  new Traits( "male, accessories" ,[ "hoodie ", "mustache",],),
  //2616"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk thin ", "vape",],),
  //2617"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "half shaved ", "purple lipstick",],),
  //2618"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "front beard dark ", "horned rim glasses ", "knitted cap",],),
  //2619"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "normal beard ", "wild hair",],),
  //2620"],),

  new Traits( "female, accessories" ,[ "earring ", "orange side",],),
  //2621"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "gold chain ", "messy hair",],),
  //2622"],),

  new Traits( "female, accessories" ,[ "big shades ", "earring ", "purple lipstick ", "wild white hair",],),
  //2623"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "wild white hair",],),
  //2624"],),

  new Traits( "male, accessories" ,[ "front beard ", "messy hair ", "regular shades",],),
  //2625"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "pink with hat",],),
  //2626"],),

  new Traits( "female, accessories" ,[ "bandana ", "eye mask",],),
  //2627"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "frumpy hair ", "nerd glasses",],),
  //2628"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "mohawk",],),
  //2629"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "regular shades",],),
  //2630"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "police cap ", "silver chain",],),
  //2631"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "mohawk dark ", "mole",],),
  //2632"],),

  new Traits( "male, accessories" ,[ "hoodie ", "regular shades",],),
  //2633"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "red mohawk",],),
  //2634"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "mustache",],),
  //2635"],),

  new Traits( "male, accessories" ,[ "do-rag ", "smile",],),
  //2636"],),

  new Traits( "male, accessories" ,[ "normal beard black ", "purple hair",],),
  //2637"],),

  new Traits( "female, accessories" ,[ "bandana ", "cigarette",],),
  //2638"],),

  new Traits( "male, accessories" ,[ "bandana ", "classic shades ", "frown ", "pipe ", "shadow beard",],),
  //2639"],),

  new Traits( "male, accessories" ,[ "earring ", "shadow beard ", "shaved head",],),
  //2640"],),

  new Traits( "male, accessories" ,[ "cigarette ", "cowboy hat ", "small shades",],),
  //2641"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "front beard ", "frumpy hair",],),
  //2642"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "pigtails",],),
  //2643"],),

  new Traits( "male, accessories" ,[ "handlebars ", "mohawk ", "smile",],),
  //2644"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "regular shades ", "wild white hair",],),
  //2645"],),

  new Traits( "female, accessories" ,[ "orange side",],),
  //2646"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "muttonchops",],),
  //2647"],),

  new Traits( "male, accessories" ,[ "frown ", "messy hair ", "shadow beard",],),
  //2648"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "wild blonde",],),
  //2649"],),

  new Traits( "male, accessories" ,[ "big shades ", "cap ", "mustache ", "silver chain",],),
  //2650"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "messy hair ", "nerd glasses",],),
  //2651"],),

  new Traits( "female, accessories" ,[ "bandana ", "hot lipstick ", "mole",],),
  //2652"],),

  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "handlebars ", "horned rim glasses",],),
  //2653"],),

  new Traits( "female, accessories" ,[ "big shades ", "earring ", "straight hair dark",],),
  //2654"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "clown nose ", "shaved head",],),
  //2655"],),

  new Traits( "male, accessories" ,[ "handlebars",],),
  //2656"],),

  new Traits( "male, accessories" ,[ "clown nose ", "fedora ", "pipe ", "regular shades ", "smile",],),
  //2657"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "purple eye shadow ", "red mohawk",],),
  //2658"],),

  new Traits( "female, accessories" ,[ "earring ", "mole ", "purple eye shadow ", "stringy hair",],),
  //2659"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "straight hair blonde",],),
  //2660"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "mole",],),
  //2661"],),

  new Traits( "male, accessories" ,[ "eye patch ", "luxurious beard ", "mohawk dark",],),
  //2662"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "wild hair",],),
  //2663"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "purple lipstick ", "wild white hair",],),
  //2664"],),

  new Traits( "male, accessories" ,[ "eye patch ", "purple hair",],),
  //2665"],),

  new Traits( "male, accessories" ,[ "bandana ", "small shades",],),
  //2666"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "frumpy hair",],),
  //2667"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "frumpy hair",],),
  //2668"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "shaved head",],),
  //2669"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "stringy hair",],),
  //2670"],),

  new Traits( "male, accessories" ,[ "headband ", "small shades",],),
  //2671"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "muttonchops ", "purple hair",],),
  //2672"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "horned rim glasses ", "muttonchops ", "pipe",],),
  //2673"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "mohawk thin",],),
  //2674"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "purple lipstick ", "stringy hair",],),
  //2675"],),

  new Traits( "female, accessories" ,[ "tiara",],),
  //2676"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "mole",],),
  //2677"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "normal beard black ", "wild hair",],),
  //2678"],),

  new Traits( "male, accessories" ,[ "goat ", "shaved head",],),
  //2679"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "choker ", "pink with hat ", "purple eye shadow",],),
  //2680"],),

  new Traits( "zombie, accessories" ,[ "cap ", "clown eyes blue",],),
  //2681"],),

  new Traits( "female, accessories" ,[ "purple eye shadow ", "tassle hat",],),
  //2682"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "peak spike",],),
  //2683"],),

  new Traits( "male, accessories" ,[ "muttonchops ", "vampire hair",],),
  //2684"],),

  new Traits( "male, accessories" ,[ "normal beard black ", "purple hair",],),
  //2685"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "clown eyes blue",],),
  //2686"],),

  new Traits( "male, accessories" ,[ "bandana ", "big shades ", "mole ", "mustache",],),
  //2687"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard ", "regular shades ", "vampire hair",],),
  //2688"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard black",],),
  //2689"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "pink with hat",],),
  //2690"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "shadow beard ", "smile",],),
  //2691"],),

  new Traits( "female, accessories" ,[ "eye patch ", "pipe ", "purple lipstick ", "wild hair",],),
  //2692"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "smile",],),
  //2693"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "wild hair",],),
  //2694"],),

  new Traits( "male, accessories" ,[ "do-rag ", "normal beard black ", "small shades",],),
  //2695"],),

  new Traits( "female, accessories" ,[ "mohawk ", "purple lipstick ", "regular shades",],),
  //2696"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "straight hair",],),
  //2697"],),

  new Traits( "female, accessories" ,[ "choker ", "straight hair blonde",],),
  //2698"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "shaved head",],),
  //2699"],),

  new Traits( "female, accessories" ,[ "big shades ", "messy hair ", "purple lipstick",],),
  //2700"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "peak spike ", "vape",],),
  //2701"],),

  new Traits( "male, accessories" ,[ "eye patch ", "shadow beard ", "wild hair",],),
  //2702"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "pink with hat",],),
  //2703"],),

  new Traits( "female, accessories" ,[ "cap ", "medical mask ", "silver chain",],),
  //2704"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "welding goggles",],),
  //2705"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "straight hair dark",],),
  //2706"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "headband",],),
  //2707"],),

  new Traits( "zombie, accessories" ,[ "bandana ", "earring",],),
  //2708"],),

  new Traits( "male, accessories" ,[ "messy hair ", "shadow beard",],),
  //2709"],),

  new Traits( "female, accessories" ,[ "earring ", "horned rim glasses ", "straight hair dark",],),
  //2710"],),

  new Traits( "ape, accessories" ,[ "cap forward ", "earring",],),
  //2711"],),

  new Traits( "female, accessories" ,[ "mohawk dark ", "spots",],),
  //2712"],),

  new Traits( "female, accessories" ,[ "blonde short ", "purple lipstick",],),
  //2713"],),

  new Traits( "female, accessories" ,[ "bandana ", "earring",],),
  //2714"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "luxurious beard ", "medical mask",],),
  //2715"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "hot lipstick ", "straight hair blonde",],),
  //2716"],),

  new Traits( "female, accessories" ,[ "pilot helmet ", "purple lipstick",],),
  //2717"],),

  new Traits( "male, accessories" ,[ "cap ", "front beard dark ", "frown",],),
  //2718"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "wild hair",],),
  //2719"],),

  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "messy hair",],),
  //2720"],),

  new Traits( "female, accessories" ,[ "eye mask ", "hot lipstick ", "pipe ", "straight hair",],),
  //2721"],),

  new Traits( "male, accessories" ,[ "muttonchops ", "wild hair",],),
  //2722"],),

  new Traits( "female, accessories" ,[ "big shades ", "earring ", "wild white hair",],),
  //2723"],),

  new Traits( "male, accessories" ,[ "handlebars ", "stringy hair",],),
  //2724"],),

  new Traits( "female, accessories" ,[ "dark hair ", "welding goggles",],),
  //2725"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora ", "luxurious beard ", "small shades",],),
  //2726"],),

  new Traits( "male, accessories" ,[ "classic shades ", "frown ", "shaved head",],),
  //2727"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "horned rim glasses ", "stringy hair",],),
  //2728"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "vape",],),
  //2729"],),

  new Traits( "female, accessories" ,[ "dark hair ", "regular shades",],),
  //2730"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "straight hair dark ", "vape",],),
  //2731"],),

  new Traits( "male, accessories" ,[ "do-rag ", "eye patch ", "normal beard black",],),
  //2732"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "shaved head",],),
  //2733"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "straight hair dark",],),
  //2734"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "hot lipstick ", "vape",],),
  //2735"],),

  new Traits( "female, accessories" ,[ "earring ", "wild blonde",],),
  //2736"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "luxurious beard ", "wild hair",],),
  //2737"],),

  new Traits( "male, accessories" ,[ "cigarette ", "clown eyes green ", "stringy hair",],),
  //2738"],),

  new Traits( "male, accessories" ,[ "cap ", "earring ", "goat ", "mole",],),
  //2739"],),

  new Traits( "female, accessories" ,[ "gold chain ", "purple lipstick ", "straight hair blonde",],),
  //2740"],),

  new Traits( "female, accessories" ,[ "nerd glasses ", "orange side",],),
  //2741"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "eye patch ", "wild white hair",],),
  //2742"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "regular shades ", "straight hair dark",],),
  //2743"],),

  new Traits( "male, accessories" ,[ "mohawk ", "shadow beard ", "small shades",],),
  //2744"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "normal beard ", "peak spike ", "pipe",],),
  //2745"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "nerd glasses",],),
  //2746"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "pipe ", "purple hair",],),
  //2747"],),

  new Traits( "male, accessories" ,[ "top hat ", "vape",],),
  //2748"],),

  new Traits( "male, accessories" ,[ "big shades ", "headband",],),
  //2749"],),

  new Traits( "male, accessories" ,[ "cap forward ", "mole ", "nerd glasses",],),
  //2750"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "earring ", "purple eye shadow",],),
  //2751"],),

  new Traits( "male, accessories" ,[ "small shades ", "wild hair",],),
  //2752"],),

  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "gold chain ", "police cap",],),
  //2753"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "frumpy hair",],),
  //2754"],),

  new Traits( "female, accessories" ,[ "cigarette ", "green eye shadow ", "messy hair",],),
  //2755"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "hot lipstick ", "mohawk dark",],),
  //2756"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "medical mask",],),
  //2757"],),

  new Traits( "male, accessories" ,[ "cap forward ", "cigarette ", "clown eyes green",],),
  //2758"],),

  new Traits( "female, accessories" ,[ "pilot helmet",],),
  //2759"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "pigtails",],),
  //2760"],),

  new Traits( "female, accessories" ,[ "gold chain ", "nerd glasses ", "straight hair dark",],),
  //2761"],),

  new Traits( "male, accessories" ,[ "do-rag ", "silver chain",],),
  //2762"],),

  new Traits( "male, accessories" ,[ "cap ", "frown ", "handlebars",],),
  //2763"],),

  new Traits( "male, accessories" ,[ "eye patch ", "normal beard ", "wild hair",],),
  //2764"],),

  new Traits( "male, accessories" ,[ "cap forward ", "muttonchops",],),
  //2765"],),

  new Traits( "male, accessories" ,[ "clown nose ", "police cap ", "vr",],),
  //2766"],),

  new Traits( "male, accessories" ,[ "do-rag ", "regular shades ", "rosy cheeks",],),
  //2767"],),

  new Traits( "male, accessories" ,[ "nerd glasses",],),
  //2768"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "peak spike ", "shadow beard",],),
  //2769"],),

  new Traits( "male, accessories" ,[ "cigarette ", "luxurious beard ", "mohawk thin",],),
  //2770"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "shadow beard",],),
  //2771"],),

  new Traits( "female, accessories" ,[ "bandana ", "black lipstick ", "clown eyes green ", "earring",],),
  //2772"],),

  new Traits( "male, accessories" ,[ "medical mask ", "mohawk",],),
  //2773"],),

  new Traits( "male, accessories" ,[ "earring ", "nerd glasses ", "stringy hair",],),
  //2774"],),

  new Traits( "female, accessories" ,[ "earring ", "headband",],),
  //2775"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk ", "spots",],),
  //2776"],),

  new Traits( "male, accessories" ,[ "normal beard ", "shaved head ", "small shades",],),
  //2777"],),

  new Traits( "male, accessories" ,[ "big shades ", "front beard ", "messy hair",],),
  //2778"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "handlebars",],),
  //2779"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "nerd glasses",],),
  //2780"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "red mohawk",],),
  //2781"],),

  new Traits( "female, accessories" ,[ "classic shades ", "purple lipstick ", "stringy hair",],),
  //2782"],),

  new Traits( "male, accessories" ,[ "bandana ", "shadow beard",],),
  //2783"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "crazy hair ", "normal beard black",],),
  //2784"],),

  new Traits( "male, accessories" ,[ "eye patch ", "knitted cap ", "normal beard",],),
  //2785"],),

  new Traits( "male, accessories" ,[ "bandana ", "cigarette ", "earring ", "horned rim glasses",],),
  //2786"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk dark ", "purple eye shadow",],),
  //2787"],),

  new Traits( "male, accessories" ,[ "classic shades ", "do-rag ", "front beard ", "mole",],),
  //2788"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "shadow beard ", "vampire hair",],),
  //2789"],),

  new Traits( "male, accessories" ,[ "normal beard ", "wild hair",],),
  //2790"],),

  new Traits( "male, accessories" ,[ "handlebars ", "mohawk thin",],),
  //2791"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "silver chain ", "straight hair",],),
  //2792"],),

  new Traits( "female, accessories" ,[ "blonde short ", "clown nose ", "nerd glasses",],),
  //2793"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cigarette ", "messy hair",],),
  //2794"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "rosy cheeks ", "wild blonde",],),
  //2795"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "peak spike ", "shadow beard",],),
  //2796"],),

  new Traits( "male, accessories" ,[ "goat ", "horned rim glasses ", "mohawk thin",],),
  //2797"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "eye patch",],),
  //2798"],),

  new Traits( "female, accessories" ,[ "earring ", "horned rim glasses ", "wild hair",],),
  //2799"],),

  new Traits( "female, accessories" ,[ "orange side",],),
  //2800"],),

  new Traits( "male, accessories" ,[ "messy hair ", "small shades",],),
  //2801"],),

  new Traits( "male, accessories" ,[ "big shades ", "stringy hair",],),
  //2802"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "knitted cap ", "regular shades",],),
  //2803"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "shaved head ", "spots",],),
  //2804"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "police cap",],),
  //2805"],),

  new Traits( "male, accessories" ,[ "goat ", "purple hair",],),
  //2806"],),

  new Traits( "female, accessories" ,[ "cap ", "earring ", "hot lipstick ", "vr",],),
  //2807"],),

  new Traits( "female, accessories" ,[ "knitted cap ", "purple lipstick",],),
  //2808"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "normal beard",],),
  //2809"],),

  new Traits( "male, accessories" ,[ "do-rag ", "nerd glasses",],),
  //2810"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "purple lipstick ", "wild blonde",],),
  //2811"],),

  new Traits( "female, accessories" ,[ "cap ", "purple lipstick ", "vape",],),
  //2812"],),

  new Traits( "female, accessories" ,[ "blonde short ", "hot lipstick",],),
  //2813"],),

  new Traits( "female, accessories" ,[ "earring ", "half shaved ", "hot lipstick ", "vape",],),
  //2814"],),

  new Traits( "female, accessories" ,[ "earring ", "nerd glasses ", "purple lipstick ", "straight hair",],),
  //2815"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "clown nose ", "straight hair dark",],),
  //2816"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "messy hair",],),
  //2817"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard black ", "stringy hair",],),
  //2818"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "horned rim glasses ", "mole ", "vampire hair",],),
  //2819"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "bandana ", "luxurious beard",],),
  //2820"],),

  new Traits( "female, accessories" ,[ "earring ", "stringy hair",],),
  //2821"],),

  new Traits( "female, accessories" ,[ "purple eye shadow ", "stringy hair",],),
  //2822"],),

  new Traits( "male, accessories" ,[ "hoodie ", "vr",],),
  //2823"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "mustache",],),
  //2824"],),
  
  
  new Traits( "male, accessories" ,[ "bandana ", "handlebars ", "small shades",],),
  //2825"],),

  new Traits( "female, accessories" ,[ "earring ", "frumpy hair ", "vr",],),
  //2826"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora",],),
  //2827"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "pigtails",],),
  //2828"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "blue eye shadow ", "earring",],),
  //2829"],),

  new Traits( "male, accessories" ,[ "cigarette ", "classic shades ", "earring ", "peak spike",],),
  //2830"],),

  new Traits( "female, accessories" ,[ "big shades ", "black lipstick ", "wild white hair",],),
  //2831"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "straight hair",],),
  //2832"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "front beard",],),
  //2833"],),

  new Traits( "male, accessories" ,[ "fedora ", "front beard",],),
  //2834"],),

  new Traits( "male, accessories" ,[ "earring ", "nerd glasses ", "normal beard black ", "peak spike",],),
  //2835"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "welding goggles ", "wild white hair",],),
  //2836"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "stringy hair",],),
  //2837"],),

  new Traits( "male, accessories" ,[ "cap ", "cigarette",],),
  //2838"],),

  new Traits( "female, accessories" ,[ "classic shades ", "mohawk",],),
  //2839"],),

  new Traits( "male, accessories" ,[ "cap forward ", "horned rim glasses",],),
  //2840"],),

  new Traits( "female, accessories" ,[ "spots ", "straight hair blonde",],),
  //2841"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "normal beard",],),
  //2842"],),

  new Traits( "female, accessories" ,[ "bandana ", "black lipstick ", "earring ", "eye mask ", "vape",],),
  //2843"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "pilot helmet",],),
  //2844"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "earring ", "eye patch",],),
  //2845"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "messy hair",],),
  //2846"],),

  new Traits( "male, accessories" ,[ "earring ", "knitted cap ", "nerd glasses",],),
  //2847"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "mustache",],),
  //2848"],),

  new Traits( "female, accessories" ,[ "headband ", "regular shades",],),
  //2849"],),

  new Traits( "female, accessories" ,[ "earring ", "messy hair",],),
  //2850"],),

  new Traits( "male, accessories" ,[ "earring ", "police cap",],),
  //2851"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "regular shades ", "wild white hair",],),
  //2852"],),

  new Traits( "male, accessories" ,[ "normal beard ", "wild hair",],),
  //2853"],),

  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "police cap",],),
  //2854"],),

  new Traits( "male, accessories" ,[ "handlebars ", "mohawk dark",],),
  //2855"],),

  new Traits( "male, accessories" ,[ "eye mask ", "peak spike ", "pipe",],),
  //2856"],),

  new Traits( "female, accessories" ,[ "cigarette ", "crazy hair ", "welding goggles",],),
  //2857"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "mohawk dark ", "purple lipstick",],),
  //2858"],),

  new Traits( "male, accessories" ,[ "big beard ", "headband ", "small shades",],),
  //2859"],),

  new Traits( "female, accessories" ,[ "mohawk ", "regular shades",],),
  //2860"],),

  new Traits( "male, accessories" ,[ "mole",],),
  //2861"],),

  new Traits( "male, accessories" ,[ "headband ", "muttonchops",],),
  //2862"],),

  new Traits( "male, accessories" ,[ "police cap ", "silver chain",],),
  //2863"],),

  new Traits( "male, accessories" ,[ "eye mask ", "knitted cap ", "mustache",],),
  //2864"],),

  new Traits( "male, accessories" ,[ "fedora ", "handlebars",],),
  //2865"],),

  new Traits( "male, accessories" ,[ "bandana ", "classic shades ", "earring ", "muttonchops",],),
  //2866"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "pink with hat",],),
  //2867"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "peak spike",],),
  //2868"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "mohawk dark",],),
  //2869"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "knitted cap",],),
  //2870"],),

  new Traits( "male, accessories" ,[ "cigarette ", "horned rim glasses ", "messy hair",],),
  //2871"],),

  new Traits( "male, accessories" ,[ "police cap ", "silver chain ", "small shades",],),
  //2872"],),

  new Traits( "male, accessories" ,[ "cigarette ", "eye mask ", "vampire hair",],),
  //2873"],),

  new Traits( "male, accessories" ,[ "clown nose ", "crazy hair ", "eye patch",],),
  //2874"],),

  new Traits( "male, accessories" ,[ "handlebars ", "shaved head",],),
  //2875"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "stringy hair ", "vape",],),
  //2876"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "front beard dark",],),
  //2877"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "peak spike ", "pipe",],),
  //2878"],),

  new Traits( "male, accessories" ,[ "muttonchops ", "purple hair",],),
  //2879"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "regular shades",],),
  //2880"],),

  new Traits( "male, accessories" ,[ "goat ", "regular shades ", "shaved head",],),
  //2881"],),

  new Traits( "male, accessories" ,[ "earring ", "pipe",],),
  //2882"],),

  new Traits( "male, accessories" ,[ "messy hair ", "vr",],),
  //2883"],),

  new Traits( "female, accessories" ,[ "pilot helmet ", "vape",],),
  //2884"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "mole ", "shadow beard ", "small shades",],),
  //2885"],),

  new Traits( "male, accessories" ,[ "cigarette ", "hoodie ", "luxurious beard",],),
  //2886"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "top hat",],),
  //2887"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "mohawk dark",],),
  //2888"],),

  new Traits( "female, accessories" ,[ "cigarette ", "pilot helmet ", "purple lipstick",],),
  //2889"],),

  new Traits( "alien ", accessories" ,[ "cap",],),
  //2890"],),

  new Traits( "female, accessories" ,[ "regular shades ", "tiara",],),
  //2891"],),

  new Traits( "male, accessories" ,[ "normal beard ", "top hat ", "vr",],),
  //2892"],),

  new Traits( "female, accessories" ,[ "earring ", "nerd glasses ", "wild blonde",],),
  //2893"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "frown ", "gold chain ", "hoodie",],),
  //2894"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cowboy hat",],),
  //2895"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "straight hair dark",],),
  //2896"],),

  new Traits( "male, accessories" ,[ "big shades ", "headband",],),
  //2897"],),

  new Traits( "male, accessories" ,[ "big shades ", "do-rag ", "earring",],),
  //2898"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "purple hair",],),
  //2899"],),

  new Traits( "female, accessories" ,[ "earring ", "pilot helmet",],),
  //2900"],),

  new Traits( "male, accessories" ,[ "cap ", "cigarette ", "normal beard black ", "regular shades",],),
  //2901"],),

  new Traits( "male, accessories" ,[ "do-rag ", "shadow beard",],),
  //2902"],),

  new Traits( "female, accessories" ,[ "classic shades ", "earring ", "hot lipstick ", "mohawk dark",],),
  //2903"],),

  new Traits( "female, accessories" ,[ "bandana ", "choker ", "clown eyes blue ", "hot lipstick",],),
  //2904"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "knitted cap",],),
  //2905"],),

  new Traits( "male, accessories" ,[ "eye patch ", "front beard dark ", "knitted cap",],),
  //2906"],),

  new Traits( "male, accessories" ,[ "eye patch ", "goat ", "messy hair",],),
  //2907"],),

  new Traits( "male, accessories" ,[ "eye mask ", "wild hair",],),
  //2908"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "pilot helmet",],),
  //2909"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "top hat",],),
  //2910"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "frumpy hair ", "medical mask",],),
  //2911"],),

  new Traits( "male, accessories" ,[ "shadow beard ", "shaved head",],),
  //2912"],),

  new Traits( "male, accessories" ,[ "front beard ", "small shades ", "stringy hair",],),
  //2913"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "hot lipstick",],),
  //2914"],),

  new Traits( "female, accessories" ,[ "bandana ", "clown eyes green ", "earring ", "purple lipstick",],),
  //2915"],),

  new Traits( "male, accessories" ,[ "bandana ", "clown nose ", "goat",],),
  //2916"],),

  new Traits( "female, accessories" ,[ "bandana ", "purple lipstick",],),
  //2917"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "tassle hat ", "vape",],),
  //2918"],),

  new Traits( "female, accessories" ,[ "mole ", "straight hair dark",],),
  //2919"],),

  new Traits( "female, accessories" ,[ "nerd glasses ", "straight hair dark",],),
  //2920"],),

  new Traits( "male, accessories" ,[ "cigarette ", "shaved head",],),
  //2921"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cap ", "earring",],),
  //2922"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "regular shades ", "shadow beard ", "stringy hair",],),
  //2923"],),

  new Traits( "ape, accessories" ,[ "hoodie",],),
  //2924"],),

  new Traits( "male, accessories" ,[ "earring ", "nerd glasses ", "police cap",],),
  //2925"],),

  new Traits( "male, accessories" ,[ "messy hair ", "mustache ", "nerd glasses",],),
  //2926"],),

  new Traits( "male, accessories" ,[ "normal beard",],),
  //2927"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "nerd glasses",],),
  //2928"],),

  new Traits( "male, accessories" ,[ "eye patch ", "frumpy hair",],),
  //2929"],),

  new Traits( "male, accessories" ,[ "big shades ", "clown hair green",],),
  //2930"],),

  new Traits( "male, accessories" ,[ "shadow beard ", "stringy hair",],),
  //2931"],),

  new Traits( "male, accessories" ,[ "front beard",],),
  //2932"],),

  new Traits( "male, accessories" ,[ "bandana ", "cigarette ", "earring",],),
  //2933"],),

  new Traits( "male, accessories" ,[ "goat ", "peak spike",],),
  //2934"],),

  new Traits( "male, accessories" ,[ "big beard ", "cap forward ", "classic shades ", "earring",],),
  //2935"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "goat ", "horned rim glasses",],),
  //2936"],),

  new Traits( "female, accessories" ,[ "purple eye shadow ", "purple lipstick ", "stringy hair",],),
  //2937"],),

  new Traits( "zombie, accessories" ,[ "wild hair",],),
  //2938"],),

  new Traits( "male, accessories" ,[ "earring ", "knitted cap",],),
  //2939"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "clown eyes blue ", "earring ", "hot lipstick ", "spots",],),
  //2940"],),

  new Traits( "female, accessories" ,[ "bandana ", "green eye shadow",],),
  //2941"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "spots",],),
  //2942"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "hot lipstick ", "stringy hair",],),
  //2943"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "nerd glasses ", "shadow beard",],),
  //2944"],),

  new Traits( "female, accessories" ,[ "earring ", "purple eye shadow ", "purple lipstick ", "straight hair dark",],),
  //2945"],),

  new Traits( "female, accessories" ,[ "classic shades ", "dark hair ", "earring",],),
  //2946"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "front beard dark ", "small shades",],),
  //2947"],),

  new Traits( "male, accessories" ,[ "eye mask ", "wild hair",],),
  //2948"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "medical mask ", "mohawk thin",],),
  //2949"],),

  new Traits( "female, accessories" ,[ "headband",],),
  //2950"],),

  new Traits( "male, accessories" ,[ "police cap ", "smile",],),
  //2951"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "mohawk dark",],),
  //2952"],),

  new Traits( "male, accessories" ,[ "normal beard black ", "regular shades ", "vape", "wild hair",],),
  //2953"],),

  new Traits( "female, accessories" ,[ "vr ", "wild blonde",],),
  //2954"],),

  new Traits( "male, accessories" ,[ "clown nose ", "front beard ", "frumpy hair",],),
  //2955"],),

  new Traits( "male, accessories" ,[ "messy hair ", "regular shades ", "shadow beard",],),
  //2956"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "mohawk ", "mole",],),
  //2957"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "pink with hat",],),
  //2958"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "muttonchops ", "shaved head",],),
  //2959"],),

  new Traits( "female, accessories" ,[ "medical mask ", "tassle hat",],),
  //2960"],),

  new Traits( "male, accessories" ,[ "big beard ", "frown ", "mole ", "wild hair",],),
  //2961"],),

  new Traits( "male, accessories" ,[ "cigarette ", "clown eyes green ", "crazy hair ", "normal beard black",],),
  //2962"],),

  new Traits( "female, accessories" ,[ "mohawk ", "purple eye shadow ", "purple lipstick",],),
  //2963"],),

  new Traits( "male, accessories" ,[ "beanie",],),
  //2964"],),
  
  
  new Traits( "male, accessories" ,[ "horned rim glasses ", "normal beard ", "shaved head",],),
  //2965"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "knitted cap ", "pipe",],),
  //2966"],),

  new Traits( "zombie, accessories" ,[ "chinstrap ", "mohawk thin",],),
  //2967"],),

  new Traits( "female, accessories" ,[ "eye mask ", "mohawk dark ", "vape",],),
  //2968"],),

  new Traits( "female, accessories" ,[ "classic shades ", "frumpy hair ", "hot lipstick",],),
  //2969"],),

  new Traits( "male, accessories" ,[ "earring ", "shadow beard ", "stringy hair",],),
  //2970"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mole ", "peak spike",],),
  //2971"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "messy hair",],),
  //2972"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "purple lipstick ", "vr",],),
  //2973"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "crazy hair",],),
  //2974"],),

  new Traits( "male, accessories" ,[ "cap forward ", "muttonchops",],),
  //2975"],),

  new Traits( "male, accessories" ,[ "headband ", "regular shades",],),
  //2976"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "hot lipstick ", "straight hair dark",],),
  //2977"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "pink with hat ", "regular shades",],),
  //2978"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "wild hair",],),
  //2979"],),

  new Traits( "male, accessories" ,[ "cap forward ", "mustache ", "vr",],),
  //2980"],),

  new Traits( "female, accessories" ,[ "mohawk thin ", "welding goggles",],),
  //2981"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "medical mask",],),
  //2982"],),

  new Traits( "male, accessories" ,[ "earring ", "regular shades ", "shaved head",],),
  //2983"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "red mohawk ", "regular shades",],),
  //2984"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "fedora",],),
  //2985"],),

  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "messy hair",],),
  //2986"],),

  new Traits( "male, accessories" ,[ "mustache ", "shaved head",],),
  //2987"],),

  new Traits( "male, accessories" ,[ "cigarette ", "frumpy hair ", "normal beard black",],),
  //2988"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "shaved head",],),
  //2989"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "purple hair",],),
  //2990"],),

  new Traits( "male, accessories" ,[ "front beard ", "mohawk thin",],),
  //2991"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "police cap ", "small shades",],),
  //2992"],),

  new Traits( "male, accessories" ,[ "do-rag ", "front beard dark ", "horned rim glasses",],),
  //2993"],),

  new Traits( "female, accessories" ,[ "blonde short ", "hot lipstick ", "nerd glasses",],),
  //2994"],),

  new Traits( "male, accessories" ,[ "eye patch",],),
  //2995"],),

  new Traits( "male, accessories" ,[ "do-rag ", "handlebars",],),
  //2996"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "clown hair green",],),
  //2997"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora ", "shadow beard",],),
  //2998"],),

  new Traits( "male, accessories" ,[ "eye patch ", "front beard dark ", "stringy hair",],),
  //2999"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "normal beard",],),
  //3000"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "vampire hair",],),
  //3001"],),

  new Traits( "female, accessories" ,[ "mohawk ", "purple eye shadow",],),
  //3002"],),

  new Traits( "male, accessories" ,[ "do-rag ", "front beard",],),
  //3003"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk ", "nerd glasses ", "purple lipstick",],),
  //3004"],),

  new Traits( "female, accessories" ,[ "messy hair ", "welding goggles",],),
  //3005"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "front beard",],),
  //3006"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "wild hair",],),
  //3007"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "tassle hat",],),
  //3008"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "earring ", "normal beard ", "peak spike",],),
  //3009"],),

  new Traits( "male, accessories" ,[ "shadow beard ", "vampire hair",],),
  //3010"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "normal beard ", "pipe ", "small shades ", "vampire hair",],),
  //3011"],),

  new Traits( "male, accessories" ,[ "gold chain ", "stringy hair",],),
  //3012"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "gold chain ", "stringy hair",],),
  //3013"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "shadow beard ", "wild hair",],),
  //3014"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "hot lipstick ", "welding goggles",],),
  //3015"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "messy hair ", "normal beard black ", "smile",],),
  //3016"],),

  new Traits( "male, accessories" ,[ "big beard ", "eye mask ", "frown ", "knitted cap",],),
  //3017"],),

  new Traits( "male, accessories" ,[ "cigarette ", "normal beard ", "wild hair",],),
  //3018"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "eye patch ", "mohawk dark",],),
  //3019"],),

  new Traits( "male, accessories" ,[ "cigarette ", "do-rag ", "luxurious beard",],),
  //3020"],),

  new Traits( "male, accessories" ,[ "handlebars ", "messy hair ", "vr",],),
  //3021"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "hoodie",],),
  //3022"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "shadow beard",],),
  //3023"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "vr",],),
  //3024"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "knitted cap",],),
  //3025"],),

  new Traits( "female, accessories" ,[ "blonde short ", "horned rim glasses",],),
  //3026"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "bandana ", "front beard dark",],),
  //3027"],),

  new Traits( "male, accessories" ,[ "bandana ", "eye patch ", "shadow beard",],),
  //3028"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "red mohawk",],),
  //3029"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "stringy hair",],),
  //3030"],),

  new Traits( "female, accessories" ,[ "nerd glasses ", "tassle hat",],),
  //3031"],),

  new Traits( "female, accessories" ,[ "rosy cheeks ", "wild blonde",],),
  //3032"],),

  new Traits( "male, accessories" ,[ "cigarette ", "do-rag ", "shadow beard",],),
  //3033"],),

  new Traits( "female, accessories" ,[ "bandana ", "green eye shadow ", "hot lipstick",],),
  //3034"],),

  new Traits( "male, accessories" ,[ "handlebars ", "nerd glasses ", "wild hair",],),
  //3035"],),

  new Traits( "male, accessories" ,[ "eye patch ", "luxurious beard ", "peak spike",],),
  //3036"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "hot lipstick",],),
  //3037"],),

  new Traits( "female, accessories" ,[ "cap ", "cigarette ", "spots",],),
  //3038"],),

  new Traits( "male, accessories" ,[ "frown ", "hoodie ", "mustache",],),
  //3039"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "knitted cap ", "nerd glasses",],),
  //3040"],),

  new Traits( "male, accessories" ,[ "mustache ", "purple hair",],),
  //3041"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes blue ", "mohawk",],),
  //3042"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "straight hair blonde ", "vape",],),
  //3043"],),

  new Traits( "female, accessories" ,[ "classic shades ", "straight hair dark",],),
  //3044"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "peak spike ", "shadow beard",],),
  //3045"],),

  new Traits( "male, accessories" ,[ "cap ", "classic shades ", "earring",],),
  //3046"],),

  new Traits( "male, accessories" ,[ "earring ", "shadow beard ", "wild hair",],),
  //3047"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "messy hair",],),
  //3048"],),

  new Traits( "male, accessories" ,[ "goat ", "hoodie",],),
  //3049"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "stringy hair",],),
  //3050"],),

  new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "red mohawk",],),
  //3051"],),

  new Traits( "male, accessories" ,[ "cap ", "medical mask ", "normal beard black",],),
  //3052"],),

  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "muttonchops",],),
  //3053"],),

  new Traits( "male, accessories" ,[ "messy hair ", "small shades",],),
  //3054"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "nerd glasses ", "peak spike",],),
  //3055"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "small shades",],),
  //3056"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "hot lipstick ", "pink with hat",],),
  //3057"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "purple eye shadow",],),
  //3058"],),

  new Traits( "female, accessories" ,[ "earring ", "headband",],),
  //3059"],),

  new Traits( "female, accessories" ,[ "pigtails",],),
  //3060"],),

  new Traits( "male, accessories" ,[ "big shades ", "hoodie",],),
  //3061"],),

  new Traits( "male, accessories" ,[ "earring ", "luxurious beard ", "shaved head",],),
  //3062"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "handlebars",],),
  //3063"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "earring ", "horned rim glasses",],),
  //3064"],),

  new Traits( "male, accessories" ,[ "regular shades ", "wild hair",],),
  //3065"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "earring ", "headband",],),
  //3066"],),

  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "goat ", "horned rim glasses",],),
  //3067"],),

  new Traits( "male, accessories" ,[ "shadow beard ", "small shades ", "wild hair",],),
  //3068"],),

  new Traits( "male, accessories" ,[ "eye patch ", "knitted cap",],),
  //3069"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk thin",],),
  //3070"],),

  new Traits( "female, accessories" ,[ "clown hair green ", "hot lipstick",],),
  //3071"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "shaved head",],),
  //3072"],),

  new Traits( "male, accessories" ,[ "bandana ", "big beard ", "eye mask",],),
  //3073"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "earring ", "purple hair ", "vape",],),
  //3074"],),

  new Traits( "male, accessories" ,[ "do-rag ", "eye mask ", "pipe",],),
  //3075"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "mohawk dark",],),
  //3076"],),

  new Traits( "male, accessories" ,[ "classic shades ", "cowboy hat",],),
  //3077"],),

  new Traits( "female, accessories" ,[ "purple eye shadow ", "purple lipstick ", "wild blonde",],),
  //3078"],),

  new Traits( "female, accessories" ,[ "eye mask ", "tassle hat",],),
  //3079"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "front beard",],),
  //3080"],),

  new Traits( "male, accessories" ,[ "classic shades ", "knitted cap",],),
  //3081"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "mohawk dark",],),
  //3082"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "cowboy hat",],),
  //3083"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk dark ", "regular shades ", "rosy cheeks",],),
  //3084"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "normal beard black ", "vr",],),
  //3085"],),

  new Traits( "male, accessories" ,[ "cap ", "mole ", "regular shades",],),
  //3086"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "hot lipstick ", "tassle hat",],),
  //3087"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard black ", "top hat ", "vr",],),
  //3088"],),

  new Traits( "female, accessories" ,[ "cap ", "earring",],),
  //3089"],),

  new Traits( "male, accessories" ,[ "classic shades ", "frown ", "luxurious beard ", "mohawk",],),
  //3090"],),

  new Traits( "male, accessories" ,[ "classic shades ", "muttonchops ", "peak spike",],),
  //3091"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "headband",],),
  //3092"],),

  new Traits( "male, accessories" ,[ "bandana ", "horned rim glasses",],),
  //3093"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "classic shades ", "muttonchops ", "stringy hair",],),
  //3094"],),

  new Traits( "male, accessories" ,[ "cigarette ", "knitted cap ", "normal beard black",],),
  //3095"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "pink with hat ", "vape",],),
  //3096"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard ", "police cap",],),
  //3097"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk thin ", "nerd glasses ", "pipe",],),
  //3098"],),

  new Traits( "male, accessories" ,[ "bandana ", "chinstrap ", "earring ", "spots",],),
  //3099"],),

  new Traits( "alien, accessories" ,[ "headband",],),
  //3100"],),

  new Traits( "male, accessories" ,[ "hoodie ", "nerd glasses ", "shadow beard",],),
  //3101"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "pink with hat",],),
  //3102"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "shadow beard",],),
  //3103"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "mohawk dark",],),
  //3104"],),

  new Traits( "female, accessories" ,[ "welding goggles",],),
  //3105"],),

  new Traits( "male, accessories" ,[ "beanie ", "shadow beard",],),
  //3106"],),

  new Traits( "male, accessories" ,[ "beanie ", "big beard ", "earring",],),
  //3107"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "vr",],),
  //3108"],),

  new Traits( "female, accessories" ,[ "cap ", "nerd glasses ", "purple lipstick",],),
  //3109"],),

  new Traits( "female, accessories" ,[ "bandana ", "clown eyes blue ", "earring",],),
  //3110"],),

  new Traits( "female, accessories" ,[ "knitted cap",],),
  //3111"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "cigarette ", "hot lipstick ", "mole ", "straight hair blonde",],),
  //3112"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "dark hair ", "purple lipstick",],),
  //3113"],),

  new Traits( "male, accessories" ,[ "classic shades ", "knitted cap",],),
  //3114"],),

  new Traits( "male, accessories" ,[ "goat ", "mohawk thin ", "regular shades",],),
  //3115"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "clown eyes blue ", "hot lipstick",],),
  //3116"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "frown ", "regular shades",],),
  //3117"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "knitted cap",],),
  //3118"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "horned rim glasses ", "wild white hair",],),
  //3119"],),

  new Traits( "male, accessories" ,[ "cap forward ", "front beard dark ", "medical mask",],),
  //3120"],),

  new Traits( "male, accessories" ,[ "eye mask ", "stringy hair",],),
  //3121"],),

  new Traits( "male, accessories" ,[ "classic shades ", "luxurious beard ", "mohawk dark",],),
  //3122"],),

  new Traits( "male, accessories" ,[ "cap ", "cigarette ", "muttonchops ", "small shades",],),
  //3123"],),

  new Traits( "female, accessories" ,[ "big shades ", "wild hair",],),
  //3124"],),

  new Traits( "female, accessories" ,[ "classic shades ", "half shaved ", "purple lipstick",],),
  //3125"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring",],),
  //3126"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "do-rag ", "earring ", "mole ", "nerd glasses",],),
  //3127"],),

  new Traits( "male, accessories" ,[ "earring ", "messy hair ", "regular shades",],),
  //3128"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "vampire hair ", "vr",],),
  //3129"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "muttonchops ", "rosy cheeks ", "small shades",],),
  //3130"],),

  new Traits( "female, accessories" ,[ "dark hair ", "earring ", "mole",],),
  //3131"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "shaved head",],),
  //3132"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "front beard dark",],),
  //3133"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "gold chain ", "regular shades",],),
  //3134"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes blue ", "pink with hat",],),
  //3135"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "headband ", "rosy cheeks",],),
  //3136"],),

  new Traits( "male, accessories" ,[ "big shades ", "messy hair ", "normal beard",],),
  //3137"],),

  new Traits( "male, accessories" ,[ "cap ", "eye patch",],),
  //3138"],),

  new Traits( "female, accessories" ,[ "big shades ", "pink with hat ", "spots",],),
  //3139"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk thin",],),
  //3140"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "nerd glasses ", "normal beard black",],),
  //3141"],),

  new Traits( "male, accessories" ,[ "do-rag ", "goat ", "small shades",],),
  //3142"],),

  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "shaved head",],),
  //3143"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "normal beard black",],),
  //3144"],),

  new Traits( "male, accessories" ,[ "do-rag ", "eye patch ", "mole",],),
  //3145"],),

  new Traits( "male, accessories" ,[ "peak spike ", "vape",],),
  //3146"],),

  new Traits( "male, accessories" ,[ "bandana ", "goat ", "small shades",],),
  //3147"],),

  new Traits( "female, accessories" ,[ "big shades ", "cigarette ", "tassle hat",],),
  //3148"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk ", "purple eye shadow",],),
  //3149"],),

  new Traits( "male, accessories" ,[ "eye patch ", "mohawk",],),
  //3150"],),

  new Traits( "female, accessories" ,[ "straight hair dark",],),
  //3151"],),

  new Traits( "male, accessories" ,[ "bandana ", "frown ", "regular shades",],),
  //3152"],),

  new Traits( "female, accessories" ,[ "classic shades ", "straight hair blonde",],),
  //3153"],),

  new Traits( "male, accessories" ,[ "big beard ", "do-rag ", "earring",],),
  //3154"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "dark hair",],),
  //3155"],),

  new Traits( "male, accessories" ,[ "cigarette ", "eye mask ", "front beard dark ", "mohawk",],),
  //3156"],),

  new Traits( "male, accessories" ,[ "shadow beard ", "shaved head",],),
  //3157"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk thin ", "purple lipstick",],),
  //3158"],),

  new Traits( "male, accessories" ,[ "handlebars ", "small shades ", "wild hair",],),
  //3159"],),

  new Traits( "male, accessories" ,[ "earring ", "top hat",],),
  //3160"],),

  new Traits( "male, accessories" ,[ "eye mask ", "mohawk",],),
  //3161"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "messy hair",],),
  //3162"],),

  new Traits( "male, accessories" ,[ "mohawk ", "normal beard black",],),
  //3163"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "normal beard black",],),
  //3164"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "wild blonde",],),
  //3165"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "knitted cap",],),
  //3166"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "earring ", "knitted cap",],),
  //3167"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "do-rag",],),
  //3168"],),

  new Traits( "male, accessories" ,[ "frown ", "messy hair",],),
  //3169"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "wild white hair",],),
  //3170"],),

  new Traits( "male, accessories" ,[ "cigarette ", "small shades",],),
  //3171"],),

  new Traits( "male, accessories" ,[ "frown ", "stringy hair",],),
  //3172"],),

  new Traits( "male, accessories" ,[ "cap forward ", "front beard dark ", "horned rim glasses ", "mole",],),
  //3173"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "rosy cheeks",],),
  //3174"],),

  new Traits( "male, accessories" ,[ "normal beard ", "shaved head",],),
  //3175"],),

  new Traits( "female, accessories" ,[ "earring ", "straight hair ", "welding goggles",],),
  //3176"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "frown ", "luxurious beard",],),
  //3177"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "purple lipstick ", "wild white hair",],),
  //3178"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "mohawk",],),
  //3179"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "knitted cap ", "shadow beard",],),
  //3180"],),

  new Traits( "male, accessories" ,[ "front beard ", "frumpy hair ", "horned rim glasses",],),
  //3181"],),

  new Traits( "male, accessories" ,[ "cap ", "rosy cheeks",],),
  //3182"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "purple eye shadow ", "red mohawk",],),
  //3183"],),

  new Traits( "male, accessories" ,[ "frown ", "regular shades ", "shadow beard ", "wild hair",],),
  //3184"],),

  new Traits( "female, accessories" ,[ "earring ", "messy hair ", "purple lipstick",],),
  //3185"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "horned rim glasses",],),
  //3186"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "cigarette",],),
  //3187"],),

  new Traits( "male, accessories" ,[ "front beard ", "purple hair",],),
  //3188"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "handlebars",],),
  //3189"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "straight hair",],),
  //3190"],),

  new Traits( "male, accessories" ,[ "clown nose ", "mohawk dark ", "shadow beard",],),
  //3191"],),

  new Traits( "male, accessories" ,[ "clown nose ", "front beard dark ", "knitted cap",],),
  //3192"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "peak spike",],),
  //3193"],),

  new Traits( "male, accessories" ,[ "big shades ", "cap forward ", "chinstrap ", "earring",],),
  //3194"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "mohawk thin",],),
  //3195"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "goat ", "horned rim glasses ", "knitted cap",],),
  //3196"],),

  new Traits( "male, accessories" ,[ "regular shades ", "smile ", "top hat",],),
  //3197"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "dark hair ", "mole",],),
  //3198"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "mole ", "vape",],),
  //3199"],),

  new Traits( "male, accessories" ,[ "cigarette ", "headband ", "horned rim glasses",],),
  //3200"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "purple lipstick ", "straight hair blonde",],),
  //3201"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "purple eye shadow",],),
  //3202"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mustache ", "shaved head",],),
  //3203"],),

  new Traits( "male, accessories" ,[ "classic shades ", "peak spike ", "pipe",],),
  //3204"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "mohawk dark ", "muttonchops",],),
  //3205"],),

  new Traits( "male, accessories" ,[ "gold chain ", "messy hair",],),
  //3206"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "cigarette ", "earring",],),
  //3207"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "horned rim glasses",],),
  //3208"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "earring ", "mohawk dark",],),
  //3209"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "nerd glasses ", "purple lipstick",],),
  //3210"],),

  new Traits( "zombie, accessories" ,[ "goat ", "headband",],),
  //3211"],),

  new Traits( "female, accessories" ,[ "eye mask ", "pipe ", "purple lipstick ", "straight hair blonde",],),
  //3212"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "mohawk thin",],),
  //3213"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "mohawk dark ", "nerd glasses",],),
  //3214"],),

  new Traits( "male, accessories" ,[ "eye patch ", "mohawk dark",],),
  //3215"],),

  new Traits( "male, accessories" ,[ "hoodie ", "pipe",],),
  //3216"],),

  new Traits( "male, accessories" ,[ "big shades ", "chinstrap ", "earring ", "stringy hair",],),
  //3217"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "frumpy hair",],),
  //3218"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk",],),
  //3219"],),

  new Traits( "female, accessories" ,[ "big shades ", "crazy hair ", "hot lipstick",],),
  //3220"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "mohawk ", "vape",],),
  //3221"],),

  new Traits( "female, accessories" ,[ "big shades ", "mohawk dark",],),
  //3222"],),

  new Traits( "male, accessories" ,[ "cigarette ", "eye mask ", "wild hair",],),
  //3223"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mohawk thin ", "normal beard",],),
  //3224"],),

  new Traits( "female, accessories" ,[ "earring ", "messy hair ", "mole ", "silver chain",],),
  //3225"],),

  new Traits( "male, accessories" ,[ "do-rag ", "muttonchops ", "nerd glasses",],),
  //3226"],),

  new Traits( "female, accessories" ,[ "earring ", "nerd glasses ", "straight hair",],),
  //3227"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "do-rag ", "eye patch",],),
  //3228"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "normal beard ", "small shades",],),
  //3229"],),

  new Traits( "female, accessories" ,[ "half shaved ", "rosy cheeks",],),
  //3230"],),

  new Traits( "female, accessories" ,[ "purple eye shadow ", "straight hair",],),
  //3231"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "mohawk dark",],),
  //3232"],),

  new Traits( "male, accessories" ,[ "big shades ", "hoodie ", "shadow beard",],),
  //3233"],),

  new Traits( "male, accessories" ,[ "handlebars ", "messy hair",],),
  //3234"],),

  new Traits( "male, accessories" ,[ "normal beard ", "stringy hair",],),
  //3235"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "messy hair ", "pipe",],),
  //3236"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "cigarette ", "earring ", "wild hair",],),
  //3237"],),

  new Traits( "male, accessories" ,[ "earring ", "messy hair ", "regular shades",],),
  //3238"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "shaved head",],),
  //3239"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "wild white hair",],),
  //3240"],),

  new Traits( "female, accessories" ,[ "mohawk ", "purple lipstick",],),
  //3241"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "classic shades ", "earring ", "peak spike",],),
  //3242"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "mohawk dark",],),
  //3243"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "goat ", "wild hair",],),
  //3244"],),

  new Traits( "male, accessories" ,[ "cigarette ", "do-rag ", "vr",],),
  //3245"],),

  new Traits( "female, accessories" ,[ "clown hair green ", "mole",],),
  //3246"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "messy hair",],),
  //3247"],),

  new Traits( "male, accessories" ,[ "peak spike ", "pipe",],),
  //3248"],),

  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "goat ", "nerd glasses",],),
  //3249"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "horned rim glasses ", "smile",],),
  //3250"],),

  new Traits( "female, accessories" ,[ "earring ", "wild blonde",],),
  //3251"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes blue ", "wild blonde",],),
  //3252"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "purple lipstick ", "straight hair dark",],),
  //3253"],),

  new Traits( "female, accessories" ,[ "cigarette ", "dark hair ", "earring ", "purple lipstick",],),
  //3254"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "vape",],),
  //3255"],),

  new Traits( "male, accessories" ,[ "cowboy hat",],),
  //3256"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "stringy hair",],),
  //3257"],),

  new Traits( "male, accessories" ,[ "cap forward ", "goat ", "nerd glasses",],),
  //3258"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "vr",],),
  //3259"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "eye patch",],),
  //3260"],),

  new Traits( "male, accessories" ,[ "muttonchops ", "shaved head",],),
  //3261"],),

  new Traits( "male, accessories" ,[ "clown nose ", "frumpy hair ", "muttonchops ", "regular shades",],),
  //3262"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "orange side",],),
  //3263"],),

  new Traits( "female, accessories" ,[ "big shades ", "cap ", "earring",],),
  //3264"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "mohawk thin",],),
  //3265"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "messy hair",],),
  //3266"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "orange side",],),
  //3267"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "crazy hair ", "earring ", "goat",],),
  //3268"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "dark hair",],),
  //3269"],),

  new Traits( "male, accessories" ,[ "cap ", "earring ", "nerd glasses",],),
  //3270"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "pigtails",],),
  //3271"],),

  new Traits( "male, accessories" ,[ "mohawk ", "small shades",],),
  //3272"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "cigarette ", "headband",],),
  //3273"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "do-rag",],),
  //3274"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "silver chain ", "stringy hair",],),
  //3275"],),

  new Traits( "male, accessories" ,[ "clown nose ", "peak spike",],),
  //3276"],),

  new Traits( "female, accessories" ,[ "earring ", "regular shades ", "tassle hat",],),
  //3277"],),

  new Traits( "female, accessories" ,[ "cap ", "earring",],),
  //3278"],),

  new Traits( "male, accessories" ,[ "mohawk ", "small shades",],),
  //3279"],),

  new Traits( "male, accessories" ,[ "earring ", "medical mask ", "purple hair",],),
  //3280"],),

  new Traits( "male, accessories" ,[ "beanie ", "earring ", "small shades",],),
  //3281"],),

  new Traits( "male, accessories" ,[ "earring ", "luxurious beard ", "mohawk dark",],),
  //3282"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "frumpy hair ", "purple lipstick ", "rosy cheeks",],),
  //3283"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "crazy hair ", "earring",],),
  //3284"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "knitted cap",],),
  //3285"],),

  new Traits( "male, accessories" ,[ "messy hair ", "normal beard",],),
  //3286"],),

  new Traits( "female, accessories" ,[ "classic shades",],),
  //3287"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "smile",],),
  //3288"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "mole ", "wild blonde",],),
  //3289"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "red mohawk",],),
  //3290"],),

  new Traits( "male, accessories" ,[ "big shades ", "cap ", "normal beard",],),
  //3291"],),

  new Traits( "male, accessories" ,[ "smile ", "top hat",],),
  //3292"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "nerd glasses ", "wild white hair",],),
  //3293"],),

  new Traits( "female, accessories" ,[ "cigarette ", "mole ", "straight hair blonde",],),
  //3294"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "wild hair",],),
  //3295"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "cigarette ", "earring ", "frumpy hair ", "mole",],),
  //3296"],),

  new Traits( "male, accessories" ,[ "mohawk ", "mustache ", "small shades",],),
  //3297"],),

  new Traits( "male, accessories" ,[ "big beard ", "eye patch ", "hoodie",],),
  //3298"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "normal beard black",],),
  //3299"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "messy hair ", "normal beard",],),
  //3300"],),

  new Traits( "female, accessories" ,[ "half shaved ", "hot lipstick ", "nerd glasses",],),
  //3301"],),

  new Traits( "male, accessories" ,[ "bandana ", "horned rim glasses ", "mustache ", "pipe",],),
  //3302"],),

  new Traits( "male, accessories" ,[ "big beard ", "shaved head",],),
  //3303"],),

  new Traits( "female, accessories" ,[ "mohawk thin ", "purple lipstick",],),
  //3304"],),

  new Traits( "male, accessories" ,[ "front beard ", "frown ", "messy hair",],),
  //3305"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard ", "wild hair",],),
  //3306"],),

  new Traits( "male, accessories" ,[ "",],),
  //3307"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "pilot helmet",],),
  //3308"],),

  new Traits( "male, accessories" ,[ "front beard ", "hoodie",],),
  //3309"],),

  new Traits( "male, accessories" ,[ "handlebars ", "horned rim glasses ", "mohawk thin",],),
  //3310"],),

  new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "spots ", "tassle hat",],),
  //3311"],),

  new Traits( "male, accessories" ,[ "classic shades ", "stringy hair",],),
  //3312"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "crazy hair ", "smile",],),
  //3313"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "wild hair",],),
  //3314"],),

  new Traits( "male, accessories" ,[ "cigarette ", "nerd glasses ", "stringy hair",],),
  //3315"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "horned rim glasses ", "shadow beard",],),
  //3316"],),

  new Traits( "male, accessories" ,[ "front beard ", "top hat",],),
  //3317"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "gold chain ", "regular shades",],),
  //3318"],),

  new Traits( "male, accessories" ,[ "headband ", "vape",],),
  //3319"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "shadow beard",],),
  //3320"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "straight hair blonde",],),
  //3321"],),

  new Traits( "male, accessories" ,[ "bandana ", "front beard dark ", "vr",],),
  //3322"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "small shades",],),
  //3323"],),

  new Traits( "male, accessories" ,[ "big beard ", "crazy hair ", "earring",],),
  //3324"],),

  new Traits( "male, accessories" ,[ "mohawk ", "vape",],),
  //3325"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "vampire hair",],),
  //3326"],),

  new Traits( "male, accessories" ,[ "earring ", "headband",],),
  //3327"],),

  new Traits( "zombie, accessories" ,[ "cigarette ", "messy hair",],),
  //3328"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "mole",],),
  //3329"],),

  new Traits( "male, accessories" ,[ "fedora ", "frown ", "regular shades ", "shadow beard",],),
  //3330"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "eye patch ", "headband",],),
  //3331"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "red mohawk",],),
  //3332"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "tassle hat",],),
  //3333"],),

  new Traits( "female, accessories" ,[ "dark hair ", "green eye shadow",],),
  //3334"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "purple hair",],),
  //3335"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "messy hair ", "purple eye shadow",],),
  //3336"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "wild hair",],),
  //3337"],),

  new Traits( "female, accessories" ,[ "dark hair ", "mole",],),
  //3338"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "shadow beard",],),
  //3339"],),

  new Traits( "female, accessories" ,[ "cigarette ", "crazy hair ", "earring",],),
  //3340"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "messy hair ", "mole",],),
  //3341"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "normal beard ", "spots",],),
  //3342"],),

  new Traits( "female, accessories" ,[ "regular shades ", "tassle hat",],),
  //3343"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "purple lipstick",],),
  //3344"],),

  new Traits( "female, accessories" ,[ "dark hair ", "gold chain",],),
  //3345"],),

  new Traits( "male, accessories" ,[ "classic shades ", "stringy hair",],),
  //3346"],),

  new Traits( "female, accessories" ,[ "earring ", "gold chain ", "straight hair dark",],),
  //3347"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "mole ", "wild hair",],),
  //3348"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "mohawk thin ", "normal beard",],),
  //3349"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "knitted cap",],),
  //3350"],),

  new Traits( "female, accessories" ,[ "big shades ", "tassle hat ", "vape",],),
  //3351"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "regular shades ", "shadow beard",],),
  //3352"],),

  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "eye mask ", "front beard",],),
  //3353"],),

  new Traits( "female, accessories" ,[ "cigarette ", "half shaved ", "nerd glasses",],),
  //3354"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "shadow beard",],),
  //3355"],),

  new Traits( "female, accessories" ,[ "knitted cap ", "regular shades",],),
  //3356"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "earring ", "shaved head",],),
  //3357"],),

  new Traits( "female, accessories" ,[ "big shades ", "earring ", "headband ", "hot lipstick",],),
  //3358"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "muttonchops",],),
  //3359"],),

  new Traits( "female, accessories" ,[ "big shades ", "blonde short ", "hot lipstick ", "mole",],),
  //3360"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "earring ", "nerd glasses ", "stringy hair",],),
  //3361"],),

  new Traits( "male, accessories" ,[ "bandana ", "rosy cheeks ", "small shades",],),
  //3362"],),

  new Traits( "male, accessories" ,[ "pipe ", "top hat",],),
  //3363"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "mohawk ", "purple lipstick",],),
  //3364"],),

  new Traits( "male, accessories" ,[ "shadow beard ", "smile ", "wild hair",],),
  //3365"],),

  new Traits( "female, accessories" ,[ "nerd glasses ", "purple lipstick ", "straight hair dark",],),
  //3366"],),

  new Traits( "female, accessories" ,[ "earring ", "headband",],),
  //3367"],),

  new Traits( "male, accessories" ,[ "fedora ", "mole ", "silver chain",],),
  //3368"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "stringy hair",],),
  //3369"],),

  new Traits( "male, accessories" ,[ "earring ", "purple hair ", "shadow beard",],),
  //3370"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "hot lipstick ", "straight hair blonde",],),
  //3371"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "nerd glasses ", "normal beard black",],),
  //3372"],),

  new Traits( "male, accessories" ,[ "police cap ", "small shades",],),
  //3373"],),

  new Traits( "male, accessories" ,[ "classic shades ", "frumpy hair ", "normal beard black",],),
  //3374"],),

  new Traits( "male, accessories" ,[ "big shades ", "cap forward ", "earring ", "normal beard",],),
  //3375"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes blue ", "earring ", "mohawk dark",],),
  //3376"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "straight hair",],),
  //3377"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "handlebars",],),
  //3378"],),

  new Traits( "male, accessories" ,[ "handlebars ", "mole ", "nerd glasses ", "wild hair",],),
  //3379"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mustache ", "peak spike",],),
  //3380"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "silver chain",],),
  //3381"],),

  new Traits( "male, accessories" ,[ "clown nose ", "mohawk dark ", "nerd glasses",],),
  //3382"],),

  new Traits( "male, accessories" ,[ "handlebars ", "medical mask ", "stringy hair",],),
  //3383"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "silver chain ", "vampire hair",],),
  //3384"],),

  new Traits( "female, accessories" ,[ "eye patch ", "tassle hat",],),
  //3385"],),

  new Traits( "female, accessories" ,[ "big shades ", "frumpy hair",],),
  //3386"],),

  new Traits( "male, accessories" ,[ "big shades ", "police cap",],),
  //3387"],),

  new Traits( "female, accessories" ,[ "earring ", "messy hair ", "purple lipstick",],),
  //3388"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "mole ", "pipe",],),
  //3389"],),

  new Traits( "male, accessories" ,[ "handlebars ", "horned rim glasses ", "messy hair",],),
  //3390"],),

  new Traits( "male, accessories" ,[ "muttonchops ", "shaved head",],),
  //3391"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora ", "nerd glasses ", "pipe",],),
  //3392"],),

  new Traits( "zombie, accessories" ,[ "crazy hair ", "frown",],),
  //3393"],),

  new Traits( "female, accessories" ,[ "headband ", "horned rim glasses ", "hot lipstick ", "mole",],),
  //3394"],),

  new Traits( "male, accessories" ,[ "big shades ", "cap ", "clown nose ", "mole",],),
  //3395"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "mustache ", "wild hair",],),
  //3396"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "purple eye shadow ", "purple lipstick",],),
  //3397"],),

  new Traits( "male, accessories" ,[ "mohawk ", "muttonchops ", "vr",],),
  //3398"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "half shaved",],),
  //3399"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "rosy cheeks",],),
  //3400"],),

  new Traits( "female, accessories" ,[ "earring ", "eye mask ", "wild blonde",],),
  //3401"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "knitted cap ", "purple lipstick ", "spots",],),
  //3402"],),

  new Traits( "male, accessories" ,[ "earring ", "wild hair",],),
  //3403"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "messy hair",],),
  //3404"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "purple lipstick",],),
  //3405"],),

  new Traits( "male, accessories" ,[ "big shades ", "mohawk dark ", "mole ", "smile",],),
  //3406"],),

  new Traits( "male, accessories" ,[ "mustache ", "regular shades",],),
  //3407"],),

  new Traits( "female, accessories" ,[ "mohawk thin ", "vape",],),
  //3408"],),

  new Traits( "female, accessories" ,[ "earring ", "eye mask ", "purple lipstick ", "red mohawk",],),
  //3409"],),

  new Traits( "male, accessories" ,[ "headband ", "shadow beard",],),
  //3410"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "smile",],),
  //3411"],),

  new Traits( "female, accessories" ,[ "wild hair",],),
  //3412"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "wild hair",],),
  //3413"],),

  new Traits( "female, accessories" ,[ "bandana ", "eye patch ", "purple lipstick",],),
  //3414"],),

  new Traits( "male, accessories" ,[ "do-rag ", "eye patch ", "smile",],),
  //3415"],),

  new Traits( "male, accessories" ,[ "eye mask ", "purple hair",],),
  //3416"],),

  new Traits( "female, accessories" ,[ "big shades ", "wild hair",],),
  //3417"],),

  new Traits( "female, accessories" ,[ "cigarette ", "clown eyes blue ", "mohawk",],),
  //3418"],),
  
  
  new Traits( "male, accessories" ,[ "mohawk dark ", "nerd glasses ", "silver chain",],),
  //3419"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "mohawk dark",],),
  //3420"],),

  new Traits( "male, accessories" ,[ "bandana ", "horned rim glasses ", "shadow beard",],),
  //3421"],),

  new Traits( "male, accessories" ,[ "headband ", "nerd glasses ", "pipe",],),
  //3422"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "do-rag ", "earring ", "goat",],),
  //3423"],),

  new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "straight hair blonde",],),
  //3424"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "mole ", "wild hair",],),
  //3425"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "small shades",],),
  //3426"],),

  new Traits( "female, accessories" ,[ "big shades ", "black lipstick ", "straight hair blonde",],),
  //3427"],),

  new Traits( "male, accessories" ,[ "goat ", "mole ", "wild hair",],),
  //3428"],),

  new Traits( "male, accessories" ,[ "cigarette ", "messy hair ", "vr",],),
  //3429"],),

  new Traits( "female, accessories" ,[ "big shades ", "straight hair",],),
  //3430"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "purple eye shadow ", "red mohawk",],),
  //3431"],),

  new Traits( "female, accessories" ,[ "gold chain ", "straight hair blonde",],),
  //3432"],),

  new Traits( "male, accessories" ,[ "eye patch ", "peak spike ", "shadow beard",],),
  //3433"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora ", "goat ", "nerd glasses",],),
  //3434"],),

  new Traits( "female, accessories" ,[ "headband ", "purple lipstick",],),
  //3435"],),

  new Traits( "female, accessories" ,[ "big shades ", "hot lipstick ", "mohawk dark",],),
  //3436"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "mole ", "pink with hat ", "purple lipstick",],),
  //3437"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "frown ", "frumpy hair ", "shadow beard",],),
  //3438"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "frown",],),
  //3439"],),

  new Traits( "male, accessories" ,[ "do-rag ", "front beard ", "horned rim glasses",],),
  //3440"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "earring ", "half shaved ", "hot lipstick",],),
  //3441"],),

  new Traits( "female, accessories" ,[ "cap ", "earring",],),
  //3442"],),

  new Traits( "alien ", accessories" ,[ "cowboy hat ", "earring",],),
  //3443"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "smile",],),
  //3444"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "nerd glasses ", "shadow beard",],),
  //3445"],),

  new Traits( "male, accessories" ,[ "eye patch ", "handlebars ", "shaved head",],),
  //3446"],),

  new Traits( "male, accessories" ,[ "classic shades ", "hoodie ", "spots",],),
  //3447"],),

  new Traits( "male, accessories" ,[ "cap ", "earring ", "regular shades",],),
  //3448"],),

  new Traits( "male, accessories" ,[ "messy hair ", "normal beard",],),
  //3449"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "mohawk dark",],),
  //3450"],),

  new Traits( "female, accessories" ,[ "dark hair ", "vr",],),
  //3451"],),

  new Traits( "male, accessories" ,[ "classic shades ", "knitted cap ", "shadow beard",],),
  //3452"],),

  new Traits( "female, accessories" ,[ "eye patch ", "hot lipstick",],),
  //3453"],),

  new Traits( "male, accessories" ,[ "cap ", "eye patch ", "handlebars",],),
  //3454"],),

  new Traits( "male, accessories" ,[ "mohawk ", "mole ", "shadow beard",],),
  //3455"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "spots",],),
  //3456"],),

  new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "wild blonde",],),
  //3457"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mohawk",],),
  //3458"],),

  new Traits( "male, accessories" ,[ "bandana ", "classic shades ", "earring",],),
  //3459"],),

  new Traits( "male, accessories" ,[ "eye mask ", "frown ", "frumpy hair ", "shadow beard",],),
  //3460"],),

  new Traits( "male, accessories" ,[ "classic shades ", "do-rag ", "luxurious beard",],),
  //3461"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring",],),
  //3462"],),

  new Traits( "male, accessories" ,[ "fedora ", "frown ", "vape",],),
  //3463"],),

  new Traits( "female, accessories" ,[ "big shades ", "hot lipstick ", "straight hair",],),
  //3464"],),

  new Traits( "female, accessories" ,[ "big shades ", "hot lipstick ", "straight hair",],),
  //3465"],),

  new Traits( "male, accessories" ,[ "hoodie ", "vr",],),
  //3466"],),

  new Traits( "male, accessories" ,[ "big shades ", "headband ", "shadow beard",],),
  //3467"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "black lipstick ", "cigarette ", "wild white hair",],),
  //3468"],),

  new Traits( "male, accessories" ,[ "earring ", "police cap ", "regular shades ", "shadow beard",],),
  //3469"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "blue eye shadow",],),
  //3470"],),

  new Traits( "female, accessories" ,[ "clown nose ", "crazy hair ", "silver chain",],),
  //3471"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "mustache",],),
  //3472"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "headband ", "regular shades",],),
  //3473"],),

  new Traits( "male, accessories" ,[ "eye patch ", "mohawk dark",],),
  //3474"],),

  new Traits( "male, accessories" ,[ "big beard ", "hoodie",],),
  //3475"],),

  new Traits( "female, accessories" ,[ "cigarette ", "purple lipstick ", "straight hair dark",],),
  //3476"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "crazy hair ", "shadow beard",],),
  //3477"],),

  new Traits( "male, accessories" ,[ "big shades ", "mohawk thin",],),
  //3478"],),

  new Traits( "female, accessories" ,[ "classic shades ", "pink with hat",],),
  //3479"],),

  new Traits( "female, accessories" ,[ "half shaved ", "pipe",],),
  //3480"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "dark hair ", "hot lipstick",],),
  //3481"],),

  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "headband",],),
  //3482"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "pipe",],),
  //3483"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "goat ", "knitted cap",],),
  //3484"],),

  new Traits( "male, accessories" ,[ "cap ", "goat",],),
  //3485"],),

  new Traits( "female, accessories" ,[ "cap ", "horned rim glasses ", "hot lipstick",],),
  //3486"],),

  new Traits( "female, accessories" ,[ "bandana ", "hot lipstick",],),
  //3487"],),

  new Traits( "female, accessories" ,[ "big shades ", "earring ", "red mohawk",],),
  //3488"],),

  new Traits( "zombie, accessories" ,[ "eye patch ", "stringy hair",],),
  //3489"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "hot lipstick ", "wild white hair",],),
  //3490"],),

  new Traits( "male, accessories" ,[ "cigarette ", "crazy hair ", "earring ", "mole ", "mustache",],),
  //3491"],),

  new Traits( "female, accessories" ,[ "mole ", "wild hair",],),
  //3492"],),

  new Traits( "zombie, accessories" ,[ "peak spike ", "shadow beard",],),
  //3493"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "clown eyes blue ", "earring",],),
  //3494"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "muttonchops ", "vape",],),
  //3495"],),

  new Traits( "male, accessories" ,[ "cigarette ", "purple hair",],),
  //3496"],),

  new Traits( "male, accessories" ,[ "cigarette ", "messy hair",],),
  //3497"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "mohawk dark",],),
  //3498"],),

  new Traits( "male, accessories" ,[ "earring ", "regular shades ", "wild hair",],),
  //3499"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "vr",],),
  //3500"],),

  new Traits( "male, accessories" ,[ "bandana ", "small shades",],),
  //3501"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "mole",],),
  //3502"],),

  new Traits( "female, accessories" ,[ "earring ", "pilot helmet ", "pipe",],),
  //3503"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "regular shades ", "wild hair",],),
  //3504"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "shadow beard ", "top hat",],),
  //3505"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "shadow beard ", "vr",],),
  //3506"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "do-rag ", "handlebars",],),
  //3507"],),

  new Traits( "male, accessories" ,[ "cigarette ", "clown eyes green ", "frumpy hair ", "goat",],),
  //3508"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mohawk ", "shadow beard",],),
  //3509"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "hot lipstick",],),
  //3510"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "pink with hat ", "vr",],),
  //3511"],),

  new Traits( "female, accessories" ,[ "cigarette ", "mohawk dark",],),
  //3512"],),

  new Traits( "female, accessories" ,[ "big shades ", "mohawk",],),
  //3513"],),

  new Traits( "male, accessories" ,[ "goat ", "police cap",],),
  //3514"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "earring ", "purple lipstick",],),
  //3515"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "earring ", "messy hair",],),
  //3516"],),

  new Traits( "male, accessories" ,[ "earring ", "messy hair",],),
  //3517"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "hoodie",],),
  //3518"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "mole ", "pink with hat",],),
  //3519"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "nerd glasses ", "red mohawk",],),
  //3520"],),

  new Traits( "male, accessories" ,[ "do-rag ", "small shades",],),
  //3521"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown nose ", "earring ", "red mohawk",],),
  //3522"],),

  new Traits( "male, accessories" ,[ "big beard ", "headband ", "nerd glasses",],),
  //3523"],),

  new Traits( "male, accessories" ,[ "mohawk ", "pipe",],),
  //3524"],),

  new Traits( "female, accessories" ,[ "nerd glasses ", "wild white hair",],),
  //3525"],),

  new Traits( "female, accessories" ,[ "cap ", "earring ", "hot lipstick",],),
  //3526"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk dark",],),
  //3527"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "wild hair",],),
  //3528"],),

  new Traits( "female, accessories" ,[ "clown hair green ", "earring",],),
  //3529"],),

  new Traits( "male, accessories" ,[ "handlebars ", "mohawk thin",],),
  //3530"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "headband ", "purple lipstick",],),
  //3531"],),

  new Traits( "male, accessories" ,[ "eye patch ", "shaved head",],),
  //3532"],),

  new Traits( "male, accessories" ,[ "mustache ", "stringy hair",],),
  //3533"],),

  new Traits( "female, accessories" ,[ "earring ", "pipe ", "straight hair dark",],),
  //3534"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "pigtails ", "purple lipstick",],),
  //3535"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring",],),
  //3536"],),

  new Traits( "male, accessories" ,[ "handlebars ", "hoodie",],),
  //3537"],),

  new Traits( "male, accessories" ,[ "frown ", "peak spike",],),
  //3538"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk ", "regular shades",],),
  //3539"],),

  new Traits( "male, accessories" ,[ "handlebars ", "horned rim glasses ", "pipe ", "wild hair",],),
  //3540"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk thin",],),
  //3541"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "crazy hair ", "earring ", "vape",],),
  //3542"],),

  new Traits( "male, accessories" ,[ "hoodie ", "pipe ", "small shades",],),
  //3543"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "shadow beard",],),
  //3544"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "red mohawk",],),
  //3545"],),

  new Traits( "male, accessories" ,[ "earring ", "top hat",],),
  //3546"],),

  new Traits( "female, accessories" ,[ "nerd glasses ", "pigtails",],),
  //3547"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blonde short",],),
  //3548"],),

  new Traits( "male, accessories" ,[ "earring ", "shadow beard ", "stringy hair",],),
  //3549"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "eye patch",],),
  //3550"],),

  new Traits( "male, accessories" ,[ "cigarette ", "normal beard black ", "wild hair",],),
  //3551"],),

  new Traits( "male, accessories" ,[ "eye patch ", "mohawk dark",],),
  //3552"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "handlebars",],),
  //3553"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "earring",],),
  //3554"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard ", "rosy cheeks ", "small shades ", "wild hair",],),
  //3555"],),

  new Traits( "female, accessories" ,[ "earring ", "half shaved ", "welding goggles",],),
  //3556"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "eye patch ", "messy hair",],),
  //3557"],),

  new Traits( "female, accessories" ,[ "cigarette ", "frumpy hair ", "hot lipstick ", "rosy cheeks",],),
  //3558"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "peak spike",],),
  //3559"],),

  new Traits( "female, accessories" ,[ "blonde short ", "clown eyes blue",],),
  //3560"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "front beard",],),
  //3561"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "mohawk thin ", "normal beard",],),
  //3562"],),

  new Traits( "male, accessories" ,[ "cigarette ", "stringy hair ", "vr",],),
  //3563"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "cigarette ", "mohawk thin",],),
  //3564"],),

  new Traits( "male, accessories" ,[ "eye mask ", "headband ", "muttonchops",],),
  //3565"],),

  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "nerd glasses ", "shadow beard",],),
  //3566"],),

  new Traits( "female, accessories" ,[ "cap ", "mole",],),
  //3567"],),

  new Traits( "male, accessories" ,[ "bandana ", "silver chain",],),
  //3568"],),

  new Traits( "male, accessories" ,[ "earring ", "shaved head ", "smile",],),
  //3569"],),

  new Traits( "female, accessories" ,[ "eye mask ", "straight hair dark",],),
  //3570"],),

  new Traits( "male, accessories" ,[ "front beard",],),
  //3571"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring",],),
  //3572"],),

  new Traits( "male, accessories" ,[ "earring ", "hoodie ", "small shades",],),
  //3573"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "mole ", "wild hair",],),
  //3574"],),

  new Traits( "male, accessories" ,[ "bandana ", "clown eyes green ", "earring",],),
  //3575"],),

  new Traits( "male, accessories" ,[ "cigarette ", "handlebars ", "shaved head",],),
  //3576"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "nerd glasses",],),
  //3577"],),

  new Traits( "female, accessories" ,[ "big shades ", "frumpy hair ", "hot lipstick",],),
  //3578"],),

  new Traits( "male, accessories" ,[ "cigarette ", "classic shades ", "shaved head",],),
  //3579"],),

  new Traits( "male, accessories" ,[ "cigarette ", "knitted cap",],),
  //3580"],),

  new Traits( "female, accessories" ,[ "nerd glasses ", "purple lipstick ", "tassle hat",],),
  //3581"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "green eye shadow",],),
  //3582"],),

  new Traits( "male, accessories" ,[ "eye patch ", "normal beard ", "peak spike",],),
  //3583"],),

  new Traits( "female, accessories" ,[ "bandana ", "clown eyes green",],),
  //3584"],),

  new Traits( "male, accessories" ,[ "cap forward ", "horned rim glasses ", "mustache",],),
  //3585"],),

  new Traits( "male, accessories" ,[ "mole ", "peak spike",],),
  //3586"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "mole ", "silver chain ", "vr",],),
  //3587"],),

  new Traits( "male, accessories" ,[ "small shades ", "vampire hair",],),
  //3588"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "horned rim glasses ", "purple lipstick",],),
  //3589"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "tassle hat",],),
  //3590"],),

  new Traits( "male, accessories" ,[ "handlebars ", "mohawk thin ", "small shades",],),
  //3591"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "classic shades ", "wild white hair",],),
  //3592"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "mohawk ", "purple lipstick",],),
  //3593"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "wild blonde",],),
  //3594"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "cigarette ", "purple lipstick",],),
  //3595"],),

  new Traits( "male, accessories" ,[ "do-rag ", "frown",],),
  //3596"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "normal beard black",],),
  //3597"],),

  new Traits( "male, accessories" ,[ "classic shades ", "fedora ", "shadow beard",],),
  //3598"],),

  new Traits( "male, accessories" ,[ "earring ", "goat ", "mohawk thin",],),
  //3599"],),

  new Traits( "male, accessories" ,[ "peak spike ", "shadow beard",],),
  //3600"],),

  new Traits( "male, accessories" ,[ "headband ", "medical mask ", "spots",],),
  //3601"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "frumpy hair ", "purple lipstick",],),
  //3602"],),

  new Traits( "male, accessories" ,[ "big shades ", "buck teeth ", "earring ", "peak spike ", "pipe",],),
  //3603"],),

  new Traits( "female, accessories" ,[ "classic shades ", "stringy hair",],),
  //3604"],),

  new Traits( "male, accessories" ,[ "classic shades ", "wild hair",],),
  //3605"],),

  new Traits( "male, accessories" ,[ "mohawk ", "normal beard black ", "regular shades",],),
  //3606"],),

  new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "stringy hair",],),
  //3607"],),

  new Traits( "female, accessories" ,[ "mohawk thin ", "nerd glasses ", "purple lipstick",],),
  //3608"],),

  new Traits( "zombie, accessories" ,[ "do-rag ", "earring",],),
  //3609"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "mole ", "stringy hair",],),
  //3610"],),

  new Traits( "male, accessories" ,[ "messy hair ", "nerd glasses",],),
  //3611"],),

  new Traits( "male, accessories" ,[ "cap forward ", "cigarette ", "earring",],),
  //3612"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "earring ", "luxurious beard ", "messy hair",],),
  //3613"],),

  new Traits( "male, accessories" ,[ "hoodie ", "shadow beard",],),
  //3614"],),

  new Traits( "female, accessories" ,[ "earring ", "purple eye shadow ", "straight hair dark",],),
  //3615"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blonde short ", "purple eye shadow",],),
  //3616"],),

  new Traits( "female, accessories" ,[ "cigarette ", "hot lipstick ", "wild hair",],),
  //3617"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "peak spike ", "pipe",],),
  //3618"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "eye patch ", "hoodie",],),
  //3619"],),

  new Traits( "male, accessories" ,[ "earring ", "gold chain ", "normal beard ", "wild hair",],),
  //3620"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "mohawk",],),
  //3621"],),

  new Traits( "male, accessories" ,[ "bandana ", "front beard dark ", "small shades ", "vape",],),
  //3622"],),

  new Traits( "female, accessories" ,[ "big shades ", "clown hair green ", "hot lipstick",],),
  //3623"],),

  new Traits( "male, accessories" ,[ "do-rag ", "eye patch ", "normal beard",],),
  //3624"],),

  new Traits( "male, accessories" ,[ "front beard ", "frown ", "horned rim glasses ", "peak spike",],),
  //3625"],),

  new Traits( "male, accessories" ,[ "bandana ", "medical mask",],),
  //3626"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "dark hair",],),
  //3627"],),

  new Traits( "female, accessories" ,[ "classic shades ", "hot lipstick ", "straight hair",],),
  //3628"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "hot lipstick ", "straight hair",],),
  //3629"],),

  new Traits( "male, accessories" ,[ "eye patch ", "vampire hair",],),
  //3630"],),

  new Traits( "male, accessories" ,[ "eye patch ", "police cap",],),
  //3631"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk",],),
  //3632"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "knitted cap ", "vr",],),
  //3633"],),

  new Traits( "male, accessories" ,[ "goat ", "knitted cap",],),
  //3634"],),

  new Traits( "male, accessories" ,[ "normal beard ", "vampire hair",],),
  //3635"],),

  new Traits( "zombie, accessories" ,[ "earring ", "front beard dark ", "top hat",],),
  //3636"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow",],),
  //3637"],),

  new Traits( "male, accessories" ,[ "cigarette ", "cowboy hat ", "mole",],),
  //3638"],),

  new Traits( "female, accessories" ,[ "clown nose ", "crazy hair",],),
  //3639"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "nerd glasses ", "normal beard black",],),
  //3640"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "tassle hat",],),
  //3641"],),

  new Traits( "male, accessories" ,[ "headband ", "vr",],),
  //3642"],),

  new Traits( "male, accessories" ,[ "do-rag ", "frown ", "muttonchops",],),
  //3643"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mohawk",],),
  //3644"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "nerd glasses",],),
  //3645"],),

  new Traits( "female, accessories" ,[ "cigarette ", "regular shades ", "stringy hair",],),
  //3646"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "mohawk dark",],),
  //3647"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "red mohawk ", "welding goggles",],),
  //3648"],),

  new Traits( "female, accessories" ,[ "blonde short ", "earring ", "medical mask ", "purple lipstick",],),
  //3649"],),

  new Traits( "male, accessories" ,[ "handlebars ", "nerd glasses ", "vampire hair",],),
  //3650"],),

  new Traits( "male, accessories" ,[ "hoodie ", "mustache ", "small shades",],),
  //3651"],),

  new Traits( "male, accessories" ,[ "cap forward ", "chinstrap ", "earring",],),
  //3652"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "straight hair blonde",],),
  //3653"],),

  new Traits( "male, accessories" ,[ "classic shades ", "shadow beard ", "shaved head",],),
  //3654"],),

  new Traits( "male, accessories" ,[ "goat ", "mohawk dark",],),
  //3655"],),

  new Traits( "female, accessories" ,[ "blonde short ", "eye patch",],),
  //3656"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "earring ", "luxurious beard",],),
  //3657"],),

  new Traits( "female, accessories" ,[ "big shades ", "mohawk",],),
  //3658"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "dark hair",],),
  //3659"],),

  new Traits( "male, accessories" ,[ "shaved head ", "small shades",],),
  //3660"],),

  new Traits( "male, accessories" ,[ "vampire hair",],),
  //3661"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "headband",],),
  //3662"],),

  new Traits( "female, accessories" ,[ "eye mask ", "knitted cap ", "purple lipstick",],),
  //3663"],),

  new Traits( "male, accessories" ,[ "big beard ", "peak spike",],),
  //3664"],),

  new Traits( "male, accessories" ,[ "regular shades ", "stringy hair",],),
  //3665"],),

  new Traits( "male, accessories" ,[ "hoodie ", "muttonchops",],),
  //3666"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "clown eyes blue ", "do-rag",],),
  //3667"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "nerd glasses ", "vape",],),
  //3668"],),

  new Traits( "male, accessories" ,[ "beanie ", "eye patch",],),
  //3669"],),

  new Traits( "male, accessories" ,[ "cap forward ", "shadow beard",],),
  //3670"],),

  new Traits( "male, accessories" ,[ "classic shades ", "do-rag ", "mole ", "normal beard black",],),
  //3671"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "earring ", "hoodie ", "shadow beard",],),
  //3672"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "pink with hat",],),
  //3673"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "classic shades ", "crazy hair",],),
  //3674"],),

  new Traits( "female, accessories" ,[ "cap ", "hot lipstick ", "nerd glasses",],),
  //3675"],),

  new Traits( "male, accessories" ,[ "messy hair ", "shadow beard ", "small shades",],),
  //3676"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "handlebars ", "headband ", "smile",],),
  //3677"],),

  new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "tassle hat",],),
  //3678"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "purple hair",],),
  //3679"],),

  new Traits( "male, accessories" ,[ "bandana ", "horned rim glasses ", "silver chain",],),
  //3680"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "mole ", "regular shades",],),
  //3681"],),

  new Traits( "male, accessories" ,[ "medical mask ", "top hat",],),
  //3682"],),

  new Traits( "male, accessories" ,[ "cigarette ", "frumpy hair ", "handlebars",],),
  //3683"],),

  new Traits( "female, accessories" ,[ "earring ", "gold chain ", "hot lipstick ", "tiara",],),
  //3684"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "normal beard black ", "police cap ", "spots",],),
  //3685"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "wild white hair",],),
  //3686"],),

  new Traits( "male, accessories" ,[ "cigarette ", "handlebars ", "mohawk dark",],),
  //3687"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "mohawk",],),
  //3688"],),

  new Traits( "male, accessories" ,[ "frown ", "hoodie",],),
  //3689"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "muttonchops ", "nerd glasses",],),
  //3690"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "messy hair ", "spots",],),
  //3691"],),

  new Traits( "female, accessories" ,[ "clown nose ", "stringy hair",],),
  //3692"],),

  new Traits( "male, accessories" ,[ "cap ", "clown eyes blue ", "earring",],),
  //3693"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "police cap ", "vape",],),
  //3694"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "mohawk dark ", "small shades",],),
  //3695"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "purple hair",],),
  //3696"],),

  new Traits( "female, accessories" ,[ "straight hair blonde",],),
  //3697"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "clown nose ", "cowboy hat ", "goat",],),
  //3698"],),

  new Traits( "male, accessories" ,[ "cigarette ", "front beard dark ", "messy hair ", "vr",],),
  //3699"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "knitted cap ", "luxurious beard ", "small shades",],),
  //3700"],),

  new Traits( "male, accessories" ,[ "regular shades ", "shadow beard ", "wild hair",],),
  //3701"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "small shades",],),
  //3702"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "medical mask ", "orange side",],),
  //3703"],),

  new Traits( "female, accessories" ,[ "earring ", "pigtails ", "purple lipstick",],),
  //3704"],),

  new Traits( "female, accessories" ,[ "cigarette ", "mohawk thin ", "purple lipstick ", "welding goggles",],),
  //3705"],),

  new Traits( "female, accessories" ,[ "big shades ", "black lipstick ", "clown nose ", "earring ", "tassle hat",],),
  //3706"],),

  new Traits( "female, accessories" ,[ "choker ", "purple lipstick ", "straight hair dark",],),
  //3707"],),

  new Traits( "male, accessories" ,[ "earring ", "muttonchops ", "peak spike",],),
  //3708"],),

  new Traits( "female, accessories" ,[ "half shaved ", "vape",],),
  //3709"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "vape",],),
  //3710"],),

  new Traits( "female, accessories" ,[ "gold chain ", "stringy hair",],),
  //3711"],),

  new Traits( "female, accessories" ,[ "classic shades ", "tiara ", "vape",],),
  //3712"],),

  new Traits( "male, accessories" ,[ "cigarette ", "classic shades ", "luxurious beard ", "mohawk thin",],),
  //3713"],),

  new Traits( "male, accessories" ,[ "headband ", "shadow beard",],),
  //3714"],),

  new Traits( "male, accessories" ,[ "big shades ", "crazy hair",],),
  //3715"],),

  new Traits( "male, accessories" ,[ "mohawk ", "regular shades ", "shadow beard",],),
  //3716"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "mohawk dark",],),
  //3717"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "mustache ", "police cap",],),
  //3718"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "shadow beard",],),
  //3719"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "hoodie ", "nerd glasses",],),
  //3720"],),

  new Traits( "female, accessories" ,[ "bandana ", "green eye shadow ", "mole",],),
  //3721"],),

  new Traits( "male, accessories" ,[ "bandana ", "big shades ", "handlebars",],),
  //3722"],),

  new Traits( "female, accessories" ,[ "eye mask ", "frumpy hair",],),
  //3723"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "straight hair dark",],),
  //3724"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "mole ", "wild blonde",],),
  //3725"],),

  new Traits( "male, accessories" ,[ "pipe ", "stringy hair",],),
  //3726"],),

  new Traits( "male, accessories" ,[ "police cap ", "small shades",],),
  //3727"],),

  new Traits( "male, accessories" ,[ "eye patch ", "fedora",],),
  //3728"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "messy hair ", "spots",],),
  //3729"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "frumpy hair",],),
  //3730"],),

  new Traits( "male, accessories" ,[ "cap ", "earring ", "luxurious beard",],),
  //3731"],),

  new Traits( "male, accessories" ,[ "shadow beard ", "vampire hair",],),
  //3732"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "green eye shadow ", "hot lipstick ", "straight hair dark",],),
  //3733"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "green eye shadow",],),
  //3734"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "tassle hat",],),
  //3735"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "frumpy hair",],),
  //3736"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "small shades ", "stringy hair",],),
  //3737"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "clown hair green ", "vape",],),
  //3738"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "earring ", "mohawk dark",],),
  //3739"],),

  new Traits( "male, accessories" ,[ "cap ", "vape",],),
  //3740"],),

  new Traits( "female, accessories" ,[ "earring ", "vr",],),
  //3741"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "normal beard black",],),
  //3742"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "mohawk dark",],),
  //3743"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "mole",],),
  //3744"],),

  new Traits( "male, accessories" ,[ "big beard ", "headband",],),
  //3745"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "luxurious beard ", "vr",],),
  //3746"],),

  new Traits( "female, accessories" ,[ "pipe ", "wild blonde",],),
  //3747"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "police cap",],),
  //3748"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "orange side ", "vape",],),
  //3749"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "classic shades ", "crazy hair",],),
  //3750"],),

  new Traits( "male, accessories" ,[ "earring ", "goat ", "wild hair",],),
  //3751"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "regular shades",],),
  //3752"],),

  new Traits( "male, accessories" ,[ "front beard ", "mohawk thin",],),
  //3753"],),

  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "stringy hair ", "vape",],),
  //3754"],),

  new Traits( "female, accessories" ,[ "earring ", "pigtails ", "purple eye shadow",],),
  //3755"],),

  new Traits( "female, accessories" ,[ "dark hair ", "green eye shadow",],),
  //3756"],),

  new Traits( "female, accessories" ,[ "choker ", "crazy hair ", "hot lipstick",],),
  //3757"],),

  new Traits( "male, accessories" ,[ "classic shades ", "frown ", "messy hair ", "mustache",],),
  //3758"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "do-rag",],),
  //3759"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "do-rag ", "goat ", "smile",],),
  //3760"],),

  new Traits( "male, accessories" ,[ "front beard ", "headband ", "small shades",],),
  //3761"],),

  new Traits( "male, accessories" ,[ "do-rag ", "mustache ", "spots",],),
  //3762"],),

  new Traits( "female, accessories" ,[ "blonde short ", "choker ", "regular shades",],),
  //3763"],),

  new Traits( "male, accessories" ,[ "eye patch ", "hoodie ", "normal beard",],),
  //3764"],),

  new Traits( "female, accessories" ,[ "purple eye shadow ", "red mohawk ", "vape",],),
  //3765"],),

  new Traits( "male, accessories" ,[ "rosy cheeks ", "shaved head",],),
  //3766"],),

  new Traits( "male, accessories" ,[ "big shades ", "frumpy hair ", "mole",],),
  //3767"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "stringy hair",],),
  //3768"],),

  new Traits( "male, accessories" ,[ "earring ", "messy hair ", "normal beard black",],),
  //3769"],),

  new Traits( "female, accessories" ,[ "cigarette ", "green eye shadow ", "half shaved ", "purple lipstick",],),
  //3770"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "front beard",],),
  //3771"],),

  new Traits( "female, accessories" ,[ "cap ", "eye patch",],),
  //3772"],),

  new Traits( "female, accessories" ,[ "classic shades ", "earring ", "half shaved",],),
  //3773"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "straight hair dark",],),
  //3774"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "classic shades ", "purple lipstick",],),
  //3775"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "frumpy hair",],),
  //3776"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "dark hair",],),
  //3777"],),

  new Traits( "male, accessories" ,[ "front beard ", "nerd glasses ", "stringy hair",],),
  //3778"],),

  new Traits( "male, accessories" ,[ "earring ", "shadow beard ", "shaved head ", "vape",],),
  //3779"],),

  new Traits( "male, accessories" ,[ "earring ", "messy hair ", "shadow beard",],),
  //3780"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "mohawk ", "vape",],),
  //3781"],),

  new Traits( "male, accessories" ,[ "cap ", "chinstrap ", "earring",],),
  //3782"],),

  new Traits( "male, accessories" ,[ "do-rag ", "eye patch",],),
  //3783"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "bandana ", "earring ", "front beard",],),
  //3784"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "mohawk",],),
  //3785"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "hot lipstick ", "mohawk",],),
  //3786"],),

  new Traits( "female, accessories" ,[ "eye patch ", "mohawk dark ", "spots",],),
  //3787"],),

  new Traits( "female, accessories" ,[ "bandana ", "black lipstick",],),
  //3788"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk ", "purple lipstick",],),
  //3789"],),

  new Traits( "male, accessories" ,[ "cigarette ", "vampire hair",],),
  //3790"],),

  new Traits( "female, accessories" ,[ "earring ", "mole ", "pilot helmet",],),
  //3791"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "regular shades ", "vape",],),
  //3792"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blonde bob ", "cigarette",],),
  //3793"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "stringy hair",],),
  //3794"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "orange side",],),
  //3795"],),

  new Traits( "female, accessories" ,[ "bandana ", "cigarette",],),
  //3796"],),

  new Traits( "male, accessories" ,[ "do-rag ", "gold chain ", "muttonchops",],),
  //3797"],),

  new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "straight hair ", "vape",],),
  //3798"],),

  new Traits( "female, accessories" ,[ "classic shades ", "hot lipstick ", "tassle hat",],),
  //3799"],),

  new Traits( "male, accessories" ,[ "earring ", "small shades ", "top hat",],),
  //3800"],),

  new Traits( "male, accessories" ,[ "big beard ", "clown nose ", "cowboy hat ", "earring",],),
  //3801"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "muttonchops",],),
  //3802"],),

  new Traits( "female, accessories" ,[ "blonde short ", "vape",],),
  //3803"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "mohawk dark",],),
  //3804"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "nerd glasses ", "vape",],),
  //3805"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "normal beard black ", "stringy hair",],),
  //3806"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "clown eyes blue ", "wild hair",],),
  //3807"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "cowboy hat ", "vape",],),
  //3808"],),

  new Traits( "male, accessories" ,[ "hoodie ", "small shades",],),
  //3809"],),

  new Traits( "male, accessories" ,[ "hoodie ", "medical mask ", "smile",],),
  //3810"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "purple eye shadow ", "wild hair",],),
  //3811"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "purple eye shadow ", "spots ", "straight hair blonde",],),
  //3812"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "normal beard",],),
  //3813"],),

  new Traits( "male, accessories" ,[ "smile ", "spots ", "stringy hair",],),
  //3814"],),

  new Traits( "male, accessories" ,[ "cigarette ", "purple hair",],),
  //3815"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "orange side ", "purple lipstick",],),
  //3816"],),

  new Traits( "male, accessories" ,[ "do-rag ", "goat",],),
  //3817"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "headband",],),
  //3818"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "horned rim glasses",],),
  //3819"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk ", "nerd glasses ", "normal beard",],),
  //3820"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "dark hair ", "earring ", "eye patch",],),
  //3821"],),

  new Traits( "male, accessories" ,[ "headband ", "smile",],),
  //3822"],),

  new Traits( "female, accessories" ,[ "half shaved ", "hot lipstick",],),
  //3823"],),

  new Traits( "female, accessories" ,[ "bandana ", "choker ", "horned rim glasses",],),
  //3824"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "do-rag",],),
  //3825"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "frumpy hair ", "vr",],),
  //3826"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "clown nose ", "earring",],),
  //3827"],),

  new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "stringy hair",],),
  //3828"],),

  new Traits( "female, accessories" ,[ "clown nose ", "mohawk dark",],),
  //3829"],),

  new Traits( "male, accessories" ,[ "classic shades ", "headband",],),
  //3830"],),

  new Traits( "zombie, accessories" ,[ "big shades ", "medical mask ", "vampire hair",],),
  //3831"],),

  new Traits( "male, accessories" ,[ "clown nose ", "fedora ", "handlebars",],),
  //3832"],),

  new Traits( "male, accessories" ,[ "cap ", "earring ", "horned rim glasses ", "luxurious beard",],),
  //3833"],),

  new Traits( "male, accessories" ,[ "classic shades ", "front beard ", "frumpy hair",],),
  //3834"],),

  new Traits( "male, accessories" ,[ "big shades ", "mohawk dark",],),
  //3835"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "front beard",],),
  //3836"],),

  new Traits( "male, accessories" ,[ "eye patch ", "frumpy hair ", "normal beard black",],),
  //3837"],),

  new Traits( "male, accessories" ,[ "headband ", "muttonchops ", "vr",],),
  //3838"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "eye mask ", "front beard dark",],),
  //3839"],),

  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "mohawk dark",],),
  //3840"],),

  new Traits( "female, accessories" ,[ "earring ", "orange side",],),
  //3841"],),

  new Traits( "female, accessories" ,[ "bandana ", "regular shades",],),
  //3842"],),

  new Traits( "male, accessories" ,[ "cap ", "cigarette ", "front beard dark ", "regular shades",],),
  //3843"],),

  new Traits( "male, accessories" ,[ "fedora ", "handlebars",],),
  //3844"],),

  new Traits( "male, accessories" ,[ "goat ", "nerd glasses",],),
  //3845"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "frumpy hair",],),
  //3846"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "mohawk dark ", "regular shades",],),
  //3847"],),

  new Traits( "female, accessories" ,[ "eye patch ", "mohawk",],),
  //3848"],),

  new Traits( "male, accessories" ,[ "cigarette ", "clown nose ", "headband ", "shadow beard",],),
  //3849"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "pigtails",],),
  //3850"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "shaved head",],),
  //3851"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "eye patch ", "frown ", "handlebars",],),
  //3852"],),

  new Traits( "female, accessories" ,[ "regular shades ", "straight hair",],),
  //3853"],),

  new Traits( "male, accessories" ,[ "earring ", "police cap",],),
  //3854"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "knitted cap",],),
  //3855"],),

  new Traits( "female, accessories" ,[ "cap ", "earring",],),
  //3856"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "shaved head",],),
  //3857"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "clown nose ", "earring ", "knitted cap ", "purple lipstick",],),
  //3858"],),

  new Traits( "female, accessories" ,[ "cigarette ", "mohawk thin ", "vr",],),
  //3859"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "mohawk ", "shadow beard",],),
  //3860"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "wild blonde",],),
  //3861"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "small shades",],),
  //3862"],),

  new Traits( "male, accessories" ,[ "bandana ", "gold chain",],),
  //3863"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "horned rim glasses",],),
  //3864"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "knitted cap ", "nerd glasses",],),
  //3865"],),

  new Traits( "male, accessories" ,[ "cap ", "vr",],),
  //3866"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "tassle hat",],),
  //3867"],),

  new Traits( "male, accessories" ,[ "cigarette ", "stringy hair",],),
  //3868"],),

  new Traits( "male, accessories" ,[ "eye mask ", "peak spike ", "shadow beard ", "vape",],),
  //3869"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "purple lipstick ", "straight hair blonde",],),
  //3870"],),

  new Traits( "male, accessories" ,[ "clown nose ", "front beard dark ", "medical mask ", "messy hair ", "smile",],),
  //3871"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "earring ", "mustache ", "nerd glasses",],),
  //3872"],),

  new Traits( "male, accessories" ,[ "big shades ", "hoodie",],),
  //3873"],),

  new Traits( "female, accessories" ,[ "bandana ", "horned rim glasses",],),
  //3874"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "silver chain",],),
  //3875"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "hoodie",],),
  //3876"],),

  new Traits( "male, accessories" ,[ "front beard ", "headband",],),
  //3877"],),

  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "headband",],),
  //3878"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk thin ", "purple eye shadow",],),
  //3879"],),

  new Traits( "male, accessories" ,[ "do-rag ", "handlebars ", "mole",],),
  //3880"],),

  new Traits( "male, accessories" ,[ "eye mask ", "fedora",],),
  //3881"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown hair green",],),
  //3882"],),

  new Traits( "male, accessories" ,[ "vr ", "wild hair",],),
  //3883"],),

  new Traits( "female, accessories" ,[ "classic shades ", "messy hair",],),
  //3884"],),

  new Traits( "female, accessories" ,[ "clown hair green ", "green eye shadow",],),
  //3885"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "silver chain",],),
  //3886"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "top hat",],),
  //3887"],),

  new Traits( "male, accessories" ,[ "big shades ", "clown nose ", "handlebars ", "messy hair",],),
  //3888"],),

  new Traits( "male, accessories" ,[ "police cap ", "smile",],),
  //3889"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "horned rim glasses ", "stringy hair",],),
  //3890"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "hot lipstick ", "mole",],),
  //3891"],),

  new Traits( "male, accessories" ,[ "eye patch ", "luxurious beard ", "shaved head",],),
  //3892"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "normal beard ", "regular shades",],),
  //3893"],),

  new Traits( "female, accessories" ,[ "cap ", "pipe",],),
  //3894"],),

  new Traits( "male, accessories" ,[ "classic shades ", "hoodie ", "mustache",],),
  //3895"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "hoodie",],),
  //3896"],),

  new Traits( "male, accessories" ,[ "earring ", "regular shades ", "shaved head",],),
  //3897"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "gold chain",],),
  //3898"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "knitted cap",],),
  //3899"],),

  new Traits( "male, accessories" ,[ "cap ", "clown eyes blue ", "earring ", "gold chain",],),
  //3900"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "vape",],),
  //3901"],),

  new Traits( "male, accessories" ,[ "cigarette ", "frumpy hair ", "luxurious beard",],),
  //3902"],),

  new Traits( "male, accessories" ,[ "eye patch ", "headband ", "luxurious beard",],),
  //3903"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "fedora",],),
  //3904"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "mustache",],),
  //3905"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "small shades",],),
  //3906"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "earring ", "fedora ", "muttonchops",],),
  //3907"],),

  new Traits( "female, accessories" ,[ "dark hair ", "medical mask ", "purple lipstick",],),
  //3908"],),

  new Traits( "female, accessories" ,[ "dark hair ", "earring ", "purple lipstick",],),
  //3909"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "eye patch",],),
  //3910"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "knitted cap ", "purple lipstick",],),
  //3911"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk ", "mole",],),
  //3912"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "mohawk thin",],),
  //3913"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "mole",],),
  //3914"],),

  new Traits( "male, accessories" ,[ "stringy hair ", "vape",],),
  //3915"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "top hat",],),
  //3916"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "earring ", "headband",],),
  //3917"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "mohawk thin",],),
  //3918"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "red mohawk",],),
  //3919"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk thin",],),
  //3920"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "horned rim glasses",],),
  //3921"],),

  new Traits( "male, accessories" ,[ "classic shades ", "stringy hair",],),
  //3922"],),

  new Traits( "male, accessories" ,[ "cap ", "cigarette",],),
  //3923"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "nerd glasses",],),
  //3924"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "do-rag",],),
  //3925"],),

  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "shadow beard",],),
  //3926"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "shaved head ", "vr",],),
  //3927"],),

  new Traits( "male, accessories" ,[ "mole ", "regular shades ", "vampire hair",],),
  //3928"],),

  new Traits( "male, accessories" ,[ "frown ", "regular shades ", "shaved head",],),
  //3929"],),

  new Traits( "male, accessories" ,[ "bandana ", "cigarette ", "earring ", "handlebars",],),
  //3930"],),

  new Traits( "male, accessories" ,[ "goat ", "vampire hair",],),
  //3931"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "hot lipstick ", "pink with hat",],),
  //3932"],),

  new Traits( "male, accessories" ,[ "earring ", "shadow beard ", "vape, "wild hair",],),
  //3933"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "crazy hair ", "earring ", "normal beard",],),
  //3934"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "shaved head",],),
  //3935"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "frumpy hair",],),
  //3936"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "wild hair",],),
  //3937"],),

  new Traits( "male, accessories" ,[ "clown nose ", "mohawk ", "shadow beard",],),
  //3938"],),

  new Traits( "female, accessories" ,[ "eye mask ", "mohawk thin",],),
  //3939"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "half shaved",],),
  //3940"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "shaved head",],),
  //3941"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "purple hair ", "vr",],),
  //3942"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "cap forward ", "medical mask ", "spots",],),
  //3943"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "muttonchops ", "police cap",],),
  //3944"],),

  new Traits( "male, accessories" ,[ "cap ", "horned rim glasses ", "normal beard",],),
  //3945"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "mole ", "purple lipstick",],),
  //3946"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "mohawk",],),
  //3947"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "straight hair dark",],),
  //3948"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "half shaved ", "purple eye shadow",],),
  //3949"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "crazy hair ", "earring ", "hot lipstick",],),
  //3950"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk thin ", "purple eye shadow",],),
  //3951"],),

  new Traits( "male, accessories" ,[ "cigarette ", "handlebars ", "messy hair",],),
  //3952"],),

  new Traits( "male, accessories" ,[ "goat ", "pipe ", "wild hair",],),
  //3953"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "half shaved",],),
  //3954"],),

  new Traits( "male, accessories" ,[ "fedora ", "horned rim glasses",],),
  //3955"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "shaved head",],),
  //3956"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "crazy hair ", "purple eye shadow",],),
  //3957"],),

  new Traits( "male, accessories" ,[ "cigarette ", "headband ", "regular shades",],),
  //3958"],),

  new Traits( "female, accessories" ,[ "cigarette ", "stringy hair",],),
  //3959"],),

  new Traits( "male, accessories" ,[ "do-rag ", "small shades",],),
  //3960"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "clown nose ", "earring ", "mohawk thin",],),
  //3961"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "straight hair blonde",],),
  //3962"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring",],),
  //3963"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "dark hair ", "green eye shadow ", "mole",],),
  //3964"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "straight hair",],),
  //3965"],),
  
  
  new Traits( "male, accessories" ,[ "earring ", "shadow beard ", "small shades ", "vampire hair",],),
  //3966"],),

  new Traits( "male, accessories" ,[ "rosy cheeks ", "vampire hair",],),
  //3967"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "earring ", "shadow beard ", "stringy hair",],),
  //3968"],),

  new Traits( "female, accessories" ,[ "cigarette ", "hot lipstick ", "mohawk thin",],),
  //3969"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "tassle hat",],),
  //3970"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard ", "knitted cap",],),
  //3971"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "stringy hair",],),
  //3972"],),

  new Traits( "male, accessories" ,[ "muttonchops ", "purple hair ", "small shades",],),
  //3973"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk ", "purple eye shadow ", "rosy cheeks",],),
  //3974"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "tassle hat",],),
  //3975"],),

  new Traits( "female, accessories" ,[ "earring ", "horned rim glasses ", "hot lipstick ", "straight hair dark",],),
  //3976"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "mohawk dark ", "vr",],),
  //3977"],),

  new Traits( "male, accessories" ,[ "mole ", "smile ", "wild hair",],),
  //3978"],),

  new Traits( "male, accessories" ,[ "cap forward ", "normal beard black",],),
  //3979"],),

  new Traits( "male, accessories" ,[ "eye mask ", "headband",],),
  //3980"],),

  new Traits( "female, accessories" ,[ "clown nose ", "green eye shadow ", "red mohawk",],),
  //3981"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "small shades ", "smile",],),
  //3982"],),

  new Traits( "male, accessories" ,[ "hoodie ", "nerd glasses",],),
  //3983"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "tassle hat",],),
  //3984"],),

  new Traits( "female, accessories" ,[ "earring ", "eye patch ", "mohawk ", "purple lipstick",],),
  //3985"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "classic shades ", "mohawk dark ", "mole",],),
  //3986"],),

  new Traits( "male, accessories" ,[ "eye mask ", "mohawk dark",],),
  //3987"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "cap",],),
  //3988"],),

  new Traits( "male, accessories" ,[ "mustache ", "shaved head ", "small shades",],),
  //3989"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "hoodie",],),
  //3990"],),

  new Traits( "female, accessories" ,[ "choker ", "hot lipstick ", "purple eye shadow ", "straight hair",],),
  //3991"],),

  new Traits( "male, accessories" ,[ "gold chain ", "mohawk dark",],),
  //3992"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "peak spike",],),
  //3993"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "shadow beard ", "small shades",],),
  //3994"],),

  new Traits( "female, accessories" ,[ "purple eye shadow ", "purple lipstick ", "red mohawk",],),
  //3995"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "mohawk ", "nerd glasses",],),
  //3996"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "mohawk dark ", "purple lipstick",],),
  //3997"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "half shaved",],),
  //3998"],),

  new Traits( "female, accessories" ,[ "big shades ", "earring ", "hot lipstick ", "pipe ", "straight hair blonde",],),
  //3999"],),
  }],),
  ],),
  "data" ,],),
  "nfts" , [],),
  ],),
  new Traits( "male, accessories" ,[ "bandana ", "small shades",],),
  //4000"],),

  new Traits( "male, accessories" ,[ "cigarette ", "classic shades ", "front beard dark ", "stringy hair",],),
  //4001"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "frown ", "small shades",],),
  //4002"],),

  new Traits( "male, accessories" ,[ "do-rag ", "medical mask ", "shadow beard",],),
  //4003"],),

  new Traits( "female, accessories" ,[ "eye patch ", "tiara",],),
  //4004"],),

  new Traits( "male, accessories" ,[ "peak spike ", "smile",],),
  //4005"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk thin ", "purple lipstick",],),
  //4006"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "frumpy hair ", "regular shades",],),
  //4007"],),

  new Traits( "male, accessories" ,[ "beanie ", "nerd glasses",],),
  //4008"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes blue ", "headband",],),
  //4009"],),

  new Traits( "female, accessories" ,[ "mohawk ", "welding goggles",],),
  //4010"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mustache ", "stringy hair",],),
  //4011"],),

  new Traits( "male, accessories" ,[ "top hat",],),
  //4012"],),

  new Traits( "male, accessories" ,[ "big shades ", "muttonchops ", "police cap",],),
  //4013"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "normal beard",],),
  //4014"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "welding goggles ", "wild white hair",],),
  //4015"],),

  new Traits( "female, accessories" ,[ "earring ", "regular shades ", "straight hair",],),
  //4016"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "normal beard",],),
  //4017"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "pipe ", "tassle hat",],),
  //4018"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "hot lipstick ", "straight hair blonde ", "vape",],),
  //4019"],),

  new Traits( "male, accessories" ,[ "front beard ", "nerd glasses ", "police cap",],),
  //4020"],),

  new Traits( "female, accessories" ,[ "pink with hat",],),
  //4021"],),

  new Traits( "male, accessories" ,[ "eye mask ", "fedora ", "handlebars",],),
  //4022"],),

  new Traits( "male, accessories" ,[ "bandana ", "chinstrap",],),
  //4023"],),

  new Traits( "male, accessories" ,[ "cap ", "frown ", "regular shades",],),
  //4024"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "normal beard ", "small shades",],),
  //4025"],),

  new Traits( "male, accessories" ,[ "big shades ", "spots",],),
  //4026"],),

  new Traits( "male, accessories" ,[ "messy hair ", "mole ", "pipe",],),
  //4027"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "purple lipstick ", "wild hair",],),
  //4028"],),

  new Traits( "male, accessories" ,[ "big beard ", "top hat",],),
  //4029"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "hot lipstick ", "wild hair",],),
  //4030"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "luxurious beard ", "regular shades",],),
  //4031"],),

  new Traits( "female, accessories" ,[ "blonde short ", "green eye shadow ", "purple lipstick",],),
  //4032"],),

  new Traits( "male, accessories" ,[ "earring ", "shadow beard ", "shaved head ", "vr",],),
  //4033"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "knitted cap ", "luxurious beard",],),
  //4034"],),

  new Traits( "male, accessories" ,[ "handlebars ", "small shades ", "stringy hair ", "vape",],),
  //4035"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "purple lipstick ", "wild hair",],),
  //4036"],),

  new Traits( "female, accessories" ,[ "half shaved ", "purple lipstick ", "vape",],),
  //4037"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "mohawk dark",],),
  //4038"],),

  new Traits( "male, accessories" ,[ "eye patch ", "knitted cap ", "shadow beard",],),
  //4039"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "normal beard black",],),
  //4040"],),

  new Traits( "male, accessories" ,[ "small shades ", "top hat",],),
  //4041"],),

  new Traits( "female, accessories" ,[ "cigarette ", "hot lipstick ", "mohawk",],),
  //4042"],),

  new Traits( "female, accessories" ,[ "classic shades ", "hot lipstick ", "wild blonde",],),
  //4043"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "hot lipstick ", "tassle hat",],),
  //4044"],),

  new Traits( "male, accessories" ,[ "big shades ", "fedora",],),
  //4045"],),

  new Traits( "female, accessories" ,[ "mole ", "purple lipstick ", "stringy hair",],),
  //4046"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "hoodie",],),
  //4047"],),

  new Traits( "female, accessories" ,[ "pink with hat ", "purple eye shadow",],),
  //4048"],),

  new Traits( "male, accessories" ,[ "cap ", "earring",],),
  //4049"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "mohawk",],),
  //4050"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "front beard ", "horned rim glasses",],),
  //4051"],),

  new Traits( "male, accessories" ,[ "bandana ", "big shades ", "handlebars",],),
  //4052"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "mustache",],),
  //4053"],),

  new Traits( "male, accessories" ,[ "big beard ", "big shades ", "messy hair",],),
  //4054"],),

  new Traits( "female, accessories" ,[ "medical mask ", "straight hair",],),
  //4055"],),

  new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "tassle hat ", "vr",],),
  //4056"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "mustache ", "silver chain",],),
  //4057"],),

  new Traits( "male, accessories" ,[ "peak spike ", "regular shades",],),
  //4058"],),

  new Traits( "male, accessories" ,[ "clown nose ", "eye patch ", "stringy hair",],),
  //4059"],),

  new Traits( "male, accessories" ,[ "clown nose ", "knitted cap ", "regular shades",],),
  //4060"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "purple lipstick ", "wild blonde",],),
  //4061"],),

  new Traits( "male, accessories" ,[ "hoodie ", "small shades",],),
  //4062"],),

  new Traits( "male, accessories" ,[ "cap forward ", "classic shades",],),
  //4063"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "stringy hair",],),
  //4064"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "half shaved ", "hot lipstick",],),
  //4065"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "vr",],),
  //4066"],),

  new Traits( "female, accessories" ,[ "bandana ", "cigarette ", "earring ", "horned rim glasses",],),
  //4067"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "mohawk ", "mustache",],),
  //4068"],),

  new Traits( "female, accessories" ,[ "mohawk dark ", "purple lipstick",],),
  //4069"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "horned rim glasses",],),
  //4070"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "crazy hair ", "earring",],),
  //4071"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "headband ", "hot lipstick",],),
  //4072"],),

  new Traits( "female, accessories" ,[ "half shaved ", "purple eye shadow ", "purple lipstick",],),
  //4073"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "hot lipstick ", "rosy cheeks",],),
  //4074"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blonde short ", "gold chain ", "green eye shadow",],),
  //4075"],),

  new Traits( "male, accessories" ,[ "cigarette ", "regular shades ", "wild hair",],),
  //4076"],),

  new Traits( "male, accessories" ,[ "earring ", "wild hair",],),
  //4077"],),

  new Traits( "female, accessories" ,[ "clown nose ", "mohawk thin ", "mole",],),
  //4078"],),

  new Traits( "male, accessories" ,[ "cap forward ", "mustache ", "regular shades",],),
  //4079"],),

  new Traits( "female, accessories" ,[ "green eye shadow",],),
  //4080"],),

  new Traits( "male, accessories" ,[ "big beard ", "peak spike",],),
  //4081"],),

  new Traits( "male, accessories" ,[ "mustache ", "pipe ", "top hat",],),
  //4082"],),

  new Traits( "female, accessories" ,[ "mole ", "purple lipstick ", "wild hair",],),
  //4083"],),

  new Traits( "male, accessories" ,[ "big shades ", "mole ", "vampire hair",],),
  //4084"],),

  new Traits( "female, accessories" ,[ "earring ", "knitted cap",],),
  //4085"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "purple lipstick ", "wild white hair",],),
  //4086"],),

  new Traits( "female, accessories" ,[ "choker ", "hot lipstick ", "tassle hat",],),
  //4087"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "headband",],),
  //4088"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "purple lipstick ", "regular shades",],),
  //4089"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "peak spike",],),
  //4090"],),

  new Traits( "male, accessories" ,[ "classic shades ", "shadow beard ", "stringy hair",],),
  //4091"],),

  new Traits( "female, accessories" ,[ "nerd glasses ", "purple lipstick ", "wild hair",],),
  //4092"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "hot lipstick ", "straight hair blonde",],),
  //4093"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "headband ", "medical mask",],),
  //4094"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "tassle hat",],),
  //4095"],),

  new Traits( "male, accessories" ,[ "big shades ", "cap forward ", "front beard dark",],),
  //4096"],),

  new Traits( "male, accessories" ,[ "normal beard black ", "vampire hair",],),
  //4097"],),

  new Traits( "male, accessories" ,[ "cap forward ", "cigarette ", "front beard",],),
  //4098"],),

  new Traits( "female, accessories" ,[ "cigarette ", "hot lipstick ", "wild blonde",],),
  //4099"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "hot lipstick ", "stringy hair",],),
  //4100"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "mole ", "wild white hair",],),
  //4101"],),

  new Traits( "male, accessories" ,[ "handlebars ", "peak spike",],),
  //4102"],),

  new Traits( "female, accessories" ,[ "mole ", "wild white hair",],),
  //4103"],),

  new Traits( "male, accessories" ,[ "cigarette ", "front beard dark ", "mohawk dark",],),
  //4104"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk thin ", "spots",],),
  //4105"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "tassle hat",],),
  //4106"],),

  new Traits( "female, accessories" ,[ "cigarette ", "clown eyes green ", "red mohawk",],),
  //4107"],),

  new Traits( "male, accessories" ,[ "earring ", "messy hair ", "small shades",],),
  //4108"],),

  new Traits( "male, accessories" ,[ "normal beard black ", "purple hair",],),
  //4109"],),

  new Traits( "male, accessories" ,[ "messy hair ", "mustache ", "nerd glasses",],),
  //4110"],),

  new Traits( "male, accessories" ,[ "goat ", "mohawk ", "small shades",],),
  //4111"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "pink with hat",],),
  //4112"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "eye patch",],),
  //4113"],),

  new Traits( "male, accessories" ,[ "cap forward ", "normal beard",],),
  //4114"],),

  new Traits( "male, accessories" ,[ "cap forward ", "small shades",],),
  //4115"],),

  new Traits( "female, accessories" ,[ "bandana ", "hot lipstick ", "nerd glasses",],),
  //4116"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "hot lipstick ", "stringy hair",],),
  //4117"],),

  new Traits( "female, accessories" ,[ "half shaved ", "purple lipstick",],),
  //4118"],),

  new Traits( "male, accessories" ,[ "regular shades ", "shaved head ", "vape",],),
  //4119"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk thin",],),
  //4120"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "cigarette ", "earring ", "mohawk ", "silver chain ", "spots",],),
  //4121"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "headband ", "mole ", "purple lipstick",],),
  //4122"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "headband",],),
  //4123"],),

  new Traits( "male, accessories" ,[ "eye patch ", "purple hair",],),
  //4124"],),

  new Traits( "male, accessories" ,[ "do-rag ", "vr",],),
  //4125"],),

  new Traits( "male, accessories" ,[ "mohawk ", "pipe ", "small shades",],),
  //4126"],),

  new Traits( "male, accessories" ,[ "clown nose ", "mohawk",],),
  //4127"],),

  new Traits( "male, accessories" ,[ "frumpy hair",],),
  //4128"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "wild blonde",],),
  //4129"],),

  new Traits( "female, accessories" ,[ "dark hair ", "purple lipstick",],),
  //4130"],),

  new Traits( "male, accessories" ,[ "mustache ", "regular shades",],),
  //4131"],),

  new Traits( "female, accessories" ,[ "blonde short ", "vr",],),
  //4132"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "wild blonde",],),
  //4133"],),

  new Traits( "female, accessories" ,[ "cigarette ", "frumpy hair",],),
  //4134"],),

  new Traits( "male, accessories" ,[ "cigarette ", "crazy hair",],),
  //4135"],),

  new Traits( "male, accessories" ,[ "beanie ", "horned rim glasses",],),
  //4136"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "vape",],),
  //4137"],),

  new Traits( "male, accessories" ,[ "big shades ", "front beard ", "frumpy hair",],),
  //4138"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "red mohawk",],),
  //4139"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blonde short ", "clown eyes blue",],),
  //4140"],),

  new Traits( "male, accessories" ,[ "messy hair ", "pipe ", "regular shades ", "smile",],),
  //4141"],),

  new Traits( "male, accessories" ,[ "frown ", "headband",],),
  //4142"],),

  new Traits( "male, accessories" ,[ "smile",],),
  //4143"],),

  new Traits( "female, accessories" ,[ "clown hair green",],),
  //4144"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk dark ", "pipe",],),
  //4145"],),

  new Traits( "female, accessories" ,[ "eye patch ", "wild hair",],),
  //4146"],),

  new Traits( "female, accessories" ,[ "earring ", "horned rim glasses ", "mohawk dark ", "purple lipstick",],),
  //4147"],),

  new Traits( "male, accessories" ,[ "cap forward ", "luxurious beard ", "regular shades",],),
  //4148"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "wild hair",],),
  //4149"],),

  new Traits( "male, accessories" ,[ "big shades ", "frumpy hair",],),
  //4150"],),

  new Traits( "female, accessories" ,[ "earring ", "mole ", "purple eye shadow ", "straight hair dark",],),
  //4151"],),

  new Traits( "female, accessories" ,[ "big shades ", "black lipstick ", "stringy hair",],),
  //4152"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "mole ", "wild white hair",],),
  //4153"],),

  new Traits( "male, accessories" ,[ "clown nose ", "do-rag",],),
  //4154"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "goat",],),
  //4155"],),

  new Traits( "ape, accessories" ,[ "bandana",],),
  //4156"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "front beard dark",],),
  //4157"],),

  new Traits( "male, accessories" ,[ "headband ", "luxurious beard",],),
  //4158"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "red mohawk ", "silver chain",],),
  //4159"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "purple hair ", "small shades",],),
  //4160"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "mohawk dark",],),
  //4161"],),

  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "front beard ", "horned rim glasses",],),
  //4162"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "shadow beard",],),
  //4163"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "headband",],),
  //4164"],),

  new Traits( "male, accessories" ,[ "purple hair ", "vr",],),
  //4165"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blonde bob ", "earring ", "purple eye shadow",],),
  //4166"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk dark ", "vr",],),
  //4167"],),

  new Traits( "female, accessories" ,[ "cigarette ", "hot lipstick ", "mole ", "stringy hair",],),
  //4168"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "hot lipstick ", "tassle hat",],),
  //4169"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring",],),
  //4170"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "mole",],),
  //4171"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mohawk",],),
  //4172"],),

  new Traits( "male, accessories" ,[ "clown nose ", "medical mask ", "mohawk thin ", "nerd glasses",],),
  //4173"],),

  new Traits( "male, accessories" ,[ "mohawk ", "mole",],),
  //4174"],),

  new Traits( "male, accessories" ,[ "eye patch ", "handlebars ", "shaved head",],),
  //4175"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "medical mask ", "purple lipstick ", "straight hair blonde",],),
  //4176"],),

  new Traits( "male, accessories" ,[ "cigarette ", "nerd glasses ", "peak spike",],),
  //4177"],),

  new Traits( "ape, accessories" ,[ "do-rag",],),
  //4178"],),

  new Traits( "male, accessories" ,[ "big shades ", "front beard ", "peak spike",],),
  //4179"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "eye mask ", "mohawk",],),
  //4180"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "handlebars ", "wild hair",],),
  //4181"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "shadow beard",],),
  //4182"],),

  new Traits( "female, accessories" ,[ "regular shades ", "wild blonde",],),
  //4183"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "hot lipstick ", "mohawk",],),
  //4184"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "small shades",],),
  //4185"],),

  new Traits( "male, accessories" ,[ "classic shades ", "frumpy hair",],),
  //4186"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "small shades",],),
  //4187"],),

  new Traits( "female, accessories" ,[ "dark hair ", "nerd glasses",],),
  //4188"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "knitted cap",],),
  //4189"],),

  new Traits( "female, accessories" ,[ "earring ", "half shaved ", "hot lipstick",],),
  //4190"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk ", "nerd glasses ", "pipe",],),
  //4191"],),

  new Traits( "male, accessories" ,[ "earring ", "goat ", "rosy cheeks ", "shaved head",],),
  //4192"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "normal beard black",],),
  //4193"],),

  new Traits( "female, accessories" ,[ "clown nose ", "hot lipstick ", "stringy hair",],),
  //4194"],),

  new Traits( "female, accessories" ,[ "dark hair ", "mole",],),
  //4195"],),

  new Traits( "female, accessories" ,[ "clown hair green ", "purple lipstick",],),
  //4196"],),

  new Traits( "male, accessories" ,[ "do-rag ", "normal beard",],),
  //4197"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "straight hair dark",],),
  //4198"],),

  new Traits( "male, accessories" ,[ "big shades ", "mohawk dark ", "normal beard black",],),
  //4199"],),

  new Traits( "female, accessories" ,[ "dark hair ", "hot lipstick",],),
  //4200"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "messy hair",],),
  //4201"],),

  new Traits( "male, accessories" ,[ "earring ", "knitted cap ", "normal beard",],),
  //4202"],),

  new Traits( "male, accessories" ,[ "goat ", "headband",],),
  //4203"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "clown eyes green ", "earring ", "messy hair",],),
  //4204"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "mustache",],),
  //4205"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "classic shades ", "crazy hair",],),
  //4206"],),

  new Traits( "male, accessories" ,[ "goat ", "hoodie ", "mole",],),
  //4207"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "stringy hair",],),
  //4208"],),

  new Traits( "male, accessories" ,[ "bandana ", "small shades ", "vape",],),
  //4209"],),

  new Traits( "male, accessories" ,[ "big shades ", "cap forward ", "earring ", "shadow beard",],),
  //4210"],),

  new Traits( "female, accessories" ,[ "eye patch ", "orange side",],),
  //4211"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "headband ", "mole",],),
  //4212"],),

  new Traits( "female, accessories" ,[ "bandana ", "nerd glasses",],),
  //4213"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "pink with hat",],),
  //4214"],),

  new Traits( "female, accessories" ,[ "big shades ", "black lipstick ", "dark hair",],),
  //4215"],),

  new Traits( "male, accessories" ,[ "mohawk ", "shadow beard ", "small shades",],),
  //4216"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "do-rag ", "normal beard",],),
  //4217"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "earring ", "wild blonde",],),
  //4218"],),

  new Traits( "male, accessories" ,[ "messy hair ", "mole",],),
  //4219"],),

  new Traits( "male, accessories" ,[ "big shades ", "hoodie ", "shadow beard",],),
  //4220"],),

  new Traits( "male, accessories" ,[ "headband ", "normal beard black ", "vape",],),
  //4221"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "pigtails",],),
  //4222"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "muttonchops ", "vr",],),
  //4223"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "dark hair ", "nerd glasses",],),
  //4224"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "straight hair blonde",],),
  //4225"],),

  new Traits( "male, accessories" ,[ "handlebars",],),
  //4226"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "mohawk dark",],),
  //4227"],),

  new Traits( "male, accessories" ,[ "big beard ", "cap forward ", "classic shades",],),
  //4228"],),

  new Traits( "female, accessories" ,[ "big shades ", "half shaved ", "hot lipstick",],),
  //4229"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "messy hair",],),
  //4230"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "dark hair ", "earring ", "medical mask ", "purple lipstick",],),
  //4231"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "crazy hair",],),
  //4232"],),

  new Traits( "male, accessories" ,[ "bandana ", "nerd glasses ", "normal beard black",],),
  //4233"],),

  new Traits( "male, accessories" ,[ "earring ", "gold chain ", "horned rim glasses ", "purple hair",],),
  //4234"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "hot lipstick ", "straight hair blonde",],),
  //4235"],),

  new Traits( "female, accessories" ,[ "bandana ", "choker ", "earring",],),
  //4236"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "pigtails ", "purple lipstick",],),
  //4237"],),

  new Traits( "male, accessories" ,[ "big shades ", "do-rag",],),
  //4238"],),

  new Traits( "female, accessories" ,[ "cigarette ", "clown eyes blue ", "dark hair ", "rosy cheeks",],),
  //4239"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "earring ", "goat",],),
  //4240"],),

  new Traits( "male, accessories" ,[ "cap ", "earring ", "mole",],),
  //4241"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "hot lipstick ", "mohawk thin",],),
  //4242"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "red mohawk",],),
  //4243"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "horned rim glasses ", "peak spike",],),
  //4244"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "mole ", "wild white hair",],),
  //4245"],),

  new Traits( "male, accessories" ,[ "hoodie ", "silver chain ", "small shades",],),
  //4246"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "headband ", "hot lipstick",],),
  //4247"],),

  new Traits( "male, accessories" ,[ "goat ", "stringy hair",],),
  //4248"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "messy hair",],),
  //4249"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "welding goggles ", "wild hair",],),
  //4250"],),

  new Traits( "male, accessories" ,[ "earring ", "mustache ", "top hat ", "vr",],),
  //4251"],),

  new Traits( "male, accessories" ,[ "eye patch ", "goat ", "shaved head",],),
  //4252"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora",],),
  //4253"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "earring ", "purple eye shadow ", "purple lipstick",],),
  //4254"],),

  new Traits( "male, accessories" ,[ "cap ", "clown nose ", "shadow beard ", "small shades",],),
  //4255"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "headband",],),
  //4256"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk thin ", "purple eye shadow",],),
  //4257"],),

  new Traits( "male, accessories" ,[ "classic shades ", "handlebars",],),
  //4258"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "horned rim glasses ", "medical mask ", "shadow beard",],),
  //4259"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mohawk ", "silver chain ", "vr",],),
  //4260"],),

  new Traits( "male, accessories" ,[ "cigarette ", "do-rag ", "normal beard black ", "silver chain",],),
  //4261"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "shadow beard",],),
  //4262"],),

  new Traits( "female, accessories" ,[ "mohawk ", "pipe",],),
  //4263"],),

  new Traits( "female, accessories" ,[ "silver chain ", "wild blonde",],),
  //4264"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "frumpy hair",],),
  //4265"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "hot lipstick ", "knitted cap",],),
  //4266"],),

  new Traits( "female, accessories" ,[ "blonde short ", "purple lipstick",],),
  //4267"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "cigarette ", "wild white hair",],),
  //4268"],),

  new Traits( "female, accessories" ,[ "messy hair ", "purple lipstick",],),
  //4269"],),

  new Traits( "female, accessories" ,[ "messy hair ", "nerd glasses ", "purple lipstick",],),
  //4270"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "purple hair",],),
  //4271"],),

  new Traits( "male, accessories" ,[ "earring ", "peak spike ", "shadow beard ", "silver chain",],),
  //4272"],),

  new Traits( "female, accessories" ,[ "bandana ", "clown eyes green",],),
  //4273"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk dark ", "regular shades",],),
  //4274"],),

  new Traits( "female, accessories" ,[ "big shades ", "hot lipstick ", "stringy hair",],),
  //4275"],),

  new Traits( "female, accessories" ,[ "big shades ", "straight hair blonde",],),
  //4276"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "wild hair",],),
  //4277"],),

  new Traits( "male, accessories" ,[ "mustache ", "police cap",],),
  //4278"],),

  new Traits( "female, accessories" ,[ "nerd glasses ", "straight hair",],),
  //4279"],),

  new Traits( "male, accessories" ,[ "cap forward ", "frown ", "regular shades ", "shadow beard",],),
  //4280"],),

  new Traits( "female, accessories" ,[ "classic shades ", "wild white hair",],),
  //4281"],),

  new Traits( "male, accessories" ,[ "classic shades ", "vampire hair",],),
  //4282"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cap ", "earring ", "shadow beard",],),
  //4283"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "medical mask ", "muttonchops",],),
  //4284"],),

  new Traits( "male, accessories" ,[ "cap ", "earring ", "normal beard ", "vr",],),
  //4285"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "hot lipstick ", "straight hair blonde",],),
  //4286"],),

  new Traits( "male, accessories" ,[ "do-rag ", "horned rim glasses",],),
  //4287"],),

  new Traits( "female, accessories" ,[ "rosy cheeks ", "wild white hair",],),
  //4288"],),

  new Traits( "male, accessories" ,[ "cap forward ", "eye mask ", "smile",],),
  //4289"],),

  new Traits( "male, accessories" ,[ "handlebars ", "top hat",],),
  //4290"],),

  new Traits( "male, accessories" ,[ "bandana ", "goat",],),
  //4291"],),

  new Traits( "male, accessories" ,[ "bandana ", "eye mask",],),
  //4292"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mohawk dark ", "nerd glasses",],),
  //4293"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "hot lipstick ", "wild hair",],),
  //4294"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard black ", "vampire hair",],),
  //4295"],),

  new Traits( "male, accessories" ,[ "do-rag ", "mole ", "regular shades ", "shadow beard",],),
  //4296"],),

  new Traits( "male, accessories" ,[ "eye patch ", "shadow beard ", "stringy hair",],),
  //4297"],),

  new Traits( "male, accessories" ,[ "earring ", "knitted cap ", "regular shades ", "smile",],),
  //4298"],),

  new Traits( "male, accessories" ,[ "messy hair ", "muttonchops",],),
  //4299"],),

  new Traits( "female, accessories" ,[ "mole ", "pink with hat",],),
  //4300"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "vr ", "wild white hair",],),
  //4301"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "purple lipstick ", "straight hair",],),
  //4302"],),

  new Traits( "male, accessories" ,[ "do-rag ", "muttonchops ", "small shades",],),
  //4303"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "red mohawk",],),
  //4304"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cap ", "purple eye shadow",],),
  //4305"],),

  new Traits( "female, accessories" ,[ "earring ", "stringy hair",],),
  //4306"],),

  new Traits( "male, accessories" ,[ "earring ", "knitted cap ", "regular shades ", "shadow beard",],),
  //4307"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "wild hair",],),
  //4308"],),

  new Traits( "female, accessories" ,[ "dark hair ", "earring ", "purple eye shadow ", "purple lipstick",],),
  //4309"],),

  new Traits( "female, accessories" ,[ "classic shades ", "messy hair ", "purple lipstick",],),
  //4310"],),

  new Traits( "male, accessories" ,[ "frown ", "mohawk dark ", "nerd glasses",],),
  //4311"],),

  new Traits( "male, accessories" ,[ "big shades ", "chinstrap ", "headband",],),
  //4312"],),

  new Traits( "female, accessories" ,[ "cigarette ", "purple lipstick",],),
  //4313"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "welding goggles",],),
  //4314"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "red mohawk",],),
  //4315"],),

  new Traits( "female, accessories" ,[ "cigarette ", "classic shades ", "earring ", "hot lipstick ", "tassle hat",],),
  //4316"],),

  new Traits( "male, accessories" ,[ "do-rag ", "mustache",],),
  //4317"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "mohawk thin",],),
  //4318"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "hot lipstick ", "straight hair dark",],),
  //4319"],),

  new Traits( "male, accessories" ,[ "cap forward ", "vr",],),
  //4320"],),

  new Traits( "male, accessories" ,[ "front beard ", "frumpy hair",],),
  //4321"],),

  new Traits( "male, accessories" ,[ "frown ", "mohawk thin",],),
  //4322"],),

  new Traits( "male, accessories" ,[ "cigarette ", "cowboy hat",],),
  //4323"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "earring ", "eye mask ", "headband ", "normal beard black",],),
  //4324"],),

  new Traits( "male, accessories" ,[ "classic shades ", "do-rag ", "earring",],),
  //4325"],),

  new Traits( "male, accessories" ,[ "mole ", "wild hair",],),
  //4326"],),

  new Traits( "female, accessories" ,[ "bandana ", "purple eye shadow",],),
  //4327"],),

  new Traits( "male, accessories" ,[ "fedora ", "shadow beard",],),
  //4328"],),

  new Traits( "male, accessories" ,[ "eye mask ", "mohawk thin",],),
  //4329"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "stringy hair",],),
  //4330"],),
  
  
  new Traits( "male, accessories" ,[ "big shades ", "mohawk",],),
  //4331"],),

  new Traits( "female, accessories" ,[ "dark hair ", "earring ", "green eye shadow ", "purple lipstick",],),
  //4332"],),

  new Traits( "female, accessories" ,[ "mole ", "pilot helmet",],),
  //4333"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "hot lipstick ", "wild hair",],),
  //4334"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "mohawk thin",],),
  //4335"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "earring ", "mustache",],),
  //4336"],),

  new Traits( "male, accessories" ,[ "front beard ", "mohawk dark ", "pipe",],),
  //4337"],),

  new Traits( "male, accessories" ,[ "cap forward ", "clown nose ", "nerd glasses",],),
  //4338"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "regular shades",],),
  //4339"],),

  new Traits( "female, accessories" ,[ "mole ", "red mohawk",],),
  //4340"],),

  new Traits( "male, accessories" ,[ "big shades ", "frumpy hair ", "normal beard",],),
  //4341"],),

  new Traits( "male, accessories" ,[ "medical mask ", "peak spike",],),
  //4342"],),

  new Traits( "female, accessories" ,[ "cigarette ", "purple lipstick ", "straight hair dark",],),
  //4343"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "frumpy hair ", "hot lipstick",],),
  //4344"],),

  new Traits( "female, accessories" ,[ "big shades ", "blonde short",],),
  //4345"],),

  new Traits( "female, accessories" ,[ "pink with hat ", "purple eye shadow ", "purple lipstick",],),
  //4346"],),

  new Traits( "female, accessories" ,[ "nerd glasses ", "pink with hat",],),
  //4347"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "mole ", "stringy hair",],),
  //4348"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "mole",],),
  //4349"],),

  new Traits( "male, accessories" ,[ "big beard ", "clown eyes green ", "earring ", "headband",],),
  //4350"],),

  new Traits( "female, accessories" ,[ "clown nose ", "frumpy hair ", "purple lipstick",],),
  //4351"],),

  new Traits( "male, accessories" ,[ "classic shades ", "messy hair ", "normal beard ", "smile",],),
  //4352"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "purple lipstick ", "red mohawk",],),
  //4353"],),

  new Traits( "female, accessories" ,[ "classic shades ", "wild white hair",],),
  //4354"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "vampire hair",],),
  //4355"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "luxurious beard ", "mohawk thin",],),
  //4356"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "regular shades ", "stringy hair",],),
  //4357"],),

  new Traits( "female, accessories" ,[ "choker ", "headband ", "purple lipstick",],),
  //4358"],),

  new Traits( "male, accessories" ,[ "mole ", "stringy hair ", "vr",],),
  //4359"],),

  new Traits( "male, accessories" ,[ "big shades ", "do-rag ", "goat",],),
  //4360"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk ", "normal beard black",],),
  //4361"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "horned rim glasses",],),
  //4362"],),

  new Traits( "male, accessories" ,[ "eye patch ", "normal beard black ", "vampire hair",],),
  //4363"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "crazy hair ", "earring ", "hot lipstick",],),
  //4364"],),

  new Traits( "female, accessories" ,[ "cap ", "hot lipstick",],),
  //4365"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "red mohawk",],),
  //4366"],),

  new Traits( "female, accessories" ,[ "pipe ", "tassle hat",],),
  //4367"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "headband ", "regular shades",],),
  //4368"],),

  new Traits( "male, accessories" ,[ "headband ", "muttonchops ", "regular shades",],),
  //4369"],),

  new Traits( "male, accessories" ,[ "frown ", "mohawk thin ", "shadow beard",],),
  //4370"],),

  new Traits( "male, accessories" ,[ "cap ", "front beard dark ", "frown ", "horned rim glasses",],),
  //4371"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "wild white hair",],),
  //4372"],),

  new Traits( "male, accessories" ,[ "fedora ", "nerd glasses",],),
  //4373"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "messy hair",],),
  //4374"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "vape, "wild hair",],),
  //4375"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "pigtails",],),
  //4376"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "purple eye shadow ", "purple lipstick",],),
  //4377"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "mohawk dark ", "vr",],),
  //4378"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "hoodie ", "shadow beard",],),
  //4379"],),

  new Traits( "female, accessories" ,[ "tiara",],),
  //4380"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown hair green",],),
  //4381"],),

  new Traits( "female, accessories" ,[ "cap ", "gold chain ", "purple lipstick",],),
  //4382"],),

  new Traits( "female, accessories" ,[ "classic shades ", "earring ", "hot lipstick ", "pink with hat",],),
  //4383"],),

  new Traits( "male, accessories" ,[ "do-rag ", "horned rim glasses ", "normal beard black",],),
  //4384"],),

  new Traits( "male, accessories" ,[ "mohawk ", "nerd glasses ", "normal beard black",],),
  //4385"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "shadow beard",],),
  //4386"],),

  new Traits( "male, accessories" ,[ "cigarette ", "headband ", "mustache ", "nerd glasses ", "rosy cheeks",],),
  //4387"],),

  new Traits( "male, accessories" ,[ "normal beard ", "police cap",],),
  //4388"],),

  new Traits( "male, accessories" ,[ "cigarette ", "hoodie ", "nerd glasses",],),
  //4389"],),

  new Traits( "male, accessories" ,[ "clown nose ", "earring ", "front beard dark ", "headband",],),
  //4390"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "mustache",],),
  //4391"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "mole",],),
  //4392"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blonde bob ", "welding goggles",],),
  //4393"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "stringy hair ", "vr",],),
  //4394"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "mohawk thin",],),
  //4395"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "vr ", "wild hair",],),
  //4396"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "pigtails",],),
  //4397"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "purple lipstick ", "vape",],),
  //4398"],),

  new Traits( "male, accessories" ,[ "fedora ", "front beard dark",],),
  //4399"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cap forward",],),
  //4400"],),

  new Traits( "female, accessories" ,[ "eye mask ", "purple lipstick ", "red mohawk",],),
  //4401"],),

  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "peak spike",],),
  //4402"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "earring",],),
  //4403"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "mole ", "shadow beard ", "vr",],),
  //4404"],),

  new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "wild white hair",],),
  //4405"],),

  new Traits( "female, accessories" ,[ "mole ", "stringy hair",],),
  //4406"],),

  new Traits( "male, accessories" ,[ "big shades ", "shadow beard ", "wild hair",],),
  //4407"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "bandana",],),
  //4408"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mohawk thin ", "silver chain",],),
  //4409"],),

  new Traits( "female, accessories" ,[ "clown eyes blue",],),
  //4410"],),

  new Traits( "male, accessories" ,[ "cap forward ", "frown",],),
  //4411"],),

  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "mohawk",],),
  //4412"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "mustache",],),
  //4413"],),

  new Traits( "male, accessories" ,[ "eye mask ", "headband ", "mole ", "normal beard black",],),
  //4414"],),

  new Traits( "male, accessories" ,[ "eye patch ", "luxurious beard ", "mohawk ", "pipe ", "smile",],),
  //4415"],),

  new Traits( "female, accessories" ,[ "classic shades ", "mohawk thin",],),
  //4416"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "blue eye shadow ", "hot lipstick",],),
  //4417"],),

  new Traits( "female, accessories" ,[ "pink with hat ", "purple eye shadow",],),
  //4418"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "muttonchops",],),
  //4419"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "spots ", "wild hair",],),
  //4420"],),

  new Traits( "female, accessories" ,[ "big shades ", "black lipstick ", "frumpy hair",],),
  //4421"],),

  new Traits( "male, accessories" ,[ "earring",],),
  //4422"],),

  new Traits( "female, accessories" ,[ "cap ", "clown eyes blue ", "hot lipstick",],),
  //4423"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "clown eyes green ", "earring ", "wild white hair",],),
  //4424"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "peak spike ", "shadow beard",],),
  //4425"],),

  new Traits( "male, accessories" ,[ "bandana ", "big shades ", "goat ", "mole",],),
  //4426"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "normal beard black",],),
  //4427"],),

  new Traits( "male, accessories" ,[ "cap ", "classic shades ", "earring ", "gold chain",],),
  //4428"],),

  new Traits( "female, accessories" ,[ "earring ", "knitted cap",],),
  //4429"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "frumpy hair",],),
  //4430"],),

  new Traits( "male, accessories" ,[ "earring ", "goat ", "stringy hair",],),
  //4431"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "horned rim glasses",],),
  //4432"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "frumpy hair",],),
  //4433"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "green eye shadow ", "wild hair",],),
  //4434"],),

  new Traits( "male, accessories" ,[ "cap ", "front beard ", "gold chain ", "mole ", "regular shades",],),
  //4435"],),

  new Traits( "male, accessories" ,[ "bandana ", "luxurious beard ", "regular shades",],),
  //4436"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "fedora",],),
  //4437"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "messy hair",],),
  //4438"],),

  new Traits( "female, accessories" ,[ "cigarette ", "clown eyes green ", "dark hair",],),
  //4439"],),

  new Traits( "male, accessories" ,[ "big shades ", "crazy hair ", "earring ", "pipe",],),
  //4440"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "hoodie",],),
  //4441"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "muttonchops",],),
  //4442"],),

  new Traits( "female, accessories" ,[ "bandana ", "nerd glasses",],),
  //4443"],),

  new Traits( "male, accessories" ,[ "mole ", "normal beard black ", "shaved head",],),
  //4444"],),

  new Traits( "male, accessories" ,[ "peak spike ", "small shades",],),
  //4445"],),

  new Traits( "male, accessories" ,[ "cap ", "clown nose ", "normal beard black",],),
  //4446"],),

  new Traits( "male, accessories" ,[ "cap ", "goat",],),
  //4447"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "shadow beard ", "stringy hair",],),
  //4448"],),

  new Traits( "female, accessories" ,[ "earring ", "knitted cap ", "mole ", "purple eye shadow",],),
  //4449"],),

  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "frown",],),
  //4450"],),

  new Traits( "male, accessories" ,[ "do-rag ", "horned rim glasses",],),
  //4451"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "shadow beard ", "vr",],),
  //4452"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "purple lipstick",],),
  //4453"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "mohawk thin",],),
  //4454"],),

  new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "stringy hair",],),
  //4455"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "orange side",],),
  //4456"],),

  new Traits( "male, accessories" ,[ "peak spike ", "rosy cheeks",],),
  //4457"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "front beard ", "spots",],),
  //4458"],),

  new Traits( "male, accessories" ,[ "nerd glasses",],),
  //4459"],),

  new Traits( "male, accessories" ,[ "cap ", "muttonchops",],),
  //4460"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "mole ", "pipe ", "straight hair blonde",],),
  //4461"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "do-rag ", "front beard",],),
  //4462"],),

  new Traits( "male, accessories" ,[ "mohawk ", "pipe",],),
  //4463"],),

  new Traits( "ape, accessories" ,[ "do-rag ", "eye mask ", "vape",],),
  //4464"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "hot lipstick ", "wild hair",],),
  //4465"],),

  new Traits( "male, accessories" ,[ "cigarette ", "do-rag",],),
  //4466"],),

  new Traits( "female, accessories" ,[ "dark hair ", "earring ", "regular shades",],),
  //4467"],),

  new Traits( "female, accessories" ,[ "earring ", "nerd glasses ", "orange side",],),
  //4468"],),

  new Traits( "male, accessories" ,[ "messy hair ", "normal beard ", "vr",],),
  //4469"],),

  new Traits( "male, accessories" ,[ "cap ", "horned rim glasses ", "shadow beard",],),
  //4470"],),

  new Traits( "male, accessories" ,[ "earring ", "knitted cap",],),
  //4471"],),

  new Traits( "zombie, accessories" ,[ "cigarette ", "purple hair",],),
  //4472"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "pipe",],),
  //4473"],),

  new Traits( "male, accessories" ,[ "cap ", "chinstrap",],),
  //4474"],),

  new Traits( "male, accessories" ,[ "cigarette ", "do-rag",],),
  //4475"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "knitted cap",],),
  //4476"],),

  new Traits( "male, accessories" ,[ "eye patch ", "peak spike",],),
  //4477"],),

  new Traits( "male, accessories" ,[ "gold chain ", "mohawk thin ", "muttonchops",],),
  //4478"],),

  new Traits( "male, accessories" ,[ "eye patch ", "mohawk ", "mustache",],),
  //4479"],),

  new Traits( "male, accessories" ,[ "cap forward ", "eye patch",],),
  //4480"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "shadow beard ", "wild hair",],),
  //4481"],),

  new Traits( "male, accessories" ,[ "eye patch ", "mohawk thin ", "shadow beard",],),
  //4482"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora ", "horned rim glasses ", "shadow beard",],),
  //4483"],),

  new Traits( "male, accessories" ,[ "headband ", "regular shades ", "shadow beard",],),
  //4484"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "horned rim glasses ", "pink with hat",],),
  //4485"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "stringy hair",],),
  //4486"],),

  new Traits( "male, accessories" ,[ "cigarette ", "fedora",],),
  //4487"],),

  new Traits( "male, accessories" ,[ "frown ", "mohawk ", "shadow beard",],),
  //4488"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk dark",],),
  //4489"],),

  new Traits( "male, accessories" ,[ "mohawk ", "small shades",],),
  //4490"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "hot lipstick ", "mohawk",],),
  //4491"],),

  new Traits( "male, accessories" ,[ "normal beard ", "pipe ", "police cap",],),
  //4492"],),

  new Traits( "male, accessories" ,[ "goat ", "stringy hair",],),
  //4493"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "shadow beard ", "smile ", "wild hair",],),
  //4494"],),

  new Traits( "male, accessories" ,[ "front beard ", "messy hair",],),
  //4495"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "hot lipstick ", "mohawk thin",],),
  //4496"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "fedora",],),
  //4497"],),

  new Traits( "male, accessories" ,[ "front beard ", "police cap",],),
  //4498"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "vr",],),
  //4499"],),

  new Traits( "female, accessories" ,[ "dark hair ", "purple lipstick ", "welding goggles",],),
  //4500"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "mustache",],),
  //4501"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "straight hair blonde",],),
  //4502"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "shadow beard",],),
  //4503"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "green eye shadow ", "mohawk",],),
  //4504"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "rosy cheeks",],),
  //4505"],),

  new Traits( "male, accessories" ,[ "beanie ", "earring ", "front beard",],),
  //4506"],),

  new Traits( "male, accessories" ,[ "cap forward ", "normal beard black",],),
  //4507"],),

  new Traits( "male, accessories" ,[ "bandana ", "big shades ", "cigarette ", "normal beard black",],),
  //4508"],),

  new Traits( "male, accessories" ,[ "cap ", "normal beard black",],),
  //4509"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "mohawk dark ", "normal beard black",],),
  //4510"],),

  new Traits( "male, accessories" ,[ "do-rag ", "mustache",],),
  //4511"],),

  new Traits( "female, accessories" ,[ "bandana ", "clown eyes green ", "hot lipstick",],),
  //4512"],),

  new Traits( "zombie, accessories" ,[ "beanie ", "earring ", "luxurious beard",],),
  //4513"],),

  new Traits( "female, accessories" ,[ "cap ", "hot lipstick",],),
  //4514"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "clown hair green",],),
  //4515"],),

  new Traits( "female, accessories" ,[ "knitted cap ", "purple eye shadow",],),
  //4516"],),

  new Traits( "female, accessories" ,[ "purple eye shadow ", "wild white hair",],),
  //4517"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "hot lipstick ", "wild hair",],),
  //4518"],),

  new Traits( "male, accessories" ,[ "bandana ", "goat ", "horned rim glasses",],),
  //4519"],),

  new Traits( "male, accessories" ,[ "spots ", "stringy hair",],),
  //4520"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "regular shades ", "shadow beard",],),
  //4521"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "top hat",],),
  //4522"],),

  new Traits( "male, accessories" ,[ "earring ", "messy hair ", "regular shades",],),
  //4523"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mohawk dark",],),
  //4524"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "half shaved ", "pipe",],),
  //4525"],),

  new Traits( "male, accessories" ,[ "clown nose ", "hoodie ", "normal beard",],),
  //4526"],),

  new Traits( "male, accessories" ,[ "bandana ", "vr",],),
  //4527"],),

  new Traits( "male, accessories" ,[ "front beard ", "frown ", "frumpy hair",],),
  //4528"],),

  new Traits( "male, accessories" ,[ "eye mask ", "frown ", "top hat",],),
  //4529"],),

  new Traits( "female, accessories" ,[ "cigarette ", "hot lipstick ", "mohawk",],),
  //4530"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "purple hair ", "small shades",],),
  //4531"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "vape",],),
  //4532"],),

  new Traits( "male, accessories" ,[ "goat ", "police cap ", "vr",],),
  //4533"],),

  new Traits( "male, accessories" ,[ "front beard ", "knitted cap ", "nerd glasses",],),
  //4534"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "pink with hat",],),
  //4535"],),

  new Traits( "female, accessories" ,[ "dark hair ", "purple lipstick ", "vr",],),
  //4536"],),

  new Traits( "female, accessories" ,[ "cap ", "earring ", "hot lipstick",],),
  //4537"],),

  new Traits( "male, accessories" ,[ "front beard ", "peak spike",],),
  //4538"],),

  new Traits( "male, accessories" ,[ "bandana ", "big shades",],),
  //4539"],),

  new Traits( "male, accessories" ,[ "classic shades ", "peak spike",],),
  //4540"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "wild hair",],),
  //4541"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "earring",],),
  //4542"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "luxurious beard",],),
  //4543"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "normal beard black",],),
  //4544"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "purple eye shadow ", "wild white hair",],),
  //4545"],),

  new Traits( "female, accessories" ,[ "earring ", "mole ", "stringy hair",],),
  //4546"],),

  new Traits( "female, accessories" ,[ "bandana ", "earring ", "hot lipstick",],),
  //4547"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "red mohawk",],),
  //4548"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "vr",],),
  //4549"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "headband ", "mustache",],),
  //4550"],),

  new Traits( "male, accessories" ,[ "goat ", "hoodie ", "vr",],),
  //4551"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "headband ", "vape",],),
  //4552"],),

  new Traits( "male, accessories" ,[ "classic shades ", "crazy hair ", "luxurious beard",],),
  //4553"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "mole ", "regular shades ", "straight hair dark",],),
  //4554"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "muttonchops",],),
  //4555"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "frown ", "mohawk",],),
  //4556"],),

  new Traits( "male, accessories" ,[ "headband ", "normal beard black",],),
  //4557"],),

  new Traits( "male, accessories" ,[ "cap forward ", "normal beard ", "smile",],),
  //4558"],),

  new Traits( "zombie, accessories" ,[ "earring ", "stringy hair",],),
  //4559"],),

  new Traits( "female, accessories" ,[ "blonde short ", "cigarette ", "mole",],),
  //4560"],),

  new Traits( "male, accessories" ,[ "cigarette ", "fedora",],),
  //4561"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "stringy hair ", "vr",],),
  //4562"],),

  new Traits( "female, accessories" ,[ "knitted cap ", "mole",],),
  //4563"],),

  new Traits( "male, accessories" ,[ "earring ", "stringy hair",],),
  //4564"],),

  new Traits( "male, accessories" ,[ "hoodie ", "shadow beard ", "vr",],),
  //4565"],),

  new Traits( "female, accessories" ,[ "big shades ", "pink with hat",],),
  //4566"],),

  new Traits( "male, accessories" ,[ "bandana ", "big beard ", "buck teeth",],),
  //4567"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "straight hair blonde",],),
  //4568"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "mohawk ", "shadow beard",],),
  //4569"],),

  new Traits( "male, accessories" ,[ "classic shades ", "wild hair",],),
  //4570"],),

  new Traits( "female, accessories" ,[ "big shades ", "crazy hair",],),
  //4571"],),

  new Traits( "male, accessories" ,[ "frown ", "mustache ", "nerd glasses ", "purple hair",],),
  //4572"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "frumpy hair",],),
  //4573"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "frown ", "shadow beard ", "vr",],),
  //4574"],),

  new Traits( "female, accessories" ,[ "mole ", "purple eye shadow ", "purple lipstick ", "wild white hair",],),
  //4575"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "bandana ", "earring",],),
  //4576"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "shaved head",],),
  //4577"],),

  new Traits( "male, accessories" ,[ "cigarette ", "headband ", "vr",],),
  //4578"],),

  new Traits( "female, accessories" ,[ "stringy hair",],),
  //4579"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "crazy hair ", "earring",],),
  //4580"],),

  new Traits( "male, accessories" ,[ "big shades ", "buck teeth ", "headband",],),
  //4581"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "luxurious beard ", "small shades",],),
  //4582"],),

  new Traits( "male, accessories" ,[ "mole ", "top hat",],),
  //4583"],),

  new Traits( "female, accessories" ,[ "cigarette ", "green eye shadow ", "purple lipstick ", "straight hair dark",],),
  //4584"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "wild white hair",],),
  //4585"],),

  new Traits( "female, accessories" ,[ "big shades ", "crazy hair",],),
  //4586"],),

  new Traits( "male, accessories" ,[ "front beard ", "regular shades ", "stringy hair",],),
  //4587"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "crazy hair ", "vr",],),
  //4588"],),

  new Traits( "male, accessories" ,[ "hoodie ", "muttonchops ", "nerd glasses",],),
  //4589"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "earring ", "muttonchops ", "pipe ", "police cap",],),
  //4590"],),

  new Traits( "male, accessories" ,[ "cap ", "shadow beard",],),
  //4591"],),

  new Traits( "male, accessories" ,[ "front beard ", "horned rim glasses ", "mohawk thin",],),
  //4592"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "clown nose ", "mohawk thin",],),
  //4593"],),

  new Traits( "male, accessories" ,[ "mustache ", "police cap",],),
  //4594"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blonde bob ", "pipe",],),
  //4595"],),

  new Traits( "male, accessories" ,[ "clown nose ", "gold chain ", "knitted cap ", "medical mask",],),
  //4596"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "frumpy hair ", "vr",],),
  //4597"],),

  new Traits( "female, accessories" ,[ "blonde short ", "hot lipstick ", "regular shades",],),
  //4598"],),

  new Traits( "male, accessories" ,[ "big shades ", "shadow beard ", "wild hair",],),
  //4599"],),

  new Traits( "male, accessories" ,[ "big shades ", "shaved head",],),
  //4600"],),

  new Traits( "male, accessories" ,[ "classic shades ", "normal beard ", "peak spike",],),
  //4601"],),

  new Traits( "male, accessories" ,[ "handlebars ", "nerd glasses ", "police cap",],),
  //4602"],),

  new Traits( "male, accessories" ,[ "big shades ", "cap forward ", "earring",],),
  //4603"],),

  new Traits( "male, accessories" ,[ "shadow beard ", "top hat",],),
  //4604"],),

  new Traits( "male, accessories" ,[ "clown nose ", "earring ", "headband",],),
  //4605"],),

  new Traits( "female, accessories" ,[ "big shades ", "half shaved",],),
  //4606"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "vape",],),
  //4607"],),

  new Traits( "male, accessories" ,[ "goat ", "hoodie",],),
  //4608"],),

  new Traits( "male, accessories" ,[ "headband ", "nerd glasses",],),
  //4609"],),

  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "stringy hair",],),
  //4610"],),

  new Traits( "male, accessories" ,[ "big shades ", "cowboy hat ", "medical mask",],),
  //4611"],),

  new Traits( "female, accessories" ,[ "earring ", "pilot helmet ", "purple lipstick",],),
  //4612"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "regular shades",],),
  //4613"],),

  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "nerd glasses",],),
  //4614"],),

  new Traits( "female, accessories" ,[ "half shaved ", "purple lipstick ", "regular shades",],),
  //4615"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "cap ", "clown nose",],),
  //4616"],),

  new Traits( "female, accessories" ,[ "big shades ", "black lipstick ", "frumpy hair",],),
  //4617"],),

  new Traits( "male, accessories" ,[ "classic shades ", "do-rag ", "earring",],),
  //4618"],),

  new Traits( "female, accessories" ,[ "orange side",],),
  //4619"],),

  new Traits( "male, accessories" ,[ "big shades ", "cap forward ", "mole ", "muttonchops",],),
  //4620"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "tassle hat",],),
  //4621"],),

  new Traits( "female, accessories" ,[ "messy hair ", "purple lipstick ", "regular shades",],),
  //4622"],),

  new Traits( "male, accessories" ,[ "goat ", "mohawk ", "nerd glasses",],),
  //4623"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cap",],),
  //4624"],),

  new Traits( "female, accessories" ,[ "big shades ", "cap ", "earring ", "hot lipstick",],),
  //4625"],),

  new Traits( "female, accessories" ,[ "messy hair ", "regular shades",],),
  //4626"],),

  new Traits( "female, accessories" ,[ "clown hair green ", "welding goggles",],),
  //4627"],),

  new Traits( "male, accessories" ,[ "muttonchops ", "peak spike ", "vr",],),
  //4628"],),

  new Traits( "male, accessories" ,[ "big beard ", "knitted cap",],),
  //4629"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk ", "vr",],),
  //4630"],),

  new Traits( "male, accessories" ,[ "mustache ", "purple hair",],),
  //4631"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "frown ", "vampire hair",],),
  //4632"],),

  new Traits( "male, accessories" ,[ "big beard ", "stringy hair",],),
  //4633"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "vape",],),
  //4634"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "eye patch ", "normal beard",],),
  //4635"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "regular shades",],),
  //4636"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "red mohawk ", "silver chain",],),
  //4637"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "messy hair ", "welding goggles",],),
  //4638"],),

  new Traits( "female, accessories" ,[ "silver chain ", "wild white hair",],),
  //4639"],),

  new Traits( "male, accessories" ,[ "frown ", "nerd glasses ", "top hat",],),
  //4640"],),

  new Traits( "female, accessories" ,[ "cigarette ", "purple eye shadow ", "wild blonde",],),
  //4641"],),

  new Traits( "male, accessories" ,[ "fedora ", "horned rim glasses ", "mole ", "muttonchops",],),
  //4642"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "hot lipstick ", "mohawk",],),
  //4643"],),

  new Traits( "male, accessories" ,[ "bandana ", "big beard ", "gold chain",],),
  //4644"],),

  new Traits( "male, accessories" ,[ "classic shades ", "frumpy hair",],),
  //4645"],),

  new Traits( "male, accessories" ,[ "earring ", "police cap ", "small shades",],),
  //4646"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "mole ", "top hat",],),
  //4647"],),

  new Traits( "male, accessories" ,[ "muttonchops ", "shaved head",],),
  //4648"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard ", "shaved head",],),
  //4649"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard ", "mohawk thin",],),
  //4650"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "shadow beard ", "smile",],),
  //4651"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "mohawk thin ", "purple lipstick",],),
  //4652"],),

  new Traits( "male, accessories" ,[ "cigarette ", "hoodie ", "horned rim glasses ", "spots",],),
  //4653"],),

  new Traits( "female, accessories" ,[ "eye patch ", "pigtails ", "purple lipstick",],),
  //4654"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard ", "pipe ", "wild hair",],),
  //4655"],),

  new Traits( "female, accessories" ,[ "blonde short ", "classic shades",],),
  //4656"],),

  new Traits( "male, accessories" ,[ "cigarette ", "eye patch ", "shaved head",],),
  //4657"],),

  new Traits( "male, accessories" ,[ "earring ", "goat ", "mole",],),
  //4658"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "wild hair",],),
  //4659"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "front beard dark ", "vampire hair",],),
  //4660"],),

  new Traits( "male, accessories" ,[ "cap forward ", "eye mask",],),
  //4661"],),

  new Traits( "male, accessories" ,[ "cap ", "cigarette ", "classic shades ", "muttonchops",],),
  //4662"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "mohawk thin",],),
  //4663"],),

  new Traits( "female, accessories" ,[ "mohawk thin ", "mole ", "purple lipstick",],),
  //4664"],),

  new Traits( "male, accessories" ,[ "fedora ", "normal beard",],),
  //4665"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "green eye shadow ", "straight hair dark",],),
  //4666"],),

  new Traits( "male, accessories" ,[ "bandana ", "cigarette ", "frown ", "normal beard black",],),
  //4667"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "earring ", "hoodie ", "mole",],),
  //4668"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "mole ", "small shades ", "wild hair",],),
  //4669"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "do-rag ", "normal beard black",],),
  //4670"],),

  new Traits( "female, accessories" ,[ "clown nose ", "crazy hair",],),
  //4671"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "mohawk",],),
  //4672"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "nerd glasses",],),
  //4673"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes blue ", "pigtails",],),
  //4674"],),

  new Traits( "female, accessories" ,[ "bandana ", "vr",],),
  //4675"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "rosy cheeks",],),
  //4676"],),

  new Traits( "female, accessories" ,[ "dark hair ", "earring ", "welding goggles",],),
  //4677"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "horned rim glasses ", "mole ", "mustache",],),
  //4678"],),

  new Traits( "male, accessories" ,[ "do-rag ", "pipe",],),
  //4679"],),

  new Traits( "male, accessories" ,[ "eye mask ", "hoodie ", "mole ", "shadow beard",],),
  //4680"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "medical mask",],),
  //4681"],),

  new Traits( "female, accessories" ,[ "earring ", "messy hair ", "nerd glasses",],),
  //4682"],),

  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "hoodie ", "vr",],),
  //4683"],),

  new Traits( "male, accessories" ,[ "cigarette ", "do-rag ", "earring ", "shadow beard",],),
  //4684"],),

  new Traits( "male, accessories" ,[ "mustache ", "police cap",],),
  //4685"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "cigarette ", "fedora",],),
  //4686"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "vape",],),
  //4687"],),

  new Traits( "male, accessories" ,[ "cigarette ", "do-rag ", "earring",],),
  //4688"],),

  new Traits( "male, accessories" ,[ "cigarette ", "normal beard",],),
  //4689"],),

  new Traits( "male, accessories" ,[ "cap forward ", "clown eyes blue ", "earring",],),
  //4690"],),

  new Traits( "male, accessories" ,[ "eye patch ", "frumpy hair ", "mole",],),
  //4691"],),

  new Traits( "male, accessories" ,[ "mohawk ", "pipe",],),
  //4692"],),

  new Traits( "female, accessories" ,[ "eye patch ", "wild hair",],),
  //4693"],),

  new Traits( "male, accessories" ,[ "do-rag ", "smile",],),
  //4694"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "normal beard",],),
  //4695"],),

  new Traits( "female, accessories" ,[ "big shades ", "cap ", "earring",],),
  //4696"],),

  new Traits( "male, accessories" ,[ "headband ", "luxurious beard ", "smile",],),
  //4697"],),

  new Traits( "male, accessories" ,[ "big beard ", "cigarette ", "headband",],),
  //4698"],),

  new Traits( "male, accessories" ,[ "eye patch ", "peak spike",],),
  //4699"],),

  new Traits( "female, accessories" ,[ "cigarette ", "messy hair ", "purple lipstick",],),
  //4700"],),

  new Traits( "male, accessories" ,[ "cigarette ", "clown eyes green ", "crazy hair",],),
  //4701"],),

  new Traits( "female, accessories" ,[ "earring ", "eye mask ", "purple lipstick ", "tassle hat",],),
  //4702"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "knitted cap",],),
  //4703"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "headband",],),
  //4704"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "small shades",],),
  //4705"],),

  new Traits( "male, accessories" ,[ "cap forward ", "chinstrap ", "earring ", "eye mask",],),
  //4706"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "police cap ", "smile",],),
  //4707"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "police cap",],),
  //4708"],),

  new Traits( "male, accessories" ,[ "shadow beard",],),
  //4709"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blonde short ", "regular shades",],),
  //4710"],),

  new Traits( "female, accessories" ,[ "eye patch ", "hot lipstick ", "straight hair dark",],),
  //4711"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "wild blonde",],),
  //4712"],),

  new Traits( "male, accessories" ,[ "hoodie ", "horned rim glasses ", "normal beard black",],),
  //4713"],),

  new Traits( "male, accessories" ,[ "earring ", "luxurious beard ", "peak spike",],),
  //4714"],),

  new Traits( "male, accessories" ,[ "frown ", "knitted cap",],),
  //4715"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "eye mask ", "mole ", "tassle hat",],),
  //4716"],),

  new Traits( "male, accessories" ,[ "cigarette ", "nerd glasses ", "shaved head",],),
  //4717"],),

  new Traits( "male, accessories" ,[ "medical mask ", "shaved head",],),
  //4718"],),

  new Traits( "female, accessories" ,[ "pipe ", "purple lipstick ", "straight hair blonde",],),
  //4719"],),

  new Traits( "male, accessories" ,[ "mole ", "shaved head",],),
  //4720"],),

  new Traits( "female, accessories" ,[ "cigarette ", "hot lipstick ", "stringy hair",],),
  //4721"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "straight hair",],),
  //4722"],),

  new Traits( "male, accessories" ,[ "classic shades ", "medical mask ", "normal beard black ", "shaved head",],),
  //4723"],),

  new Traits( "male, accessories" ,[ "earring ", "hoodie ", "spots",],),
  //4724"],),

  new Traits( "male, accessories" ,[ "big beard ", "earring ", "shaved head",],),
  //4725"],),

  new Traits( "female, accessories" ,[ "silver chain ", "straight hair dark",],),
  //4726"],),

  new Traits( "male, accessories" ,[ "bandana ", "big shades",],),
  //4727"],),

  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "eye mask",],),
  //4728"],),

  new Traits( "female, accessories" ,[ "regular shades",],),
  //4729"],),

  new Traits( "male, accessories" ,[ "big beard ", "cigarette ", "frown ", "mohawk",],),
  //4730"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard ", "shaved head ", "small shades",],),
  //4731"],),

  new Traits( "male, accessories" ,[ "cap ", "horned rim glasses",],),
  //4732"],),

  new Traits( "male, accessories" ,[ "shaved head ", "small shades",],),
  //4733"],),

  new Traits( "male, accessories" ,[ "eye mask ", "mohawk dark ", "mole",],),
  //4734"],),

  new Traits( "male, accessories" ,[ "mole ", "peak spike ", "smile",],),
  //4735"],),

  new Traits( "male, accessories" ,[ "eye patch ", "frown",],),
  //4736"],),

  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "horned rim glasses",],),
  //4737"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "half shaved ", "mole",],),
  //4738"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "mohawk dark",],),
  //4739"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "wild white hair",],),
  //4740"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "muttonchops ", "pipe",],),
  //4741"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "hot lipstick ", "messy hair",],),
  //4742"],),

  new Traits( "male, accessories" ,[ "bandana ", "vape, "vr",],),
  //4743"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mohawk thin ", "mustache",],),
  //4744"],),

  new Traits( "male, accessories" ,[ "clown nose ", "eye mask ", "mohawk thin ", "shadow beard",],),
  //4745"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "bandana ", "shadow beard ", "smile",],),
  //4746"],),

  new Traits( "zombie, accessories" ,[ "clown eyes blue ", "headband",],),
  //4747"],),

  new Traits( "male, accessories" ,[ "clown nose ", "purple hair",],),
  //4748"],),

  new Traits( "male, accessories" ,[ "do-rag ", "frown ", "small shades",],),
  //4749"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "front beard ", "nerd glasses",],),
  //4750"],),

  new Traits( "female, accessories" ,[ "cigarette ", "eye patch ", "messy hair",],),
  //4751"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "purple lipstick ", "tiara",],),
  //4752"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "knitted cap",],),
  //4753"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "vampire hair",],),
  //4754"],),

  new Traits( "male, accessories" ,[ "earring ", "messy hair ", "normal beard",],),
  //4755"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "straight hair dark",],),
  //4756"],),

  new Traits( "male, accessories" ,[ "hoodie ", "mole ", "pipe",],),
  //4757"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "normal beard",],),
  //4758"],),

  new Traits( "male, accessories" ,[ "big shades ", "handlebars ", "purple hair",],),
  //4759"],),

  new Traits( "male, accessories" ,[ "hoodie ", "normal beard ", "regular shades",],),
  //4760"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "horned rim glasses ", "straight hair blonde",],),
  //4761"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mohawk ", "regular shades",],),
  //4762"],),

  new Traits( "female, accessories" ,[ "big shades ", "black lipstick ", "earring ", "messy hair",],),
  //4763"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "peak spike",],),
  //4764"],),

  new Traits( "male, accessories" ,[ "pipe ", "shadow beard ", "vampire hair",],),
  //4765"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard ", "messy hair ", "nerd glasses",],),
  //4766"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "purple lipstick ", "tassle hat",],),
  //4767"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk thin ", "mole",],),
  //4768"],),

  new Traits( "female, accessories" ,[ "pink with hat ", "vape",],),
  //4769"],),

  new Traits( "male, accessories" ,[ "hoodie ", "mole ", "shadow beard",],),
  //4770"],),

  new Traits( "male, accessories" ,[ "goat ", "messy hair",],),
  //4771"],),

  new Traits( "female, accessories" ,[ "big shades ", "hot lipstick ", "straight hair",],),
  //4772"],),

  new Traits( "male, accessories" ,[ "classic shades ", "police cap",],),
  //4773"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "do-rag ", "earring ", "rosy cheeks",],),
  //4774"],),

  new Traits( "male, accessories" ,[ "mole ", "vampire hair ", "vape",],),
  //4775"],),

  new Traits( "male, accessories" ,[ "big beard ", "cigarette ", "eye patch ", "frumpy hair",],),
  //4776"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "mohawk",],),
  //4777"],),

  new Traits( "female, accessories" ,[ "bandana ", "clown eyes blue ", "earring",],),
  //4778"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "eye mask",],),
  //4779"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "vr",],),
  //4780"],),

  new Traits( "male, accessories" ,[ "frown ", "mohawk thin",],),
  //4781"],),

  new Traits( "female, accessories" ,[ "clown nose ", "wild hair",],),
  //4782"],),

  new Traits( "male, accessories" ,[ "bandana ", "horned rim glasses ", "luxurious beard",],),
  //4783"],),

  new Traits( "female, accessories" ,[ "earring ", "eye patch ", "straight hair",],),
  //4784"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "medical mask ", "mohawk dark ", "rosy cheeks",],),
  //4785"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "clown hair green",],),
  //4786"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "straight hair",],),
  //4787"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "pilot helmet",],),
  //4788"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "mohawk dark",],),
  //4789"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "crazy hair ", "mustache",],),
  //4790"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "shadow beard ", "wild hair",],),
  //4791"],),

  new Traits( "male, accessories" ,[ "earring ", "handlebars",],),
  //4792"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk ", "shadow beard",],),
  //4793"],),

  new Traits( "male, accessories" ,[ "fedora ", "small shades",],),
  //4794"],),

  new Traits( "male, accessories" ,[ "gold chain ", "wild hair",],),
  //4795"],),

  new Traits( "male, accessories" ,[ "cap forward ", "mole",],),
  //4796"],),

  new Traits( "female, accessories" ,[ "mole ", "tassle hat",],),
  //4797"],),

  new Traits( "female, accessories" ,[ "rosy cheeks ", "straight hair blonde",],),
  //4798"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "earring ", "straight hair blonde",],),
  //4799"],),

  new Traits( "male, accessories" ,[ "cap ", "luxurious beard",],),
  //4800"],),

  new Traits( "male, accessories" ,[ "cap forward ", "muttonchops ", "regular shades",],),
  //4801"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "silver chain ", "straight hair dark",],),
  //4802"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "crazy hair ", "nerd glasses",],),
  //4803"],),

  new Traits( "male, accessories" ,[ "eye patch ", "wild hair",],),
  //4804"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "clown nose ", "crazy hair ", "frown",],),
  //4805"],),

  new Traits( "female, accessories" ,[ "medical mask ", "straight hair",],),
  //4806"],),

  new Traits( "male, accessories" ,[ "fedora ", "frown ", "shadow beard",],),
  //4807"],),

  new Traits( "male, accessories" ,[ "eye patch ", "front beard dark ", "shaved head",],),
  //4808"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "mohawk ", "normal beard black",],),
  //4809"],),

  new Traits( "male, accessories" ,[ "shadow beard ", "shaved head",],),
  //4810"],),

  new Traits( "male, accessories" ,[ "big shades ", "shaved head",],),
  //4811"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "messy hair ", "nerd glasses",],),
  //4812"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "mohawk thin",],),
  //4813"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "earring ", "green eye shadow",],),
  //4814"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "messy hair",],),
  //4815"],),

  new Traits( "male, accessories" ,[ "cap forward ", "goat ", "pipe",],),
  //4816"],),

  new Traits( "female, accessories" ,[ "clown eyes green",],),
  //4817"],),

  new Traits( "male, accessories" ,[ "goat ", "mohawk thin",],),
  //4818"],),

  new Traits( "male, accessories" ,[ "cap ", "earring ", "vr",],),
  //4819"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "horned rim glasses ", "purple hair",],),
  //4820"],),

  new Traits( "female, accessories" ,[ "mohawk ", "purple eye shadow",],),
  //4821"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "normal beard black ", "vampire hair",],),
  //4822"],),

  new Traits( "female, accessories" ,[ "bandana ", "big shades",],),
  //4823"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "earring ", "police cap",],),
  //4824"],),

  new Traits( "male, accessories" ,[ "handlebars ", "peak spike ", "regular shades",],),
  //4825"],),

  new Traits( "male, accessories" ,[ "eye mask ", "shaved head",],),
  //4826"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "regular shades ", "stringy hair",],),
  //4827"],),

  new Traits( "male, accessories" ,[ "cap forward ", "vr",],),
  //4828"],),

  new Traits( "female, accessories" ,[ "big shades ", "medical mask ", "straight hair blonde",],),
  //4829"],),

  new Traits( "zombie, accessories" ,[ "classic shades ", "medical mask ", "wild hair",],),
  //4830"],),

  new Traits( "male, accessories" ,[ "cigarette ", "goat ", "nerd glasses ", "stringy hair",],),
  //4831"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "mole ", "mustache",],),
  //4832"],),

  new Traits( "female, accessories" ,[ "classic shades ", "dark hair ", "hot lipstick",],),
  //4833"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "hot lipstick ", "messy hair",],),
  //4834"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "pigtails",],),
  //4835"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "mohawk",],),
  //4836"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "knitted cap ", "luxurious beard ", "mole",],),
  //4837"],),

  new Traits( "male, accessories" ,[ "clown nose ", "vampire hair",],),
  //4838"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "cigarette ", "purple lipstick ", "red mohawk",],),
  //4839"],),

  new Traits( "male, accessories" ,[ "shadow beard ", "wild hair",],),
  //4840"],),

  new Traits( "male, accessories" ,[ "do-rag ", "mole",],),
  //4841"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "smile",],),
  //4842"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "goat",],),
  //4843"],),

  new Traits( "male, accessories" ,[ "headband ", "small shades",],),
  //4844"],),

  new Traits( "male, accessories" ,[ "do-rag ", "horned rim glasses ", "normal beard",],),
  //4845"],),

  new Traits( "female, accessories" ,[ "mole ", "wild white hair",],),
  //4846"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "shadow beard ", "smile",],),
  //4847"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "straight hair blonde",],),
  //4848"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "wild blonde",],),
  //4849"],),

  new Traits( "zombie, accessories" ,[ "purple hair",],),
  //4850"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "normal beard black",],),
  //4851"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "vampire hair",],),
  //4852"],),

  new Traits( "male, accessories" ,[ "big beard ", "classic shades ", "peak spike ", "vape",],),
  //4853"],),

  new Traits( "male, accessories" ,[ "bandana ", "chinstrap ", "small shades",],),
  //4854"],),

  new Traits( "male, accessories" ,[ "earring ", "shaved head ", "vr",],),
  //4855"],),

  new Traits( "male, accessories" ,[ "headband ", "horned rim glasses",],),
  //4856"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "vr",],),
  //4857"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard black ", "wild hair",],),
  //4858"],),

  new Traits( "female, accessories" ,[ "cigarette ", "wild blonde",],),
  //4859"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "orange side",],),
  //4860"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "normal beard black",],),
  //4861"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "nerd glasses",],),
  //4862"],),

  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "regular shades ", "smile",],),
  //4863"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "mohawk",],),
  //4864"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "normal beard",],),
  //4865"],),

  new Traits( "male, accessories" ,[ "earring ", "goat ", "stringy hair",],),
  //4866"],),

  new Traits( "male, accessories" ,[ "headband ", "mustache",],),
  //4867"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "blonde bob ", "hot lipstick",],),
  //4868"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "shadow beard",],),
  //4869"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "mole",],),
  //4870"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "shadow beard",],),
  //4871"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "cigarette ", "earring ", "red mohawk",],),
  //4872"],),

  new Traits( "male, accessories" ,[ "regular shades ", "stringy hair",],),
  //4873"],),

  new Traits( "zombie, accessories" ,[ "cigarette ", "clown nose ", "earring ", "messy hair ", "mustache",],),
  //4874"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "mustache ", "stringy hair",],),
  //4875"],),

  new Traits( "male, accessories" ,[ "cigarette ", "front beard ", "police cap",],),
  //4876"],),

  new Traits( "male, accessories" ,[ "earring ", "messy hair ", "vr",],),
  //4877"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "classic shades ", "frumpy hair",],),
  //4878"],),

  new Traits( "male, accessories" ,[ "cigarette ", "frumpy hair ", "horned rim glasses",],),
  //4879"],),

  new Traits( "female, accessories" ,[ "pink with hat ", "silver chain",],),
  //4880"],),

  new Traits( "male, accessories" ,[ "police cap ", "shadow beard ", "small shades",],),
  //4881"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "nerd glasses",],),
  //4882"],),

  new Traits( "male, accessories" ,[ "big shades ", "do-rag ", "luxurious beard",],),
  //4883"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "hot lipstick ", "wild white hair",],),
  //4884"],),

  new Traits( "female, accessories" ,[ "eye patch ", "half shaved ", "purple lipstick",],),
  //4885"],),

  new Traits( "female, accessories" ,[ "choker ", "hot lipstick ", "wild hair",],),
  //4886"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "half shaved ", "hot lipstick",],),
  //4887"],),

  new Traits( "male, accessories" ,[ "normal beard black ", "peak spike",],),
  //4888"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blonde bob ", "clown eyes blue",],),
  //4889"],),

  new Traits( "male, accessories" ,[ "bandana ", "big shades ", "normal beard",],),
  //4890"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "mohawk ", "nerd glasses",],),
  //4891"],),

  new Traits( "male, accessories" ,[ "cap forward ", "small shades",],),
  //4892"],),

  new Traits( "female, accessories" ,[ "regular shades ", "wild blonde",],),
  //4893"],),

  new Traits( "male, accessories" ,[ "regular shades ", "shadow beard ", "vape, "wild hair",],),
  //4894"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "wild white hair",],),
  //4895"],),

  new Traits( "male, accessories" ,[ "eye patch ", "frumpy hair",],),
  //4896"],),

  new Traits( "male, accessories" ,[ "do-rag ", "front beard dark ", "vr",],),
  //4897"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "mole ", "tassle hat",],),
  //4898"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "dark hair",],),
  //4899"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "messy hair",],),
  //4900"],),

  new Traits( "male, accessories" ,[ "big shades ", "normal beard black ", "purple hair",],),
  //4901"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "shaved head",],),
  //4902"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blonde short ", "cigarette ", "green eye shadow",],),
  //4903"],),

  new Traits( "male, accessories" ,[ "normal beard black ", "shaved head",],),
  //4904"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "normal beard black",],),
  //4905"],),

  new Traits( "male, accessories" ,[ "do-rag ", "handlebars ", "horned rim glasses",],),
  //4906"],),

  new Traits( "male, accessories" ,[ "big shades ", "crazy hair ", "mustache",],),
  //4907"],),

  new Traits( "male, accessories" ,[ "mohawk ", "muttonchops ", "nerd glasses",],),
  //4908"],),

  new Traits( "male, accessories" ,[ "big shades ", "wild hair",],),
  //4909"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "mohawk dark",],),
  //4910"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "purple eye shadow ", "purple lipstick",],),
  //4911"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "dark hair ", "mole",],),
  //4912"],),

  new Traits( "male, accessories" ,[ "normal beard ", "stringy hair",],),
  //4913"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "mustache",],),
  //4914"],),

  new Traits( "male, accessories" ,[ "eye mask ", "normal beard ", "stringy hair",],),
  //4915"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "stringy hair ", "vr",],),
  //4916"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "vampire hair",],),
  //4917"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "muttonchops ", "nerd glasses",],),
  //4918"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mohawk thin ", "shadow beard",],),
  //4919"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "goat ", "rosy cheeks ", "vape",],),
  //4920"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blonde bob ", "earring ", "purple eye shadow",],),
  //4921"],),

  new Traits( "female, accessories" ,[ "pipe ", "purple lipstick ", "straight hair blonde",],),
  //4922"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "rosy cheeks ", "stringy hair",],),
  //4923"],),

  new Traits( "female, accessories" ,[ "big shades ", "pink with hat",],),
  //4924"],),

  new Traits( "male, accessories" ,[ "bandana ", "big shades ", "chinstrap",],),
  //4925"],),

  new Traits( "male, accessories" ,[ "hoodie ", "mole",],),
  //4926"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "mohawk thin ", "purple lipstick",],),
  //4927"],),

  new Traits( "female, accessories" ,[ "clown hair green ", "pipe",],),
  //4928"],),

  new Traits( "female, accessories" ,[ "cigarette ", "green eye shadow ", "mohawk thin",],),
  //4929"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk thin ", "spots",],),
  //4930"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "earring ", "nerd glasses",],),
  //4931"],),

  new Traits( "male, accessories" ,[ "do-rag ", "silver chain",],),
  //4932"],),

  new Traits( "male, accessories" ,[ "front beard ", "mohawk dark ", "mole",],),
  //4933"],),

  new Traits( "female, accessories" ,[ "earring ", "eye mask ", "purple lipstick ", "red mohawk",],),
  //4934"],),

  new Traits( "female, accessories" ,[ "cigarette ", "frumpy hair",],),
  //4935"],),

  new Traits( "female, accessories" ,[ "tiara",],),
  //4936"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "welding goggles",],),
  //4937"],),

  new Traits( "male, accessories" ,[ "handlebars ", "purple hair",],),
  //4938"],),

  new Traits( "male, accessories" ,[ "cap forward ", "front beard",],),
  //4939"],),

  new Traits( "male, accessories" ,[ "classic shades ", "hoodie",],),
  //4940"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "straight hair",],),
  //4941"],),

  new Traits( "male, accessories" ,[ "eye patch ", "headband ", "normal beard black",],),
  //4942"],),

  new Traits( "female, accessories" ,[ "classic shades ", "purple lipstick ", "tassle hat",],),
  //4943"],),

  new Traits( "male, accessories" ,[ "earring ", "police cap ", "regular shades",],),
  //4944"],),

  new Traits( "male, accessories" ,[ "normal beard black ", "police cap",],),
  //4945"],),

  new Traits( "female, accessories" ,[ "classic shades ", "wild hair",],),
  //4946"],),

  new Traits( "female, accessories" ,[ "classic shades ", "mohawk thin",],),
  //4947"],),

  new Traits( "male, accessories" ,[ "front beard ", "mohawk dark",],),
  //4948"],),

  new Traits( "female, accessories" ,[ "big shades ", "black lipstick ", "wild hair",],),
  //4949"],),

  new Traits( "female, accessories" ,[ "bandana ", "blue eye shadow ", "mole",],),
  //4950"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mohawk thin",],),
  //4951"],),

  new Traits( "male, accessories" ,[ "cigarette ", "normal beard ", "shaved head",],),
  //4952"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora ", "gold chain ", "luxurious beard",],),
  //4953"],),

  new Traits( "female, accessories" ,[ "choker ", "half shaved",],),
  //4954"],),

  new Traits( "male, accessories" ,[ "normal beard ", "regular shades ", "wild hair",],),
  //4955"],),

  new Traits( "male, accessories" ,[ "big shades ", "front beard dark ", "purple hair",],),
  //4956"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "red mohawk",],),
  //4957"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "green eye shadow ", "hot lipstick",],),
  //4958"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "knitted cap",],),
  //4959"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "mole ", "peak spike",],),
  //4960"],),

  new Traits( "female, accessories" ,[ "cap ", "earring ", "green eye shadow",],),
  //4961"],),

  new Traits( "male, accessories" ,[ "earring ", "knitted cap ", "mustache",],),
  //4962"],),

  new Traits( "female, accessories" ,[ "cap ", "classic shades",],),
  //4963"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk thin ", "vape",],),
  //4964"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "nerd glasses ", "normal beard",],),
  //4965"],),

  new Traits( "male, accessories" ,[ "cigarette ", "classic shades ", "headband",],),
  //4966"],),

  new Traits( "male, accessories" ,[ "purple hair ", "shadow beard ", "small shades",],),
  //4967"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk ", "shadow beard",],),
  //4968"],),

  new Traits( "male, accessories" ,[ "fedora ", "goat",],),
  //4969"],),

  new Traits( "male, accessories" ,[ "handlebars ", "purple hair ", "small shades",],),
  //4970"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "eye patch ", "front beard ", "mohawk",],),
  //4971"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "mohawk thin",],),
  //4972"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "front beard ", "mole",],),
  //4973"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "knitted cap",],),
  //4974"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "eye patch",],),
  //4975"],),

  new Traits( "male, accessories" ,[ "goat ", "messy hair ", "smile",],),
  //4976"],),

  new Traits( "male, accessories" ,[ "eye mask ", "vampire hair",],),
  //4977"],),

  new Traits( "male, accessories" ,[ "cap forward ", "chinstrap ", "cigarette",],),
  //4978"],),

  new Traits( "female, accessories" ,[ "big shades ", "dark hair",],),
  //4979"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "regular shades",],),
  //4980"],),

  new Traits( "female, accessories" ,[ "earring ", "pipe ", "purple eye shadow ", "wild hair",],),
  //4981"],),

  new Traits( "male, accessories" ,[ "cigarette ", "nerd glasses ", "shaved head ", "silver chain",],),
  //4982"],),

  new Traits( "female, accessories" ,[ "clown nose ", "hot lipstick ", "red mohawk",],),
  //4983"],),

  new Traits( "male, accessories" ,[ "cigarette ", "normal beard ", "vampire hair ", "vr",],),
  //4984"],),

  new Traits( "female, accessories" ,[ "big shades ", "tassle hat",],),
  //4985"],),

  new Traits( "male, accessories" ,[ "eye mask ", "peak spike",],),
  //4986"],),

  new Traits( "male, accessories" ,[ "bandana ", "buck teeth ", "clown eyes green",],),
  //4987"],),

  new Traits( "male, accessories" ,[ "eye mask ", "headband ", "luxurious beard",],),
  //4988"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "goat ", "vampire hair",],),
  //4989"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "clown eyes blue",],),
  //4990"],),

  new Traits( "male, accessories" ,[ "messy hair ", "regular shades",],),
  //4991"],),

  new Traits( "male, accessories" ,[ "classic shades ", "hoodie",],),
  //4992"],),

  new Traits( "male, accessories" ,[ "cigarette ", "normal beard black ", "regular shades ", "stringy hair",],),
  //4993"],),

  new Traits( "male, accessories" ,[ "goat ", "mohawk ", "mole",],),
  //4994"],),

  new Traits( "male, accessories" ,[ "hoodie ", "horned rim glasses",],),
  //4995"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "red mohawk",],),
  //4996"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "purple eye shadow ", "straight hair dark",],),
  //4997"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "cigarette ", "frown ", "messy hair",],),
  //4998"],),

  new Traits( "male, accessories" ,[ "goat ", "mole ", "nerd glasses ", "stringy hair",],),
  //4999"],),
  }],),
  ],),
  "data" ,],),
  "nfts" , [],),
  ],),
  new Traits( "female, accessories" ,[ "green eye shadow ", "hot lipstick ", "wild white hair",],),
  //5000"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "orange side",],),
  //5001"],),

  new Traits( "male, accessories" ,[ "beanie ", "earring ", "nerd glasses ", "pipe",],),
  //5002"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "frown ", "headband",],),
  //5003"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "headband ", "horned rim glasses",],),
  //5004"],),

  new Traits( "female, accessories" ,[ "messy hair ", "nerd glasses",],),
  //5005"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "regular shades ", "vampire hair",],),
  //5006"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "straight hair",],),
  //5007"],),

  new Traits( "male, accessories" ,[ "classic shades ", "cowboy hat",],),
  //5008"],),

  new Traits( "female, accessories" ,[ "big shades ", "cap ", "earring",],),
  //5009"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "medical mask ", "purple lipstick ", "straight hair",],),
  //5010"],),

  new Traits( "female, accessories" ,[ "cigarette ", "straight hair dark",],),
  //5011"],),

  new Traits( "male, accessories" ,[ "cigarette ", "crazy hair",],),
  //5012"],),

  new Traits( "male, accessories" ,[ "messy hair ", "normal beard black ", "pipe",],),
  //5013"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes blue ", "straight hair blonde",],),
  //5014"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "goat ", "mohawk ", "vape",],),
  //5015"],),

  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "mole ", "regular shades",],),
  //5016"],),

  new Traits( "male, accessories" ,[ "bandana ", "big shades ", "earring",],),
  //5017"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "goat",],),
  //5018"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "nerd glasses",],),
  //5019"],),

  new Traits( "male, accessories" ,[ "bandana ", "classic shades ", "front beard dark",],),
  //5020"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "shadow beard",],),
  //5021"],),

  new Traits( "male, accessories" ,[ "mohawk ", "normal beard",],),
  //5022"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "nerd glasses ", "peak spike",],),
  //5023"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "earring ", "straight hair dark",],),
  //5024"],),

  new Traits( "male, accessories" ,[ "eye patch ", "medical mask ", "vampire hair",],),
  //5025"],),

  new Traits( "female, accessories" ,[ "classic shades ", "earring ", "straight hair",],),
  //5026"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "wild white hair",],),
  //5027"],),

  new Traits( "male, accessories" ,[ "messy hair ", "muttonchops ", "small shades",],),
  //5028"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "headband",],),
  //5029"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "wild hair",],),
  //5030"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "frumpy hair ", "shadow beard",],),
  //5031"],),

  new Traits( "female, accessories" ,[ "cigarette ", "clown eyes blue ", "hot lipstick ", "wild hair",],),
  //5032"],),

  new Traits( "male, accessories" ,[ "classic shades ", "handlebars ", "peak spike",],),
  //5033"],),

  new Traits( "male, accessories" ,[ "cap ", "classic shades ", "shadow beard",],),
  //5034"],),

  new Traits( "male, accessories" ,[ "classic shades ", "handlebars ", "knitted cap",],),
  //5035"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "hot lipstick ", "red mohawk",],),
  //5036"],),

  new Traits( "male, accessories" ,[ "cap ", "earring ", "shadow beard",],),
  //5037"],),

  new Traits( "female, accessories" ,[ "cigarette ", "mohawk dark ", "purple eye shadow",],),
  //5038"],),

  new Traits( "male, accessories" ,[ "do-rag ", "front beard dark ", "horned rim glasses",],),
  //5039"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "tassle hat",],),
  //5040"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "mustache ", "small shades",],),
  //5041"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "mohawk thin",],),
  //5042"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "messy hair",],),
  //5043"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "eye patch ", "frumpy hair",],),
  //5044"],),

  new Traits( "female, accessories" ,[ "mohawk dark ", "nerd glasses",],),
  //5045"],),

  new Traits( "male, accessories" ,[ "mole ", "small shades",],),
  //5046"],),

  new Traits( "male, accessories" ,[ "police cap ", "rosy cheeks",],),
  //5047"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "handlebars",],),
  //5048"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "orange side ", "purple lipstick",],),
  //5049"],),

  new Traits( "male, accessories" ,[ "regular shades ", "shadow beard ", "shaved head",],),
  //5050"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "earring ", "front beard ", "peak spike",],),
  //5051"],),

  new Traits( "female, accessories" ,[ "clown nose ", "mohawk dark ", "purple eye shadow",],),
  //5052"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "vape, "wild white hair",],),
  //5053"],),

  new Traits( "female, accessories" ,[ "clown eyes blue",],),
  //5054"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "regular shades ", "straight hair",],),
  //5055"],),

  new Traits( "male, accessories" ,[ "beanie ", "earring ", "luxurious beard ", "vr",],),
  //5056"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "classic shades ", "earring ", "mole ", "shaved head",],),
  //5057"],),

  new Traits( "male, accessories" ,[ "small shades ", "stringy hair",],),
  //5058"],),

  new Traits( "male, accessories" ,[ "gold chain ", "headband ", "regular shades",],),
  //5059"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "purple lipstick ", "straight hair dark",],),
  //5060"],),

  new Traits( "male, accessories" ,[ "big beard ", "frumpy hair",],),
  //5061"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "front beard dark ", "vr",],),
  //5062"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "nerd glasses ", "shaved head",],),
  //5063"],),

  new Traits( "female, accessories" ,[ "cigarette ", "eye mask ", "straight hair",],),
  //5064"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora ", "front beard dark",],),
  //5065"],),

  new Traits( "zombie, accessories" ,[ "earring ", "knitted cap ", "smile",],),
  //5066"],),

  new Traits( "female, accessories" ,[ "classic shades ", "earring ", "red mohawk",],),
  //5067"],),

  new Traits( "female, accessories" ,[ "earring ", "messy hair ", "welding goggles",],),
  //5068"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "straight hair dark",],),
  //5069"],),

  new Traits( "male, accessories" ,[ "cap forward ", "mole ", "regular shades",],),
  //5070"],),

  new Traits( "female, accessories" ,[ "bandana ", "big shades ", "hot lipstick",],),
  //5071"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "knitted cap ", "smile",],),
  //5072"],),

  new Traits( "female, accessories" ,[ "classic shades ", "hot lipstick ", "mohawk dark",],),
  //5073"],),

  new Traits( "female, accessories" ,[ "cap ", "cigarette ", "hot lipstick ", "nerd glasses",],),
  //5074"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "headband",],),
  //5075"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "wild blonde",],),
  //5076"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "messy hair",],),
  //5077"],),

  new Traits( "male, accessories" ,[ "classic shades ", "knitted cap ", "normal beard black",],),
  //5078"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "hot lipstick ", "messy hair ", "pipe",],),
  //5079"],),

  new Traits( "male, accessories" ,[ "earring ", "shadow beard ", "small shades ", "wild hair",],),
  //5080"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blonde short ", "cigarette ", "vr",],),
  //5081"],),

  new Traits( "female, accessories" ,[ "blonde short ", "eye patch ", "hot lipstick",],),
  //5082"],),

  new Traits( "female, accessories" ,[ "cigarette ", "clown eyes green ", "earring ", "pink with hat",],),
  //5083"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes blue ", "straight hair blonde",],),
  //5084"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk dark ", "purple lipstick",],),
  //5085"],),

  new Traits( "female, accessories" ,[ "mohawk dark ", "regular shades",],),
  //5086"],),

  new Traits( "male, accessories" ,[ "front beard ", "knitted cap",],),
  //5087"],),

  new Traits( "male, accessories" ,[ "earring ", "knitted cap ", "regular shades",],),
  //5088"],),

  new Traits( "male, accessories" ,[ "muttonchops ", "regular shades ", "wild hair",],),
  //5089"],),

  new Traits( "male, accessories" ,[ "eye patch ", "goat ", "stringy hair",],),
  //5090"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "wild hair",],),
  //5091"],),

  new Traits( "male, accessories" ,[ "hoodie ", "luxurious beard ", "regular shades",],),
  //5092"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cap ", "rosy cheeks",],),
  //5093"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "mohawk dark",],),
  //5094"],),

  new Traits( "male, accessories" ,[ "earring ", "knitted cap ", "shadow beard",],),
  //5095"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "clown eyes green ", "hot lipstick ", "pipe",],),
  //5096"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "wild hair",],),
  //5097"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "frown ", "frumpy hair",],),
  //5098"],),

  new Traits( "female, accessories" ,[ "bandana ", "clown eyes blue",],),
  //5099"],),

  new Traits( "male, accessories" ,[ "clown nose ", "earring ", "mohawk thin",],),
  //5100"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "frown ", "mohawk thin ", "small shades",],),
  //5101"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "green eye shadow",],),
  //5102"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "normal beard ", "vr",],),
  //5103"],),

  new Traits( "male, accessories" ,[ "cigarette ", "horned rim glasses ", "peak spike",],),
  //5104"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "mohawk",],),
  //5105"],),

  new Traits( "female, accessories" ,[ "classic shades ", "hot lipstick ", "mohawk dark ", "mole",],),
  //5106"],),

  new Traits( "male, accessories" ,[ "gold chain ", "horned rim glasses ", "muttonchops ", "wild hair",],),
  //5107"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "earring ", "frumpy hair ", "purple eye shadow",],),
  //5108"],),

  new Traits( "male, accessories" ,[ "hoodie ", "horned rim glasses ", "mole ", "shadow beard",],),
  //5109"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "goat ", "nerd glasses",],),
  //5110"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "eye mask ", "normal beard",],),
  //5111"],),

  new Traits( "male, accessories" ,[ "earring ", "goat ", "vape, "wild hair",],),
  //5112"],),

  new Traits( "male, accessories" ,[ "frown ", "mohawk thin ", "mustache",],),
  //5113"],),

  new Traits( "male, accessories" ,[ "big beard ", "earring ", "mohawk thin ", "regular shades",],),
  //5114"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "red mohawk",],),
  //5115"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "hoodie",],),
  //5116"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "messy hair",],),
  //5117"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "medical mask ", "pigtails",],),
  //5118"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "peak spike",],),
  //5119"],),

  new Traits( "female, accessories" ,[ "dark hair ", "rosy cheeks",],),
  //5120"],),

  new Traits( "female, accessories" ,[ "purple eye shadow ", "tassle hat",],),
  //5121"],),

  new Traits( "male, accessories" ,[ "cap ", "front beard",],),
  //5122"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "normal beard",],),
  //5123"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "vr",],),
  //5124"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "pipe ", "rosy cheeks",],),
  //5125"],),

  new Traits( "male, accessories" ,[ "big shades ", "handlebars ", "mohawk",],),
  //5126"],),

  new Traits( "male, accessories" ,[ "big shades ", "chinstrap ", "cigarette ", "peak spike",],),
  //5127"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "mustache",],),
  //5128"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "crazy hair ", "earring",],),
  //5129"],),

  new Traits( "male, accessories" ,[ "cap forward ", "eye patch ", "pipe",],),
  //5130"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "smile",],),
  //5131"],),

  new Traits( "female, accessories" ,[ "choker ", "clown eyes blue ", "mohawk dark",],),
  //5132"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "mohawk dark ", "normal beard",],),
  //5133"],),

  new Traits( "female, accessories" ,[ "black lipstick",],),
  //5134"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "pipe ", "wild white hair",],),
  //5135"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cap",],),
  //5136"],),

  new Traits( "female, accessories" ,[ "mole ", "purple lipstick ", "red mohawk",],),
  //5137"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "vr",],),
  //5138"],),

  new Traits( "female, accessories" ,[ "bandana ", "black lipstick ", "cigarette",],),
  //5139"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "headband ", "normal beard black",],),
  //5140"],),

  new Traits( "male, accessories" ,[ "cap ", "mustache",],),
  //5141"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "normal beard black",],),
  //5142"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "front beard",],),
  //5143"],),

  new Traits( "male, accessories" ,[ "cigarette ", "clown nose ", "stringy hair",],),
  //5144"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "normal beard ", "regular shades",],),
  //5145"],),

  new Traits( "male, accessories" ,[ "classic shades ", "goat ", "messy hair",],),
  //5146"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "luxurious beard",],),
  //5147"],),

  new Traits( "male, accessories" ,[ "eye mask ", "hoodie ", "normal beard",],),
  //5148"],),

  new Traits( "male, accessories" ,[ "classic shades ", "clown nose ", "knitted cap ", "normal beard black ", "smile",],),
  //5149"],),

  new Traits( "male, accessories" ,[ "bandana ", "cigarette ", "clown eyes blue",],),
  //5150"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "mole",],),
  //5151"],),

  new Traits( "male, accessories" ,[ "regular shades ", "stringy hair",],),
  //5152"],),

  new Traits( "female, accessories" ,[ "earring ", "purple eye shadow ", "wild hair",],),
  //5153"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "half shaved ", "purple lipstick",],),
  //5154"],),

  new Traits( "male, accessories" ,[ "normal beard ", "regular shades ", "wild hair",],),
  //5155"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "nerd glasses ", "pipe",],),
  //5156"],),

  new Traits( "male, accessories" ,[ "mole ", "peak spike ", "vr",],),
  //5157"],),

  new Traits( "female, accessories" ,[ "big shades ", "straight hair",],),
  //5158"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "hot lipstick ", "tassle hat",],),
  //5159"],),

  new Traits( "female, accessories" ,[ "eye patch ", "hot lipstick ", "wild blonde",],),
  //5160"],),

  new Traits( "female, accessories" ,[ "cigarette ", "clown eyes green",],),
  //5161"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "purple hair",],),
  //5162"],),

  new Traits( "male, accessories" ,[ "headband ", "vape",],),
  //5163"],),

  new Traits( "female, accessories" ,[ "half shaved ", "hot lipstick ", "vr",],),
  //5164"],),

  new Traits( "female, accessories" ,[ "mohawk dark ", "purple eye shadow",],),
  //5165"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "purple lipstick ", "straight hair blonde",],),
  //5166"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "gold chain ", "purple lipstick",],),
  //5167"],),

  new Traits( "female, accessories" ,[ "orange side ", "purple lipstick",],),
  //5168"],),

  new Traits( "male, accessories" ,[ "clown nose ", "hoodie",],),
  //5169"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "fedora",],),
  //5170"],),

  new Traits( "female, accessories" ,[ "earring",],),
  //5171"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "straight hair",],),
  //5172"],),

  new Traits( "male, accessories" ,[ "front beard ", "mohawk thin ", "vr",],),
  //5173"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "shadow beard",],),
  //5174"],),

  new Traits( "male, accessories" ,[ "bandana ", "cigarette ", "earring ", "gold chain",],),
  //5175"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "frown ", "mohawk",],),
  //5176"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "hot lipstick ", "straight hair blonde",],),
  //5177"],),

  new Traits( "male, accessories" ,[ "big shades ", "police cap",],),
  //5178"],),

  new Traits( "male, accessories" ,[ "eye patch ", "fedora",],),
  //5179"],),

  new Traits( "female, accessories" ,[ "classic shades ", "crazy hair",],),
  //5180"],),

  new Traits( "female, accessories" ,[ "cigarette ", "purple eye shadow ", "tassle hat",],),
  //5181"],),

  new Traits( "male, accessories" ,[ "earring ", "mole ", "police cap ", "small shades",],),
  //5182"],),

  new Traits( "female, accessories" ,[ "regular shades ", "straight hair dark ", "vape",],),
  //5183"],),

  new Traits( "male, accessories" ,[ "normal beard",],),
  //5184"],),

  new Traits( "male, accessories" ,[ "regular shades ", "top hat",],),
  //5185"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "pigtails ", "pipe",],),
  //5186"],),

  new Traits( "female, accessories" ,[ "big shades ", "hot lipstick ", "red mohawk",],),
  //5187"],),

  new Traits( "male, accessories" ,[ "cigarette ", "shaved head ", "small shades",],),
  //5188"],),

  new Traits( "male, accessories" ,[ "cap ", "earring ", "muttonchops",],),
  //5189"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "pigtails",],),
  //5190"],),

  new Traits( "female, accessories" ,[ "pink with hat ", "vape",],),
  //5191"],),

  new Traits( "male, accessories" ,[ "earring ", "nerd glasses ", "wild hair",],),
  //5192"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "mohawk",],),
  //5193"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "earring ", "messy hair",],),
  //5194"],),

  new Traits( "female, accessories" ,[ "bandana ", "hot lipstick ", "pipe",],),
  //5195"],),

  new Traits( "male, accessories" ,[ "front beard ", "vampire hair",],),
  //5196"],),

  new Traits( "male, accessories" ,[ "clown nose ", "luxurious beard",],),
  //5197"],),

  new Traits( "male, accessories" ,[ "mohawk ", "mustache ", "regular shades",],),
  //5198"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "messy hair ", "nerd glasses",],),
  //5199"],),

  new Traits( "male, accessories" ,[ "eye patch ", "mohawk",],),
  //5200"],),

  new Traits( "male, accessories" ,[ "eye mask ", "frumpy hair ", "pipe",],),
  //5201"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "classic shades ", "earring ", "mohawk thin",],),
  //5202"],),

  new Traits( "female, accessories" ,[ "big shades ", "dark hair",],),
  //5203"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "fedora ", "front beard dark ", "medical mask",],),
  //5204"],),

  new Traits( "male, accessories" ,[ "frown ", "police cap",],),
  //5205"],),

  new Traits( "male, accessories" ,[ "normal beard black ", "regular shades ", "shaved head",],),
  //5206"],),

  new Traits( "male, accessories" ,[ "goat ", "mohawk dark",],),
  //5207"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes blue ", "crazy hair ", "earring ", "vape",],),
  //5208"],),

  new Traits( "male, accessories" ,[ "small shades ", "vampire hair",],),
  //5209"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "straight hair dark",],),
  //5210"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "purple eye shadow ", "purple lipstick ", "straight hair dark",],),
  //5211"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "clown eyes green ", "purple lipstick",],),
  //5212"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "police cap ", "vr",],),
  //5213"],),

  new Traits( "male, accessories" ,[ "eye patch ", "silver chain ", "wild hair",],),
  //5214"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "regular shades",],),
  //5215"],),

  new Traits( "male, accessories" ,[ "cap ", "normal beard black",],),
  //5216"],),

  new Traits( "ape, accessories" ,[ "gold chain ", "knitted cap",],),
  //5217"],),

  new Traits( "male, accessories" ,[ "classic shades ", "hoodie ", "shadow beard",],),
  //5218"],),

  new Traits( "female, accessories" ,[ "medical mask ", "purple lipstick ", "wild blonde",],),
  //5219"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "front beard",],),
  //5220"],),

  new Traits( "female, accessories" ,[ "big shades ", "hot lipstick ", "tassle hat",],),
  //5221"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk dark ", "mole",],),
  //5222"],),

  new Traits( "male, accessories" ,[ "big beard ", "classic shades ", "headband",],),
  //5223"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "luxurious beard",],),
  //5224"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch",],),
  //5225"],),

  new Traits( "male, accessories" ,[ "earring ", "regular shades ", "shadow beard ", "stringy hair",],),
  //5226"],),

  new Traits( "male, accessories" ,[ "cigarette ", "frumpy hair",],),
  //5227"],),

  new Traits( "male, accessories" ,[ "front beard ", "stringy hair",],),
  //5228"],),

  new Traits( "male, accessories" ,[ "big shades ", "muttonchops ", "peak spike ", "smile",],),
  //5229"],),

  new Traits( "male, accessories" ,[ "beanie ", "shadow beard",],),
  //5230"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard ", "peak spike",],),
  //5231"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "nerd glasses ", "wild white hair",],),
  //5232"],),

  new Traits( "male, accessories" ,[ "cigarette ", "knitted cap ", "smile",],),
  //5233"],),

  new Traits( "zombie, accessories" ,[ "big shades ", "crazy hair ", "earring",],),
  //5234"],),

  new Traits( "male, accessories" ,[ "clown nose ", "cowboy hat ", "silver chain",],),
  //5235"],),

  new Traits( "female, accessories" ,[ "cap ", "eye patch",],),
  //5236"],),

  new Traits( "male, accessories" ,[ "classic shades ", "peak spike",],),
  //5237"],),

  new Traits( "male, accessories" ,[ "classic shades ", "messy hair ", "smile",],),
  //5238"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "handlebars",],),
  //5239"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "knitted cap",],),
  //5240"],),

  new Traits( "male, accessories" ,[ "do-rag ", "horned rim glasses ", "shadow beard ", "silver chain",],),
  //5241"],),

  new Traits( "male, accessories" ,[ "big shades ", "cowboy hat ", "shadow beard",],),
  //5242"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "headband",],),
  //5243"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "messy hair",],),
  //5244"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "do-rag ", "goat",],),
  //5245"],),

  new Traits( "male, accessories" ,[ "fedora ", "gold chain",],),
  //5246"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "horned rim glasses ", "mohawk",],),
  //5247"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "mohawk",],),
  //5248"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "headband",],),
  //5249"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "knitted cap",],),
  //5250"],),

  new Traits( "female, accessories" ,[ "bandana ", "clown eyes blue ", "earring ", "hot lipstick ", "vape",],),
  //5251"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "front beard dark ", "shaved head",],),
  //5252"],),

  new Traits( "zombie, accessories" ,[ "messy hair ", "mole",],),
  //5253"],),

  new Traits( "female, accessories" ,[ "cigarette ", "clown eyes blue ", "stringy hair",],),
  //5254"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "normal beard ", "shaved head",],),
  //5255"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "mole ", "wild blonde",],),
  //5256"],),

  new Traits( "male, accessories" ,[ "handlebars ", "mohawk dark ", "regular shades ", "vape",],),
  //5257"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "headband",],),
  //5258"],),

  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "normal beard black",],),
  //5259"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "gold chain ", "shaved head",],),
  //5260"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "gold chain ", "horned rim glasses ", "smile",],),
  //5261"],),

  new Traits( "male, accessories" ,[ "muttonchops",],),
  //5262"],),

  new Traits( "male, accessories" ,[ "frown ", "pipe",],),
  //5263"],),

  new Traits( "female, accessories" ,[ "purple eye shadow ", "wild blonde",],),
  //5264"],),

  new Traits( "female, accessories" ,[ "cap ", "clown eyes green ", "earring",],),
  //5265"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "straight hair",],),
  //5266"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "straight hair blonde ", "vape",],),
  //5267"],),

  new Traits( "male, accessories" ,[ "bandana ", "front beard ", "horned rim glasses",],),
  //5268"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "knitted cap ", "small shades",],),
  //5269"],),

  new Traits( "female, accessories" ,[ "mole ", "straight hair blonde",],),
  //5270"],),

  new Traits( "female, accessories" ,[ "blonde short ", "nerd glasses",],),
  //5271"],),

  new Traits( "male, accessories" ,[ "big shades ", "clown hair green",],),
  //5272"],),

  new Traits( "male, accessories" ,[ "headband ", "nerd glasses ", "shadow beard",],),
  //5273"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "muttonchops ", "shaved head",],),
  //5274"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "police cap",],),
  //5275"],),

  new Traits( "male, accessories" ,[ "frown ", "frumpy hair ", "normal beard ", "vr",],),
  //5276"],),

  new Traits( "female, accessories" ,[ "clown hair green ", "eye mask ", "hot lipstick",],),
  //5277"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "mohawk dark",],),
  //5278"],),

  new Traits( "female, accessories" ,[ "bandana ", "blue eye shadow",],),
  //5279"],),

  new Traits( "male, accessories" ,[ "cigarette ", "muttonchops ", "nerd glasses ", "wild hair",],),
  //5280"],),

  new Traits( "female, accessories" ,[ "pigtails ", "purple lipstick",],),
  //5281"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "earring ", "straight hair blonde",],),
  //5282"],),

  new Traits( "male, accessories" ,[ "do-rag ", "nerd glasses ", "normal beard black",],),
  //5283"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "medical mask ", "regular shades",],),
  //5284"],),

  new Traits( "female, accessories" ,[ "cap ", "hot lipstick ", "regular shades",],),
  //5285"],),

  new Traits( "male, accessories" ,[ "earring ", "shadow beard ", "shaved head ", "small shades",],),
  //5286"],),

  new Traits( "male, accessories" ,[ "eye patch ", "mohawk thin ", "pipe",],),
  //5287"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "purple hair",],),
  //5288"],),

  new Traits( "male, accessories" ,[ "handlebars ", "hoodie",],),
  //5289"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "mohawk dark ", "normal beard black",],),
  //5290"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "classic shades ", "stringy hair",],),
  //5291"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "clown eyes blue ", "frumpy hair",],),
  //5292"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "mole ", "purple lipstick",],),
  //5293"],),

  new Traits( "male, accessories" ,[ "cap forward ", "clown eyes blue ", "luxurious beard",],),
  //5294"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "purple eye shadow ", "straight hair blonde",],),
  //5295"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "goat ", "messy hair",],),
  //5296"],),

  new Traits( "male, accessories" ,[ "shadow beard ", "wild hair",],),
  //5297"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "earring ", "hoodie ", "horned rim glasses",],),
  //5298"],),

  new Traits( "zombie, accessories" ,[ "cigarette ", "earring ", "handlebars ", "mohawk dark",],),
  //5299"],),

  new Traits( "male, accessories" ,[ "do-rag ", "goat ", "nerd glasses ", "silver chain",],),
  //5300"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "frumpy hair",],),
  //5301"],),

  new Traits( "female, accessories" ,[ "mohawk ", "nerd glasses ", "purple lipstick",],),
  //5302"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mustache ", "top hat",],),
  //5303"],),

  new Traits( "male, accessories" ,[ "cigarette ", "classic shades ", "earring ", "vampire hair",],),
  //5304"],),

  new Traits( "male, accessories" ,[ "classic shades ", "handlebars ", "messy hair",],),
  //5305"],),

  new Traits( "male, accessories" ,[ "cigarette ", "front beard ", "purple hair ", "spots",],),
  //5306"],),

  new Traits( "female, accessories" ,[ "earring ", "purple eye shadow ", "purple lipstick ", "red mohawk",],),
  //5307"],),

  new Traits( "male, accessories" ,[ "hoodie ", "vape",],),
  //5308"],),

  new Traits( "male, accessories" ,[ "cigarette ", "wild hair",],),
  //5309"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "wild blonde",],),
  //5310"],),

  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "stringy hair",],),
  //5311"],),

  new Traits( "zombie, accessories" ,[ "knitted cap ", "luxurious beard",],),
  //5312"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "fedora ", "mole ", "pipe",],),
  //5313"],),

  new Traits( "ape, accessories" ,[ "do-rag ", "horned rim glasses",],),
  //5314"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "messy hair",],),
  //5315"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "cigarette ", "pink with hat",],),
  //5316"],),

  new Traits( "male, accessories" ,[ "normal beard black ", "police cap",],),
  //5317"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "mustache",],),
  //5318"],),

  new Traits( "male, accessories" ,[ "big shades ", "mustache ", "peak spike",],),
  //5319"],),

  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "fedora ", "silver chain",],),
  //5320"],),

  new Traits( "female, accessories" ,[ "mohawk thin ", "nerd glasses",],),
  //5321"],),

  new Traits( "male, accessories" ,[ "earring ", "knitted cap ", "shadow beard",],),
  //5322"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "crazy hair",],),
  //5323"],),

  new Traits( "male, accessories" ,[ "headband ", "mustache ", "nerd glasses",],),
  //5324"],),

  new Traits( "male, accessories" ,[ "regular shades ", "vampire hair",],),
  //5325"],),

  new Traits( "female, accessories" ,[ "eye patch ", "pigtails",],),
  //5326"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "rosy cheeks ", "stringy hair",],),
  //5327"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "bandana ", "earring",],),
  //5328"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "regular shades",],),
  //5329"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "earring ", "horned rim glasses",],),
  //5330"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "pilot helmet",],),
  //5331"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "nerd glasses ", "red mohawk ", "vape",],),
  //5332"],),

  new Traits( "female, accessories" ,[ "cigarette ", "dark hair ", "earring",],),
  //5333"],),

  new Traits( "male, accessories" ,[ "earring ", "goat ", "mole ", "wild hair",],),
  //5334"],),

  new Traits( "male, accessories" ,[ "do-rag ", "luxurious beard",],),
  //5335"],),

  new Traits( "zombie, accessories" ,[ "police cap",],),
  //5336"],),

  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "shaved head",],),
  //5337"],),

  new Traits( "male, accessories" ,[ "goat ", "vampire hair",],),
  //5338"],),

  new Traits( "female, accessories" ,[ "headband ", "purple lipstick ", "spots",],),
  //5339"],),

  new Traits( "female, accessories" ,[ "eye patch ", "mohawk",],),
  //5340"],),

  new Traits( "male, accessories" ,[ "cap ", "horned rim glasses ", "normal beard black",],),
  //5341"],),

  new Traits( "male, accessories" ,[ "cigarette ", "do-rag ", "earring ", "eye patch",],),
  //5342"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "tassle hat",],),
  //5343"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "earring",],),
  //5344"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "straight hair blonde",],),
  //5345"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "vampire hair",],),
  //5346"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "wild blonde",],),
  //5347"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown hair green",],),
  //5348"],),

  new Traits( "male, accessories" ,[ "eye mask ", "mohawk ", "shadow beard",],),
  //5349"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "top hat",],),
  //5350"],),

  new Traits( "male, accessories" ,[ "eye mask ", "hoodie ", "muttonchops",],),
  //5351"],),

  new Traits( "male, accessories" ,[ "cigarette ", "front beard ", "peak spike",],),
  //5352"],),

  new Traits( "male, accessories" ,[ "mohawk ", "muttonchops ", "small shades",],),
  //5353"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mole ", "stringy hair",],),
  //5354"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cap ", "handlebars",],),
  //5355"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "earring ", "front beard ", "messy hair",],),
  //5356"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "shaved head",],),
  //5357"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "crazy hair",],),
  //5358"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "earring ", "luxurious beard",],),
  //5359"],),

  new Traits( "male, accessories" ,[ "small shades",],),
  //5360"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "blonde short",],),
  //5361"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "front beard dark ", "spots ", "stringy hair",],),
  //5362"],),

  new Traits( "male, accessories" ,[ "cap ", "classic shades ", "handlebars",],),
  //5363"],),

  new Traits( "male, accessories" ,[ "bandana ", "cigarette ", "classic shades",],),
  //5364"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "peak spike ", "shadow beard",],),
  //5365"],),

  new Traits( "male, accessories" ,[ "mohawk ", "normal beard",],),
  //5366"],),

  new Traits( "male, accessories" ,[ "classic shades ", "frumpy hair ", "luxurious beard",],),
  //5367"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk ", "normal beard",],),
  //5368"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "peak spike",],),
  //5369"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "nerd glasses ", "pipe ", "shadow beard",],),
  //5370"],),

  new Traits( "male, accessories" ,[ "bandana ", "cigarette",],),
  //5371"],),

  new Traits( "female, accessories" ,[ "classic shades ", "wild blonde",],),
  //5372"],),

  new Traits( "female, accessories" ,[ "earring ", "frumpy hair ", "pipe ", "purple lipstick",],),
  //5373"],),

  new Traits( "male, accessories" ,[ "front beard ", "wild hair",],),
  //5374"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "mustache",],),
  //5375"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "half shaved",],),
  //5376"],),

  new Traits( "male, accessories" ,[ "big shades ", "luxurious beard ", "messy hair ", "smile",],),
  //5377"],),

  new Traits( "male, accessories" ,[ "front beard ", "vampire hair",],),
  //5378"],),

  new Traits( "male, accessories" ,[ "clown nose ", "mohawk thin",],),
  //5379"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "mohawk thin ", "nerd glasses",],),
  //5380"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "cowboy hat",],),
  //5381"],),

  new Traits( "male, accessories" ,[ "cigarette ", "nerd glasses ", "peak spike",],),
  //5382"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "dark hair ", "vape",],),
  //5383"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "frumpy hair ", "purple lipstick",],),
  //5384"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "red mohawk",],),
  //5385"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "wild blonde",],),
  //5386"],),

  new Traits( "male, accessories" ,[ "eye patch ", "handlebars ", "mohawk dark",],),
  //5387"],),

  new Traits( "male, accessories" ,[ "eye mask ", "normal beard black ", "vampire hair",],),
  //5388"],),

  new Traits( "female, accessories" ,[ "welding goggles ", "wild hair",],),
  //5389"],),

  new Traits( "male, accessories" ,[ "big shades ", "handlebars ", "mohawk thin",],),
  //5390"],),

  new Traits( "female, accessories" ,[ "big shades ", "cigarette ", "purple lipstick ", "straight hair",],),
  //5391"],),

  new Traits( "male, accessories" ,[ "eye mask ", "frumpy hair ", "shadow beard",],),
  //5392"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard ", "peak spike ", "small shades",],),
  //5393"],),

  new Traits( "male, accessories" ,[ "eye patch ", "mohawk",],),
  //5394"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "small shades",],),
  //5395"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "clown eyes green ", "mohawk thin",],),
  //5396"],),

  new Traits( "male, accessories" ,[ "purple hair ", "shadow beard",],),
  //5397"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "half shaved ", "hot lipstick",],),
  //5398"],),

  new Traits( "male, accessories" ,[ "do-rag ", "handlebars",],),
  //5399"],),

  new Traits( "male, accessories" ,[ "bandana ", "clown eyes green ", "earring",],),
  //5400"],),

  new Traits( "female, accessories" ,[ "bandana ", "purple lipstick ", "rosy cheeks",],),
  //5401"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "hoodie ", "shadow beard",],),
  //5402"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "shaved head",],),
  //5403"],),

  new Traits( "male, accessories" ,[ "headband ", "regular shades",],),
  //5404"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "wild blonde",],),
  //5405"],),

  new Traits( "male, accessories" ,[ "gold chain ", "mohawk thin",],),
  //5406"],),

  new Traits( "female, accessories" ,[ "straight hair dark ", "welding goggles",],),
  //5407"],),

  new Traits( "male, accessories" ,[ "eye patch ", "wild hair",],),
  //5408"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "hot lipstick ", "pigtails",],),
  //5409"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "mustache ", "rosy cheeks",],),
  //5410"],),

  new Traits( "male, accessories" ,[ "big shades ", "clown nose ", "wild hair",],),
  //5411"],),

  new Traits( "zombie, accessories" ,[ "crazy hair ", "nerd glasses",],),
  //5412"],),

  new Traits( "female, accessories" ,[ "blonde short ", "horned rim glasses ", "hot lipstick",],),
  //5413"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "silver chain ", "straight hair",],),
  //5414"],),

  new Traits( "male, accessories" ,[ "cigarette ", "headband ", "luxurious beard ", "regular shades",],),
  //5415"],),

  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "shaved head",],),
  //5416"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "mohawk thin",],),
  //5417"],),

  new Traits( "male, accessories" ,[ "earring ", "mustache ", "nerd glasses ", "shaved head",],),
  //5418"],),

  new Traits( "female, accessories" ,[ "blonde short ", "purple eye shadow ", "purple lipstick",],),
  //5419"],),

  new Traits( "male, accessories" ,[ "cap ", "horned rim glasses ", "luxurious beard",],),
  //5420"],),

  new Traits( "male, accessories" ,[ "pipe ", "purple hair",],),
  //5421"],),

  new Traits( "male, accessories" ,[ "big shades ", "cap",],),
  //5422"],),

  new Traits( "male, accessories" ,[ "cap forward ", "frown ", "handlebars",],),
  //5423"],),

  new Traits( "male, accessories" ,[ "goat ", "purple hair ", "small shades",],),
  //5424"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "cowboy hat",],),
  //5425"],),

  new Traits( "female, accessories" ,[ "blue eye shadow",],),
  //5426"],),

  new Traits( "male, accessories" ,[ "cap forward ", "cigarette ", "earring",],),
  //5427"],),

  new Traits( "male, accessories" ,[ "eye mask ", "mohawk thin ", "mole",],),
  //5428"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "nerd glasses ", "wild blonde",],),
  //5429"],),

  new Traits( "male, accessories" ,[ "earring ", "luxurious beard ", "spots",],),
  //5430"],),

  new Traits( "female, accessories" ,[ "purple eye shadow ", "purple lipstick ", "straight hair blonde",],),
  //5431"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk",],),
  //5432"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "frown ", "muttonchops",],),
  //5433"],),

  new Traits( "male, accessories" ,[ "goat ", "mohawk",],),
  //5434"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "classic shades ", "stringy hair",],),
  //5435"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "muttonchops ", "nerd glasses",],),
  //5436"],),

  new Traits( "male, accessories" ,[ "earring ", "nerd glasses ", "stringy hair",],),
  //5437"],),

  new Traits( "female, accessories" ,[ "cigarette ", "straight hair",],),
  //5438"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "mohawk thin",],),
  //5439"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "police cap",],),
  //5440"],),

  new Traits( "female, accessories" ,[ "bandana ", "black lipstick ", "clown eyes blue ", "earring",],),
  //5441"],),

  new Traits( "male, accessories" ,[ "cap ", "clown eyes blue",],),
  //5442"],),

  new Traits( "male, accessories" ,[ "front beard ", "mole ", "wild hair",],),
  //5443"],),

  new Traits( "male, accessories" ,[ "front beard ", "top hat",],),
  //5444"],),

  new Traits( "male, accessories" ,[ "cap ", "earring ", "eye patch",],),
  //5445"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "eye patch ", "half shaved",],),
  //5446"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "goat ", "small shades",],),
  //5447"],),

  new Traits( "male, accessories" ,[ "shadow beard ", "wild hair",],),
  //5448"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes blue ", "frumpy hair",],),
  //5449"],),

  new Traits( "male, accessories" ,[ "cigarette ", "clown eyes blue ", "front beard dark ", "stringy hair",],),
  //5450"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "mohawk thin",],),
  //5451"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "mohawk dark",],),
  //5452"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "shadow beard ", "spots",],),
  //5453"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "gold chain ", "nerd glasses",],),
  //5454"],),

  new Traits( "male, accessories" ,[ "peak spike ", "pipe",],),
  //5455"],),

  new Traits( "male, accessories" ,[ "eye patch ", "frown ", "headband ", "vape",],),
  //5456"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "green eye shadow ", "straight hair blonde",],),
  //5457"],),

  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "mole ", "nerd glasses",],),
  //5458"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "mohawk thin ", "muttonchops",],),
  //5459"],),

  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "eye patch ", "frown",],),
  //5460"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "stringy hair",],),
  //5461"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "stringy hair",],),
  //5462"],),

  new Traits( "male, accessories" ,[ "front beard dark",],),
  //5463"],),

  new Traits( "male, accessories" ,[ "earring ", "regular shades ", "shaved head ", "silver chain",],),
  //5464"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "frown ", "regular shades ", "shaved head",],),
  //5465"],),

  new Traits( "male, accessories" ,[ "smile",],),
  //5466"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "stringy hair",],),
  //5467"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "purple lipstick ", "wild hair",],),
  //5468"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "earring ", "stringy hair",],),
  //5469"],),

  new Traits( "male, accessories" ,[ "cigarette ", "wild hair",],),
  //5470"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "earring ", "wild hair",],),
  //5471"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "nerd glasses",],),
  //5472"],),

  new Traits( "male, accessories" ,[ "hoodie ", "pipe ", "shadow beard",],),
  //5473"],),

  new Traits( "female, accessories" ,[ "blonde short ", "blue eye shadow",],),
  //5474"],),

  new Traits( "male, accessories" ,[ "earring ", "peak spike ", "vr",],),
  //5475"],),

  new Traits( "male, accessories" ,[ "big beard ", "messy hair",],),
  //5476"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "mohawk thin ", "rosy cheeks",],),
  //5477"],),

  new Traits( "male, accessories" ,[ "normal beard ", "top hat",],),
  //5478"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "police cap",],),
  //5479"],),

  new Traits( "male, accessories" ,[ "purple hair ", "small shades",],),
  //5480"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "mohawk ", "purple lipstick",],),
  //5481"],),

  new Traits( "male, accessories" ,[ "handlebars ", "knitted cap",],),
  //5482"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "wild hair",],),
  //5483"],),

  new Traits( "male, accessories" ,[ "big shades ", "cap forward ", "mustache",],),
  //5484"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "mohawk dark ", "purple lipstick",],),
  //5485"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "hoodie ", "muttonchops ", "vape",],),
  //5486"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "police cap",],),
  //5487"],),

  new Traits( "male, accessories" ,[ "eye patch ", "mustache ", "police cap",],),
  //5488"],),

  new Traits( "zombie, accessories" ,[ "fedora",],),
  //5489"],),

  new Traits( "female, accessories" ,[ "half shaved ", "hot lipstick ", "mole ", "vr",],),
  //5490"],),

  new Traits( "male, accessories" ,[ "police cap ", "smile",],),
  //5491"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "rosy cheeks",],),
  //5492"],),

  new Traits( "female, accessories" ,[ "classic shades ", "pigtails ", "pipe ", "purple lipstick",],),
  //5493"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard black ", "stringy hair",],),
  //5494"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "fedora ", "mole",],),
  //5495"],),

  new Traits( "female, accessories" ,[ "big shades ", "tassle hat",],),
  //5496"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "purple lipstick ", "straight hair blonde",],),
  //5497"],),

  new Traits( "male, accessories" ,[ "do-rag ", "goat ", "medical mask",],),
  //5498"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "mohawk thin ", "mole",],),
  //5499"],),

  new Traits( "male, accessories" ,[ "big shades ", "chinstrap ", "medical mask ", "stringy hair",],),
  //5500"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "mohawk dark",],),
  //5501"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "stringy hair",],),
  //5502"],),

  new Traits( "female, accessories" ,[ "blonde short ", "eye mask",],),
  //5503"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "do-rag ", "earring",],),
  //5504"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "mole ", "small shades",],),
  //5505"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "normal beard ", "peak spike",],),
  //5506"],),

  new Traits( "female, accessories" ,[ "big shades ", "messy hair",],),
  //5507"],),

  new Traits( "female, accessories" ,[ "blonde short ", "earring ", "pipe",],),
  //5508"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "cigarette ", "earring ", "shaved head",],),
  //5509"],),

  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "front beard dark ", "stringy hair",],),
  //5510"],),

  new Traits( "male, accessories" ,[ "cap ", "chinstrap ", "silver chain",],),
  //5511"],),

  new Traits( "male, accessories" ,[ "earring ", "mustache ", "nerd glasses ", "vampire hair",],),
  //5512"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "pink with hat ", "purple lipstick",],),
  //5513"],),

  new Traits( "male, accessories" ,[ "cap ", "shadow beard",],),
  //5514"],),

  new Traits( "female, accessories" ,[ "spots ", "straight hair blonde",],),
  //5515"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "knitted cap",],),
  //5516"],),

  new Traits( "male, accessories" ,[ "mustache ", "regular shades",],),
  //5517"],),

  new Traits( "female, accessories" ,[ "messy hair ", "purple eye shadow",],),
  //5518"],),

  new Traits( "male, accessories" ,[ "big shades ", "knitted cap ", "normal beard",],),
  //5519"],),

  new Traits( "male, accessories" ,[ "eye patch ", "messy hair",],),
  //5520"],),

  new Traits( "male, accessories" ,[ "bandana ", "eye patch",],),
  //5521"],),

  new Traits( "female, accessories" ,[ "bandana ", "blue eye shadow ", "earring",],),
  //5522"],),

  new Traits( "male, accessories" ,[ "big shades ", "cap",],),
  //5523"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "dark hair ", "welding goggles",],),
  //5524"],),

  new Traits( "female, accessories" ,[ "spots",],),
  //5525"],),

  new Traits( "male, accessories" ,[ "cap forward ", "cigarette ", "gold chain ", "mole",],),
  //5526"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "mustache ", "pipe",],),
  //5527"],),

  new Traits( "male, accessories" ,[ "cap forward ", "spots",],),
  //5528"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "shadow beard ", "smile",],),
  //5529"],),

  new Traits( "male, accessories" ,[ "front beard ", "mohawk thin ", "silver chain",],),
  //5530"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "pigtails",],),
  //5531"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "hot lipstick ", "mohawk thin",],),
  //5532"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "front beard ", "police cap",],),
  //5533"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "wild blonde",],),
  //5534"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "hot lipstick ", "stringy hair",],),
  //5535"],),

  new Traits( "male, accessories" ,[ "mohawk ", "mole ", "shadow beard",],),
  //5536"],),

  new Traits( "male, accessories" ,[ "bandana ", "clown eyes green ", "normal beard black",],),
  //5537"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard ", "nerd glasses ", "police cap",],),
  //5538"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "headband",],),
  //5539"],),

  new Traits( "female, accessories" ,[ "bandana ", "horned rim glasses",],),
  //5540"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "hot lipstick ", "orange side",],),
  //5541"],),

  new Traits( "male, accessories" ,[ "big shades ", "handlebars ", "messy hair",],),
  //5542"],),

  new Traits( "male, accessories" ,[ "cigarette ", "shadow beard ", "wild hair",],),
  //5543"],),

  new Traits( "male, accessories" ,[ "eye mask ", "mohawk ", "mustache",],),
  //5544"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "earring ", "hot lipstick ", "vape, "wild hair",],),
  //5545"],),

  new Traits( "male, accessories" ,[ "vr ", "wild hair",],),
  //5546"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "front beard dark ", "mole",],),
  //5547"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "frown ", "wild hair",],),
  //5548"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "headband",],),
  //5549"],),

  new Traits( "female, accessories" ,[ "choker ", "earring ", "hot lipstick ", "messy hair",],),
  //5550"],),

  new Traits( "female, accessories" ,[ "vape, "wild blonde",],),
  //5551"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "knitted cap ", "mole",],),
  //5552"],),

  new Traits( "female, accessories" ,[ "cigarette ", "horned rim glasses ", "knitted cap",],),
  //5553"],),

  new Traits( "female, accessories" ,[ "eye mask ", "pink with hat ", "purple lipstick",],),
  //5554"],),

  new Traits( "male, accessories" ,[ "cigarette ", "messy hair ", "vr",],),
  //5555"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "police cap",],),
  //5556"],),

  new Traits( "male, accessories" ,[ "normal beard ", "shaved head",],),
  //5557"],),

  new Traits( "male, accessories" ,[ "cap ", "earring ", "mustache",],),
  //5558"],),

  new Traits( "male, accessories" ,[ "eye patch ", "headband ", "mole ", "normal beard",],),
  //5559"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "knitted cap",],),
  //5560"],),

  new Traits( "male, accessories" ,[ "cap forward ", "classic shades",],),
  //5561"],),

  new Traits( "female, accessories" ,[ "dark hair ", "purple lipstick ", "spots",],),
  //5562"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "vape, "wild blonde",],),
  //5563"],),

  new Traits( "female, accessories" ,[ "cap ", "nerd glasses ", "pipe",],),
  //5564"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "green eye shadow ", "knitted cap",],),
  //5565"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "classic shades ", "straight hair",],),
  //5566"],),

  new Traits( "female, accessories" ,[ "messy hair ", "purple eye shadow",],),
  //5567"],),

  new Traits( "male, accessories" ,[ "do-rag ", "pipe",],),
  //5568"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cap",],),
  //5569"],),

  new Traits( "male, accessories" ,[ "big shades ", "frumpy hair ", "mustache",],),
  //5570"],),

  new Traits( "male, accessories" ,[ "big shades ", "messy hair ", "vape",],),
  //5571"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "medical mask ", "pigtails",],),
  //5572"],),

  new Traits( "zombie, accessories" ,[ "3d glasses ", "luxurious beard ", "mohawk",],),
  //5573"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "eye patch",],),
  //5574"],),

  new Traits( "male, accessories" ,[ "do-rag ", "front beard",],),
  //5575"],),

  new Traits( "female, accessories" ,[ "blonde short ", "cigarette ", "earring",],),
  //5576"],),

  new Traits( "ape, accessories" ,[ "cowboy hat",],),
  //5577"],),

  new Traits( "female, accessories" ,[ "vr",],),
  //5578"],),

  new Traits( "male, accessories" ,[ "messy hair ", "mustache",],),
  //5579"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk ", "regular shades",],),
  //5580"],),

  new Traits( "male, accessories" ,[ "bandana ", "mustache",],),
  //5581"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "muttonchops",],),
  //5582"],),

  new Traits( "male, accessories" ,[ "big beard ", "eye mask ", "top hat",],),
  //5583"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "messy hair",],),
  //5584"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "peak spike ", "shadow beard",],),
  //5585"],),

  new Traits( "male, accessories" ,[ "classic shades ", "gold chain ", "headband",],),
  //5586"],),

  new Traits( "female, accessories" ,[ "mohawk ", "pipe ", "purple eye shadow",],),
  //5587"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "knitted cap ", "mole",],),
  //5588"],),

  new Traits( "male, accessories" ,[ "big shades ", "front beard dark ", "stringy hair",],),
  //5589"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "headband",],),
  //5590"],),

  new Traits( "female, accessories" ,[ "cigarette ", "frumpy hair ", "purple lipstick",],),
  //5591"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "red mohawk",],),
  //5592"],),
  
  
  new Traits( "male, accessories" ,[ "horned rim glasses ", "wild hair",],),
  //5593"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "messy hair",],),
  //5594"],),

  new Traits( "male, accessories" ,[ "shadow beard ", "top hat",],),
  //5595"],),

  new Traits( "male, accessories" ,[ "classic shades ", "crazy hair ", "earring ", "front beard dark",],),
  //5596"],),

  new Traits( "male, accessories" ,[ "hoodie ", "mole ", "muttonchops",],),
  //5597"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "front beard ", "small shades",],),
  //5598"],),

  new Traits( "male, accessories" ,[ "hoodie ", "mole",],),
  //5599"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "gold chain ", "small shades",],),
  //5600"],),

  new Traits( "female, accessories" ,[ "classic shades ", "orange side",],),
  //5601"],),

  new Traits( "male, accessories" ,[ "cigarette ", "front beard ", "messy hair",],),
  //5602"],),

  new Traits( "male, accessories" ,[ "do-rag ", "front beard dark",],),
  //5603"],),

  new Traits( "male, accessories" ,[ "frown ", "knitted cap ", "vape",],),
  //5604"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "nerd glasses",],),
  //5605"],),

  new Traits( "male, accessories" ,[ "earring ", "goat ", "mohawk ", "nerd glasses",],),
  //5606"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "pigtails",],),
  //5607"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "pigtails",],),
  //5608"],),

  new Traits( "female, accessories" ,[ "bandana ", "clown eyes blue ", "earring ", "hot lipstick",],),
  //5609"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "tiara",],),
  //5610"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "mohawk dark",],),
  //5611"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "classic shades ", "dark hair ", "earring",],),
  //5612"],),

  new Traits( "male, accessories" ,[ "messy hair ", "normal beard black",],),
  //5613"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "mohawk thin",],),
  //5614"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "orange side ", "purple eye shadow",],),
  //5615"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "knitted cap",],),
  //5616"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "knitted cap ", "luxurious beard",],),
  //5617"],),

  new Traits( "male, accessories" ,[ "messy hair ", "vr",],),
  //5618"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "tassle hat",],),
  //5619"],),

  new Traits( "female, accessories" ,[ "bandana ", "blue eye shadow ", "hot lipstick",],),
  //5620"],),

  new Traits( "female, accessories" ,[ "classic shades ", "purple lipstick ", "straight hair blonde",],),
  //5621"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "clown eyes green ", "earring ", "gold chain ", "hot lipstick ", "pipe",],),
  //5622"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "orange side ", "purple lipstick",],),
  //5623"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "peak spike",],),
  //5624"],),

  new Traits( "male, accessories" ,[ "clown nose ", "do-rag ", "earring ", "mustache",],),
  //5625"],),

  new Traits( "male, accessories" ,[ "classic shades ", "normal beard black ", "wild hair",],),
  //5626"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "wild hair",],),
  //5627"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "hot lipstick ", "messy hair",],),
  //5628"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "dark hair ", "earring ", "purple lipstick",],),
  //5629"],),

  new Traits( "male, accessories" ,[ "earring ", "messy hair",],),
  //5630"],),

  new Traits( "male, accessories" ,[ "cap forward ", "clown nose",],),
  //5631"],),

  new Traits( "male, accessories" ,[ "handlebars ", "shaved head",],),
  //5632"],),

  new Traits( "male, accessories" ,[ "big shades ", "shadow beard ", "top hat",],),
  //5633"],),

  new Traits( "male, accessories" ,[ "earring ", "messy hair ", "shadow beard",],),
  //5634"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "nerd glasses ", "silver chain",],),
  //5635"],),

  new Traits( "female, accessories" ,[ "messy hair ", "regular shades",],),
  //5636"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "mohawk thin",],),
  //5637"],),

  new Traits( "female, accessories" ,[ "half shaved ", "purple lipstick",],),
  //5638"],),

  new Traits( "female, accessories" ,[ "gold chain ", "wild hair",],),
  //5639"],),

  new Traits( "female, accessories" ,[ "clown hair green ", "purple lipstick",],),
  //5640"],),

  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "mohawk thin",],),
  //5641"],),

  new Traits( "female, accessories" ,[ "blonde short ", "earring ", "nerd glasses ", "silver chain",],),
  //5642"],),

  new Traits( "male, accessories" ,[ "shadow beard ", "smile ", "stringy hair",],),
  //5643"],),

  new Traits( "female, accessories" ,[ "messy hair ", "vr",],),
  //5644"],),

  new Traits( "female, accessories" ,[ "gold chain ", "pilot helmet",],),
  //5645"],),

  new Traits( "female, accessories" ,[ "earring ", "eye patch ", "pigtails",],),
  //5646"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "goat ", "nerd glasses ", "pipe",],),
  //5647"],),

  new Traits( "female, accessories" ,[ "eye patch ", "mohawk dark ", "purple lipstick",],),
  //5648"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blonde short ", "gold chain",],),
  //5649"],),

  new Traits( "male, accessories" ,[ "normal beard ", "regular shades ", "stringy hair",],),
  //5650"],),

  new Traits( "male, accessories" ,[ "pipe ", "purple hair",],),
  //5651"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "tassle hat",],),
  //5652"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "earring ", "front beard ", "mohawk thin",],),
  //5653"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "nerd glasses",],),
  //5654"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "smile ", "stringy hair",],),
  //5655"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "medical mask ", "silver chain",],),
  //5656"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "frown",],),
  //5657"],),

  new Traits( "male, accessories" ,[ "goat ", "knitted cap ", "small shades",],),
  //5658"],),

  new Traits( "male, accessories" ,[ "big shades ", "fedora ", "mole ", "smile",],),
  //5659"],),

  new Traits( "female, accessories" ,[ "eye patch ", "stringy hair",],),
  //5660"],),

  new Traits( "male, accessories" ,[ "cap forward ", "chinstrap ", "earring",],),
  //5661"],),

  new Traits( "male, accessories" ,[ "gold chain ", "horned rim glasses ", "shaved head",],),
  //5662"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "mohawk dark ", "shadow beard",],),
  //5663"],),

  new Traits( "male, accessories" ,[ "cap forward ", "goat",],),
  //5664"],),

  new Traits( "male, accessories" ,[ "big shades ", "shadow beard ", "top hat ", "vape",],),
  //5665"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "tassle hat",],),
  //5666"],),

  new Traits( "female, accessories" ,[ "classic shades ", "hot lipstick ", "wild hair",],),
  //5667"],),

  new Traits( "female, accessories" ,[ "choker ", "cigarette ", "wild white hair",],),
  //5668"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "stringy hair",],),
  //5669"],),

  new Traits( "female, accessories" ,[ "orange side ", "welding goggles",],),
  //5670"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "goat",],),
  //5671"],),

  new Traits( "female, accessories" ,[ "mohawk ", "mole ", "purple lipstick",],),
  //5672"],),

  new Traits( "female, accessories" ,[ "regular shades ", "wild blonde",],),
  //5673"],),

  new Traits( "male, accessories" ,[ "clown nose ", "front beard dark ", "stringy hair",],),
  //5674"],),

  new Traits( "female, accessories" ,[ "gold chain ", "green eye shadow ", "mole ", "red mohawk",],),
  //5675"],),

  new Traits( "male, accessories" ,[ "big shades ", "cap ", "mole",],),
  //5676"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "wild hair",],),
  //5677"],),

  new Traits( "male, accessories" ,[ "cap ", "classic shades ", "normal beard",],),
  //5678"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "pigtails ", "regular shades",],),
  //5679"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "handlebars ", "medical mask",],),
  //5680"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "black lipstick ", "earring ", "red mohawk",],),
  //5681"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "half shaved ", "mole",],),
  //5682"],),

  new Traits( "male, accessories" ,[ "frown ", "frumpy hair",],),
  //5683"],),

  new Traits( "female, accessories" ,[ "choker ", "pilot helmet",],),
  //5684"],),

  new Traits( "female, accessories" ,[ "cap ", "purple lipstick ", "vr",],),
  //5685"],),

  new Traits( "male, accessories" ,[ "handlebars ", "purple hair",],),
  //5686"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "messy hair",],),
  //5687"],),

  new Traits( "male, accessories" ,[ "cap forward ", "handlebars",],),
  //5688"],),

  new Traits( "female, accessories" ,[ "nerd glasses ", "red mohawk",],),
  //5689"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "beanie ", "muttonchops",],),
  //5690"],),

  new Traits( "female, accessories" ,[ "clown hair green ", "green eye shadow ", "purple lipstick",],),
  //5691"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "purple eye shadow ", "tiara",],),
  //5692"],),

  new Traits( "female, accessories" ,[ "classic shades ", "straight hair ", "vape",],),
  //5693"],),

  new Traits( "male, accessories" ,[ "mohawk ", "shadow beard ", "small shades",],),
  //5694"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "mohawk dark ", "normal beard black",],),
  //5695"],),

  new Traits( "male, accessories" ,[ "eye mask ", "mustache ", "police cap",],),
  //5696"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "crazy hair ", "nerd glasses",],),
  //5697"],),

  new Traits( "female, accessories" ,[ "earring ", "headband ", "purple eye shadow",],),
  //5698"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cigarette ", "normal beard ", "vampire hair",],),
  //5699"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "normal beard ", "regular shades",],),
  //5700"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "normal beard",],),
  //5701"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "dark hair ", "mole",],),
  //5702"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "hot lipstick ", "mohawk thin",],),
  //5703"],),

  new Traits( "female, accessories" ,[ "nerd glasses ", "red mohawk",],),
  //5704"],),

  new Traits( "male, accessories" ,[ "cap ", "classic shades",],),
  //5705"],),

  new Traits( "male, accessories" ,[ "regular shades ", "wild hair",],),
  //5706"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "messy hair ", "shadow beard",],),
  //5707"],),

  new Traits( "female, accessories" ,[ "clown hair green ", "hot lipstick",],),
  //5708"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "muttonchops ", "peak spike",],),
  //5709"],),

  new Traits( "male, accessories" ,[ "classic shades ", "fedora ", "luxurious beard",],),
  //5710"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "earring ", "normal beard ", "peak spike",],),
  //5711"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "gold chain",],),
  //5712"],),

  new Traits( "female, accessories" ,[ "dark hair ", "hot lipstick",],),
  //5713"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "front beard ", "vr",],),
  //5714"],),

  new Traits( "male, accessories" ,[ "police cap ", "vr",],),
  //5715"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "medical mask ", "messy hair",],),
  //5716"],),

  new Traits( "female, accessories" ,[ "bandana ", "vape",],),
  //5717"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "mohawk ", "mustache",],),
  //5718"],),

  new Traits( "female, accessories" ,[ "cigarette ", "dark hair ", "welding goggles",],),
  //5719"],),

  new Traits( "male, accessories" ,[ "bandana ", "clown nose",],),
  //5720"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "pigtails ", "spots ", "vape",],),
  //5721"],),

  new Traits( "male, accessories" ,[ "bandana ", "classic shades ", "shadow beard",],),
  //5722"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "earring ", "hot lipstick ", "mole",],),
  //5723"],),

  new Traits( "female, accessories" ,[ "eye patch ", "wild hair",],),
  //5724"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "hoodie ", "normal beard black",],),
  //5725"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "earring ", "mustache",],),
  //5726"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "front beard ", "pipe",],),
  //5727"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "frumpy hair ", "rosy cheeks",],),
  //5728"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "front beard ", "mohawk",],),
  //5729"],),

  new Traits( "male, accessories" ,[ "mustache ", "police cap",],),
  //5730"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mole ", "red mohawk",],),
  //5731"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "normal beard black ", "smile ", "stringy hair",],),
  //5732"],),

  new Traits( "male, accessories" ,[ "eye patch ", "frown ", "messy hair",],),
  //5733"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "mole ", "tiara",],),
  //5734"],),

  new Traits( "male, accessories" ,[ "earring ", "hoodie ", "silver chain",],),
  //5735"],),

  new Traits( "male, accessories" ,[ "cigarette ", "peak spike ", "small shades ", "smile",],),
  //5736"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "shaved head",],),
  //5737"],),

  new Traits( "male, accessories" ,[ "earring ", "luxurious beard ", "peak spike",],),
  //5738"],),

  new Traits( "female, accessories" ,[ "earring ", "knitted cap ", "vape",],),
  //5739"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "goat ", "shaved head",],),
  //5740"],),

  new Traits( "male, accessories" ,[ "goat ", "horned rim glasses ", "mohawk",],),
  //5741"],),

  new Traits( "zombie, accessories" ,[ "mohawk dark",],),
  //5742"],),

  new Traits( "female, accessories" ,[ "earring ", "tassle hat",],),
  //5743"],),

  new Traits( "female, accessories" ,[ "big shades ", "frumpy hair",],),
  //5744"],),

  new Traits( "female, accessories" ,[ "blonde short ", "spots",],),
  //5745"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "earring ", "mole ", "shadow beard ", "small shades",],),
  //5746"],),

  new Traits( "male, accessories" ,[ "classic shades ", "frumpy hair",],),
  //5747"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "cigarette ", "mole ", "wild white hair",],),
  //5748"],),

  new Traits( "male, accessories" ,[ "front beard ", "knitted cap",],),
  //5749"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "messy hair",],),
  //5750"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "knitted cap",],),
  //5751"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "mole",],),
  //5752"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "small shades",],),
  //5753"],),

  new Traits( "male, accessories" ,[ "do-rag ", "front beard dark ", "gold chain ", "regular shades",],),
  //5754"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "shaved head",],),
  //5755"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "normal beard black",],),
  //5756"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "mohawk ", "vape",],),
  //5757"],),

  new Traits( "female, accessories" ,[ "big shades ", "crazy hair ", "purple lipstick",],),
  //5758"],),

  new Traits( "female, accessories" ,[ "cigarette ", "crazy hair ", "nerd glasses",],),
  //5759"],),

  new Traits( "male, accessories" ,[ "clown nose ", "mohawk thin",],),
  //5760"],),

  new Traits( "zombie, accessories" ,[ "bandana ", "horned rim glasses",],),
  //5761"],),

  new Traits( "male, accessories" ,[ "headband ", "regular shades",],),
  //5762"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "luxurious beard ", "wild hair",],),
  //5763"],),

  new Traits( "male, accessories" ,[ "bandana ", "clown eyes green",],),
  //5764"],),

  new Traits( "female, accessories" ,[ "cigarette ", "classic shades ", "hot lipstick ", "straight hair dark",],),
  //5765"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "green eye shadow ", "mohawk",],),
  //5766"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "mole ", "purple hair",],),
  //5767"],),

  new Traits( "male, accessories" ,[ "hoodie ", "mole",],),
  //5768"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "dark hair ", "horned rim glasses",],),
  //5769"],),

  new Traits( "female, accessories" ,[ "cigarette ", "hot lipstick ", "knitted cap",],),
  //5770"],),

  new Traits( "female, accessories" ,[ "dark hair ", "eye patch",],),
  //5771"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "cap",],),
  //5772"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "vape",],),
  //5773"],),

  new Traits( "male, accessories" ,[ "cap ", "eye patch ", "front beard dark ", "smile",],),
  //5774"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "clown hair green",],),
  //5775"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "peak spike",],),
  //5776"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "regular shades",],),
  //5777"],),

  new Traits( "female, accessories" ,[ "blonde short ", "earring",],),
  //5778"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "crazy hair ", "mole",],),
  //5779"],),

  new Traits( "male, accessories" ,[ "luxurious beard",],),
  //5780"],),

  new Traits( "female, accessories" ,[ "regular shades ", "tassle hat",],),
  //5781"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard ", "vampire hair ", "vr",],),
  //5782"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "red mohawk",],),
  //5783"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "mohawk",],),
  //5784"],),

  new Traits( "female, accessories" ,[ "blonde short ", "purple lipstick ", "welding goggles",],),
  //5785"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "eye patch",],),
  //5786"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "choker ", "purple eye shadow ", "tiara",],),
  //5787"],),

  new Traits( "female, accessories" ,[ "dark hair ", "vape",],),
  //5788"],),

  new Traits( "male, accessories" ,[ "front beard ", "peak spike",],),
  //5789"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "earring ", "green eye shadow",],),
  //5790"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard black ", "wild hair",],),
  //5791"],),

  new Traits( "male, accessories" ,[ "messy hair ", "silver chain",],),
  //5792"],),

  new Traits( "male, accessories" ,[ "goat ", "mole ", "purple hair",],),
  //5793"],),

  new Traits( "male, accessories" ,[ "cigarette ", "classic shades ", "fedora",],),
  //5794"],),

  new Traits( "ape, accessories" ,[ "police cap",],),
  //5795"],),

  new Traits( "female, accessories" ,[ "cigarette ", "messy hair",],),
  //5796"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "nerd glasses ", "normal beard black",],),
  //5797"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "orange side",],),
  //5798"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "nerd glasses",],),
  //5799"],),

  new Traits( "male, accessories" ,[ "big beard ", "earring ", "wild hair",],),
  //5800"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "purple eye shadow ", "wild hair",],),
  //5801"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "mole ", "shadow beard",],),
  //5802"],),

  new Traits( "male, accessories" ,[ "do-rag ", "goat",],),
  //5803"],),

  new Traits( "female, accessories" ,[ "earring ", "knitted cap ", "purple lipstick ", "rosy cheeks",],),
  //5804"],),

  new Traits( "male, accessories" ,[ "frown ", "mohawk thin ", "shadow beard",],),
  //5805"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "police cap",],),
  //5806"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "mole ", "regular shades",],),
  //5807"],),

  new Traits( "female, accessories" ,[ "blonde short ", "cigarette ", "mole",],),
  //5808"],),

  new Traits( "female, accessories" ,[ "spots ", "tassle hat",],),
  //5809"],),

  new Traits( "male, accessories" ,[ "classic shades ", "stringy hair",],),
  //5810"],),

  new Traits( "female, accessories" ,[ "cigarette ", "clown hair green ", "earring",],),
  //5811"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "headband",],),
  //5812"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "straight hair",],),
  //5813"],),

  new Traits( "male, accessories" ,[ "earring ", "messy hair ", "silver chain",],),
  //5814"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "wild hair",],),
  //5815"],),

  new Traits( "male, accessories" ,[ "cap forward ", "cigarette ", "goat",],),
  //5816"],),

  new Traits( "male, accessories" ,[ "handlebars ", "vampire hair ", "vape",],),
  //5817"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "hoodie ", "medical mask",],),
  //5818"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "pigtails",],),
  //5819"],),

  new Traits( "male, accessories" ,[ "classic shades ", "messy hair",],),
  //5820"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "stringy hair",],),
  //5821"],),

  new Traits( "alien ", accessories" ,[ "bandana",],),
  //5822"],),

  new Traits( "female, accessories" ,[ "big shades ", "crazy hair ", "vape",],),
  //5823"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "earring ", "headband",],),
  //5824"],),

  new Traits( "female, accessories" ,[ "earring ", "eye patch ", "purple lipstick ", "straight hair blonde",],),
  //5825"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "knitted cap ", "purple lipstick",],),
  //5826"],),

  new Traits( "male, accessories" ,[ "hoodie ", "normal beard ", "regular shades",],),
  //5827"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "mustache ", "small shades",],),
  //5828"],),

  new Traits( "female, accessories" ,[ "bandana ", "black lipstick",],),
  //5829"],),

  new Traits( "male, accessories" ,[ "big shades ", "front beard dark ", "mohawk thin",],),
  //5830"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "messy hair",],),
  //5831"],),

  new Traits( "female, accessories" ,[ "eye patch ", "straight hair dark",],),
  //5832"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "hot lipstick ", "mohawk dark",],),
  //5833"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "green eye shadow ", "mohawk thin ", "vape",],),
  //5834"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "classic shades ", "purple hair",],),
  //5835"],),

  new Traits( "female, accessories" ,[ "cigarette ", "dark hair ", "eye patch ", "hot lipstick",],),
  //5836"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "vr",],),
  //5837"],),

  new Traits( "female, accessories" ,[ "medical mask ", "purple lipstick ", "wild white hair",],),
  //5838"],),

  new Traits( "male, accessories" ,[ "big beard ", "earring ", "mohawk",],),
  //5839"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "normal beard ", "peak spike",],),
  //5840"],),

  new Traits( "male, accessories" ,[ "earring ", "shadow beard ", "silver chain ", "top hat",],),
  //5841"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "muttonchops ", "small shades",],),
  //5842"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "green eye shadow",],),
  //5843"],),

  new Traits( "female, accessories" ,[ "purple eye shadow ", "straight hair dark",],),
  //5844"],),

  new Traits( "male, accessories" ,[ "big beard ", "cap forward",],),
  //5845"],),

  new Traits( "male, accessories" ,[ "do-rag ", "goat ", "mole ", "small shades",],),
  //5846"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mole ", "red mohawk",],),
  //5847"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blonde short ", "earring",],),
  //5848"],),

  new Traits( "male, accessories" ,[ "shadow beard ", "wild hair",],),
  //5849"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "peak spike",],),
  //5850"],),

  new Traits( "male, accessories" ,[ "earring ", "messy hair ", "vr",],),
  //5851"],),

  new Traits( "female, accessories" ,[ "earring ", "nerd glasses ", "red mohawk",],),
  //5852"],),

  new Traits( "male, accessories" ,[ "headband ", "shadow beard",],),
  //5853"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "shaved head ", "vr",],),
  //5854"],),

  new Traits( "male, accessories" ,[ "bandana ", "shadow beard",],),
  //5855"],),

  new Traits( "female, accessories" ,[ "mole ", "tassle hat",],),
  //5856"],),

  new Traits( "female, accessories" ,[ "cigarette ", "mohawk",],),
  //5857"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "hot lipstick ", "wild blonde",],),
  //5858"],),

  new Traits( "male, accessories" ,[ "fedora ", "shadow beard",],),
  //5859"],),

  new Traits( "female, accessories" ,[ "blonde short ", "blue eye shadow ", "spots",],),
  //5860"],),

  new Traits( "male, accessories" ,[ "earring ", "peak spike",],),
  //5861"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "normal beard",],),
  //5862"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "rosy cheeks ", "stringy hair",],),
  //5863"],),

  new Traits( "male, accessories" ,[ "cigarette ", "do-rag ", "small shades",],),
  //5864"],),

  new Traits( "male, accessories" ,[ "goat ", "horned rim glasses ", "peak spike",],),
  //5865"
  
  
  new Traits( "male, accessories" ,[ "eye patch ", "goat ", "mole ", "police cap",],),
  //5866"],),

  new Traits( "male, accessories" ,[ "cigarette ", "eye patch",],),
  //5867"],),

  new Traits( "male, accessories" ,[ "normal beard ", "police cap",],),
  //5868"],),

  new Traits( "female, accessories" ,[ "cigarette ", "messy hair",],),
  //5869"],),

  new Traits( "male, accessories" ,[ "cigarette ", "knitted cap ", "muttonchops",],),
  //5870"],),

  new Traits( "male, accessories" ,[ "muttonchops ", "top hat",],),
  //5871"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "green eye shadow ", "stringy hair",],),
  //5872"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "crazy hair ", "purple lipstick",],),
  //5873"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "earring ", "purple hair",],),
  //5874"],),

  new Traits( "male, accessories" ,[ "bandana ", "nerd glasses",],),
  //5875"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "shadow beard",],),
  //5876"],),

  new Traits( "male, accessories" ,[ "frown ", "nerd glasses ", "wild hair",],),
  //5877"],),

  new Traits( "female, accessories" ,[ "bandana ", "black lipstick ", "eye mask",],),
  //5878"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "straight hair dark",],),
  //5879"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "wild hair",],),
  //5880"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk dark ", "mole",],),
  //5881"],),

  new Traits( "male, accessories" ,[ "mole ", "regular shades ", "stringy hair",],),
  //5882"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "fedora ", "silver chain",],),
  //5883"],),

  new Traits( "male, accessories" ,[ "cigarette ", "nerd glasses ", "peak spike",],),
  //5884"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard black ", "police cap ", "small shades",],),
  //5885"],),

  new Traits( "male, accessories" ,[ "eye patch ", "mohawk dark ", "muttonchops",],),
  //5886"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "do-rag",],),
  //5887"],),

  new Traits( "female, accessories" ,[ "headband ", "purple lipstick",],),
  //5888"],),

  new Traits( "male, accessories" ,[ "eye patch ", "gold chain",],),
  //5889"],),

  new Traits( "female, accessories" ,[ "choker ", "earring ", "headband",],),
  //5890"],),

  new Traits( "male, accessories" ,[ "handlebars ", "horned rim glasses ", "top hat",],),
  //5891"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "mohawk thin ", "shadow beard",],),
  //5892"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "cap",],),
  //5893"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "earring ", "peak spike",],),
  //5894"],),

  new Traits( "female, accessories" ,[ "clown nose ", "green eye shadow ", "straight hair",],),
  //5895"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "hot lipstick ", "mohawk",],),
  //5896"],),

  new Traits( "male, accessories" ,[ "big shades ", "knitted cap ", "shadow beard",],),
  //5897"],),

  new Traits( "female, accessories" ,[ "earring ", "tiara",],),
  //5898"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "regular shades",],),
  //5899"],),

  new Traits( "female, accessories" ,[ "big shades ", "cigarette ", "purple lipstick ", "red mohawk",],),
  //5900"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "pink with hat",],),
  //5901"],),

  new Traits( "male, accessories" ,[ "hoodie ", "shadow beard ", "small shades",],),
  //5902"],),

  new Traits( "male, accessories" ,[ "front beard ", "headband",],),
  //5903"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "mohawk thin",],),
  //5904"],),

  new Traits( "alien ", accessories" ,[ "do-rag ", "small shades",],),
  //5905"],),

  new Traits( "female, accessories" ,[ "mohawk dark ", "purple eye shadow",],),
  //5906"],),

  new Traits( "male, accessories" ,[ "classic shades ", "knitted cap ", "luxurious beard",],),
  //5907"],),

  new Traits( "female, accessories" ,[ "clown hair green",],),
  //5908"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "regular shades",],),
  //5909"],),

  new Traits( "male, accessories" ,[ "mohawk ", "normal beard black",],),
  //5910"],),

  new Traits( "male, accessories" ,[ "eye mask ", "mole",],),
  //5911"],),

  new Traits( "male, accessories" ,[ "bandana ", "big shades ", "earring ", "muttonchops",],),
  //5912"],),

  new Traits( "female, accessories" ,[ "half shaved ", "purple lipstick ", "vr",],),
  //5913"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "red mohawk ", "rosy cheeks",],),
  //5914"],),

  new Traits( "male, accessories" ,[ "classic shades ", "police cap",],),
  //5915"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "vr",],),
  //5916"],),

  new Traits( "female, accessories" ,[ "mole ", "purple lipstick ", "straight hair",],),
  //5917"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "peak spike",],),
  //5918"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "hot lipstick ", "straight hair",],),
  //5919"],),

  new Traits( "male, accessories" ,[ "earring ", "peak spike",],),
  //5920"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "mohawk dark",],),
  //5921"],),

  new Traits( "male, accessories" ,[ "spots ", "vr ", "wild hair",],),
  //5922"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "earring ", "eye mask",],),
  //5923"],),

  new Traits( "male, accessories" ,[ "big shades ", "cowboy hat ", "normal beard black",],),
  //5924"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "frown ", "frumpy hair",],),
  //5925"],),

  new Traits( "male, accessories" ,[ "goat ", "hoodie ", "regular shades",],),
  //5926"],),

  new Traits( "female, accessories" ,[ "bandana ", "cigarette ", "classic shades",],),
  //5927"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "wild blonde",],),
  //5928"],),

  new Traits( "female, accessories" ,[ "tassle hat ", "vr",],),
  //5929"],),

  new Traits( "male, accessories" ,[ "gold chain ", "handlebars ", "messy hair",],),
  //5930"],),

  new Traits( "female, accessories" ,[ "cigarette ", "mohawk thin ", "purple lipstick",],),
  //5931"],),

  new Traits( "male, accessories" ,[ "big shades ", "goat ", "headband",],),
  //5932"],),

  new Traits( "male, accessories" ,[ "peak spike ", "shadow beard",],),
  //5933"],),

  new Traits( "female, accessories" ,[ "pink with hat ", "pipe",],),
  //5934"],),

  new Traits( "male, accessories" ,[ "frown ", "frumpy hair ", "handlebars",],),
  //5935"],),

  new Traits( "male, accessories" ,[ "eye mask ", "normal beard black",],),
  //5936"],),

  new Traits( "male, accessories" ,[ "mole ", "police cap",],),
  //5937"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "goat ", "vape",],),
  //5938"],),

  new Traits( "male, accessories" ,[ "police cap ", "small shades",],),
  //5939"],),

  new Traits( "female, accessories" ,[ "bandana ", "classic shades ", "hot lipstick",],),
  //5940"],),

  new Traits( "male, accessories" ,[ "classic shades ", "crazy hair",],),
  //5941"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "mohawk dark ", "vape",],),
  //5942"],),

  new Traits( "male, accessories" ,[ "classic shades ", "clown nose ", "peak spike",],),
  //5943"],),

  new Traits( "zombie, accessories" ,[ "mohawk",],),
  //5944"],),

  new Traits( "female, accessories" ,[ "cigarette ", "mohawk ", "mole",],),
  //5945"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "messy hair ", "small shades",],),
  //5946"],),

  new Traits( "female, accessories" ,[ "regular shades ", "straight hair",],),
  //5947"],),

  new Traits( "male, accessories" ,[ "fedora ", "luxurious beard",],),
  //5948"],),

  new Traits( "female, accessories" ,[ "big shades ", "earring ", "medical mask ", "mole ", "purple lipstick ", "tassle hat",],),
  //5949"],),

  new Traits( "female, accessories" ,[ "red mohawk ", "vr",],),
  //5950"],),

  new Traits( "female, accessories" ,[ "dark hair",],),
  //5951"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "mole",],),
  //5952"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "regular shades",],),
  //5953"],),

  new Traits( "male, accessories" ,[ "earring ", "knitted cap ", "nerd glasses",],),
  //5954"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "headband ", "purple lipstick",],),
  //5955"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "smile",],),
  //5956"],),

  new Traits( "male, accessories" ,[ "eye patch ", "normal beard ", "peak spike",],),
  //5957"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "medical mask ", "wild hair",],),
  //5958"],),

  new Traits( "male, accessories" ,[ "cigarette ", "eye patch ", "mohawk ", "mustache",],),
  //5959"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "mohawk",],),
  //5960"],),

  new Traits( "male, accessories" ,[ "cap ", "earring ", "normal beard",],),
  //5961"],),

  new Traits( "male, accessories" ,[ "frown ", "frumpy hair ", "regular shades",],),
  //5962"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "bandana ", "normal beard black",],),
  //5963"],),

  new Traits( "male, accessories" ,[ "shaved head ", "vr",],),
  //5964"],),

  new Traits( "male, accessories" ,[ "do-rag ", "regular shades",],),
  //5965"],),

  new Traits( "male, accessories" ,[ "normal beard ", "peak spike ", "regular shades",],),
  //5966"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "purple lipstick ", "stringy hair",],),
  //5967"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mohawk dark ", "mole ", "shadow beard",],),
  //5968"],),

  new Traits( "male, accessories" ,[ "big shades ", "messy hair ", "mustache",],),
  //5969"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "handlebars",],),
  //5970"],),

  new Traits( "male, accessories" ,[ "cap ", "clown nose ", "earring ", "front beard ", "small shades",],),
  //5971"],),

  new Traits( "female, accessories" ,[ "bandana ", "green eye shadow",],),
  //5972"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "handlebars ", "shaved head",],),
  //5973"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "vr",],),
  //5974"],),

  new Traits( "male, accessories" ,[ "front beard ", "frumpy hair ", "regular shades",],),
  //5975"],),

  new Traits( "female, accessories" ,[ "classic shades ", "hot lipstick ", "pink with hat",],),
  //5976"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "tassle hat",],),
  //5977"],),

  new Traits( "female, accessories" ,[ "earring ", "horned rim glasses ", "hot lipstick ", "mole ", "pigtails",],),
  //5978"],),

  new Traits( "male, accessories" ,[ "earring ", "eye mask",],),
  //5979"],),

  new Traits( "female, accessories" ,[ "gold chain ", "straight hair",],),
  //5980"],),

  new Traits( "male, accessories" ,[ "cigarette ", "knitted cap",],),
  //5981"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "stringy hair",],),
  //5982"],),

  new Traits( "female, accessories" ,[ "cigarette ", "messy hair ", "regular shades",],),
  //5983"],),

  new Traits( "male, accessories" ,[ "fedora ", "frown",],),
  //5984"],),

  new Traits( "male, accessories" ,[ "earring ", "shadow beard ", "wild hair",],),
  //5985"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "earring ", "fedora ", "mustache",],),
  //5986"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "wild hair",],),
  //5987"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "mohawk",],),
  //5988"],),

  new Traits( "male, accessories" ,[ "bandana ", "normal beard black",],),
  //5989"],),

  new Traits( "female, accessories" ,[ "clown nose ", "crazy hair",],),
  //5990"],),

  new Traits( "female, accessories" ,[ "bandana ", "cigarette ", "hot lipstick",],),
  //5991"],),

  new Traits( "male, accessories" ,[ "cigarette ", "classic shades ", "frumpy hair",],),
  //5992"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "hot lipstick ", "straight hair dark",],),
  //5993"],),

  new Traits( "male, accessories" ,[ "cap forward ", "normal beard ", "regular shades",],),
  //5994"],),

  new Traits( "female, accessories" ,[ "headband ", "mole",],),
  //5995"],),

  new Traits( "male, accessories" ,[ "cap ", "earring ", "mole",],),
  //5996"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "mole ", "small shades",],),
  //5997"],),

  new Traits( "female, accessories" ,[ "mole ", "wild hair",],),
  //5998"],),

  new Traits( "male, accessories" ,[ "mohawk ", "mole ", "small shades",],),
  //5999"],),
  }],),
  ],),
  "data" ,],),
  "nfts" , [],),
  ],),
  new Traits( "male, accessories" ,[ "crazy hair ", "front beard",],),
  //6000"],),

  new Traits( "male, accessories" ,[ "bandana ", "muttonchops",],),
  //6001"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "chinstrap ", "earring ", "knitted cap",],),
  //6002"],),

  new Traits( "female, accessories" ,[ "eye patch ", "mohawk dark ", "purple lipstick",],),
  //6003"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "messy hair",],),
  //6004"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "eye patch ", "straight hair",],),
  //6005"],),

  new Traits( "male, accessories" ,[ "small shades ", "wild hair",],),
  //6006"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "mohawk thin ", "normal beard",],),
  //6007"],),

  new Traits( "male, accessories" ,[ "eye patch ", "mohawk thin ", "muttonchops",],),
  //6008"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "eye mask ", "headband",],),
  //6009"],),

  new Traits( "male, accessories" ,[ "earring ", "purple hair ", "vape",],),
  //6010"],),

  new Traits( "male, accessories" ,[ "big shades ", "medical mask ", "wild hair",],),
  //6011"],),

  new Traits( "male, accessories" ,[ "earring ", "mole ", "vr ", "wild hair",],),
  //6012"],),

  new Traits( "male, accessories" ,[ "headband ", "horned rim glasses ", "luxurious beard",],),
  //6013"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "police cap",],),
  //6014"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "straight hair blonde ", "welding goggles",],),
  //6015"],),

  new Traits( "male, accessories" ,[ "cigarette ", "front beard dark ", "gold chain ", "peak spike",],),
  //6016"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "mohawk thin ", "purple lipstick",],),
  //6017"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "gold chain ", "knitted cap ", "vr",],),
  //6018"],),

  new Traits( "male, accessories" ,[ "regular shades ", "shaved head",],),
  //6019"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "mole ", "pipe ", "stringy hair",],),
  //6020"],),

  new Traits( "female, accessories" ,[ "bandana ", "eye mask",],),
  //6021"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "horned rim glasses ", "normal beard",],),
  //6022"],),

  new Traits( "female, accessories" ,[ "earring ", "messy hair ", "regular shades",],),
  //6023"],),

  new Traits( "male, accessories" ,[ "fedora ", "normal beard ", "regular shades",],),
  //6024"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "red mohawk",],),
  //6025"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "wild hair",],),
  //6026"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mole ", "shaved head",],),
  //6027"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "stringy hair",],),
  //6028"],),

  new Traits( "female, accessories" ,[ "earring ", "purple eye shadow ", "tassle hat",],),
  //6029"],),

  new Traits( "female, accessories" ,[ "classic shades ", "spots ", "wild blonde",],),
  //6030"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "horned rim glasses ", "pipe",],),
  //6031"],),

  new Traits( "male, accessories" ,[ "big beard ", "regular shades ", "stringy hair",],),
  //6032"],),

  new Traits( "male, accessories" ,[ "do-rag ", "muttonchops ", "vape",],),
  //6033"],),

  new Traits( "male, accessories" ,[ "cap ", "clown nose ", "normal beard ", "pipe",],),
  //6034"],),

  new Traits( "male, accessories" ,[ "cigarette ", "front beard ", "headband",],),
  //6035"],),

  new Traits( "male, accessories" ,[ "hoodie ", "horned rim glasses ", "muttonchops",],),
  //6036"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "hot lipstick",],),
  //6037"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "hot lipstick ", "purple eye shadow",],),
  //6038"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "mohawk thin",],),
  //6039"],),

  new Traits( "male, accessories" ,[ "gold chain ", "police cap ", "regular shades",],),
  //6040"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "crazy hair",],),
  //6041"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cap forward ", "earring",],),
  //6042"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "orange side",],),
  //6043"],),

  new Traits( "male, accessories" ,[ "earring ", "mole ", "regular shades ", "shaved head",],),
  //6044"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "straight hair dark",],),
  //6045"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cigarette ", "frumpy hair",],),
  //6046"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "earring ", "tassle hat",],),
  //6047"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "muttonchops ", "nerd glasses",],),
  //6048"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "gold chain ", "wild white hair",],),
  //6049"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "messy hair",],),
  //6050"],),

  new Traits( "male, accessories" ,[ "messy hair ", "rosy cheeks",],),
  //6051"],),

  new Traits( "male, accessories" ,[ "earring ", "shaved head ", "small shades",],),
  //6052"],),

  new Traits( "male, accessories" ,[ "handlebars ", "mohawk dark ", "nerd glasses",],),
  //6053"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "front beard dark ", "mohawk thin ", "pipe",],),
  //6054"],),

  new Traits( "female, accessories" ,[ "earring ", "nerd glasses ", "purple lipstick ", "wild white hair",],),
  //6055"],),

  new Traits( "male, accessories" ,[ "bandana ", "horned rim glasses ", "shadow beard ", "smile",],),
  //6056"],),

  new Traits( "female, accessories" ,[ "cigarette ", "green eye shadow ", "purple lipstick ", "straight hair",],),
  //6057"],),

  new Traits( "male, accessories" ,[ "earring ", "smile ", "stringy hair",],),
  //6058"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cap ", "earring",],),
  //6059"],),

  new Traits( "male, accessories" ,[ "do-rag ", "smile ", "spots",],),
  //6060"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "earring ", "smile ", "stringy hair",],),
  //6061"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cigarette ", "earring ", "mustache ", "police cap",],),
  //6062"],),

  new Traits( "male, accessories" ,[ "big shades ", "police cap ", "smile",],),
  //6063"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "knitted cap",],),
  //6064"],),

  new Traits( "female, accessories" ,[ "classic shades ", "purple lipstick ", "wild hair",],),
  //6065"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "frown ", "horned rim glasses",],),
  //6066"],),

  new Traits( "female, accessories" ,[ "purple eye shadow ", "red mohawk",],),
  //6067"],),

  new Traits( "male, accessories" ,[ "cigarette ", "horned rim glasses ", "mustache ", "stringy hair",],),
  //6068"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard ", "shaved head",],),
  //6069"],),

  new Traits( "female, accessories" ,[ "earring ", "knitted cap ", "purple lipstick",],),
  //6070"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "purple lipstick ", "straight hair",],),
  //6071"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "clown nose",],),
  //6072"],),

  new Traits( "female, accessories" ,[ "eye patch ", "hot lipstick ", "pigtails",],),
  //6073"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes blue ", "earring ", "red mohawk",],),
  //6074"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "straight hair dark",],),
  //6075"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "earring ", "messy hair",],),
  //6076"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk thin ", "nerd glasses",],),
  //6077"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "red mohawk",],),
  //6078"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "wild hair",],),
  //6079"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "frumpy hair",],),
  //6080"],),

  new Traits( "male, accessories" ,[ "smile",],),
  //6081"],),

  new Traits( "male, accessories" ,[ "goat ", "peak spike",],),
  //6082"],),

  new Traits( "male, accessories" ,[ "cigarette ", "horned rim glasses ", "wild hair",],),
  //6083"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "tassle hat",],),
  //6084"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "mustache",],),
  //6085"],),

  new Traits( "female, accessories" ,[ "earring ", "frumpy hair ", "hot lipstick ", "pipe",],),
  //6086"],),

  new Traits( "male, accessories" ,[ "goat ", "peak spike ", "regular shades",],),
  //6087"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk ", "mole ", "nerd glasses",],),
  //6088"],),

  new Traits( "alien, accessories" ,[ "earring ", "knitted cap",],),
  //6089"],),

  new Traits( "male, accessories" ,[ "cap forward ", "classic shades ", "earring",],),
  //6090"],),

  new Traits( "male, accessories" ,[ "clown nose",],),
  //6091"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "shadow beard",],),
  //6092"],),

  new Traits( "female, accessories" ,[ "half shaved ", "hot lipstick ", "medical mask",],),
  //6093"],),

  new Traits( "male, accessories" ,[ "gold chain ", "headband",],),
  //6094"],),

  new Traits( "male, accessories" ,[ "gold chain ", "wild hair",],),
  //6095"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "mohawk thin",],),
  //6096"],),

  new Traits( "male, accessories" ,[ "normal beard black ", "peak spike",],),
  //6097"],),

  new Traits( "female, accessories" ,[ "big shades ", "hot lipstick ", "straight hair dark",],),
  //6098"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "welding goggles",],),
  //6099"],),

  new Traits( "male, accessories" ,[ "eye patch ", "mustache ", "vampire hair",],),
  //6100"],),

  new Traits( "male, accessories" ,[ "bandana ", "regular shades ", "smile",],),
  //6101"],),

  new Traits( "female, accessories" ,[ "red mohawk ", "regular shades",],),
  //6102"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "peak spike",],),
  //6103"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "mole ", "wild blonde",],),
  //6104"],),

  new Traits( "male, accessories" ,[ "big beard ", "shaved head",],),
  //6105"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "frown ", "hoodie",],),
  //6106"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "crazy hair ", "gold chain",],),
  //6107"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "headband",],),
  //6108"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "mohawk",],),
  //6109"],),

  new Traits( "female, accessories" ,[ "cigarette ", "hot lipstick ", "mohawk",],),
  //6110"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "pigtails",],),
  //6111"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "frown ", "mohawk thin",],),
  //6112"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "messy hair ", "silver chain",],),
  //6113"],),

  new Traits( "male, accessories" ,[ "handlebars ", "police cap",],),
  //6114"],),

  new Traits( "female, accessories" ,[ "mohawk dark ", "purple lipstick",],),
  //6115"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "cigarette ", "purple lipstick ", "straight hair dark",],),
  //6116"],),

  new Traits( "male, accessories" ,[ "earring ", "knitted cap ", "muttonchops ", "regular shades",],),
  //6117"],),

  new Traits( "male, accessories" ,[ "eye patch ", "normal beard ", "peak spike",],),
  //6118"],),

  new Traits( "male, accessories" ,[ "cigarette ", "clown eyes blue ", "crazy hair",],),
  //6119"],),

  new Traits( "male, accessories" ,[ "big beard ", "cap forward ", "small shades",],),
  //6120"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "goat",],),
  //6121"],),

  new Traits( "male, accessories" ,[ "earring ", "mustache ", "wild hair",],),
  //6122"],),

  new Traits( "male, accessories" ,[ "bandana ", "luxurious beard",],),
  //6123"],),

  new Traits( "male, accessories" ,[ "do-rag ", "vape",],),
  //6124"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "clown eyes green ", "frumpy hair",],),
  //6125"],),

  new Traits( "male, accessories" ,[ "earring ", "messy hair ", "shadow beard ", "small shades",],),
  //6126"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "earring ", "mohawk dark",],),
  //6127"],),

  new Traits( "male, accessories" ,[ "eye patch ", "police cap",],),
  //6128"],),

  new Traits( "male, accessories" ,[ "do-rag ", "luxurious beard ", "regular shades",],),
  //6129"],),

  new Traits( "male, accessories" ,[ "front beard ", "mohawk dark",],),
  //6130"],),

  new Traits( "male, accessories" ,[ "earring ", "goat ", "horned rim glasses",],),
  //6131"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mohawk thin ", "shadow beard ", "vr",],),
  //6132"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "purple eye shadow ", "tassle hat",],),
  //6133"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "muttonchops",],),
  //6134"],),

  new Traits( "male, accessories" ,[ "hoodie ", "muttonchops ", "regular shades",],),
  //6135"],),

  new Traits( "female, accessories" ,[ "bandana ", "black lipstick ", "blue eye shadow",],),
  //6136"],),

  new Traits( "male, accessories" ,[ "hoodie ", "normal beard black ", "small shades",],),
  //6137"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "purple hair ", "shadow beard",],),
  //6138"],),

  new Traits( "male, accessories" ,[ "mohawk ", "normal beard black ", "spots",],),
  //6139"],),

  new Traits( "male, accessories" ,[ "frown ", "spots ", "wild hair",],),
  //6140"],),

  new Traits( "female, accessories" ,[ "pink with hat ", "pipe ", "purple lipstick",],),
  //6141"],),

  new Traits( "male, accessories" ,[ "cigarette ", "clown eyes blue ", "earring ", "peak spike",],),
  //6142"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "mustache ", "vape",],),
  //6143"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "hot lipstick ", "tassle hat",],),
  //6144"],),

  new Traits( "ape, accessories" ,[ "cap ", "cigarette ", "earring",],),
  //6145"],),

  new Traits( "male, accessories" ,[ "do-rag ", "shadow beard ", "silver chain",],),
  //6146"],),

  new Traits( "male, accessories" ,[ "do-rag ", "vr",],),
  //6147"],),

  new Traits( "male, accessories" ,[ "clown nose ", "mohawk",],),
  //6148"],),

  new Traits( "female, accessories" ,[ "big shades ", "stringy hair",],),
  //6149"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "purple lipstick ", "straight hair dark",],),
  //6150"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "handlebars ", "hoodie",],),
  //6151"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "medical mask ", "stringy hair",],),
  //6152"],),

  new Traits( "male, accessories" ,[ "clown nose ", "earring ", "goat ", "horned rim glasses ", "medical mask ", "messy hair",],),
  //6153"],),

  new Traits( "male, accessories" ,[ "big beard ", "clown eyes blue ", "peak spike",],),
  //6154"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "blue eye shadow ", "cigarette",],),
  //6155"],),

  new Traits( "male, accessories" ,[ "shaved head ", "silver chain",],),
  //6156"],),

  new Traits( "male, accessories" ,[ "bandana ", "classic shades",],),
  //6157"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "straight hair dark",],),
  //6158"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "earring ", "mohawk thin",],),
  //6159"],),

  new Traits( "male, accessories" ,[ "eye patch ", "knitted cap ", "pipe",],),
  //6160"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "horned rim glasses",],),
  //6161"],),

  new Traits( "male, accessories" ,[ "big beard ", "earring ", "horned rim glasses ", "knitted cap",],),
  //6162"],),

  new Traits( "female, accessories" ,[ "mole ", "pigtails",],),
  //6163"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "choker ", "cigarette",],),
  //6164"],),

  new Traits( "female, accessories" ,[ "earring ", "tiara",],),
  //6165"],),

  new Traits( "male, accessories" ,[ "eye mask ", "hoodie ", "normal beard black",],),
  //6166"],),

  new Traits( "male, accessories" ,[ "cap ", "front beard dark",],),
  //6167"],),

  new Traits( "male, accessories" ,[ "front beard ", "headband ", "nerd glasses",],),
  //6168"],),

  new Traits( "female, accessories" ,[ "purple eye shadow ", "straight hair",],),
  //6169"],),

  new Traits( "female, accessories" ,[ "messy hair ", "pipe",],),
  //6170"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "mohawk ", "small shades",],),
  //6171"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk ", "nerd glasses ", "normal beard black",],),
  //6172"],),

  new Traits( "male, accessories" ,[ "medical mask ", "mohawk dark",],),
  //6173"],),

  new Traits( "male, accessories" ,[ "fedora ", "muttonchops ", "small shades",],),
  //6174"],),

  new Traits( "female, accessories" ,[ "classic shades ", "crazy hair ", "earring",],),
  //6175"],),

  new Traits( "male, accessories" ,[ "handlebars ", "vr ", "wild hair",],),
  //6176"],),

  new Traits( "male, accessories" ,[ "regular shades ", "shadow beard ", "wild hair",],),
  //6177"],),

  new Traits( "female, accessories" ,[ "classic shades ", "earring ", "medical mask ", "straight hair",],),
  //6178"],),

  new Traits( "male, accessories" ,[ "cigarette ", "eye mask ", "stringy hair",],),
  //6179"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "luxurious beard",],),
  //6180"],),

  new Traits( "male, accessories" ,[ "clown nose ", "front beard ", "stringy hair",],),
  //6181"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "tiara",],),
  //6182"],),

  new Traits( "female, accessories" ,[ "pipe ", "straight hair ", "vr",],),
  //6183"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "pipe ", "wild blonde",],),
  //6184"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "normal beard",],),
  //6185"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "red mohawk",],),
  //6186"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "straight hair blonde",],),
  //6187"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "rosy cheeks ", "shaved head",],),
  //6188"],),

  new Traits( "male, accessories" ,[ "big shades ", "fedora",],),
  //6189"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "tassle hat",],),
  //6190"],),

  new Traits( "female, accessories" ,[ "half shaved ", "hot lipstick ", "mole",],),
  //6191"],),

  new Traits( "male, accessories" ,[ "bandana ", "handlebars",],),
  //6192"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "front beard dark ", "stringy hair",],),
  //6193"],),

  new Traits( "male, accessories" ,[ "big beard ", "eye patch ", "mohawk thin",],),
  //6194"],),

  new Traits( "male, accessories" ,[ "big shades ", "crazy hair ", "earring ", "goat",],),
  //6195"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "knitted cap ", "luxurious beard",],),
  //6196"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "knitted cap",],),
  //6197"],),

  new Traits( "male, accessories" ,[ "do-rag ", "horned rim glasses",],),
  //6198"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "spots",],),
  //6199"],),

  new Traits( "male, accessories" ,[ "big shades ", "gold chain ", "mohawk",],),
  //6200"],),

  new Traits( "female, accessories" ,[ "regular shades ", "straight hair dark",],),
  //6201"],),

  new Traits( "male, accessories" ,[ "big shades ", "pipe ", "shaved head",],),
  //6202"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "frown ", "horned rim glasses ", "mohawk dark",],),
  //6203"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "front beard ", "small shades",],),
  //6204"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk dark ", "purple eye shadow",],),
  //6205"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "purple eye shadow",],),
  //6206"],),

  new Traits( "male, accessories" ,[ "shaved head ", "vr",],),
  //6207"],),

  new Traits( "male, accessories" ,[ "earring ", "shadow beard",],),
  //6208"],),

  new Traits( "male, accessories" ,[ "cap ", "eye mask ", "pipe",],),
  //6209"],),

  new Traits( "male, accessories" ,[ "bandana ", "classic shades ", "medical mask",],),
  //6210"],),

  new Traits( "male, accessories" ,[ "eye patch ", "handlebars ", "knitted cap",],),
  //6211"],),

  new Traits( "male, accessories" ,[ "cap ", "muttonchops",],),
  //6212"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "shadow beard ", "stringy hair",],),
  //6213"],),

  new Traits( "male, accessories" ,[ "cap forward ", "eye mask ", "goat",],),
  //6214"],),

  new Traits( "female, accessories" ,[ "blonde short ", "purple lipstick ", "regular shades",],),
  //6215"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "straight hair blonde ", "vape",],),
  //6216"],),

  new Traits( "male, accessories" ,[ "earring ", "pipe ", "wild hair",],),
  //6217"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "earring ", "mole ", "nerd glasses",],),
  //6218"],),

  new Traits( "male, accessories" ,[ "cigarette ", "crazy hair ", "spots",],),
  //6219"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "normal beard",],),
  //6220"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "green eye shadow ", "half shaved",],),
  //6221"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "earring ", "headband",],),
  //6222"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "purple eye shadow ", "wild hair",],),
  //6223"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "medical mask ", "straight hair",],),
  //6224"],),

  new Traits( "male, accessories" ,[ "pipe",],),
  //6225"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "purple hair ", "shadow beard",],),
  //6226"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "headband",],),
  //6227"],),

  new Traits( "male, accessories" ,[ "classic shades ", "headband ", "normal beard black",],),
  //6228"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "eye patch ", "knitted cap ", "smile",],),
  //6229"],),

  new Traits( "female, accessories" ,[ "cigarette ", "mohawk",],),
  //6230"],),

  new Traits( "female, accessories" ,[ "choker ", "half shaved ", "hot lipstick",],),
  //6231"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "bandana",],),
  //6232"],),

  new Traits( "male, accessories" ,[ "cigarette ", "eye patch ", "police cap ", "shadow beard",],),
  //6233"],),

  new Traits( "male, accessories" ,[ "classic shades ", "normal beard ", "wild hair",],),
  //6234"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "hot lipstick ", "pipe",],),
  //6235"],),

  new Traits( "male, accessories" ,[ "muttonchops ", "regular shades ", "shaved head",],),
  //6236"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cowboy hat ", "handlebars",],),
  //6237"],),

  new Traits( "male, accessories" ,[ "cap ", "mustache",],),
  //6238"],),

  new Traits( "female, accessories" ,[ "earring ", "mole ", "wild blonde",],),
  //6239"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "earring ", "frumpy hair ", "gold chain",],),
  //6240"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "hoodie ", "mole",],),
  //6241"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "spots",],),
  //6242"],),

  new Traits( "female, accessories" ,[ "classic shades ", "half shaved ", "hot lipstick ", "mole",],),
  //6243"],),

  new Traits( "male, accessories" ,[ "mole",],),
  //6244"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "mohawk ", "pipe",],),
  //6245"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "mole ", "regular shades ", "shadow beard",],),
  //6246"],),

  new Traits( "male, accessories" ,[ "cap forward ", "normal beard ", "small shades",],),
  //6247"],),

  new Traits( "male, accessories" ,[ "messy hair ", "pipe",],),
  //6248"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "purple lipstick ", "straight hair dark",],),
  //6249"],),

  new Traits( "female, accessories" ,[ "orange side ", "purple eye shadow",],),
  //6250"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "do-rag ", "earring ", "mustache",],),
  //6251"],),

  new Traits( "male, accessories" ,[ "big shades ", "goat ", "pipe ", "top hat",],),
  //6252"],),

  new Traits( "female, accessories" ,[ "cigarette ", "straight hair dark",],),
  //6253"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "eye patch ", "handlebars",],),
  //6254"],),

  new Traits( "female, accessories" ,[ "eye mask ", "pink with hat ", "purple lipstick",],),
  //6255"],),

  new Traits( "female, accessories" ,[ "blonde short ", "earring ", "hot lipstick",],),
  //6256"],),

  new Traits( "female, accessories" ,[ "bandana ", "black lipstick ", "cigarette",],),
  //6257"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "shadow beard",],),
  //6258"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "mohawk thin",],),
  //6259"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "pipe",],),
  //6260"],),

  new Traits( "male, accessories" ,[ "big shades ", "knitted cap ", "pipe",],),
  //6261"],),

  new Traits( "male, accessories" ,[ "big beard ", "cap ", "earring ", "mole ", "nerd glasses",],),
  //6262"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "purple eye shadow ", "straight hair",],),
  //6263"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "police cap",],),
  //6264"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes blue ", "earring ", "straight hair",],),
  //6265"],),

  new Traits( "male, accessories" ,[ "medical mask ", "shaved head ", "spots",],),
  //6266"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "eye patch ", "mustache",],),
  //6267"],),

  new Traits( "male, accessories" ,[ "classic shades ", "luxurious beard ", "shaved head",],),
  //6268"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "luxurious beard ", "messy hair",],),
  //6269"],),

  new Traits( "female, accessories" ,[ "mole ", "pink with hat",],),
  //6270"],),

  new Traits( "male, accessories" ,[ "bandana ", "classic shades ", "clown nose",],),
  //6271"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "crazy hair",],),
  //6272"],),

  new Traits( "female, accessories" ,[ "cigarette ", "green eye shadow ", "tassle hat",],),
  //6273"],),
  
  
  new Traits( "male, accessories" ,[ "earring ", "knitted cap ", "normal beard black ", "regular shades",],),
  //6274"],),

  new Traits( "zombie, accessories" ,[ "mohawk dark ", "shadow beard",],),
  //6275"],),

  new Traits( "male, accessories" ,[ "mole ", "shaved head",],),
  //6276"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "earring ", "green eye shadow ", "silver chain",],),
  //6277"],),

  new Traits( "female, accessories" ,[ "cigarette ", "messy hair ", "nerd glasses",],),
  //6278"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "rosy cheeks",],),
  //6279"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "nerd glasses",],),
  //6280"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "dark hair ", "nerd glasses",],),
  //6281"],),

  new Traits( "male, accessories" ,[ "bandana ", "front beard ", "nerd glasses",],),
  //6282"],),

  new Traits( "male, accessories" ,[ "front beard ", "gold chain ", "stringy hair",],),
  //6283"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "mustache",],),
  //6284"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "headband",],),
  //6285"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "half shaved ", "vape",],),
  //6286"],),

  new Traits( "male, accessories" ,[ "classic shades ", "fedora",],),
  //6287"],),

  new Traits( "female, accessories" ,[ "pipe",],),
  //6288"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "shadow beard ", "small shades ", "smile",],),
  //6289"],),

  new Traits( "female, accessories" ,[ "big shades ", "hot lipstick ", "stringy hair",],),
  //6290"],),

  new Traits( "male, accessories" ,[ "mohawk ", "regular shades ", "smile",],),
  //6291"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "headband",],),
  //6292"],),

  new Traits( "female, accessories" ,[ "clown nose ", "green eye shadow ", "hot lipstick ", "knitted cap",],),
  //6293"],),

  new Traits( "female, accessories" ,[ "classic shades ", "crazy hair ", "hot lipstick",],),
  //6294"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "eye patch ", "normal beard black ", "stringy hair",],),
  //6295"],),

  new Traits( "male, accessories" ,[ "big shades ", "clown hair green",],),
  //6296"],),

  new Traits( "zombie, accessories" ,[ "cigarette ", "nerd glasses ", "top hat",],),
  //6297"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "crazy hair ", "purple lipstick",],),
  //6298"],),

  new Traits( "male, accessories" ,[ "bandana ", "shadow beard",],),
  //6299"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "mohawk dark ", "mole",],),
  //6300"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "messy hair ", "nerd glasses",],),
  //6301"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "dark hair ", "mole",],),
  //6302"],),

  new Traits( "male, accessories" ,[ "cap ", "frown ", "small shades",],),
  //6303"],),

  new Traits( "zombie, accessories" ,[ "crazy hair ", "regular shades",],),
  //6304"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "pipe",],),
  //6305"],),

  new Traits( "male, accessories" ,[ "cap forward ", "horned rim glasses",],),
  //6306"],),

  new Traits( "male, accessories" ,[ "shadow beard ", "silver chain ", "wild hair",],),
  //6307"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "hoodie",],),
  //6308"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "hot lipstick ", "red mohawk",],),
  //6309"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "pipe ", "stringy hair",],),
  //6310"],),

  new Traits( "male, accessories" ,[ "small shades ", "vampire hair",],),
  //6311"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "pipe",],),
  //6312"],),

  new Traits( "male, accessories" ,[ "cigarette ", "classic shades ", "mohawk ", "shadow beard",],),
  //6313"],),

  new Traits( "male, accessories" ,[ "peak spike ", "shadow beard ", "small shades",],),
  //6314"],),

  new Traits( "male, accessories" ,[ "muttonchops ", "police cap ", "vr",],),
  //6315"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "messy hair ", "shadow beard",],),
  //6316"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "earring ", "stringy hair",],),
  //6317"],),

  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "mohawk ", "mole",],),
  //6318"],),

  new Traits( "male, accessories" ,[ "big beard ", "big shades",],),
  //6319"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "messy hair ", "silver chain",],),
  //6320"],),

  new Traits( "female, accessories" ,[ "cigarette ", "clown eyes green ", "frumpy hair ", "purple lipstick",],),
  //6321"],),

  new Traits( "male, accessories" ,[ "mole ", "vampire hair",],),
  //6322"],),

  new Traits( "female, accessories" ,[ "mohawk thin ", "regular shades",],),
  //6323"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "frumpy hair",],),
  //6324"],),

  new Traits( "male, accessories" ,[ "earring ", "knitted cap ", "mole",],),
  //6325"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown hair green",],),
  //6326"],),

  new Traits( "male, accessories" ,[ "do-rag ", "regular shades ", "shadow beard",],),
  //6327"],),

  new Traits( "male, accessories" ,[ "mohawk ", "silver chain",],),
  //6328"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "straight hair ", "vr",],),
  //6329"],),

  new Traits( "male, accessories" ,[ "cap ", "goat ", "regular shades",],),
  //6330"],),

  new Traits( "female, accessories" ,[ "mohawk thin ", "purple eye shadow",],),
  //6331"],),

  new Traits( "male, accessories" ,[ "vr",],),
  //6332"],),

  new Traits( "male, accessories" ,[ "big shades ", "cap ", "cigarette ", "normal beard",],),
  //6333"],),

  new Traits( "male, accessories" ,[ "do-rag ", "gold chain ", "shadow beard ", "small shades",],),
  //6334"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "muttonchops",],),
  //6335"],),

  new Traits( "male, accessories" ,[ "beanie ", "shadow beard",],),
  //6336"],),

  new Traits( "male, accessories" ,[ "big shades ", "mohawk dark",],),
  //6337"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "wild blonde",],),
  //6338"],),

  new Traits( "male, accessories" ,[ "horned rim glasses",],),
  //6339"],),

  new Traits( "female, accessories" ,[ "dark hair ", "earring ", "hot lipstick ", "mole",],),
  //6340"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "mole",],),
  //6341"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "earring ", "small shades",],),
  //6342"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "purple lipstick ", "wild hair",],),
  //6343"],),

  new Traits( "male, accessories" ,[ "cigarette ", "nerd glasses ", "purple hair ", "shadow beard",],),
  //6344"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "welding goggles ", "wild white hair",],),
  //6345"],),

  new Traits( "male, accessories" ,[ "eye mask ", "knitted cap",],),
  //6346"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "crazy hair ", "green eye shadow",],),
  //6347"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "welding goggles",],),
  //6348"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "shadow beard ", "vape",],),
  //6349"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "nerd glasses ", "straight hair blonde",],),
  //6350"],),

  new Traits( "male, accessories" ,[ "fedora ", "front beard ", "silver chain",],),
  //6351"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "wild white hair",],),
  //6352"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "earring ", "shaved head",],),
  //6353"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "shaved head",],),
  //6354"],),

  new Traits( "male, accessories" ,[ "mustache ", "small shades ", "wild hair",],),
  //6355"],),

  new Traits( "male, accessories" ,[ "big shades",],),
  //6356"],),

  new Traits( "female, accessories" ,[ "blonde short ", "earring ", "purple lipstick",],),
  //6357"],),

  new Traits( "female, accessories" ,[ "medical mask ", "messy hair ", "purple lipstick",],),
  //6358"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "peak spike ", "spots",],),
  //6359"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "earring ", "mustache ", "regular shades",],),
  //6360"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "shadow beard ", "small shades",],),
  //6361"],),

  new Traits( "male, accessories" ,[ "eye mask ", "mohawk thin ", "normal beard",],),
  //6362"],),

  new Traits( "male, accessories" ,[ "front beard ", "shaved head",],),
  //6363"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "normal beard black",],),
  //6364"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "clown nose ", "purple lipstick ", "straight hair",],),
  //6365"],),

  new Traits( "male, accessories" ,[ "bandana ", "mustache",],),
  //6366"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "muttonchops ", "shaved head ", "vr",],),
  //6367"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "silver chain ", "straight hair",],),
  //6368"],),

  new Traits( "female, accessories" ,[ "half shaved ", "mole ", "pipe ", "purple lipstick",],),
  //6369"],),

  new Traits( "female, accessories" ,[ "earring ", "purple eye shadow ", "straight hair blonde",],),
  //6370"],),

  new Traits( "female, accessories" ,[ "mohawk thin ", "purple eye shadow",],),
  //6371"],),

  new Traits( "male, accessories" ,[ "goat ", "mole ", "nerd glasses ", "peak spike",],),
  //6372"],),

  new Traits( "male, accessories" ,[ "big beard ", "headband ", "nerd glasses",],),
  //6373"],),

  new Traits( "male, accessories" ,[ "cap forward ", "cigarette ", "shadow beard ", "small shades",],),
  //6374"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "pipe",],),
  //6375"],),

  new Traits( "female, accessories" ,[ "eye mask ", "pipe ", "purple lipstick ", "stringy hair",],),
  //6376"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "regular shades ", "wild blonde",],),
  //6377"],),

  new Traits( "female, accessories" ,[ "eye mask ", "messy hair",],),
  //6378"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "mohawk thin",],),
  //6379"],),

  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "front beard dark ", "nerd glasses",],),
  //6380"],),

  new Traits( "female, accessories" ,[ "regular shades ", "straight hair blonde",],),
  //6381"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "police cap",],),
  //6382"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mole ", "stringy hair",],),
  //6383"],),

  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "mohawk thin",],),
  //6384"],),

  new Traits( "male, accessories" ,[ "cap ", "cigarette ", "mustache ", "silver chain",],),
  //6385"],),

  new Traits( "female, accessories" ,[ "mohawk thin ", "pipe",],),
  //6386"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "handlebars",],),
  //6387"],),

  new Traits( "female, accessories" ,[ "bandana ", "earring ", "green eye shadow",],),
  //6388"],),

  new Traits( "female, accessories" ,[ "dark hair ", "nerd glasses ", "purple lipstick",],),
  //6389"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "mohawk dark ", "purple lipstick",],),
  //6390"],),

  new Traits( "male, accessories" ,[ "big shades ", "chinstrap ", "frumpy hair",],),
  //6391"],),

  new Traits( "male, accessories" ,[ "cigarette ", "frown ", "regular shades ", "wild hair",],),
  //6392"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mohawk ", "small shades",],),
  //6393"],),

  new Traits( "female, accessories" ,[ "mole ", "purple eye shadow ", "wild hair",],),
  //6394"],),

  new Traits( "male, accessories" ,[ "cigarette ", "goat ", "mohawk",],),
  //6395"],),

  new Traits( "male, accessories" ,[ "classic shades ", "knitted cap ", "mole ", "normal beard",],),
  //6396"],),

  new Traits( "male, accessories" ,[ "cap ", "earring ", "front beard",],),
  //6397"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "peak spike",],),
  //6398"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "knitted cap ", "shadow beard",],),
  //6399"],),

  new Traits( "male, accessories" ,[ "hoodie ", "pipe",],),
  //6400"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "messy hair",],),
  //6401"],),

  new Traits( "female, accessories" ,[ "pigtails ", "vr",],),
  //6402"],),

  new Traits( "male, accessories" ,[ "cap forward ", "cigarette",],),
  //6403"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "purple hair ", "silver chain",],),
  //6404"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk dark ", "silver chain",],),
  //6405"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "shaved head",],),
  //6406"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "knitted cap ", "muttonchops",],),
  //6407"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "clown nose ", "crazy hair",],),
  //6408"],),

  new Traits( "male, accessories" ,[ "front beard ", "horned rim glasses ", "mohawk dark",],),
  //6409"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "stringy hair",],),
  //6410"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "crazy hair ", "earring",],),
  //6411"],),

  new Traits( "male, accessories" ,[ "cap forward ", "classic shades ", "earring",],),
  //6412"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "shadow beard",],),
  //6413"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "mohawk ", "normal beard",],),
  //6414"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "frumpy hair ", "vr",],),
  //6415"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "earring ", "wild hair",],),
  //6416"],),

  new Traits( "male, accessories" ,[ "cigarette ", "eye patch ", "mole ", "peak spike",],),
  //6417"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "pigtails",],),
  //6418"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "top hat",],),
  //6419"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "hoodie ", "nerd glasses",],),
  //6420"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "mohawk ", "shadow beard",],),
  //6421"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "frumpy hair ", "medical mask ", "purple lipstick",],),
  //6422"],),

  new Traits( "male, accessories" ,[ "eye patch ", "goat ", "headband",],),
  //6423"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "messy hair",],),
  //6424"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "eye mask ", "straight hair",],),
  //6425"],),

  new Traits( "male, accessories" ,[ "front beard ", "hoodie ", "small shades",],),
  //6426"],),

  new Traits( "male, accessories" ,[ "frown ", "goat ", "stringy hair",],),
  //6427"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "wild hair",],),
  //6428"],),

  new Traits( "male, accessories" ,[ "mohawk ", "mustache",],),
  //6429"],),

  new Traits( "female, accessories" ,[ "eye mask ", "wild white hair",],),
  //6430"],),

  new Traits( "male, accessories" ,[ "normal beard ", "regular shades ", "shaved head",],),
  //6431"],),

  new Traits( "female, accessories" ,[ "choker ", "stringy hair",],),
  //6432"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "normal beard",],),
  //6433"],),

  new Traits( "female, accessories" ,[ "mohawk thin ", "mole ", "purple lipstick",],),
  //6434"],),

  new Traits( "male, accessories" ,[ "classic shades ", "fedora ", "front beard",],),
  //6435"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "clown hair green ", "purple lipstick",],),
  //6436"],),

  new Traits( "male, accessories" ,[ "hoodie ", "horned rim glasses",],),
  //6437"],),

  new Traits( "male, accessories" ,[ "frown ", "knitted cap",],),
  //6438"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "mohawk thin ", "pipe",],),
  //6439"],),

  new Traits( "female, accessories" ,[ "big shades ", "mohawk thin",],),
  //6440"],),

  new Traits( "female, accessories" ,[ "hot lipstick",],),
  //6441"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "earring ", "straight hair blonde",],),
  //6442"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "horned rim glasses",],),
  //6443"],),

  new Traits( "male, accessories" ,[ "earring ", "mole ", "normal beard black ", "peak spike",],),
  //6444"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "frumpy hair ", "nerd glasses",],),
  //6445"],),

  new Traits( "male, accessories" ,[ "classic shades ", "luxurious beard ", "wild hair",],),
  //6446"],),

  new Traits( "male, accessories" ,[ "do-rag ", "smile",],),
  //6447"],),

  new Traits( "female, accessories" ,[ "eye patch ", "knitted cap",],),
  //6448"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "shaved head",],),
  //6449"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "spots ", "wild hair",],),
  //6450"],),

  new Traits( "female, accessories" ,[ "earring ", "medical mask ", "purple lipstick ", "straight hair dark",],),
  //6451"],),

  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "mohawk thin",],),
  //6452"],),

  new Traits( "male, accessories" ,[ "bandana ", "front beard ", "vr",],),
  //6453"],),

  new Traits( "female, accessories" ,[ "big shades ", "earring ", "headband",],),
  //6454"],),

  new Traits( "male, accessories" ,[ "medical mask ", "mohawk dark",],),
  //6455"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mohawk dark",],),
  //6456"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "small shades ", "stringy hair",],),
  //6457"],),

  new Traits( "female, accessories" ,[ "vr",],),
  //6458"],),

  new Traits( "male, accessories" ,[ "normal beard black ", "top hat ", "vr",],),
  //6459"],),

  new Traits( "female, accessories" ,[ "mohawk ", "nerd glasses",],),
  //6460"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk ", "purple lipstick",],),
  //6461"],),

  new Traits( "female, accessories" ,[ "pipe ", "straight hair",],),
  //6462"],),

  new Traits( "male, accessories" ,[ "cap ", "nerd glasses ", "smile",],),
  //6463"],),

  new Traits( "female, accessories" ,[ "cap ", "classic shades ", "hot lipstick",],),
  //6464"],),

  new Traits( "female, accessories" ,[ "blonde short ", "earring ", "purple lipstick",],),
  //6465"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "chinstrap ", "cowboy hat ", "gold chain ", "mole",],),
  //6466"],),

  new Traits( "male, accessories" ,[ "headband ", "horned rim glasses ", "luxurious beard",],),
  //6467"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown nose ", "purple eye shadow ", "straight hair dark",],),
  //6468"],),

  new Traits( "female, accessories" ,[ "cigarette ", "crazy hair ", "horned rim glasses ", "hot lipstick",],),
  //6469"],),

  new Traits( "male, accessories" ,[ "big shades ", "fedora",],),
  //6470"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "spots",],),
  //6471"],),

  new Traits( "male, accessories" ,[ "beanie ", "earring",],),
  //6472"],),

  new Traits( "male, accessories" ,[ "purple hair ", "vr",],),
  //6473"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "mohawk dark",],),
  //6474"],),

  new Traits( "male, accessories" ,[ "frown ", "mohawk",],),
  //6475"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "earring ", "normal beard black ", "peak spike",],),
  //6476"],),

  new Traits( "male, accessories" ,[ "eye mask ", "handlebars ", "top hat",],),
  //6477"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "cigarette ", "mohawk",],),
  //6478"],),

  new Traits( "male, accessories" ,[ "cap forward ", "horned rim glasses ", "normal beard",],),
  //6479"],),

  new Traits( "male, accessories" ,[ "cigarette ", "front beard ", "stringy hair",],),
  //6480"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "stringy hair",],),
  //6481"],),

  new Traits( "male, accessories" ,[ "fedora ", "muttonchops",],),
  //6482"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "eye mask ", "hot lipstick ", "mole",],),
  //6483"],),

  new Traits( "male, accessories" ,[ "normal beard black ", "vape, "wild hair",],),
  //6484"],),

  new Traits( "male, accessories" ,[ "normal beard ", "vampire hair",],),
  //6485"],),

  new Traits( "female, accessories" ,[ "mole ", "welding goggles ", "wild hair",],),
  //6486"],),

  new Traits( "female, accessories" ,[ "",],),
  //6487"],),

  new Traits( "male, accessories" ,[ "headband ", "normal beard black",],),
  //6488"],),

  new Traits( "male, accessories" ,[ "cap forward ", "normal beard black ", "regular shades",],),
  //6489"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "tiara",],),
  //6490"],),

  new Traits( "zombie , accessories" ,[ "cap forward ", "earring ", "shadow beard",],),
  //6491"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "stringy hair",],),
  //6492"],),

  new Traits( "male, accessories" ,[ "earring ", "police cap ", "shadow beard",],),
  //6493"],),
  ],),
  
  new Traits( "male, accessories" ,[ "peak spike ", "rosy cheeks",],),
  //6494"],),

  new Traits( "female, accessories" ,[ "classic shades ", "messy hair",],),
  //6495"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "half shaved",],),
  //6496"],),

  new Traits( "female, accessories" ,[ "blonde short ", "eye patch",],),
  //6497"],),

  new Traits( "female, accessories" ,[ "cigarette ", "clown eyes blue ", "earring ", "headband ", "hot lipstick",],),
  //6498"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "knitted cap",],),
  //6499"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "nerd glasses",],),
  //6500"],),

  new Traits( "male, accessories" ,[ "goat ", "peak spike",],),
  //6501"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "do-rag",],),
  //6502"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "peak spike",],),
  //6503"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "top hat",],),
  //6504"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "front beard dark ", "hoodie",],),
  //6505"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "mohawk thin",],),
  //6506"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "frumpy hair",],),
  //6507"],),

  new Traits( "male, accessories" ,[ "cigarette ", "do-rag ", "muttonchops ", "small shades",],),
  //6508"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "dark hair",],),
  //6509"],),

  new Traits( "female, accessories" ,[ "cap ", "eye patch ", "hot lipstick",],),
  //6510"],),

  new Traits( "male, accessories" ,[ "earring ", "regular shades ", "top hat",],),
  //6511"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "knitted cap",],),
  //6512"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "pink with hat ", "purple lipstick",],),
  //6513"],),

  new Traits( "male, accessories" ,[ "do-rag ", "mole ", "shadow beard",],),
  //6514"],),

  new Traits( "zombie, accessories" ,[ "cigarette ", "wild hair",],),
  //6515"],),

  new Traits( "male, accessories" ,[ "bandana ", "cigarette",],),
  //6516"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "stringy hair",],),
  //6517"],),

  new Traits( "female, accessories" ,[ "bandana ", "earring ", "purple lipstick",],),
  //6518"],),

  new Traits( "male, accessories" ,[ "big beard ", "stringy hair",],),
  //6519"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blonde short ", "mole",],),
  //6520"],),

  new Traits( "male, accessories" ,[ "fedora ", "goat ", "regular shades",],),
  //6521"],),

  new Traits( "female, accessories" ,[ "cap ", "earring ", "vr",],),
  //6522"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "knitted cap",],),
  //6523"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "clown hair green ", "nerd glasses",],),
  //6524"],),

  new Traits( "male, accessories" ,[ "goat ", "mohawk thin ", "vr",],),
  //6525"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mustache ", "nerd glasses",],),
  //6526"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "messy hair ", "mole ", "normal beard black",],),
  //6527"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "green eye shadow ", "straight hair blonde",],),
  //6528"],),

  new Traits( "male, accessories" ,[ "frown ", "hoodie ", "nerd glasses ", "shadow beard",],),
  //6529"],),

  new Traits( "male, accessories" ,[ "cigarette ", "fedora ", "regular shades",],),
  //6530"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "earring",],),
  //6531"],),

  new Traits( "female, accessories" ,[ "earring ", "orange side",],),
  //6532"],),

  new Traits( "male, accessories" ,[ "eye mask ", "peak spike",],),
  //6533"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "mole",],),
  //6534"],),

  new Traits( "male, accessories" ,[ "handlebars ", "mohawk thin ", "small shades",],),
  //6535"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "mustache",],),
  //6536"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "messy hair",],),
  //6537"],),

  new Traits( "male, accessories" ,[ "cigarette ", "gold chain ", "luxurious beard ", "stringy hair",],),
  //6538"],),

  new Traits( "male, accessories" ,[ "frown ", "wild hair",],),
  //6539"],),

  new Traits( "male, accessories" ,[ "classic shades ", "frown ", "wild hair",],),
  //6540"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "silver chain",],),
  //6541"],),

  new Traits( "male, accessories" ,[ "fedora ", "normal beard ", "vr",],),
  //6542"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown hair green ", "mole",],),
  //6543"],),

  new Traits( "male, accessories" ,[ "fedora ", "front beard dark ", "vr",],),
  //6544"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "mole ", "mustache",],),
  //6545"],),

  new Traits( "male, accessories" ,[ "earring ", "knitted cap ", "normal beard",],),
  //6546"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "purple eye shadow ", "stringy hair",],),
  //6547"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "do-rag ", "earring ", "front beard",],),
  //6548"],),

  new Traits( "female, accessories" ,[ "classic shades ", "half shaved ", "purple lipstick",],),
  //6549"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "purple lipstick ", "straight hair dark",],),
  //6550"],),

  new Traits( "male, accessories" ,[ "mole ", "peak spike",],),
  //6551"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "smile",],),
  //6552"],),

  new Traits( "male, accessories" ,[ "mohawk ", "shadow beard",],),
  //6553"],),

  new Traits( "female, accessories" ,[ "blonde short ", "cigarette ", "hot lipstick ", "purple eye shadow",],),
  //6554"],),

  new Traits( "male, accessories" ,[ "do-rag ", "normal beard black",],),
  //6555"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "hot lipstick ", "nerd glasses",],),
  //6556"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "shadow beard",],),
  //6557"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "mole ", "red mohawk",],),
  //6558"],),

  new Traits( "female, accessories" ,[ "welding goggles ", "wild hair",],),
  //6559"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "earring ", "straight hair blonde",],),
  //6560"],),

  new Traits( "male, accessories" ,[ "classic shades ", "muttonchops ", "shaved head",],),
  //6561"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "mole",],),
  //6562"],),

  new Traits( "female, accessories" ,[ "cap ", "earring ", "vr",],),
  //6563"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "cigarette ", "wild blonde",],),
  //6564"],),

  new Traits( "female, accessories" ,[ "dark hair ", "mole ", "nerd glasses ", "purple lipstick",],),
  //6565"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "earring ", "knitted cap",],),
  //6566"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "normal beard ", "small shades",],),
  //6567"],),

  new Traits( "female, accessories" ,[ "nerd glasses ", "wild blonde",],),
  //6568"],),

  new Traits( "female, accessories" ,[ "cigarette ", "dark hair ", "earring ", "hot lipstick",],),
  //6569"],),

  new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "red mohawk",],),
  //6570"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "dark hair ", "silver chain",],),
  //6571"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "front beard ", "stringy hair",],),
  //6572"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "knitted cap ", "purple eye shadow",],),
  //6573"],),

  new Traits( "female, accessories" ,[ "bandana ", "cigarette ", "earring",],),
  //6574"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "clown hair green",],),
  //6575"],),

  new Traits( "female, accessories" ,[ "regular shades ", "tassle hat",],),
  //6576"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "hot lipstick ", "spots",],),
  //6577"],),

  new Traits( "male, accessories" ,[ "hoodie ", "regular shades",],),
  //6578"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "vr",],),
  //6579"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "mohawk dark ", "nerd glasses",],),
  //6580"],),

  new Traits( "female, accessories" ,[ "cigarette ", "tiara",],),
  //6581"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "crazy hair ", "luxurious beard",],),
  //6582"],),

  new Traits( "male, accessories" ,[ "bandana ", "big beard",],),
  //6583"],),

  new Traits( "female, accessories" ,[ "nerd glasses ", "stringy hair",],),
  //6584"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "classic shades ", "messy hair",],),
  //6585"],),

  new Traits( "zombie, accessories" ,[ "knitted cap ", "smile",],),
  //6586"],),

  new Traits( "female, accessories" ,[ "cap ", "earring ", "hot lipstick",],),
  //6587"],),

  new Traits( "female, accessories" ,[ "classic shades ", "mohawk dark",],),
  //6588"],),

  new Traits( "female, accessories" ,[ "clown nose ", "wild white hair",],),
  //6589"],),

  new Traits( "female, accessories" ,[ "clown hair green ", "earring ", "hot lipstick",],),
  //6590"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "handlebars ", "mohawk dark",],),
  //6591"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "regular shades ", "straight hair blonde",],),
  //6592"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "mohawk dark",],),
  //6593"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "purple hair",],),
  //6594"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "nerd glasses ", "shadow beard",],),
  //6595"],),

  new Traits( "male, accessories" ,[ "bandana ", "classic shades ", "gold chain",],),
  //6596"],),

  new Traits( "male, accessories" ,[ "cap ", "handlebars ", "horned rim glasses",],),
  //6597"],),

  new Traits( "female, accessories" ,[ "big shades ", "black lipstick ", "straight hair",],),
  //6598"],),

  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "police cap",],),
  //6599"],),

  new Traits( "male, accessories" ,[ "cigarette ", "classic shades ", "do-rag ", "luxurious beard",],),
  //6600"],),

  new Traits( "male, accessories" ,[ "front beard ", "horned rim glasses ", "police cap",],),
  //6601"],),

  new Traits( "male, accessories" ,[ "mohawk ", "nerd glasses ", "rosy cheeks ", "shadow beard",],),
  //6602"],),

  new Traits( "female, accessories" ,[ "cigarette ", "headband",],),
  //6603"],),

  new Traits( "male, accessories" ,[ "peak spike ", "vape",],),
  //6604"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "mohawk ", "shadow beard",],),
  //6605"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "messy hair",],),
  //6606"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "front beard dark",],),
  //6607"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk dark ", "purple eye shadow",],),
  //6608"],),

  new Traits( "male, accessories" ,[ "cigarette ", "classic shades ", "crazy hair ", "earring",],),
  //6609"],),

  new Traits( "male, accessories" ,[ "messy hair ", "shadow beard",],),
  //6610"],),

  new Traits( "male, accessories" ,[ "cap forward ", "regular shades ", "silver chain ", "vape",],),
  //6611"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "tassle hat ", "vr",],),
  //6612"],),

  new Traits( "female, accessories" ,[ "earring ", "straight hair blonde ", "vr",],),
  //6613"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "goat ", "nerd glasses",],),
  //6614"],),

  new Traits( "male, accessories" ,[ "big beard ", "mohawk thin",],),
  //6615"],),

  new Traits( "male, accessories" ,[ "mohawk ", "normal beard",],),
  //6616"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "top hat",],),
  //6617"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "purple lipstick ", "straight hair",],),
  //6618"],),

  new Traits( "male, accessories" ,[ "hoodie ", "silver chain",],),
  //6619"],),

  new Traits( "female, accessories" ,[ "eye mask ", "tassle hat",],),
  //6620"],),

  new Traits( "female, accessories" ,[ "cigarette ", "hot lipstick ", "tassle hat",],),
  //6621"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "earring ", "shaved head",],),
  //6622"],),

  new Traits( "male, accessories" ,[ "big shades ", "cap ", "muttonchops",],),
  //6623"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "messy hair ", "normal beard",],),
  //6624"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "straight hair",],),
  //6625"],),

  new Traits( "female, accessories" ,[ "earring ", "purple eye shadow ", "tassle hat",],),
  //6626"],),

  new Traits( "female, accessories" ,[ "cigarette ", "classic shades ", "mole ", "wild hair",],),
  //6627"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "vape",],),
  //6628"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "welding goggles ", "wild blonde",],),
  //6629"],),

  new Traits( "male, accessories" ,[ "headband ", "nerd glasses",],),
  //6630"],),

  new Traits( "female, accessories" ,[ "half shaved ", "hot lipstick ", "purple eye shadow",],),
  //6631"],),

  new Traits( "male, accessories" ,[ "peak spike ", "smile",],),
  //6632"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "earring ", "smile ", "stringy hair",],),
  //6633"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cigarette ", "earring ", "hoodie",],),
  //6634"],),

  new Traits( "male, accessories" ,[ "cap forward ", "front beard ", "horned rim glasses",],),
  //6635"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "mole",],),
  //6636"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "messy hair",],),
  //6637"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "clown eyes blue ", "silver chain",],),
  //6638"],),

  new Traits( "male, accessories" ,[ "bandana ", "muttonchops ", "spots",],),
  //6639"],),

  new Traits( "female, accessories" ,[ "cap ", "clown eyes blue ", "earring",],),
  //6640"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard ", "mohawk thin",],),
  //6641"],),

  new Traits( "male, accessories" ,[ "big shades ", "crazy hair ", "normal beard black",],),
  //6642"],),

  new Traits( "male, accessories" ,[ "cigarette ", "shaved head",],),
  //6643"],),

  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "mohawk dark ", "normal beard black",],),
  //6644"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "front beard ", "vape",],),
  //6645"],),

  new Traits( "male, accessories" ,[ "eye patch ", "frumpy hair ", "handlebars",],),
  //6646"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "front beard ", "messy hair",],),
  //6647"],),

  new Traits( "male, accessories" ,[ "goat ", "top hat",],),
  //6648"],),

  new Traits( "zombie, accessories" ,[ "crazy hair ", "front beard dark",],),
  //6649"],),

  new Traits( "male, accessories" ,[ "cap forward ", "goat ", "small shades",],),
  //6650"],),

  new Traits( "female, accessories" ,[ "half shaved ", "vr",],),
  //6651"],),

  new Traits( "male, accessories" ,[ "frown ", "messy hair",],),
  //6652"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "wild hair",],),
  //6653"],),

  new Traits( "male, accessories" ,[ "bandana ", "front beard dark ", "regular shades",],),
  //6654"],),

  new Traits( "male, accessories" ,[ "do-rag ", "frown ", "horned rim glasses",],),
  //6655"],),

  new Traits( "male, accessories" ,[ "eye mask ", "police cap",],),
  //6656"],),

  new Traits( "male, accessories" ,[ "frown ", "headband",],),
  //6657"],),

  new Traits( "male, accessories" ,[ "earring ", "vampire hair",],),
  //6658"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "mustache",],),
  //6659"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "mohawk thin ", "pipe",],),
  //6660"],),

  new Traits( "male, accessories" ,[ "smile ", "wild hair",],),
  //6661"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "purple lipstick ", "stringy hair",],),
  //6662"],),

  new Traits( "female, accessories" ,[ "half shaved ", "mole ", "welding goggles",],),
  //6663"],),

  new Traits( "female, accessories" ,[ "cigarette ", "knitted cap",],),
  //6664"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "eye mask ", "tassle hat",],),
  //6665"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes blue ", "earring ", "orange side",],),
  //6666"],),

  new Traits( "female, accessories" ,[ "earring ", "gold chain ", "nerd glasses ", "purple lipstick ", "straight hair dark",],),
  //6667"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "dark hair ", "horned rim glasses",],),
  //6668"],),

  new Traits( "male, accessories" ,[ "front beard ", "mole ", "police cap ", "vr",],),
  //6669"],),

  new Traits( "male, accessories" ,[ "cigarette ", "hoodie",],),
  //6670"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard black ", "shaved head",],),
  //6671"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "regular shades",],),
  //6672"],),

  new Traits( "male, accessories" ,[ "shaved head ", "small shades ", "smile",],),
  //6673"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "green eye shadow ", "orange side",],),
  //6674"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "headband ", "regular shades",],),
  //6675"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "silver chain",],),
  //6676"],),

  new Traits( "male, accessories" ,[ "cap forward ", "chinstrap ", "gold chain",],),
  //6677"],),

  new Traits( "female, accessories" ,[ "dark hair ", "horned rim glasses ", "purple lipstick",],),
  //6678"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "eye patch ", "stringy hair",],),
  //6679"],),

  new Traits( "male, accessories" ,[ "cigarette ", "luxurious beard ", "police cap",],),
  //6680"],),

  new Traits( "female, accessories" ,[ "clown eyes green",],),
  //6681"],),

  new Traits( "male, accessories" ,[ "cigarette ", "frown ", "headband",],),
  //6682"],),

  new Traits( "male, accessories" ,[ "handlebars ", "shaved head",],),
  //6683"],),

  new Traits( "male, accessories" ,[ "big shades ", "purple hair",],),
  //6684"],),

  new Traits( "male, accessories" ,[ "bandana ", "clown eyes blue",],),
  //6685"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "knitted cap",],),
  //6686"],),

  new Traits( "male, accessories" ,[ "big shades ", "gold chain ", "police cap",],),
  //6687"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "knitted cap",],),
  //6688"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "front beard dark",],),
  //6689"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "straight hair dark",],),
  //6690"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard ", "horned rim glasses ", "knitted cap",],),
  //6691"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mohawk",],),
  //6692"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "luxurious beard ", "purple hair",],),
  //6693"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "luxurious beard ", "shaved head ", "vape",],),
  //6694"],),

  new Traits( "female, accessories" ,[ "big shades ", "headband",],),
  //6695"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "green eye shadow ", "purple lipstick",],),
  //6696"],),

  new Traits( "male, accessories" ,[ "cigarette ", "front beard ", "horned rim glasses ", "messy hair",],),
  //6697"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "headband ", "hot lipstick",],),
  //6698"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "purple lipstick ", "wild hair",],),
  //6699"],),

  new Traits( "male, accessories" ,[ "big beard ", "mohawk thin ", "mole",],),
  //6700"],),

  new Traits( "male, accessories" ,[ "medical mask ", "top hat",],),
  //6701"],),

  new Traits( "male, accessories" ,[ "big shades ", "knitted cap",],),
  //6702"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blonde bob ", "green eye shadow ", "mole",],),
  //6703"],),

  new Traits( "zombie, accessories" ,[ "cigarette ", "earring ", "rosy cheeks",],),
  //6704"],),

  new Traits( "male, accessories" ,[ "earring ", "regular shades ", "shadow beard ", "stringy hair",],),
  //6705"],),

  new Traits( "female, accessories" ,[ "spots ", "wild blonde",],),
  //6706"],),

  new Traits( "female, accessories" ,[ "pigtails ", "purple eye shadow",],),
  //6707"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "regular shades ", "wild white hair",],),
  //6708"],),

  new Traits( "male, accessories" ,[ "shadow beard ", "small shades ", "stringy hair",],),
  //6709"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk ", "mole",],),
  //6710"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "blonde bob ", "rosy cheeks",],),
  //6711"],),

  new Traits( "female, accessories" ,[ "clown nose ", "horned rim glasses ", "wild hair",],),
  //6712"],),

  new Traits( "male, accessories" ,[ "big shades ", "shaved head",],),
  //6713"],),

  new Traits( "female, accessories" ,[ "blonde short ", "regular shades",],),
  //6714"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "nerd glasses ", "peak spike ", "pipe",],),
  //6715"],),

  new Traits( "female, accessories" ,[ "bandana ", "big shades ", "earring",],),
  //6716"],),

  new Traits( "male, accessories" ,[ "smile ", "stringy hair",],),
  //6717"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "earring ", "purple eye shadow ", "purple lipstick",],),
  //6718"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "goat",],),
  //6719"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "pilot helmet",],),
  //6720"],),

  new Traits( "male, accessories" ,[ "hoodie ", "smile",],),
  //6721"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "stringy hair",],),
  //6722"],),

  new Traits( "female, accessories" ,[ "clown nose ", "green eye shadow ", "wild blonde",],),
  //6723"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "mohawk ", "normal beard",],),
  //6724"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "stringy hair",],),
  //6725"],),

  new Traits( "male, accessories" ,[ "big shades ", "do-rag ", "rosy cheeks",],),
  //6726"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "nerd glasses ", "pink with hat",],),
  //6727"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "straight hair dark",],),
  //6728"],),

  new Traits( "male, accessories" ,[ "bandana ", "goat ", "pipe ", "small shades",],),
  //6729"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "mole ", "shaved head ", "silver chain",],),
  //6730"],),

  new Traits( "female, accessories" ,[ "mole ", "pink with hat ", "purple lipstick",],),
  //6731"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "stringy hair",],),
  //6732"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "crazy hair ", "mole ", "silver chain",],),
  //6733"],),

  new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "red mohawk",],),
  //6734"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "purple lipstick ", "straight hair dark",],),
  //6735"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "regular shades",],),
  //6736"],),

  new Traits( "male, accessories" ,[ "silver chain ", "wild hair",],),
  //6737"],),

  new Traits( "male, accessories" ,[ "shaved head ", "silver chain",],),
  //6738"],),

  new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "wild blonde",],),
  //6739"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "clown nose ", "luxurious beard",],),
  //6740"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "pipe",],),
  //6741"],),

  new Traits( "male, accessories" ,[ "cigarette ", "clown hair green ", "shadow beard",],),
  //6742"],),

  new Traits( "male, accessories" ,[ "do-rag ", "eye mask",],),
  //6743"],),

  new Traits( "male, accessories" ,[ "headband ", "normal beard black ", "small shades",],),
  //6744"],),

  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "shaved head",],),
  //6745"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mohawk dark ", "shadow beard",],),
  //6746"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "nerd glasses",],),
  //6747"],),

  new Traits( "male, accessories" ,[ "cap ", "eye mask",],),
  //6748"],),

  new Traits( "male, accessories" ,[ "bandana ", "big shades ", "shadow beard",],),
  //6749"],),

  new Traits( "male, accessories" ,[ "eye patch ", "front beard ", "stringy hair",],),
  //6750"],),

  new Traits( "male, accessories" ,[ "cap ", "eye mask",],),
  //6751"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "hot lipstick ", "straight hair blonde",],),
  //6752"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "hot lipstick ", "wild white hair",],),
  //6753"],),

  new Traits( "female, accessories" ,[ "dark hair ", "eye patch",],),
  //6754"],),

  new Traits( "male, accessories" ,[ "do-rag ", "mole ", "regular shades",],),
  //6755"],),

  new Traits( "male, accessories" ,[ "3d glasses",],),
  //6756"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "crazy hair ", "green eye shadow",],),
  //6757"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "fedora ", "shadow beard",],),
  //6758"],),

  new Traits( "female, accessories" ,[ "big shades ", "earring ", "orange side",],),
  //6759"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "medical mask ", "mustache",],),
  //6760"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "hot lipstick ", "knitted cap",],),
  //6761"],),

  new Traits( "female, accessories" ,[ "cap ", "purple eye shadow",],),
  //6762"],),

  new Traits( "female, accessories" ,[ "knitted cap ", "purple eye shadow",],),
  //6763"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "hot lipstick ", "tiara",],),
  //6764"],),

  new Traits( "female, accessories" ,[ "bandana ", "earring ", "purple lipstick",],),
  //6765"],),

  new Traits( "female, accessories" ,[ "cap ", "vr",],),
  //6766"],),

  new Traits( "female, accessories" ,[ "eye patch ", "purple lipstick ", "red mohawk",],),
  //6767"],),

  new Traits( "female, accessories" ,[ "classic shades ", "tassle hat",],),
  //6768"],),

  new Traits( "female, accessories" ,[ "hot lipstick",],),
  //6769"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "straight hair ", "vr",],),
  //6770"],),

  new Traits( "male, accessories" ,[ "big shades ", "frumpy hair ", "silver chain",],),
  //6771"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "mohawk",],),
  //6772"],),

  new Traits( "male, accessories" ,[ "cap ", "regular shades",],),
  //6773"],),

  new Traits( "male, accessories" ,[ "bandana ", "pipe",],),
  //6774"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "mohawk thin ", "silver chain",],),
  //6775"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "dark hair ", "purple lipstick",],),
  //6776"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "wild hair",],),
  //6777"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "purple hair",],),
  //6778"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "hot lipstick ", "pink with hat",],),
  //6779"],),

  new Traits( "female, accessories" ,[ "earring ", "pipe ", "wild hair",],),
  //6780"],),

  new Traits( "male, accessories" ,[ "clown hair green",],),
  //6781"],),

  new Traits( "male, accessories" ,[ "eye patch ", "headband",],),
  //6782"],),

  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "wild hair",],),
  //6783"],),

  new Traits( "zombie, accessories" ,[ "bandana ", "cigarette ", "frown",],),
  //6784"],),

  new Traits( "male, accessories" ,[ "eye patch ", "peak spike",],),
  //6785"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "fedora ", "medical mask",],),
  //6786"],),

  new Traits( "male, accessories" ,[ "cap ", "earring ", "regular shades",],),
  //6787"],),

  new Traits( "male, accessories" ,[ "big beard ", "earring ", "stringy hair",],),
  //6788"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "wild hair",],),
  //6789"],),

  new Traits( "male, accessories" ,[ "earring ", "goat ", "messy hair",],),
  //6790"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "knitted cap",],),
  //6791"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "medical mask",],),
  //6792"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "orange side",],),
  //6793"],),

  new Traits( "female, accessories" ,[ "choker ", "mohawk dark ", "spots",],),
  //6794"],),

  new Traits( "male, accessories" ,[ "clown nose ", "frown ", "goat ", "messy hair ", "silver chain",],),
  //6795"],),

  new Traits( "female, accessories" ,[ "pink with hat ", "purple eye shadow ", "purple lipstick",],),
  //6796"],),

  new Traits( "female, accessories" ,[ "blonde short ", "nerd glasses",],),
  //6797"],),

  new Traits( "male, accessories" ,[ "cap ", "classic shades",],),
  //6798"],),

  new Traits( "male, accessories" ,[ "cigarette ", "crazy hair ", "goat",],),
  //6799"],),

  new Traits( "male, accessories" ,[ "eye patch ", "pipe ", "purple hair",],),
  //6800"],),

  new Traits( "female, accessories" ,[ "purple lipstick",],),
  //6801"],),

  new Traits( "male, accessories" ,[ "clown nose ", "fedora ", "goat",],),
  //6802"],),

  new Traits( "male, accessories" ,[ "earring ", "goat ", "knitted cap",],),
  //6803"],),

  new Traits( "female, accessories" ,[ "regular shades ", "stringy hair",],),
  //6804"],),

  new Traits( "male, accessories" ,[ "cigarette ", "police cap",],),
  //6805"],),

  new Traits( "female, accessories" ,[ "cap ", "classic shades",],),
  //6806"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "pink with hat ", "purple lipstick",],),
  //6807"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "dark hair ", "vr",],),
  //6808"],),

  new Traits( "male, accessories" ,[ "big beard ", "horned rim glasses ", "peak spike",],),
  //6809"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "purple lipstick ", "wild hair",],),
  //6810"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "crazy hair ", "mole",],),
  //6811"],),

  new Traits( "female, accessories" ,[ "blonde short ", "purple eye shadow",],),
  //6812"],),

  new Traits( "male, accessories" ,[ "eye mask ", "messy hair",],),
  //6813"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "spots ", "wild blonde",],),
  //6814"],),

  new Traits( "male, accessories" ,[ "headband ", "mustache ", "regular shades",],),
  //6815"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "clown eyes blue ", "hot lipstick",],),
  //6816"],),

  new Traits( "female, accessories" ,[ "pilot helmet ", "purple lipstick ", "vape",],),
  //6817"],),

  new Traits( "male, accessories" ,[ "do-rag ", "vr",],),
  //6818"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "cap ", "front beard dark",],),
  //6819"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "wild hair",],),
  //6820"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "earring ", "purple lipstick",],),
  //6821"],),

  new Traits( "female, accessories" ,[ "eye mask ", "half shaved ", "purple lipstick",],),
  //6822"],),

  new Traits( "female, accessories" ,[ "earring ", "horned rim glasses",],),
  //6823"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "classic shades ", "frumpy hair",],),
  //6824"],),

  new Traits( "female, accessories" ,[ "knitted cap ", "purple eye shadow",],),
  //6825"],),

  new Traits( "male, accessories" ,[ "do-rag ", "pipe ", "small shades",],),
  //6826"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "handlebars ", "mohawk",],),
  //6827"],),

  new Traits( "male, accessories" ,[ "eye patch ", "handlebars ", "peak spike",],),
  //6828"],),

  new Traits( "male, accessories" ,[ "big beard ", "do-rag",],),
  //6829"],),

  new Traits( "male, accessories" ,[ "eye patch ", "front beard ", "peak spike",],),
  //6830"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "wild hair",],),
  //6831"],),

  new Traits( "male, accessories" ,[ "headband ", "spots",],),
  //6832"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "vape",],),
  //6833"],),

  new Traits( "female, accessories" ,[ "dark hair ", "pipe ", "purple eye shadow",],),
  //6834"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "normal beard black",],),
  //6835"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "hot lipstick ", "mole ", "straight hair blonde",],),
  //6836"],),

  new Traits( "male, accessories" ,[ "cap ", "earring ", "eye mask",],),
  //6837"],),

  new Traits( "male, accessories" ,[ "cigarette ", "eye patch ", "knitted cap ", "luxurious beard",],),
  //6838"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora ", "medical mask",],),
  //6839"],),

  new Traits( "female, accessories" ,[ "cigarette ", "purple lipstick ", "wild white hair",],),
  //6840"],),

  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "pipe",],),
  //6841"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "tiara",],),
  //6842"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mohawk dark ", "regular shades",],),
  //6843"],),

  new Traits( "female, accessories" ,[ "earring ", "pigtails ", "purple lipstick",],),
  //6844"],),

  new Traits( "female, accessories" ,[ "earring ", "knitted cap ", "purple eye shadow",],),
  //6845"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "mohawk thin",],),
  //6846"],),

  new Traits( "male, accessories" ,[ "handlebars ", "police cap",],),
  //6847"],),

  new Traits( "female, accessories" ,[ "bandana ", "earring ", "hot lipstick ", "purple eye shadow",],),
  //6848"],),

  new Traits( "male, accessories" ,[ "do-rag ", "nerd glasses ", "normal beard",],),
  //6849"],),

  new Traits( "male, accessories" ,[ "mohawk ", "regular shades ", "shadow beard",],),
  //6850"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "police cap",],),
  //6851"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "earring ", "frumpy hair ", "mole ", "shadow beard",],),
  //6852"],),

  new Traits( "male, accessories" ,[ "eye patch ", "fedora ", "front beard dark",],),
  //6853"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "mole ", "wild hair",],),
  //6854"],),

  new Traits( "female, accessories" ,[ "blonde short ", "clown eyes blue",],),
  //6855"],),

  new Traits( "female, accessories" ,[ "cigarette ", "pilot helmet ", "purple lipstick",],),
  //6856"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "knitted cap",],),
  //6857"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "pipe",],),
  //6858"],),

  new Traits( "female, accessories" ,[ "blonde short ", "earring ", "green eye shadow ", "hot lipstick",],),
  //6859"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "dark hair ", "eye patch",],),
  //6860"],),

  new Traits( "female, accessories" ,[ "big shades ", "earring ", "mohawk thin",],),
  //6861"],),

  new Traits( "female, accessories" ,[ "pink with hat ", "regular shades",],),
  //6862"],),

  new Traits( "female, accessories" ,[ "cigarette ", "hot lipstick ", "red mohawk",],),
  //6863"],),

  new Traits( "female, accessories" ,[ "mole",],),
  //6864"],),

  new Traits( "male, accessories" ,[ "cap ", "goat",],),
  //6865"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "normal beard black ", "small shades",],),
  //6866"],),

  new Traits( "male, accessories" ,[ "fedora ", "muttonchops ", "vr",],),
  //6867"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "headband ", "hot lipstick",],),
  //6868"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "cap forward ", "classic shades",],),
  //6869"],),

  new Traits( "female, accessories" ,[ "dark hair ", "gold chain",],),
  //6870"],),

  new Traits( "male, accessories" ,[ "bandana ", "buck teeth ", "nerd glasses ", "pipe",],),
  //6871"],),

  new Traits( "female, accessories" ,[ "bandana ", "black lipstick ", "clown eyes blue",],),
  //6872"],),

  new Traits( "male, accessories" ,[ "cap forward ", "horned rim glasses ", "vape",],),
  //6873"],),

  new Traits( "male, accessories" ,[ "eye mask ", "hoodie ", "shadow beard",],),
  //6874"],),

  new Traits( "female, accessories" ,[ "orange side ", "purple eye shadow",],),
  //6875"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "vampire hair",],),
  //6876"],),

  new Traits( "male, accessories" ,[ "classic shades ", "wild hair",],),
  //6877"],),

  new Traits( "male, accessories" ,[ "bandana ", "mole",],),
  //6878"],),

  new Traits( "male, accessories" ,[ "bandana ", "big beard ", "clown eyes blue",],),
  //6879"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "hot lipstick ", "mole ", "nerd glasses",],),
  //6880"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "tassle hat",],),
  //6881"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "frumpy hair ", "green eye shadow",],),
  //6882"],),

  new Traits( "male, accessories" ,[ "classic shades ", "do-rag ", "earring ", "mustache",],),
  //6883"],),

  new Traits( "female, accessories" ,[ "knitted cap ", "mole ", "purple eye shadow",],),
  //6884"],),

  new Traits( "female, accessories" ,[ "eye patch ", "red mohawk",],),
  //6885"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "regular shades ", "silver chain",],),
  //6886"],),

  new Traits( "male, accessories" ,[ "big shades ", "mohawk thin ", "muttonchops",],),
  //6887"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "silver chain ", "stringy hair",],),
  //6888"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "earring ", "shadow beard",],),
  //6889"],),

  new Traits( "female, accessories" ,[ "blonde short ", "clown nose",],),
  //6890"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "front beard",],),
  //6891"],),

  new Traits( "male, accessories" ,[ "big shades ", "clown nose ", "knitted cap",],),
  //6892"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "pipe ", "wild white hair",],),
  //6893"],),

  new Traits( "male, accessories" ,[ "gold chain ", "knitted cap ", "small shades",],),
  //6894"],),

  new Traits( "female, accessories" ,[ "big shades ", "black lipstick ", "wild blonde",],),
  //6895"],),

  new Traits( "female, accessories" ,[ "bandana ", "earring ", "purple eye shadow ", "purple lipstick",],),
  //6896"],),

  new Traits( "female, accessories" ,[ "clown nose ", "green eye shadow ", "hot lipstick ", "mohawk dark",],),
  //6897"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mohawk ", "smile",],),
  //6898"],),

  new Traits( "male, accessories" ,[ "handlebars ", "horned rim glasses ", "mohawk dark",],),
  //6899"],),

  new Traits( "female, accessories" ,[ "cigarette ", "crazy hair ", "purple eye shadow",],),
  //6900"],),

  new Traits( "male, accessories" ,[ "normal beard ", "stringy hair",],),
  //6901"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "tassle hat",],),
  //6902"],),

  new Traits( "female, accessories" ,[ "eye mask ", "gold chain ", "stringy hair",],),
  //6903"],),

  new Traits( "female, accessories" ,[ "dark hair ", "eye mask ", "hot lipstick",],),
  //6904"],),

  new Traits( "male, accessories" ,[ "big shades ", "headband",],),
  //6905"],),

  new Traits( "male, accessories" ,[ "fedora ", "mustache ", "regular shades",],),
  //6906"],),

  new Traits( "male, accessories" ,[ "eye mask ", "knitted cap ", "mustache",],),
  //6907"],),

  new Traits( "male, accessories" ,[ "cigarette ", "front beard dark ", "mohawk",],),
  //6908"],),

  new Traits( "female, accessories" ,[ "cigarette ", "dark hair ", "mole",],),
  //6909"],),

  new Traits( "female, accessories" ,[ "cigarette ", "crazy hair ", "earring ", "hot lipstick",],),
  //6910"],),

  new Traits( "male, accessories" ,[ "cigarette ", "frumpy hair ", "regular shades",],),
  //6911"],),

  new Traits( "male, accessories" ,[ "hoodie ", "normal beard black ", "regular shades",],),
  //6912"],),

  new Traits( "male, accessories" ,[ "eye patch ", "stringy hair",],),
  //6913"],),

  new Traits( "male, accessories" ,[ "cigarette ", "top hat",],),
  //6914"],),

  new Traits( "ape, accessories" ,[ "cap ", "earring ", "eye patch",],),
  //6915"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "muttonchops",],),
  //6916"],),

  new Traits( "male, accessories" ,[ "mole ", "shaved head ", "small shades",],),
  //6917"],),

  new Traits( "male, accessories" ,[ "eye patch ", "mohawk dark ", "normal beard",],),
  //6918"],),

  new Traits( "male, accessories" ,[ "messy hair ", "vape",],),
  //6919"],),

  new Traits( "male, accessories" ,[ "big shades ", "front beard ", "stringy hair",],),
  //6920"],),

  new Traits( "male, accessories" ,[ "front beard",],),
  //6921"],),

  new Traits( "male, accessories" ,[ "earring ", "mustache ", "small shades ", "wild hair",],),
  //6922"],),

  new Traits( "male, accessories" ,[ "hoodie ", "mustache ", "small shades",],),
  //6923"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "pigtails",],),
  //6924"],),

  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "regular shades",],),
  //6925"],),

  new Traits( "male, accessories" ,[ "cigarette ", "eye patch ", "hoodie ", "muttonchops",],),
  //6926"],),

  new Traits( "male, accessories" ,[ "big shades ", "goat ", "messy hair",],),
  //6927"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "police cap",],),
  //6928"],),

  new Traits( "female, accessories" ,[ "pipe ", "red mohawk",],),
  //6929"],),

  new Traits( "male, accessories" ,[ "do-rag",],),
  //6930"],),

  new Traits( "female, accessories" ,[ "classic shades ", "hot lipstick ", "mohawk dark",],),
  //6931"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "tiara",],),
  //6932"],),

  new Traits( "female, accessories" ,[ "cigarette ", "clown eyes green ", "straight hair",],),
  //6933"],),

  new Traits( "male, accessories" ,[ "classic shades ", "luxurious beard ", "messy hair",],),
  //6934"],),

  new Traits( "male, accessories" ,[ "handlebars ", "hoodie ", "nerd glasses",],),
  //6935"],),

  new Traits( "female, accessories" ,[ "mohawk dark ", "purple eye shadow ", "purple lipstick",],),
  //6936"],),

  new Traits( "male, accessories" ,[ "normal beard black ", "purple hair ", "small shades",],),
  //6937"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "knitted cap",],),
  //6938"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "purple lipstick ", "regular shades",],),
  //6939"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "hoodie ", "vr",],),
  //6940"],),

  new Traits( "male, accessories" ,[ "classic shades ", "purple hair",],),
  //6941"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mohawk ", "silver chain",],),
  //6942"],),

  new Traits( "male, accessories" ,[ "clown nose ", "crazy hair ", "mole ", "pipe ", "smile",],),
  //6943"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "half shaved ", "vape",],),
  //6944"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "headband ", "mole ", "purple lipstick",],),
  //6945"],),

  new Traits( "female, accessories" ,[ "dark hair ", "mole ", "purple eye shadow",],),
  //6946"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cap ", "mustache",],),
  //6947"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring",],),
  //6948"],),

  new Traits( "male, accessories" ,[ "cigarette ", "classic shades ", "gold chain ", "purple hair ", "shadow beard",],),
  //6949"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blonde short ", "mole",],),
  //6950"],),

  new Traits( "male, accessories" ,[ "cap forward ", "mole ", "small shades",],),
  //6951"],),

  new Traits( "male, accessories" ,[ "goat ", "top hat",],),
  //6952"],),

  new Traits( "male, accessories" ,[ "frown ", "muttonchops ", "shaved head",],),
  //6953"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "earring ", "purple eye shadow",],),
  //6954"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "fedora ", "pipe",],),
  //6955"],),

  new Traits( "male, accessories" ,[ "eye mask ", "stringy hair",],),
  //6956"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cigarette ", "knitted cap ", "mole ", "normal beard black",],),
  //6957"],),

  new Traits( "female, accessories" ,[ "cigarette ", "hot lipstick ", "wild white hair",],),
  //6958"],),
  ],),
  
  new Traits( "male, accessories" ,[ "earring ", "mohawk ", "normal beard",],),
  //6959"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "stringy hair",],),
  //6960"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "hot lipstick ", "mohawk thin",],),
  //6961"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "luxurious beard",],),
  //6962"],),

  new Traits( "female, accessories" ,[ "clown nose ", "wild white hair",],),
  //6963"],),

  new Traits( "male, accessories" ,[ "cap ", "eye patch ", "front beard",],),
  //6964"],),

  new Traits( "ape, accessories" ,[ "fedora",],),
  //6965"],),

  new Traits( "male, accessories" ,[ "cigarette ", "cowboy hat ", "earring",],),
  //6966"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "normal beard black",],),
  //6967"],),

  new Traits( "male, accessories" ,[ "headband ", "spots ", "vr",],),
  //6968"],),

  new Traits( "male, accessories" ,[ "earring ", "regular shades ", "wild hair",],),
  //6969"],),

  new Traits( "female, accessories" ,[ "classic shades ", "crazy hair",],),
  //6970"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard ", "headband ", "regular shades ", "spots",],),
  //6971"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "wild blonde",],),
  //6972"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "shadow beard",],),
  //6973"],),

  new Traits( "male, accessories" ,[ "big beard ", "cap forward ", "horned rim glasses",],),
  //6974"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "goat ", "headband",],),
  //6975"],),

  new Traits( "male, accessories" ,[ "headband ", "rosy cheeks ", "small shades",],),
  //6976"],),

  new Traits( "male, accessories" ,[ "cap forward ", "mustache",],),
  //6977"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "big beard ", "frumpy hair",],),
  //6978"],),

  new Traits( "male, accessories" ,[ "big beard ", "vr ", "wild hair",],),
  //6979"],),

  new Traits( "male, accessories" ,[ "small shades ", "stringy hair",],),
  //6980"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "stringy hair",],),
  //6981"],),

  new Traits( "male, accessories" ,[ "big shades ", "frumpy hair ", "shadow beard",],),
  //6982"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "horned rim glasses",],),
  //6983"],),

  new Traits( "male, accessories" ,[ "classic shades ", "cowboy hat ", "mustache",],),
  //6984"],),

  new Traits( "male, accessories" ,[ "mole ", "shadow beard ", "shaved head",],),
  //6985"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "mustache",],),
  //6986"],),

  new Traits( "male, accessories" ,[ "goat ", "mole ", "regular shades ", "top hat",],),
  //6987"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "clown hair green",],),
  //6988"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "frumpy hair ", "silver chain",],),
  //6989"],),

  new Traits( "female, accessories" ,[ "bandana ", "earring ", "purple lipstick ", "vr",],),
  //6990"],),

  new Traits( "female, accessories" ,[ "big shades ", "messy hair",],),
  //6991"],),

  new Traits( "male, accessories" ,[ "eye patch ", "frown ", "shadow beard ", "stringy hair",],),
  //6992"],),

  new Traits( "male, accessories" ,[ "normal beard ", "purple hair",],),
  //6993"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "pink with hat ", "purple lipstick",],),
  //6994"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "stringy hair ", "vape",],),
  //6995"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "small shades ", "smile",],),
  //6996"],),

  new Traits( "female, accessories" ,[ "earring ", "regular shades ", "straight hair dark",],),
  //6997"],),

  new Traits( "female, accessories" ,[ "blonde short ", "clown nose",],),
  //6998"],),

  new Traits( "male, accessories" ,[ "earring ", "peak spike ", "regular shades",],),
  //6999"],),
  }],),
  ],),
  "data" ,],),
  "nfts" , [],),
  ],),
  new Traits( "male, accessories" ,[ "classic shades ", "messy hair",],),
  //7000"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "police cap ", "regular shades ", "vape",],),
  //7001"],),

  new Traits( "male, accessories" ,[ "cigarette ", "knitted cap ", "normal beard black",],),
  //7002"],),

  new Traits( "male, accessories" ,[ "mole ", "mustache ", "stringy hair",],),
  //7003"],),

  new Traits( "male, accessories" ,[ "front beard ", "purple hair",],),
  //7004"],),

  new Traits( "male, accessories" ,[ "goat ", "wild hair",],),
  //7005"],),

  new Traits( "male, accessories" ,[ "eye patch ", "knitted cap ", "normal beard black",],),
  //7006"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "horned rim glasses ", "luxurious beard ", "vape",],),
  //7007"],),

  new Traits( "male, accessories" ,[ "cap forward ", "shadow beard",],),
  //7008"],),

  new Traits( "female, accessories" ,[ "clown nose ", "straight hair blonde ", "welding goggles",],),
  //7009"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "pipe",],),
  //7010"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blonde bob ", "clown nose",],),
  //7011"],),

  new Traits( "male, accessories" ,[ "fedora ", "nerd glasses",],),
  //7012"],),

  new Traits( "female, accessories" ,[ "eye patch ", "messy hair ", "purple lipstick",],),
  //7013"],),

  new Traits( "zombie, accessories" ,[ "cigarette ", "frumpy hair",],),
  //7014"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "earring ", "tassle hat ", "vape",],),
  //7015"],),

  new Traits( "female, accessories" ,[ "cap ", "purple eye shadow",],),
  //7016"],),

  new Traits( "male, accessories" ,[ "big beard ", "mohawk",],),
  //7017"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "earring ", "purple hair",],),
  //7018"],),

  new Traits( "male, accessories" ,[ "classic shades ", "clown nose ", "normal beard black ", "peak spike",],),
  //7019"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blonde short ", "green eye shadow",],),
  //7020"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "shaved head",],),
  //7021"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "mole ", "wild hair",],),
  //7022"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "crazy hair ", "goat",],),
  //7023"],),

  new Traits( "female, accessories" ,[ "eye patch ", "knitted cap",],),
  //7024"],),

  new Traits( "male, accessories" ,[ "classic shades ", "shaved head",],),
  //7025"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "earring ", "mustache",],),
  //7026"],),

  new Traits( "female, accessories" ,[ "cigarette ", "vr ", "wild blonde",],),
  //7027"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "peak spike",],),
  //7028"],),

  new Traits( "male, accessories" ,[ "cap forward ", "front beard dark ", "mole",],),
  //7029"],),

  new Traits( "male, accessories" ,[ "bandana ", "big shades ", "goat",],),
  //7030"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "smile",],),
  //7031"],),

  new Traits( "male, accessories" ,[ "cigarette ", "clown eyes blue ", "mustache ", "stringy hair",],),
  //7032"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "mohawk thin ", "mole",],),
  //7033"],),

  new Traits( "male, accessories" ,[ "clown nose ", "earring ", "frumpy hair ", "luxurious beard",],),
  //7034"],),

  new Traits( "male, accessories" ,[ "cigarette ", "goat ", "vampire hair",],),
  //7035"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "earring ", "fedora",],),
  //7036"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "earring ", "horned rim glasses",],),
  //7037"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "gold chain ", "red mohawk",],),
  //7038"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "earring ", "green eye shadow ", "hot lipstick",],),
  //7039"],),

  new Traits( "male, accessories" ,[ "bandana ", "normal beard",],),
  //7040"],),

  new Traits( "female, accessories" ,[ "cap ", "green eye shadow ", "hot lipstick",],),
  //7041"],),

  new Traits( "male, accessories" ,[ "cigarette ", "frown ", "wild hair",],),
  //7042"],),

  new Traits( "female, accessories" ,[ "mohawk ", "vape",],),
  //7043"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "hot lipstick ", "tassle hat",],),
  //7044"],),

  new Traits( "female, accessories" ,[ "earring ", "nerd glasses ", "tassle hat",],),
  //7045"],),

  new Traits( "male, accessories" ,[ "earring ", "gold chain ", "nerd glasses ", "stringy hair",],),
  //7046"],),

  new Traits( "male, accessories" ,[ "handlebars ", "top hat",],),
  //7047"],),

  new Traits( "male, accessories" ,[ "messy hair ", "spots ", "vr",],),
  //7048"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "mohawk thin",],),
  //7049"],),

  new Traits( "male, accessories" ,[ "do-rag ", "luxurious beard ", "vape",],),
  //7050"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "smile",],),
  //7051"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "regular shades ", "straight hair blonde",],),
  //7052"],),

  new Traits( "male, accessories" ,[ "cap ", "eye mask",],),
  //7053"],),

  new Traits( "male, accessories" ,[ "goat ", "regular shades",],),
  //7054"],),

  new Traits( "male, accessories" ,[ "medical mask ", "mustache ", "regular shades ", "stringy hair",],),
  //7055"],),

  new Traits( "female, accessories" ,[ "blonde short ", "clown eyes blue ", "purple lipstick",],),
  //7056"],),

  new Traits( "female, accessories" ,[ "clown nose ", "hot lipstick ", "pilot helmet",],),
  //7057"],),

  new Traits( "male, accessories" ,[ "headband ", "nerd glasses",],),
  //7058"],),

  new Traits( "female, accessories" ,[ "classic shades ", "red mohawk",],),
  //7059"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "crazy hair ", "mole",],),
  //7060"],),

  new Traits( "male, accessories" ,[ "earring ", "pipe ", "police cap",],),
  //7061"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "goat ", "headband",],),
  //7062"],),

  new Traits( "female, accessories" ,[ "purple eye shadow ", "wild blonde",],),
  //7063"],),

  new Traits( "male, accessories" ,[ "big beard ", "cap ", "eye mask",],),
  //7064"],),

  new Traits( "male, accessories" ,[ "big shades ", "messy hair ", "normal beard black ", "vape",],),
  //7065"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "nerd glasses",],),
  //7066"],),

  new Traits( "male, accessories" ,[ "eye mask ", "messy hair",],),
  //7067"],),

  new Traits( "male, accessories" ,[ "mohawk ", "small shades",],),
  //7068"],),

  new Traits( "female, accessories" ,[ "earring ", "nerd glasses ", "stringy hair",],),
  //7069"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "mole ", "straight hair",],),
  //7070"],),

  new Traits( "female, accessories" ,[ "medical mask ", "purple lipstick ", "regular shades ", "stringy hair",],),
  //7071"],),

  new Traits( "male, accessories" ,[ "cigarette ", "vampire hair",],),
  //7072"],),

  new Traits( "female, accessories" ,[ "mohawk ", "purple lipstick",],),
  //7073"],),

  new Traits( "female, accessories" ,[ "mohawk thin ", "welding goggles",],),
  //7074"],),

  new Traits( "male, accessories" ,[ "front beard ", "police cap",],),
  //7075"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "choker ", "earring ", "mohawk",],),
  //7076"],),

  new Traits( "female, accessories" ,[ "cigarette ", "classic shades ", "knitted cap",],),
  //7077"],),

  new Traits( "male, accessories" ,[ "cigarette ", "police cap",],),
  //7078"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "red mohawk ", "welding goggles",],),
  //7079"],),

  new Traits( "male, accessories" ,[ "frown ", "knitted cap ", "muttonchops",],),
  //7080"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "horned rim glasses",],),
  //7081"],),

  new Traits( "female, accessories" ,[ "half shaved ", "nerd glasses ", "purple lipstick",],),
  //7082"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "purple lipstick ", "wild white hair",],),
  //7083"],),

  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "small shades",],),
  //7084"],),

  new Traits( "female, accessories" ,[ "big shades ", "hot lipstick ", "straight hair blonde ", "vape",],),
  //7085"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "black lipstick ", "blonde bob",],),
  //7086"],),

  new Traits( "female, accessories" ,[ "rosy cheeks ", "stringy hair",],),
  //7087"],),

  new Traits( "male, accessories" ,[ "cap forward ", "horned rim glasses ", "pipe",],),
  //7088"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "mohawk",],),
  //7089"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "pink with hat",],),
  //7090"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "front beard dark ", "vape",],),
  //7091"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "police cap",],),
  //7092"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "pigtails ", "purple lipstick",],),
  //7093"],),

  new Traits( "male, accessories" ,[ "cigarette ", "messy hair ", "muttonchops ", "nerd glasses",],),
  //7094"],),

  new Traits( "female, accessories" ,[ "cigarette ", "red mohawk",],),
  //7095"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "police cap",],),
  //7096"],),

  new Traits( "male, accessories" ,[ "big shades ", "hoodie ", "mole",],),
  //7097"],),

  new Traits( "male, accessories" ,[ "cap forward ", "luxurious beard",],),
  //7098"],),

  new Traits( "male, accessories" ,[ "big beard ", "vampire hair",],),
  //7099"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "do-rag ", "nerd glasses",],),
  //7100"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "half shaved",],),
  //7101"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "horned rim glasses",],),
  //7102"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "earring ", "hot lipstick",],),
  //7103"],),

  new Traits( "female, accessories" ,[ "cigarette ", "messy hair",],),
  //7104"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "mohawk thin ", "purple lipstick",],),
  //7105"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mohawk thin ", "pipe",],),
  //7106"],),

  new Traits( "male, accessories" ,[ "cap ", "small shades",],),
  //7107"],),

  new Traits( "female, accessories" ,[ "purple eye shadow ", "stringy hair",],),
  //7108"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "eye mask",],),
  //7109"],),

  new Traits( "male, accessories" ,[ "goat ", "police cap ", "small shades",],),
  //7110"],),

  new Traits( "female, accessories" ,[ "silver chain",],),
  //7111"],),

  new Traits( "male, accessories" ,[ "big beard ", "shaved head",],),
  //7112"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "knitted cap",],),
  //7113"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "cigarette ", "hot lipstick",],),
  //7114"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "frown ", "mohawk dark",],),
  //7115"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "mohawk dark ", "purple lipstick",],),
  //7116"],),

  new Traits( "male, accessories" ,[ "messy hair ", "regular shades",],),
  //7117"],),

  new Traits( "male, accessories" ,[ "cap forward ", "cigarette ", "earring",],),
  //7118"],),

  new Traits( "male, accessories" ,[ "eye patch ", "front beard ", "wild hair",],),
  //7119"],),

  new Traits( "male, accessories" ,[ "handlebars ", "peak spike ", "small shades",],),
  //7120"],),

  new Traits( "zombie, accessories" ,[ "frumpy hair ", "horned rim glasses",],),
  //7121"],),

  new Traits( "female, accessories" ,[ "cigarette ", "eye patch ", "headband ", "purple lipstick",],),
  //7122"],),

  new Traits( "female, accessories" ,[ "cigarette ", "knitted cap ", "silver chain",],),
  //7123"],),

  new Traits( "male, accessories" ,[ "cigarette ", "peak spike",],),
  //7124"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "purple lipstick ", "tassle hat",],),
  //7125"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "messy hair",],),
  //7126"],),

  new Traits( "zombie, accessories" ,[ "bandana ", "earring ", "eye mask",],),
  //7127"],),

  new Traits( "female, accessories" ,[ "cigarette ", "straight hair blonde",],),
  //7128"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "goat ", "hoodie",],),
  //7129"],),

  new Traits( "male, accessories" ,[ "frown ", "shaved head",],),
  //7130"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "cigarette ", "clown hair green ", "purple lipstick",],),
  //7131"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "earring ", "wild hair",],),
  //7132"],),

  new Traits( "female, accessories" ,[ "big shades ", "blonde bob",],),
  //7133"],),

  new Traits( "male, accessories" ,[ "cigarette ", "eye patch ", "goat ", "mohawk dark ", "smile",],),
  //7134"],),

  new Traits( "male, accessories" ,[ "cap forward ", "pipe",],),
  //7135"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "earring ", "hot lipstick",],),
  //7136"],),

  new Traits( "male, accessories" ,[ "classic shades ", "crazy hair ", "earring ", "mustache",],),
  //7137"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "purple lipstick ", "tiara",],),
  //7138"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "earring ", "shadow beard ", "wild hair",],),
  //7139"],),

  new Traits( "male, accessories" ,[ "messy hair ", "nerd glasses ", "normal beard black",],),
  //7140"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "half shaved ", "nerd glasses",],),
  //7141"],),

  new Traits( "female, accessories" ,[ "clown hair green ", "earring ", "mole",],),
  //7142"],),

  new Traits( "male, accessories" ,[ "cigarette ", "do-rag ", "earring ", "vr",],),
  //7143"],),

  new Traits( "male, accessories" ,[ "hoodie ", "vape",],),
  //7144"],),

  new Traits( "female, accessories" ,[ "tassle hat ", "vr",],),
  //7145"],),

  new Traits( "male, accessories" ,[ "cap ", "muttonchops ", "small shades",],),
  //7146"],),

  new Traits( "male, accessories" ,[ "mustache ", "shaved head",],),
  //7147"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "crazy hair ", "mustache",],),
  //7148"],),

  new Traits( "male, accessories" ,[ "big shades ", "cap",],),
  //7149"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "pipe",],),
  //7150"],),

  new Traits( "male, accessories" ,[ "big shades ", "muttonchops ", "stringy hair",],),
  //7151"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "regular shades ", "shadow beard",],),
  //7152"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "mole ", "regular shades ", "tassle hat",],),
  //7153"],),

  new Traits( "male, accessories" ,[ "earring ", "hoodie ", "regular shades ", "shadow beard",],),
  //7154"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "earring ", "messy hair",],),
  //7155"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "hoodie",],),
  //7156"],),

  new Traits( "male, accessories" ,[ "big shades ", "do-rag ", "earring",],),
  //7157"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "earring ", "luxurious beard ", "purple hair",],),
  //7158"],),

  new Traits( "male, accessories" ,[ "eye patch ", "headband ", "normal beard black",],),
  //7159"],),

  new Traits( "male, accessories" ,[ "messy hair ", "mustache",],),
  //7160"],),

  new Traits( "male, accessories" ,[ "cap ", "handlebars",],),
  //7161"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "hoodie ", "spots",],),
  //7162"],),

  new Traits( "male, accessories" ,[ "big beard ", "fedora ", "horned rim glasses ", "vape",],),
  //7163"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora",],),
  //7164"],),

  new Traits( "female, accessories" ,[ "nerd glasses ", "stringy hair",],),
  //7165"],),

  new Traits( "male, accessories" ,[ "peak spike ", "smile",],),
  //7166"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "earring ", "shadow beard ", "shaved head",],),
  //7167"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cap forward ", "front beard",],),
  //7168"],),

  new Traits( "female, accessories" ,[ "mole ", "straight hair blonde",],),
  //7169"],),

  new Traits( "female, accessories" ,[ "bandana ", "hot lipstick ", "regular shades ", "vape",],),
  //7170"],),

  new Traits( "male, accessories" ,[ "handlebars ", "hoodie ", "pipe",],),
  //7171"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "mohawk dark",],),
  //7172"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "mohawk ", "vape",],),
  //7173"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "cigarette ", "pigtails",],),
  //7174"],),

  new Traits( "male, accessories" ,[ "big shades ", "clown nose ", "mohawk thin",],),
  //7175"],),

  new Traits( "female, accessories" ,[ "big shades ", "black lipstick ", "tassle hat",],),
  //7176"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "silver chain ", "wild hair",],),
  //7177"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "earring ", "mohawk thin",],),
  //7178"],),

  new Traits( "male, accessories" ,[ "earring ", "messy hair ", "shadow beard",],),
  //7179"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "earring ", "eye mask",],),
  //7180"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "regular shades ", "stringy hair",],),
  //7181"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "gold chain ", "horned rim glasses ", "mole",],),
  //7182"],),

  new Traits( "female, accessories" ,[ "cigarette ", "knitted cap ", "purple lipstick ", "vr",],),
  //7183"],),

  new Traits( "male, accessories" ,[ "front beard ", "headband ", "small shades",],),
  //7184"],),

  new Traits( "male, accessories" ,[ "earring ", "police cap ", "rosy cheeks ", "shadow beard",],),
  //7185"],),

  new Traits( "male, accessories" ,[ "cap ", "mole ", "shadow beard",],),
  //7186"],),

  new Traits( "male, accessories" ,[ "cap ", "chinstrap ", "earring ", "horned rim glasses",],),
  //7187"],),

  new Traits( "male, accessories" ,[ "eye mask ", "goat ", "peak spike",],),
  //7188"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "do-rag ", "earring ", "normal beard black",],),
  //7189"],),

  new Traits( "male, accessories" ,[ "bandana ", "eye patch ", "mole ", "smile",],),
  //7190"],),

  new Traits( "ape, accessories" ,[ "knitted cap ", "nerd glasses",],),
  //7191"],),

  new Traits( "male, accessories" ,[ "bandana ", "normal beard black",],),
  //7192"],),

  new Traits( "male, accessories" ,[ "cap ", "clown eyes green",],),
  //7193"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "wild hair",],),
  //7194"],),

  new Traits( "male, accessories" ,[ "clown nose ", "earring ", "peak spike",],),
  //7195"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "cigarette ", "green eye shadow",],),
  //7196"],),

  new Traits( "male, accessories" ,[ "earring ", "gold chain ", "mohawk thin ", "vr",],),
  //7197"],),

  new Traits( "male, accessories" ,[ "classic shades ", "medical mask ", "smile ", "vampire hair",],),
  //7198"],),

  new Traits( "male, accessories" ,[ "medical mask ", "police cap",],),
  //7199"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mole ", "wild hair",],),
  //7200"],),

  new Traits( "male, accessories" ,[ "cigarette ", "normal beard black ", "police cap ", "smile",],),
  //7201"],),

  new Traits( "male, accessories" ,[ "mohawk ", "normal beard black",],),
  //7202"],),

  new Traits( "male, accessories" ,[ "classic shades ", "cowboy hat ", "earring",],),
  //7203"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "frumpy hair ", "purple lipstick",],),
  //7204"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "front beard ", "horned rim glasses",],),
  //7205"],),

  new Traits( "male, accessories" ,[ "fedora ", "spots",],),
  //7206"],),

  new Traits( "male, accessories" ,[ "bandana ", "chinstrap ", "earring",],),
  //7207"],),

  new Traits( "male, accessories" ,[ "big beard ", "mole ", "stringy hair",],),
  //7208"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "crazy hair",],),
  //7209"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "mole ", "nerd glasses",],),
  //7210"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "clown nose ", "earring ", "straight hair blonde",],),
  //7211"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "medical mask ", "mohawk thin ", "purple lipstick",],),
  //7212"],),

  new Traits( "male, accessories" ,[ "big shades ", "hoodie ", "normal beard",],),
  //7213"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "messy hair",],),
  //7214"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora ", "shadow beard",],),
  //7215"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "hot lipstick ", "wild white hair",],),
  //7216"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "hoodie ", "mustache",],),
  //7217"],),

  new Traits( "female, accessories" ,[ "bandana ", "cigarette ", "mole",],),
  //7218"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "choker ", "earring ", "half shaved",],),
  //7219"],),

  new Traits( "male, accessories" ,[ "big beard ", "do-rag",],),
  //7220"],),

  new Traits( "male, accessories" ,[ "big beard ", "do-rag ", "horned rim glasses",],),
  //7221"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "nerd glasses",],),
  //7222"],),

  new Traits( "male, accessories" ,[ "earring ", "small shades ", "top hat",],),
  //7223"],),

  new Traits( "male, accessories" ,[ "mohawk ", "smile ", "vape",],),
  //7224"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "nerd glasses",],),
  //7225"],),

  new Traits( "male, accessories" ,[ "big shades ", "clown nose ", "front beard dark ", "knitted cap",],),
  //7226"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "police cap",],),
  //7227"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown nose ", "frumpy hair",],),
  //7228"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "purple eye shadow ", "wild white hair",],),
  //7229"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "eye mask ", "mohawk dark",],),
  //7230"],),

  new Traits( "male, accessories" ,[ "classic shades ", "crazy hair ", "mole",],),
  //7231"],),

  new Traits( "male, accessories" ,[ "headband ", "muttonchops",],),
  //7232"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "muttonchops",],),
  //7233"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "half shaved ", "mole",],),
  //7234"],),

  new Traits( "male, accessories" ,[ "mustache",],),
  //7235"],),

  new Traits( "male, accessories" ,[ "earring ", "gold chain ", "normal beard black ", "police cap",],),
  //7236"],),

  new Traits( "female, accessories" ,[ "cigarette ", "green eye shadow ", "mohawk dark ", "mole ", "purple lipstick",],),
  //7237"],),

  new Traits( "male, accessories" ,[ "mohawk ", "mole ", "shadow beard",],),
  //7238"],),

  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "luxurious beard ", "wild hair",],),
  //7239"],),

  new Traits( "male, accessories" ,[ "cigarette ", "shadow beard ", "vampire hair",],),
  //7240"],),

  new Traits( "male, accessories" ,[ "cigarette ", "shaved head",],),
  //7241"],),

  new Traits( "male, accessories" ,[ "do-rag ", "frown ", "nerd glasses",],),
  //7242"],),

  new Traits( "male, accessories" ,[ "eye mask ", "hoodie",],),
  //7243"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "pigtails ", "pipe",],),
  //7244"],),

  new Traits( "male, accessories" ,[ "earring ", "messy hair ", "regular shades ", "shadow beard",],),
  //7245"],),

  new Traits( "male, accessories" ,[ "bandana ", "mustache",],),
  //7246"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "earring ", "mohawk thin",],),
  //7247"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "black lipstick ", "wild hair",],),
  //7248"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "cigarette ", "cowboy hat ", "small shades",],),
  //7249"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "hot lipstick ", "red mohawk",],),
  //7250"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "shaved head",],),
  //7251"],),

  new Traits( "zombie, accessories" ,[ "chinstrap ", "crazy hair ", "earring",],),
  //7252"],),

  new Traits( "male, accessories" ,[ "bandana ", "frown",],),
  //7253"],),

  new Traits( "male, accessories" ,[ "small shades ", "stringy hair",],),
  //7254"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "nerd glasses",],),
  //7255"],),

  new Traits( "male, accessories" ,[ "bandana ", "chinstrap ", "nerd glasses",],),
  //7256"],),

  new Traits( "male, accessories" ,[ "earring ", "goat ", "messy hair ", "pipe ", "silver chain",],),
  //7257"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "wild white hair",],),
  //7258"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "knitted cap",],),
  //7259"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "wild white hair",],),
  //7260"],),

  new Traits( "male, accessories" ,[ "beanie ", "earring ", "normal beard",],),
  //7261"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "police cap",],),
  //7262"],),

  new Traits( "male, accessories" ,[ "fedora ", "horned rim glasses",],),
  //7263"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "headband",],),
  //7264"],),

  new Traits( "male, accessories" ,[ "front beard ", "frumpy hair ", "small shades",],),
  //7265"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "stringy hair",],),
  //7266"],),

  new Traits( "male, accessories" ,[ "big shades ", "cap ", "vape",],),
  //7267"],),

  new Traits( "male, accessories" ,[ "front beard ", "frumpy hair ", "regular shades",],),
  //7268"],),

  new Traits( "female, accessories" ,[ "classic shades ", "purple lipstick ", "wild blonde",],),
  //7269"],),

  new Traits( "male, accessories" ,[ "eye patch ", "front beard ", "frown ", "knitted cap",],),
  //7270"],),

  new Traits( "male, accessories" ,[ "bandana ", "chinstrap ", "earring ", "horned rim glasses",],),
  //7271"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "hot lipstick ", "wild blonde",],),
  //7272"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cap ", "smile",],),
  //7273"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "horned rim glasses",],),
  //7274"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "purple hair",],),
  //7275"],),

  new Traits( "male, accessories" ,[ "messy hair ", "mole",],),
  //7276"],),

  new Traits( "male, accessories" ,[ "cigarette ", "do-rag ", "regular shades ", "smile",],),
  //7277"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "crazy hair ", "handlebars",],),
  //7278"],),

  new Traits( "male, accessories" ,[ "cap forward ", "eye patch",],),
  //7279"],),

  new Traits( "male, accessories" ,[ "classic shades ", "headband ", "luxurious beard",],),
  //7280"],),

  new Traits( "male, accessories" ,[ "cigarette ", "clown eyes blue ", "mohawk thin",],),
  //7281"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "wild hair",],),
  //7282"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "mohawk",],),
  //7283"],),

  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "mohawk ", "pipe",],),
  //7284"],),

  new Traits( "male, accessories" ,[ "police cap ", "regular shades",],),
  //7285"],),

  new Traits( "male, accessories" ,[ "mole ", "regular shades ", "vampire hair",],),
  //7286"],),

  new Traits( "male, accessories" ,[ "clown nose ", "wild hair",],),
  //7287"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "wild white hair",],),
  //7288"],),

  new Traits( "female, accessories" ,[ "eye mask ", "straight hair",],),
  //7289"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "horned rim glasses ", "mohawk",],),
  //7290"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "earring ", "green eye shadow ", "mohawk thin",],),
  //7291"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blonde short ", "earring",],),
  //7292"],),

  new Traits( "male, accessories" ,[ "classic shades ", "fedora ", "mole",],),
  //7293"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "nerd glasses ", "purple hair",],),
  //7294"],),

  new Traits( "female, accessories" ,[ "cigarette ", "clown eyes blue ", "mole ", "purple lipstick ", "red mohawk",],),
  //7295"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "horned rim glasses ", "straight hair",],),
  //7296"],),

  new Traits( "male, accessories" ,[ "mohawk ", "rosy cheeks",],),
  //7297"],),

  new Traits( "male, accessories" ,[ "bandana ", "regular shades ", "rosy cheeks",],),
  //7298"],),

  new Traits( "female, accessories" ,[ "bandana ", "pipe ", "purple lipstick",],),
  //7299"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "headband",],),
  //7300"],),

  new Traits( "female, accessories" ,[ "earring ", "purple eye shadow ", "purple lipstick ", "tassle hat",],),
  //7301"],),

  new Traits( "male, accessories" ,[ "cigarette ", "handlebars ", "horned rim glasses ", "peak spike",],),
  //7302"],),

  new Traits( "male, accessories" ,[ "cigarette ", "normal beard black ", "peak spike",],),
  //7303"],),

  new Traits( "female, accessories" ,[ "bandana ", "clown eyes blue ", "mole ", "purple lipstick",],),
  //7304"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "knitted cap",],),
  //7305"],),

  new Traits( "female, accessories" ,[ "cigarette ", "half shaved",],),
  //7306"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "shadow beard ", "wild hair",],),
  //7307"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "headband",],),
  //7308"],),

  new Traits( "male, accessories" ,[ "earring ", "mole ", "wild hair",],),
  //7309"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "front beard",],),
  //7310"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "purple lipstick ", "tassle hat",],),
  //7311"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "mohawk",],),
  //7312"],),

  new Traits( "male, accessories" ,[ "muttonchops ", "stringy hair",],),
  //7313"],),

  new Traits( "male, accessories" ,[ "big shades ", "crazy hair ", "frown ", "muttonchops",],),
  //7314"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "horned rim glasses",],),
  //7315"],),

  new Traits( "male, accessories" ,[ "big beard ", "earring ", "mohawk thin",],),
  //7316"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "shaved head",],),
  //7317"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora ", "front beard dark",],),
  //7318"],),

  new Traits( "male, accessories" ,[ "headband ", "normal beard black",],),
  //7319"],),

  new Traits( "male, accessories" ,[ "cap forward ", "cigarette ", "horned rim glasses",],),
  //7320"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk ", "normal beard",],),
  //7321"],),

  new Traits( "female, accessories" ,[ "nerd glasses ", "straight hair blonde",],),
  //7322"],),

  new Traits( "male, accessories" ,[ "goat ", "headband",],),
  //7323"],),

  new Traits( "male, accessories" ,[ "cap forward ", "cigarette ", "handlebars",],),
  //7324"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "nerd glasses ", "straight hair dark",],),
  //7325"],),

  new Traits( "female, accessories" ,[ "dark hair ", "earring ", "green eye shadow ", "mole",],),
  //7326"],),

  new Traits( "female, accessories" ,[ "cap ", "green eye shadow",],),
  //7327"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mustache ", "purple hair",],),
  //7328"],),

  new Traits( "male, accessories" ,[ "normal beard black ", "stringy hair",],),
  //7329"],),

  new Traits( "male, accessories" ,[ "big shades ", "front beard dark ", "knitted cap",],),
  //7330"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "gold chain ", "knitted cap ", "luxurious beard",],),
  //7331"],),

  new Traits( "male, accessories" ,[ "classic shades ", "front beard ", "knitted cap ", "smile",],),
  //7332"],),

  new Traits( "female, accessories" ,[ "cigarette ", "clown eyes blue ", "messy hair",],),
  //7333"],),

  new Traits( "male, accessories" ,[ "bandana ", "big shades ", "cigarette ", "earring ", "shadow beard",],),
  //7334"],),

  new Traits( "male, accessories" ,[ "eye patch ", "knitted cap ", "smile",],),
  //7335"],),

  new Traits( "female, accessories" ,[ "blonde short ", "classic shades ", "earring",],),
  //7336"],),

  new Traits( "zombie, accessories" ,[ "normal beard black ", "peak spike",],),
  //7337"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "pilot helmet",],),
  //7338"],),

  new Traits( "male, accessories" ,[ "cap ", "clown eyes green ", "earring ", "goat",],),
  //7339"],),

  new Traits( "male, accessories" ,[ "mohawk ", "normal beard ", "silver chain",],),
  //7340"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "front beard ", "vampire hair",],),
  //7341"],),

  new Traits( "female, accessories" ,[ "choker ", "dark hair ", "green eye shadow",],),
  //7342"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "straight hair blonde",],),
  //7343"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk ", "nerd glasses",],),
  //7344"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "peak spike",],),
  //7345"],),

  new Traits( "male, accessories" ,[ "bandana ", "cigarette ", "regular shades",],),
  //7346"],),

  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "mohawk thin",],),
  //7347"],),

  new Traits( "female, accessories" ,[ "earring ", "half shaved ", "purple lipstick ", "vape",],),
  //7348"],),

  new Traits( "male, accessories" ,[ "front beard ", "messy hair",],),
  //7349"],),

  new Traits( "male, accessories" ,[ "bandana ", "clown nose",],),
  //7350"],),

  new Traits( "male, accessories" ,[ "fedora ", "front beard dark",],),
  //7351"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "red mohawk ", "welding goggles",],),
  //7352"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "mustache ", "stringy hair",],),
  //7353"],),

  new Traits( "female, accessories" ,[ "clown nose ", "earring ", "straight hair",],),
  //7354"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "mole",],),
  //7355"],),

  new Traits( "male, accessories" ,[ "eye patch ", "top hat",],),
  //7356"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cigarette ", "wild hair",],),
  //7357"],),

  new Traits( "male, accessories" ,[ "eye mask ", "mohawk",],),
  //7358"],),

  new Traits( "male, accessories" ,[ "classic shades ", "crazy hair",],),
  //7359"],),

  new Traits( "male, accessories" ,[ "classic shades ", "hoodie ", "muttonchops",],),
  //7360"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "mustache ", "pipe",],),
  //7361"],),

  new Traits( "female, accessories" ,[ "classic shades ", "dark hair",],),
  //7362"],),

  new Traits( "male, accessories" ,[ "cap forward ", "chinstrap ", "cigarette ", "earring ", "horned rim glasses",],),
  //7363"],),

  new Traits( "male, accessories" ,[ "big beard ", "shaved head ", "vape",],),
  //7364"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "earring ", "nerd glasses",],),
  //7365"],),

  new Traits( "female, accessories" ,[ "cigarette ", "clown eyes blue ", "straight hair blonde",],),
  //7366"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "purple eye shadow ", "wild blonde",],),
  //7367"],),

  new Traits( "male, accessories" ,[ "fedora ", "front beard dark ", "frown ", "nerd glasses",],),
  //7368"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "dark hair",],),
  //7369"],),

  new Traits( "male, accessories" ,[ "eye mask ", "headband ", "vape",],),
  //7370"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "red mohawk",],),
  //7371"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "earring ", "front beard dark ", "headband",],),
  //7372"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "crazy hair",],),
  //7373"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "earring ", "normal beard",],),
  //7374"],),

  new Traits( "male, accessories" ,[ "eye mask ", "frumpy hair ", "muttonchops",],),
  //7375"],),

  new Traits( "male, accessories" ,[ "fedora ", "shadow beard",],),
  //7376"],),

  new Traits( "male, accessories" ,[ "do-rag ", "eye patch ", "muttonchops",],),
  //7377"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "regular shades ", "wild white hair",],),
  //7378"],),

  new Traits( "male, accessories" ,[ "earring ", "luxurious beard ", "small shades",],),
  //7379"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "straight hair dark",],),
  //7380"],),

  new Traits( "male, accessories" ,[ "pipe ", "wild hair",],),
  //7381"],),

  new Traits( "male, accessories" ,[ "cap ", "small shades",],),
  //7382"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring",],),
  //7383"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "luxurious beard ", "shaved head",],),
  //7384"],),

  new Traits( "male, accessories" ,[ "big shades ", "shadow beard ", "shaved head",],),
  //7385"],),

  new Traits( "male, accessories" ,[ "normal beard black ", "small shades ", "wild hair",],),
  //7386"],),

  new Traits( "female, accessories" ,[ "knitted cap ", "purple lipstick ", "regular shades",],),
  //7387"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "shadow beard ", "small shades",],),
  //7388"],),

  new Traits( "male, accessories" ,[ "big shades ", "messy hair",],),
  //7389"],),

  new Traits( "female, accessories" ,[ "earring ", "horned rim glasses ", "mohawk thin",],),
  //7390"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring",],),
  //7391"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "stringy hair",],),
  //7392"],),

  new Traits( "male, accessories" ,[ "earring ", "messy hair ", "shadow beard ", "vr",],),
  //7393"],),

  new Traits( "female, accessories" ,[ "bandana ", "green eye shadow ", "hot lipstick",],),
  //7394"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "clown hair green ", "earring",],),
  //7395"],),

  new Traits( "male, accessories" ,[ "big beard ", "clown nose",],),
  //7396"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "pink with hat ", "purple eye shadow",],),
  //7397"],),

  new Traits( "female, accessories" ,[ "clown hair green ", "hot lipstick ", "spots",],),
  //7398"],),

  new Traits( "male, accessories" ,[ "cigarette ", "headband ", "regular shades ", "shadow beard",],),
  //7399"],),

  new Traits( "male, accessories" ,[ "cap forward ", "nerd glasses",],),
  //7400"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "frown",],),
  //7401"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mohawk dark",],),
  //7402"],),

  new Traits( "male, accessories" ,[ "hoodie ", "vape, "vr",],),
  //7403"],),

  new Traits( "male, accessories" ,[ "cap forward ", "goat",],),
  //7404"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "pipe ", "shadow beard",],),
  //7405"],),

  new Traits( "male, accessories" ,[ "earring ", "goat ", "headband ", "nerd glasses",],),
  //7406"],),

  new Traits( "male, accessories" ,[ "beanie ", "classic shades",],),
  //7407"],),

  new Traits( "male, accessories" ,[ "classic shades ", "headband",],),
  //7408"],),

  new Traits( "male, accessories" ,[ "cap forward ", "eye patch",],),
  //7409"],),

  new Traits( "male, accessories" ,[ "cap ", "small shades ", "smile",],),
  //7410"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes blue ", "mohawk",],),
  //7411"],),

  new Traits( "female, accessories" ,[ "gold chain ", "straight hair",],),
  //7412"],),

  new Traits( "female, accessories" ,[ "purple eye shadow ", "straight hair blonde",],),
  //7413"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "clown nose ", "mohawk ", "vape",],),
  //7414"],),

  new Traits( "female, accessories" ,[ "dark hair ", "earring ", "green eye shadow ", "medical mask",],),
  //7415"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mustache ", "stringy hair",],),
  //7416"],),

  new Traits( "male, accessories" ,[ "goat ", "hoodie ", "vr",],),
  //7417"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "handlebars ", "vampire hair",],),
  //7418"],),

  new Traits( "female, accessories" ,[ "earring ", "purple eye shadow ", "red mohawk",],),
  //7419"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "purple lipstick ", "rosy cheeks ", "tassle hat",],),
  //7420"],),

  new Traits( "female, accessories" ,[ "cigarette ", "mole ", "straight hair",],),
  //7421"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "purple lipstick ", "straight hair blonde",],),
  //7422"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "peak spike",],),
  //7423"],),

  new Traits( "male, accessories" ,[ "do-rag ", "frown ", "small shades",],),
  //7424"],),

  new Traits( "male, accessories" ,[ "cap ", "regular shades ", "smile",],),
  //7425"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "pigtails ", "pipe",],),
  //7426"],),

  new Traits( "male, accessories" ,[ "goat ", "headband",],),
  //7427"],),

  new Traits( "male, accessories" ,[ "cigarette ", "messy hair ", "normal beard black",],),
  //7428"],),

  new Traits( "female, accessories" ,[ "bandana ", "blue eye shadow ", "purple lipstick",],),
  //7429"],),

  new Traits( "male, accessories" ,[ "do-rag ", "normal beard ", "vr",],),
  //7430"],),

  new Traits( "male, accessories" ,[ "bandana ", "mole ", "smile",],),
  //7431"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "earring ", "tassle hat",],),
  //7432"],),

  new Traits( "male, accessories" ,[ "classic shades ", "cowboy hat ", "earring",],),
  //7433"],),

  new Traits( "male, accessories" ,[ "cap ", "gold chain",],),
  //7434"],),

  new Traits( "male, accessories" ,[ "frown ", "headband ", "shadow beard",],),
  //7435"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "frumpy hair ", "luxurious beard",],),
  //7436"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "vape",],),
  //7437"],),

  new Traits( "male, accessories" ,[ "front beard ", "headband",],),
  //7438"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "wild white hair",],),
  //7439"],),

  new Traits( "male, accessories" ,[ "frown ", "knitted cap ", "shadow beard",],),
  //7440"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "headband",],),
  //7441"],),

  new Traits( "male, accessories" ,[ "frown ", "horned rim glasses ", "knitted cap",],),
  //7442"],),

  new Traits( "male, accessories" ,[ "bandana ", "big shades ", "clown nose",],),
  //7443"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "mohawk ", "small shades",],),
  //7444"],),

  new Traits( "female, accessories" ,[ "cigarette ", "hot lipstick ", "wild blonde",],),
  //7445"],),

  new Traits( "male, accessories" ,[ "eye patch ", "wild hair",],),
  //7446"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "green eye shadow",],),
  //7447"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "crazy hair",],),
  //7448"],),

  new Traits( "male, accessories" ,[ "cigarette ", "do-rag ", "front beard dark ", "small shades",],),
  //7449"],),

  new Traits( "female, accessories" ,[ "cigarette ", "gold chain ", "mohawk ", "purple lipstick",],),
  //7450"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "vr",],),
  //7451"],),

  new Traits( "male, accessories" ,[ "messy hair ", "normal beard black",],),
  //7452"],),

  new Traits( "male, accessories" ,[ "cap ", "luxurious beard ", "vr",],),
  //7453"],),

  new Traits( "male, accessories" ,[ "front beard ", "shaved head",],),
  //7454"],),

  new Traits( "female, accessories" ,[ "headband ", "pipe",],),
  //7455"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "green eye shadow ", "straight hair dark",],),
  //7456"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blonde bob ", "welding goggles",],),
  //7457"],),

  new Traits( "zombie, accessories" ,[ "knitted cap ", "regular shades ", "shadow beard",],),
  //7458"],),

  new Traits( "female, accessories" ,[ "cap ", "earring ", "purple eye shadow",],),
  //7459"],),

  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "mohawk",],),
  //7460"],),

  new Traits( "male, accessories" ,[ "handlebars ", "medical mask ", "wild hair",],),
  //7461"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "eye mask ", "mohawk dark",],),
  //7462"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "headband",],),
  //7463"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "headband ", "hot lipstick",],),
  //7464"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "straight hair blonde",],),
  //7465"],),

  new Traits( "male, accessories" ,[ "messy hair ", "regular shades ", "shadow beard",],),
  //7466"],),

  new Traits( "male, accessories" ,[ "cap forward ", "cigarette ", "front beard",],),
  //7467"],),

  new Traits( "male, accessories" ,[ "big shades ", "cap forward ", "normal beard black",],),
  //7468"],),

  new Traits( "female, accessories" ,[ "earring ", "nerd glasses ", "tassle hat",],),
  //7469"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "earring ", "vampire hair",],),
  //7470"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "eye patch ", "mole",],),
  //7471"],),

  new Traits( "male, accessories" ,[ "big shades ", "mohawk thin ", "normal beard",],),
  //7472"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "gold chain ", "hot lipstick ", "straight hair dark",],),
  //7473"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "headband",],),
  //7474"],),

  new Traits( "female, accessories" ,[ "medical mask ", "mohawk thin",],),
  //7475"],),

  new Traits( "male, accessories" ,[ "medical mask ", "mohawk dark",],),
  //7476"],),

  new Traits( "male, accessories" ,[ "big shades ", "knitted cap ", "smile",],),
  //7477"],),

  new Traits( "male, accessories" ,[ "earring ", "shadow beard ", "vampire hair",],),
  //7478"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "bandana ", "normal beard black",],),
  //7479"],),

  new Traits( "male, accessories" ,[ "classic shades ", "medical mask ", "peak spike",],),
  //7480"],),

  new Traits( "male, accessories" ,[ "front beard ", "small shades ", "wild hair",],),
  //7481"],),

  new Traits( "female, accessories" ,[ "blonde short ", "green eye shadow",],),
  //7482"],),

  new Traits( "male, accessories" ,[ "earring ", "messy hair ", "nerd glasses ", "pipe",],),
  //7483"],),

  new Traits( "female, accessories" ,[ "dark hair ", "hot lipstick ", "rosy cheeks",],),
  //7484"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "gold chain ", "shadow beard",],),
  //7485"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "mohawk ", "mole",],),
  //7486"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "knitted cap ", "shadow beard",],),
  //7487"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "crazy hair ", "shadow beard",],),
  //7488"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "messy hair ", "muttonchops",],),
  //7489"],),

  new Traits( "male, accessories" ,[ "big shades ", "mole ", "shaved head ", "vape",],),
  //7490"],),

  new Traits( "male, accessories" ,[ "classic shades ", "headband ", "mustache",],),
  //7491"],),

  new Traits( "male, accessories" ,[ "front beard ", "knitted cap",],),
  //7492"],),

  new Traits( "female, accessories" ,[ "bandana ", "mole ", "purple eye shadow",],),
  //7493"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "wild hair",],),
  //7494"],),

  new Traits( "female, accessories" ,[ "cigarette ", "purple lipstick ", "straight hair",],),
  //7495"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "earring ", "frumpy hair ", "luxurious beard ", "rosy cheeks",],),
  //7496"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "wild hair",],),
  //7497"],),

  new Traits( "female, accessories" ,[ "eye mask ", "wild hair",],),
  //7498"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "frumpy hair",],),
  //7499"],),

  new Traits( "female, accessories" ,[ "earring ", "eye mask ", "hot lipstick ", "mohawk dark",],),
  //7500"],),

  new Traits( "male, accessories" ,[ "cigarette ", "hoodie ", "normal beard",],),
  //7501"],),

  new Traits( "female, accessories" ,[ "bandana ", "clown eyes blue ", "earring",],),
  //7502"],),

  new Traits( "female, accessories" ,[ "blonde short ", "spots",],),
  //7503"],),

  new Traits( "male, accessories" ,[ "cap forward ", "vr",],),
  //7504"],),

  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "eye patch ", "mustache",],),
  //7505"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "mohawk",],),
  //7506"],),

  new Traits( "male, accessories" ,[ "clown nose ", "messy hair ", "normal beard black",],),
  //7507"],),

  new Traits( "male, accessories" ,[ "earring ", "vr ", "wild hair",],),
  //7508"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "half shaved",],),
  //7509"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "mohawk ", "smile",],),
  //7510"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "frumpy hair ", "mole",],),
  //7511"],),

  new Traits( "female, accessories" ,[ "mohawk thin ", "nerd glasses",],),
  //7512"],),

  new Traits( "male, accessories" ,[ "big shades ", "front beard ", "mohawk thin",],),
  //7513"],),

  new Traits( "male, accessories" ,[ "big beard ", "cigarette ", "stringy hair",],),
  //7514"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "cigarette ", "purple eye shadow",],),
  //7515"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "fedora ", "front beard dark",],),
  //7516"],),

  new Traits( "male, accessories" ,[ "cap forward ", "cigarette ", "shadow beard",],),
  //7517"],),

  new Traits( "male, accessories" ,[ "classic shades ", "peak spike",],),
  //7518"],),

  new Traits( "male, accessories" ,[ "medical mask ", "shadow beard ", "top hat",],),
  //7519"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "green eye shadow ", "purple lipstick",],),
  //7520"],),

  new Traits( "female, accessories" ,[ "mole ", "straight hair dark",],),
  //7521"],),

  new Traits( "female, accessories" ,[ "stringy hair ", "vape",],),
  //7522"],),

  new Traits( "alien ", accessories" ,[ "earring ", "knitted cap ", "medical mask",],),
  //7523"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard ", "wild hair",],),
  //7524"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "vampire hair",],),
  //7525"],),

  new Traits( "male, accessories" ,[ "muttonchops ", "nerd glasses ", "purple hair",],),
  //7526"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "peak spike",],),
  //7527"],),

  new Traits( "female, accessories" ,[ "clown nose ", "earring ", "straight hair dark",],),
  //7528"],),

  new Traits( "male, accessories" ,[ "cap ", "clown eyes green ", "muttonchops",],),
  //7529"],),

  new Traits( "female, accessories" ,[ "gold chain ", "knitted cap ", "purple eye shadow",],),
  //7530"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "front beard dark ", "regular shades",],),
  //7531"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk ", "pipe",],),
  //7532"],),

  new Traits( "male, accessories" ,[ "cap ", "eye patch",],),
  //7533"],),

  new Traits( "female, accessories" ,[ "big shades ", "crazy hair",],),
  //7534"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "tiara",],),
  //7535"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "luxurious beard ", "mole",],),
  //7536"],),

  new Traits( "male, accessories" ,[ "front beard ", "horned rim glasses ", "shaved head",],),
  //7537"],),

  new Traits( "male, accessories" ,[ "earring ", "shadow beard ", "small shades ", "stringy hair",],),
  //7538"],),

  new Traits( "male, accessories" ,[ "normal beard ", "peak spike ", "rosy cheeks",],),
  //7539"],),

  new Traits( "male, accessories" ,[ "classic shades ", "front beard dark ", "messy hair",],),
  //7540"],),

  new Traits( "male, accessories" ,[ "big shades ", "headband ", "shadow beard",],),
  //7541"],),

  new Traits( "male, accessories" ,[ "horned rim glasses",],),
  //7542"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora ", "horned rim glasses ", "normal beard",],),
  //7543"],),

  new Traits( "male, accessories" ,[ "eye mask ", "messy hair",],),
  //7544"],),

  new Traits( "female, accessories" ,[ "mohawk ", "nerd glasses ", "purple lipstick",],),
  //7545"],),

  new Traits( "male, accessories" ,[ "cigarette ", "police cap ", "shadow beard",],),
  //7546"],),

  new Traits( "male, accessories" ,[ "earring ", "luxurious beard ", "police cap",],),
  //7547"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "knitted cap ", "normal beard black",],),
  //7548"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "frown",],),
  //7549"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "nerd glasses ", "police cap",],),
  //7550"],),

  new Traits( "male, accessories" ,[ "big shades ", "handlebars ", "mohawk thin",],),
  //7551"],),

  new Traits( "male, accessories" ,[ "big shades ", "mohawk",],),
  //7552"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "earring ", "red mohawk",],),
  //7553"],),

  new Traits( "male, accessories" ,[ "eye mask ", "shadow beard ", "shaved head",],),
  //7554"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "mole ", "red mohawk",],),
  //7555"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "mohawk thin",],),
  //7556"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "mole ", "purple lipstick ", "tiara",],),
  //7557"],),

  new Traits( "male, accessories" ,[ "cap forward ", "nerd glasses",],),
  //7558"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "nerd glasses",],),
  //7559"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "purple lipstick",],),
  //7560"],),

  new Traits( "male, accessories" ,[ "cap forward ", "normal beard black ", "small shades",],),
  //7561"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "cigarette ", "regular shades",],),
  //7562"],),

  new Traits( "female, accessories" ,[ "welding goggles ", "wild blonde",],),
  //7563"],),

  new Traits( "male, accessories" ,[ "rosy cheeks ", "shaved head",],),
  //7564"],),

  new Traits( "male, accessories" ,[ "bandana ", "cigarette ", "eye mask",],),
  //7565"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "shaved head",],),
  //7566"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "stringy hair",],),
  //7567"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "dark hair ", "hot lipstick",],),
  //7568"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "gold chain",],),
  //7569"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk ", "nerd glasses ", "normal beard black",],),
  //7570"],),

  new Traits( "male, accessories" ,[ "headband ", "rosy cheeks",],),
  //7571"],),

  new Traits( "male, accessories" ,[ "police cap ", "regular shades ", "shadow beard",],),
  //7572"],),

  new Traits( "male, accessories" ,[ "bandana ", "goat",],),
  //7573"],),

  new Traits( "male, accessories" ,[ "mohawk ", "vape",],),
  //7574"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "horned rim glasses",],),
  //7575"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora ", "horned rim glasses ", "mole",],),
  //7576"],),

  new Traits( "female, accessories" ,[ "classic shades ", "straight hair blonde",],),
  //7577"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "normal beard ", "rosy cheeks",],),
  //7578"],),

  new Traits( "male, accessories" ,[ "earring ", "shaved head ", "smile",],),
  //7579"],),

  new Traits( "female, accessories" ,[ "cap ", "purple lipstick",],),
  //7580"],),

  new Traits( "male, accessories" ,[ "bandana ", "eye mask",],),
  //7581"],),

  new Traits( "male, accessories" ,[ "muttonchops ", "police cap ", "vape",],),
  //7582"],),

  new Traits( "male, accessories" ,[ "mustache ", "small shades ", "stringy hair",],),
  //7583"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "frumpy hair",],),
  //7584"],),

  new Traits( "male, accessories" ,[ "big shades ", "cowboy hat ", "earring ", "normal beard black",],),
  //7585"],),

  new Traits( "female, accessories" ,[ "cigarette ", "classic shades ", "frumpy hair ", "purple lipstick",],),
  //7586"],),

  new Traits( "female, accessories" ,[ "earring ", "eye mask ", "tassle hat",],),
  //7587"],),

  new Traits( "male, accessories" ,[ "frown",],),
  //7588"],),

  new Traits( "female, accessories" ,[ "dark hair ", "horned rim glasses",],),
  //7589"],),

  new Traits( "female, accessories" ,[ "medical mask ", "mohawk",],),
  //7590"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk ", "smile",],),
  //7591"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "earring ", "muttonchops",],),
  //7592"],),

  new Traits( "female, accessories" ,[ "half shaved ", "hot lipstick ", "purple eye shadow",],),
  //7593"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "mohawk thin",],),
  //7594"],),

  new Traits( "male, accessories" ,[ "eye patch ", "frumpy hair ", "luxurious beard",],),
  //7595"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "clown hair green",],),
  //7596"],),

  new Traits( "male, accessories" ,[ "cap ", "muttonchops ", "nerd glasses",],),
  //7597"],),

  new Traits( "male, accessories" ,[ "bandana ", "horned rim glasses",],),
  //7598"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "wild hair",],),
  //7599"],),

  new Traits( "male, accessories" ,[ "frown ", "purple hair ", "regular shades",],),
  //7600"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "tiara",],),
  //7601"],),

  new Traits( "male, accessories" ,[ "frown ", "luxurious beard ", "peak spike ", "rosy cheeks ", "vape",],),
  //7602"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "crazy hair",],),
  //7603"],),

  new Traits( "female, accessories" ,[ "messy hair ", "purple lipstick",],),
  //7604"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "fedora",],),
  //7605"],),

  new Traits( "female, accessories" ,[ "classic shades ", "pipe ", "purple lipstick ", "wild blonde",],),
  //7606"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "knitted cap",],),
  //7607"],),

  new Traits( "male, accessories" ,[ "front beard ", "mohawk dark",],),
  //7608"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "knitted cap",],),
  //7609"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "hot lipstick ", "mohawk",],),
  //7610"],),

  new Traits( "male, accessories" ,[ "big beard ", "cigarette ", "mohawk",],),
  //7611"],),

  new Traits( "male, accessories" ,[ "earring ", "vampire hair",],),
  //7612"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "goat ", "purple hair",],),
  //7613"],),

  new Traits( "male, accessories" ,[ "handlebars ", "horned rim glasses ", "mohawk dark",],),
  //7614"],),

  new Traits( "female, accessories" ,[ "eye mask ", "straight hair",],),
  //7615"],),

  new Traits( "male, accessories" ,[ "cap forward ", "eye mask",],),
  //7616"],),

  new Traits( "female, accessories" ,[ "classic shades ", "crazy hair",],),
  //7617"],),

  new Traits( "male, accessories" ,[ "earring ", "luxurious beard ", "spots ", "vape", "wild hair",],),
  //7618"],),

  new Traits( "male, accessories" ,[ "eye patch ", "frumpy hair",],),
  //7619"],),

  new Traits( "male, accessories" ,[ "cap ", "vape, "vr",],),
  //7620"],),

  new Traits( "male, accessories" ,[ "big shades ", "frumpy hair ", "luxurious beard",],),
  //7621"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "dark hair ", "green eye shadow ", "spots",],),
  //7622"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "earring ", "mohawk dark ", "nerd glasses",],),
  //7623"],),

  new Traits( "male, accessories" ,[ "spots ", "vampire hair",],),
  //7624"],),

  new Traits( "male, accessories" ,[ "big shades ", "mohawk thin ", "mole ", "shadow beard",],),
  //7625"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk thin ", "purple eye shadow ", "vape",],),
  //7626"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "mohawk ", "shadow beard",],),
  //7627"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "messy hair ", "muttonchops",],),
  //7628"],),

  new Traits( "male, accessories" ,[ "earring ", "goat ", "regular shades ", "top hat",],),
  //7629"],),

  new Traits( "male, accessories" ,[ "mole ", "mustache ", "nerd glasses ", "top hat",],),
  //7630"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "purple lipstick ", "stringy hair",],),
  //7631"],),

  new Traits( "male, accessories" ,[ "big shades ", "crazy hair",],),
  //7632"],),

  new Traits( "male, accessories" ,[ "cap ", "clown eyes blue",],),
  //7633"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "fedora ", "front beard",],),
  //7634"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "mohawk",],),
  //7635"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "pipe",],),
  //7636"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "nerd glasses ", "wild white hair",],),
  //7637"],),

  new Traits( "male, accessories" ,[ "bandana ", "horned rim glasses ", "mustache",],),
  //7638"],),

  new Traits( "female, accessories" ,[ "bandana ", "black lipstick ", "green eye shadow",],),
  //7639"],),

  new Traits( "male, accessories" ,[ "peak spike ", "silver chain",],),
  //7640"],),

  new Traits( "male, accessories" ,[ "hoodie ", "normal beard",],),
  //7641"],),

  new Traits( "male, accessories" ,[ "messy hair ", "nerd glasses",],),
  //7642"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "straight hair dark ", "vr",],),
  //7643"],),

  new Traits( "male, accessories" ,[ "cap forward ", "chinstrap ", "nerd glasses",],),
  //7644"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "mole ", "purple lipstick ", "wild blonde",],),
  //7645"],),

  new Traits( "male, accessories" ,[ "classic shades ", "front beard ", "vampire hair",],),
  //7646"],),

  new Traits( "male, accessories" ,[ "clown nose ", "do-rag",],),
  //7647"],),

  new Traits( "female, accessories" ,[ "blonde short ", "cigarette ", "spots",],),
  //7648"],),

  new Traits( "female, accessories" ,[ "earring ", "pigtails ", "purple eye shadow ", "purple lipstick",],),
  //7649"],),

  new Traits( "female, accessories" ,[ "cigarette ", "mohawk thin",],),
  //7650"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "nerd glasses ", "normal beard black",],),
  //7651"],),

  new Traits( "female, accessories" ,[ "big shades ", "straight hair blonde",],),
  //7652"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "vampire hair",],),
  //7653"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "pigtails ", "purple lipstick",],),
  //7654"],),

  new Traits( "male, accessories" ,[ "mole ", "small shades ", "wild hair",],),
  //7655"],),

  new Traits( "male, accessories" ,[ "beanie ", "handlebars",],),
  //7656"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "headband ", "nerd glasses",],),
  //7657"],),

  new Traits( "male, accessories" ,[ "earring ", "goat ", "headband ", "silver chain",],),
  //7658"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "pipe ", "tassle hat",],),
  //7659"],),

  new Traits( "zombie, accessories" ,[ "do-rag ", "smile",],),
  //7660"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "hot lipstick ", "mole ", "straight hair ", "vape",],),
  //7661"],),

  new Traits( "female, accessories" ,[ "bandana ", "purple lipstick",],),
  //7662"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "pink with hat ", "purple lipstick",],),
  //7663"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "green eye shadow ", "tassle hat",],),
  //7664"],),

  new Traits( "male, accessories" ,[ "earring ", "luxurious beard ", "small shades ", "top hat",],),
  //7665"],),

  new Traits( "male, accessories" ,[ "police cap ", "shadow beard ", "vr",],),
  //7666"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "mustache ", "smile",],),
  //7667"],),

  new Traits( "male, accessories" ,[ "do-rag ", "eye mask",],),
  //7668"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "gold chain",],),
  //7669"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk thin ", "welding goggles",],),
  //7670"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "medical mask ", "normal beard black ", "peak spike ", "rosy cheeks",],),
  //7671"],),

  new Traits( "male, accessories" ,[ "goat ", "regular shades ", "stringy hair",],),
  //7672"],),

  new Traits( "male, accessories" ,[ "earring ", "nerd glasses ", "shaved head",],),
  //7673"],),

  new Traits( "male, accessories" ,[ "hoodie ", "nerd glasses ", "normal beard ", "pipe",],),
  //7674"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "muttonchops",],),
  //7675"],),

  new Traits( "female, accessories" ,[ "clown eyes blue",],),
  //7676"],),

  new Traits( "male, accessories" ,[ "hoodie ", "medical mask",],),
  //7677"],),

  new Traits( "female, accessories" ,[ "mohawk ", "mole",],),
  //7678"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "classic shades ", "medical mask ", "police cap",],),
  //7679"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "normal beard ", "vr",],),
  //7680"],),

  new Traits( "male, accessories" ,[ "mohawk ", "nerd glasses",],),
  //7681"],),

  new Traits( "female, accessories" ,[ "cigarette ", "crazy hair ", "earring ", "hot lipstick",],),
  //7682"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "handlebars ", "medical mask",],),
  //7683"],),

  new Traits( "male, accessories" ,[ "headband ", "nerd glasses ", "shadow beard",],),
  //7684"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "handlebars ", "messy hair",],),
  //7685"],),

  new Traits( "male, accessories" ,[ "big shades ", "cowboy hat ", "luxurious beard",],),
  //7686"],),

  new Traits( "male, accessories" ,[ "cap forward ", "goat",],),
  //7687"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "muttonchops ", "smile",],),
  //7688"],),

  new Traits( "female, accessories" ,[ "cap ", "horned rim glasses ", "medical mask ", "purple lipstick",],),
  //7689"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "stringy hair",],),
  //7690"],),

  new Traits( "male, accessories" ,[ "normal beard ", "police cap ", "small shades",],),
  //7691"],),

  new Traits( "male, accessories" ,[ "eye patch ", "frown ", "headband ", "luxurious beard",],),
  //7692"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk ", "regular shades",],),
  //7693"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "nerd glasses ", "pigtails",],),
  //7694"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "blonde bob ", "medical mask",],),
  //7695"],),

  new Traits( "male, accessories" ,[ "bandana ", "muttonchops ", "nerd glasses",],),
  //7696"],),

  new Traits( "male, accessories" ,[ "cigarette ", "nerd glasses ", "normal beard black ", "purple hair",],),
  //7697"],),

  new Traits( "female, accessories" ,[ "earring ", "welding goggles ", "wild blonde",],),
  //7698"],),

  new Traits( "male, accessories" ,[ "classic shades ", "normal beard black ", "purple hair",],),
  //7699"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "nerd glasses ", "wild blonde",],),
  //7700"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "straight hair dark ", "vape",],),
  //7701"],),

  new Traits( "male, accessories" ,[ "eye patch ", "mohawk dark ", "mustache",],),
  //7702"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "clown eyes green ", "purple lipstick",],),
  //7703"],),

  new Traits( "male, accessories" ,[ "cigarette ", "front beard dark ", "peak spike",],),
  //7704"],),

  new Traits( "male, accessories" ,[ "bandana ", "chinstrap ", "eye patch",],),
  //7705"],),

  new Traits( "male, accessories" ,[ "eye mask ", "frumpy hair",],),
  //7706"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "orange side",],),
  //7707"],),

  new Traits( "male, accessories" ,[ "cigarette ", "crazy hair ", "eye patch ", "muttonchops",],),
  //7708"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "mole ", "silver chain",],),
  //7709"],),

  new Traits( "female, accessories" ,[ "earring ", "half shaved ", "purple eye shadow ", "purple lipstick",],),
  //7710"],),

  new Traits( "male, accessories" ,[ "frown ", "frumpy hair",],),
  //7711"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "goat",],),
  //7712"],),

  new Traits( "male, accessories" ,[ "big shades ", "goat ", "mohawk ", "vape",],),
  //7713"],),

  new Traits( "female, accessories" ,[ "bandana ", "black lipstick ", "earring ", "purple eye shadow",],),
  //7714"],),

  new Traits( "female, accessories" ,[ "classic shades ", "hot lipstick ", "wild white hair",],),
  //7715"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "frown ", "headband",],),
  //7716"],),

  new Traits( "male, accessories" ,[ "cigarette ", "front beard dark ", "mohawk",],),
  //7717"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "mohawk thin ", "mustache",],),
  //7718"],),

  new Traits( "female, accessories" ,[ "cigarette ", "clown eyes green ", "tassle hat",],),
  //7719"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "half shaved ", "vape",],),
  //7720"],),

  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "knitted cap ", "muttonchops",],),
  //7721"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "luxurious beard ", "peak spike",],),
  //7722"],),

  new Traits( "male, accessories" ,[ "earring ", "muttonchops ", "police cap",],),
  //7723"],),

  new Traits( "male, accessories" ,[ "big shades ", "knitted cap",],),
  //7724"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "mustache ", "vampire hair",],),
  //7725"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cap forward",],),
  //7726"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "gold chain ", "red mohawk",],),
  //7727"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "headband ", "small shades",],),
  //7728"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "muttonchops",],),
  //7729"],),

  new Traits( "male, accessories" ,[ "clown nose ", "mohawk dark",],),
  //7730"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk thin ", "silver chain",],),
  //7731"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "chinstrap ", "hoodie",],),
  //7732"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "stringy hair",],),
  //7733"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "horned rim glasses ", "mole",],),
  //7734"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "purple lipstick",],),
  //7735"],),

  new Traits( "female, accessories" ,[ "green eye shadow",],),
  //7736"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "mohawk ", "normal beard",],),
  //7737"],),

  new Traits( "male, accessories" ,[ "police cap ", "regular shades ", "smile",],),
  //7738"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "gold chain ", "headband",],),
  //7739"],),

  new Traits( "male, accessories" ,[ "eye mask ", "frown ", "messy hair ", "normal beard",],),
  //7740"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "mole",],),
  //7741"],),

  new Traits( "male, accessories" ,[ "cap forward ", "goat ", "small shades",],),
  //7742"],),

  new Traits( "male, accessories" ,[ "cigarette ", "regular shades ", "vampire hair",],),
  //7743"],),

  new Traits( "male, accessories" ,[ "earring ", "muttonchops",],),
  //7744"],),

  new Traits( "male, accessories" ,[ "shadow beard ", "small shades ", "wild hair",],),
  //7745"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "cowboy hat",],),
  //7746"],),

  new Traits( "male, accessories" ,[ "eye patch ", "messy hair ", "normal beard",],),
  //7747"],),

  new Traits( "male, accessories" ,[ "hoodie ", "luxurious beard ", "pipe",],),
  //7748"],),

  new Traits( "female, accessories" ,[ "medical mask ", "stringy hair",],),
  //7749"],),

  new Traits( "female, accessories" ,[ "classic shades ", "crazy hair ", "earring",],),
  //7750"],),

  new Traits( "female, accessories" ,[ "blonde short ", "clown eyes blue ", "hot lipstick",],),
  //7751"],),

  new Traits( "female, accessories" ,[ "dark hair ", "purple eye shadow",],),
  //7752"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard ", "purple hair ", "vr",],),
  //7753"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "frumpy hair",],),
  //7754"],),

  new Traits( "male, accessories" ,[ "muttonchops ", "stringy hair",],),
  //7755"],),

  new Traits( "zombie, accessories" ,[ "do-rag ", "horned rim glasses ", "shadow beard",],),
  //7756"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "shadow beard",],),
  //7757"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "eye patch ", "mole",],),
  //7758"],),

  new Traits( "male, accessories" ,[ "classic shades ", "goat",],),
  //7759"],),

  new Traits( "female, accessories" ,[ "eye mask ", "wild white hair",],),
  //7760"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "medical mask",],),
  //7761"],),

  new Traits( "male, accessories" ,[ "cap ", "handlebars ", "nerd glasses",],),
  //7762"],),

  new Traits( "female, accessories" ,[ "big shades ", "purple lipstick ", "red mohawk ", "rosy cheeks",],),
  //7763"],),

  new Traits( "male, accessories" ,[ "mole ", "wild hair",],),
  //7764"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "smile ", "wild hair",],),
  //7765"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora ", "normal beard black",],),
  //7766"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "pink with hat",],),
  //7767"],),

  new Traits( "female, accessories" ,[ "mole ", "red mohawk",],),
  //7768"],),

  new Traits( "male, accessories" ,[ "mole ", "pipe",],),
  //7769"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "knitted cap ", "mustache ", "rosy cheeks",],),
  //7770"],),

  new Traits( "male, accessories" ,[ "frown ", "frumpy hair ", "pipe",],),
  //7771"],),

  new Traits( "male, accessories" ,[ "frown ", "frumpy hair ", "regular shades",],),
  //7772"],),

  new Traits( "male, accessories" ,[ "clown nose ", "regular shades ", "wild hair",],),
  //7773"],),

  new Traits( "male, accessories" ,[ "earring ", "messy hair ", "muttonchops",],),
  //7774"],),

  new Traits( "male, accessories" ,[ "classic shades ", "cowboy hat ", "earring ", "muttonchops",],),
  //7775"],),

  new Traits( "male, accessories" ,[ "fedora ", "vape",],),
  //7776"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blonde short ", "mole",],),
  //7777"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "medical mask ", "mohawk thin ", "purple lipstick",],),
  //7778"],),

  new Traits( "male, accessories" ,[ "hoodie ", "mustache",],),
  //7779"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "shaved head",],),
  //7780"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "horned rim glasses ", "shadow beard",],),
  //7781"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "pipe",],),
  //7782"],),

  new Traits( "male, accessories" ,[ "earring ", "shaved head ", "silver chain",],),
  //7783"],),

  new Traits( "male, accessories" ,[ "cigarette ", "messy hair ", "smile",],),
  //7784"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "headband ", "nerd glasses ", "normal beard black",],),
  //7785"],),

  new Traits( "female, accessories" ,[ "bandana ", "blue eye shadow ", "purple lipstick",],),
  //7786"],),

  new Traits( "male, accessories" ,[ "fedora ", "nerd glasses ", "smile",],),
  //7787"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "front beard ", "wild hair",],),
  //7788"],),

  new Traits( "male, accessories" ,[ "do-rag ", "regular shades ", "spots ", "vape",],),
  //7789"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard ", "wild hair",],),
  //7790"],),

  new Traits( "female, accessories" ,[ "half shaved ", "hot lipstick ", "mole",],),
  //7791"],),

  new Traits( "female, accessories" ,[ "blonde short ", "blue eye shadow ", "cigarette",],),
  //7792"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "straight hair blonde",],),
  //7793"],),

  new Traits( "female, accessories" ,[ "cap ", "cigarette ", "earring ", "mole",],),
  //7794"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard black ", "police cap",],),
  //7795"],),

  new Traits( "male, accessories" ,[ "classic shades ", "crazy hair ", "shadow beard",],),
  //7796"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "knitted cap ", "luxurious beard",],),
  //7797"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "pipe ", "tassle hat",],),
  //7798"],),

  new Traits( "male, accessories" ,[ "cigarette ", "front beard ", "purple hair",],),
  //7799"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard ", "shaved head ", "silver chain",],),
  //7800"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "messy hair",],),
  //7801"],),

  new Traits( "female, accessories" ,[ "classic shades ", "hot lipstick ", "straight hair blonde",],),
  //7802"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "mohawk",],),
  //7803"],),

  new Traits( "alien ", accessories" ,[ "cap forward ", "pipe ", "small shades",],),
  //7804"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mole ", "wild white hair",],),
  //7805"],),

  new Traits( "male, accessories" ,[ "cigarette ", "horned rim glasses ", "normal beard ", "peak spike",],),
  //7806"],),

  new Traits( "male, accessories" ,[ "clown nose ", "horned rim glasses ", "mohawk dark",],),
  //7807"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mohawk dark ", "muttonchops",],),
  //7808"],),

  new Traits( "male, accessories" ,[ "cap forward ", "clown eyes blue",],),
  //7809"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "mohawk thin",],),
  //7810"],),

  new Traits( "female, accessories" ,[ "mole ", "straight hair blonde",],),
  //7811"],),

  new Traits( "male, accessories" ,[ "eye patch ", "front beard ", "wild hair",],),
  //7812"],),

  new Traits( "female, accessories" ,[ "pipe",],),
  //7813"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "pipe ", "vr",],),
  //7814"],),

  new Traits( "male, accessories" ,[ "big shades ", "cap forward ", "shadow beard",],),
  //7815"],),

  new Traits( "male, accessories" ,[ "big shades ", "peak spike",],),
  //7816"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "pipe ", "vampire hair",],),
  //7817"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "crazy hair",],),
  //7818"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora ", "regular shades",],),
  //7819"],),

  new Traits( "male, accessories" ,[ "mohawk ", "normal beard black ", "vr",],),
  //7820"],),

  new Traits( "female, accessories" ,[ "earring ", "headband ", "horned rim glasses",],),
  //7821"],),

  new Traits( "male, accessories" ,[ "cigarette ", "eye patch ", "handlebars ", "shaved head",],),
  //7822"],),

  new Traits( "female, accessories" ,[ "bandana ", "big shades ", "purple lipstick",],),
  //7823"],),

  new Traits( "male, accessories" ,[ "mustache ", "regular shades",],),
  //7824"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk thin ", "vr",],),
  //7825"],),

  new Traits( "female, accessories" ,[ "big shades ", "mohawk thin",],),
  //7826"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "stringy hair",],),
  //7827"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "mustache ", "top hat",],),
  //7828"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "clown nose ", "messy hair",],),
  //7829"],),

  new Traits( "female, accessories" ,[ "big shades ", "mohawk dark",],),
  //7830"],),

  new Traits( "male, accessories" ,[ "earring ", "purple hair ", "vr",],),
  //7831"],),

  new Traits( "female, accessories" ,[ "big shades ", "choker ", "headband",],),
  //7832"],),

  new Traits( "male, accessories" ,[ "eye mask ", "front beard ", "frumpy hair",],),
  //7833"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "mohawk thin",],),
  //7834"],),

  new Traits( "male, accessories" ,[ "handlebars ", "mohawk ", "smile",],),
  //7835"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "pipe ", "stringy hair",],),
  //7836"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "handlebars ", "small shades",],),
  //7837"],),

  new Traits( "male, accessories" ,[ "big shades ", "front beard dark ", "mohawk dark",],),
  //7838"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora ", "mole ", "vr",],),
  //7839"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "mohawk",],),
  //7840"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "crazy hair",],),
  //7841"],),

  new Traits( "male, accessories" ,[ "bandana ", "mole",],),
  //7842"],),

  new Traits( "male, accessories" ,[ "cap forward ", "clown nose ", "front beard",],),
  //7843"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "front beard ", "hoodie",],),
  //7844"],),

  new Traits( "male, accessories" ,[ "classic shades ", "luxurious beard ", "messy hair",],),
  //7845"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "beanie",],),
  //7846"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard ", "headband",],),
  //7847"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "earring ", "mustache",],),
  //7848"],),

  new Traits( "female, accessories" ,[ "half shaved ", "pipe",],),
  //7849"],),

  new Traits( "female, accessories" ,[ "clown hair green ", "nerd glasses",],),
  //7850"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "regular shades ", "vape",],),
  //7851"],),

  new Traits( "female, accessories" ,[ "bandana ", "earring ", "vr",],),
  //7852"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "purple lipstick ", "straight hair",],),
  //7853"],),

  new Traits( "male, accessories" ,[ "big beard ", "cap ", "nerd glasses",],),
  //7854"],),

  new Traits( "female, accessories" ,[ "earring ", "headband ", "nerd glasses",],),
  //7855"],),

  new Traits( "female, accessories" ,[ "clown nose ", "red mohawk",],),
  //7856"],),

  new Traits( "female, accessories" ,[ "classic shades ", "earring ", "mohawk",],),
  //7857"],),

  new Traits( "male, accessories" ,[ "cigarette",],),
  //7858"],),

  new Traits( "female, accessories" ,[ "cigarette ", "horned rim glasses ", "mohawk",],),
  //7859"],),

  new Traits( "female, accessories" ,[ "choker ", "cigarette ", "straight hair",],),
  //7860"],),

  new Traits( "male, accessories" ,[ "big beard ", "cigarette ", "earring ", "headband",],),
  //7861"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "purple lipstick ", "rosy cheeks ", "vape",],),
  //7862"],),

  new Traits( "male, accessories" ,[ "cap forward ", "goat",],),
  //7863"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "frumpy hair ", "goat",],),
  //7864"],),

  new Traits( "male, accessories" ,[ "eye mask ", "luxurious beard ", "messy hair",],),
  //7865"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "cigarette ", "earring ", "hot lipstick ", "red mohawk",],),
  //7866"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "mohawk thin",],),
  //7867"],),

  new Traits( "male, accessories" ,[ "hoodie ", "medical mask",],),
  //7868"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "medical mask",],),
  //7869"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "mohawk dark ", "nerd glasses",],),
  //7870"],),

  new Traits( "male, accessories" ,[ "cap ", "normal beard black ", "vr",],),
  //7871"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "purple lipstick ", "wild hair",],),
  //7872"],),

  new Traits( "male, accessories" ,[ "cap ", "clown nose ", "mole",],),
  //7873"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "frumpy hair ", "horned rim glasses",],),
  //7874"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "straight hair blonde",],),
  //7875"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "hot lipstick ", "mohawk",],),
  //7876"],),

  new Traits( "female, accessories" ,[ "cigarette ", "purple lipstick ", "straight hair dark",],),
  //7877"],),

  new Traits( "male, accessories" ,[ "bandana ", "cigarette ", "muttonchops ", "small shades",],),
  //7878"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "vampire hair",],),
  //7879"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "mustache ", "vape",],),
  //7880"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "mohawk thin ", "pipe ", "silver chain",],),
  //7881"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "crazy hair ", "earring ", "medical mask",],),
  //7882"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair",],),
  //7883"],),

  new Traits( "male, accessories" ,[ "classic shades ", "luxurious beard ", "messy hair ", "spots",],),
  //7884"],),

  new Traits( "male, accessories" ,[ "earring ", "messy hair ", "muttonchops",],),
  //7885"],),

  new Traits( "male, accessories" ,[ "fedora ", "medical mask ", "small shades",],),
  //7886"],),

  new Traits( "female, accessories" ,[ "earring ", "tassle hat ", "vape",],),
  //7887"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "pigtails",],),
  //7888"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk ", "rosy cheeks",],),
  //7889"],),

  new Traits( "male, accessories" ,[ "frown ", "vampire hair",],),
  //7890"],),

  new Traits( "female, accessories" ,[ "cap ", "earring ", "medical mask",],),
  //7891"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "smile",],),
  //7892"],),

  new Traits( "male, accessories" ,[ "goat ", "shaved head",],),
  //7893"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "headband",],),
  //7894"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "horned rim glasses",],),
  //7895"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "pipe ", "wild hair",],),
  //7896"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "red mohawk",],),
  //7897"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "orange side ", "welding goggles",],),
  //7898"],),

  new Traits( "female, accessories" ,[ "headband ", "nerd glasses",],),
  //7899"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "straight hair dark",],),
  //7900"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "handlebars ", "top hat",],),
  //7901"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "mohawk dark ", "pipe ", "shadow beard",],),
  //7902"],),

  new Traits( "female, accessories" ,[ "big shades ", "hot lipstick ", "red mohawk",],),
  //7903"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "crazy hair ", "earring ", "hot lipstick",],),
  //7904"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard black ", "stringy hair",],),
  //7905"],),

  new Traits( "female, accessories" ,[ "bandana ", "clown eyes green ", "purple lipstick",],),
  //7906"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "red mohawk",],),
  //7907"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "normal beard ", "peak spike",],),
  //7908"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "horned rim glasses ", "police cap",],),
  //7909"],),

  new Traits( "male, accessories" ,[ "gold chain ", "purple hair",],),
  //7910"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "mustache",],),
  //7911"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "mohawk dark ", "normal beard black",],),
  //7912"],),

  new Traits( "male, accessories" ,[ "cap ", "chinstrap",],),
  //7913"],),

  new Traits( "zombie, accessories" ,[ "knitted cap ", "normal beard black",],),
  //7914"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "straight hair",],),
  //7915"],),

  new Traits( "female, accessories" ,[ "eye patch ", "messy hair",],),
  //7916"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "purple hair ", "smile",],),
  //7917"],),

  new Traits( "male, accessories" ,[ "big shades ", "frown ", "knitted cap",],),
  //7918"],),

  new Traits( "female, accessories" ,[ "mohawk thin ", "pipe",],),
  //7919"],),

  new Traits( "female, accessories" ,[ "cigarette ", "clown nose ", "crazy hair ", "hot lipstick ", "rosy cheeks ", "vr",],),
  //7920"],),

  new Traits( "male, accessories" ,[ "big shades ", "handlebars ", "pipe ", "stringy hair",],),
  //7921"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "classic shades ", "mohawk",],),
  //7922"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "earring ", "mohawk dark ", "normal beard black",],),
  //7923"],),

  new Traits( "female, accessories" ,[ "cap ", "cigarette ", "green eye shadow",],),
  //7924"],),

  new Traits( "male, accessories" ,[ "peak spike ", "small shades ", "smile",],),
  //7925"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk ", "mustache ", "smile",],),
  //7926"],),

  new Traits( "male, accessories" ,[ "cigarette ", "classic shades ", "knitted cap",],),
  //7927"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "tiara",],),
  //7928"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "gold chain ", "hot lipstick ", "straight hair",],),
  //7929"],),

  new Traits( "female, accessories" ,[ "mole ", "straight hair",],),
  //7930"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "mustache",],),
  //7931"],),

  new Traits( "female, accessories" ,[ "knitted cap ", "nerd glasses ", "purple lipstick",],),
  //7932"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "clown nose ", "do-rag ", "earring",],),
  //7933"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "headband",],),
  //7934"],),

  new Traits( "female, accessories" ,[ "earring ", "gold chain ", "hot lipstick",],),
  //7935"],),

  new Traits( "male, accessories" ,[ "cap ", "nerd glasses",],),
  //7936"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "nerd glasses ", "tassle hat",],),
  //7937"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "earring",],),
  //7938"],),

  new Traits( "male, accessories" ,[ "classic shades ", "fedora ", "goat",],),
  //7939"],),

  new Traits( "female, accessories" ,[ "big shades ", "earring ", "hot lipstick ", "red mohawk",],),
  //7940"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "half shaved",],),
  //7941"],),

  new Traits( "female, accessories" ,[ "choker ", "hot lipstick ", "pink with hat",],),
  //7942"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "headband ", "pipe",],),
  //7943"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "frown ", "muttonchops ", "peak spike",],),
  //7944"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "goat ", "messy hair ", "pipe",],),
  //7945"],),

  new Traits( "male, accessories" ,[ "big shades ", "top hat",],),
  //7946"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "mustache ", "smile",],),
  //7947"],),

  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "purple hair",],),
  //7948"],),

  new Traits( "male, accessories" ,[ "eye mask ", "mohawk",],),
  //7949"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "regular shades ", "wild hair",],),
  //7950"],),

  new Traits( "male, accessories" ,[ "cap ", "muttonchops ", "silver chain",],),
  //7951"],),

  new Traits( "male, accessories" ,[ "gold chain ", "purple hair ", "shadow beard",],),
  //7952"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "small shades ", "smile ", "vape",],),
  //7953"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "pipe",],),
  //7954"],),

  new Traits( "male, accessories" ,[ "cap ", "mole ", "nerd glasses",],),
  //7955"],),

  new Traits( "male, accessories" ,[ "frown ", "goat ", "pipe ", "police cap ", "small shades",],),
  //7956"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "messy hair",],),
  //7957"],),

  new Traits( "female, accessories" ,[ "clown hair green ", "hot lipstick",],),
  //7958"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "muttonchops ", "pipe",],),
  //7959"],),

  new Traits( "male, accessories" ,[ "eye mask ", "fedora",],),
  //7960"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "clown nose ", "mohawk",],),
  //7961"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "small shades",],),
  //7962"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "mohawk thin",],),
  //7963"],),

  new Traits( "male, accessories" ,[ "bandana ", "classic shades",],),
  //7964"],),

  new Traits( "female, accessories" ,[ "classic shades ", "mohawk ", "purple lipstick",],),
  //7965"],),

  new Traits( "male, accessories" ,[ "small shades",],),
  //7966"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "earring ", "straight hair dark",],),
  //7967"],),

  new Traits( "male, accessories" ,[ "big shades ", "do-rag ", "earring",],),
  //7968"],),

  new Traits( "male, accessories" ,[ "eye patch ", "headband ", "muttonchops",],),
  //7969"],),

  new Traits( "female, accessories" ,[ "mohawk thin ", "vape",],),
  //7970"],),

  new Traits( "female, accessories" ,[ "big shades ", "black lipstick ", "cigarette ", "earring ", "mole ", "wild hair",],),
  //7971"],),

  new Traits( "male, accessories" ,[ "medical mask ", "messy hair ", "small shades",],),
  //7972"],),

  new Traits( "female, accessories" ,[ "earring ", "orange side ", "purple eye shadow",],),
  //7973"],),

  new Traits( "male, accessories" ,[ "cigarette ", "eye mask ", "mohawk",],),
  //7974"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "clown hair green ", "eye patch ", "medical mask",],),
  //7975"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "medical mask ", "purple eye shadow",],),
  //7976"],),

  new Traits( "female, accessories" ,[ "dark hair ", "purple eye shadow ", "rosy cheeks",],),
  //7977"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "earring ", "frumpy hair",],),
  //7978"],),

  new Traits( "male, accessories" ,[ "eye patch ", "handlebars ", "vampire hair",],),
  //7979"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "half shaved ", "hot lipstick",],),
  //7980"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "headband ", "hot lipstick",],),
  //7981"],),

  new Traits( "female, accessories" ,[ "gold chain ", "mohawk",],),
  //7982"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "frumpy hair ", "green eye shadow",],),
  //7983"],),

  new Traits( "male, accessories" ,[ "eye patch ", "normal beard black ", "vampire hair",],),
  //7984"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "pipe ", "tassle hat",],),
  //7985"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "earring ", "nerd glasses ", "pipe",],),
  //7986"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "hot lipstick ", "regular shades",],),
  //7987"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "headband",],),
  //7988"],),

  new Traits( "male, accessories" ,[ "clown nose ", "frumpy hair",],),
  //7989"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "eye patch ", "purple hair",],),
  //7990"],),

  new Traits( "male, accessories" ,[ "big shades ", "front beard dark ", "mohawk",],),
  //7991"],),

  new Traits( "male, accessories" ,[ "big beard ", "knitted cap",],),
  //7992"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "earring",],),
  //7993"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "black lipstick ", "dark hair",],),
  //7994"],),

  new Traits( "male, accessories" ,[ "pipe ", "shaved head",],),
  //7995"],),

  new Traits( "male, accessories" ,[ "beanie ", "earring ", "luxurious beard",],),
  //7996"],),

  new Traits( "male, accessories" ,[ "bandana ", "gold chain ", "normal beard",],),
  //7997"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "eye patch",],),
  //7998"],),

  new Traits( "female, accessories" ,[ "blonde short ", "earring ", "hot lipstick ", "nerd glasses",],),
  //7999"],),
  }],),

  new Traits( "male, accessories" ,[ "cap ", "cigarette ", "mustache ", "rosy cheeks ", "vr",],),
  //8000"],),

  new Traits( "female, accessories" ,[ "gold chain ", "mohawk ", "regular shades",],),
  //8001"],),

  new Traits( "male, accessories" ,[ "mole ", "shadow beard ", "wild hair",],),
  //8002"],),

  new Traits( "male, accessories" ,[ "goat ", "hoodie ", "regular shades",],),
  //8003"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "peak spike",],),
  //8004"],),

  new Traits( "male, accessories" ,[ "messy hair ", "mustache ", "pipe",],),
  //8005"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "clown nose ", "frumpy hair",],),
  //8006"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "knitted cap ", "purple eye shadow",],),
  //8007"],),

  new Traits( "male, accessories" ,[ "handlebars ", "nerd glasses ", "police cap",],),
  //8008"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "wild blonde",],),
  //8009"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "orange side",],),
  //8010"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "classic shades ", "do-rag",],),
  //8011"],),

  new Traits( "male, accessories" ,[ "clown nose ", "fedora ", "goat",],),
  //8012"],),

  new Traits( "male, accessories" ,[ "cigarette ", "normal beard black ", "wild hair",],),
  //8013"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard ", "police cap",],),
  //8014"],),

  new Traits( "male, accessories" ,[ "big shades ", "cap forward ", "front beard",],),
  //8015"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "luxurious beard ", "medical mask",],),
  //8016"],),

  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "top hat",],),
  //8017"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "hot lipstick",],),
  //8018"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "knitted cap ", "regular shades",],),
  //8019"],),

  new Traits( "female, accessories" ,[ "big shades ", "blonde short ", "hot lipstick",],),
  //8020"],),

  new Traits( "male, accessories" ,[ "gold chain ", "mohawk thin",],),
  //8021"],),

  new Traits( "male, accessories" ,[ "cap ", "clown eyes green ", "shadow beard",],),
  //8022"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "clown nose ", "pigtails",],),
  //8023"],),

  new Traits( "female, accessories" ,[ "pipe ", "tassle hat",],),
  //8024"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "eye mask ", "luxurious beard",],),
  //8025"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "smile ", "vape",],),
  //8026"],),

  new Traits( "female, accessories" ,[ "big shades ", "earring ", "messy hair ", "purple lipstick",],),
  //8027"],),

  new Traits( "male, accessories" ,[ "big shades ", "mohawk thin ", "pipe",],),
  //8028"],),

  new Traits( "female, accessories" ,[ "earring ", "messy hair ", "mole",],),
  //8029"],),

  new Traits( "female, accessories" ,[ "earring ", "vape, "wild white hair",],),
  //8030"],),

  new Traits( "male, accessories" ,[ "cigarette ", "do-rag ", "muttonchops",],),
  //8031"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "mole ", "wild hair",],),
  //8032"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cap forward",],),
  //8033"],),

  new Traits( "female, accessories" ,[ "dark hair ", "earring ", "spots",],),
  //8034"],),

  new Traits( "female, accessories" ,[ "cigarette ", "dark hair ", "earring ", "hot lipstick ", "mole",],),
  //8035"],),

  new Traits( "male, accessories" ,[ "peak spike ", "rosy cheeks ", "small shades ", "smile",],),
  //8036"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "frumpy hair ", "mole",],),
  //8037"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "purple lipstick ", "red mohawk",],),
  //8038"],),

  new Traits( "female, accessories" ,[ "eye patch ", "hot lipstick ", "messy hair",],),
  //8039"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "eye patch ", "silver chain",],),
  //8040"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "eye mask ", "mustache ", "spots",],),
  //8041"],),

  new Traits( "male, accessories" ,[ "pipe ", "police cap",],),
  //8042"],),

  new Traits( "female, accessories" ,[ "big shades ", "stringy hair",],),
  //8043"],),
  
  
  new Traits( "female, accessories" ,[ "big shades ", "hot lipstick ", "orange side",],),
  //8044"],),

  new Traits( "male, accessories" ,[ "big beard ", "clown hair green ", "earring",],),
  //8045"],),

  new Traits( "male, accessories" ,[ "eye patch ", "fedora",],),
  //8046"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora ", "horned rim glasses ", "luxurious beard",],),
  //8047"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "shaved head",],),
  //8048"],),

  new Traits( "male, accessories" ,[ "headband ", "normal beard",],),
  //8049"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "nerd glasses ", "shadow beard",],),
  //8050"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "handlebars ", "messy hair",],),
  //8051"],),

  new Traits( "male, accessories" ,[ "eye patch ", "knitted cap ", "mustache",],),
  //8052"],),

  new Traits( "male, accessories" ,[ "mustache ", "top hat",],),
  //8053"],),

  new Traits( "female, accessories" ,[ "bandana ", "blue eye shadow",],),
  //8054"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "straight hair",],),
  //8055"],),

  new Traits( "male, accessories" ,[ "clown nose ", "luxurious beard ", "mohawk dark ", "vr",],),
  //8056"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "half shaved ", "vr",],),
  //8057"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "regular shades ", "straight hair",],),
  //8058"],),

  new Traits( "male, accessories" ,[ "fedora ", "goat",],),
  //8059"],),

  new Traits( "female, accessories" ,[ "bandana ", "big shades ", "cigarette ", "earring",],),
  //8060"],),

  new Traits( "male, accessories" ,[ "eye mask ", "fedora ", "front beard dark",],),
  //8061"],),

  new Traits( "male, accessories" ,[ "eye mask ", "mohawk dark ", "muttonchops",],),
  //8062"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "choker ", "purple lipstick",],),
  //8063"],),

  new Traits( "male, accessories" ,[ "cigarette ", "fedora ", "nerd glasses",],),
  //8064"],),

  new Traits( "male, accessories" ,[ "earring ", "gold chain ", "regular shades ", "vampire hair",],),
  //8065"],),

  new Traits( "female, accessories" ,[ "classic shades ", "hot lipstick ", "orange side",],),
  //8066"],),

  new Traits( "male, accessories" ,[ "goat ", "knitted cap ", "mole",],),
  //8067"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "eye mask ", "normal beard black",],),
  //8068"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "handlebars ", "small shades",],),
  //8069"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "peak spike ", "shadow beard",],),
  //8070"],),

  new Traits( "male, accessories" ,[ "muttonchops ", "nerd glasses ", "silver chain ", "vampire hair",],),
  //8071"],),

  new Traits( "male, accessories" ,[ "earring ", "mustache ", "nerd glasses ", "police cap",],),
  //8072"],),

  new Traits( "male, accessories" ,[ "cap ", "cigarette ", "horned rim glasses",],),
  //8073"],),

  new Traits( "male, accessories" ,[ "cigarette ", "fedora ", "small shades",],),
  //8074"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "mole ", "small shades",],),
  //8075"],),

  new Traits( "female, accessories" ,[ "cap ", "green eye shadow ", "pipe",],),
  //8076"],),

  new Traits( "female, accessories" ,[ "cap ", "eye patch ", "purple lipstick",],),
  //8077"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "muttonchops",],),
  //8078"],),

  new Traits( "male, accessories" ,[ "cigarette ", "do-rag ", "front beard ", "horned rim glasses ", "smile",],),
  //8079"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "messy hair ", "shadow beard",],),
  //8080"],),

  new Traits( "male, accessories" ,[ "clown nose ", "do-rag ", "normal beard",],),
  //8081"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "normal beard ", "regular shades",],),
  //8082"],),

  new Traits( "male, accessories" ,[ "front beard ", "mole ", "purple hair",],),
  //8083"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "normal beard",],),
  //8084"],),

  new Traits( "male, accessories" ,[ "big beard ", "hoodie ", "regular shades",],),
  //8085"],),

  new Traits( "male, accessories" ,[ "bandana ", "cigarette ", "frown ", "horned rim glasses",],),
  //8086"],),

  new Traits( "male, accessories" ,[ "clown nose ", "frumpy hair ", "shadow beard",],),
  //8087"],),

  new Traits( "male, accessories" ,[ "silver chain ", "wild hair",],),
  //8088"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mole ", "straight hair dark",],),
  //8089"],),

  new Traits( "male, accessories" ,[ "big shades ", "mohawk dark ", "mustache",],),
  //8090"],),

  new Traits( "female, accessories" ,[ "knitted cap ", "regular shades",],),
  //8091"],),

  new Traits( "female, accessories" ,[ "cigarette ", "eye patch ", "frumpy hair",],),
  //8092"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "horned rim glasses ", "mohawk thin",],),
  //8093"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "nerd glasses ", "wild blonde",],),
  //8094"],),

  new Traits( "male, accessories" ,[ "eye patch ", "shadow beard ", "vampire hair",],),
  //8095"],),

  new Traits( "female, accessories" ,[ "half shaved ", "welding goggles",],),
  //8096"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "frumpy hair",],),
  //8097"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "luxurious beard",],),
  //8098"],),

  new Traits( "male, accessories" ,[ "cap ", "small shades",],),
  //8099"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "top hat",],),
  //8100"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "frown ", "mole ", "stringy hair",],),
  //8101"],),

  new Traits( "male, accessories" ,[ "shadow beard ", "vr ", "wild hair",],),
  //8102"],),

  new Traits( "male, accessories" ,[ "bandana ", "front beard dark ", "vr",],),
  //8103"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "stringy hair",],),
  //8104"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "choker ", "pigtails ", "rosy cheeks",],),
  //8105"],),

  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "knitted cap",],),
  //8106"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "stringy hair",],),
  //8107"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "normal beard black",],),
  //8108"],),

  new Traits( "male, accessories" ,[ "cigarette ", "front beard ", "messy hair",],),
  //8109"],),

  new Traits( "female, accessories" ,[ "mohawk dark ", "purple eye shadow",],),
  //8110"],),

  new Traits( "male, accessories" ,[ "vampire hair ", "vr",],),
  //8111"],),

  new Traits( "male, accessories" ,[ "cap ", "mole ", "nerd glasses ", "normal beard",],),
  //8112"],),

  new Traits( "male, accessories" ,[ "eye mask ", "messy hair",],),
  //8113"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "eye mask",],),
  //8114"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "headband ", "vr",],),
  //8115"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mohawk ", "normal beard",],),
  //8116"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "muttonchops",],),
  //8117"],),

  new Traits( "male, accessories" ,[ "big shades ", "do-rag ", "front beard dark",],),
  //8118"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "frumpy hair ", "horned rim glasses",],),
  //8119"],),

  new Traits( "male, accessories" ,[ "clown nose ", "front beard ", "frown ", "stringy hair",],),
  //8120"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "horned rim glasses ", "mohawk",],),
  //8121"],),

  new Traits( "male, accessories" ,[ "earring ", "shadow beard",],),
  //8122"],),

  new Traits( "male, accessories" ,[ "big beard ", "do-rag ", "small shades",],),
  //8123"],),

  new Traits( "male, accessories" ,[ "big beard ", "eye patch ", "mohawk dark",],),
  //8124"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "chinstrap ", "stringy hair",],),
  //8125"],),
  
  
  new Traits( "female, accessories" ,[ "clown eyes green ", "purple lipstick ", "red mohawk",],),
  //8126"],),

  new Traits( "zombie, accessories" ,[ "headband",],),
  //8127"],),

  new Traits( "female, accessories" ,[ "vr ", "wild blonde",],),
  //8128"],),

  new Traits( "male, accessories" ,[ "do-rag ", "eye mask ", "luxurious beard",],),
  //8129"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "silver chain ", "stringy hair",],),
  //8130"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "normal beard ", "vr",],),
  //8131"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "front beard dark ", "peak spike",],),
  //8132"],),

  new Traits( "female, accessories" ,[ "cap ", "purple lipstick",],),
  //8133"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "pink with hat",],),
  //8134"],),

  new Traits( "male, accessories" ,[ "earring ", "nerd glasses ", "shaved head",],),
  //8135"],),

  new Traits( "male, accessories" ,[ "frown ", "mohawk thin ", "nerd glasses",],),
  //8136"],),

  new Traits( "female, accessories" ,[ "half shaved ", "nerd glasses",],),
  //8137"],),

  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "small shades",],),
  //8138"],),

  new Traits( "male, accessories" ,[ "earring ", "goat ", "vampire hair",],),
  //8139"],),

  new Traits( "female, accessories" ,[ "cigarette ", "classic shades ", "straight hair",],),
  //8140"],),

  new Traits( "female, accessories" ,[ "mohawk dark ", "rosy cheeks",],),
  //8141"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "mohawk thin ", "purple lipstick",],),
  //8142"],),

  new Traits( "male, accessories" ,[ "bandana ", "chinstrap ", "earring",],),
  //8143"],),

  new Traits( "male, accessories" ,[ "mole ", "stringy hair",],),
  //8144"],),

  new Traits( "male, accessories" ,[ "classic shades ", "luxurious beard ", "stringy hair",],),
  //8145"],),

  new Traits( "male, accessories" ,[ "beanie ", "cigarette",],),
  //8146"],),

  new Traits( "female, accessories" ,[ "cigarette ", "crazy hair ", "purple lipstick",],),
  //8147"],),

  new Traits( "female, accessories" ,[ "blonde short ", "purple eye shadow",],),
  //8148"],),

  new Traits( "female, accessories" ,[ "purple eye shadow ", "straight hair blonde",],),
  //8149"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "stringy hair",],),
  //8150"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "headband ", "small shades",],),
  //8151"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "gold chain ", "knitted cap ", "luxurious beard ", "smile",],),
  //8152"],),

  new Traits( "male, accessories" ,[ "clown nose ", "goat ", "stringy hair",],),
  //8153"],),

  new Traits( "female, accessories" ,[ "knitted cap ", "vape",],),
  //8154"],),

  new Traits( "male, accessories" ,[ "eye patch ", "fedora ", "shadow beard",],),
  //8155"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "eye mask ", "mohawk thin",],),
  //8156"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "front beard ", "headband",],),
  //8157"],),
  
  
  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "do-rag ", "front beard dark",],),
  //8158"],),

  new Traits( "male, accessories" ,[ "headband ", "horned rim glasses ", "normal beard black",],),
  //8159"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "mohawk dark ", "muttonchops",],),
  //8160"],),

  new Traits( "male, accessories" ,[ "do-rag ", "handlebars ", "vr",],),
  //8161"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "pilot helmet",],),
  //8162"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "normal beard black ", "peak spike",],),
  //8163"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "half shaved ", "purple lipstick",],),
  //8164"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "vape",],),
  //8165"],),

  new Traits( "female, accessories" ,[ "big shades ", "headband ", "hot lipstick",],),
  //8166"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "crazy hair ", "spots",],),
  //8167"],),

  new Traits( "female, accessories" ,[ "classic shades ", "red mohawk",],),
  //8168"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "red mohawk",],),
  //8169"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "nerd glasses ", "wild hair",],),
  //8170"],),

  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "frown ", "knitted cap",],),
  //8171"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "messy hair ", "purple lipstick",],),
  //8172"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "purple eye shadow ", "stringy hair",],),
  //8173"],),

  new Traits( "male, accessories" ,[ "big shades ", "frown ", "mohawk",],),
  //8174"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "pipe",],),
  //8175"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "mohawk thin ", "rosy cheeks",],),
  //8176"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "mohawk",],),
  //8177"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "headband",],),
  //8178"],),

  new Traits( "male, accessories" ,[ "frown ", "headband ", "luxurious beard ", "vape",],),
  //8179"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "shadow beard ", "small shades",],),
  //8180"],),

  new Traits( "male, accessories" ,[ "earring ", "shadow beard ", "top hat",],),
  //8181"],),

  new Traits( "male, accessories" ,[ "cap ", "clown nose ", "handlebars",],),
  //8182"],),

  new Traits( "female, accessories" ,[ "earring ", "purple lipstick ", "straight hair blonde",],),
  //8183"],),

  new Traits( "female, accessories" ,[ "big shades ", "blonde bob ", "pipe",],),
  //8184"],),

  new Traits( "male, accessories" ,[ "messy hair ", "regular shades",],),
  //8185"],),

  new Traits( "male, accessories" ,[ "shadow beard ", "spots ", "wild hair",],),
  //8186"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "hot lipstick ", "tassle hat ", "vr",],),
  //8187"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "normal beard ", "small shades",],),
  //8188"],),

  new Traits( "male, accessories" ,[ "messy hair ", "normal beard ", "small shades",],),
  //8189"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "red mohawk",],),
  //8190"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "frown ", "mole ", "normal beard black ", "top hat",],),
  //8191"],),

  new Traits( "male, accessories" ,[ "handlebars ", "headband ", "small shades",],),
  //8192"],),

  new Traits( "female, accessories" ,[ "big shades ", "black lipstick ", "blonde short",],),
  //8193"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "earring ", "gold chain ", "purple eye shadow ", "purple lipstick",],),
  //8194"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "front beard ", "spots",],),
  //8195"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "cap",],),
  //8196"],),

  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "mohawk ", "vape",],),
  //8197"],),

  new Traits( "male, accessories" ,[ "front beard ", "headband",],),
  //8198"],),

  new Traits( "male, accessories" ,[ "eye patch ", "knitted cap ", "muttonchops",],),
  //8199"],),

  new Traits( "male, accessories" ,[ "cigarette ", "eye mask ", "fedora ", "mustache",],),
  //8200"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "vape, "wild hair",],),
  //8201"],),

  new Traits( "male, accessories" ,[ "police cap ", "spots",],),
  //8202"],),

  new Traits( "female, accessories" ,[ "mole ", "purple eye shadow ", "straight hair",],),
  //8203"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "eye patch ", "handlebars",],),
  //8204"],),
  
  
  new Traits( "male, accessories" ,[ "big shades ", "front beard ", "messy hair",],),
  //8205"],),

  new Traits( "female, accessories" ,[ "medical mask ", "stringy hair",],),
  //8206"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "messy hair ", "vape",],),
  //8207"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "goat ", "mohawk dark",],),
  //8208"],),

  new Traits( "female, accessories" ,[ "bandana ", "eye patch",],),
  //8209"],),

  new Traits( "male, accessories" ,[ "big beard ", "crazy hair",],),
  //8210"],),

  new Traits( "male, accessories" ,[ "cap ", "mole",],),
  //8211"],),

  new Traits( "male, accessories" ,[ "earring ", "goat ", "headband",],),
  //8212"],),

  new Traits( "male, accessories" ,[ "frown ", "knitted cap",],),
  //8213"],),

  new Traits( "male, accessories" ,[ "do-rag ", "luxurious beard",],),
  //8214"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "mohawk thin ", "small shades",],),
  //8215"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "small shades ", "vampire hair",],),
  //8216"],),

  new Traits( "female, accessories" ,[ "clown nose ", "crazy hair ", "purple lipstick ", "welding goggles",],),
  //8217"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "eye patch ", "tassle hat",],),
  //8218"],),

  new Traits( "ape, accessories" ,[ "knitted cap",],),
  //8219"],),

  new Traits( "female, accessories" ,[ "eye mask ", "hot lipstick ", "tassle hat ", "vape",],),
  //8220"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "mohawk",],),
  //8221"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cigarette ", "earring ", "luxurious beard ", "peak spike",],),
  //8222"],),

  new Traits( "male, accessories" ,[ "fedora ", "mustache",],),
  //8223"],),

  new Traits( "female, accessories" ,[ "nerd glasses ", "wild hair",],),
  //8224"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "big beard ", "cap forward",],),
  //8225"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora ", "goat",],),
  //8226"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "small shades",],),
  //8227"],),

  new Traits( "female, accessories" ,[ "earring ", "purple eye shadow ", "wild blonde",],),
  //8228"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "crazy hair ", "earring ", "green eye shadow",],),
  //8229"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "orange side ", "purple lipstick",],),
  //8230"],),

  new Traits( "male, accessories" ,[ "eye mask ", "messy hair ", "smile",],),
  //8231"],),

  new Traits( "male, accessories" ,[ "normal beard black ", "peak spike",],),
  //8232"],),

  new Traits( "male, accessories" ,[ "cap ", "goat ", "small shades",],),
  //8233"],),

  new Traits( "male, accessories" ,[ "cigarette ", "do-rag ", "earring ", "mole",],),
  //8234"],),

  new Traits( "female, accessories" ,[ "classic shades ", "earring ", "red mohawk",],),
  //8235"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "knitted cap ", "small shades",],),
  //8236"],),

  new Traits( "male, accessories" ,[ "shadow beard ", "vampire hair",],),
  //8237"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "vape",],),
  //8238"],),

  new Traits( "female, accessories" ,[ "bandana ", "black lipstick ", "eye mask ", "pipe",],),
  //8239"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk ", "nerd glasses",],),
  //8240"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mole ", "regular shades ", "tiara",],),
  //8241"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "gold chain ", "mohawk dark",],),
  //8242"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "pigtails",],),
  //8243"],),

  new Traits( "male, accessories" ,[ "earring ", "peak spike ", "smile",],),
  //8244"],),

  new Traits( "male, accessories" ,[ "bandana ", "muttonchops ", "regular shades",],),
  //8245"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "pipe ", "shaved head",],),
  //8246"],),
  
  
  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "mohawk dark ", "regular shades",],),
  //8247"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "clown nose ", "earring ", "frumpy hair",],),
  //8248"],),

  new Traits( "female, accessories" ,[ "bandana ", "black lipstick ", "purple eye shadow",],),
  //8249"],),

  new Traits( "male, accessories" ,[ "cigarette ", "clown hair green ", "eye patch",],),
  //8250"],),

  new Traits( "female, accessories" ,[ "pilot helmet ", "pipe",],),
  //8251"],),

  new Traits( "female, accessories" ,[ "cigarette ", "crazy hair",],),
  //8252"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "normal beard",],),
  //8253"],),

  new Traits( "female, accessories" ,[ "mole ", "purple eye shadow ", "wild blonde",],),
  //8254"],),

  new Traits( "female, accessories" ,[ "big shades ", "mole ", "straight hair blonde",],),
  //8255"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "mohawk ", "shadow beard",],),
  //8256"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "luxurious beard ", "regular shades",],),
  //8257"],),

  new Traits( "male, accessories" ,[ "big beard ", "cap forward ", "earring ", "nerd glasses",],),
  //8258"],),

  new Traits( "male, accessories" ,[ "fedora ", "handlebars ", "horned rim glasses",],),
  //8259"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "tiara",],),
  //8260"],),

  new Traits( "female, accessories" ,[ "cigarette ", "purple lipstick ", "red mohawk",],),
  //8261"],),

  new Traits( "male, accessories" ,[ "earring ", "shaved head ", "smile",],),
  //8262"],),

  new Traits( "female, accessories" ,[ "earring ", "rosy cheeks",],),
  //8263"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "eye patch",],),
  //8264"],),

  new Traits( "female, accessories" ,[ "big shades ", "earring ", "pigtails ", "purple lipstick",],),
  //8265"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "mustache ", "regular shades",],),
  //8266"],),

  new Traits( "female, accessories" ,[ "eye patch ", "wild blonde",],),
  //8267"],),

  new Traits( "female, accessories" ,[ "clown hair green ", "hot lipstick ", "nerd glasses",],),
  //8268"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "red mohawk",],),
  //8269"],),

  new Traits( "male, accessories" ,[ "cap ", "nerd glasses ", "pipe",],),
  //8270"],),

  new Traits( "female, accessories" ,[ "bandana ", "green eye shadow ", "purple lipstick",],),
  //8271"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "headband",],),
  //8272"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "goat",],),
  //8273"],),

  new Traits( "male, accessories" ,[ "cap ", "chinstrap ", "eye mask",],),
  //8274"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "green eye shadow",],),
  //8275"],),

  new Traits( "female, accessories" ,[ "earring ", "silver chain ", "wild blonde",],),
  //8276"],),

  new Traits( "male, accessories" ,[ "hoodie ", "mole ", "small shades",],),
  //8277"],),

  new Traits( "male, accessories" ,[ "cap ", "chinstrap ", "vr",],),
  //8278"],),

  new Traits( "female, accessories" ,[ "earring ", "half shaved ", "purple eye shadow",],),
  //8279"],),

  new Traits( "male, accessories" ,[ "bandana ", "cigarette ", "clown eyes blue ", "normal beard black",],),
  //8280"],),

  new Traits( "male, accessories" ,[ "do-rag ", "goat ", "nerd glasses",],),
  //8281"],),

  new Traits( "female, accessories" ,[ "classic shades ", "purple lipstick ", "wild white hair",],),
  //8282"],),

  new Traits( "male, accessories" ,[ "eye patch ", "mohawk thin ", "muttonchops",],),
  //8283"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "earring ", "mohawk",],),
  //8284"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mohawk dark ", "normal beard",],),
  //8285"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "headband",],),
  //8286"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "cigarette ", "hot lipstick ", "straight hair",],),
  //8287"],),

  new Traits( "male, accessories" ,[ "classic shades ", "goat ", "peak spike",],),
  //8288"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "goat ", "vampire hair",],),
  //8289"],),

  new Traits( "female, accessories" ,[ "mole ", "vr ", "wild white hair",],),
  //8290"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "mohawk dark",],),
  //8291"],),

  new Traits( "male, accessories" ,[ "handlebars ", "headband",],),
  //8292"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "wild blonde",],),
  //8293"],),

  new Traits( "male, accessories" ,[ "classic shades ", "knitted cap ", "pipe",],),
  //8294"],),

  new Traits( "male, accessories" ,[ "classic shades ", "luxurious beard ", "messy hair",],),
  //8295"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "dark hair",],),
  //8296"],),

  new Traits( "male, accessories" ,[ "cap forward ", "chinstrap",],),
  //8297"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "crazy hair ", "green eye shadow",],),
  //8298"],),

  new Traits( "female, accessories" ,[ "choker ", "dark hair",],),
  //8299"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "hot lipstick ", "tassle hat",],),
  //8300"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "smile",],),
  //8301"
  
  
  new Traits( "male, accessories" ,[ "big shades ", "cap forward ", "earring ", "handlebars",],),
  //8302"],),

  new Traits( "male, accessories" ,[ "fedora ", "nerd glasses ", "normal beard",],),
  //8303"],),

  new Traits( "male, accessories" ,[ "front beard ", "horned rim glasses ", "purple hair",],),
  //8304"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cigarette ", "clown nose ", "hoodie",],),
  //8305"],),

  new Traits( "male, accessories" ,[ "do-rag ", "regular shades",],),
  //8306"],),

  new Traits( "zombie, accessories" ,[ "mustache ", "stringy hair",],),
  //8307"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "horned rim glasses ", "knitted cap",],),
  //8308"],),

  new Traits( "female, accessories" ,[ "big shades ", "knitted cap",],),
  //8309"],),

  new Traits( "female, accessories" ,[ "bandana ", "earring ", "eye patch",],),
  //8310"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "headband",],),
  //8311"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "purple hair",],),
  //8312"],),

  new Traits( "male, accessories" ,[ "cigarette ", "muttonchops ", "top hat",],),
  //8313"],),

  new Traits( "female, accessories" ,[ "clown nose ", "earring ", "mohawk thin",],),
  //8314"],),

  new Traits( "male, accessories" ,[ "cap ", "earring ", "pipe",],),
  //8315"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "cigarette ", "half shaved",],),
  //8316"],),

  new Traits( "male, accessories" ,[ "classic shades ", "cowboy hat ", "luxurious beard",],),
  //8317"],),

  new Traits( "male, accessories" ,[ "bandana ", "handlebars",],),
  //8318"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "knitted cap",],),
  //8319"],),

  new Traits( "female, accessories" ,[ "gold chain ", "rosy cheeks ", "tassle hat",],),
  //8320"],),

  new Traits( "female, accessories" ,[ "blonde short ", "blue eye shadow",],),
  //8321"],),

  new Traits( "male, accessories" ,[ "front beard ", "regular shades ", "stringy hair",],),
  //8322"],),

  new Traits( "female, accessories" ,[ "clown nose ", "frumpy hair ", "nerd glasses ", "purple lipstick",],),
  //8323"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "mohawk thin ", "nerd glasses",],),
  //8324"],),
  ],),
  
  new Traits( "male, accessories" ,[ "buck teeth ", "clown hair green ", "earring",],),
  //8325"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "green eye shadow ", "mohawk thin",],),
  //8326"],),

  new Traits( "male, accessories" ,[ "big shades ", "goat ", "knitted cap",],),
  //8327"],),

  new Traits( "male, accessories" ,[ "cigarette ", "gold chain ", "hoodie",],),
  //8328"],),

  new Traits( "male, accessories" ,[ "pipe ", "wild hair",],),
  //8329"],),

  new Traits( "female, accessories" ,[ "mohawk dark ", "purple lipstick ", "vape",],),
  //8330"],),

  new Traits( "female, accessories" ,[ "bandana ", "earring ", "regular shades",],),
  //8331"],),

  new Traits( "male, accessories" ,[ "earring ", "goat ", "peak spike",],),
  //8332"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "vr",],),
  //8333"],),

  new Traits( "male, accessories" ,[ "classic shades ", "fedora ", "muttonchops",],),
  //8334"],),

  new Traits( "male, accessories" ,[ "bandana ", "horned rim glasses ", "mustache",],),
  //8335"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "wild hair",],),
  //8336"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "small shades ", "smile",],),
  //8337"],),

  new Traits( "male, accessories" ,[ "big shades ", "knitted cap ", "vape",],),
  //8338"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "mole",],),
  //8339"],),

  new Traits( "male, accessories" ,[ "goat ", "mohawk ", "pipe",],),
  //8340"],),

  new Traits( "male, accessories" ,[ "earring ", "muttonchops ", "shaved head",],),
  //8341"],),

  new Traits( "male, accessories" ,[ "front beard ", "knitted cap ", "silver chain",],),
  //8342"],),

  new Traits( "male, accessories" ,[ "cigarette ", "messy hair ", "muttonchops ", "small shades",],),
  //8343"],),

  new Traits( "male, accessories" ,[ "big shades ", "clown hair green ", "earring ", "normal beard black",],),
  //8344"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "green eye shadow ", "half shaved",],),
  //8345"],),

  new Traits( "male, accessories" ,[ "cigarette ", "clown eyes blue ", "knitted cap ", "smile",],),
  //8346"],),

  new Traits( "female, accessories" ,[ "earring ", "red mohawk",],),
  //8347"],),

  new Traits( "male, accessories" ,[ "big beard ", "buck teeth ", "cigarette ", "classic shades ", "earring ", "mole ", "top hat",],),
  //8348"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "purple lipstick ", "welding goggles",],),
  //8349"],),

  new Traits( "female, accessories" ,[ "mole ", "pilot helmet",],),
  //8350"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk ", "mole",],),
  //8351"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "cap ", "earring",],),
  //8352"],),

  new Traits( "male, accessories" ,[ "cigarette ", "crazy hair ", "luxurious beard",],),
  //8353"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "dark hair ", "hot lipstick",],),
  //8354"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mohawk",],),
  //8355"],),

  new Traits( "female, accessories" ,[ "mohawk dark ", "nerd glasses",],),
  //8356"],),

  new Traits( "male, accessories" ,[ "clown nose ", "earring ", "front beard ", "vampire hair",],),
  //8357"],),

  new Traits( "male, accessories" ,[ "eye patch ", "messy hair",],),
  //8358"],),

  new Traits( "male, accessories" ,[ "big shades ", "front beard dark ", "hoodie",],),
  //8359"],),

  new Traits( "female, accessories" ,[ "gold chain ", "green eye shadow ", "stringy hair",],),
  //8360"],),

  new Traits( "male, accessories" ,[ "classic shades ", "muttonchops ", "police cap",],),
  //8361"],),

  new Traits( "male, accessories" ,[ "messy hair ", "smile",],),
  //8362"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "hot lipstick ", "straight hair",],),
  //8363"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "stringy hair ", "welding goggles",],),
  //8364"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "cigarette ", "wild white hair",],),
  //8365"],),

  new Traits( "male, accessories" ,[ "eye patch ", "shadow beard ", "shaved head",],),
  //8366"],),

  new Traits( "male, accessories" ,[ "cigarette ", "eye patch ", "knitted cap",],),
  //8367"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "clown hair green ", "earring",],),
  //8368"],),

  new Traits( "male, accessories" ,[ "earring ", "hoodie ", "smile",],),
  //8369"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "regular shades",],),
  //8370"],),

  new Traits( "male, accessories" ,[ "mustache",],),
  //8371"],),

  new Traits( "male, accessories" ,[ "big shades ", "chinstrap ", "stringy hair",],),
  //8372"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "smile",],),
  //8373"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "purple lipstick ", "wild blonde",],),
  //8374"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "regular shades",],),
  //8375"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "headband ", "nerd glasses",],),
  //8376"],),

  new Traits( "male, accessories" ,[ "do-rag ", "luxurious beard ", "small shades",],),
  //8377"],),

  new Traits( "male, accessories" ,[ "clown nose ", "horned rim glasses ", "mohawk",],),
  //8378"],),

  new Traits( "male, accessories" ,[ "eye mask ", "handlebars ", "stringy hair",],),
  //8379"],),

  new Traits( "male, accessories" ,[ "earring ", "vr",],),
  //8380"],),

  new Traits( "male, accessories" ,[ "bandana ", "muttonchops",],),
  //8381"],),

  new Traits( "male, accessories" ,[ "cigarette ", "crazy hair ", "nerd glasses",],),
  //8382"],),

  new Traits( "male, accessories" ,[ "eye patch ", "goat ", "mohawk thin",],),
  //8383"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "spots",],),
  //8384"],),

  new Traits( "male, accessories" ,[ "frown ", "frumpy hair ", "mole ", "silver chain",],),
  //8385"],),

  new Traits( "zombie, accessories" ,[ "classic shades ", "crazy hair",],),
  //8386"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "clown eyes green ", "earring ", "purple lipstick",],),
  //8387"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mohawk ", "normal beard",],),
  //8388"],),

  new Traits( "male, accessories" ,[ "cap forward ", "frown ", "mustache",],),
  //8389"],),

  new Traits( "male, accessories" ,[ "frown ", "goat ", "nerd glasses ", "stringy hair",],),
  //8390"],),

  new Traits( "male, accessories" ,[ "big shades ", "knitted cap",],),
  //8391"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "orange side",],),
  //8392"],),

  new Traits( "male, accessories" ,[ "cigarette ", "crazy hair ", "smile",],),
  //8393"],),

  new Traits( "female, accessories" ,[ "big shades ", "blonde bob ", "purple lipstick",],),
  //8394"],),

  new Traits( "male, accessories" ,[ "big beard ", "shaved head ", "silver chain",],),
  //8395"],),

  new Traits( "male, accessories" ,[ "mole ", "stringy hair",],),
  //8396"],),

  new Traits( "female, accessories" ,[ "mole ", "straight hair dark",],),
  //8397"],),

  new Traits( "male, accessories" ,[ "handlebars ", "peak spike ", "pipe",],),
  //8398"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "frumpy hair ", "purple eye shadow",],),
  //8399"],),

  new Traits( "female, accessories" ,[ "bandana ", "big shades ", "gold chain ", "hot lipstick",],),
  //8400"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "bandana ", "handlebars",],),
  //8401"],),

  new Traits( "male, accessories" ,[ "big beard ", "cowboy hat ", "eye mask",],),
  //8402"],),

  new Traits( "male, accessories" ,[ "classic shades",],),
  //8403"],),

  new Traits( "male, accessories" ,[ "goat ", "hoodie ", "vape",],),
  //8404"],),

  new Traits( "female, accessories" ,[ "big shades ", "cigarette ", "tassle hat",],),
  //8405"],),

  new Traits( "female, accessories" ,[ "earring ", "headband ", "purple lipstick",],),
  //8406"],),

  new Traits( "male, accessories" ,[ "cigarette ", "fedora ", "normal beard ", "vr",],),
  //8407"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mohawk dark ", "muttonchops",],),
  //8408"],),

  new Traits( "male, accessories" ,[ "eye patch ", "muttonchops ", "shaved head",],),
  //8409"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "earring ", "front beard",],),
  //8410"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "clown hair green",],),
  //8411"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "nerd glasses ", "vape, "wild hair",],),
  //8412"],),

  new Traits( "male, accessories" ,[ "fedora ", "smile",],),
  //8413"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "wild blonde",],),
  //8414"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "stringy hair",],),
  //8415"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "purple lipstick ", "tassle hat",],),
  //8416"],),

  new Traits( "female, accessories" ,[ "mole ", "wild white hair",],),
  //8417"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "half shaved ", "hot lipstick",],),
  //8418"],),

  new Traits( "female, accessories" ,[ "blonde short ", "mole",],),
  //8419"],),

  new Traits( "female, accessories" ,[ "cigarette ", "tiara",],),
  //8420"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "regular shades ", "wild hair",],),
  //8421"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "mohawk ", "muttonchops",],),
  //8422"],),

  new Traits( "male, accessories" ,[ "earring ", "knitted cap ", "normal beard black",],),
  //8423"],),

  new Traits( "female, accessories" ,[ "bandana ", "clown eyes blue",],),
  //8424"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "mohawk thin ", "purple eye shadow",],),
  //8425"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "welding goggles ", "wild blonde",],),
  //8426"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "normal beard black ", "peak spike",],),
  //8427"],),

  new Traits( "female, accessories" ,[ "blonde short ", "clown eyes blue ", "earring",],),
  //8428"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "normal beard black ", "stringy hair",],),
  //8429"],),

  new Traits( "male, accessories" ,[ "frown ", "mohawk dark ", "small shades",],),
  //8430"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "clown nose ", "purple lipstick",],),
  //8431"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "eye patch ", "mole ", "shadow beard",],),
  //8432"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mohawk thin ", "mole",],),
  //8433"],),

  new Traits( "female, accessories" ,[ "eye mask ", "purple lipstick ", "straight hair dark",],),
  //8434"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "nerd glasses",],),
  //8435"],),

  new Traits( "female, accessories" ,[ "bandana ", "horned rim glasses",],),
  //8436"],),

  new Traits( "female, accessories" ,[ "bandana ", "gold chain",],),
  //8437"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "cigarette ", "mohawk dark ", "mole",],),
  //8438"],),

  new Traits( "female, accessories" ,[ "choker ", "hot lipstick ", "messy hair",],),
  //8439"],),

  new Traits( "female, accessories" ,[ "earring ", "eye patch ", "half shaved ", "hot lipstick",],),
  //8440"],),

  new Traits( "male, accessories" ,[ "goat ", "small shades ", "wild hair",],),
  //8441"],),

  new Traits( "male, accessories" ,[ "eye mask ", "peak spike",],),
  //8442"],),

  new Traits( "male, accessories" ,[ "cigarette ", "crazy hair ", "earring ", "normal beard",],),
  //8443"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "muttonchops ", "shaved head",],),
  //8444"],),

  new Traits( "male, accessories" ,[ "big shades ", "hoodie ", "normal beard ", "smile",],),
  //8445"],),

  new Traits( "male, accessories" ,[ "bandana ", "classic shades ", "earring ", "goat",],),
  //8446"],),

  new Traits( "female, accessories" ,[ "gold chain ", "messy hair ", "rosy cheeks",],),
  //8447"],),

  new Traits( "male, accessories" ,[ "frown ", "frumpy hair ", "goat ", "small shades",],),
  //8448"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "nerd glasses",],),
  //8449"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "headband ", "hot lipstick",],),
  //8450"],),

  new Traits( "male, accessories" ,[ "earring ", "messy hair ", "regular shades",],),
  //8451"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "muttonchops",],),
  //8452"],),

  new Traits( "male, accessories" ,[ "eye mask ", "knitted cap ", "muttonchops",],),
  //8453"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "straight hair blonde",],),
  //8454"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "muttonchops ", "police cap",],),
  //8455"],),

  new Traits( "female, accessories" ,[ "cigarette ", "stringy hair",],),
  //8456"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "frumpy hair ", "normal beard",],),
  //8457"],),

  new Traits( "female, accessories" ,[ "eye mask ", "pipe ", "wild hair",],),
  //8458"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "wild hair",],),
  //8459"],),

  new Traits( "male, accessories" ,[ "classic shades ", "normal beard ", "wild hair",],),
  //8460"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "welding goggles ", "wild hair",],),
  //8461"],),

  new Traits( "male, accessories" ,[ "bandana ", "eye patch ", "pipe",],),
  //8462"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "frown ", "muttonchops",],),
  //8463"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "normal beard",],),
  //8464"],),

  new Traits( "female, accessories" ,[ "cigarette ", "pilot helmet ", "purple lipstick",],),
  //8465"],),

  new Traits( "male, accessories" ,[ "eye patch ", "handlebars ", "headband",],),
  //8466"],),

  new Traits( "female, accessories" ,[ "gold chain ", "tassle hat",],),
  //8467"],),

  new Traits( "male, accessories" ,[ "earring ", "gold chain ", "mohawk thin",],),
  //8468"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mustache ", "purple hair ", "small shades",],),
  //8469"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "mohawk thin",],),
  //8470"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "goat ", "police cap",],),
  //8471"],),

  new Traits( "zombie, accessories" ,[ "mohawk thin ", "small shades",],),
  //8472"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cigarette ", "crazy hair",],),
  //8473"],),

  new Traits( "male, accessories" ,[ "cap forward ", "horned rim glasses",],),
  //8474"],),

  new Traits( "male, accessories" ,[ "mole ", "peak spike",],),
  //8475"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "stringy hair",],),
  //8476"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "handlebars",],),
  //8477"],),

  new Traits( "male, accessories" ,[ "muttonchops ", "peak spike ", "vr",],),
  //8478"],),

  new Traits( "male, accessories" ,[ "clown nose ", "earring ", "nerd glasses ", "purple hair",],),
  //8479"],),

  new Traits( "male, accessories" ,[ "cigarette ", "eye mask ", "frumpy hair",],),
  //8480"],),

  new Traits( "male, accessories" ,[ "cigarette ", "headband ", "small shades",],),
  //8481"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "smile",],),
  //8482"],),

  new Traits( "female, accessories" ,[ "earring ", "frumpy hair ", "green eye shadow ", "purple lipstick",],),
  //8483"],),

  new Traits( "male, accessories" ,[ "earring ", "regular shades ", "shaved head",],),
  //8484"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "purple eye shadow ", "tassle hat ", "vape",],),
  //8485"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "police cap ", "silver chain",],),
  //8486"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "cigarette ", "green eye shadow",],),
  //8487"],),

  new Traits( "male, accessories" ,[ "eye mask ", "goat ", "peak spike",],),
  //8488"],),

  new Traits( "male, accessories" ,[ "cap forward ", "vr",],),
  //8489"],),

  new Traits( "male, accessories" ,[ "eye patch ", "frumpy hair ", "muttonchops",],),
  //8490"],),

  new Traits( "male, accessories" ,[ "chinstrap",],),
  //8491"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "shadow beard ", "small shades",],),
  //8492"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "pipe ", "tiara",],),
  //8493"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard ", "peak spike",],),
  //8494"],),

  new Traits( "female, accessories" ,[ "bandana ", "earring ", "mole ", "purple lipstick",],),
  //8495"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "gold chain ", "half shaved",],),
  //8496"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "crazy hair ", "purple eye shadow",],),
  //8497"],),

  new Traits( "ape, accessories" ,[ "regular shades ", "top hat",],),
  //8498"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "hoodie ", "rosy cheeks",],),
  //8499"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "shadow beard ", "stringy hair",],),
  //8500"],),

  new Traits( "male, accessories" ,[ "do-rag ", "handlebars ", "nerd glasses",],),
  //8501"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "frumpy hair ", "vape",],),
  //8502"],),

  new Traits( "male, accessories" ,[ "messy hair ", "muttonchops ", "nerd glasses",],),
  //8503"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "eye patch ", "goat",],),
  //8504"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "headband",],),
  //8505"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "blue eye shadow ", "medical mask",],),
  //8506"],),

  new Traits( "male, accessories" ,[ "big shades ", "hoodie ", "smile",],),
  //8507"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "mohawk thin",],),
  //8508"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "mohawk thin ", "purple lipstick",],),
  //8509"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk ", "vr",],),
  //8510"],),

  new Traits( "female, accessories" ,[ "spots ", "wild white hair",],),
  //8511"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "cigarette ", "stringy hair",],),
  //8512"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "normal beard ", "wild hair",],),
  //8513"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "hot lipstick ", "straight hair dark",],),
  //8514"],),

  new Traits( "male, accessories" ,[ "big beard ", "hoodie",],),
  //8515"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "straight hair dark ", "vape",],),
  //8516"],),

  new Traits( "male, accessories" ,[ "bandana ", "eye patch ", "handlebars",],),
  //8517"],),

  new Traits( "male, accessories" ,[ "mustache ", "regular shades ", "stringy hair",],),
  //8518"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk",],),
  //8519"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "shadow beard ", "small shades",],),
  //8520"],),

  new Traits( "male, accessories" ,[ "big shades ", "luxurious beard ", "peak spike",],),
  //8521"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "muttonchops ", "vr",],),
  //8522"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "earring ", "purple eye shadow",],),
  //8523"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "clown hair green",],),
  //8524"],),

  new Traits( "male, accessories" ,[ "clown nose ", "police cap",],),
  //8525"],),

  new Traits( "female, accessories" ,[ "classic shades ", "straight hair dark",],),
  //8526"],),

  new Traits( "female, accessories" ,[ "eye mask ", "tiara",],),
  //8527"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "eye mask ", "stringy hair",],),
  //8528"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "purple lipstick ", "vr",],),
  //8529"],),

  new Traits( "male, accessories" ,[ "cigarette ", "fedora ", "regular shades",],),
  //8530"],),

  new Traits( "zombie, accessories" ,[ "goat ", "regular shades ", "stringy hair",],),
  //8531"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "top hat",],),
  //8532"],),

  new Traits( "female, accessories" ,[ "half shaved ", "nerd glasses ", "purple lipstick",],),
  //8533"],),

  new Traits( "male, accessories" ,[ "messy hair ", "normal beard black ", "vr",],),
  //8534"],),

  new Traits( "female, accessories" ,[ "dark hair ", "green eye shadow ", "purple lipstick",],),
  //8535"],),

  new Traits( "male, accessories" ,[ "eye patch ", "shadow beard ", "shaved head",],),
  //8536"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "regular shades ", "straight hair dark",],),
  //8537"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "stringy hair",],),
  //8538"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "earring ", "green eye shadow ", "hot lipstick",],),
  //8539"],),

  new Traits( "male, accessories" ,[ "mohawk ", "normal beard black",],),
  //8540"],),

  new Traits( "male, accessories" ,[ "mohawk ", "normal beard ", "regular shades",],),
  //8541"],),

  new Traits( "male, accessories" ,[ "muttonchops ", "stringy hair",],),
  //8542"],),

  new Traits( "male, accessories" ,[ "cap ", "earring ", "horned rim glasses",],),
  //8543"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "mohawk dark",],),
  //8544"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "mohawk thin ", "shadow beard",],),
  //8545"],),

  new Traits( "male, accessories" ,[ "frown ", "top hat",],),
  //8546"],),

  new Traits( "male, accessories" ,[ "cigarette ", "classic shades ", "frumpy hair ", "normal beard black",],),
  //8547"],),

  new Traits( "female, accessories" ,[ "bandana ", "clown eyes blue ", "hot lipstick",],),
  //8548"],),

  new Traits( "male, accessories" ,[ "muttonchops",],),
  //8549"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "purple hair ", "shadow beard",],),
  //8550"],),

  new Traits( "male, accessories" ,[ "earring ", "knitted cap ", "smile",],),
  //8551"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "pink with hat",],),
  //8552"],),

  new Traits( "zombie, accessories" ,[ "front beard dark",],),
  //8553"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora ", "gold chain",],),
  //8554"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "regular shades",],),
  //8555"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "purple eye shadow ", "tassle hat",],),
  //8556"],),

  new Traits( "male, accessories" ,[ "eye mask ", "front beard ", "peak spike ", "pipe",],),
  //8557"],),

  new Traits( "male, accessories" ,[ "earring ", "mustache ", "wild hair",],),
  //8558"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "horned rim glasses ", "messy hair",],),
  //8559"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "horned rim glasses ", "straight hair",],),
  //8560"],),

  new Traits( "male, accessories" ,[ "cap forward ", "rosy cheeks",],),
  //8561"],),

  new Traits( "male, accessories" ,[ "beanie ", "earring",],),
  //8562"],),

  new Traits( "male, accessories" ,[ "cigarette ", "crazy hair ", "earring ", "nerd glasses",],),
  //8563"],),

  new Traits( "male, accessories" ,[ "big beard ", "cap forward",],),
  //8564"],),

  new Traits( "female, accessories" ,[ "blonde short ", "clown eyes blue",],),
  //8565"],),

  new Traits( "female, accessories" ,[ "vape, "wild blonde",],),
  //8566"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "frumpy hair ", "nerd glasses",],),
  //8567"],),

  new Traits( "male, accessories" ,[ "shadow beard ", "vr",],),
  //8568"],),

  new Traits( "male, accessories" ,[ "big beard ", "cap ", "nerd glasses",],),
  //8569"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "straight hair",],),
  //8570"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "rosy cheeks ", "shadow beard",],),
  //8571"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mohawk ", "regular shades",],),
  //8572"],),

  new Traits( "male, accessories" ,[ "do-rag ", "goat",],),
  //8573"],),

  new Traits( "male, accessories" ,[ "cap ", "earring ", "silver chain ", "vr",],),
  //8574"],),
  
  
  new Traits( "male, accessories" ,[ "purple hair ", "vr",],),
  //8575"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "cigarette ", "pigtails",],),
  //8576"],),

  new Traits( "female, accessories" ,[ "silver chain ", "wild blonde",],),
  //8577"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "normal beard",],),
  //8578"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "green eye shadow ", "pink with hat",],),
  //8579"],),

  new Traits( "female, accessories" ,[ "cap ", "clown eyes green ", "earring ", "purple lipstick",],),
  //8580"],),

  new Traits( "male, accessories" ,[ "beanie ", "gold chain ", "horned rim glasses",],),
  //8581"],),

  new Traits( "female, accessories" ,[ "blonde short ", "clown eyes green ", "pipe",],),
  //8582"],),

  new Traits( "male, accessories" ,[ "front beard ", "police cap",],),
  //8583"],),

  new Traits( "male, accessories" ,[ "clown nose ", "earring ", "mohawk ", "muttonchops",],),
  //8584"],),

  new Traits( "female, accessories" ,[ "dark hair ", "nerd glasses ", "purple lipstick",],),
  //8585"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "mohawk thin",],),
  //8586"],),

  new Traits( "male, accessories" ,[ "earring ", "nerd glasses ", "wild hair",],),
  //8587"],),

  new Traits( "male, accessories" ,[ "headband ", "luxurious beard ", "small shades",],),
  //8588"],),

  new Traits( "female, accessories" ,[ "pigtails ", "purple eye shadow",],),
  //8589"],),

  new Traits( "male, accessories" ,[ "cap forward ", "normal beard black",],),
  //8590"],),

  new Traits( "male, accessories" ,[ "eye patch ", "headband ", "muttonchops",],),
  //8591"],),

  new Traits( "female, accessories" ,[ "big shades ", "mole ", "wild blonde",],),
  //8592"],),

  new Traits( "male, accessories" ,[ "normal beard black",],),
  //8593"],),

  new Traits( "male, accessories" ,[ "mohawk ", "nerd glasses ", "smile",],),
  //8594"],),

  new Traits( "female, accessories" ,[ "mohawk dark ", "vr",],),
  //8595"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "goat ", "regular shades",],),
  //8596"],),

  new Traits( "male, accessories" ,[ "bandana ", "normal beard",],),
  //8597"],),

  new Traits( "male, accessories" ,[ "big shades ", "shadow beard ", "shaved head",],),
  //8598"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "normal beard black ", "pipe",],),
  //8599"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "dark hair",],),
  //8600"],),

  new Traits( "male, accessories" ,[ "classic shades ", "purple hair",],),
  //8601"],),

  new Traits( "female, accessories" ,[ "messy hair ", "purple eye shadow ", "purple lipstick",],),
  //8602"],),

  new Traits( "male, accessories" ,[ "big shades ", "normal beard black ", "stringy hair",],),
  //8603"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "knitted cap",],),
  //8604"],),

  new Traits( "female, accessories" ,[ "blonde short ", "cigarette",],),
  //8605"],),

  new Traits( "male, accessories" ,[ "gold chain ", "knitted cap ", "luxurious beard",],),
  //8606"],),

  new Traits( "male, accessories" ,[ "classic shades ", "shaved head",],),
  //8607"],),

  new Traits( "male, accessories" ,[ "cap ", "medical mask ", "smile",],),
  //8608"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "mohawk dark",],),
  //8609"],),

  new Traits( "male, accessories" ,[ "cap forward ", "cigarette ", "eye patch ", "mole",],),
  //8610"],),

  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "shaved head",],),
  //8611"],),

  new Traits( "male, accessories" ,[ "stringy hair ", "vr",],),
  //8612"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "messy hair",],),
  //8613"],),

  new Traits( "male, accessories" ,[ "cap ", "chinstrap ", "clown eyes green ", "earring",],),
  //8614"],),

  new Traits( "male, accessories" ,[ "mole ", "smile ", "stringy hair",],),
  //8615"],),

  new Traits( "male, accessories" ,[ "cap ", "front beard dark ", "nerd glasses",],),
  //8616"],),

  new Traits( "female, accessories" ,[ "big shades ", "earring ", "orange side ", "pipe",],),
  //8617"],),

  new Traits( "male, accessories" ,[ "earring ", "hoodie ", "medical mask ", "muttonchops ", "regular shades",],),
  //8618"],),

  new Traits( "male, accessories" ,[ "classic shades ", "messy hair ", "shadow beard",],),
  //8619"],),

  new Traits( "male, accessories" ,[ "beanie ", "regular shades",],),
  //8620"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "earring ", "straight hair dark",],),
  //8621"],),

  new Traits( "male, accessories" ,[ "regular shades ", "smile",],),
  //8622"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "regular shades ", "straight hair dark",],),
  //8623"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "regular shades ", "rosy cheeks",],),
  //8624"],),

  new Traits( "male, accessories" ,[ "mole ", "top hat",],),
  //8625"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "peak spike",],),
  //8626"],),

  new Traits( "male, accessories" ,[ "cigarette ", "do-rag ", "earring ", "muttonchops",],),
  //8627"],),

  new Traits( "male, accessories" ,[ "cap forward ", "clown eyes green",],),
  //8628"],),

  new Traits( "female, accessories" ,[ "clown nose ", "tassle hat",],),
  //8629"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "tiara",],),
  //8630"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "purple eye shadow ", "straight hair dark",],),
  //8631"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mole ", "wild hair",],),
  //8632"],),

  new Traits( "male, accessories" ,[ "cap forward ", "gold chain ", "regular shades",],),
  //8633"],),

  new Traits( "male, accessories" ,[ "frown ", "pipe ", "shaved head",],),
  //8634"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "purple lipstick ", "red mohawk",],),
  //8635"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "clown eyes green ", "hot lipstick",],),
  //8636"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "normal beard",],),
  //8637"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "pink with hat ", "silver chain",],),
  //8638"],),

  new Traits( "female, accessories" ,[ "clown eyes green",],),
  //8639"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "vampire hair",],),
  //8640"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "frumpy hair",],),
  //8641"],),

  new Traits( "male, accessories" ,[ "bandana ", "eye patch ", "shadow beard",],),
  //8642"],),

  new Traits( "male, accessories" ,[ "muttonchops ", "silver chain ", "wild hair",],),
  //8643"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "messy hair",],),
  //8644"],),

  new Traits( "male, accessories" ,[ "cap ", "front beard ", "horned rim glasses",],),
  //8645"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "mohawk thin ", "purple lipstick",],),
  //8646"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "purple lipstick ", "stringy hair",],),
  //8647"],),

  new Traits( "male, accessories" ,[ "eye patch ", "mohawk thin ", "mole",],),
  //8648"],),

  new Traits( "male, accessories" ,[ "do-rag ", "horned rim glasses ", "muttonchops",],),
  //8649"],),

  new Traits( "male, accessories" ,[ "big shades ", "messy hair ", "shadow beard",],),
  //8650"],),

  new Traits( "male, accessories" ,[ "clown nose ", "cowboy hat ", "horned rim glasses ", "shadow beard",],),
  //8651"],),

  new Traits( "male, accessories" ,[ "bandana ", "chinstrap",],),
  //8652"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mole ", "peak spike",],),
  //8653"],),

  new Traits( "male, accessories" ,[ "earring ", "gold chain ", "mohawk dark",],),
  //8654"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "mohawk dark",],),
  //8655"],),

  new Traits( "female, accessories" ,[ "eye patch ", "mohawk thin",],),
  //8656"],),

  new Traits( "female, accessories" ,[ "mohawk ", "pipe",],),
  //8657"],),

  new Traits( "male, accessories" ,[ "pipe ", "shadow beard ", "smile ", "wild hair",],),
  //8658"],),

  new Traits( "male, accessories" ,[ "gold chain ", "shadow beard ", "stringy hair",],),
  //8659"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard ", "medical mask",],),
  //8660"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "horned rim glasses ", "shadow beard",],),
  //8661"],),

  new Traits( "female, accessories" ,[ "bandana ", "mole",],),
  //8662"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cap ", "cigarette ", "eye patch",],),
  //8663"],),

  new Traits( "male, accessories" ,[ "eye mask ", "luxurious beard ", "police cap",],),
  //8664"],),

  new Traits( "female, accessories" ,[ "purple eye shadow ", "red mohawk",],),
  //8665"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "peak spike",],),
  //8666"],),

  new Traits( "male, accessories" ,[ "frown ", "muttonchops ", "wild hair",],),
  //8667"],),

  new Traits( "male, accessories" ,[ "handlebars ", "wild hair",],),
  //8668"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "dark hair ", "medical mask",],),
  //8669"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "purple lipstick ", "silver chain ", "straight hair blonde",],),
  //8670"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "muttonchops ", "shaved head",],),
  //8671"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "clown eyes blue ", "messy hair",],),
  //8672"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "luxurious beard",],),
  //8673"],),

  new Traits( "female, accessories" ,[ "earring ", "pipe ", "purple lipstick ", "wild hair",],),
  //8674"],),

  new Traits( "male, accessories" ,[ "clown nose ", "fedora",],),
  //8675"],),

  new Traits( "male, accessories" ,[ "fedora ", "vr",],),
  //8676"],),

  new Traits( "male, accessories" ,[ "cap ", "rosy cheeks ", "small shades",],),
  //8677"],),

  new Traits( "male, accessories" ,[ "eye patch ", "muttonchops ", "stringy hair",],),
  //8678"],),

  new Traits( "male, accessories" ,[ "big shades ", "chinstrap ", "wild hair",],),
  //8679"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "cigarette ", "clown nose",],),
  //8680"],),

  new Traits( "male, accessories" ,[ "big shades ", "mohawk thin ", "normal beard",],),
  //8681"],),

  new Traits( "male, accessories" ,[ "cigarette ", "nerd glasses ", "normal beard ", "shaved head",],),
  //8682"],),

  new Traits( "female, accessories" ,[ "mole ", "purple lipstick ", "wild hair",],),
  //8683"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "muttonchops ", "vampire hair",],),
  //8684"],),

  new Traits( "male, accessories" ,[ "smile ", "stringy hair ", "vr",],),
  //8685"],),

  new Traits( "male, accessories" ,[ "gold chain ", "hoodie",],),
  //8686"],),

  new Traits( "male, accessories" ,[ "classic shades ", "fedora ", "mole",],),
  //8687"],),

  new Traits( "male, accessories" ,[ "muttonchops ", "peak spike",],),
  //8688"],),

  new Traits( "male, accessories" ,[ "cigarette ", "classic shades ", "clown hair green",],),
  //8689"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "pipe",],),
  //8690"],),

  new Traits( "male, accessories" ,[ "big shades ", "vampire hair",],),
  //8691"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "headband ", "normal beard black",],),
  //8692"],),

  new Traits( "female, accessories" ,[ "big shades ", "earring ", "knitted cap",],),
  //8693"],),

  new Traits( "male, accessories" ,[ "earring ", "peak spike ", "small shades",],),
  //8694"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "mohawk dark",],),
  //8695"],),

  new Traits( "male, accessories" ,[ "big shades ", "medical mask ", "vampire hair",],),
  //8696"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk ", "welding goggles",],),
  //8697"],),

  new Traits( "male, accessories" ,[ "bandana ", "clown eyes green ", "luxurious beard",],),
  //8698"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "eye patch ", "mole",],),
  //8699"],),

  new Traits( "male, accessories" ,[ "cigarette ", "classic shades ", "frown ", "hoodie ", "normal beard",],),
  //8700"],),

  new Traits( "male, accessories" ,[ "clown nose ", "mole ", "normal beard black ", "wild hair",],),
  //8701"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk dark ", "mole ", "purple lipstick",],),
  //8702"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "do-rag",],),
  //8703"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "purple eye shadow ", "straight hair",],),
  //8704"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "purple hair",],),
  //8705"],),

  new Traits( "male, accessories" ,[ "earring ", "mole ", "shaved head",],),
  //8706"],),

  new Traits( "male, accessories" ,[ "earring ", "shadow beard ", "small shades ", "vampire hair",],),
  //8707"],),

  new Traits( "male, accessories" ,[ "medical mask ", "mustache ", "peak spike",],),
  //8708"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "hot lipstick ", "wild blonde",],),
  //8709"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "luxurious beard ", "mohawk",],),
  //8710"],),

  new Traits( "male, accessories" ,[ "regular shades ", "vampire hair",],),
  //8711"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "front beard ", "top hat",],),
  //8712"],),

  new Traits( "male, accessories" ,[ "hoodie ", "horned rim glasses",],),
  //8713"],),

  new Traits( "male, accessories" ,[ "do-rag ", "handlebars ", "horned rim glasses",],),
  //8714"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "frown ", "mohawk ", "mustache",],),
  //8715"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "headband ", "medical mask",],),
  //8716"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "horned rim glasses ", "normal beard black",],),
  //8717"],),

  new Traits( "male, accessories" ,[ "earring ", "small shades ", "wild hair",],),
  //8718"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "hot lipstick ", "tassle hat",],),
  //8719"],),

  new Traits( "male, accessories" ,[ "classic shades ", "front beard dark ", "top hat",],),
  //8720"],),

  new Traits( "male, accessories" ,[ "pipe ", "stringy hair",],),
  //8721"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cap",],),
  //8722"],),

  new Traits( "female, accessories" ,[ "cigarette ", "wild blonde",],),
  //8723"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "nerd glasses",],),
  //8724"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "pink with hat ", "purple lipstick",],),
  //8725"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown hair green ", "vape",],),
  //8726"],),

  new Traits( "male, accessories" ,[ "cigarette ", "frumpy hair ", "handlebars",],),
  //8727"],),

  new Traits( "male, accessories" ,[ "handlebars ", "mohawk dark ", "nerd glasses",],),
  //8728"],),

  new Traits( "male, accessories" ,[ "cigarette ", "hoodie ", "nerd glasses",],),
  //8729"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard ", "stringy hair",],),
  //8730"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "tiara",],),
  //8731"],),

  new Traits( "female, accessories" ,[ "classic shades ", "dark hair ", "spots",],),
  //8732"],),

  new Traits( "female, accessories" ,[ "welding goggles ", "wild white hair",],),
  //8733"],),

  new Traits( "male, accessories" ,[ "bandana ", "eye mask ", "normal beard black",],),
  //8734"],),

  new Traits( "male, accessories" ,[ "cap ", "mustache",],),
  //8735"],),

  new Traits( "female, accessories" ,[ "messy hair ", "nerd glasses",],),
  //8736"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "shadow beard ", "vape",],),
  //8737"],),

  new Traits( "male, accessories" ,[ "beanie ", "clown eyes green",],),
  //8738"],),

  new Traits( "male, accessories" ,[ "messy hair ", "regular shades",],),
  //8739"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "mohawk thin",],),
  //8740"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "normal beard ", "police cap",],),
  //8741"],),

  new Traits( "female, accessories" ,[ "cigarette ", "eye mask",],),
  //8742"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "clown hair green",],),
  //8743"],),

  new Traits( "female, accessories" ,[ "clown hair green ", "horned rim glasses",],),
  //8744"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "purple eye shadow ", "straight hair blonde",],),
  //8745"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "hot lipstick ", "tassle hat",],),
  //8746"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "purple lipstick ", "straight hair dark",],),
  //8747"],),

  new Traits( "male, accessories" ,[ "headband ", "mustache ", "rosy cheeks",],),
  //8748"],),

  new Traits( "female, accessories" ,[ "cigarette ", "clown nose ", "frumpy hair",],),
  //8749"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "orange side ", "rosy cheeks",],),
  //8750"],),

  new Traits( "male, accessories" ,[ "do-rag ", "normal beard",],),
  //8751"],),

  new Traits( "male, accessories" ,[ "beanie ", "regular shades",],),
  //8752"],),
  
  
  new Traits( "male, accessories" ,[ "buck teeth ", "cap forward ", "earring ", "front beard dark ", "horned rim glasses",],),
  //8753"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "mustache",],),
  //8754"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "mohawk thin",],),
  //8755"],),

  new Traits( "male, accessories" ,[ "peak spike ", "rosy cheeks ", "small shades",],),
  //8756"],),

  new Traits( "female, accessories" ,[ "earring ", "pigtails ", "vape",],),
  //8757"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "mohawk dark",],),
  //8758"],),

  new Traits( "female, accessories" ,[ "big shades ", "blonde short ", "earring",],),
  //8759"],),

  new Traits( "female, accessories" ,[ "purple lipstick ", "regular shades ", "wild blonde",],),
  //8760"],),

  new Traits( "male, accessories" ,[ "cap ", "cigarette ", "front beard dark ", "regular shades",],),
  //8761"],),

  new Traits( "male, accessories" ,[ "handlebars ", "mohawk thin ", "vape",],),
  //8762"],),

  new Traits( "female, accessories" ,[ "headband ", "vape",],),
  //8763"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "pipe ", "straight hair",],),
  //8764"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "straight hair dark",],),
  //8765"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "classic shades ", "pipe",],),
  //8766"],),

  new Traits( "female, accessories" ,[ "earring ", "horned rim glasses ", "hot lipstick ", "wild white hair",],),
  //8767"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "stringy hair ", "vr",],),
  //8768"],),

  new Traits( "female, accessories" ,[ "mohawk dark ", "mole",],),
  //8769"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "earring ", "hoodie ", "mole ", "normal beard black",],),
  //8770"],),

  new Traits( "female, accessories" ,[ "classic shades ", "earring ", "hot lipstick ", "straight hair",],),
  //8771"],),

  new Traits( "male, accessories" ,[ "front beard ", "frown ", "hoodie ", "small shades",],),
  //8772"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "cigarette ", "earring ", "wild hair",],),
  //8773"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "earring ", "straight hair",],),
  //8774"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "pipe ", "straight hair",],),
  //8775"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "straight hair blonde",],),
  //8776"],),

  new Traits( "male, accessories" ,[ "cigarette ", "handlebars ", "wild hair",],),
  //8777"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "horned rim glasses",],),
  //8778"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "tiara",],),
  //8779"],),

  new Traits( "zombie, accessories" ,[ "frumpy hair ", "shadow beard",],),
  //8780"],),

  new Traits( "male, accessories" ,[ "big shades ", "frown ", "knitted cap ", "shadow beard",],),
  //8781"],),

  new Traits( "female, accessories" ,[ "classic shades ", "tassle hat",],),
  //8782"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "goat ", "peak spike",],),
  //8783"],),

  new Traits( "male, accessories" ,[ "cap forward ", "chinstrap ", "classic shades ", "earring",],),
  //8784"],),

  new Traits( "male, accessories" ,[ "beanie ", "earring ", "luxurious beard",],),
  //8785"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "regular shades ", "smile",],),
  //8786"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "earring ", "vr",],),
  //8787"],),

  new Traits( "male, accessories" ,[ "bandana ", "front beard ", "mole",],),
  //8788"],),

  new Traits( "male, accessories" ,[ "messy hair ", "normal beard ", "silver chain",],),
  //8789"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "horned rim glasses ", "pipe ", "wild hair",],),
  //8790"],),

  new Traits( "male, accessories" ,[ "big beard ", "cowboy hat ", "small shades",],),
  //8791"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "purple eye shadow ", "stringy hair",],),
  //8792"],),

  new Traits( "female, accessories" ,[ "classic shades ", "red mohawk",],),
  //8793"],),

  new Traits( "male, accessories" ,[ "cigarette ", "horned rim glasses ", "purple hair",],),
  //8794"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blonde short",],),
  //8795"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "muttonchops ", "vr",],),
  //8796"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "clown eyes blue ", "half shaved",],),
  //8797"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "messy hair ", "vape",],),
  //8798"],),

  new Traits( "male, accessories" ,[ "goat ", "hoodie",],),
  //8799"],),

  new Traits( "female, accessories" ,[ "earring ", "purple eye shadow ", "red mohawk",],),
  //8800"],),

  new Traits( "male, accessories" ,[ "smile ", "top hat",],),
  //8801"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "clown eyes green ", "earring ", "mole",],),
  //8802"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "cowboy hat ", "frown",],),
  //8803"],),

  new Traits( "female, accessories" ,[ "big shades ", "vape, "wild white hair",],),
  //8804"],),

  new Traits( "female, accessories" ,[ "gold chain ", "pilot helmet ", "purple lipstick",],),
  //8805"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "shadow beard ", "small shades",],),
  //8806"],),

  new Traits( "female, accessories" ,[ "cap ", "clown eyes blue ", "purple lipstick",],),
  //8807"],),

  new Traits( "male, accessories" ,[ "bandana ", "normal beard black ", "vr",],),
  //8808"],),

  new Traits( "female, accessories" ,[ "rosy cheeks ", "stringy hair",],),
  //8809"],),

  new Traits( "female, accessories" ,[ "classic shades ", "mohawk thin ", "purple lipstick",],),
  //8810"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "handlebars ", "vampire hair",],),
  //8811"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "shaved head",],),
  //8812"],),

  new Traits( "female, accessories" ,[ "cap ", "horned rim glasses ", "hot lipstick",],),
  //8813"],),

  new Traits( "female, accessories" ,[ "earring ", "purple eye shadow ", "stringy hair",],),
  //8814"],),

  new Traits( "male, accessories" ,[ "mole ", "stringy hair",],),
  //8815"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard ", "wild hair",],),
  //8816"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "normal beard",],),
  //8817"],),

  new Traits( "female, accessories" ,[ "earring ", "medical mask ", "mohawk",],),
  //8818"],),

  new Traits( "male, accessories" ,[ "do-rag ", "medical mask",],),
  //8819"],),

  new Traits( "male, accessories" ,[ "eye mask ", "mohawk thin",],),
  //8820"],),

  new Traits( "male, accessories" ,[ "big beard ", "earring ", "wild hair",],),
  //8821"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "hot lipstick ", "tassle hat",],),
  //8822"],),

  new Traits( "male, accessories" ,[ "normal beard black ", "small shades ", "stringy hair",],),
  //8823"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "nerd glasses ", "normal beard",],),
  //8824"],),

  new Traits( "male, accessories" ,[ "earring ", "luxurious beard ", "mohawk thin ", "nerd glasses",],),
  //8825"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "mohawk thin",],),
  //8826"],),

  new Traits( "male, accessories" ,[ "clown nose ", "earring ", "wild hair",],),
  //8827"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "hoodie ", "normal beard",],),
  //8828"],),

  new Traits( "female, accessories" ,[ "mole ", "red mohawk",],),
  //8829"],),

  new Traits( "male, accessories" ,[ "classic shades ", "frown ", "goat ", "messy hair",],),
  //8830"],),

  new Traits( "male, accessories" ,[ "headband ", "mustache ", "pipe",],),
  //8831"],),

  new Traits( "male, accessories" ,[ "big shades ", "messy hair ", "muttonchops",],),
  //8832"],),

  new Traits( "male, accessories" ,[ "big shades ", "messy hair",],),
  //8833"],),

  new Traits( "male, accessories" ,[ "earring ", "police cap ", "shadow beard",],),
  //8834"],),

  new Traits( "female, accessories" ,[ "cap ", "green eye shadow",],),
  //8835"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "purple eye shadow ", "straight hair",],),
  //8836"],),
  ],),
  
  new Traits( "female, accessories" ,[ "headband ", "hot lipstick ", "purple eye shadow",],),
  //8837"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "knitted cap ", "mole",],),
  //8838"],),

  new Traits( "male, accessories" ,[ "cigarette ", "classic shades ", "luxurious beard ", "shaved head",],),
  //8839"],),

  new Traits( "male, accessories" ,[ "beanie ", "frown ", "mustache",],),
  //8840"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "tassle hat",],),
  //8841"],),

  new Traits( "female, accessories" ,[ "classic shades ", "purple lipstick ", "tiara",],),
  //8842"],),

  new Traits( "male, accessories" ,[ "front beard ", "mohawk",],),
  //8843"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "fedora ", "luxurious beard ", "nerd glasses",],),
  //8844"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cigarette ", "do-rag",],),
  //8845"],),

  new Traits( "female, accessories" ,[ "clown nose ", "frumpy hair ", "gold chain",],),
  //8846"],),

  new Traits( "female, accessories" ,[ "cigarette ", "orange side ", "purple lipstick",],),
  //8847"],),

  new Traits( "male, accessories" ,[ "cigarette ", "eye mask ", "peak spike",],),
  //8848"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "hot lipstick ", "pink with hat",],),
  //8849"],),

  new Traits( "female, accessories" ,[ "blonde short ", "earring ", "purple lipstick",],),
  //8850"],),

  new Traits( "male, accessories" ,[ "beanie ", "eye patch ", "shadow beard",],),
  //8851"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "normal beard black ", "stringy hair",],),
  //8852"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "pipe ", "regular shades ", "stringy hair",],),
  //8853"],),

  new Traits( "female, accessories" ,[ "big shades ", "knitted cap",],),
  //8854"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk ", "vape",],),
  //8855"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "eye mask",],),
  //8856"],),

  new Traits( "zombie, accessories" ,[ "3d glasses ", "wild hair",],),
  //8857"],),

  new Traits( "female, accessories" ,[ "bandana ", "clown eyes green ", "earring",],),
  //8858"],),

  new Traits( "male, accessories" ,[ "eye mask ", "shaved head",],),
  //8859"],),

  new Traits( "male, accessories" ,[ "cigarette ", "hoodie ", "luxurious beard",],),
  //8860"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "mohawk ", "small shades",],),
  //8861"],),

  new Traits( "female, accessories" ,[ "big shades ", "black lipstick ", "dark hair ", "gold chain",],),
  //8862"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "mohawk dark ", "vr",],),
  //8863"],),

  new Traits( "male, accessories" ,[ "goat ", "pipe ", "police cap",],),
  //8864"],),

  new Traits( "male, accessories" ,[ "beanie ", "horned rim glasses",],),
  //8865"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "luxurious beard ", "wild hair",],),
  //8866"],),

  new Traits( "female, accessories" ,[ "medical mask ", "pink with hat ", "purple lipstick ", "rosy cheeks",],),
  //8867"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "hoodie ", "shadow beard",],),
  //8868"],),

  new Traits( "male, accessories" ,[ "bandana ", "muttonchops ", "regular shades",],),
  //8869"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "earring ", "luxurious beard ", "top hat",],),
  //8870"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard ", "small shades ", "stringy hair",],),
  //8871"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "mustache ", "police cap",],),
  //8872"],),

  new Traits( "female, accessories" ,[ "blonde short ", "purple eye shadow ", "purple lipstick",],),
  //8873"],),

  new Traits( "female, accessories" ,[ "knitted cap ", "mole ", "purple eye shadow",],),
  //8874"],),

  new Traits( "male, accessories" ,[ "cigarette ", "frown ", "top hat",],),
  //8875"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "mohawk thin",],),
  //8876"],),

  new Traits( "male, accessories" ,[ "handlebars ", "hoodie ", "regular shades",],),
  //8877"],),

  new Traits( "male, accessories" ,[ "bandana ", "cigarette ", "normal beard",],),
  //8878"],),

  new Traits( "male, accessories" ,[ "classic shades ", "crazy hair ", "mustache",],),
  //8879"],),

  new Traits( "female, accessories" ,[ "half shaved ", "purple eye shadow",],),
  //8880"],),

  new Traits( "male, accessories" ,[ "eye patch ", "medical mask ", "top hat",],),
  //8881"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "chinstrap ", "earring ", "stringy hair",],),
  //8882"],),

  new Traits( "female, accessories" ,[ "eye mask ", "hot lipstick ", "messy hair",],),
  //8883"],),

  new Traits( "female, accessories" ,[ "earring ", "pilot helmet ", "purple lipstick ", "rosy cheeks",],),
  //8884"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "stringy hair",],),
  //8885"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "purple eye shadow ", "tiara",],),
  //8886"],),

  new Traits( "female, accessories" ,[ "cigarette ", "horned rim glasses ", "purple lipstick ", "straight hair blonde",],),
  //8887"],),

  new Traits( "female, accessories" ,[ "eye mask ", "red mohawk",],),
  //8888"],),

  new Traits( "male, accessories" ,[ "classic shades ", "luxurious beard ", "peak spike ", "smile ", "vape",],),
  //8889"],),

  new Traits( "female, accessories" ,[ "eye patch ", "tassle hat",],),
  //8890"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "rosy cheeks",],),
  //8891"],),

  new Traits( "male, accessories" ,[ "do-rag ", "muttonchops ", "small shades",],),
  //8892"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "messy hair ", "vr",],),
  //8893"],),

  new Traits( "male, accessories" ,[ "mohawk ", "mole",],),
  //8894"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "messy hair",],),
  //8895"],),

  new Traits( "female, accessories" ,[ "cigarette ", "clown eyes green ", "hot lipstick ", "wild white hair",],),
  //8896"],),

  new Traits( "male, accessories" ,[ "big shades ", "mohawk dark ", "normal beard",],),
  //8897"],),
  
  
  new Traits( "male, accessories" ,[ "goat ", "nerd glasses ", "top hat",],),
  //8898"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "buck teeth ", "stringy hair",],),
  //8899"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "cap forward",],),
  //8900"],),

  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "mohawk dark",],),
  //8901"],),

  new Traits( "male, accessories" ,[ "normal beard ", "small shades",],),
  //8902"],),

  new Traits( "female, accessories" ,[ "bandana ", "earring ", "hot lipstick",],),
  //8903"],),

  new Traits( "female, accessories" ,[ "cap ", "clown nose ", "pipe ", "purple eye shadow",],),
  //8904"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "mole ", "wild hair",],),
  //8905"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "stringy hair ", "welding goggles",],),
  //8906"],),

  new Traits( "female, accessories" ,[ "earring ", "horned rim glasses ", "pink with hat",],),
  //8907"],),

  new Traits( "male, accessories" ,[ "front beard ", "mohawk thin ", "small shades ", "smile",],),
  //8908"],),

  new Traits( "zombie , accessories" ,[ "luxurious beard ", "police cap ", "regular shades",],),
  //8909"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "police cap",],),
  //8910"],),

  new Traits( "male, accessories" ,[ "big shades ", "mohawk dark ", "normal beard",],),
  //8911"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "purple eye shadow ", "wild blonde",],),
  //8912"],),

  new Traits( "male, accessories" ,[ "big shades ", "vampire hair",],),
  //8913"],),

  new Traits( "male, accessories" ,[ "big shades ", "chinstrap ", "headband",],),
  //8914"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "small shades",],),
  //8915"],),

  new Traits( "female, accessories" ,[ "cigarette ", "pigtails ", "purple eye shadow",],),
  //8916"],),

  new Traits( "female, accessories" ,[ "cigarette ", "gold chain ", "headband",],),
  //8917"],),

  new Traits( "male, accessories" ,[ "earring ", "nerd glasses ", "smile ", "stringy hair",],),
  //8918"],),

  new Traits( "male, accessories" ,[ "big shades ", "do-rag ", "shadow beard",],),
  //8919"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "cigarette ", "clown eyes green ", "stringy hair",],),
  //8920"],),

  new Traits( "male, accessories" ,[ "cigarette ", "front beard dark ", "nerd glasses ", "police cap",],),
  //8921"],),

  new Traits( "female, accessories" ,[ "classic shades ", "hot lipstick",],),
  //8922"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "messy hair",],),
  //8923"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "headband ", "horned rim glasses",],),
  //8924"],),

  new Traits( "male, accessories" ,[ "cigarette ", "do-rag ", "horned rim glasses ", "smile",],),
  //8925"],),

  new Traits( "male, accessories" ,[ "bandana ", "classic shades ", "smile",],),
  //8926"],),

  new Traits( "male, accessories" ,[ "bandana ", "silver chain",],),
  //8927"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "vr",],),
  //8928"],),

  new Traits( "male, accessories" ,[ "big shades ", "do-rag ", "earring ", "mole ", "normal beard black",],),
  //8929"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "small shades",],),
  //8930"],),

  new Traits( "male, accessories" ,[ "do-rag ", "shadow beard ", "small shades ", "vape",],),
  //8931"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "half shaved ", "hot lipstick",],),
  //8932"],),

  new Traits( "female, accessories" ,[ "dark hair ", "pipe",],),
  //8933"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "muttonchops ", "police cap",],),
  //8934"],),

  new Traits( "male, accessories" ,[ "cigarette ", "fedora ", "smile",],),
  //8935"],),

  new Traits( "female, accessories" ,[ "earring ", "medical mask ", "wild hair",],),
  //8936"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "horned rim glasses ", "hot lipstick",],),
  //8937"],),

  new Traits( "male, accessories" ,[ "bandana ", "front beard dark",],),
  //8938"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "purple eye shadow ", "straight hair",],),
  //8939"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "shaved head ", "smile",],),
  //8940"],),

  new Traits( "male, accessories" ,[ "headband ", "mustache",],),
  //8941"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "stringy hair",],),
  //8942"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "small shades ", "vape",],),
  //8943"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "crazy hair ", "earring",],),
  //8944"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "mole",],),
  //8945"],),

  new Traits( "male, accessories" ,[ "bandana ", "rosy cheeks",],),
  //8946"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "eye mask",],),
  //8947"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mohawk dark ", "spots",],),
  //8948"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "frumpy hair ", "vape",],),
  //8949"],),

  new Traits( "female, accessories" ,[ "cigarette ", "hot lipstick ", "knitted cap ", "nerd glasses",],),
  //8950"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "do-rag ", "vr",],),
  //8951"],),

  new Traits( "female, accessories" ,[ "bandana ", "black lipstick ", "regular shades",],),
  //8952"],),

  new Traits( "male, accessories" ,[ "medical mask ", "wild hair",],),
  //8953"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "horned rim glasses ", "messy hair",],),
  //8954"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "eye mask ", "half shaved",],),
  //8955"],),

  new Traits( "male, accessories" ,[ "mohawk ", "vape",],),
  //8956"],),

  new Traits( "zombie, accessories" ,[ "frumpy hair ", "luxurious beard",],),
  //8957"],),

  new Traits( "male, accessories" ,[ "beanie ", "horned rim glasses ", "shadow beard",],),
  //8958"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "knitted cap",],),
  //8959"],),

  new Traits( "male, accessories" ,[ "handlebars ", "mohawk dark ", "nerd glasses",],),
  //8960"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "mohawk dark",],),
  //8961"],),

  new Traits( "female, accessories" ,[ "nerd glasses ", "tassle hat",],),
  //8962"],),

  new Traits( "male, accessories" ,[ "cigarette ", "clown eyes green ", "handlebars ", "shaved head",],),
  //8963"],),

  new Traits( "female, accessories" ,[ "big shades ", "half shaved",],),
  //8964"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "knitted cap ", "luxurious beard",],),
  //8965"],),

  new Traits( "female, accessories" ,[ "orange side ", "purple lipstick",],),
  //8966"],),

  new Traits( "male, accessories" ,[ "big shades ", "hoodie ", "vape",],),
  //8967"],),

  new Traits( "male, accessories" ,[ "hoodie ", "muttonchops ", "regular shades",],),
  //8968"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard ", "police cap ", "vr",],),
  //8969"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "muttonchops",],),
  //8970"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "luxurious beard ", "mohawk thin",],),
  //8971"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "eye mask ", "pigtails",],),
  //8972"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "mole",],),
  //8973"],),

  new Traits( "male, accessories" ,[ "cigarette ", "clown eyes green ", "hoodie",],),
  //8974"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "welding goggles",],),
  //8975"],),

  new Traits( "female, accessories" ,[ "classic shades ", "dark hair",],),
  //8976"],),

  new Traits( "female, accessories" ,[ "cigarette ", "crazy hair ", "earring ", "hot lipstick",],),
  //8977"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "horned rim glasses ", "purple hair",],),
  //8978"],),

  new Traits( "male, accessories" ,[ "normal beard ", "shaved head",],),
  //8979"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "dark hair ", "hot lipstick ", "mole",],),
  //8980"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "shadow beard",],),
  //8981"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "mohawk ", "mole ", "purple lipstick",],),
  //8982"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring",],),
  //8983"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "messy hair",],),
  //8984"],),
  
  ],),
  new Traits( "male, accessories" ,[ "do-rag ", "eye mask ", "front beard dark ", "gold chain",],),
  //8985"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "straight hair dark",],),
  //8986"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "nerd glasses",],),
  //8987"],),

  new Traits( "male, accessories" ,[ "cap ", "earring ", "front beard",],),
  //8988"],),

  new Traits( "female, accessories" ,[ "blonde short ", "blue eye shadow ", "earring",],),
  //8989"],),

  new Traits( "male, accessories" ,[ "peak spike ", "pipe ", "vr",],),
  //8990"],),

  new Traits( "male, accessories" ,[ "cap forward ", "regular shades",],),
  //8991"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "handlebars ", "mohawk",],),
  //8992"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "luxurious beard ", "wild hair",],),
  //8993"],),

  new Traits( "female, accessories" ,[ "cigarette ", "clown eyes blue ", "tiara",],),
  //8994"],),

  new Traits( "male, accessories" ,[ "eye mask ", "mustache ", "shaved head",],),
  //8995"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "knitted cap",],),
  //8996"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "blue eye shadow ", "hot lipstick",],),
  //8997"],),

  new Traits( "male, accessories" ,[ "clown nose ", "frown ", "purple hair",],),
  //8998"],),

  new Traits( "female, accessories" ,[ "blonde short ", "clown eyes green ", "earring ", "purple lipstick",],),
  //8999"],),
  }],),
  
  new Traits( "female, accessories" ,[ "blonde short ", "cigarette ", "hot lipstick",],),
  //9000"],),

  new Traits( "female, accessories" ,[ "bandana ", "clown nose ", "nerd glasses",],),
  //9001"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mohawk dark ", "normal beard black",],),
  //9002"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "mohawk thin",],),
  //9003"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "stringy hair",],),
  //9004"],),

  new Traits( "male, accessories" ,[ "classic shades ", "clown hair green",],),
  //9005"],),

  new Traits( "female, accessories" ,[ "big shades ", "wild blonde",],),
  //9006"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "mohawk thin",],),
  //9007"],),

  new Traits( "male, accessories" ,[ "frown ", "goat ", "mohawk thin ", "regular shades",],),
  //9008"],),

  new Traits( "male, accessories" ,[ "cigarette ", "cowboy hat ", "nerd glasses",],),
  //9009"],),

  new Traits( "male, accessories" ,[ "earring ", "police cap ", "vr",],),
  //9010"],),

  new Traits( "male, accessories" ,[ "earring ", "muttonchops ", "small shades ", "top hat",],),
  //9011"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "medical mask",],),
  //9012"],),

  new Traits( "female, accessories" ,[ "cigarette ", "dark hair",],),
  //9013"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "green eye shadow ", "straight hair",],),
  //9014"],),

  new Traits( "male, accessories" ,[ "cap ", "earring ", "pipe",],),
  //9015"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "horned rim glasses ", "smile ", "stringy hair",],),
  //9016"],),

  new Traits( "male, accessories" ,[ "do-rag ", "shadow beard ", "small shades",],),
  //9017"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "handlebars ", "peak spike",],),
  //9018"],),

  new Traits( "male, accessories" ,[ "bandana ", "big beard ", "medical mask ", "vr",],),
  //9019"],),

  new Traits( "female, accessories" ,[ "dark hair ", "eye mask ", "purple lipstick",],),
  //9020"],),

  new Traits( "female, accessories" ,[ "cigarette ", "green eye shadow ", "hot lipstick ", "red mohawk",],),
  //9021"],),

  new Traits( "male, accessories" ,[ "frown ", "frumpy hair ", "muttonchops",],),
  //9022"],),

  new Traits( "female, accessories" ,[ "headband ", "purple eye shadow",],),
  //9023"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "mohawk thin ", "mustache",],),
  //9024"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "muttonchops",],),
  //9025"],),

  new Traits( "male, accessories" ,[ "bandana ", "classic shades ", "earring ", "front beard",],),
  //9026"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "frumpy hair ", "nerd glasses",],),
  //9027"],),

  new Traits( "female, accessories" ,[ "pipe",],),
  //9028"],),

  new Traits( "female, accessories" ,[ "mohawk ", "purple lipstick",],),
  //9029"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "frumpy hair ", "regular shades",],),
  //9030"],),

  new Traits( "male, accessories" ,[ "big shades ", "cap forward",],),
  //9031"],),

  new Traits( "male, accessories" ,[ "earring ", "gold chain ", "horned rim glasses ", "knitted cap ", "mole",],),
  //9032"],),

  new Traits( "male, accessories" ,[ "eye patch ", "stringy hair",],),
  //9033"],),

  new Traits( "female, accessories" ,[ "earring ", "horned rim glasses ", "hot lipstick ", "wild blonde",],),
  //9034"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "mohawk",],),
  //9035"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "frumpy hair ", "shadow beard ", "vr",],),
  //9036"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "clown eyes green ", "half shaved ", "mole",],),
  //9037"],),

  new Traits( "male, accessories" ,[ "big beard ", "crazy hair ", "eye patch ", "medical mask ", "smile",],),
  //9038"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "messy hair ", "regular shades",],),
  //9039"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "horned rim glasses ", "stringy hair",],),
  //9040"],),

  new Traits( "female, accessories" ,[ "bandana ", "black lipstick ", "earring",],),
  //9041"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "purple lipstick ", "wild hair",],),
  //9042"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "frumpy hair ", "pipe",],),
  //9043"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "green eye shadow ", "messy hair",],),
  //9044"],),

  new Traits( "male, accessories" ,[ "eye patch ", "headband ", "muttonchops",],),
  //9045"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "fedora ", "smile",],),
  //9046"],),

  new Traits( "male, accessories" ,[ "bandana ", "shadow beard",],),
  //9047"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "purple hair",],),
  //9048"],),

  new Traits( "male, accessories" ,[ "bandana ", "clown eyes blue ", "luxurious beard ", "silver chain",],),
  //9049"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "classic shades ", "rosy cheeks ", "stringy hair",],),
  //9050"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "pipe",],),
  //9051"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "blue eye shadow ", "gold chain",],),
  //9052"],),

  new Traits( "female, accessories" ,[ "earring ", "mole ", "tassle hat ", "vape",],),
  //9053"],),

  new Traits( "male, accessories" ,[ "big beard ", "horned rim glasses ", "mole ", "purple hair",],),
  //9054"],),

  new Traits( "male, accessories" ,[ "cigarette ", "frumpy hair ", "mole",],),
  //9055"],),

  new Traits( "male, accessories" ,[ "bandana ", "mole ", "shadow beard ", "smile",],),
  //9056"],),

  new Traits( "female, accessories" ,[ "pigtails ", "purple lipstick",],),
  //9057"],),

  new Traits( "female, accessories" ,[ "earring ", "pigtails",],),
  //9058"],),
  
  
  new Traits( "male, accessories" ,[ "big shades ", "front beard dark ", "headband",],),
  //9059"],),

  new Traits( "male, accessories" ,[ "cigarette ", "clown hair green",],),
  //9060"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "mohawk dark ", "mustache",],),
  //9061"],),

  new Traits( "male, accessories" ,[ "handlebars",],),
  //9062"],),

  new Traits( "female, accessories" ,[ "mole ", "orange side",],),
  //9063"],),

  new Traits( "female, accessories" ,[ "earring ", "welding goggles ", "wild white hair",],),
  //9064"],),

  new Traits( "male, accessories" ,[ "bandana ", "cigarette ", "front beard dark ", "mole",],),
  //9065"],),

  new Traits( "female, accessories" ,[ "big shades ", "black lipstick ", "cigarette ", "straight hair",],),
  //9066"],),

  new Traits( "female, accessories" ,[ "big shades ", "cigarette ", "straight hair",],),
  //9067"],),

  new Traits( "female, accessories" ,[ "earring ", "pipe ", "purple lipstick ", "tassle hat",],),
  //9068"],),

  new Traits( "male, accessories" ,[ "cigarette ", "normal beard black ", "purple hair",],),
  //9069"],),

  new Traits( "male, accessories" ,[ "cigarette ", "handlebars ", "knitted cap",],),
  //9070"],),

  new Traits( "female, accessories" ,[ "cigarette ", "half shaved ", "hot lipstick",],),
  //9071"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "clown hair green",],),
  //9072"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "frumpy hair ", "horned rim glasses",],),
  //9073"],),

  new Traits( "female, accessories" ,[ "eye mask ", "tassle hat",],),
  //9074"],),

  new Traits( "male, accessories" ,[ "eye patch ", "mohawk thin",],),
  //9075"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "shadow beard ", "vape",],),
  //9076"],),

  new Traits( "male, accessories" ,[ "clown nose ", "earring ", "mohawk",],),
  //9077"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "half shaved",],),
  //9078"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "eye patch ", "shadow beard",],),
  //9079"],),

  new Traits( "male, accessories" ,[ "big shades ", "frumpy hair ", "mustache ", "smile",],),
  //9080"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "pigtails",],),
  //9081"],),

  new Traits( "male, accessories" ,[ "bandana ", "big shades ", "shadow beard",],),
  //9082"],),

  new Traits( "male, accessories" ,[ "hoodie ", "horned rim glasses ", "smile",],),
  //9083"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk ", "muttonchops ", "rosy cheeks",],),
  //9084"],),

  new Traits( "male, accessories" ,[ "cap ", "front beard",],),
  //9085"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "orange side ", "vape",],),
  //9086"],),

  new Traits( "male, accessories" ,[ "classic shades ", "police cap",],),
  //9087"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "mole",],),
  //9088"],),

  new Traits( "male, accessories" ,[ "cap forward ", "frown",],),
  //9089"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "frown ", "shaved head",],),
  //9090"],),

  new Traits( "female, accessories" ,[ "bandana ", "eye patch",],),
  //9091"],),

  new Traits( "male, accessories" ,[ "big beard ", "eye patch ", "hoodie",],),
  //9092"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "eye patch ", "fedora",],),
  //9093"],),

  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "peak spike ", "shadow beard",],),
  //9094"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "purple eye shadow",],),
  //9095"],),

  new Traits( "male, accessories" ,[ "big shades ", "goat ", "silver chain ", "wild hair",],),
  //9096"],),

  new Traits( "male, accessories" ,[ "earring ", "nerd glasses ", "smile ", "vape, "wild hair",],),
  //9097"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "regular shades",],),
  //9098"],),

  new Traits( "male, accessories" ,[ "cigarette ", "crazy hair ", "earring ", "mustache",],),
  //9099"],),

  new Traits( "male, accessories" ,[ "eye patch ", "hoodie ", "normal beard black",],),
  //9100"],),

  new Traits( "male, accessories" ,[ "bandana ", "cigarette ", "earring ", "nerd glasses",],),
  //9101"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "clown hair green ", "purple lipstick",],),
  //9102"],),

  new Traits( "male, accessories" ,[ "mohawk ", "mustache",],),
  //9103"],),

  new Traits( "male, accessories" ,[ "handlebars ", "hoodie ", "vr",],),
  //9104"],),

  new Traits( "female, accessories" ,[ "clown nose ", "mohawk dark ", "silver chain",],),
  //9105"],),

  new Traits( "male, accessories" ,[ "cigarette ", "front beard ", "regular shades ", "stringy hair",],),
  //9106"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown nose ", "mohawk dark",],),
  //9107"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard black ", "shaved head",],),
  //9108"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "wild blonde",],),
  //9109"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "mohawk ", "muttonchops",],),
  //9110"],),

  new Traits( "female, accessories" ,[ "big shades ", "knitted cap",],),
  //9111"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "mohawk dark ", "shadow beard",],),
  //9112"],),

  new Traits( "male, accessories" ,[ "cigarette ", "frown ", "frumpy hair ", "shadow beard",],),
  //9113"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "mole",],),
  //9114"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "mohawk thin ", "muttonchops",],),
  //9115"],),

  new Traits( "male, accessories" ,[ "do-rag ", "luxurious beard",],),
  //9116"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "normal beard black",],),
  //9117"],),
  
  
  new Traits( "male, accessories" ,[ "purple hair ", "regular shades",],),
  //9118"],),

  new Traits( "male, accessories" ,[ "classic shades ", "do-rag ", "shadow beard",],),
  //9119"],),

  new Traits( "female, accessories" ,[ "pipe ", "purple lipstick ", "tassle hat",],),
  //9120"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "nerd glasses ", "shadow beard",],),
  //9121"],),

  new Traits( "male, accessories" ,[ "eye mask ", "frumpy hair ", "luxurious beard",],),
  //9122"],),

  new Traits( "male, accessories" ,[ "eye patch ", "frumpy hair ", "shadow beard",],),
  //9123"],),

  new Traits( "male, accessories" ,[ "classic shades ", "shadow beard ", "shaved head ", "silver chain",],),
  //9124"],),

  new Traits( "female, accessories" ,[ "big shades ", "clown nose ", "wild blonde",],),
  //9125"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "frumpy hair ", "purple lipstick",],),
  //9126"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "messy hair",],),
  //9127"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "normal beard ", "wild hair",],),
  //9128"],),

  new Traits( "male, accessories" ,[ "beanie ", "eye patch ", "muttonchops",],),
  //9129"],),

  new Traits( "male, accessories" ,[ "front beard ", "purple hair ", "smile",],),
  //9130"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "crazy hair ", "earring",],),
  //9131"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "mohawk",],),
  //9132"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "luxurious beard ", "top hat",],),
  //9133"],),

  new Traits( "female, accessories" ,[ "eye patch ", "mohawk ", "purple lipstick",],),
  //9134"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "do-rag ", "small shades",],),
  //9135"],),

  new Traits( "female, accessories" ,[ "gold chain ", "purple lipstick ", "straight hair dark",],),
  //9136"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "hoodie ", "luxurious beard",],),
  //9137"],),

  new Traits( "male, accessories" ,[ "big shades ", "handlebars ", "headband",],),
  //9138"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "mole ", "nerd glasses",],),
  //9139"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "stringy hair",],),
  //9140"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "crazy hair",],),
  //9141"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "goat ", "messy hair",],),
  //9142"],),

  new Traits( "male, accessories" ,[ "earring ", "goat ", "vampire hair",],),
  //9143"],),

  new Traits( "male, accessories" ,[ "big shades ", "goat ", "mohawk",],),
  //9144"],),

  new Traits( "female, accessories" ,[ "rosy cheeks",],),
  //9145"],),

  new Traits( "male, accessories" ,[ "eye patch ", "front beard dark ", "stringy hair",],),
  //9146"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "horned rim glasses ", "hot lipstick ", "mole",],),
  //9147"],),

  new Traits( "female, accessories" ,[ "medical mask ", "mohawk dark",],),
  //9148"],),

  new Traits( "female, accessories" ,[ "cigarette ", "purple eye shadow ", "wild white hair",],),
  //9149"],),

  new Traits( "male, accessories" ,[ "big beard ", "crazy hair",],),
  //9150"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "orange side",],),
  //9151"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "dark hair",],),
  //9152"],),

  new Traits( "female, accessories" ,[ "cap ", "purple eye shadow",],),
  //9153"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "mohawk thin",],),
  //9154"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "normal beard ", "peak spike",],),
  //9155"],),

  new Traits( "male, accessories" ,[ "cap forward ", "frown ", "horned rim glasses ", "normal beard black",],),
  //9156"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "shadow beard ", "stringy hair",],),
  //9157"],),

  new Traits( "male, accessories" ,[ "big shades ", "fedora ", "goat",],),
  //9158"],),

  new Traits( "male, accessories" ,[ "hoodie ", "nerd glasses ", "shadow beard",],),
  //9159"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "medical mask ", "pilot helmet",],),
  //9160"],),

  new Traits( "male, accessories" ,[ "bandana ", "normal beard ", "regular shades",],),
  //9161"],),

  new Traits( "male, accessories" ,[ "cigarette ", "front beard dark ", "rosy cheeks",],),
  //9162"],),

  new Traits( "female, accessories" ,[ "bandana ", "black lipstick ", "earring ", "nerd glasses",],),
  //9163"],),

  new Traits( "female, accessories" ,[ "earring ", "messy hair ", "purple lipstick",],),
  //9164"],),

  new Traits( "male, accessories" ,[ "cigarette ", "frumpy hair ", "regular shades",],),
  //9165"],),

  new Traits( "male, accessories" ,[ "frown ", "nerd glasses ", "police cap",],),
  //9166"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "purple eye shadow ", "wild white hair",],),
  //9167"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "muttonchops ", "smile ", "vr",],),
  //9168"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "peak spike",],),
  //9169"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "normal beard ", "regular shades",],),
  //9170"],),

  new Traits( "male, accessories" ,[ "cap ", "front beard ", "nerd glasses",],),
  //9171"],),

  new Traits( "male, accessories" ,[ "fedora ", "nerd glasses ", "shadow beard",],),
  //9172"],),

  new Traits( "male, accessories" ,[ "cap ", "classic shades ", "goat",],),
  //9173"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "stringy hair",],),
  //9174"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "goat ", "vape",],),
  //9175"],),
  
  
  new Traits( "male, accessories" ,[ "crazy hair ", "front beard dark",],),
  //9176"],),

  new Traits( "female, accessories" ,[ "half shaved ", "hot lipstick ", "purple eye shadow",],),
  //9177"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "front beard ", "nerd glasses",],),
  //9178"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mohawk ", "normal beard black",],),
  //9179"],),

  new Traits( "male, accessories" ,[ "bandana ", "big shades ", "earring ", "luxurious beard",],),
  //9180"],),

  new Traits( "female, accessories" ,[ "big shades ", "black lipstick ", "cap",],),
  //9181"],),

  new Traits( "female, accessories" ,[ "bandana ", "earring ", "horned rim glasses",],),
  //9182"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes blue ", "red mohawk",],),
  //9183"],),

  new Traits( "male, accessories" ,[ "cigarette ", "luxurious beard ", "messy hair",],),
  //9184"],),

  new Traits( "male, accessories" ,[ "normal beard ", "purple hair",],),
  //9185"],),

  new Traits( "female, accessories" ,[ "knitted cap ", "nerd glasses ", "purple lipstick",],),
  //9186"],),

  new Traits( "male, accessories" ,[ "earring ", "goat ", "mohawk thin",],),
  //9187"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "hot lipstick ", "wild white hair",],),
  //9188"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora ", "front beard",],),
  //9189"],),

  new Traits( "male, accessories" ,[ "earring ", "small shades",],),
  //9190"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "purple lipstick ", "wild blonde",],),
  //9191"],),

  new Traits( "male, accessories" ,[ "mohawk ", "muttonchops ", "smile",],),
  //9192"],),

  new Traits( "female, accessories" ,[ "cigarette ", "clown eyes green ", "wild white hair",],),
  //9193"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "tassle hat",],),
  //9194"],),

  new Traits( "female, accessories" ,[ "blonde short ", "nerd glasses",],),
  //9195"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "crazy hair",],),
  //9196"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "shaved head",],),
  //9197"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "bandana",],),
  //9198"],),

  new Traits( "male, accessories" ,[ "headband ", "mustache ", "vape",],),
  //9199"],),

  new Traits( "female, accessories" ,[ "eye mask ", "mohawk dark",],),
  //9200"],),

  new Traits( "female, accessories" ,[ "straight hair blonde ", "welding goggles",],),
  //9201"],),

  new Traits( "male, accessories" ,[ "big shades ", "messy hair ", "pipe",],),
  //9202"],),

  new Traits( "zombie, accessories" ,[ "cap forward ", "clown nose ", "goat ", "mole",],),
  //9203"],),

  new Traits( "male, accessories" ,[ "cigarette ", "clown eyes green ", "stringy hair",],),
  //9204"],),

  new Traits( "female, accessories" ,[ "big shades ", "earring ", "mole ", "straight hair dark",],),
  //9205"],),

  new Traits( "male, accessories" ,[ "eye patch ", "handlebars ", "headband ", "pipe",],),
  //9206"],),

  new Traits( "male, accessories" ,[ "hoodie ", "nerd glasses ", "shadow beard ", "vape",],),
  //9207"],),

  new Traits( "male, accessories" ,[ "shadow beard ", "vape",],),
  //9208"],),

  new Traits( "male, accessories" ,[ "cigarette ", "luxurious beard ", "stringy hair",],),
  //9209"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "mohawk thin ", "normal beard black",],),
  //9210"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes blue ", "half shaved ", "silver chain",],),
  //9211"],),

  new Traits( "male, accessories" ,[ "bandana ", "eye patch ", "luxurious beard",],),
  //9212"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "dark hair ", "earring ", "hot lipstick",],),
  //9213"],),

  new Traits( "male, accessories" ,[ "eye mask ", "top hat",],),
  //9214"],),

  new Traits( "female, accessories" ,[ "mole ", "purple lipstick ", "stringy hair",],),
  //9215"],),

  new Traits( "male, accessories" ,[ "gold chain ", "horned rim glasses ", "vampire hair",],),
  //9216"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk thin ", "purple eye shadow",],),
  //9217"],),

  new Traits( "male, accessories" ,[ "eye patch ", "front beard ", "shaved head",],),
  //9218"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "vampire hair",],),
  //9219"],),

  new Traits( "male, accessories" ,[ "big shades ", "chinstrap ", "purple hair",],),
  //9220"],),

  new Traits( "male, accessories" ,[ "cigarette ", "classic shades ", "mohawk dark",],),
  //9221"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "nerd glasses",],),
  //9222"],),

  new Traits( "female, accessories" ,[ "pink with hat ", "purple lipstick ", "regular shades",],),
  //9223"],),

  new Traits( "female, accessories" ,[ "earring ", "vape, "wild white hair",],),
  //9224"],),

  new Traits( "male, accessories" ,[ "bandana ", "muttonchops ", "pipe",],),
  //9225"],),

  new Traits( "male, accessories" ,[ "big shades ", "handlebars ", "peak spike",],),
  //9226"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "headband",],),
  //9227"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "horned rim glasses ", "mohawk",],),
  //9228"],),

  new Traits( "female, accessories" ,[ "classic shades ", "crazy hair ", "vape",],),
  //9229"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "pipe ", "tassle hat",],),
  //9230"],),

  new Traits( "male, accessories" ,[ "mustache ", "regular shades ", "stringy hair",],),
  //9231"],),

  new Traits( "male, accessories" ,[ "cigarette ", "fedora",],),
  //9232"],),

  new Traits( "male, accessories" ,[ "bandana ", "clown eyes green ", "earring",],),
  //9233"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "luxurious beard ", "medical mask",],),
  //9234"],),

  new Traits( "male, accessories" ,[ "cigarette ", "clown nose ", "hoodie ", "normal beard black",],),
  //9235"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mohawk dark",],),
  //9236"],),

  new Traits( "female, accessories" ,[ "cigarette ", "clown eyes blue ", "earring ", "orange side",],),
  //9237"],),

  new Traits( "male, accessories" ,[ "regular shades ", "shaved head",],),
  //9238"],),

  new Traits( "male, accessories" ,[ "big shades ", "crazy hair ", "handlebars",],),
  //9239"],),

  new Traits( "female, accessories" ,[ "mole ", "orange side",],),
  //9240"],),

  new Traits( "male, accessories" ,[ "big beard ", "earring ", "mohawk dark ", "regular shades",],),
  //9241"],),

  new Traits( "male, accessories" ,[ "frown ", "knitted cap ", "mustache",],),
  //9242"],),

  new Traits( "male, accessories" ,[ "mole ", "mustache ", "peak spike",],),
  //9243"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "clown nose ", "hot lipstick ", "wild hair",],),
  //9244"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora ", "mustache ", "nerd glasses",],),
  //9245"],),

  new Traits( "male, accessories" ,[ "clown eyes green",],),
  //9246"],),

  new Traits( "female, accessories" ,[ "eye mask ", "purple lipstick ", "straight hair",],),
  //9247"],),

  new Traits( "female, accessories" ,[ "bandana ", "hot lipstick ", "vr",],),
  //9248"],),

  new Traits( "male, accessories" ,[ "cap forward ", "cigarette ", "shadow beard",],),
  //9249"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "handlebars ", "messy hair",],),
  //9250"],),

  new Traits( "male, accessories" ,[ "medical mask ", "nerd glasses ", "stringy hair",],),
  //9251"],),

  new Traits( "male, accessories" ,[ "regular shades ", "vape, "wild hair",],),
  //9252"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "tassle hat",],),
  //9253"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "eye patch ", "shadow beard",],),
  //9254"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "normal beard black",],),
  //9255"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "mohawk thin ", "mustache",],),
  //9256"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick",],),
  //9257"],),

  new Traits( "female, accessories" ,[ "cigarette ", "straight hair ", "welding goggles",],),
  //9258"],),

  new Traits( "male, accessories" ,[ "frown ", "stringy hair",],),
  //9259"],),

  new Traits( "male, accessories" ,[ "cap ", "horned rim glasses ", "muttonchops",],),
  //9260"],),

  new Traits( "female, accessories" ,[ "eye mask ", "frumpy hair",],),
  //9261"],),

  new Traits( "male, accessories" ,[ "earring ", "purple hair ", "small shades ", "vape",],),
  //9262"],),

  new Traits( "male, accessories" ,[ "do-rag ", "eye patch",],),
  //9263"],),

  new Traits( "male, accessories" ,[ "cap forward ", "clown nose ", "shadow beard ", "vr",],),
  //9264"],),

  new Traits( "ape, accessories" ,[ "bandana ", "big shades",],),
  //9265"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "mohawk dark ", "mole ", "shadow beard",],),
  //9266"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "earring ", "peak spike",],),
  //9267"],),

  new Traits( "male, accessories" ,[ "goat ", "shaved head ", "spots",],),
  //9268"],),

  new Traits( "female, accessories" ,[ "bandana ", "black lipstick ", "earring",],),
  //9269"],),

  new Traits( "female, accessories" ,[ "big shades ", "black lipstick ", "earring ", "stringy hair",],),
  //9270"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "knitted cap ", "purple eye shadow",],),
  //9271"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "do-rag ", "pipe",],),
  //9272"],),

  new Traits( "male, accessories" ,[ "classic shades ", "crazy hair ", "front beard",],),
  //9273"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "nerd glasses ", "shaved head",],),
  //9274"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "police cap ", "shadow beard",],),
  //9275"],),

  new Traits( "male, accessories" ,[ "normal beard ", "pipe ", "police cap",],),
  //9276"],),

  new Traits( "male, accessories" ,[ "bandana ", "chinstrap",],),
  //9277"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "straight hair blonde",],),
  //9278"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "purple hair ", "shadow beard",],),
  //9279"],),

  new Traits( "ape, accessories" ,[ "3d glasses ", "cowboy hat",],),
  //9280"],),

  new Traits( "male, accessories" ,[ "classic shades ", "front beard dark ", "mohawk",],),
  //9281"],),

  new Traits( "male, accessories" ,[ "big beard ", "fedora",],),
  //9282"],),

  new Traits( "male, accessories" ,[ "frown ", "mohawk ", "vr",],),
  //9283"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "normal beard black",],),
  //9284"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "normal beard black ", "regular shades",],),
  //9285"],),

  new Traits( "female, accessories" ,[ "bandana ", "hot lipstick ", "pipe",],),
  //9286"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "messy hair ", "shadow beard",],),
  //9287"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "pipe ", "wild hair",],),
  //9288"],),

  new Traits( "male, accessories" ,[ "cap ", "cigarette ", "frown ", "nerd glasses",],),
  //9289"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "goat ", "pipe ", "regular shades",],),
  //9290"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "mohawk thin",],),
  //9291"],),

  new Traits( "male, accessories" ,[ "eye patch ", "messy hair ", "spots",],),
  //9292"],),

  new Traits( "male, accessories" ,[ "cigarette ", "handlebars ", "mohawk thin",],),
  //9293"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "police cap",],),
  //9294"],),

  new Traits( "female, accessories" ,[ "mole ", "pipe ", "straight hair dark",],),
  //9295"],),

  new Traits( "male, accessories" ,[ "goat ", "messy hair ", "vr",],),
  //9296"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "handlebars ", "vr",],),
  //9297"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "vampire hair",],),
  //9298"],),

  new Traits( "male, accessories" ,[ "cap forward ", "handlebars",],),
  //9299"],),

  new Traits( "male, accessories" ,[ "cap forward ", "smile",],),
  //9300"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "purple eye shadow ", "straight hair dark",],),
  //9301"],),

  new Traits( "male, accessories" ,[ "cigarette ", "front beard dark ", "frumpy hair ", "nerd glasses",],),
  //9302"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "mohawk dark",],),
  //9303"],),

  new Traits( "female, accessories" ,[ "earring ", "messy hair ", "mole",],),
  //9304"],),

  new Traits( "male, accessories" ,[ "cigarette ", "front beard dark ", "mohawk dark ", "mole",],),
  //9305"],),

  new Traits( "male, accessories" ,[ "cap forward ", "classic shades",],),
  //9306"],),

  new Traits( "female, accessories" ,[ "cigarette ", "purple eye shadow ", "stringy hair",],),
  //9307"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "horned rim glasses",],),
  //9308"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "mohawk",],),
  //9309"],),

  new Traits( "female, accessories" ,[ "cigarette ", "nerd glasses ", "straight hair blonde",],),
  //9310"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "pink with hat ", "purple lipstick",],),
  //9311"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "hot lipstick ", "messy hair",],),
  //9312"],),

  new Traits( "female, accessories" ,[ "eye mask ", "messy hair",],),
  //9313"],),

  new Traits( "male, accessories" ,[ "beanie ", "frown",],),
  //9314"],),

  new Traits( "male, accessories" ,[ "classic shades ", "crazy hair ", "mustache",],),
  //9315"],),

  new Traits( "male, accessories" ,[ "big shades ", "chinstrap ", "crazy hair ", "earring ", "smile",],),
  //9316"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "orange side",],),
  //9317"],),

  new Traits( "male, accessories" ,[ "big shades ", "clown nose ", "mohawk dark",],),
  //9318"],),

  new Traits( "male, accessories" ,[ "bandana ", "clown eyes blue ", "silver chain",],),
  //9319"],),

  new Traits( "female, accessories" ,[ "bandana ", "mole",],),
  //9320"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "mohawk ", "mustache",],),
  //9321"],),

  new Traits( "male, accessories" ,[ "cap ", "eye patch ", "shadow beard",],),
  //9322"],),

  new Traits( "male, accessories" ,[ "classic shades ", "front beard dark ", "headband",],),
  //9323"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "earring ", "straight hair dark",],),
  //9324"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "straight hair ", "welding goggles",],),
  //9325"],),

  new Traits( "female, accessories" ,[ "cap ", "earring ", "purple lipstick ", "regular shades",],),
  //9326"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "straight hair dark",],),
  //9327"],),

  new Traits( "male, accessories" ,[ "earring ", "gold chain ", "horned rim glasses ", "stringy hair",],),
  //9328"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "cap ", "earring ", "shadow beard",],),
  //9329"],),

  new Traits( "male, accessories" ,[ "frown ", "horned rim glasses",],),
  //9330"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "mohawk dark",],),
  //9331"],),

  new Traits( "female, accessories" ,[ "half shaved ", "welding goggles",],),
  //9332"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "horned rim glasses ", "mohawk thin",],),
  //9333"],),

  new Traits( "female, accessories" ,[ "eye patch ", "stringy hair",],),
  //9334"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "shaved head",],),
  //9335"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "handlebars ", "mohawk ", "smile",],),
  //9336"],),

  new Traits( "male, accessories" ,[ "earring ", "luxurious beard ", "mohawk",],),
  //9337"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "purple lipstick ", "straight hair dark",],),
  //9338"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "hot lipstick ", "tiara",],),
  //9339"],),
  
  
  new Traits( "male, accessories" ,[ "earring ", "luxurious beard ", "mohawk thin",],),
  //9340"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mole ", "wild white hair",],),
  //9341"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "knitted cap ", "regular shades",],),
  //9342"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "mohawk",],),
  //9343"],),

  new Traits( "male, accessories" ,[ "classic shades ", "hoodie ", "normal beard",],),
  //9344"],),

  new Traits( "male, accessories" ,[ "front beard ", "mohawk",],),
  //9345"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "shaved head ", "vape, "vr",],),
  //9346"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "purple hair",],),
  //9347"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk",],),
  //9348"],),

  new Traits( "female, accessories" ,[ "cigarette ", "crazy hair ", "hot lipstick",],),
  //9349"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "front beard dark ", "small shades",],),
  //9350"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk ", "small shades",],),
  //9351"],),

  new Traits( "male, accessories" ,[ "regular shades ", "top hat",],),
  //9352"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "eye mask ", "messy hair",],),
  //9353"],),

  new Traits( "male, accessories" ,[ "earring ", "nerd glasses ", "purple hair",],),
  //9354"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "frown ", "luxurious beard",],),
  //9355"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "vampire hair",],),
  //9356"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "frown ", "mohawk",],),
  //9357"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "tassle hat",],),
  //9358"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "earring ", "green eye shadow ", "purple lipstick",],),
  //9359"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "luxurious beard",],),
  //9360"],),

  new Traits( "male, accessories" ,[ "bandana ", "eye mask ", "luxurious beard",],),
  //9361"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "mole ", "regular shades ", "smile",],),
  //9362"],),

  new Traits( "male, accessories" ,[ "cap forward ", "clown eyes green",],),
  //9363"],),

  new Traits( "male, accessories" ,[ "handlebars ", "mohawk dark",],),
  //9364"],),

  new Traits( "male, accessories" ,[ "cigarette ", "frumpy hair",],),
  //9365"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "half shaved ", "pipe",],),
  //9366"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "straight hair",],),
  //9367"],),

  new Traits( "zombie, accessories" ,[ "earring ", "hoodie",],),
  //9368"],),

  new Traits( "female, accessories" ,[ "cap ", "earring ", "eye mask",],),
  //9369"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "stringy hair",],),
  //9370"],),

  new Traits( "male, accessories" ,[ "eye patch ", "fedora ", "muttonchops",],),
  //9371"],),

  new Traits( "male, accessories" ,[ "eye patch ", "front beard ", "stringy hair",],),
  //9372"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "pilot helmet",],),
  //9373"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "smile",],),
  //9374"],),

  new Traits( "male, accessories" ,[ "earring ", "nerd glasses ", "shaved head ", "smile",],),
  //9375"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "orange side ", "purple lipstick",],),
  //9376"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "nerd glasses ", "stringy hair",],),
  //9377"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "earring ", "mole ", "shaved head",],),
  //9378"],),

  new Traits( "female, accessories" ,[ "medical mask ", "orange side",],),
  //9379"],),

  new Traits( "male, accessories" ,[ "classic shades ", "headband ", "mole",],),
  //9380"],),

  new Traits( "female, accessories" ,[ "classic shades ", "hot lipstick ", "tassle hat",],),
  //9381"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "purple hair ", "small shades",],),
  //9382"],),

  new Traits( "female, accessories" ,[ "big shades ", "earring ", "hot lipstick ", "mohawk thin",],),
  //9383"],),

  new Traits( "male, accessories" ,[ "earring ", "normal beard ", "shaved head",],),
  //9384"],),

  new Traits( "male, accessories" ,[ "frown ", "muttonchops ", "stringy hair ", "vape, "vr",],),
  //9385"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "muttonchops ", "small shades",],),
  //9386"],),

  new Traits( "male, accessories" ,[ "big beard ", "big shades ", "messy hair",],),
  //9387"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk ", "nerd glasses",],),
  //9388"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "gold chain ", "shadow beard",],),
  //9389"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "front beard dark ", "knitted cap",],),
  //9390"],),

  new Traits( "male, accessories" ,[ "bandana ", "mole ", "shadow beard",],),
  //9391"],),

  new Traits( "female, accessories" ,[ "cigarette ", "hot lipstick ", "tiara",],),
  //9392"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "earring ", "hoodie",],),
  //9393"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "peak spike",],),
  //9394"],),

  new Traits( "female, accessories" ,[ "earring ", "half shaved ", "hot lipstick ", "mole",],),
  //9395"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "clown nose ", "mohawk dark ", "vape",],),
  //9396"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "purple eye shadow ", "wild blonde",],),
  //9397"],),

  new Traits( "male, accessories" ,[ "cigarette ", "regular shades ", "wild hair",],),
  //9398"],),

  new Traits( "male, accessories" ,[ "fedora ", "regular shades",],),
  //9399"],),

  new Traits( "female, accessories" ,[ "pipe ", "purple lipstick ", "vr ", "wild blonde",],),
  //9400"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "stringy hair",],),
  //9401"],),

  new Traits( "male, accessories" ,[ "big beard ", "earring ", "frumpy hair",],),
  //9402"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "peak spike",],),
  //9403"],),

  new Traits( "male, accessories" ,[ "earring ", "muttonchops ", "peak spike ", "regular shades",],),
  //9404"],),

  new Traits( "male, accessories" ,[ "big beard ", "knitted cap ", "small shades",],),
  //9405"],),

  new Traits( "female, accessories" ,[ "cigarette ", "crazy hair ", "purple lipstick",],),
  //9406"],),

  new Traits( "male, accessories" ,[ "cigarette ", "clown eyes blue ", "knitted cap",],),
  //9407"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "wild blonde",],),
  //9408"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "spots",],),
  //9409"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "knitted cap ", "medical mask",],),
  //9410"],),

  new Traits( "female, accessories" ,[ "mohawk dark ", "purple eye shadow ", "purple lipstick",],),
  //9411"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "mustache ", "smile",],),
  //9412"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "nerd glasses ", "vape, "wild white hair",],),
  //9413"],),

  new Traits( "female, accessories" ,[ "cigarette ", "earring ", "headband ", "nerd glasses",],),
  //9414"],),

  new Traits( "male, accessories" ,[ "fedora ", "horned rim glasses ", "smile",],),
  //9415"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora ", "goat",],),
  //9416"],),

  new Traits( "female, accessories" ,[ "earring ", "pilot helmet ", "purple lipstick",],),
  //9417"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "muttonchops ", "smile",],),
  //9418"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "hot lipstick ", "straight hair",],),
  //9419"],),

  new Traits( "male, accessories" ,[ "eye mask ", "fedora",],),
  //9420"],),

  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "eye patch ", "shadow beard",],),
  //9421"],),

  new Traits( "male, accessories" ,[ "frown ", "police cap",],),
  //9422"],),

  new Traits( "female, accessories" ,[ "cigarette ", "wild white hair",],),
  //9423"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "vape, "wild hair",],),
  //9424"],),

  new Traits( "male, accessories" ,[ "big shades ", "luxurious beard ", "shaved head",],),
  //9425"],),

  new Traits( "male, accessories" ,[ "front beard ", "mohawk",],),
  //9426"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "nerd glasses ", "police cap",],),
  //9427"],),

  new Traits( "female, accessories" ,[ "cigarette ", "purple eye shadow ", "straight hair",],),
  //9428"],),

  new Traits( "male, accessories" ,[ "gold chain ", "top hat",],),
  //9429"],),

  new Traits( "female, accessories" ,[ "dark hair ", "earring ", "nerd glasses ", "purple lipstick",],),
  //9430"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "green eye shadow",],),
  //9431"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "front beard dark ", "peak spike",],),
  //9432"],),

  new Traits( "female, accessories" ,[ "clown nose ", "hot lipstick ", "mohawk thin ", "pipe",],),
  //9433"],),

  new Traits( "male, accessories" ,[ "bandana ", "big shades ", "mole",],),
  //9434"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "muttonchops",],),
  //9435"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "messy hair ", "rosy cheeks",],),
  //9436"],),

  new Traits( "male, accessories" ,[ "handlebars ", "mohawk ", "rosy cheeks",],),
  //9437"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "blonde short ", "earring ", "purple lipstick",],),
  //9438"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mohawk ", "mustache",],),
  //9439"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "earring ", "hot lipstick ", "stringy hair",],),
  //9440"],),

  new Traits( "male, accessories" ,[ "big shades ", "normal beard ", "wild hair",],),
  //9441"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "cigarette ", "frumpy hair ", "mole",],),
  //9442"],),

  new Traits( "male, accessories" ,[ "normal beard ", "top hat",],),
  //9443"],),

  new Traits( "male, accessories" ,[ "bandana ", "eye patch ", "handlebars",],),
  //9444"],),

  new Traits( "male, accessories" ,[ "earring ", "knitted cap ", "mustache ", "nerd glasses",],),
  //9445"],),

  new Traits( "female, accessories" ,[ "cigarette ", "stringy hair ", "welding goggles",],),
  //9446"],),

  new Traits( "male, accessories" ,[ "bandana ", "big beard",],),
  //9447"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "mohawk thin ", "shadow beard",],),
  //9448"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "police cap",],),
  //9449"],),

  new Traits( "male, accessories" ,[ "cigarette ", "clown nose ", "mohawk dark",],),
  //9450"],),

  new Traits( "female, accessories" ,[ "silver chain ", "straight hair",],),
  //9451"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "tiara",],),
  //9452"],),

  new Traits( "male, accessories" ,[ "cap ", "cigarette ", "mustache",],),
  //9453"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "black lipstick ", "cigarette ", "earring ", "straight hair dark",],),
  //9454"],),

  new Traits( "female, accessories" ,[ "big shades ", "clown hair green",],),
  //9455"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "hot lipstick ", "nerd glasses",],),
  //9456"],),

  new Traits( "female, accessories" ,[ "mohawk ", "welding goggles",],),
  //9457"],),

  new Traits( "male, accessories" ,[ "bandana ", "muttonchops ", "small shades",],),
  //9458"],),

  new Traits( "female, accessories" ,[ "blonde short ", "purple eye shadow",],),
  //9459"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "pigtails",],),
  //9460"],),

  new Traits( "female, accessories" ,[ "straight hair blonde ", "welding goggles",],),
  //9461"],),

  new Traits( "male, accessories" ,[ "mustache ", "peak spike ", "regular shades",],),
  //9462"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "normal beard",],),
  //9463"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "cigarette ", "mole",],),
  //9464"],),

  new Traits( "male, accessories" ,[ "front beard ", "mohawk dark ", "nerd glasses",],),
  //9465"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "purple eye shadow ", "wild hair",],),
  //9466"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "clown nose ", "vampire hair",],),
  //9467"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "purple eye shadow ", "wild hair",],),
  //9468"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "earring ", "mohawk ", "normal beard black",],),
  //9469"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "cigarette ", "earring",],),
  //9470"],),

  new Traits( "female, accessories" ,[ "medical mask ", "wild white hair",],),
  //9471"],),

  new Traits( "male, accessories" ,[ "bandana ", "shadow beard ", "small shades",],),
  //9472"],),

  new Traits( "female, accessories" ,[ "blonde short ", "pipe ", "purple lipstick",],),
  //9473"],),

  new Traits( "zombie, accessories" ,[ "peak spike",],),
  //9474"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "front beard dark ", "stringy hair",],),
  //9475"],),

  new Traits( "male, accessories" ,[ "cigarette ", "hoodie ", "vr",],),
  //9476"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "nerd glasses",],),
  //9477"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "luxurious beard",],),
  //9478"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "pink with hat ", "silver chain",],),
  //9479"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "stringy hair ", "vr",],),
  //9480"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "mole ", "wild white hair",],),
  //9481"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "earring ", "eye mask ", "hot lipstick",],),
  //9482"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk thin ", "mole ", "pipe",],),
  //9483"],),

  new Traits( "female, accessories" ,[ "earring ", "nerd glasses ", "pigtails",],),
  //9484"],),

  new Traits( "female, accessories" ,[ "cigarette ", "hot lipstick ", "stringy hair ", "welding goggles",],),
  //9485"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "purple lipstick ", "wild white hair",],),
  //9486"],),

  new Traits( "male, accessories" ,[ "earring ", "police cap ", "vr",],),
  //9487"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "regular shades ", "vampire hair",],),
  //9488"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "messy hair ", "vape",],),
  //9489"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "hot lipstick ", "mohawk thin",],),
  //9490"],),

  new Traits( "female, accessories" ,[ "earring ", "tassle hat",],),
  //9491"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "mohawk thin ", "pipe ", "purple lipstick",],),
  //9492"],),

  new Traits( "female, accessories" ,[ "purple eye shadow ", "purple lipstick ", "wild blonde",],),
  //9493"],),

  new Traits( "male, accessories" ,[ "shadow beard ", "shaved head ", "vr",],),
  //9494"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "clown hair green ", "silver chain",],),
  //9495"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "earring ", "eye patch",],),
  //9496"],),

  new Traits( "male, accessories" ,[ "beanie ", "horned rim glasses ", "mustache",],),
  //9497"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk dark ", "normal beard black",],),
  //9498"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "mohawk dark ", "normal beard",],),
  //9499"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes blue ", "dark hair",],),
  //9500"],),

  new Traits( "male, accessories" ,[ "big shades ", "handlebars ", "mohawk ", "mole",],),
  //9501"],),

  new Traits( "male, accessories" ,[ "earring ", "gold chain ", "muttonchops ", "shaved head",],),
  //9502"],),

  new Traits( "female, accessories" ,[ "eye patch ", "frumpy hair",],),
  //9503"],),

  new Traits( "male, accessories" ,[ "vampire hair ", "vape",],),
  //9504"],),

  new Traits( "male, accessories" ,[ "do-rag ", "nerd glasses",],),
  //9505"],),

  new Traits( "female, accessories" ,[ "cigarette ", "classic shades ", "straight hair blonde",],),
  //9506"],),

  new Traits( "male, accessories" ,[ "eye mask ", "shadow beard ", "vampire hair",],),
  //9507"],),

  new Traits( "male, accessories" ,[ "cap forward ", "chinstrap ", "nerd glasses",],),
  //9508"],),

  new Traits( "male, accessories" ,[ "eye patch ", "normal beard ", "vampire hair",],),
  //9509"],),

  new Traits( "male, accessories" ,[ "big beard ", "wild hair",],),
  //9510"],),

  new Traits( "male, accessories" ,[ "big beard ", "eye patch ", "headband",],),
  //9511"],),

  new Traits( "male, accessories" ,[ "eye patch ", "front beard ", "headband ", "pipe",],),
  //9512"],),

  new Traits( "male, accessories" ,[ "hoodie ", "normal beard",],),
  //9513"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "cigarette",],),
  //9514"],),

  new Traits( "female, accessories" ,[ "classic shades ", "pigtails",],),
  //9515"],),

  new Traits( "male, accessories" ,[ "frown ", "knitted cap ", "muttonchops ", "regular shades",],),
  //9516"],),

  new Traits( "female, accessories" ,[ "classic shades ", "earring ", "headband",],),
  //9517"],),

  new Traits( "male, accessories" ,[ "eye patch ", "messy hair ", "mustache",],),
  //9518"],),

  new Traits( "male, accessories" ,[ "bandana ", "goat ", "mole ", "regular shades",],),
  //9519"],),

  new Traits( "female, accessories" ,[ "pigtails ", "purple lipstick",],),
  //9520"],),

  new Traits( "male, accessories" ,[ "bandana ", "handlebars ", "regular shades",],),
  //9521"],),

  new Traits( "female, accessories" ,[ "big shades ", "blonde short ", "medical mask",],),
  //9522"],),

  new Traits( "female, accessories" ,[ "big shades ", "messy hair",],),
  //9523"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk dark ", "regular shades",],),
  //9524"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "eye patch ", "shadow beard",],),
  //9525"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "hot lipstick ", "straight hair",],),
  //9526"],),

  new Traits( "male, accessories" ,[ "cigarette ", "knitted cap ", "mustache",],),
  //9527"],),

  new Traits( "male, accessories" ,[ "cigarette ", "luxurious beard ", "stringy hair",],),
  //9528"],),

  new Traits( "female, accessories" ,[ "bandana ", "hot lipstick ", "vr",],),
  //9529"],),

  new Traits( "male, accessories" ,[ "clown nose ", "top hat",],),
  //9530"],),

  new Traits( "female, accessories" ,[ "clown hair green ", "earring",],),
  //9531"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "crazy hair ", "earring ", "nerd glasses",],),
  //9532"],),

  new Traits( "male, accessories" ,[ "bandana ", "front beard ", "vape",],),
  //9533"],),

  new Traits( "female, accessories" ,[ "half shaved ", "purple lipstick ", "silver chain",],),
  //9534"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "mustache",],),
  //9535"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard ", "messy hair ", "mole ", "nerd glasses",],),
  //9536"],),

  new Traits( "male, accessories" ,[ "cap ", "earring ", "mustache ", "regular shades",],),
  //9537"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora ", "handlebars",],),
  //9538"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "pink with hat ", "purple lipstick",],),
  //9539"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "messy hair ", "purple lipstick",],),
  //9540"],),

  new Traits( "male, accessories" ,[ "mole ", "normal beard ", "vampire hair",],),
  //9541"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "shaved head",],),
  //9542"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "classic shades ", "crazy hair",],),
  //9543"],),

  new Traits( "female, accessories" ,[ "pipe ", "purple lipstick ", "straight hair blonde",],),
  //9544"],),

  new Traits( "female, accessories" ,[ "cigarette ", "red mohawk",],),
  //9545"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "pigtails",],),
  //9546"],),

  new Traits( "male, accessories" ,[ "normal beard black ", "regular shades ", "rosy cheeks ", "stringy hair",],),
  //9547"],),

  new Traits( "male, accessories" ,[ "cigarette ", "do-rag ", "eye mask",],),
  //9548"],),

  new Traits( "female, accessories" ,[ "big shades ", "black lipstick ", "mole",],),
  //9549"],),

  new Traits( "female, accessories" ,[ "classic shades ", "earring ", "hot lipstick ", "straight hair dark",],),
  //9550"],),

  new Traits( "male, accessories" ,[ "cigarette ", "crazy hair",],),
  //9551"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "nerd glasses",],),
  //9552"],),

  new Traits( "male, accessories" ,[ "regular shades ", "shadow beard ", "shaved head",],),
  //9553"],),

  new Traits( "male, accessories" ,[ "headband ", "vr",],),
  //9554"],),

  new Traits( "male, accessories" ,[ "eye mask ", "normal beard ", "shaved head",],),
  //9555"],),

  new Traits( "male, accessories" ,[ "do-rag ", "normal beard black ", "regular shades",],),
  //9556"],),

  new Traits( "male, accessories" ,[ "classic shades ", "do-rag ", "shadow beard",],),
  //9557"],),

  new Traits( "male, accessories" ,[ "cigarette ", "frumpy hair ", "vr",],),
  //9558"],),

  new Traits( "female, accessories" ,[ "big shades ", "black lipstick ", "earring ", "wild white hair",],),
  //9559"],),

  new Traits( "male, accessories" ,[ "cap ", "classic shades ", "medical mask ", "shadow beard",],),
  //9560"],),

  new Traits( "male, accessories" ,[ "big beard ", "eye mask ", "headband",],),
  //9561"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "earring ", "muttonchops ", "nerd glasses",],),
  //9562"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "welding goggles",],),
  //9563"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "frumpy hair ", "horned rim glasses",],),
  //9564"],),

  new Traits( "male, accessories" ,[ "bandana ", "rosy cheeks ", "vr",],),
  //9565"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "classic shades ", "hot lipstick",],),
  //9566"],),

  new Traits( "male, accessories" ,[ "do-rag ", "earring ", "normal beard",],),
  //9567"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "fedora",],),
  //9568"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "shadow beard ", "smile",],),
  //9569"],),

  new Traits( "male, accessories" ,[ "cigarette ", "classic shades ", "messy hair ", "normal beard black",],),
  //9570"],),

  new Traits( "female, accessories" ,[ "cigarette ", "half shaved ", "purple lipstick",],),
  //9571"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "hot lipstick ", "welding goggles",],),
  //9572"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "frown ", "headband ", "regular shades",],),
  //9573"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cap forward ", "muttonchops",],),
  //9574"],),

  new Traits( "female, accessories" ,[ "earring ", "mohawk thin ", "purple eye shadow ", "purple lipstick",],),
  //9575"],),

  new Traits( "female, accessories" ,[ "classic shades ", "headband",],),
  //9576"],),

  new Traits( "female, accessories" ,[ "clown hair green ", "pipe",],),
  //9577"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cap forward ", "muttonchops",],),
  //9578"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "nerd glasses ", "straight hair dark",],),
  //9579"],),

  new Traits( "male, accessories" ,[ "handlebars ", "horned rim glasses ", "silver chain",],),
  //9580"],),

  new Traits( "female, accessories" ,[ "cigarette ", "straight hair dark",],),
  //9581"],),

  new Traits( "male, accessories" ,[ "front beard ", "mohawk ", "nerd glasses",],),
  //9582"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "earring ", "front beard ", "messy hair ", "mole",],),
  //9583"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "normal beard black ", "purple hair",],),
  //9584"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "normal beard black ", "stringy hair",],),
  //9585"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "bandana ", "earring ", "purple lipstick",],),
  //9586"],),

  new Traits( "male, accessories" ,[ "bandana ", "cigarette ", "normal beard ", "small shades",],),
  //9587"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "clown hair green",],),
  //9588"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "muttonchops ", "small shades",],),
  //9589"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "green eye shadow ", "tassle hat",],),
  //9590"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "frown ", "small shades",],),
  //9591"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "hot lipstick",],),
  //9592"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "wild blonde",],),
  //9593"],),

  new Traits( "male, accessories" ,[ "big beard ", "regular shades ", "spots ", "stringy hair",],),
  //9594"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "messy hair ", "purple lipstick",],),
  //9595"],),

  new Traits( "male, accessories" ,[ "classic shades ", "mohawk dark ", "normal beard",],),
  //9596"],),

  new Traits( "male, accessories" ,[ "big beard ", "headband",],),
  //9597"],),

  new Traits( "female, accessories" ,[ "big shades ", "black lipstick ", "straight hair dark",],),
  //9598"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "mole ", "regular shades",],),
  //9599"],),

  new Traits( "male, accessories" ,[ "classic shades ", "front beard dark ", "smile ", "wild hair",],),
  //9600"],),

  new Traits( "male, accessories" ,[ "cap ", "clown eyes blue",],),
  //9601"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "mole ", "shaved head",],),
  //9602"],),

  new Traits( "male, accessories" ,[ "clown nose ", "horned rim glasses ", "shaved head",],),
  //9603"],),

  new Traits( "male, accessories" ,[ "fedora ", "front beard dark ", "mole",],),
  //9604"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "earring ", "peak spike",],),
  //9605"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "red mohawk",],),
  //9606"],),

  new Traits( "female, accessories" ,[ "bandana ", "earring ", "hot lipstick",],),
  //9607"],),

  new Traits( "female, accessories" ,[ "cigarette ", "clown eyes blue ", "earring ", "straight hair",],),
  //9608"],),

  new Traits( "male, accessories" ,[ "cigarette ", "classic shades ", "earring ", "mohawk",],),
  //9609"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "regular shades",],),
  //9610"],),

  new Traits( "male, accessories" ,[ "earring ", "hoodie ", "horned rim glasses ", "luxurious beard",],),
  //9611"],),

  new Traits( "male, accessories" ,[ "frown ", "goat ", "hoodie",],),
  //9612"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "mohawk thin ", "vape",],),
  //9613"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "wild hair",],),
  //9614"],),

  new Traits( "male, accessories" ,[ "big beard ", "earring ", "police cap",],),
  //9615"],),

  new Traits( "male, accessories" ,[ "pipe ", "stringy hair",],),
  //9616"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "mole ", "vr",],),
  //9617"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard dark ", "police cap ", "silver chain",],),
  //9618"],),

  new Traits( "female, accessories" ,[ "eye patch ", "wild white hair",],),
  //9619"],),

  new Traits( "female, accessories" ,[ "bandana ", "black lipstick ", "blue eye shadow",],),
  //9620"],),

  new Traits( "male, accessories" ,[ "gold chain ", "hoodie ", "small shades",],),
  //9621"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mohawk ", "spots",],),
  //9622"],),

  new Traits( "male, accessories" ,[ "hoodie ", "normal beard black ", "vr",],),
  //9623"],),

  new Traits( "male, accessories" ,[ "bandana ", "earring ", "normal beard black",],),
  //9624"],),

  new Traits( "male, accessories" ,[ "medical mask ", "peak spike ", "silver chain",],),
  //9625"],),

  new Traits( "male, accessories" ,[ "cap forward ", "shadow beard ", "small shades",],),
  //9626"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "cigarette ", "earring ", "headband",],),
  //9627"],),

  new Traits( "male, accessories" ,[ "earring ", "frown ", "frumpy hair ", "mustache",],),
  //9628"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "earring ", "eye patch",],),
  //9629"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "purple lipstick",],),
  //9630"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "normal beard ", "pipe",],),
  //9631"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "stringy hair",],),
  //9632"],),

  new Traits( "female, accessories" ,[ "clown nose ", "pilot helmet",],),
  //9633"],),

  new Traits( "male, accessories" ,[ "earring ", "luxurious beard ", "wild hair",],),
  //9634"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk thin",],),
  //9635"],),

  new Traits( "male, accessories" ,[ "medical mask ", "stringy hair ", "vr",],),
  //9636"],),

  new Traits( "male, accessories" ,[ "frown ", "horned rim glasses ", "messy hair ", "pipe",],),
  //9637"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "mohawk dark ", "purple lipstick",],),
  //9638"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "do-rag ", "normal beard black",],),
  //9639"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "crazy hair ", "hot lipstick",],),
  //9640"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "orange side",],),
  //9641"],),

  new Traits( "female, accessories" ,[ "eye mask ", "half shaved",],),
  //9642"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "mohawk",],),
  //9643"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "goat ", "medical mask",],),
  //9644"],),

  new Traits( "male, accessories" ,[ "classic shades ", "crazy hair ", "earring ", "normal beard",],),
  //9645"],),

  new Traits( "female, accessories" ,[ "eye mask ", "hot lipstick ", "pigtails",],),
  //9646"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "purple lipstick ", "stringy hair",],),
  //9647"],),

  new Traits( "female, accessories" ,[ "earring ", "orange side ", "rosy cheeks",],),
  //9648"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "mohawk dark ", "shadow beard",],),
  //9649"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "hot lipstick ", "wild blonde",],),
  //9650"],),

  new Traits( "male, accessories" ,[ "eye patch ", "mohawk thin ", "mole ", "silver chain",],),
  //9651"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "mohawk dark ", "purple lipstick",],),
  //9652"],),

  new Traits( "male, accessories" ,[ "classic shades ", "messy hair ", "smile",],),
  //9653"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "crazy hair",],),
  //9654"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "small shades ", "vampire hair",],),
  //9655"],),

  new Traits( "male, accessories" ,[ "earring ", "frumpy hair ", "mole",],),
  //9656"],),

  new Traits( "male, accessories" ,[ "do-rag ", "gold chain",],),
  //9657"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "small shades ", "spots",],),
  //9658"],),

  new Traits( "male, accessories" ,[ "pipe ", "smile",],),
  //9659"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "messy hair ", "nerd glasses",],),
  //9660"],),

  new Traits( "female, accessories" ,[ "clown hair green ", "nerd glasses",],),
  //9661"],),

  new Traits( "female, accessories" ,[ "bandana ", "clown eyes blue ", "purple lipstick",],),
  //9662"],),

  new Traits( "female, accessories" ,[ "classic shades ", "earring ", "purple lipstick ", "straight hair blonde",],),
  //9663"],),

  new Traits( "male, accessories" ,[ "eye patch ", "vampire hair",],),
  //9664"],),

  new Traits( "male, accessories" ,[ "earring ", "horned rim glasses ", "police cap",],),
  //9665"],),

  new Traits( "male, accessories" ,[ "goat ", "mohawk thin",],),
  //9666"],),

  new Traits( "male, accessories" ,[ "cap forward ", "frown ", "regular shades",],),
  //9667"],),

  new Traits( "male, accessories" ,[ "big shades ", "frumpy hair ", "smile",],),
  //9668"],),

  new Traits( "male, accessories" ,[ "normal beard black ", "regular shades ", "vampire hair",],),
  //9669"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "nerd glasses",],),
  //9670"],),

  new Traits( "male, accessories" ,[ "messy hair ", "vr",],),
  //9671"],),

  new Traits( "male, accessories" ,[ "medical mask ", "mohawk thin ", "nerd glasses",],),
  //9672"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "shaved head",],),
  //9673"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "clown nose ", "earring ", "headband ", "silver chain",],),
  //9674"],),

  new Traits( "female, accessories" ,[ "cap ", "cigarette ", "hot lipstick",],),
  //9675"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "normal beard ", "peak spike",],),
  //9676"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "vampire hair",],),
  //9677"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "clown hair green",],),
  //9678"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "small shades",],),
  //9679"],),

  new Traits( "male, accessories" ,[ "cap ", "handlebars ", "regular shades",],),
  //9680"],),

  new Traits( "male, accessories" ,[ "cap forward ", "classic shades ", "shadow beard",],),
  //9681"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "knitted cap",],),
  //9682"],),

  new Traits( "male, accessories" ,[ "goat ", "top hat",],),
  //9683"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "cap forward ", "handlebars ", "pipe",],),
  //9684"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "knitted cap",],),
  //9685"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "knitted cap",],),
  //9686"],),

  new Traits( "male, accessories" ,[ "cap ", "horned rim glasses ", "normal beard",],),
  //9687"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "frown",],),
  //9688"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "clown hair green ", "earring",],),
  //9689"],),

  new Traits( "male, accessories" ,[ "eye mask ", "frumpy hair",],),
  //9690"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "green eye shadow ", "mohawk dark",],),
  //9691"],),

  new Traits( "male, accessories" ,[ "cigarette ", "clown eyes green ", "earring ", "normal beard black ", "shaved head",],),
  //9692"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "clown nose ", "mohawk dark",],),
  //9693"],),

  new Traits( "male, accessories" ,[ "goat ", "peak spike ", "vr",],),
  //9694"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "eye patch ", "goat",],),
  //9695"],),

  new Traits( "male, accessories" ,[ "cigarette ", "crazy hair ", "mole",],),
  //9696"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "eye mask",],),
  //9697"],),

  new Traits( "male, accessories" ,[ "clown nose ", "eye patch ", "silver chain ", "wild hair",],),
  //9698"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "mustache ", "nerd glasses",],),
  //9699"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "mohawk ", "normal beard",],),
  //9700"],),

  new Traits( "male, accessories" ,[ "big shades ", "buck teeth ", "frumpy hair",],),
  //9701"],),

  new Traits( "male, accessories" ,[ "medical mask ", "muttonchops ", "shaved head",],),
  //9702"],),

  new Traits( "male, accessories" ,[ "beanie ", "mole",],),
  //9703"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "earring ", "mohawk dark ", "shadow beard",],),
  //9704"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mohawk thin",],),
  //9705"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "messy hair",],),
  //9706"],),

  new Traits( "male, accessories" ,[ "classic shades ", "hoodie ", "mustache",],),
  //9707"],),

  new Traits( "male, accessories" ,[ "cigarette ", "mohawk thin ", "small shades",],),
  //9708"],),

  new Traits( "male, accessories" ,[ "cap forward ", "cigarette ", "classic shades ", "frown",],),
  //9709"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "dark hair ", "purple lipstick",],),
  //9710"],),

  new Traits( "male, accessories" ,[ "crazy hair ", "eye mask ", "front beard dark",],),
  //9711"],),

  new Traits( "female, accessories" ,[ "earring ", "mole ", "vape, "wild blonde",],),
  //9712"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "mohawk dark",],),
  //9713"],),

  new Traits( "female, accessories" ,[ "half shaved ", "vape",],),
  //9714"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "crazy hair ", "medical mask",],),
  //9715"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "mohawk dark ", "small shades",],),
  //9716"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk ", "mustache ", "nerd glasses",],),
  //9717"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "eye mask",],),
  //9718"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "earring ", "mohawk dark",],),
  //9719"],),

  new Traits( "male, accessories" ,[ "earring ", "peak spike ", "vape",],),
  //9720"],),

  new Traits( "male, accessories" ,[ "cap ", "cigarette ", "mole",],),
  //9721"],),

  new Traits( "male, accessories" ,[ "hoodie ", "mole ", "small shades",],),
  //9722"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "do-rag ", "luxurious beard ", "mole",],),
  //9723"],),

  new Traits( "male, accessories" ,[ "earring ", "fedora ", "regular shades",],),
  //9724"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "half shaved ", "hot lipstick",],),
  //9725"],),

  new Traits( "male, accessories" ,[ "earring ", "shadow beard ", "shaved head",],),
  //9726"],),

  new Traits( "female, accessories" ,[ "clown eyes green ", "dark hair ", "mole",],),
  //9727"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "mohawk thin ", "muttonchops",],),
  //9728"],),

  new Traits( "female, accessories" ,[ "mohawk dark ", "mole",],),
  //9729"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "knitted cap",],),
  //9730"],),

  new Traits( "female, accessories" ,[ "clown nose ", "dark hair ", "purple lipstick",],),
  //9731"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "crazy hair ", "earring",],),
  //9732"],),

  new Traits( "male, accessories" ,[ "goat ", "regular shades ", "wild hair",],),
  //9733"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "chinstrap ", "frown ", "wild hair",],),
  //9734"],),

  new Traits( "male, accessories" ,[ "goat ", "mohawk ", "vr",],),
  //9735"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "mustache",],),
  //9736"],),

  new Traits( "male, accessories" ,[ "cap ", "eye mask ", "normal beard black",],),
  //9737"],),

  new Traits( "male, accessories" ,[ "earring ", "luxurious beard ", "messy hair",],),
  //9738"],),

  new Traits( "male, accessories" ,[ "classic shades ", "frumpy hair ", "normal beard",],),
  //9739"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "dark hair ", "hot lipstick",],),
  //9740"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "vr ", "wild hair",],),
  //9741"],),

  new Traits( "female, accessories" ,[ "blonde short ", "nerd glasses",],),
  //9742"],),

  new Traits( "male, accessories" ,[ "cigarette ", "knitted cap ", "normal beard black",],),
  //9743"],),

  new Traits( "male, accessories" ,[ "earring ", "mustache ", "peak spike",],),
  //9744"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "earring ", "horned rim glasses",],),
  //9745"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "pipe ", "red mohawk",],),
  //9746"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "mohawk thin",],),
  //9747"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "green eye shadow ", "mohawk dark",],),
  //9748"],),

  new Traits( "male, accessories" ,[ "beanie ", "chinstrap ", "eye patch",],),
  //9749"],),

  new Traits( "male, accessories" ,[ "big shades ", "vampire hair",],),
  //9750"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "earring ", "headband",],),
  //9751"],),

  new Traits( "male, accessories" ,[ "front beard ", "medical mask ", "mohawk",],),
  //9752"],),

  new Traits( "male, accessories" ,[ "cap ", "earring ", "goat",],),
  //9753"],),

  new Traits( "male, accessories" ,[ "nerd glasses ", "normal beard",],),
  //9754"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "hot lipstick ", "messy hair",],),
  //9755"],),

  new Traits( "female, accessories" ,[ "choker ", "nerd glasses ", "straight hair dark",],),
  //9756"],),

  new Traits( "female, accessories" ,[ "gold chain ", "green eye shadow ", "half shaved",],),
  //9757"],),

  new Traits( "female, accessories" ,[ "cap ", "earring ", "eye patch",],),
  //9758"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "wild hair",],),
  //9759"],),

  new Traits( "male, accessories" ,[ "cigarette ", "eye patch ", "frumpy hair ", "silver chain ", "smile",],),
  //9760"],),

  new Traits( "male, accessories" ,[ "normal beard ", "purple hair",],),
  //9761"],),

  new Traits( "male, accessories" ,[ "messy hair ", "normal beard black ", "vr",],),
  //9762"],),

  new Traits( "female, accessories" ,[ "classic shades ", "earring ", "knitted cap",],),
  //9763"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "front beard dark ", "mohawk dark",],),
  //9764"],),

  new Traits( "male, accessories" ,[ "earring ", "muttonchops ", "peak spike",],),
  //9765"],),

  new Traits( "male, accessories" ,[ "big shades ", "shadow beard ", "wild hair",],),
  //9766"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "messy hair ", "smile",],),
  //9767"],),

  new Traits( "male, accessories" ,[ "eye mask ", "front beard ", "headband",],),
  //9768"],),

  new Traits( "male, accessories" ,[ "do-rag ", "front beard",],),
  //9769"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "green eye shadow ", "mole ", "stringy hair",],),
  //9770"],),

  new Traits( "male, accessories" ,[ "front beard dark ", "horned rim glasses ", "peak spike",],),
  //9771"],),

  new Traits( "male, accessories" ,[ "cap ", "classic shades ", "earring",],),
  //9772"
  
  
  new Traits( "male, accessories" ,[ "clown nose ", "wild hair",],),
  //9773"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "eye patch ", "shadow beard ", "smile",],),
  //9774"

  new Traits( "female, accessories" ,[ "bandana ", "gold chain",],),
  //9775"],),

  new Traits( "male, accessories" ,[ "cigarette ", "front beard dark ", "mohawk ", "small shades",],),
  //9776"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "luxurious beard ", "small shades",],),
  //9777"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "hoodie",],),
  //9778"],),

  new Traits( "male, accessories" ,[ "earring ", "messy hair ", "normal beard black",],),
  //9779"],),

  new Traits( "male, accessories" ,[ "classic shades ", "earring ", "front beard dark ", "pipe",],),
  //9780"],),

  new Traits( "female, accessories" ,[ "crazy hair ", "regular shades",],),
  //9781"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "pigtails ", "welding goggles",],),
  //9782"],),

  new Traits( "male, accessories" ,[ "gold chain ", "police cap",],),
  //9783"],),

  new Traits( "female, accessories" ,[ "classic shades ", "tiara",],),
  //9784"],),

  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "mole ", "shadow beard ", "shaved head",],),
  //9785"],),

  new Traits( "female, accessories" ,[ "big shades ", "frumpy hair ", "purple lipstick",],),
  //9786"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "mohawk dark",],),
  //9787"],),

  new Traits( "male, accessories" ,[ "big beard ", "knitted cap ", "small shades",],),
  //9788"],),

  new Traits( "male, accessories" ,[ "big beard ", "cigarette ", "mohawk thin",],),
  //9789"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "mohawk",],),
  //9790"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "crazy hair ", "eye mask ", "spots",],),
  //9791"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "frumpy hair ", "hot lipstick",],),
  //9792"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "mohawk thin ", "muttonchops",],),
  //9793"],),

  new Traits( "male, accessories" ,[ "big shades ", "fedora ", "shadow beard",],),
  //9794"],),

  new Traits( "male, accessories" ,[ "handlebars ", "horned rim glasses ", "knitted cap",],),
  //9795"],),

  new Traits( "female, accessories" ,[ "cigarette ", "mole ", "wild white hair",],),
  //9796"],),

  new Traits( "male, accessories" ,[ "frumpy hair ", "muttonchops ", "silver chain",],),
  //9797"],),

  new Traits( "male, accessories" ,[ "earring ", "front beard ", "mohawk dark",],),
  //9798"],),

  new Traits( "male, accessories" ,[ "hoodie ", "muttonchops",],),
  //9799"],),

  new Traits( "male, accessories" ,[ "handlebars ", "peak spike ", "silver chain",],),
  //9800"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "messy hair",],),
  //9801"
  
  
  new Traits( "male, accessories" ,[ "do-rag ", "luxurious beard ", "silver chain",],),
  //9802"],),

  new Traits( "male, accessories" ,[ "big shades ", "cowboy hat",],),
  //9803"],),

  new Traits( "zombie, accessories" ,[ "shadow beard ", "small shades ", "smile ", "stringy hair",],),
  //9804"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "classic shades ", "mohawk",],),
  //9805"],),

  new Traits( "female, accessories" ,[ "knitted cap ", "mole ", "nerd glasses",],),
  //9806"],),

  new Traits( "male, accessories" ,[ "fedora ", "frown",],),
  //9807"],),

  new Traits( "female, accessories" ,[ "eye patch ", "headband",],),
  //9808"],),

  new Traits( "male, accessories" ,[ "eye patch ", "top hat",],),
  //9809"],),

  new Traits( "male, accessories" ,[ "earring ", "shadow beard ", "stringy hair",],),
  //9810"],),

  new Traits( "male, accessories" ,[ "frown ", "headband ", "muttonchops ", "regular shades",],),
  //9811"],),

  new Traits( "male, accessories" ,[ "clown nose ", "knitted cap ", "muttonchops",],),
  //9812"],),

  new Traits( "male, accessories" ,[ "classic shades ", "crazy hair ", "smile",],),
  //9813"],),

  new Traits( "female, accessories" ,[ "horned rim glasses ", "hot lipstick ", "mohawk dark ", "vape",],),
  //9814"],),

  new Traits( "male, accessories" ,[ "clown eyes green ", "mohawk dark ", "muttonchops",],),
  //9815"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "frown ", "shaved head",],),
  //9816"],),

  new Traits( "male, accessories" ,[ "big shades ", "mole ", "shaved head",],),
  //9817"],),

  new Traits( "male, accessories" ,[ "big beard ", "big shades ", "peak spike",],),
  //9818"],),

  new Traits( "male, accessories" ,[ "eye patch ", "gold chain ", "headband ", "luxurious beard ", "mole",],),
  //9819"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "pipe ", "straight hair dark",],),
  //9820"],),

  new Traits( "male, accessories" ,[ "earring ", "muttonchops",],),
  //9821"],),

  new Traits( "male, accessories" ,[ "cigarette ", "stringy hair",],),
  //9822"],),

  new Traits( "male, accessories" ,[ "eye patch ", "mohawk thin ", "shadow beard",],),
  //9823"],),

  new Traits( "female, accessories" ,[ "bandana ", "cigarette ", "hot lipstick ", "mole",],),
  //9824"],),

  new Traits( "female, accessories" ,[ "choker ", "wild white hair",],),
  //9825"],),

  new Traits( "male, accessories" ,[ "goat ", "wild hair",],),
  //9826"],),

  new Traits( "male, accessories" ,[ "regular shades ", "shaved head ", "smile",],),
  //9827"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "nerd glasses ", "straight hair blonde",],),
  //9828"],),

  new Traits( "male, accessories" ,[ "big shades ", "cowboy hat",],),
  //9829"],),

  new Traits( "male, accessories" ,[ "earring ", "handlebars ", "peak spike",],),
  //9830"],),

  new Traits( "female, accessories" ,[ "blonde short ", "clown eyes green ", "earring",],),
  //9831"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "straight hair blonde ", "welding goggles",],),
  //9832"],),

  new Traits( "male, accessories" ,[ "bandana ", "clown nose ", "earring ", "eye patch",],),
  //9833"],),

  new Traits( "female, accessories" ,[ "dark hair ", "earring ", "nerd glasses",],),
  //9834"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "shadow beard ", "wild hair",],),
  //9835"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "mohawk thin ", "pipe",],),
  //9836"],),

  new Traits( "male, accessories" ,[ "headband ", "horned rim glasses ", "normal beard black",],),
  //9837"],),

  new Traits( "zombie, accessories" ,[ "earring ", "front beard dark ", "peak spike",],),
  //9838"],),

  new Traits( "male, accessories" ,[ "earring ", "knitted cap ", "vr",],),
  //9839"],),

  new Traits( "female, accessories" ,[ "frumpy hair ", "horned rim glasses ", "hot lipstick",],),
  //9840"],),

  new Traits( "male, accessories" ,[ "front beard ", "regular shades",],),
  //9841"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "normal beard black",],),
  //9842"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cap ", "nerd glasses",],),
  //9843"],),

  new Traits( "female, accessories" ,[ "mole ", "pilot helmet ", "purple lipstick",],),
  //9844"],),

  new Traits( "male, accessories" ,[ "cap forward ", "cigarette ", "regular shades",],),
  //9845"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "mohawk thin",],),
  //9846"],),

  new Traits( "male, accessories" ,[ "bandana ", "normal beard black",],),
  //9847"],),

  new Traits( "male, accessories" ,[ "big beard ", "earring ", "hoodie ", "nerd glasses",],),
  //9848"],),

  new Traits( "female, accessories" ,[ "red mohawk ", "vr",],),
  //9849"],),

  new Traits( "male, accessories" ,[ "knitted cap ", "mole ", "regular shades ", "shadow beard",],),
  //9850"],),

  new Traits( "female, accessories" ,[ "clown hair green ", "mole ", "regular shades",],),
  //9851"],),

  new Traits( "female, accessories" ,[ "blonde bob ", "blue eye shadow ", "silver chain",],),
  //9852"],),

  new Traits( "male, accessories" ,[ "clown hair green ", "regular shades",],),
  //9853"],),

  new Traits( "male, accessories" ,[ "muttonchops",],),
  //9854"],),

  new Traits( "male, accessories" ,[ "earring ", "headband ", "small shades",],),
  //9855"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "mole ", "purple hair",],),
  //9856"],),

  new Traits( "female, accessories" ,[ "earring ", "horned rim glasses ", "mohawk ", "purple lipstick",],),
  //9857"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "purple hair ", "regular shades",],),
  //9858"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "regular shades ", "silver chain",],),
  //9859"],),

  new Traits( "male, accessories" ,[ "earring ", "regular shades ", "shadow beard ", "shaved head",],),
  //9860"],),

  new Traits( "female, accessories" ,[ "classic shades ", "clown nose ", "earring ", "wild white hair",],),
  //9861"],),

  new Traits( "male, accessories" ,[ "earring ", "mohawk thin ", "mustache",],),
  //9862"],),

  new Traits( "male, accessories" ,[ "cigarette",],),
  //9863"],),

  new Traits( "female, accessories" ,[ "orange side ", "purple eye shadow",],),
  //9864"],),

  new Traits( "male, accessories" ,[ "classic shades ", "luxurious beard ", "vampire hair",],),
  //9865"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "hot lipstick ", "straight hair",],),
  //9866"],),

  new Traits( "female, accessories" ,[ "gold chain ", "mohawk dark",],),
  //9867"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "mohawk dark",],),
  //9868"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "mole ", "wild white hair",],),
  //9869"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "earring ", "horned rim glasses",],),
  //9870"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick",],),
  //9871"],),

  new Traits( "male, accessories" ,[ "regular shades ", "shadow beard",],),
  //9872"],),

  new Traits( "male, accessories" ,[ "handlebars ", "wild hair",],),
  //9873"],),

  new Traits( "male, accessories" ,[ "big beard",],),
  //9874"],),

  new Traits( "female, accessories" ,[ "eye mask ", "tassle hat",],),
  //9875"],),

  new Traits( "female, accessories" ,[ "eye patch ", "pink with hat ", "purple lipstick",],),
  //9876"],),

  new Traits( "male, accessories" ,[ "mustache ", "purple hair",],),
  //9877"],),

  new Traits( "male, accessories" ,[ "gold chain ", "hoodie ", "normal beard black ", "small shades",],),
  //9878"],),

  new Traits( "male, accessories" ,[ "cap forward ", "earring ", "normal beard black",],),
  //9879"],),

  new Traits( "male, accessories" ,[ "bandana ", "goat ", "regular shades ", "vape",],),
  //9880"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "cigarette ", "messy hair ", "purple lipstick",],),
  //9881"],),

  new Traits( "female, accessories" ,[ "classic shades ", "earring ", "medical mask ", "straight hair",],),
  //9882"],),

  new Traits( "male, accessories" ,[ "cowboy hat ", "horned rim glasses ", "muttonchops",],),
  //9883"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "nerd glasses ", "straight hair dark",],),
  //9884"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "purple eye shadow ", "wild hair",],),
  //9885"],),

  new Traits( "male, accessories" ,[ "classic shades ", "front beard dark ", "headband",],),
  //9886"],),

  new Traits( "male, accessories" ,[ "earring ", "goat ", "mohawk thin ", "mole",],),
  //9887"],),

  new Traits( "male, accessories" ,[ "3d glasses ", "front beard ", "frumpy hair ", "mole",],),
  //9888"],),

  new Traits( "female, accessories" ,[ "big shades ", "straight hair dark ", "vape",],),
  //9889"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "earring ", "red mohawk",],),
  //9890"],),

  new Traits( "male, accessories" ,[ "clown eyes blue ", "luxurious beard ", "mohawk",],),
  //9891"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "medical mask ", "tassle hat",],),
  //9892"],),

  new Traits( "male, accessories" ,[ "hoodie ", "luxurious beard ", "vape",],),
  //9893"],),

  new Traits( "male, accessories" ,[ "do-rag ", "vr",],),
  //9894"],),

  new Traits( "female, accessories" ,[ "earring ", "hot lipstick ", "mohawk dark",],),
  //9895"],),

  new Traits( "male, accessories" ,[ "cap ", "cigarette ", "earring ", "horned rim glasses",],),
  //9896"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "do-rag ", "goat",],),
  //9897"],),

  new Traits( "female, accessories" ,[ "eye mask ", "headband ", "vape",],),
  //9898"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "dark hair ", "hot lipstick",],),
  //9899"],),

  new Traits( "male, accessories" ,[ "do-rag ", "mole",],),
  //9900"],),

  new Traits( "male, accessories" ,[ "cigarette ", "front beard ", "hoodie",],),
  //9901"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "mole",],),
  //9902"],),

  new Traits( "female, accessories" ,[ "eye patch ", "hot lipstick ", "mohawk",],),
  //9903"],),

  new Traits( "male, accessories" ,[ "handlebars ", "mohawk thin ", "nerd glasses",],),
  //9904"],),

  new Traits( "male, accessories" ,[ "eye mask ", "muttonchops",],),
  //9905"],),

  new Traits( "male, accessories" ,[ "eye mask ", "front beard ", "police cap",],),
  //9906"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "tiara",],),
  //9907"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "dark hair ", "hot lipstick",],),
  //9908"],),

  new Traits( "zombie, accessories" ,[ "cap",],),
  //9909"],),

  new Traits( "male, accessories" ,[ "mohawk thin ", "silver chain",],),
  //9910"],),

  new Traits( "male, accessories" ,[ "eye mask ", "mohawk thin",],),
  //9911"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "mohawk dark ", "nerd glasses ", "pipe ", "rosy cheeks",],),
  //9912"],),

  new Traits( "male, accessories" ,[ "earring ", "mustache ", "shaved head",],),
  //9913"],),

  new Traits( "male, accessories" ,[ "shadow beard ", "shaved head ", "small shades",],),
  //9914"],),

  new Traits( "male, accessories" ,[ "earring ", "eye mask ", "knitted cap ", "mole",],),
  //9915"],),

  new Traits( "male, accessories" ,[ "beanie ", "front beard",],),
  //9916"],),

  new Traits( "female, accessories" ,[ "bandana ", "mole ", "vape",],),
  //9917"],),

  new Traits( "male, accessories" ,[ "clown nose ", "frumpy hair",],),
  //9918"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "messy hair",],),
  //9919"],),

  new Traits( "female, accessories" ,[ "big shades ", "messy hair ", "purple lipstick",],),
  //9920"],),

  new Traits( "female, accessories" ,[ "cigarette ", "clown nose ", "frumpy hair ", "welding goggles",],),
  //9921"],),

  new Traits( "male, accessories" ,[ "do-rag ", "front beard dark",],),
  //9922"],),

  new Traits( "female, accessories" ,[ "cap ", "clown eyes green ", "earring ", "hot lipstick",],),
  //9923"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "mohawk dark ", "mole",],),
  //9924"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "cigarette ", "earring ", "purple lipstick ", "wild blonde",],),
  //9925"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "tiara",],),
  //9926"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "half shaved",],),
  //9927"],),

  new Traits( "female, accessories" ,[ "cigarette ", "clown hair green",],),
  //9928"],),

  new Traits( "male, accessories" ,[ "earring ", "peak spike ", "shadow beard",],),
  //9929"],),

  new Traits( "male, accessories" ,[ "goat ", "horned rim glasses",],),
  //9930"],),

  new Traits( "male, accessories" ,[ "big shades ", "earring ", "mohawk",],),
  //9931"],),

  new Traits( "female, accessories" ,[ "3d glasses ", "clown hair green",],),
  //9932"],),

  new Traits( "female, accessories" ,[ "clown eyes blue ", "mohawk dark ", "mole",],),
  //9933"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "pink with hat ", "purple lipstick",],),
  //9934"],),

  new Traits( "male, accessories" ,[ "eye patch ", "fedora ", "mustache",],),
  //9935"],),

  new Traits( "male, accessories" ,[ "headband ", "regular shades ", "smile",],),
  //9936"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "welding goggles ", "wild hair",],),
  //9937"],),

  new Traits( "female, accessories" ,[ "headband ", "spots",],),
  //9938"],),

  new Traits( "male, accessories" ,[ "cap ", "earring ", "nerd glasses",],),
  //9939"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "mohawk ", "purple lipstick",],),
  //9940"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "pigtails ", "vr",],),
  //9941"],),

  new Traits( "female, accessories" ,[ "hot lipstick ", "nerd glasses ", "straight hair",],),
  //9942"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "cigarette ", "earring ", "eye patch ", "mohawk thin",],),
  //9943"],),

  new Traits( "male, accessories" ,[ "front beard ", "frumpy hair ", "mole",],),
  //9944"],),

  new Traits( "female, accessories" ,[ "big shades ", "black lipstick ", "half shaved",],),
  //9945"],),

  new Traits( "male, accessories" ,[ "mohawk dark ", "shadow beard ", "silver chain",],),
  //9946"],),

  new Traits( "male, accessories" ,[ "earring ", "goat ", "knitted cap ", "vr",],),
  //9947"],),

  new Traits( "male, accessories" ,[ "buck teeth ", "classic shades ", "do-rag",],),
  //9948"],),

  new Traits( "male, accessories" ,[ "bandana ", "regular shades",],),
  //9949"],),

  new Traits( "male, accessories" ,[ "do-rag ", "eye patch ", "shadow beard",],),
  //9950"],),

  new Traits( "male, accessories" ,[ "cigarette ", "hoodie ", "shadow beard",],),
  //9951"],),

  new Traits( "male, accessories" ,[ "hoodie ", "normal beard ", "smile",],),
  //9952"],),

  new Traits( "male, accessories" ,[ "big shades ", "cigarette ", "hoodie ", "luxurious beard",],),
  //9953"],),

  new Traits( "male, accessories" ,[ "front beard ", "regular shades ", "shaved head",],),
  //9954"],),

  new Traits( "zombie, accessories" ,[ "shaved head",],),
  //9955"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "messy hair",],),
  //9956"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "horned rim glasses ", "medical mask ", "spots ", "straight hair",],),
  //9957"],),

  new Traits( "female, accessories" ,[ "earring ", "green eye shadow ", "mohawk thin ", "purple lipstick",],),
  //9958"],),

  new Traits( "female, accessories" ,[ "classic shades ", "pink with hat ", "pipe ", "rosy cheeks",],),
  //9959"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "earring ", "half shaved ", "purple lipstick ", "rosy cheeks",],),
  //9960"],),

  new Traits( "male, accessories" ,[ "medical mask ", "normal beard ", "shaved head ", "vr",],),
  //9961"],),

  new Traits( "male, accessories" ,[ "luxurious beard ", "messy hair ", "mole ", "regular shades",],),
  //9962"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "earring ", "purple hair ", "vr",],),
  //9963"],),

  new Traits( "female, accessories" ,[ "bandana ", "clown eyes blue ", "earring ", "purple lipstick",],),
  //9964"],),

  new Traits( "male, accessories" ,[ "earring ", "hoodie ", "nerd glasses",],),
  //9965"],),

  new Traits( "female, accessories" ,[ "earring ", "eye patch ", "hot lipstick ", "wild hair",],),
  //9966"],),

  new Traits( "female, accessories" ,[ "green eye shadow ", "knitted cap",],),
  //9967"],),

  new Traits( "male, accessories" ,[ "big beard ", "big shades ", "vampire hair",],),
  //9968"],),

  new Traits( "male, accessories" ,[ "peak spike ", "vr",],),
  //9969"],),

  new Traits( "male, accessories" ,[ "classic shades ", "pipe ", "shaved head",],),
  //9970"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blue eye shadow ", "dark hair",],),
  //9971"],),

  new Traits( "male, accessories" ,[ "big shades ", "frown ", "frumpy hair",],),
  //9972"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "do-rag ", "eye patch",],),
  //9973"],),

  new Traits( "female, accessories" ,[ "blue eye shadow ", "clown hair green",],),
  //9974"],),

  new Traits( "male, accessories" ,[ "earring ", "messy hair ", "mole",],),
  //9975"],),

  new Traits( "female, accessories" ,[ "half shaved ", "pipe",],),
  //9976"],),

  new Traits( "male, accessories" ,[ "chinstrap ", "regular shades ", "shaved head",],),
  //9977"],),

  new Traits( "male, accessories" ,[ "earring ", "eye patch ", "fedora",],),
  //9978"],),

  new Traits( "male, accessories" ,[ "cigarette ", "earring ", "nerd glasses ", "shaved head",],),
  //9979"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "blonde short ", "cigarette ", "classic shades",],),
  //9980"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "earring ", "nerd glasses",],),
  //9981"],),

  new Traits( "female, accessories" ,[ "earring ", "stringy hair ", "vr",],),
  //9982"],),

  new Traits( "female, accessories" ,[ "classic shades ", "mole ", "purple lipstick",],),
  //9983"],),

  new Traits( "male, accessories" ,[ "goat ", "mole ", "smile ", "stringy hair",],),
  //9984"],),

  new Traits( "male, accessories" ,[ "big beard ", "vampire hair",],),
  //9985"],),

  new Traits( "male, accessories" ,[ "mohawk ", "muttonchops",],),
  //9986"],),

  new Traits( "male, accessories" ,[ "regular shades ", "shadow beard ", "vampire hair",],),
  //9987"],),

  new Traits( "male, accessories" ,[ "gold chain ", "messy hair",],),
  //9988"],),

  new Traits( "female, accessories" ,[ "cigarette ", "hot lipstick ", "pilot helmet",],),
  //9989"],),

  new Traits( "male, accessories" ,[ "horned rim glasses ", "mohawk",],),
  //9990"],),

  new Traits( "male, accessories" ,[ "beanie ", "earring ", "muttonchops ", "regular shades",],),
  //9991"],),

  new Traits( "male, accessories" ,[ "bandana ", "chinstrap ", "smile",],),
  //9992"],),

  new Traits( "male, accessories" ,[ "cap ", "nerd glasses ", "shadow beard",],),
  //9993"],),

  new Traits( "female, accessories" ,[ "blonde short ", "green eye shadow",],),
  //9994"],),

  new Traits( "female, accessories" ,[ "purple eye shadow ", "straight hair dark",],),
  //9995"],),

  new Traits( "male, accessories" ,[ "cigarette ", "crazy hair ", "earring ", "smile",],),
  //9996"],),

  new Traits( "zombie, accessories" ,[ "cap forward ", "front beard",],),
  //9997"],),

  new Traits( "female, accessories" ,[ "black lipstick ", "clown eyes green ", "wild white hair",],),
  //9998"],),

  new Traits( "female, accessories" ,[ "mohawk ", "nerd glasses",],),
  //9999"
 

  

export function getTrait(index: i32): Trait | null {
  if (index < traits.length) {
    return traits[index];
  } else {
    return null;
  }
}
