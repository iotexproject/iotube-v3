
import { makeAutoObservable } from 'mobx';
import RootStore from '@/store/root';
import { PromiseState } from '@/store/standard/PromiseState';


export class TubeManager {
  rootStore: RootStore

  contract = {
    ERC20: {
      calls: [
      ]
    },
   Cashier: {
      calls: [
      ]
    },
   CrossChainCashierRouter: {
      calls: [
      ]
    },
   CrossChainPair: {
      calls: [
      ]
    },
   CrossChainToken: {
      calls: [
      ]
    },
   TokenList: {
      calls: [
      ]
    },
   TubeRouter: {
      calls: [
      ]
    },
   Tube: {
      calls: [
      ]
    }
  }

  get currentChain() {
    return this.currentNetwork.currentChain;
  }

  get god() {
    return this.rootStore.god;
  }

  get currentNetwork() {
    return this.god.currentNetwork;
  }

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  loadData = new PromiseState({
    function:async() =>{
      const isConnect = this.god.isConnect

    }
  })
}
