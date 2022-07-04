// This code is generated from https://spoon.dapp.works

import BigNumber from 'bignumber.js';
import { BigNumberState } from '@/store/standard/BigNumberState';
import { PromiseState } from '@/store/standard/PromiseState';
import { smartGraph } from '@/lib/smartgraph';
import {helper} from "@/lib/helper"
import {IERC20} from "@/lib/__generated/typing"

export class ERC20 extends IERC20 {
  contractName = "ERC20"

  _approve = new PromiseState({
    function: async(args:{_spender: string,_value: string }) => {
      const {_spender,_value} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "approve", params: [_spender,_value] })
      })
    }
  })
  _transfer = new PromiseState({
    function: async(args:{_to: string,_value: string }) => {
      const {_to,_value} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "transfer", params: [_to,_value] })
      })
    }
  })
  _transferFrom = new PromiseState({
    function: async(args:{_from: string,_to: string,_value: string }) => {
      const {_from,_to,_value} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "transferFrom", params: [_from,_to,_value] })
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
    