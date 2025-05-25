import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export class Storage{
  static #secretKeyIndex = "secret_key"
  static getKey(){
    return localStorage.getItem(this.#secretKeyIndex);
  }

  static setKey(value: string){
    if(typeof value !== typeof "string")
      throw new TypeError("only string are allowed");

    localStorage.setItem(this.#secretKeyIndex, value);
  }
}