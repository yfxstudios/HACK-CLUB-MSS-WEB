/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as StoreIndexImport } from './routes/store/index'
import { Route as PoolHeatingIndexImport } from './routes/pool-heating/index'
import { Route as PayOnlineIndexImport } from './routes/pay-online/index'
import { Route as FreeEstimateIndexImport } from './routes/free-estimate/index'
import { Route as ElectricityIndexImport } from './routes/electricity/index'
import { Route as ContactUsIndexImport } from './routes/contact-us/index'
import { Route as AboutIndexImport } from './routes/about/index'
import { Route as PayOnlineSuccessImport } from './routes/pay-online/success'
import { Route as PoolHeatingWhyHeliocolIndexImport } from './routes/pool-heating/why-heliocol/index'
import { Route as PoolHeatingPhotosIndexImport } from './routes/pool-heating/photos/index'
import { Route as PoolHeatingHowItWorksIndexImport } from './routes/pool-heating/how-it-works/index'
import { Route as ElectricityPhotosIndexImport } from './routes/electricity/photos/index'
import { Route as ElectricityIncentivesIndexImport } from './routes/electricity/incentives/index'
import { Route as ElectricityHowItWorksIndexImport } from './routes/electricity/how-it-works/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const StoreIndexRoute = StoreIndexImport.update({
  id: '/store/',
  path: '/store/',
  getParentRoute: () => rootRoute,
} as any)

const PoolHeatingIndexRoute = PoolHeatingIndexImport.update({
  id: '/pool-heating/',
  path: '/pool-heating/',
  getParentRoute: () => rootRoute,
} as any)

const PayOnlineIndexRoute = PayOnlineIndexImport.update({
  id: '/pay-online/',
  path: '/pay-online/',
  getParentRoute: () => rootRoute,
} as any)

const FreeEstimateIndexRoute = FreeEstimateIndexImport.update({
  id: '/free-estimate/',
  path: '/free-estimate/',
  getParentRoute: () => rootRoute,
} as any)

const ElectricityIndexRoute = ElectricityIndexImport.update({
  id: '/electricity/',
  path: '/electricity/',
  getParentRoute: () => rootRoute,
} as any)

const ContactUsIndexRoute = ContactUsIndexImport.update({
  id: '/contact-us/',
  path: '/contact-us/',
  getParentRoute: () => rootRoute,
} as any)

const AboutIndexRoute = AboutIndexImport.update({
  id: '/about/',
  path: '/about/',
  getParentRoute: () => rootRoute,
} as any)

const PayOnlineSuccessRoute = PayOnlineSuccessImport.update({
  id: '/pay-online/success',
  path: '/pay-online/success',
  getParentRoute: () => rootRoute,
} as any)

const PoolHeatingWhyHeliocolIndexRoute =
  PoolHeatingWhyHeliocolIndexImport.update({
    id: '/pool-heating/why-heliocol/',
    path: '/pool-heating/why-heliocol/',
    getParentRoute: () => rootRoute,
  } as any)

const PoolHeatingPhotosIndexRoute = PoolHeatingPhotosIndexImport.update({
  id: '/pool-heating/photos/',
  path: '/pool-heating/photos/',
  getParentRoute: () => rootRoute,
} as any)

const PoolHeatingHowItWorksIndexRoute = PoolHeatingHowItWorksIndexImport.update(
  {
    id: '/pool-heating/how-it-works/',
    path: '/pool-heating/how-it-works/',
    getParentRoute: () => rootRoute,
  } as any,
)

const ElectricityPhotosIndexRoute = ElectricityPhotosIndexImport.update({
  id: '/electricity/photos/',
  path: '/electricity/photos/',
  getParentRoute: () => rootRoute,
} as any)

const ElectricityIncentivesIndexRoute = ElectricityIncentivesIndexImport.update(
  {
    id: '/electricity/incentives/',
    path: '/electricity/incentives/',
    getParentRoute: () => rootRoute,
  } as any,
)

