export interface Shelter {
    shelterId: number,
    shelterName: string,
    latitude: number,
    longitude: number,
    address: string,
    shelterStatus: string,
    hidden?: string,
    maxCapacity: number
}