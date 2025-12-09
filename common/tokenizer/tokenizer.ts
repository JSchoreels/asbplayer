export interface Tokenizer {
    tokenize(track: number, text: string, scanLength: number, yomitanUrl: string): Promise<string[]>;
    lemmatize(track: number, token: string, yomitanUrl: string): Promise<string[]>;
    version(yomitanUrl: string): Promise<any>;
    resetCache(): void;
}
