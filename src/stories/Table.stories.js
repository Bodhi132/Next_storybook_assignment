// Import your table component
import MyTable from '../components/Table'

// Default export containing title, component and argTypes
export default {
  title: 'MyTable',
  component: MyTable,
};

// Named export for each story
export const Default = (args) => <MyTable {...args} />;
Default.args = {
  data: {
    'Name': ['Peter John', 'Lingan', 'Adam', 'Smith', 'John Abraham'],
    'Email': ['Peter@gmail.com', 'Lin@gmail.com', 'Adam@gmail.com', 'Smith@gmail.com', 'Jhon@gmail.com'],
    'Role': ['Owner', 'Executive', 'Admin', 'Supervisor', 'Executive'],
    'Locations': [['Adam Stall', 'Coimbatore'], ['MMDA', 'Coimbatore'], ['DEO Office', 'Delhi'], ['Plot Hub', 'Coimbatore'], ['CA', 'Coimbatore']],
    'Last Active': ['Sep 13, 2023 5:51 PM', 'Today, 2023 2:11 PM', 'Sep 13, 2023 5:51 PM', 'Sep 13, 2023 5:51 PM', 'Sep 13, 2023 5:51 PM'],
    'Permissions': ['All Permissions', '3 Permissions', '6 Permissions', '5 Permissions', '2 Permissions'],
    'Status': ['Active', 'Active', 'Active', 'Active', 'Inactive'],
    'Action': []
  },
  handleEdit: (index) => {
    console.log(`Edit action for index ${index}`);
  },
  handleDelete: (index) => {
    console.log(`Delete action for index ${index}`);
  },
};
