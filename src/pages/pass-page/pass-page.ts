import {
  autoinject
} from "aurelia-framework";
import {
  PassService
} from "../../services/pass-service";
import { ISites } from './../../interfaces/sites';

@autoinject
export class PassPage {
  constructor(
    private pass: PassService
  ) { }
}
