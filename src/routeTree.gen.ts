/* eslint-disable */
// @ts-nocheck
import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as AdminRouteImport } from './routes/admin'
import { Route as ContactoRouteImport } from './routes/contacto'
import { Route as EntregaRouteImport } from './routes/entrega'
import { Route as ForoRouteImport } from './routes/foro'
import { Route as MisionRouteImport } from './routes/mision'
import { Route as PoliticasRouteImport } from './routes/politicas'
import { Route as QuienesSomosRouteImport } from './routes/quienes-somos'
import { Route as ServiciosRouteImport } from './routes/servicios'
import { Route as UbicacionRouteImport } from './routes/ubicacion'
import { Route as VisionRouteImport } from './routes/vision'
import { Route as AdminIndexRouteImport } from './routes/admin/index'
import { Route as AdminAparienciaRouteImport } from './routes/admin/apariencia'
import { Route as AdminChatRouteImport } from './routes/admin/chat'
import { Route as AdminForoRouteImport } from './routes/admin/foro'
import { Route as AdminIdentidadRouteImport } from './routes/admin/identidad'
import { Route as AdminMenuRouteImport } from './routes/admin/menu'
import { Route as AdminPaginasRouteImport } from './routes/admin/paginas'
import { Route as AdminRedesRouteImport } from './routes/admin/redes'
import { Route as AdminSliderRouteImport } from './routes/admin/slider'
import { Route as AdminUsuariosRouteImport } from './routes/admin/usuarios'
import { Route as AdminValoracionesRouteImport } from './routes/admin/valoraciones'

