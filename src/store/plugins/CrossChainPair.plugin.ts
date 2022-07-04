// This code is generated from https://spoon.dapp.works
import { SmartGraph } from '@smartgraph/core';
import { extendType } from 'nexus';
import { objectType, stringArg, queryType, arg, inputObjectType, list } from 'nexus';


export const CrossChainPairPlugin = SmartGraph.Plugin(({ type = 'CrossChainPair' }) => {
  return {
    name: 'CrossChainPairPlugin',
    types: [
      extendType({
        //@ts-ignore
        type,
        definition(t) {

        // t.field('owner', {
        //   type: 'String',
        //   args: {
        
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'CrossChainPair', method: 'owner', params: [], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('scale', {
        //   type: 'String',
        //   args: {
        
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'CrossChainPair', method: 'scale', params: [], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('token', {
        //   type: 'String',
        //   args: {
        
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'CrossChainPair', method: 'token', params: [], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('scaleType', {
        //   type: 'String',
        //   args: {
        
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'CrossChainPair', method: 'scaleType', params: [], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('crosschainToken', {
        //   type: 'String',
        //   args: {
        
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'CrossChainPair', method: 'crosschainToken', params: [], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('remainingCredit', {
        //   type: 'String',
        //   args: {
        
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'CrossChainPair', method: 'remainingCredit', params: [], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('totalTokenAmount', {
        //   type: 'String',
        //   args: {
        
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'CrossChainPair', method: 'totalTokenAmount', params: [], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('calculateDepositValues', {
        //   type: 'String',
        //   args: {
        //     _amount: stringArg()
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'CrossChainPair', method: 'calculateDepositValues', params: [args.args0], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        

        // t.field('calculateWithdrawValues', {
        //   type: 'String',
        //   args: {
        //     _amount: stringArg()
        //   },
        //   resolve: async (root: SmartGraph['ROOT'], args, ctx: SmartGraph['Context']) => {
        //     const res = await SmartGraph.load({ ctx, root }, [{ contractName: 'CrossChainPair', method: 'calculateWithdrawValues', params: [args.args0], address: root.address, cache: { ttl: 20 } }]);
        //     return res[0]
        //   },
        // });
        
      })
    ]
  };
});
    