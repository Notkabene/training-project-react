import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
  className?: string;
}

// для тестирование ErrorBoundary
export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false);
    const onThrow = () => setError(true);
    const { t } = useTranslation();
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
            className={classNames('', {}, [className])}
        >
            {t('throw error')}
        </Button>
    );
};
