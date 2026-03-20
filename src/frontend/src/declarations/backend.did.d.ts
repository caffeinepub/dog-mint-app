/* eslint-disable */
// @ts-nocheck
import type { ActorMethod } from '@icp-sdk/core/agent';
import type { IDL } from '@icp-sdk/core/candid';
import type { Principal } from '@icp-sdk/core/principal';

export interface Dog {
  'id' : string,
  'name' : string,
  'breed' : string,
  'color' : string,
  'eyes' : string,
  'markings' : string,
  'mintedAt' : bigint,
}
export interface MintDogInput {
  'name' : string,
  'breed' : string,
  'color' : string,
  'eyes' : string,
  'markings' : string,
}
export interface _SERVICE {
  'getDogById' : ActorMethod<[string], [] | [Dog]>,
  'getMyDogs' : ActorMethod<[], Array<Dog>>,
  'mintDog' : ActorMethod<[MintDogInput], Dog>,
}
export declare const idlService: IDL.ServiceClass;
export declare const idlInitArgs: IDL.Type[];
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
