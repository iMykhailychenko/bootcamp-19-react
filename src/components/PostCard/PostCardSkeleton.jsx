import { Skeleton } from '../Skeleton/Skeleton';

export const PostCardSkeleton = () => {
  return (
    <div className="col-3">
      <div className="card">
        <Skeleton style={{ height: '200px' }} />

        <div className="card-body">
          <h5 className="card-title mb-4">
            <Skeleton style={{ height: '12px' }} />
          </h5>

          <div className="card-text">
            <Skeleton className="my-2" />
            <Skeleton className="my-2" />
            <Skeleton className="w-50" />
          </div>
          <div className="btn btn-primary disabled mt-3">Go somewhere</div>
        </div>
      </div>
    </div>
  );
};
