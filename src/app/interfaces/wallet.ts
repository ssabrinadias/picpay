export interface Wallet {
    id_user: number;
    cards: {
        mask_number: string,
        token: string
    };
}
