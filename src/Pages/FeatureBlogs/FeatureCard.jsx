import { Table } from 'ka-table';
import { EditingMode, SortingMode } from 'ka-table/enums';
import React from 'react';

const FeatureCard = ({ post }) => {
  // Check if 'post' is an array and contains data
  if (!Array.isArray(post) || post.length === 0) {
    return null; // Handle the case when 'post' is empty or not an array
  }

  const dataArray = post.map((post, index) => ({
    column1: `${index + 1}`,
    column2: post.title || '', // Use an empty string as a fallback if title is not available
    column3: post.ownerName || '', // Use an empty string as a fallback if ownerName is not available
    column4: <img src={post.ownerImage} alt="" />,
    id: index,
  }));

  // Custom cell renderer for 'Blog Owner Profile Picture' column
  const customCellRenderer = ({ column, rowData }) => {
    return <td>{rowData[column.key]}</td>;
  };

  return (
    <Table
      columns={[
        { key: 'column1', title: 'Serial Number', dataType: 0 }, // Use 0 as the dataType for 'String'
        { key: 'column2', title: 'Blog Title', dataType: 0 }, // Use 0 as the dataType for 'String'
        { key: 'column3', title: 'Blog Owner', dataType: 0 }, // Use 0 as the dataType for 'String'
        { key: 'column4', title: 'Blog Owner Profile Picture', cellRenderer: customCellRenderer }, // Use a custom cell renderer
      ]}
      data={dataArray}
      editingMode={EditingMode.None} // Disable editing mode
      rowKeyField={'id'}
      sortingMode={SortingMode.Single}
    />
  );
};

export default FeatureCard;
