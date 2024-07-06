import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}
export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation();
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
        dispatch(profileActions.setReadonly(true));
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {readonly
                ? (
                    <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                        {t('Редактировать')}
                    </Button>
                )
                : (
                    <div className={cls.btns}>
                        <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
                            {t('Сохранить')}
                        </Button>
                        <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                            {t('Отменить')}
                        </Button>
                    </div>
                )}
        </div>
    );
};
