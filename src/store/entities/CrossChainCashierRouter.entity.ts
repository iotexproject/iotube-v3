// This code is generated from https://spoon.dapp.works

import BigNumber from 'bignumber.js';
import { BigNumberState } from '@/store/standard/BigNumberState';
import { PromiseState } from '@/store/standard/PromiseState';
import { smartGraph } from '@/lib/smartgraph';
import {helper} from "@/lib/helper"
import {ICrossChainCashierRouter} from "@/lib/__generated/typing"

export class CrossChainCashierRouter extends ICrossChainCashierRouter {
  contractName = "CrossChainCashierRouter"

  _depositTo = new PromiseState({
    function: async(args:{_crosschainToken: string,_to: string,_amount: string }) => {
      const {_crosschainToken,_to,_amount} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "depositTo", params: [_crosschainToken,_to,_amount] })
      })
    }
  })
  _approveCrosschainToken = new PromiseState({
    function: async(args:{_crosschainToken: string }) => {
      const {_crosschainToken} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "approveCrosschainToken", params: [_crosschainToken] })
      })
    }
  })

  get call(){
    return {
      address: this.address,
      chainId: Number(this.chainId),
    }
  }
}
    