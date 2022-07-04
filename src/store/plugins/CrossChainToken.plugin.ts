// This code is generated from https://spoon.dapp.works
import { SmartGraph } from '@smartgraph/core';
import { extendType } from 'nexus';
import { objectType, stringArg, queryType, arg, inputObjectType, list } from 'nexus';


export const CrossChainTokenPlugin = SmartGraph.Plugin(({ type = 'CrossChainToken' }) => {
  return {
    name: 'CrossChainTokenPlugin',
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
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'CrossChainToken', method: 'name', params: [], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('minter', {
        //   type: 'String',
        //   args: {
        
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'CrossChainToken', method: 'minter', params: [], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('symbol', {
        //   type: 'String',
        //   args: {
        
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'CrossChainToken', method: 'symbol', params: [], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('coToken', {
        //   type: 'String',
        //   args: {
        
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'CrossChainToken', method: 'coToken', params: [], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('decimals', {
        //   type: 'String',
        //   args: {
        
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'CrossChainToken', method: 'decimals', params: [], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('allowance', {
        //   type: 'String',
        //   args: {
        //     owner: stringArg(),
        //     spender: stringArg()
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'CrossChainToken', method: 'allowance', params: [args.args0,args.args1], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('balanceOf', {
        //   type: 'String',
        //   args: {
        //     account: stringArg()
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'CrossChainToken', method: 'balanceOf', params: [args.args0], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('totalSupply', {
        //   type: 'String',
        //   args: {
        
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'CrossChainToken', method: 'totalSupply', params: [], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        
      })
    ]
  };
});
    