export class Model {

  constructor(
    private _name: string,
    private _uid: string,
    private _url: string,
    private _thumbnail: string
  ) {}

  public get name(): string {
    return this._name;
  }

  public get thumbnail(): string {
    return this._thumbnail;
  }

  public get uid(): string {
    return this._uid;
  }

  public get url(): string {
    return this._url;
  }
}
