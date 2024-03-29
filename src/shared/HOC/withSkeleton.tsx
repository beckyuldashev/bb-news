import { ComponentType } from 'react';

import { Skeleton } from '..';
import { SkeletonType, DirectionType } from '../interfaces';

interface withSkeletonProps {
  isLoading: boolean;
}

function withSkeleton<P extends object>(
  Component: ComponentType<P>,
  type?: SkeletonType,
  count?: number,
  direction?: DirectionType,
) {
  return (props: withSkeletonProps & P) => {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }

    return <Component {...(restProps as P)} />;
  };
}

export default withSkeleton;
