import Forms from '../components/forms'

export default {
  title: 'Forms',
  component: Forms,
  argTypes: {
    onSubmit: { action: 'submitted' },
  },
};

const Template = (args) => <Forms {...args} />;

export const Default = Template.bind({});

  
