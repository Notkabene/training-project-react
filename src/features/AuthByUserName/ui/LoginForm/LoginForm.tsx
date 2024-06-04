import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}
export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <form className={classNames(cls.LoginForm, {}, [className])}>
            <Input id="name" type="text" className={cls.input} placeholder={t('Имя')} />
            <Input id="password" type="text" className={cls.input} placeholder={t('Пароль')} />
            <Button theme={ButtonTheme.OUTLINE} className={cls.loginBtn}>{t('Войти')}</Button>
        </form>
    );
};
