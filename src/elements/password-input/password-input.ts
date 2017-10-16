import {
  autoinject,
  bindable,
  bindingMode
} from "aurelia-framework";
import{
  PasswordGenerator
} from "../../services/pass-generator"
import { ISites } from './../../interfaces/export';

@autoinject
export class PasswordInput {
  constructor(
    private passwordGenerator: PasswordGenerator
  ){}

  @bindable site: ISites;
  
  generatedPass: string

}