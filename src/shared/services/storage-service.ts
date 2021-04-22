import { RepoDataRequest } from "@/shared/modeling/model-static";
export class StorageService {
  private appIdentifier = "dialecticaApp";
  private apiToken = "ApiToken";
  private searchTerm = "SearchTerm";
  private selectedRepository = "selectedRepository";

  public setApiToken(token: string): boolean {
    try {
      localStorage.setItem(
        `${this.appIdentifier}${this.apiToken}`,
        JSON.stringify(token)
      );
      return true;
    } catch (error) {
      return false;
    }
  }
  public getApiToken(): string | null {
    const stringified = localStorage.getItem(
      `${this.appIdentifier}${this.apiToken}`
    );
    if (stringified) {
      return JSON.parse(stringified, this.toCamelCase);
    } else {
      return null;
    }
  }

  public setSearchTerm(searchTerm: string): boolean {
    try {
      localStorage.setItem(
        `${this.appIdentifier}${this.searchTerm}`,
        JSON.stringify(searchTerm)
      );
      return true;
    } catch (error) {
      return false;
    }
  }

  public getSearchTerm(): string | null {
    const stringified = localStorage.getItem(
      `${this.appIdentifier}${this.searchTerm}`
    );
    if (stringified) {
      return JSON.parse(stringified, this.toCamelCase);
    } else {
      return null;
    }
  }

  public setselectedRepository(selectedRepository: RepoDataRequest): boolean {
    try {
      localStorage.setItem(
        `${this.appIdentifier}${this.selectedRepository}`,
        JSON.stringify(selectedRepository)
      );
      return true;
    } catch (error) {
      return false;
    }
  }

  public getselectedRepository(): RepoDataRequest | null {
    const stringified = localStorage.getItem(
      `${this.appIdentifier}${this.selectedRepository}`
    );
    if (stringified) {
      return JSON.parse(stringified, this.toCamelCase);
    } else {
      return null;
    }
  }

  // clears all entries in local storage
  public clear() {
    localStorage.clear();
  }

  // ensure that properties names are returned after JSON parsing as camelCase
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private toCamelCase(key: string, value: any) {
    if (value && typeof value === "object") {
      for (const k in value) {
        if (/^[A-Z]/.test(k) && Object.hasOwnProperty.call(value, k)) {
          value[k.charAt(0).toLowerCase() + k.substring(1)] = value[k];
          delete value[k];
        }
      }
    }
    return value;
  }
}