const IndexRoute = IndexRouteImport.update({ id: '/', path: '/', getParentRoute: () => rootRouteImport } as any)
const AdminRoute = AdminRouteImport.update({ id: '/admin', path: '/admin', getParentRoute: () => rootRouteImport } as any)
const ContactoRoute = ContactoRouteImport.update({ id: '/contacto', path: '/contacto', getParentRoute: () => rootRouteImport } as any)
const EntregaRoute = EntregaRouteImport.update({ id: '/entrega', path: '/entrega', getParentRoute: () => rootRouteImport } as any)
const ForoRoute = ForoRouteImport.update({ id: '/foro', path: '/foro', getParentRoute: () => rootRouteImport } as any)
const MisionRoute = MisionRouteImport.update({ id: '/mision', path: '/mision', getParentRoute: () => rootRouteImport } as any)
const PoliticasRoute = PoliticasRouteImport.update({ id: '/politicas', path: '/politicas', getParentRoute: () => rootRouteImport } as any)
const QuienesSomosRoute = QuienesSomosRouteImport.update({ id: '/quienes-somos', path: '/quienes-somos', getParentRoute: () => rootRouteImport } as any)
const ServiciosRoute = ServiciosRouteImport.update({ id: '/servicios', path: '/servicios', getParentRoute: () => rootRouteImport } as any)
const UbicacionRoute = UbicacionRouteImport.update({ id: '/ubicacion', path: '/ubicacion', getParentRoute: () => rootRouteImport } as any)
const VisionRoute = VisionRouteImport.update({ id: '/vision', path: '/vision', getParentRoute: () => rootRouteImport } as any)
const AdminIndexRoute = AdminIndexRouteImport.update({ id: '/', path: '/', getParentRoute: () => AdminRoute } as any)
const AdminAparienciaRoute = AdminAparienciaRouteImport.update({ id: '/apariencia', path: '/apariencia', getParentRoute: () => AdminRoute } as any)
const AdminChatRoute = AdminChatRouteImport.update({ id: '/chat', path: '/chat', getParentRoute: () => AdminRoute } as any)
const AdminForoRoute = AdminForoRouteImport.update({ id: '/foro', path: '/foro', getParentRoute: () => AdminRoute } as any)
const AdminIdentidadRoute = AdminIdentidadRouteImport.update({ id: '/identidad', path: '/identidad', getParentRoute: () => AdminRoute } as any)
const AdminMenuRoute = AdminMenuRouteImport.update({ id: '/menu', path: '/menu', getParentRoute: () => AdminRoute } as any)
const AdminPaginasRoute = AdminPaginasRouteImport.update({ id: '/paginas', path: '/paginas', getParentRoute: () => AdminRoute } as any)
const AdminRedesRoute = AdminRedesRouteImport.update({ id: '/redes', path: '/redes', getParentRoute: () => AdminRoute } as any)
const AdminSliderRoute = AdminSliderRouteImport.update({ id: '/slider', path: '/slider', getParentRoute: () => AdminRoute } as any)
const AdminUsuariosRoute = AdminUsuariosRouteImport.update({ id: '/usuarios', path: '/usuarios', getParentRoute: () => AdminRoute } as any)
const AdminValoracionesRoute = AdminValoracionesRouteImport.update({ id: '/valoraciones', path: '/valoraciones', getParentRoute: () => AdminRoute } as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/admin': typeof AdminRouteWithChildren
  '/contacto': typeof ContactoRoute
  '/entrega': typeof EntregaRoute
  '/foro': typeof ForoRoute
  '/mision': typeof MisionRoute
  '/politicas': typeof PoliticasRoute
  '/quienes-somos': typeof QuienesSomosRoute
  '/servicios': typeof ServiciosRoute
  '/ubicacion': typeof UbicacionRoute
  '/vision': typeof VisionRoute
  '/admin/apariencia': typeof AdminAparienciaRoute
  '/admin/chat': typeof AdminChatRoute
  '/admin/foro': typeof AdminForoRoute
  '/admin/identidad': typeof AdminIdentidadRoute
  '/admin/menu': typeof AdminMenuRoute
  '/admin/paginas': typeof AdminPaginasRoute
  '/admin/redes': typeof AdminRedesRoute
  '/admin/slider': typeof AdminSliderRoute
  '/admin/usuarios': typeof AdminUsuariosRoute
  '/admin/valoraciones': typeof AdminValoracionesRoute
  '/admin/': typeof AdminIndexRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/contacto': typeof ContactoRoute
  '/entrega': typeof EntregaRoute
  '/foro': typeof ForoRoute
  '/mision': typeof MisionRoute
  '/politicas': typeof PoliticasRoute
  '/quienes-somos': typeof QuienesSomosRoute
  '/servicios': typeof ServiciosRoute
  '/ubicacion': typeof UbicacionRoute
  '/vision': typeof VisionRoute
  '/admin/apariencia': typeof AdminAparienciaRoute
  '/admin/chat': typeof AdminChatRoute
  '/admin/foro': typeof AdminForoRoute
  '/admin/identidad': typeof AdminIdentidadRoute
  '/admin/menu': typeof AdminMenuRoute
  '/admin/paginas': typeof AdminPaginasRoute
  '/admin/redes': typeof AdminRedesRoute
  '/admin/slider': typeof AdminSliderRoute
  '/admin/usuarios': typeof AdminUsuariosRoute
  '/admin/valoraciones': typeof AdminValoracionesRoute
  '/admin': typeof AdminIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/admin': typeof AdminRouteWithChildren
  '/contacto': typeof ContactoRoute
  '/entrega': typeof EntregaRoute
  '/foro': typeof ForoRoute
  '/mision': typeof MisionRoute
  '/politicas': typeof PoliticasRoute
  '/quienes-somos': typeof QuienesSomosRoute
  '/servicios': typeof ServiciosRoute
  '/ubicacion': typeof UbicacionRoute
  '/vision': typeof VisionRoute
  '/admin/apariencia': typeof AdminAparienciaRoute
  '/admin/chat': typeof AdminChatRoute
  '/admin/foro': typeof AdminForoRoute
  '/admin/identidad': typeof AdminIdentidadRoute
  '/admin/menu': typeof AdminMenuRoute
  '/admin/paginas': typeof AdminPaginasRoute
  '/admin/redes': typeof AdminRedesRoute
  '/admin/slider': typeof AdminSliderRoute
  '/admin/usuarios': typeof AdminUsuariosRoute
  '/admin/valoraciones': typeof AdminValoracionesRoute
  '/admin/': typeof AdminIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/admin' | '/contacto' | '/entrega' | '/foro' | '/mision' | '/politicas' | '/quienes-somos' | '/servicios' | '/ubicacion' | '/vision' | '/admin/apariencia' | '/admin/chat' | '/admin/foro' | '/admin/identidad' | '/admin/menu' | '/admin/paginas' | '/admin/redes' | '/admin/slider' | '/admin/usuarios' | '/admin/valoraciones' | '/admin/'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/contacto' | '/entrega' | '/foro' | '/mision' | '/politicas' | '/quienes-somos' | '/servicios' | '/ubicacion' | '/vision' | '/admin/apariencia' | '/admin/chat' | '/admin/foro' | '/admin/identidad' | '/admin/menu' | '/admin/paginas' | '/admin/redes' | '/admin/slider' | '/admin/usuarios' | '/admin/valoraciones' | '/admin'
  id: '__root__' | '/' | '/admin' | '/contacto' | '/entrega' | '/foro' | '/mision' | '/politicas' | '/quienes-somos' | '/servicios' | '/ubicacion' | '/vision' | '/admin/apariencia' | '/admin/chat' | '/admin/foro' | '/admin/identidad' | '/admin/menu' | '/admin/paginas' | '/admin/redes' | '/admin/slider' | '/admin/usuarios' | '/admin/valoraciones' | '/admin/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AdminRoute: typeof AdminRouteWithChildren
  ContactoRoute: typeof ContactoRoute
  EntregaRoute: typeof EntregaRoute
  ForoRoute: typeof ForoRoute
  MisionRoute: typeof MisionRoute
  PoliticasRoute: typeof PoliticasRoute
  QuienesSomosRoute: typeof QuienesSomosRoute
  ServiciosRoute: typeof ServiciosRoute
  UbicacionRoute: typeof UbicacionRoute
  VisionRoute: typeof VisionRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': { id: '/'; path: '/'; fullPath: '/'; preLoaderRoute: typeof IndexRouteImport; parentRoute: typeof rootRouteImport }
    '/admin': { id: '/admin'; path: '/admin'; fullPath: '/admin'; preLoaderRoute: typeof AdminRouteImport; parentRoute: typeof rootRouteImport }
    '/contacto': { id: '/contacto'; path: '/contacto'; fullPath: '/contacto'; preLoaderRoute: typeof ContactoRouteImport; parentRoute: typeof rootRouteImport }
    '/entrega': { id: '/entrega'; path: '/entrega'; fullPath: '/entrega'; preLoaderRoute: typeof EntregaRouteImport; parentRoute: typeof rootRouteImport }
    '/foro': { id: '/foro'; path: '/foro'; fullPath: '/foro'; preLoaderRoute: typeof ForoRouteImport; parentRoute: typeof rootRouteImport }
    '/mision': { id: '/mision'; path: '/mision'; fullPath: '/mision'; preLoaderRoute: typeof MisionRouteImport; parentRoute: typeof rootRouteImport }
    '/politicas': { id: '/politicas'; path: '/politicas'; fullPath: '/politicas'; preLoaderRoute: typeof PoliticasRouteImport; parentRoute: typeof rootRouteImport }
    '/quienes-somos': { id: '/quienes-somos'; path: '/quienes-somos'; fullPath: '/quienes-somos'; preLoaderRoute: typeof QuienesSomosRouteImport; parentRoute: typeof rootRouteImport }
    '/servicios': { id: '/servicios'; path: '/servicios'; fullPath: '/servicios'; preLoaderRoute: typeof ServiciosRouteImport; parentRoute: typeof rootRouteImport }
    '/ubicacion': { id: '/ubicacion'; path: '/ubicacion'; fullPath: '/ubicacion'; preLoaderRoute: typeof UbicacionRouteImport; parentRoute: typeof rootRouteImport }
    '/vision': { id: '/vision'; path: '/vision'; fullPath: '/vision'; preLoaderRoute: typeof VisionRouteImport; parentRoute: typeof rootRouteImport }
    '/admin/': { id: '/admin/'; path: '/'; fullPath: '/admin/'; preLoaderRoute: typeof AdminIndexRouteImport; parentRoute: typeof AdminRoute }
    '/admin/apariencia': { id: '/admin/apariencia'; path: '/apariencia'; fullPath: '/admin/apariencia'; preLoaderRoute: typeof AdminAparienciaRouteImport; parentRoute: typeof AdminRoute }
    '/admin/chat': { id: '/admin/chat'; path: '/chat'; fullPath: '/admin/chat'; preLoaderRoute: typeof AdminChatRouteImport; parentRoute: typeof AdminRoute }
    '/admin/foro': { id: '/admin/foro'; path: '/foro'; fullPath: '/admin/foro'; preLoaderRoute: typeof AdminForoRouteImport; parentRoute: typeof AdminRoute }
    '/admin/identidad': { id: '/admin/identidad'; path: '/identidad'; fullPath: '/admin/identidad'; preLoaderRoute: typeof AdminIdentidadRouteImport; parentRoute: typeof AdminRoute }
    '/admin/menu': { id: '/admin/menu'; path: '/menu'; fullPath: '/admin/menu'; preLoaderRoute: typeof AdminMenuRouteImport; parentRoute: typeof AdminRoute }
    '/admin/paginas': { id: '/admin/paginas'; path: '/paginas'; fullPath: '/admin/paginas'; preLoaderRoute: typeof AdminPaginasRouteImport; parentRoute: typeof AdminRoute }
    '/admin/redes': { id: '/admin/redes'; path: '/redes'; fullPath: '/admin/redes'; preLoaderRoute: typeof AdminRedesRouteImport; parentRoute: typeof AdminRoute }
    '/admin/slider': { id: '/admin/slider'; path: '/slider'; fullPath: '/admin/slider'; preLoaderRoute: typeof AdminSliderRouteImport; parentRoute: typeof AdminRoute }
    '/admin/usuarios': { id: '/admin/usuarios'; path: '/usuarios'; fullPath: '/admin/usuarios'; preLoaderRoute: typeof AdminUsuariosRouteImport; parentRoute: typeof AdminRoute }
    '/admin/valoraciones': { id: '/admin/valoraciones'; path: '/valoraciones'; fullPath: '/admin/valoraciones'; preLoaderRoute: typeof AdminValoracionesRouteImport; parentRoute: typeof AdminRoute }
  }
}

