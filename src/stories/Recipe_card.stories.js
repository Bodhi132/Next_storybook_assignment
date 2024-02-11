import Recipe_card from '../components/Recipe_card'

export default {
  title: 'Recipe_card',
  component: Recipe_card,
  argTypes: {
    onButtonClick: { action: 'clicked' },
  },
};

const Template = (args) => <Recipe_card {...args} />;

export const Default = Template.bind({});
