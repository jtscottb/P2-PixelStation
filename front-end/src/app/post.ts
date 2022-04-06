import { Time } from "@angular/common";
import { Timestamp } from "rxjs";
import { User } from "./user";

export interface Post{
    post_id: number,
    title: string,
    poster: User,
    descript: string,
    likes: number,
    dislikes: number,
    posted: string
}