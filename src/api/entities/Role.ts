import { Snowflake } from '../../types'

export default class Role {
  constructor (
    public id: Snowflake,
    public name: string,
    public unicodeEmoji: string | null,
    public position: number,
    public permissions: string,
    public mentionable: boolean,
    public managed: boolean,
    public icon: any,
    public hoist: boolean,
    public color: number
  ) {
  }
}