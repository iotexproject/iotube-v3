// This code is generated from https://spoon.dapp.works

import BigNumber from 'bignumber.js';
import { BigNumberState } from '@/store/standard/BigNumberState';
import { PromiseState } from '@/store/standard/PromiseState';
import { smartGraph } from '@/lib/smartgraph';
import {helper} from "@/lib/helper"
import {ICashier} from "@/lib/__generated/typing"

export class Cashier extends ICashier {
  contractName = "Cashier"

  _pause = new PromiseState({
    function: async(args:{ }) => {
      const {} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "pause", params: [] })
      })
    }
  })
  _deposit = new PromiseState({
    function: async(args:{_token: string,_amount: string }) => {
      const {_token,_amount} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "deposit", params: [_token,_amount] })
      })
    }
  })
  _unpause = new PromiseState({
    function: async(args:{ }) => {
      const {} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "unpause", params: [] })
      })
    }
  })
  _depositTo = new PromiseState({
    function: async(args:{_token: string,_to: string,_amount: string }) => {
      const {_token,_to,_amount} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "depositTo", params: [_token,_to,_amount] })
      })
    }
  })
  _setDepositFee = new PromiseState({
    function: async(args:{_fee: string }) => {
      const {_fee} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "setDepositFee", params: [_fee] })
      })
    }
  })
  _withdrawToken = new PromiseState({
    function: async(args:{_token: string }) => {
      const {_token} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "withdrawToken", params: [_token] })
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
    