import { Time } from "@angular/common";
import { Post } from "./post";
import { User } from "./user";

export interface Comment{
    com_id: number,
    body: string,
    author: User,
    origin: Post,
    created: string
}