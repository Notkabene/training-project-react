import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Select } from 'shared/ui/Select/Select';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstname?: (value?: string)=> void;
    onChangeLastname?: (value?: string)=> void;
    onChangeAge?: (value?: string)=> void;
    onChangeCity?: (value?: string)=> void;
    onChangeAvatar?: (value?: string)=> void;
    onChangeUsername?: (value?: string)=> void;
    onChangeCurrency?: (value: Currency)=> void;
    onChangeCountry?: (value: Country)=> void;
}
export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            {data?.avatar && <Avatar src={data?.avatar} size={120} />}
            <div className={cls.inputs}>
                <CurrencySelect readonly={readonly} value={data?.currency} onChange={onChangeCurrency} />
                <CountrySelect readonly={readonly} value={data?.country} onChange={onChangeCountry} />
                <Input
                    id="name"
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    id="lastname"
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    id="username"
                    value={data?.username}
                    placeholder={t('Ваш ник')}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    id="age"
                    value={String(data?.age)}
                    placeholder={t('Ваш возраст')}
                    onChange={onChangeAge}
                    readonly={readonly}
                    type="number"
                />
                <Input
                    id="avatar"
                    value={data?.avatar}
                    placeholder={t('Ссылка на ваш аватар')}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <Input
                    id="city"
                    value={data?.city}
                    placeholder={t('Выберите город')}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
