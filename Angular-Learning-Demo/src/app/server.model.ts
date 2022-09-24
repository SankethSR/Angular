export class ServerModel {
    public name: String;
    public content: String;
    public type: String;

    constructor(name: string, content: string, type: String) {
        this.name = name;
        this.content = content;
        this.type = type;
    }
}