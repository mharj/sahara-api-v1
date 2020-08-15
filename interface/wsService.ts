export const wsServiceList = ['minecraft', 'weather'] as const;
export type WsService = typeof wsServiceList[number];
