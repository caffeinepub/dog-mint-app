/* eslint-disable */
// @ts-nocheck
import { IDL } from '@icp-sdk/core/candid';

export const Dog = IDL.Record({
  'id' : IDL.Text,
  'name' : IDL.Text,
  'breed' : IDL.Text,
  'color' : IDL.Text,
  'eyes' : IDL.Text,
  'markings' : IDL.Text,
  'mintedAt' : IDL.Int,
});
export const MintDogInput = IDL.Record({
  'name' : IDL.Text,
  'breed' : IDL.Text,
  'color' : IDL.Text,
  'eyes' : IDL.Text,
  'markings' : IDL.Text,
});

export const idlService = IDL.Service({
  'getDogById' : IDL.Func([IDL.Text], [IDL.Opt(Dog)], ['query']),
  'getMyDogs' : IDL.Func([], [IDL.Vec(Dog)], ['query']),
  'mintDog' : IDL.Func([MintDogInput], [Dog], []),
});

export const idlInitArgs = [];

export const idlFactory = ({ IDL }) => {
  const Dog = IDL.Record({
    'id' : IDL.Text,
    'name' : IDL.Text,
    'breed' : IDL.Text,
    'color' : IDL.Text,
    'eyes' : IDL.Text,
    'markings' : IDL.Text,
    'mintedAt' : IDL.Int,
  });
  const MintDogInput = IDL.Record({
    'name' : IDL.Text,
    'breed' : IDL.Text,
    'color' : IDL.Text,
    'eyes' : IDL.Text,
    'markings' : IDL.Text,
  });
  return IDL.Service({
    'getDogById' : IDL.Func([IDL.Text], [IDL.Opt(Dog)], ['query']),
    'getMyDogs' : IDL.Func([], [IDL.Vec(Dog)], ['query']),
    'mintDog' : IDL.Func([MintDogInput], [Dog], []),
  });
};

export const init = ({ IDL }) => { return []; };
