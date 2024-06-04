import { useDispatch, useSelector } from 'react-redux';

export const User = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <h1 data-testid="value-title">
                {/* {counterValue} */}
            </h1>
        </div>
    );
};
