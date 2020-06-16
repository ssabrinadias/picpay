export interface RequestPayment {
    token: string;
    value: number;
    destination_user_id: string;
}
