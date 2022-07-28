import { useRef, useEffect, useState, useContext } from 'react';

import classNames from 'classnames';
import { toast } from 'react-toastify';

import { AuthContext } from '../../../context/auth-context';
import { PostCard } from '../PostCard/PostCard';
import { PostCardSkeleton } from '../PostCard/PostCardSkeleton';

const STATUS = {
  Idle: 'idle',
  Loading: 'loading',
  Error: 'error',
  Success: 'success',
};

export const PostList = ({ query }) => {
  const isFirstRender = useRef(true);

  const [isLoadMore, setIsLoadMore] = useState(false);

  const [status, setStatus] = useState(STATUS.Idle);
  const [posts, setPosts] = useState(null);

  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    setStatus(STATUS.Loading);

    fetch('http://70.34.201.18:8080/posts?limit=4')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setStatus(STATUS.Success);
      })
      .catch(() => {
        setStatus(STATUS.Error);
        toast.error('Something went wrong!');
      });
  }, []);

  useEffect(() => {
    if (!isFirstRender.current) {
      setStatus(STATUS.Loading);
      fetch(`http://70.34.201.18:8080/posts?search=${query}&limit=4`)
        .then(res => res.json())
        .then(data => {
          setPosts(data);
          setStatus(STATUS.Success);
        })
        .catch(() => {
          setStatus(STATUS.Error);
          toast.error('Something went wrong!');
        });
    } else {
      isFirstRender.current = false;
    }
  }, [query]);

  const handleLoadMore = () => {
    setIsLoadMore(true);

    fetch(`http://70.34.201.18:8080/posts?page=${posts.page + 1}&limit=4`)
      .then(res => res.json())
      .then(response => {
        setPosts(prevState => ({ ...response, data: [...prevState.data, ...response.data] }));
      })
      .catch(() => toast.error('Something went wrong!'))
      .finally(() => setIsLoadMore(false));
  };

  if (!isAuth) {
    return 'Not authenticated';
  }

  if (status === STATUS.Error) {
    return <></>;
  }

  if (status === STATUS.Loading || status === STATUS.Idle) {
    return (
      <div className="container-fluid g-0">
        <div className="row ">
          {[...Array(4)].map((_, index) => (
            <PostCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (!posts.data.length) {
    return <p>No data</p>;
  }

  return (
    <>
      <div className="container-fluid g-0 mt-5">
        <div className="row ">
          {posts.data.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {posts.total_pages > posts.page && (
        <button
          type="button"
          onClick={handleLoadMore}
          className={classNames('btn btn-primary my-5', isLoadMore ? 'disabled' : '')}
        >
          {isLoadMore && <span className="spinner-grow spinner-grow-sm mr-2" />}
          Load more
        </button>
      )}
    </>
  );
};

// export class PostList extends Component {
//   state = {
//     posts: null,
//     status: STATUS.Idle,
//     isLoadMore: false,
//   };
//
//   componentDidMount() {
//     this.setState({ status: STATUS.Loading });
//
//     fetch('http://70.34.201.18:8080/posts')
//       .then(res => res.json())
//       .then(data => this.setState({ posts: data, status: STATUS.Success }))
//       .catch(() => {
//         this.setState({ status: STATUS.Error });
//         toast.error('Something went wrong!');
//       });
//   }
//
//   componentDidUpdate(prevProps) {
//     if (prevProps.query !== this.props.query) {
//       this.setState({ status: STATUS.Loading });
//
//       fetch(`http://70.34.201.18:8080/posts?search=${this.props.query}`)
//         .then(res => res.json())
//         .then(data => this.setState({ posts: data, status: STATUS.Success }))
//         .catch(() => {
//           this.setState({ status: STATUS.Error });
//           toast.error('Something went wrong!');
//         });
//     }
//   }
//
//   handleLoadMore = () => {
//     const { posts } = this.state;
//
//     this.setState({ isLoadMore: true });
//
//     fetch(`http://70.34.201.18:8080/posts?page=${posts.page + 1}`)
//       .then(res => res.json())
//       .then(response =>
//         this.setState(prevState => ({
//           posts: { ...response, data: [...prevState.posts.data, ...response.data] },
//         })),
//       )
//       .catch(() => toast.error('Something went wrong!'))
//       .finally(() => this.setState({ isLoadMore: false }));
//   };
//
//   render() {
//     const { posts, status, isLoadMore } = this.state;
//
//     if (status === STATUS.Error) {
//       return <></>;
//     }
//
//     if (status === STATUS.Loading || status === STATUS.Idle) {
//       return (
//         <div className="container g-0">
//           <div className="row ">
//             {[...Array(4)].map((_, index) => (
//               <PostCardSkeleton key={index} />
//             ))}
//           </div>
//         </div>
//       );
//     }
//
//     if (!posts.data.length) {
//       return <p>No data</p>;
//     }
//
//     return (
//       <>
//         <div className="container-fluid g-0 mt-5">
//           <div className="row ">
//             {posts.data.map(post => (
//               <PostCard key={post.id} post={post} />
//             ))}
//           </div>
//         </div>
//
//         {posts.total_pages > posts.page && (
//           <button
//             type="button"
//             onClick={this.handleLoadMore}
//             className={classNames('btn btn-primary my-5', isLoadMore ? 'disabled' : '')}
//           >
//             {isLoadMore && <span className="spinner-grow spinner-grow-sm mr-2" />}
//             Load more
//           </button>
//         )}
//       </>
//     );
//   }
// }
