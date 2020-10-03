// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import InfiniteScroll from "./component/InfiniteScroll";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useState, useRef } from 'react';

const divStyle = {
  color: 'blue',
  height: '250px',
  textAlign: 'center',
  padding: '5px 10px',
  background: '#eee',
  marginTop: '15px'
};


const containerStyle = {
  maxWidth: '1280px',
  margin: '0 auto',
}

const InfiniteScroll = () => {
  
  const [postList, setPostList] = useState({
    list: [1, 2, 3, 4, 5, 6, 7]
  });
  
  const [page, setPage] = useState(1);
  
  const loader = useRef(null);
  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };
    
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current)
    }

  }, []);


  useEffect(() => {
   
    const newList = postList.list.concat([1, 1, 1, 1]);
    setPostList({
      list: newList
    })
  }, [page])

  
  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1)
    }
  }
  return (<div className="container" style={containerStyle}>
    <div className="post-list">
      {
        postList.list.map((post, index) => {
          return (<div key={index}
            className="post"
            style={divStyle}>
            <h2> {post} </h2>
          </div>)
        })
      }

     
      <div className="loading" ref={loader}>
        <h2>Load More</h2>

      </div>
    </div>
  </div>)
}

export default InfiniteScroll;









// import InfiniteScroll from 'react-infinite-scroller';




// <InfiniteScroll
//     pageStart={0}
//     loadMore={loadFunc}
//     hasMore={true || false}
//     loader={<div className="loader" key={0}>Loading ...</div>}
// >
//     {items} 
//     {/* // <-- This is the content you want to load */}




// </InfiniteScroll>

// class InfiniteScroll extends Component {

//   constructor() {
//     super();
//     this.state = {
//       photos: [],
//       loading: false,
//       page: 0,
//       prevY: 0
//     };
//   }

//   render() {
//     <InfiniteScroll
//         dataLength={this.state.items.length}
//         next={this.fetchMoreData}
//         hasMore={true}
//         loader={<h4>Loading...</h4>}
//         endMessage={
//             <p style={{ textAlign: 'center'}}>
//               <b>This is the end</b>
//             </p>
//           }
//           refreshFunction={this.refresh}
//           pullDownToRefresh
//           pullDownToRefreshThreshold={50}
//           pullDownToRefreshContent={
//             <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
//           }
//           releaseToRefreshContent={
//             <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
//           }
//         >
//           {items}
          

//       </InfiniteScroll>
//   };
// }

// export default InfiniteScroll;