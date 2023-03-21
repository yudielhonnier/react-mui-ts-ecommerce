import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import type { NavigateOptions, To } from 'react-router-dom';
import { useNavigate as _useNavigate } from 'react-router-dom';

export default function useNavigate() {
  const { i18n } = useTranslation();
  const _navigate = _useNavigate();
  const navigate = useCallback(
    (to: To, options: NavigateOptions | undefined = undefined) => {
      if (typeof to === 'string') _navigate(`/${i18n.language}/${to}`, options);
      else _navigate({ ...to, pathname: `/${i18n.language}/${to.pathname}` }, options);
    },
<<<<<<< HEAD
    [_navigate, i18n.language]
=======
    [i18n]
>>>>>>> 6d42ad3 (fix: lint fix)
  );
  return navigate;
}
