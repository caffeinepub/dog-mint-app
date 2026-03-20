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
    name: string;
    breed: string;
    color: string;
    eyes: string;
    markings: string;
    mintedAt: bigint;
}
export interface MintDogInput {
    name: string;
    breed: string;
    color: string;
    eyes: string;
    markings: string;
}
export interface backendInterface {
    getDogById(id: string): Promise<Dog | null>;
    getMyDogs(): Promise<Array<Dog>>;
    mintDog(input: MintDogInput): Promise<Dog>;
}
