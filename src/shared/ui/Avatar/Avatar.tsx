import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src: string;
  alt?: string;
  size?: number;
}
export const Avatar = ({
    className, src, size, alt,
}: AvatarProps) => {
    const { t } = useTranslation();

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            style={styles}
            alt={alt ?? t('аватар')}
        />
    );
};
