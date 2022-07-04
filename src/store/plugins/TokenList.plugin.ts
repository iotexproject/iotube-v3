// This code is generated from https://spoon.dapp.works
import { SmartGraph } from '@smartgraph/core';
import { extendType } from 'nexus';
import { objectType, stringArg, queryType, arg, inputObjectType, list } from 'nexus';


export const TokenListPlugin = SmartGraph.Plugin(({ type = 'TokenList' }) => {
  return {
    name: 'TokenListPlugin',
    types: [
      extendType({
        //@ts-ignore
        type,
        definition(t) {

        // t.field('count', {
        //   type: 'String',
        //   args: {
        
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'TokenList', method: 'count', params: [], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('owner', {
        //   type: 'String',
        //   args: {
        
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'TokenList', method: 'owner', params: [], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('isExist', {
        //   type: 'String',
        //   args: {
        //     _item: stringArg()
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'TokenList', method: 'isExist', params: [args.args0], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('isActive', {
        //   type: 'String',
        //   args: {
        //     _item: stringArg()
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'TokenList', method: 'isActive', params: [args.args0], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('minAmount', {
        //   type: 'String',
        //   args: {
        //     _token: stringArg()
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'TokenList', method: 'minAmount', params: [args.args0], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('maxAmount', {
        //   type: 'String',
        //   args: {
        //     _token: stringArg()
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'TokenList', method: 'maxAmount', params: [args.args0], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('isAllowed', {
        //   type: 'String',
        //   args: {
        //     _token: stringArg()
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'TokenList', method: 'isAllowed', params: [args.args0], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('numOfActive', {
        //   type: 'String',
        //   args: {
        
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'TokenList', method: 'numOfActive', params: [], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('getActiveItems', {
        //   type: 'String',
        //   args: {
        //     offset: stringArg(),
        //     limit: stringArg()
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'TokenList', method: 'getActiveItems', params: [args.args0,args.args1], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        
      })
    ]
  };
});
    