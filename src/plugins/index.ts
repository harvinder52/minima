import text from './text/index';
import image from './images/index';
import textResize from './textResize/textResize';

let plugins: any = [];

let registerPlugins = () => {
  plugins.push(text);
  plugins.push(image);
  plugins.push(textResize);

  return plugins;
}
export default registerPlugins;
