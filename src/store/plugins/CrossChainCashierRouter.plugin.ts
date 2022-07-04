// This code is generated from https://spoon.dapp.works
import { SmartGraph } from '@smartgraph/core';
import { extendType } from 'nexus';
import { objectType, stringArg, queryType, arg, inputObjectType, list } from 'nexus';


export const CrossChainCashierRouterPlugin = SmartGraph.Plugin(({ type = 'CrossChainCashierRouter' }) => {
  return {
    name: 'CrossChainCashierRouterPlugin',
    types: [
      extendType({
        //@ts-ignore
        type,
        definition(t) {

        // t.field('cashier', {
        //   type: 'String',
        //   args: {
        
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'CrossChainCashierRouter', method: 'cashier', params: [], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        
      })
    ]
  };
});
    