

export const productColumns = [
    { field: "id", headerName: "ID", width: 30 },
    {
      field: "book",
      headerName: "Book",
      width: 50,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.bookname}
          </div>
        );
      },
    },
    {
      field: "bookname",
      headerName: "Book Name",
      width: 130,
    },
    {
      field: "author",
      headerName: "Author",
      width: 150,
    },
  
    {
      field: "category",
      headerName: "Category",
      width: 120,
    },
    {
      field: "language",
      headerName: "Language",
      width: 80,
    },
    {
      field: "description",
      headerName: "Description",
      width: 150,
    },
    {
      field: "publishinghouse",
      headerName: "Publishing House",
      width: 130,
    },
  
    {
      field: "price",
      headerName: "Price",
      width: 50,
    },
    {
      field: "page",
      headerName: "Page",
      width: 50,
    },
    {
      field: "status",
      headerName: "Status",
      width: 70,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
    
  ];
  
  //temporary data

    
   
  export const productRows = [
    {
      id: 1,
      bookname: "Snow lamsa",
      author:"MemmedEmin Resulzade", 
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      language:"az",
      description:"description",
      publishinghouse:"qanun Kitab evi",
      page:"209",
      category: "Drama",
      price: 35,
    },
    // {
    //   id: 2,
    //   username: "Jamie Lannister",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "2snow@gmail.com",
    //   status: "passive",
    //   age: 42,
    // },
    // {
    //   id: 3,
    //   username: "Lannister",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "3snow@gmail.com",
    //   status: "pending",
    //   age: 45,
    // },
    // {
    //   id: 4,
    //   username: "Stark",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "4snow@gmail.com",
    //   status: "active",
    //   age: 16,
    // },
    // {
    //   id: 5,
    //   username: "Targaryen",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "5snow@gmail.com",
    //   status: "passive",
    //   age: 22,
    // },
    // {
    //   id: 6,
    //   username: "Melisandre",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "6snow@gmail.com",
    //   status: "active",
    //   age: 15,
    // },
    // {
    //   id: 7,
    //   username: "Clifford",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "7snow@gmail.com",
    //   status: "passive",
    //   age: 44,
    // },
    // {
    //   id: 8,
    //   username: "Frances",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "8snow@gmail.com",
    //   status: "active",
    //   age: 36,
    // },
    // {
    //   id: 9,
    //   username: "Roxie",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "snow@gmail.com",
    //   status: "pending",
    //   age: 65,
    // },
    // {
    //   id: 10,
    //   username: "Roxie",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "snow@gmail.com",
    //   status: "active",
    //   age: 65,
    // },
  ];

  