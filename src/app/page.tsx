import { Suspense, use } from 'react';

interface Props {}

const Skeleton = () => {
    return <></>;
}

const ComponentUI = ({}: Props) => {
    return <></>;
}

export default function Component(props: Props) {
    return (
        <Suspense fallback={<Skeleton />}>
            <ComponentUI {...props} />
        </Suspense>
    );
}
