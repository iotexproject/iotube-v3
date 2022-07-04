// This code is generated from https://spoon.dapp.works

import BigNumber from 'bignumber.js';
import { BigNumberState } from '@/store/standard/BigNumberState';
import { PromiseState } from '@/store/standard/PromiseState';
import { smartGraph } from '@/lib/smartgraph';
import {helper} from "@/lib/helper"
import {ITokenList} from "@/lib/__generated/typing"

export class TokenList extends ITokenList {
  contractName = "TokenList"

  _addToken = new PromiseState({
    function: async(args:{_token: string,_min: string,_max: string }) => {
      const {_token,_min,_max} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "addToken", params: [_token,_min,_max] })
      })
    }
  })
  _addTokens = new PromiseState({
    function: async(args:{_tokens: string,_mins: string,_maxs: string }) => {
      const {_tokens,_mins,_maxs} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "addTokens", params: [_tokens,_mins,_maxs] })
      })
    }
  })
  _removeToken = new PromiseState({
    function: async(args:{_token: string }) => {
      const {_token} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "removeToken", params: [_token] })
      })
    }
  })
  _setMinAmount = new PromiseState({
    function: async(args:{_token: string,_minAmount: string }) => {
      const {_token,_minAmount} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "setMinAmount", params: [_token,_minAmount] })
      })
    }
  })
  _setMaxAmount = new PromiseState({
    function: async(args:{_token: string,_maxAmount: string }) => {
      const {_token,_maxAmount} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "setMaxAmount", params: [_token,_maxAmount] })
      })
    }
  })
  _transferOwnership = new PromiseState({
    function: async(args:{newOwner: string }) => {
      const {newOwner} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "transferOwnership", params: [newOwner] })
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
    