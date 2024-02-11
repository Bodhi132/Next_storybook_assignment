// import { storiesOf } from '@storybook/react';
// import Camera_card from '../components/Camera_card'

// storiesOf('Camera_card', module)
//   .add('Default', () => <Camera_card />)
//   .add('With different footage', () => {
//     const differentFootage = '../assets/footage.png';
//     return <Camera_card footage={differentFootage} />;
//   })
//   .add('Inactive', () => {
//     const inactiveColor = '#FF0000';
//     return <Camera_card activeColor={inactiveColor} />;
//   });
import Camera_card from '../components/Camera_card'

export default {
  title: 'Camera_card',
  component: Camera_card,
};

const Template = (args) => <Camera_card {...args} />;

export const Default = Template.bind({});
Default.args = {
  activeColor: '#00DB4ADE',
};

export const Inactive = Template.bind({});
Inactive.args = {
  ...Default.args,
  activeColor: '#FF0000',
};

