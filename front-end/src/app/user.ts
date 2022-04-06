export class User {
    user_id?: number;
    username!: string;
    password!: string;
    fName?: string;
    lName?: string;
    email?: string;
    role?: string;

    // private user_id: number;
    // private username: string;
    // private password: string;
    // private fName: string;
    // private lName: string;
    // private email: string;
    // private role: string;

    // constructor(user_id: number, username: string, password: string, fName: string, lName: string, email: string, role: string) {
    //     this.user_id = user_id;
    //     this.username = username;
    //     this.password = password;
    //     this.fName = fName;
    //     this.lName = lName;
    //     this.email = email;
    //     this.role = role;
    // }

    // getUserId(): number {
    //     return this.user_id;
    // }
    // setUserId(num: number): void {
    //     this.user_id = num;
    // }
    // getUsername(): string {
    //     return this.username;
    // }
    // setUsername(name: string): void {
    //     this.username = name;
    // }
    // getPassword(): string {
    //     return this.password;
    // }
    // setPassword(pass: string): void {
    //     this.password = pass;
    // }
    // getFirstName(): string {
    //     return this.fName;
    // }
    // setFirstName(name: string): void {
    //     this.fName = name;
    // }
    // getLastName(): string {
    //     return this.lName;
    // }
    // setLastName(name: string): void {
    //     this.lName = name;
    // }
    // getEmail(): string {
    //     return this.email;
    // }
    // setEmail(email: string): void {
    //     this.email = email;
    // }
    // getRole(): string {
    //     return this.role;
    // }
    // setRole(role: string): void {
    //     this.role = role;
    // }

    // getObject(): Object {
    //     return JSON.parse(this.user_id + this.username + this.password + this.fName + this.lName + this.email + this.role);
    // }
}