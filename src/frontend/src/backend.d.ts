import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Dog {
    id: string;
    accessory: string;
    name: string;
    coatColor: string;
    mintedAt: bigint;
    eyeColor: string;
    breed: string;
}
export interface MintDogInput {
    accessory: string;
    name: string;
    coatColor: string;
    eyeColor: string;
    breed: string;
}
export interface backendInterface {
    getDogById(id: string): Promise<Dog | null>;
    getMyDogs(): Promise<Array<Dog>>;
    mintDog(input: MintDogInput): Promise<Dog>;
}
