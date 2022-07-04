// This code is generated from https://spoon.dapp.works

import BigNumber from 'bignumber.js';
import { BigNumberState } from '@/store/standard/BigNumberState';
import { PromiseState } from '@/store/standard/PromiseState';
import { smartGraph } from '@/lib/smartgraph';
import {helper} from "@/lib/helper"
import {ICrossChainToken} from "@/lib/__generated/typing"

export class CrossChainToken extends ICrossChainToken {
  contractName = "CrossChainToken"

  _burn = new PromiseState({
    function: async(args:{amount: string }) => {
      const {amount} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "burn", params: [amount] })
      })
    }
  })
  _mint = new PromiseState({
    function: async(args:{_to: string,_amount: string }) => {
      const {_to,_amount} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "mint", params: [_to,_amount] })
      })
    }
  })
  _approve = new PromiseState({
    function: async(args:{spender: string,amount: string }) => {
      const {spender,amount} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "approve", params: [spender,amount] })
      })
    }
  })
  _deposit = new PromiseState({
    function: async(args:{_amount: string }) => {
      const {_amount} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "deposit", params: [_amount] })
      })
    }
  })
  _burnFrom = new PromiseState({
    function: async(args:{account: string,amount: string }) => {
      const {account,amount} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "burnFrom", params: [account,amount] })
      })
    }
  })
  _transfer = new PromiseState({
    function: async(args:{recipient: string,amount: string }) => {
      const {recipient,amount} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "transfer", params: [recipient,amount] })
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
  _transferFrom = new PromiseState({
    function: async(args:{sender: string,recipient: string,amount: string }) => {
      const {sender,recipient,amount} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "transferFrom", params: [sender,recipient,amount] })
      })
    }
  })
  _decreaseAllowance = new PromiseState({
    function: async(args:{spender: string,subtractedValue: string }) => {
      const {spender,subtractedValue} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "decreaseAllowance", params: [spender,subtractedValue] })
      })
    }
  })
  _increaseAllowance = new PromiseState({
    function: async(args:{spender: string,addedValue: string }) => {
      const {spender,addedValue} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "increaseAllowance", params: [spender,addedValue] })
      })
    }
  })
  _transferMintership = new PromiseState({
    function: async(args:{_newMinter: string }) => {
      const {_newMinter} = args
      await helper.c.sendTx({
        ...this.call,
        data: smartGraph.encodeFunction({contract: this.contractName, method: "transferMintership", params: [_newMinter] })
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
    