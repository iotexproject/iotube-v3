
import React, {useEffect} from 'react';
import { useLocalObservable, observer } from 'mobx-react-lite';
import { Box } from '@chakra-ui/react';
import { useStore } from '@/store/index';


export const Page = observer(() => {
  const {god, tubeManager, lang} = useStore()
  const store = useLocalObservable(() => ({

  }));
  useEffect(() => {
    tubeManager.loadData.call()
  }, [god.updateTicker.value]);

  return (
    <Box>
    </Box>
  );
});

export default Page

