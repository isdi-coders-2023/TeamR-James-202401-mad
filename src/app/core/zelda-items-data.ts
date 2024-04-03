export interface ZeldaItemsData {
  data: ItemsData[];
}

export interface ItemsData {
  category: string;
  common_locations?: string[];
  description: string;
  dlc: boolean;
  drops?: string[];
  id: number;
  image: string;
  name: string;
  cooking_effect?: string;
  hearts_recovered?: number;
  properties?: Actions;
  edible?: boolean;
}

export interface Actions {
  attack: number;
  defense: number;
}
