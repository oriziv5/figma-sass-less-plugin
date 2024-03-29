import { OUTPUT_FORMAT, COMMAND_TYPE, NAME_FORMAT, COLOR_MODE } from './constants';

export interface IOutputStyle {
  fills: IFillsOutput;
  textStyles: ITextStyleOutput;
}

export interface IFillsOutput {
  [key: string]: string;
}

export interface ITextStyleOutput {
  [key: string]: {};
}

export interface IMessageFormat extends Partial<MessageEvent> {
  format: OUTPUT_FORMAT;
  colorMode: COLOR_MODE;
  command: COMMAND_TYPE;
  nameFormat: NAME_FORMAT;
  count?: number; // number of styles (colors, text styles, etc) found by the plugin
  code?: any;
}
