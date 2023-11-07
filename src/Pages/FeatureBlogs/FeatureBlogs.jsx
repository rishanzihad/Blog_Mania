import 'ka-table/style.css';
import { Table } from 'ka-table';
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';
import axios from 'axios';
import { useEffect, useState } from 'react';


const FeatureBlogs = () => {
  const [blogs,setBlogs]=useState([])
  //console.log(blogs)
  const [topPosts, setTopPosts] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:3006/blogs')
      .then((res) => {
        setBlogs(res.data);
      });
  }, []);

  useEffect(() => {
   
    if (blogs.length ) {

      const validBlogs = blogs.filter(blog =>  blog.longDescription      );
      

      const sortedBlogs = validBlogs.sort((a, b) => {
        const wordCountA = a.longDescription.split(' ').length;
        const wordCountB = b.longDescription.split(' ').length;
        return wordCountB - wordCountA;
      });


      const top10Posts = sortedBlogs.slice(0, 10);
      setTopPosts(top10Posts);
    }
  }, [blogs]);
 
  const dataArray = Array(10)
  .fill(undefined)
  .map((_, index) => ({
    column1: `column:1 row:${index}`,
    column2: `column:2 row:${index}`,
    column3: `column:3 row:${index}`,
    column4: `column:4 row:${index}`,
    id: index,
  }));
    return (
        <Table
        columns={[
          { key: 'column1', title: 'Column 1', dataType: DataType.String },
          { key: 'column2', title: 'Column 2', dataType: DataType.String },
          { key: 'column3', title: 'Column 3', dataType: DataType.String },
          { key: 'column4', title: 'Column 4', dataType: DataType.String },
        ]}
        data={dataArray}
        editingMode={EditingMode.Cell}
        rowKeyField={'id'}
        sortingMode={SortingMode.Single}
      />
    );
  };

export default FeatureBlogs;