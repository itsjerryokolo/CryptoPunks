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
  new Trait(
    "female",
    ["blonde bob", "earring", "green eye shadow"],
  ),
  // 1
  new Trait(
    "male",
    ["qwer", "asfd", "asdfasdf"],
  ),
];

export function getTrait(index: i32): Trait | null {
  if (index < traits.length) {
    return traits[index];
  } else {
    return null;
  }
}
