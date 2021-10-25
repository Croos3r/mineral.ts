import { ChannelResolvable, ChoiceOption, CommandArgumentType } from '../../../types'
import GuildMember from '../../entities/GuildMember'

export default class ChoiceArgument {
  public name!: string
  public description!: string
  public isRequired: boolean = false
  public type!: Exclude<keyof typeof CommandArgumentType, ['INTEGER']>
  public choices: ChoiceOption[] = []

  public setType (type: Exclude<keyof typeof CommandArgumentType, ['INTEGER']>) {
    this.type = type
    return this
  }

  public setName (value: string) {
    this.name = value.toLowerCase()
    return this
  }

  public setDescription (value: string) {
    this.description = value
    return this
  }

  public setRequired (value: boolean) {
    this.isRequired = value
    return this
  }

  public addOption (name: string, value: string | number | GuildMember | ChannelResolvable) {
    this.choices.push({ name, value })
    return this
  }
}