const ElectricityHowItWorksIndexRoute = ElectricityHowItWorksIndexImport.update(
  {
    id: '/electricity/how-it-works/',
    path: '/electricity/how-it-works/',
    getParentRoute: () => rootRoute,
  } as any,
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/pay-online/success': {
      id: '/pay-online/success'
      path: '/pay-online/success'
      fullPath: '/pay-online/success'
      preLoaderRoute: typeof PayOnlineSuccessImport
      parentRoute: typeof rootRoute
    }
    '/about/': {
      id: '/about/'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutIndexImport
      parentRoute: typeof rootRoute
    }
    '/contact-us/': {
      id: '/contact-us/'
      path: '/contact-us'
      fullPath: '/contact-us'
      preLoaderRoute: typeof ContactUsIndexImport
      parentRoute: typeof rootRoute
    }
    '/electricity/': {
      id: '/electricity/'
      path: '/electricity'
      fullPath: '/electricity'
      preLoaderRoute: typeof ElectricityIndexImport
      parentRoute: typeof rootRoute
    }
    '/free-estimate/': {
      id: '/free-estimate/'
      path: '/free-estimate'
      fullPath: '/free-estimate'
      preLoaderRoute: typeof FreeEstimateIndexImport
      parentRoute: typeof rootRoute
    }
    '/pay-online/': {
      id: '/pay-online/'
      path: '/pay-online'
      fullPath: '/pay-online'
      preLoaderRoute: typeof PayOnlineIndexImport
      parentRoute: typeof rootRoute
    }
    '/pool-heating/': {
      id: '/pool-heating/'
      path: '/pool-heating'
      fullPath: '/pool-heating'
      preLoaderRoute: typeof PoolHeatingIndexImport
      parentRoute: typeof rootRoute
    }
    '/store/': {
      id: '/store/'
      path: '/store'
      fullPath: '/store'
      preLoaderRoute: typeof StoreIndexImport
      parentRoute: typeof rootRoute
    }
    '/electricity/how-it-works/': {
      id: '/electricity/how-it-works/'
      path: '/electricity/how-it-works'
      fullPath: '/electricity/how-it-works'
      preLoaderRoute: typeof ElectricityHowItWorksIndexImport
      parentRoute: typeof rootRoute
    }
    '/electricity/incentives/': {
      id: '/electricity/incentives/'
      path: '/electricity/incentives'
      fullPath: '/electricity/incentives'
      preLoaderRoute: typeof ElectricityIncentivesIndexImport
      parentRoute: typeof rootRoute
    }
    '/electricity/photos/': {
      id: '/electricity/photos/'
      path: '/electricity/photos'
      fullPath: '/electricity/photos'
      preLoaderRoute: typeof ElectricityPhotosIndexImport
      parentRoute: typeof rootRoute
    }
    '/pool-heating/how-it-works/': {
      id: '/pool-heating/how-it-works/'
      path: '/pool-heating/how-it-works'
      fullPath: '/pool-heating/how-it-works'
      preLoaderRoute: typeof PoolHeatingHowItWorksIndexImport
      parentRoute: typeof rootRoute
    }
    '/pool-heating/photos/': {
      id: '/pool-heating/photos/'
      path: '/pool-heating/photos'
      fullPath: '/pool-heating/photos'
      preLoaderRoute: typeof PoolHeatingPhotosIndexImport
      parentRoute: typeof rootRoute
    }
    '/pool-heating/why-heliocol/': {
      id: '/pool-heating/why-heliocol/'
      path: '/pool-heating/why-heliocol'
      fullPath: '/pool-heating/why-heliocol'
      preLoaderRoute: typeof PoolHeatingWhyHeliocolIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/pay-online/success': typeof PayOnlineSuccessRoute
  '/about': typeof AboutIndexRoute
  '/contact-us': typeof ContactUsIndexRoute
  '/electricity': typeof ElectricityIndexRoute
  '/free-estimate': typeof FreeEstimateIndexRoute
  '/pay-online': typeof PayOnlineIndexRoute
  '/pool-heating': typeof PoolHeatingIndexRoute
  '/store': typeof StoreIndexRoute
  '/electricity/how-it-works': typeof ElectricityHowItWorksIndexRoute
  '/electricity/incentives': typeof ElectricityIncentivesIndexRoute
  '/electricity/photos': typeof ElectricityPhotosIndexRoute
  '/pool-heating/how-it-works': typeof PoolHeatingHowItWorksIndexRoute
  '/pool-heating/photos': typeof PoolHeatingPhotosIndexRoute
  '/pool-heating/why-heliocol': typeof PoolHeatingWhyHeliocolIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/pay-online/success': typeof PayOnlineSuccessRoute
  '/about': typeof AboutIndexRoute
  '/contact-us': typeof ContactUsIndexRoute
  '/electricity': typeof ElectricityIndexRoute
  '/free-estimate': typeof FreeEstimateIndexRoute
  '/pay-online': typeof PayOnlineIndexRoute
  '/pool-heating': typeof PoolHeatingIndexRoute
  '/store': typeof StoreIndexRoute
  '/electricity/how-it-works': typeof ElectricityHowItWorksIndexRoute
  '/electricity/incentives': typeof ElectricityIncentivesIndexRoute
  '/electricity/photos': typeof ElectricityPhotosIndexRoute
  '/pool-heating/how-it-works': typeof PoolHeatingHowItWorksIndexRoute
  '/pool-heating/photos': typeof PoolHeatingPhotosIndexRoute
  '/pool-heating/why-heliocol': typeof PoolHeatingWhyHeliocolIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/pay-online/success': typeof PayOnlineSuccessRoute
  '/about/': typeof AboutIndexRoute
  '/contact-us/': typeof ContactUsIndexRoute
  '/electricity/': typeof ElectricityIndexRoute
  '/free-estimate/': typeof FreeEstimateIndexRoute
  '/pay-online/': typeof PayOnlineIndexRoute
  '/pool-heating/': typeof PoolHeatingIndexRoute
  '/store/': typeof StoreIndexRoute
  '/electricity/how-it-works/': typeof ElectricityHowItWorksIndexRoute
  '/electricity/incentives/': typeof ElectricityIncentivesIndexRoute
  '/electricity/photos/': typeof ElectricityPhotosIndexRoute
  '/pool-heating/how-it-works/': typeof PoolHeatingHowItWorksIndexRoute
  '/pool-heating/photos/': typeof PoolHeatingPhotosIndexRoute
  '/pool-heating/why-heliocol/': typeof PoolHeatingWhyHeliocolIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/pay-online/success'
    | '/about'
    | '/contact-us'
    | '/electricity'
    | '/free-estimate'
    | '/pay-online'
    | '/pool-heating'
    | '/store'
    | '/electricity/how-it-works'
    | '/electricity/incentives'
    | '/electricity/photos'
    | '/pool-heating/how-it-works'
    | '/pool-heating/photos'
    | '/pool-heating/why-heliocol'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/pay-online/success'
    | '/about'
    | '/contact-us'
    | '/electricity'
    | '/free-estimate'
    | '/pay-online'
    | '/pool-heating'
    | '/store'
    | '/electricity/how-it-works'
    | '/electricity/incentives'
    | '/electricity/photos'
    | '/pool-heating/how-it-works'
    | '/pool-heating/photos'
    | '/pool-heating/why-heliocol'
  id:
    | '__root__'
    | '/'
    | '/pay-online/success'
    | '/about/'
    | '/contact-us/'
    | '/electricity/'
    | '/free-estimate/'
    | '/pay-online/'
    | '/pool-heating/'
    | '/store/'
    | '/electricity/how-it-works/'
    | '/electricity/incentives/'
    | '/electricity/photos/'
    | '/pool-heating/how-it-works/'
    | '/pool-heating/photos/'
    | '/pool-heating/why-heliocol/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  PayOnlineSuccessRoute: typeof PayOnlineSuccessRoute
  AboutIndexRoute: typeof AboutIndexRoute
  ContactUsIndexRoute: typeof ContactUsIndexRoute
  ElectricityIndexRoute: typeof ElectricityIndexRoute
  FreeEstimateIndexRoute: typeof FreeEstimateIndexRoute
  PayOnlineIndexRoute: typeof PayOnlineIndexRoute
  PoolHeatingIndexRoute: typeof PoolHeatingIndexRoute
  StoreIndexRoute: typeof StoreIndexRoute
  ElectricityHowItWorksIndexRoute: typeof ElectricityHowItWorksIndexRoute
  ElectricityIncentivesIndexRoute: typeof ElectricityIncentivesIndexRoute
  ElectricityPhotosIndexRoute: typeof ElectricityPhotosIndexRoute
  PoolHeatingHowItWorksIndexRoute: typeof PoolHeatingHowItWorksIndexRoute
  PoolHeatingPhotosIndexRoute: typeof PoolHeatingPhotosIndexRoute
  PoolHeatingWhyHeliocolIndexRoute: typeof PoolHeatingWhyHeliocolIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PayOnlineSuccessRoute: PayOnlineSuccessRoute,
  AboutIndexRoute: AboutIndexRoute,
  ContactUsIndexRoute: ContactUsIndexRoute,
  ElectricityIndexRoute: ElectricityIndexRoute,
  FreeEstimateIndexRoute: FreeEstimateIndexRoute,
  PayOnlineIndexRoute: PayOnlineIndexRoute,
  PoolHeatingIndexRoute: PoolHeatingIndexRoute,
  StoreIndexRoute: StoreIndexRoute,
  ElectricityHowItWorksIndexRoute: ElectricityHowItWorksIndexRoute,
  ElectricityIncentivesIndexRoute: ElectricityIncentivesIndexRoute,
  ElectricityPhotosIndexRoute: ElectricityPhotosIndexRoute,
  PoolHeatingHowItWorksIndexRoute: PoolHeatingHowItWorksIndexRoute,
  PoolHeatingPhotosIndexRoute: PoolHeatingPhotosIndexRoute,
  PoolHeatingWhyHeliocolIndexRoute: PoolHeatingWhyHeliocolIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/pay-online/success",
        "/about/",
        "/contact-us/",
        "/electricity/",
        "/free-estimate/",
        "/pay-online/",
        "/pool-heating/",
        "/store/",
        "/electricity/how-it-works/",
        "/electricity/incentives/",
        "/electricity/photos/",
        "/pool-heating/how-it-works/",
        "/pool-heating/photos/",
        "/pool-heating/why-heliocol/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/pay-online/success": {
      "filePath": "pay-online/success.jsx"
    },
    "/about/": {
      "filePath": "about/index.jsx"
    },
    "/contact-us/": {
      "filePath": "contact-us/index.jsx"
    },
    "/electricity/": {
      "filePath": "electricity/index.jsx"
    },
    "/free-estimate/": {
      "filePath": "free-estimate/index.jsx"
    },
    "/pay-online/": {
      "filePath": "pay-online/index.jsx"
    },
    "/pool-heating/": {
      "filePath": "pool-heating/index.jsx"
    },
    "/store/": {
      "filePath": "store/index.jsx"
    },
    "/electricity/how-it-works/": {
      "filePath": "electricity/how-it-works/index.jsx"
    },
    "/electricity/incentives/": {
      "filePath": "electricity/incentives/index.jsx"
    },
    "/electricity/photos/": {
      "filePath": "electricity/photos/index.jsx"
    },
    "/pool-heating/how-it-works/": {
      "filePath": "pool-heating/how-it-works/index.jsx"
    },
    "/pool-heating/photos/": {
      "filePath": "pool-heating/photos/index.jsx"
    },
    "/pool-heating/why-heliocol/": {
      "filePath": "pool-heating/why-heliocol/index.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
