// This code is generated from https://spoon.dapp.works

import BigNumber from 'bignumber.js';
import { BigNumberState } from '@/store/standard/BigNumberState';
import { PromiseState } from '@/store/standard/PromiseState';
import { smartGraph } from '@/lib/smartgraph';
import {helper} from "@/lib/helper"
import {ITubeRouter} from "@/lib/__generated/typing"

export class TubeRouter extends ITubeRouter {
  contractName = "TubeRouter"

  _setSafe = new PromiseState({
    function: async(args:{_safe: string }) => {
      const {_safe} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "setSafe", params: [_safe] })
      })
    }
  })
  _depositTo = new PromiseState({
    function: async(args:{_crosschainToken: string,_amount: string,_tubeID: string,_recipient: string }) => {
      const {_crosschainToken,_amount,_tubeID,_recipient} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "depositTo", params: [_crosschainToken,_amount,_tubeID,_recipient] })
      })
    }
  })
  _setRelayFee = new PromiseState({
    function: async(args:{_tubeID: string,_active: string,_fee: string }) => {
      const {_tubeID,_active,_fee} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "setRelayFee", params: [_tubeID,_active,_fee] })
      })
    }
  })
  _withdrawCoin = new PromiseState({
    function: async(args:{_to: string }) => {
      const {_to} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "withdrawCoin", params: [_to] })
      })
    }
  })
  _withdrawToken = new PromiseState({
    function: async(args:{_to: string,_token: string }) => {
      const {_to,_token} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "withdrawToken", params: [_to,_token] })
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
  _depositToWithToken = new PromiseState({
    function: async(args:{_crosschainERC20Pair: string,_amount: string,_tubeID: string,_recipient: string }) => {
      const {_crosschainERC20Pair,_amount,_tubeID,_recipient} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "depositToWithToken", params: [_crosschainERC20Pair,_amount,_tubeID,_recipient] })
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
    