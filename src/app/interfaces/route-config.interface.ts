export interface IRouteConfigItem{
    path: string,
    title: string
}

export interface IRouteConfig{
    [key: string]: IRouteConfigItem
}
