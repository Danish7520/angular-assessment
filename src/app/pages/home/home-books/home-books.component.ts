import { Component, OnInit } from "@angular/core";
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from "@angular/animations";

import { UserService } from "src/sdk/services/user.service";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";

export const fadeAnimation = trigger("fadeAnimation", [
  transition(":enter", [
    style({ opacity: 0 }),
    animate("300ms", style({ opacity: 1 })),
  ]),
  transition(":leave", [
    style({ opacity: 1 }),
    animate("300ms", style({ opacity: 0 })),
  ]),
]);

const listAnimation = trigger("listAnimation", [
  transition("* <=> *", [
    query(
      ":enter",
      [
        style({ opacity: 0 }),
        stagger("60ms", animate("600ms ease-out", style({ opacity: 1 }))),
      ],
      { optional: true }
    ),
    query(":leave", animate("200ms", style({ opacity: 0 })), {
      optional: true,
    }),
  ]),
]);

@Component({
  selector: "app-home-books",
  templateUrl: "./home-books.component.html",
  styleUrls: ["./home-books.component.scss"],
  animations: [fadeAnimation, listAnimation],
})
export class HomeBooksComponent implements OnInit {
  constructor(private userService: UserService, private store: Store<AppState>
  ) {
    this.products = this.store.select(state => state.product);


  }
  products: Observable<any[]>;
  loading = false;
  listView = false;
  search_name;
  statusBooks = "all";
  // bookResults = [];
  skeletonItems = [1, 2, 3];
  displaybookResults = [];
  selectedType = "All";
  lastEvent;
  taxAmount = 0;
  totalAmount = 0;
  bookResults = [
    {
      "id": 1,
      "author_id": 1,
      "title": "Oliver Twist",
      "cover_image": "https://thumbs.dreamstime.com/b/reading-dummy-24204333.jpg",
      "pages": 234,
      "price": 250,

      "releaseDate": "1839",
      "isbn": "wt345"
    },
    {
      "id": 2,
      "author_id": 1,
      "title": "Hard Times",
      "cover_image": "https://thumbs.dreamstime.com/b/reading-dummy-24204333.jpg",
      "pages": 300,
      "price": 300,
      "releaseDate": "1854",
      "isbn": "jk654"
    },
    {
      "id": 3,
      "author_id": 3,
      "title": "Hamlet",
      "cover_image": "https://thumbs.dreamstime.com/b/reading-dummy-24204333.jpg",
      "pages": 160,
      "price": 450,

      "releaseDate": "1603",
      "isbn": "po789"
    },
    {
      "id": 4,
      "author_id": 2,
      "title": "IT",
      "price": 650,

      "cover_image": "https://thumbs.dreamstime.com/b/reading-dummy-24204333.jpg",
      "pages": 500,
      "releaseDate": "2017",
      "isbn": "yu098"
    },
    {
      "id": 5,
      "author_id": 4,
      "price": 210,

      "title": "Norwegian Wood",
      "cover_image": "http://t1.gstatic.com/images?q=tbn:ANd9GcQvJJDi2mzwg9v_PlmKYL31gXIz0kvAObJak7DVFPcD_mJTIyec",
      "pages": 296,
      "releaseDate": "1987",
      "isbn": "hj846"
    },
    {
      "id": 6,
      "author_id": 4,
      "price": 270,

      "title": "Kafka on the Shore",
      "cover_image": "http://t0.gstatic.com/images?q=tbn:ANd9GcRHFU_j93PPsbQGqoaZJnHH6-Emk_sIxG823SkoRTL0nvdEP41f",
      "pages": 505,
      "releaseDate": "2002",
      "isbn": "op012"
    },
    {
      "id": 7,
      "author_id": 4,
      "title": "After Dark",
      "cover_image": "http://t3.gstatic.com/images?q=tbn:ANd9GcQBMNA8A19vQpNY4bkgadsLhiRUFqBKwKAA6ANrw8VEtOiPrYQJ",
      "pages": 208,
      "price": 240,

      "releaseDate": "2004",
      "isbn": "cv456"
    },
    {
      "id": 8,
      "author_id": 4,
      "title": "1Q84",
      "price": 290,

      "cover_image": "http://t0.gstatic.com/images?q=tbn:ANd9GcTBQZSg-b2LFkLlt9fWndS1w8SONabDZBHf0dtdb3-bqcuKxduL",
      "pages": 928,
      "releaseDate": "2009",
      "isbn": "al207"
    }
  ];
  ngOnInit(): void {
    this.getAll();

    this.store.select(state => state.product)
      .subscribe(data => {
        console.log('data', data);
        this.taxAmount = 0;
        this.totalAmount = 0;

        for (let item of data) {
          this.totalAmount += item.price;
        }

        this.taxAmount = this.totalAmount * 0.15;

      });

  }
  getAll(again = false) {
    this.displaybookResults = [...this.bookResults];
  }

  search() { }

  filterChanged(e) {
    this.lastEvent = e;
    if (e === "All") {
      this.displaybookResults.length = 0;
      this.displaybookResults = [...this.bookResults];
    } else {
      this.displaybookResults.length = 0;

    }
  }
  updateList() {
    this.getAll(true);
  }
}
