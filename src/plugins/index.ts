import text from './text/index';
import image from './images/index';
import  transition from './transition/index'



let plugins: any = [];

let registerPlugins = () => {
  plugins.push(text);
  plugins.push(image);
  plugins.push(transition);

  return plugins;
}
export default registerPlugins;
