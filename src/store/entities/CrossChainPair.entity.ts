// This code is generated from https://spoon.dapp.works

import BigNumber from 'bignumber.js';
import { BigNumberState } from '@/store/standard/BigNumberState';
import { PromiseState } from '@/store/standard/PromiseState';
import { smartGraph } from '@/lib/smartgraph';
import {helper} from "@/lib/helper"
import {ICrossChainPair} from "@/lib/__generated/typing"

export class CrossChainPair extends ICrossChainPair {
  contractName = "CrossChainPair"

  _deposit = new PromiseState({
    function: async(args:{_amount: string }) => {
      const {_amount} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "deposit", params: [_amount] })
      })
    }
  })
  _withdraw = new PromiseState({
    function: async(args:{_amount: string }) => {
      const {_amount} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "withdraw", params: [_amount] })
      })
    }
  })
  _depositTo = new PromiseState({
    function: async(args:{_to: string,_amount: string }) => {
      const {_to,_amount} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "depositTo", params: [_to,_amount] })
      })
    }
  })
  _withdrawTo = new PromiseState({
    function: async(args:{_to: string,_amount: string }) => {
      const {_to,_amount} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "withdrawTo", params: [_to,_amount] })
      })
    }
  })
  _reduceCredit = new PromiseState({
    function: async(args:{_amount: string }) => {
      const {_amount} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "reduceCredit", params: [_amount] })
      })
    }
  })
  _adhocWithdraw = new PromiseState({
    function: async(args:{_token: string,_amount: string }) => {
      const {_token,_amount} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "adhocWithdraw", params: [_token,_amount] })
      })
    }
  })
  _increaseCredit = new PromiseState({
    function: async(args:{_amount: string }) => {
      const {_amount} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "increaseCredit", params: [_amount] })
      })
    }
  })
  _depositNoRounding = new PromiseState({
    function: async(args:{_amount: string }) => {
      const {_amount} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "depositNoRounding", params: [_amount] })
      })
    }
  })
  _renounceOwnership = new PromiseState({
    function: async(args:{ }) => {
      const {} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "renounceOwnership", params: [] })
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
  _withdrawNoRounding = new PromiseState({
    function: async(args:{_amount: string }) => {
      const {_amount} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "withdrawNoRounding", params: [_amount] })
      })
    }
  })
  _depositToNoRounding = new PromiseState({
    function: async(args:{_to: string,_amount: string }) => {
      const {_to,_amount} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "depositToNoRounding", params: [_to,_amount] })
      })
    }
  })
  _withdrawToNoRounding = new PromiseState({
    function: async(args:{_to: string,_amount: string }) => {
      const {_to,_amount} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "withdrawToNoRounding", params: [_to,_amount] })
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
    