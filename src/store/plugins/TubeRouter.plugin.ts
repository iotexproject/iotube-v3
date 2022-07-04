// This code is generated from https://spoon.dapp.works
import { SmartGraph } from '@smartgraph/core';
import { extendType } from 'nexus';
import { objectType, stringArg, queryType, arg, inputObjectType, list } from 'nexus';


export const TubeRouterPlugin = SmartGraph.Plugin(({ type = 'TubeRouter' }) => {
  return {
    name: 'TubeRouterPlugin',
    types: [
      extendType({
        //@ts-ignore
        type,
        definition(t) {

        // t.field('safe', {
        //   type: 'String',
        //   args: {
        
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'TubeRouter', method: 'safe', params: [], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('tube', {
        //   type: 'String',
        //   args: {
        
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'TubeRouter', method: 'tube', params: [], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('owner', {
        //   type: 'String',
        //   args: {
        
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'TubeRouter', method: 'owner', params: [], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('settings', {
        //   type: 'String',
        //   args: {
        //     args0: stringArg()
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'TubeRouter', method: 'settings', params: [args.args0], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        
      })
    ]
  };
});
    