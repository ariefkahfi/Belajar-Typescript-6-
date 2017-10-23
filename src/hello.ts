import * as angular from "angular";
import {FormController} from "./controllers/FormController";
import {IFController} from "./controllers/IfController";

let app = angular.module('mainApp',[]);



app.controller('formController',FormController);
app.controller('ifController',IFController);