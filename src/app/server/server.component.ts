// A component is just a class of TypeScript that angular is able to instanciate
// it to create objects based on the blueprint we set up here

import { Component } from "@angular/core";

// Decorator in order to tell angular that is not a normal ts class
@Component({
  selector: "app-server",
  templateUrl: "./server.component.html"
})
export class ServerComponent{
  serverId: number = 10;
  private serverStatus: string = 'offline';

  getServerStatus(){
    return this.serverStatus;
  }
}