interface AdminRouteChildren {
  AdminAparienciaRoute: typeof AdminAparienciaRoute
  AdminChatRoute: typeof AdminChatRoute
  AdminForoRoute: typeof AdminForoRoute
  AdminIdentidadRoute: typeof AdminIdentidadRoute
  AdminMenuRoute: typeof AdminMenuRoute
  AdminPaginasRoute: typeof AdminPaginasRoute
  AdminRedesRoute: typeof AdminRedesRoute
  AdminSliderRoute: typeof AdminSliderRoute
  AdminUsuariosRoute: typeof AdminUsuariosRoute
  AdminValoracionesRoute: typeof AdminValoracionesRoute
  AdminIndexRoute: typeof AdminIndexRoute
}
const AdminRouteChildren: AdminRouteChildren = {
  AdminAparienciaRoute, AdminChatRoute, AdminForoRoute, AdminIdentidadRoute, AdminMenuRoute, AdminPaginasRoute, AdminRedesRoute, AdminSliderRoute, AdminUsuariosRoute, AdminValoracionesRoute, AdminIndexRoute,
}
const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren)
const rootRouteChildren: RootRouteChildren = {
  IndexRoute, AdminRoute: AdminRouteWithChildren, ContactoRoute, EntregaRoute, ForoRoute, MisionRoute, PoliticasRoute, QuienesSomosRoute, ServiciosRoute, UbicacionRoute, VisionRoute,
}
export const routeTree = rootRouteImport._addFileChildren(rootRouteChildren)._addFileTypes<FileRouteTypes>()

import type { getRouter } from './router.tsx'
import type { createStart } from '@tanstack/react-start'
declare module '@tanstack/react-start' {
  interface Register {
    ssr: true
    router: Awaited<ReturnType<typeof getRouter>>
  }
}
