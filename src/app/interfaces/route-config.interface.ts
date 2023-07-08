export interface IRouteConfigItem{
    path: string,
    title: string
}

export interface IRouteConfig{
    main: IRouteConfigItem,
    code: IRouteConfigItem,
    art: IRouteConfigItem
}
