import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { DeckService } from "src/app/common/deck.service";
import { GameService } from "src/app/common/game.service";
import { Card } from "../../common/card.model";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.css"],
})
export class TimelineComponent implements OnInit {
  //Initialisation des valeurs

  public timelineDeck: Card[] = [];
  public cardSetted: boolean = false;

  @Input() playingCard: Card;

  // DECLARATION DES SERVICES

  private deckService: DeckService;
  private gameService: GameService;

  constructor(param_service: DeckService, param_service2: GameService) {
    this.deckService = param_service;
    this.gameService = param_service2;
  }

  ngOnInit(): void {
    this.timelineDeck = this.gameService.getTimelineDeck();
    /*    this.hasGameStarted = this.gameService.hasGameStarted;
    comment faire pour que ça ne soit pas que OnInit, pour que quand hasGameStarted change dans game.service.ts, il change aussi dans timeline.ts ??*/
  }

  @Output() rightClick: EventEmitter<any> = new EventEmitter();

  addToTimeline() {
    this.gameService.addCardToTimeline(this.playingCard);
  }
}
