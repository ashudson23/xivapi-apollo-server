import XivApi from './XivApi';

export default () => {
  return {
    xivApi: new XivApi(),
  };
};
