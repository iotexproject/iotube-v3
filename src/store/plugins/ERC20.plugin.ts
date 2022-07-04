// This code is generated from https://spoon.dapp.works
import { SmartGraph } from '@smartgraph/core';
import { extendType } from 'nexus';
import { objectType, stringArg, queryType, arg, inputObjectType, list } from 'nexus';


export const ERC20Plugin = SmartGraph.Plugin(({ type = 'ERC20' }) => {
  return {
    name: 'ERC20Plugin',
    types: [
      extendType({
        //@ts-ignore
        type,
        definition(t) {

        // t.field('name', {
        //   type: 'String',
        //   args: {
        
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'ERC20', method: 'name', params: [], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('symbol', {
        //   type: 'String',
        //   args: {
        
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'ERC20', method: 'symbol', params: [], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('decimals', {
        //   type: 'String',
        //   args: {
        
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'ERC20', method: 'decimals', params: [], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('balanceOf', {
        //   type: 'String',
        //   args: {
        //     _owner: stringArg()
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'ERC20', method: 'balanceOf', params: [args.args0], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('allowance', {
        //   type: 'String',
        //   args: {
        //     _owner: stringArg(),
        //     _spender: stringArg()
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'ERC20', method: 'allowance', params: [args.args0,args.args1], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('totalSupply', {
        //   type: 'String',
        //   args: {
        
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'ERC20', method: 'totalSupply', params: [], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        
      })
    ]
  };
});
    