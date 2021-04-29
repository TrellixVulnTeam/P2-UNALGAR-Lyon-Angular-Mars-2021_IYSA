import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TimerComponent } from "./timer/timer.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { CardDeckComponent } from "./card-deck/card-deck.component";
import { HandComponent } from "./hand/hand.component";
import { Card } from "../common/card.model";
import { MoviesService } from "../common/movies.service";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"],
})
export class GameComponent implements OnInit {
  public timelineDeck: Card[] = [];

  // INJECTION DU SERVICE

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {}

  playingCard: Card;
  firstCard: Card;

  onReceiveplayingCard($event: Card) {
    this.playingCard = $event;
  }

  onReceivefirstCard($event: Card) {
    this.firstCard = $event;
  }
}
