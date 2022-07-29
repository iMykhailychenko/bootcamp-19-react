import { useRef, useEffect, useReducer, useCallback } from 'react';

import classNames from 'classnames';
import { toast } from 'react-toastify';

import { getPostsListService } from '../../../services/posts-service';
import { PostCard } from '../PostCard/PostCard';
import { PostCardSkeleton } from '../PostCard/PostCardSkeleton';

const STATUS = {
  Idle: 'idle',
  Loading: 'loading',
  Error: 'error',
  Success: 'success',
};

const initialState = {
  isLoadMore: false,
  status: STATUS.Idle,
  posts: null,
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'post-status':
      return { ...state, status: payload };

    case 'post-data':
      return { ...state, posts: payload };

    case 'load-more-posts':
      return { ...state, posts: { ...payload, data: [...state.posts.data, ...payload.data] } };

    case 'is-loading-more':
      return { ...state, isLoadMore: payload };

    default:
      return state;
  }
};

export const PostList = ({ query }) => {
  const isFirstRender = useRef(true);

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchImages = useCallback(
    params =>
      getPostsListService(params)
        .then(data => {
          dispatch({ type: 'post-data', payload: data });
          dispatch({ type: 'post-status', payload: STATUS.Success });
        })
        .catch(() => {
          dispatch({ type: 'post-status', payload: STATUS.Error });
          toast.error('Something went wrong!');
        }),
    [],
  );

  useEffect(() => {
    dispatch({ type: 'post-status', payload: STATUS.Loading });

    fetchImages();
  }, [fetchImages]);

  useEffect(() => {
    if (!isFirstRender.current) {
      dispatch({ type: 'post-status', payload: STATUS.Loading });

      fetchImages({ search: query });
    } else {
      isFirstRender.current = false;
    }
  }, [query, fetchImages]);

  const handleLoadMore = () => {
    dispatch({ type: 'is-loading-more', payload: true });

    getPostsListService({ page: state.posts.page + 1 })
      .then(response => {
        dispatch({ type: 'load-more-posts', payload: response });
      })
      .catch(() => toast.error('Something went wrong!'))
      .finally(() => dispatch({ type: 'is-loading-more', payload: false }));
  };

  if (state.status === STATUS.Error) {
    return <></>;
  }

  if (state.status === STATUS.Loading || state.status === STATUS.Idle) {
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

  if (!state.posts?.data.length) {
    return <p>No data</p>;
  }

  return (
    <>
      <div className="container-fluid g-0 mt-5">
        <div className="row ">
          {state.posts?.data.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {state.posts.total_pages > state.posts.page && (
        <button
          type="button"
          onClick={handleLoadMore}
          className={classNames('btn btn-primary my-5', state.isLoadMore ? 'disabled' : '')}
        >
          {state.isLoadMore && <span className="spinner-grow spinner-grow-sm mr-2" />}
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
