import { LangStore } from './lang';
import { GodStore } from './god';
import { UserStore } from './user';
import { TubeManager } from '@/store/tubeManager';

export default class RootStore {
  lang = new LangStore();
  god = new GodStore(this);
  user = new UserStore(this);
  tubeManager = new TubeManager(this);
}
