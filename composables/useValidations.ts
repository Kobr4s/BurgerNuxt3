import {
  required,
  email,
  helpers,
  sameAs,
  requiredIf,
} from '@vuelidate/validators';

export const useValidations = () => {
  const { t } = useI18n();

  const mailValidator = helpers.withMessage(t('error.invalid_email'), email);
  const requiredValidator = helpers.withMessage(t('error.required'), required);

  const requiredIfValidator = (value: boolean) =>
    helpers.withMessage(t('error.required'), requiredIf(value));

  const passwordValidator = helpers.withMessage(
    t('error.invalid_password'),
    helpers.regex(/^.*(?=.{8,})(?=.*\d)((?=.*[a-z]))((?=.*[A-Z])).*$/),
  );

  const sameAsPassword = (value: any) =>
    helpers.withMessage(t('error.passwords_not_match'), sameAs(value));

  const mustBeChecked = helpers.withMessage(
    t('error.must_be_checked'),
    sameAs(true),
  );

  const arrayMinLength = helpers.withMessage(
    t('error.must_be_checked'),
    (value: any) => value.length > 0,
  );

  return {
    mailValidator,
    requiredValidator,
    requiredIfValidator,
    passwordValidator,
    sameAsPassword,
    mustBeChecked,
    arrayMinLength,
  };
};
