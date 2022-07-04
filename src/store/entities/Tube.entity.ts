// This code is generated from https://spoon.dapp.works

import BigNumber from 'bignumber.js';
import { BigNumberState } from '@/store/standard/BigNumberState';
import { PromiseState } from '@/store/standard/PromiseState';
import { smartGraph } from '@/lib/smartgraph';
import {helper} from "@/lib/helper"
import {ITube} from "@/lib/__generated/typing"

export class Tube extends ITube {
  contractName = "Tube"

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
    function: async(args:{_token: string,_amount: string,_targetTubeID: string }) => {
      const {_token,_amount,_targetTubeID} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "deposit", params: [_token,_amount,_targetTubeID] })
      })
    }
  })
  _setLord = new PromiseState({
    function: async(args:{_lord: string }) => {
      const {_lord} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "setLord", params: [_lord] })
      })
    }
  })
  _setSafe = new PromiseState({
    function: async(args:{_safe: string }) => {
      const {_safe} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "setSafe", params: [_safe] })
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
  _withdraw = new PromiseState({
    function: async(args:{_srcTubeID: string,_nonce: string,_token: string,_recipient: string,_amount: string,_signatures: string }) => {
      const {_srcTubeID,_nonce,_token,_recipient,_amount,_signatures} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "withdraw", params: [_srcTubeID,_nonce,_token,_recipient,_amount,_signatures] })
      })
    }
  })
  _depositTo = new PromiseState({
    function: async(args:{_token: string,_amount: string,_targetTubeID: string,_to: string }) => {
      const {_token,_amount,_targetTubeID,_to} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "depositTo", params: [_token,_amount,_targetTubeID,_to] })
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
  _setDestinationTube = new PromiseState({
    function: async(args:{_tubeID: string,_feeRate: string,_enabled: string }) => {
      const {_tubeID,_feeRate,_enabled} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "setDestinationTube", params: [_tubeID,_feeRate,_enabled] })
      })
    }
  })
  _setEmergencyOperator = new PromiseState({
    function: async(args:{_operator: string }) => {
      const {_operator} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "setEmergencyOperator", params: [_operator] })
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
    