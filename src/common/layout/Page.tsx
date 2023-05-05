import { Box, styled, Typography } from '@mui/material';
import type { PropsWithChildren, ReactNode } from 'react';
import { Suspense } from 'react';

import AppSpin from '../feedback/AppSpin';
import useSetHelp from '../feedback/useSetHelp';
import Link from '../navigation/Link';
import { H5 } from '../Typography';

export interface BreadcrumItem {
  key: string;
  href: string;
  label: string;
}

export interface PageProps {
  breadcrumbs?: BreadcrumItem[];
  title: string;
  help: ReactNode;
}

const PageDiv = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  width: '80%',
  [theme.breakpoints.up('sm')]: {
    // paddingLeft: theme.spacing(3),
    // paddingRight: theme.spacing(3),
    width: 'auto',
  },
}));

export default function Page({ breadcrumbs, children, help, title }: PropsWithChildren<PageProps>) {
  const setHelp = useSetHelp();
  setHelp(help);

  return (
    <PageDiv>
      <H5 sx={{ paddingBottom: '1rem' }}>{title}</H5>
      {breadcrumbs ? (
        breadcrumbs.map((b) => (
          // TODO:CREATE CORRECT BREADCRUMBS
          <label key={b.key}>
            <Link to={b.href}>{b.label}</Link>
          </label>
        ))
      ) : (
        <></>
      )}
      <Suspense fallback={<AppSpin.Screen />}>{children}</Suspense>
    </PageDiv>
  );
}
